'use client';

import * as React from 'react';
import { Twitter, Linkedin, Dribbble } from 'lucide-react';
import { team, type TeamMember } from '@/lib/team';
import { StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { cn } from '@/lib/utils';

function TeamCard({ member }: { member: TeamMember }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border bg-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

        {/* Social links on hover */}
        <div
          className={cn(
            'absolute right-4 top-4 flex flex-col gap-2 transition-all duration-300',
            hovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          )}
        >
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on Twitter`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.social.dribbble && (
            <a
              href={member.social.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on Dribbble`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Dribbble className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {member.name}
        </h3>
        <p className="text-sm text-accent">{member.role}</p>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export function TeamGrid() {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((member) => (
        <StaggerItem key={member.name}>
          <TeamCard member={member} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
