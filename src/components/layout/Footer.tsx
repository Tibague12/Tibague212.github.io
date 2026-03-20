import { Ticket, Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Ticket className="h-7 w-7 text-primary" />
              <span className="text-2xl font-bold font-heading tracking-tight">BuyTicket</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              The premier marketplace for sports tickets. Experience the thrill of live football, handball, and volleyball events across the globe.
            </p>
            <div className="flex items-center gap-4">
              <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Github className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold font-heading tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">All Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold font-heading tracking-tight">Organizer</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Become an Organizer</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Marketplace Tools</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Ticket Scanning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Payouts & Revenue</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold font-heading tracking-tight">Newsletter</h4>
            <p className="text-muted-foreground leading-relaxed">
              Stay updated with the latest sports events and exclusive ticket offers.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-secondary border border-border/40 focus:ring-2 focus:ring-primary/50 outline-none text-sm transition-all"
                />
              </div>
              <Button className="w-full rounded-xl h-11 font-semibold">Subscribe Now</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
              <MapPin className="h-4 w-4" />
              <span>Abidjan, Côte d'Ivoire</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
              <Phone className="h-4 w-4" />
              <span>+225 01 23 45 67 89</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
              <Mail className="h-4 w-4" />
              <span>contact@buyticket.com</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <span className="text-muted-foreground/40">© 2026 BuyTicket</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
