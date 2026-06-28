export type ProjectCategory = 'Branding' | 'Web' | 'Product' | 'Motion';

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  cover: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  gallery: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
};

// Placeholder data — swap with real case studies. Images use Pexels stock.
export const projects: Project[] = [
  {
    slug: 'lumen-os',
    title: 'Lumen OS',
    client: 'Lumen',
    category: 'Branding',
    year: '2025',
    cover:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt:
      'A complete brand system for an open-source developer platform, built to feel both technical and human.',
    tags: ['Brand Strategy', 'Identity', 'Guidelines'],
    featured: true,
    problem:
      'Lumen had a powerful open-source runtime but a brand that felt like a side project. Contributors were confused about what the project stood for, and enterprise users hesitated to adopt a tool that looked unpolished next to the incumbents.',
    solution:
      'We ran a two-week positioning sprint with the core maintainers, then built a full identity system around the idea of "infrastructure you can trust." A custom wordmark, a technical-but-warm color system, and a documentation design language that made complex concepts feel approachable.',
    results: [
      { label: 'GitHub stars', value: '+340%' },
      { label: 'Contributors', value: '+180%' },
      { label: 'Enterprise signups', value: '2.4x' },
    ],
    gallery: [
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    testimonial: {
      quote:
        'Northbeam didn\'t just hand us a logo. They gave us a brand that made our community proud to share it. Our GitHub stars tripled in the quarter after launch.',
      author: 'Maya Chen',
      role: 'Co-founder, Lumen',
      avatar:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  },
  {
    slug: 'harbor-finance',
    title: 'Harbor Finance',
    client: 'Harbor',
    category: 'Web',
    year: '2025',
    cover:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt:
      'A marketing site rebuild that turned a complex B2B fintech into a story investors and CFOs instantly understood.',
    tags: ['Web Design', 'Next.js', 'Conversion'],
    featured: true,
    problem:
      'Harbor\'s old site buried their value proposition under jargon. Bounce rates were high, and sales calls started with "so what do you actually do?" The team needed a site that did the selling before the demo.',
    solution:
      'We rebuilt the narrative around three concrete outcomes, designed a modular page system in Figma, and shipped a Next.js site with a headless CMS. Every section was A/B tested against the old pages in the first two weeks.',
    results: [
      { label: 'Demo conversion', value: '+62%' },
      { label: 'Bounce rate', value: '-41%' },
      { label: 'Organic traffic', value: '+128%' },
    ],
    gallery: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    testimonial: {
      quote:
        'Our sales cycle shortened by two weeks. The site does the qualification work for us now — reps start calls with warm, informed leads.',
      author: 'David Park',
      role: 'VP Marketing, Harbor',
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  },
  {
    slug: 'field-notes-app',
    title: 'Field Notes',
    client: 'Field Notes',
    category: 'Product',
    year: '2024',
    cover:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt:
      'Product design for a field-data collection app used by 12,000 researchers across 40 countries.',
    tags: ['Product Design', 'UX', 'Design System'],
    featured: true,
    problem:
      'Field Notes had a loyal user base but a UI that hadn\'t evolved in five years. New users dropped off during onboarding, and the team couldn\'t ship features without breaking the design.',
    solution:
      'We designed a component library and rebuilt the core flows — onboarding, data capture, and sync — around offline-first principles. The new system let the engineering team ship three times faster.',
    results: [
      { label: 'Onboarding completion', value: '+74%' },
      { label: 'Feature velocity', value: '3x' },
      { label: 'User retention (30d)', value: '+22%' },
    ],
    gallery: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    testimonial: {
      quote:
        'They understood our users — researchers working in remote field sites — better than we did. The offline-first redesign changed how our product feels.',
      author: 'Sara Okonkwo',
      role: 'Head of Product, Field Notes',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  },
  {
    slug: 'pulse-health',
    title: 'Pulse Health',
    client: 'Pulse',
    category: 'Branding',
    year: '2024',
    cover:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt:
      'A warm, human brand for a telehealth startup entering a cold, clinical market.',
    tags: ['Brand Strategy', 'Identity', 'Motion'],
    featured: false,
    problem:
      'Pulse was entering a crowded telehealth market where every competitor looked like a hospital. They needed a brand that felt like care, not a clinic.',
    solution:
      'We built a brand around the idea of "health, made human" — a soft color palette, a rounded type system, and a motion language that breathed. The result felt warm without losing medical credibility.',
    results: [
      { label: 'Brand recall', value: '+58%' },
      { label: 'App installs', value: '+210%' },
      { label: 'NPS', value: '+34' },
    ],
    gallery: [
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    testimonial: {
      quote:
        'Patients tell us our app feels different from every other health tool. That feeling is the brand Northbeam built.',
      author: 'Dr. James Liu',
      role: 'CEO, Pulse',
      avatar:
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  },
  {
    slug: 'atlas-devtools',
    title: 'Atlas DevTools',
    client: 'Atlas',
    category: 'Web',
    year: '2024',
    cover:
      'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt:
      'A developer documentation portal that turned a steep learning curve into a 10-minute "aha."',
    tags: ['Web Design', 'Docs', 'Developer Experience'],
    featured: false,
    problem:
      'Atlas had powerful developer tools but documentation that drove new users away. Time-to-first-API-call was over an hour, and the docs were a maze.',
    solution:
      'We redesigned the docs around a single goal: get a developer to their first successful API call in under five minutes. Interactive code samples, a guided quickstart, and a search-first architecture.',
    results: [
      { label: 'Time to first call', value: '-83%' },
      { label: 'Doc satisfaction', value: '94%' },
      { label: 'Activation rate', value: '+47%' },
    ],
    gallery: [
      'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    testimonial: {
      quote:
        'Our activation rate nearly doubled. The docs went from our biggest churn driver to our best sales asset.',
      author: 'Priya Raman',
      role: 'Developer Advocate, Atlas',
      avatar:
        'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  },
  {
    slug: 'verge-motion',
    title: 'Verge',
    client: 'Verge',
    category: 'Motion',
    year: '2025',
    cover:
      'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt:
      'A launch brand film and motion system for a climate-tech company announcing their Series B.',
    tags: ['Motion', 'Brand Film', 'Animation'],
    featured: false,
    problem:
      'Verge had a breakthrough carbon-capture technology but struggled to make it emotionally resonant. Investors understood the science; the public didn\'t.',
    solution:
      'We created a 60-second brand film and a motion system that visualized carbon capture as a living, breathing process. The film became the centerpiece of their Series B announcement.',
    results: [
      { label: 'Film views (30d)', value: '2.1M' },
      { label: 'Series B raised', value: '$48M' },
      { label: 'Press features', value: '40+' },
    ],
    gallery: [
      'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    testimonial: {
      quote:
        'The film made our technology feel real to people who\'d never thought about carbon capture. It was the moment our company became a movement.',
      author: 'Elena Vasquez',
      role: 'Founder, Verge',
      avatar:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  },
];

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Branding',
  'Web',
  'Product',
  'Motion',
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
