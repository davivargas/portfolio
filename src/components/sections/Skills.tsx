import { SectionHeading } from "../SectionHeading";

const skillGroups = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind", "Framer Motion", "Radix UI"] },
  { category: "Backend", items: ["Node", "tRPC", "GraphQL", "PostgreSQL", "Redis", "Edge Functions"] },
  { category: "Tooling", items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Playwright", "Vitest"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="04 / Skills" title="My toolkit" />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.category}
            className="rounded-xl border border-border bg-card/60 backdrop-blur p-5 hover:border-primary/40 hover:shadow-card transition-smooth"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              {g.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent text-accent-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
