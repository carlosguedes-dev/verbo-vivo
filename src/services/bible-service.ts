import type { BibleBook, BibleTranslationId, ResolvedPassage, VersePassageRef } from '../types';
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

const BOOK_ALIASES: Record<string, string> = {
  genesis: 'gn',
  gn: 'gn',
  exodo: 'ex',
  ex: 'ex',
  levitico: 'lv',
  lv: 'lv',
  numeros: 'nm',
  nm: 'nm',
  deuteronomio: 'dt',
  dt: 'dt',
  josue: 'js',
  js: 'js',
  juizes: 'jz',
  jz: 'jz',
  rute: 'rt',
  rt: 'rt',
  '1samuel': '1sm',
  '1sm': '1sm',
  '2samuel': '2sm',
  '2sm': '2sm',
  '1reis': '1rs',
  '1rs': '1rs',
  '2reis': '2rs',
  '2rs': '2rs',
  '1cronicas': '1cr',
  '1cr': '1cr',
  '2cronicas': '2cr',
  '2cr': '2cr',
  esdras: 'ed',
  ed: 'ed',
  neemias: 'ne',
  ne: 'ne',
  ester: 'et',
  et: 'et',
  salmo: 'sl',
  salmos: 'sl',
  sl: 'sl',
  proverbio: 'pv',
  proverbios: 'pv',
  pv: 'pv',
  eclesiastes: 'ec',
  ec: 'ec',
  canticos: 'ct',
  cantares: 'ct',
  canticodoscanticos: 'ct',
  canticosdoscanticos: 'ct',
  ct: 'ct',
  isaias: 'is',
  is: 'is',
  jeremias: 'jr',
  jr: 'jr',
  lamentacoes: 'lm',
  lm: 'lm',
  ezequiel: 'ez',
  ez: 'ez',
  daniel: 'dn',
  dn: 'dn',
  oseias: 'os',
  os: 'os',
  joel: 'jl',
  jl: 'jl',
  amos: 'am',
  am: 'am',
  obadias: 'ob',
  ob: 'ob',
  jonas: 'jn',
  jn: 'jn',
  miqueias: 'mq',
  mq: 'mq',
  naum: 'na',
  na: 'na',
  habacuque: 'hc',
  hc: 'hc',
  sofonias: 'sf',
  sf: 'sf',
  ageu: 'ag',
  ag: 'ag',
  zacarias: 'zc',
  zc: 'zc',
  malaquias: 'ml',
  ml: 'ml',
  mateus: 'mt',
  mt: 'mt',
  marcos: 'mc',
  mc: 'mc',
  lucas: 'lc',
  lc: 'lc',
  joao: 'jo',
  jo: 'jo',
  atos: 'at',
  atosdosapostolos: 'at',
  at: 'at',
  romanos: 'rm',
  rm: 'rm',
  '1corintios': '1co',
  '1cor': '1co',
  '1co': '1co',
  '2corintios': '2co',
  '2cor': '2co',
  '2co': '2co',
  galatas: 'gl',
  gl: 'gl',
  efesios: 'ef',
  ef: 'ef',
  filipenses: 'fp',
  fp: 'fp',
  colossenses: 'cl',
  cl: 'cl',
  '1tessalonicenses': '1ts',
  '1ts': '1ts',
  '2tessalonicenses': '2ts',
  '2ts': '2ts',
  '1timoteo': '1tm',
  '1tm': '1tm',
  '2timoteo': '2tm',
  '2tm': '2tm',
  tito: 'tt',
  tt: 'tt',
  filemom: 'fm',
  filemon: 'fm',
  fm: 'fm',
  hebreus: 'hb',
  hb: 'hb',
  tiago: 'tg',
  tg: 'tg',
  '1pedro': '1pe',
  '1pe': '1pe',
  '2pedro': '2pe',
  '2pe': '2pe',
  '1joao': '1jo',
  '1jo': '1jo',
  '2joao': '2jo',
  '2jo': '2jo',
  '3joao': '3jo',
  '3jo': '3jo',
  judas: 'jd',
  jd: 'jd',
  apocalipse: 'ap',
  ap: 'ap'
};

class BibleService {
  private cache: Map<BibleTranslationId, BibleBook[]> = new Map();
  private bookMaps: Map<BibleTranslationId, Map<string, BibleBook>> = new Map();
  private loadingPromises: Map<BibleTranslationId, Promise<BibleBook[]>> = new Map();

  private setCache(translation: BibleTranslationId, books: BibleBook[]): void {
    this.cache.set(translation, books);
    const map = new Map<string, BibleBook>();
    for (const book of books) {
      map.set(book.abbrev, book);
    }
    this.bookMaps.set(translation, map);
  }

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
            this.setCache(translation, nativeBooks);
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
        this.loadingPromises.delete(translation);
        throw new Error(`Falha ao carregar tradução ${translation.toUpperCase()} (HTTP ${res.status})`);
      }
      const books = (await res.json()) as BibleBook[];
      this.setCache(translation, books);
      this.loadingPromises.delete(translation);
      return books;
    };

    const promise = loadFn();
    this.loadingPromises.set(translation, promise);
    return promise;
  }

  public async getBook(translation: BibleTranslationId, abbrev: string): Promise<BibleBook | undefined> {
    await this.loadTranslation(translation);
    return this.bookMaps.get(translation)?.get(abbrev);
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

  /**
   * Resolve uma passagem (1 ou vários versículos consecutivos) diretamente da tradução ativa.
   * Garante 100% de fidelidade ao texto bíblico carregado.
   */
  public async resolvePassage(
    translation: BibleTranslationId,
    ref: VersePassageRef
  ): Promise<ResolvedPassage | null> {
    const book = await this.getBook(translation, ref.bookAbbrev);
    if (!book) return null;

    const chapterIdx = ref.chapter - 1;
    if (chapterIdx < 0 || chapterIdx >= book.chapters.length) return null;

    const chapterVerses = book.chapters[chapterIdx];
    if (!chapterVerses || chapterVerses.length === 0) return null;

    const start = Math.max(1, Math.min(ref.verseStart, chapterVerses.length));
    const end = ref.verseEnd ? Math.max(start, Math.min(ref.verseEnd, chapterVerses.length)) : start;

    const parts: string[] = [];
    for (let v = start; v <= end; v++) {
      const txt = chapterVerses[v - 1];
      if (txt) {
        parts.push(txt.trim());
      }
    }

    if (parts.length === 0) return null;

    const label =
      end > start
        ? `${book.name} ${ref.chapter}:${start}-${end}`
        : `${book.name} ${ref.chapter}:${start}`;

    return {
      bookAbbrev: book.abbrev,
      bookName: book.name,
      chapter: ref.chapter,
      verseStart: start,
      verseEnd: end,
      label,
      text: parts.join(' ')
    };
  }

  public async resolvePassages(
    translation: BibleTranslationId,
    refs: VersePassageRef[]
  ): Promise<ResolvedPassage[]> {
    await this.loadTranslation(translation);
    const out: ResolvedPassage[] = [];
    for (const ref of refs) {
      const resolved = await this.resolvePassage(translation, ref);
      if (resolved) out.push(resolved);
    }
    return out;
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
   * Interpreta referências bíblicas digitadas como:
   * "João 3:16", "Sl 23:1-6", "Jó 1:1", "1 Coríntios 13:4-7", "Atos dos Apóstolos 2"
   */
  public parseReferenceQuery(
    query: string,
    books: BibleBook[]
  ): { bookAbbrev: string; chapter: number; verse?: number; verseEnd?: number } | null {
    const trimmedRaw = query.trim();
    const rawMatch = trimmedRaw.match(/^([1-3]?\s*[A-Za-zÀ-ÿ\s]+?)\s+(\d+)(?::(\d+)(?:\s*[-–]\s*(\d+))?)?$/);
    if (!rawMatch) return null;

    const rawBookPart = rawMatch[1].trim();
    const chapter = parseInt(rawMatch[2], 10);
    const verse = rawMatch[3] ? parseInt(rawMatch[3], 10) : undefined;
    const verseEnd = rawMatch[4] ? parseInt(rawMatch[4], 10) : undefined;

    // Distingue explicitamente "Jó" (com acento) de "Jo"/"João"
    let matchedAbbrev: string | undefined;
    if (/^j[óÓ]$/i.test(rawBookPart)) {
      matchedAbbrev = 'jo_at';
    } else {
      const bookPart = this.normalizeText(rawBookPart).replace(/\s+/g, '');
      matchedAbbrev = BOOK_ALIASES[bookPart];

      if (!matchedAbbrev) {
        // Prioriza correspondência exata ou prefixo (ignorando jo_at se usuário digitou "jo")
        const found = books.find((b) => {
          const normName = this.normalizeText(b.name).replace(/\s+/g, '');
          const normAbbrev = this.normalizeText(b.abbrev);
          if (bookPart === 'jo' && b.abbrev === 'jo_at') return false;
          return normName === bookPart || normAbbrev === bookPart || normName.startsWith(bookPart);
        });
        matchedAbbrev = found?.abbrev;
      }
    }

    if (!matchedAbbrev) return null;
    const targetBook = books.find((b) => b.abbrev === matchedAbbrev);
    if (!targetBook) return null;

    if (chapter >= 1 && chapter <= targetBook.chapters.length) {
      return { bookAbbrev: targetBook.abbrev, chapter, verse, verseEnd };
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

    // 1. Verifica se é uma referência direta (ex: "João 3:16", "Sl 23:1-4", "Jó 1:1")
    const refMatch = this.parseReferenceQuery(rawQuery, books);
    if (refMatch) {
      const targetBook = books.find((b) => b.abbrev === refMatch.bookAbbrev);
      if (targetBook) {
        const chapterVerses = targetBook.chapters[refMatch.chapter - 1] || [];
        if (refMatch.verse && chapterVerses[refMatch.verse - 1]) {
          const start = refMatch.verse;
          const end = refMatch.verseEnd
            ? Math.min(Math.max(start, refMatch.verseEnd), chapterVerses.length)
            : start;
          const hits: BibleSearchResult[] = [];
          for (let v = start; v <= end; v++) {
            hits.push({
              bookAbbrev: targetBook.abbrev,
              bookName: targetBook.name,
              testament: targetBook.testament,
              chapter: refMatch.chapter,
              verse: v,
              text: chapterVerses[v - 1]
            });
          }
          return hits;
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
    if (tokens.length === 0) return [];
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
