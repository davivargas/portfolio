import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Lumen Analytics",
    description:
      "Real-time event analytics dashboard with sub-second query latency. Designed the streaming pipeline and built the visualization layer from scratch.",
    tags: ["Next.js", "ClickHouse", "WebSockets", "D3"],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    name: "Quill Editor",
    description:
      "A collaborative markdown editor with CRDT-based sync, offline support, and a plugin system for custom blocks.",
    tags: ["React", "Yjs", "IndexedDB", "TipTap"],
    live: "#",
    github: "#",
    featured: true,
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
      "A tiny color-system generator that produces accessible HSL token sets from a single brand color.",
    tags: ["TypeScript", "Color Science"],
    live: "#",
    github: "#",
  },
  {
    name: "Tideline",
    description:
      "iOS-style swipe gestures and reorderable lists, packaged as a zero-dependency React hook library.",
    tags: ["React", "Library", "Animation"],
    live: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Projects"
          title="Selected work."
          description="A handful of things I've built — products, tools, and the occasional weekend experiment."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card
              key={p.name}
              className="group relative p-6 flex flex-col shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth bg-card/80 backdrop-blur"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground font-mono font-bold">
                  {p.name[0]}
                </div>
                <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-smooth">
                  <a
                    href={p.github}
                    aria-label={`${p.name} on GitHub`}
                    className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={p.live}
                    aria-label={`${p.name} live site`}
                    className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                {p.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Badge key={t} variant="outline" className="font-mono text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
