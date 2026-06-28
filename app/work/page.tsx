import type { Metadata } from 'next';
import { PageHeader } from '@/components/site/page-header';
import { WorkGrid } from '@/components/site/work-grid';
import { Section } from '@/components/site/section';
import { CTASection } from '@/components/site/cta-section';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected case studies from Northbeam — branding, web, product, and motion work for ambitious technology companies.',
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Case studies, not just pretty pictures"
        description="Every project here solved a real business problem. Filter by discipline to find work that looks like yours."
      />
      <Section>
        <WorkGrid />
      </Section>
      <CTASection />
    </>
  );
}
