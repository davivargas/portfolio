# Project bullets guide

Use this guide for personal, course, hackathon, open-source, or client-built work samples. Use the [experience guide](experience-bullets.md) for the employment engagement. A contract may appear in both sections when each entry adds a distinct perspective.

Follow the experience guide's [evidence workflow](experience-bullets.md#1-gather-the-evidence-you-need), [shared writing rules](experience-bullets.md#2-shared-writing-rules), and [review checklist](experience-bullets.md#4-review-and-verify). The [rule review](rule-review.md) explains the resume-source comparison. This guide adds project-specific requirements, including portfolio presentation. Experience entries retain their resume-style summaries and bullets.

For resume documents, also follow the shared [ATS preparation](experience-bullets.md#ats-preparation-for-resume-files). Include project purpose, contributions, and relevant technologies in readable text; a repository link, video, or logo supplements that evidence.

## 1. Choose the evidence and story

- Establish what the project does, whom it helps, and your contribution. For group work, identify your component and relevant collaboration instead of attributing the whole product to yourself.
- Prioritize meaningful engineering decisions, problems solved, or useful capabilities. A framework inventory alone does not explain the work.
- Include measured results, real usage, deployment, or awards when supported. A prototype can demonstrate strong engineering without users or business metrics.
- Describe its status accurately. A course project, hackathon entry, prototype, design, and production release are different kinds of evidence. A live URL establishes availability, not adoption.
- Use the README, relevant code and history, test output, project brief, release records, and user-provided context as needed. Check evidence for any claimed team size, event duration, award, or usage figure.

## 2. Write the entry

For the portfolio, write a compact case study. A visitor should understand the product from its card and find evidence of your contribution in its dialog. Two or three detail bullets are a useful starting point, not a quota.

| Field | Purpose |
|---|---|
| `description` | Card and dialog introduction: explain the product and audience in plain language. |
| `context` | Visible on both surfaces: identify solo/team/course/hackathon context and material status. Put ongoing development here; disclose material AI assistance where applicable. |
| `problem` | Dialog's "Why this project": explain the workflow or technical constraint addressed, or a personal origin story supplied by the user. Do not invent user interviews, demand, or motivation. |
| `details` | Dialog's "My contribution": connect your implementation choices to that problem. Attribute team work accurately and include a concrete iteration or validation step when supported. |
| `outcome` | Dialog's "Outcome": state the resulting capability or measured result and any material limit. A working feature is sufficient; do not invent adoption or repeat every bullet. |

Use the [reviewed project evidence](../resume-website-bullet-revisions.md#srccomponentssectionsprojectstsx) for the existing four entries. That document is an earlier copy proposal, not an up-to-date record of the rendered site; `Projects.tsx` holds the current wording. Recheck sources before introducing new claims.

When the user supplies a personal origin story, include it briefly in the problem section: what started the project, what prompted continued work, and what they want to achieve. Distinguish past use from a future goal. For Fall Line, the user reports that it began in a mobile/Android course and that they enjoyed building and using it while snowboarding in February–April 2026. They are improving it to become their main tracker, with control over collected data and access to all stats without premium subscriptions. This supports personal use and motivation, not broader adoption or completion of that goal.

On a resume, fold the necessary product context into the first bullet or a short description, then select the strongest relevant contributions. The site's case-study fields are not mandatory resume headings. There is no mandatory position for a technical, collaboration, or testing bullet.

Keep the description to one or two short sentences, around 30 words as a starting point. Aim for a dialog readable in one short sitting, roughly 150 to 250 words across its narrative fields. Apply the shared length guidance to bullets: roughly 20 to 35 words when useful, with readability in the actual layout taking priority. These are editing guides, not quotas. Keep facts consistent when tailoring resume wording.

Place material scope or release context in the description, subtitle, or relevant bullet where it is easy to find. Do not overload the first bullet with every label.

| Evidence available | Suitable wording |
|---|---|
| Confirmed deployment | "deployed on Firebase Hosting"; add users only with usage evidence |
| Implemented but unreleased | "implemented; pilot pending" if a pilot is actually planned |
| Prototype | "prototype" or "proof of concept" |
| Hackathon or course brief | "hackathon project" or "course project"; include duration only if supported |
| Design documents only | "designed the data model"; do not say "built the system" |
| Some parts built, others planned | Name the completed component and distinguish any planned work mentioned |

Avoid "feature-complete" unless the agreed feature scope and completion are supported. Device validation requires evidence of device validation, and retry tests support the tested conditions rather than a universal exactly-once guarantee.

## 3. Site data and assets

Edit the `projects` array in `src/components/sections/Projects.tsx`. Its first three entries are the selected work; the expansion control reveals the remaining entries. Preserve the current order unless intentionally curating it for a stated role. A new entry does not automatically deserve the first slot. Keep complementary, defensible examples rather than adding projects solely to increase the count.

```ts
{
  name: "Delivery Driver App",
  description: "A short explanation of the product, its audience, and material project context.",
  context: "Solo project · Prototype",
  problem: "The user workflow or engineering constraint addressed.",
  details: [ /* Distinct contributions, strongest relevant evidence first. */ ],
  outcome: "The capability delivered and its material limits, or a supported measured result.",
  tags: [ /* A concise selection of technologies actually used. */ ],
  github: "https://...", // Optional public repository URL.
  live: "https://...", // Optional deployed site or demo URL.
  youtube: "https://...", // Optional video; recognized URLs embed in the dialog.
  logo: "/projects/<asset-name>.svg", // Optional existing SVG or raster asset.
  monochromeLogo: true, // Only for a dark, single-colour mark that should invert.
}
```

The code example is a field template; replace example values and omit unavailable optional fields.

- **Tags:** use recognizable technology names and prioritize relevance. There is no required count or need to repeat the entire stack inside each bullet.
- **Links:** use real repository, demo, or video URLs. Omit unavailable links instead of inserting `"#"` or guessed URLs. If a repository is private, note that in the bullet bank; mention it publicly only when useful, and do not expose a restricted link. Report missing or unverified links.
- **Video:** recognized YouTube URLs embed in the dialog and the Demo chip opens it. Unrecognized URLs fall back to outbound links. Parser support lives in `src/lib/projectLinks.ts`; update its existing tests if parser behavior changes.
- **Logos:** use an appropriate existing mark under `public/projects/`, square or wide. Keep it readable at the rendered size and avoid an unwanted baked-in background. SVGs should have a suitable `viewBox`. Set `monochromeLogo` only when inversion suits the artwork; omit `logo` to use the first-letter fallback.
- **Case-study layout:** keep context visible on cards and dialogs. Render problem, contribution, and outcome with semantic headings. Keep `DialogDescription` associated with the dialog, long content scrollable, and card links independently keyboard accessible.
- **Product evidence:** preserve existing demo embeds and outbound code/site links. A logo identifies the project but does not demonstrate it. Add actual screenshots or diagrams only when available and informative; never invent a product screen or a results chart. Keep videos mounted only while their dialog is open.

These are site implementation conventions, not resume screening requirements.

## 4. Verify and export

Use the shared review checklist, then check that the description supplies product context, the problem explains the contribution, the outcome is supported, and provided links and logos work. Check narrow and wide card/dialog layouts, scrolling, keyboard opening/closing, independent outbound links, and expansion when preview is available. Report anything unverified. A successful build does not verify a hosted demo, video availability, or mobile layout.

For site entry changes, run `npx eslint src/components/sections/Projects.tsx`, `npx tsc --noEmit -p tsconfig.app.json`, and `npx vite build`. Run relevant existing tests if behavior changes. For documentation-only edits, review links, consistency, and the diff.

Save `<Project>_Project_Bullets.md` next to the source project folder, outside its git repository. If that location is unavailable, use an allowed location and report the path. Include:

1. **Context:** project purpose, your role, scope/release status, and available links.
2. **Evidence:** a claim/source table with dates or revisions and material limits.
3. **Site entry:** exact description, context, problem, details, outcome, tags, and assets/links inserted, when applicable.
4. **Resume bullets:** the core set, with product context included where needed; useful or requested alternatives only.
5. **Relevant technologies:** supported terms for tailoring.
6. **Open questions:** missing links, unverified figures, attribution, or planned work mentioned in the draft.
7. **Writing sources:** references actually used, with unavailable references noted.

Return a clickable file link, verification results, and material evidence gaps.

## 5. Worked example

Illustrative only; these statements require matching code, contributor, and test evidence before use.

**Description:** A prototype delivery app for couriers to capture photos and signatures on their phones, including when a network connection is unavailable.

**Detail bullets:**

- Implemented local delivery storage with IndexedDB and a retry queue, allowing couriers to capture delivery records offline and submit them after reconnecting.
- Added PostgreSQL row-level access policies and verified in database tests that one driver's account could not read or update another driver's delivery records.

For a resume without the description, the first bullet could become: "Built offline photo and signature capture for a prototype courier app using IndexedDB, with a retry queue to submit delivery records after reconnecting."

This example gives product context, a useful capability, and a bounded test result without asserting deployment, adoption, or measured business impact.

## 6. Portfolio advice: what applies here

Fanny N.'s [How to Build a Tech Portfolio That Stands Out](https://medium.com/@fannynyayic/how-to-build-a-tech-portfolio-that-stands-out-e3516d8f1e24), published February 19, 2026, recommends selected work, problem-to-result stories, supporting visuals, and role relevance. Those ideas inform the presentation above. Its numerical examples are illustrative, not evidence about these projects.

Repository decisions:

- Keep the current React/Vite site and compact dialogs. A framework migration, separate project routes, or a new CMS needs an actual requirement.
- Keep metric claims subject to the existing evidence rules. The article's request to quantify everything does not override them.
- Apply ATS guidance to submitted resume files. Do not promise that website keywords or replacing a PDF with a website improves ATS ranking.
- No on-site blog. An external Medium link is optional once the user supplies a published article or profile worth linking; do not add an empty destination or a publishing quota.
- Ask for the target role before major changes to project selection. Specific reviewer feedback, actual screenshots, and a recorded explanation of a difficult decision can inform a later revision.
- Certifications, public contributions, talks, analytics, custom domains, and role-specific pages are optional user decisions. Do not invent credentials, make purchases, publish externally, or install tracking as part of a copy edit.
- Update entries when implementation, status, evidence, or links change. Keep the user's site easy to maintain instead of enforcing an arbitrary content schedule.
