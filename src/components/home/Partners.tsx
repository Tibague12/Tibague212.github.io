export function Partners() {
  return (
    <section className="py-24 border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60 mb-8">
          Ils nous font confiance
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png" alt="UEFA" className="h-16 w-auto object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png" alt="Premier League" className="h-16 w-auto object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/b/b5/Logo_F%C3%A9d%C3%A9ration_fran%C3%A7aise_de_handball.svg/1200px-Logo_F%C3%A9d%C3%A9ration_fran%C3%A7aise_de_handball.svg.png" alt="FFHandball" className="h-16 w-auto object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_F%C3%A9d%C3%A9ration_fran%C3%A7aise_de_volley-ball.svg/1200px-Logo_F%C3%A9d%C3%A9ration_fran%C3%A7aise_de_volley-ball.svg.png" alt="FFVolley" className="h-16 w-auto object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/FIFA_logo.svg/1200px-FIFA_logo.svg.png" alt="FIFA" className="h-16 w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
