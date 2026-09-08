import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { SideNav } from "./SideNav";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/davivargas" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/davi-vargas/" },
  { icon: Mail, label: "Email", href: "mailto:davi.vargas7@gmail.com" },
];

export const Sidebar = () => {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:w-[44%] xl:w-[42%] py-16 lg:py-24 lg:flex lg:flex-col lg:justify-between">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              hello, world
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight">
              Davi Vargas
            </h1>
            <h2 className="mt-3 text-lg sm:text-xl font-medium text-foreground/80">
              Software Engineer
              <span className="text-highlight animate-blink ml-1">_</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              BCIT CST student building real projects while learning new technologies and strengthening my software development skills.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <SideNav />
      </div>

      <ul className="flex items-center gap-5 mt-12 lg:mt-0">
        {socials.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-smooth inline-block"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
