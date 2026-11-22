export type SafetyNoticeLevel = 'crisis' | 'violence' | 'health';

export interface SafetySupportNotice {
  level: SafetyNoticeLevel;
  kicker: string;
  title: string;
  body: string;
  channels: { label: string; detail: string; href?: string }[];
}

export const SAFETY_NOTICES: Record<SafetyNoticeLevel, SafetySupportNotice> = {
  crisis: {
    level: 'crisis',
    kicker: 'Apoio Emocional & Prevenção',
    title: 'Você não precisa enfrentar isso sozinho',
    body: 'As passagens bíblicas oferecem consolo espiritual, mas não substituem acompanhamento médico ou psicológico. Se você estiver passando por sofrimento intenso ou pensamentos de autolesão, procure ajuda imediata e gratuita:',
    channels: [
      { label: 'CVV — Ligue 188', detail: 'Atendimento gratuito, sigiloso e 24 horas (todo o Brasil)', href: 'https://cvv.org.br' },
      { label: 'SAMU — Ligue 192', detail: 'Emergências médicas e atendimento imediato' }
    ]
  },
  violence: {
    level: 'violence',
    kicker: 'Proteção & Denúncia',
    title: 'Apoio em situações de violência ou abuso',
    body: 'Em situações de violência doméstica, agressão, abuso ou violação de direitos, busque proteção junto às autoridades competentes e à rede pública de acolhimento:',
    channels: [
      { label: 'Disque 180', detail: 'Central de Atendimento à Mulher (gratuito, 24h)' },
      { label: 'Disque 100', detail: 'Direitos Humanos — proteção a crianças, idosos e vulneráveis' },
      { label: 'Polícia Militar — 190', detail: 'Emergência policial imediata' }
    ]
  },
  health: {
    level: 'health',
    kicker: 'Orientação & Cuidado',
    title: 'Conteúdo espiritual e informativo',
    body: 'A leitura bíblica fortalece a fé, mas não substitui diagnóstico, tratamento médico ou acompanhamento psicológico qualificado. Em caso de sintomas persistentes ou dependência, procure um profissional de saúde ou a rede SUS (CAPS / UBS).',
    channels: [
      { label: 'CVV — Ligue 188', detail: 'Apoio emocional gratuito e sigiloso (24h)', href: 'https://cvv.org.br' },
      { label: 'SUS / CAPS', detail: 'Atendimento gratuito de saúde física e mental na rede pública' }
    ]
  }
};

export const SENSITIVE_DICT_NOTICE_MAP: Record<string, SafetyNoticeLevel> = {
  suicidio: 'crisis',
  desespero: 'crisis',
  agonia: 'crisis',
  desesperanca: 'crisis',
  depressao: 'crisis',
  abuso: 'violence',
  agressao: 'violence',
  assedio: 'violence',
  violencia: 'violence',
  bullying: 'violence',
  ansiedade: 'health',
  panico: 'health',
  'saude-mental': 'health',
  estresse: 'health',
  drogas: 'health',
  vicios: 'health',
  alcool: 'health',
  bebedeira: 'health',
  embriaguez: 'health',
  doenca: 'health',
  enfermidade: 'health',
  luto: 'health'
};

export const SENSITIVE_REFUGIO_NOTICE_MAP: Record<string, SafetyNoticeLevel> = {
  'ansiedade-e-medo': 'health',
  'luto-e-dor': 'health',
  'tristeza-e-angustia': 'crisis',
  'enfermidade-e-fraqueza': 'health'
};

export interface LegalDocumentSection {
  heading: string;
  paragraphs: string[];
}

export const PRIVACY_POLICY_SECTIONS: LegalDocumentSection[] = [
  {
    heading: '1. Controlador e Finalidade (LGPD — Lei nº 13.709/2018)',
    paragraphs: [
      'O Verbo Vivo é um aplicativo cristão gratuito e de código aberto desenvolvido por Carlos Guedes, voltado exclusivamente à leitura das Escrituras Sagradas, consulta ao Dicionário Bíblico, Refúgio nas Escrituras, Tira-Dúvidas e anotações pessoais.',
      'O aplicativo não exige cadastro, login, senha, e-mail, CPF, telefone ou geolocalização.'
    ]
  },
  {
    heading: '2. Dados Armazenados Apenas no Seu Dispositivo',
    paragraphs: [
      'Suas marcações (versículos grifados e anotações), capítulos marcados como lidos, última página lida, tradução preferida, tamanho de fonte e tema (claro/escuro) são gravados exclusivamente no armazenamento local do seu navegador ou aparelho (localStorage).',
      'Embora a convicção religiosa seja classificada como dado pessoal sensível pela LGPD (art. 5º, II), o Verbo Vivo não coleta, não transmite e não armazena essas informações em servidores remotos.'
    ]
  },
  {
    heading: '3. Recursos de Terceiros e Transparência de Rede',
    paragraphs: [
      'Os 66 livros da Bíblia nas traduções embarcadas funcionam 100% offline. Não utilizamos cookies de rastreamento, Google Analytics, pixels publicitários ou SDKs de anúncios.',
      'Quando utilizado com acesso à internet, o aplicativo solicita as fontes tipográficas (Cormorant Garamond, Lora e Plus Jakarta Sans) via Google Fonts CDN (Google LLC). Nessa requisição técnica padrão, o endereço IP e o agente do navegador podem ser recebidos pelo servidor de fontes. Sem conexão à internet, o app utiliza automaticamente fontes locais do sistema sem perda de funcionalidade.'
    ]
  },
  {
    heading: '4. Seus Direitos (Art. 18 da LGPD) e Proteção de Menores (ECA)',
    paragraphs: [
      'Você possui controle total e imediato sobre seus dados locais na aba "Meus Dados": pode visualizar o resumo salvo, exportar uma cópia em JSON (portabilidade e backup), restaurar um backup anterior ou excluir definitivamente todos os dados e caches do aplicativo com um clique.',
      'Conforme o Estatuto da Criança e do Adolescente (ECA — Lei nº 8.069/1990) e o art. 14 da LGPD, o aplicativo não coleta dados pessoais de crianças ou adolescentes. Alguns verbetes do Dicionário Bíblico tratam de temas éticos maduros presentes nas Escrituras; recomenda-se acompanhamento dos pais ou responsáveis para menores.'
    ]
  }
];

export const TERMS_OF_USE_SECTIONS: LegalDocumentSection[] = [
  {
    heading: '1. Natureza Gratuita e Transparência (CDC — Lei nº 8.078/1990)',
    paragraphs: [
      'O Verbo Vivo é integralmente gratuito, sem anúncios, sem planos pagos, sem assinaturas recorrentes e sem cobranças ocultas. Não há coleta de dados financeiros ou emissão de cobranças dentro do aplicativo.',
      'Caso futuras versões venham a oferecer recursos pagos opcionais, todas as condições serão informadas previamente com clareza, respeitando integralmente o Código de Defesa do Consumidor, incluindo o direito de arrependimento de 7 dias (art. 49 do CDC).'
    ]
  },
  {
    heading: '2. Escopo Religioso e Informativo (Não Substitui Profissionais)',
    paragraphs: [
      'O conteúdo bíblico e os estudos apresentados têm finalidade exclusivamente espiritual, educacional e de leitura pessoal. O aplicativo não fornece aconselhamento médico, psicológico, psiquiátrico, jurídico, contábil ou financeiro.',
      'Em situações de crise emocional, violência ou urgência de saúde, procure profissionais qualificados ou os serviços públicos gratuitos (CVV 188, SAMU 192, Disque 180, Disque 100).'
    ]
  },
  {
    heading: '3. Estabilidade, Backup Local e Responsabilidade',
    paragraphs: [
      'O Verbo Vivo emprega validações técnicas para preservar suas marcações locais. Como os dados ficam gravados apenas no seu dispositivo, a desinstalação do app ou a limpeza manual do navegador pode removê-los — por isso oferecemos a ferramenta gratuita de Exportar e Restaurar Backup (.JSON).',
      'Nenhuma cláusula destes Termos limita direitos legais irrenunciáveis previstos no Código de Defesa do Consumidor ou na legislação brasileira.'
    ]
  },
  {
    heading: '4. Interação, Suporte e Canal de Contato',
    paragraphs: [
      'O aplicativo não possui chat, fórum, perfis públicos ou publicação de conteúdo entre usuários. Para relatar bugs, solicitar correções ou tratar de questões de privacidade e direitos autorais, utilize o repositório oficial no GitHub: github.com/carlosguedes-dev/verbo-vivo.'
    ]
  }
];

export const LICENSES_CREDITS_SECTIONS: LegalDocumentSection[] = [
  {
    heading: '1. Código-Fonte e Dependências Open-Source',
    paragraphs: [
      'O código-fonte do aplicativo Verbo Vivo é licenciado sob a licença MIT (permissiva). Todas as dependências auditadas do projeto (Capacitor, Vite, TypeScript, Electron) utilizam licenças permissivas (MIT, ISC, Apache-2.0, BSD), sem componentes GPL ou AGPL.',
      'As fontes tipográficas Cormorant Garamond, Lora e Plus Jakarta Sans são distribuídas sob a SIL Open Font License 1.1 (OFL-1.1). Os ícones e elementos visuais são vetores SVG próprios.'
    ]
  },
  {
    heading: '2. Atribuição e Direitos Autorais dos Textos Bíblicos',
    paragraphs: [
      'ACF (Almeida Corrigida Fiel): texto bíblico de propriedade da Sociedade Bíblica Trinitariana do Brasil (SBTB). Todos os direitos reservados aos respectivos titulares.',
      'NVI (Nova Versão Internacional): texto bíblico de propriedade de Biblica, Inc. Todos os direitos reservados aos respectivos titulares.',
      'AA (Almeida Revisada — Imprensa Bíblica): revisão histórica da tradução de João Ferreira de Almeida publicada pela Imprensa Bíblica Brasileira (IBB). Todos os direitos reservados aos respectivos titulares.',
      'Caso qualquer titular de direitos solicite revisão, atribuição adicional ou remoção de texto bíblico específico, o pedido será atendido prontamente mediante contato pelo repositório oficial.'
    ]
  }
];
