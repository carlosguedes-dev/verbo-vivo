import type { ReadingPlan } from '../types';

export const PLANOS_LEITURA_DATA: ReadingPlan[] = [
  {
    id: 'conhecendo-jesus-joao',
    title: 'Jornada no Evangelho de João (21 Dias)',
    subtitle: 'Ideal para quem deseja conhecer profundamente a Pessoa, os milagres e a divindade de Jesus Cristo',
    durationLabel: '21 Dias (1 capítulo por dia)',
    description: 'O Evangelho de João foi escrito para que você creia que Jesus é o Cristo, o Filho de Deus, e para que, crendo, tenha vida em Seu nome (João 20:31).',
    days: [
      { day: 1, title: 'O Verbo Eterno que se Fez Carne', readings: [{ bookAbbrev: 'jo', chapter: 1, label: 'João 1' }], focus: 'A divindade eterna de Cristo e o testemunho de João Batista.' },
      { day: 2, title: 'O Primeiro Sinal em Caná e o Zelo pelo Templo', readings: [{ bookAbbrev: 'jo', chapter: 2, label: 'João 2' }], focus: 'Jesus transforma a água em vinho da nova aliança.' },
      { day: 3, title: 'O Novo Nascimento e o Amor de Deus (João 3:16)', readings: [{ bookAbbrev: 'jo', chapter: 3, label: 'João 3' }], focus: 'Diálogo com Nicodemos: "Importa-vos nascer de novo".' },
      { day: 4, title: 'A Água da Vida e a Adoração em Espírito e em Verdade', readings: [{ bookAbbrev: 'jo', chapter: 4, label: 'João 4' }], focus: 'O encontro transformador de Jesus com a mulher samaritana.' },
      { day: 5, title: 'Cura no Tanque de Betesda e a Autoridade do Filho', readings: [{ bookAbbrev: 'jo', chapter: 5, label: 'João 5' }], focus: 'Quem ouve a palavra de Cristo passou da morte para a vida.' },
      { day: 6, title: 'Eu Sou o Pão da Vida', readings: [{ bookAbbrev: 'jo', chapter: 6, label: 'João 6' }], focus: 'A multiplicação dos pães e o discurso do Pão do Céu.' },
      { day: 7, title: 'Rios de Água Viva no Último Dia da Festa', readings: [{ bookAbbrev: 'jo', chapter: 7, label: 'João 7' }], focus: 'A promessa do Espírito Santo para os que têm sede.' },
      { day: 8, title: 'Eu Sou a Luz do Mundo e a Verdade que Liberta', readings: [{ bookAbbrev: 'jo', chapter: 8, label: 'João 8' }], focus: '"Se, pois, o Filho vos libertar, verdadeiramente sereis livres".' },
      { day: 9, title: 'A Cura do Cego de Nascença', readings: [{ bookAbbrev: 'jo', chapter: 9, label: 'João 9' }], focus: '"Uma coisa sei, é que, havendo eu sido cego, agora vejo".' },
      { day: 10, title: 'Eu Sou a Porta e o Bom Pastor', readings: [{ bookAbbrev: 'jo', chapter: 10, label: 'João 10' }], focus: 'A segurança eterna das ovelhas nas mãos de Cristo.' },
      { day: 11, title: 'Eu Sou a Ressurreição e a Vida', readings: [{ bookAbbrev: 'jo', chapter: 11, label: 'João 11' }], focus: 'A ressurreição de Lázaro e o poder de Cristo sobre a morte.' },
      { day: 12, title: 'A Unção em Betânia e a Entrada Triunfal', readings: [{ bookAbbrev: 'jo', chapter: 12, label: 'João 12' }], focus: 'O grão de trigo que morre para produzir muito fruto.' },
      { day: 13, title: 'O Lava-Pés e o Novo Mandamento do Amor', readings: [{ bookAbbrev: 'jo', chapter: 13, label: 'João 13' }], focus: 'A humildade do Mestre que serve aos Seus discípulos.' },
      { day: 14, title: 'Eu Sou o Caminho, a Verdade e a Vida', readings: [{ bookAbbrev: 'jo', chapter: 14, label: 'João 14' }], focus: 'O consolo da casa do Pai e a promessa do Consolador.' },
      { day: 15, title: 'Eu Sou a Videira Verdadeira', readings: [{ bookAbbrev: 'jo', chapter: 15, label: 'João 15' }], focus: 'Permanecer em Cristo para dar fruto que permanece.' },
      { day: 16, title: 'A Obra do Espírito Santo e a Vitória sobre o Mundo', readings: [{ bookAbbrev: 'jo', chapter: 16, label: 'João 16' }], focus: '"No mundo tereis aflições, mas tende bom ânimo, eu venci o mundo".' },
      { day: 17, title: 'A Oração Sacerdotal de Jesus', readings: [{ bookAbbrev: 'jo', chapter: 17, label: 'João 17' }], focus: 'Jesus intercede pela santificação e unidade da Sua Igreja.' },
      { day: 18, title: 'A Prisão no Getsêmani e o Julgamento', readings: [{ bookAbbrev: 'jo', chapter: 18, label: 'João 18' }], focus: '"O meu reino não é deste mundo".' },
      { day: 19, title: 'A Cruz do Calvário: "Está Consumado!"', readings: [{ bookAbbrev: 'jo', chapter: 19, label: 'João 19' }], focus: 'O sacrifício perfeito do Cordeiro de Deus.' },
      { day: 20, title: 'O Túmulo Vazio e o Senhor Ressurreto', readings: [{ bookAbbrev: 'jo', chapter: 20, label: 'João 20' }], focus: 'A confissão de Tomé: "Senhor meu, e Deus meu!".' },
      { day: 21, title: 'Restauração à Beira do Mar: "Apascenta as Minhas Ovelhas"', readings: [{ bookAbbrev: 'jo', chapter: 21, label: 'João 21' }], focus: 'A graça restauradora de Cristo na vida de Pedro.' }
    ]
  },
  {
    id: 'fundamentos-da-graca-romanos-efesios',
    title: 'Fundamentos da Graça e da Fé (14 Dias)',
    subtitle: 'Mergulho teológico nas cartas de Romanos e Efésios para alicerçar a sã doutrina',
    durationLabel: '14 Dias',
    description: 'Compreenda com profundidade a justificação pela fé, a obra do Espírito Santo, as riquezas da graça e a armadura de Deus.',
    days: [
      { day: 1, title: 'O Poder do Evangelho e a Condição Humana', readings: [{ bookAbbrev: 'rm', chapter: 1, label: 'Romanos 1' }, { bookAbbrev: 'rm', chapter: 2, label: 'Romanos 2' }], focus: 'O justo viverá pela fé.' },
      { day: 2, title: 'Justificados Gratuitamente pela Graça em Cristo', readings: [{ bookAbbrev: 'rm', chapter: 3, label: 'Romanos 3' }, { bookAbbrev: 'rm', chapter: 4, label: 'Romanos 4' }], focus: 'A fé de Abraão e a propiciação no sangue de Jesus.' },
      { day: 3, title: 'Paz com Deus e o Triunfo da Graça sobre o Pecado', readings: [{ bookAbbrev: 'rm', chapter: 5, label: 'Romanos 5' }], focus: 'Onde abundou o pecado, superabundou a graça.' },
      { day: 4, title: 'Mortos para o Pecado, Vivos para Deus', readings: [{ bookAbbrev: 'rm', chapter: 6, label: 'Romanos 6' }, { bookAbbrev: 'rm', chapter: 7, label: 'Romanos 7' }], focus: 'União com Cristo e a luta interna da santificação.' },
      { day: 5, title: 'A Vida no Espírito e o Amor Inseparável de Deus', readings: [{ bookAbbrev: 'rm', chapter: 8, label: 'Romanos 8' }], focus: 'Nenhuma condenação há para os que estão em Cristo Jesus.' },
      { day: 6, title: 'A Soberania e a Misericórdia de Deus na História', readings: [{ bookAbbrev: 'rm', chapter: 9, label: 'Romanos 9' }, { bookAbbrev: 'rm', chapter: 10, label: 'Romanos 10' }], focus: 'A fé é pelo ouvir, e o ouvir pela palavra de Deus.' },
      { day: 7, title: 'A Profundidade da Sabedoria de Deus ("Soli Deo Gloria")', readings: [{ bookAbbrev: 'rm', chapter: 11, label: 'Romanos 11' }], focus: 'Dele, por Ele e para Ele são todas as coisas.' },
      { day: 8, title: 'Culto Racional e Renovação da Mente', readings: [{ bookAbbrev: 'rm', chapter: 12, label: 'Romanos 12' }, { bookAbbrev: 'rm', chapter: 13, label: 'Romanos 13' }], focus: 'Sacrifício vivo, santo e agradável a Deus.' },
      { day: 9, title: 'Amor Fraternal, Consciência e Comunhão', readings: [{ bookAbbrev: 'rm', chapter: 14, label: 'Romanos 14' }, { bookAbbrev: 'rm', chapter: 15, label: 'Romanos 15' }, { bookAbbrev: 'rm', chapter: 16, label: 'Romanos 16' }], focus: 'Acolhei-vos uns aos outros, como também Cristo nos acolheu.' },
      { day: 10, title: 'Todas as Bênçãos Espirituais em Cristo', readings: [{ bookAbbrev: 'ef', chapter: 1, label: 'Efésios 1' }], focus: 'Eleitos, redimidos pelo Seu sangue e selados com o Espírito.' },
      { day: 11, title: 'Salvos pela Graça Mediante a Fé e Unidos em Um Corpo', readings: [{ bookAbbrev: 'ef', chapter: 2, label: 'Efésios 2' }], focus: 'Da morte espiritual para os lugares celestiais em Cristo.' },
      { day: 12, title: 'O Mistério de Cristo e a Largura do Seu Amor', readings: [{ bookAbbrev: 'ef', chapter: 3, label: 'Efésios 3' }], focus: 'Conhecer o amor de Cristo, que excede todo entendimento.' },
      { day: 13, title: 'A Unidade da Igreja e o Novo Homem', readings: [{ bookAbbrev: 'ef', chapter: 4, label: 'Efésios 4' }, { bookAbbrev: 'ef', chapter: 5, label: 'Efésios 5' }], focus: 'Andar em amor, luz e plenitude do Espírito.' },
      { day: 14, title: 'O Lar Cristão e a Armadura Completa de Deus', readings: [{ bookAbbrev: 'ef', chapter: 6, label: 'Efésios 6' }], focus: 'Fortalecei-vos no Senhor e na força do Seu poder.' }
    ]
  },
  {
    id: 'refugio-nos-salmos-e-sabedoria',
    title: 'Sabedoria & Adoração: Salmos e Provérbios (10 Dias)',
    subtitle: 'Meditações selecionadas para fortalecer a vida de oração e o discernimento diário',
    durationLabel: '10 Dias',
    description: 'Aprenda a orar com os Salmos de Davi e a caminhar com prudência prática pelos capítulos clássicos de Provérbios.',
    days: [
      { day: 1, title: 'Os Dois Caminhos e o Princípio da Sabedoria', readings: [{ bookAbbrev: 'sl', chapter: 1, label: 'Salmos 1' }, { bookAbbrev: 'pv', chapter: 1, label: 'Provérbios 1' }], focus: 'Prazer na lei do Senhor e temor a Deus.' },
      { day: 2, title: 'Confiança Total no Senhor e o Bom Pastor', readings: [{ bookAbbrev: 'sl', chapter: 23, label: 'Salmos 23' }, { bookAbbrev: 'pv', chapter: 3, label: 'Provérbios 3' }], focus: 'Confia no Senhor de todo o teu coração.' },
      { day: 3, title: 'A Luz da Salvação e a Guarda do Coração', readings: [{ bookAbbrev: 'sl', chapter: 27, label: 'Salmos 27' }, { bookAbbrev: 'pv', chapter: 4, label: 'Provérbios 4' }], focus: 'Sobre tudo o que se deve guardar, guarda o teu coração.' },
      { day: 4, title: 'A Alegria do Perdão e a Voz da Sabedoria', readings: [{ bookAbbrev: 'sl', chapter: 32, label: 'Salmos 32' }, { bookAbbrev: 'pv', chapter: 8, label: 'Provérbios 8' }], focus: 'Bem-aventurado aquele cuja transgressão é perdoada.' },
      { day: 5, title: 'Deus, o Nosso Refúgio e Fortaleza', readings: [{ bookAbbrev: 'sl', chapter: 46, label: 'Salmos 46' }, { bookAbbrev: 'pv', chapter: 15, label: 'Provérbios 15' }], focus: 'Aquietai-vos, e sabei que eu sou Deus.' },
      { day: 6, title: 'Quebrantamento Sincero e Humildade', readings: [{ bookAbbrev: 'sl', chapter: 51, label: 'Salmos 51' }, { bookAbbrev: 'pv', chapter: 16, label: 'Provérbios 16' }], focus: 'Ao coração quebrantado e contrito não desprezarás, ó Deus.' },
      { day: 7, title: 'À Sombra do Altíssimo', readings: [{ bookAbbrev: 'sl', chapter: 91, label: 'Salmos 91' }, { bookAbbrev: 'pv', chapter: 18, label: 'Provérbios 18' }], focus: 'Torre forte é o nome do Senhor.' },
      { day: 8, title: 'Gratidão pelos Benefícios do Senhor', readings: [{ bookAbbrev: 'sl', chapter: 103, label: 'Salmos 103' }, { bookAbbrev: 'pv', chapter: 22, label: 'Provérbios 22' }], focus: 'Como um pai se compadece de seus filhos, assim o Senhor se compadece.' },
      { day: 9, title: 'O Socorro que Vem do Senhor e a Família Edificada', readings: [{ bookAbbrev: 'sl', chapter: 121, label: 'Salmos 121' }, { bookAbbrev: 'sl', chapter: 127, label: 'Salmos 127' }], focus: 'Se o Senhor não edificar a casa, em vão trabalham os que a edificam.' },
      { day: 10, title: 'A Onisciência Amorosa de Deus e a Virtude', readings: [{ bookAbbrev: 'sl', chapter: 139, label: 'Salmos 139' }, { bookAbbrev: 'pv', chapter: 31, label: 'Provérbios 31' }], focus: 'Sonda-me, ó Deus, e guia-me pelo caminho eterno.' }
    ]
  }
];
