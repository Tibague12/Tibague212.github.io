import { Calendar, MapPin, Trophy, Ticket, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-24">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                <TrendingUp className="mr-2 h-4 w-4" />
                Featured Event
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-foreground">
                Get Your Tickets for <span className="text-primary">Champions League</span> Final
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Experience the thrill of elite sports. Book your seats now for the most anticipated football match of the season.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Saturday, June 10 • 20:00 GMT</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Atatürk Olympic Stadium, Istanbul</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Tickets Now
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg border-2 hover:bg-secondary transition-all">
                Learn More
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-4 border-t border-border/40 max-w-sm">
              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-background overflow-hidden bg-secondary">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">1,250+</span> people already booked
              </p>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/40 bg-secondary">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
                alt="Champions League Stadium" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/40 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Match Category</p>
                      <p className="font-heading font-bold text-foreground">Football Final 2026</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Price starts</p>
                    <p className="text-xl font-bold font-heading text-primary">$150.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
