import type { QuestionAnswer, QACategory } from '../types';

export const QA_CATEGORIES: QACategory[] = [
  'Salvação & Graça',
  'Vida Cristã & Santificação',
  'Doutrina & Teologia',
  'Apologética & Dificuldades Bíblicas',
  'Família, Jovens & Vocação',
  'Escatologia & Eternidade'
];

export const TIRA_DUVIDAS_DATA: QuestionAnswer[] = [
  // ─── 1. SALVAÇÃO & GRAÇA ──────────────────────────────────────────────
  {
    id: 'certeza-da-salvacao',
    category: 'Salvação & Graça',
    question: 'Como posso ter certeza da minha salvação se ainda sou falho?',
    shortAnswer: 'A certeza da salvação não repousa na nossa perfeição pessoal, mas na obra perfeita e consumada de Jesus Cristo na cruz e na fidelidade da promessa de Deus.',
    detailedExplanation: [
      'Muitos cristãos sinceros sofrem com a dúvida da salvação porque olham apenas para suas próprias oscilações emocionais ou falhas diárias. Porém, a Bíblia ensina que somos salvos pela graça, por meio da fé, e não por méritos próprios (Efésios 2:8-9). Se a salvação dependesse do nosso desempenho para ser conquistada ou mantida, ninguém jamais teria paz.',
      'O apóstolo João escreveu sua primeira carta especificamente para que os crentes soubessem que têm a vida eterna (1 João 5:13). A base objetiva da nossa segurança é a morte substitutiva e a ressurreição de Cristo ("Está consumado!", João 19:30).',
      'Além disso, a Bíblia aponta três evidências internas da ação do Espírito Santo em quem nasceu de novo: (1) você crê e confia somente em Jesus Cristo como seu Senhor e Salvador; (2) você não sente mais prazer tranquilo no pecado — quando falha, sente tristeza segundo Deus e busca arrependimento; e (3) você ama a Deus, Sua Palavra e Seus irmãos.'
    ],
    practicalApplication: 'Quando a acusação vier à sua mente, não argumente com base na sua própria força; aponte para a cruz de Cristo. Confesse suas falhas ao Senhor (1 João 1:9) e descanse na promessa de que Aquele que começou a boa obra em você há de completá-la (Filipenses 1:6).',
    keywords: ['certeza', 'salvação', 'salvo', 'dúvida', 'segurança', 'medo', 'inferno', 'céu', 'vida eterna', 'merecer', 'falho', 'pecador'],
    references: [
      {
        bookAbbrev: '1jo',
        chapter: 5,
        verse: 13,
        label: '1 João 5:13',
        quote: 'Estas coisas vos escrevi, a vós, os que credes no nome do Filho de Deus, para que saibais que tendes a vida eterna.'
      },
      {
        bookAbbrev: 'ef',
        chapter: 2,
        verse: 8,
        label: 'Efésios 2:8-9',
        quote: 'Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie.'
      },
      {
        bookAbbrev: 'jo',
        chapter: 10,
        verse: 28,
        label: 'João 10:28',
        quote: 'E dou-lhes a vida eterna, e nunca hão de perecer, e ninguém as arrebatará da minha mão.'
      }
    ]
  },
  {
    id: 'pecado-contra-espirito-santo',
    category: 'Salvação & Graça',
    question: 'O que é a blasfêmia contra o Espírito Santo (o pecado imperdoável)? Tenho medo de tê-lo cometido.',
    shortAnswer: 'A blasfêmia contra o Espírito Santo é a rejeição consciente, endurecida, deliberada e final da obra de Cristo até a morte, atribuindo ao maligno o que claramente vem de Deus. Se você teme a Deus e deseja o perdão dEle, você NÃO cometeu esse pecado.',
    detailedExplanation: [
      'Em Mateus 12:22-32, os fariseus viram Jesus expulsar demônios e curar um cego e mudo pelo poder do Espírito Santo. Mesmo diante da evidência inegável de que Jesus era o Messias, com o coração totalmente endurecido pelo orgulho, eles disseram que Jesus fazia aquilo pelo poder de Belzebu (Satanás).',
      'Portanto, a blasfêmia contra o Espírito Santo não é um pensamento intrusivo involuntário, nem uma palavra impensada dita num momento de fraqueza da qual a pessoa se arrepende. Trata-se de uma apostasia e dureza permanente de coração que recusa o único meio de perdão: o testemunho do Espírito Santo acerca de Jesus Cristo.',
      'Como ensinavam os pastores reformados e puritanos: o próprio fato de uma pessoa estar preocupada, quebrantada, temerosa de ter ofendido a Deus e desejosa de arrependimento e comunhão com Cristo é a prova cabal de que o Espírito Santo ainda está agindo no coração dela!'
    ],
    practicalApplication: 'Rejeite os pensamentos obsessivos de condenação que tentam afastar você da oração. Aproxime-se do trono da graça com confiança: Jesus prometeu que "o que vem a mim de maneira nenhuma o lançarei fora" (João 6:37).',
    keywords: ['blasfêmia', 'imperdoável', 'espírito santo', 'pecado sem perdão', 'pensamentos ruins', 'intrusivos', 'medo de não ter perdão', 'mateus 12'],
    references: [
      {
        bookAbbrev: 'mt',
        chapter: 12,
        verse: 31,
        label: 'Mateus 12:31',
        quote: 'Portanto, eu vos digo: Todo o pecado e blasfêmia se perdoará aos homens; mas a blasfêmia contra o Espírito não será perdoada aos homens.'
      },
      {
        bookAbbrev: 'jo',
        chapter: 6,
        verse: 37,
        label: 'João 6:37',
        quote: 'Todo o que o Pai me dá virá a mim; e o que vem a mim de maneira nenhuma o lançarei fora.'
      },
      {
        bookAbbrev: '1jo',
        chapter: 1,
        verse: 9,
        label: '1 João 1:9',
        quote: 'Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.'
      }
    ]
  },
  {
    id: 'fe-e-obras-paulo-tiago',
    category: 'Salvação & Graça',
    question: 'Somos salvos somente pela fé ou pelas obras? Paulo e Tiago se contradizem?',
    shortAnswer: 'Não há contradição alguma: somos salvos somente pela fé em Cristo (sem obras como mérito), mas a fé verdadeira que salva nunca permanece sozinha — ela sempre produz boas obras como fruto.',
    detailedExplanation: [
      'O apóstolo Paulo (em Romanos 3:28 e Efésios 2:8-9) responde à pergunta: "Como um pecador culpado pode ser declarado justo diante de Deus?". Ele combate o legalismo e afirma que a raiz da salvação é exclusivamente a graça de Deus recebida pela fé em Cristo, sem nenhuma obra da lei.',
      'Já o apóstolo Tiago (em Tiago 2:14-26) responde a outra pergunta: "Como saber se a fé que alguém diz ter é viva e verdadeira, e não apenas da boca para fora?". Ele combate o intelectualismo morto — pessoas que dizem "eu creio em Deus" (algo que até os demônios sabem, Tg 2:19), mas cuja vida não apresenta nenhuma transformação ou amor ao próximo.',
      'A frase clássica da Reforma Protestante resume perfeitamente a harmonia bíblica: "Somos justificados somente pela fé, mas a fé que justifica nunca está só". As boas obras não são a causa da nossa salvação, mas a consequência inevitável de quem foi salvo (Efésios 2:10).'
    ],
    practicalApplication: 'Descanse 100% no sacrifício de Jesus para a sua salvação, e sirva ao próximo com amor, integridade e generosidade como expressão de gratidão por já ter sido salvo.',
    keywords: ['fé', 'obras', 'boas obras', 'tiago', 'paulo', 'contradição', 'justificação', 'sola fide', 'caridade', 'mérito'],
    references: [
      {
        bookAbbrev: 'ef',
        chapter: 2,
        verse: 10,
        label: 'Efésios 2:10',
        quote: 'Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.'
      },
      {
        bookAbbrev: 'tg',
        chapter: 2,
        verse: 17,
        label: 'Tiago 2:17',
        quote: 'Assim também a fé, se não tiver as obras, é morta em si mesma.'
      },
      {
        bookAbbrev: 'rm',
        chapter: 3,
        verse: 28,
        label: 'Romanos 3:28',
        quote: 'Concluímos, pois, que o homem é justificado pela fé sem as obras da lei.'
      }
    ]
  },
  {
    id: 'nascer-de-novo',
    category: 'Salvação & Graça',
    question: 'O que significa "nascer de novo" segundo Jesus em João 3?',
    shortAnswer: 'Nascer de novo (regeneração) é a obra sobrenatural do Espírito Santo que dá vida espiritual ao pecador, transformando seu coração de pedra em um coração novo que ama a Deus.',
    detailedExplanation: [
      'Quando Nicodemos, um líder religioso moralmente exemplar e profundo conhecedor das Escrituras, procurou Jesus à noite, Cristo lhe declarou: "Na verdade, na verdade te digo que aquele que não nascer de novo, não pode ver o reino de Deus" (João 3:3). Isso mostra que religiosidade, tradição familiar ou frequência à igreja não regeneram a alma.',
      'Nascer da água e do Espírito (João 3:5) refere-se à promessa do Antigo Testamento em Ezequiel 36:25-27: a purificação espiritual dos pecados ("água pura") e a implantação de um novo espírito pelo Espírito Santo de Deus.',
      'Quem nasce de novo passa da morte espiritual para a vida (Efésios 2:1-5), torna-se nova criatura em Cristo (2 Coríntios 5:17) e recebe a adoção como filho amado de Deus (João 1:12).'
    ],
    practicalApplication: 'Avalie se sua fé é apenas um hábito cultural ou um relacionamento vivo com Cristo. Peça diariamente que o Espírito Santo renove sua mente e seus afetos pelas coisas do alto.',
    keywords: ['nascer de novo', 'regeneração', 'nicodemos', 'joão 3', 'conversão', 'novo nascimento', 'nova criatura', 'batismo'],
    references: [
      {
        bookAbbrev: 'jo',
        chapter: 3,
        verse: 3,
        label: 'João 3:3',
        quote: 'Jesus respondeu, e disse-lhe: Na verdade, na verdade te digo que aquele que não nascer de novo, não pode ver o reino de Deus.'
      },
      {
        bookAbbrev: '2co',
        chapter: 5,
        verse: 17,
        label: '2 Coríntios 5:17',
        quote: 'Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo.'
      },
      {
        bookAbbrev: 'ez',
        chapter: 36,
        verse: 26,
        label: 'Ezequiel 36:26',
        quote: 'E dar-vos-ei um coração novo, e porei dentro de vós um espírito novo; e tirarei da vossa carne o coração de pedra.'
      }
    ]
  },

  // ─── 2. VIDA CRISTÃ & SANTIFICAÇÃO ────────────────────────────────────
  {
    id: 'luta-contra-o-pecado',
    category: 'Vida Cristã & Santificação',
    question: 'Por que ainda luto contra tentações e pecados mesmo depois de me converter?',
    shortAnswer: 'Na conversão somos libertos da condenação e da escravidão do pecado, mas enquanto estivermos neste corpo mortal travamos uma batalha diária entre a carne (velha natureza) e o Espírito Santo.',
    detailedExplanation: [
      'A Bíblia distingue três tempos da salvação: (1) Justificação (já fomos salvos da culpa e penalidade do pecado); (2) Santificação (estamos sendo salvos progressivamente do poder do pecado); e (3) Glorificação (seremos salvos até da presença do pecado na volta de Cristo).',
      'Em Romanos 7:15-25 e Gálatas 5:16-17, o apóstolo Paulo descreve a luta real do cristão maduro: "Porque a carne cobiça contra o Espírito, e o Espírito contra a carne; e estes opõem-se um ao outro". Antes da conversão, a pessoa estava morta no pecado e seguia o curso do mundo sem conflito espiritual; o próprio fato de hoje haver guerra dentro de você é sinal de que o Espírito Santo habita em você!',
      'Contudo, o cristão não é chamado ao conformismo, mas à mortificação do pecado pelo poder do Espírito (Romanos 8:13), sabendo que Deus sempre provê o escape na tentação (1 Coríntios 10:13).'
    ],
    practicalApplication: 'Não lute sozinho nem esconda suas quedas na escuridão. Alimente o Espírito com a Palavra e a oração, corte gatilhos de tentação com firmeza prática (Mateus 5:29-30) e caminhe em comunhão e prestação de contas na igreja local.',
    keywords: ['luta contra o pecado', 'tentação', 'vício', 'cair em pecado', 'santificação', 'carne', 'espírito', 'romanos 7', 'fraqueza'],
    references: [
      {
        bookAbbrev: 'gl',
        chapter: 5,
        verse: 16,
        label: 'Gálatas 5:16-17',
        quote: 'Digo, porém: Andai em Espírito, e não cumprireis a concupiscência da carne.'
      },
      {
        bookAbbrev: '1co',
        chapter: 10,
        verse: 13,
        label: '1 Coríntios 10:13',
        quote: 'Fiel é Deus, que não vos deixará tentar acima do que podeis, antes com a tentação dará também o escape, para que a possais suportar.'
      },
      {
        bookAbbrev: 'rm',
        chapter: 8,
        verse: 1,
        label: 'Romanos 8:1',
        quote: 'Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito.'
      }
    ]
  },
  {
    id: 'ansiedade-e-depressao',
    category: 'Vida Cristã & Santificação',
    question: 'Sentir ansiedade, angústia ou depressão significa falta de fé? O que a Bíblia diz?',
    shortAnswer: 'Não é vergonha nem prova de incredulidade enfrentar angústia emocional ou exaustão. Grandes servos de Deus como Davi, Elias, Jeremias e Paulo passaram por profunda aflição de alma e encontraram acolhimento e cura no Senhor.',
    detailedExplanation: [
      'A Bíblia trata o ser humano de forma integral: corpo, alma (mente/emoções) e espírito (1 Tessalonicenses 5:23). Em 1 Reis 19, após uma grande vitória no Monte Carmelo, o profeta Elias ficou tão exausto e angustiado que pediu a morte. Como Deus o tratou? Não o repreendeu com dureza; primeiro enviou um anjo com pão, água e descanso físico, e depois falou com ele numa brisa suave.',
      'Nos Salmos (como os Salmos 42, 43 e 88), vemos servos fiéis perguntando: "Por que estás abatida, ó minha alma, e por que te perturbas dentro de mim? Espera em Deus" (Salmos 42:5). Até mesmo o Senhor Jesus no Getsêmani disse: "A minha alma está cheia de tristeza até a morte" (Mateus 26:38), sendo capaz de se compadecer das nossas fraquezas.',
      'A fé cristã nos ensina a lançar toda a nossa ansiedade sobre Deus porque Ele tem cuidado de nós (1 Pedro 5:7), unindo a oração, a renovação da mente pela Palavra, a comunhão fraterna e, quando necessário, o cuidado médico e psicológico responsável (afinal, Lucas era o "médico amado", Cl 4:14).'
    ],
    practicalApplication: 'Em momentos de crise de ansiedade, transforme cada preocupação em uma oração específica com ações de graças (Filipenses 4:6-7), medite no Salmo 23 e no Salmo 42, converse com seu pastor ou irmãos maduros e cuide também da sua saúde física e emocional sem culpa.',
    keywords: ['ansiedade', 'depressão', 'tristeza', 'angústia', 'medo', 'pânico', 'desânimo', 'elias', 'davi', 'saúde mental', 'psicólogo'],
    references: [
      {
        bookAbbrev: 'fp',
        chapter: 4,
        verse: 6,
        label: 'Filipenses 4:6-7',
        quote: 'Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações.'
      },
      {
        bookAbbrev: '1pe',
        chapter: 5,
        verse: 7,
        label: '1 Pedro 5:7',
        quote: 'Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.'
      },
      {
        bookAbbrev: 'sl',
        chapter: 42,
        verse: 11,
        label: 'Salmos 42:11',
        quote: 'Por que estás abatida, ó minha alma, e por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, o qual é a salvação da minha face, e o meu Deus.'
      }
    ]
  },
  {
    id: 'ouvir-a-voz-de-deus',
    category: 'Vida Cristã & Santificação',
    question: 'Como ouvir a voz de Deus e descobrir a vontade dEle para a minha vida?',
    shortAnswer: 'A voz primária, infalível e suficiente de Deus hoje é a Bíblia Sagrada iluminada pelo Espírito Santo. Se você quer ouvir a voz de Deus com clareza, leia a Escritura.',
    detailedExplanation: [
      'Muitos cristãos ficam paralisados esperando sinais místicos, arrepios ou sonhos para saber a vontade de Deus, enquanto deixam a Bíblia fechada. Hebreus 1:1-2 declara que nestes últimos dias Deus nos falou pelo Filho, cuja revelação está plenamente registrada nas Escrituras.',
      'A teologia bíblica distingue entre a "vontade decretiva/secreta" de Deus (o futuro que só pertence ao Senhor, Deuteronômio 29:29) e a "vontade preceptiva/revelada" de Deus (aquilo que Ele já ordenou claramente na Bíblia: nossa santificação, amor, honestidade, perdão e serviço, 1 Tessalonicenses 4:3; Romanos 12:1-2).',
      'Quando vivemos obedecendo à vontade revelada de Deus na Bíblia, renovamos nossa mente (Romanos 12:2), pedimos sabedoria em oração (Tiago 1:5) e ouvimos conselheiros piedosos (Provérbios 11:14), o Senhor dirige nossos passos com paz e discernimento nas decisões práticas da vida (carreira, mudança, casamento).'
    ],
    practicalApplication: 'Antes de tomar qualquer decisão importante, faça três perguntas bíblicas: (1) Isso viola algum princípio das Escrituras? (2) Isso glorifica a Cristo e edifica minha fé? (3) Há paz no coração após orar e ouvir irmãos maduros na fé?',
    keywords: ['voz de deus', 'vontade de deus', 'direção', 'propósito', 'decisão', 'chamado', 'sinal', 'como ouvir deus', 'orientação'],
    references: [
      {
        bookAbbrev: 'rm',
        chapter: 12,
        verse: 2,
        label: 'Romanos 12:2',
        quote: 'E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.'
      },
      {
        bookAbbrev: 'sl',
        chapter: 119,
        verse: 105,
        label: 'Salmos 119:105',
        quote: 'Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.'
      },
      {
        bookAbbrev: 'tg',
        chapter: 1,
        verse: 5,
        label: 'Tiago 1:5',
        quote: 'E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada.'
      }
    ]
  },
  {
    id: 'frieza-espiritual-nao-sinto-nada',
    category: 'Vida Cristã & Santificação',
    question: 'Não sinto nada quando oro ou leio a Bíblia. Deus se afastou de mim?',
    shortAnswer: 'A presença de Deus não depende das nossas emoções momentâneas. A fé cristã é firmada nas promessas imutáveis da Palavra, não em arrepios ou sentimentos.',
    detailedExplanation: [
      'Vivemos em uma cultura hiperemocional que confunde espiritualidade com sensações físicas ou euforia. Porém, as Escrituras nos ensinam que "andamos por fé, e não por vista" (2 Coríntios 5:7). Os sentimentos humanos variam conforme o cansaço, o sono, o estresse e as lutas do dia a dia, mas Deus permanece fiel e imutável (Tiago 1:17).',
      'Passar por períodos de "deserto espiritual" ou aridez é algo que o próprio rei Davi experimentou (Salmos 13:1; Salmos 63:1). Às vezes, o Senhor permite que as consolações emocionais diminuam para purificar nossa fé, ensinando-nos a buscar o Doador em si mesmo, e não apenas as sensações que Ele dá.',
      'Contudo, vale examinar o coração com sinceridade: se a frieza veio por causa de algum pecado oculto não confessado (Salmos 32:3-5), falta de perdão ou abandono da comunhão com a igreja, o caminho de volta é o arrependimento imediato (Apocalipse 2:4-5).'
    ],
    practicalApplication: 'Continue orando e lendo a Palavra mesmo nos dias em que não "sentir" vontade — é justamente nesses dias que sua oração demonstra fidelidade e amor real a Deus. Ore os Salmos em voz alta e confesse: "Senhor, mesmo quando meu coração está seco, Tu estás comigo como prometeste em Mateus 28:20".',
    keywords: ['frieza espiritual', 'não sinto deus', 'deserto', 'orar', 'sentimento', 'arrepio', 'afastado', 'desanimado na fé', 'seco'],
    references: [
      {
        bookAbbrev: '2co',
        chapter: 5,
        verse: 7,
        label: '2 Coríntios 5:7',
        quote: 'Porque andamos por fé, e não por vista.'
      },
      {
        bookAbbrev: 'tg',
        chapter: 4,
        verse: 8,
        label: 'Tiago 4:8',
        quote: 'Chegai-vos a Deus, e ele se chegará a vós.'
      },
      {
        bookAbbrev: 'sl',
        chapter: 63,
        verse: 1,
        label: 'Salmos 63:1',
        quote: 'Ó Deus, tu és o meu Deus, de madrugada te buscarei; a minha alma tem sede de ti; a minha carne te deseja muito em uma terra seca e cansada, onde não há água.'
      }
    ]
  },
  {
    id: 'como-perdoar-quem-feriu',
    category: 'Vida Cristã & Santificação',
    question: 'Como perdoar alguém que me feriu profundamente? Perdoar obriga a conviver com quem é abusivo?',
    shortAnswer: 'Perdoar é uma decisão de fé e obediência que entrega a dívida e a justiça nas mãos de Deus, libertando o seu coração do ódio; porém, perdão bíblico não significa aprovar o erro nem se expor novamente a abusos.',
    detailedExplanation: [
      'Na parábola do credor incompassivo (Mateus 18:21-35), Jesus mostra a base do perdão cristão: nós fomos perdoados por Deus de uma dívida impagável (dez mil talentos); por isso, somos chamados a liberar aqueles que nos ofenderam (Efésios 4:32). O perdão não começa como um sentimento espontâneo, mas como um ato de vontade diante de Deus: "Senhor, eu abro mão do direito de me vingar e entrego essa causa ao Teu justo juízo" (Romanos 12:19).',
      'É fundamental distinguir entre **perdão** e **reconciliação/confiança**: o perdão depende apenas de você e de Deus (Marcos 11:25), mas a restauração da convivência e da confiança exige arrependimento genuíno, mudança de conduta e segurança (Lucas 17:3; Provérbios 22:3).',
      'Se alguém praticou violência, abuso ou traição contínua sem arrependimento, perdoar significa não desejar o mal nem alimentar amargura, mas estabelecer limites sábios (e até acionar a justiça civil, que é instituída por Deus segundo Romanos 13:1-4) é totalmente bíblico.'
    ],
    practicalApplication: 'Sempre que a lembrança da ofensa voltar trazendo dor, ore pela pessoa e reafirme diante de Deus sua decisão de perdoar. Peça ao Espírito Santo que cure as feridas da sua memória com o bálsamo do amor de Cristo.',
    keywords: ['perdão', 'perdoar', 'mágoa', 'rancor', 'amargura', 'ofensa', 'traição', 'abuso', 'vingança', 'esquecer'],
    references: [
      {
        bookAbbrev: 'ef',
        chapter: 4,
        verse: 32,
        label: 'Efésios 4:32',
        quote: 'Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.'
      },
      {
        bookAbbrev: 'rm',
        chapter: 12,
        verse: 18,
        label: 'Romanos 12:18-19',
        quote: 'Se for possível, quanto estiver em vós, tende paz com todos os homens. Não vos vingueis a vós mesmos, amados, mas dai lugar à ira, porque está escrito: Minha é a vingança; eu recompensarei, diz o Senhor.'
      },
      {
        bookAbbrev: 'cl',
        chapter: 3,
        verse: 13,
        label: 'Colossenses 3:13',
        quote: 'Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.'
      }
    ]
  },

  // ─── 3. DOUTRINA & TEOLOGIA ───────────────────────────────────────────
  {
    id: 'doutrina-da-trindade',
    category: 'Doutrina & Teologia',
    question: 'Como entender e explicar a Santíssima Trindade? Cremos em um só Deus ou em três?',
    shortAnswer: 'Os cristãos creem em um único e verdadeiro Deus (Monoteísmo), que subsiste eternamente em três Pessoas distintas e coiguais: o Pai, o Filho (Jesus Cristo) e o Espírito Santo.',
    detailedExplanation: [
      'Embora a palavra "Trindade" seja um termo teológico que resume o ensino bíblico, a verdade da Trindade está presente em toda a Escritura. A Bíblia ensina três verdades simultâneas e inegociáveis:',
      '1. Há apenas um único Deus verdadeiro (Deuteronômio 6:4; Isaías 45:5; 1 Coríntios 8:4).',
      '2. O Pai é Deus (Filipenses 1:2), Jesus Cristo (o Filho) é plenamente Deus (João 1:1; João 20:28; Tito 2:13; Hebreus 1:8) e o Espírito Santo é plenamente Deus e uma Pessoa divina, não uma força impessoal (Atos 5:3-4; 1 Coríntios 12:11).',
      '3. As três Pessoas são distintas entre si e se relacionam em amor eterno: no Batismo de Jesus (Mateus 3:16-17), o Filho é batizado, o Espírito Santo desce como pomba e o Pai fala dos céus; e na Grande Comissão, Jesus ordena batizar "em nome [no singular!] do Pai, e do Filho, e do Espírito Santo" (Mateus 28:19).'
    ],
    practicalApplication: 'Adore a Deus em Sua plenitude trinitária: na oração, dirigimo-nos ao Pai, em nome e pelos méritos do Filho (Jesus), no poder e assistência do Espírito Santo (Efésios 2:18).',
    keywords: ['trindade', 'pai filho espirito santo', 'jesus é deus', 'espirito santo é uma pessoa', 'monoteísmo', 'unicismo', 'divindade de cristo'],
    references: [
      {
        bookAbbrev: 'mt',
        chapter: 28,
        verse: 19,
        label: 'Mateus 28:19',
        quote: 'Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo.'
      },
      {
        bookAbbrev: '2co',
        chapter: 13,
        verse: 13,
        label: '2 Coríntios 13:13',
        quote: 'A graça do Senhor Jesus Cristo, e o amor de Deus, e a comunhão do Espírito Santo seja com todos vós. Amém.'
      },
      {
        bookAbbrev: 'jo',
        chapter: 1,
        verse: 1,
        label: 'João 1:1',
        quote: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.'
      }
    ]
  },
  {
    id: 'por-que-66-livros-apocrifos',
    category: 'Doutrina & Teologia',
    question: 'Por que a Bíblia evangélica tem 66 livros e não inclui os livros apócrifos/deuterocanônicos?',
    shortAnswer: 'A Bíblia evangélica segue o cânon hebraico original do Antigo Testamento (reconhecido por Jesus e pelos apóstolos, com 39 livros) somado aos 27 livros apostólicos do Novo Testamento, totalizando 66 livros divinamente inspirados.',
    detailedExplanation: [
      'O Antigo Testamento foi escrito originalmente em hebraico (com pequenos trechos em aramaico) e confiado ao povo judeu (Romanos 3:2). Esse cânon hebraico continha exatamente a matéria dos nossos 39 livros atuais, dividida em três partes mencionadas pelo próprio Jesus em Lucas 24:44: a Lei de Moisés, os Profetas e os Salmos (Escritos).',
      'Os chamados livros "apócrifos" ou "deuterocanônicos" (como Tobias, Judite, 1 e 2 Macabeus, Eclesiástico, Sabedoria e Baruque) foram escritos no período intertestamentário (entre Malaquias e Mateus), quando os próprios judeus reconheciam que a voz profética havia cessado temporariamente. Nem Jesus nem os autores do Novo Testamento jamais citaram qualquer livro apócrifo como "Está escrito" ou "Assim diz o Senhor".',
      'Além disso, esses livros contêm erros históricos/geográficos e ensinos que contradizem o restante das Escrituras (como oração pelos mortos em 2 Macabeus 12:43-45 e esmola expiando pecados em Tobias 12:9). Por isso, os Reformadores do século XVI mantiveram-se fiéis ao cânon hebraico original de 39 livros no AT e aos 27 livros do NT (reconhecidos universalmente pela Igreja primitiva).'
    ],
    practicalApplication: 'Agradeça a Deus pela preservação fiel das Sagradas Escrituras e dedique-se a conhecer profundamente os 66 livros inspirados, que são plenamente suficientes para toda boa obra (2 Timóteo 3:16-17).',
    keywords: ['66 livros', 'apócrifos', 'deuterocanônicos', 'bíblia católica', 'cânon', 'macabeus', 'tobias', '73 livros', 'inspiração'],
    references: [
      {
        bookAbbrev: 'lc',
        chapter: 24,
        verse: 44,
        label: 'Lucas 24:44',
        quote: 'E disse-lhes: São estas as palavras que vos disse estando ainda convosco: Que convinha que se cumprisse tudo o que de mim estava escrito na lei de Moisés, e nos profetas e nos Salmos.'
      },
      {
        bookAbbrev: 'rm',
        chapter: 3,
        verse: 2,
        label: 'Romanos 3:2',
        quote: 'Muita, em toda a maneira, porque, primeiramente, as palavras de Deus lhe foram confiadas.'
      },
      {
        bookAbbrev: '2tm',
        chapter: 3,
        verse: 16,
        label: '2 Timóteo 3:16-17',
        quote: 'Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redarguir, para corrigir, para instruir em justiça; para que o homem de Deus seja perfeito, e perfeitamente instruído para toda a boa obra.'
      }
    ]
  },
  {
    id: 'unico-mediador-maria-santos',
    category: 'Doutrina & Teologia',
    question: 'Qual a visão bíblica evangélica sobre Maria e os santos? Devemos pedir intercessão a eles?',
    shortAnswer: 'Honramos Maria como uma mulher piedosa, humilde e bem-aventurada escolhida por Deus para ser a mãe humana de Jesus, mas a Bíblia ensina claramente que somente Jesus Cristo é o Mediador entre Deus e os homens.',
    detailedExplanation: [
      'Longe de desrespeitar Maria, os cristãos evangélicos a admiram como exemplo de fé e submissão à Palavra de Deus ("Eis aqui a serva do Senhor", Lucas 1:38). Contudo, a própria Maria reconheceu que precisava de um Salvador ao orar no Magnificat: "E o meu espírito se alegra em Deus meu Salvador" (Lucas 1:47), e sua última instrução registrada nos Evangelhos aponta diretamente para Jesus: "Fazei tudo quanto ele vos disser" (João 2:5).',
      'Nas Escrituras, nenhum apóstolo ou cristão da Igreja primitiva jamais orou a Maria ou a santos falecidos. Pelo contrário, 1 Timóteo 2:5 declara de forma absoluta: "Porque há um só Deus, e um só Mediador entre Deus e os homens, Jesus Cristo homem". Somente Deus é onisciente e onipresente para ouvir simultaneamente as orações de milhões de pessoas em todo o mundo.',
      'Quanto à palavra "santos", no Novo Testamento ela nunca designa uma casta especial de pessoas canonizadas após a morte, mas todos os cristãos vivos lavados pelo sangue de Jesus (1 Coríntios 1:2; Filipenses 1:1).'
    ],
    practicalApplication: 'Dirija todas as suas orações diretamente ao Pai em nome do Senhor Jesus Cristo (João 14:6, 13-14; Hebreus 4:16), pois Ele mesmo vive sempre para interceder por nós (Hebreus 7:25).',
    keywords: ['maria', 'santos', 'intercessão', 'mediador', 'veneração', 'idolatria', 'imagens', 'oração aos santos', 'mãe de jesus'],
    references: [
      {
        bookAbbrev: '1tm',
        chapter: 2,
        verse: 5,
        label: '1 Timóteo 2:5',
        quote: 'Porque há um só Deus, e um só Mediador entre Deus e os homens, Jesus Cristo homem.'
      },
      {
        bookAbbrev: 'jo',
        chapter: 14,
        verse: 6,
        label: 'João 14:6',
        quote: 'Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.'
      },
      {
        bookAbbrev: 'hb',
        chapter: 7,
        verse: 25,
        label: 'Hebreus 7:25',
        quote: 'Portanto, pode também salvar perfeitamente os que por ele se chegam a Deus, vivendo sempre para interceder por eles.'
      }
    ]
  },
  {
    id: 'batismo-e-santa-ceia',
    category: 'Doutrina & Teologia',
    question: 'Qual o significado do Batismo nas Águas e da Santa Ceia do Senhor?',
    shortAnswer: 'São as duas ordenanças instituídas pelo próprio Senhor Jesus para a Sua Igreja: o Batismo é o testemunho público da união com Cristo em Sua morte e ressurreição, e a Santa Ceia é o memorial contínuo do Seu sacrifício até que Ele volte.',
    detailedExplanation: [
      'A água do batismo em si não possui poder mágico para lavar pecados (o ladrão na cruz foi salvo sem poder ser batizado, Lucas 23:43; quem limpa o pecado é o sangue de Jesus, 1 João 1:7). Porém, o batismo é o primeiro passo de obediência pública de quem creu e se arrependeu (Atos 2:38; Marcos 16:16). Conforme Romanos 6:3-4, descer às águas simboliza morrer para a velha vida, e emergir simboliza ressuscitar com Cristo para andar em novidade de vida.',
      'A Santa Ceia (1 Coríntios 11:23-29) foi instituída por Jesus na noite em que foi traído. O pão representa o Seu corpo entregue por nós, e o cálice representa a Nova Aliança no Seu sangue derramado para remissão de pecados.',
      'Participar da Ceia não exige que o cristão seja "perfeito e sem falhas" (pois nenhum de nós é digno por mérito próprio), mas que examine o próprio coração com reverência, arrependimento sincero e comunhão com o Corpo de Cristo.'
    ],
    practicalApplication: 'Se você já entregou sua vida a Jesus e ainda não foi batizado, procure o pastor da sua igreja local para dar esse belo testemunho público de fé. E nunca deixe de participar da Santa Ceia por sentimento de indignidade: confesse seus pecados a Deus e celebre a graça da Cruz!',
    keywords: ['batismo', 'santa ceia', 'ceia do senhor', 'pão e vinho', 'ordenanças', 'sacramentos', 'tomar ceia', 'indignamente'],
    references: [
      {
        bookAbbrev: 'rm',
        chapter: 6,
        verse: 4,
        label: 'Romanos 6:4',
        quote: 'De sorte que fomos sepultados com ele pelo batismo na morte; para que, como Cristo ressuscitou dos mortos, pela glória do Pai, assim andemos nós também em novidade de vida.'
      },
      {
        bookAbbrev: '1co',
        chapter: 11,
        verse: 26,
        label: '1 Coríntios 11:26',
        quote: 'Porque todas as vezes que comerdes este pão e beberdes este cálice anunciais a morte do Senhor, até que venha.'
      },
      {
        bookAbbrev: 'at',
        chapter: 2,
        verse: 38,
        label: 'Atos 2:38',
        quote: 'E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão dos pecados.'
      }
    ]
  },
  {
    id: 'morte-reencarnacao-espiritos',
    category: 'Doutrina & Teologia',
    question: 'O que acontece quando morremos? Existe reencarnação ou comunicação com os mortos segundo a Bíblia?',
    shortAnswer: 'A Bíblia nega categoricamente a reencarnação e proíbe a consulta aos mortos. O ser humano vive uma única vida terrena; após a morte, os salvos em Cristo vão imediatamente estar com o Senhor em paz consciente.',
    detailedExplanation: [
      'Hebreus 9:27 estabelece uma verdade inegociável: "Aos homens está ordenado morrerem uma vez, vindo depois disso o juízo". Não existem vidas passadas nem carma; toda a nossa dívida espiritual foi paga de uma só vez por Jesus Cristo na cruz (Hebreus 9:28), tornando a ideia de reencarnação incompatível com o Evangelho da graça.',
      'Sobre para onde vão os salvos ao morrer: Jesus disse ao ladrão arrependido na cruz: "Hoje estarás comigo no Paraíso" (Lucas 23:43). O apóstolo Paulo afirmou que "deixar este corpo é habitar com o Senhor" (2 Coríntios 5:8) e que "partir e estar com Cristo é incomparavelmente melhor" (Filipenses 1:23). Na vinda de Jesus, esse espírito já salvo junto ao Senhor receberá um corpo glorificado e incorruptível na ressurreição (1 Coríntios 15:51-54).',
      'Na parábola do Rico e Lázaro (Lucas 16:19-31) e em Deuteronômio 18:10-12, a Escritura mostra que há um grande abismo intransponível entre o mundo dos mortos e o dos vivos: os mortos não voltam para dar recados, e Deus proíbe qualquer prática de necromancia ou consulta mediúnica para proteger Seu povo de enganos espirituais.'
    ],
    practicalApplication: 'Consolide sua esperança na vida eterna conquistada por Cristo. Se você perdeu um ente querido que cria em Jesus, console seu coração: ele não está vagando nem dormindo no nada, mas vivo e em plena paz na presença do Salvador (1 Tessalonicenses 4:13-14).',
    keywords: ['morte', 'para onde vamos', 'reencarnação', 'espiritismo', 'mortos', 'consulta aos mortos', 'paraíso', 'céu', 'inferno', 'sono da alma'],
    references: [
      {
        bookAbbrev: 'hb',
        chapter: 9,
        verse: 27,
        label: 'Hebreus 9:27',
        quote: 'E, como aos homens está ordenado morrerem uma vez, vindo depois disso o juízo.'
      },
      {
        bookAbbrev: 'fp',
        chapter: 1,
        verse: 23,
        label: 'Filipenses 1:23',
        quote: 'Mas de ambos os lados estou em aperto, tendo desejo de partir, e estar com Cristo, porque isto é ainda muito melhor.'
      },
      {
        bookAbbrev: 'lc',
        chapter: 23,
        verse: 43,
        label: 'Lucas 23:43',
        quote: 'E disse-lhe Jesus: Em verdade te digo que hoje estarás comigo no Paraíso.'
      }
    ]
  },

  // ─── 4. APOLOGÉTICA & DIFICULDADES BÍBLICAS ───────────────────────────
  {
    id: 'problema-do-mal-sofrimento',
    category: 'Apologética & Dificuldades Bíblicas',
    question: 'Se Deus é bom e todo-poderoso, por que Ele permite o mal e o sofrimento no mundo?',
    shortAnswer: 'Deus não criou o mal; o sofrimento entrou na criação por causa da rebelião humana (a Queda em Gênesis 3). Deus não é indiferente à nossa dor: em Jesus Cristo, o próprio Deus entrou na história, sofreu na cruz para vencer o mal pela raiz e garante que um dia enxugará toda lágrima.',
    detailedExplanation: [
      'Deus criou um mundo perfeito ("muito bom", Gênesis 1:31) e dotou os seres humanos da capacidade real de amar e escolher, pois o amor verdadeiro não pode ser programado à força como em robôs. Quando a humanidade escolheu rebelar-se contra Deus (Gênesis 3), toda a criação foi afetada pela corrupção moral e natural (Romanos 8:20-22).',
      'Se Deus destruísse instantaneamente toda fonte de mal no mundo hoje às 23h59, quem de nós sobreviveria às 00h00? A paciência de Deus em ainda não ter encerrado a história com o Juízo Final é, na verdade, a Sua misericórdia dando tempo para que pecadores se arrependam e sejam salvos (2 Pedro 3:9).',
      'Mais do que oferecer uma explicação filosófica fria, o Cristianismo oferece a **Cruz de Cristo**: o nosso Deus conhece a dor da traição, da injustiça, do luto e da morte. Além disso, Ele é tão soberano que transforma até o sofrimento em instrumento de maturidade e bem eterno para os que O amam (Romanos 8:28; Gênesis 50:20).'
    ],
    practicalApplication: 'Nos dias de dor, não se afaste de Deus tentando carregar o fardo sozinho. Olhe para as cicatrizes de Jesus ressurreto: elas provam que o amor de Deus por você é real e que o sofrimento tem prazo de validade.',
    keywords: ['sofrimento', 'mal', 'por que deus permite', 'tragédia', 'doença', 'injustiça', 'luto', 'jó', 'teodiceia'],
    references: [
      {
        bookAbbrev: 'rm',
        chapter: 8,
        verse: 28,
        label: 'Romanos 8:28',
        quote: 'E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.'
      },
      {
        bookAbbrev: 'jo',
        chapter: 16,
        verse: 33,
        label: 'João 16:33',
        quote: 'Tenho-vos dito isto, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo.'
      },
      {
        bookAbbrev: 'ap',
        chapter: 21,
        verse: 4,
        label: 'Apocalipse 21:4',
        quote: 'E Deus limpará de seus olhos toda a lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor; porque já as primeiras coisas são passadas.'
      }
    ]
  },
  {
    id: 'confiabilidade-da-biblia-adulterada',
    category: 'Apologética & Dificuldades Bíblicas',
    question: 'A Bíblia foi alterada ou adulterada ao longo dos séculos? Podemos confiar nos textos atuais?',
    shortAnswer: 'Não foi adulterada. A Bíblia Sagrada é, de longe, o documento mais bem atestado e preservado de toda a Antiguidade, comprovado por milhares de manuscritos antigos, pelos Manuscritos do Mar Morto e pela arqueologia.',
    detailedExplanation: [
      'Para comparar: obras clássicas da história antiga (como as de Platão, Aristóteles ou Júlio César) possuem entre 10 e 200 cópias manuscritas sobreviventes, datadas de 800 a 1.200 anos depois dos originais. Já o **Novo Testamento** possui mais de **5.800 manuscritos gregos** antigos e mais de 18.000 em outras línguas antigas (latim, siríaco, copta), com fragmentos (como o Papiro P52 de João) datados de poucas décadas após a escrita original!',
      'Quanto ao **Antigo Testamento**, em 1947 foram descobertos os **Manuscritos do Mar Morto** nas cavernas de Qumran (incluindo o Grande Rolo de Isaías completo, datado de c. 125 a.C. — mil anos mais antigo que os manuscritos massoréticos usados até então). Ao compararem os textos, os estudiosos comprovaram que a mensagem bíblica permaneceu intacta ao longo de mais de um milênio!',
      'Como não existia um único centro controlador dos manuscritos (já que no século I e II as cópias já estavam espalhadas pela Palestina, Síria, Turquia, Grécia, Egito e Roma), seria historicamente impossível alguém "recolher e adulterar" a Bíblia sem que milhares de comunidades denunciassem imediatamente.'
    ],
    practicalApplication: 'Leia sua Bíblia com plena confiança intelectual e espiritual: você tem em mãos a mesma Palavra de Deus sobre a qual Jesus afirmou: "Passará o céu e a terra, mas as minhas palavras não hão de passar" (Mateus 24:35).',
    keywords: ['bíblia adulterada', 'alterada', 'manuscritos', 'mar morto', 'confiável', 'tradução', 'história da bíblia', 'arqueologia', 'evidências'],
    references: [
      {
        bookAbbrev: 'is',
        chapter: 40,
        verse: 8,
        label: 'Isaías 40:8',
        quote: 'Seca-se a erva, e cai a flor, porém a palavra de nosso Deus subsiste eternamente.'
      },
      {
        bookAbbrev: 'mt',
        chapter: 24,
        verse: 35,
        label: 'Mateus 24:35',
        quote: 'O céu e a terra passarão, mas as minhas palavras não hão de passar.'
      },
      {
        bookAbbrev: '2pe',
        chapter: 1,
        verse: 21,
        label: '2 Pedro 1:21',
        quote: 'Porque a profecia nunca foi produzida por vontade de homem algum, mas os homens santos de Deus falaram inspirados pelo Espírito Santo.'
      }
    ]
  },
  {
    id: 'esposa-de-caim',
    category: 'Apologética & Dificuldades Bíblicas',
    question: 'Com quem Caim se casou em Gênesis 4 se só existiam Adão, Eva e seus filhos?',
    shortAnswer: 'Gênesis 5:4 declara explicitamente que Adão e Eva geraram "filhos e filhas" ao longo de novecentos anos. Caim casou-se com uma de suas irmãs ou sobrinhas, o que na primeira geração da humanidade era necessário e geneticamente puro.',
    detailedExplanation: [
      'A Bíblia registra nominalmente apenas alguns filhos de Adão e Eva (Caim, Abel e Sete) por causa da linhagem redentora, mas Gênesis 5:4 afirma claramente: "E foram os dias de Adão, depois que gerou a Sete, oitocentos anos, e gerou filhos e filhas". Como a longevidade inicial passava de 900 anos, Adão e Eva tiveram dezenas de filhos e filhas.',
      'Na origem da raça humana — partindo de um único casal (Atos 17:26) —, a única forma de a humanidade se multiplicar na primeira geração era o casamento entre irmãos ou parentes próximos. Naquele início da criação, o código genético humano ainda não havia acumulado as mutações degenerativas que hoje tornam casamentos consanguíneos perigosos.',
      'Séculos mais tarde, quando a população já era numerosa e as mutações genéticas tornaram a consanguinidade prejudicial, Deus proibiu expressamente o casamento entre parentes próximos na Lei de Moisés (Levítico 18:6-18).'
    ],
    practicalApplication: 'Perceba como muitas "supostas contradições" da Bíblia se resolvem simplesmente lendo o capítulo seguinte com atenção ao contexto!',
    keywords: ['caim', 'esposa de caim', 'mulher de caim', 'adão e eva', 'gênesis 4', 'irmã', 'parentes'],
    references: [
      {
        bookAbbrev: 'gn',
        chapter: 5,
        verse: 4,
        label: 'Gênesis 5:4',
        quote: 'E foram os dias de Adão, depois que gerou a Sete, oitocentos anos, e gerou filhos e filhas.'
      },
      {
        bookAbbrev: 'at',
        chapter: 17,
        verse: 26,
        label: 'Atos 17:26',
        quote: 'E de um só sangue fez toda a geração dos homens, para habitar sobre toda a face da terra.'
      }
    ]
  },
  {
    id: 'fe-e-ciencia',
    category: 'Apologética & Dificuldades Bíblicas',
    question: 'Fé cristã e Ciência são inimigas? Um cristão pode amar a ciência e os estudos?',
    shortAnswer: 'De forma alguma são inimigas! Deus é o Autor tanto das Escrituras (revelação especial) quanto das leis da natureza (revelação geral). Os próprios fundadores da ciência moderna (Newton, Kepler, Pascal, Boyle, Faraday) eram cristãos devotos.',
    detailedExplanation: [
      'A ciência moderna nasceu historicamente em solo cristão porque os cientistas criam que o universo não é fruto do caos irracional, mas obra de um Criador racional, ordeiro e legislador — portanto, a natureza possui leis matemáticas constantes que podem ser investigadas!',
      'O Salmo 19:1-2 declara: "Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos". Enquanto a **Ciência** investiga o *como* os mecanismos físicos e biológicos operam, a **Bíblia** revela *Quem* os criou e *por que* existimos.',
      'Estudar medicina, engenharia, programação, física ou história com excelência para servir ao próximo e desvendar a ordem da criação é uma forma legítima de cumprir o mandato cultural e amar a Deus "de todo o teu entendimento" (Mateus 22:37).'
    ],
    practicalApplication: 'Estude e trabalhe com excelência intelectual sem medo de perguntas difíceis: toda verdade científica genuína aponta para a sabedoria multiforme do nosso Criador (Romanos 1:20).',
    keywords: ['ciência', 'fé e razão', 'universidade', 'faculdade', 'estudar', 'criação', 'universo', 'inteligência'],
    references: [
      {
        bookAbbrev: 'sl',
        chapter: 19,
        verse: 1,
        label: 'Salmos 19:1',
        quote: 'Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos.'
      },
      {
        bookAbbrev: 'rm',
        chapter: 1,
        verse: 20,
        label: 'Romanos 1:20',
        quote: 'Porque as suas coisas invisíveis, desde a criação do mundo, tanto o seu eterno poder, como a sua divindade, se entendem, e claramente se veem pelas coisas que estão criadas.'
      },
      {
        bookAbbrev: 'cl',
        chapter: 1,
        verse: 16,
        label: 'Colossenses 1:16-17',
        quote: 'Porque nele foram criadas todas as coisas que há nos céus e na terra... e todas as coisas subsistem por ele.'
      }
    ]
  },

  // ─── 5. FAMÍLIA, JOVENS & VOCAÇÃO ────────────────────────────────────
  {
    id: 'namoro-cristao-jugo-desigual',
    category: 'Família, Jovens & Vocação',
    question: 'O que a Bíblia ensina sobre namoro cristão, santidade e "jugo desigual" (namorar alguém não cristão)?',
    shortAnswer: 'O namoro cristão tem como propósito conhecer alguém visando o casamento sob o senhorio de Cristo. O "jugo desigual" (2 Coríntios 6:14) alerta que unir a vida conjugal com alguém que não compartilha da mesma fé em Jesus traz divisão espiritual profunda.',
    detailedExplanation: [
      'A metáfora do "jugo desigual" vem da agricultura antiga (Deuteronômio 22:10): colocar um boi e um jumento sob a mesma canga para arar a terra machucava ambos, porque tinham forças, passos e direções diferentes. Em 2 Coríntios 6:14-15, Paulo aplica isso às alianças íntimas da vida: "Não vos prendais a um jugo desigual com os infiéis; pois que sociedade tem a justiça com a injustiça? E que comunhão tem a luz com as trevas?".',
      'Casamento não é apenas afinidade emocional; é caminhar para a mesma direção eterna, educar filhos nos caminhos do Senhor e tomar decisões financeiras e morais sob a autoridade da Palavra. Entrar em um relacionamento pensando em "namorar para converter a pessoa"(o chamado namoro missionário) inverte a ordem bíblica e frequentemente afasta o próprio cristão de Deus.',
      'Além disso, a Bíblia chama os jovens a viverem o relacionamento em pureza, respeito mútuo e domínio próprio, honrando o corpo como templo do Espírito Santo (1 Coríntios 6:18-20; 1 Tessalonicenses 4:3-5) e guardando o coração (Provérbios 4:23).'
    ],
    practicalApplication: 'Ore pelo seu futuro cônjuge antes mesmo de começar a namorar, estabeleça limites claros de pureza e transparência desde o primeiro dia e busque alguém que ame a Jesus mais do que ama a você.',
    keywords: ['namoro', 'jugo desigual', 'casamento', 'pureza', 'santidade', 'jovens', 'namorar descrente', 'cônjuge', 'sexualidade'],
    references: [
      {
        bookAbbrev: '2co',
        chapter: 6,
        verse: 14,
        label: '2 Coríntios 6:14',
        quote: 'Não vos prendais a um jugo desigual com os infiéis; porque, que sociedade tem a justiça com a injustiça? E que comunhão tem a luz com as trevas?'
      },
      {
        bookAbbrev: '1ts',
        chapter: 4,
        verse: 3,
        label: '1 Tessalonicenses 4:3-4',
        quote: 'Porque esta é a vontade de Deus, a vossa santificação; que vos abstenhais da prostituição; que cada um de vós saiba possuir o seu vaso em santificação e honra.'
      },
      {
        bookAbbrev: 'pv',
        chapter: 4,
        verse: 23,
        label: 'Provérbios 4:23',
        quote: 'Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.'
      }
    ]
  },
  {
    id: 'liberdade-crista-entretenimento',
    category: 'Família, Jovens & Vocação',
    question: 'Cristão pode ouvir músicas seculares, assistir séries ou jogar? Qual o filtro bíblico para o entretenimento?',
    shortAnswer: 'O Evangelho não é uma lista legalista de proibições cegas, mas nos dá o discernimento do Espírito Santo: "Todas as coisas me são lícitas, mas nem todas as coisas convêm; e eu não me deixarei dominar por nenhuma" (1 Coríntios 6:12).',
    detailedExplanation: [
      'A Bíblia distingue entre coisas que são intrinsecamente pecaminosas em qualquer contexto (idolatria, imoralidade, mentira, blasfêmia) e áreas de cultura, arte, esporte e lazer que devem ser avaliadas com sabedoria espiritual (Filipenses 1:9-10). Apreciar boa música instrumental ou poética, praticar esportes ou se divertir em jogos de forma equilibrada faz parte da graça comum de Deus.',
      'Contudo, o apóstolo Paulo estabelece quatro filtros práticos infalíveis para o cristão avaliar qualquer entretenimento:',
      '1. **O Filtro da Edificação (1 Coríntios 10:23)**: Isso edifica minha mente ou desperta desejos carnais, violência, sensualidade e zombaria contra Deus? (Filipenses 4:8; Salmos 101:3).',
      '2. **O Filtro do Domínio Próprio (1 Coríntios 6:12)**: Isso é um lazer saudável ou está se tornando um vício que rouba meu tempo de oração, leitura bíblica, estudo, trabalho e família? (Efésios 5:15-16).',
      '3. **O Filtro da Consciência e do Testemunho (Romanos 14:22-23; 1 Coríntios 10:31)**: Eu conseguiria assistir, ouvir ou jogar isso com a consciência tranquila na presença de Jesus, fazendo tudo para a glória de Deus?'
    ],
    practicalApplication: 'Seja honesto consigo mesmo diante de Deus: se determinado conteúdo esfria seu desejo de orar, polui seus pensamentos ou domina seu tempo, tenha a coragem espiritual de cortá-lo.',
    keywords: ['música secular', 'jogos', 'videogame', 'filmes', 'séries', 'pecado', 'pode ou não pode', 'liberdade cristã', 'entretenimento'],
    references: [
      {
        bookAbbrev: '1co',
        chapter: 6,
        verse: 12,
        label: '1 Coríntios 6:12',
        quote: 'Todas as coisas me são lícitas, mas nem todas as coisas convêm. Todas as coisas me são lícitas, mas eu não me deixarei dominar por nenhuma.'
      },
      {
        bookAbbrev: 'fp',
        chapter: 4,
        verse: 8,
        label: 'Filipenses 4:8',
        quote: 'Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama... nisso pensai.'
      },
      {
        bookAbbrev: '1co',
        chapter: 10,
        verse: 31,
        label: '1 Coríntios 10:31',
        quote: 'Portanto, quer comais quer bebais, ou façais outra qualquer coisa, fazei tudo para glória de Deus.'
      }
    ]
  },
  {
    id: 'dizimos-e-ofertas-novo-testamento',
    category: 'Família, Jovens & Vocação',
    question: 'O que a Bíblia ensina sobre dízimos e ofertas na Nova Aliança? É obrigação ou gratidão?',
    shortAnswer: 'Na Bíblia, contribuir para a obra de Deus e o sustento da igreja e dos necessitados nunca é uma "barganha financeira" com Deus, mas um ato voluntário de adoração, mordomia fiel, generosidade e gratidão com alegria (2 Coríntios 9:7).',
    detailedExplanation: [
      'Muito antes da Lei de Moisés, Abraão (Gênesis 14:20) e Jacó (Gênesis 28:22) já praticavam o princípio do dízimo como reconhecimento grato de que tudo vem das mãos de Deus. Em Mateus 23:23, Jesus repreendeu a hipocrisia dos fariseus, mas afirmou sobre o dízimo e a justiça/misericórdia: "deveis, porém, fazer estas coisas, e não omitir aquelas".',
      'No Novo Testamento (1 Coríntios 9:13-14; 16:1-2; 2 Coríntios 8 e 9), a contribuição cristã é elevada do legalismo frio para o princípio da **graça generosa**: contribuímos para o sustento do ministério da Palavra, manutenção da igreja local, envio de missionários e socorro aos irmãos necessitados.',
      'A sã doutrina evangélica rejeita veementemente a "Teologia da Prosperidade" (que transforma o evangelho em comércio de compra de bênçãos) e ensina a **Mordomia Cristã**: tudo o que temos pertence ao Senhor, e damos "cada um segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria" (2 Coríntios 9:7).'
    ],
    practicalApplication: 'Organize suas finanças com sabedoria (Provérbios 21:5), honre ao Senhor com as primícias da sua renda em sua igreja local onde você é alimentado espiritualmente, e seja generoso para socorrer quem precisa.',
    keywords: ['dízimo', 'oferta', 'dinheiro', 'finanças', 'contribuir', 'prosperidade', 'mordomia', 'igreja'],
    references: [
      {
        bookAbbrev: '2co',
        chapter: 9,
        verse: 7,
        label: '2 Coríntios 9:7',
        quote: 'Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria.'
      },
      {
        bookAbbrev: 'pv',
        chapter: 3,
        verse: 9,
        label: 'Provérbios 3:9',
        quote: 'Honra ao Senhor com os teus bens, e com a primeira parte de todos os teus ganhos.'
      },
      {
        bookAbbrev: 'mt',
        chapter: 6,
        verse: 21,
        label: 'Mateus 6:21',
        quote: 'Porque onde estiver o vosso tesouro, aí estará também o vosso coração.'
      }
    ]
  },
  {
    id: 'desigrejado-ir-a-igreja',
    category: 'Família, Jovens & Vocação',
    question: 'Posso ser cristão sozinho em casa ("desigrejado") sem congregar em uma igreja local?',
    shortAnswer: 'Embora a salvação seja pela fé em Cristo, o Novo Testamento desconhece a ideia de um "cristão isolado". A Igreja é o Corpo de Cristo e a família da fé; congregar é mandamento bíblico e proteção espiritual.',
    detailedExplanation: [
      'Muitas pessoas se afastam da comunhão por terem sofrido decepções com líderes falhos ou escândalos. Essa dor é compreensível, mas abandonar a comunhão do Corpo de Cristo por causa dos erros dos homens é como desistir de comer alimentos saudáveis porque um restaurante serviu comida estragada.',
      'No Novo Testamento, a palavra "igreja" (*ekklesia*) significa "assembleia dos chamados para fora" — por definição, é impossível ser "assembleia" sozinho. Existem mais de 50 mandamentos recíprocos ("uns aos outros") no Novo Testamento: amai-vos uns aos outros, suportai-vos uns aos outros, exortai-vos uns aos outros, levai as cargas uns dos outros (Gálatas 6:2) — nenhum deles pode ser cumprido isolado diante de uma tela.',
      'Hebreus 10:24-25 nos adverte diretamente: "Não deixando a nossa congregação, como é costume de alguns, antes admoestando-nos uns aos outros". Uma brasa tirada da lareira e deixada sozinha no chão esfria rapidamente; juntas, as brasas mantêm o fogo aceso.'
    ],
    practicalApplication: 'Se você se feriu em algum lugar no passado, peça a Deus direção para encontrar uma igreja local bíblica, séria, cristocêntrica e acolhedora, onde a Palavra de Deus seja pregada fielmente e você possa servir e ser cuidado.',
    keywords: ['desigrejado', 'ir à igreja', 'congregar', 'cristão em casa', 'sozinho', 'comunhão', 'corpo de cristo', 'hebreus 10:25'],
    references: [
      {
        bookAbbrev: 'hb',
        chapter: 10,
        verse: 25,
        label: 'Hebreus 10:24-25',
        quote: 'Não deixando a nossa congregação, como é costume de alguns, antes admoestando-nos uns aos outros; e tanto mais, quanto vedes que se vai aproximando aquele dia.'
      },
      {
        bookAbbrev: 'at',
        chapter: 2,
        verse: 42,
        label: 'Atos 2:42',
        quote: 'E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.'
      },
      {
        bookAbbrev: '1co',
        chapter: 12,
        verse: 27,
        label: '1 Coríntios 12:27',
        quote: 'Ora, vós sois o corpo de Cristo, e seus membros em particular.'
      }
    ]
  },

  // ─── 6. ESCATOLOGIA & ETERNIDADE ──────────────────────────────────────
  {
    id: 'volta-de-jesus-fim-dos-tempos',
    category: 'Escatologia & Eternidade',
    question: 'Como será a volta de Jesus e como o cristão deve se preparar para os últimos dias?',
    shortAnswer: 'A volta de Jesus Cristo será pessoal, visível, gloriosa e triunfante. Não devemos viver com medo ou tentando adivinhar datas (pois ninguém sabe o dia nem a hora), mas em vigilância, santidade, esperança e missão.',
    detailedExplanation: [
      'A Segunda Vinda de Cristo é chamada em Tito 2:13 de "a bendita esperança" da Igreja. Enquanto na primeira vinda Jesus veio em humildade como o Cordeiro Sofredor para salvar, na segunda vinda Ele virá em glória e majestade como Rei dos Reis e Juiz de toda a terra (Mateus 24:30; Apocalipse 19:11-16).',
      'Embora cristãos evangélicos fiéis possam ter diferentes leituras sobre detalhes da cronologia do Milênio e da Tribulação, todos os cristãos ortodoxos concordam nos pontos centrais e inegociáveis: (1) Jesus voltará corporalmente e visivelmente (Atos 1:11); (2) haverá a ressurreição corporal dos mortos (1 Tessalonicenses 4:16; 1 Coríntios 15); (3) haverá o Juízo Final e a derrota definitiva de Satanás, do pecado e da morte; e (4) Deus instaurará Novos Céus e Nova Terra onde habita a justiça (2 Pedro 3:13; Apocalipse 21:1-5).',
      'Jesus alertou expressamente contra falsos profetas que marcam datas para o fim do mundo: "Mas daquele dia e hora ninguém sabe" (Mateus 24:36).'
    ],
    practicalApplication: 'Viva cada dia como se Jesus fosse voltar hoje (em santidade, comunhão e paz com Deus) e trabalhe e planeje com sabedoria como se Ele ainda tardasse, anunciando o Evangelho enquanto há tempo!',
    keywords: ['volta de jesus', 'fim dos tempos', 'apocalipse', 'arrebatamento', 'segunda vinda', 'sinais', 'escatologia', 'juízo final', 'eternidade'],
    references: [
      {
        bookAbbrev: '1ts',
        chapter: 4,
        verse: 16,
        label: '1 Tessalonicenses 4:16-17',
        quote: 'Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro.'
      },
      {
        bookAbbrev: 'mt',
        chapter: 24,
        verse: 42,
        label: 'Mateus 24:42',
        quote: 'Vigiai, pois, porque não sabeis a que hora há de vir o vosso Senhor.'
      },
      {
        bookAbbrev: 'tt',
        chapter: 2,
        verse: 13,
        label: 'Tito 2:13',
        quote: 'Aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Senhor Jesus Cristo.'
      }
    ]
  },
  {
    id: 'tribunal-de-cristo-galardao',
    category: 'Escatologia & Eternidade',
    question: 'Os cristãos salvos ainda passarão por algum julgamento? O que é o Tribunal de Cristo?',
    shortAnswer: 'Os salvos em Cristo jamais serão julgados para condenação eterna (Romanos 8:1; João 5:24), mas comparecerão perante o Tribunal de Cristo (Bema) para avaliação de fidelidade e recebimento de galardões.',
    detailedExplanation: [
      'A Bíblia diferencia claramente o julgamento da **condenação eterna** (o Grande Trono Branco em Apocalipse 20:11-15, destinado aos que rejeitaram a graça de Deus) do **Tribunal de Cristo** (2 Coríntios 5:10; Romanos 14:10; 1 Coríntios 3:11-15), destinado exclusivamente aos crentes salvos.',
      'A palavra grega usada por Paulo para "Tribunal" (*Bema*) referia-se à plataforma onde o juiz dos jogos olímpicos antigos entregava as coroas de louros aos atletas que completaram a corrida segundo as regras. Não se trata de decidir se o crente entra ou não no céu (pois essa entrada já foi garantida pelo sangue de Jesus, João 5:24), mas de avaliar a qualidade e motivação das obras feitas sobre o fundamento que é Cristo.',
      'Em 1 Coríntios 3:12-15, as obras feitas para a glória de Deus ("ouro, prata, pedras preciosas") receberão galardão eterno, enquanto o que foi feito por vaidade carnal ("madeira, feno, palha") será queimado, "mas o tal será salvo".'
    ],
    practicalApplication: 'Sirva ao Senhor no secreto — mesmo quando ninguém na terra vê ou aplaude — sabendo que o Senhor vê cada copo de água fria dado em Seu nome e recompensará cada gesto de amor sincero (Mateus 10:42).',
    keywords: ['tribunal de cristo', 'galardão', 'julgamento', 'trono branco', 'coroa', 'recompensa', 'obras', 'juízo'],
    references: [
      {
        bookAbbrev: 'jo',
        chapter: 5,
        verse: 24,
        label: 'João 5:24',
        quote: 'Na verdade, na verdade vos digo que quem ouve a minha palavra, e crê naquele que me enviou, tem a vida eterna, e não entrará em condenação, mas passou da morte para a vida.'
      },
      {
        bookAbbrev: '2co',
        chapter: 5,
        verse: 10,
        label: '2 Coríntios 5:10',
        quote: 'Porque todos devemos comparecer ante o tribunal de Cristo, para que cada um receba segundo o que tiver feito por meio do corpo, ou bem, ou mal.'
      },
      {
        bookAbbrev: '1co',
        chapter: 3,
        verse: 14,
        label: '1 Coríntios 3:14',
        quote: 'Se a obra que alguém edificou nessa parte permanecer, esse receberá galardão.'
      }
    ]
  }
];
