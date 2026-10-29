import type { BibleBook, BibleTranslationId } from '../types';
import { BOOKS_METADATA, BIBLE_TRANSLATIONS } from '../data/books-metadata';

declare global {
  interface Window {
    verboVivoNative?: {
      platform?: 'windows' | 'android' | 'ios';
      version?: string;
      readBibleJson?: (translation: string) => Promise<BibleBook[]> | BibleBook[];
    };
  }
}

export interface BibleSearchResult {
  bookAbbrev: string;
  bookName: string;
  testament: 'AT' | 'NT';
  chapter: number;
  verse: number;
  text: string;
}

export interface VerseComparisonItem {
  translationId: BibleTranslationId;
  code: string;
  name: string;
  text: string;
}

class BibleService {
  private cache: Map<BibleTranslationId, BibleBook[]> = new Map();
  private loadingPromises: Map<BibleTranslationId, Promise<BibleBook[]>> = new Map();

  public async loadTranslation(translation: BibleTranslationId): Promise<BibleBook[]> {
    const cached = this.cache.get(translation);
    if (cached) {
      return cached;
    }

    const existingPromise = this.loadingPromises.get(translation);
    if (existingPromise) {
      return existingPromise;
    }

    const loadFn = async (): Promise<BibleBook[]> => {
      if (window.verboVivoNative?.readBibleJson) {
        try {
          const nativeBooks = await window.verboVivoNative.readBibleJson(translation);
          if (Array.isArray(nativeBooks) && nativeBooks.length === 66) {
            this.cache.set(translation, nativeBooks);
            this.loadingPromises.delete(translation);
            return nativeBooks;
          }
        } catch {
          // Fallback para fetch padrão
        }
      }

      const baseUrl = import.meta.env.BASE_URL || './';
      const url = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}data/${translation}.json`;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Falha ao carregar tradução ${translation.toUpperCase()} (HTTP ${res.status})`);
      }
      const books = (await res.json()) as BibleBook[];
      this.cache.set(translation, books);
      this.loadingPromises.delete(translation);
      return books;
    };

    const promise = loadFn();
    this.loadingPromises.set(translation, promise);
    return promise;
  }

  public async getBook(translation: BibleTranslationId, abbrev: string): Promise<BibleBook | undefined> {
    const books = await this.loadTranslation(translation);
    return books.find((b) => b.abbrev === abbrev);
  }

  public async getChapterVerses(
    translation: BibleTranslationId,
    abbrev: string,
    chapterNumber: number
  ): Promise<string[]> {
    const book = await this.getBook(translation, abbrev);
    if (!book) return [];
    const index = Math.max(0, Math.min(book.chapters.length - 1, chapterNumber - 1));
    return book.chapters[index] || [];
  }

  public async compareVerseAcrossTranslations(
    abbrev: string,
    chapterNumber: number,
    verseNumber: number
  ): Promise<VerseComparisonItem[]> {
    const results: VerseComparisonItem[] = [];
    for (const meta of BIBLE_TRANSLATIONS) {
      const verses = await this.getChapterVerses(meta.id, abbrev, chapterNumber);
      const text = verses[verseNumber - 1] || '';
      results.push({
        translationId: meta.id,
        code: meta.code,
        name: meta.name,
        text
      });
    }
    return results;
  }

  public normalizeText(str: string): string {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  /**
   * Interpreta referências bíblicas digitadas como "João 3:16", "Sl 23", "Rm 8:28", "1 Coríntios 13"
   */
  public parseReferenceQuery(
    query: string,
    books: BibleBook[]
  ): { bookAbbrev: string; chapter: number; verse?: number } | null {
    const cleaned = this.normalizeText(query);
    const match = cleaned.match(/^([1-3]?\s*[a-zç]+)\s+(\d+)(?::(\d+))?$/);
    if (!match) return null;

    const bookPart = match[1].replace(/\s+/g, '');
    const chapter = parseInt(match[2], 10);
    const verse = match[3] ? parseInt(match[3], 10) : undefined;

    for (const book of books) {
      const normName = this.normalizeText(book.name).replace(/\s+/g, '');
      const normAbbrev = this.normalizeText(book.abbrev).replace('_at', '');
      if (normName === bookPart || normAbbrev === bookPart || normName.startsWith(bookPart)) {
        if (chapter >= 1 && chapter <= book.chapters.length) {
          return { bookAbbrev: book.abbrev, chapter, verse };
        }
      }
    }
    return null;
  }

  public async searchBible(
    translation: BibleTranslationId,
    rawQuery: string,
    testamentFilter: 'ALL' | 'AT' | 'NT' = 'ALL',
    limit = 60
  ): Promise<BibleSearchResult[]> {
    const books = await this.loadTranslation(translation);
    const q = this.normalizeText(rawQuery);
    if (!q || q.length < 2) return [];

    // 1. Verifica se é uma referência direta (ex: "João 3:16" ou "Salmos 23")
    const refMatch = this.parseReferenceQuery(rawQuery, books);
    if (refMatch) {
      const targetBook = books.find((b) => b.abbrev === refMatch.bookAbbrev);
      if (targetBook) {
        const chapterVerses = targetBook.chapters[refMatch.chapter - 1] || [];
        if (refMatch.verse && chapterVerses[refMatch.verse - 1]) {
          return [
            {
              bookAbbrev: targetBook.abbrev,
              bookName: targetBook.name,
              testament: targetBook.testament,
              chapter: refMatch.chapter,
              verse: refMatch.verse,
              text: chapterVerses[refMatch.verse - 1]
            }
          ];
        }
        return chapterVerses.slice(0, limit).map((text, idx) => ({
          bookAbbrev: targetBook.abbrev,
          bookName: targetBook.name,
          testament: targetBook.testament,
          chapter: refMatch.chapter,
          verse: idx + 1,
          text
        }));
      }
    }

    // 2. Busca textual nos 31.100+ versículos
    const tokens = q.split(/\s+/).filter((t) => t.length >= 2);
    const results: BibleSearchResult[] = [];

    for (const book of books) {
      if (testamentFilter !== 'ALL' && book.testament !== testamentFilter) {
        continue;
      }

      for (let cIdx = 0; cIdx < book.chapters.length; cIdx++) {
        const verses = book.chapters[cIdx];
        for (let vIdx = 0; vIdx < verses.length; vIdx++) {
          const verseText = verses[vIdx];
          const normVerse = this.normalizeText(verseText);

          const matchesAll = tokens.every((tk) => normVerse.includes(tk));
          if (matchesAll) {
            results.push({
              bookAbbrev: book.abbrev,
              bookName: book.name,
              testament: book.testament,
              chapter: cIdx + 1,
              verse: vIdx + 1,
              text: verseText
            });
            if (results.length >= limit) {
              return results;
            }
          }
        }
      }
    }

    return results;
  }

  public getBookMetadata(abbrev: string) {
    return BOOKS_METADATA[abbrev];
  }
}

export const bibleService = new BibleService();
