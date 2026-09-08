import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SectionHeading } from "../SectionHeading";

const experiences = [
  {
    period: "Aug 2026\nto Present",
    role: "Software Developer (Contract)",
    company: "Sprinter Delivery",
    summary:
      "Contracted by a courier company to replace its Excel and VBA operations system. Built the driver proof-of-delivery app that works a full shift offline, with the admin portal designed and next to build.",
    details: [
      "Built a driver proof-of-delivery app for a courier company replacing its Excel and VBA operations system, and designed the admin portal data model from 13,800+ legacy orders and their VBA modules.",
      "Built an offline-first Progressive Web App (React 19, TypeScript, IndexedDB) that saves proofs locally and uploads with idempotent retries, verified by end-to-end tests that complete a full shift offline without duplicates.",
      "Designed and built the PostgreSQL schema (Supabase) with row-level security on every table, append-only audit tables, and single-transaction write functions, verified by 230+ database tests including cross-driver access attacks.",
      "Shipped 11 driver screens so drivers can find orders with typo-tolerant search, capture photos and vector signatures with GPS, load vehicles by scan, and accept dispatch offers in real time.",
      "Built a GitHub Actions pipeline that replays every migration on a fresh Supabase stack and runs 850+ browser tests plus 29 Playwright end-to-end tests with accessibility gates, so policy mistakes fail before reaching drivers.",
      "Worked directly with the company owner to turn field feedback into spec changes before code and verified each screen with them on real phones in both themes; authored all 320 commits as sole engineer.",
    ],
    tags: ["TypeScript", "React", "PWA", "Supabase", "PostgreSQL", "IndexedDB", "Playwright", "GitHub Actions"],
  },
  {
    period: "May 2026\nto Aug 2026",
    role: "Software Development Intern",
    company: "Zip",
    summary:
      "Re-architected an internal operations dashboard into a PostgreSQL-backed data platform with scheduled Asana and Linear ingestion, self-healing health checks, and a family of React analytics views, then handed it over with full operator runbooks.",
    details: [
      "Migrated an operations dashboard from live Asana API calls to a PostgreSQL and Redis read layer (Node.js, TypeScript, Prisma), cutting stale-data windows from 12 hours to 10 minutes.",
      "Built a scheduled ingestion service that syncs ~10K tickets from the Asana and Linear project-tracking APIs with cursor checkpoints, rate-limit retries, and daily drift audits, so dashboards stay current without manual refreshes.",
      "Added a Redis distributed lock and PostgreSQL deadlock retries to the sync workers so overlapping containers during rolling deploys cannot write conflicting ticket data.",
      "Built a health-monitoring system with 11 checks (data drift, stuck syncs, API reachability) that auto-runs reconciliation and shows non-engineers a banner with Claude-generated root-cause explanations.",
      "Shipped five React and TypeScript dashboard views over 50+ JWT-secured REST endpoints, giving engineering managers per-engineer KPIs, an aging-review queue, estimation-accuracy analysis, and quarterly contractor cost reports.",
      "Wrote 58 test suites (Vitest, Jest, Testcontainers against real PostgreSQL) and nine operator runbooks that let the team run the system after the internship; authored 500 of the project's 800 commits.",
    ],
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Redis", "GraphQL", "Docker", "Claude Integration"],
  },
  {
    period: "May 2025\nto Dec 2025",
    role: "Software Engineer in Test Intern",
    company: "Insurance Corporation of British Columbia (ICBC)",
    summary:
      "Worked on automated testing and internal tooling for a large enterprise platform migration to cloud, contributing to reliable release workflows with developers and product teams.",
    details: [
      "Designed and implemented automated end-to-end tests validating user workflows, backend APIs, and data flows during the migration of a large enterprise insurance platform to the cloud.",
      "Developed and maintained 70+ automated tests using JavaScript, TestCafe, Gherkin, and Cucumber, validating UI workflows and backend API responses across production releases.",
      "Integrated automated tests into TeamCity CI/CD pipelines with parallel execution, reducing local execution requirements and decreasing test development time by ∼40%.",
      "Developed Python automation tooling to extract and consolidate test data across multiple sources previously reviewed manually, saving the team 10+ hours per week.",
      "Collaborated with developers and product teams using Jira to analyze user stories, raise and track defects, and discuss test results during the cloud migration process.",
      "Increased automated test coverage by integrating previously untested UI components and user scenarios into the automation framework.",
    ],
    tags: ["JavaScript", "Python", "Jira", "CI/CD", "TestCafe", "Cucumber"],
  },
  {
    period: "Oct 2020\nto Mar 2025",
    role: "Ballast Control Operator (BCO)",
    company: "Petrobras",
    summary:
      "Worked in a safety critical offshore environment, coordinating operations, supervising a small team, and using automation to improve workflows and reduce manual work.",
    details: [
      "Automated operational procedures using Python and VBA, reducing manual errors by 15% and improving workflow efficiency.",
      "Coordinated ballast and stability operations in an offshore setting where precision, communication, and safety were non-negotiable.",
      "Supervised a small team of 4 and helped keep daily operations organized under changing operational conditions.",
    ],
    tags: ["Python", "VBA", "Power BI", "SAP", "PI-ProcessBook", "Operations", "Leadership"],
  },
  {
    period: "Dec 2019\nto Sep 2020",
    role: "Technical Finance Intern",
    company: "LiftBank",
    summary:
      "Built internal automation and reporting tools to process financial data, reduce repetitive work, and support operational efficiency in a startup environment.",
    details: [
      "Automated routine finance tasks and reports saving the team 20+ hours weekly.",
      "Worked with operational data to improve visibility into recurring processes and support leadership in quicker decision-making.",
      "Learned how small internal tools can have an outsized effect in a fast-moving team.",
    ],
    tags: ["Python", "VBA", "Power BI", "Selenium", "Excel", "Reporting"],
  },
];

export const Experience = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const visibleExperiences = showAllExperiences ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="02 / Experience" title="A short timeline" />

      <ol id="experience-list" className="group/list space-y-2">
        {visibleExperiences.map((exp, index) => (
          <li key={`${exp.company}-${exp.period}-${index}`}>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group relative grid grid-cols-1 gap-4 rounded-xl p-4 -mx-4 text-left transition-smooth hover:bg-card/60 hover:shadow-card lg:group-hover/list:opacity-50 lg:hover:!opacity-100 sm:grid-cols-8"
                >
                  <div className="absolute -inset-px rounded-xl border border-transparent pointer-events-none group-hover:border-border" />
                  <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-muted-foreground transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  <div className="sm:col-span-6 pr-6">
                    <h3 className="font-semibold transition-smooth group-hover:text-primary">
                      {exp.role} · {exp.company}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {exp.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-accent font-mono text-[11px] text-accent-foreground hover:bg-accent"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="pt-1 text-left font-mono text-xs tracking-widest text-muted-foreground whitespace-pre-line sm:col-span-2 sm:pr-9 sm:text-right">
                    {exp.period}
                  </p>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-2xl border-border/80 bg-background/95 p-6 sm:rounded-2xl">
                <DialogHeader className="pr-8">
                  <p className="font-mono text-xs tracking-widest text-muted-foreground">
                    {exp.period.replace("\n", " ")}
                  </p>
                  <DialogTitle className="mt-2 text-xl">
                    {exp.role} · {exp.company}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-accent font-mono text-[11px] text-accent-foreground hover:bg-accent"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground/85 marker:text-primary">
                    {exp.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ol>

      {experiences.length > 3 && (
        <button
          type="button"
          aria-controls="experience-list"
          aria-expanded={showAllExperiences}
          onClick={() => setShowAllExperiences((isExpanded) => !isExpanded)}
          className="mt-6 font-mono text-sm text-primary transition-smooth hover:text-primary/80"
        >
          {showAllExperiences ? "Show less" : "See my whole journey"}
        </button>
      )}
    </section>
  );
};
