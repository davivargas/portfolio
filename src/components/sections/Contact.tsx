import { Mail } from "lucide-react";
import { EmailOptions } from "@/components/EmailOptions";
import { SectionHeading } from "../SectionHeading";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="05 / Contact" title="Let's build something" />

      <p className="text-base text-muted-foreground leading-relaxed mb-6">
        I'm currently exploring new opportunities and always happy to chat with other people who are also building real solutions. The fastest way to reach me is email.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <EmailOptions align="start">
          <Button type="button" size="lg" className="rounded-full shadow-elegant">
            <Mail className="h-4 w-4" />
            davi.vargas7@gmail.com
          </Button>
        </EmailOptions>
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <a href="#" download>Download résumé</a>
        </Button>
      </div>

      <p className="mt-16 text-xs font-mono text-muted-foreground">
        Designed in Figma and Stitch, built with React + Tailwind. Type set in Inter & JetBrains Mono.
      </p>
    </section>
  );
};
