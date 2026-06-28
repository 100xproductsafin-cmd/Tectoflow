import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { projects, getProjectBySlug } from '@/lib/projects';
import { Container } from '@/components/site/container';
import { Section } from '@/components/site/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/reveal';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} — Northbeam`,
      description: project.excerpt,
      images: [{ url: project.cover, width: 1200, height: 750, alt: project.title }],
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-dark dark:opacity-100 opacity-50" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/30 to-background" />
        <Container className="py-16 sm:py-20 lg:py-24">
          <Reveal>
            <Link
              href="/work"
              className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All work
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">{project.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {project.client} · {project.year}
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl text-pretty">
              {project.excerpt}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Cover image */}
      <Container className="py-12">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </Container>

      {/* Problem / Solution / Results */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Case study
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {project.client}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <Reveal>
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-semibold text-accent">
                  The problem
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  {project.problem}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-semibold text-accent">
                  The solution
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  {project.solution}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-semibold text-accent">
                  The results
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {project.results.map((result) => (
                    <div
                      key={result.label}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <p className="font-display text-3xl font-bold tracking-tight text-foreground">
                        {result.value}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section className="bg-card/20">
        <div className="flex flex-col gap-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Gallery
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.gallery.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className={`relative overflow-hidden rounded-2xl border border-border ${
                    i === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <Reveal>
          <figure className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Quote className="h-10 w-10 text-accent/30" />
            <blockquote className="font-display text-xl font-medium leading-relaxed tracking-tight sm:text-2xl text-balance">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.testimonial.avatar}
                alt={project.testimonial.author}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {project.testimonial.role}
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* Next project */}
      <section className="border-t border-border">
        <Container className="py-16">
          <Reveal>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col items-center justify-between gap-6 sm:flex-row"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Next project
                </span>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {nextProject.title}
                </h2>
                <p className="text-muted-foreground">{nextProject.client}</p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card/20">
        <Container className="flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a project in mind?
          </h2>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Start a project</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
