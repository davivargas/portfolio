# Portfolio site

Davi Vargas's personal portfolio. Single page, Vite + React 19 + TypeScript, Tailwind and shadcn/ui, Vitest for tests. Deployed as a static build.

## Where the content lives

All site copy is hardcoded in the section components. There is no CMS or data folder.

| Section | File | Data |
|---|---|---|
| Experience | `src/components/sections/Experience.tsx` | `experiences` array, newest first. Card shows role, company, summary, tags, period. Clicking opens a modal with the `details` bullets. First three entries are visible; the rest sit behind "See my whole journey". |
| Projects | `src/components/sections/Projects.tsx` | `projects` array, newest first. Card shows the logo (or first letter), name, description, tags, and Code, Demo, and Live chips. Clicking opens a dialog with the `details` bullets, an embedded YouTube video when `youtube` is set, and the outbound buttons. First three entries are visible; the rest sit behind "See all N projects", where N is the array length. |
| Education | `src/components/sections/Education.tsx` | inline |
| Skills | `src/components/sections/Skills.tsx` | `skillGroups` array. Two allowed sources: a tag or technology named in an Experience or Projects entry, or the TECHNICAL SKILLS lines of the six resume variants in `Downloads/internship application/latex/pdf templates`. Keep the resumes' own qualifiers such as "(basic)". Do not add aspirational tools. |
| About, Contact | `src/components/sections/*.tsx` | inline |

`src/pages/Index.tsx` composes the sections. `SideNav.tsx` and `Sidebar.tsx` hold the navigation labels.

## Adding an experience or a project from a repository

When asked to "read out" a project, add an experience, or add a project, follow the matching guide. They define the evidence to gather, the writing rules, the data shape, and the export file.

- Jobs, internships, co-ops, contracts: [docs/bullet-guides/experience-bullets.md](docs/bullet-guides/experience-bullets.md)
- Personal, course, hackathon, open-source, or client-built projects shown as work samples: [docs/bullet-guides/project-bullets.md](docs/bullet-guides/project-bullets.md)

The short version of the workflow, in order:

1. **Gather evidence from the source repo before writing anything.** Author counts, date range, directory ownership, test counts, migrations, routes, docs, and the state of the code before the user joined. The guides list the commands. Every number in a bullet must trace to one of these.
2. **Draft the bullets at resume length**, 25 to 33 words each, one contribution per bullet. The same wording is used in the site modal and on the printed resume, so there is a single canonical set to maintain. Write a longer variant only if the user asks for one.
3. **Insert the entry** at the top of the array unless the user says otherwise, matching the existing field names and the `"Mon YYYY\nto Mon YYYY"` period format.
4. **Verify** with `npx eslint <file>`, `npx tsc --noEmit -p tsconfig.app.json`, and `npx vite build`. Report the results plainly.
5. **Export a Markdown bullet bank** next to the source project folder, outside its git tree, named `<Project>_Resume_Bullets.md` (experience) or `<Project>_Project_Bullets.md` (project). The guides give the section template. Send the file to the user.
6. **State the cautions.** Which numbers come from docs rather than measurements, what is designed but not built, and anything the user should confirm before an interview.

## Writing conventions for site copy

- No em dashes anywhere in copy. Use a comma, a period, or a middle dot (`·`) as the existing entries do.
- Every bullet opens with a past-tense action verb. Present tense only for work still in progress.
- Never invent a metric. If the repo has no measurement, describe scope or a completed capability instead.
- Say "designed" for things that exist only as documents and "built" for things that exist as code.
- Company and role names follow the user's paperwork, not the repo. Ask when unsure.

## Commands

| What | Command |
|---|---|
| Dev server | `npm run dev` |
| Lint | `npm run lint` or `npx eslint <file>` |
| Type check | `npx tsc --noEmit -p tsconfig.app.json` |
| Tests | `npm run test` |
| Production build | `npm run build` |

Do not commit or push unless asked.
