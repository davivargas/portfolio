import { ArrowUpRight, ExternalLink, Github, Youtube } from "lucide-react";
import { useState } from "react";
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
  /** Mark served from public/projects/, square or wide. Falls back to the first letter. */
  logo?: string;
  /** Set for single-colour dark marks so they invert in the dark theme. */
  monochromeLogo?: boolean;
};

const projects: Project[] = [
  {
    name: "Fall Line",
    description:
      "Built an offline-first Android app that records a snowboarding day and splits it into runs and lift rides; solo project, a Flutter client with a FastAPI backend, still in progress.",
    details: [
      "Classified each recorded track into runs, lift rides, and stops with a Viterbi-decoded hidden Markov model over speed and vertical rate, anchored to catalog lift lines from OpenStreetMap ski data.",
      "Recorded points into a local Drift database behind a Kotlin foreground service and fused location bridge, then uploaded them in batches the backend deduplicates by elapsed offset, so retries never double-count.",
      "Wrote 423 backend pytest cases and 265 Flutter tests, gated in GitHub Actions behind ruff, mypy, and flutter analyze, with the fifteen Alembic migrations applied before the backend suite runs.",
    ],
    tags: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Riverpod", "Kotlin", "GPS"],
    github: "https://github.com/davivargas/Fall-Line",
    youtube: "https://www.youtube.com/watch?v=Ut6WIyQr13k",
    logo: "/projects/fall-line.png",
  },
  {
    name: "PullerBear",
    description:
      "Built a VS Code extension that summarizes incoming Git commits with AI before the developer pulls and answers follow-up questions in a sidebar chat; two-day hackathon project with three teammates, then hardened solo.",
    details: [
      "Built the extension in TypeScript on the VS Code Extension API, with esbuild emitting a CommonJS Node host and an ES module React 19 sidebar webview, verified by 66 Mocha tests.",
      "Polled every open repository through the built-in vscode.git API on a configurable interval, counting incoming commits in a rolling window that prompts above one threshold and pauses summaries above a higher one.",
      "Sent the incoming diff to OpenRouter under a prompt demanding a JSON array of file, line, severity, and summary entries, which render as sidebar cards and persist as context for the chat.",
    ],
    tags: ["TypeScript", "VS Code Extension API", "React", "OpenRouter", "Mocha"],
    github: "https://github.com/davivargas/PullerBear",
    youtube: "https://www.youtube.com/watch?v=YWMgsa5zrdI",
    logo: "/projects/pullerbear.svg",
    monochromeLogo: true,
  },
  {
    name: "AskMii",
    description:
      "Built a question-and-answer site where BCIT students post course questions, answer each other, and earn points, on a three-person team for the COMP 1800 course project; deployed on Firebase Hosting since December 2024.",
    details: [
      "Built the site as thirteen static pages with no build step, vanilla JavaScript on the Firebase 8 CDN SDKs for email sign-in and Firestore, styled with Bootstrap 5.",
      "Modelled questions as Firestore documents with an answers subcollection, author references, and tags as a boolean map, so tag filters and paged browsing stay server side behind startAfter cursors.",
      "Scored reputation with atomic Firestore increments, awarding one point for an answer and five more when the question's author marks that answer as the accepted solution.",
    ],
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap 5", "Firebase", "Firestore"],
    github: "https://github.com/davivargas/AskMii",
    live: "https://comp1800-bby22.web.app/",
    logo: "/projects/askmii.svg",
  },
  {
    name: "COMP 2522 Java Term Project",
    description:
      "Built three Java games solo for BCIT's COMP 2522 term project: a console geography quiz, a number-ordering game, and Quantum Sum, an original JavaFX dice-and-grid puzzle designed with ChatGPT per the course brief.",
    details: [
      "Structured the three games behind one console menu that calls a shared Game interface, with both JavaFX games extending a common AbstractGame base and loading their own CSS stylesheets.",
      "Kept both JavaFX games relaunchable from that menu in one JVM by starting the platform once, disabling implicit exit, and blocking on a CountDownLatch until the window closes.",
      "Wrote 35 JUnit 5 tests across eight classes for Quantum Sum, covering dice distribution over 10,000 rolls, subset-sum edge cases, grid collapse, and score-file parsing with a corrupted entry.",
    ],
    tags: ["Java", "JavaFX", "JUnit 5", "CSS", "ChatGPT"],
    github: "https://github.com/davivargas/COMP2522-TermProject",
    youtube: "https://www.youtube.com/watch?v=w8x6IFrAGjE&list=PLV89nqIpKBepSudbVfBftERuKC3zZVGmM",
    logo: "/projects/comp2522.svg",
  },
];

const chipClass =
  "inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground transition-smooth hover:border-primary hover:text-primary";

const dialogLinkClass =
  "inline-flex items-center gap-1.5 rounded-lg border border-border bg-accent px-2.5 py-1.5 text-xs font-medium text-accent-foreground transition-smooth hover:border-primary hover:text-primary";

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="03 / Projects" title="Selected work" />

      <ol id="project-list" className="group/list space-y-2">
        {visibleProjects.map((p) => {
          const videoId = youtubeId(p.youtube);

          // Buttons in the dialog header, beside the close button. The YouTube
          // button is always present when a URL exists: beside an embedded player it
          // opens the same video on YouTube, and without an embed it is the only way
          // to watch the demo. `label` carries the longer wording for screen readers.
          const externalLinks = [
            { href: p.github, label: "View code on GitHub", short: "Code", Icon: Github },
            {
              href: p.youtube,
              label: videoId ? "Open on YouTube" : "Watch demo on YouTube",
              short: "YouTube",
              Icon: Youtube,
            },
            { href: p.live, label: "Open live site", short: "Site", Icon: ExternalLink },
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

                  {/* Project mark: the logo when one exists, otherwise the first
                      letter. No background, so the artwork sits on the card itself.
                      Height is fixed and width follows the artwork, capped at the
                      column, so square icons and wide wordmarks both fit. The top
                      margin on the two-column layout drops the mark's centre onto the
                      description's centre instead of the title's. */}
                  <div className="flex items-start sm:col-span-2 sm:mt-8 sm:justify-center">
                    {p.logo ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${p.logo.replace(/^\//, "")}`}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        className={`h-16 w-auto max-w-full object-contain transition-smooth group-hover:scale-105 sm:h-20 ${
                          p.monochromeLogo ? "dark:invert" : ""
                        }`}
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex h-16 w-16 items-center justify-center font-mono text-4xl font-bold text-muted-foreground transition-smooth group-hover:text-primary sm:h-20 sm:w-20"
                      >
                        {p.name[0]}
                      </div>
                    )}
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
                  {/* pr-8 keeps the header clear of the absolutely positioned close
                      button in the dialog's top right corner. Narrow screens stack the
                      buttons under the title so a long name is not squeezed. */}
                  <DialogHeader className="flex-col items-start gap-3 space-y-0 border-b border-border pb-4 pr-8 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <DialogTitle className="text-xl">{p.name}</DialogTitle>

                    {externalLinks.length > 0 && (
                      <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                        {externalLinks.map(({ href, label, short, Icon }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${p.name}: ${label}`}
                            className={dialogLinkClass}
                          >
                            <Icon className="h-3.5 w-3.5" />
                            {short}
                          </a>
                        ))}
                      </div>
                    )}
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
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          );
        })}
      </ol>

      {projects.length > 3 && (
        <button
          type="button"
          aria-controls="project-list"
          aria-expanded={showAllProjects}
          onClick={() => setShowAllProjects((isExpanded) => !isExpanded)}
          className="mt-6 font-mono text-sm text-primary transition-smooth hover:text-primary/80"
        >
          {showAllProjects ? "Show less" : `See all ${projects.length} projects`}
        </button>
      )}
    </section>
  );
};
