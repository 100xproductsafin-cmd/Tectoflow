import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';
import { faqs } from '@/lib/faqs';
import { PageHeader } from '@/components/site/page-header';
import { Section, SectionHeader } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { CTASection } from '@/components/site/cta-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Brand strategy, web design, product design, launch sprints, growth design, and motion — six disciplines, one studio.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Six disciplines, one studio"
        description="We're built to take you from positioning to production without the handoffs, delays, and lost-in-translation moments that come from working with three separate vendors."
      />

      {/* Detailed services */}
      <Section>
        <div className="flex flex-col gap-20">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <div
                id={service.slug}
                className="grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground text-pretty">
                    {service.short}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      Starting at
                    </span>
                    <span className="font-display text-2xl font-bold text-foreground">
                      {service.startingPrice}
                    </span>
                  </div>
                  <Button asChild className="mt-4 w-fit rounded-full">
                    <Link href="/contact">
                      Start a project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                    {service.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      What&apos;s included
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <Check className="h-3 w-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing approach */}
      <Section className="bg-card/20">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Pricing"
            title="Clear prices, no surprises"
            description="We work on fixed-scope projects with upfront pricing, or monthly subscriptions for ongoing partnerships. No hourly billing, no scope creep, no invoices that make you wince."
            align="center"
            className="mx-auto items-center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                name: 'Project',
                price: 'Fixed',
                description:
                  'A defined scope with a clear deliverable and timeline. Best for brands, sites, and product phases.',
                features: [
                  'Fixed scope & price',
                  'Defined timeline',
                  'Milestone reviews',
                  '30-day post-launch support',
                ],
                highlight: false,
              },
              {
                name: 'Sprint',
                price: '4 weeks',
                description:
                  'The Launch Sprint — brand and landing page, compressed. Best for teams preparing to raise.',
                features: [
                  '1-week strategy',
                  '1-week identity',
                  '2-week build',
                  'Launch playbook',
                ],
                highlight: true,
              },
              {
                name: 'Subscription',
                price: 'Monthly',
                description:
                  'A dedicated senior designer on retainer. Best for funded teams shipping constantly.',
                features: [
                  'Dedicated designer',
                  'Weekly sprints',
                  'Slack integration',
                  'Pause anytime',
                ],
                highlight: false,
              },
            ].map((tier) => (
              <Reveal key={tier.name}>
                <div
                  className={`flex h-full flex-col gap-6 rounded-2xl border p-8 ${
                    tier.highlight
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-card'
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-xl font-semibold">
                      {tier.name}
                    </h3>
                    <p className="font-display text-3xl font-bold">
                      {tier.price}
                    </p>
                  </div>
                  <p
                    className={`text-sm ${
                      tier.highlight ? 'text-accent-foreground/80' : 'text-muted-foreground'
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <Check className="h-4 w-4 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={tier.highlight ? 'secondary' : 'outline'}
                    className="mt-auto w-full rounded-full"
                  >
                    <Link href="/contact">Request a quote</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions, answered"
            description="The things we hear most often. If yours isn't here, just ask."
          />
          <div className="lg:pt-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
