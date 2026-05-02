import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Lumen Analytics",
    description:
      "Real-time event analytics dashboard with sub-second query latency. Designed the streaming pipeline and built the visualization layer from scratch.",
    tags: ["Next.js", "ClickHouse", "WebSockets", "D3"],
    live: "#",
    github: "#",
  },
  {
    name: "Quill Editor",
    description:
      "Collaborative markdown editor with CRDT-based sync, offline support, and a plugin system for custom blocks.",
    tags: ["React", "Yjs", "IndexedDB", "TipTap"],
    live: "#",
    github: "#",
  },
  {
    name: "Pathfinder",
    description:
      "Open-source CLI for visualizing and refactoring import graphs in large TypeScript monorepos.",
    tags: ["TypeScript", "Node", "OSS"],
    live: "#",
    github: "#",
  },
  {
    name: "Beacon",
    description:
      "Status-page service for indie SaaS — minimal, fast, and self-hostable in under a minute.",
    tags: ["Go", "SQLite", "HTMX"],
    live: "#",
    github: "#",
  },
  {
    name: "Palette",
    description:
      "Tiny color-system generator that produces accessible HSL token sets from a single brand color.",
    tags: ["TypeScript", "Color Science"],
    live: "#",
    github: "#",
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
