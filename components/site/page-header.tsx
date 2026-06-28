import { Reveal } from '@/components/site/reveal';
import { Container } from '@/components/site/container';
import { cn } from '@/lib/utils';

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('relative overflow-hidden grain border-b border-border', className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-dark dark:opacity-100 opacity-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/30 to-background" />
      <Container className="py-20 sm:py-28 lg:py-32">
        <Reveal>
          {eyebrow && (
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl text-pretty">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
