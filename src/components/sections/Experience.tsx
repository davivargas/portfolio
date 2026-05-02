import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Software Engineer",
    company: "Northwind Labs",
    href: "#",
    description:
      "Lead frontend architecture for a real-time analytics platform serving 200k+ daily users. Drive performance, design-system, and DX initiatives.",
    tags: ["React", "TypeScript", "GraphQL", "Design Systems"],
  },
  {
    period: "2021 — 2023",
    role: "Software Engineer",
    company: "Aperture Studio",
    href: "#",
    description:
      "Built customer-facing dashboards and internal tooling. Owned the migration from REST to tRPC and shipped a component library used across 6 products.",
    tags: ["Next.js", "tRPC", "Postgres", "Tailwind"],
  },
  {
    period: "2019 — 2021",
    role: "Frontend Developer",
    company: "Riverbend Agency",
    href: "#",
    description:
      "Crafted bespoke marketing sites and web apps for design-forward clients with a focus on motion and accessibility.",
    tags: ["JavaScript", "Framer Motion", "WebGL", "A11y"],
  },
  {
    period: "2018 — 2019",
    role: "Junior Developer",
    company: "Foothold Inc.",
    href: "#",
    description:
      "First role out of school. Helped maintain a Rails monolith and slowly introduced React for new features.",
    tags: ["Rails", "React", "PostgreSQL"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="02 / Experience" title="A short timeline" />

      <ol className="group/list space-y-2">
        {experiences.map((exp) => (
          <li key={exp.company}>
            <a
              href={exp.href}
              className="group relative grid grid-cols-1 sm:grid-cols-8 gap-4 rounded-xl p-4 -mx-4 transition-smooth hover:bg-card/60 hover:shadow-card lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
            >
              <div className="absolute -inset-px rounded-xl border border-transparent group-hover:border-border pointer-events-none" />
              <p className="sm:col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground pt-1">
                {exp.period}
              </p>
              <div className="sm:col-span-6">
                <h3 className="font-semibold flex items-center gap-1.5 group-hover:text-primary transition-smooth">
                  {exp.role} · {exp.company}
                  <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="font-mono text-[11px] bg-accent text-accent-foreground hover:bg-accent">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};
