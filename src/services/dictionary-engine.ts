import type { BibleDictionaryEntry, DictionaryCategory } from '../types';
import { DICIONARIO_BIBLICO_DATA } from '../data/dicionario-biblico';

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export function getEntryInitialLetter(title: string): string {
  const clean = normalize(title);
  const first = clean.charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : '#';
}

const SORTED_DICTIONARY: BibleDictionaryEntry[] = [...DICIONARIO_BIBLICO_DATA].sort((a, b) =>
  a.title.localeCompare(b.title, 'pt-BR')
);

export function getSortedDictionaryEntries(): BibleDictionaryEntry[] {
  return SORTED_DICTIONARY;
}

export function getAvailableLetters(entries: BibleDictionaryEntry[] = SORTED_DICTIONARY): Set<string> {
  const set = new Set<string>();
  for (const entry of entries) {
    set.add(getEntryInitialLetter(entry.title));
  }
  return set;
}

export function searchDictionary(
  query: string,
  categoryFilter: DictionaryCategory | 'TODAS' = 'TODAS',
  letterFilter: string | 'TODAS' = 'TODAS'
): BibleDictionaryEntry[] {
  let pool = SORTED_DICTIONARY;

  if (categoryFilter !== 'TODAS') {
    pool = pool.filter((item) => item.category === categoryFilter);
  }

  if (letterFilter !== 'TODAS') {
    pool = pool.filter((item) => getEntryInitialLetter(item.title) === letterFilter);
  }

  const cleanQuery = normalize(query);
  if (!cleanQuery) {
    return pool;
  }

  const stopWords = new Set([
    'o',
    'a',
    'os',
    'as',
    'que',
    'oq',
    'biblia',
    'diz',
    'fala',
    'sobre',
    'de',
    'da',
    'do',
    'das',
    'dos',
    'em',
    'no',
    'na',
    'um',
    'uma',
    'para',
    'com',
    'por',
    'qual',
    'como',
    'e',
    'ou'
  ]);

  const rawTokens = cleanQuery
    .split(/\s+/)
    .map((t) => t.replace(/[^a-z0-9]/g, ''))
    .filter((t) => t.length >= 2);

  const meaningfulTokens = rawTokens.filter((t) => !stopWords.has(t));
  const tokens = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;

  if (tokens.length === 0) {
    return pool;
  }

  const scored = pool
    .map((entry) => {
      const normTitle = normalize(entry.title);
      const normCat = normalize(entry.category);
      const normKeywords = entry.keywords.map((k) => normalize(k));
      let score = 0;

      if (normTitle === cleanQuery) score += 100;
      else if (normTitle.startsWith(cleanQuery)) score += 60;
      else if (normTitle.includes(cleanQuery)) score += 40;

      if (normKeywords.some((k) => k === cleanQuery)) score += 80;
      else if (normKeywords.some((k) => k.startsWith(cleanQuery))) score += 45;
      else if (normKeywords.some((k) => k.includes(cleanQuery))) score += 25;

      for (const token of tokens) {
        if (normTitle === token) score += 50;
        else if (normTitle.startsWith(token)) score += 28;
        else if (normTitle.includes(token)) score += 18;

        if (normKeywords.some((k) => k === token)) score += 35;
        else if (normKeywords.some((k) => k.startsWith(token))) score += 18;
        else if (normKeywords.some((k) => k.includes(token))) score += 10;

        if (normCat.includes(token)) score += 4;
      }

      return { entry, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.entry.title.localeCompare(b.entry.title, 'pt-BR');
    });

  return scored.map((x) => x.entry);
}
