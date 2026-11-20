import type { SpiritualRefuge } from '../types';

export const REFUGIO_BIBLICO_DATA: SpiritualRefuge[] = [
  {
    id: 'ansiedade-e-medo',
    stateTitle: 'Quando estiver ansioso ou com medo',
    subtitle: 'Filipenses 4 • Isaías 41 • Salmos 56 • 1 Pedro 5 • Mateus 6',
    passages: [
      { bookAbbrev: 'fp', chapter: 4, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: 'is', chapter: 41, verseStart: 10 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 7 },
      { bookAbbrev: 'sl', chapter: 56, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 34 },
      { bookAbbrev: 'jo', chapter: 14, verseStart: 27 }
    ]
  },
  {
    id: 'arrependimento-e-perdao',
    stateTitle: 'Quando tiver pecado e precisar de perdão',
    subtitle: '1 João 1 • Salmos 51 • Hebreus 4 • Isaías 1 • Romanos 8',
    passages: [
      { bookAbbrev: '1jo', chapter: 1, verseStart: 9 },
      { bookAbbrev: 'sl', chapter: 51, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: 'hb', chapter: 4, verseStart: 16 },
      { bookAbbrev: 'is', chapter: 1, verseStart: 18 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 1 },
      { bookAbbrev: 'sl', chapter: 103, verseStart: 12 }
    ]
  },
  {
    id: 'cansaco-e-desanimo',
    stateTitle: 'Quando estiver cansado e sem forças',
    subtitle: 'Mateus 11 • Isaías 40 • 2 Coríntios 12 • Salmos 73 • Gálatas 6',
    passages: [
      { bookAbbrev: 'mt', chapter: 11, verseStart: 28, verseEnd: 30 },
      { bookAbbrev: 'is', chapter: 40, verseStart: 29, verseEnd: 31 },
      { bookAbbrev: '2co', chapter: 12, verseStart: 9 },
      { bookAbbrev: 'sl', chapter: 73, verseStart: 26 },
      { bookAbbrev: 'gl', chapter: 6, verseStart: 9 },
      { bookAbbrev: 'ne', chapter: 8, verseStart: 10 }
    ]
  },
  {
    id: 'solidao-e-abandono',
    stateTitle: 'Quando se sentir sozinho ou esquecido',
    subtitle: 'Hebreus 13 • Salmos 27 • Salmos 139 • Isaías 49 • Mateus 28',
    passages: [
      { bookAbbrev: 'hb', chapter: 13, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'sl', chapter: 27, verseStart: 10 },
      { bookAbbrev: 'sl', chapter: 139, verseStart: 7, verseEnd: 10 },
      { bookAbbrev: 'is', chapter: 49, verseStart: 15, verseEnd: 16 },
      { bookAbbrev: 'sl', chapter: 68, verseStart: 6 },
      { bookAbbrev: 'mt', chapter: 28, verseStart: 20 }
    ]
  },
  {
    id: 'luto-e-dor',
    stateTitle: 'Quando enfrentar luto ou dor profunda',
    subtitle: 'Salmos 34 • João 11 • Salmos 23 • 2 Coríntios 1 • Apocalipse 21',
    passages: [
      { bookAbbrev: 'sl', chapter: 34, verseStart: 18 },
      { bookAbbrev: 'jo', chapter: 11, verseStart: 25, verseEnd: 26 },
      { bookAbbrev: 'sl', chapter: 23, verseStart: 4 },
      { bookAbbrev: '2co', chapter: 1, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: '1ts', chapter: 4, verseStart: 13, verseEnd: 14 },
      { bookAbbrev: 'ap', chapter: 21, verseStart: 4 }
    ]
  },
  {
    id: 'sabedoria-e-decisao',
    stateTitle: 'Quando precisar de sabedoria para decidir',
    subtitle: 'Provérbios 3 • Tiago 1 • Salmos 32 • Salmos 119 • Provérbios 16',
    passages: [
      { bookAbbrev: 'pv', chapter: 3, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 5 },
      { bookAbbrev: 'sl', chapter: 32, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 105 },
      { bookAbbrev: 'pv', chapter: 16, verseStart: 3 },
      { bookAbbrev: 'is', chapter: 30, verseStart: 21 }
    ]
  },
  {
    id: 'vencer-a-tentacao',
    stateTitle: 'Quando enfrentar forte tentação',
    subtitle: '1 Coríntios 10 • Tiago 4 • Salmos 119 • Hebreus 2 • Efésios 6',
    passages: [
      { bookAbbrev: '1co', chapter: 10, verseStart: 13 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 7, verseEnd: 8 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 11 },
      { bookAbbrev: 'hb', chapter: 2, verseStart: 18 },
      { bookAbbrev: 'mt', chapter: 26, verseStart: 41 },
      { bookAbbrev: 'ef', chapter: 6, verseStart: 10, verseEnd: 11 }
    ]
  },
  {
    id: 'tristeza-e-angustia',
    stateTitle: 'Quando o coração estiver abatido ou triste',
    subtitle: 'Salmos 42 • Salmos 30 • Lamentações 3 • Salmos 147 • João 16',
    passages: [
      { bookAbbrev: 'sl', chapter: 42, verseStart: 11 },
      { bookAbbrev: 'sl', chapter: 30, verseStart: 5 },
      { bookAbbrev: 'lm', chapter: 3, verseStart: 22, verseEnd: 24 },
      { bookAbbrev: 'sl', chapter: 147, verseStart: 3 },
      { bookAbbrev: 'jo', chapter: 16, verseStart: 33 },
      { bookAbbrev: 'sl', chapter: 46, verseStart: 1, verseEnd: 2 }
    ]
  },
  {
    id: 'enfermidade-e-fraqueza',
    stateTitle: 'Quando passar por doença ou fraqueza física',
    subtitle: 'Salmos 41 • Salmos 103 • Tiago 5 • Isaías 43 • 2 Coríntios 4',
    passages: [
      { bookAbbrev: 'sl', chapter: 41, verseStart: 3 },
      { bookAbbrev: 'sl', chapter: 103, verseStart: 2, verseEnd: 3 },
      { bookAbbrev: 'tg', chapter: 5, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: 'is', chapter: 43, verseStart: 2 },
      { bookAbbrev: '2co', chapter: 4, verseStart: 16, verseEnd: 18 },
      { bookAbbrev: 'jr', chapter: 17, verseStart: 14 }
    ]
  },
  {
    id: 'injustica-e-perseguicao',
    stateTitle: 'Quando sofrer injustiça ou calúnia',
    subtitle: 'Salmos 37 • Romanos 12 • Mateus 5 • 1 Pedro 2 • Salmos 9',
    passages: [
      { bookAbbrev: 'sl', chapter: 37, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 19, verseEnd: 21 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: '1pe', chapter: 2, verseStart: 23 },
      { bookAbbrev: 'sl', chapter: 9, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'is', chapter: 54, verseStart: 17 }
    ]
  },
  {
    id: 'incerteza-e-futuro',
    stateTitle: 'Quando sentir incerteza quanto ao futuro',
    subtitle: 'Jeremias 29 • Salmos 37 • Romanos 8 • Provérbios 19 • Josué 1',
    passages: [
      { bookAbbrev: 'jr', chapter: 29, verseStart: 11 },
      { bookAbbrev: 'sl', chapter: 37, verseStart: 23, verseEnd: 25 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 28 },
      { bookAbbrev: 'js', chapter: 1, verseStart: 9 },
      { bookAbbrev: 'sl', chapter: 121, verseStart: 1, verseEnd: 3 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 33 }
    ]
  },
  {
    id: 'gratidao-e-louvor',
    stateTitle: 'Quando quiser agradecer e louvar a Deus',
    subtitle: 'Salmos 103 • Salmos 100 • 1 Tessalonicenses 5 • Salmos 136 • Romanos 11',
    passages: [
      { bookAbbrev: 'sl', chapter: 103, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'sl', chapter: 100, verseStart: 4, verseEnd: 5 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 18 },
      { bookAbbrev: 'sl', chapter: 136, verseStart: 1 },
      { bookAbbrev: 'sl', chapter: 118, verseStart: 24 },
      { bookAbbrev: 'rm', chapter: 11, verseStart: 36 }
    ]
  }
];
