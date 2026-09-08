import { SectionHeading } from "../SectionHeading";

// Sourced from two places, and nothing else. First, every tag and technology
// named in an Experience or Projects entry. Second, the TECHNICAL SKILLS lines
// of the six resume variants in Downloads/internship application/latex/pdf
// templates. Trimmed by hand to what reads well; not exhaustive.
// Nothing aspirational: if it is not in one of those sources, it does not belong.
const skillGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C", "SQL", "R", "VBA", "Kotlin"],
  },
  {
    category: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Bootstrap 5", "Flutter", "Progressive Web Apps", "Responsive UI design", "Figma"],
  },
  {
    category: "Backend & data",
    items: ["Node.js", "PostgreSQL", "MySQL", "Supabase", "Prisma", "Redis", "GraphQL", "REST APIs", "Firestore", "IndexedDB"],
  },
  {
    category: "Testing & QA",
    items: ["Playwright", "Vitest", "Jest", "Mocha", "JUnit", "TestCafe", "Selenium", "Gherkin", "Cucumber", "Testcontainers"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Docker Compose", "AWS", "GitHub Actions", "TeamCity", "CI/CD", "Git", "GitHub", "Bitbucket", "Jira"],
  },
  {
    category: "Data & analytics",
    items: ["Power BI", "Advanced Excel", "ETL and ELT", "Exploratory data analysis", "Data visualization"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="04 / Skills" title="My toolkit" />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.category}
            className="rounded-xl border border-border bg-card/60 backdrop-blur p-5 hover:border-primary/40 hover:shadow-card transition-smooth"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              {g.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent text-accent-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
