import type { Metadata } from 'next';
import { values, awards } from '@/lib/team';
import { stats } from '@/lib/content';
import { PageHeader } from '@/components/site/page-header';
import { Section, SectionHeader } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { TeamGrid } from '@/components/site/team-grid';
import { CTASection } from '@/components/site/cta-section';
import { Container } from '@/components/site/container';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Northbeam is a branding and digital studio in San Francisco. We're twelve people obsessed with craft, speed, and the work that lasts.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Twelve people, one obsession"
        description="We started Northbeam in 2013 because we were tired of choosing between agencies that looked good and agencies that shipped. We built the studio we wanted to hire."
      />

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader eyebrow="Our story" title="Built by makers, for makers" />
          </div>
          <div className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <Reveal>
              <p>
                Northbeam began in a cramped SoMa office with two designers, one
                engineer, and a shared frustration: the agencies we'd worked at
                cared more about their awards than their clients' outcomes. We
                wanted to build something different — a studio where craft and
                shipping weren't in tension.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Twelve years later, we're still small by choice. Twelve people,
                no account managers, no layers between you and the people doing
                the work. We've shipped over 150 projects for startups and
                scale-ups, and our clients have raised more than $2 billion in
                funding with brands and products we helped build.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                We work with companies at every stage — from incorporation to
                Series C — but we're picky. We say no to about 80% of the
                projects that come our way, because we only take work we believe
                we can do better than anyone else. If we're not the right fit,
                we'll tell you who is.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Stats band */}
      <section className="border-y border-border bg-card/20">
        <Container className="py-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <Section>
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="What we believe"
            title="Four things we don't compromise on"
            align="center"
            className="mx-auto items-center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <span className="font-display text-3xl font-bold text-accent/30">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-card/20">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="The team"
            title="The people behind the work"
            description="A small team of senior people who've been doing this for a long time. No juniors learning on your budget."
            align="center"
            className="mx-auto items-center"
          />
          <TeamGrid />
        </div>
      </Section>

      {/* Awards */}
      <Section>
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Recognition"
            title="Awards & press"
            description="We don't enter awards often, but when we do, we tend to do well."
          />
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {awards.map((award, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-center justify-between gap-4 py-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                    <span className="font-display text-2xl font-bold text-muted-foreground/40">
                      {award.year}
                    </span>
                    <span className="font-medium">{award.title}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {award.organization}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
