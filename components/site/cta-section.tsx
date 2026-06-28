'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/site/container';

export function CTASection() {
  return (
    <section className="relative overflow-hidden grain">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-dark dark:opacity-100 opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/20 to-background" />

      <Container className="flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-widest text-accent"
        >
          Let&apos;s build
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance"
        >
          Let&apos;s build something great together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-muted-foreground text-pretty"
        >
          Tell us about your company and what you&apos;re trying to achieve.
          We&apos;ll reply within two business days — no sales calls, no
          pressure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="rounded-full text-base">
            <Link href="/contact">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full text-base"
          >
            <Link href="/work">See our work</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
