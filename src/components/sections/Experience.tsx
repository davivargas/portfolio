import { SectionHeading } from "../SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    description:
      "Lead frontend architecture for a real-time analytics platform serving 200k+ daily users. Drive performance, design-system, and DX initiatives.",
    tags: ["React", "TypeScript", "GraphQL", "Design Systems"],
  },
  {
    role: "Software Engineer",
    company: "Aperture Studio",
    period: "2021 — 2023",
    description:
      "Built customer-facing dashboards and internal tooling. Owned the migration from REST to tRPC and shipped a component library used across 6 products.",
    tags: ["Next.js", "tRPC", "Postgres", "Tailwind"],
  },
  {
    role: "Frontend Developer",
    company: "Riverbend Agency",
    period: "2019 — 2021",
    description:
      "Crafted bespoke marketing sites and web apps for a roster of design-forward clients, with a focus on motion and accessibility.",
    tags: ["JavaScript", "Framer Motion", "WebGL", "A11y"],
  },
  {
    role: "Junior Developer",
    company: "Foothold Inc.",
    period: "2018 — 2019",
    description:
      "First role out of school. Helped maintain a Rails monolith and slowly introduced React for new features.",
    tags: ["Rails", "React", "PostgreSQL"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="01 / Experience"
          title="A short timeline."
          description="Six years building products across startups and agencies — here are the highlights."
        />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative pl-12 sm:pl-16">
                <div className="absolute left-0 top-3 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                  <span className="relative h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                </div>
                <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth bg-card/60 backdrop-blur">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold">
                      {exp.role}{" "}
                      <span className="text-primary">@ {exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
