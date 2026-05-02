import { ArrowDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gradient-glow blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-2/3 h-96 w-96 rounded-full bg-gradient-glow blur-3xl" />

      <div className="container relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up">
          Alex Carter
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gradient animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Software Engineer
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Full-stack engineer crafting performant, accessible web products.
        </p>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          I love turning hard problems into clean interfaces — shipping with React, TypeScript, and a healthy obsession for details.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="rounded-full shadow-elegant">
            <a href="#projects">
              <Eye className="h-4 w-4" />
              View Projects
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <a
          href="#experience"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce-soft" />
        </a>
      </div>
    </section>
  );
};
