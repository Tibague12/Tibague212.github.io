import { ShieldCheck, Zap, Globe, Clock, Smartphone, Headphones } from 'lucide-react';

const FEATURES = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Billets 100% Garantis',
    description: 'Tous les billets vendus sur BuyTicket sont authentiques et garantis pour vous donner accès à l\'événement.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Réservation Instantanée',
    description: 'Recevez vos billets par email immédiatement après confirmation de votre paiement sécurisé.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Événements Mondiaux',
    description: 'Accédez aux plus grands stades et arènes de football, handball et volleyball à travers le monde.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Support 24/7',
    description: 'Notre équipe d\'assistance est disponible à tout moment pour répondre à vos questions et résoudre vos problèmes.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Expérience Mobile',
    description: 'Achetez et gérez vos billets facilement depuis votre smartphone, où que vous soyez.',
  },
  {
    icon: <Headphones className="h-8 w-8 text-primary" />,
    title: 'Service Client Dédié',
    description: 'Bénéficiez d\'un accompagnement personnalisé pour vos réservations de groupe ou événements VIP.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold font-heading tracking-tight">Pourquoi choisir BuyTicket ?</h2>
          <p className="text-muted-foreground text-lg">
            Nous simplifions l'accès aux émotions fortes du sport avec une plateforme sécurisée et intuitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-card border border-border/40 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
