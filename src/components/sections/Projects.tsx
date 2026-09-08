import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "PullerBear",
    description:
      "Built a VS Code extension that watches a Git remote, summarizes incoming commits with AI before the developer pulls, and answers follow-up questions in a sidebar chat; two-day hackathon project with three teammates.",
    tags: ["TypeScript", "VS Code Extension API", "React", "OpenRouter", "Mocha"],
    github: "https://github.com/davivargas/PullerBear",
  },
  {
    name: "AskMii",
    description:
      "Built a question-and-answer site where BCIT students post course questions, answer each other, and earn points, on a three-person team for the COMP 1800 course project; deployed on Firebase Hosting since December 2024.",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap 5", "Firebase", "Firestore"],
    github: "https://github.com/davivargas/AskMii",
    live: "https://comp1800-bby22.web.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="03 / Projects" title="Selected work" />

      <ol className="group/list space-y-2">
        {projects.map((p) => (
          <li key={p.name}>
            <a
              href={p.live}
              className="group relative grid grid-cols-1 sm:grid-cols-8 gap-4 rounded-xl p-4 -mx-4 transition-smooth hover:bg-card/60 hover:shadow-card lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
            >
              <div className="absolute -inset-px rounded-xl border border-transparent group-hover:border-border pointer-events-none" />

              <div className="sm:col-span-2">
                <div className="flex h-14 w-full items-center justify-center rounded-lg border border-border bg-gradient-to-br from-accent to-secondary font-mono text-2xl font-bold text-accent-foreground">
                  {p.name[0]}
                </div>
              </div>

              <div className="sm:col-span-6">
                <h3 className="font-semibold flex items-center gap-1.5 group-hover:text-primary transition-smooth">
                  {p.name}
                  <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-3 flex items-center gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono text-[11px] bg-accent text-accent-foreground hover:bg-accent">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <span
                    onClick={(e) => { e.preventDefault(); window.open(p.github, "_blank"); }}
                    className="ml-auto text-muted-foreground hover:text-primary transition-smooth"
                    aria-label={`${p.name} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};
