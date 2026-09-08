import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Aug 2026\nto Present",
    role: "Software Developer (Contract)",
    company: "Sprinter Delivery",
    href: "#",
    description:
      "Contracted by a courier company to replace its Excel and VBA operations system. Built the driver proof-of-delivery app that works a full shift offline, with the admin portal designed and next to build.",
    tags: ["TypeScript", "React", "PWA", "Supabase", "PostgreSQL", "IndexedDB", "Playwright", "GitHub Actions"],
  },
  {
    period: "May 2026\nto Aug 2026",
    role: "Software Development Intern",
    company: "Zip",
    href: "#",
    description:
      "Re-architected an internal operations dashboard into a PostgreSQL-backed data platform with scheduled Asana and Linear ingestion, self-healing health checks, and a family of React analytics views, then handed it over with full operator runbooks.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Redis", "GraphQL", "Docker", "Claude Integration"],
  },
  {
    period: "May 2025\nto Dec 2025",
    role: "Software Engineer in Test Intern",
    company: "Insurance Corporation of British Columbia (ICBC)",
    href: "#",
    description:
      "Worked on automated testing and internal tooling for a large enterprise platform migration to cloud, contributing to reliable release workflows with developers and product teams.",
    tags: ["JavaScript", "Python", "Jira", "CI/CD", "TestCafe", "Cucumber"],
  },
  {
    period: "Oct 2020\nto Mar 2025",
    role: "Ballast Control Operator (BCO)",
    company: "Petrobras",
    href: "#",
    description:
      "Worked in a safety critical offshore environment, coordinating operations, supervising a small team, and using automation to improve workflows and reduce manual work.",
    tags: ["Python", "VBA", "Power BI", "SAP", "PI-ProcessBook", "Operations", "Leadership"],
  },
  {
    period: "Dec 2019\nto Sep 2020",
    role: "Technical Finance Intern",
    company: "LiftBank",
    href: "#",
    description:
      "Built internal automation and reporting tools to process financial data, reduce repetitive work, and support operational efficiency in a startup environment.",
    tags: ["Python", "VBA", "Power BI", "Selenium", "Excel", "Reporting"],
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
