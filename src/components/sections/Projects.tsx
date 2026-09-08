import { ArrowUpRight, ExternalLink, Github, Youtube } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { isLink, youtubeId } from "@/lib/projectLinks";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SectionHeading } from "../SectionHeading";

type Project = {
  name: string;
  description: string;
  details?: string[];
  tags: string[];
  github?: string;
  youtube?: string;
  live?: string;
};

const projects: Project[] = [
  {
    name: "PullerBear",
    description:
      "Built a VS Code extension that watches a Git remote, summarizes incoming commits with AI before the developer pulls, and answers follow-up questions in a sidebar chat; two-day hackathon project with three teammates.",
    details: [
      "Wrote the entire test suite: 66 Mocha cases across 16 files covering extension activation, the commit-threshold orchestration, review-file persistence, the OpenRouter client with mocked responses, and a user-workflow integration test.",
      "Hardened the OpenRouter integration solo after the hackathon: a 30-second timeout with one five-minute retry, HTTP status codes mapped to plain-language errors, and a sidebar Retry button for rate-limit, timeout, and network failures.",
    ],
    tags: ["TypeScript", "VS Code Extension API", "React", "OpenRouter", "Mocha"],
    github: "https://github.com/davivargas/PullerBear",
    youtube: "https://www.youtube.com/watch?v=YWMgsa5zrdI",
  },
  {
    name: "AskMii",
    description:
      "Built a question-and-answer site where BCIT students post course questions, answer each other, and earn points, on a three-person team for the COMP 1800 course project; deployed on Firebase Hosting since December 2024.",
    details: [
      "Built the bookmarks feature: a toggle on each question that updates the user's Firestore document with arrayUnion and arrayRemove, a page listing every bookmark, and the three newest on the home page.",
      "Merged two competing home page layouts into one responsive main page, using CSS grid areas that re-flow the intro, bookmarks, and browse sections across phone, tablet, and desktop breakpoints.",
    ],
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap 5", "Firebase", "Firestore"],
    github: "https://github.com/davivargas/AskMii",
    live: "https://comp1800-bby22.web.app/",
  },
];

const chipClass =
  "inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground transition-smooth hover:border-primary hover:text-primary";

const buttonClass =
  "inline-flex items-center gap-2 rounded-lg border border-border bg-accent px-3 py-2 text-sm font-medium text-accent-foreground transition-smooth hover:border-primary hover:text-primary";

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="03 / Projects" title="Selected work" />

      <ol className="group/list space-y-2">
        {projects.map((p) => {
          const videoId = youtubeId(p.youtube);

          // Buttons in the dialog footer. The YouTube button is always present when
          // a URL exists: beside an embedded player it opens the same video on
          // YouTube, and without an embed it is the only way to watch the demo.
          const externalLinks = [
            { href: p.github, label: "View code", short: "Code", Icon: Github },
            {
              href: p.youtube,
              label: videoId ? "Open on YouTube" : "Watch demo",
              short: "Demo",
              Icon: Youtube,
            },
            { href: p.live, label: "Open live site", short: "Live", Icon: ExternalLink },
          ].filter((link) => isLink(link.href));

          const hasActions = externalLinks.length > 0 || videoId !== null;

          return (
            <li key={p.name}>
              <Dialog>
                {/* The card is a div, not a button, so the link anchors below stay
                    valid and keyboard reachable. The trigger's ::after overlay makes
                    the rest of the card open the dialog. */}
                <div className="group relative grid grid-cols-1 gap-4 rounded-xl p-4 -mx-4 transition-smooth hover:bg-card/60 hover:shadow-card lg:group-hover/list:opacity-50 lg:hover:!opacity-100 sm:grid-cols-8">
                  <div className="absolute -inset-px rounded-xl border border-transparent pointer-events-none group-hover:border-border" />

                  <div className="sm:col-span-2">
                    <div className="flex h-14 w-full items-center justify-center rounded-lg border border-border bg-gradient-to-br from-accent to-secondary font-mono text-2xl font-bold text-accent-foreground">
                      {p.name[0]}
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <h3 className="font-semibold">
                      <DialogTrigger className="flex items-center gap-1.5 text-left transition-smooth after:absolute after:inset-0 after:rounded-xl after:content-[''] group-hover:text-primary">
                        {p.name}
                        <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </DialogTrigger>
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-accent font-mono text-[11px] text-accent-foreground hover:bg-accent"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {hasActions && (
                      <div className="relative z-10 mt-3 flex flex-wrap gap-2">
                        {isLink(p.github) && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${p.name}: view code on GitHub`}
                            className={chipClass}
                          >
                            <Github className="h-3.5 w-3.5" />
                            Code
                          </a>
                        )}

                        {videoId && (
                          <DialogTrigger
                            aria-label={`${p.name}: watch the demo video`}
                            className={chipClass}
                          >
                            <Youtube className="h-3.5 w-3.5" />
                            Demo
                          </DialogTrigger>
                        )}

                        {!videoId && isLink(p.youtube) && (
                          <a
                            href={p.youtube}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${p.name}: watch the demo video`}
                            className={chipClass}
                          >
                            <Youtube className="h-3.5 w-3.5" />
                            Demo
                          </a>
                        )}

                        {isLink(p.live) && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${p.name}: open the live site`}
                            className={chipClass}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-border/80 bg-background/95 p-6 sm:rounded-2xl">
                  <DialogHeader className="pr-8">
                    <DialogTitle className="text-xl">{p.name}</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-accent font-mono text-[11px] text-accent-foreground hover:bg-accent"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-sm leading-relaxed text-foreground/85">
                      {p.description}
                    </p>

                    {/* Radix mounts dialog content only while open, so the player is
                        never loaded on page render and stops when the dialog closes. */}
                    {videoId && (
                      <div className="overflow-hidden rounded-lg border border-border bg-black">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                          title={`${p.name} demo video`}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="aspect-video w-full border-0"
                        />
                      </div>
                    )}

                    {p.details && p.details.length > 0 && (
                      <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground/85 marker:text-primary">
                        {p.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}

                    {externalLinks.length > 0 && (
                      <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                        {externalLinks.map(({ href, label, Icon }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${p.name}: ${label}`}
                            className={buttonClass}
                          >
                            <Icon className="h-4 w-4" />
                            {label}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
