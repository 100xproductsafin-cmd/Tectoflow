'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';
import { Section, SectionHeader } from '@/components/site/section';
import { StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { cn } from '@/lib/utils';

export function ServicesOverview() {
  return (
    <Section id="services">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What we do"
            title="Six ways we help you win"
            description="From the first positioning workshop to the last line of production code — we cover the full spectrum of brand and digital."
          />
          <Link
            href="/services"
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            All services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className={cn(
                  'group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300',
                  'hover:border-accent/40 hover:bg-card/60 hover:shadow-lg hover:shadow-accent/5',
                  'hover:-translate-y-1'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {service.short}
                  </p>
                </div>
                <div className="mt-auto pt-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    From {service.startingPrice}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}
