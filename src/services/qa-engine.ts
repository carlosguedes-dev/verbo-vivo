import type { QuestionAnswer, QACategory } from '../types';
import { TIRA_DUVIDAS_DATA } from '../data/tira-duvidas';

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export function searchQuestions(
  query: string,
  categoryFilter: QACategory | 'TODAS' = 'TODAS'
): QuestionAnswer[] {
  const basePool =
    categoryFilter === 'TODAS'
      ? TIRA_DUVIDAS_DATA
      : TIRA_DUVIDAS_DATA.filter((item) => item.category === categoryFilter);

  const cleanQuery = normalize(query);
  if (!cleanQuery) {
    return basePool;
  }

  const stopWords = new Set(['como', 'que', 'qual', 'por', 'para', 'com', 'uma', 'dos', 'das', 'nos', 'nas', 'sobre', 'diz', 'biblia']);
  const tokens = cleanQuery
    .split(/\s+/)
    .map((t) => t.replace(/[^a-z0-9]/g, ''))
    .filter((t) => t.length >= 2 && !stopWords.has(t));

  if (tokens.length === 0) {
    return basePool.filter((item) => normalize(item.question).includes(cleanQuery));
  }

  const scored = basePool
    .map((item) => {
      let score = 0;
      const normQuestion = normalize(item.question);
      const normShort = normalize(item.shortAnswer);
      const normDetailed = normalize(item.detailedExplanation.join(' '));
      const normKeywords = item.keywords.map((k) => normalize(k));
      const normRefs = normalize(item.references.map((r) => `${r.label} ${r.quote}`).join(' '));

      if (normQuestion.includes(cleanQuery)) score += 25;
      if (normKeywords.some((k) => k.includes(cleanQuery))) score += 20;

      for (const token of tokens) {
        if (normQuestion.includes(token)) score += 10;
        if (normKeywords.some((k) => k.includes(token))) score += 8;
        if (normShort.includes(token)) score += 5;
        if (normDetailed.includes(token)) score += 3;
        if (normRefs.includes(token)) score += 4;
      }

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map((entry) => entry.item);
}
