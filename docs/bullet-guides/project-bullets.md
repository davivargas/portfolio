# Project bullets guide

How to turn a personal, course, hackathon, open-source, or client-built project into a Projects entry on the site and a project bullet bank. Use the experience guide instead when the work was a job, internship, co-op, or contract that belongs in the Experience timeline. A contract can appear in both: the engagement in Experience, the product as a project.

---

## 1. Data shape

The current `projects` array in `src/components/sections/Projects.tsx`:

```ts
{
  name: "Sprinter Delivery Driver App",
  description: "One bullet, about 30 words, that establishes the product and its purpose.",
  tags: [ /* 4 to 6 exact technology names */ ],
  live: "https://...",     // demo or deployed URL, or omit the field if none exists
  github: "https://...",   // repository URL, or omit the field if the code is private
  youtube: "https://...",  // demo video, embedded in the dialog when the parser recognizes it
  logo: "/projects/<slug>.svg",  // square mark copied into public/projects/; omit to show the first letter
  monochromeLogo: true,    // only for single-colour dark marks, so they invert in the dark theme
}
```

The card shows the project mark (the `logo` file, or the first letter of the name when there is none), the name, `description`, tags, and a row of link chips. Clicking the card opens a dialog holding the description, the `details` bullets, an embedded video when `youtube` is set, and the outbound link buttons.

**How each link behaves.** `github` and `live` are outbound links on both the card and the dialog. `youtube` is different: a recognized video URL is embedded as a player inside the dialog, and the card's Demo chip opens that dialog rather than leaving the site. The dialog's button row always carries the YouTube link beside "View code": it reads "Open on YouTube" next to an embedded player and "Watch demo" when there is no embed. A YouTube URL the parser cannot read falls back to that plain outbound button, so a malformed URL degrades instead of breaking.

**Logos.** Copy the project's square mark into `public/projects/<slug>.svg` and set `logo` to `/projects/<slug>.svg`. It renders at 80px with no background, so the file must not carry a baked-in background of its own, and the `viewBox` should drive scaling rather than fixed `width` and `height` attributes. If the mark is a single dark colour, also set `monochromeLogo: true` so it inverts in the dark theme. Coloured marks are shown as they are.

`youtubeId` in `src/lib/projectLinks.ts` accepts the watch, share, embed, shorts, live, mobile, and no-cookie forms and returns null for anything else, because the id is interpolated into an iframe `src`. Its tests live beside it in `projectLinks.test.ts`; extend them when you touch the parser.

Do not leave `"#"` placeholders for any link. A link the reader cannot follow is worse than no link, and the code treats `"#"` as absent, so the chip simply will not render. If a link is missing, say so in the report so the user can supply it.

---

## 2. Gather evidence first

Run from the source repo root. Every claim in a bullet must trace to one of these.

```bash
git log --format='%an' | sort | uniq -c | sort -rn      # solo or group, and your share
git rev-list --count HEAD
git log --format='%ad' --date=short | sort -u | sed -n '1p;$p'
git log --no-merges --format='%an' -- <dir you owned> | sort | uniq -c   # your component in a group project
find . -name '*.test.*' -not -path '*/node_modules/*' | wc -l
ls <migrations dir> 2>/dev/null | wc -l
grep -rniE "deployed|live at|https://[a-z0-9.-]+\.(app|dev|ca|com|io)" README.md docs 2>/dev/null | head
grep -rniE "hackathon|course|assignment|prototype|proof of concept|award|winner|users" README.md docs 2>/dev/null | head
```

Also read: README, any spec or design doc, the CI workflow, package.json, and the commit subject list. Note what is built versus only designed, and whether anything is deployed or has real users.

---

## 3. What to emphasize

**Purpose and functionality.** Explain what the project does and who it helps. The first bullet always does this. A reader who has never heard of the project should understand it from that one line.

**Your contribution.** For group projects, distinguish your work from the team's output. "Implemented the offline sync layer for a four-person delivery app" is precise. Implying you built the whole product when you did not is not.

**Technical substance.** Highlight meaningful implementation details, problems solved, or engineering decisions: the idempotency scheme, the row-level security model, the compression pipeline, the edit-distance search. Not the framework list.

**Verified outcomes.** Include real users, deployment, benchmark results, or awards when they exist. A completed capability is a valid outcome. Revenue or invented time savings are not required.

**Accurate scope.** Say plainly when something is a prototype, hackathon entry, course project, or design-only phase. Describe intended benefits as intended benefits.

**Accessible proof.** Add the repository or demo link when available. If the code is private, say "private client repository" rather than omitting the fact.

---

## 4. Format

Project name + relevant technologies + repository or demo links, then two or three focused bullets.

- **Bullet 1** establishes the product and its purpose: what it does, for whom.
- **Bullets 2 and 3** demonstrate the strongest technical contributions, one contribution each.

A project bullet does not need a business metric. This works: "Implemented offline delivery capture with local storage and automatic synchronization, allowing drivers to record delivery details without a network connection." It names a concrete capability, the approach, and its value. Use it only if that functionality was actually implemented.

Length: 20 to 33 words per bullet. The `description` field on the site holds bullet 1 and should stay near 30 words so the card does not overflow.

---

## 5. Writing rules that carry over from the experience guide

- Open with a past-tense action verb. Present tense only for work still in progress.
- One contribution per bullet. No filler ("successfully", "various"), no vague adjectives ("robust", "scalable") without the evidence behind them.
- Decode acronyms and name unfamiliar products for an outside reader.
- Never invent a number. Cite scope (screens, tests, migrations, records) or a capability instead.
- Phrase a design guarantee as a guarantee and a tested result as tested.
- No em dashes in site copy.

---

## 6. Scope labels

Put the label in bullet 1 when it applies, so the reader is never misled:

| Situation | Wording |
|---|---|
| Deployed with real users | "used by ~10 drivers", "deployed at app.example.ca" |
| Feature-complete, not yet launched | "feature-complete and validated on real devices; pilot pending" |
| Prototype or proof of concept | "prototype", "proof of concept" |
| Hackathon | "built in 36 hours at <event>" |
| Course project | "course project for <course>" |
| Designed only | "designed the data model"; never "built" |

---

## 7. Compliance checklist

1. Does bullet 1 tell an outsider what the product does and who it helps?
2. Is my own contribution separated from the team's?
3. Does each further bullet show a real engineering decision or problem solved?
4. Are outcomes verified, or clearly labelled as intended?
5. Is the scope label accurate?
6. Are the links real and reachable, or explicitly marked private or missing?
7. Are the tags exact technology names?
8. Could I demo or explain every claim in an interview?

---

## 8. Export file template

Save as `<Project>_Project_Bullets.md` next to the source project folder, outside its git repository. Sections, in order:

1. Title, one-line positioning, scope label, links.
2. **Evidence table** of claim and source.
3. **Card entry** exactly as inserted in `Projects.tsx`.
4. **Full bullet set** (three bullets: product and purpose, then two technical contributions), plus two or three alternates for different job types.
5. **Keywords**.
6. **Cautions**: anything designed but not built, deployment status, missing links, numbers that come from docs rather than measurements.

Send the file to the user after writing it.

---

## 9. Worked example

From the Sprinter Delivery repository, feature-complete driver app, admin portal designed only:

- Built a proof-of-delivery Progressive Web App for a courier company's drivers, replacing paper waybills with photo and signature capture on their phones; feature-complete and validated on real devices, pilot pending.
- Implemented offline-first order search and delivery capture with IndexedDB storage and a background outbox, so a driver can work a full shift without signal and every record uploads exactly once.
- Designed the PostgreSQL schema with row-level security on every table and append-only audit records, verified by 230+ database tests including cross-driver access attacks.

The first bullet carries the scope label. The second describes a capability the tests prove. The third names an engineering decision and its verification. None of them needs a business metric.
