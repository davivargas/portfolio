import { ArrowUpRight, ExternalLink, Github, Youtube } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { isLink, youtubeId } from "@/lib/projectLinks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SectionHeading } from "../SectionHeading";

type Project = {
  name: string;
  description: string;
  context: string;
  problem: string;
  details: string[];
  outcome: string;
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
      "An offline Android snowboarding tracker that grew from a course project into an app I use on the mountain and continue to improve.",
    context: "Solo project · Started in an Android course · In development",
    problem:
      "Fall Line started as a mobile/Android course project. I enjoyed building it and using it while snowboarding from February to April 2026, so I decided to keep developing it. I want full control over my tracking data and access to all my stats without paying for a premium subscription.",
    details: [
      "Built track classification with a hidden Markov model and Viterbi decoding, combining speed, vertical movement, and mapped ski-lift paths to distinguish runs, lifts, and stops.",
      "Kept GPS recording on-device with a Kotlin foreground service and Drift database, then uploaded batches to FastAPI with duplicate checks based on elapsed time.",
      "Configured GitHub Actions to run pytest and Flutter tests with linting and type checks, applying Alembic migrations before backend tests to check database compatibility.",
    ],
    outcome:
      "Used the app during the February–April 2026 snowboarding season. I'm now improving its offline recording and run, lift, and stop analysis with the goal of making it my main snowboarding tracker.",
    tags: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Riverpod", "Kotlin", "GPS"],
    github: "https://github.com/davivargas/Fall-Line",
    youtube: "https://www.youtube.com/watch?v=Ut6WIyQr13k",
    logo: "/projects/fall-line.png",
  },
  {
    name: "PullerBear",
    description:
      "A VS Code extension that helps developers review incoming Git changes before pulling, with AI summaries and follow-up questions in a sidebar.",
    context: "Four-person BCIT hackathon team · Continued afterward",
    problem:
      "Developers need context about incoming changes before merging them into local work. Summaries also need to stay tied to the branch being reviewed when the developer switches tasks.",
    details: [
      "Added OpenRouter model configuration, retry controls, and actionable error messages so developers can configure summaries and recover from failed requests.",
      "Corrected incoming-commit counts for configured Git branches and added branch-change cleanup to discard reviews that no longer match the selected branch.",
      "Fixed review-data persistence for follow-up chat and added Mocha tests for summary generation, API failures, and question-and-answer workflows.",
    ],
    outcome:
      "The team built the extension at a BCIT hackathon. My subsequent work addressed branch context, request failures, and chat persistence; the demo shows the review workflow inside VS Code.",
    tags: ["TypeScript", "VS Code Extension API", "React", "OpenRouter", "Mocha"],
    github: "https://github.com/davivargas/PullerBear",
    youtube: "https://www.youtube.com/watch?v=YWMgsa5zrdI",
    logo: "/projects/pullerbear.svg",
    monochromeLogo: true,
  },
  {
    name: "AskMii",
    description:
      "A course question-and-answer site for BCIT students to share answers and return to saved discussions. My work focused on the homepage and bookmarking.",
    context: "Three-person team · BCIT course project",
    problem:
      "Students need to browse course questions across devices and find useful discussions again. The homepage brings question browsing, saved discussions, and contribution points into one place.",
    details: [
      "Merged separate homepage layouts into a responsive HTML and CSS interface, adapting navigation and question browsing for phones, tablets, and desktop screens.",
      "Implemented JavaScript and Firestore bookmarking so signed-in students can save questions, remove saved items, and browse their bookmarked course discussions.",
      "Added bookmarked-question previews and a Firestore-backed points display to the homepage, giving students quick access to saved discussions and their contribution score.",
    ],
    outcome:
      "Contributed a responsive homepage and persistent saved-question workflow to the team's application. The site link opens the course project, and the repository includes the shared implementation.",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap 5", "Firebase", "Firestore"],
    github: "https://github.com/davivargas/AskMii",
    live: "https://comp1800-bby22.web.app/",
    logo: "/projects/askmii.svg",
  },
  {
    name: "COMP 2522 Java Term Project",
    description:
      "A Java game collection combining a geography quiz, a number-ordering game, and Quantum Sum, a JavaFX dice-and-grid puzzle, behind one menu.",
    context: "Solo BCIT course project · ChatGPT-assisted Quantum Sum",
    problem:
      "The collection combines console and graphical games. Players need to return to a shared menu and open another game without restarting the application.",
    details: [
      "Built three Java games behind a shared menu, using a common Game interface and abstract base class to organize console and JavaFX implementations.",
      "Managed the JavaFX lifecycle with a shared runtime and CountDownLatch synchronization, allowing players to relaunch graphical games from the console menu without restarting the application.",
      "Wrote JUnit tests for Quantum Sum's move validation, grid updates, dice behavior, and score-file parsing, including corrupted-input cases.",
    ],
    outcome:
      "Implemented a common launch-and-return flow for all three games, with tests for Quantum Sum's rules and stored scores. Quantum Sum was developed with documented ChatGPT assistance as part of the course brief.",
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

                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {p.context}
                    </p>

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

                  <div className="space-y-5">
                    <p className="text-xs leading-relaxed text-muted-foreground">{p.context}</p>

                    <DialogDescription className="text-sm leading-relaxed text-foreground/85">
                      {p.description}
                    </DialogDescription>

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

                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">Why this project</h3>
                      <p className="text-sm leading-relaxed text-foreground/85">{p.problem}</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">My contribution</h3>
                      <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground/85 marker:text-primary">
                        {p.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">Outcome</h3>
                      <p className="text-sm leading-relaxed text-foreground/85">{p.outcome}</p>
                    </div>
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
