import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const SideNav = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="In-page" className="hidden lg:block mt-12">
      <ul className="space-y-3">
        {links.map((link) => {
          const id = link.href.slice(1);
          const isActive = active === id;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "group flex items-center gap-4 py-1 font-mono text-xs uppercase tracking-widest transition-smooth",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "h-px transition-smooth",
                    isActive ? "w-16 bg-primary" : "w-8 bg-muted-foreground/40 group-hover:w-12 group-hover:bg-foreground"
                  )}
                />
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
