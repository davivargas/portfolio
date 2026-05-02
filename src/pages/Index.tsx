import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Backdrop: subtle grid + cursor-following glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60" />
      <div
        className="pointer-events-none fixed inset-0 -z-10 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, hsl(var(--primary) / 0.08), transparent 40%)`,
        }}
      />

      <div className="mx-auto max-w-screen-xl px-6 sm:px-12 lg:px-20 lg:flex lg:gap-16">
        <Sidebar />

        <main className="lg:w-[56%] xl:w-[58%] lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
