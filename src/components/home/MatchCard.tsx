import { Calendar, MapPin, Ticket, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Match } from '@/types/match';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="aspect-[16/10] overflow-hidden">
        <img 
          src={match.image} 
          alt={match.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
        
        <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-primary hover:bg-white/20 transition-all border border-white/10">
          <Heart className="h-5 w-5" />
        </button>
        
        <Badge className="absolute top-4 left-4 bg-primary text-white border-none shadow-lg shadow-primary/40 px-3 py-1 font-semibold rounded-full">
          {match.sport}
        </Badge>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-heading line-clamp-1 group-hover:text-primary transition-colors">
              {match.title}
            </h3>
            <span className="text-lg font-bold font-heading text-primary">${match.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{match.date} • {match.time}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{match.city}</span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-border/40">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center border border-border/40 overflow-hidden">
              <img 
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${match.organizer}`} 
                alt={match.organizer} 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors line-clamp-1">
              {match.organizer}
            </span>
          </div>
          <Button size="sm" className="rounded-full px-5 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all">
            <Ticket className="mr-2 h-4 w-4" />
            Buy Tickets
          </Button>
        </div>
      </div>
    </Card>
  );
}
