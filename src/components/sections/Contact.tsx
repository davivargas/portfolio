import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-60" />

      <div className="container relative z-10">
        <SectionHeading eyebrow="05 / Contact" title="Let's build something." />

        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-8">
            I'm currently exploring new opportunities and always happy to chat with
            folks building thoughtful products. The fastest way to reach me is email.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Button asChild size="lg" className="rounded-full shadow-elegant">
              <a href="mailto:hello@alexcarter.dev">
                <Mail className="h-4 w-4" />
                hello@alexcarter.dev
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#" download>Download résumé</a>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 transition-smooth"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
