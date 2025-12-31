
export enum AppRoutes {
  HOME = '/',
  ABOUT = '/sobre',
  PROJECTS = '/projetos',
  EBOOK = '/ebook',
  DONATE = '/doar',
  TRANSPARENCY = '/transparencia'
}

export interface Project {
  id: string;
  title: string;
  category: 'Educação' | 'Campanhas' | 'Eventos' | 'Parcerias';
  description: string;
  location: string;
  status: 'em andamento' | 'concluído';
  image: string;
  fullContent?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface DonationTier {
  amount: number;
  label: string;
  impact: string;
}
