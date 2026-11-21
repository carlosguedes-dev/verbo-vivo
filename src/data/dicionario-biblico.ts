import type { BibleDictionaryEntry, DictionaryCategory, VersePassageRef } from '../types';

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
  'amor',
  'espirito-santo',
  'aborto',
  'casamento',
  'morte',
  'vida-pos-morte',
  'ansiedade',
  'perdao',
  'salvacao',
  'familia'
];

type PassageTuple = [bookAbbrev: string, chapter: number, verseStart: number, verseEnd?: number];

const CAT = {
  VIDA: 'Vida, Ética & Sociedade' as DictionaryCategory,
  FAMILIA: 'Família & Relacionamentos' as DictionaryCategory,
  EMOCOES: 'Emoções & Lutas da Alma' as DictionaryCategory,
  CARATER: 'Caráter & Vida Diária' as DictionaryCategory,
  DEUS: 'Deus, Cristo & Salvação' as DictionaryCategory,
  IGREJA: 'Igreja & Vida Espiritual' as DictionaryCategory,
  ETERNIDADE: 'Eternidade & Últimos Dias' as DictionaryCategory
};

function e(
  id: string,
  title: string,
  category: DictionaryCategory,
  keywords: string[],
  tuples: PassageTuple[]
): BibleDictionaryEntry {
  const passages: VersePassageRef[] = tuples.map(([bookAbbrev, chapter, verseStart, verseEnd]) =>
    verseEnd !== undefined
      ? { bookAbbrev, chapter, verseStart, verseEnd }
      : { bookAbbrev, chapter, verseStart }
  );
  return { id, title, category, keywords, passages };
}

/**
 * Dicionário Bíblico Temático (Palavras e Expressões de A a Z)
 *
 * Princípio editorial rigoroso:
 * - Cada verbete é uma palavra ou expressão concisa (nunca uma frase).
 * - Zero comentários humanos, zero opiniões, zero textos de IA.
 * - Cada verbete responde exclusivamente com versículos bíblicos reais,
 *   carregados diretamente da tradução ativa (ACF, NVI ou ARA).
 */
export const DICIONARIO_BIBLICO_DATA: BibleDictionaryEntry[] = [
  // ─── A ───────────────────────────────────────────────────────────────────
  e('abandono', 'Abandono', CAT.EMOCOES, ['abandonado', 'desamparo', 'sozinho', 'esquecido'], [
    ['sl', 27, 10], ['hb', 13, 5], ['is', 49, 15, 16], ['dt', 31, 6], ['sl', 9, 10]
  ]),
  e('abatimento', 'Abatimento', CAT.EMOCOES, ['abatido', 'tristeza', 'desanimo', 'alma abatida'], [
    ['sl', 42, 11], ['sl', 34, 18], ['sl', 145, 14], ['2co', 7, 6], ['pv', 12, 25]
  ]),
  e('aborto', 'Aborto', CAT.VIDA, ['abortar', 'feto', 'ventre', 'nascituro', 'gravidez', 'gestacao', 'bebe', 'concepcao'], [
    ['sl', 139, 13, 16], ['jr', 1, 5], ['ex', 20, 13], ['ex', 21, 22, 25], ['gn', 1, 27], ['is', 44, 2], ['sl', 127, 3], ['pv', 24, 11, 12], ['lc', 1, 41, 44]
  ]),
  e('abundancia', 'Abundância', CAT.DEUS, ['plenitude', 'fartura', 'vida abundante', 'provisao'], [
    ['jo', 10, 10], ['ef', 3, 20], ['2co', 9, 8], ['sl', 23, 5], ['fp', 4, 19]
  ]),
  e('abuso', 'Abuso', CAT.VIDA, ['violencia', 'opressao', 'maus tratos', 'agressao', 'injustica'], [
    ['sl', 11, 5], ['sl', 72, 14], ['pv', 31, 8, 9], ['is', 1, 17], ['ef', 5, 28, 29], ['cl', 3, 19]
  ]),
  e('acolhimento', 'Acolhimento', CAT.FAMILIA, ['acolher', 'receber', 'hospitalidade', 'aceitacao'], [
    ['rm', 15, 7], ['mt', 25, 35], ['hb', 13, 2], ['jo', 6, 37], ['sl', 27, 10]
  ]),
  e('aconselhamento', 'Aconselhamento', CAT.CARATER, ['conselho', 'conselheiro', 'orientacao', 'sabedoria'], [
    ['pv', 11, 14], ['pv', 15, 22], ['pv', 24, 6], ['pv', 27, 9], ['sl', 1, 1, 2]
  ]),
  e('acoes-de-gracas', 'Ações de Graças', CAT.IGREJA, ['agradecer', 'gratidao', 'louvor'], [
    ['1ts', 5, 18], ['fp', 4, 6], ['sl', 100, 4], ['cl', 3, 17], ['sl', 107, 1]
  ]),
  e('adivinhacao', 'Adivinhação', CAT.IGREJA, ['cartomancia', 'taro', 'búzios', 'prever o futuro', 'ocultismo'], [
    ['dt', 18, 10, 12], ['lv', 19, 26], ['lv', 19, 31], ['at', 16, 16, 18], ['is', 8, 19]
  ]),
  e('adocao', 'Adoção', CAT.DEUS, ['filhos de deus', 'herdeiros', 'pai celestial', 'filiacao'], [
    ['jo', 1, 12, 13], ['rm', 8, 14, 17], ['ef', 1, 5], ['gl', 4, 4, 7], ['1jo', 3, 1, 2]
  ]),
  e('adoracao', 'Adoração', CAT.IGREJA, ['adorar', 'culto', 'reverencia', 'espirito e verdade'], [
    ['jo', 4, 23, 24], ['sl', 95, 6, 7], ['rm', 12, 1], ['sl', 29, 2], ['mt', 4, 10], ['ap', 4, 11]
  ]),
  e('adulterio', 'Adultério', CAT.FAMILIA, ['adulterar', 'traicao', 'infidelidade', 'amante'], [
    ['ex', 20, 14], ['mt', 5, 27, 28], ['hb', 13, 4], ['pv', 6, 32, 33], ['1co', 6, 9, 11], ['jo', 8, 10, 11]
  ]),
  e('adversidade', 'Adversidade', CAT.EMOCOES, ['dificuldade', 'luta', 'crise', 'tribulacao'], [
    ['pv', 24, 10], ['pv', 17, 17], ['sl', 46, 1], ['rm', 8, 28], ['jo', 16, 33]
  ]),
  e('aflicao', 'Aflição', CAT.EMOCOES, ['angustia', 'sofrimento', 'dor', 'tribulacao'], [
    ['sl', 34, 19], ['2co', 4, 17], ['sl', 119, 50], ['jo', 16, 33], ['rm', 8, 18], ['sl', 50, 15]
  ]),
  e('agressao', 'Agressão', CAT.VIDA, ['violencia', 'espancamento', 'briga', 'bater'], [
    ['sl', 11, 5], ['pv', 3, 31], ['mt', 5, 38, 39], ['1tm', 3, 3], ['rm', 12, 17, 18]
  ]),
  e('agua-viva', 'Água Viva', CAT.DEUS, ['sede espiritual', 'espirito santo', 'jesus', 'fonte'], [
    ['jo', 4, 13, 14], ['jo', 7, 37, 38], ['ap', 21, 6], ['ap', 22, 17], ['is', 55, 1]
  ]),
  e('alcool', 'Álcool', CAT.CARATER, ['bebida', 'vinho', 'cerveja', 'beber', 'alcoolismo'], [
    ['ef', 5, 18], ['pv', 20, 1], ['pv', 23, 29, 32], ['pv', 31, 4, 5], ['rm', 13, 13], ['1co', 6, 10]
  ]),
  e('alegria', 'Alegria', CAT.EMOCOES, ['alegre', 'felicidade', 'regozijo', 'jubilo'], [
    ['ne', 8, 10], ['fp', 4, 4], ['sl', 16, 11], ['jo', 15, 11], ['rm', 15, 13], ['1ts', 5, 16]
  ]),
  e('alianca', 'Aliança', CAT.DEUS, ['pacto', 'concerto', 'nova alianca', 'testamento'], [
    ['jr', 31, 31, 33], ['lc', 22, 20], ['hb', 8, 6], ['hb', 9, 15], ['dt', 7, 9], ['sl', 105, 8]
  ]),
  e('alimentos', 'Alimentos', CAT.CARATER, ['comida', 'dieta', 'alimentos impuros', 'carne', 'comer'], [
    ['mc', 7, 18, 19], ['1tm', 4, 3, 5], ['rm', 14, 2, 3], ['rm', 14, 17], ['1co', 10, 31], ['at', 10, 15]
  ]),
  e('alma', 'Alma', CAT.DEUS, ['interior', 'ser humano', 'vida espiritual', 'salvacao da alma'], [
    ['mt', 16, 26], ['sl', 23, 3], ['sl', 42, 1, 2], ['mt', 10, 28], ['1ts', 5, 23], ['hb', 4, 12]
  ]),
  e('amabilidade', 'Amabilidade', CAT.CARATER, ['gentileza', 'bondade', 'doçura', 'cortesia'], [
    ['ef', 4, 32], ['cl', 3, 12], ['pv', 15, 1], ['fp', 4, 5], ['tt', 3, 2]
  ]),
  e('amargura', 'Amargura', CAT.EMOCOES, ['magoa', 'rancor', 'ressentimento', 'raiz de amargura'], [
    ['ef', 4, 31, 32], ['hb', 12, 14, 15], ['pv', 14, 10], ['cl', 3, 19], ['tg', 3, 14]
  ]),
  e('ambicao', 'Ambição', CAT.CARATER, ['egoismo', 'status', 'poder', 'ganancia', 'vaidade'], [
    ['fp', 2, 3], ['tg', 3, 16], ['jr', 45, 5], ['mc', 10, 43, 44], ['1tm', 6, 9]
  ]),
  e('amizade', 'Amizade', CAT.FAMILIA, ['amigo', 'amigos', 'companheirismo', 'lealdade'], [
    ['pv', 17, 17], ['pv', 18, 24], ['pv', 27, 17], ['ec', 4, 9, 10], ['jo', 15, 13, 15], ['pv', 13, 20]
  ]),
  e('amor', 'Amor', CAT.FAMILIA, ['amar', 'agape', 'maior mandamento', 'caridade'], [
    ['1co', 13, 4, 7], ['1co', 13, 13], ['1jo', 4, 7, 8], ['1jo', 4, 19], ['jo', 3, 16], ['mt', 22, 37, 39], ['cl', 3, 14], ['rm', 8, 38, 39]
  ]),
  e('amor-ao-proximo', 'Amor ao Próximo', CAT.FAMILIA, ['proximo', 'compaixao', 'servir', 'samaritano'], [
    ['mc', 12, 31], ['jo', 13, 34, 35], ['rm', 13, 8, 10], ['1jo', 3, 18], ['gl', 5, 14], ['lc', 6, 31]
  ]),
  e('amor-de-deus', 'Amor de Deus', CAT.DEUS, ['graca', 'misericordia', 'pai', 'cruz'], [
    ['jo', 3, 16], ['rm', 5, 8], ['rm', 8, 38, 39], ['1jo', 4, 9, 10], ['ef', 2, 4, 5], ['jr', 31, 3]
  ]),
  e('anciaos', 'Anciãos', CAT.IGREJA, ['presbiteros', 'idosos', 'lideres', 'igreja'], [
    ['1pe', 5, 1, 4], ['1tm', 5, 17], ['tt', 1, 5, 7], ['tg', 5, 14], ['lv', 19, 32]
  ]),
  e('angustia', 'Angústia', CAT.EMOCOES, ['aflito', 'aperto', 'dor', 'sofrimento', 'choro'], [
    ['sl', 34, 6], ['sl', 46, 1], ['sl', 120, 1], ['is', 43, 2], ['2co', 1, 3, 4], ['sl', 107, 6]
  ]),
  e('animais', 'Animais', CAT.VIDA, ['bichos', 'natureza', 'cachorro', 'criacao', 'cuidado animal'], [
    ['pv', 12, 10], ['gn', 1, 25, 26], ['jo_at', 12, 7, 10], ['sl', 104, 24, 25], ['mt', 6, 26], ['sl', 36, 6]
  ]),
  e('animo', 'Ânimo', CAT.EMOCOES, ['coragem', 'encorajamento', 'forca', 'ousadia'], [
    ['js', 1, 9], ['jo', 16, 33], ['sl', 31, 24], ['dt', 31, 6], ['1co', 16, 13]
  ]),
  e('anjos', 'Anjos', CAT.IGREJA, ['anjo', 'arcanjo', 'serafins', 'querubins', 'anjo da guarda'], [
    ['hb', 1, 14], ['sl', 91, 11], ['sl', 103, 20], ['sl', 34, 7], ['ap', 22, 8, 9], ['cl', 2, 18]
  ]),
  e('ansiedade', 'Ansiedade', CAT.EMOCOES, ['ansioso', 'preocupacao', 'nervosismo', 'panico', 'inquietacao', 'estresse'], [
    ['fp', 4, 6, 7], ['1pe', 5, 7], ['mt', 6, 25, 27], ['mt', 6, 34], ['sl', 94, 19], ['pv', 12, 25], ['is', 41, 10]
  ]),
  e('anticristo', 'Anticristo', CAT.ETERNIDADE, ['besta', 'homem da iniquidade', 'falsos cristos', 'fim dos tempos'], [
    ['1jo', 2, 18], ['1jo', 2, 22], ['1jo', 4, 3], ['2jo', 1, 7], ['2ts', 2, 3, 4], ['2ts', 2, 8]
  ]),
  e('aparencia', 'Aparência', CAT.CARATER, ['beleza', 'exterior', 'coracao', 'estetica', 'julgamento'], [
    ['1sm', 16, 7], ['pv', 31, 30], ['1pe', 3, 3, 4], ['jo', 7, 24], ['2co', 5, 12]
  ]),
  e('apocalipse', 'Apocalipse', CAT.ETERNIDADE, ['revelacao', 'fim dos tempos', 'profecia', 'vitoria de cristo'], [
    ['ap', 1, 1, 3], ['ap', 1, 8], ['ap', 21, 1, 5], ['ap', 22, 12, 13], ['ap', 22, 20]
  ]),
  e('apostasia', 'Apostasia', CAT.IGREJA, ['desviar', 'abandonar a fe', 'esfriamento', 'infidelidade'], [
    ['1tm', 4, 1, 2], ['2ts', 2, 3], ['hb', 3, 12], ['2tm', 4, 3, 4], ['1jo', 2, 19], ['mt', 24, 12, 13]
  ]),
  e('apostas', 'Apostas', CAT.CARATER, ['bet', 'jogos de azar', 'cassino', 'loteria', 'dinheiro facil'], [
    ['pv', 13, 11], ['pv', 28, 20], ['pv', 28, 22], ['1tm', 6, 9, 10], ['1co', 6, 12], ['ec', 5, 10]
  ]),
  e('armadura-de-deus', 'Armadura de Deus', CAT.IGREJA, ['batalha espiritual', 'espada do espirito', 'escudo da fe'], [
    ['ef', 6, 10, 18], ['1ts', 5, 8], ['rm', 13, 12], ['2co', 10, 4]
  ]),
  e('arrebatamento', 'Arrebatamento', CAT.ETERNIDADE, ['volta de jesus', 'encontro nos ares', 'segunda vinda'], [
    ['1ts', 4, 16, 18], ['1co', 15, 51, 52], ['jo', 14, 2, 3], ['mt', 24, 30, 31], ['fp', 3, 20, 21]
  ]),
  e('arrependimento', 'Arrependimento', CAT.DEUS, ['arrepender', 'conversao', 'mudanca de mente', 'confissao'], [
    ['at', 3, 19], ['at', 2, 38], ['2co', 7, 10], ['lc', 15, 7], ['pv', 28, 13], ['2pe', 3, 9], ['1jo', 1, 9]
  ]),
  e('arrogancia', 'Arrogância', CAT.CARATER, ['soberba', 'orgulho', 'altivez', 'prepotência'], [
    ['pv', 8, 13], ['pv', 16, 18], ['pv', 21, 4], ['is', 2, 11], ['tg', 4, 6], ['1co', 13, 4]
  ]),
  e('astrologia', 'Astrologia', CAT.IGREJA, ['signos', 'zodiaco', 'mapa astral', 'astros', 'horoscopo'], [
    ['dt', 18, 10, 12], ['is', 47, 13, 14], ['jr', 10, 2], ['dt', 4, 19], ['dn', 2, 27, 28]
  ]),
  e('ateismo', 'Ateísmo', CAT.DEUS, ['ateu', 'negar deus', 'incredulidade', 'existencia de deus'], [
    ['sl', 14, 1], ['rm', 1, 19, 22], ['sl', 19, 1, 4], ['hb', 11, 6], ['jo', 3, 18]
  ]),
  e('autoestima', 'Autoestima', CAT.EMOCOES, ['valor proprio', 'identidade', 'imagem de deus', 'rejeicao'], [
    ['sl', 139, 13, 14], ['ef', 2, 10], ['1pe', 2, 9], ['is', 43, 1], ['rm', 8, 37, 39], ['gn', 1, 27]
  ]),
  e('autoridade', 'Autoridade', CAT.VIDA, ['autoridades', 'governo', 'submissao', 'hierarquia', 'poder'], [
    ['rm', 13, 1, 2], ['1pe', 2, 13, 14], ['tt', 3, 1], ['at', 5, 29], ['mt', 28, 18], ['hb', 13, 17]
  ]),
  e('avareza', 'Avareza', CAT.CARATER, ['ganancia', 'mesquinhez', 'amor ao dinheiro', 'cobica'], [
    ['lc', 12, 15], ['1tm', 6, 9, 10], ['cl', 3, 5], ['hb', 13, 5], ['pv', 15, 27], ['ec', 5, 10]
  ]),
  e('avivamento', 'Avivamento', CAT.IGREJA, ['renovacao espiritual', 'despertar', 'restauracao'], [
    ['2cr', 7, 14], ['sl', 85, 6], ['hc', 3, 2], ['is', 57, 15], ['ef', 5, 14], ['at', 3, 19]
  ]),

  // ─── B ───────────────────────────────────────────────────────────────────
  e('batalha-espiritual', 'Batalha Espiritual', CAT.IGREJA, ['guerra espiritual', 'trevas', 'armadura', 'luta espiritual'], [
    ['ef', 6, 10, 13], ['ef', 6, 16, 18], ['2co', 10, 3, 5], ['tg', 4, 7], ['1pe', 5, 8, 9], ['1jo', 4, 4]
  ]),
  e('batismo', 'Batismo', CAT.IGREJA, ['batizar', 'batismo nas aguas', 'imersao', 'ordenanca'], [
    ['mt', 28, 19], ['rm', 6, 3, 4], ['at', 2, 38], ['mc', 16, 16], ['gl', 3, 27], ['1pe', 3, 21]
  ]),
  e('batismo-no-espirito', 'Batismo no Espírito', CAT.IGREJA, ['pentecostes', 'poder do alto', 'cheio do espirito'], [
    ['at', 1, 5], ['at', 1, 8], ['mt', 3, 11], ['1co', 12, 13], ['ef', 5, 18], ['at', 2, 4]
  ]),
  e('bebedeira', 'Bebedeira', CAT.CARATER, ['embriaguez', 'bebado', 'alcool', 'excesso'], [
    ['gl', 5, 19, 21], ['ef', 5, 18], ['1co', 6, 10], ['rm', 13, 13], ['pv', 23, 20, 21], ['lc', 21, 34]
  ]),
  e('beleza', 'Beleza', CAT.CARATER, ['estetica', 'beleza interior', 'aparencia', 'modestia'], [
    ['pv', 31, 30], ['1pe', 3, 3, 4], ['1sm', 16, 7], ['ec', 3, 11], ['sl', 27, 4]
  ]),
  e('bem-aventurancas', 'Bem-Aventuranças', CAT.DEUS, ['sermao do monte', 'felizes', 'reino dos ceus'], [
    ['mt', 5, 3, 12], ['sl', 1, 1, 2], ['lc', 11, 28], ['ap', 1, 3]
  ]),
  e('bencao', 'Bênção', CAT.DEUS, ['abencoar', 'bencaos', 'favor de deus', 'bencao araonica'], [
    ['nm', 6, 24, 26], ['ef', 1, 3], ['pv', 10, 22], ['sl', 1, 1, 3], ['rm', 12, 14], ['gn', 12, 2]
  ]),
  e('benignidade', 'Benignidade', CAT.CARATER, ['bondade', 'mansidao', 'compaixao', 'fruto do espirito'], [
    ['gl', 5, 22], ['ef', 4, 32], ['cl', 3, 12], ['rm', 2, 4], ['pv', 19, 22]
  ]),
  e('biblia', 'Bíblia', CAT.DEUS, ['escrituras', 'livro sagrado', 'inspiracao', 'sola scriptura'], [
    ['2tm', 3, 16, 17], ['hb', 4, 12], ['sl', 119, 105], ['is', 40, 8], ['mt', 24, 35], ['2pe', 1, 20, 21]
  ]),
  e('blasfemia', 'Blasfêmia', CAT.IGREJA, ['blasfemar', 'nome de deus em vao', 'ofensa a deus'], [
    ['ex', 20, 7], ['mt', 12, 31, 32], ['mc', 3, 28, 29], ['cl', 3, 8], ['1tm', 1, 13]
  ]),
  e('boas-obras', 'Boas Obras', CAT.DEUS, ['obras', 'caridade', 'fe e obras', 'frutos'], [
    ['ef', 2, 8, 10], ['tg', 2, 17, 18], ['mt', 5, 16], ['tt', 3, 8], ['gl', 6, 9, 10], ['hb', 10, 24]
  ]),
  e('bom-pastor', 'Bom Pastor', CAT.DEUS, ['jesus', 'salmo 23', 'ovelhas', 'cuidado de deus'], [
    ['jo', 10, 11], ['jo', 10, 14, 15], ['jo', 10, 27, 28], ['sl', 23, 1, 4], ['hb', 13, 20], ['1pe', 5, 4]
  ]),
  e('bondade', 'Bondade', CAT.CARATER, ['bom', 'fazer o bem', 'generosidade', 'carater'], [
    ['gl', 6, 9, 10], ['sl', 34, 8], ['sl', 107, 1], ['mq', 6, 8], ['1ts', 5, 15], ['rm', 12, 21]
  ]),
  e('brandura', 'Brandura', CAT.CARATER, ['mansidao', 'suavidade', 'calma', 'fala mansa'], [
    ['pv', 15, 1], ['pv', 25, 15], ['gl', 6, 1], ['2tm', 2, 24, 25], ['fp', 4, 5]
  ]),
  e('brigas', 'Brigas', CAT.FAMILIA, ['discussoes', 'contenda', 'conflito', 'briga', 'desentendimento'], [
    ['pv', 15, 1], ['pv', 17, 14], ['pv', 20, 3], ['tg', 4, 1, 2], ['2tm', 2, 23, 24], ['rm', 12, 18]
  ]),
  e('bruxaria', 'Bruxaria', CAT.IGREJA, ['feiticaria', 'magia', 'ocultismo', 'encantamento'], [
    ['dt', 18, 10, 12], ['gl', 5, 19, 21], ['ex', 22, 18], ['ap', 21, 8], ['at', 19, 19]
  ]),

  // ─── C ───────────────────────────────────────────────────────────────────
  e('calunia', 'Calúnia', CAT.CARATER, ['difamacao', 'falso testemunho', 'falar mal', 'maledicencia'], [
    ['ex', 20, 16], ['pv', 10, 18], ['sl', 101, 5], ['ef', 4, 31], ['tg', 4, 11], ['1pe', 2, 1]
  ]),
  e('caminho', 'Caminho', CAT.DEUS, ['direcao', 'vereda', 'jesus e o caminho', 'estreito'], [
    ['jo', 14, 6], ['mt', 7, 13, 14], ['sl', 119, 105], ['pv', 3, 5, 6], ['sl', 37, 5], ['pv', 14, 12]
  ]),
  e('cansaco', 'Cansaço', CAT.EMOCOES, ['exausto', 'fadiga', 'burnout', 'esgotamento', 'sem forcas'], [
    ['mt', 11, 28, 30], ['is', 40, 29, 31], ['gl', 6, 9], ['sl', 73, 26], ['2co', 12, 9]
  ]),
  e('carater', 'Caráter', CAT.CARATER, ['integridade', 'conduta', 'virtude', 'exemplo'], [
    ['rm', 5, 3, 4], ['pv', 11, 3], ['pv', 22, 1], ['fp', 4, 8], ['tt', 2, 7, 8]
  ]),
  e('caridade', 'Caridade', CAT.CARATER, ['esmola', 'ajudar', 'generosidade', 'amor pratico'], [
    ['1co', 13, 3, 4], ['1pe', 4, 8], ['mt', 6, 2, 4], ['pv', 19, 17], ['1jo', 3, 17, 18]
  ]),
  e('carne', 'Carne', CAT.IGREJA, ['natureza humana', 'desejos carnais', 'obras da carne', 'velho homem'], [
    ['gl', 5, 16, 21], ['rm', 8, 5, 8], ['rm', 8, 13], ['1jo', 2, 16], ['rm', 13, 14]
  ]),
  e('casamento', 'Casamento', CAT.FAMILIA, ['casar', 'matrimonio', 'conjuge', 'uma so carne', 'aliança conjugal'], [
    ['gn', 2, 24], ['mt', 19, 4, 6], ['ef', 5, 22, 25], ['ef', 5, 28, 33], ['hb', 13, 4], ['pv', 18, 22], ['ec', 4, 9, 12], ['1pe', 3, 7]
  ]),
  e('castidade', 'Castidade', CAT.FAMILIA, ['pureza sexual', 'santidade', 'abstinencia', 'virgindade'], [
    ['1ts', 4, 3, 5], ['1co', 6, 18, 20], ['2tm', 2, 22], ['hb', 13, 4], ['1tm', 5, 2]
  ]),
  e('castigo', 'Castigo', CAT.DEUS, ['disciplina', 'correcao', 'juizo', 'consequencia'], [
    ['hb', 12, 6], ['is', 53, 5], ['pv', 3, 11, 12], ['rm', 6, 23], ['ap', 3, 19]
  ]),
  e('ceia-do-senhor', 'Ceia do Senhor', CAT.IGREJA, ['santa ceia', 'pao e vinho', 'calice', 'memorial'], [
    ['1co', 11, 23, 29], ['lc', 22, 19, 20], ['mt', 26, 26, 28], ['1co', 10, 16, 17]
  ]),
  e('ceu', 'Céu', CAT.ETERNIDADE, ['paraiso', 'morada eterna', 'nova jerusalem', 'gloria'], [
    ['jo', 14, 1, 3], ['ap', 21, 1, 4], ['fp', 3, 20], ['1co', 2, 9], ['ap', 22, 3, 5], ['mt', 6, 20]
  ]),
  e('chamado', 'Chamado', CAT.DEUS, ['vocacao', 'proposito', 'eleicao', 'missao'], [
    ['rm', 8, 28], ['ef', 4, 1], ['2tm', 1, 9], ['1pe', 2, 9], ['fp', 3, 14], ['jr', 1, 5]
  ]),
  e('choro', 'Choro', CAT.EMOCOES, ['lagrimas', 'pranto', 'tristeza', 'luto', 'consolo'], [
    ['sl', 30, 5], ['sl', 126, 5, 6], ['jo', 11, 35], ['mt', 5, 4], ['sl', 56, 8], ['ap', 21, 4]
  ]),
  e('cidadania', 'Cidadania', CAT.VIDA, ['dever civico', 'patria', 'impostos', 'cidadao do ceu'], [
    ['fp', 3, 20], ['rm', 13, 1, 7], ['1pe', 2, 13, 17], ['jr', 29, 7], ['mt', 22, 21]
  ]),
  e('ciencia', 'Ciência', CAT.VIDA, ['conhecimento', 'estudos', 'universo', 'razao', 'sabedoria'], [
    ['sl', 19, 1, 2], ['rm', 1, 20], ['pv', 25, 2], ['pv', 18, 15], ['cl', 2, 2, 3], ['sl', 111, 2]
  ]),
  e('ciume', 'Ciúme', CAT.EMOCOES, ['ciumento', 'inveja', 'posse', 'rivalidade'], [
    ['pv', 27, 4], ['pv', 14, 30], ['1co', 13, 4], ['tg', 3, 16], ['gl', 5, 19, 20], ['ct', 8, 6]
  ]),
  e('clamor', 'Clamor', CAT.IGREJA, ['clamar', 'socorro', 'suplica', 'grito'], [
    ['jr', 33, 3], ['sl', 34, 17], ['sl', 107, 6], ['sl', 145, 18, 19], ['sl', 40, 1]
  ]),
  e('cobica', 'Cobiça', CAT.CARATER, ['cobicar', 'desejo desordenado', 'decimo mandamento', 'inveja'], [
    ['ex', 20, 17], ['lc', 12, 15], ['ef', 5, 3], ['cl', 3, 5], ['tg', 4, 2], ['1jo', 2, 16]
  ]),
  e('compaixao', 'Compaixão', CAT.CARATER, ['misericordia', 'empatia', 'piedade', 'cuidado'], [
    ['cl', 3, 12], ['mt', 9, 36], ['sl', 103, 13], ['lm', 3, 22], ['1pe', 3, 8], ['1jo', 3, 17]
  ]),
  e('compromisso', 'Compromisso', CAT.CARATER, ['palavra empenhada', 'fidelidade', 'voto', 'promessa'], [
    ['ec', 5, 4, 5], ['mt', 5, 37], ['sl', 15, 4], ['lc', 9, 62], ['sl', 37, 5]
  ]),
  e('comunhao', 'Comunhão', CAT.IGREJA, ['congregar', 'irmaos', 'unidade', 'koinonia', 'igreja'], [
    ['hb', 10, 24, 25], ['at', 2, 42], ['sl', 133, 1], ['1jo', 1, 7], ['mt', 18, 20], ['2co', 13, 14]
  ]),
  e('condenacao', 'Condenação', CAT.DEUS, ['culpa', 'juizo', 'livre de condenacao', 'graca'], [
    ['rm', 8, 1, 2], ['jo', 3, 17, 18], ['jo', 5, 24], ['rm', 8, 33, 34], ['jo', 8, 11]
  ]),
  e('confianca', 'Confiança', CAT.DEUS, ['confiar', 'seguranca', 'descansar em deus', 'fe'], [
    ['pv', 3, 5, 6], ['sl', 37, 5], ['jr', 17, 7, 8], ['sl', 9, 10], ['is', 26, 3, 4], ['sl', 125, 1]
  ]),
  e('confissao', 'Confissão', CAT.IGREJA, ['confessar', 'pecados', 'confessar a cristo', 'arrependimento'], [
    ['1jo', 1, 9], ['pv', 28, 13], ['tg', 5, 16], ['sl', 32, 5], ['rm', 10, 9, 10]
  ]),
  e('conflitos', 'Conflitos', CAT.FAMILIA, ['brigas', 'desentendimento', 'processos', 'resolver conflitos'], [
    ['mt', 18, 15, 17], ['1co', 6, 1, 7], ['mt', 5, 23, 25], ['rm', 12, 18], ['pv', 15, 1]
  ]),
  e('conformismo', 'Conformismo', CAT.IGREJA, ['mundanismo', 'secularismo', 'pressao social', 'renovar a mente'], [
    ['rm', 12, 2], ['1jo', 2, 15, 17], ['tg', 4, 4], ['jo', 17, 14, 16], ['cl', 3, 1, 2]
  ]),
  e('conhecimento', 'Conhecimento', CAT.CARATER, ['sabedoria', 'entendimento', 'estudo', 'aprender'], [
    ['pv', 1, 7], ['pv', 18, 15], ['os', 4, 6], ['os', 6, 3], ['2pe', 3, 18], ['fp', 3, 8]
  ]),
  e('consciencia', 'Consciência', CAT.CARATER, ['boa consciencia', 'culpa', 'conviccao', 'coracao'], [
    ['at', 24, 16], ['1tm', 1, 5], ['1pe', 3, 16], ['rm', 2, 15], ['hb', 9, 14], ['rm', 14, 22, 23]
  ]),
  e('conselhos', 'Conselhos', CAT.CARATER, ['conselheiros', 'prudencia', 'ouvir', 'direcao'], [
    ['pv', 11, 14], ['pv', 15, 22], ['pv', 12, 15], ['pv', 19, 20], ['pv', 24, 6]
  ]),
  e('consolo', 'Consolo', CAT.EMOCOES, ['consolacao', 'alivio', 'luto', 'dor', 'amparo'], [
    ['2co', 1, 3, 4], ['sl', 23, 4], ['mt', 5, 4], ['is', 40, 1], ['sl', 119, 50], ['is', 66, 13]
  ]),
  e('constancia', 'Constância', CAT.CARATER, ['firmeza', 'perseveranca', 'fidelidade', 'inabalavel'], [
    ['1co', 15, 58], ['hb', 10, 23], ['gl', 6, 9], ['cl', 1, 23], ['tg', 1, 12]
  ]),
  e('contenda', 'Contenda', CAT.CARATER, ['disputa', 'briga', 'divisao', 'discussao', 'porfia'], [
    ['pv', 17, 14], ['pv', 20, 3], ['pv', 26, 20, 21], ['gl', 5, 20], ['fp', 2, 3], ['tt', 3, 9]
  ]),
  e('contentamento', 'Contentamento', CAT.EMOCOES, ['satisfeito', 'suficiente', 'paz', 'gratidao'], [
    ['fp', 4, 11, 13], ['1tm', 6, 6, 8], ['hb', 13, 5], ['sl', 23, 1], ['pv', 15, 16]
  ]),
  e('conversao', 'Conversão', CAT.DEUS, ['converter', 'novo nascimento', 'arrependimento', 'nova vida'], [
    ['at', 3, 19], ['2co', 5, 17], ['mt', 18, 3], ['rm', 10, 9, 10], ['1ts', 1, 9]
  ]),
  e('coracao', 'Coração', CAT.CARATER, ['guardar o coracao', 'intencoes', 'interior', 'sentimentos'], [
    ['pv', 4, 23], ['jr', 17, 9, 10], ['1sm', 16, 7], ['sl', 51, 10], ['mt', 15, 18, 19], ['ez', 36, 26]
  ]),
  e('coragem', 'Coragem', CAT.EMOCOES, ['animo', 'ousadia', 'destemor', 'valentia'], [
    ['js', 1, 9], ['dt', 31, 6], ['sl', 27, 1], ['sl', 31, 24], ['2tm', 1, 7], ['1co', 16, 13]
  ]),
  e('cordeiro-de-deus', 'Cordeiro de Deus', CAT.DEUS, ['jesus', 'sacrificio', 'pascoa', 'sangue', 'expiacao'], [
    ['jo', 1, 29], ['is', 53, 7], ['1pe', 1, 18, 19], ['1co', 5, 7], ['ap', 5, 12]
  ]),
  e('corpo', 'Corpo', CAT.CARATER, ['templo do espirito', 'saude', 'cuidado fisico', 'santidade corporal'], [
    ['1co', 6, 19, 20], ['1co', 3, 16, 17], ['rm', 12, 1], ['1ts', 5, 23], ['1co', 9, 27]
  ]),
  e('correcao', 'Correção', CAT.CARATER, ['disciplina', 'repreensao', 'ensino', 'humildade'], [
    ['pv', 12, 1], ['pv', 15, 32], ['pv', 3, 11, 12], ['hb', 12, 11], ['2tm', 3, 16]
  ]),
  e('corrupcao', 'Corrupção', CAT.VIDA, ['suborno', 'propina', 'fraude', 'desonestidade', 'politica'], [
    ['ex', 23, 8], ['dt', 16, 19], ['pv', 17, 23], ['pv', 29, 4], ['is', 33, 15], ['pv', 11, 1]
  ]),
  e('criacao', 'Criação', CAT.DEUS, ['origem', 'universo', 'genesis', 'criador', 'imagem de deus'], [
    ['gn', 1, 1], ['gn', 1, 26, 27], ['sl', 19, 1, 2], ['jo', 1, 1, 3], ['cl', 1, 16, 17], ['hb', 11, 3]
  ]),
  e('criancas', 'Crianças', CAT.FAMILIA, ['filhos', 'pequeninos', 'infancia', 'bebe'], [
    ['mt', 19, 14], ['sl', 127, 3, 5], ['mt', 18, 3, 6], ['pv', 22, 6], ['mc', 10, 14, 16]
  ]),
  e('cruz', 'Cruz', CAT.DEUS, ['calvario', 'sacrificio', 'crucificacao', 'morte de cristo'], [
    ['is', 53, 5, 6], ['1pe', 2, 24], ['1co', 1, 18], ['gl', 2, 20], ['cl', 2, 14], ['lc', 9, 23]
  ]),
  e('culpa', 'Culpa', CAT.EMOCOES, ['remorso', 'condenacao', 'peso na consciencia', 'acusacao'], [
    ['rm', 8, 1, 2], ['sl', 32, 1, 5], ['1jo', 3, 20], ['hb', 10, 22], ['is', 43, 25], ['sl', 103, 12]
  ]),
  e('culto', 'Culto', CAT.IGREJA, ['adoracao', 'igreja', 'reuniao', 'louvor', 'liturgia'], [
    ['rm', 12, 1], ['jo', 4, 23, 24], ['sl', 100, 1, 4], ['1co', 14, 26], ['1co', 14, 40], ['hb', 12, 28]
  ]),
  e('cura', 'Cura', CAT.EMOCOES, ['curar', 'milagre', 'saude', 'enfermidade', 'restauracao'], [
    ['tg', 5, 14, 15], ['sl', 103, 2, 3], ['jr', 17, 14], ['ex', 15, 26], ['sl', 147, 3], ['mt', 4, 23]
  ]),

  // ─── D ───────────────────────────────────────────────────────────────────
  e('danca', 'Dança', CAT.IGREJA, ['dancar', 'celebracao', 'alegria', 'festa', 'louvor'], [
    ['sl', 149, 3], ['sl', 150, 4], ['sl', 30, 11], ['ec', 3, 4], ['2sm', 6, 14]
  ]),
  e('decepcao', 'Decepção', CAT.EMOCOES, ['desilusao', 'traicao', 'ferido', 'tristeza'], [
    ['sl', 118, 8, 9], ['sl', 34, 18], ['sl', 55, 12, 14], ['rm', 5, 5], ['2tm', 4, 16, 17]
  ]),
  e('decisoes', 'Decisões', CAT.CARATER, ['escolha', 'escolhas', 'orientacao', 'direcao', 'encruzilhada'], [
    ['pv', 3, 5, 6], ['pv', 16, 3], ['pv', 16, 9], ['tg', 1, 5], ['sl', 32, 8], ['sl', 25, 4, 5]
  ]),
  e('demonios', 'Demônios', CAT.IGREJA, ['espiritos imundos', 'trevas', 'exorcismo', 'satanas'], [
    ['tg', 2, 19], ['ef', 6, 12], ['lc', 10, 19, 20], ['1tm', 4, 1], ['1jo', 4, 4], ['cl', 2, 15]
  ]),
  e('depressao', 'Depressão', CAT.EMOCOES, ['tristeza profunda', 'angustia', 'abatimento', 'desespero', 'saude mental'], [
    ['sl', 42, 11], ['sl', 34, 17, 18], ['sl', 40, 1, 3], ['sl', 147, 3], ['mt', 11, 28], ['is', 41, 10], ['lm', 3, 21, 23], ['1rs', 19, 4, 8]
  ]),
  e('desanimo', 'Desânimo', CAT.EMOCOES, ['desistir', 'abatido', 'sem vontade', 'fraqueza'], [
    ['gl', 6, 9], ['2co', 4, 16], ['js', 1, 9], ['sl', 43, 5], ['is', 40, 31], ['hb', 12, 3]
  ]),
  e('descanso', 'Descanso', CAT.EMOCOES, ['repouso', 'alivio', 'paz', 'sabado', 'sono'], [
    ['mt', 11, 28, 30], ['ex', 33, 14], ['sl', 4, 8], ['sl', 127, 2], ['hb', 4, 9, 10], ['mc', 6, 31]
  ]),
  e('desemprego', 'Desemprego', CAT.CARATER, ['desempregado', 'provisao', 'sustento', 'trabalho'], [
    ['fp', 4, 19], ['mt', 6, 31, 33], ['sl', 37, 25], ['sl', 23, 1], ['2co', 9, 8], ['sl', 34, 10]
  ]),
  e('deserto', 'Deserto', CAT.EMOCOES, ['aridez', 'frieza espiritual', 'provacao', 'prova'], [
    ['sl', 63, 1], ['is', 43, 19], ['dt', 8, 2, 3], ['os', 2, 14], ['is', 35, 1]
  ]),
  e('desespero', 'Desespero', CAT.EMOCOES, ['sem saida', 'angustia', 'socorro', 'esperanca'], [
    ['2co', 4, 8, 9], ['sl', 40, 1, 2], ['sl', 34, 17, 18], ['sl', 46, 1, 2], ['lm', 3, 21, 24]
  ]),
  e('desobediencia', 'Desobediência', CAT.CARATER, ['rebeldia', 'teimosia', 'desrespeito', 'pecado'], [
    ['1sm', 15, 22, 23], ['ef', 5, 6], ['rm', 5, 19], ['pv', 17, 11], ['hb', 3, 15]
  ]),
  e('deus', 'Deus', CAT.DEUS, ['senhor', 'criador', 'pai', 'atributos de deus', 'todo poderoso'], [
    ['ex', 34, 6, 7], ['dt', 6, 4], ['sl', 90, 2], ['is', 6, 3], ['sl', 139, 1, 4], ['1jo', 4, 8], ['ml', 3, 6]
  ]),
  e('dia-do-senhor', 'Dia do Senhor', CAT.ETERNIDADE, ['domingo', 'juizo', 'volta de cristo', 'culto'], [
    ['ap', 1, 10], ['at', 20, 7], ['1ts', 5, 2], ['2pe', 3, 10], ['jl', 2, 31]
  ]),
  e('diabo', 'Diabo', CAT.IGREJA, ['satanas', 'tentador', 'adversario', 'inimigo', 'lucifer'], [
    ['1pe', 5, 8, 9], ['jo', 8, 44], ['tg', 4, 7], ['ef', 6, 11], ['1jo', 3, 8], ['ap', 20, 10]
  ]),
  e('difamacao', 'Difamação', CAT.CARATER, ['calunia', 'falar mal', 'reputacao', 'injuria'], [
    ['pv', 10, 18], ['sl', 15, 1, 3], ['ef', 4, 31], ['tt', 3, 2], ['1pe', 3, 16]
  ]),
  e('dignidade', 'Dignidade', CAT.VIDA, ['valor humano', 'imagem de deus', 'direitos humanos', 'respeito'], [
    ['gn', 1, 27], ['sl', 8, 4, 6], ['1pe', 2, 17], ['gl', 3, 28], ['pv', 14, 31]
  ]),
  e('diligencia', 'Diligência', CAT.CARATER, ['esforco', 'dedicacao', 'trabalho', 'excelencia'], [
    ['pv', 10, 4], ['pv', 12, 24], ['pv', 13, 4], ['pv', 21, 5], ['rm', 12, 11], ['cl', 3, 23]
  ]),
  e('dinheiro', 'Dinheiro', CAT.CARATER, ['financas', 'bens', 'salario', 'economia', 'mamom', 'mordomia'], [
    ['1tm', 6, 10], ['mt', 6, 24], ['mt', 6, 19, 21], ['pv', 21, 5], ['pv', 13, 11], ['hb', 13, 5], ['lc', 16, 10, 11]
  ]),
  e('discernimento', 'Discernimento', CAT.IGREJA, ['discernir', 'provar os espiritos', 'sabedoria', 'prudencia'], [
    ['1jo', 4, 1], ['hb', 5, 14], ['fp', 1, 9, 10], ['rm', 12, 2], ['1ts', 5, 21], ['1rs', 3, 9]
  ]),
  e('disciplina', 'Disciplina', CAT.CARATER, ['correcao', 'educacao', 'autocontrole', 'tratamento'], [
    ['hb', 12, 5, 6], ['hb', 12, 11], ['pv', 3, 11, 12], ['pv', 12, 1], ['pv', 15, 32], ['ap', 3, 19]
  ]),
  e('discipulado', 'Discipulado', CAT.IGREJA, ['discipulo', 'seguir a jesus', 'ensinar', 'grande comissao'], [
    ['lc', 9, 23], ['mt', 28, 19, 20], ['jo', 8, 31, 32], ['jo', 13, 35], ['2tm', 2, 2], ['lc', 14, 27]
  ]),
  e('dividas', 'Dívidas', CAT.CARATER, ['divida', 'dever', 'endividamento', 'pagar', 'credito'], [
    ['pv', 22, 7], ['rm', 13, 8], ['sl', 37, 21], ['pv', 3, 27, 28], ['pv', 22, 26, 27]
  ]),
  e('divorcio', 'Divórcio', CAT.FAMILIA, ['separacao', 'separar', 'recasamento', 'novo casamento', 'repudio'], [
    ['ml', 2, 16], ['mt', 19, 6, 9], ['mt', 5, 31, 32], ['mc', 10, 9, 12], ['1co', 7, 10, 15], ['rm', 7, 2, 3]
  ]),
  e('dizimo', 'Dízimo', CAT.IGREJA, ['dizimos', 'contribuicao', 'primicias', 'oferta'], [
    ['ml', 3, 10], ['mt', 23, 23], ['pv', 3, 9, 10], ['2co', 9, 6, 7], ['gn', 14, 20], ['gn', 28, 22]
  ]),
  e('doenca', 'Doença', CAT.EMOCOES, ['enfermidade', 'enfermo', 'hospital', 'dor fisica', 'cura'], [
    ['sl', 41, 3], ['tg', 5, 14, 15], ['sl', 103, 2, 3], ['2co', 12, 7, 9], ['mt', 4, 23], ['jo', 9, 2, 3]
  ]),
  e('dominio-proprio', 'Domínio Próprio', CAT.CARATER, ['autocontrole', 'temperanca', 'impulso', 'disciplina'], [
    ['pv', 25, 28], ['pv', 16, 32], ['gl', 5, 22, 23], ['2tm', 1, 7], ['1co', 9, 25, 27], ['tt', 2, 11, 12]
  ]),
  e('dons-espirituais', 'Dons Espirituais', CAT.IGREJA, ['dons', 'talentos', 'ministerio', 'carismas'], [
    ['1co', 12, 4, 7], ['rm', 12, 6, 8], ['1pe', 4, 10, 11], ['ef', 4, 11, 12], ['1co', 14, 12]
  ]),
  e('dor', 'Dor', CAT.EMOCOES, ['sofrimento', 'luto', 'ferida', 'consolo', 'choro'], [
    ['sl', 34, 18], ['sl', 147, 3], ['ap', 21, 4], ['rm', 8, 18], ['2co', 1, 3, 5]
  ]),
  e('doutrina', 'Doutrina', CAT.IGREJA, ['ensino', 'teologia', 'sa doutrina', 'verdade'], [
    ['2tm', 3, 16], ['2tm', 4, 2, 3], ['tt', 2, 1], ['1tm', 4, 16], ['at', 2, 42], ['ef', 4, 14]
  ]),
  e('drogas', 'Drogas', CAT.CARATER, ['maconha', 'cocaina', 'cigarro', 'tabaco', 'dependencia', 'vicio', 'sobriedade'], [
    ['1co', 6, 12], ['1co', 6, 19, 20], ['1pe', 4, 7], ['1pe', 5, 8], ['2pe', 2, 19], ['rm', 6, 14], ['jo', 8, 36]
  ]),
  e('duvida', 'Dúvida', CAT.EMOCOES, ['duvidar', 'incredulidade', 'crise de fe', 'tome', 'incerteza'], [
    ['mc', 9, 24], ['tg', 1, 6, 8], ['jd', 1, 22], ['jo', 20, 27, 29], ['mt', 14, 31], ['rm', 10, 17]
  ]),

  // ─── E ───────────────────────────────────────────────────────────────────
  e('edificacao', 'Edificação', CAT.IGREJA, ['edificar', 'crescimento', 'encorajamento', 'palavras'], [
    ['1ts', 5, 11], ['ef', 4, 29], ['1co', 14, 26], ['rm', 14, 19], ['jd', 1, 20]
  ]),
  e('educacao', 'Educação', CAT.FAMILIA, ['ensinar', 'instrucao', 'filhos', 'estudo', 'sabedoria'], [
    ['pv', 22, 6], ['dt', 6, 6, 7], ['ef', 6, 4], ['pv', 1, 7, 8], ['pv', 4, 13]
  ]),
  e('egoismo', 'Egoísmo', CAT.CARATER, ['egoista', 'individualismo', 'interesse proprio'], [
    ['fp', 2, 3, 4], ['1co', 10, 24], ['1co', 13, 5], ['tg', 3, 16], ['2tm', 3, 2], ['rm', 15, 1, 2]
  ]),
  e('eleicao', 'Eleição', CAT.DEUS, ['escolhidos', 'predestinacao', 'chamado', 'soberania'], [
    ['ef', 1, 4, 5], ['rm', 8, 29, 30], ['1pe', 2, 9], ['jo', 15, 16], ['2pe', 1, 10]
  ]),
  e('embriaguez', 'Embriaguez', CAT.CARATER, ['alcool', 'bebedeira', 'vinho', 'bebado'], [
    ['ef', 5, 18], ['gl', 5, 19, 21], ['pv', 20, 1], ['pv', 23, 29, 32], ['1co', 6, 10], ['rm', 13, 13]
  ]),
  e('empatia', 'Empatia', CAT.FAMILIA, ['compaixao', 'solidariedade', 'chorar com os que choram'], [
    ['rm', 12, 15], ['gl', 6, 2], ['1pe', 3, 8], ['1co', 12, 26], ['hb', 4, 15]
  ]),
  e('emprego', 'Emprego', CAT.CARATER, ['trabalho', 'profissao', 'carreira', 'sustento', 'patrao'], [
    ['cl', 3, 23, 24], ['ef', 6, 5, 9], ['2ts', 3, 10, 12], ['pv', 14, 23], ['ec', 9, 10]
  ]),
  e('emprestimo', 'Empréstimo', CAT.CARATER, ['emprestar', 'dividas', 'fiador', 'juros', 'financas'], [
    ['pv', 22, 7], ['sl', 37, 21], ['sl', 112, 5], ['mt', 5, 42], ['pv', 22, 26, 27], ['lc', 6, 35]
  ]),
  e('encarnacao', 'Encarnação', CAT.DEUS, ['verbo se fez carne', 'natal', 'nascimento de jesus', 'emanuel'], [
    ['jo', 1, 14], ['fp', 2, 6, 8], ['gl', 4, 4, 5], ['mt', 1, 23], ['1tm', 3, 16], ['hb', 2, 14]
  ]),
  e('encorajamento', 'Encorajamento', CAT.FAMILIA, ['encorajar', 'animar', 'apoio', 'edificar'], [
    ['1ts', 5, 11], ['hb', 3, 13], ['hb', 10, 24, 25], ['pv', 12, 25], ['gl', 6, 2]
  ]),
  e('enfermidade', 'Enfermidade', CAT.EMOCOES, ['doenca', 'fraqueza fisica', 'cura', 'sofrimento'], [
    ['sl', 41, 3], ['tg', 5, 14, 15], ['is', 43, 2], ['2co', 4, 16, 18], ['sl', 103, 2, 3]
  ]),
  e('engano', 'Engano', CAT.CARATER, ['fraude', 'mentira', 'ilusao', 'falso'], [
    ['jr', 17, 9], ['ef', 5, 6], ['cl', 2, 8], ['pv', 11, 1], ['2co', 11, 13, 14], ['mt', 24, 4]
  ]),
  e('entretenimento', 'Entretenimento', CAT.CARATER, ['filmes', 'series', 'jogos', 'internet', 'redes sociais', 'lazer'], [
    ['fp', 4, 8], ['sl', 101, 3], ['1co', 6, 12], ['1co', 10, 23], ['1co', 10, 31], ['rm', 12, 2]
  ]),
  e('escravidao', 'Escravidão', CAT.VIDA, ['escravo', 'opressao', 'libertacao', 'dignidade'], [
    ['gl', 3, 28], ['fm', 1, 15, 16], ['1co', 7, 21, 23], ['ex', 21, 16], ['1tm', 1, 9, 10], ['lc', 4, 18]
  ]),
  e('escrituras', 'Escrituras', CAT.DEUS, ['biblia', 'palavra de deus', 'inspiracao', 'canon'], [
    ['2tm', 3, 16, 17], ['2pe', 1, 20, 21], ['jo', 5, 39], ['rm', 15, 4], ['lc', 24, 27], ['at', 17, 11]
  ]),
  e('esperanca', 'Esperança', CAT.EMOCOES, ['futuro', 'confianca', 'expectativa', 'ancora'], [
    ['rm', 15, 13], ['hb', 6, 19], ['rm', 5, 3, 5], ['lm', 3, 21, 24], ['1pe', 1, 3], ['sl', 39, 7]
  ]),
  e('espirito', 'Espírito', CAT.DEUS, ['espirito humano', 'alma', 'vida espiritual', 'adorar em espirito'], [
    ['1ts', 5, 23], ['ec', 12, 7], ['rm', 8, 16], ['jo', 4, 24], ['hb', 4, 12], ['sl', 51, 10]
  ]),
  e('espirito-santo', 'Espírito Santo', CAT.DEUS, ['consolador', 'paracleto', 'pentecostes', 'uncao', 'habitar'], [
    ['jo', 14, 16, 17], ['jo', 14, 26], ['jo', 16, 13], ['at', 1, 8], ['rm', 8, 14, 16], ['rm', 8, 26], ['ef', 1, 13, 14]
  ]),
  e('espiritismo', 'Espiritismo', CAT.IGREJA, ['mediuns', 'necromancia', 'consulta aos mortos', 'mesa branca', 'espiritos'], [
    ['dt', 18, 10, 12], ['lv', 19, 31], ['lv', 20, 6], ['is', 8, 19], ['hb', 9, 27], ['lc', 16, 26]
  ]),
  e('esposa', 'Esposa', CAT.FAMILIA, ['mulher virtuosa', 'casamento', 'esposas', 'lar'], [
    ['pv', 31, 10, 12], ['pv', 31, 26, 30], ['ef', 5, 22, 24], ['ef', 5, 33], ['pv', 14, 1], ['1pe', 3, 1, 4]
  ]),
  e('estrangeiros', 'Estrangeiros', CAT.VIDA, ['imigrante', 'refugiado', 'xenofobia', 'acolhimento'], [
    ['lv', 19, 33, 34], ['dt', 10, 18, 19], ['sl', 146, 9], ['mt', 25, 35], ['hb', 13, 2], ['zc', 7, 10]
  ]),
  e('estresse', 'Estresse', CAT.EMOCOES, ['pressao', 'ansiedade', 'cansaco', 'sobrecarga', 'paz'], [
    ['mt', 11, 28, 30], ['fp', 4, 6, 7], ['sl', 55, 22], ['1pe', 5, 7], ['sl', 46, 10]
  ]),
  e('eternidade', 'Eternidade', CAT.ETERNIDADE, ['para sempre', 'vida eterna', 'ceu', 'imortalidade'], [
    ['ec', 3, 11], ['jo', 3, 16], ['2co', 4, 18], ['1jo', 5, 11, 13], ['ap', 21, 3, 4], ['sl', 90, 2]
  ]),
  e('etica', 'Ética', CAT.VIDA, ['moral', 'justica', 'honestidade', 'retidao', 'conduta'], [
    ['mq', 6, 8], ['mt', 7, 12], ['fp', 4, 8], ['pv', 11, 1], ['rm', 12, 17]
  ]),
  e('eutanasia', 'Eutanásia', CAT.VIDA, ['suicidio assistido', 'morte assistida', 'abreviar a vida', 'fim da vida'], [
    ['dt', 32, 39], ['ec', 8, 8], ['sl', 31, 15], ['jo_at', 12, 10], ['ex', 20, 13], ['rm', 14, 7, 8]
  ]),
  e('evangelho', 'Evangelho', CAT.DEUS, ['boas novas', 'mensagem da cruz', 'salvacao', 'cristo'], [
    ['1co', 15, 1, 4], ['rm', 1, 16], ['jo', 3, 16, 17], ['rm', 6, 23], ['rm', 10, 9, 10], ['gl', 1, 8, 9]
  ]),
  e('evangelismo', 'Evangelismo', CAT.IGREJA, ['evangelizar', 'pregar', 'testemunhar', 'missoes'], [
    ['mt', 28, 18, 20], ['mc', 16, 15], ['at', 1, 8], ['rm', 10, 14, 15], ['1pe', 3, 15], ['2co', 5, 18, 20]
  ]),
  e('expiacao', 'Expiação', CAT.DEUS, ['propiciacao', 'sacrificio', 'sangue', 'perdao dos pecados', 'cruz'], [
    ['rm', 3, 25], ['hb', 9, 22], ['1jo', 2, 2], ['lv', 17, 11], ['is', 53, 5, 6], ['hb', 10, 10]
  ]),

  // ─── F ───────────────────────────────────────────────────────────────────
  e('falso-testemunho', 'Falso Testemunho', CAT.CARATER, ['mentira', 'calunia', 'nono mandamento', 'justica'], [
    ['ex', 20, 16], ['pv', 6, 16, 19], ['pv', 19, 5], ['pv', 25, 18], ['ex', 23, 1]
  ]),
  e('falsos-profetas', 'Falsos Profetas', CAT.IGREJA, ['falso mestre', 'heresia', 'lobos', 'engano', 'seitas'], [
    ['mt', 7, 15, 16], ['2pe', 2, 1, 3], ['1jo', 4, 1], ['mt', 24, 11], ['gl', 1, 8], ['at', 17, 11]
  ]),
  e('fama', 'Fama', CAT.CARATER, ['popularidade', 'gloria humana', 'vaidade', 'aplauso'], [
    ['jo', 12, 43], ['gl', 1, 10], ['pv', 22, 1], ['lc', 6, 26], ['jr', 9, 23, 24]
  ]),
  e('familia', 'Família', CAT.FAMILIA, ['lar', 'casa', 'parentes', 'pais e filhos', 'familia crista'], [
    ['js', 24, 15], ['sl', 127, 1], ['ef', 6, 1, 4], ['1tm', 5, 8], ['cl', 3, 18, 21], ['sl', 128, 1, 4]
  ]),
  e('favoritismo', 'Favoritismo', CAT.VIDA, ['acepcao de pessoas', 'parcialidade', 'preconceito', 'discriminacao'], [
    ['tg', 2, 1, 4], ['tg', 2, 8, 9], ['rm', 2, 11], ['at', 10, 34], ['dt', 10, 17], ['pv', 24, 23]
  ]),
  e('fe', 'Fé', CAT.DEUS, ['crer', 'crenca', 'sola fide', 'andar por fe', 'confianca'], [
    ['hb', 11, 1], ['hb', 11, 6], ['rm', 10, 17], ['2co', 5, 7], ['ef', 2, 8, 9], ['tg', 2, 17], ['mc', 11, 22]
  ]),
  e('feiticaria', 'Feitiçaria', CAT.IGREJA, ['bruxaria', 'magia', 'ocultismo', 'simpatia', 'macumba', 'supersticao'], [
    ['dt', 18, 10, 12], ['gl', 5, 19, 21], ['ap', 21, 8], ['at', 19, 19], ['lv', 19, 26], ['1sm', 15, 23]
  ]),
  e('felicidade', 'Felicidade', CAT.EMOCOES, ['alegria', 'bem-aventurado', 'contentamento', 'plenitude'], [
    ['sl', 1, 1, 2], ['sl', 16, 11], ['sl', 37, 4], ['pv', 16, 20], ['mt', 5, 3, 8]
  ]),
  e('fiador', 'Fiador', CAT.CARATER, ['fiança', 'avalista', 'emprestimo', 'divida de terceiros'], [
    ['pv', 22, 26, 27], ['pv', 11, 15], ['pv', 17, 18], ['pv', 6, 1, 3]
  ]),
  e('fidelidade', 'Fidelidade', CAT.DEUS, ['fiel', 'lealdade', 'constancia', 'fidelidade de deus'], [
    ['lm', 3, 22, 23], ['2tm', 2, 13], ['dt', 7, 9], ['1co', 1, 9], ['lc', 16, 10], ['ap', 2, 10]
  ]),
  e('filhos', 'Filhos', CAT.FAMILIA, ['criancas', 'educacao', 'criar filhos', 'maternidade', 'paternidade', 'heranca'], [
    ['sl', 127, 3, 5], ['pv', 22, 6], ['ef', 6, 4], ['dt', 6, 6, 7], ['cl', 3, 21], ['mt', 19, 14], ['pv', 29, 17]
  ]),
  e('fim-dos-tempos', 'Fim dos Tempos', CAT.ETERNIDADE, ['ultimos dias', 'escatologia', 'sinais', 'apocalipse'], [
    ['mt', 24, 6, 14], ['mt', 24, 36], ['2tm', 3, 1, 5], ['2pe', 3, 8, 10], ['lc', 21, 28]
  ]),
  e('financas', 'Finanças', CAT.CARATER, ['dinheiro', 'orcamento', 'planejamento', 'mordomia', 'economia'], [
    ['pv', 21, 5], ['pv', 27, 23, 24], ['lc', 14, 28], ['pv', 13, 11], ['pv', 3, 9, 10], ['1tm', 6, 17, 19]
  ]),
  e('fofoca', 'Fofoca', CAT.CARATER, ['fofoqueiro', 'mexerico', 'intriga', 'boato', 'falar dos outros'], [
    ['pv', 16, 28], ['pv', 11, 13], ['pv', 26, 20], ['pv', 20, 19], ['ef', 4, 29], ['1tm', 5, 13], ['lv', 19, 16]
  ]),
  e('fome', 'Fome', CAT.VIDA, ['pobres', 'alimentar', 'caridade', 'necessitados', 'fome de justica'], [
    ['is', 58, 7], ['mt', 25, 35], ['pv', 25, 21], ['mt', 5, 6], ['jo', 6, 35]
  ]),
  e('forca', 'Força', CAT.EMOCOES, ['vigor', 'poder', 'fraqueza', 'sustento', 'fortaleza'], [
    ['fp', 4, 13], ['is', 40, 29, 31], ['2co', 12, 9, 10], ['sl', 46, 1], ['ef', 6, 10], ['ne', 8, 10]
  ]),
  e('fornicacao', 'Fornicação', CAT.FAMILIA, ['sexo fora do casamento', 'imoralidade sexual', 'prostituicao', 'impureza'], [
    ['1co', 6, 18, 20], ['1ts', 4, 3, 5], ['ef', 5, 3], ['hb', 13, 4], ['gl', 5, 19, 21], ['cl', 3, 5]
  ]),
  e('fraqueza', 'Fraqueza', CAT.EMOCOES, ['fraco', 'limitacao', 'cansaco', 'graca', 'dependencia'], [
    ['2co', 12, 9, 10], ['is', 40, 29], ['rm', 8, 26], ['hb', 4, 15], ['sl', 73, 26]
  ]),
  e('fruto-do-espirito', 'Fruto do Espírito', CAT.IGREJA, ['amor alegria paz', 'carater cristao', 'galatas 5'], [
    ['gl', 5, 22, 25], ['jo', 15, 4, 5], ['ef', 5, 9], ['cl', 1, 10], ['mt', 7, 16, 18]
  ]),
  e('furto', 'Furto', CAT.VIDA, ['roubo', 'furtar', 'roubar', 'pirataria', 'honestidade'], [
    ['ex', 20, 15], ['ef', 4, 28], ['lv', 19, 11], ['1co', 6, 10], ['pv', 21, 7]
  ]),
  e('futuro', 'Futuro', CAT.EMOCOES, ['amanha', 'incerteza', 'planos', 'esperanca', 'providencia'], [
    ['jr', 29, 11], ['mt', 6, 34], ['pv', 16, 9], ['pv', 19, 21], ['tg', 4, 13, 15], ['sl', 37, 5]
  ]),

  // ─── G ───────────────────────────────────────────────────────────────────
  e('galardao', 'Galardão', CAT.ETERNIDADE, ['recompensa', 'coroa', 'tribunal de cristo', 'obras'], [
    ['1co', 3, 13, 15], ['ap', 22, 12], ['cl', 3, 23, 24], ['mt', 6, 19, 20], ['2tm', 4, 8], ['hb', 11, 6]
  ]),
  e('ganancia', 'Ganância', CAT.CARATER, ['avareza', 'ambicao', 'cobica', 'dinheiro facil'], [
    ['1tm', 6, 9, 10], ['lc', 12, 15], ['pv', 15, 27], ['pv', 28, 22], ['ec', 5, 10]
  ]),
  e('generosidade', 'Generosidade', CAT.CARATER, ['doacao', 'caridade', 'dar com alegria', 'compartilhar'], [
    ['pv', 11, 24, 25], ['at', 20, 35], ['2co', 9, 6, 8], ['pv', 22, 9], ['lc', 6, 38], ['1tm', 6, 18]
  ]),
  e('gentileza', 'Gentileza', CAT.CARATER, ['amabilidade', 'brandura', 'educacao', 'respeito'], [
    ['fp', 4, 5], ['ef', 4, 32], ['cl', 3, 12], ['pv', 15, 1], ['2tm', 2, 24]
  ]),
  e('gloria-de-deus', 'Glória de Deus', CAT.DEUS, ['gloria', 'soli deo gloria', 'honra', 'majestade'], [
    ['rm', 11, 36], ['1co', 10, 31], ['sl', 19, 1], ['is', 42, 8], ['ap', 4, 11], ['is', 6, 3]
  ]),
  e('governo', 'Governo', CAT.VIDA, ['politica', 'autoridades', 'estado', 'governantes', 'leis'], [
    ['rm', 13, 1, 7], ['1tm', 2, 1, 2], ['1pe', 2, 13, 17], ['at', 5, 29], ['pv', 29, 2], ['dn', 2, 21]
  ]),
  e('graca', 'Graça', CAT.DEUS, ['favor imerecido', 'sola gratia', 'misericordia', 'salvacao'], [
    ['ef', 2, 8, 9], ['rm', 3, 23, 24], ['2co', 12, 9], ['tt', 2, 11, 12], ['jo', 1, 16, 17], ['rm', 5, 20, 21]
  ]),
  e('grande-comissao', 'Grande Comissão', CAT.IGREJA, ['ide', 'missoes', 'evangelismo', 'discipulado'], [
    ['mt', 28, 18, 20], ['mc', 16, 15], ['at', 1, 8], ['lc', 24, 46, 48]
  ]),
  e('gratidao', 'Gratidão', CAT.CARATER, ['agradecer', 'acoes de gracas', 'grato', 'reconhecimento'], [
    ['1ts', 5, 18], ['sl', 107, 1], ['cl', 3, 15, 17], ['ef', 5, 20], ['sl', 103, 2], ['fp', 4, 6]
  ]),
  e('guerra', 'Guerra', CAT.VIDA, ['conflito', 'paz', 'violencia', 'nacoes', 'batalha'], [
    ['tg', 4, 1, 2], ['ec', 3, 8], ['is', 2, 4], ['mt', 24, 6, 7], ['sl', 46, 9], ['rm', 12, 18]
  ]),
  e('gula', 'Gula', CAT.CARATER, ['glutonaria', 'excesso', 'comer demais', 'moderacao'], [
    ['pv', 23, 20, 21], ['pv', 25, 16], ['1co', 6, 12], ['fp', 3, 19], ['1co', 9, 27]
  ]),

  // ─── H ───────────────────────────────────────────────────────────────────
  e('heranca', 'Herança', CAT.DEUS, ['herdeiros', 'filhos', 'reino dos ceus', 'bens'], [
    ['rm', 8, 17], ['1pe', 1, 3, 4], ['ef', 1, 13, 14], ['cl', 3, 24], ['pv', 13, 22], ['sl', 127, 3]
  ]),
  e('heresia', 'Heresia', CAT.IGREJA, ['falso ensino', 'falsos mestres', 'seitas', 'divisao'], [
    ['2pe', 2, 1], ['gl', 1, 8, 9], ['tt', 3, 10, 11], ['1tm', 6, 3, 5], ['1jo', 4, 1]
  ]),
  e('hipocrisia', 'Hipocrisia', CAT.CARATER, ['hipocrita', 'falsidade', 'fariseus', 'fingimento'], [
    ['mt', 23, 27, 28], ['mt', 6, 1, 2], ['mt', 15, 7, 8], ['lc', 12, 1, 2], ['tt', 1, 16], ['1jo', 2, 4]
  ]),
  e('homem', 'Homem', CAT.FAMILIA, ['masculinidade', 'marido', 'pai', 'imagem de deus', 'lideranca'], [
    ['gn', 1, 27], ['1co', 16, 13, 14], ['ef', 5, 25], ['mq', 6, 8], ['1tm', 5, 8], ['js', 24, 15]
  ]),
  e('homicidio', 'Homicídio', CAT.VIDA, ['assassinato', 'matar', 'nao mataras', 'sangue inocente'], [
    ['ex', 20, 13], ['gn', 9, 6], ['mt', 5, 21, 22], ['1jo', 3, 15], ['pv', 6, 16, 17]
  ]),
  e('homossexualidade', 'Homossexualidade', CAT.FAMILIA, ['homossexual', 'gay', 'lesbica', 'sexualidade'], [
    ['gn', 1, 27], ['gn', 2, 24], ['lv', 18, 22], ['rm', 1, 26, 27], ['1co', 6, 9, 11], ['1tm', 1, 9, 10], ['jd', 1, 7]
  ]),
  e('honestidade', 'Honestidade', CAT.CARATER, ['integridade', 'retidao', 'sinceridade', 'verdade'], [
    ['pv', 10, 9], ['pv', 11, 3], ['2co', 8, 21], ['lc', 16, 10], ['pv', 11, 1], ['hb', 13, 18]
  ]),
  e('honra', 'Honra', CAT.CARATER, ['respeito', 'dignidade', 'honrar', 'gloria'], [
    ['rm', 12, 10], ['1pe', 2, 17], ['pv', 3, 9], ['pv', 15, 33], ['pv', 22, 4]
  ]),
  e('honra-aos-pais', 'Honra aos Pais', CAT.FAMILIA, ['pai e mae', 'obediencia aos pais', 'quinto mandamento'], [
    ['ex', 20, 12], ['ef', 6, 1, 3], ['cl', 3, 20], ['pv', 1, 8, 9], ['pv', 23, 22], ['1tm', 5, 4]
  ]),
  e('horoscopo', 'Horóscopo', CAT.IGREJA, ['signos', 'zodiaco', 'astrologia', 'previsao'], [
    ['dt', 18, 10, 12], ['is', 47, 13, 14], ['jr', 10, 2], ['dt', 4, 19], ['lv', 19, 26]
  ]),
  e('hospitalidade', 'Hospitalidade', CAT.FAMILIA, ['hospedar', 'receber', 'acolher', 'visitas'], [
    ['rm', 12, 13], ['1pe', 4, 9], ['hb', 13, 2], ['1tm', 3, 2], ['mt', 25, 35]
  ]),
  e('humildade', 'Humildade', CAT.CARATER, ['humilde', 'mansidao', 'servir', 'abaixar-se'], [
    ['fp', 2, 3, 8], ['tg', 4, 6], ['tg', 4, 10], ['1pe', 5, 5, 6], ['pv', 22, 4], ['mq', 6, 8]
  ]),

  // ─── I ───────────────────────────────────────────────────────────────────
  e('identidade-em-cristo', 'Identidade em Cristo', CAT.DEUS, ['nova criatura', 'filho de deus', 'quem sou em cristo'], [
    ['2co', 5, 17], ['gl', 2, 20], ['ef', 2, 10], ['1pe', 2, 9], ['jo', 1, 12], ['rm', 8, 1]
  ]),
  e('idolatria', 'Idolatria', CAT.IGREJA, ['idolos', 'imagens', 'escultura', 'deuses estranhos'], [
    ['ex', 20, 3, 5], ['sl', 115, 4, 8], ['is', 42, 8], ['1co', 10, 14], ['1jo', 5, 21], ['cl', 3, 5]
  ]),
  e('idosos', 'Idosos', CAT.VIDA, ['velhice', 'terceira idade', 'cabelos brancos', 'avos'], [
    ['lv', 19, 32], ['pv', 16, 31], ['sl', 92, 14], ['is', 46, 4], ['1tm', 5, 1, 2], ['jo_at', 12, 12]
  ]),
  e('igreja', 'Igreja', CAT.IGREJA, ['corpo de cristo', 'ekklesia', 'comunidade', 'congregar', 'desigrejado'], [
    ['mt', 16, 18], ['ef', 1, 22, 23], ['1co', 12, 12, 14], ['ef', 2, 19, 22], ['at', 2, 42, 47], ['hb', 10, 24, 25]
  ]),
  e('igualdade', 'Igualdade', CAT.VIDA, ['racismo', 'preconceito', 'dignidade', 'imparcialidade'], [
    ['gl', 3, 28], ['at', 10, 34, 35], ['at', 17, 26], ['rm', 2, 11], ['gn', 1, 27], ['pv', 22, 2]
  ]),
  e('imagem-de-deus', 'Imagem de Deus', CAT.DEUS, ['imago dei', 'criacao', 'dignidade humana'], [
    ['gn', 1, 26, 27], ['gn', 9, 6], ['tg', 3, 9], ['cl', 3, 10], ['2co', 3, 18]
  ]),
  e('imagens', 'Imagens', CAT.IGREJA, ['idolos', 'escultura', 'veneracao', 'segundo mandamento'], [
    ['ex', 20, 4, 5], ['sl', 115, 4, 8], ['is', 44, 15, 17], ['at', 17, 29], ['1jo', 5, 21]
  ]),
  e('imoralidade', 'Imoralidade', CAT.FAMILIA, ['imoralidade sexual', 'fornicacao', 'impureza', 'prostituicao'], [
    ['1co', 6, 18, 20], ['ef', 5, 3], ['1ts', 4, 3, 5], ['cl', 3, 5], ['gl', 5, 19, 21]
  ]),
  e('impostos', 'Impostos', CAT.VIDA, ['tributos', 'cesar', 'governo', 'sonegacao'], [
    ['rm', 13, 6, 7], ['mt', 22, 17, 21], ['mc', 12, 17], ['mt', 17, 24, 27]
  ]),
  e('impureza', 'Impureza', CAT.CARATER, ['pecado', 'lascivia', 'santidade', 'coracao limpo'], [
    ['ef', 5, 3, 5], ['1ts', 4, 7], ['gl', 5, 19], ['mt', 15, 18, 20], ['2co', 7, 1]
  ]),
  e('incredulidade', 'Incredulidade', CAT.DEUS, ['duvida', 'falta de fe', 'dureza de coracao', 'ateismo'], [
    ['hb', 3, 12], ['mc', 9, 24], ['hb', 11, 6], ['jo', 3, 18], ['mt', 13, 58]
  ]),
  e('infidelidade', 'Infidelidade', CAT.FAMILIA, ['traicao', 'adulterio', 'deslealdade', 'casamento'], [
    ['ml', 2, 14, 16], ['hb', 13, 4], ['pv', 6, 32], ['ex', 20, 14], ['2tm', 2, 13]
  ]),
  e('inferno', 'Inferno', CAT.ETERNIDADE, ['lago de fogo', 'condenacao eterna', 'perdicao', 'geena'], [
    ['mt', 25, 41], ['mt', 25, 46], ['ap', 20, 14, 15], ['2ts', 1, 8, 9], ['mc', 9, 43, 44], ['mt', 10, 28]
  ]),
  e('influencia', 'Influência', CAT.FAMILIA, ['mas companhias', 'exemplo', 'sal e luz', 'amizades'], [
    ['1co', 15, 33], ['pv', 13, 20], ['mt', 5, 13, 16], ['pv', 27, 17], ['sl', 1, 1]
  ]),
  e('ingratidao', 'Ingratidão', CAT.CARATER, ['murmuracao', 'reclamar', 'ingrato', 'esquecimento'], [
    ['rm', 1, 21], ['2tm', 3, 2], ['lc', 17, 17, 18], ['sl', 103, 2], ['1ts', 5, 18]
  ]),
  e('inimigos', 'Inimigos', CAT.FAMILIA, ['inimigo', 'adversario', 'amar os inimigos', 'perseguidores'], [
    ['mt', 5, 43, 45], ['lc', 6, 27, 28], ['rm', 12, 19, 21], ['pv', 25, 21, 22], ['pv', 24, 17]
  ]),
  e('injustica', 'Injustiça', CAT.VIDA, ['opressao', 'oprimidos', 'desigualdade', 'clamar por justica'], [
    ['sl', 103, 6], ['is', 1, 17], ['pv', 31, 8, 9], ['mq', 6, 8], ['am', 5, 24], ['1pe', 2, 19, 23]
  ]),
  e('inseguranca', 'Insegurança', CAT.EMOCOES, ['medo', 'duvida', 'confianca', 'abrigo'], [
    ['is', 41, 10], ['sl', 27, 1], ['2tm', 1, 7], ['sl', 46, 1, 2], ['pv', 3, 25, 26]
  ]),
  e('insonia', 'Insônia', CAT.EMOCOES, ['sono', 'dormir', 'pesadelos', 'noite', 'descanso noturno'], [
    ['sl', 4, 8], ['pv', 3, 24], ['sl', 127, 2], ['sl', 3, 5], ['sl', 121, 3, 4]
  ]),
  e('integridade', 'Integridade', CAT.CARATER, ['honestidade', 'retidao', 'carater', 'justica'], [
    ['pv', 10, 9], ['pv', 11, 3], ['pv', 20, 7], ['sl', 25, 21], ['tt', 2, 7]
  ]),
  e('intercessao', 'Intercessão', CAT.IGREJA, ['interceder', 'oracao pelos outros', 'mediacao'], [
    ['1tm', 2, 1, 2], ['tg', 5, 16], ['rm', 8, 26, 27], ['hb', 7, 25], ['ef', 6, 18]
  ]),
  e('inveja', 'Inveja', CAT.EMOCOES, ['invejar', 'olho gordo', 'comparacao', 'ciume'], [
    ['pv', 14, 30], ['tg', 3, 14, 16], ['1co', 13, 4], ['gl', 5, 26], ['1pe', 2, 1], ['sl', 37, 1, 2]
  ]),
  e('ira', 'Ira', CAT.EMOCOES, ['raiva', 'nervoso', 'furor', 'odio', 'explodir'], [
    ['ef', 4, 26, 27], ['tg', 1, 19, 20], ['pv', 15, 1], ['pv', 16, 32], ['pv', 14, 29], ['sl', 37, 8], ['ec', 7, 9]
  ]),

  // ─── J ───────────────────────────────────────────────────────────────────
  e('jejum', 'Jejum', CAT.IGREJA, ['jejuar', 'abstinencia', 'consagracao'], [
    ['mt', 6, 16, 18], ['is', 58, 6, 7], ['jl', 2, 12], ['at', 13, 2, 3], ['mt', 4, 2]
  ]),
  e('jesus-cristo', 'Jesus Cristo', CAT.DEUS, ['jesus', 'cristo', 'messias', 'filho de deus', 'salvador', 'verbo'], [
    ['jo', 1, 1, 3], ['jo', 1, 14], ['jo', 14, 6], ['cl', 1, 15, 20], ['fp', 2, 5, 11], ['hb', 1, 1, 3], ['1tm', 2, 5]
  ]),
  e('jogos-de-azar', 'Jogos de Azar', CAT.CARATER, ['apostas', 'bet', 'cassino', 'loteria', 'dinheiro facil'], [
    ['pv', 13, 11], ['pv', 28, 20], ['pv', 28, 22], ['1tm', 6, 9, 10], ['ec', 5, 10], ['1co', 6, 12], ['pv', 20, 21]
  ]),
  e('jugo-desigual', 'Jugo Desigual', CAT.FAMILIA, ['namoro', 'casamento', 'descrente', 'alianca'], [
    ['2co', 6, 14, 15], ['am', 3, 3], ['1co', 7, 39], ['dt', 7, 3, 4], ['1co', 15, 33]
  ]),
  e('juizo-final', 'Juízo Final', CAT.ETERNIDADE, ['trono branco', 'julgamento final', 'livro da vida', 'prestacao de contas'], [
    ['ap', 20, 11, 15], ['hb', 9, 27], ['at', 17, 31], ['rm', 14, 12], ['ec', 12, 14], ['mt', 12, 36]
  ]),
  e('julgamento', 'Julgamento', CAT.CARATER, ['julgar', 'nao julgueis', 'critica', 'condenar', 'reta justica'], [
    ['mt', 7, 1, 5], ['jo', 7, 24], ['rm', 2, 1], ['rm', 14, 10, 13], ['tg', 4, 11, 12], ['gl', 6, 1]
  ]),
  e('juramento', 'Juramento', CAT.CARATER, ['jurar', 'palavra empenhada', 'promessa', 'sim sim nao nao'], [
    ['mt', 5, 33, 37], ['tg', 5, 12], ['ec', 5, 4, 5], ['sl', 15, 4], ['nm', 30, 2]
  ]),
  e('justica', 'Justiça', CAT.VIDA, ['justo', 'direito', 'retidao', 'equidade'], [
    ['mq', 6, 8], ['sl', 89, 14], ['pv', 21, 3], ['is', 1, 17], ['am', 5, 24], ['mt', 5, 6]
  ]),
  e('justica-social', 'Justiça Social', CAT.VIDA, ['pobres', 'oprimidos', 'vulneraveis', 'orfaos', 'viuvas'], [
    ['pv', 31, 8, 9], ['is', 1, 17], ['am', 5, 24], ['mq', 6, 8], ['sl', 82, 3, 4], ['tg', 1, 27]
  ]),
  e('justificacao', 'Justificação', CAT.DEUS, ['justificado', 'fe', 'obras da lei', 'paz com deus'], [
    ['rm', 5, 1], ['rm', 3, 28], ['gl', 2, 16], ['rm', 4, 5], ['2co', 5, 21], ['rm', 8, 33]
  ]),
  e('juventude', 'Juventude', CAT.FAMILIA, ['jovens', 'jovem', 'mocidade', 'adolescente'], [
    ['1tm', 4, 12], ['ec', 12, 1], ['sl', 119, 9], ['2tm', 2, 22], ['1jo', 2, 14], ['lm', 3, 27]
  ]),

  // ─── K ───────────────────────────────────────────────────────────────────
  e('koinonia', 'Koinonia', CAT.IGREJA, ['comunhao', 'partilha', 'unidade', 'igreja primitiva'], [
    ['at', 2, 42], ['1jo', 1, 3], ['1jo', 1, 7], ['2co', 13, 14], ['fp', 2, 1, 2]
  ]),
  e('kyrios', 'Kyrios', CAT.DEUS, ['senhor', 'senhorio de cristo', 'jesus e o senhor'], [
    ['fp', 2, 9, 11], ['rm', 10, 9], ['1co', 12, 3], ['at', 2, 36], ['ap', 19, 16]
  ]),

  // ─── L ───────────────────────────────────────────────────────────────────
  e('lagrimas', 'Lágrimas', CAT.EMOCOES, ['choro', 'pranto', 'tristeza', 'consolo', 'luto'], [
    ['sl', 56, 8], ['sl', 126, 5], ['ap', 21, 4], ['ap', 7, 17], ['sl', 30, 5]
  ]),
  e('lar', 'Lar', CAT.FAMILIA, ['casa', 'familia', 'paz no lar', 'edificar a casa'], [
    ['sl', 127, 1], ['js', 24, 15], ['pv', 24, 3, 4], ['pv', 14, 1], ['sl', 128, 1, 4]
  ]),
  e('lascivia', 'Lascívia', CAT.CARATER, ['luxuria', 'sensualidade', 'imoralidade', 'impureza'], [
    ['gl', 5, 19], ['rm', 13, 13], ['1pe', 4, 3], ['ef', 4, 19], ['mc', 7, 21, 22]
  ]),
  e('lealdade', 'Lealdade', CAT.CARATER, ['fidelidade', 'amizade', 'constancia', 'compromisso'], [
    ['pv', 3, 3], ['pv', 17, 17], ['pv', 20, 6], ['rt', 1, 16], ['1co', 4, 2]
  ]),
  e('lei', 'Lei', CAT.DEUS, ['lei de moises', 'mandamentos', 'dez mandamentos', 'graca'], [
    ['jo', 1, 17], ['rm', 6, 14], ['rm', 10, 4], ['gl', 3, 24, 25], ['mt', 5, 17], ['rm', 3, 20, 22]
  ]),
  e('liberdade', 'Liberdade', CAT.DEUS, ['livre', 'liberdade crista', 'libertacao', 'consciencia'], [
    ['jo', 8, 32], ['jo', 8, 36], ['gl', 5, 1], ['gl', 5, 13], ['2co', 3, 17], ['1pe', 2, 16]
  ]),
  e('libertacao', 'Libertação', CAT.DEUS, ['livre', 'livramento', 'vicios', 'cadeias', 'resgate'], [
    ['jo', 8, 36], ['lc', 4, 18], ['sl', 34, 4], ['sl', 107, 13, 14], ['cl', 1, 13], ['rm', 6, 22]
  ]),
  e('lideranca', 'Liderança', CAT.IGREJA, ['lider', 'pastor', 'presbitero', 'servir', 'exemplo'], [
    ['mc', 10, 42, 45], ['1pe', 5, 2, 3], ['1tm', 3, 1, 4], ['hb', 13, 17], ['jo', 13, 14, 15], ['pv', 11, 14]
  ]),
  e('lingua', 'Língua', CAT.CARATER, ['fala', 'palavras', 'boca', 'controle da lingua'], [
    ['tg', 3, 5, 10], ['pv', 18, 21], ['pv', 21, 23], ['sl', 34, 13], ['tg', 1, 26], ['ef', 4, 29]
  ]),
  e('livramento', 'Livramento', CAT.DEUS, ['protecao', 'socorro', 'resgate', 'seguranca'], [
    ['sl', 34, 7], ['sl', 91, 1, 4], ['sl', 121, 7, 8], ['2tm', 4, 18], ['2ts', 3, 3]
  ]),
  e('longanimidade', 'Longanimidade', CAT.CARATER, ['paciencia', 'tolerancia', 'perseveranca', 'fruto do espirito'], [
    ['gl', 5, 22], ['ef', 4, 2], ['cl', 3, 12, 13], ['2pe', 3, 9], ['pv', 16, 32]
  ]),
  e('louvor', 'Louvor', CAT.IGREJA, ['louvar', 'cantar', 'adoracao', 'exaltar', 'hinos'], [
    ['sl', 150, 1, 6], ['hb', 13, 15], ['sl', 34, 1], ['sl', 103, 1, 2], ['sl', 100, 1, 5]
  ]),
  e('luto', 'Luto', CAT.EMOCOES, ['perda', 'falecimento', 'morte de ente querido', 'saudade', 'consolo'], [
    ['sl', 34, 18], ['mt', 5, 4], ['jo', 11, 35], ['1ts', 4, 13, 14], ['2co', 1, 3, 4], ['ap', 21, 4], ['sl', 23, 4]
  ]),
  e('luxuria', 'Luxúria', CAT.CARATER, ['lascivia', 'desejo impuro', 'pornografia', 'cobica sexual'], [
    ['mt', 5, 28], ['1jo', 2, 16], ['1pe', 2, 11], ['2tm', 2, 22], ['gl', 5, 16]
  ]),
  e('luz', 'Luz', CAT.DEUS, ['luz do mundo', 'trevas', 'transparencia', 'verdade'], [
    ['jo', 8, 12], ['mt', 5, 14, 16], ['sl', 27, 1], ['1jo', 1, 5, 7], ['sl', 119, 105], ['ef', 5, 8]
  ]),

  // ─── M ───────────────────────────────────────────────────────────────────
  e('mae', 'Mãe', CAT.FAMILIA, ['maternidade', 'honrar mae', 'familia', 'mulher virtuosa'], [
    ['ex', 20, 12], ['pv', 31, 26, 28], ['is', 66, 13], ['pv', 1, 8], ['pv', 23, 22], ['2tm', 1, 5]
  ]),
  e('magia', 'Magia', CAT.IGREJA, ['feiticaria', 'bruxaria', 'ocultismo', 'encantamento'], [
    ['dt', 18, 10, 12], ['at', 19, 19], ['gl', 5, 20], ['ap', 21, 8], ['at', 8, 9, 23]
  ]),
  e('magoa', 'Mágoa', CAT.EMOCOES, ['rancor', 'amargura', 'ferida', 'ofensa', 'perdao'], [
    ['ef', 4, 31, 32], ['cl', 3, 13], ['hb', 12, 15], ['pv', 19, 11], ['mc', 11, 25]
  ]),
  e('mal', 'Mal', CAT.DEUS, ['maldade', 'origem do mal', 'vencer o mal', 'bem'], [
    ['rm', 12, 21], ['tg', 1, 13, 15], ['gn', 50, 20], ['sl', 34, 14], ['1ts', 5, 22], ['rm', 5, 12]
  ]),
  e('maldicao', 'Maldição', CAT.IGREJA, ['maldicao hereditaria', 'quebra de maldicao', 'bencao', 'praga'], [
    ['ez', 18, 20], ['gl', 3, 13], ['pv', 26, 2], ['rm', 12, 14], ['ap', 22, 3]
  ]),
  e('maledicencia', 'Maledicência', CAT.CARATER, ['falar mal', 'calunia', 'fofoca', 'difamacao'], [
    ['ef', 4, 31], ['tg', 4, 11], ['1pe', 2, 1], ['tt', 3, 2], ['sl', 101, 5]
  ]),
  e('mansidao', 'Mansidão', CAT.CARATER, ['manso', 'serenidade', 'brandura', 'humildade'], [
    ['mt', 5, 5], ['mt', 11, 29], ['gl', 5, 22, 23], ['ef', 4, 2], ['pv', 15, 1], ['tt', 3, 2]
  ]),
  e('maria', 'Maria', CAT.DEUS, ['mae de jesus', 'mediador', 'serva do senhor'], [
    ['lc', 1, 28, 31], ['lc', 1, 38], ['lc', 1, 46, 48], ['jo', 2, 5], ['lc', 11, 27, 28], ['1tm', 2, 5]
  ]),
  e('marido', 'Marido', CAT.FAMILIA, ['maridos', 'esposo', 'casamento', 'amar a esposa'], [
    ['ef', 5, 25, 29], ['cl', 3, 19], ['1pe', 3, 7], ['pv', 5, 18, 19], ['ml', 2, 14, 15], ['1tm', 5, 8]
  ]),
  e('martirio', 'Martírio', CAT.IGREJA, ['perseguicao', 'morrer por cristo', 'fidelidade ate a morte'], [
    ['ap', 2, 10], ['ap', 12, 11], ['at', 7, 59, 60], ['mt', 10, 28], ['fp', 1, 21]
  ]),
  e('mas-companhias', 'Más Companhias', CAT.FAMILIA, ['influencia', 'amizades toxicas', 'andar com sabios'], [
    ['1co', 15, 33], ['pv', 13, 20], ['sl', 1, 1], ['pv', 22, 24, 25], ['pv', 12, 26]
  ]),
  e('materialismo', 'Materialismo', CAT.CARATER, ['bens', 'consumismo', 'riqueza', 'tesouro na terra'], [
    ['lc', 12, 15], ['mt', 6, 19, 21], ['1jo', 2, 15, 17], ['1tm', 6, 7, 10], ['ec', 5, 10]
  ]),
  e('matrimonio', 'Matrimônio', CAT.FAMILIA, ['casamento', 'aliança', 'leito sem macula', 'conjuge'], [
    ['hb', 13, 4], ['gn', 2, 24], ['mt', 19, 5, 6], ['ef', 5, 31, 33], ['pv', 18, 22]
  ]),
  e('mediador', 'Mediador', CAT.DEUS, ['unico mediador', 'intercessor', 'acesso ao pai', 'jesus'], [
    ['1tm', 2, 5, 6], ['hb', 7, 25], ['hb', 4, 14, 16], ['rm', 8, 34], ['1jo', 2, 1], ['jo', 14, 6]
  ]),
  e('meditacao', 'Meditação', CAT.IGREJA, ['meditar', 'estudo biblico', 'palavra', 'renovar a mente'], [
    ['js', 1, 8], ['sl', 1, 2, 3], ['sl', 119, 15, 16], ['sl', 119, 97], ['fp', 4, 8], ['cl', 3, 16]
  ]),
  e('medo', 'Medo', CAT.EMOCOES, ['pavor', 'inseguranca', 'temor', 'fobia', 'coragem'], [
    ['is', 41, 10], ['2tm', 1, 7], ['sl', 27, 1], ['sl', 56, 3], ['1jo', 4, 18], ['sl', 34, 4]
  ]),
  e('meio-ambiente', 'Meio Ambiente', CAT.VIDA, ['natureza', 'ecologia', 'terra', 'criacao', 'animais'], [
    ['gn', 2, 15], ['sl', 24, 1], ['sl', 104, 24, 25], ['pv', 12, 10], ['jo_at', 12, 7, 10]
  ]),
  e('mente', 'Mente', CAT.CARATER, ['pensamentos', 'renovar a mente', 'mente de cristo', 'entendimento'], [
    ['rm', 12, 2], ['fp', 4, 8], ['2co', 10, 5], ['is', 26, 3], ['cl', 3, 2], ['1co', 2, 16]
  ]),
  e('mentira', 'Mentira', CAT.CARATER, ['mentir', 'mentiroso', 'engano', 'falso testemunho'], [
    ['pv', 12, 22], ['ef', 4, 25], ['cl', 3, 9], ['ex', 20, 16], ['pv', 6, 16, 19], ['jo', 8, 44], ['ap', 21, 8]
  ]),
  e('messias', 'Messias', CAT.DEUS, ['cristo', 'ungido', 'salvador', 'profecia'], [
    ['is', 9, 6], ['is', 53, 4, 6], ['jo', 1, 41], ['jo', 4, 25, 26], ['mt', 16, 16], ['dn', 9, 25, 26]
  ]),
  e('mexerico', 'Mexerico', CAT.CARATER, ['fofoca', 'intriga', 'boato', 'disse-me-disse'], [
    ['pv', 11, 13], ['pv', 16, 28], ['pv', 20, 19], ['pv', 26, 20], ['lv', 19, 16]
  ]),
  e('milagres', 'Milagres', CAT.DEUS, ['milagre', 'maravilhas', 'sinais', 'sobrenatural', 'impossivel'], [
    ['lc', 1, 37], ['jr', 32, 27], ['sl', 77, 14], ['mc', 10, 27], ['jo', 20, 30, 31], ['hb', 2, 4]
  ]),
  e('milenio', 'Milênio', CAT.ETERNIDADE, ['mil anos', 'reino milenar', 'apocalipse 20', 'escatologia'], [
    ['ap', 20, 1, 6], ['is', 11, 6, 9], ['zc', 14, 9], ['2pe', 3, 8]
  ]),
  e('misericordia', 'Misericórdia', CAT.DEUS, ['compaixao', 'piedade', 'clemencia', 'perdao'], [
    ['lm', 3, 22, 23], ['mt', 5, 7], ['lc', 6, 36], ['sl', 103, 8], ['ef', 2, 4, 5], ['tg', 2, 13]
  ]),
  e('missoes', 'Missões', CAT.IGREJA, ['missionario', 'evangelismo', 'nacoes', 'grande comissao'], [
    ['mt', 28, 19, 20], ['at', 1, 8], ['rm', 10, 14, 15], ['is', 6, 8], ['mt', 24, 14]
  ]),
  e('moderacao', 'Moderação', CAT.CARATER, ['equilibrio', 'temperanca', 'sobriedade', 'dominio proprio'], [
    ['fp', 4, 5], ['1co', 9, 25], ['pv', 25, 16], ['1co', 6, 12], ['tt', 2, 11, 12]
  ]),
  e('modestia', 'Modéstia', CAT.CARATER, ['roupas', 'vestimenta', 'decencia', 'aparencia', 'pudor'], [
    ['1tm', 2, 9, 10], ['1pe', 3, 3, 4], ['pv', 31, 30], ['1sm', 16, 7], ['rm', 12, 1, 2]
  ]),
  e('mordomia', 'Mordomia', CAT.CARATER, ['administracao', 'fidelidade', 'recursos', 'talentos', 'bens'], [
    ['1pe', 4, 10], ['1co', 4, 2], ['lc', 16, 10, 11], ['sl', 24, 1], ['mt', 25, 21]
  ]),
  e('morte', 'Morte', CAT.ETERNIDADE, ['morrer', 'falecimento', 'morte fisica', 'vitoria sobre a morte'], [
    ['hb', 9, 27], ['1co', 15, 54, 57], ['rm', 6, 23], ['sl', 116, 15], ['sl', 23, 4], ['jo', 11, 25, 26], ['ap', 21, 4]
  ]),
  e('mulher', 'Mulher', CAT.FAMILIA, ['mulheres', 'dignidade feminina', 'valor da mulher', 'virtuosa'], [
    ['gn', 1, 27], ['gl', 3, 28], ['pv', 31, 10], ['pv', 31, 30], ['1pe', 3, 7], ['lc', 8, 1, 3]
  ]),
  e('mundanismo', 'Mundanismo', CAT.IGREJA, ['mundo', 'conformismo', 'secularismo', 'santidade'], [
    ['1jo', 2, 15, 17], ['rm', 12, 2], ['tg', 4, 4], ['tt', 2, 12], ['jo', 17, 15, 16]
  ]),
  e('murmuracao', 'Murmuração', CAT.CARATER, ['murmurar', 'reclamar', 'reclamacao', 'queixa'], [
    ['fp', 2, 14, 15], ['1co', 10, 10], ['tg', 5, 9], ['1ts', 5, 18], ['jd', 1, 16]
  ]),
  e('musica', 'Música', CAT.IGREJA, ['cantar', 'canticos', 'hinos', 'instrumentos', 'louvor'], [
    ['ef', 5, 19], ['cl', 3, 16], ['sl', 98, 1], ['sl', 150, 3, 6], ['tg', 5, 13], ['sl', 33, 3]
  ]),

  // ─── N ───────────────────────────────────────────────────────────────────
  e('nacoes', 'Nações', CAT.VIDA, ['povos', 'soberania', 'evangelho as nacoes', 'justica'], [
    ['sl', 33, 12], ['pv', 14, 34], ['mt', 28, 19], ['ap', 7, 9], ['sl', 22, 27, 28]
  ]),
  e('namoro', 'Namoro', CAT.FAMILIA, ['namorar', 'relacionamento', 'pureza', 'jugo desigual', 'noivado'], [
    ['2co', 6, 14], ['2tm', 2, 22], ['1ts', 4, 3, 5], ['pv', 4, 23], ['1co', 6, 18], ['ct', 8, 4], ['1co', 13, 4, 7]
  ]),
  e('natureza', 'Natureza', CAT.VIDA, ['criacao', 'meio ambiente', 'animais', 'terra', 'ceus'], [
    ['sl', 19, 1, 2], ['sl', 24, 1], ['rm', 1, 20], ['sl', 104, 24], ['gn', 2, 15]
  ]),
  e('necessitados', 'Necessitados', CAT.VIDA, ['pobres', 'carentes', 'ajuda', 'misericordia'], [
    ['dt', 15, 11], ['pv', 19, 17], ['pv', 31, 9], ['1jo', 3, 17], ['mt', 25, 40]
  ]),
  e('necromancia', 'Necromancia', CAT.IGREJA, ['consulta aos mortos', 'espiritismo', 'mediuns'], [
    ['dt', 18, 10, 12], ['lv', 19, 31], ['lv', 20, 6], ['is', 8, 19], ['1cr', 10, 13, 14]
  ]),
  e('negocios', 'Negócios', CAT.CARATER, ['comercio', 'empresa', 'honestidade', 'empreendedorismo', 'etica'], [
    ['pv', 11, 1], ['pv', 16, 11], ['pv', 21, 5], ['tg', 4, 13, 15], ['cl', 3, 23], ['lc', 16, 10]
  ]),
  e('nova-alianca', 'Nova Aliança', CAT.DEUS, ['novo testamento', 'pacto', 'sangue de cristo', 'graca'], [
    ['lc', 22, 20], ['jr', 31, 31, 34], ['hb', 8, 6], ['hb', 9, 15], ['2co', 3, 6]
  ]),
  e('nova-criatura', 'Nova Criatura', CAT.DEUS, ['regeneracao', 'novo nascimento', 'transformacao', 'conversao'], [
    ['2co', 5, 17], ['ef', 4, 22, 24], ['gl', 6, 15], ['ez', 36, 26], ['rm', 6, 4]
  ]),
  e('novo-nascimento', 'Novo Nascimento', CAT.DEUS, ['nascer de novo', 'regeneracao', 'nicodemos', 'joao 3'], [
    ['jo', 3, 3, 7], ['2co', 5, 17], ['1pe', 1, 23], ['tt', 3, 5], ['jo', 1, 12, 13], ['ez', 36, 26, 27]
  ]),
  e('novos-ceus', 'Novos Céus', CAT.ETERNIDADE, ['nova terra', 'restauracao final', 'apocalipse 21', 'eternidade'], [
    ['ap', 21, 1, 5], ['2pe', 3, 13], ['is', 65, 17], ['ap', 22, 1, 5], ['rm', 8, 19, 21]
  ]),

  // ─── O ───────────────────────────────────────────────────────────────────
  e('obediencia', 'Obediência', CAT.CARATER, ['obedecer', 'guardar mandamentos', 'fidelidade', 'submissao'], [
    ['jo', 14, 15], ['1sm', 15, 22], ['tg', 1, 22], ['lc', 11, 28], ['at', 5, 29], ['1jo', 5, 3]
  ]),
  e('ociosidade', 'Ociosidade', CAT.CARATER, ['preguica', 'nao trabalhar', 'procrastinacao'], [
    ['2ts', 3, 10, 12], ['pv', 19, 15], ['pv', 31, 27], ['1tm', 5, 13], ['ec', 10, 18]
  ]),
  e('ocultismo', 'Ocultismo', CAT.IGREJA, ['esoterismo', 'magia', 'feiticaria', 'astrologia', 'bruxaria'], [
    ['dt', 18, 10, 12], ['at', 19, 19], ['gl', 5, 20], ['ef', 5, 11], ['ap', 21, 8]
  ]),
  e('odio', 'Ódio', CAT.EMOCOES, ['odiar', 'inimizade', 'desprezo', 'raiva'], [
    ['1jo', 3, 15], ['1jo', 4, 20], ['pv', 10, 12], ['lv', 19, 17], ['1jo', 2, 9, 11]
  ]),
  e('ofensa', 'Ofensa', CAT.FAMILIA, ['magoa', 'perdao', 'insulto', 'reconciliacao'], [
    ['pv', 19, 11], ['pv', 17, 9], ['lc', 17, 3, 4], ['cl', 3, 13], ['mt', 18, 15]
  ]),
  e('ofertas', 'Ofertas', CAT.IGREJA, ['oferta', 'contribuicao', 'generosidade', 'dizimo'], [
    ['2co', 9, 6, 8], ['mc', 12, 41, 44], ['1co', 16, 2], ['pv', 3, 9], ['2co', 8, 12]
  ]),
  e('olhos', 'Olhos', CAT.CARATER, ['olhar', 'pureza dos olhos', 'cobiça', 'luz do corpo'], [
    ['mt', 6, 22, 23], ['jo_at', 31, 1], ['sl', 101, 3], ['mt', 5, 28, 29], ['sl', 119, 37]
  ]),
  e('onipotencia', 'Onipotência', CAT.DEUS, ['todo poderoso', 'poder de deus', 'nada e impossivel'], [
    ['jr', 32, 17], ['jr', 32, 27], ['lc', 1, 37], ['jo_at', 42, 2], ['ap', 19, 6]
  ]),
  e('onipresenca', 'Onipresença', CAT.DEUS, ['presenca de deus', 'em todo lugar', 'salmo 139'], [
    ['sl', 139, 7, 10], ['jr', 23, 23, 24], ['pv', 15, 3], ['at', 17, 27, 28], ['mt', 28, 20]
  ]),
  e('onisciencia', 'Onisciência', CAT.DEUS, ['deus sabe tudo', 'sabedoria infinita', 'conhecimento de deus'], [
    ['sl', 139, 1, 4], ['1jo', 3, 20], ['hb', 4, 13], ['sl', 147, 5], ['is', 46, 9, 10]
  ]),
  e('opressao', 'Opressão', CAT.VIDA, ['oprimidos', 'injustica', 'abuso', 'libertacao'], [
    ['sl', 9, 9], ['sl', 103, 6], ['is', 1, 17], ['pv', 14, 31], ['ec', 4, 1], ['lc', 4, 18]
  ]),
  e('oracao', 'Oração', CAT.IGREJA, ['orar', 'pai nosso', 'suplica', 'intercessao', 'clamar'], [
    ['mt', 6, 6], ['mt', 6, 9, 13], ['fp', 4, 6, 7], ['1ts', 5, 17], ['tg', 5, 16], ['1jo', 5, 14, 15], ['jr', 33, 3]
  ]),
  e('orfaos', 'Órfãos', CAT.VIDA, ['orfao', 'vulneraveis', 'viuvas', 'amparo', 'religiao pura'], [
    ['tg', 1, 27], ['sl', 68, 5], ['sl', 146, 9], ['is', 1, 17], ['ex', 22, 22, 23], ['dt', 10, 18]
  ]),
  e('orgulho', 'Orgulho', CAT.CARATER, ['soberba', 'arrogancia', 'altivez', 'presuncao'], [
    ['pv', 16, 18], ['pv', 11, 2], ['tg', 4, 6], ['1pe', 5, 5], ['pv', 8, 13], ['pv', 29, 23], ['rm', 12, 3]
  ]),

  // ─── P ───────────────────────────────────────────────────────────────────
  e('paciencia', 'Paciência', CAT.CARATER, ['longanimidade', 'esperar em deus', 'calma', 'perseveranca'], [
    ['tg', 5, 7, 8], ['rm', 12, 12], ['sl', 37, 7], ['sl', 40, 1], ['ec', 7, 8], ['pv', 14, 29], ['ef', 4, 2]
  ]),
  e('pai', 'Pai', CAT.FAMILIA, ['paternidade', 'deus pai', 'pais', 'disciplina', 'exemplo'], [
    ['sl', 103, 13], ['ef', 6, 4], ['cl', 3, 21], ['pv', 20, 7], ['pv', 3, 12], ['mt', 6, 9]
  ]),
  e('pais', 'Pais', CAT.FAMILIA, ['pai e mae', 'criar filhos', 'educacao', 'honra aos pais'], [
    ['ef', 6, 1, 4], ['ex', 20, 12], ['dt', 6, 6, 7], ['pv', 22, 6], ['cl', 3, 20, 21]
  ]),
  e('palavra-de-deus', 'Palavra de Deus', CAT.DEUS, ['biblia', 'escrituras', 'verbo', 'lampada'], [
    ['hb', 4, 12], ['sl', 119, 105], ['is', 55, 11], ['is', 40, 8], ['2tm', 3, 16, 17], ['mt', 4, 4]
  ]),
  e('palavras', 'Palavras', CAT.CARATER, ['fala', 'lingua', 'edificacao', 'boca', 'discurso'], [
    ['ef', 4, 29], ['pv', 18, 21], ['pv', 15, 1], ['cl', 4, 6], ['mt', 12, 36, 37], ['pv', 16, 24]
  ]),
  e('palavroes', 'Palavrões', CAT.CARATER, ['palavrao', 'xingamento', 'linguagem torpe', 'boca suja'], [
    ['ef', 4, 29], ['ef', 5, 4], ['cl', 3, 8], ['tg', 3, 9, 10], ['mt', 12, 36, 37]
  ]),
  e('panico', 'Pânico', CAT.EMOCOES, ['medo extremo', 'ansiedade', 'pavor', 'crise'], [
    ['is', 41, 10], ['sl', 34, 4], ['2tm', 1, 7], ['sl', 56, 3], ['fp', 4, 6, 7], ['sl', 46, 1, 2]
  ]),
  e('pao-da-vida', 'Pão da Vida', CAT.DEUS, ['jesus', 'sustento espiritual', 'fome espiritual'], [
    ['jo', 6, 35], ['jo', 6, 48, 51], ['mt', 4, 4], ['lc', 22, 19]
  ]),
  e('paraiso', 'Paraíso', CAT.ETERNIDADE, ['ceu', 'apos a morte', 'eternidade', 'ladrao na cruz'], [
    ['lc', 23, 43], ['2co', 12, 4], ['ap', 2, 7], ['jo', 14, 2, 3], ['ap', 21, 3, 4]
  ]),
  e('pascoa', 'Páscoa', CAT.DEUS, ['cordeiro pascoal', 'ressurreicao', 'exodo', 'sangue'], [
    ['1co', 5, 7], ['ex', 12, 13], ['lc', 22, 15, 20], ['mt', 28, 5, 6]
  ]),
  e('pastor', 'Pastor', CAT.IGREJA, ['presbitero', 'bispo', 'lideranca', 'igreja', 'rebanho'], [
    ['1pe', 5, 2, 4], ['ef', 4, 11, 12], ['1tm', 3, 1, 7], ['jr', 3, 15], ['hb', 13, 17]
  ]),
  e('paz', 'Paz', CAT.EMOCOES, ['shalom', 'paz de deus', 'tranquilidade', 'descanso interior'], [
    ['jo', 14, 27], ['fp', 4, 7], ['is', 26, 3], ['rm', 5, 1], ['cl', 3, 15], ['sl', 29, 11]
  ]),
  e('pecado', 'Pecado', CAT.DEUS, ['pecar', 'transgressao', 'iniquidade', 'queda', 'salario do pecado'], [
    ['rm', 3, 23], ['rm', 6, 23], ['1jo', 3, 4], ['tg', 1, 14, 15], ['is', 59, 2], ['1jo', 1, 8, 9], ['tg', 4, 17]
  ]),
  e('pecado-imperdoavel', 'Pecado Imperdoável', CAT.DEUS, ['blasfemia contra o espirito', 'sem perdao', 'medo'], [
    ['mt', 12, 31, 32], ['mc', 3, 28, 29], ['jo', 6, 37], ['1jo', 1, 7, 9], ['hb', 7, 25]
  ]),
  e('pena-de-morte', 'Pena de Morte', CAT.VIDA, ['pena capital', 'espada do estado', 'justica civil'], [
    ['gn', 9, 6], ['rm', 13, 3, 4], ['ex', 21, 12], ['dt', 17, 6], ['at', 25, 11], ['ez', 33, 11]
  ]),
  e('pensamentos', 'Pensamentos', CAT.CARATER, ['mente', 'pensamentos intrusivos', 'pureza mental', 'renovacao'], [
    ['fp', 4, 8], ['2co', 10, 5], ['rm', 12, 2], ['pv', 23, 7], ['is', 55, 8, 9], ['sl', 139, 23, 24]
  ]),
  e('perdao', 'Perdão', CAT.FAMILIA, ['perdoar', 'reconciliacao', 'setenta vezes sete', 'ofensa', 'liberar'], [
    ['ef', 4, 32], ['cl', 3, 13], ['mt', 18, 21, 22], ['mt', 6, 14, 15], ['mc', 11, 25], ['lc', 17, 3, 4], ['1jo', 1, 9]
  ]),
  e('perseguicao', 'Perseguição', CAT.IGREJA, ['perseguido', 'martirio', 'sofrer por cristo', 'oposicao'], [
    ['mt', 5, 10, 12], ['2tm', 3, 12], ['jo', 15, 18, 20], ['1pe', 4, 14, 16], ['rm', 8, 35, 37], ['at', 5, 41]
  ]),
  e('perseveranca', 'Perseverança', CAT.CARATER, ['perseverar', 'constancia', 'firmeza', 'nao desistir'], [
    ['hb', 12, 1, 2], ['tg', 1, 12], ['gl', 6, 9], ['rm', 5, 3, 4], ['1co', 15, 58], ['fp', 3, 13, 14]
  ]),
  e('piedade', 'Piedade', CAT.CARATER, ['devocao', 'temor a deus', 'santidade', 'vida piedosa'], [
    ['1tm', 4, 7, 8], ['1tm', 6, 6], ['2pe', 1, 5, 7], ['tt', 2, 12], ['2tm', 3, 5]
  ]),
  e('planejamento', 'Planejamento', CAT.CARATER, ['planos', 'estrategia', 'futuro', 'prudencia'], [
    ['pv', 16, 3], ['pv', 16, 9], ['pv', 21, 5], ['lc', 14, 28, 30], ['pv', 19, 21], ['tg', 4, 13, 15]
  ]),
  e('pobres', 'Pobres', CAT.VIDA, ['pobre', 'pobreza', 'necessitados', 'miseria', 'ajuda social'], [
    ['pv', 19, 17], ['pv', 14, 31], ['dt', 15, 11], ['mt', 25, 35, 40], ['1jo', 3, 17, 18], ['pv', 22, 9], ['gl', 2, 10]
  ]),
  e('pobreza', 'Pobreza', CAT.VIDA, ['escassez', 'pobres', 'provisao', 'justica'], [
    ['pv', 30, 8, 9], ['2co', 8, 9], ['tg', 2, 5], ['pv', 10, 4], ['pv', 28, 27], ['sl', 113, 7]
  ]),
  e('poder-de-deus', 'Poder de Deus', CAT.DEUS, ['onipotencia', 'forca', 'soberania', 'milagres'], [
    ['ef', 3, 20], ['rm', 1, 16], ['2co', 12, 9], ['jr', 32, 17], ['sl', 62, 11], ['1co', 1, 18]
  ]),
  e('politica', 'Política', CAT.VIDA, ['governo', 'autoridades', 'eleicoes', 'cidadania', 'estado'], [
    ['rm', 13, 1, 7], ['1tm', 2, 1, 2], ['pv', 29, 2], ['1pe', 2, 13, 17], ['at', 5, 29], ['dn', 2, 21]
  ]),
  e('pornografia', 'Pornografia', CAT.FAMILIA, ['porno', 'masturbacao', 'luxuria', 'olhos', 'impureza'], [
    ['mt', 5, 28, 29], ['jo_at', 31, 1], ['sl', 101, 3], ['1ts', 4, 3, 5], ['1co', 6, 18, 20], ['fp', 4, 8], ['2tm', 2, 22]
  ]),
  e('preconceito', 'Preconceito', CAT.VIDA, ['racismo', 'discriminacao', 'acepcao de pessoas', 'favoritismo'], [
    ['tg', 2, 1, 4], ['tg', 2, 8, 9], ['at', 10, 34, 35], ['rm', 2, 11], ['gl', 3, 28], ['jo', 7, 24]
  ]),
  e('pregacao', 'Pregação', CAT.IGREJA, ['pregar', 'sermao', 'anunciar a palavra', 'evangelho'], [
    ['2tm', 4, 2], ['rm', 10, 14, 15], ['1co', 1, 18], ['1co', 1, 21], ['mc', 16, 15]
  ]),
  e('preguica', 'Preguiça', CAT.CARATER, ['preguicoso', 'ociosidade', 'formiga', 'procrastinacao'], [
    ['pv', 6, 6, 11], ['pv', 10, 4], ['pv', 13, 4], ['2ts', 3, 10, 12], ['ec', 9, 10], ['rm', 12, 11]
  ]),
  e('preocupacao', 'Preocupação', CAT.EMOCOES, ['ansiedade', 'inquietacao', 'medo do amanha', 'estresse'], [
    ['mt', 6, 25, 34], ['fp', 4, 6, 7], ['1pe', 5, 7], ['lc', 12, 22, 26], ['sl', 55, 22]
  ]),
  e('procrastinacao', 'Procrastinação', CAT.CARATER, ['adiar', 'preguica', 'diligencia', 'tempo'], [
    ['pv', 27, 1], ['ec', 11, 4], ['ef', 5, 15, 16], ['pv', 6, 6, 11], ['tg', 4, 17]
  ]),
  e('profecia', 'Profecia', CAT.IGREJA, ['profeta', 'revelacao', 'discernir', 'escrituras'], [
    ['2pe', 1, 20, 21], ['1co', 14, 3], ['1ts', 5, 20, 21], ['1co', 14, 29], ['jl', 2, 28]
  ]),
  e('promessas', 'Promessas', CAT.DEUS, ['promessa', 'fidelidade divina', 'cumprimento'], [
    ['2co', 1, 20], ['nm', 23, 19], ['js', 21, 45], ['2pe', 1, 4], ['hb', 10, 23], ['is', 55, 11]
  ]),
  e('propiciacao', 'Propiciação', CAT.DEUS, ['expiacao', 'redencao', 'sacrificio', 'sangue de jesus'], [
    ['1jo', 2, 2], ['1jo', 4, 10], ['rm', 3, 24, 25], ['hb', 2, 17]
  ]),
  e('proposito', 'Propósito', CAT.DEUS, ['sentido da vida', 'chamado', 'vontade de deus', 'destino'], [
    ['rm', 8, 28], ['pv', 19, 21], ['jr', 29, 11], ['ef', 2, 10], ['sl', 138, 8], ['sl', 57, 2]
  ]),
  e('prosperidade', 'Prosperidade', CAT.CARATER, ['riqueza', 'bencao', 'bens', 'teologia da prosperidade'], [
    ['js', 1, 8], ['sl', 1, 2, 3], ['pv', 10, 22], ['1tm', 6, 6, 10], ['3jo', 1, 2], ['mt', 6, 33]
  ]),
  e('prostituicao', 'Prostituição', CAT.FAMILIA, ['imoralidade', 'fornicacao', 'corpo templo'], [
    ['1co', 6, 15, 20], ['1ts', 4, 3], ['pv', 6, 26], ['hb', 13, 4], ['gl', 5, 19]
  ]),
  e('protecao', 'Proteção', CAT.DEUS, ['livramento', 'refugio', 'escudo', 'seguranca', 'salmo 91'], [
    ['sl', 91, 1, 4], ['sl', 121, 7, 8], ['sl', 46, 1], ['2ts', 3, 3], ['pv', 18, 10], ['is', 43, 2]
  ]),
  e('provacoes', 'Provações', CAT.EMOCOES, ['prova', 'sofrimento', 'tribulacao', 'perseveranca'], [
    ['tg', 1, 2, 4], ['tg', 1, 12], ['1pe', 1, 6, 7], ['1pe', 4, 12, 13], ['rm', 5, 3, 5]
  ]),
  e('providencia', 'Providência', CAT.DEUS, ['soberania', 'cuidado de deus', 'provisao', 'governo divino'], [
    ['rm', 8, 28], ['gn', 50, 20], ['mt', 6, 26, 33], ['pv', 16, 33], ['ef', 1, 11]
  ]),
  e('provisao', 'Provisão', CAT.DEUS, ['sustento', 'pao de cada dia', 'desemprego', 'cuidado'], [
    ['fp', 4, 19], ['mt', 6, 31, 33], ['sl', 23, 1], ['sl', 37, 25], ['2co', 9, 8], ['sl', 34, 10]
  ]),
  e('prudencia', 'Prudência', CAT.CARATER, ['sabedoria', 'cautela', 'discernimento', 'sensatez'], [
    ['pv', 14, 15], ['pv', 22, 3], ['pv', 12, 23], ['mt', 10, 16], ['ef', 5, 15]
  ]),
  e('pureza', 'Pureza', CAT.CARATER, ['puro', 'coracao limpo', 'santidade', 'castidade'], [
    ['mt', 5, 8], ['sl', 24, 3, 4], ['sl', 51, 10], ['sl', 119, 9], ['tt', 1, 15], ['1tm', 5, 22]
  ]),

  // ─── Q ───────────────────────────────────────────────────────────────────
  e('quebrantamento', 'Quebrantamento', CAT.EMOCOES, ['contricao', 'coracao quebrantado', 'humilhacao', 'arrependimento'], [
    ['sl', 51, 17], ['sl', 34, 18], ['is', 57, 15], ['is', 66, 2], ['tg', 4, 9, 10]
  ]),
  e('queda', 'Queda', CAT.DEUS, ['adao e eva', 'entrada do pecado', 'genesis 3', 'pecado original'], [
    ['gn', 3, 6, 7], ['gn', 3, 15], ['rm', 5, 12], ['rm', 5, 18, 19], ['1co', 15, 21, 22]
  ]),
  e('queixa', 'Queixa', CAT.CARATER, ['murmuracao', 'reclamacao', 'gratidao', 'perdao'], [
    ['cl', 3, 13], ['fp', 2, 14], ['tg', 5, 9], ['lm', 3, 39], ['1ts', 5, 18]
  ]),

  // ─── R ───────────────────────────────────────────────────────────────────
  e('racismo', 'Racismo', CAT.VIDA, ['preconceito', 'discriminacao', 'etnia', 'raca', 'igualdade'], [
    ['gn', 1, 27], ['at', 10, 34, 35], ['at', 17, 26], ['gl', 3, 28], ['tg', 2, 1, 4], ['tg', 2, 8, 9], ['rm', 2, 11], ['ap', 7, 9]
  ]),
  e('raiva', 'Raiva', CAT.EMOCOES, ['ira', 'nervoso', 'furor', 'descontrole', 'odio'], [
    ['ef', 4, 26, 27], ['tg', 1, 19, 20], ['pv', 15, 1], ['pv', 16, 32], ['pv', 14, 29], ['ec', 7, 9]
  ]),
  e('rancor', 'Rancor', CAT.EMOCOES, ['amargura', 'magoa', 'ressentimento', 'vinganca'], [
    ['lv', 19, 18], ['ef', 4, 31, 32], ['cl', 3, 13], ['hb', 12, 15], ['1co', 13, 5]
  ]),
  e('rebeldia', 'Rebeldia', CAT.CARATER, ['desobediencia', 'rebelde', 'teimosia', 'insubmissao'], [
    ['1sm', 15, 23], ['pv', 17, 11], ['rm', 13, 2], ['is', 1, 19, 20], ['tt', 1, 16]
  ]),
  e('reclamacao', 'Reclamação', CAT.CARATER, ['murmuracao', 'queixa', 'ingratidao'], [
    ['fp', 2, 14, 15], ['1co', 10, 10], ['tg', 5, 9], ['jd', 1, 16], ['1ts', 5, 18]
  ]),
  e('recomeco', 'Recomeço', CAT.EMOCOES, ['recomecar', 'nova chance', 'restauracao', 'passado'], [
    ['2co', 5, 17], ['is', 43, 18, 19], ['lm', 3, 22, 23], ['jl', 2, 25], ['fp', 3, 13, 14], ['sl', 51, 12]
  ]),
  e('reconciliacao', 'Reconciliação', CAT.FAMILIA, ['reconciliar', 'fazer as pazes', 'restaurar', 'perdao'], [
    ['mt', 5, 23, 24], ['2co', 5, 18, 19], ['rm', 12, 18], ['mt', 18, 15], ['cl', 1, 20, 22]
  ]),
  e('redencao', 'Redenção', CAT.DEUS, ['resgate', 'salvacao', 'sangue', 'perdao'], [
    ['ef', 1, 7], ['rm', 3, 24], ['1pe', 1, 18, 19], ['cl', 1, 13, 14], ['gl', 3, 13], ['sl', 130, 7, 8]
  ]),
  e('reencarnacao', 'Reencarnação', CAT.ETERNIDADE, ['vidas passadas', 'carma', 'karma', 'apos a morte', 'juizo'], [
    ['hb', 9, 27, 28], ['lc', 23, 43], ['2co', 5, 8], ['jo', 5, 28, 29], ['ec', 12, 7], ['lc', 16, 22, 26]
  ]),
  e('refugiados', 'Refugiados', CAT.VIDA, ['estrangeiros', 'imigrantes', 'acolhimento', 'amparo'], [
    ['lv', 19, 33, 34], ['dt', 10, 18, 19], ['sl', 146, 9], ['mt', 25, 35], ['hb', 13, 2]
  ]),
  e('refugio', 'Refúgio', CAT.EMOCOES, ['abrigo', 'protecao', 'socorro', 'fortaleza'], [
    ['sl', 46, 1], ['sl', 91, 1, 2], ['sl', 62, 7, 8], ['pv', 18, 10], ['na', 1, 7]
  ]),
  e('regeneracao', 'Regeneração', CAT.DEUS, ['novo nascimento', 'nascer de novo', 'nova criatura'], [
    ['tt', 3, 5], ['jo', 3, 3, 5], ['1pe', 1, 23], ['2co', 5, 17], ['ez', 36, 26]
  ]),
  e('reino-de-deus', 'Reino de Deus', CAT.DEUS, ['reino dos ceus', 'soberania', 'buscar primeiro o reino'], [
    ['mt', 6, 33], ['rm', 14, 17], ['lc', 17, 20, 21], ['jo', 3, 3], ['jo', 18, 36], ['mc', 1, 15]
  ]),
  e('rejeicao', 'Rejeição', CAT.EMOCOES, ['rejeitado', 'abandono', 'aceitacao', 'autoestima'], [
    ['jo', 6, 37], ['sl', 27, 10], ['is', 53, 3], ['sl', 118, 22], ['ef', 1, 4, 6], ['is', 41, 9]
  ]),
  e('religiao', 'Religião', CAT.IGREJA, ['religiosidade', 'fe pratica', 'orfaos e viuvas', 'hipocrisia'], [
    ['tg', 1, 26, 27], ['mq', 6, 8], ['os', 6, 6], ['is', 1, 16, 17], ['mt', 23, 23]
  ]),
  e('respeito', 'Respeito', CAT.CARATER, ['honra', 'consideracao', 'autoridade', 'dignidade'], [
    ['1pe', 2, 17], ['rm', 12, 10], ['ef', 5, 33], ['lv', 19, 32], ['fp', 2, 3]
  ]),
  e('responsabilidade', 'Responsabilidade', CAT.CARATER, ['prestacao de contas', 'dever', 'escolhas', 'individual'], [
    ['gl', 6, 5], ['gl', 6, 7], ['rm', 14, 12], ['ez', 18, 20], ['lc', 12, 48]
  ]),
  e('ressurreicao', 'Ressurreição', CAT.ETERNIDADE, ['ressuscitar', 'pascoa', 'vitoria sobre a morte', 'corpo glorificado'], [
    ['1co', 15, 17, 22], ['1co', 15, 51, 55], ['jo', 11, 25, 26], ['jo', 5, 28, 29], ['rm', 6, 5], ['dn', 12, 2]
  ]),
  e('restauracao', 'Restauração', CAT.EMOCOES, ['recomeco', 'cura', 'renovacao', 'reconstruir'], [
    ['jl', 2, 25], ['1pe', 5, 10], ['sl', 23, 3], ['sl', 51, 12], ['is', 61, 7], ['jr', 30, 17]
  ]),
  e('riqueza', 'Riqueza', CAT.CARATER, ['rico', 'bens materiais', 'prosperidade', 'patrimonio', 'dinheiro'], [
    ['1tm', 6, 17, 19], ['pv', 11, 28], ['mt', 6, 19, 21], ['lc', 12, 15], ['pv', 30, 8, 9], ['pv', 10, 22]
  ]),
  e('roubo', 'Roubo', CAT.VIDA, ['roubar', 'furto', 'furtar', 'pirataria', 'sonegacao'], [
    ['ex', 20, 15], ['ef', 4, 28], ['lv', 19, 11], ['1co', 6, 10], ['pv', 21, 7], ['rm', 13, 7]
  ]),
  e('roupas', 'Roupas', CAT.CARATER, ['vestimenta', 'modestia', 'aparencia', 'decencia'], [
    ['1tm', 2, 9, 10], ['1pe', 3, 3, 4], ['mt', 6, 28, 30], ['cl', 3, 12], ['pv', 31, 25]
  ]),

  // ─── S ───────────────────────────────────────────────────────────────────
  e('sabado', 'Sábado', CAT.IGREJA, ['guardar o sabado', 'descanso semanal', 'domingo', 'dia do senhor'], [
    ['ex', 20, 8, 11], ['mc', 2, 27, 28], ['cl', 2, 16, 17], ['rm', 14, 5, 6], ['hb', 4, 9, 10], ['at', 20, 7]
  ]),
  e('sabedoria', 'Sabedoria', CAT.CARATER, ['sabio', 'inteligencia', 'entendimento', 'temor do senhor'], [
    ['pv', 1, 7], ['pv', 9, 10], ['tg', 1, 5], ['tg', 3, 17], ['pv', 3, 13, 15], ['pv', 4, 7]
  ]),
  e('sacrificio', 'Sacrifício', CAT.DEUS, ['cruz', 'sacrificio vivo', 'entrega', 'oferta'], [
    ['rm', 12, 1], ['hb', 10, 12], ['ef', 5, 2], ['hb', 13, 15, 16], ['sl', 51, 17]
  ]),
  e('sal-da-terra', 'Sal da Terra', CAT.IGREJA, ['luz do mundo', 'testemunho', 'influencia crista'], [
    ['mt', 5, 13, 16], ['mc', 9, 50], ['cl', 4, 6]
  ]),
  e('salvacao', 'Salvação', CAT.DEUS, ['salvo', 'ser salvo', 'vida eterna', 'evangelho', 'graca'], [
    ['ef', 2, 8, 9], ['jo', 3, 16], ['rm', 10, 9, 10], ['at', 4, 12], ['jo', 14, 6], ['1jo', 5, 11, 13], ['tt', 3, 5]
  ]),
  e('sangue-de-cristo', 'Sangue de Cristo', CAT.DEUS, ['sangue de jesus', 'redencao', 'purificacao', 'cruz'], [
    ['1jo', 1, 7], ['ef', 1, 7], ['1pe', 1, 18, 19], ['hb', 9, 14], ['rm', 5, 9], ['ap', 12, 11]
  ]),
  e('santa-ceia', 'Santa Ceia', CAT.IGREJA, ['ceia do senhor', 'pao e vinho', 'calice', 'memorial'], [
    ['1co', 11, 23, 29], ['lc', 22, 19, 20], ['mt', 26, 26, 28], ['1co', 10, 16, 17]
  ]),
  e('santidade', 'Santidade', CAT.DEUS, ['santo', 'pureza', 'consagracao', 'separado para deus'], [
    ['1pe', 1, 15, 16], ['hb', 12, 14], ['lv', 19, 2], ['2co', 7, 1], ['sl', 99, 9]
  ]),
  e('santificacao', 'Santificação', CAT.DEUS, ['santificar', 'crescimento espiritual', 'pureza', 'vontade de deus'], [
    ['1ts', 4, 3], ['1ts', 5, 23], ['rm', 6, 22], ['jo', 17, 17], ['hb', 10, 14], ['2ts', 2, 13]
  ]),
  e('santos', 'Santos', CAT.IGREJA, ['igreja', 'crentes', 'povo de deus', 'intercessao'], [
    ['1co', 1, 2], ['ef', 1, 1], ['fp', 1, 1], ['1pe', 2, 9], ['1tm', 2, 5]
  ]),
  e('satanas', 'Satanás', CAT.IGREJA, ['diabo', 'demonios', 'lucifer', 'tentador', 'adversario'], [
    ['1pe', 5, 8, 9], ['jo', 8, 44], ['jo', 10, 10], ['2co', 11, 14], ['tg', 4, 7], ['1jo', 3, 8], ['ap', 20, 10]
  ]),
  e('saude', 'Saúde', CAT.CARATER, ['corpo', 'cura', 'bem-estar', 'saude fisica', 'saude mental'], [
    ['3jo', 1, 2], ['pv', 17, 22], ['pv', 4, 20, 22], ['1co', 6, 19, 20], ['pv', 3, 7, 8], ['1tm', 4, 8]
  ]),
  e('seguranca-eterna', 'Segurança Eterna', CAT.DEUS, ['certeza da salvacao', 'perder a salvacao', 'perseveranca dos santos'], [
    ['1jo', 5, 13], ['jo', 10, 27, 29], ['jo', 5, 24], ['rm', 8, 1], ['rm', 8, 38, 39], ['fp', 1, 6]
  ]),
  e('servico', 'Serviço', CAT.IGREJA, ['servir', 'servo', 'ministerio', 'diaconia', 'humildade'], [
    ['mc', 10, 45], ['gl', 5, 13], ['1pe', 4, 10], ['jo', 13, 14, 15], ['cl', 3, 23, 24], ['mt', 20, 26, 28]
  ]),
  e('sexualidade', 'Sexualidade', CAT.FAMILIA, ['sexo', 'intimidade', 'casamento', 'pureza sexual'], [
    ['gn', 1, 27, 28], ['gn', 2, 24, 25], ['hb', 13, 4], ['1co', 7, 2, 5], ['pv', 5, 18, 19], ['1co', 6, 18, 20]
  ]),
  e('signos', 'Signos', CAT.IGREJA, ['horoscopo', 'astrologia', 'zodiaco', 'mapa astral'], [
    ['dt', 18, 10, 12], ['is', 47, 13, 14], ['jr', 10, 2], ['dt', 4, 19]
  ]),
  e('silencio', 'Silêncio', CAT.CARATER, ['calar', 'ouvir', 'falar pouco', 'prudencia'], [
    ['pv', 10, 19], ['pv', 17, 27, 28], ['pv', 21, 23], ['tg', 1, 19], ['ec', 3, 7], ['sl', 141, 3]
  ]),
  e('sinais-dos-tempos', 'Sinais dos Tempos', CAT.ETERNIDADE, ['ultimos dias', 'profecia', 'fim do mundo'], [
    ['mt', 24, 6, 8], ['mt', 24, 14], ['2tm', 3, 1, 5], ['lc', 21, 28], ['2pe', 3, 8, 10]
  ]),
  e('sinceridade', 'Sinceridade', CAT.CARATER, ['verdade', 'honestidade', 'coracao sincero', 'transparencia'], [
    ['js', 24, 14], ['rm', 12, 9], ['2co', 1, 12], ['sl', 145, 18], ['ef', 6, 24]
  ]),
  e('soberania', 'Soberania', CAT.DEUS, ['controle de deus', 'providencia', 'todo poderoso', 'proposito'], [
    ['sl', 115, 3], ['jo_at', 42, 2], ['is', 46, 9, 10], ['rm', 11, 36], ['ef', 1, 11], ['pv', 19, 21], ['dn', 4, 35]
  ]),
  e('soberba', 'Soberba', CAT.CARATER, ['orgulho', 'arrogancia', 'altivez'], [
    ['pv', 16, 18], ['pv', 8, 13], ['pv', 11, 2], ['tg', 4, 6], ['1pe', 5, 5], ['pv', 29, 23]
  ]),
  e('sobriedade', 'Sobriedade', CAT.CARATER, ['sobrio', 'vigilancia', 'alcool', 'drogas', 'dominio proprio'], [
    ['1pe', 5, 8], ['1pe', 4, 7], ['1ts', 5, 6, 8], ['tt', 2, 2], ['2tm', 4, 5]
  ]),
  e('sofrimento', 'Sofrimento', CAT.EMOCOES, ['dor', 'provacoes', 'tribulacao', 'aflicao', 'problema do mal'], [
    ['rm', 8, 18], ['rm', 8, 28], ['jo', 16, 33], ['tg', 1, 2, 4], ['1pe', 5, 10], ['2co', 4, 17, 18], ['ap', 21, 4]
  ]),
  e('solidao', 'Solidão', CAT.EMOCOES, ['sozinho', 'isolamento', 'abandono', 'esquecido'], [
    ['dt', 31, 6], ['hb', 13, 5], ['sl', 27, 10], ['sl', 68, 6], ['is', 41, 10], ['mt', 28, 20]
  ]),
  e('solteirice', 'Solteirice', CAT.FAMILIA, ['solteiro', 'solteira', 'celibato', 'nao casado'], [
    ['1co', 7, 7, 9], ['1co', 7, 32, 35], ['mt', 19, 11, 12], ['sl', 37, 4], ['mt', 6, 33]
  ]),
  e('sonhos', 'Sonhos', CAT.IGREJA, ['sonho', 'visoes', 'revelacao', 'interpretar sonhos'], [
    ['jl', 2, 28], ['at', 2, 17], ['ec', 5, 3], ['jr', 23, 28], ['jo_at', 33, 14, 16], ['hb', 1, 1, 2]
  ]),
  e('sono', 'Sono', CAT.EMOCOES, ['dormir', 'insonia', 'descanso', 'noite', 'paz'], [
    ['sl', 4, 8], ['pv', 3, 24], ['sl', 127, 2], ['sl', 3, 5], ['ec', 5, 12]
  ]),
  e('submissao', 'Submissão', CAT.CARATER, ['obediencia', 'autoridade', 'sujeitar-se', 'humildade'], [
    ['tg', 4, 7], ['ef', 5, 21], ['rm', 13, 1], ['1pe', 5, 5], ['hb', 13, 17]
  ]),
  e('suborno', 'Suborno', CAT.VIDA, ['corrupcao', 'propina', 'injustica', 'desonestidade'], [
    ['ex', 23, 8], ['dt', 16, 19], ['pv', 17, 23], ['ec', 7, 7], ['is', 33, 15]
  ]),
  e('suicidio', 'Suicídio', CAT.VIDA, ['tirar a propria vida', 'desespero', 'nao aguento mais', 'valor da vida'], [
    ['sl', 34, 17, 19], ['1co', 6, 19, 20], ['1co', 3, 16, 17], ['ex', 20, 13], ['jo', 10, 10], ['jr', 29, 11], ['sl', 139, 13, 14], ['mt', 11, 28]
  ]),
  e('supersticao', 'Superstição', CAT.IGREJA, ['simpatia', 'amuletos', 'sorte', 'ocultismo'], [
    ['dt', 18, 10, 12], ['jr', 10, 2, 5], ['sl', 115, 4, 8], ['cl', 2, 8], ['1tm', 4, 7]
  ]),

  // ─── T ───────────────────────────────────────────────────────────────────
  e('tatuagem', 'Tatuagem', CAT.CARATER, ['tattoo', 'marcas no corpo', 'piercing', 'corpo templo'], [
    ['lv', 19, 28], ['1co', 6, 19, 20], ['1co', 10, 31], ['rm', 14, 22, 23], ['1sm', 16, 7]
  ]),
  e('temor-do-senhor', 'Temor do Senhor', CAT.DEUS, ['temer a deus', 'reverencia', 'principio da sabedoria'], [
    ['pv', 1, 7], ['pv', 9, 10], ['pv', 8, 13], ['ec', 12, 13], ['sl', 111, 10], ['sl', 34, 9]
  ]),
  e('temperanca', 'Temperança', CAT.CARATER, ['dominio proprio', 'moderacao', 'equilibrio', 'autocontrole'], [
    ['gl', 5, 22, 23], ['2pe', 1, 5, 6], ['1co', 9, 25], ['tt', 2, 12], ['pv', 25, 28]
  ]),
  e('templo', 'Templo', CAT.IGREJA, ['templo do espirito', 'igreja', 'morada de deus', 'corpo'], [
    ['1co', 6, 19], ['1co', 3, 16, 17], ['ef', 2, 21, 22], ['at', 17, 24], ['2co', 6, 16]
  ]),
  e('tempo', 'Tempo', CAT.CARATER, ['brevidade da vida', 'aproveitar o tempo', 'estacoes', 'prioridades'], [
    ['ec', 3, 1, 8], ['sl', 90, 12], ['ef', 5, 15, 16], ['tg', 4, 14], ['cl', 4, 5]
  ]),
  e('tentacao', 'Tentação', CAT.EMOCOES, ['tentar', 'cair em pecado', 'escape', 'provar', 'vigiar'], [
    ['1co', 10, 13], ['tg', 1, 12, 15], ['mt', 26, 41], ['hb', 2, 18], ['hb', 4, 15, 16], ['tg', 4, 7]
  ]),
  e('testemunho', 'Testemunho', CAT.IGREJA, ['sal da terra', 'luz do mundo', 'exemplo', 'conduta crista'], [
    ['mt', 5, 13, 16], ['fp', 2, 15], ['1pe', 2, 12], ['cl', 4, 5, 6], ['tt', 2, 7, 8], ['at', 1, 8]
  ]),
  e('trabalho', 'Trabalho', CAT.CARATER, ['emprego', 'carreira', 'profissao', 'vocacao', 'esforco'], [
    ['cl', 3, 23, 24], ['ec', 9, 10], ['pv', 14, 23], ['pv', 16, 3], ['2ts', 3, 10, 12], ['ef', 6, 5, 9], ['sl', 90, 17]
  ]),
  e('traicao', 'Traição', CAT.EMOCOES, ['trair', 'amigo falso', 'deslealdade', 'decepcao', 'judas'], [
    ['sl', 55, 12, 14], ['sl', 41, 9], ['lc', 22, 48], ['sl', 118, 8, 9], ['2tm', 4, 16, 17]
  ]),
  e('transparencia', 'Transparência', CAT.CARATER, ['luz', 'sinceridade', 'honestidade', 'verdade'], [
    ['jo', 3, 21], ['ef', 5, 8, 13], ['1jo', 1, 7], ['2co', 4, 2], ['pv', 28, 13]
  ]),
  e('tribulacao', 'Tribulação', CAT.EMOCOES, ['aflicao', 'sofrimento', 'prova', 'perseveranca'], [
    ['jo', 16, 33], ['rm', 5, 3, 5], ['rm', 12, 12], ['2co', 1, 4], ['rm', 8, 35, 37]
  ]),
  e('tribunal-de-cristo', 'Tribunal de Cristo', CAT.ETERNIDADE, ['bema', 'galardao', 'recompensa', 'obras dos salvos'], [
    ['2co', 5, 10], ['rm', 14, 10, 12], ['1co', 3, 12, 15], ['jo', 5, 24], ['rm', 8, 1]
  ]),
  e('trindade', 'Trindade', CAT.DEUS, ['pai filho espirito santo', 'um so deus', 'tres pessoas'], [
    ['mt', 28, 19], ['2co', 13, 14], ['mt', 3, 16, 17], ['dt', 6, 4], ['jo', 1, 1], ['at', 5, 3, 4], ['ef', 4, 4, 6]
  ]),
  e('tristeza', 'Tristeza', CAT.EMOCOES, ['triste', 'depressao', 'choro', 'angustia', 'abatimento'], [
    ['sl', 34, 18], ['sl', 42, 11], ['sl', 30, 5], ['jo', 16, 20], ['2co', 7, 10], ['ap', 21, 4]
  ]),

  // ─── U ───────────────────────────────────────────────────────────────────
  e('ultimos-dias', 'Últimos Dias', CAT.ETERNIDADE, ['fim dos tempos', 'sinais', 'escatologia', 'volta de jesus'], [
    ['2tm', 3, 1, 5], ['hb', 1, 1, 2], ['2pe', 3, 3, 10], ['at', 2, 17], ['mt', 24, 6, 14]
  ]),
  e('uncao', 'Unção', CAT.IGREJA, ['ungido', 'espirito santo', 'consagracao', 'chamado'], [
    ['1jo', 2, 20], ['1jo', 2, 27], ['2co', 1, 21, 22], ['lc', 4, 18], ['is', 61, 1]
  ]),
  e('unidade', 'Unidade', CAT.IGREJA, ['uniao', 'harmonia', 'igreja unida', 'comunhao'], [
    ['jo', 17, 20, 21], ['ef', 4, 3, 6], ['sl', 133, 1], ['1co', 1, 10], ['fp', 2, 2], ['rm', 15, 5, 6]
  ]),
  e('universo', 'Universo', CAT.DEUS, ['criacao', 'ceus', 'estrelas', 'cosmos', 'ciencia'], [
    ['gn', 1, 1], ['sl', 19, 1], ['sl', 8, 3, 4], ['is', 40, 26], ['hb', 11, 3], ['cl', 1, 16, 17]
  ]),

  // ─── V ───────────────────────────────────────────────────────────────────
  e('vaidade', 'Vaidade', CAT.CARATER, ['vaidoso', 'futilidade', 'ostentacao', 'status'], [
    ['ec', 1, 2], ['ec', 2, 11], ['fp', 2, 3], ['1jo', 2, 15, 17], ['gl', 5, 26], ['sl', 119, 37]
  ]),
  e('velhice', 'Velhice', CAT.VIDA, ['idosos', 'terceira idade', 'cabelos brancos', 'longevidade'], [
    ['lv', 19, 32], ['pv', 16, 31], ['sl', 92, 14], ['is', 46, 4], ['sl', 71, 9], ['sl', 71, 18]
  ]),
  e('verdade', 'Verdade', CAT.DEUS, ['verdadeiro', 'sinceridade', 'luz', 'cristo e a verdade'], [
    ['jo', 14, 6], ['jo', 8, 32], ['jo', 17, 17], ['sl', 119, 160], ['ef', 4, 15], ['pv', 23, 23]
  ]),
  e('vergonha', 'Vergonha', CAT.EMOCOES, ['humilhacao', 'passado', 'restauracao', 'honra'], [
    ['is', 54, 4], ['is', 61, 7], ['rm', 10, 11], ['sl', 34, 5], ['jl', 2, 26, 27], ['hb', 12, 2]
  ]),
  e('vicios', 'Vícios', CAT.CARATER, ['vicio', 'dependencia', 'drogas', 'alcool', 'escravidao', 'libertacao'], [
    ['1co', 6, 12], ['2pe', 2, 19], ['jo', 8, 34, 36], ['rm', 6, 14], ['1co', 6, 19, 20], ['tt', 2, 11, 12]
  ]),
  e('vida', 'Vida', CAT.VIDA, ['valor da vida', 'viver', 'soprou folego', 'dom de deus'], [
    ['gn', 2, 7], ['jo', 10, 10], ['jo', 14, 6], ['sl', 139, 13, 16], ['dt', 30, 19], ['at', 17, 25]
  ]),
  e('vida-eterna', 'Vida Eterna', CAT.ETERNIDADE, ['eternidade', 'salvacao', 'ceu', 'imortalidade'], [
    ['jo', 3, 16], ['jo', 17, 3], ['1jo', 5, 11, 13], ['rm', 6, 23], ['jo', 10, 28], ['jo', 5, 24]
  ]),
  e('vida-pos-morte', 'Vida Pós-Morte', CAT.ETERNIDADE, ['apos a morte', 'depois da morte', 'paraiso', 'ressurreicao', 'juizo', 'ceu', 'inferno'], [
    ['hb', 9, 27], ['lc', 23, 43], ['2co', 5, 8], ['fp', 1, 21, 23], ['jo', 11, 25, 26], ['jo', 5, 28, 29], ['1ts', 4, 13, 17], ['ap', 21, 3, 4]
  ]),
  e('vigilancia', 'Vigilância', CAT.IGREJA, ['vigiar', 'alerta', 'sobriedade', 'oracao', 'volta de cristo'], [
    ['mt', 24, 42], ['mt', 26, 41], ['1pe', 5, 8], ['1co', 16, 13], ['1ts', 5, 6], ['cl', 4, 2]
  ]),
  e('vinganca', 'Vingança', CAT.CARATER, ['vingar', 'revanche', 'retribuir o mal', 'olho por olho'], [
    ['rm', 12, 17, 21], ['lv', 19, 18], ['pv', 20, 22], ['mt', 5, 38, 39], ['1ts', 5, 15], ['1pe', 3, 9]
  ]),
  e('vinho', 'Vinho', CAT.CARATER, ['alcool', 'bebida', 'embriaguez', 'moderacao'], [
    ['pv', 20, 1], ['ef', 5, 18], ['pv', 23, 29, 32], ['1tm', 5, 23], ['sl', 104, 15], ['rm', 14, 21]
  ]),
  e('violencia', 'Violência', CAT.VIDA, ['agressao', 'homicidio', 'briga', 'paz', 'opressao'], [
    ['sl', 11, 5], ['pv', 3, 31], ['pv', 16, 29], ['mt', 26, 52], ['rm', 12, 18], ['is', 60, 18]
  ]),
  e('vitoria', 'Vitória', CAT.DEUS, ['vencer', 'vencedor', 'conquista', 'triunfo em cristo'], [
    ['1co', 15, 57], ['rm', 8, 37], ['1jo', 5, 4], ['jo', 16, 33], ['2co', 2, 14], ['pv', 21, 31]
  ]),
  e('viuvas', 'Viúvas', CAT.VIDA, ['viuva', 'viuvez', 'amparo', 'orfaos', 'religiao pura'], [
    ['tg', 1, 27], ['1tm', 5, 3, 5], ['sl', 68, 5], ['sl', 146, 9], ['ex', 22, 22], ['is', 1, 17]
  ]),
  e('viuvez', 'Viuvez', CAT.FAMILIA, ['viuva', 'viuvo', 'luto conjugal', 'amparo', 'novo casamento'], [
    ['1tm', 5, 3, 5], ['sl', 68, 5], ['is', 54, 5], ['1co', 7, 39], ['rm', 7, 2, 3]
  ]),
  e('vocacao', 'Vocação', CAT.CARATER, ['chamado', 'proposito', 'trabalho', 'dons', 'carreira'], [
    ['ef', 4, 1], ['cl', 3, 23, 24], ['1co', 7, 17], ['ef', 2, 10], ['1pe', 4, 10]
  ]),
  e('volta-de-jesus', 'Volta de Jesus', CAT.ETERNIDADE, ['segunda vinda', 'arrebatamento', 'fim dos tempos', 'vigiar'], [
    ['1ts', 4, 16, 18], ['at', 1, 11], ['mt', 24, 30], ['mt', 24, 36], ['mt', 24, 42], ['tt', 2, 13], ['ap', 22, 20]
  ]),
  e('vontade-de-deus', 'Vontade de Deus', CAT.DEUS, ['direcao', 'proposito', 'decisao', 'caminho'], [
    ['rm', 12, 1, 2], ['1ts', 4, 3], ['1ts', 5, 16, 18], ['pv', 3, 5, 6], ['sl', 143, 10], ['dt', 29, 29], ['ef', 5, 17]
  ]),

  // ─── X ───────────────────────────────────────────────────────────────────
  e('xenofobia', 'Xenofobia', CAT.VIDA, ['estrangeiros', 'imigrantes', 'preconceito', 'acolhimento'], [
    ['lv', 19, 33, 34], ['dt', 10, 18, 19], ['at', 10, 34, 35], ['at', 17, 26], ['gl', 3, 28]
  ]),

  // ─── Z ───────────────────────────────────────────────────────────────────
  e('zelo', 'Zelo', CAT.CARATER, ['fervor', 'dedicacao', 'paixao por deus', 'diligencia'], [
    ['rm', 12, 11], ['tt', 2, 14], ['sl', 69, 9], ['jo', 2, 17], ['ap', 3, 19], ['rm', 10, 2]
  ]),
  e('zombaria', 'Zombaria', CAT.CARATER, ['escarnecedor', 'escarnecer', 'deboche', 'desprezo'], [
    ['sl', 1, 1], ['gl', 6, 7], ['pv', 9, 7, 8], ['pv', 22, 10], ['2pe', 3, 3, 4], ['jd', 1, 18]
  ]),

  // ─── EXPANSÃO DO LÉXICO BÍBLICO (A–Z) ───────────────────────────────────
  e('abstinencia', 'Abstinência', CAT.CARATER, ['dominio proprio', 'pureza', 'jejum', 'renuncia'], [
    ['1pe', 2, 11], ['1ts', 4, 3], ['1ts', 5, 22], ['1co', 9, 25], ['rm', 14, 21]
  ]),
  e('aceitacao', 'Aceitação', CAT.EMOCOES, ['acolhimento', 'adocao', 'graca', 'rejeicao'], [
    ['rm', 15, 7], ['ef', 1, 5, 6], ['jo', 6, 37], ['rm', 8, 1], ['sl', 27, 10]
  ]),
  e('agape', 'Ágape', CAT.FAMILIA, ['amor incondicional', 'amor de deus', 'caridade'], [
    ['1co', 13, 4, 8], ['1jo', 4, 8], ['1jo', 4, 16], ['jo', 3, 16], ['rm', 5, 8]
  ]),
  e('aleluia', 'Aleluia', CAT.IGREJA, ['louvai ao senhor', 'louvor', 'adoracao', 'exaltacao'], [
    ['sl', 150, 1, 6], ['sl', 113, 1, 3], ['ap', 19, 1], ['ap', 19, 6], ['sl', 104, 35]
  ]),
  e('altar', 'Altar', CAT.IGREJA, ['sacrificio', 'adoracao', 'consagracao', 'entrega'], [
    ['rm', 12, 1], ['mt', 5, 23, 24], ['hb', 13, 10], ['gn', 8, 20], ['sl', 43, 4]
  ]),
  e('amem', 'Amém', CAT.DEUS, ['assim seja', 'fidelidade', 'verdade', 'promessas'], [
    ['2co', 1, 20], ['ap', 3, 14], ['ap', 22, 20], ['rm', 11, 36], ['sl', 106, 48]
  ]),
  e('antigo-testamento', 'Antigo Testamento', CAT.DEUS, ['lei e profetas', 'escrituras', 'antiga alianca'], [
    ['lc', 24, 44], ['rm', 15, 4], ['1co', 10, 11], ['mt', 5, 17], ['hb', 8, 13]
  ]),
  e('apostolo', 'Apóstolo', CAT.IGREJA, ['enviado', 'doze apostolos', 'doutrina apostolica', 'igreja'], [
    ['ef', 2, 20], ['at', 2, 42], ['ef', 4, 11], ['mt', 10, 2], ['1co', 15, 9]
  ]),
  e('arca-da-alianca', 'Arca da Aliança', CAT.DEUS, ['tabernaculo', 'propiciatorio', 'presenca de deus'], [
    ['ex', 25, 10, 22], ['hb', 9, 4, 5], ['js', 3, 11], ['ap', 11, 19]
  ]),
  e('assedio', 'Assédio', CAT.VIDA, ['abuso', 'respeito', 'pureza', 'dignidade', 'violencia'], [
    ['1ts', 4, 3, 6], ['1tm', 5, 1, 2], ['mt', 5, 28], ['pv', 31, 8, 9], ['ef', 5, 3]
  ]),
  e('autocontrole', 'Autocontrole', CAT.CARATER, ['dominio proprio', 'temperanca', 'impulso'], [
    ['pv', 25, 28], ['pv', 16, 32], ['gl', 5, 22, 23], ['2tm', 1, 7], ['2pe', 1, 5, 6]
  ]),
  e('autodefesa', 'Autodefesa', CAT.VIDA, ['defesa', 'protecao', 'violencia', 'paz', 'espada'], [
    ['ex', 22, 2, 3], ['lc', 22, 36], ['mt', 26, 52], ['rm', 12, 18, 19], ['ne', 4, 14]
  ]),
  e('bebes', 'Bebês', CAT.VIDA, ['criancas', 'ventre', 'vida humana', 'gestacao', 'filhos'], [
    ['sl', 139, 13, 16], ['sl', 127, 3], ['sl', 8, 2], ['lc', 1, 41, 44], ['mt', 19, 14]
  ]),
  e('bem', 'Bem', CAT.CARATER, ['fazer o bem', 'bondade', 'vencer o mal', 'justica'], [
    ['rm', 12, 21], ['gl', 6, 9, 10], ['tg', 4, 17], ['sl', 34, 14], ['1ts', 5, 15], ['rm', 8, 28]
  ]),
  e('bispo', 'Bispo', CAT.IGREJA, ['presbitero', 'pastor', 'supervisor', 'lideranca'], [
    ['1tm', 3, 1, 7], ['tt', 1, 7, 9], ['fp', 1, 1], ['1pe', 2, 25]
  ]),
  e('boato', 'Boato', CAT.CARATER, ['fofoca', 'mentira', 'mexerico', 'calunia'], [
    ['ex', 23, 1], ['pv', 16, 28], ['pv', 18, 8], ['pv', 26, 20], ['ef', 4, 29]
  ]),
  e('boca', 'Boca', CAT.CARATER, ['lingua', 'palavras', 'fala', 'confissao'], [
    ['sl', 141, 3], ['pv', 21, 23], ['ef', 4, 29], ['mt', 12, 34], ['sl', 19, 14], ['rm', 10, 9, 10]
  ]),
  e('calma', 'Calma', CAT.EMOCOES, ['serenidade', 'paz', 'quietude', 'descanso', 'ansiedade'], [
    ['sl', 46, 10], ['is', 30, 15], ['pv', 14, 30], ['fp', 4, 7], ['jo', 14, 27]
  ]),
  e('canticos', 'Cânticos', CAT.IGREJA, ['musica', 'louvor', 'hinos', 'salmos', 'cantar'], [
    ['ef', 5, 19], ['cl', 3, 16], ['sl', 96, 1], ['sl', 98, 1], ['sl', 40, 3]
  ]),
  e('cativeiro', 'Cativeiro', CAT.EMOCOES, ['prisao', 'escravidao', 'libertacao', 'exilio'], [
    ['is', 61, 1], ['lc', 4, 18], ['sl', 126, 1, 3], ['jr', 29, 11, 14], ['ef', 4, 8]
  ]),
  e('celibato', 'Celibato', CAT.FAMILIA, ['solteirice', 'solteiro', 'dedicacao a deus'], [
    ['1co', 7, 7, 9], ['1co', 7, 32, 35], ['mt', 19, 11, 12], ['1tm', 4, 1, 3]
  ]),
  e('certeza', 'Certeza', CAT.DEUS, ['certeza da salvacao', 'fe', 'conviccao', 'seguranca'], [
    ['1jo', 5, 13], ['hb', 11, 1], ['rm', 8, 38, 39], ['2tm', 1, 12], ['hb', 10, 22]
  ]),
  e('cigarro', 'Cigarro', CAT.CARATER, ['tabaco', 'fumo', 'vicio', 'drogas', 'corpo templo'], [
    ['1co', 6, 12], ['1co', 6, 19, 20], ['1co', 3, 16, 17], ['2pe', 2, 19], ['2co', 7, 1]
  ]),
  e('circuncisao', 'Circuncisão', CAT.DEUS, ['coracao circuncidado', 'alianca', 'lei', 'graca'], [
    ['rm', 2, 28, 29], ['gl', 5, 6], ['cl', 2, 11], ['fp', 3, 3], ['dt', 30, 6]
  ]),
  e('clemencia', 'Clemência', CAT.DEUS, ['misericordia', 'compaixao', 'perdao', 'piedade'], [
    ['sl', 86, 5], ['sl', 103, 8, 10], ['lm', 3, 22], ['tg', 5, 11], ['ef', 2, 4]
  ]),
  e('comida', 'Comida', CAT.CARATER, ['alimentos', 'dieta', 'pao', 'jejum', 'gratidao'], [
    ['1tm', 4, 4, 5], ['1co', 10, 31], ['mc', 7, 18, 19], ['rm', 14, 17], ['mt', 6, 11]
  ]),
  e('companheirismo', 'Companheirismo', CAT.FAMILIA, ['amizade', 'casamento', 'comunhao', 'apoio'], [
    ['ec', 4, 9, 12], ['gn', 2, 18], ['pv', 17, 17], ['pv', 27, 17], ['gl', 6, 2]
  ]),
  e('concupiscencia', 'Concupiscência', CAT.CARATER, ['desejo carnal', 'cobiça', 'tentacao', 'carne'], [
    ['tg', 1, 14, 15], ['1jo', 2, 16, 17], ['gl', 5, 16], ['1pe', 2, 11], ['rm', 13, 14]
  ]),
  e('conduta', 'Conduta', CAT.CARATER, ['comportamento', 'carater', 'testemunho', 'santidade'], [
    ['1pe', 2, 12], ['1pe', 1, 15], ['fp', 1, 27], ['ef', 4, 1], ['tg', 3, 13]
  ]),
  e('confusao', 'Confusão', CAT.EMOCOES, ['desordem', 'duvida', 'paz', 'clareza'], [
    ['1co', 14, 33], ['tg', 3, 16], ['pv', 3, 5, 6], ['2tm', 1, 7], ['sl', 119, 105]
  ]),
  e('congregacao', 'Congregação', CAT.IGREJA, ['igreja', 'congregar', 'assembleia', 'comunhao'], [
    ['hb', 10, 25], ['sl', 122, 1], ['sl', 133, 1], ['at', 2, 42, 46], ['mt', 18, 20]
  ]),
  e('consagracao', 'Consagração', CAT.IGREJA, ['santidade', 'dedicacao', 'entrega', 'separado'], [
    ['rm', 12, 1, 2], ['js', 3, 5], ['2tm', 2, 21], ['1ts', 5, 23], ['1pe', 2, 9]
  ]),
  e('consolador', 'Consolador', CAT.DEUS, ['espirito santo', 'paracleto', 'ajudador'], [
    ['jo', 14, 16, 17], ['jo', 14, 26], ['jo', 15, 26], ['jo', 16, 7, 13]
  ]),
  e('consumismo', 'Consumismo', CAT.CARATER, ['materialismo', 'avareza', 'contentamento', 'bens'], [
    ['lc', 12, 15], ['1tm', 6, 6, 10], ['hb', 13, 5], ['mt', 6, 19, 21], ['ec', 5, 10]
  ]),
  e('contricao', 'Contrição', CAT.EMOCOES, ['quebrantamento', 'arrependimento', 'humildade'], [
    ['sl', 51, 17], ['sl', 34, 18], ['is', 57, 15], ['is', 66, 2], ['jl', 2, 13]
  ]),
  e('coroa', 'Coroa', CAT.ETERNIDADE, ['galardao', 'recompensa', 'vitoria', 'vida eterna'], [
    ['tg', 1, 12], ['2tm', 4, 8], ['1pe', 5, 4], ['ap', 2, 10], ['1co', 9, 25]
  ]),
  e('corpo-de-cristo', 'Corpo de Cristo', CAT.IGREJA, ['igreja', 'membros', 'unidade', 'dons'], [
    ['1co', 12, 12, 27], ['ef', 1, 22, 23], ['ef', 4, 12, 16], ['rm', 12, 4, 5], ['cl', 1, 18]
  ]),
  e('covardia', 'Covardia', CAT.EMOCOES, ['medo', 'timidez', 'coragem', 'ousadia'], [
    ['2tm', 1, 7], ['ap', 21, 8], ['js', 1, 9], ['pv', 28, 1], ['dt', 31, 6]
  ]),
  e('crise', 'Crise', CAT.EMOCOES, ['dificuldade', 'adversidade', 'prova', 'socorro'], [
    ['sl', 46, 1, 3], ['sl', 50, 15], ['is', 43, 2], ['2co', 4, 8, 9], ['rm', 8, 28]
  ]),
  e('critica', 'Crítica', CAT.CARATER, ['julgamento', 'repreensao', 'lingua', 'edificacao'], [
    ['mt', 7, 1, 5], ['tg', 4, 11, 12], ['ef', 4, 29], ['pv', 15, 31, 32], ['rm', 14, 10, 13]
  ]),
  e('crucificacao', 'Crucificação', CAT.DEUS, ['cruz', 'calvario', 'morte de jesus', 'sacrificio'], [
    ['gl', 2, 20], ['lc', 23, 33, 34], ['jo', 19, 30], ['1co', 1, 23], ['fp', 2, 8]
  ]),
  e('cuidado', 'Cuidado', CAT.DEUS, ['providencia', 'protecao', 'ansiedade', 'bom pastor'], [
    ['1pe', 5, 7], ['mt', 6, 26, 30], ['sl', 23, 1, 4], ['sl', 121, 3, 8], ['is', 46, 4]
  ]),
  e('dadiva', 'Dádiva', CAT.DEUS, ['dom de deus', 'presente', 'graca', 'bencao'], [
    ['tg', 1, 17], ['rm', 6, 23], ['ef', 2, 8], ['2co', 9, 15], ['jo', 4, 10]
  ]),
  e('dez-mandamentos', 'Dez Mandamentos', CAT.DEUS, ['lei de moises', 'sinai', 'decálogo', 'mandamentos'], [
    ['ex', 20, 1, 17], ['dt', 5, 6, 21], ['mt', 22, 37, 40], ['rm', 13, 8, 10]
  ]),
  e('diacono', 'Diácono', CAT.IGREJA, ['servico', 'diaconia', 'igreja', 'ministerio'], [
    ['1tm', 3, 8, 13], ['at', 6, 1, 6], ['fp', 1, 1], ['rm', 16, 1]
  ]),
  e('dieta', 'Dieta', CAT.CARATER, ['alimentos', 'comida', 'saude', 'moderacao'], [
    ['mc', 7, 18, 19], ['1tm', 4, 3, 5], ['1co', 10, 31], ['dn', 1, 8, 15], ['rm', 14, 2, 3]
  ]),
  e('direcao', 'Direção', CAT.DEUS, ['orientacao', 'vontade de deus', 'caminho', 'decisoes'], [
    ['pv', 3, 5, 6], ['sl', 32, 8], ['sl', 119, 105], ['is', 30, 21], ['sl', 25, 4, 5], ['pv', 16, 9]
  ]),
  e('discipulo', 'Discípulo', CAT.IGREJA, ['discipulado', 'seguidor de cristo', 'cristao'], [
    ['jo', 8, 31], ['jo', 13, 35], ['lc', 9, 23], ['lc', 14, 27], ['mt', 28, 19]
  ]),
  e('discussao', 'Discussão', CAT.CARATER, ['brigas', 'contenda', 'conflito', 'debate'], [
    ['2tm', 2, 23, 25], ['pv', 15, 1], ['pv', 17, 14], ['tt', 3, 9], ['rm', 14, 1]
  ]),
  e('divisao', 'Divisão', CAT.IGREJA, ['contenda', 'faccao', 'unidade', 'igreja'], [
    ['1co', 1, 10], ['rm', 16, 17], ['mt', 12, 25], ['gl', 5, 20], ['ef', 4, 3]
  ]),
  e('doacao', 'Doação', CAT.CARATER, ['generosidade', 'oferta', 'caridade', 'partilha'], [
    ['2co', 9, 6, 8], ['at', 20, 35], ['pv', 11, 24, 25], ['lc', 6, 38], ['mt', 6, 3, 4]
  ]),
  e('economia', 'Economia', CAT.CARATER, ['financas', 'dinheiro', 'poupar', 'prudencia'], [
    ['pv', 21, 20], ['pv', 21, 5], ['pv', 13, 11], ['pv', 6, 6, 8], ['lc', 14, 28]
  ]),
  e('eden', 'Éden', CAT.DEUS, ['jardim do eden', 'criacao', 'adao e eva', 'paraiso'], [
    ['gn', 2, 8, 15], ['gn', 3, 23, 24], ['is', 51, 3], ['ap', 2, 7], ['ap', 22, 1, 2]
  ]),
  e('emocoes', 'Emoções', CAT.EMOCOES, ['sentimentos', 'coracao', 'alma', 'equilibrio'], [
    ['pv', 4, 23], ['sl', 42, 11], ['fp', 4, 6, 8], ['pv', 16, 32], ['2co', 5, 7]
  ]),
  e('ensino', 'Ensino', CAT.IGREJA, ['doutrina', 'instrucao', 'discipulado', 'mestre'], [
    ['2tm', 3, 16, 17], ['mt', 28, 20], ['tg', 3, 1], ['tt', 2, 1], ['cl', 3, 16]
  ]),
  e('entendimento', 'Entendimento', CAT.CARATER, ['sabedoria', 'conhecimento', 'discernimento'], [
    ['pv', 3, 5], ['pv', 4, 7], ['pv', 9, 10], ['ef', 1, 17, 18], ['cl', 1, 9]
  ]),
  e('equilibrio', 'Equilíbrio', CAT.CARATER, ['moderacao', 'sobriedade', 'dominio proprio'], [
    ['2tm', 1, 7], ['fp', 4, 5], ['1pe', 5, 8], ['ec', 7, 18], ['1co', 6, 12]
  ]),
  e('escarnecedor', 'Escarnecedor', CAT.CARATER, ['zombaria', 'deboche', 'orgulho', 'sabedoria'], [
    ['sl', 1, 1], ['pv', 9, 7, 8], ['pv', 13, 1], ['pv', 22, 10], ['2pe', 3, 3]
  ]),
  e('escudo', 'Escudo', CAT.DEUS, ['protecao', 'fe', 'armadura de deus', 'defesa'], [
    ['sl', 3, 3], ['sl', 18, 2], ['sl', 91, 4], ['ef', 6, 16], ['gn', 15, 1]
  ]),
  e('esforco', 'Esforço', CAT.CARATER, ['diligencia', 'trabalho', 'dedicacao', 'perseveranca'], [
    ['cl', 3, 23], ['ec', 9, 10], ['pv', 14, 23], ['js', 1, 9], ['fp', 3, 13, 14]
  ]),
  e('esmola', 'Esmola', CAT.CARATER, ['caridade', 'pobres', 'generosidade', 'doacao'], [
    ['mt', 6, 1, 4], ['lc', 12, 33], ['pv', 19, 17], ['at', 10, 4], ['1jo', 3, 17]
  ]),
  e('espada-do-espirito', 'Espada do Espírito', CAT.IGREJA, ['palavra de deus', 'armadura', 'batalha espiritual'], [
    ['ef', 6, 17], ['hb', 4, 12], ['mt', 4, 4], ['ap', 1, 16]
  ]),
  e('espera', 'Espera', CAT.EMOCOES, ['esperar em deus', 'paciencia', 'tempo de deus'], [
    ['is', 40, 31], ['sl', 27, 14], ['sl', 40, 1], ['lm', 3, 25, 26], ['sl', 37, 7]
  ]),
  e('estudo-biblico', 'Estudo Bíblico', CAT.IGREJA, ['ler a biblia', 'bereanos', 'meditacao', 'escrituras'], [
    ['at', 17, 11], ['2tm', 2, 15], ['js', 1, 8], ['sl', 1, 2], ['sl', 119, 11], ['jo', 5, 39]
  ]),
  e('excelencia', 'Excelência', CAT.CARATER, ['qualidade', 'trabalho', 'dedicacao', 'gloria de deus'], [
    ['cl', 3, 23, 24], ['fp', 1, 9, 10], ['fp', 4, 8], ['ec', 9, 10], ['dn', 6, 3]
  ]),
  e('exemplo', 'Exemplo', CAT.CARATER, ['testemunho', 'modelo', 'lideranca', 'conduta'], [
    ['1tm', 4, 12], ['1pe', 2, 21], ['1pe', 5, 3], ['tt', 2, 7], ['jo', 13, 15], ['1co', 11, 1]
  ]),
  e('exortacao', 'Exortação', CAT.IGREJA, ['encorajamento', 'admoestacao', 'correcao', 'edificacao'], [
    ['hb', 3, 13], ['hb', 10, 24, 25], ['2tm', 4, 2], ['1ts', 5, 11], ['cl', 3, 16]
  ]),
  e('falhas', 'Falhas', CAT.EMOCOES, ['erro', 'pecado', 'queda', 'recomeco', 'perdao'], [
    ['pv', 24, 16], ['sl', 37, 23, 24], ['1jo', 1, 9], ['1jo', 2, 1], ['rm', 8, 1], ['mq', 7, 8]
  ]),
  e('falsidade', 'Falsidade', CAT.CARATER, ['mentira', 'hipocrisia', 'engano', 'fingimento'], [
    ['pv', 12, 22], ['sl', 101, 7], ['ef', 4, 25], ['1pe', 2, 1], ['rm', 12, 9]
  ]),
  e('falsos-mestres', 'Falsos Mestres', CAT.IGREJA, ['heresia', 'falsos profetas', 'engano', 'doutrina'], [
    ['2pe', 2, 1, 3], ['2tm', 4, 3, 4], ['mt', 7, 15], ['1jo', 4, 1], ['jd', 1, 4]
  ]),
  e('fardo', 'Fardo', CAT.EMOCOES, ['peso', 'cansaco', 'jugo', 'alivio', 'ansiedade'], [
    ['mt', 11, 28, 30], ['sl', 55, 22], ['gl', 6, 2], ['sl', 68, 19], ['1pe', 5, 7]
  ]),
  e('fartura', 'Fartura', CAT.DEUS, ['abundancia', 'provisao', 'contentamento', 'bencao'], [
    ['fp', 4, 12], ['sl', 23, 1], ['pv', 3, 9, 10], ['dt', 8, 10, 11], ['2co', 9, 8]
  ]),
  e('feridas', 'Feridas', CAT.EMOCOES, ['cura interior', 'dor', 'magoa', 'restauracao'], [
    ['sl', 147, 3], ['is', 53, 5], ['jr', 30, 17], ['sl', 34, 18], ['is', 61, 1]
  ]),
  e('firmeza', 'Firmeza', CAT.CARATER, ['constancia', 'perseveranca', 'rocha', 'inabalavel'], [
    ['1co', 15, 58], ['1co', 16, 13], ['ef', 6, 13, 14], ['sl', 125, 1], ['mt', 7, 24, 25]
  ]),
  e('fortaleza', 'Fortaleza', CAT.DEUS, ['refugio', 'forca', 'protecao', 'rocha'], [
    ['sl', 18, 2], ['sl', 46, 1], ['na', 1, 7], ['pv', 18, 10], ['ne', 8, 10]
  ]),
  e('frieza-espiritual', 'Frieza Espiritual', CAT.EMOCOES, ['deserto', 'nao sinto deus', 'morno', 'primeiro amor'], [
    ['ap', 2, 4, 5], ['ap', 3, 15, 16], ['mt', 24, 12], ['sl', 63, 1], ['tg', 4, 8], ['2co', 5, 7]
  ]),
  e('glorificacao', 'Glorificação', CAT.ETERNIDADE, ['corpo glorificado', 'ressurreicao', 'eternidade', 'salvacao'], [
    ['rm', 8, 30], ['fp', 3, 20, 21], ['1co', 15, 42, 44], ['1jo', 3, 2], ['cl', 3, 4]
  ]),
  e('harmonia', 'Harmonia', CAT.FAMILIA, ['unidade', 'paz', 'concordia', 'comunhao'], [
    ['sl', 133, 1], ['rm', 12, 16], ['rm', 15, 5, 6], ['fp', 2, 2], ['1pe', 3, 8]
  ]),
  e('hinos', 'Hinos', CAT.IGREJA, ['musica', 'louvor', 'canticos', 'salmos'], [
    ['ef', 5, 19], ['cl', 3, 16], ['mt', 26, 30], ['at', 16, 25], ['sl', 95, 1, 2]
  ]),
  e('humilhacao', 'Humilhação', CAT.EMOCOES, ['humildade', 'vergonha', 'exaltacao', 'quebrantamento'], [
    ['tg', 4, 10], ['1pe', 5, 6], ['lc', 14, 11], ['2cr', 7, 14], ['fp', 2, 8, 9]
  ]),
  e('idolos', 'Ídolos', CAT.IGREJA, ['idolatria', 'imagens', 'deuses falsos'], [
    ['sl', 115, 4, 8], ['ex', 20, 3, 5], ['1jo', 5, 21], ['1co', 10, 14], ['is', 44, 9, 10]
  ]),
  e('imigrantes', 'Imigrantes', CAT.VIDA, ['estrangeiros', 'refugiados', 'acolhimento', 'xenofobia'], [
    ['lv', 19, 33, 34], ['dt', 10, 18, 19], ['ex', 22, 21], ['sl', 146, 9], ['mt', 25, 35]
  ]),
  e('imortalidade', 'Imortalidade', CAT.ETERNIDADE, ['vida eterna', 'incorruptivel', 'ressurreicao'], [
    ['1co', 15, 53, 54], ['1tm', 6, 16], ['2tm', 1, 10], ['rm', 2, 7], ['jo', 11, 25, 26]
  ]),
  e('impaciencia', 'Impaciência', CAT.EMOCOES, ['paciencia', 'pressa', 'irritacao', 'esperar'], [
    ['pv', 14, 29], ['pv', 19, 2], ['ec', 7, 8, 9], ['sl', 37, 7], ['tg', 5, 7, 8]
  ]),
  e('imparcialidade', 'Imparcialidade', CAT.VIDA, ['justica', 'igualdade', 'favoritismo', 'acepcao'], [
    ['at', 10, 34], ['rm', 2, 11], ['tg', 2, 1, 9], ['dt', 1, 17], ['1tm', 5, 21]
  ]),
  e('incerteza', 'Incerteza', CAT.EMOCOES, ['futuro', 'duvida', 'inseguranca', 'confianca'], [
    ['pv', 3, 5, 6], ['jr', 29, 11], ['mt', 6, 34], ['tg', 4, 13, 15], ['sl', 37, 23, 24]
  ]),
  e('iniquidade', 'Iniquidade', CAT.DEUS, ['pecado', 'maldade', 'transgressao', 'perdao'], [
    ['is', 53, 5, 6], ['sl', 51, 2], ['sl', 103, 3], ['is', 59, 2], ['1jo', 1, 9]
  ]),
  e('inocencia', 'Inocência', CAT.VIDA, ['sangue inocente', 'pureza', 'criancas', 'justica'], [
    ['pv', 6, 16, 17], ['mt', 10, 16], ['sl', 26, 6], ['fp', 2, 15], ['rm', 16, 19]
  ]),
  e('inspiracao', 'Inspiração', CAT.DEUS, ['biblia', 'escrituras', 'palavra de deus', 'espirito santo'], [
    ['2tm', 3, 16, 17], ['2pe', 1, 20, 21], ['2sm', 23, 2], ['hb', 1, 1, 2]
  ]),
  e('intimidade', 'Intimidade', CAT.FAMILIA, ['intimidade com deus', 'comunhao', 'casamento', 'secreto'], [
    ['sl', 25, 14], ['tg', 4, 8], ['mt', 6, 6], ['jo', 15, 4, 5], ['1co', 7, 3, 5]
  ]),
  e('irmaos', 'Irmãos', CAT.IGREJA, ['familia da fe', 'igreja', 'amor fraternal', 'unidade'], [
    ['sl', 133, 1], ['rm', 12, 10], ['hb', 13, 1], ['1jo', 3, 14, 16], ['1jo', 4, 20, 21]
  ]),
  e('isolamento', 'Isolamento', CAT.EMOCOES, ['solidao', 'sozinho', 'desigrejado', 'comunhao'], [
    ['pv', 18, 1], ['ec', 4, 9, 10], ['hb', 10, 25], ['sl', 68, 6], ['gn', 2, 18]
  ]),
  e('jovens', 'Jovens', CAT.FAMILIA, ['juventude', 'mocidade', 'adolescente', 'pureza'], [
    ['1tm', 4, 12], ['sl', 119, 9], ['ec', 12, 1], ['2tm', 2, 22], ['1jo', 2, 14], ['pv', 20, 29]
  ]),
  e('jubilo', 'Júbilo', CAT.EMOCOES, ['alegria', 'regozijo', 'louvor', 'celebracao'], [
    ['sl', 100, 1, 2], ['sl', 126, 2, 3], ['fp', 4, 4], ['is', 61, 10], ['jd', 1, 24]
  ]),
  e('lago-de-fogo', 'Lago de Fogo', CAT.ETERNIDADE, ['inferno', 'segunda morte', 'juizo final'], [
    ['ap', 20, 10], ['ap', 20, 14, 15], ['ap', 21, 8], ['mt', 25, 41]
  ]),
  e('lazer', 'Lazer', CAT.CARATER, ['descanso', 'entretenimento', 'liberdade crista', 'alegria'], [
    ['ec', 3, 1, 4], ['mc', 6, 31], ['1co', 10, 31], ['1co', 6, 12], ['fp', 4, 8]
  ]),
  e('leis-civis', 'Leis Civis', CAT.VIDA, ['governo', 'autoridade', 'obediencia civil', 'impostos'], [
    ['rm', 13, 1, 7], ['1pe', 2, 13, 15], ['tt', 3, 1], ['at', 5, 29]
  ]),
  e('livro-da-vida', 'Livro da Vida', CAT.ETERNIDADE, ['salvacao', 'juizo final', 'ceu', 'nomes escritos'], [
    ['ap', 20, 12, 15], ['ap', 21, 27], ['ap', 3, 5], ['fp', 4, 3], ['lc', 10, 20]
  ]),
  e('longevidade', 'Longevidade', CAT.VIDA, ['vida longa', 'velhice', 'honra aos pais', 'sabedoria'], [
    ['ef', 6, 2, 3], ['pv', 3, 1, 2], ['pv', 9, 10, 11], ['sl', 91, 16], ['sl', 90, 10, 12]
  ]),
  e('mana', 'Maná', CAT.DEUS, ['pao do ceu', 'provisao', 'deserto', 'pao da vida'], [
    ['ex', 16, 15], ['ex', 16, 35], ['dt', 8, 3], ['jo', 6, 31, 35], ['ap', 2, 17]
  ]),
  e('mandamentos', 'Mandamentos', CAT.DEUS, ['lei', 'obediencia', 'amor', 'dez mandamentos'], [
    ['mt', 22, 37, 40], ['jo', 14, 15], ['jo', 14, 21], ['1jo', 5, 3], ['ex', 20, 1, 17]
  ]),
  e('maternidade', 'Maternidade', CAT.FAMILIA, ['mae', 'filhos', 'gravidez', 'heranca'], [
    ['sl', 127, 3], ['sl', 113, 9], ['pv', 31, 26, 28], ['is', 66, 13], ['1sm', 1, 27]
  ]),
  e('medicina', 'Medicina', CAT.VIDA, ['medico', 'remedio', 'saude', 'cura', 'lucas'], [
    ['cl', 4, 14], ['mt', 9, 12], ['1tm', 5, 23], ['pv', 17, 22], ['is', 38, 21]
  ]),
  e('ministerio', 'Ministério', CAT.IGREJA, ['servico', 'chamado', 'dons', 'igreja'], [
    ['ef', 4, 11, 12], ['2co', 5, 18], ['2tm', 4, 5], ['1pe', 4, 10, 11], ['cl', 4, 17]
  ]),
  e('mocidade', 'Mocidade', CAT.FAMILIA, ['juventude', 'jovens', 'pureza', 'criador'], [
    ['ec', 12, 1], ['1tm', 4, 12], ['2tm', 2, 22], ['sl', 119, 9], ['lm', 3, 27]
  ]),
  e('monoteismo', 'Monoteísmo', CAT.DEUS, ['um so deus', 'shema', 'unico deus'], [
    ['dt', 6, 4], ['is', 45, 5], ['1co', 8, 4, 6], ['1tm', 2, 5], ['tg', 2, 19]
  ]),
  e('morte-espiritual', 'Morte Espiritual', CAT.DEUS, ['pecado', 'separacao de deus', 'vida em cristo'], [
    ['ef', 2, 1, 5], ['rm', 6, 23], ['cl', 2, 13], ['jo', 5, 24], ['1jo', 3, 14]
  ]),
  e('nascimento-de-jesus', 'Nascimento de Jesus', CAT.DEUS, ['natal', 'belem', 'encarnacao', 'emanuel'], [
    ['lc', 2, 7, 14], ['mt', 1, 21, 23], ['is', 9, 6], ['gl', 4, 4, 5], ['jo', 1, 14]
  ]),
  e('autonegacao', 'Autonegação', CAT.IGREJA, ['negar a si mesmo', 'abnegacao', 'renuncia', 'cruz', 'discipulado', 'seguir jesus'], [
    ['lc', 9, 23, 24], ['mt', 16, 24, 25], ['gl', 2, 20], ['rm', 12, 1], ['fp', 3, 7, 8]
  ]),
  e('noiva-de-cristo', 'Noiva de Cristo', CAT.IGREJA, ['igreja', 'bodas do cordeiro', 'casamento'], [
    ['ef', 5, 25, 27], ['ap', 19, 7, 8], ['ap', 21, 2], ['2co', 11, 2], ['ap', 22, 17]
  ]),
  e('noivado', 'Noivado', CAT.FAMILIA, ['namoro', 'casamento', 'pureza', 'compromisso'], [
    ['2co', 6, 14], ['hb', 13, 4], ['1ts', 4, 3, 5], ['pv', 18, 22], ['gn', 2, 24]
  ]),
  e('nome-de-deus', 'Nome de Deus', CAT.DEUS, ['santo nome', 'terceiro mandamento', 'eu sou', 'jesus'], [
    ['ex', 3, 14], ['ex', 20, 7], ['pv', 18, 10], ['fp', 2, 9, 11], ['at', 4, 12], ['sl', 8, 1]
  ]),
  e('nova-jerusalem', 'Nova Jerusalém', CAT.ETERNIDADE, ['ceu', 'cidade santa', 'apocalipse 21'], [
    ['ap', 21, 2, 4], ['ap', 21, 10, 11], ['ap', 21, 22, 27], ['hb', 11, 10], ['hb', 12, 22]
  ]),
  e('novo-testamento', 'Novo Testamento', CAT.DEUS, ['nova alianca', 'evangelho', 'escrituras'], [
    ['lc', 22, 20], ['2co', 3, 6], ['hb', 9, 15], ['hb', 8, 6], ['2tm', 3, 16]
  ]),
  e('obras-da-carne', 'Obras da Carne', CAT.IGREJA, ['pecados', 'carne', 'galatas 5', 'santidade'], [
    ['gl', 5, 19, 21], ['1co', 6, 9, 11], ['cl', 3, 5, 9], ['ef', 5, 3, 5], ['rm', 8, 13]
  ]),
  e('ousadia', 'Ousadia', CAT.IGREJA, ['coragem', 'intrepidez', 'evangelismo', 'confianca'], [
    ['pv', 28, 1], ['at', 4, 29, 31], ['hb', 4, 16], ['ef', 3, 12], ['2tm', 1, 7]
  ]),
  e('ouvir', 'Ouvir', CAT.CARATER, ['escutar', 'silencio', 'fe pelo ouvir', 'obedecer'], [
    ['tg', 1, 19], ['rm', 10, 17], ['pv', 18, 13], ['pv', 1, 5], ['jo', 10, 27], ['tg', 1, 22]
  ]),
  e('pacificador', 'Pacificador', CAT.VIDA, ['paz', 'reconciliacao', 'bem-aventurado'], [
    ['mt', 5, 9], ['tg', 3, 18], ['rm', 12, 18], ['hb', 12, 14], ['pv', 12, 20]
  ]),
  e('pai-nosso', 'Pai Nosso', CAT.IGREJA, ['oracao do senhor', 'como orar', 'mateus 6'], [
    ['mt', 6, 9, 13], ['lc', 11, 1, 4], ['mt', 6, 7, 8], ['rm', 8, 15]
  ]),
  e('paixoes', 'Paixões', CAT.CARATER, ['desejos', 'mocidade', 'tentacao', 'dominio proprio'], [
    ['2tm', 2, 22], ['gl', 5, 24], ['1pe', 2, 11], ['tg', 4, 1], ['tt', 2, 12]
  ]),
  e('parabolas', 'Parábolas', CAT.DEUS, ['ensinos de jesus', 'reino dos ceus', 'evangelhos'], [
    ['mt', 13, 10, 13], ['mt', 13, 34, 35], ['mc', 4, 33, 34], ['sl', 78, 2]
  ]),
  e('passado', 'Passado', CAT.EMOCOES, ['esquecer o passado', 'perdao', 'recomeco', 'nova criatura'], [
    ['is', 43, 18, 19], ['fp', 3, 13, 14], ['2co', 5, 17], ['sl', 103, 12], ['is', 43, 25]
  ]),
  e('paternidade', 'Paternidade', CAT.FAMILIA, ['pai', 'filhos', 'educacao', 'deus pai'], [
    ['ef', 6, 4], ['sl', 103, 13], ['pv', 22, 6], ['pv', 20, 7], ['dt', 6, 6, 7], ['rm', 8, 15]
  ]),
  e('paz-no-lar', 'Paz no Lar', CAT.FAMILIA, ['familia', 'harmonia', 'casa', 'casamento'], [
    ['pv', 17, 1], ['pv', 15, 17], ['sl', 128, 1, 4], ['cl', 3, 15], ['ef', 4, 31, 32]
  ]),
  e('pedra-angular', 'Pedra Angular', CAT.DEUS, ['cristo', 'alicerce', 'fundamento', 'rocha'], [
    ['sl', 118, 22], ['is', 28, 16], ['ef', 2, 20], ['1pe', 2, 6, 7], ['1co', 3, 11]
  ]),
  e('pentecostes', 'Pentecostes', CAT.IGREJA, ['derramamento do espirito', 'atos 2', 'espirito santo'], [
    ['at', 2, 1, 4], ['at', 2, 17, 18], ['at', 2, 38, 39], ['jl', 2, 28, 29]
  ]),
  e('perdicao', 'Perdição', CAT.ETERNIDADE, ['inferno', 'condenacao', 'caminho largo', 'juizo'], [
    ['mt', 7, 13], ['jo', 3, 16], ['2ts', 1, 9], ['2pe', 3, 9], ['fp', 3, 19]
  ]),
  e('predestinacao', 'Predestinação', CAT.DEUS, ['eleicao', 'soberania', 'escolhidos', 'efesios 1'], [
    ['ef', 1, 4, 5], ['ef', 1, 11], ['rm', 8, 29, 30], ['2tm', 1, 9], ['1pe', 1, 2]
  ]),
  e('presbiteros', 'Presbíteros', CAT.IGREJA, ['anciaos', 'pastores', 'lideranca', 'igreja'], [
    ['1pe', 5, 1, 4], ['1tm', 5, 17], ['tt', 1, 5, 9], ['at', 14, 23], ['tg', 5, 14]
  ]),
  e('presenca-de-deus', 'Presença de Deus', CAT.DEUS, ['onipresenca', 'emanuel', 'comunhao', 'alegria'], [
    ['sl', 16, 11], ['ex', 33, 14], ['sl', 139, 7, 10], ['mt', 28, 20], ['is', 41, 10], ['sl', 73, 28]
  ]),
  e('primicias', 'Primícias', CAT.IGREJA, ['dizimo', 'ofertas', 'honrar a deus', 'cristo primicias'], [
    ['pv', 3, 9, 10], ['1co', 15, 20], ['rm', 8, 23], ['tg', 1, 18], ['ex', 23, 19]
  ]),
  e('prisao', 'Prisão', CAT.VIDA, ['presos', 'visitar presos', 'libertacao', 'justica'], [
    ['mt', 25, 36], ['hb', 13, 3], ['sl', 146, 7], ['is', 61, 1], ['at', 16, 25, 26]
  ]),
  e('processos', 'Processos', CAT.IGREJA, ['tribunal', 'conflitos entre cristaos', 'reconciliacao'], [
    ['1co', 6, 1, 7], ['mt', 5, 25], ['mt', 18, 15, 17], ['pv', 25, 8, 9]
  ]),
  e('purificacao', 'Purificação', CAT.DEUS, ['limpeza espiritual', 'sangue de jesus', 'perdao', 'santidade'], [
    ['1jo', 1, 7], ['1jo', 1, 9], ['sl', 51, 7], ['sl', 51, 10], ['hb', 9, 14], ['tt', 2, 14]
  ]),
  e('recompensa', 'Recompensa', CAT.ETERNIDADE, ['galardao', 'fidelidade', 'servico', 'coroa'], [
    ['cl', 3, 23, 24], ['hb', 11, 6], ['ap', 22, 12], ['mt', 6, 4], ['mt', 10, 42]
  ]),
  e('regozijo', 'Regozijo', CAT.EMOCOES, ['alegria', 'jubilo', 'louvor', 'contentamento'], [
    ['fp', 4, 4], ['1ts', 5, 16], ['sl', 118, 24], ['rm', 12, 12], ['hc', 3, 18]
  ]),
  e('remissao', 'Remissão', CAT.DEUS, ['perdao dos pecados', 'sangue', 'redencao', 'graca'], [
    ['mt', 26, 28], ['ef', 1, 7], ['hb', 9, 22], ['at', 10, 43], ['cl', 1, 14]
  ]),
  e('remorso', 'Remorso', CAT.EMOCOES, ['culpa', 'arrependimento', 'tristeza segundo deus'], [
    ['2co', 7, 10], ['sl', 32, 3, 5], ['sl', 51, 3, 4], ['rm', 8, 1], ['1jo', 1, 9]
  ]),
  e('renovacao', 'Renovação', CAT.DEUS, ['renovar a mente', 'forca', 'transformacao', 'espirito'], [
    ['rm', 12, 2], ['2co', 4, 16], ['is', 40, 31], ['tt', 3, 5], ['sl', 51, 10], ['ef', 4, 23]
  ]),
  e('renuncia', 'Renúncia', CAT.IGREJA, ['negar a si mesmo', 'sacrificio', 'discipulado', 'cruz'], [
    ['lc', 9, 23], ['lc', 14, 33], ['fp', 3, 7, 8], ['tt', 2, 12], ['mt', 19, 29]
  ]),
  e('repouso', 'Repouso', CAT.EMOCOES, ['descanso', 'paz', 'alivio', 'sabado'], [
    ['mt', 11, 28, 29], ['hb', 4, 9, 11], ['sl', 23, 2], ['sl', 116, 7], ['jr', 6, 16]
  ]),
  e('repreensao', 'Repreensão', CAT.CARATER, ['correcao', 'disciplina', 'sabedoria', 'amor'], [
    ['pv', 27, 5, 6], ['pv', 9, 8], ['pv', 15, 31, 32], ['ap', 3, 19], ['2tm', 3, 16]
  ]),
  e('reputacao', 'Reputação', CAT.CARATER, ['bom nome', 'testemunho', 'integridade', 'honra'], [
    ['pv', 22, 1], ['ec', 7, 1], ['1tm', 3, 7], ['1pe', 2, 12], ['fp', 2, 15]
  ]),
  e('resgate', 'Resgate', CAT.DEUS, ['redencao', 'salvacao', 'preco pago', 'cruz'], [
    ['mc', 10, 45], ['1tm', 2, 5, 6], ['1pe', 1, 18, 19], ['gl', 3, 13], ['cl', 1, 13, 14]
  ]),
  e('retidao', 'Retidão', CAT.CARATER, ['justica', 'integridade', 'honestidade', 'caminho reto'], [
    ['pv', 11, 3], ['pv', 2, 7, 9], ['sl', 11, 7], ['sl', 25, 21], ['is', 26, 7]
  ]),
  e('revelacao', 'Revelação', CAT.DEUS, ['escrituras', 'apocalipse', 'cristo', 'conhecimento de deus'], [
    ['hb', 1, 1, 2], ['dt', 29, 29], ['ef', 1, 17], ['rm', 1, 19, 20], ['ap', 1, 1]
  ]),
  e('reverencia', 'Reverência', CAT.IGREJA, ['temor do senhor', 'adoracao', 'respeito a deus'], [
    ['hb', 12, 28, 29], ['sl', 89, 7], ['ec', 5, 1, 2], ['hc', 2, 20], ['sl', 2, 11]
  ]),
  e('rocha', 'Rocha', CAT.DEUS, ['fundamento', 'cristo', 'firmeza', 'refugio', 'salmo 18'], [
    ['sl', 18, 2], ['dt', 32, 4], ['mt', 7, 24, 25], ['1co', 10, 4], ['sl', 62, 2], ['sl', 40, 2]
  ]),
  e('sacerdocio', 'Sacerdócio', CAT.IGREJA, ['sacerdocio real', 'sumo sacerdote', 'acesso a deus'], [
    ['1pe', 2, 5], ['1pe', 2, 9], ['hb', 4, 14, 16], ['hb', 7, 24, 25], ['ap', 1, 6]
  ]),
  e('salario', 'Salário', CAT.VIDA, ['trabalho', 'justica trabalhista', 'pagamento', 'sustento'], [
    ['lc', 10, 7], ['1tm', 5, 18], ['tg', 5, 4], ['dt', 24, 14, 15], ['cl', 4, 1], ['rm', 6, 23]
  ]),
  e('salvador', 'Salvador', CAT.DEUS, ['jesus cristo', 'salvacao', 'messias', 'redentor'], [
    ['lc', 2, 11], ['at', 4, 12], ['jo', 4, 42], ['tt', 2, 13], ['1jo', 4, 14], ['fp', 3, 20]
  ]),
  e('saudade', 'Saudade', CAT.EMOCOES, ['luto', 'esperanca', 'reencontro', 'eternidade'], [
    ['1ts', 4, 13, 18], ['fp', 1, 23], ['2co', 5, 8], ['ap', 21, 4], ['sl', 34, 18]
  ]),
  e('saude-mental', 'Saúde Mental', CAT.EMOCOES, ['ansiedade', 'depressao', 'mente', 'paz', 'emocoes'], [
    ['fp', 4, 6, 8], ['is', 26, 3], ['2tm', 1, 7], ['sl', 34, 18], ['sl', 94, 19], ['mt', 11, 28]
  ]),
  e('segredos', 'Segredos', CAT.CARATER, ['confidencia', 'fofoca', 'discricao', 'confianca'], [
    ['pv', 11, 13], ['pv', 20, 19], ['pv', 25, 9], ['lc', 8, 17], ['sl', 25, 14]
  ]),
  e('segunda-vinda', 'Segunda Vinda', CAT.ETERNIDADE, ['volta de jesus', 'arrebatamento', 'vinda gloriosa'], [
    ['at', 1, 11], ['1ts', 4, 16, 17], ['mt', 24, 30], ['tt', 2, 13], ['hb', 9, 28], ['ap', 1, 7]
  ]),
  e('seitas', 'Seitas', CAT.IGREJA, ['heresia', 'falsos profetas', 'falsos ensinos', 'discernimento'], [
    ['2pe', 2, 1], ['gl', 1, 8, 9], ['1jo', 4, 1, 3], ['cl', 2, 8], ['1tm', 4, 1]
  ]),
  e('senhor', 'Senhor', CAT.DEUS, ['kyrios', 'soberania', 'jesus e senhor', 'obediencia'], [
    ['fp', 2, 9, 11], ['rm', 10, 9], ['lc', 6, 46], ['sl', 23, 1], ['dt', 6, 4]
  ]),
  e('sensualidade', 'Sensualidade', CAT.CARATER, ['lascivia', 'luxuria', 'pureza', 'modestia'], [
    ['gl', 5, 19], ['rm', 13, 13, 14], ['1pe', 4, 3], ['1ts', 4, 3, 5], ['1jo', 2, 16]
  ]),
  e('serenidade', 'Serenidade', CAT.EMOCOES, ['calma', 'paz', 'mansidao', 'quietude'], [
    ['pv', 14, 30], ['is', 30, 15], ['sl', 131, 2], ['1pe', 3, 4], ['fp', 4, 7]
  ]),
  e('servo', 'Servo', CAT.IGREJA, ['servico', 'humildade', 'lideranca', 'cristo servo'], [
    ['mc', 10, 43, 45], ['fp', 2, 5, 7], ['jo', 13, 14, 16], ['mt', 25, 21], ['gl', 5, 13]
  ]),
  e('socorro', 'Socorro', CAT.EMOCOES, ['ajuda', 'refugio', 'livramento', 'salmo 121'], [
    ['sl', 121, 1, 2], ['sl', 46, 1], ['hb', 4, 16], ['sl', 40, 17], ['is', 41, 10]
  ]),
  e('sola-fide', 'Sola Fide', CAT.DEUS, ['somente a fe', 'justificacao pela fe', 'graca'], [
    ['rm', 3, 28], ['rm', 5, 1], ['ef', 2, 8, 9], ['gl', 2, 16], ['rm', 1, 17]
  ]),
  e('sola-gratia', 'Sola Gratia', CAT.DEUS, ['somente a graca', 'favor imerecido', 'salvacao'], [
    ['ef', 2, 8, 9], ['rm', 3, 24], ['rm', 11, 6], ['tt', 3, 5], ['2tm', 1, 9]
  ]),
  e('sola-scriptura', 'Sola Scriptura', CAT.DEUS, ['somente a escritura', 'biblia', 'suficiencia'], [
    ['2tm', 3, 16, 17], ['sl', 119, 105], ['at', 17, 11], ['1co', 4, 6], ['is', 8, 20]
  ]),
  e('solidariedade', 'Solidariedade', CAT.VIDA, ['compaixao', 'ajuda mutua', 'caridade', 'proximo'], [
    ['gl', 6, 2], ['1jo', 3, 17, 18], ['rm', 12, 13, 15], ['hb', 13, 16], ['pv', 19, 17]
  ]),
  e('sonegacao', 'Sonegação', CAT.VIDA, ['impostos', 'tributos', 'honestidade', 'governo'], [
    ['rm', 13, 6, 7], ['mt', 22, 21], ['pv', 11, 1], ['lc', 16, 10]
  ]),
  e('sorte', 'Sorte', CAT.DEUS, ['providencia', 'soberania', 'acaso', 'apostas'], [
    ['pv', 16, 33], ['is', 65, 11], ['sl', 31, 15], ['rm', 8, 28], ['mt', 10, 29, 30]
  ]),
  e('sumo-sacerdote', 'Sumo Sacerdote', CAT.DEUS, ['jesus cristo', 'mediador', 'trono da graca', 'hebreus'], [
    ['hb', 4, 14, 16], ['hb', 7, 25, 27], ['hb', 9, 11, 12], ['hb', 2, 17]
  ]),
  e('suplica', 'Súplica', CAT.IGREJA, ['oracao', 'clamor', 'pedido', 'intercessao'], [
    ['fp', 4, 6], ['ef', 6, 18], ['1tm', 2, 1], ['sl', 28, 2], ['sl', 116, 1, 2]
  ]),
  e('sustento', 'Sustento', CAT.DEUS, ['provisao', 'pao de cada dia', 'desemprego', 'cuidado'], [
    ['sl', 55, 22], ['fp', 4, 19], ['mt', 6, 26, 33], ['sl', 37, 25], ['is', 46, 4]
  ]),
  e('tabernaculo', 'Tabernáculo', CAT.DEUS, ['presenca de deus', 'habitar', 'templo', 'cristo'], [
    ['ex', 25, 8], ['jo', 1, 14], ['hb', 9, 11], ['ap', 21, 3], ['sl', 84, 1]
  ]),
  e('talentos', 'Talentos', CAT.CARATER, ['dons', 'mordomia', 'servico', 'vocacao'], [
    ['mt', 25, 14, 29], ['1pe', 4, 10], ['rm', 12, 6, 8], ['1co', 12, 7]
  ]),
  e('tesouro', 'Tesouro', CAT.CARATER, ['coracao', 'riqueza', 'ceu', 'prioridades'], [
    ['mt', 6, 19, 21], ['mt', 13, 44], ['2co', 4, 7], ['cl', 2, 3], ['lc', 12, 33, 34]
  ]),
  e('tolerancia', 'Tolerância', CAT.FAMILIA, ['paciencia', 'suportar em amor', 'respeito', 'verdade'], [
    ['ef', 4, 2], ['cl', 3, 13], ['rm', 14, 1], ['rm', 15, 7], ['ef', 4, 15]
  ]),
  e('tradicao', 'Tradição', CAT.IGREJA, ['tradicao humana', 'palavra de deus', 'escrituras'], [
    ['mc', 7, 8, 9], ['cl', 2, 8], ['mt', 15, 3], ['2ts', 2, 15], ['1pe', 1, 18]
  ]),
  e('tranquilidade', 'Tranquilidade', CAT.EMOCOES, ['paz', 'serenidade', 'calma', 'descanso'], [
    ['pv', 14, 30], ['is', 32, 17], ['fp', 4, 7], ['1ts', 4, 11], ['sl', 4, 8]
  ]),
  e('transformacao', 'Transformação', CAT.DEUS, ['mudanca', 'renovacao', 'nova criatura', 'conversao'], [
    ['rm', 12, 2], ['2co', 3, 18], ['2co', 5, 17], ['ef', 4, 22, 24], ['ez', 36, 26]
  ]),
  e('trevas', 'Trevas', CAT.DEUS, ['escuridao', 'luz', 'pecado', 'batalha espiritual'], [
    ['jo', 1, 5], ['jo', 8, 12], ['cl', 1, 13], ['1pe', 2, 9], ['ef', 5, 8], ['1jo', 1, 5, 6]
  ]),
  e('trono-da-graca', 'Trono da Graça', CAT.DEUS, ['misericordia', 'oracao', 'acesso a deus', 'socorro'], [
    ['hb', 4, 16], ['hb', 10, 19, 22], ['ef', 3, 12], ['sl', 89, 14]
  ]),
  e('uma-so-carne', 'Uma Só Carne', CAT.FAMILIA, ['casamento', 'uniao conjugal', 'matrimonio'], [
    ['gn', 2, 24], ['mt', 19, 5, 6], ['mc', 10, 8, 9], ['ef', 5, 31]
  ]),
  e('valor-da-vida', 'Valor da Vida', CAT.VIDA, ['vida humana', 'aborto', 'suicidio', 'eutanasia', 'imagem de deus'], [
    ['gn', 1, 27], ['sl', 139, 13, 16], ['jr', 1, 5], ['ex', 20, 13], ['jo', 10, 10], ['mt', 10, 29, 31]
  ]),
  e('verbo', 'Verbo', CAT.DEUS, ['logos', 'jesus cristo', 'joao 1', 'palavra viva'], [
    ['jo', 1, 1, 3], ['jo', 1, 14], ['1jo', 1, 1], ['ap', 19, 13], ['hb', 4, 12]
  ]),
  e('vestimenta', 'Vestimenta', CAT.CARATER, ['roupas', 'modestia', 'aparencia', 'revestir de cristo'], [
    ['1tm', 2, 9, 10], ['1pe', 3, 3, 4], ['cl', 3, 12, 14], ['rm', 13, 14], ['gl', 3, 27]
  ]),
  e('vida-abundante', 'Vida Abundante', CAT.DEUS, ['plenitude', 'jesus', 'alegria', 'proposito'], [
    ['jo', 10, 10], ['jo', 15, 11], ['sl', 16, 11], ['ef', 3, 19, 20], ['fp', 4, 13]
  ]),
  e('virtude', 'Virtude', CAT.CARATER, ['carater', 'excelencia moral', 'bondade', 'fruto'], [
    ['2pe', 1, 5, 8], ['fp', 4, 8], ['pv', 31, 10], ['gl', 5, 22, 23], ['cl', 3, 12, 14]
  ]),
  e('visoes', 'Visões', CAT.IGREJA, ['sonhos', 'profecia', 'revelacao', 'espirito santo'], [
    ['jl', 2, 28], ['at', 2, 17], ['pv', 29, 18], ['nm', 12, 6], ['hb', 1, 1, 2]
  ]),
  e('voto', 'Voto', CAT.CARATER, ['promessa', 'juramento', 'compromisso', 'fidelidade'], [
    ['ec', 5, 4, 5], ['dt', 23, 21, 23], ['nm', 30, 2], ['sl', 50, 14], ['mt', 5, 33, 37]
  ]),
  e('emanuel', 'Emanuel', CAT.DEUS, ['deus conosco', 'nascimento de jesus', 'encarnacao', 'presenca de deus'], [
    ['is', 7, 14], ['mt', 1, 23], ['mt', 28, 20], ['jo', 1, 14], ['is', 41, 10]
  ]),
  e('maranata', 'Maranata', CAT.ETERNIDADE, ['ora vem senhor jesus', 'volta de jesus', 'segunda vinda', 'esperanca'], [
    ['1co', 16, 22], ['ap', 22, 20], ['fp', 4, 5], ['tg', 5, 8], ['tt', 2, 13]
  ]),
  e('yahweh', 'Yahweh', CAT.DEUS, ['jeova', 'senhor', 'eu sou', 'nome de deus', 'yhwh'], [
    ['ex', 3, 14, 15], ['sl', 83, 18], ['is', 42, 8], ['dt', 6, 4], ['ex', 34, 6, 7]
  ])
];

