import { cn } from '@/lib/utils';
import { Container } from '@/components/site/container';

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn('section-py', className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
