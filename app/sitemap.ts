import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { projects } from '@/lib/projects';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/work',
    '/services',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services#${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}
