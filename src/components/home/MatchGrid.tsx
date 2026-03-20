import { useState, useMemo } from 'react';
import { MatchCard } from './MatchCard';
import type { Match, Sport } from '@/types/match';
import { Search, SlidersHorizontal, Trophy, Target, Volleyball } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MOCK_MATCHES: Match[] = [
  {
    id: '1',
    title: 'Coupe des Champions de Football',
    sport: 'Football',
    date: 'Ven 3 Avr 2026',
    time: '20:00 GMT',
    location: 'Stade Métropolitain',
    city: 'Madrid, Espagne',
    price: 377,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000',
    organizer: 'UEFA',
  },
  {
    id: '2',
    title: 'Finales Européennes de Handball',
    sport: 'Handball',
    date: 'Sam 21 Mar 2026',
    time: '18:30 GMT',
    location: 'Lanxess Arena',
    city: 'Cologne, Allemagne',
    price: 547,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=2000',
    organizer: 'EHF',
  },
  {
    id: '3',
    title: 'Ligue Mondiale de Volleyball',
    sport: 'Volleyball',
    date: 'Dim 5 Avr 2026',
    time: '21:00 GMT',
    location: 'Nelson Mandela Forum',
    city: 'Florence, Italie',
    price: 79,
    image: 'https://images.unsplash.com/photo-1592656670411-b1241df2ed07?auto=format&fit=crop&q=80&w=2000',
    organizer: 'FIVB',
  },
  {
    id: '4',
    title: 'Match de Premier League',
    sport: 'Football',
    date: 'Sam 25 Jui 2026',
    time: '14:00 GMT',
    location: 'Stade d\'Anfield',
    city: 'Liverpool, UK',
    price: 405,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=2000',
    organizer: 'Premier League',
  },
  {
    id: '5',
    title: 'Championnat du Monde IHF',
    sport: 'Handball',
    date: 'Dim 5 Jui 2026',
    time: '16:00 GMT',
    location: 'Accor Arena',
    city: 'Paris, France',
    price: 94,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2000',
    organizer: 'IHF',
  },
  {
    id: '6',
    title: 'Ligue des Nations de Volleyball',
    sport: 'Volleyball',
    date: 'Sam 4 Avr 2026',
    time: '17:00 GMT',
    location: 'Ariake Arena',
    city: 'Tokyo, Japon',
    price: 20,
    image: 'https://images.unsplash.com/photo-1628891438288-39da913e509a?auto=format&fit=crop&q=80&w=2000',
    organizer: 'FIVB',
  },
];

export function MatchGrid() {
  const [activeSport, setActiveSport] = useState<Sport | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMatches = useMemo(() => {
    return MOCK_MATCHES.filter(match => {
      const matchesSport = activeSport === 'All' || match.sport === activeSport;
      const matchesSearch = match.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           match.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSport && matchesSearch;
    });
  }, [activeSport, searchQuery]);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4 border-b border-border/40">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-heading tracking-tight flex items-center gap-3">
              Événements à Venir
              <Badge variant="secondary" className="px-3 rounded-full bg-primary/10 text-primary border-primary/20">
                {filteredMatches.length} événements trouvés
              </Badge>
            </h2>
            <p className="text-muted-foreground font-medium">Trouvez des billets pour vos équipes de sport préférées.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Filtrer par match..."
                className="w-full md:w-64 h-11 pl-10 pr-4 rounded-xl bg-secondary border border-border/40 focus:ring-2 focus:ring-primary/50 outline-none text-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="h-11 rounded-xl gap-2 font-semibold">
              <SlidersHorizontal className="h-4 w-4" />
              Plus de Filtres
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button 
            variant={activeSport === 'All' ? 'default' : 'secondary'}
            onClick={() => setActiveSport('All')}
            className={`rounded-full px-6 font-semibold transition-all ${activeSport === 'All' ? 'shadow-lg shadow-primary/20 scale-105' : 'hover:bg-primary/20 hover:text-primary'}`}
          >
            Tous les Sports
          </Button>
          <Button 
            variant={activeSport === 'Football' ? 'default' : 'secondary'}
            onClick={() => setActiveSport('Football')}
            className={`rounded-full px-6 font-semibold transition-all flex items-center gap-2 ${activeSport === 'Football' ? 'shadow-lg shadow-primary/20 scale-105' : 'hover:bg-primary/20 hover:text-primary'}`}
          >
            <Trophy className="h-4 w-4" />
            Football
          </Button>
          <Button 
            variant={activeSport === 'Handball' ? 'default' : 'secondary'}
            onClick={() => setActiveSport('Handball')}
            className={`rounded-full px-6 font-semibold transition-all flex items-center gap-2 ${activeSport === 'Handball' ? 'shadow-lg shadow-primary/20 scale-105' : 'hover:bg-primary/20 hover:text-primary'}`}
          >
            <Target className="h-4 w-4" />
            Handball
          </Button>
          <Button 
            variant={activeSport === 'Volleyball' ? 'default' : 'secondary'}
            onClick={() => setActiveSport('Volleyball')}
            className={`rounded-full px-6 font-semibold transition-all flex items-center gap-2 ${activeSport === 'Volleyball' ? 'shadow-lg shadow-primary/20 scale-105' : 'hover:bg-primary/20 hover:text-primary'}`}
          >
            <Volleyball className="h-4 w-4" />
            Volleyball
          </Button>
        </div>

        {filteredMatches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-4">
            <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold font-heading">Aucun match trouvé</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">Essayez d'ajuster votre recherche ou les filtres de sport.</p>
            <Button onClick={() => { setActiveSport('All'); setSearchQuery(''); }} variant="link" className="text-primary font-bold">
              Effacer tous les filtres
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
