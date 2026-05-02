import { SectionHeading } from "../SectionHeading";

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container">
        <SectionHeading eyebrow="04 / About" title="A bit about me." />

        <div className="grid gap-12 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3 space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a software engineer based in <span className="text-foreground">Brooklyn, NY</span>.
              I started writing code in high school to mod video games, and somewhere along the way
              it turned into a career.
            </p>
            <p>
              These days I focus on the seams between design and engineering — design systems,
              animation, performance, and the small interactions that make a product feel alive.
              I care a lot about <span className="text-foreground">accessibility</span>,
              <span className="text-foreground"> typography</span>, and the discipline of shipping.
            </p>
            <p>
              When I'm not at the keyboard you'll probably find me on a long bike ride,
              brewing pour-over, or losing at chess online.
            </p>
          </div>

          <aside className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="font-mono text-xs text-muted-foreground mb-4">// quick facts</p>
            <dl className="space-y-3 text-sm">
              {[
                ["Location", "Brooklyn, NY"],
                ["Years coding", "8+"],
                ["Currently", "Senior Engineer at Northwind"],
                ["Open to", "Staff / Founding roles"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
};
