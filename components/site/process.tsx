'use client';

import { processSteps } from '@/lib/content';
import { Section, SectionHeader } from '@/components/site/section';
import { StaggerGroup, StaggerItem } from '@/components/site/reveal';

export function Process() {
  return (
    <Section id="process">
      <div className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="How we work"
          title="A process built for momentum"
          description="Four phases, no black boxes. You always know what we're doing, why we're doing it, and what comes next."
          align="center"
          className="mx-auto items-center"
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-border lg:block" />

          <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <StaggerItem key={step.number} className="relative">
                <div className="flex flex-col gap-4">
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background">
                    <step.icon className="h-8 w-8 text-accent" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
