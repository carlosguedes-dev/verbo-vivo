import type { VerseStudyItem, PrayerRequestItem, BibleTranslationId } from '../types';

const KEYS = {
  VERSE_STUDIES: 'verbo_vivo_verse_studies_v1',
  READ_CHAPTERS: 'verbo_vivo_read_chapters_v1',
  PLAN_PROGRESS: 'verbo_vivo_plan_progress_v1',
  PRAYER_LIST: 'verbo_vivo_prayers_v1',
  THEME: 'verbo_vivo_theme_v1',
  FONT_SIZE: 'verbo_vivo_font_size_v1',
  TRANSLATION: 'verbo_vivo_translation_v1',
  LAST_LOCATION: 'verbo_vivo_last_location_v1'
};

const INITIAL_PRAYERS: PrayerRequestItem[] = [
  {
    id: 'prayer-seed-1',
    title: 'Avivamento Espiritual e Fome pela Palavra',
    category: 'Santificação',
    description: 'Senhor, desperta em meu coração um amor ardente pelas Escrituras e guarda minha mente em santidade todos os dias.',
    versePromise: 'Salmos 119:18 — Desvenda os meus olhos, para que veja as maravilhas da tua lei.',
    answered: false,
    createdAt: '2026-10-28'
  },
  {
    id: 'prayer-seed-2',
    title: 'Salvação e Paz no Lar e na Família',
    category: 'Família',
    description: 'Intercessão pela conversão e fortalecimento espiritual de todos os familiares, para que nossa casa sirva ao Senhor.',
    versePromise: 'Josué 24:15 — Eu e a minha casa serviremos ao Senhor.',
    answered: false,
    createdAt: '2026-10-28'
  },
  {
    id: 'prayer-seed-3',
    title: 'Gratidão pela Graça Salvadora em Cristo',
    category: 'Gratidão & Direção',
    description: 'Agradecimento pela obra consumada na cruz, pelo perdão dos pecados e pelo cuidado diário do Bom Pastor.',
    versePromise: 'Lamentações 3:22-23 — As misericórdias do Senhor são a causa de não sermos consumidos.',
    answered: true,
    answeredNote: 'Paz constante e fortalecimento na comunhão com Deus.',
    createdAt: '2026-10-20',
    answeredAt: '2026-10-28'
  }
];

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
      // Ignore quota errors in private mode
    }
  }

  // ─── ESTUDOS DE VERSÍCULOS (MARCA-TEXTO & NOTAS) ────────────────────
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

  // ─── PROGRESSO DE CAPÍTULOS LIDOS (1.189 CAPÍTULOS) ─────────────────
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

  // ─── PROGRESSO DOS PLANOS DE LEITURA ────────────────────────────────
  public getCompletedPlanDays(): string[] {
    return this.safeGet<string[]>(KEYS.PLAN_PROGRESS, []);
  }

  public isPlanDayCompleted(planId: string, day: number): boolean {
    return this.getCompletedPlanDays().includes(`${planId}:${day}`);
  }

  public togglePlanDay(planId: string, day: number): boolean {
    const key = `${planId}:${day}`;
    const current = this.getCompletedPlanDays();
    const exists = current.includes(key);
    const updated = exists ? current.filter((k) => k !== key) : [...current, key];
    this.safeSet(KEYS.PLAN_PROGRESS, updated);
    return !exists;
  }

  // ─── CADERNO DE ORAÇÃO ("NO SECRETO" — MATEUS 6:6) ──────────────────
  public getPrayers(): PrayerRequestItem[] {
    return this.safeGet<PrayerRequestItem[]>(KEYS.PRAYER_LIST, INITIAL_PRAYERS);
  }

  public addPrayer(item: Omit<PrayerRequestItem, 'id' | 'createdAt' | 'answered'>): PrayerRequestItem[] {
    const current = this.getPrayers();
    const newItem: PrayerRequestItem = {
      ...item,
      id: `prayer-${Date.now()}`,
      answered: false,
      createdAt: new Date().toISOString().slice(0, 10)
    };
    const updated = [newItem, ...current];
    this.safeSet(KEYS.PRAYER_LIST, updated);
    return updated;
  }

  public togglePrayerAnswered(id: string, note?: string): PrayerRequestItem[] {
    const current = this.getPrayers().map((item) => {
      if (item.id !== id) return item;
      const nextAnswered = !item.answered;
      return {
        ...item,
        answered: nextAnswered,
        answeredNote: nextAnswered ? note || item.answeredNote || 'O Senhor ouviu e respondeu segundo a Sua fiel vontade!' : undefined,
        answeredAt: nextAnswered ? new Date().toISOString().slice(0, 10) : undefined
      };
    });
    this.safeSet(KEYS.PRAYER_LIST, current);
    return current;
  }

  public deletePrayer(id: string): PrayerRequestItem[] {
    const updated = this.getPrayers().filter((item) => item.id !== id);
    this.safeSet(KEYS.PRAYER_LIST, updated);
    return updated;
  }

  // ─── PREFERÊNCIAS DE LEITURA E TEMA ─────────────────────────────────
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
