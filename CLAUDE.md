# Portfolio site

Davi Vargas's personal portfolio. Single page, Vite + React + TypeScript, Tailwind and shadcn/ui, Vitest for tests. Deployed as a static build.

## Where the content lives

All site copy is hardcoded in the section components. There is no CMS or data folder.

| Section | File | Data |
|---|---|---|
| Experience | `src/components/sections/Experience.tsx` | `experiences` array, newest first. Card shows role, company, summary, tags, period. Clicking opens a modal with the `details` bullets. First three entries are visible; the rest sit behind "See my whole journey". |
| Projects | `src/components/sections/Projects.tsx` | `projects` array, selected work first. Card shows the logo (or first letter), name, `context`, description, tags, and Code, Demo, and Live chips. Clicking opens a case-study dialog with `problem`, personal-contribution `details`, `outcome`, an embedded YouTube video when `youtube` is set, and outbound buttons. First three entries are visible; the rest sit behind "See all N projects", where N is the array length. |
| Education | `src/components/sections/Education.tsx` | inline |
| Skills | `src/components/sections/Skills.tsx` | `skillGroups` array. Two allowed sources: a tag or technology named in an Experience or Projects entry, or the TECHNICAL SKILLS lines of the six resume variants in `Downloads/internship application/latex/pdf templates`. Keep the resumes' own qualifiers such as "(basic)". Do not add aspirational tools. |
| About, Contact | `src/components/sections/*.tsx` | inline |

`src/pages/Index.tsx` composes the sections. `SideNav.tsx` and `Sidebar.tsx` hold the navigation labels.

## Adding an experience or a project from a repository

When asked to "read out" a project, add an experience, or add a project, follow the matching guide. They define the evidence to gather, the writing rules, the data shape, and the export file.

- Jobs, internships, co-ops, contracts: [docs/bullet-guides/experience-bullets.md](docs/bullet-guides/experience-bullets.md)
- Personal, course, hackathon, open-source, or client-built projects shown as work samples: [docs/bullet-guides/project-bullets.md](docs/bullet-guides/project-bullets.md)

The experience guide contains the shared writing rules; the project guide adds project-specific guidance. See the [rule review](docs/bullet-guides/rule-review.md) for the source comparison and reasons for the changes.

The workflow, in order:

1. **Gather relevant evidence.** Use source code, relevant history, tests, documents, measurements, and user-provided records as needed. Record claims, sources, dates/revisions, and limits in an evidence table. Commit counts do not prove ownership; test files do not prove passing tests; documented figures are reported evidence until verified.
2. **Draft and review.** Follow the rules below and the matching guide's checklist. Keep one core bullet bank and tailor selection, order, and wording for the target role without changing facts. Site and resume wording may differ when context or space requires it.
3. **Insert the entry when requested.** Keep experiences newest first. For projects, preserve the selected-work order unless intentionally curating for a stated role; add at the top only when appropriate. Match existing fields. Experience periods use `"Mon YYYY\nto Mon YYYY"` or `"Mon YYYY\nto Present"`; project cards explain the product and context, and dialogs explain the problem, personal contribution, and outcome.
4. **Verify the changes.** For site entry edits, run `npx eslint <file>`, `npx tsc --noEmit -p tsconfig.app.json`, and `npx vite build`. Check narrow and wide card/modal layouts when preview is available. Run relevant existing tests for behavior changes. Documentation-only edits need a link, consistency, and diff review. Report checks not performed.
5. **Export when adding an entry.** Save a Markdown bullet bank next to the source project folder, outside its git tree, named `<Project>_Resume_Bullets.md` (experience) or `<Project>_Project_Bullets.md` (project). If unavailable, use an allowed location and report it. Include evidence, exact site copy, core resume bullets, relevant technologies, and material open questions; add variants only when useful or requested. Return a clickable file link.
6. **Report material gaps.** Identify unverified measurements, attribution, release status, or missing facts that affect the copy. Narrow or omit unsupported claims. For review-only or draft-only requests, keep the deliverable within that scope.

## Writing conventions for site copy

- Project entries follow the [portfolio case-study structure](docs/bullet-guides/project-bullets.md#2-write-the-entry), while Experience retains resume-style bullets. State material project status and team context visibly; use supported capabilities when measured outcomes are unavailable. Keep existing demos and code links easy to reach.
- Do not add an on-site blog. An external Medium link is optional only when the user supplies a real destination. Portfolio advice does not authorize fabricated metrics, ATS-ranking promises, framework migrations, tracking, purchases, or external publishing.
- No em dashes anywhere in copy. Use a comma, a period, or a middle dot (`·`) as the existing entries do.
- Lead with the strongest relevant achievement. Give each bullet one main contribution, with related method and outcome where useful.
- Explain what the work does and why it matters. Supply product and audience context across the entry; do not repeat it in every bullet.
- Start bullets with accurate action verbs: past tense for completed work, present tense for ongoing work. Card descriptions may use ordinary descriptive sentences.
- Connect relevant technologies to the problems they solve. Use recognizable names and truthful job-posting terminology; avoid stack dumps and keyword stuffing.
- Never invent metrics, ownership, or outcomes. Use contextual measurements when available, otherwise meaningful scope or a completed capability. Counts alone do not establish impact.
- Distinguish intended, designed, implemented, tested, deployed, and used. Test results support tested conditions, not universal guarantees. Use "designed and built" when both are supported.
- Identify personal contributions in team work. Show collaboration through concrete actions when relevant, without imposing a quota.
- Use plain language, remove filler and unsupported praise, and explain unfamiliar terms without changing their technical meaning. For targeted resumes, include relevant full-term/acronym variants once where useful.
- Aim for one sentence and roughly one to two printed lines. About 20 to 35 words is a drafting guide, not a limit. Bullet and tag counts are flexible; keep only useful evidence.
- For resume files, follow the [shared ATS preparation](docs/bullet-guides/experience-bullets.md#ats-preparation-for-resume-files): employer file requirements first, simple one-column text, standard headings/bullets, contact details in the body, clearly separated titles/employers/dates, and a plain-text extraction check. Review autofilled fields when applying. Do not label a bullet bank as a tested ATS-compatible resume or promise a screening result.
- Use job terminology truthfully, without repetition quotas or hidden keywords. Preserve historical titles; identify a target role separately.
- Company names, roles, and employment dates follow the user's records. Keep scope and release status accurate, omit unavailable links, and respect known confidentiality restrictions. Ask for missing facts when necessary.

## Commands

| What | Command |
|---|---|
| Dev server | `npm run dev` |
| Lint | `npm run lint` or `npx eslint <file>` |
| Type check | `npx tsc --noEmit -p tsconfig.app.json` |
| Tests | `npm run test` |
| Production build | `npm run build` |

Do not commit or push unless asked.
