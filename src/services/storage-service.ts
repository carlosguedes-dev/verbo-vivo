import type { VerseStudyItem, BibleTranslationId } from '../types';

const KEYS = {
  VERSE_STUDIES: 'verbo_vivo_verse_studies_v1',
  READ_CHAPTERS: 'verbo_vivo_read_chapters_v1',
  THEME: 'verbo_vivo_theme_v1',
  FONT_SIZE: 'verbo_vivo_font_size_v1',
  TRANSLATION: 'verbo_vivo_translation_v1',
  LAST_LOCATION: 'verbo_vivo_last_location_v1'
};

class StorageService {
  private safeGet<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }

  private safeSet<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignora erros de cota em modo privado
    }
  }

  // ─── MARCAÇÕES E NOTAS DE VERSÍCULOS ─────────────────────────────────
  public getVerseStudies(): VerseStudyItem[] {
    return this.safeGet<VerseStudyItem[]>(KEYS.VERSE_STUDIES, []);
  }

  public getVerseStudyById(id: string): VerseStudyItem | undefined {
    return this.getVerseStudies().find((item) => item.id === id);
  }

  public saveVerseStudy(item: VerseStudyItem): VerseStudyItem[] {
    const list = this.getVerseStudies().filter((existing) => existing.id !== item.id);
    const updated = [item, ...list];
    this.safeSet(KEYS.VERSE_STUDIES, updated);
    return updated;
  }

  public removeVerseStudy(id: string): VerseStudyItem[] {
    const updated = this.getVerseStudies().filter((existing) => existing.id !== id);
    this.safeSet(KEYS.VERSE_STUDIES, updated);
    return updated;
  }

  // ─── PROGRESSO DE CAPÍTULOS LIDOS (1.189 CAPÍTULOS) ──────────────────
  public getReadChapters(): string[] {
    return this.safeGet<string[]>(KEYS.READ_CHAPTERS, []);
  }

  public isChapterRead(bookAbbrev: string, chapter: number): boolean {
    const key = `${bookAbbrev}:${chapter}`;
    return this.getReadChapters().includes(key);
  }

  public toggleChapterRead(bookAbbrev: string, chapter: number): { read: boolean; totalRead: number } {
    const key = `${bookAbbrev}:${chapter}`;
    const current = this.getReadChapters();
    const exists = current.includes(key);
    const updated = exists ? current.filter((k) => k !== key) : [...current, key];
    this.safeSet(KEYS.READ_CHAPTERS, updated);
    return { read: !exists, totalRead: updated.length };
  }

  // ─── PREFERÊNCIAS DE LEITURA E TEMA ──────────────────────────────────
  public getTheme(): 'light' | 'dark' {
    return this.safeGet<'light' | 'dark'>(KEYS.THEME, 'dark');
  }

  public setTheme(theme: 'light' | 'dark'): void {
    this.safeSet(KEYS.THEME, theme);
  }

  public getFontSize(): number {
    return this.safeGet<number>(KEYS.FONT_SIZE, 19);
  }

  public setFontSize(size: number): void {
    this.safeSet(KEYS.FONT_SIZE, size);
  }

  public getTranslation(): BibleTranslationId {
    return this.safeGet<BibleTranslationId>(KEYS.TRANSLATION, 'acf');
  }

  public setTranslation(translation: BibleTranslationId): void {
    this.safeSet(KEYS.TRANSLATION, translation);
  }

  public getLastLocation(): { bookAbbrev: string; chapter: number } {
    return this.safeGet<{ bookAbbrev: string; chapter: number }>(KEYS.LAST_LOCATION, {
      bookAbbrev: 'jo',
      chapter: 1
    });
  }

  public setLastLocation(bookAbbrev: string, chapter: number): void {
    this.safeSet(KEYS.LAST_LOCATION, { bookAbbrev, chapter });
  }
}

export const storageService = new StorageService();
