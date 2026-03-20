import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { MatchGrid } from './components/home/MatchGrid';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div className="relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10" />
          <MatchGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
