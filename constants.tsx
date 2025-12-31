
import React from 'react';
import { Project, Testimonial, DonationTier } from './types';
import { Shield, BookOpen, HeartHandshake, Users, School, MapPin, Share2 } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/#home' },
  { name: 'Sobre', path: '/#sobre' },
  { name: 'Projetos', path: '/#projetos' },
  { name: 'E-book', path: '/ebook' }
];

export const PILLARS = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Sensibilização',
    desc: 'Campanhas e mobilização social para quebrar o silêncio sobre o abuso.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Educação',
    desc: 'Palestras e materiais didáticos para prevenir e educar a comunidade.'
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Apoio',
    desc: 'Orientação e encaminhamento seguro para a rede de proteção local.'
  }
];

export const STATS = [
  { value: '50k+', label: 'Pessoas alcançadas' },
  { value: '120+', label: 'Escolas e Igrejas' },
  { value: '15k+', label: 'Materiais distribuídos' },
  { value: '45', label: 'Cidades impactadas' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Educação que Protege',
    category: 'Educação',
    description: 'Capacitação de professores e líderes comunitários para identificação de sinais. Um trabalho focado em fortalecer a primeira linha de defesa das crianças, garantindo que o ambiente escolar seja seguro.',
    location: 'Região Metropolitana',
    status: 'em andamento',
    image: 'https://i.ibb.co/BVLPPWSk/210772234-174597071313394-335233663344008920-n.jpg',
    fullContent: 'O projeto foca na base. Treinamos educadores para que saibam acolher e identificar possíveis vulnerabilidades de forma técnica e empática.'
  },
  {
    id: '2',
    title: 'Violência Doméstica',
    category: 'Campanhas',
    description: 'Ações de conscientização e apoio para mulheres e famílias. Focamos na prevenção da violência no lar e no fortalecimento da autoestima através do projeto Mulher de Valor.',
    location: 'Nacional',
    status: 'em andamento',
    image: 'https://i.ibb.co/nN5CThZh/251978315-3156731154556522-2971321691172456271-n.jpg',
    fullContent: 'Atuamos diretamente com famílias para quebrar o ciclo da violência doméstica, oferecendo rodas de conversa e materiais que valorizam o papel da mulher e a harmonia no lar.'
  },
  {
    id: '4',
    title: 'Ciclo de Palestras Presenciais',
    category: 'Eventos',
    description: 'Encontros dinâmicos em igrejas e centros comunitários para levar informação técnica e acolhimento. Momentos de troca direta com a fundadora Rosane Beatriz.',
    location: 'Diversas Localidades',
    status: 'em andamento',
    image: 'https://i.ibb.co/XfdWfFBh/240075635-229971759052746-6209281052287626262-n.jpg',
    fullContent: 'Nossas palestras são o coração do projeto, onde desmistificamos o abuso e capacitamos adultos a protegerem suas crianças.'
  },
  {
    id: '5',
    title: 'Mobilização Social e Blitz',
    category: 'Eventos',
    description: 'Ações de rua com distribuição de materiais educativos e diálogo com a população. Ocupamos espaços públicos para que o silêncio não prevaleça.',
    location: 'Praças e Centros',
    status: 'em andamento',
    image: 'https://i.ibb.co/tpcX0dMH/290977478-158387013406002-7397028350029109683-n.jpg',
    fullContent: 'A blitz educativa leva a mensagem de prevenção para onde as pessoas estão, multiplicando o alcance da nossa causa.'
  },
  {
    id: '3',
    title: 'Luz nas Comunidades',
    category: 'Parcerias',
    description: 'Instalação de pontos de apoio e informação em bairros periféricos, criando células de proteção local com moradores e líderes treinados pela nossa equipe.',
    location: 'Comunidades Locais',
    status: 'em andamento',
    image: 'https://i.ibb.co/BK77TfZW/199126179-334147451431052-599685989437393994-n.jpg',
    fullContent: 'Trabalho contínuo em parceria com associações de moradores para criar uma rede de vigília e proteção.'
  }
];

export const DONATION_TIERS: DonationTier[] = [
  { amount: 20, label: 'Básico', impact: 'Ajuda a imprimir 10 cartilhas educativas' },
  { amount: 50, label: 'Intermediário', impact: 'Apoia uma ação educativa local' },
  { amount: 100, label: 'Fortalecimento', impact: 'Fortalece campanhas e deslocamentos' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Pr. Marister',
    role: 'Líder Comunitário e Educador',
    content: 'O projeto Luz aos Pequeninos trouxe clareza e ferramentas práticas para protegermos nossas crianças. É um trabalho de amor, técnica e, acima de tudo, prevenção real que transforma comunidades.',
    image: 'https://picsum.photos/seed/marister/100/100'
  },
  {
    id: '2',
    name: 'Maria Silva',
    role: 'Diretora Escolar',
    content: 'A palestra do projeto mudou a forma como nossos professores observam o comportamento dos alunos. Essencial para garantir um ambiente escolar verdadeiramente seguro.',
    image: 'https://picsum.photos/seed/maria/100/100'
  }
];

export const FAQS = [
  {
    q: 'Para onde vai o dinheiro?',
    a: '100% das doações são destinadas à produção de materiais educativos, logística de palestras e manutenção de campanhas digitais e físicas.'
  },
  {
    q: 'O projeto atua onde?',
    a: 'Atuamos principalmente em escolas, igrejas e centros comunitários em diversas cidades do Brasil, com foco em regiões de maior vulnerabilidade.'
  },
  {
    q: 'Como convidar para palestra?',
    a: 'Basta preencher o formulário na página de contato ou nos enviar um WhatsApp informando sua localidade e o público desejado.'
  }
];
