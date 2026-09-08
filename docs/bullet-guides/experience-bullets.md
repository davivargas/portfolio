# Experience bullets guide

How to turn a job, internship, co-op, or contract repository into an Experience entry on the site and a resume bullet bank. Use the project guide instead for personal, course, hackathon, or open-source work.

The output has three parts: the entry in `src/components/sections/Experience.tsx`, a Markdown bullet bank saved next to the source project, and a short report of cautions.

---

## 1. Data shape

```ts
{
  period: "Aug 2026\nto Present",          // "Mon YYYY\nto Mon YYYY" or "to Present"; the \n is literal
  role: "Software Developer (Contract)",   // from the user's paperwork, not the repo
  company: "Sprinter Delivery",
  summary: "One or two sentences, about 30 words, for the card before the modal opens.",
  details: [ /* 5 to 6 long-form bullets, strongest first */ ],
  tags: [ /* 6 to 9 exact technology names, most relevant first */ ],
}
```

Insert at the top of the `experiences` array unless told otherwise. Entries are newest first. The first three render by default; the rest are behind the "See my whole journey" toggle.

**Summary rules.** State what the system is, who it serves, and the headline outcome. No jargon the card reader cannot decode. About 30 words. Example: "Contracted by a courier company to replace its Excel and VBA operations system. Built the driver proof-of-delivery app that works a full shift offline, with the admin portal designed and next to build."

**Tag rules.** Exact names as an ATS would match them: `TypeScript`, `PostgreSQL`, `GitHub Actions`, not `TS`, `Postgres`, `CI`. Lead with the languages and frameworks a job posting would list. Six to nine tags.

---

## 2. Gather evidence first

Never write a bullet before running these. Every number in a bullet must trace to one of them. Run from the source repo root.

```bash
# Who wrote what, and when
git log --format='%an' | sort | uniq -c | sort -rn
git rev-list --count HEAD
git log --author='<name>' --format='%ad' --date=short | sort -u | sed -n '1p;$p'
git log --author='<name>' --format='%ad' --date=format:'%Y-%m' | sort | uniq -c

# Ownership per directory (your commits vs the next contributor)
for d in server client packages docs; do echo "== $d"; git log --no-merges --format='%an' -- "$d" | sort | uniq -c | sort -rn | head -3; done

# What you personally added (test files authored by you)
for f in $(find . -name '*.test.*' -not -path '*/node_modules/*'); do git log --no-merges --format='%an' --diff-filter=A -- "$f" | tail -1; done | sort | uniq -c

# Countable scope
find . -name '*.test.*' -not -path '*/node_modules/*' | wc -l
grep -rhoE "^\s*(it|test)\(" $(find . -name '*.test.*' -not -path '*/node_modules/*') | wc -l
ls <migrations dir> | wc -l
grep -hoE "router\.(get|post|put|delete|patch)\(" <routes dir>/* | wc -l

# The before state, to support a "from X to Y" claim
git ls-tree -r --name-only $(git rev-list -1 --before=<join date> HEAD) | grep -E '^(src|server|client)' | head
git show $(git rev-list -1 --before=<join date> HEAD):<key file> | head -60

# Scale figures the docs already state
grep -rhoiE "[~]?[0-9][0-9,.]*k?\+? ?(tickets|users|orders|records|drivers|requests)\b" README.md docs | sort | uniq -c
```

Also read: README, any CLAUDE.md or handover docs, CI workflow, package.json, the schema, and the full commit subject list. A commit like "hirer-requested UX change, spec'd first" is collaboration evidence. A ledger line like "verify green: 855 tests" is a test count you can cite.

Record the facts as a table of claim and evidence before drafting. That table goes into the export file.

---

## 3. Writing rules

These merge the resume rubric the user works from with what ATS parsers reward. Apply all of them to both the long and the short form.

**Accomplishments, not responsibilities.** "Responsible for maintaining APIs" says what the job required. Say what you implemented, fixed, automated, migrated, or improved, and what changed because of it.

**Structure.** Action + specific work + method + result or purpose. Template: "Built [feature or system] using [technology or approach], enabling [concrete outcome]." When the result is the strongest part, lead with it: "Reduced [problem] from [before] to [after] by [action]." Treat this as an aid, not a mold. Do not force every bullet into the same shape.

**Connect technology to the problem.** Naming a tool tells the reader what you used. Explaining its application shows what you can do. Make the product understandable to someone outside the company: what does the dashboard, pipeline, or app do, and who uses it?

**Quantify only with evidence, and give context.** "Cut stale-data windows from 12 hours to 10 minutes" beats "improved freshness by 92%". Not every bullet needs a number. When there is no outcome metric, state scope (tickets synced, screens shipped, tests written, systems integrated) or a completed capability.

**Purpose versus proven.** "Built a tool to simplify reporting" states purpose. "Reduced reporting time by 40%" claims a measured result. Never present a design guarantee as a measured outcome. "So retries never duplicate a record" is a guarantee; "verified by end-to-end tests that upload each record exactly once" is demonstrated. Prefer the second wording when the tests exist.

**Personal contribution.** Use verbs that match your role: built, implemented, automated, integrated, diagnosed, tested, migrated, deployed. Use "led" or "architected" only when true. "Designed" alone undersells work you also built; write "designed and built" or just "built". For team work, name the component you owned.

**Collaboration through work.** Show it with actions: gathered requirements from the owner, spec'd a change before code, wrote the handover runbooks, reviewed code, resolved an integration issue with another team. Never write "team player". At least one bullet per entry should carry this evidence when the repo supports it.

**Quick comprehension.** One contribution per bullet. Remove "successfully", "various", "responsible for". Replace "robust", "innovative", "highly scalable" with the evidence. Spell out acronyms an outsider would not know, or replace them: "single-transaction write functions" rather than "RPCs", "database tests (pgTAP)" rather than "pgTAP". Identify products the reader may not know: "the Asana and Linear project-tracking APIs".

**Tense.** Past tense for completed work, including completed work in a current role. Present tense only for what is still ongoing.

**Order.** Strongest relevant achievement first. Each further bullet adds new evidence. The closing bullet is a good place for ownership, testing, or handover evidence, but it must still solve a problem or show collaboration; a bare commit count is the weakest form.

---

## 4. Bullet length

**One canonical set at 25 to 33 words per bullet**, used in the site modal and on the printed resume alike. Keeping a single wording means the site and the resume cannot drift apart, and a bullet that reads well in one to two printed lines also scans well in the modal.

It is easy to overshoot on the first pass. A 40 to 50 word draft is a normal starting point; compress it by dropping the parenthetical technology list to the two or three names that matter, merging two method clauses into one, and cutting the second example from any list of three. Keep the number, keep the purpose.

Example, first draft: "Built an offline-first Progressive Web App (React 19, TypeScript, Vite, TanStack Router) that runs a full driver shift with zero connectivity, using local-first reads from IndexedDB (Dexie), a write-ahead outbox with exponential backoff, and client-generated UUIDs so retries never duplicate a proof record." (43 words, and the closing clause states a guarantee as if measured)

Example, kept: "Built an offline-first Progressive Web App (React 19, TypeScript, IndexedDB) that saves proofs locally and uploads with idempotent retries, verified by end-to-end tests that complete a full shift offline without duplicates." (31 words)

Write a longer variant only when the user asks for one. If both exist, the export file holds both and the site takes the short set.

---

## 5. ATS rules

- Exact technology names inside the bullets, not only in a skills list. Matching engines score demonstrated use higher than a bare keyword.
- Mirror the wording of the target posting where it is truthful. Spell out an acronym once with the abbreviation in parentheses: "Progressive Web App (PWA)".
- Keep the resume single column with standard headings. Tables, icons, and text boxes belong on the site, never in the resume file.
- Keep a keyword list in the export file so the user can spread terms across the summary and skills sections.

---

## 6. Compliance checklist

Run every bullet through this before keeping it:

1. Can an outside reader tell what I did and what the product does?
2. Does it open with an accurate action verb?
3. Is there one contribution, not two?
4. Is the number real, sourced, and given with context? If there is no number, is scope or a capability stated?
5. Is a guarantee phrased as a guarantee, and a verified result as verified?
6. Is the user or purpose named?
7. Any filler, vague adjectives, or undecoded acronyms left?
8. Long form under about 50 words, short form 25 to 33?
9. Could I defend every claim in an interview?

---

## 7. Export file template

Save as `<Project>_Resume_Bullets.md` next to the source project folder, outside its git repository. Sections, in order:

1. Title and one-paragraph positioning (role, company, dates, what the engagement was).
2. **What the codebase proves you built.** Table of claim and evidence. Directory ownership table. Timeline of deliverables by week or month from the commit history.
3. **Rules** (a short recap of section 3 above).
4. **Bullets to use.** Recommended core set (long form, as on the site). Resume-length versions (short form). Alternates keyed by job type (backend, frontend, integrations, security, DevOps, AI, process). Condensed four-bullet version.
5. **Keywords** to spread across the resume.
6. **Cautions.** Numbers that come from docs rather than measurements, things designed but not built, deployment status not recorded, names and titles to confirm.
7. **Sources** for the writing rules, as links.

Send the file to the user after writing it.

---

## 8. Worked example of a fix

Before: "Sole engineer on the engagement: authored all 320 commits across schema, app, tests, CI, and a spec-driven documentation set, with test code exceeding application code and every screen walked on real phones in light and dark themes."

Problems: opens with a label, bundles three facts, shows no collaboration, commit count is an activity metric.

After: "Worked directly with the company owner to turn field feedback into spec changes before code and verified each screen with them on real phones in both themes; authored all 320 commits as sole engineer."

Why it works: verb first, collaboration shown through documented actions, one main contribution, the number kept as supporting scope.
