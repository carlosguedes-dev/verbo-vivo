import type { SolaItem, TheologicalTerm } from '../types';

export const CINCO_SOLAS_DATA: SolaItem[] = [
  {
    latin: 'Sola Scriptura',
    portuguese: 'Somente a Escritura',
    summary: 'A Bíblia Sagrada (os 66 livros canônicos) é a única regra infalível, inerrante e suficiente de fé e prática para o cristão.',
    explanation: 'Reconhecemos o valor da história da Igreja e dos bons mestres, mas toda tradição, liderança ou experiência humana deve ser julgada pela Palavra escrita de Deus, que é a autoridade suprema final.',
    keyVerse: {
      bookAbbrev: '2tm',
      chapter: 3,
      verse: 16,
      label: '2 Timóteo 3:16-17',
      quote: 'Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redarguir, para corrigir, para instruir em justiça; para que o homem de Deus seja perfeito, e perfeitamente instruído para toda a boa obra.'
    }
  },
  {
    latin: 'Solus Christus',
    portuguese: 'Somente Cristo',
    summary: 'Jesus Cristo é o único Salvador e o único Mediador entre Deus e a humanidade.',
    explanation: 'Nossa salvação foi inteiramente conquistada pela vida perfeita, morte substitutiva na cruz e ressurreição corporal de Jesus Cristo. Não há outro nome dado entre os homens pelo qual devamos ser salvos, nem necessidade de mediadores humanos ou sacerdotais terrenos.',
    keyVerse: {
      bookAbbrev: 'at',
      chapter: 4,
      verse: 12,
      label: 'Atos 4:12',
      quote: 'E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos.'
    }
  },
  {
    latin: 'Sola Gratia',
    portuguese: 'Somente a Graça',
    summary: 'A salvação é um dom inteiramente gratuito e imerecido da parte de Deus, do início ao fim.',
    explanation: 'Estávamos espiritualmente mortos em nossos delitos e pecados, incapazes de salvar a nós mesmos. Foi o amor e a misericórdia soberana de Deus que tomaram a iniciativa de nos resgatar em Cristo, sem qualquer mérito humano.',
    keyVerse: {
      bookAbbrev: 'ef',
      chapter: 2,
      verse: 8,
      label: 'Efésios 2:8-9',
      quote: 'Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie.'
    }
  },
  {
    latin: 'Sola Fide',
    portuguese: 'Somente a Fé',
    summary: 'Somos justificados (declarados justos diante do tribunal de Deus) unicamente por meio da fé na obra consumada de Jesus Cristo.',
    explanation: 'Pela fé de mãos vazias recebemos a justiça perfeita de Cristo creditada (imputada) em nossa conta, enquanto nossos pecados foram colocados sobre Ele na cruz. As boas obras são o fruto inevitável do cristão salvo, nunca a moeda de compra da salvação.',
    keyVerse: {
      bookAbbrev: 'rm',
      chapter: 5,
      verse: 1,
      label: 'Romanos 5:1',
      quote: 'Sendo, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo.'
    }
  },
  {
    latin: 'Soli Deo Gloria',
    portuguese: 'Glória Somente a Deus',
    summary: 'Toda a salvação e todas as esferas da vida do cristão existem exclusivamente para a honra, o louvor e a glória do Deus Triúno.',
    explanation: 'Porque Deus planejou, executou e aplicou a nossa redenção, nenhum ser humano ou instituição pode reivindicar glória para si. Além disso, o cristão serve a Deus não apenas dentro do templo, mas na família, nos estudos, no trabalho e na sociedade, fazendo tudo para a glória de Deus.',
    keyVerse: {
      bookAbbrev: 'rm',
      chapter: 11,
      verse: 36,
      label: 'Romanos 11:36',
      quote: 'Porque dele e por ele, e para ele, são todas as coisas; glória, pois, a ele eternamente. Amém.'
    }
  }
];

export const CREDO_APOSTOLICO_DECLARACAO: string[] = [
  'Creio em Deus Pai, Todo-Poderoso, Criador do Céu e da Terra.',
  'Creio em Jesus Cristo, Seu único Filho, nosso Senhor, o qual foi concebido por obra do Espírito Santo; nasceu da virgem Maria; padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; ao terceiro dia ressuscitou dos mortos; subiu ao Céu e está assentado à mão direita de Deus Pai Todo-Poderoso, de onde há de vir para julgar os vivos e os mortos.',
  'Creio no Espírito Santo; na santa Igreja universal (a comunhão de todos os remidos em Cristo); na comunhão dos santos; na remissão dos pecados; na ressurreição do corpo; e na vida eterna. Amém.'
];

export const DICIONARIO_TEOLOGICO_DATA: TheologicalTerm[] = [
  {
    term: 'Justificação',
    origin: 'Do grego "Dikaiosis" (ato forense/jurídico)',
    category: 'Soteriologia (Salvação)',
    definition: 'Ato gracioso e instantâneo pelo qual Deus, como Juiz justo, perdoa todos os pecados do crente e o declara legalmente justo aos Seus olhos, imputando-lhe a perfeita justiça de Jesus Cristo mediante a fé.',
    biblicalBasis: {
      bookAbbrev: '2co',
      chapter: 5,
      verse: 21,
      label: '2 Coríntios 5:21',
      quote: 'Àquele que não conheceu pecado, o fez pecado por nós; para que nele fôssemos feitos justiça de Deus.'
    }
  },
  {
    term: 'Regeneração (Novo Nascimento)',
    origin: 'Do grego "Palingenesia"',
    category: 'Soteriologia (Salvação)',
    definition: 'Obra sobrenatural do Espírito Santo que ressuscita espiritualmente o pecador morto em delitos, implantando nele uma nova natureza espiritual que ama a Deus e deseja obedecer-Lhe.',
    biblicalBasis: {
      bookAbbrev: 'tt',
      chapter: 3,
      verse: 5,
      label: 'Tito 3:5',
      quote: 'Não pelas obras de justiça que houvéssemos feito, mas segundo a sua misericórdia, nos salvou pela lavagem da regeneração e da renovação do Espírito Santo.'
    }
  },
  {
    term: 'Santificação',
    origin: 'Do grego "Hagiasmos" (separação para Deus)',
    category: 'Vida Cristã',
    definition: 'Posicionalmente, todo crente já foi separado para Deus em Cristo; progressivamente, é o processo contínuo durante toda a vida terrena no qual o Espírito Santo nos transforma à imagem de Jesus, vencendo o pecado e produzindo o fruto espiritual.',
    biblicalBasis: {
      bookAbbrev: 'hb',
      chapter: 12,
      verse: 14,
      label: 'Hebreus 12:14',
      quote: 'Segui a paz com todos, e a santificação, sem a qual ninguém verá o Senhor.'
    }
  },
  {
    term: 'Propiciação e Expiação',
    origin: 'Do grego "Hilasterion"',
    category: 'Cristologia & Cruz',
    definition: 'Expiação significa cobrir e remover a culpa do pecado; Propiciação significa que o sacrifício substitutivo de Jesus na cruz satisfez plenamente a santa justiça de Deus contra o nosso pecado, trazendo-nos paz e favor divino.',
    biblicalBasis: {
      bookAbbrev: '1jo',
      chapter: 4,
      verse: 10,
      label: '1 João 4:10',
      quote: 'Nisto está o amor, não em que nós tenhamos amado a Deus, mas em que ele nos amou a nós, e enviou seu Filho para propiciação pelos nossos pecados.'
    }
  },
  {
    term: 'Redenção (Resgate)',
    origin: 'Do grego "Apolytrosis"',
    category: 'Cristologia & Cruz',
    definition: 'Libertação da escravidão do pecado e da condenação mediante o pagamento de um preço de resgate altíssimo: o sangue precioso do próprio Filho de Deus.',
    biblicalBasis: {
      bookAbbrev: '1pe',
      chapter: 1,
      verse: 18,
      label: '1 Pedro 1:18-19',
      quote: 'Sabendo que não foi com coisas corruptíveis, como prata ou ouro, que fostes resgatados... mas com o precioso sangue de Cristo.'
    }
  },
  {
    term: 'Adoção',
    origin: 'Do grego "Huiothesia"',
    category: 'Soteriologia (Salvação)',
    definition: 'Privilégio sublime pelo qual Deus não apenas perdoa o pecador no tribunal, mas o recebe em Sua própria família como filho amado e coerdeiro com Cristo, concedendo-lhe acesso íntimo para clamar "Aba, Pai".',
    biblicalBasis: {
      bookAbbrev: 'rm',
      chapter: 8,
      verse: 15,
      label: 'Romanos 8:15',
      quote: 'Porque não recebestes o espírito de escravidão, para outra vez estardes em temor, mas recebestes o Espírito de adoção de filhos, pelo qual clamamos: Aba, Pai.'
    }
  },
  {
    term: 'Arrependimento (Metanoia)',
    origin: 'Do grego "Metanoia" (mudança de mente e direção)',
    category: 'Soteriologia (Salvação)',
    definition: 'Muito mais do que remorso emocional passageiro, o arrependimento bíblico é uma mudança profunda de mente, coração e rota: dar meia-volta, deixar o pecado e voltar-se inteiramente para Deus.',
    biblicalBasis: {
      bookAbbrev: '2co',
      chapter: 7,
      verse: 10,
      label: '2 Coríntios 7:10',
      quote: 'Porque a tristeza segundo Deus opera arrependimento para a salvação, da qual ninguém se arrepende.'
    }
  },
  {
    term: 'Glorificação',
    origin: 'Do grego "Doxazo"',
    category: 'Escatologia',
    definition: 'O estágio final e consumado da salvação na volta de Cristo, quando os crentes serão ressuscitados ou transformados com corpos glorificados, imortais e livres para sempre de toda presença de pecado, dor e morte.',
    biblicalBasis: {
      bookAbbrev: 'fp',
      chapter: 3,
      verse: 21,
      label: 'Filipenses 3:21',
      quote: 'Que transformará o nosso corpo abatido, para ser conforme o seu corpo glorioso.'
    }
  },
  {
    term: 'Hermenêutica e Exegese',
    origin: 'Do grego "Hermeneuo" e "Exegesis"',
    category: 'Estudo Bíblico',
    definition: 'Hermenêutica é a ciência e arte de interpretar corretamente o texto bíblico (respeitando contexto histórico, gramatical e canônico). Exegese é "extrair" do texto o que o autor inspirado realmente disse, oposto à "eisegese" (tentar forçar nossas opiniões para dentro do texto).',
    biblicalBasis: {
      bookAbbrev: '2tm',
      chapter: 2,
      verse: 15,
      label: '2 Timóteo 2:15',
      quote: 'Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade.'
    }
  },
  {
    term: 'Paracleto (Consolador)',
    origin: 'Do grego "Parakletos" (chamado para estar ao lado)',
    category: 'Pneumatologia (Espírito Santo)',
    definition: 'Título usado por Jesus para o Espírito Santo: Aquele que é chamado para caminhar ao nosso lado como Consolador, Auxiliador, Conselheiro, Mestre da Verdade e Intercessor.',
    biblicalBasis: {
      bookAbbrev: 'jo',
      chapter: 14,
      verse: 16,
      label: 'João 14:16',
      quote: 'E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre.'
    }
  }
];
