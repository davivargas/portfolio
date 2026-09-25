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
    period: "Aug 2026\nto Dec 2026",
    role: "Software Developer",
    company: "Sprinter Delivery",
    // Previous summary, kept for reference:
    // "Contracted by a courier company to replace its Excel and VBA operations system. Built the driver proof-of-delivery app that works a full shift offline, with the admin portal designed and next to build."
    summary:
      "Replaced a courier company's Excel and VBA operations system with an offline driver app and an admin portal for orders, dispatch, and billing, integrated with QuickBooks and Pumble.",
    details: [
      "Built a ten-screen React and TypeScript portal for courier orders, dispatch, and billing, replacing an Excel and VBA workflow containing 13,855 legacy orders.",
      "Built a React and TypeScript Progressive Web App (PWA) that stores delivery photos, signatures, and GPS data in IndexedDB and queues uploads while couriers work offline.",
      "Built a GitHub Actions pipeline that recreates a Docker-based Supabase database, replays 38 migrations, and runs database and browser tests before deploying both apps to Cloudflare Pages.",
      "Replaced text-message dispatch with PostgreSQL-backed assignments and Deno Web Push notifications, returning driver acceptance or rejection to the admin board in real time.",
      "Rebuilt courier pricing in PostgreSQL using annual rate cards, zoning for 74 cities, and weekly fuel surcharges, preserving per-order calculations for auditable invoices.",
      "Integrated QuickBooks invoicing and payment-status webhooks with the courier platform, alongside Pumble dispatch notifications, reducing manual transfer of accounting and delivery information.",
      "Added PostgreSQL row-level security policies and pgTAP tests covering cross-driver access to orders, delivery records, and stored media.",
      // Previous bullets, kept for reference:
      // "Built a driver proof-of-delivery app for a courier company replacing its Excel and VBA operations system, and designed the admin portal data model from 13,800+ legacy orders and their VBA modules.",
      // "Built an offline-first Progressive Web App (React 19, TypeScript, IndexedDB) that saves proofs locally and uploads with idempotent retries, verified by end-to-end tests that complete a full shift offline without duplicates.",
      // "Designed and built the PostgreSQL schema (Supabase) with row-level security on every table, append-only audit tables, and single-transaction write functions, verified by 230+ database tests including cross-driver access attacks.",
      // "Shipped 11 driver screens so drivers can find orders with typo-tolerant search, capture photos and vector signatures with GPS, load vehicles by scan, and accept dispatch offers in real time.",
      // "Built a GitHub Actions pipeline that replays every migration on a fresh Supabase stack and runs 850+ browser tests plus 29 Playwright end-to-end tests with accessibility gates, so policy mistakes fail before reaching drivers.",
      // "Worked directly with the company owner to turn field feedback into spec changes before code and verified each screen with them on real phones in both themes",
    ],
    tags: ["TypeScript", "React", "PWA", "Supabase", "PostgreSQL", "IndexedDB", "Playwright", "GitHub Actions", "Cloudflare Pages"],
  },
  {
    period: "Apr 2026\nto Aug 2026",
    role: "Software Development Intern",
    company: "ZipHQ",
    // Previous summary, kept for reference:
    // "Re-architected an internal operations dashboard into a PostgreSQL-backed data platform with scheduled Asana and Linear ingestion, self-healing health checks, and a family of React analytics views, then handed it over with full operator runbooks.",
    summary:
      "Built six dashboards for Zip's custom AI engineering team to review ticket progress, estimation accuracy, and contractor costs using synchronized Linear data.",
    details: [
      "Built six React and TypeScript dashboards backed by 35 REST endpoints for Linear ticket data, giving engineering managers views of project progress, review delays, estimation accuracy, and contractor costs.",
      "Built scheduled ingestion for approximately 10,000 Linear and Asana tickets using GraphQL and REST APIs, with cursor checkpoints, rate-limit retries, and daily reconciliation checks.",
      "Added 11 health checks for drift, stalled synchronization, and API availability, with reconciliation triggers and Claude-generated explanations of likely causes for dashboard users.",
      "Built quarterly contractor reports using Zip's fiscal calendar, with Excel formulas and charts that recalculate cost estimates when managers change rates.",
      "Migrated dashboard reads to PostgreSQL and Redis, reducing modal-cache expiration from 12 hours to 10 minutes and invalidating cached results after successful synchronization.",
      "Added PostgreSQL integration tests with Testcontainers and wrote deployment, scheduling, and recovery runbooks to support handover to Zip's maintainers.",
      // Previous bullets, kept for reference:
      // "Migrated an operations dashboard from live Asana API calls to a PostgreSQL and Redis read layer (Node.js, TypeScript, Prisma), cutting stale-data windows from 12 hours to 10 minutes.",
      // "Built a scheduled ingestion service that syncs ~10K tickets from the Asana and Linear project-tracking APIs with cursor checkpoints, rate-limit retries, and daily drift audits, so dashboards stay current without manual refreshes.",
      // "Added a Redis distributed lock and PostgreSQL deadlock retries to the sync workers so overlapping containers during rolling deploys cannot write conflicting ticket data.",
      // "Built a health-monitoring system with 11 checks (data drift, stuck syncs, API reachability) that auto-runs reconciliation and shows non-engineers a banner with Claude-generated root-cause explanations.",
      // "Shipped five React and TypeScript dashboard views over 50+ JWT-secured REST endpoints, giving engineering managers per-engineer KPIs, an aging-review queue, estimation-accuracy analysis, and quarterly contractor cost reports.",
      // "Wrote 58 test suites (Vitest, Jest, Testcontainers against real PostgreSQL) and nine operator runbooks that let the team run the system after the internship",
    ],
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "GraphQL", "Redis", "Docker", "Claude Integration"],
  },
  {
    period: "May 2025\nto Dec 2025",
    role: "Software Engineer in Test Intern",
    company: "Insurance Corporation of British Columbia (ICBC)",
    summary:
      "Developed automated tests and Python tooling for ICBC's insurance-platform cloud migration, working with developers and product teams on release validation.",
    details: [
      "Developed and maintained more than 70 JavaScript and TestCafe regression tests for UI workflows and backend APIs, supporting ICBC's insurance-platform cloud migration.",
      "Integrated parallel automated tests into TeamCity continuous integration and delivery (CI/CD) pipelines, reducing reliance on local runs and cutting test development time by approximately 40%.",
      "Automated test-data extraction and consolidation across multiple sources with Python, replacing manual review steps and saving the team more than 10 hours per week.",
      "Extended automated test coverage to previously untested UI components and user scenarios, using Jira to review requirements and track defects with developers and product teams.",
    ],
    tags: ["JavaScript", "Python", "Jira", "CI/CD", "TestCafe", "Cucumber"],
  },
  {
    period: "Oct 2020\nto Mar 2025",
    role: "Ballast Control Operator (BCO)",
    company: "Petrobras",
    summary:
      "Coordinated offshore ballast operations, supervised four operators, and used Python and VBA to automate recurring procedures.",
    details: [
      "Automated offshore operational procedures with Python and VBA, reducing manual errors by 15%.",
      "Coordinated ballast and vessel-stability operations with offshore teams, communicating operational changes and monitoring systems during daily procedures.",
      "Supervised four offshore operators, coordinating daily tasks and communication as operational conditions changed.",
    ],
    tags: ["Python", "VBA", "Power BI", "SAP", "PI-ProcessBook", "Operations", "Leadership"],
  },
  {
    period: "Dec 2019\nto Sep 2020",
    role: "Technical Finance Intern",
    company: "LiftBank",
    summary:
      "Built finance-data automation and reporting tools with Python and VBA to support recurring operational and executive reports.",
    details: [
      "Automated recurring finance tasks and reports, saving the team more than 20 hours per week.",
      "Built internal reports from operational data to help leadership review recurring finance processes.",
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
