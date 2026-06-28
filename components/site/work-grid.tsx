'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectCategories, type ProjectCategory } from '@/lib/projects';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function WorkGrid() {
  const [filter, setFilter] = React.useState<'All' | ProjectCategory>('All');

  const filtered = React.useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="flex flex-col gap-10">
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all',
              filter === cat
                ? 'bg-accent text-accent-foreground'
                : 'border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 scale-90">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {project.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
