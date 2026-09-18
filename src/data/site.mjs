export const site = {
  name: 'AAFJ Advocacia',
  lawyer: 'Air Alves Freitas Júnior',
  registration: 'OAB/RS 93.942',
  portrait: { src: '/images/image2.jpg', alt: 'Air Alves Freitas Júnior', width: 768, height: 1376 },
  officePhoto: { src: '/images/image.jpg', alt: 'Air Alves Freitas Júnior', width: 1288, height: 1600 },
  company: 'Air Alves Freitas Júnior Sociedade Individual de Advocacia',
  companyRegistration: 'OAB/RS 9.410',
  phone: '(51) 99386-9229',
  phoneUrl: 'tel:+5551993869229',
  businessPhone: '(51) 3391-9251',
  businessPhoneUrl: 'tel:+555133919251',
  whatsapp: 'https://wa.me/5551993869229',
  email: 'contato@aafjadvocacia.com.br',
  address: ['Avenida Baltazar de Oliveira Garcia, 950, sala 301', 'Sarandi, Porto Alegre/RS', 'CEP 91130-000', 'Brasil'],
  socials: [
    ['Instagram', 'https://www.instagram.com/aafjr_advocacia/'],
    ['Facebook', 'https://www.facebook.com/profile.php?id=100083234796826'],
    ['Threads', 'https://www.threads.com/@aafjr_advocacia'],
  ],
};

export const lawyers = [
  {
    id: 'air-alves-freitas-junior',
    name: site.lawyer,
    registration: site.registration,
    photo: site.officePhoto || site.portrait,
    role: 'Advogado, fundador e CEO da AAFJ Advocacia',
    description: 'Atua na advocacia há mais de uma década, com experiência, estratégia e compromisso na defesa dos interesses de seus clientes.',
    education: [
      'Graduado em Direito pela FADERGS (2013).',
      'Pós-graduado em Direito e Processo do Trabalho, Direito Público e Direito Civil e Processo Civil.',
    ],
    institutional: [
      'Membro da AGETRA – Associação Gaúcha dos Advogados Trabalhistas.',
      'Também integrou a Comissão Especial da Advocacia Trabalhista da OAB/RS.',
    ],
  },
  {
    id: 'douglas-dezingrini-de-quadros',
    name: 'Douglas Dezingrini de Quadros',
    registration: 'OAB/RS 105.440',
    photo: { src: '/images/advogado2.png', alt: 'Douglas Dezingrini de Quadros', width: 1536, height: 2752 },
    role: 'Advogado da AAFJ Advocacia',
    education: [
      'Bacharel em Direito pela FADERGS – RS.',
      'Pós-graduado em Direito do Trabalho pela UniRitter.',
      'Pós-graduado em Direito Empresarial pela Legale Educacional.',
    ],
  },
];

export const areas = [
  ['Direito Trabalhista', 'direito-trabalhista', 'Defesa dos direitos de trabalhadores e empresas.', 'briefcase'],
  ['Direito Cível e do Consumidor', 'direito-civel-e-do-consumidor', 'Soluções relacionadas a contratos, indenizações e relações de consumo.', 'document'],
  ['Direito Bancário', 'direito-bancario', 'Atuação relacionada a cobranças, financiamentos e contratos bancários.', 'bank'],
  ['Direito de Família e Sucessões', 'direito-de-familia-e-sucessoes', 'Divórcio, guarda, alimentos, inventários e partilhas.', 'family'],
  ['Direito Previdenciário', 'direito-previdenciario', 'Benefícios, aposentadorias e revisões perante o INSS.', 'calendar'],
  ['Direito Criminal', 'direito-criminal', 'Defesa técnica e acompanhamento nas diferentes fases do processo.', 'shield'],
].map(([name, slug, description, iconName]) => ({
  name, slug, description, iconName,
  whatsapp: `${site.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de atendimento em ${name}.`)}`,
}));
