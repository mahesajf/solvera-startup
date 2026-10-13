import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { ProcessSection } from '../components/home/ProcessSection';
import { PillarsSection } from '../components/home/PillarsSection';
import { EngagementModelsSection } from '../components/home/EngagementModelsSection';
import { WhySolveraSection } from '../components/home/WhySolveraSection';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { CtaBanner } from '../components/home/CtaBanner';
import { SEO } from '../components/common/SEO';
import { FAQS_DATA } from '../data/companyData';
import { AppRoute, SeoConfig } from '../types';

interface HomePageProps {
  onNavigate: (route: AppRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const homeSeoConfig: SeoConfig = {
    title: 'DevOps & Web Development | Solvera Technology Labs',
    description:
      'Solvera Technology Labs builds reliable cloud infrastructure, automated CI/CD pipelines, and high-performance web products for startups and growing teams.',
    canonicalPath: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://solvera-tech.com/#organization',
          name: 'Solvera Technology Labs',
          url: 'https://solvera-tech.com',
          email: 'hello@solvera-tech.com',
          description:
            'IT solutions company offering specialized DevOps infrastructure and production web development.',
          foundingDate: '2026',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jakarta',
            addressCountry: 'ID',
          },
        },
        {
          '@type': 'WebSite',
          '@id': 'https://solvera-tech.com/#website',
          url: 'https://solvera-tech.com',
          name: 'Solvera Technology Labs',
          publisher: {
            '@id': 'https://solvera-tech.com/#organization',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO config={homeSeoConfig} />
      <main id="main-content">
        <HomeHero onNavigate={onNavigate} />
        <ProcessSection />
        <PillarsSection />
        <EngagementModelsSection onNavigate={onNavigate} />
        <WhySolveraSection />
        <FaqAccordion items={FAQS_DATA.slice(0, 4)} />
        <CtaBanner onNavigate={onNavigate} />
      </main>
    </>
  );
};
