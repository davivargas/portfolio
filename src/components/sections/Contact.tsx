import { Mail } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="05 / Contact" title="Let's build something" />

      <p className="text-base text-muted-foreground leading-relaxed mb-6">
        I'm currently exploring new opportunities and always happy to chat with folks building
        thoughtful products. The fastest way to reach me is email.
      </p>

      <div className="flex flex-wrap items-center gap-3">
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

      <p className="mt-16 text-xs font-mono text-muted-foreground">
        Designed in Figma, built with React + Tailwind. Type set in Inter & JetBrains Mono.
      </p>
    </section>
  );
};
