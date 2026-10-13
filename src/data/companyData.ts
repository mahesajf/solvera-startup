import { FAQItem, ServiceDetail, TeamMember } from '../types';

export const COMPANY_INFO = {
  name: 'Solvera Technology Labs',
  shortName: 'STL',
  legalName: 'Solvera Technology Labs, Inc.',
  foundedYear: '2026',
  location: 'Jakarta, Indonesia',
  email: 'hello@solvera-tech.com',
  domain: 'https://solvera-tech.com',
  linkedin: 'https://www.linkedin.com/company/solvera-technology-labs',
  turnaroundEstimate: 'Within 24 business hours',
  tagline: 'Pragmatic DevOps infrastructure and production-grade web systems for engineering teams that cannot afford downtime.',
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    tagline: 'Automated CI/CD, Containerization, and Cloud Architecture',
    headline: 'Deploy faster with zero downtime and automated rollbacks.',
    overview:
      'We design and maintain cloud environments that remove deployment friction. You get codified infrastructure, automated security checks, and continuous delivery pipelines that run without manual intervention.',
    whoItIsFor: [
      'Early-stage startups outgrowing manual server setups and ad-hoc scripts.',
      'SMEs preparing for high user volume or enterprise SOC 2 compliance requirements.',
      'Development teams losing hours each week to slow, flaky test and deployment runs.',
    ],
    deliverables: [
      {
        title: 'CI/CD Pipeline Setup',
        description: 'Automated GitHub Actions or GitLab CI pipelines with linting, unit tests, image builds, and automated blue-green deployments.',
      },
      {
        title: 'Cloud Infrastructure & Architecture',
        description: 'Hardened cloud foundations on AWS or Google Cloud, configured using modular Terraform scripts with strict network isolation.',
      },
      {
        title: 'Containerization & Kubernetes',
        description: 'Multi-stage Docker builds, Kubernetes cluster provisioning, Helm charts, and automated horizontal pod autoscaling.',
      },
      {
        title: 'Monitoring & Observability',
        description: 'Centralized telemetry with Prometheus, Grafana, and structured logging so your engineers spot bottlenecks before users do.',
      },
      {
        title: 'Infrastructure as Code (IaC)',
        description: 'Version-controlled infrastructure definitions that reproduce environments identically across staging and production.',
      },
      {
        title: 'Security & Access Baseline',
        description: 'Least-privilege IAM policies, secrets management via HashiCorp Vault or AWS Secrets Manager, and automated vulnerability scanning.',
      },
    ],
    typicalOutcomes: [
      'Deployment cycles drop from hours of manual coordination to automated 8-minute pipeline runs.',
      'Zero downtime on releases with automated canary rollbacks when health checks fail.',
      'Elimination of cloud cost waste through rightsized instances and scheduled development environments.',
      'Audit-ready infrastructure code with complete git commit history for compliance reviews.',
    ],
    ctaLabel: 'Book a free infrastructure review',
    ctaRoute: '/contact',
  },
  {
    id: 'web-development',
    title: 'Web Application Development',
    tagline: 'Modern Web Apps, Marketing Engines, and Headless Platforms',
    headline: 'Fast, accessible web applications engineered for reliable conversions.',
    overview:
      'We engineer production web applications using TypeScript, React, and Next.js. We focus on sub-second page loads, strict accessibility, and clean component architecture that your in-house team can maintain effortlessly.',
    whoItIsFor: [
      'Startups needing a credible, high-converting product interface or customer portal.',
      'B2B software businesses requiring responsive web apps with complex workflow requirements.',
      'Companies upgrading legacy web stacks to modern, maintainable TypeScript frameworks.',
    ],
    deliverables: [
      {
        title: 'Custom Web Application Development',
        description: 'Single-page and server-rendered web applications with typed state management, responsive UI, and secure API integration.',
      },
      {
        title: 'High-Converting Company Websites',
        description: 'Fast, polished marketing websites built on component systems that make future page additions quick and consistent.',
      },
      {
        title: 'Performance & SEO-Ready Builds',
        description: 'Lighthouse 95+ performance scores, semantic HTML5 structure, OpenGraph cards, and schema JSON-LD for search engines.',
      },
      {
        title: 'E-Commerce & Billing Portals',
        description: 'Checkout flows, Stripe customer portals, subscription handling, and catalog management with webhook safety.',
      },
      {
        title: 'Design System Implementation',
        description: 'Tailwind CSS component libraries with tokens for colors, spacing, and typography that enforce visual consistency.',
      },
      {
        title: 'Codebase Maintenance & Upgrades',
        description: 'Dependency updates, test coverage expansion, accessibility remediation, and refactoring of legacy codebases.',
      },
    ],
    typicalOutcomes: [
      'Sub-second first contentful paint and green Core Web Vitals across both mobile and desktop viewports.',
      'WCAG AA accessible markup that protects your business and welcomes all users.',
      'Strict TypeScript types that prevent runtime crashes and simplify onboarding new engineers.',
      'Clean separation between presentation and business logic for long-term codebase health.',
    ],
    ctaLabel: 'Discuss your web project',
    ctaRoute: '/contact',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you structure an engagement with Solvera?',
    answer:
      'We work in two formats: structured two-to-four-week engineering sprints for defined deliverables (such as CI/CD setup or a website build) and monthly engineering pods for continuous DevOps maintenance or ongoing product development. Every engagement starts with a technical scoping call and a fixed-scope proposal.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'How do your DevOps engineers collaborate with our existing developers?',
    answer:
      'We integrate directly into your daily workflow. We join your Slack or Discord, collaborate via pull requests in your GitHub or GitLab repositories, and document every architecture decision in your team wiki or repository readmes. You retain 100 percent ownership of all code and infrastructure accounts.',
    category: 'DevOps',
  },
  {
    id: 'faq-3',
    question: 'What is included in an infrastructure review?',
    answer:
      'Our team inspects your cloud architecture, deployment scripts, security groups, IAM roles, and monthly bills. We deliver an actionable report highlighting critical security gaps, single points of failure, slow pipeline bottlenecks, and immediate cost savings.',
    category: 'DevOps',
  },
  {
    id: 'faq-4',
    question: 'What web frameworks and technologies do you build with?',
    answer:
      'Our primary stack is TypeScript, React, and Next.js, styled with Tailwind CSS. We use Express or Node.js for backend services, PostgreSQL for relational storage, and Vite for modern client tooling. We choose stable, well-maintained libraries rather than chasing unvetted tools.',
    category: 'Web Development',
  },
  {
    id: 'faq-5',
    question: 'Do we own the code and cloud accounts upon completion?',
    answer:
      'Yes, completely. All repositories, Terraform configurations, Dockerfiles, and documentation are committed directly to your version control. We build on your cloud provider accounts so you are never locked in.',
    category: 'General',
  },
  {
    id: 'faq-6',
    question: 'How quickly can your team begin working on a project?',
    answer:
      'Following our initial discovery review and agreement on scope, we typically begin active sprint onboarding within 3 to 5 business days.',
    category: 'General',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member-1',
    name: '[NAME]',
    role: 'Principal Cloud Architect',
    focus: 'AWS/GCP infrastructure, Terraform, and Kubernetes orchestration.',
  },
  {
    id: 'member-2',
    name: '[NAME]',
    role: 'Lead Systems & DevOps Engineer',
    focus: 'CI/CD automation, Docker pipelines, and cluster observability.',
  },
  {
    id: 'member-3',
    name: '[NAME]',
    role: 'Senior Full-Stack Web Engineer',
    focus: 'TypeScript, React architectures, performance, and API design.',
  },
  {
    id: 'member-4',
    name: '[NAME]',
    role: 'Frontend & Accessibility Specialist',
    focus: 'Design systems, WCAG AA compliance, and responsive layouts.',
  },
];

export const TECH_STACK_CATEGORIES = [
  {
    category: 'Cloud & Infrastructure',
    items: ['Amazon Web Services', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'Terraform', 'Helm'],
  },
  {
    category: 'CI/CD & Observability',
    items: ['GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana', 'ArgoCD', 'Datadog'],
  },
  {
    category: 'Frontend & UI Engineering',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'Radix UI'],
  },
  {
    category: 'Backend & Data Storage',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'REST & GraphQL', 'Prisma / Drizzle'],
  },
];

export const CORE_VALUES = [
  {
    number: '01',
    title: 'Clarity Over Complexity',
    description:
      'We avoid over-engineering. If a simple Docker Compose file solves your problem reliably, we do not force a complex multi-cluster Kubernetes setup onto your team.',
  },
  {
    number: '02',
    title: 'Infrastructure as Code First',
    description:
      'Every server configuration, security group, and environment variable is committed to git. Manual cloud console clicks create technical debt; automated code prevents it.',
  },
  {
    number: '03',
    title: 'Zero Vendor Lock-In',
    description:
      'We build systems using open-source, industry-standard tooling. You hold all repository keys and cloud credentials from day one.',
  },
  {
    number: '04',
    title: 'Measurable Outcomes',
    description:
      'We measure success with numbers your team can verify: pipeline duration, test execution speed, uptime metrics, and PageSpeed performance.',
  },
];
