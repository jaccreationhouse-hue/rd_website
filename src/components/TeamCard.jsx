import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function TeamCard({ member }) {
  const { name, role, image, quote, initials } = member;

  return (
    <Card className="h-full rounded-none border-border shadow-[4px_4px_0px_0px_var(--color-border)] transition-all bg-card flex flex-col p-6 text-center hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--color-border)]">
      <div className="flex justify-center mb-5">
        <Avatar className="h-24 w-24 border-2 border-accent shadow-sm">
          <AvatarImage src={image} alt={`Portrait of ${name}`} className="object-cover object-[center_top]" />
          <AvatarFallback className="bg-primary text-accent font-heading font-bold text-2xl border-none">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="mb-4">
        <h3 className="font-heading font-bold text-lg text-foreground mb-1">
          {name}
        </h3>
        <Badge variant="secondary" className="bg-muted text-foreground/80 font-semibold tracking-wider rounded-none uppercase text-[10px]">
          {role}
        </Badge>
      </div>

      {quote && (
        <blockquote className="mt-auto text-sm text-muted-foreground italic border-l-2 border-accent pl-3 text-left leading-relaxed">
          "{quote}"
        </blockquote>
      )}
    </Card>
  );
}
