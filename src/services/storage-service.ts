import type { VerseStudyItem, BibleTranslationId, HighlightColor } from '../types';

const KEYS = {
  VERSE_STUDIES: 'verbo_vivo_verse_studies_v1',
  READ_CHAPTERS: 'verbo_vivo_read_chapters_v1',
  THEME: 'verbo_vivo_theme_v1',
  FONT_SIZE: 'verbo_vivo_font_size_v1',
  TRANSLATION: 'verbo_vivo_translation_v1',
  LAST_LOCATION: 'verbo_vivo_last_location_v1'
} as const;

const VALID_TRANSLATIONS: BibleTranslationId[] = ['acf', 'nvi', 'aa'];
const VALID_COLORS: HighlightColor[] = ['gold', 'blue', 'green', 'rose'];

export interface UserDataBackup {
  app: 'verbo-vivo';
  schemaVersion: 1;
  exportedAt: string;
  verseStudies: VerseStudyItem[];
  readChapters: string[];
  preferences: {
    theme: 'light' | 'dark';
    fontSize: number;
    translation: BibleTranslationId;
    lastLocation: { bookAbbrev: string; chapter: number };
  };
}

export interface StorageStats {
  studiesCount: number;
  notesCount: number;
  readChaptersCount: number;
  estimatedBytes: number;
}

function isValidVerseStudy(raw: unknown): raw is VerseStudyItem {
  if (!raw || typeof raw !== 'object') return false;
  const item = raw as Record<string, unknown>;
  return (
    typeof item.id === 'string' &&
    item.id.length > 0 &&
    item.id.length <= 40 &&
    typeof item.bookAbbrev === 'string' &&
    item.bookAbbrev.length > 0 &&
    item.bookAbbrev.length <= 10 &&
    typeof item.bookName === 'string' &&
    item.bookName.length > 0 &&
    item.bookName.length <= 60 &&
    typeof item.chapter === 'number' &&
    Number.isInteger(item.chapter) &&
    item.chapter >= 1 &&
    item.chapter <= 150 &&
    typeof item.verse === 'number' &&
    Number.isInteger(item.verse) &&
    item.verse >= 1 &&
    item.verse <= 180 &&
    typeof item.text === 'string' &&
    item.text.length <= 2000 &&
    typeof item.translation === 'string' &&
    VALID_TRANSLATIONS.includes(item.translation as BibleTranslationId) &&
    typeof item.color === 'string' &&
    VALID_COLORS.includes(item.color as HighlightColor) &&
    typeof item.note === 'string' &&
    item.note.length <= 4000 &&
    typeof item.createdAt === 'string' &&
    item.createdAt.length <= 32
  );
}

class StorageService {
  private lastWriteError = false;

  public hadWriteError(): boolean {
    return this.lastWriteError;
  }

  private safeGet<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }

  private safeSet<T>(key: string, value: T): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      this.lastWriteError = false;
      return true;
    } catch {
      this.lastWriteError = true;
      return false;
    }
  }

  // ─── MARCAÇÕES E NOTAS DE VERSÍCULOS ─────────────────────────────────
  public getVerseStudies(): VerseStudyItem[] {
    const raw = this.safeGet<unknown>(KEYS.VERSE_STUDIES, []);
    if (!Array.isArray(raw)) return [];
    return raw.filter(isValidVerseStudy);
  }

  public getVerseStudyById(id: string): VerseStudyItem | undefined {
    return this.getVerseStudies().find((item) => item.id === id);
  }

  public saveVerseStudy(item: VerseStudyItem): { items: VerseStudyItem[]; saved: boolean } {
    const list = this.getVerseStudies().filter((existing) => existing.id !== item.id);
    const updated = [item, ...list];
    const saved = this.safeSet(KEYS.VERSE_STUDIES, updated);
    return { items: updated, saved };
  }

  public removeVerseStudy(id: string): VerseStudyItem[] {
    const updated = this.getVerseStudies().filter((existing) => existing.id !== id);
    this.safeSet(KEYS.VERSE_STUDIES, updated);
    return updated;
  }

  // ─── PROGRESSO DE CAPÍTULOS LIDOS (1.189 CAPÍTULOS) ──────────────────
  public getReadChapters(): string[] {
    const raw = this.safeGet<unknown>(KEYS.READ_CHAPTERS, []);
    if (!Array.isArray(raw)) return [];
    return raw.filter((k): k is string => typeof k === 'string' && /^[a-z0-9_]+:\d{1,3}$/.test(k));
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
    const raw = this.safeGet<unknown>(KEYS.THEME, 'dark');
    return raw === 'light' ? 'light' : 'dark';
  }

  public setTheme(theme: 'light' | 'dark'): void {
    this.safeSet(KEYS.THEME, theme);
  }

  public getFontSize(): number {
    const raw = this.safeGet<unknown>(KEYS.FONT_SIZE, 19);
    if (typeof raw !== 'number' || !Number.isFinite(raw)) return 19;
    return Math.max(15, Math.min(27, Math.round(raw)));
  }

  public setFontSize(size: number): void {
    this.safeSet(KEYS.FONT_SIZE, Math.max(15, Math.min(27, Math.round(size))));
  }

  public getTranslation(): BibleTranslationId {
    const raw = this.safeGet<unknown>(KEYS.TRANSLATION, 'acf');
    return typeof raw === 'string' && VALID_TRANSLATIONS.includes(raw as BibleTranslationId)
      ? (raw as BibleTranslationId)
      : 'acf';
  }

  public setTranslation(translation: BibleTranslationId): void {
    if (VALID_TRANSLATIONS.includes(translation)) {
      this.safeSet(KEYS.TRANSLATION, translation);
    }
  }

  public getLastLocation(): { bookAbbrev: string; chapter: number } {
    const raw = this.safeGet<unknown>(KEYS.LAST_LOCATION, null);
    if (raw && typeof raw === 'object') {
      const loc = raw as Record<string, unknown>;
      if (
        typeof loc.bookAbbrev === 'string' &&
        /^[a-z0-9_]{1,8}$/.test(loc.bookAbbrev) &&
        typeof loc.chapter === 'number' &&
        Number.isInteger(loc.chapter) &&
        loc.chapter >= 1 &&
        loc.chapter <= 150
      ) {
        return { bookAbbrev: loc.bookAbbrev, chapter: loc.chapter };
      }
    }
    return { bookAbbrev: 'jo', chapter: 1 };
  }

  public setLastLocation(bookAbbrev: string, chapter: number): void {
    this.safeSet(KEYS.LAST_LOCATION, { bookAbbrev, chapter });
  }

  // ─── LGPD (ART. 18): RESUMO, PORTABILIDADE (BACKUP) E EXCLUSÃO ───────
  public getStorageStats(): StorageStats {
    const studies = this.getVerseStudies();
    const readChapters = this.getReadChapters();
    const notesCount = studies.filter((s) => s.note.trim().length > 0).length;
    let estimatedBytes = 0;
    try {
      for (const key of Object.values(KEYS)) {
        const val = localStorage.getItem(key);
        if (val) estimatedBytes += val.length * 2;
      }
    } catch {
      // Silencioso em modo restrito
    }
    return {
      studiesCount: studies.length,
      notesCount,
      readChaptersCount: readChapters.length,
      estimatedBytes
    };
  }

  public exportUserDataJson(): string {
    const payload: UserDataBackup = {
      app: 'verbo-vivo',
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      verseStudies: this.getVerseStudies(),
      readChapters: this.getReadChapters(),
      preferences: {
        theme: this.getTheme(),
        fontSize: this.getFontSize(),
        translation: this.getTranslation(),
        lastLocation: this.getLastLocation()
      }
    };
    return JSON.stringify(payload, null, 2);
  }

  public importUserDataJson(rawJson: string): { ok: boolean; message: string; importedStudies?: number } {
    try {
      const parsed = JSON.parse(rawJson) as Partial<UserDataBackup>;
      if (!parsed || typeof parsed !== 'object' || parsed.app !== 'verbo-vivo') {
        return { ok: false, message: 'Arquivo inválido: este JSON não é um backup do Verbo Vivo.' };
      }

      const validStudies = Array.isArray(parsed.verseStudies)
        ? parsed.verseStudies.filter(isValidVerseStudy).slice(0, 5000)
        : [];
      const validRead = Array.isArray(parsed.readChapters)
        ? parsed.readChapters.filter((k): k is string => typeof k === 'string' && /^[a-z0-9_]+:\d{1,3}$/.test(k)).slice(0, 1200)
        : [];

      const ok1 = this.safeSet(KEYS.VERSE_STUDIES, validStudies);
      const ok2 = this.safeSet(KEYS.READ_CHAPTERS, Array.from(new Set(validRead)));
      if (!ok1 || !ok2) {
        return { ok: false, message: 'Não foi possível salvar os dados no armazenamento local (espaço insuficiente).' };
      }

      if (parsed.preferences && typeof parsed.preferences === 'object') {
        if (parsed.preferences.theme === 'light' || parsed.preferences.theme === 'dark') {
          this.setTheme(parsed.preferences.theme);
        }
        if (typeof parsed.preferences.fontSize === 'number') {
          this.setFontSize(parsed.preferences.fontSize);
        }
        if (parsed.preferences.translation && VALID_TRANSLATIONS.includes(parsed.preferences.translation)) {
          this.setTranslation(parsed.preferences.translation);
        }
        if (
          parsed.preferences.lastLocation &&
          typeof parsed.preferences.lastLocation.bookAbbrev === 'string' &&
          typeof parsed.preferences.lastLocation.chapter === 'number'
        ) {
          this.setLastLocation(parsed.preferences.lastLocation.bookAbbrev, parsed.preferences.lastLocation.chapter);
        }
      }

      return {
        ok: true,
        importedStudies: validStudies.length,
        message: `Backup restaurado: ${validStudies.length} marcação(ões) e ${validRead.length} capítulo(s) lido(s).`
      };
    } catch {
      return { ok: false, message: 'Não foi possível ler o arquivo selecionado. Verifique se é um JSON válido.' };
    }
  }

  public async clearAllUserData(): Promise<void> {
    try {
      for (const key of Object.values(KEYS)) {
        localStorage.removeItem(key);
      }
      // Remove também chaves legadas de versões anteriores (v1/v2) se existirem
      const keysToDrop: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('verbo_vivo_')) {
          keysToDrop.push(k);
        }
      }
      keysToDrop.forEach((k) => localStorage.removeItem(k));
    } catch {
      // Ignora erros de permissão de storage
    }

    try {
      if ('caches' in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((ck) => caches.delete(ck)));
      }
    } catch {
      // Ignora caso Cache API não esteja disponível
    }
  }
}

export const storageService = new StorageService();
