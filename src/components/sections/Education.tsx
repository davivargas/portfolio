import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "../SectionHeading";

const education = [
  {
    period: "2024\nto 2026",
    credential: "Computer Systems Technology (CST) Diploma",
    school: "British Columbia Institute of Technology (BCIT)",
    location: "Vancouver, BC",
    summary:
      "Two-year intensive program covering software development, data structures and algorithms, databases, web application development, cloud computing and DevOps.",
    tags: ["Python", "Java", "JavaScript", "TypeScript", "C", "Databases", "Data Structures", "OOP", "AWS", "CI/CD"],
  },
  {
    period: "2014\nto 2020",
    credential: "Bachelor of Mechanical Engineering",
    school: "Universidade Federal do Espirito Santo",
    location: "Brazil",
    summary:
      "Where I first started coding. Using scripting and numerical tools to solve engineering problems sparked my interest in software development.",
    tags: ["Advanced Math", "Python", "C", "MATLAB", "Numerical Methods", "Problem Solving"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="05 / Education" title="Where I learned it" />

      <ol className="group/list space-y-2">
        {education.map((item) => (
          <li key={item.school}>
            <div className="group relative grid grid-cols-1 gap-4 rounded-xl p-4 -mx-4 transition-smooth hover:bg-card/60 hover:shadow-card lg:group-hover/list:opacity-50 lg:hover:!opacity-100 sm:grid-cols-8">
              <div className="absolute -inset-px rounded-xl border border-transparent pointer-events-none group-hover:border-border" />
              <GraduationCap className="absolute right-4 top-4 h-4 w-4 text-muted-foreground transition-smooth group-hover:text-primary" />
              <div className="sm:col-span-6 pr-6">
                <h3 className="font-semibold transition-smooth group-hover:text-primary">
                  {item.credential}
                </h3>
                <p className="mt-1 text-sm text-foreground/80">
                  {item.school} · {item.location}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-accent font-mono text-[11px] text-accent-foreground hover:bg-accent"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="pt-1 text-left font-mono text-xs tracking-widest text-muted-foreground whitespace-pre-line sm:col-span-2 sm:pr-9 sm:text-right">
                {item.period}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
