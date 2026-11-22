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

/**
 * Referência exata a um versículo ou trecho contínuo das Escrituras.
 * O texto é sempre resolvido diretamente da tradução bíblica ativa (ACF, NVI ou AA).
 */
export interface VersePassageRef {
  bookAbbrev: string;
  chapter: number;
  verseStart: number;
  verseEnd?: number;
}

export interface ResolvedPassage {
  bookAbbrev: string;
  bookName: string;
  chapter: number;
  verseStart: number;
  verseEnd: number;
  label: string;
  text: string;
}

export type DictionaryCategory =
  | 'Vida, Ética & Sociedade'
  | 'Família & Relacionamentos'
  | 'Emoções & Lutas da Alma'
  | 'Caráter & Vida Diária'
  | 'Deus, Cristo & Salvação'
  | 'Igreja & Vida Espiritual'
  | 'Eternidade & Últimos Dias'
  | 'Personagens & Lugares';

/**
 * Verbete do Dicionário Bíblico.
 * Contém exclusivamente o tema, categoria, palavras-chave de busca e passagens bíblicas —
 * sem comentários humanos ou opiniões, permitindo que a própria Escritura responda.
 */
export interface BibleDictionaryEntry {
  id: string;
  title: string;
  category: DictionaryCategory;
  keywords: string[];
  passages: VersePassageRef[];
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
  verseEnd?: number;
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
  passages: VersePassageRef[];
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
