import { Hero } from '@/components/site/hero';
import { LogoMarquee } from '@/components/site/logo-marquee';
import { ServicesOverview } from '@/components/site/services-overview';
import { FeaturedWork } from '@/components/site/featured-work';
import { Process } from '@/components/site/process';
import { Stats } from '@/components/site/stats';
import { Testimonials } from '@/components/site/testimonials';
import { CTASection } from '@/components/site/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesOverview />
      <FeaturedWork />
      <Process />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}
