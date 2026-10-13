export type AppRoute = '/' | '/services' | '/about' | '/contact';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLd: Record<string, unknown>;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'DevOps' | 'Web Development' | 'General';
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  headline: string;
  overview: string;
  whoItIsFor: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  typicalOutcomes: string[];
  ctaLabel: string;
  ctaRoute: AppRoute;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: 'DevOps' | 'Web Development' | 'Both' | '';
  budget: string;
  message: string;
}
