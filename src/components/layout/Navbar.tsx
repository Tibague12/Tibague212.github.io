import { Search, User, Menu, X, Ticket } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-heading tracking-tight">BuyTicket</span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Rechercher des sports, des équipes ou des événements..."
                className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary border-none focus:ring-2 focus:ring-primary/50 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-primary transition-colors">Football</a>
              <a href="#" className="hover:text-primary transition-colors">Handball</a>
              <a href="#" className="hover:text-primary transition-colors">Volleyball</a>
            </div>
            <div className="h-6 w-[1px] bg-border/40" />
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden lg:flex">
                Publier un événement
              </Button>
              <Button size="sm" className="rounded-full px-5">
                <User className="mr-2 h-4 w-4" />
                Connexion
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b border-border p-4 space-y-4 animate-in fade-in slide-in-from-top-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Rechercher..."
              className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary border-none text-sm"
            />
          </div>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <a href="#" className="py-2 hover:text-primary">Football</a>
            <a href="#" className="py-2 hover:text-primary">Handball</a>
            <a href="#" className="py-2 hover:text-primary">Volleyball</a>
            <Button className="w-full rounded-full">Connexion</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
