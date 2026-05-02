import { SectionHeading } from "../SectionHeading";
import { Card } from "@/components/ui/card";

const skillGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind", "Framer Motion", "Radix UI"],
  },
  {
    category: "Backend",
    items: ["Node", "tRPC", "GraphQL", "PostgreSQL", "Redis", "Edge Functions"],
  },
  {
    category: "Tooling & Cloud",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Playwright", "Vitest"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Skills"
          title="My toolkit."
          description="The tools I reach for most often — but I'm always picking up something new."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <Card key={g.category} className="p-6 shadow-card hover:shadow-elegant transition-smooth bg-card/80 backdrop-blur">
              <h3 className="font-mono text-sm text-primary mb-4">{g.category}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
