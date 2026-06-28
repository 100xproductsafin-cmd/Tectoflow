'use client';

import { clientLogos } from '@/lib/content';
import { Container } from '@/components/site/container';

export function LogoMarquee() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-border bg-card/20 py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by teams at
        </p>
      </Container>
      <div className="marquee-pause relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {logos.map((logo, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-muted-foreground/60 transition-colors hover:text-foreground sm:text-3xl"
            >
              {logo.name}
            </span>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
