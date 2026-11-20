import type { BibleDictionaryEntry, DictionaryCategory } from '../types';

export const DICTIONARY_CATEGORIES: DictionaryCategory[] = [
  'Vida, Ética & Sociedade',
  'Família & Relacionamentos',
  'Emoções & Lutas da Alma',
  'Caráter & Vida Diária',
  'Deus, Cristo & Salvação',
  'Igreja & Vida Espiritual',
  'Eternidade & Últimos Dias'
];

export const POPULAR_DICTIONARY_TOPICS: string[] = [
  'aborto-valor-da-vida',
  'amor',
  'casamento',
  'ansiedade',
  'perdao',
  'salvacao',
  'dinheiro-e-financas',
  'familia-e-lar'
];

/**
 * Dicionário Bíblico Temático ("O que a Bíblia diz sobre...")
 *
 * Princípio editorial rigoroso:
 * - Zero comentários humanos, zero textos gerados por IA, zero opiniões.
 * - Cada tema responde exclusivamente com passagens bíblicas reais e verificadas.
 * - Todo texto exibido ao usuário é carregado diretamente dos arquivos da Bíblia
 *   na tradução selecionada (ACF, NVI ou ARA).
 */
export const DICIONARIO_BIBLICO_DATA: BibleDictionaryEntry[] = [
  // ─── A ───────────────────────────────────────────────────────────────────
  {
    id: 'aborto-valor-da-vida',
    title: 'Aborto e Valor da Vida',
    category: 'Vida, Ética & Sociedade',
    keywords: ['aborto', 'abortar', 'gravidez', 'feto', 'ventre', 'nascituro', 'bebe', 'vida humana', 'gestacao', 'concepcao', 'nao mataras'],
    passages: [
      { bookAbbrev: 'sl', chapter: 139, verseStart: 13, verseEnd: 16 },
      { bookAbbrev: 'jr', chapter: 1, verseStart: 5 },
      { bookAbbrev: 'ex', chapter: 20, verseStart: 13 },
      { bookAbbrev: 'ex', chapter: 21, verseStart: 22, verseEnd: 25 },
      { bookAbbrev: 'gn', chapter: 1, verseStart: 27 },
      { bookAbbrev: 'is', chapter: 44, verseStart: 2 },
      { bookAbbrev: 'sl', chapter: 127, verseStart: 3 },
      { bookAbbrev: 'pv', chapter: 24, verseStart: 11, verseEnd: 12 },
      { bookAbbrev: 'lc', chapter: 1, verseStart: 41, verseEnd: 44 }
    ]
  },
  {
    id: 'adocao-filhos-de-deus',
    title: 'Adoção (Filhos de Deus)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['adocao', 'filhos de deus', 'herdeiros', 'pai celestial', 'identidade'],
    passages: [
      { bookAbbrev: 'jo', chapter: 1, verseStart: 12, verseEnd: 13 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 14, verseEnd: 17 },
      { bookAbbrev: 'ef', chapter: 1, verseStart: 5 },
      { bookAbbrev: 'gl', chapter: 4, verseStart: 4, verseEnd: 7 },
      { bookAbbrev: '1jo', chapter: 3, verseStart: 1, verseEnd: 2 }
    ]
  },
  {
    id: 'adoracao-e-louvor',
    title: 'Adoração e Louvor',
    category: 'Igreja & Vida Espiritual',
    keywords: ['adoracao', 'adorar', 'louvor', 'louvar', 'culto', 'glorificar', 'espirito e verdade'],
    passages: [
      { bookAbbrev: 'jo', chapter: 4, verseStart: 23, verseEnd: 24 },
      { bookAbbrev: 'sl', chapter: 95, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: 'sl', chapter: 100, verseStart: 1, verseEnd: 5 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 1 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 15 },
      { bookAbbrev: 'sl', chapter: 150, verseStart: 6 }
    ]
  },
  {
    id: 'adulterio',
    title: 'Adultério e Infidelidade',
    category: 'Família & Relacionamentos',
    keywords: ['adulterio', 'adulterar', 'traicao', 'trair', 'infidelidade', 'amante', 'fidelidade conjugal'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 14 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 4 },
      { bookAbbrev: 'pv', chapter: 6, verseStart: 32, verseEnd: 33 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 9, verseEnd: 11 },
      { bookAbbrev: 'jo', chapter: 8, verseStart: 10, verseEnd: 11 }
    ]
  },
  {
    id: 'alcool-e-embriaguez',
    title: 'Álcool e Embriaguez',
    category: 'Caráter & Vida Diária',
    keywords: ['alcool', 'bebida', 'beber', 'vinho', 'cerveja', 'embriaguez', 'bebedeira', 'bebado', 'alcoolismo'],
    passages: [
      { bookAbbrev: 'ef', chapter: 5, verseStart: 18 },
      { bookAbbrev: 'pv', chapter: 20, verseStart: 1 },
      { bookAbbrev: 'pv', chapter: 23, verseStart: 29, verseEnd: 32 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 19, verseEnd: 21 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 10 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 8 },
      { bookAbbrev: 'rm', chapter: 13, verseStart: 13 }
    ]
  },
  {
    id: 'alegria',
    title: 'Alegria',
    category: 'Emoções & Lutas da Alma',
    keywords: ['alegria', 'alegre', 'felicidade', 'regozijo', 'jubilo', 'contentamento'],
    passages: [
      { bookAbbrev: 'ne', chapter: 8, verseStart: 10 },
      { bookAbbrev: 'fp', chapter: 4, verseStart: 4 },
      { bookAbbrev: 'sl', chapter: 16, verseStart: 11 },
      { bookAbbrev: 'jo', chapter: 15, verseStart: 11 },
      { bookAbbrev: 'rm', chapter: 15, verseStart: 13 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 16 }
    ]
  },
  {
    id: 'alimentos-e-dieta',
    title: 'Alimentos e Dieta',
    category: 'Caráter & Vida Diária',
    keywords: ['alimentos', 'comida', 'dieta', 'carne de porco', 'alimentos impuros', 'comer', 'jejum'],
    passages: [
      { bookAbbrev: 'mc', chapter: 7, verseStart: 18, verseEnd: 19 },
      { bookAbbrev: '1tm', chapter: 4, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 2, verseEnd: 3 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 17 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 31 },
      { bookAbbrev: 'at', chapter: 10, verseStart: 15 }
    ]
  },
  {
    id: 'alianca-com-deus',
    title: 'Aliança com Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['alianca', 'pacto', 'nova alianca', 'promessa', 'concerto', 'testamento'],
    passages: [
      { bookAbbrev: 'jr', chapter: 31, verseStart: 31, verseEnd: 33 },
      { bookAbbrev: 'lc', chapter: 22, verseStart: 20 },
      { bookAbbrev: 'hb', chapter: 8, verseStart: 6 },
      { bookAbbrev: 'hb', chapter: 9, verseStart: 15 },
      { bookAbbrev: 'dt', chapter: 7, verseStart: 9 },
      { bookAbbrev: 'sl', chapter: 105, verseStart: 8 }
    ]
  },
  {
    id: 'amargura-e-rancor',
    title: 'Amargura e Rancor',
    category: 'Emoções & Lutas da Alma',
    keywords: ['amargura', 'rancor', 'magoa', 'ressentimento', 'odio guardado', 'falta de perdao'],
    passages: [
      { bookAbbrev: 'ef', chapter: 4, verseStart: 31, verseEnd: 32 },
      { bookAbbrev: 'hb', chapter: 12, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 13 },
      { bookAbbrev: 'pv', chapter: 14, verseStart: 10 },
      { bookAbbrev: 'tg', chapter: 3, verseStart: 14, verseEnd: 16 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 17, verseEnd: 19 }
    ]
  },
  {
    id: 'amizade',
    title: 'Amizade',
    category: 'Família & Relacionamentos',
    keywords: ['amizade', 'amigo', 'amigos', 'companheirismo', 'companhias', 'colegas', 'lealdade'],
    passages: [
      { bookAbbrev: 'pv', chapter: 17, verseStart: 17 },
      { bookAbbrev: 'pv', chapter: 18, verseStart: 24 },
      { bookAbbrev: 'pv', chapter: 27, verseStart: 17 },
      { bookAbbrev: 'ec', chapter: 4, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'jo', chapter: 15, verseStart: 13, verseEnd: 15 },
      { bookAbbrev: '1co', chapter: 15, verseStart: 33 },
      { bookAbbrev: 'pv', chapter: 13, verseStart: 20 }
    ]
  },
  {
    id: 'amor',
    title: 'Amor',
    category: 'Família & Relacionamentos',
    keywords: ['amor', 'amar', 'agape', 'caridade', 'amor de deus', 'maior mandamento'],
    passages: [
      { bookAbbrev: '1co', chapter: 13, verseStart: 4, verseEnd: 7 },
      { bookAbbrev: '1co', chapter: 13, verseStart: 13 },
      { bookAbbrev: '1jo', chapter: 4, verseStart: 7, verseEnd: 8 },
      { bookAbbrev: '1jo', chapter: 4, verseStart: 19 },
      { bookAbbrev: 'jo', chapter: 3, verseStart: 16 },
      { bookAbbrev: 'mt', chapter: 22, verseStart: 37, verseEnd: 39 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 14 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 38, verseEnd: 39 }
    ]
  },
  {
    id: 'amor-ao-proximo',
    title: 'Amor ao Próximo',
    category: 'Família & Relacionamentos',
    keywords: ['proximo', 'amar o proximo', 'bom samaritano', 'compaixao', 'misericordia', 'servir'],
    passages: [
      { bookAbbrev: 'mc', chapter: 12, verseStart: 31 },
      { bookAbbrev: 'jo', chapter: 13, verseStart: 34, verseEnd: 35 },
      { bookAbbrev: 'rm', chapter: 13, verseStart: 8, verseEnd: 10 },
      { bookAbbrev: '1jo', chapter: 3, verseStart: 18 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 14 },
      { bookAbbrev: 'lc', chapter: 6, verseStart: 31 }
    ]
  },
  {
    id: 'anjos',
    title: 'Anjos',
    category: 'Igreja & Vida Espiritual',
    keywords: ['anjos', 'anjo', 'arcanjo', 'serafins', 'querubins', 'anjo da guarda', 'adorar anjos'],
    passages: [
      { bookAbbrev: 'hb', chapter: 1, verseStart: 14 },
      { bookAbbrev: 'sl', chapter: 91, verseStart: 11 },
      { bookAbbrev: 'sl', chapter: 103, verseStart: 20 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 7 },
      { bookAbbrev: 'ap', chapter: 22, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'cl', chapter: 2, verseStart: 18 }
    ]
  },
  {
    id: 'ansiedade',
    title: 'Ansiedade e Preocupação',
    category: 'Emoções & Lutas da Alma',
    keywords: ['ansiedade', 'ansioso', 'preocupacao', 'nervosismo', 'panico', 'inquietacao', 'estresse', 'medo do amanha'],
    passages: [
      { bookAbbrev: 'fp', chapter: 4, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 7 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 25, verseEnd: 27 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 34 },
      { bookAbbrev: 'sl', chapter: 94, verseStart: 19 },
      { bookAbbrev: 'pv', chapter: 12, verseStart: 25 },
      { bookAbbrev: 'is', chapter: 41, verseStart: 10 }
    ]
  },
  {
    id: 'apostasia',
    title: 'Apostasia e Abandono da Fé',
    category: 'Igreja & Vida Espiritual',
    keywords: ['apostasia', 'desviar', 'abandonar a fe', 'esfriamento', 'falso ensino'],
    passages: [
      { bookAbbrev: '1tm', chapter: 4, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: '2ts', chapter: 2, verseStart: 3 },
      { bookAbbrev: 'hb', chapter: 3, verseStart: 12 },
      { bookAbbrev: '2tm', chapter: 4, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: '1jo', chapter: 2, verseStart: 19 },
      { bookAbbrev: 'mt', chapter: 24, verseStart: 12, verseEnd: 13 }
    ]
  },
  {
    id: 'arrependimento',
    title: 'Arrependimento',
    category: 'Deus, Cristo & Salvação',
    keywords: ['arrependimento', 'arrepender', 'conversao', 'mudanca de vida', 'confessar pecados'],
    passages: [
      { bookAbbrev: 'at', chapter: 3, verseStart: 19 },
      { bookAbbrev: 'at', chapter: 2, verseStart: 38 },
      { bookAbbrev: '2co', chapter: 7, verseStart: 10 },
      { bookAbbrev: 'lc', chapter: 15, verseStart: 7 },
      { bookAbbrev: 'pv', chapter: 28, verseStart: 13 },
      { bookAbbrev: '2pe', chapter: 3, verseStart: 9 },
      { bookAbbrev: '1jo', chapter: 1, verseStart: 9 }
    ]
  },
  {
    id: 'astrologia-e-horoscopo',
    title: 'Astrologia, Signos e Horóscopo',
    category: 'Igreja & Vida Espiritual',
    keywords: ['astrologia', 'horoscopo', 'signos', 'zodiaco', 'mapa astral', 'astros', 'adivinhacao', 'previsao'],
    passages: [
      { bookAbbrev: 'dt', chapter: 18, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: 'is', chapter: 47, verseStart: 13, verseEnd: 14 },
      { bookAbbrev: 'jr', chapter: 10, verseStart: 2 },
      { bookAbbrev: 'dt', chapter: 4, verseStart: 19 },
      { bookAbbrev: 'lv', chapter: 19, verseStart: 26 },
      { bookAbbrev: 'dn', chapter: 2, verseStart: 27, verseEnd: 28 }
    ]
  },
  {
    id: 'ateismo-e-incredulidade',
    title: 'Ateísmo e Incredulidade',
    category: 'Deus, Cristo & Salvação',
    keywords: ['ateismo', 'ateu', 'incredulidade', 'existencia de deus', 'negar deus'],
    passages: [
      { bookAbbrev: 'sl', chapter: 14, verseStart: 1 },
      { bookAbbrev: 'rm', chapter: 1, verseStart: 19, verseEnd: 22 },
      { bookAbbrev: 'sl', chapter: 19, verseStart: 1, verseEnd: 4 },
      { bookAbbrev: 'hb', chapter: 11, verseStart: 6 },
      { bookAbbrev: 'jo', chapter: 3, verseStart: 18 }
    ]
  },
  {
    id: 'autoestima-identidade-em-cristo',
    title: 'Autoestima e Identidade em Cristo',
    category: 'Emoções & Lutas da Alma',
    keywords: ['autoestima', 'identidade', 'valor proprio', 'imagem de deus', 'rejeicao', 'quem sou em cristo'],
    passages: [
      { bookAbbrev: 'sl', chapter: 139, verseStart: 13, verseEnd: 14 },
      { bookAbbrev: 'ef', chapter: 2, verseStart: 10 },
      { bookAbbrev: '1pe', chapter: 2, verseStart: 9 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 17 },
      { bookAbbrev: 'gl', chapter: 2, verseStart: 20 },
      { bookAbbrev: 'is', chapter: 43, verseStart: 1 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 37, verseEnd: 39 }
    ]
  },
  {
    id: 'avareza-e-ganancia',
    title: 'Avareza e Ganância',
    category: 'Caráter & Vida Diária',
    keywords: ['avareza', 'ganancia', 'ambicao', 'cobica', 'mesquinhez', 'amor ao dinheiro'],
    passages: [
      { bookAbbrev: 'lc', chapter: 12, verseStart: 15 },
      { bookAbbrev: '1tm', chapter: 6, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 5 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 5 },
      { bookAbbrev: 'pv', chapter: 15, verseStart: 27 },
      { bookAbbrev: 'ec', chapter: 5, verseStart: 10 }
    ]
  },

  // ─── B ───────────────────────────────────────────────────────────────────
  {
    id: 'batalha-espiritual',
    title: 'Batalha Espiritual',
    category: 'Igreja & Vida Espiritual',
    keywords: ['batalha espiritual', 'guerra espiritual', 'armadura de deus', 'inimigo', 'trevas', 'luta espiritual'],
    passages: [
      { bookAbbrev: 'ef', chapter: 6, verseStart: 10, verseEnd: 13 },
      { bookAbbrev: 'ef', chapter: 6, verseStart: 16, verseEnd: 18 },
      { bookAbbrev: '2co', chapter: 10, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 7 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: '1jo', chapter: 4, verseStart: 4 }
    ]
  },
  {
    id: 'batismo',
    title: 'Batismo nas Águas',
    category: 'Igreja & Vida Espiritual',
    keywords: ['batismo', 'batizar', 'aguas', 'ordenanca', 'imersao', 'novo nascimento'],
    passages: [
      { bookAbbrev: 'mt', chapter: 28, verseStart: 19 },
      { bookAbbrev: 'rm', chapter: 6, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: 'at', chapter: 2, verseStart: 38 },
      { bookAbbrev: 'mc', chapter: 16, verseStart: 16 },
      { bookAbbrev: 'gl', chapter: 3, verseStart: 27 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 21 }
    ]
  },
  {
    id: 'bencao-e-maldicao',
    title: 'Bênção, Maldição e Responsabilidade Individual',
    category: 'Igreja & Vida Espiritual',
    keywords: ['bencao', 'maldicao', 'maldicao hereditaria', 'quebra de maldicao', 'responsabilidade individual'],
    passages: [
      { bookAbbrev: 'ez', chapter: 18, verseStart: 20 },
      { bookAbbrev: 'gl', chapter: 3, verseStart: 13 },
      { bookAbbrev: 'pv', chapter: 26, verseStart: 2 },
      { bookAbbrev: 'ef', chapter: 1, verseStart: 3 },
      { bookAbbrev: 'nm', chapter: 6, verseStart: 24, verseEnd: 26 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 14 }
    ]
  },
  {
    id: 'biblia-palavra-de-deus',
    title: 'Bíblia e Palavra de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['biblia', 'escrituras', 'palavra de deus', 'inspiracao', 'sola scriptura', 'ler a biblia'],
    passages: [
      { bookAbbrev: '2tm', chapter: 3, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'hb', chapter: 4, verseStart: 12 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 105 },
      { bookAbbrev: 'is', chapter: 40, verseStart: 8 },
      { bookAbbrev: 'mt', chapter: 24, verseStart: 35 },
      { bookAbbrev: '2pe', chapter: 1, verseStart: 20, verseEnd: 21 },
      { bookAbbrev: 'sl', chapter: 19, verseStart: 7, verseEnd: 8 }
    ]
  },
  {
    id: 'blasfemia',
    title: 'Blasfêmia',
    category: 'Igreja & Vida Espiritual',
    keywords: ['blasfemia', 'blasfemar', 'nome de deus em vao', 'pecado imperdoavel', 'espirito santo'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 7 },
      { bookAbbrev: 'mt', chapter: 12, verseStart: 31, verseEnd: 32 },
      { bookAbbrev: 'mc', chapter: 3, verseStart: 28, verseEnd: 29 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 8 },
      { bookAbbrev: '1tm', chapter: 1, verseStart: 13 }
    ]
  },
  {
    id: 'boas-obras',
    title: 'Boas Obras (Relação com a Fé)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['boas obras', 'obras', 'fe e obras', 'servico', 'frutos'],
    passages: [
      { bookAbbrev: 'ef', chapter: 2, verseStart: 8, verseEnd: 10 },
      { bookAbbrev: 'tg', chapter: 2, verseStart: 17, verseEnd: 18 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 16 },
      { bookAbbrev: 'tt', chapter: 3, verseStart: 8 },
      { bookAbbrev: 'gl', chapter: 6, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'hb', chapter: 10, verseStart: 24 }
    ]
  },
  {
    id: 'bondade-e-benignidade',
    title: 'Bondade e Benignidade',
    category: 'Caráter & Vida Diária',
    keywords: ['bondade', 'benignidade', 'fazer o bem', 'gentileza', 'amabilidade'],
    passages: [
      { bookAbbrev: 'gl', chapter: 6, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 32 },
      { bookAbbrev: 'pv', chapter: 11, verseStart: 17 },
      { bookAbbrev: 'lc', chapter: 6, verseStart: 35 },
      { bookAbbrev: 'mq', chapter: 6, verseStart: 8 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 15 }
    ]
  },
  {
    id: 'brigas-e-contendas',
    title: 'Brigas, Discussões e Contendas',
    category: 'Família & Relacionamentos',
    keywords: ['brigas', 'discussoes', 'contenda', 'conflito', 'briga de familia', 'discussao', 'paz'],
    passages: [
      { bookAbbrev: 'pv', chapter: 15, verseStart: 1 },
      { bookAbbrev: 'pv', chapter: 17, verseStart: 14 },
      { bookAbbrev: 'pv', chapter: 20, verseStart: 3 },
      { bookAbbrev: '2tm', chapter: 2, verseStart: 23, verseEnd: 25 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 18 }
    ]
  },

  // ─── C ───────────────────────────────────────────────────────────────────
  {
    id: 'calunia-e-difamacao',
    title: 'Calúnia e Difamação',
    category: 'Caráter & Vida Diária',
    keywords: ['calunia', 'difamacao', 'falso testemunho', 'falar mal', 'injuria', 'maledicencia'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 16 },
      { bookAbbrev: 'pv', chapter: 10, verseStart: 18 },
      { bookAbbrev: 'sl', chapter: 101, verseStart: 5 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 31 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 11 },
      { bookAbbrev: '1pe', chapter: 2, verseStart: 1 }
    ]
  },
  {
    id: 'cansaco-e-descanso',
    title: 'Cansaço e Descanso',
    category: 'Emoções & Lutas da Alma',
    keywords: ['cansaco', 'descanso', 'exausto', 'esgotamento', 'burnout', 'fadiga', 'repouso'],
    passages: [
      { bookAbbrev: 'mt', chapter: 11, verseStart: 28, verseEnd: 30 },
      { bookAbbrev: 'sl', chapter: 4, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 127, verseStart: 2 },
      { bookAbbrev: 'ex', chapter: 33, verseStart: 14 },
      { bookAbbrev: 'is', chapter: 40, verseStart: 29, verseEnd: 31 },
      { bookAbbrev: 'mc', chapter: 6, verseStart: 31 }
    ]
  },
  {
    id: 'casamento',
    title: 'Casamento',
    category: 'Família & Relacionamentos',
    keywords: ['casamento', 'casar', 'matrimonio', 'esposo', 'esposa', 'marido', 'mulher', 'conjuge', 'uma so carne'],
    passages: [
      { bookAbbrev: 'gn', chapter: 2, verseStart: 24 },
      { bookAbbrev: 'mt', chapter: 19, verseStart: 4, verseEnd: 6 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 22, verseEnd: 25 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 28, verseEnd: 33 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 4 },
      { bookAbbrev: 'pv', chapter: 18, verseStart: 22 },
      { bookAbbrev: 'ec', chapter: 4, verseStart: 9, verseEnd: 12 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 7 }
    ]
  },
  {
    id: 'ceu-e-vida-eterna',
    title: 'Céu e Vida Eterna',
    category: 'Eternidade & Últimos Dias',
    keywords: ['ceu', 'paraiso', 'vida eterna', 'morada', 'nova jerusalem', 'eternidade'],
    passages: [
      { bookAbbrev: 'jo', chapter: 14, verseStart: 1, verseEnd: 3 },
      { bookAbbrev: 'ap', chapter: 21, verseStart: 1, verseEnd: 4 },
      { bookAbbrev: 'fp', chapter: 3, verseStart: 20 },
      { bookAbbrev: '1co', chapter: 2, verseStart: 9 },
      { bookAbbrev: 'jo', chapter: 17, verseStart: 3 },
      { bookAbbrev: 'ap', chapter: 22, verseStart: 3, verseEnd: 5 }
    ]
  },
  {
    id: 'ciencia-e-conhecimento',
    title: 'Ciência, Conhecimento e Criação',
    category: 'Vida, Ética & Sociedade',
    keywords: ['ciencia', 'conhecimento', 'estudos', 'faculdade', 'razao', 'sabedoria humana', 'universo'],
    passages: [
      { bookAbbrev: 'sl', chapter: 19, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'rm', chapter: 1, verseStart: 20 },
      { bookAbbrev: 'pv', chapter: 25, verseStart: 2 },
      { bookAbbrev: 'pv', chapter: 18, verseStart: 15 },
      { bookAbbrev: 'cl', chapter: 2, verseStart: 2, verseEnd: 3 },
      { bookAbbrev: 'sl', chapter: 111, verseStart: 2 }
    ]
  },
  {
    id: 'ciume',
    title: 'Ciúme',
    category: 'Emoções & Lutas da Alma',
    keywords: ['ciume', 'ciumento', 'inveja', 'posse', 'rivalidade'],
    passages: [
      { bookAbbrev: 'pv', chapter: 27, verseStart: 4 },
      { bookAbbrev: 'pv', chapter: 14, verseStart: 30 },
      { bookAbbrev: '1co', chapter: 13, verseStart: 4 },
      { bookAbbrev: 'tg', chapter: 3, verseStart: 16 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: 'ct', chapter: 8, verseStart: 6 }
    ]
  },
  {
    id: 'cobica',
    title: 'Cobiça',
    category: 'Caráter & Vida Diária',
    keywords: ['cobica', 'cobicar', 'desejo desordenado', 'invejar bens', 'decimo mandamento'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 17 },
      { bookAbbrev: 'lc', chapter: 12, verseStart: 15 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 3 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 5 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 2 },
      { bookAbbrev: '1jo', chapter: 2, verseStart: 16 }
    ]
  },
  {
    id: 'comunhao-e-igreja',
    title: 'Comunhão e Congregar',
    category: 'Igreja & Vida Espiritual',
    keywords: ['comunhao', 'congregar', 'igreja', 'desigrejado', 'irmaos', 'corpo de cristo', 'reunir'],
    passages: [
      { bookAbbrev: 'hb', chapter: 10, verseStart: 24, verseEnd: 25 },
      { bookAbbrev: 'at', chapter: 2, verseStart: 42 },
      { bookAbbrev: 'sl', chapter: 133, verseStart: 1 },
      { bookAbbrev: 'mt', chapter: 18, verseStart: 20 },
      { bookAbbrev: '1co', chapter: 12, verseStart: 26, verseEnd: 27 },
      { bookAbbrev: '1jo', chapter: 1, verseStart: 7 }
    ]
  },
  {
    id: 'confianca-em-deus',
    title: 'Confiança em Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['confianca', 'confiar', 'seguranca', 'descansar em deus', 'entregar o caminho'],
    passages: [
      { bookAbbrev: 'pv', chapter: 3, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'sl', chapter: 37, verseStart: 5 },
      { bookAbbrev: 'jr', chapter: 17, verseStart: 7, verseEnd: 8 },
      { bookAbbrev: 'sl', chapter: 9, verseStart: 10 },
      { bookAbbrev: 'is', chapter: 26, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: 'sl', chapter: 125, verseStart: 1 }
    ]
  },
  {
    id: 'confissao-de-pecados',
    title: 'Confissão de Pecados',
    category: 'Igreja & Vida Espiritual',
    keywords: ['confissao', 'confessar', 'pecados ocultos', 'restauracao', 'transparencia'],
    passages: [
      { bookAbbrev: '1jo', chapter: 1, verseStart: 9 },
      { bookAbbrev: 'pv', chapter: 28, verseStart: 13 },
      { bookAbbrev: 'tg', chapter: 5, verseStart: 16 },
      { bookAbbrev: 'sl', chapter: 32, verseStart: 5 },
      { bookAbbrev: 'sl', chapter: 51, verseStart: 1, verseEnd: 4 }
    ]
  },
  {
    id: 'conformismo-com-o-mundo',
    title: 'Conformismo e Mundanismo',
    category: 'Igreja & Vida Espiritual',
    keywords: ['mundo', 'mundanismo', 'conformismo', 'secularismo', 'pressao social', 'santidade'],
    passages: [
      { bookAbbrev: 'rm', chapter: 12, verseStart: 2 },
      { bookAbbrev: '1jo', chapter: 2, verseStart: 15, verseEnd: 17 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 4 },
      { bookAbbrev: 'jo', chapter: 17, verseStart: 14, verseEnd: 16 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 1, verseEnd: 2 }
    ]
  },
  {
    id: 'consciencia',
    title: 'Consciência',
    category: 'Caráter & Vida Diária',
    keywords: ['consciencia', 'boa consciencia', 'culpa', 'retidao', 'conviccao'],
    passages: [
      { bookAbbrev: 'at', chapter: 24, verseStart: 16 },
      { bookAbbrev: '1tm', chapter: 1, verseStart: 5 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 16 },
      { bookAbbrev: 'rm', chapter: 2, verseStart: 15 },
      { bookAbbrev: 'hb', chapter: 9, verseStart: 14 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 22, verseEnd: 23 }
    ]
  },
  {
    id: 'conselho-e-prudencia',
    title: 'Conselhos e Prudência',
    category: 'Caráter & Vida Diária',
    keywords: ['conselho', 'conselheiros', 'prudencia', 'ouvir', 'orientacao', 'discernir'],
    passages: [
      { bookAbbrev: 'pv', chapter: 11, verseStart: 14 },
      { bookAbbrev: 'pv', chapter: 15, verseStart: 22 },
      { bookAbbrev: 'pv', chapter: 12, verseStart: 15 },
      { bookAbbrev: 'pv', chapter: 19, verseStart: 20 },
      { bookAbbrev: 'sl', chapter: 1, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'pv', chapter: 24, verseStart: 6 }
    ]
  },
  {
    id: 'contentamento',
    title: 'Contentamento',
    category: 'Emoções & Lutas da Alma',
    keywords: ['contentamento', 'satisfeito', 'suficiente', 'materialismo', 'gratidao'],
    passages: [
      { bookAbbrev: 'fp', chapter: 4, verseStart: 11, verseEnd: 13 },
      { bookAbbrev: '1tm', chapter: 6, verseStart: 6, verseEnd: 8 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 5 },
      { bookAbbrev: 'sl', chapter: 23, verseStart: 1 },
      { bookAbbrev: 'pv', chapter: 15, verseStart: 16 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 33 }
    ]
  },
  {
    id: 'coracao',
    title: 'Coração (Guarda Interior)',
    category: 'Caráter & Vida Diária',
    keywords: ['coracao', 'guardar o coracao', 'intencoes', 'mente', 'sentimentos'],
    passages: [
      { bookAbbrev: 'pv', chapter: 4, verseStart: 23 },
      { bookAbbrev: 'jr', chapter: 17, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: '1sm', chapter: 16, verseStart: 7 },
      { bookAbbrev: 'sl', chapter: 51, verseStart: 10 },
      { bookAbbrev: 'mt', chapter: 15, verseStart: 18, verseEnd: 19 },
      { bookAbbrev: 'ez', chapter: 36, verseStart: 26 }
    ]
  },
  {
    id: 'coragem-e-animo',
    title: 'Coragem e Bom Ânimo',
    category: 'Emoções & Lutas da Alma',
    keywords: ['coragem', 'animo', 'ousadia', 'destemor', 'forca', 'valentia'],
    passages: [
      { bookAbbrev: 'js', chapter: 1, verseStart: 9 },
      { bookAbbrev: 'dt', chapter: 31, verseStart: 6 },
      { bookAbbrev: 'sl', chapter: 27, verseStart: 1 },
      { bookAbbrev: 'sl', chapter: 31, verseStart: 24 },
      { bookAbbrev: '2tm', chapter: 1, verseStart: 7 },
      { bookAbbrev: '1co', chapter: 16, verseStart: 13 }
    ]
  },
  {
    id: 'corpo-templo-do-espirito',
    title: 'Corpo (Templo do Espírito Santo)',
    category: 'Caráter & Vida Diária',
    keywords: ['corpo', 'templo do espirito', 'saude', 'cuidado fisico', 'santidade corporal'],
    passages: [
      { bookAbbrev: '1co', chapter: 6, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: '1co', chapter: 3, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 1 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 23 },
      { bookAbbrev: '1co', chapter: 9, verseStart: 27 },
      { bookAbbrev: '1tm', chapter: 4, verseStart: 8 }
    ]
  },
  {
    id: 'corrupcao-e-suborno',
    title: 'Corrupção e Suborno',
    category: 'Vida, Ética & Sociedade',
    keywords: ['corrupcao', 'suborno', 'propina', 'fraude', 'desonestidade', 'politica'],
    passages: [
      { bookAbbrev: 'ex', chapter: 23, verseStart: 8 },
      { bookAbbrev: 'dt', chapter: 16, verseStart: 19 },
      { bookAbbrev: 'pv', chapter: 17, verseStart: 23 },
      { bookAbbrev: 'pv', chapter: 29, verseStart: 4 },
      { bookAbbrev: 'is', chapter: 33, verseStart: 15 },
      { bookAbbrev: 'pv', chapter: 11, verseStart: 1 }
    ]
  },
  {
    id: 'criacao-do-mundo',
    title: 'Criação do Universo e da Humanidade',
    category: 'Deus, Cristo & Salvação',
    keywords: ['criacao', 'criar', 'origem', 'universo', 'ciencia', 'imagem de deus', 'genesis'],
    passages: [
      { bookAbbrev: 'gn', chapter: 1, verseStart: 1 },
      { bookAbbrev: 'gn', chapter: 1, verseStart: 26, verseEnd: 27 },
      { bookAbbrev: 'sl', chapter: 19, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'jo', chapter: 1, verseStart: 1, verseEnd: 3 },
      { bookAbbrev: 'cl', chapter: 1, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'hb', chapter: 11, verseStart: 3 },
      { bookAbbrev: 'rm', chapter: 1, verseStart: 20 }
    ]
  },
  {
    id: 'cruz-e-sacrificio',
    title: 'Cruz e Sacrifício de Cristo',
    category: 'Deus, Cristo & Salvação',
    keywords: ['cruz', 'calvario', 'sacrificio', 'sangue de jesus', 'expiacao', 'morte de cristo'],
    passages: [
      { bookAbbrev: 'is', chapter: 53, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: '1pe', chapter: 2, verseStart: 24 },
      { bookAbbrev: '1co', chapter: 1, verseStart: 18 },
      { bookAbbrev: 'gl', chapter: 2, verseStart: 20 },
      { bookAbbrev: 'cl', chapter: 2, verseStart: 14 },
      { bookAbbrev: 'rm', chapter: 5, verseStart: 8 },
      { bookAbbrev: 'jo', chapter: 19, verseStart: 30 }
    ]
  },
  {
    id: 'culpa-e-condenacao',
    title: 'Culpa e Libertação da Condenação',
    category: 'Emoções & Lutas da Alma',
    keywords: ['culpa', 'condenacao', 'remorso', 'acusacao', 'peso na consciencia', 'perdao'],
    passages: [
      { bookAbbrev: 'rm', chapter: 8, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'sl', chapter: 32, verseStart: 1, verseEnd: 5 },
      { bookAbbrev: '1jo', chapter: 3, verseStart: 20 },
      { bookAbbrev: 'hb', chapter: 10, verseStart: 22 },
      { bookAbbrev: 'is', chapter: 43, verseStart: 25 },
      { bookAbbrev: 'sl', chapter: 103, verseStart: 12 }
    ]
  },

  // ─── D ───────────────────────────────────────────────────────────────────
  {
    id: 'danca-e-celebracao',
    title: 'Dança e Celebração',
    category: 'Igreja & Vida Espiritual',
    keywords: ['danca', 'dancar', 'celebracao', 'alegria', 'festa'],
    passages: [
      { bookAbbrev: 'sl', chapter: 149, verseStart: 3 },
      { bookAbbrev: 'sl', chapter: 150, verseStart: 4 },
      { bookAbbrev: 'sl', chapter: 30, verseStart: 11 },
      { bookAbbrev: 'ec', chapter: 3, verseStart: 4 },
      { bookAbbrev: '2sm', chapter: 6, verseStart: 14 }
    ]
  },
  {
    id: 'decisoes-e-orientacao',
    title: 'Decisões Difíceis e Orientação',
    category: 'Caráter & Vida Diária',
    keywords: ['decisao', 'decisoes', 'escolha', 'escolhas', 'orientacao', 'encruzilhada', 'direcao'],
    passages: [
      { bookAbbrev: 'pv', chapter: 3, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'pv', chapter: 16, verseStart: 3 },
      { bookAbbrev: 'pv', chapter: 16, verseStart: 9 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 5 },
      { bookAbbrev: 'sl', chapter: 32, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 25, verseStart: 4, verseEnd: 5 }
    ]
  },
  {
    id: 'depressao-e-tristeza',
    title: 'Depressão e Tristeza Profunda',
    category: 'Emoções & Lutas da Alma',
    keywords: ['depressao', 'tristeza', 'angustia', 'abatimento', 'dor na alma', 'desespero', 'saude mental', 'choro'],
    passages: [
      { bookAbbrev: 'sl', chapter: 42, verseStart: 11 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 17, verseEnd: 18 },
      { bookAbbrev: 'sl', chapter: 40, verseStart: 1, verseEnd: 3 },
      { bookAbbrev: 'sl', chapter: 147, verseStart: 3 },
      { bookAbbrev: 'mt', chapter: 11, verseStart: 28 },
      { bookAbbrev: 'is', chapter: 41, verseStart: 10 },
      { bookAbbrev: 'lm', chapter: 3, verseStart: 21, verseEnd: 23 },
      { bookAbbrev: '1rs', chapter: 19, verseStart: 4, verseEnd: 8 }
    ]
  },
  {
    id: 'desanimo',
    title: 'Desânimo',
    category: 'Emoções & Lutas da Alma',
    keywords: ['desanimo', 'desistir', 'abatido', 'sem vontade', 'fraqueza', 'perseverar'],
    passages: [
      { bookAbbrev: 'gl', chapter: 6, verseStart: 9 },
      { bookAbbrev: '2co', chapter: 4, verseStart: 16 },
      { bookAbbrev: 'js', chapter: 1, verseStart: 9 },
      { bookAbbrev: 'sl', chapter: 43, verseStart: 5 },
      { bookAbbrev: 'is', chapter: 40, verseStart: 31 },
      { bookAbbrev: 'hb', chapter: 12, verseStart: 3 }
    ]
  },
  {
    id: 'desemprego-e-provisao',
    title: 'Desemprego e Provisão de Deus',
    category: 'Caráter & Vida Diária',
    keywords: ['desemprego', 'desempregado', 'provisao', 'sustento', 'falta de dinheiro', 'pao de cada dia'],
    passages: [
      { bookAbbrev: 'fp', chapter: 4, verseStart: 19 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 31, verseEnd: 33 },
      { bookAbbrev: 'sl', chapter: 37, verseStart: 25 },
      { bookAbbrev: 'sl', chapter: 23, verseStart: 1 },
      { bookAbbrev: '2co', chapter: 9, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 10 }
    ]
  },
  {
    id: 'desobediencia-e-rebeldia',
    title: 'Desobediência e Rebeldia',
    category: 'Caráter & Vida Diária',
    keywords: ['desobediencia', 'rebeldia', 'rebelde', 'teimosia', 'desrespeito'],
    passages: [
      { bookAbbrev: '1sm', chapter: 15, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 6 },
      { bookAbbrev: 'rm', chapter: 5, verseStart: 19 },
      { bookAbbrev: 'pv', chapter: 17, verseStart: 11 },
      { bookAbbrev: 'hb', chapter: 3, verseStart: 15 }
    ]
  },
  {
    id: 'deus-atributos',
    title: 'Deus (Quem Ele É e Seus Atributos)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['deus', 'senhor', 'criador', 'santo', 'eterno', 'onipotente', 'onisciente', 'onipresente', 'soberano'],
    passages: [
      { bookAbbrev: 'ex', chapter: 34, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: 'dt', chapter: 6, verseStart: 4 },
      { bookAbbrev: 'sl', chapter: 90, verseStart: 2 },
      { bookAbbrev: 'is', chapter: 6, verseStart: 3 },
      { bookAbbrev: 'sl', chapter: 139, verseStart: 1, verseEnd: 4 },
      { bookAbbrev: '1jo', chapter: 4, verseStart: 8 },
      { bookAbbrev: 'ml', chapter: 3, verseStart: 6 }
    ]
  },
  {
    id: 'dinheiro-e-financas',
    title: 'Dinheiro e Finanças',
    category: 'Caráter & Vida Diária',
    keywords: ['dinheiro', 'financas', 'riqueza', 'bens', 'salario', 'economia', 'mordomia', 'prosperidade', 'mamom'],
    passages: [
      { bookAbbrev: '1tm', chapter: 6, verseStart: 10 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 24 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 19, verseEnd: 21 },
      { bookAbbrev: 'pv', chapter: 21, verseStart: 5 },
      { bookAbbrev: 'pv', chapter: 13, verseStart: 11 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 5 },
      { bookAbbrev: 'lc', chapter: 16, verseStart: 10, verseEnd: 11 }
    ]
  },
  {
    id: 'discernimento',
    title: 'Discernimento Espiritual',
    category: 'Igreja & Vida Espiritual',
    keywords: ['discernimento', 'discernir', 'provar os espiritos', 'sabedoria', 'engano'],
    passages: [
      { bookAbbrev: '1jo', chapter: 4, verseStart: 1 },
      { bookAbbrev: 'hb', chapter: 5, verseStart: 14 },
      { bookAbbrev: 'fp', chapter: 1, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 2 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 21 },
      { bookAbbrev: '1rs', chapter: 3, verseStart: 9 }
    ]
  },
  {
    id: 'disciplina-e-correcao',
    title: 'Disciplina e Correção',
    category: 'Caráter & Vida Diária',
    keywords: ['disciplina', 'correcao', 'repreensao', 'educacao', 'ensino', 'tratamento de deus'],
    passages: [
      { bookAbbrev: 'hb', chapter: 12, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'hb', chapter: 12, verseStart: 11 },
      { bookAbbrev: 'pv', chapter: 3, verseStart: 11, verseEnd: 12 },
      { bookAbbrev: 'pv', chapter: 12, verseStart: 1 },
      { bookAbbrev: 'pv', chapter: 15, verseStart: 32 },
      { bookAbbrev: 'ap', chapter: 3, verseStart: 19 }
    ]
  },
  {
    id: 'discipulado',
    title: 'Discipulado e Seguir a Cristo',
    category: 'Igreja & Vida Espiritual',
    keywords: ['discipulado', 'discipulo', 'seguir a jesus', 'negar a si mesmo', 'tomar a cruz'],
    passages: [
      { bookAbbrev: 'lc', chapter: 9, verseStart: 23 },
      { bookAbbrev: 'mt', chapter: 28, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: 'jo', chapter: 8, verseStart: 31, verseEnd: 32 },
      { bookAbbrev: 'jo', chapter: 13, verseStart: 35 },
      { bookAbbrev: '2tm', chapter: 2, verseStart: 2 },
      { bookAbbrev: 'lc', chapter: 14, verseStart: 27 }
    ]
  },
  {
    id: 'dividas-e-emprestimos',
    title: 'Dívidas e Empréstimos',
    category: 'Caráter & Vida Diária',
    keywords: ['divida', 'dividas', 'emprestimo', 'fiador', 'juros', 'dever', 'credito', 'pagar'],
    passages: [
      { bookAbbrev: 'pv', chapter: 22, verseStart: 7 },
      { bookAbbrev: 'rm', chapter: 13, verseStart: 8 },
      { bookAbbrev: 'pv', chapter: 22, verseStart: 26, verseEnd: 27 },
      { bookAbbrev: 'sl', chapter: 37, verseStart: 21 },
      { bookAbbrev: 'pv', chapter: 3, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: 'pv', chapter: 17, verseStart: 18 }
    ]
  },
  {
    id: 'divorcio',
    title: 'Divórcio e Separação',
    category: 'Família & Relacionamentos',
    keywords: ['divorcio', 'separacao', 'separar', 'novo casamento', 'desquite', 'recasamento'],
    passages: [
      { bookAbbrev: 'ml', chapter: 2, verseStart: 16 },
      { bookAbbrev: 'mt', chapter: 19, verseStart: 6, verseEnd: 9 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 31, verseEnd: 32 },
      { bookAbbrev: 'mc', chapter: 10, verseStart: 9, verseEnd: 12 },
      { bookAbbrev: '1co', chapter: 7, verseStart: 10, verseEnd: 15 },
      { bookAbbrev: 'rm', chapter: 7, verseStart: 2, verseEnd: 3 }
    ]
  },
  {
    id: 'dizimos-e-ofertas',
    title: 'Dízimos e Ofertas',
    category: 'Igreja & Vida Espiritual',
    keywords: ['dizimo', 'dizimos', 'oferta', 'ofertas', 'contribuicao', 'primicias', 'generosidade'],
    passages: [
      { bookAbbrev: '2co', chapter: 9, verseStart: 6, verseEnd: 8 },
      { bookAbbrev: 'ml', chapter: 3, verseStart: 10 },
      { bookAbbrev: 'pv', chapter: 3, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'mt', chapter: 23, verseStart: 23 },
      { bookAbbrev: '1co', chapter: 16, verseStart: 2 },
      { bookAbbrev: 'lc', chapter: 6, verseStart: 38 }
    ]
  },
  {
    id: 'doenca-e-cura',
    title: 'Doença e Cura',
    category: 'Emoções & Lutas da Alma',
    keywords: ['doenca', 'enfermidade', 'cura', 'curar', 'saude', 'medico', 'hospital', 'dor fisica'],
    passages: [
      { bookAbbrev: 'tg', chapter: 5, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: 'sl', chapter: 103, verseStart: 2, verseEnd: 3 },
      { bookAbbrev: 'sl', chapter: 41, verseStart: 3 },
      { bookAbbrev: 'jr', chapter: 17, verseStart: 14 },
      { bookAbbrev: 'mt', chapter: 4, verseStart: 23 },
      { bookAbbrev: '2co', chapter: 12, verseStart: 7, verseEnd: 9 },
      { bookAbbrev: 'ex', chapter: 15, verseStart: 26 }
    ]
  },
  {
    id: 'dominio-proprio',
    title: 'Domínio Próprio e Autocontrole',
    category: 'Caráter & Vida Diária',
    keywords: ['dominio proprio', 'autocontrole', 'temperanca', 'impulso', 'disciplina pessoal'],
    passages: [
      { bookAbbrev: 'pv', chapter: 25, verseStart: 28 },
      { bookAbbrev: 'pv', chapter: 16, verseStart: 32 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: '2tm', chapter: 1, verseStart: 7 },
      { bookAbbrev: '1co', chapter: 9, verseStart: 25, verseEnd: 27 },
      { bookAbbrev: 'tt', chapter: 2, verseStart: 11, verseEnd: 12 }
    ]
  },
  {
    id: 'dons-espirituais',
    title: 'Dons Espirituais',
    category: 'Igreja & Vida Espiritual',
    keywords: ['dons', 'dons espirituais', 'talentos', 'ministerio', 'servir na igreja'],
    passages: [
      { bookAbbrev: '1co', chapter: 12, verseStart: 4, verseEnd: 7 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 6, verseEnd: 8 },
      { bookAbbrev: '1pe', chapter: 4, verseStart: 10, verseEnd: 11 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 11, verseEnd: 12 },
      { bookAbbrev: '1co', chapter: 14, verseStart: 12 }
    ]
  },
  {
    id: 'drogas-vicios-sobriedade',
    title: 'Drogas, Vícios e Sobriedade',
    category: 'Caráter & Vida Diária',
    keywords: ['drogas', 'vicio', 'vicios', 'maconha', 'cigarro', 'tabaco', 'dependencia', 'sobriedade', 'libertacao'],
    passages: [
      { bookAbbrev: '1co', chapter: 6, verseStart: 12 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: '2pe', chapter: 2, verseStart: 19 },
      { bookAbbrev: '1pe', chapter: 4, verseStart: 7 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 8 },
      { bookAbbrev: 'jo', chapter: 8, verseStart: 34, verseEnd: 36 },
      { bookAbbrev: 'rm', chapter: 6, verseStart: 14 }
    ]
  },
  {
    id: 'duvida-na-fe',
    title: 'Dúvida na Fé',
    category: 'Emoções & Lutas da Alma',
    keywords: ['duvida', 'duvidar', 'incredulidade', 'crise de fe', 'tome', 'incerteza'],
    passages: [
      { bookAbbrev: 'mc', chapter: 9, verseStart: 24 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 6, verseEnd: 8 },
      { bookAbbrev: 'jd', chapter: 1, verseStart: 22 },
      { bookAbbrev: 'jo', chapter: 20, verseStart: 27, verseEnd: 29 },
      { bookAbbrev: 'mt', chapter: 14, verseStart: 31 },
      { bookAbbrev: 'rm', chapter: 10, verseStart: 17 }
    ]
  },

  // ─── E ───────────────────────────────────────────────────────────────────
  {
    id: 'egoismo',
    title: 'Egoísmo',
    category: 'Caráter & Vida Diária',
    keywords: ['egoismo', 'egoista', 'individualismo', 'interesse proprio', 'altruismo'],
    passages: [
      { bookAbbrev: 'fp', chapter: 2, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 24 },
      { bookAbbrev: '1co', chapter: 13, verseStart: 5 },
      { bookAbbrev: 'tg', chapter: 3, verseStart: 16 },
      { bookAbbrev: '2tm', chapter: 3, verseStart: 2 },
      { bookAbbrev: 'rm', chapter: 15, verseStart: 1, verseEnd: 2 }
    ]
  },
  {
    id: 'encorajamento-e-edificacao',
    title: 'Encorajamento e Edificação Mútua',
    category: 'Família & Relacionamentos',
    keywords: ['encorajamento', 'encorajar', 'edificar', 'apoio', 'animar', 'consolacao'],
    passages: [
      { bookAbbrev: '1ts', chapter: 5, verseStart: 11 },
      { bookAbbrev: 'hb', chapter: 3, verseStart: 13 },
      { bookAbbrev: 'hb', chapter: 10, verseStart: 24, verseEnd: 25 },
      { bookAbbrev: 'pv', chapter: 12, verseStart: 25 },
      { bookAbbrev: 'gl', chapter: 6, verseStart: 2 }
    ]
  },
  {
    id: 'entretenimento-pureza-mental',
    title: 'Entretenimento e Pureza da Mente',
    category: 'Caráter & Vida Diária',
    keywords: ['entretenimento', 'filmes', 'series', 'jogos', 'internet', 'redes sociais', 'pensamentos', 'mente pura'],
    passages: [
      { bookAbbrev: 'fp', chapter: 4, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 101, verseStart: 3 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 12 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 23 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 31 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 2 }
    ]
  },
  {
    id: 'escravidao-e-dignidade',
    title: 'Escravidão, Opressão e Dignidade Humana',
    category: 'Vida, Ética & Sociedade',
    keywords: ['escravidao', 'escravo', 'libertacao', 'dignidade', 'direitos humanos', 'igualdade'],
    passages: [
      { bookAbbrev: 'gl', chapter: 3, verseStart: 28 },
      { bookAbbrev: 'fm', chapter: 1, verseStart: 15, verseEnd: 16 },
      { bookAbbrev: '1co', chapter: 7, verseStart: 21, verseEnd: 23 },
      { bookAbbrev: 'ex', chapter: 21, verseStart: 16 },
      { bookAbbrev: '1tm', chapter: 1, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'lc', chapter: 4, verseStart: 18 }
    ]
  },
  {
    id: 'esperanca',
    title: 'Esperança',
    category: 'Emoções & Lutas da Alma',
    keywords: ['esperanca', 'futuro', 'confianca', 'expectativa', 'otimismo biblico'],
    passages: [
      { bookAbbrev: 'rm', chapter: 15, verseStart: 13 },
      { bookAbbrev: 'hb', chapter: 6, verseStart: 19 },
      { bookAbbrev: 'rm', chapter: 5, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: 'lm', chapter: 3, verseStart: 21, verseEnd: 24 },
      { bookAbbrev: '1pe', chapter: 1, verseStart: 3 },
      { bookAbbrev: 'sl', chapter: 39, verseStart: 7 }
    ]
  },
  {
    id: 'espirito-santo',
    title: 'Espírito Santo',
    category: 'Deus, Cristo & Salvação',
    keywords: ['espirito santo', 'consolador', 'paracleto', 'pentecostes', 'uncao', 'habitar'],
    passages: [
      { bookAbbrev: 'jo', chapter: 14, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'jo', chapter: 14, verseStart: 26 },
      { bookAbbrev: 'jo', chapter: 16, verseStart: 13 },
      { bookAbbrev: 'at', chapter: 1, verseStart: 8 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 14, verseEnd: 16 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 26 },
      { bookAbbrev: 'ef', chapter: 1, verseStart: 13, verseEnd: 14 }
    ]
  },
  {
    id: 'espiritismo-consulta-mortos',
    title: 'Espiritismo e Consulta aos Mortos',
    category: 'Igreja & Vida Espiritual',
    keywords: ['espiritismo', 'mediuns', 'necromancia', 'consulta aos mortos', 'mesa branca', 'reencarnacao', 'espiritos'],
    passages: [
      { bookAbbrev: 'dt', chapter: 18, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: 'lv', chapter: 19, verseStart: 31 },
      { bookAbbrev: 'lv', chapter: 20, verseStart: 6 },
      { bookAbbrev: 'is', chapter: 8, verseStart: 19 },
      { bookAbbrev: 'hb', chapter: 9, verseStart: 27 },
      { bookAbbrev: 'lc', chapter: 16, verseStart: 26 }
    ]
  },
  {
    id: 'esposas',
    title: 'Esposas (Papel e Virtude)',
    category: 'Família & Relacionamentos',
    keywords: ['esposa', 'esposas', 'mulher virtuosa', 'casamento', 'lar'],
    passages: [
      { bookAbbrev: 'pv', chapter: 31, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: 'pv', chapter: 31, verseStart: 26, verseEnd: 30 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 22, verseEnd: 24 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 33 },
      { bookAbbrev: 'pv', chapter: 14, verseStart: 1 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 1, verseEnd: 4 }
    ]
  },
  {
    id: 'estrangeiros-e-refugiados',
    title: 'Estrangeiros e Acolhimento',
    category: 'Vida, Ética & Sociedade',
    keywords: ['estrangeiro', 'estrangeiros', 'imigrante', 'refugiado', 'xenofobia', 'acolhimento'],
    passages: [
      { bookAbbrev: 'lv', chapter: 19, verseStart: 33, verseEnd: 34 },
      { bookAbbrev: 'dt', chapter: 10, verseStart: 18, verseEnd: 19 },
      { bookAbbrev: 'sl', chapter: 146, verseStart: 9 },
      { bookAbbrev: 'mt', chapter: 25, verseStart: 35 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 2 },
      { bookAbbrev: 'zc', chapter: 7, verseStart: 10 }
    ]
  },
  {
    id: 'eutanasia',
    title: 'Eutanásia e Soberania sobre a Vida',
    category: 'Vida, Ética & Sociedade',
    keywords: ['eutanasia', 'suicidio assistido', 'morte assistida', 'abreviar a vida', 'fim da vida', 'soberania de deus'],
    passages: [
      { bookAbbrev: 'dt', chapter: 32, verseStart: 39 },
      { bookAbbrev: 'ec', chapter: 8, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 31, verseStart: 15 },
      { bookAbbrev: 'jo_at', chapter: 12, verseStart: 10 },
      { bookAbbrev: 'ex', chapter: 20, verseStart: 13 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 7, verseEnd: 8 }
    ]
  },
  {
    id: 'evangelho',
    title: 'Evangelho (As Boas Novas)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['evangelho', 'boas novas', 'mensagem da cruz', 'salvacao', 'cristo'],
    passages: [
      { bookAbbrev: '1co', chapter: 15, verseStart: 1, verseEnd: 4 },
      { bookAbbrev: 'rm', chapter: 1, verseStart: 16 },
      { bookAbbrev: 'jo', chapter: 3, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'rm', chapter: 6, verseStart: 23 },
      { bookAbbrev: 'rm', chapter: 10, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'gl', chapter: 1, verseStart: 8, verseEnd: 9 }
    ]
  },
  {
    id: 'evangelismo-e-missoes',
    title: 'Evangelismo e Missões',
    category: 'Igreja & Vida Espiritual',
    keywords: ['evangelismo', 'evangelizar', 'missoes', 'pregar', 'grande comissao', 'testemunhar'],
    passages: [
      { bookAbbrev: 'mt', chapter: 28, verseStart: 18, verseEnd: 20 },
      { bookAbbrev: 'mc', chapter: 16, verseStart: 15 },
      { bookAbbrev: 'at', chapter: 1, verseStart: 8 },
      { bookAbbrev: 'rm', chapter: 10, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 15 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 18, verseEnd: 20 }
    ]
  },

  // ─── F ───────────────────────────────────────────────────────────────────
  {
    id: 'falsos-profetas',
    title: 'Falsos Profetas e Falsos Mestres',
    category: 'Igreja & Vida Espiritual',
    keywords: ['falso profeta', 'falso mestre', 'heresia', 'engano', 'lobos', 'seitas'],
    passages: [
      { bookAbbrev: 'mt', chapter: 7, verseStart: 15, verseEnd: 16 },
      { bookAbbrev: '2pe', chapter: 2, verseStart: 1, verseEnd: 3 },
      { bookAbbrev: '1jo', chapter: 4, verseStart: 1 },
      { bookAbbrev: 'mt', chapter: 24, verseStart: 11 },
      { bookAbbrev: 'gl', chapter: 1, verseStart: 8 },
      { bookAbbrev: 'at', chapter: 17, verseStart: 11 }
    ]
  },
  {
    id: 'familia-e-lar',
    title: 'Família e Lar',
    category: 'Família & Relacionamentos',
    keywords: ['familia', 'lar', 'casa', 'parentes', 'pais e filhos', 'familia crista'],
    passages: [
      { bookAbbrev: 'js', chapter: 24, verseStart: 15 },
      { bookAbbrev: 'sl', chapter: 127, verseStart: 1 },
      { bookAbbrev: 'ef', chapter: 6, verseStart: 1, verseEnd: 4 },
      { bookAbbrev: '1tm', chapter: 5, verseStart: 8 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 18, verseEnd: 21 },
      { bookAbbrev: 'sl', chapter: 128, verseStart: 1, verseEnd: 4 }
    ]
  },
  {
    id: 'fe',
    title: 'Fé',
    category: 'Deus, Cristo & Salvação',
    keywords: ['fe', 'crer', 'crenca', 'confianca', 'sola fide', 'andar por fe'],
    passages: [
      { bookAbbrev: 'hb', chapter: 11, verseStart: 1 },
      { bookAbbrev: 'hb', chapter: 11, verseStart: 6 },
      { bookAbbrev: 'rm', chapter: 10, verseStart: 17 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 7 },
      { bookAbbrev: 'ef', chapter: 2, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'tg', chapter: 2, verseStart: 17 },
      { bookAbbrev: 'mc', chapter: 11, verseStart: 22 }
    ]
  },
  {
    id: 'feiticaria-e-ocultismo',
    title: 'Feitiçaria, Magia e Ocultismo',
    category: 'Igreja & Vida Espiritual',
    keywords: ['feiticaria', 'bruxaria', 'magia', 'ocultismo', 'simpatia', 'macumba', 'taro', 'cartomancia', 'supersticao'],
    passages: [
      { bookAbbrev: 'dt', chapter: 18, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 19, verseEnd: 21 },
      { bookAbbrev: 'ap', chapter: 21, verseStart: 8 },
      { bookAbbrev: 'at', chapter: 19, verseStart: 19 },
      { bookAbbrev: 'lv', chapter: 19, verseStart: 26 },
      { bookAbbrev: '1sm', chapter: 15, verseStart: 23 }
    ]
  },
  {
    id: 'fidelidade-de-deus',
    title: 'Fidelidade de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['fidelidade', 'deus fiel', 'lealdade', 'promessas cumpridas', 'constancia'],
    passages: [
      { bookAbbrev: 'lm', chapter: 3, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: '2tm', chapter: 2, verseStart: 13 },
      { bookAbbrev: 'dt', chapter: 7, verseStart: 9 },
      { bookAbbrev: '1co', chapter: 1, verseStart: 9 },
      { bookAbbrev: '2ts', chapter: 3, verseStart: 3 },
      { bookAbbrev: 'hb', chapter: 10, verseStart: 23 }
    ]
  },
  {
    id: 'filhos-e-educacao',
    title: 'Filhos e Criação de Filhos',
    category: 'Família & Relacionamentos',
    keywords: ['filhos', 'criancas', 'educacao', 'criar filhos', 'maternidade', 'paternidade', 'heranca'],
    passages: [
      { bookAbbrev: 'sl', chapter: 127, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: 'pv', chapter: 22, verseStart: 6 },
      { bookAbbrev: 'ef', chapter: 6, verseStart: 4 },
      { bookAbbrev: 'dt', chapter: 6, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 21 },
      { bookAbbrev: 'mt', chapter: 19, verseStart: 14 },
      { bookAbbrev: 'pv', chapter: 29, verseStart: 17 }
    ]
  },
  {
    id: 'fofoca-e-mexerico',
    title: 'Fofoca e Mexerico',
    category: 'Caráter & Vida Diária',
    keywords: ['fofoca', 'fofoqueiro', 'mexerico', 'intriga', 'boato', 'falar dos outros'],
    passages: [
      { bookAbbrev: 'pv', chapter: 16, verseStart: 28 },
      { bookAbbrev: 'pv', chapter: 11, verseStart: 13 },
      { bookAbbrev: 'pv', chapter: 26, verseStart: 20 },
      { bookAbbrev: 'pv', chapter: 20, verseStart: 19 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 29 },
      { bookAbbrev: '1tm', chapter: 5, verseStart: 13 },
      { bookAbbrev: 'lv', chapter: 19, verseStart: 16 }
    ]
  },
  {
    id: 'forca-na-fraqueza',
    title: 'Força na Fraqueza',
    category: 'Emoções & Lutas da Alma',
    keywords: ['forca', 'fraqueza', 'fraco', 'poder de deus', 'sustento', 'resistir'],
    passages: [
      { bookAbbrev: '2co', chapter: 12, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'fp', chapter: 4, verseStart: 13 },
      { bookAbbrev: 'is', chapter: 40, verseStart: 29, verseEnd: 31 },
      { bookAbbrev: 'sl', chapter: 46, verseStart: 1 },
      { bookAbbrev: 'ef', chapter: 6, verseStart: 10 },
      { bookAbbrev: 'sl', chapter: 18, verseStart: 32 }
    ]
  },
  {
    id: 'fruto-do-espirito',
    title: 'Fruto do Espírito',
    category: 'Igreja & Vida Espiritual',
    keywords: ['fruto do espirito', 'amor alegria paz', 'carater cristao', 'galatas 5'],
    passages: [
      { bookAbbrev: 'gl', chapter: 5, verseStart: 22, verseEnd: 25 },
      { bookAbbrev: 'jo', chapter: 15, verseStart: 4, verseEnd: 5 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 9 },
      { bookAbbrev: 'cl', chapter: 1, verseStart: 10 },
      { bookAbbrev: 'mt', chapter: 7, verseStart: 16, verseEnd: 18 }
    ]
  },

  // ─── G ───────────────────────────────────────────────────────────────────
  {
    id: 'galardao-e-recompensa',
    title: 'Galardão e Recompensa Eterna',
    category: 'Eternidade & Últimos Dias',
    keywords: ['galardao', 'recompensa', 'coroa', 'tribunal de cristo', 'obras', 'fidelidade'],
    passages: [
      { bookAbbrev: '1co', chapter: 3, verseStart: 13, verseEnd: 15 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 10 },
      { bookAbbrev: 'ap', chapter: 22, verseStart: 12 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 23, verseEnd: 24 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: '2tm', chapter: 4, verseStart: 8 }
    ]
  },
  {
    id: 'generosidade-e-caridade',
    title: 'Generosidade e Caridade',
    category: 'Caráter & Vida Diária',
    keywords: ['generosidade', 'caridade', 'doacao', 'esmola', 'ajudar', 'compartilhar'],
    passages: [
      { bookAbbrev: 'pv', chapter: 11, verseStart: 24, verseEnd: 25 },
      { bookAbbrev: 'at', chapter: 20, verseStart: 35 },
      { bookAbbrev: '2co', chapter: 9, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 2, verseEnd: 4 },
      { bookAbbrev: 'pv', chapter: 19, verseStart: 17 },
      { bookAbbrev: '1jo', chapter: 3, verseStart: 17 }
    ]
  },
  {
    id: 'gloria-de-deus',
    title: 'Glória de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['gloria', 'gloria de deus', 'soli deo gloria', 'honra', 'majestade'],
    passages: [
      { bookAbbrev: 'rm', chapter: 11, verseStart: 36 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 31 },
      { bookAbbrev: 'sl', chapter: 19, verseStart: 1 },
      { bookAbbrev: 'is', chapter: 42, verseStart: 8 },
      { bookAbbrev: 'ap', chapter: 4, verseStart: 11 }
    ]
  },
  {
    id: 'governo-e-politica',
    title: 'Governo, Política e Autoridades',
    category: 'Vida, Ética & Sociedade',
    keywords: ['governo', 'politica', 'autoridade', 'leis', 'impostos', 'estado', 'governantes', 'cidadania'],
    passages: [
      { bookAbbrev: 'rm', chapter: 13, verseStart: 1, verseEnd: 7 },
      { bookAbbrev: '1tm', chapter: 2, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: '1pe', chapter: 2, verseStart: 13, verseEnd: 17 },
      { bookAbbrev: 'at', chapter: 5, verseStart: 29 },
      { bookAbbrev: 'mt', chapter: 22, verseStart: 21 },
      { bookAbbrev: 'pv', chapter: 29, verseStart: 2 },
      { bookAbbrev: 'dn', chapter: 2, verseStart: 21 }
    ]
  },
  {
    id: 'graca-de-deus',
    title: 'Graça de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['graca', 'favor imerecido', 'sola gratia', 'misericordia', 'salvacao pela graca'],
    passages: [
      { bookAbbrev: 'ef', chapter: 2, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'rm', chapter: 3, verseStart: 23, verseEnd: 24 },
      { bookAbbrev: '2co', chapter: 12, verseStart: 9 },
      { bookAbbrev: 'tt', chapter: 2, verseStart: 11, verseEnd: 12 },
      { bookAbbrev: 'jo', chapter: 1, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'rm', chapter: 5, verseStart: 20, verseEnd: 21 }
    ]
  },
  {
    id: 'gratidao',
    title: 'Gratidão',
    category: 'Caráter & Vida Diária',
    keywords: ['gratidao', 'agradecer', 'acoes de gracas', 'grato', 'reconhecimento'],
    passages: [
      { bookAbbrev: '1ts', chapter: 5, verseStart: 18 },
      { bookAbbrev: 'sl', chapter: 107, verseStart: 1 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 15, verseEnd: 17 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 20 },
      { bookAbbrev: 'sl', chapter: 103, verseStart: 2 },
      { bookAbbrev: 'fp', chapter: 4, verseStart: 6 }
    ]
  },
  {
    id: 'gula-e-moderacao',
    title: 'Gula e Moderação',
    category: 'Caráter & Vida Diária',
    keywords: ['gula', 'glutonaria', 'excesso', 'comer demais', 'moderacao', 'temperanca'],
    passages: [
      { bookAbbrev: 'pv', chapter: 23, verseStart: 20, verseEnd: 21 },
      { bookAbbrev: 'pv', chapter: 25, verseStart: 16 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 12 },
      { bookAbbrev: 'fp', chapter: 3, verseStart: 19 },
      { bookAbbrev: '1co', chapter: 9, verseStart: 27 }
    ]
  },
  {
    id: 'guerra-e-paz',
    title: 'Guerra e Paz',
    category: 'Vida, Ética & Sociedade',
    keywords: ['guerra', 'conflito', 'paz', 'pacificador', 'violencia', 'nacoes'],
    passages: [
      { bookAbbrev: 'tg', chapter: 4, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 9 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 18 },
      { bookAbbrev: 'ec', chapter: 3, verseStart: 8 },
      { bookAbbrev: 'is', chapter: 2, verseStart: 4 },
      { bookAbbrev: 'mt', chapter: 24, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: 'sl', chapter: 46, verseStart: 9 }
    ]
  },

  // ─── H ───────────────────────────────────────────────────────────────────
  {
    id: 'hipocrisia',
    title: 'Hipocrisia',
    category: 'Caráter & Vida Diária',
    keywords: ['hipocrisia', 'hipocrita', 'falsidade', 'aparencia', 'fariseus', 'fingimento'],
    passages: [
      { bookAbbrev: 'mt', chapter: 23, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'mt', chapter: 15, verseStart: 7, verseEnd: 8 },
      { bookAbbrev: 'lc', chapter: 12, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'tt', chapter: 1, verseStart: 16 },
      { bookAbbrev: '1jo', chapter: 2, verseStart: 4 }
    ]
  },
  {
    id: 'homicidio-e-violencia',
    title: 'Homicídio e Violência',
    category: 'Vida, Ética & Sociedade',
    keywords: ['homicidio', 'assassinato', 'matar', 'violencia', 'agressao', 'sangue inocente'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 13 },
      { bookAbbrev: 'gn', chapter: 9, verseStart: 6 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 21, verseEnd: 22 },
      { bookAbbrev: '1jo', chapter: 3, verseStart: 15 },
      { bookAbbrev: 'sl', chapter: 11, verseStart: 5 },
      { bookAbbrev: 'pv', chapter: 6, verseStart: 16, verseEnd: 17 }
    ]
  },
  {
    id: 'homossexualidade',
    title: 'Homossexualidade',
    category: 'Família & Relacionamentos',
    keywords: ['homossexualidade', 'homossexual', 'gay', 'lesbica', 'lgbt', 'sexualidade', 'plano de deus'],
    passages: [
      { bookAbbrev: 'gn', chapter: 1, verseStart: 27 },
      { bookAbbrev: 'gn', chapter: 2, verseStart: 24 },
      { bookAbbrev: 'lv', chapter: 18, verseStart: 22 },
      { bookAbbrev: 'rm', chapter: 1, verseStart: 26, verseEnd: 27 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 9, verseEnd: 11 },
      { bookAbbrev: '1tm', chapter: 1, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'jd', chapter: 1, verseStart: 7 }
    ]
  },
  {
    id: 'honestidade-e-integridade',
    title: 'Honestidade e Integridade',
    category: 'Caráter & Vida Diária',
    keywords: ['honestidade', 'integridade', 'retidao', 'sinceridade', 'etica', 'carater'],
    passages: [
      { bookAbbrev: 'pv', chapter: 10, verseStart: 9 },
      { bookAbbrev: 'pv', chapter: 11, verseStart: 3 },
      { bookAbbrev: '2co', chapter: 8, verseStart: 21 },
      { bookAbbrev: 'lc', chapter: 16, verseStart: 10 },
      { bookAbbrev: 'pv', chapter: 20, verseStart: 7 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 18 }
    ]
  },
  {
    id: 'honra-aos-pais',
    title: 'Honra aos Pais',
    category: 'Família & Relacionamentos',
    keywords: ['pais', 'pai', 'mae', 'honrar pai e mae', 'obediencia aos pais', 'quinto mandamento'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 12 },
      { bookAbbrev: 'ef', chapter: 6, verseStart: 1, verseEnd: 3 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 20 },
      { bookAbbrev: 'pv', chapter: 1, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'pv', chapter: 23, verseStart: 22 },
      { bookAbbrev: '1tm', chapter: 5, verseStart: 4 }
    ]
  },
  {
    id: 'hospitalidade',
    title: 'Hospitalidade',
    category: 'Família & Relacionamentos',
    keywords: ['hospitalidade', 'hospedar', 'receber', 'acolher', 'visitas'],
    passages: [
      { bookAbbrev: 'rm', chapter: 12, verseStart: 13 },
      { bookAbbrev: '1pe', chapter: 4, verseStart: 9 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 2 },
      { bookAbbrev: '1tm', chapter: 3, verseStart: 2 },
      { bookAbbrev: 'mt', chapter: 25, verseStart: 35 }
    ]
  },
  {
    id: 'humildade',
    title: 'Humildade',
    category: 'Caráter & Vida Diária',
    keywords: ['humildade', 'humilde', 'modestia', 'mansidao', 'servir', 'abaixar-se'],
    passages: [
      { bookAbbrev: 'fp', chapter: 2, verseStart: 3, verseEnd: 8 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 6 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 10 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'pv', chapter: 22, verseStart: 4 },
      { bookAbbrev: 'mq', chapter: 6, verseStart: 8 }
    ]
  },

  // ─── I ───────────────────────────────────────────────────────────────────
  {
    id: 'idolatria',
    title: 'Idolatria e Imagens',
    category: 'Igreja & Vida Espiritual',
    keywords: ['idolatria', 'idolos', 'imagens', 'escultura', 'deuses estranhos', 'adoracao exclusiva'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: 'sl', chapter: 115, verseStart: 4, verseEnd: 8 },
      { bookAbbrev: 'is', chapter: 42, verseStart: 8 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 14 },
      { bookAbbrev: '1jo', chapter: 5, verseStart: 21 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 5 }
    ]
  },
  {
    id: 'idosos-e-velhice',
    title: 'Idosos e Velhice',
    category: 'Vida, Ética & Sociedade',
    keywords: ['idosos', 'idoso', 'velhice', 'terceira idade', 'cabelos brancos', 'avos', 'anciaos'],
    passages: [
      { bookAbbrev: 'lv', chapter: 19, verseStart: 32 },
      { bookAbbrev: 'pv', chapter: 16, verseStart: 31 },
      { bookAbbrev: 'sl', chapter: 92, verseStart: 14 },
      { bookAbbrev: 'is', chapter: 46, verseStart: 4 },
      { bookAbbrev: '1tm', chapter: 5, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'jo_at', chapter: 12, verseStart: 12 }
    ]
  },
  {
    id: 'igreja-corpo-de-cristo',
    title: 'Igreja (O Corpo de Cristo)',
    category: 'Igreja & Vida Espiritual',
    keywords: ['igreja', 'ekklesia', 'corpo de cristo', 'noiva de cristo', 'comunidade', 'templo'],
    passages: [
      { bookAbbrev: 'mt', chapter: 16, verseStart: 18 },
      { bookAbbrev: 'ef', chapter: 1, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: '1co', chapter: 12, verseStart: 12, verseEnd: 14 },
      { bookAbbrev: 'ef', chapter: 2, verseStart: 19, verseEnd: 22 },
      { bookAbbrev: 'at', chapter: 2, verseStart: 42, verseEnd: 47 },
      { bookAbbrev: '1tm', chapter: 3, verseStart: 15 }
    ]
  },
  {
    id: 'imoralidade-sexual',
    title: 'Imoralidade Sexual e Fornicação',
    category: 'Família & Relacionamentos',
    keywords: ['fornicacao', 'imoralidade', 'prostituicao', 'sexo fora do casamento', 'lascivia', 'impureza'],
    passages: [
      { bookAbbrev: '1co', chapter: 6, verseStart: 18, verseEnd: 20 },
      { bookAbbrev: '1ts', chapter: 4, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 3 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 4 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 5 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 19, verseEnd: 21 }
    ]
  },
  {
    id: 'inferno-e-juizo',
    title: 'Inferno e Perdição Eterna',
    category: 'Eternidade & Últimos Dias',
    keywords: ['inferno', 'lago de fogo', 'condenacao', 'juizo eterno', 'perdicao', 'geena'],
    passages: [
      { bookAbbrev: 'mt', chapter: 25, verseStart: 41 },
      { bookAbbrev: 'mt', chapter: 25, verseStart: 46 },
      { bookAbbrev: 'ap', chapter: 20, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: '2ts', chapter: 1, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'mc', chapter: 9, verseStart: 43, verseEnd: 44 },
      { bookAbbrev: 'mt', chapter: 10, verseStart: 28 }
    ]
  },
  {
    id: 'inimigos-como-tratar',
    title: 'Inimigos (Como Tratar)',
    category: 'Família & Relacionamentos',
    keywords: ['inimigos', 'inimigo', 'adversario', 'amar os inimigos', 'abencoar', 'perseguidores'],
    passages: [
      { bookAbbrev: 'mt', chapter: 5, verseStart: 43, verseEnd: 45 },
      { bookAbbrev: 'lc', chapter: 6, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 19, verseEnd: 21 },
      { bookAbbrev: 'pv', chapter: 25, verseStart: 21, verseEnd: 22 },
      { bookAbbrev: 'pv', chapter: 24, verseStart: 17 }
    ]
  },
  {
    id: 'influencia-mas-companhias',
    title: 'Influência e Más Companhias',
    category: 'Família & Relacionamentos',
    keywords: ['mas companhias', 'influencia', 'amizades toxicas', 'andar com sabios', 'pressao de grupo'],
    passages: [
      { bookAbbrev: '1co', chapter: 15, verseStart: 33 },
      { bookAbbrev: 'pv', chapter: 13, verseStart: 20 },
      { bookAbbrev: 'sl', chapter: 1, verseStart: 1 },
      { bookAbbrev: 'pv', chapter: 22, verseStart: 24, verseEnd: 25 },
      { bookAbbrev: 'pv', chapter: 12, verseStart: 26 }
    ]
  },
  {
    id: 'injustica-e-opressao',
    title: 'Injustiça e Opressão',
    category: 'Vida, Ética & Sociedade',
    keywords: ['injustica', 'opressao', 'oprimidos', 'abuso', 'desigualdade', 'clamar por justica'],
    passages: [
      { bookAbbrev: 'sl', chapter: 103, verseStart: 6 },
      { bookAbbrev: 'is', chapter: 1, verseStart: 17 },
      { bookAbbrev: 'pv', chapter: 31, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'mq', chapter: 6, verseStart: 8 },
      { bookAbbrev: 'am', chapter: 5, verseStart: 24 },
      { bookAbbrev: 'sl', chapter: 9, verseStart: 9 }
    ]
  },
  {
    id: 'insonia-e-sono-em-paz',
    title: 'Insônia e Sono em Paz',
    category: 'Emoções & Lutas da Alma',
    keywords: ['insonia', 'sono', 'dormir', 'pesadelos', 'noite', 'descanso noturno'],
    passages: [
      { bookAbbrev: 'sl', chapter: 4, verseStart: 8 },
      { bookAbbrev: 'pv', chapter: 3, verseStart: 24 },
      { bookAbbrev: 'sl', chapter: 127, verseStart: 2 },
      { bookAbbrev: 'sl', chapter: 3, verseStart: 5 },
      { bookAbbrev: 'sl', chapter: 121, verseStart: 3, verseEnd: 4 }
    ]
  },
  {
    id: 'inveja',
    title: 'Inveja',
    category: 'Emoções & Lutas da Alma',
    keywords: ['inveja', 'invejar', 'olho gordo', 'cobiça', 'comparacao'],
    passages: [
      { bookAbbrev: 'pv', chapter: 14, verseStart: 30 },
      { bookAbbrev: 'tg', chapter: 3, verseStart: 14, verseEnd: 16 },
      { bookAbbrev: '1co', chapter: 13, verseStart: 4 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 26 },
      { bookAbbrev: '1pe', chapter: 2, verseStart: 1 },
      { bookAbbrev: 'sl', chapter: 37, verseStart: 1, verseEnd: 2 }
    ]
  },
  {
    id: 'ira-e-raiva',
    title: 'Ira e Raiva',
    category: 'Emoções & Lutas da Alma',
    keywords: ['ira', 'raiva', 'odio', 'nervoso', 'furor', 'explodir', 'estresse', 'descontrole'],
    passages: [
      { bookAbbrev: 'ef', chapter: 4, verseStart: 26, verseEnd: 27 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: 'pv', chapter: 15, verseStart: 1 },
      { bookAbbrev: 'pv', chapter: 16, verseStart: 32 },
      { bookAbbrev: 'pv', chapter: 14, verseStart: 29 },
      { bookAbbrev: 'sl', chapter: 37, verseStart: 8 },
      { bookAbbrev: 'ec', chapter: 7, verseStart: 9 }
    ]
  },

  // ─── J ───────────────────────────────────────────────────────────────────
  {
    id: 'jejum',
    title: 'Jejum',
    category: 'Igreja & Vida Espiritual',
    keywords: ['jejum', 'jejuar', 'abstinencia', 'consagracao'],
    passages: [
      { bookAbbrev: 'mt', chapter: 6, verseStart: 16, verseEnd: 18 },
      { bookAbbrev: 'is', chapter: 58, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: 'jl', chapter: 2, verseStart: 12 },
      { bookAbbrev: 'at', chapter: 13, verseStart: 2, verseEnd: 3 },
      { bookAbbrev: 'mt', chapter: 4, verseStart: 2 }
    ]
  },
  {
    id: 'jesus-cristo',
    title: 'Jesus Cristo (Quem Ele É)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['jesus', 'cristo', 'messias', 'filho de deus', 'salvador', 'senhor', 'verbo', 'divindade'],
    passages: [
      { bookAbbrev: 'jo', chapter: 1, verseStart: 1, verseEnd: 3 },
      { bookAbbrev: 'jo', chapter: 1, verseStart: 14 },
      { bookAbbrev: 'jo', chapter: 14, verseStart: 6 },
      { bookAbbrev: 'cl', chapter: 1, verseStart: 15, verseEnd: 20 },
      { bookAbbrev: 'fp', chapter: 2, verseStart: 5, verseEnd: 11 },
      { bookAbbrev: 'hb', chapter: 1, verseStart: 1, verseEnd: 3 },
      { bookAbbrev: '1tm', chapter: 2, verseStart: 5 }
    ]
  },
  {
    id: 'jogos-de-azar',
    title: 'Jogos de Azar, Apostas e Dinheiro Fácil',
    category: 'Caráter & Vida Diária',
    keywords: ['jogos de azar', 'aposta', 'apostas', 'bet', 'cassino', 'loteria', 'dinheiro facil', 'ganancia'],
    passages: [
      { bookAbbrev: 'pv', chapter: 13, verseStart: 11 },
      { bookAbbrev: 'pv', chapter: 28, verseStart: 20 },
      { bookAbbrev: 'pv', chapter: 28, verseStart: 22 },
      { bookAbbrev: '1tm', chapter: 6, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'ec', chapter: 5, verseStart: 10 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 12 },
      { bookAbbrev: 'pv', chapter: 20, verseStart: 21 }
    ]
  },
  {
    id: 'juizo-final',
    title: 'Juízo Final',
    category: 'Eternidade & Últimos Dias',
    keywords: ['juizo final', 'trono branco', 'julgamento final', 'livro da vida', 'prestacao de contas'],
    passages: [
      { bookAbbrev: 'ap', chapter: 20, verseStart: 11, verseEnd: 15 },
      { bookAbbrev: 'hb', chapter: 9, verseStart: 27 },
      { bookAbbrev: 'at', chapter: 17, verseStart: 31 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 12 },
      { bookAbbrev: 'ec', chapter: 12, verseStart: 14 },
      { bookAbbrev: 'mt', chapter: 12, verseStart: 36 }
    ]
  },
  {
    id: 'julgamento-nao-julgueis',
    title: 'Julgamento ("Não Julgueis")',
    category: 'Caráter & Vida Diária',
    keywords: ['julgamento', 'julgar', 'nao julgueis', 'critica', 'condenar', 'discernir', 'reta justica'],
    passages: [
      { bookAbbrev: 'mt', chapter: 7, verseStart: 1, verseEnd: 5 },
      { bookAbbrev: 'jo', chapter: 7, verseStart: 24 },
      { bookAbbrev: 'rm', chapter: 2, verseStart: 1 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 10, verseEnd: 13 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 11, verseEnd: 12 },
      { bookAbbrev: 'gl', chapter: 6, verseStart: 1 }
    ]
  },
  {
    id: 'justica',
    title: 'Justiça de Deus e Retidão',
    category: 'Vida, Ética & Sociedade',
    keywords: ['justica', 'justo', 'direito', 'retidao', 'equidade', 'justica social'],
    passages: [
      { bookAbbrev: 'mq', chapter: 6, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 89, verseStart: 14 },
      { bookAbbrev: 'pv', chapter: 21, verseStart: 3 },
      { bookAbbrev: 'is', chapter: 1, verseStart: 17 },
      { bookAbbrev: 'am', chapter: 5, verseStart: 24 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 6 }
    ]
  },
  {
    id: 'justificacao-pela-fe',
    title: 'Justificação pela Fé',
    category: 'Deus, Cristo & Salvação',
    keywords: ['justificacao', 'justificado', 'fe', 'obras da lei', 'paz com deus'],
    passages: [
      { bookAbbrev: 'rm', chapter: 5, verseStart: 1 },
      { bookAbbrev: 'rm', chapter: 3, verseStart: 28 },
      { bookAbbrev: 'gl', chapter: 2, verseStart: 16 },
      { bookAbbrev: 'rm', chapter: 4, verseStart: 5 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 21 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 33 }
    ]
  },
  {
    id: 'juventude',
    title: 'Juventude e Mocidade',
    category: 'Família & Relacionamentos',
    keywords: ['juventude', 'jovens', 'jovem', 'mocidade', 'adolescente', 'adolescencia'],
    passages: [
      { bookAbbrev: '1tm', chapter: 4, verseStart: 12 },
      { bookAbbrev: 'ec', chapter: 12, verseStart: 1 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 9 },
      { bookAbbrev: '2tm', chapter: 2, verseStart: 22 },
      { bookAbbrev: '1jo', chapter: 2, verseStart: 14 },
      { bookAbbrev: 'lm', chapter: 3, verseStart: 27 }
    ]
  },

  // ─── L ───────────────────────────────────────────────────────────────────
  {
    id: 'lei-e-graca',
    title: 'Lei e Graça',
    category: 'Deus, Cristo & Salvação',
    keywords: ['lei', 'lei de moises', 'mandamentos', 'dez mandamentos', 'graca', 'velho testamento'],
    passages: [
      { bookAbbrev: 'jo', chapter: 1, verseStart: 17 },
      { bookAbbrev: 'rm', chapter: 6, verseStart: 14 },
      { bookAbbrev: 'rm', chapter: 10, verseStart: 4 },
      { bookAbbrev: 'gl', chapter: 3, verseStart: 24, verseEnd: 25 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 17 },
      { bookAbbrev: 'rm', chapter: 3, verseStart: 20, verseEnd: 22 }
    ]
  },
  {
    id: 'liberdade-crista',
    title: 'Liberdade em Cristo',
    category: 'Deus, Cristo & Salvação',
    keywords: ['liberdade', 'livre', 'libertacao', 'escravidao', 'consciencia'],
    passages: [
      { bookAbbrev: 'jo', chapter: 8, verseStart: 32 },
      { bookAbbrev: 'jo', chapter: 8, verseStart: 36 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 1 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 13 },
      { bookAbbrev: '2co', chapter: 3, verseStart: 17 },
      { bookAbbrev: '1pe', chapter: 2, verseStart: 16 }
    ]
  },
  {
    id: 'lideranca-e-servico',
    title: 'Liderança e Serviço',
    category: 'Igreja & Vida Espiritual',
    keywords: ['lideranca', 'lider', 'pastor', 'presbitero', 'diacono', 'servir', 'servo'],
    passages: [
      { bookAbbrev: 'mc', chapter: 10, verseStart: 42, verseEnd: 45 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 2, verseEnd: 3 },
      { bookAbbrev: '1tm', chapter: 3, verseStart: 1, verseEnd: 4 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 17 },
      { bookAbbrev: 'jo', chapter: 13, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: 'pv', chapter: 11, verseStart: 14 }
    ]
  },
  {
    id: 'lingua-e-palavras',
    title: 'Língua, Fala e Palavrões',
    category: 'Caráter & Vida Diária',
    keywords: ['lingua', 'palavras', 'palavrao', 'palavroes', 'xingamento', 'fala', 'boca', 'linguagem torpe'],
    passages: [
      { bookAbbrev: 'ef', chapter: 4, verseStart: 29 },
      { bookAbbrev: 'tg', chapter: 3, verseStart: 5, verseEnd: 10 },
      { bookAbbrev: 'pv', chapter: 18, verseStart: 21 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 8 },
      { bookAbbrev: 'cl', chapter: 4, verseStart: 6 },
      { bookAbbrev: 'mt', chapter: 12, verseStart: 36, verseEnd: 37 },
      { bookAbbrev: 'pv', chapter: 15, verseStart: 1 }
    ]
  },
  {
    id: 'luto-e-consolo',
    title: 'Luto e Consolo',
    category: 'Emoções & Lutas da Alma',
    keywords: ['luto', 'perda', 'falecimento', 'morte de ente querido', 'consolo', 'choro', 'saudade'],
    passages: [
      { bookAbbrev: 'sl', chapter: 34, verseStart: 18 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 4 },
      { bookAbbrev: 'jo', chapter: 11, verseStart: 35 },
      { bookAbbrev: '1ts', chapter: 4, verseStart: 13, verseEnd: 14 },
      { bookAbbrev: '2co', chapter: 1, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: 'ap', chapter: 21, verseStart: 4 },
      { bookAbbrev: 'sl', chapter: 23, verseStart: 4 }
    ]
  },

  // ─── M ───────────────────────────────────────────────────────────────────
  {
    id: 'mal-e-origem-do-mal',
    title: 'Mal e Vitória sobre o Mal',
    category: 'Deus, Cristo & Salvação',
    keywords: ['mal', 'maldade', 'origem do mal', 'vencer o mal', 'bem contra o mal'],
    passages: [
      { bookAbbrev: 'rm', chapter: 12, verseStart: 21 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 13, verseEnd: 15 },
      { bookAbbrev: 'gn', chapter: 50, verseStart: 20 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 14 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 22 },
      { bookAbbrev: 'rm', chapter: 5, verseStart: 12 }
    ]
  },
  {
    id: 'mansidao',
    title: 'Mansidão',
    category: 'Caráter & Vida Diária',
    keywords: ['mansidao', 'manso', 'serenidade', 'gentileza', 'brandura'],
    passages: [
      { bookAbbrev: 'mt', chapter: 5, verseStart: 5 },
      { bookAbbrev: 'mt', chapter: 11, verseStart: 29 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 2 },
      { bookAbbrev: 'pv', chapter: 15, verseStart: 1 },
      { bookAbbrev: 'tt', chapter: 3, verseStart: 2 }
    ]
  },
  {
    id: 'maria-mae-de-jesus',
    title: 'Maria (Mãe de Jesus)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['maria', 'mae de jesus', 'mediador', 'santos', 'intercessao'],
    passages: [
      { bookAbbrev: 'lc', chapter: 1, verseStart: 28, verseEnd: 31 },
      { bookAbbrev: 'lc', chapter: 1, verseStart: 38 },
      { bookAbbrev: 'lc', chapter: 1, verseStart: 46, verseEnd: 48 },
      { bookAbbrev: 'jo', chapter: 2, verseStart: 5 },
      { bookAbbrev: 'lc', chapter: 11, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: '1tm', chapter: 2, verseStart: 5 }
    ]
  },
  {
    id: 'maridos',
    title: 'Maridos (Amor e Responsabilidade)',
    category: 'Família & Relacionamentos',
    keywords: ['marido', 'maridos', 'esposo', 'homem casado', 'amar a esposa'],
    passages: [
      { bookAbbrev: 'ef', chapter: 5, verseStart: 25, verseEnd: 29 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 19 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 7 },
      { bookAbbrev: 'pv', chapter: 5, verseStart: 18, verseEnd: 19 },
      { bookAbbrev: 'ml', chapter: 2, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: '1tm', chapter: 5, verseStart: 8 }
    ]
  },
  {
    id: 'mediador-unico',
    title: 'Mediador Único (Jesus Cristo)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['mediador', 'intercessor', 'acesso ao pai', 'sumo sacerdote', 'santos'],
    passages: [
      { bookAbbrev: '1tm', chapter: 2, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'hb', chapter: 7, verseStart: 25 },
      { bookAbbrev: 'hb', chapter: 4, verseStart: 14, verseEnd: 16 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 34 },
      { bookAbbrev: '1jo', chapter: 2, verseStart: 1 },
      { bookAbbrev: 'jo', chapter: 14, verseStart: 6 }
    ]
  },
  {
    id: 'meditacao-na-palavra',
    title: 'Meditação nas Escrituras',
    category: 'Igreja & Vida Espiritual',
    keywords: ['meditacao', 'meditar', 'estudo biblico', 'ler a biblia', 'renovar a mente'],
    passages: [
      { bookAbbrev: 'js', chapter: 1, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 1, verseStart: 2, verseEnd: 3 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 15, verseEnd: 16 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 97 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 16 }
    ]
  },
  {
    id: 'medo',
    title: 'Medo e Insegurança',
    category: 'Emoções & Lutas da Alma',
    keywords: ['medo', 'pavor', 'inseguranca', 'temor', 'fobia', 'coragem'],
    passages: [
      { bookAbbrev: 'is', chapter: 41, verseStart: 10 },
      { bookAbbrev: '2tm', chapter: 1, verseStart: 7 },
      { bookAbbrev: 'sl', chapter: 27, verseStart: 1 },
      { bookAbbrev: 'sl', chapter: 56, verseStart: 3 },
      { bookAbbrev: '1jo', chapter: 4, verseStart: 18 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 4 }
    ]
  },
  {
    id: 'meio-ambiente-e-animais',
    title: 'Meio Ambiente, Natureza e Animais',
    category: 'Vida, Ética & Sociedade',
    keywords: ['natureza', 'meio ambiente', 'animais', 'ecologia', 'terra', 'cachorro', 'criacao', 'cuidar dos animais'],
    passages: [
      { bookAbbrev: 'gn', chapter: 2, verseStart: 15 },
      { bookAbbrev: 'pv', chapter: 12, verseStart: 10 },
      { bookAbbrev: 'sl', chapter: 24, verseStart: 1 },
      { bookAbbrev: 'jo_at', chapter: 12, verseStart: 7, verseEnd: 10 },
      { bookAbbrev: 'sl', chapter: 104, verseStart: 24, verseEnd: 25 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 26 }
    ]
  },
  {
    id: 'mentira-e-verdade',
    title: 'Mentira e Verdade',
    category: 'Caráter & Vida Diária',
    keywords: ['mentira', 'mentir', 'mentiroso', 'engano', 'falso testemunho', 'verdade'],
    passages: [
      { bookAbbrev: 'pv', chapter: 12, verseStart: 22 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 25 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 9 },
      { bookAbbrev: 'ex', chapter: 20, verseStart: 16 },
      { bookAbbrev: 'pv', chapter: 6, verseStart: 16, verseEnd: 19 },
      { bookAbbrev: 'jo', chapter: 8, verseStart: 44 },
      { bookAbbrev: 'ap', chapter: 21, verseStart: 8 }
    ]
  },
  {
    id: 'milagres',
    title: 'Milagres e Poder de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['milagre', 'milagres', 'maravilhas', 'sinais', 'sobrenatural', 'impossivel'],
    passages: [
      { bookAbbrev: 'lc', chapter: 1, verseStart: 37 },
      { bookAbbrev: 'jr', chapter: 32, verseStart: 27 },
      { bookAbbrev: 'sl', chapter: 77, verseStart: 14 },
      { bookAbbrev: 'mc', chapter: 10, verseStart: 27 },
      { bookAbbrev: 'jo', chapter: 20, verseStart: 30, verseEnd: 31 },
      { bookAbbrev: 'hb', chapter: 2, verseStart: 4 }
    ]
  },
  {
    id: 'misericordia',
    title: 'Misericórdia e Compaixão',
    category: 'Deus, Cristo & Salvação',
    keywords: ['misericordia', 'compaixao', 'piedade', 'clemencia', 'perdao'],
    passages: [
      { bookAbbrev: 'lm', chapter: 3, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 7 },
      { bookAbbrev: 'lc', chapter: 6, verseStart: 36 },
      { bookAbbrev: 'sl', chapter: 103, verseStart: 8 },
      { bookAbbrev: 'ef', chapter: 2, verseStart: 4, verseEnd: 5 },
      { bookAbbrev: 'tg', chapter: 2, verseStart: 13 }
    ]
  },
  {
    id: 'modestia-e-aparencia',
    title: 'Modéstia, Roupas e Aparência',
    category: 'Caráter & Vida Diária',
    keywords: ['modestia', 'roupas', 'vestimenta', 'aparencia', 'beleza', 'decencia', 'vaidade'],
    passages: [
      { bookAbbrev: '1sm', chapter: 16, verseStart: 7 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: '1tm', chapter: 2, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'pv', chapter: 31, verseStart: 30 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 1, verseEnd: 2 }
    ]
  },
  {
    id: 'morte',
    title: 'Morte',
    category: 'Eternidade & Últimos Dias',
    keywords: ['morte', 'morrer', 'apos a morte', 'falecimento', 'vida apos a morte'],
    passages: [
      { bookAbbrev: 'hb', chapter: 9, verseStart: 27 },
      { bookAbbrev: 'fp', chapter: 1, verseStart: 21, verseEnd: 23 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 8 },
      { bookAbbrev: 'lc', chapter: 23, verseStart: 43 },
      { bookAbbrev: 'jo', chapter: 11, verseStart: 25, verseEnd: 26 },
      { bookAbbrev: '1co', chapter: 15, verseStart: 54, verseEnd: 57 },
      { bookAbbrev: 'sl', chapter: 116, verseStart: 15 }
    ]
  },
  {
    id: 'mulher-dignidade-valor',
    title: 'Mulher (Dignidade e Valor)',
    category: 'Família & Relacionamentos',
    keywords: ['mulher', 'mulheres', 'dignidade feminina', 'valor da mulher', 'mae', 'virtuosa'],
    passages: [
      { bookAbbrev: 'gn', chapter: 1, verseStart: 27 },
      { bookAbbrev: 'gl', chapter: 3, verseStart: 28 },
      { bookAbbrev: 'pv', chapter: 31, verseStart: 10 },
      { bookAbbrev: 'pv', chapter: 31, verseStart: 30 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 7 },
      { bookAbbrev: 'lc', chapter: 8, verseStart: 1, verseEnd: 3 }
    ]
  },
  {
    id: 'murmuracao-e-reclamacao',
    title: 'Murmuração e Reclamação',
    category: 'Caráter & Vida Diária',
    keywords: ['murmuracao', 'murmurar', 'reclamar', 'reclamacao', 'queixa', 'ingratidao'],
    passages: [
      { bookAbbrev: 'fp', chapter: 2, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 10 },
      { bookAbbrev: 'tg', chapter: 5, verseStart: 9 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 18 },
      { bookAbbrev: 'jd', chapter: 1, verseStart: 16 }
    ]
  },
  {
    id: 'musica-e-canticos',
    title: 'Música e Cânticos',
    category: 'Igreja & Vida Espiritual',
    keywords: ['musica', 'cantar', 'canticos', 'hinos', 'instrumentos', 'louvor', 'salmos'],
    passages: [
      { bookAbbrev: 'ef', chapter: 5, verseStart: 19 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 16 },
      { bookAbbrev: 'sl', chapter: 98, verseStart: 1 },
      { bookAbbrev: 'sl', chapter: 150, verseStart: 3, verseEnd: 6 },
      { bookAbbrev: 'tg', chapter: 5, verseStart: 13 },
      { bookAbbrev: 'sl', chapter: 33, verseStart: 3 }
    ]
  },

  // ─── N ───────────────────────────────────────────────────────────────────
  {
    id: 'namoro-e-pureza',
    title: 'Namoro, Pureza e Jugo Desigual',
    category: 'Família & Relacionamentos',
    keywords: ['namoro', 'namorar', 'noivado', 'pureza', 'castidade', 'jugo desigual', 'relacionamento'],
    passages: [
      { bookAbbrev: '2co', chapter: 6, verseStart: 14 },
      { bookAbbrev: '2tm', chapter: 2, verseStart: 22 },
      { bookAbbrev: '1ts', chapter: 4, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: 'pv', chapter: 4, verseStart: 23 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 18 },
      { bookAbbrev: 'ct', chapter: 8, verseStart: 4 },
      { bookAbbrev: '1co', chapter: 13, verseStart: 4, verseEnd: 7 }
    ]
  },
  {
    id: 'novo-nascimento',
    title: 'Novo Nascimento (Nascer de Novo)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['nascer de novo', 'novo nascimento', 'regeneracao', 'nova criatura', 'conversao'],
    passages: [
      { bookAbbrev: 'jo', chapter: 3, verseStart: 3, verseEnd: 7 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 17 },
      { bookAbbrev: '1pe', chapter: 1, verseStart: 23 },
      { bookAbbrev: 'tt', chapter: 3, verseStart: 5 },
      { bookAbbrev: 'jo', chapter: 1, verseStart: 12, verseEnd: 13 },
      { bookAbbrev: 'ez', chapter: 36, verseStart: 26, verseEnd: 27 }
    ]
  },

  {
    id: 'novos-ceus-e-nova-terra',
    title: 'Novos Céus e Nova Terra',
    category: 'Eternidade & Últimos Dias',
    keywords: ['novos ceus', 'nova terra', 'restauracao final', 'eternidade', 'apocalipse 21'],
    passages: [
      { bookAbbrev: 'ap', chapter: 21, verseStart: 1, verseEnd: 5 },
      { bookAbbrev: '2pe', chapter: 3, verseStart: 13 },
      { bookAbbrev: 'is', chapter: 65, verseStart: 17 },
      { bookAbbrev: 'ap', chapter: 22, verseStart: 1, verseEnd: 5 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 19, verseEnd: 21 }
    ]
  },

  // ─── O ───────────────────────────────────────────────────────────────────
  {
    id: 'obediencia-a-deus',
    title: 'Obediência a Deus',
    category: 'Caráter & Vida Diária',
    keywords: ['obediencia', 'obedecer', 'guardar mandamentos', 'fidelidade', 'submissao a deus'],
    passages: [
      { bookAbbrev: 'jo', chapter: 14, verseStart: 15 },
      { bookAbbrev: '1sm', chapter: 15, verseStart: 22 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 22 },
      { bookAbbrev: 'lc', chapter: 11, verseStart: 28 },
      { bookAbbrev: 'at', chapter: 5, verseStart: 29 },
      { bookAbbrev: '1jo', chapter: 5, verseStart: 3 }
    ]
  },
  {
    id: 'odio',
    title: 'Ódio',
    category: 'Emoções & Lutas da Alma',
    keywords: ['odio', 'odiar', 'inimizade', 'desprezo', 'raiva'],
    passages: [
      { bookAbbrev: '1jo', chapter: 3, verseStart: 15 },
      { bookAbbrev: '1jo', chapter: 4, verseStart: 20 },
      { bookAbbrev: 'pv', chapter: 10, verseStart: 12 },
      { bookAbbrev: 'lv', chapter: 19, verseStart: 17 },
      { bookAbbrev: '1jo', chapter: 2, verseStart: 9, verseEnd: 11 }
    ]
  },
  {
    id: 'oracao-ensino-biblico',
    title: 'Oração (O que as Escrituras Ensinam)',
    category: 'Igreja & Vida Espiritual',
    keywords: ['oracao', 'orar', 'pai nosso', 'suplica', 'intercessao', 'clamar a deus'],
    passages: [
      { bookAbbrev: 'mt', chapter: 6, verseStart: 6 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 9, verseEnd: 13 },
      { bookAbbrev: 'fp', chapter: 4, verseStart: 6, verseEnd: 7 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 17 },
      { bookAbbrev: 'tg', chapter: 5, verseStart: 16 },
      { bookAbbrev: '1jo', chapter: 5, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: 'jr', chapter: 33, verseStart: 3 }
    ]
  },
  {
    id: 'orfaos-e-viuvas',
    title: 'Órfãos e Viúvas',
    category: 'Vida, Ética & Sociedade',
    keywords: ['orfao', 'orfaos', 'viuva', 'viuvas', 'vulneraveis', 'desamparados', 'religiao pura'],
    passages: [
      { bookAbbrev: 'tg', chapter: 1, verseStart: 27 },
      { bookAbbrev: 'sl', chapter: 68, verseStart: 5 },
      { bookAbbrev: 'sl', chapter: 146, verseStart: 9 },
      { bookAbbrev: 'is', chapter: 1, verseStart: 17 },
      { bookAbbrev: 'ex', chapter: 22, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: 'dt', chapter: 10, verseStart: 18 }
    ]
  },
  {
    id: 'orgulho-e-soberba',
    title: 'Orgulho e Soberba',
    category: 'Caráter & Vida Diária',
    keywords: ['orgulho', 'soberba', 'arrogancia', 'altivez', 'presuncao', 'egocentrismo'],
    passages: [
      { bookAbbrev: 'pv', chapter: 16, verseStart: 18 },
      { bookAbbrev: 'pv', chapter: 11, verseStart: 2 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 6 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 5 },
      { bookAbbrev: 'pv', chapter: 8, verseStart: 13 },
      { bookAbbrev: 'pv', chapter: 29, verseStart: 23 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 3 }
    ]
  },

  // ─── P ───────────────────────────────────────────────────────────────────
  {
    id: 'paciencia',
    title: 'Paciência e Longanimidade',
    category: 'Caráter & Vida Diária',
    keywords: ['paciencia', 'longanimidade', 'esperar em deus', 'calma', 'perseveranca'],
    passages: [
      { bookAbbrev: 'tg', chapter: 5, verseStart: 7, verseEnd: 8 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 12 },
      { bookAbbrev: 'sl', chapter: 37, verseStart: 7 },
      { bookAbbrev: 'sl', chapter: 40, verseStart: 1 },
      { bookAbbrev: 'ec', chapter: 7, verseStart: 8 },
      { bookAbbrev: 'pv', chapter: 14, verseStart: 29 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 2 }
    ]
  },
  {
    id: 'palavra-empenhada-juramento',
    title: 'Palavra Empenhada e Juramentos',
    category: 'Caráter & Vida Diária',
    keywords: ['juramento', 'jurar', 'promessa', 'sim sim nao nao', 'cumprir a palavra'],
    passages: [
      { bookAbbrev: 'mt', chapter: 5, verseStart: 33, verseEnd: 37 },
      { bookAbbrev: 'tg', chapter: 5, verseStart: 12 },
      { bookAbbrev: 'ec', chapter: 5, verseStart: 4, verseEnd: 5 },
      { bookAbbrev: 'sl', chapter: 15, verseStart: 4 },
      { bookAbbrev: 'nm', chapter: 30, verseStart: 2 }
    ]
  },
  {
    id: 'paz-de-deus',
    title: 'Paz de Deus',
    category: 'Emoções & Lutas da Alma',
    keywords: ['paz', 'shalom', 'tranquilidade', 'descanso interior', 'sossego'],
    passages: [
      { bookAbbrev: 'jo', chapter: 14, verseStart: 27 },
      { bookAbbrev: 'fp', chapter: 4, verseStart: 7 },
      { bookAbbrev: 'is', chapter: 26, verseStart: 3 },
      { bookAbbrev: 'rm', chapter: 5, verseStart: 1 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 15 },
      { bookAbbrev: 'sl', chapter: 29, verseStart: 11 }
    ]
  },
  {
    id: 'pecado',
    title: 'Pecado e Suas Consequências',
    category: 'Deus, Cristo & Salvação',
    keywords: ['pecado', 'pecar', 'transgressao', 'iniquidade', 'queda', 'salario do pecado'],
    passages: [
      { bookAbbrev: 'rm', chapter: 3, verseStart: 23 },
      { bookAbbrev: 'rm', chapter: 6, verseStart: 23 },
      { bookAbbrev: '1jo', chapter: 3, verseStart: 4 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: 'is', chapter: 59, verseStart: 2 },
      { bookAbbrev: '1jo', chapter: 1, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 17 }
    ]
  },
  {
    id: 'pecado-imperdoavel',
    title: 'Pecado Imperdoável (Blasfêmia contra o Espírito)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['pecado imperdoavel', 'blasfemia contra o espirito', 'sem perdao', 'medo de nao ser perdoado'],
    passages: [
      { bookAbbrev: 'mt', chapter: 12, verseStart: 31, verseEnd: 32 },
      { bookAbbrev: 'mc', chapter: 3, verseStart: 28, verseEnd: 29 },
      { bookAbbrev: 'jo', chapter: 6, verseStart: 37 },
      { bookAbbrev: '1jo', chapter: 1, verseStart: 7, verseEnd: 9 },
      { bookAbbrev: 'hb', chapter: 7, verseStart: 25 }
    ]
  },
  {
    id: 'pena-de-morte-justica-civil',
    title: 'Pena de Morte e Justiça Civil',
    category: 'Vida, Ética & Sociedade',
    keywords: ['pena de morte', 'pena capital', 'espada do estado', 'justica civil', 'tribunal'],
    passages: [
      { bookAbbrev: 'gn', chapter: 9, verseStart: 6 },
      { bookAbbrev: 'rm', chapter: 13, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: 'ex', chapter: 21, verseStart: 12 },
      { bookAbbrev: 'dt', chapter: 17, verseStart: 6 },
      { bookAbbrev: 'at', chapter: 25, verseStart: 11 },
      { bookAbbrev: 'ez', chapter: 33, verseStart: 11 }
    ]
  },
  {
    id: 'perdao',
    title: 'Perdão',
    category: 'Família & Relacionamentos',
    keywords: ['perdao', 'perdoar', 'reconciliacao', 'setenta vezes sete', 'ofensa', 'liberar perdao'],
    passages: [
      { bookAbbrev: 'ef', chapter: 4, verseStart: 32 },
      { bookAbbrev: 'cl', chapter: 3, verseStart: 13 },
      { bookAbbrev: 'mt', chapter: 18, verseStart: 21, verseEnd: 22 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 14, verseEnd: 15 },
      { bookAbbrev: 'mc', chapter: 11, verseStart: 25 },
      { bookAbbrev: 'lc', chapter: 17, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: '1jo', chapter: 1, verseStart: 9 }
    ]
  },
  {
    id: 'perseguicao',
    title: 'Perseguição aos Cristãos',
    category: 'Igreja & Vida Espiritual',
    keywords: ['perseguicao', 'perseguido', 'martirio', 'sofrer por cristo', 'oposicao'],
    passages: [
      { bookAbbrev: 'mt', chapter: 5, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: '2tm', chapter: 3, verseStart: 12 },
      { bookAbbrev: 'jo', chapter: 15, verseStart: 18, verseEnd: 20 },
      { bookAbbrev: '1pe', chapter: 4, verseStart: 14, verseEnd: 16 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 35, verseEnd: 37 },
      { bookAbbrev: 'at', chapter: 5, verseStart: 41 }
    ]
  },
  {
    id: 'perseveranca',
    title: 'Perseverança',
    category: 'Caráter & Vida Diária',
    keywords: ['perseveranca', 'perseverar', 'constancia', 'firmeza', 'nao desistir', 'corrida da fe'],
    passages: [
      { bookAbbrev: 'hb', chapter: 12, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 12 },
      { bookAbbrev: 'gl', chapter: 6, verseStart: 9 },
      { bookAbbrev: 'rm', chapter: 5, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: '1co', chapter: 15, verseStart: 58 },
      { bookAbbrev: 'fp', chapter: 3, verseStart: 13, verseEnd: 14 }
    ]
  },
  {
    id: 'pobreza-e-cuidado-pobres',
    title: 'Pobreza e Cuidado com os Pobres',
    category: 'Vida, Ética & Sociedade',
    keywords: ['pobre', 'pobres', 'pobreza', 'necessitados', 'miseria', 'fome', 'ajuda social'],
    passages: [
      { bookAbbrev: 'pv', chapter: 19, verseStart: 17 },
      { bookAbbrev: 'pv', chapter: 14, verseStart: 31 },
      { bookAbbrev: 'dt', chapter: 15, verseStart: 11 },
      { bookAbbrev: 'mt', chapter: 25, verseStart: 35, verseEnd: 40 },
      { bookAbbrev: '1jo', chapter: 3, verseStart: 17, verseEnd: 18 },
      { bookAbbrev: 'pv', chapter: 22, verseStart: 9 },
      { bookAbbrev: 'gl', chapter: 2, verseStart: 10 }
    ]
  },
  {
    id: 'pornografia-pureza-olhos',
    title: 'Pornografia e Pureza dos Olhos',
    category: 'Família & Relacionamentos',
    keywords: ['pornografia', 'porno', 'masturbacao', 'luxuria', 'cobiça sexual', 'olhos', 'impureza'],
    passages: [
      { bookAbbrev: 'mt', chapter: 5, verseStart: 28, verseEnd: 29 },
      { bookAbbrev: 'jo_at', chapter: 31, verseStart: 1 },
      { bookAbbrev: 'sl', chapter: 101, verseStart: 3 },
      { bookAbbrev: '1ts', chapter: 4, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 18, verseEnd: 20 },
      { bookAbbrev: 'fp', chapter: 4, verseStart: 8 },
      { bookAbbrev: '2tm', chapter: 2, verseStart: 22 }
    ]
  },
  {
    id: 'preguica-e-diligencia',
    title: 'Preguiça e Diligência',
    category: 'Caráter & Vida Diária',
    keywords: ['preguica', 'preguicoso', 'ociosidade', 'diligencia', 'esforco', 'formiga', 'procrastinacao'],
    passages: [
      { bookAbbrev: 'pv', chapter: 6, verseStart: 6, verseEnd: 11 },
      { bookAbbrev: 'pv', chapter: 10, verseStart: 4 },
      { bookAbbrev: 'pv', chapter: 13, verseStart: 4 },
      { bookAbbrev: '2ts', chapter: 3, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: 'ec', chapter: 9, verseStart: 10 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 11 }
    ]
  },
  {
    id: 'processos-conflitos-irmaos',
    title: 'Processos e Conflitos entre Cristãos',
    category: 'Igreja & Vida Espiritual',
    keywords: ['processo', 'tribunal', 'conflito na igreja', 'resolver conflitos', 'reconciliacao'],
    passages: [
      { bookAbbrev: 'mt', chapter: 18, verseStart: 15, verseEnd: 17 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 1, verseEnd: 7 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 23, verseEnd: 25 },
      { bookAbbrev: 'pv', chapter: 25, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 18 }
    ]
  },
  {
    id: 'promessas-de-deus',
    title: 'Promessas de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['promessas', 'promessa', 'cumprimento', 'fidelidade divina', 'palavra'],
    passages: [
      { bookAbbrev: '2co', chapter: 1, verseStart: 20 },
      { bookAbbrev: 'nm', chapter: 23, verseStart: 19 },
      { bookAbbrev: 'js', chapter: 21, verseStart: 45 },
      { bookAbbrev: '2pe', chapter: 1, verseStart: 4 },
      { bookAbbrev: 'hb', chapter: 10, verseStart: 23 },
      { bookAbbrev: 'is', chapter: 55, verseStart: 11 }
    ]
  },
  {
    id: 'propiciacao-e-redencao',
    title: 'Propiciação e Redenção',
    category: 'Deus, Cristo & Salvação',
    keywords: ['propiciacao', 'redencao', 'resgate', 'expiacao', 'sangue', 'perdao dos pecados'],
    passages: [
      { bookAbbrev: '1jo', chapter: 2, verseStart: 2 },
      { bookAbbrev: '1jo', chapter: 4, verseStart: 10 },
      { bookAbbrev: 'rm', chapter: 3, verseStart: 24, verseEnd: 25 },
      { bookAbbrev: 'ef', chapter: 1, verseStart: 7 },
      { bookAbbrev: '1pe', chapter: 1, verseStart: 18, verseEnd: 19 },
      { bookAbbrev: 'cl', chapter: 1, verseStart: 13, verseEnd: 14 }
    ]
  },

  {
    id: 'protecao-de-deus',
    title: 'Proteção e Livramento de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['protecao', 'livramento', 'refugio', 'escudo', 'seguranca', 'salmo 91'],
    passages: [
      { bookAbbrev: 'sl', chapter: 91, verseStart: 1, verseEnd: 4 },
      { bookAbbrev: 'sl', chapter: 121, verseStart: 7, verseEnd: 8 },
      { bookAbbrev: 'sl', chapter: 46, verseStart: 1 },
      { bookAbbrev: '2ts', chapter: 3, verseStart: 3 },
      { bookAbbrev: 'pv', chapter: 18, verseStart: 10 },
      { bookAbbrev: 'is', chapter: 43, verseStart: 2 }
    ]
  },
  {
    id: 'pureza-de-coracao',
    title: 'Pureza de Coração',
    category: 'Caráter & Vida Diária',
    keywords: ['pureza', 'puro', 'coracao limpo', 'integridade', 'santidade interior'],
    passages: [
      { bookAbbrev: 'mt', chapter: 5, verseStart: 8 },
      { bookAbbrev: 'sl', chapter: 24, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: 'sl', chapter: 51, verseStart: 10 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 9 },
      { bookAbbrev: 'tt', chapter: 1, verseStart: 15 },
      { bookAbbrev: '1tm', chapter: 1, verseStart: 5 }
    ]
  },

  // ─── Q ───────────────────────────────────────────────────────────────────
  {
    id: 'quebrantamento',
    title: 'Quebrantamento e Contrição',
    category: 'Emoções & Lutas da Alma',
    keywords: ['quebrantamento', 'contricao', 'coracao quebrantado', 'humilhacao', 'arrependimento'],
    passages: [
      { bookAbbrev: 'sl', chapter: 51, verseStart: 17 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 18 },
      { bookAbbrev: 'is', chapter: 57, verseStart: 15 },
      { bookAbbrev: 'is', chapter: 66, verseStart: 2 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 9, verseEnd: 10 }
    ]
  },

  // ─── R ───────────────────────────────────────────────────────────────────
  {
    id: 'racismo-e-preconceito',
    title: 'Racismo, Preconceito e Igualdade',
    category: 'Vida, Ética & Sociedade',
    keywords: ['racismo', 'preconceito', 'discriminacao', 'igualdade', 'etnia', 'raca', 'acepcao de pessoas'],
    passages: [
      { bookAbbrev: 'gn', chapter: 1, verseStart: 27 },
      { bookAbbrev: 'at', chapter: 10, verseStart: 34, verseEnd: 35 },
      { bookAbbrev: 'at', chapter: 17, verseStart: 26 },
      { bookAbbrev: 'gl', chapter: 3, verseStart: 28 },
      { bookAbbrev: 'tg', chapter: 2, verseStart: 1, verseEnd: 4 },
      { bookAbbrev: 'tg', chapter: 2, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'rm', chapter: 2, verseStart: 11 },
      { bookAbbrev: 'ap', chapter: 7, verseStart: 9 }
    ]
  },
  {
    id: 'recomeco-e-restauracao',
    title: 'Recomeço e Restauração',
    category: 'Emoções & Lutas da Alma',
    keywords: ['recomeco', 'recomecar', 'restauracao', 'nova chance', 'mudanca', 'passado'],
    passages: [
      { bookAbbrev: '2co', chapter: 5, verseStart: 17 },
      { bookAbbrev: 'is', chapter: 43, verseStart: 18, verseEnd: 19 },
      { bookAbbrev: 'lm', chapter: 3, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: 'jl', chapter: 2, verseStart: 25 },
      { bookAbbrev: 'fp', chapter: 3, verseStart: 13, verseEnd: 14 },
      { bookAbbrev: 'sl', chapter: 51, verseStart: 12 }
    ]
  },
  {
    id: 'reconciliacao',
    title: 'Reconciliação',
    category: 'Família & Relacionamentos',
    keywords: ['reconciliacao', 'reconciliar', 'fazer as pazes', 'restaurar', 'perdao'],
    passages: [
      { bookAbbrev: 'mt', chapter: 5, verseStart: 23, verseEnd: 24 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 18, verseEnd: 19 },
      { bookAbbrev: 'rm', chapter: 12, verseStart: 18 },
      { bookAbbrev: 'mt', chapter: 18, verseStart: 15 },
      { bookAbbrev: 'cl', chapter: 1, verseStart: 20, verseEnd: 22 }
    ]
  },
  {
    id: 'reencarnacao-juizo-unico',
    title: 'Reencarnação e Vida Única',
    category: 'Eternidade & Últimos Dias',
    keywords: ['reencarnacao', 'vidas passadas', 'carma', 'karma', 'ressurreicao', 'apos a morte'],
    passages: [
      { bookAbbrev: 'hb', chapter: 9, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: 'lc', chapter: 23, verseStart: 43 },
      { bookAbbrev: '2co', chapter: 5, verseStart: 8 },
      { bookAbbrev: 'jo', chapter: 5, verseStart: 28, verseEnd: 29 },
      { bookAbbrev: 'ec', chapter: 12, verseStart: 7 },
      { bookAbbrev: 'lc', chapter: 16, verseStart: 22, verseEnd: 26 }
    ]
  },
  {
    id: 'reino-de-deus',
    title: 'Reino de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['reino de deus', 'reino dos ceus', 'soberania', 'buscar primeiro o reino'],
    passages: [
      { bookAbbrev: 'mt', chapter: 6, verseStart: 33 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 17 },
      { bookAbbrev: 'lc', chapter: 17, verseStart: 20, verseEnd: 21 },
      { bookAbbrev: 'jo', chapter: 3, verseStart: 3 },
      { bookAbbrev: 'jo', chapter: 18, verseStart: 36 },
      { bookAbbrev: 'mc', chapter: 1, verseStart: 15 }
    ]
  },
  {
    id: 'religiao-verdadeira',
    title: 'Religião Verdadeira e Fé Prática',
    category: 'Igreja & Vida Espiritual',
    keywords: ['religiao', 'religiosidade', 'fe pratica', 'orfaos e viuvas', 'hipocrisia'],
    passages: [
      { bookAbbrev: 'tg', chapter: 1, verseStart: 26, verseEnd: 27 },
      { bookAbbrev: 'mq', chapter: 6, verseStart: 8 },
      { bookAbbrev: 'os', chapter: 6, verseStart: 6 },
      { bookAbbrev: 'is', chapter: 1, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'mt', chapter: 23, verseStart: 23 }
    ]
  },
  {
    id: 'ressurreicao',
    title: 'Ressurreição',
    category: 'Eternidade & Últimos Dias',
    keywords: ['ressurreicao', 'ressuscitar', 'pascoa', 'vitoria sobre a morte', 'corpo glorificado'],
    passages: [
      { bookAbbrev: '1co', chapter: 15, verseStart: 17, verseEnd: 22 },
      { bookAbbrev: '1co', chapter: 15, verseStart: 51, verseEnd: 55 },
      { bookAbbrev: 'jo', chapter: 11, verseStart: 25, verseEnd: 26 },
      { bookAbbrev: 'jo', chapter: 5, verseStart: 28, verseEnd: 29 },
      { bookAbbrev: 'rm', chapter: 6, verseStart: 5 },
      { bookAbbrev: 'dn', chapter: 12, verseStart: 2 }
    ]
  },
  {
    id: 'riqueza-e-prosperidade',
    title: 'Riqueza e Bens Materiais',
    category: 'Caráter & Vida Diária',
    keywords: ['riqueza', 'rico', 'prosperidade', 'bens', 'patrimonio', 'teologia da prosperidade', 'tesouro'],
    passages: [
      { bookAbbrev: '1tm', chapter: 6, verseStart: 17, verseEnd: 19 },
      { bookAbbrev: 'pv', chapter: 11, verseStart: 28 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 19, verseEnd: 21 },
      { bookAbbrev: 'lc', chapter: 12, verseStart: 15 },
      { bookAbbrev: 'pv', chapter: 30, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'pv', chapter: 10, verseStart: 22 }
    ]
  },
  {
    id: 'roubo-e-furto',
    title: 'Roubo e Furto',
    category: 'Vida, Ética & Sociedade',
    keywords: ['roubo', 'roubar', 'furto', 'furtar', 'pirataria', 'sonegacao', 'honestidade'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 15 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 28 },
      { bookAbbrev: 'lv', chapter: 19, verseStart: 11 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 10 },
      { bookAbbrev: 'pv', chapter: 21, verseStart: 7 },
      { bookAbbrev: 'rm', chapter: 13, verseStart: 7 }
    ]
  },

  // ─── S ───────────────────────────────────────────────────────────────────
  {
    id: 'sabado-e-dia-do-senhor',
    title: 'Sábado e Dia do Senhor',
    category: 'Igreja & Vida Espiritual',
    keywords: ['sabado', 'domingo', 'dia do senhor', 'guardar o sabado', 'descanso semanal'],
    passages: [
      { bookAbbrev: 'ex', chapter: 20, verseStart: 8, verseEnd: 11 },
      { bookAbbrev: 'mc', chapter: 2, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: 'cl', chapter: 2, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'hb', chapter: 4, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'at', chapter: 20, verseStart: 7 }
    ]
  },
  {
    id: 'sabedoria',
    title: 'Sabedoria',
    category: 'Caráter & Vida Diária',
    keywords: ['sabedoria', 'sabio', 'inteligencia', 'entendimento', 'temor do senhor'],
    passages: [
      { bookAbbrev: 'pv', chapter: 1, verseStart: 7 },
      { bookAbbrev: 'pv', chapter: 9, verseStart: 10 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 5 },
      { bookAbbrev: 'tg', chapter: 3, verseStart: 17 },
      { bookAbbrev: 'pv', chapter: 3, verseStart: 13, verseEnd: 15 },
      { bookAbbrev: 'pv', chapter: 4, verseStart: 7 }
    ]
  },
  {
    id: 'salvacao',
    title: 'Salvação',
    category: 'Deus, Cristo & Salvação',
    keywords: ['salvacao', 'salvo', 'ser salvo', 'certeza da salvacao', 'vida eterna', 'evangelho'],
    passages: [
      { bookAbbrev: 'ef', chapter: 2, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'jo', chapter: 3, verseStart: 16 },
      { bookAbbrev: 'rm', chapter: 10, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'at', chapter: 4, verseStart: 12 },
      { bookAbbrev: 'jo', chapter: 14, verseStart: 6 },
      { bookAbbrev: '1jo', chapter: 5, verseStart: 11, verseEnd: 13 },
      { bookAbbrev: 'tt', chapter: 3, verseStart: 5 }
    ]
  },
  {
    id: 'santa-ceia',
    title: 'Santa Ceia do Senhor',
    category: 'Igreja & Vida Espiritual',
    keywords: ['santa ceia', 'ceia', 'pao e vinho', 'calice', 'memorial', 'eucaristia'],
    passages: [
      { bookAbbrev: '1co', chapter: 11, verseStart: 23, verseEnd: 29 },
      { bookAbbrev: 'lc', chapter: 22, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: 'mt', chapter: 26, verseStart: 26, verseEnd: 28 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 16, verseEnd: 17 }
    ]
  },
  {
    id: 'santificacao-e-santidade',
    title: 'Santificação e Santidade',
    category: 'Deus, Cristo & Salvação',
    keywords: ['santificacao', 'santidade', 'santo', 'consagracao', 'pureza', 'separado para deus'],
    passages: [
      { bookAbbrev: '1pe', chapter: 1, verseStart: 15, verseEnd: 16 },
      { bookAbbrev: 'hb', chapter: 12, verseStart: 14 },
      { bookAbbrev: '1ts', chapter: 4, verseStart: 3 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 23 },
      { bookAbbrev: '2co', chapter: 7, verseStart: 1 },
      { bookAbbrev: 'rm', chapter: 6, verseStart: 22 }
    ]
  },
  {
    id: 'satanas-e-demonios',
    title: 'Satanás e Demônios',
    category: 'Igreja & Vida Espiritual',
    keywords: ['satanas', 'diabo', 'demonios', 'lucifer', 'tentador', 'adversario', 'mal'],
    passages: [
      { bookAbbrev: '1pe', chapter: 5, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'jo', chapter: 8, verseStart: 44 },
      { bookAbbrev: 'jo', chapter: 10, verseStart: 10 },
      { bookAbbrev: '2co', chapter: 11, verseStart: 14 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 7 },
      { bookAbbrev: '1jo', chapter: 3, verseStart: 8 },
      { bookAbbrev: 'ap', chapter: 20, verseStart: 10 }
    ]
  },
  {
    id: 'seguranca-da-salvacao',
    title: 'Segurança e Certeza da Salvação',
    category: 'Deus, Cristo & Salvação',
    keywords: ['certeza da salvacao', 'seguranca eterna', 'perder a salvacao', 'vida eterna'],
    passages: [
      { bookAbbrev: '1jo', chapter: 5, verseStart: 13 },
      { bookAbbrev: 'jo', chapter: 10, verseStart: 27, verseEnd: 29 },
      { bookAbbrev: 'jo', chapter: 5, verseStart: 24 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 1 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 38, verseEnd: 39 },
      { bookAbbrev: 'fp', chapter: 1, verseStart: 6 }
    ]
  },
  {
    id: 'sexualidade-plano-de-deus',
    title: 'Sexualidade no Plano de Deus',
    category: 'Família & Relacionamentos',
    keywords: ['sexo', 'sexualidade', 'intimidade', 'casamento', 'pureza sexual', 'desejo'],
    passages: [
      { bookAbbrev: 'gn', chapter: 1, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: 'gn', chapter: 2, verseStart: 24, verseEnd: 25 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 4 },
      { bookAbbrev: '1co', chapter: 7, verseStart: 2, verseEnd: 5 },
      { bookAbbrev: 'pv', chapter: 5, verseStart: 18, verseEnd: 19 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 18, verseEnd: 20 }
    ]
  },
  {
    id: 'silencio-e-prudencia',
    title: 'Silêncio e Sabedoria no Falar',
    category: 'Caráter & Vida Diária',
    keywords: ['silencio', 'calar', 'ouvir', 'falar pouco', 'prudencia', 'boca'],
    passages: [
      { bookAbbrev: 'pv', chapter: 10, verseStart: 19 },
      { bookAbbrev: 'pv', chapter: 17, verseStart: 27, verseEnd: 28 },
      { bookAbbrev: 'pv', chapter: 21, verseStart: 23 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 19 },
      { bookAbbrev: 'ec', chapter: 3, verseStart: 7 },
      { bookAbbrev: 'sl', chapter: 141, verseStart: 3 }
    ]
  },
  {
    id: 'sinais-dos-tempos',
    title: 'Sinais dos Tempos e Últimos Dias',
    category: 'Eternidade & Últimos Dias',
    keywords: ['sinais dos tempos', 'ultimos dias', 'profecia', 'fim do mundo', 'escatologia'],
    passages: [
      { bookAbbrev: 'mt', chapter: 24, verseStart: 6, verseEnd: 8 },
      { bookAbbrev: 'mt', chapter: 24, verseStart: 14 },
      { bookAbbrev: '2tm', chapter: 3, verseStart: 1, verseEnd: 5 },
      { bookAbbrev: 'lc', chapter: 21, verseStart: 28 },
      { bookAbbrev: '2pe', chapter: 3, verseStart: 8, verseEnd: 10 }
    ]
  },
  {
    id: 'soberania-de-deus',
    title: 'Soberania de Deus',
    category: 'Deus, Cristo & Salvação',
    keywords: ['soberania', 'controle de deus', 'providencia', 'todo poderoso', 'proposito'],
    passages: [
      { bookAbbrev: 'sl', chapter: 115, verseStart: 3 },
      { bookAbbrev: 'jo_at', chapter: 42, verseStart: 2 },
      { bookAbbrev: 'is', chapter: 46, verseStart: 9, verseEnd: 10 },
      { bookAbbrev: 'rm', chapter: 11, verseStart: 36 },
      { bookAbbrev: 'ef', chapter: 1, verseStart: 11 },
      { bookAbbrev: 'pv', chapter: 19, verseStart: 21 },
      { bookAbbrev: 'dn', chapter: 4, verseStart: 35 }
    ]
  },
  {
    id: 'sofrimento-e-provacoes',
    title: 'Sofrimento e Provações',
    category: 'Emoções & Lutas da Alma',
    keywords: ['sofrimento', 'dor', 'provacoes', 'tribulacao', 'aflicao', 'problema do mal'],
    passages: [
      { bookAbbrev: 'rm', chapter: 8, verseStart: 18 },
      { bookAbbrev: 'rm', chapter: 8, verseStart: 28 },
      { bookAbbrev: 'jo', chapter: 16, verseStart: 33 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 2, verseEnd: 4 },
      { bookAbbrev: '1pe', chapter: 5, verseStart: 10 },
      { bookAbbrev: '2co', chapter: 4, verseStart: 17, verseEnd: 18 },
      { bookAbbrev: 'ap', chapter: 21, verseStart: 4 }
    ]
  },
  {
    id: 'solidao',
    title: 'Solidão',
    category: 'Emoções & Lutas da Alma',
    keywords: ['solidao', 'sozinho', 'isolamento', 'abandono', 'esquecido', 'companhia de deus'],
    passages: [
      { bookAbbrev: 'dt', chapter: 31, verseStart: 6 },
      { bookAbbrev: 'hb', chapter: 13, verseStart: 5 },
      { bookAbbrev: 'sl', chapter: 27, verseStart: 10 },
      { bookAbbrev: 'sl', chapter: 68, verseStart: 6 },
      { bookAbbrev: 'is', chapter: 41, verseStart: 10 },
      { bookAbbrev: 'mt', chapter: 28, verseStart: 20 }
    ]
  },
  {
    id: 'solteirice',
    title: 'Solteirice',
    category: 'Família & Relacionamentos',
    keywords: ['solteiro', 'solteira', 'solteirice', 'celibato', 'nao casado'],
    passages: [
      { bookAbbrev: '1co', chapter: 7, verseStart: 7, verseEnd: 9 },
      { bookAbbrev: '1co', chapter: 7, verseStart: 32, verseEnd: 35 },
      { bookAbbrev: 'mt', chapter: 19, verseStart: 11, verseEnd: 12 },
      { bookAbbrev: 'sl', chapter: 37, verseStart: 4 },
      { bookAbbrev: 'mt', chapter: 6, verseStart: 33 }
    ]
  },
  {
    id: 'sonhos-e-visoes',
    title: 'Sonhos e Visões',
    category: 'Igreja & Vida Espiritual',
    keywords: ['sonhos', 'sonho', 'visoes', 'revelacao', 'interpretar sonhos'],
    passages: [
      { bookAbbrev: 'jl', chapter: 2, verseStart: 28 },
      { bookAbbrev: 'at', chapter: 2, verseStart: 17 },
      { bookAbbrev: 'ec', chapter: 5, verseStart: 3 },
      { bookAbbrev: 'jr', chapter: 23, verseStart: 28 },
      { bookAbbrev: 'jo_at', chapter: 33, verseStart: 14, verseEnd: 16 },
      { bookAbbrev: 'hb', chapter: 1, verseStart: 1, verseEnd: 2 }
    ]
  },
  {
    id: 'suicidio-valor-da-vida',
    title: 'Suicídio e Esperança na Vida',
    category: 'Vida, Ética & Sociedade',
    keywords: ['suicidio', 'tirar a propria vida', 'morrer', 'desespero', 'nao aguento mais', 'valor da vida'],
    passages: [
      { bookAbbrev: 'sl', chapter: 34, verseStart: 17, verseEnd: 19 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: '1co', chapter: 3, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'ex', chapter: 20, verseStart: 13 },
      { bookAbbrev: 'jo', chapter: 10, verseStart: 10 },
      { bookAbbrev: 'jr', chapter: 29, verseStart: 11 },
      { bookAbbrev: 'sl', chapter: 139, verseStart: 13, verseEnd: 14 },
      { bookAbbrev: 'mt', chapter: 11, verseStart: 28 }
    ]
  },

  // ─── T ───────────────────────────────────────────────────────────────────
  {
    id: 'tatuagem-marcas-no-corpo',
    title: 'Tatuagem e Marcas no Corpo',
    category: 'Caráter & Vida Diária',
    keywords: ['tatuagem', 'tattoo', 'marcas no corpo', 'piercing', 'corpo templo'],
    passages: [
      { bookAbbrev: 'lv', chapter: 19, verseStart: 28 },
      { bookAbbrev: '1co', chapter: 6, verseStart: 19, verseEnd: 20 },
      { bookAbbrev: '1co', chapter: 10, verseStart: 31 },
      { bookAbbrev: 'rm', chapter: 14, verseStart: 22, verseEnd: 23 },
      { bookAbbrev: '1sm', chapter: 16, verseStart: 7 }
    ]
  },
  {
    id: 'temor-do-senhor',
    title: 'Temor do Senhor',
    category: 'Deus, Cristo & Salvação',
    keywords: ['temor do senhor', 'temer a deus', 'reverencia', 'principio da sabedoria'],
    passages: [
      { bookAbbrev: 'pv', chapter: 1, verseStart: 7 },
      { bookAbbrev: 'pv', chapter: 9, verseStart: 10 },
      { bookAbbrev: 'pv', chapter: 8, verseStart: 13 },
      { bookAbbrev: 'ec', chapter: 12, verseStart: 13 },
      { bookAbbrev: 'sl', chapter: 111, verseStart: 10 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 9 }
    ]
  },
  {
    id: 'tempo-sabedoria',
    title: 'Tempo (Como Aproveitar os Dias)',
    category: 'Caráter & Vida Diária',
    keywords: ['tempo', 'brevidade da vida', 'aproveitar o tempo', 'prioridades', 'estacoes'],
    passages: [
      { bookAbbrev: 'ec', chapter: 3, verseStart: 1, verseEnd: 8 },
      { bookAbbrev: 'sl', chapter: 90, verseStart: 12 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 15, verseEnd: 16 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 14 },
      { bookAbbrev: 'cl', chapter: 4, verseStart: 5 }
    ]
  },
  {
    id: 'tentacao',
    title: 'Tentação',
    category: 'Emoções & Lutas da Alma',
    keywords: ['tentacao', 'tentar', 'cair em pecado', 'escape', 'provar', 'vigiar'],
    passages: [
      { bookAbbrev: '1co', chapter: 10, verseStart: 13 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 12, verseEnd: 15 },
      { bookAbbrev: 'mt', chapter: 26, verseStart: 41 },
      { bookAbbrev: 'hb', chapter: 2, verseStart: 18 },
      { bookAbbrev: 'hb', chapter: 4, verseStart: 15, verseEnd: 16 },
      { bookAbbrev: 'tg', chapter: 4, verseStart: 7 }
    ]
  },
  {
    id: 'testemunho-cristao',
    title: 'Testemunho Cristão (Sal e Luz)',
    category: 'Igreja & Vida Espiritual',
    keywords: ['testemunho', 'sal da terra', 'luz do mundo', 'exemplo', 'conduta'],
    passages: [
      { bookAbbrev: 'mt', chapter: 5, verseStart: 13, verseEnd: 16 },
      { bookAbbrev: 'fp', chapter: 2, verseStart: 15 },
      { bookAbbrev: '1pe', chapter: 2, verseStart: 12 },
      { bookAbbrev: 'cl', chapter: 4, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'tt', chapter: 2, verseStart: 7, verseEnd: 8 }
    ]
  },
  {
    id: 'trabalho-e-vocacao',
    title: 'Trabalho e Vocação',
    category: 'Caráter & Vida Diária',
    keywords: ['trabalho', 'emprego', 'carreira', 'profissao', 'vocacao', 'patrao', 'funcionario', 'esforco'],
    passages: [
      { bookAbbrev: 'cl', chapter: 3, verseStart: 23, verseEnd: 24 },
      { bookAbbrev: 'ec', chapter: 9, verseStart: 10 },
      { bookAbbrev: 'pv', chapter: 14, verseStart: 23 },
      { bookAbbrev: 'pv', chapter: 16, verseStart: 3 },
      { bookAbbrev: '2ts', chapter: 3, verseStart: 10, verseEnd: 12 },
      { bookAbbrev: 'ef', chapter: 6, verseStart: 5, verseEnd: 9 },
      { bookAbbrev: 'sl', chapter: 90, verseStart: 17 }
    ]
  },
  {
    id: 'traicao-e-decepcao',
    title: 'Traição e Decepção com Pessoas',
    category: 'Emoções & Lutas da Alma',
    keywords: ['traicao', 'decepcao', 'amigo falso', 'desilusao', 'ferido'],
    passages: [
      { bookAbbrev: 'sl', chapter: 55, verseStart: 12, verseEnd: 14 },
      { bookAbbrev: 'sl', chapter: 41, verseStart: 9 },
      { bookAbbrev: 'sl', chapter: 118, verseStart: 8, verseEnd: 9 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 18 },
      { bookAbbrev: '2tm', chapter: 4, verseStart: 16, verseEnd: 17 }
    ]
  },
  {
    id: 'trindade',
    title: 'Trindade (Pai, Filho e Espírito Santo)',
    category: 'Deus, Cristo & Salvação',
    keywords: ['trindade', 'pai filho espirito santo', 'um so deus', 'tres pessoas'],
    passages: [
      { bookAbbrev: 'mt', chapter: 28, verseStart: 19 },
      { bookAbbrev: '2co', chapter: 13, verseStart: 13 },
      { bookAbbrev: 'mt', chapter: 3, verseStart: 16, verseEnd: 17 },
      { bookAbbrev: 'dt', chapter: 6, verseStart: 4 },
      { bookAbbrev: 'jo', chapter: 1, verseStart: 1 },
      { bookAbbrev: 'at', chapter: 5, verseStart: 3, verseEnd: 4 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 4, verseEnd: 6 }
    ]
  },

  // ─── U ───────────────────────────────────────────────────────────────────
  {
    id: 'unidade-dos-cristaos',
    title: 'Unidade dos Cristãos',
    category: 'Igreja & Vida Espiritual',
    keywords: ['unidade', 'uniao', 'harmonia', 'divisao', 'igreja unida'],
    passages: [
      { bookAbbrev: 'jo', chapter: 17, verseStart: 20, verseEnd: 21 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 3, verseEnd: 6 },
      { bookAbbrev: 'sl', chapter: 133, verseStart: 1 },
      { bookAbbrev: '1co', chapter: 1, verseStart: 10 },
      { bookAbbrev: 'fp', chapter: 2, verseStart: 2 },
      { bookAbbrev: 'rm', chapter: 15, verseStart: 5, verseEnd: 6 }
    ]
  },

  // ─── V ───────────────────────────────────────────────────────────────────
  {
    id: 'vaidade-e-futilidade',
    title: 'Vaidade e Futilidade',
    category: 'Caráter & Vida Diária',
    keywords: ['vaidade', 'vaidoso', 'futilidade', 'ostentacao', 'status', 'gloria humana'],
    passages: [
      { bookAbbrev: 'ec', chapter: 1, verseStart: 2 },
      { bookAbbrev: 'ec', chapter: 2, verseStart: 11 },
      { bookAbbrev: 'fp', chapter: 2, verseStart: 3 },
      { bookAbbrev: '1jo', chapter: 2, verseStart: 15, verseEnd: 17 },
      { bookAbbrev: 'gl', chapter: 5, verseStart: 26 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 37 }
    ]
  },
  {
    id: 'verdade',
    title: 'Verdade',
    category: 'Deus, Cristo & Salvação',
    keywords: ['verdade', 'verdadeiro', 'sinceridade', 'luz', 'cristo e a verdade'],
    passages: [
      { bookAbbrev: 'jo', chapter: 14, verseStart: 6 },
      { bookAbbrev: 'jo', chapter: 8, verseStart: 32 },
      { bookAbbrev: 'jo', chapter: 17, verseStart: 17 },
      { bookAbbrev: 'sl', chapter: 119, verseStart: 160 },
      { bookAbbrev: 'ef', chapter: 4, verseStart: 15 },
      { bookAbbrev: 'pv', chapter: 23, verseStart: 23 }
    ]
  },
  {
    id: 'vergonha-e-restauracao',
    title: 'Vergonha e Restauração',
    category: 'Emoções & Lutas da Alma',
    keywords: ['vergonha', 'humilhacao', 'passado', 'restauracao', 'honra'],
    passages: [
      { bookAbbrev: 'is', chapter: 54, verseStart: 4 },
      { bookAbbrev: 'is', chapter: 61, verseStart: 7 },
      { bookAbbrev: 'rm', chapter: 10, verseStart: 11 },
      { bookAbbrev: 'sl', chapter: 34, verseStart: 5 },
      { bookAbbrev: 'jl', chapter: 2, verseStart: 26, verseEnd: 27 },
      { bookAbbrev: 'hb', chapter: 12, verseStart: 2 }
    ]
  },
  {
    id: 'vinganca',
    title: 'Vingança',
    category: 'Caráter & Vida Diária',
    keywords: ['vinganca', 'vingar', 'revanche', 'retribuir o mal', 'olho por olho'],
    passages: [
      { bookAbbrev: 'rm', chapter: 12, verseStart: 17, verseEnd: 21 },
      { bookAbbrev: 'lv', chapter: 19, verseStart: 18 },
      { bookAbbrev: 'pv', chapter: 20, verseStart: 22 },
      { bookAbbrev: 'mt', chapter: 5, verseStart: 38, verseEnd: 39 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 15 },
      { bookAbbrev: '1pe', chapter: 3, verseStart: 9 }
    ]
  },
  {
    id: 'viuvez',
    title: 'Viuvez e Cuidado com as Viúvas',
    category: 'Família & Relacionamentos',
    keywords: ['viuva', 'viuvo', 'viuvez', 'luto conjugal', 'amparo'],
    passages: [
      { bookAbbrev: '1tm', chapter: 5, verseStart: 3, verseEnd: 5 },
      { bookAbbrev: 'sl', chapter: 68, verseStart: 5 },
      { bookAbbrev: 'is', chapter: 54, verseStart: 5 },
      { bookAbbrev: 'tg', chapter: 1, verseStart: 27 },
      { bookAbbrev: '1co', chapter: 7, verseStart: 39 }
    ]
  },
  {
    id: 'volta-de-jesus',
    title: 'Volta de Jesus e Fim dos Tempos',
    category: 'Eternidade & Últimos Dias',
    keywords: ['volta de jesus', 'segunda vinda', 'fim dos tempos', 'apocalipse', 'arrebatamento', 'vigiar'],
    passages: [
      { bookAbbrev: '1ts', chapter: 4, verseStart: 16, verseEnd: 18 },
      { bookAbbrev: 'at', chapter: 1, verseStart: 11 },
      { bookAbbrev: 'mt', chapter: 24, verseStart: 30 },
      { bookAbbrev: 'mt', chapter: 24, verseStart: 36 },
      { bookAbbrev: 'mt', chapter: 24, verseStart: 42 },
      { bookAbbrev: 'tt', chapter: 2, verseStart: 13 },
      { bookAbbrev: 'ap', chapter: 22, verseStart: 20 }
    ]
  },
  {
    id: 'vontade-de-deus',
    title: 'Vontade de Deus e Direção',
    category: 'Deus, Cristo & Salvação',
    keywords: ['vontade de deus', 'direcao', 'proposito', 'decisao', 'chamado', 'caminho'],
    passages: [
      { bookAbbrev: 'rm', chapter: 12, verseStart: 1, verseEnd: 2 },
      { bookAbbrev: '1ts', chapter: 4, verseStart: 3 },
      { bookAbbrev: '1ts', chapter: 5, verseStart: 16, verseEnd: 18 },
      { bookAbbrev: 'pv', chapter: 3, verseStart: 5, verseEnd: 6 },
      { bookAbbrev: 'sl', chapter: 143, verseStart: 10 },
      { bookAbbrev: 'dt', chapter: 29, verseStart: 29 },
      { bookAbbrev: 'ef', chapter: 5, verseStart: 17 }
    ]
  }
];
