'use client';

import * as React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Dribbble, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { Container } from '@/components/site/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const socialLinks = [
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Dribbble, href: siteConfig.social.dribbble, label: 'Dribbble' },
];

export function Footer() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'done'>('idle');

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Placeholder: wire to your email provider (Resend, ConvertKit, etc.)
    setStatus('done');
    setEmail('');
  }

  return (
    <footer className="border-t border-border bg-card/30">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <span className="text-base font-bold">N</span>
              </span>
              {siteConfig.name}
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Studio</h3>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Contact</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.phone}
            </a>
            <p className="text-sm text-muted-foreground">
              {siteConfig.address}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Notes on craft, process, and the work we admire. Monthly, never
              noisy.
            </p>
            {status === 'done' ? (
              <p className="text-sm font-medium text-accent">
                Thanks — you&apos;re on the list.
              </p>
            ) : (
              <form onSubmit={onSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  className="flex-1"
                />
                <Button type="submit" size="icon" aria-label="Subscribe">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with care in San Francisco.
          </p>
        </div>
      </Container>
    </footer>
  );
}
