export const siteConfig = {
  name: 'Northbeam',
  tagline: 'Branding & digital studio for ambitious tech',
  description:
    'Northbeam is a branding and digital product studio building identities, websites, and products for ambitious technology companies.',
  url: 'https://northbeam.studio',
  email: 'hello@northbeam.studio',
  phone: '+1 (415) 555-0142',
  address: '535 Mission St, Suite 1400, San Francisco, CA 94105',
  social: {
    twitter: 'https://twitter.com/northbeamstudio',
    instagram: 'https://instagram.com/northbeamstudio',
    linkedin: 'https://linkedin.com/company/northbeamstudio',
    dribbble: 'https://dribbble.com/northbeamstudio',
  },
  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
