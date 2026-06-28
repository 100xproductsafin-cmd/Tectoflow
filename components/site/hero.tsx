'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/site/container';

export function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      {/* Animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-dark dark:opacity-100 opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 dark:bg-gradient-to-b dark:from-background/0 dark:via-background/40 dark:to-background" />

      <Container className="flex min-h-[88vh] flex-col justify-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Branding &amp; digital studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl text-balance"
        >
          We build brands that{' '}
          <span className="text-accent">earn attention</span> in a world
          that&apos;s learned to ignore it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl text-pretty"
        >
          Northbeam is a branding and digital product studio for ambitious
          technology companies. Strategy, design, and build — under one roof,
          without the agency overhead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
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
            <Link href="/work">
              <Play className="mr-2 h-4 w-4" />
              View our work
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex items-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex -space-x-2">
            {[
              'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80',
              'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80',
              'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=80',
              'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=80',
            ].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <p>
            Trusted by <span className="font-semibold text-foreground">150+</span>{' '}
            founders and product teams
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
