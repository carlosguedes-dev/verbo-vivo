export type BibleTranslationId = 'acf' | 'nvi' | 'aa';

export interface BibleTranslationMeta {
  id: BibleTranslationId;
  code: string;
  name: string;
  description: string;
}

export interface BibleBook {
  abbrev: string;
  name: string;
  testament: 'AT' | 'NT';
  chapters: string[][];
}

export type BiblicalDivision =
  | 'Pentateuco (Lei)'
  | 'Históricos (AT)'
  | 'Poéticos e Sapienciais'
  | 'Profetas Maiores'
  | 'Profetas Menores'
  | 'Evangelhos'
  | 'Histórico (NT)'
  | 'Cartas Paulinas'
  | 'Cartas Gerais'
  | 'Profético (Apocalipse)';

export interface BookMetadata {
  abbrev: string;
  name: string;
  testament: 'AT' | 'NT';
  division: BiblicalDivision;
  author: string;
  dateWritten: string;
  theme: string;
  keyVerseRef: string;
  keyVerseText: string;
  summary: string;
  christConnection: string;
}

export type QACategory =
  | 'Salvação & Graça'
  | 'Vida Cristã & Santificação'
  | 'Doutrina & Teologia'
  | 'Apologética & Dificuldades Bíblicas'
  | 'Família, Jovens & Vocação'
  | 'Escatologia & Eternidade';

export interface ScriptureReference {
  bookAbbrev: string;
  chapter: number;
  verse: number;
  label: string;
  quote: string;
}

export interface QuestionAnswer {
  id: string;
  category: QACategory;
  question: string;
  shortAnswer: string;
  detailedExplanation: string[];
  practicalApplication: string;
  keywords: string[];
  references: ScriptureReference[];
}

export interface SpiritualRefuge {
  id: string;
  stateTitle: string;
  subtitle: string;
  icon: string;
  pastoralWord: string;
  guidedPrayer: string;
  verses: ScriptureReference[];
}

export interface DevotionalItem {
  id: string;
  title: string;
  theme: string;
  baseVerse: ScriptureReference;
  historicalContext: string;
  reflection: string[];
  practicalChallenge: string;
  prayer: string;
}

export interface ReadingPlanDay {
  day: number;
  title: string;
  readings: {
    bookAbbrev: string;
    chapter: number;
    label: string;
  }[];
  focus: string;
}

export interface ReadingPlan {
  id: string;
  title: string;
  subtitle: string;
  durationLabel: string;
  description: string;
  days: ReadingPlanDay[];
}

export interface SolaItem {
  latin: string;
  portuguese: string;
  summary: string;
  explanation: string;
  keyVerse: ScriptureReference;
}

export interface TheologicalTerm {
  term: string;
  origin: string;
  category: string;
  definition: string;
  biblicalBasis: ScriptureReference;
}

export interface HymnItem {
  number: number;
  title: string;
  author: string;
  theme: string;
  inspirationVerse: ScriptureReference;
  stanzas: string[];
  chorus?: string;
}

export type HighlightColor = 'gold' | 'blue' | 'green' | 'rose';

export interface VerseStudyItem {
  id: string; // e.g. "jo:3:16"
  bookAbbrev: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
  translation: BibleTranslationId;
  color: HighlightColor;
  note: string;
  createdAt: string;
}

export interface PrayerRequestItem {
  id: string;
  title: string;
  category: 'Família' | 'Igreja & Missões' | 'Saúde & Consolo' | 'Santificação' | 'Conversão' | 'Gratidão & Direção';
  description: string;
  versePromise: string;
  answered: boolean;
  answeredNote?: string;
  createdAt: string;
  answeredAt?: string;
}
