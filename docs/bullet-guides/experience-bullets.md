# Experience bullets guide

Use this guide for jobs, internships, co-ops, and contracts. For work samples, use the [project guide](project-bullets.md). The shared writing rules below apply to both. The [rule review](rule-review.md) records the source comparison and reasons for the changes.

When adding an entry, deliver the site entry, a Markdown bullet bank, and material evidence gaps. When asked only to review or draft, keep the output within that scope.

## 1. Gather the evidence you need

Start with the user's role, dates, contribution, and target job if supplied. Use their records for employment details; repository activity alone does not establish a title, employer, or employment period.

Read the README and relevant implementation, design documents, tests, and CI configuration. Inspect history when it helps establish authorship or a before-and-after claim. Use available user records, analytics, benchmark output, or feedback for outcomes the code cannot establish. Run only the checks needed for the claims you plan to make.

Useful commands from the source repository root; replace placeholders and use paths that exist:

```sh
rg --files -g '!node_modules' -g '!vendor' -g '!dist'
git shortlog -sne HEAD
git log --no-merges --format='%h %ad %an %s' --date=short
git log --author='<name>' --oneline -- '<relevant-path>'
git show '<commit>:<path>'
git diff '<before-commit>' '<after-commit>' -- '<relevant-path>'
rg -n -i 'benchmark|deployed|prototype|users|coverage' README.md docs
```

Record a compact evidence table before drafting:

| Claim | Source and date/revision | What it supports or leaves uncertain |
|---|---|---|
| Implemented a feature | Relevant code, changes, and contributor context | Capability and personal contribution; deployment needs separate evidence |
| Improved a metric | Measurement or user-provided report, with baseline and conditions | Measured result, or attributed report if not independently checked |
| Passed tests | Test-run output and revision | The scenarios run; test files alone do not establish passing results |

Commit counts are investigation clues, not proof of sole ownership or impact. Authors can have aliases, commits can be squashed, and work can be shared. Read relevant changes and use contributor context. Distinguish test files, cases, assertions, and coverage; text-search counts are estimates, not test-run totals. A documented number remains reported evidence until verified.

If evidence is missing, narrow or omit the claim and note the gap. Ask for missing facts when needed; do not invent them. Keep confidential identifiers and restricted figures out of public copy, and confirm disclosure when a known restriction applies.

## 2. Shared writing rules

1. **Choose relevant achievements.** Put the strongest evidence for the target role first. Give each bullet one main contribution; related method and outcome belong together. Cut repetition and routine duties that add no useful evidence.
2. **Explain the work and its value.** Use an accurate action verb, specific work, and a useful result or purpose. Add the method when it explains the achievement. Across the entry, make clear what the system does and whom it serves. Do not force every detail or the same sentence pattern into every bullet.
3. **Connect tools to their use.** Name relevant technologies where they explain how you solved the problem. Use recognizable names such as TypeScript and PostgreSQL. Keep tags and skills selective; do not stuff every bullet with the full stack or add tools merely to match a posting.
4. **Use meaningful evidence.** Prefer a supported result with context: a baseline, time period, workload, or affected users as appropriate. When no result was measured, describe useful scope or a completed capability. Numbers are optional. Commit, line, endpoint, and test counts describe activity or scope, not impact by themselves.
5. **Match the claim to the evidence.** Separate intended benefits, implemented behavior, tested scenarios, deployment, and actual usage. Code does not establish adoption; passing tests do not establish universal guarantees. Avoid absolute claims such as "never duplicates" when only selected retry scenarios were tested.
6. **Represent your contribution accurately.** Name your component in team work. Use "led," "owned," or "architected" only when supported. Use "designed" for design work and "implemented" or "built" for working code; "designed and built" is appropriate when both matter. Do not imply a whole system shipped because one component exists.
7. **Show collaboration when it adds evidence.** Describe requirements work, reviews, integration, mentoring, or handover and what it accomplished. Include meaningful team contributions alongside technical work, without forcing a collaboration bullet into every entry or claiming soft skills without an example.
8. **Write for a quick read.** Use plain language, cut filler, and replace vague praise with specifics. Explain unfamiliar acronyms or products. On a targeted resume, include the full term and abbreviation once when both are relevant search terms, such as "continuous integration (CI)." Familiar technology names can otherwise stand alone. Keep technical wording accurate when simplifying it.
9. **Use accurate tense.** Start bullets with an action verb. Use past tense for completed work, including work completed in a current role; use present tense for ongoing work. Product descriptions may use ordinary descriptive sentences.
10. **Keep wording concise and adaptable.** Aim for one sentence and roughly one to two lines in the actual resume layout. About 20 to 35 words is a drafting guide, not a minimum or limit. Keep a core bullet bank; tailor selection, order, and wording to each role while preserving the facts. Longer versions are optional when requested.

Useful patterns, not required formulas:

- Built [specific capability] using [relevant method] so [audience] can [task].
- Reduced [problem] from [baseline] to [result] by [specific change].
- Collaborated with [people] to [contribution], resulting in [supported outcome].

## 3. Site entry and resume presentation

```ts
{
  period: "Aug 2026\nto Present", // Use verified dates; \n creates a line break.
  role: "Software Developer (Contract)",
  company: "Example Company",
  summary: "A short description of the system, its users, and the main contribution or supported outcome.",
  details: [ /* Focused achievements, strongest relevant evidence first. */ ],
  tags: [ /* Relevant technologies actually used. */ ],
}
```

- Edit `src/components/sections/Experience.tsx`. Keep entries newest first; add at the top only when the new entry belongs there. Follow explicit ordering instructions.
- Keep the card summary to one or two short sentences, around 30 words as a starting point. Include enough product context that the detail bullets do not have to repeat it.
- Start with three to five detail bullets when the evidence warrants them. Use fewer for a smaller or less relevant role and more only when each adds useful evidence. Do not pad to a quota.
- Choose a short, readable tag list without a fixed count. Prefer job-relevant tools the user actually used; versions matter only when relevant.
- Keep site copy free of em dashes. This is a portfolio style preference, not a resume screening rule.
- For resume files, follow the shared ATS guidance below. Portfolio cards, icons, and modals follow the site's own presentation conventions.

### ATS preparation for resume files

Apply these checks when producing a resume document, not just a Markdown bullet bank:

1. **Follow submission instructions.** Use the employer's requested file type and size limit. Otherwise, DOCX is a reasonable default when accepted; a text-based PDF is also an option when supported. Never submit a scan or image-only resume.
2. **Keep the structure simple.** Use one column, a readable standard font, ordinary bullets, and conventional headings such as Experience, Projects, Skills, and Education. Avoid tables, text boxes, graphics, and decorative letter spacing in the submission file.
3. **Make key fields readable.** Put contact details in the document body, not headers or footers. Clearly separate employer, title, and dates; use consistent month/year dates. Include essential project information as text rather than relying on logos, links, or demos.
4. **Match relevant terminology honestly.** Check the posting's skills and qualifications against the evidence. Use supported terms in skills and achievement context, including useful acronym/full-term variants. Repeat naturally, without quotas or hidden keywords. Preserve historical titles; a target role may appear in a clearly identified headline or summary.
5. **Proofread and check extraction.** Copy text from the final exported file into plain text. Check contact details, headings, dates, bullet order, technology names, and characters such as those in C++ or C#. Fix missing, garbled, or reordered text. Keep facts consistent with the portfolio.
6. **Check the application fields.** When applying, review and correct autofilled information and complete required fields accurately. A readable text export is a useful check, not proof that every ATS will parse or rank it correctly.

These are compatibility practices, not a guaranteed score or interview. Sources and decisions: [ATS follow-up review](rule-review.md#ats-follow-up).

## 4. Review and verify

Before keeping an entry, check:

1. Can an outside reader understand the product, your contribution, and why it matters?
2. Does each bullet add a distinct, relevant achievement with an accurate verb and tense?
3. Are tools connected to real work and unfamiliar terms understandable?
4. Can every claim be traced to evidence, with metrics and personal ownership stated accurately?
5. Are intended, built, tested, deployed, and used states distinguished without unsupported guarantees?
6. Is the wording concise in the actual layout, free of filler, and defensible in an interview?
7. Are names, dates, links, and public disclosure appropriate for the available records?
8. If producing a resume file, did it pass the ATS preparation checks above? If only drafting bullets, leave document compatibility unverified.

For site entry changes, run `npx eslint src/components/sections/Experience.tsx`, `npx tsc --noEmit -p tsconfig.app.json`, and `npx vite build`. Check card and modal readability at narrow and wide widths when preview is available; report any unverified layout checks. Documentation-only edits need a link, consistency, and diff review, not an application build.

## 5. Export the bullet bank

Save `<Project>_Resume_Bullets.md` next to the source project folder, outside its git repository. If that location is unavailable, use an allowed location and report the path. Include:

1. **Context:** role, company, dates, product, and target role if supplied.
2. **Evidence:** the claim/source table and material uncertainties. Add ownership or timeline detail only when useful.
3. **Site entry:** the exact summary, bullets, and tags inserted, when applicable.
4. **Resume bullets:** the core set, reusing site wording where it fits. Add role-specific alternatives or a longer set only when requested or useful; do not manufacture duplicate versions.
5. **Relevant technologies:** a short list supported by the work.
6. **Open questions:** unverified measurements, attribution, release status, or missing facts that affect the copy.
7. **Writing sources:** links to the sources actually used, noting unavailable references.

Return a clickable file link and report verification results and material evidence gaps.

## 6. Worked fixes

These are illustrative wording examples, not verified claims about the user's projects. Use them only when matching evidence exists.

Before: "Sole engineer who authored 320 commits across the app, tests, CI, and documentation."

After: "Worked with the company owner to turn driver feedback into revised delivery screens, then reviewed the updated workflows together on phones before the pilot."

The revision shows a concrete contribution and collaboration. The commit count is unnecessary, and sole ownership would need separate evidence.

Before: "Built offline synchronization so every record uploads exactly once."

After: "Implemented a retry queue for offline delivery records and verified that repeated uploads created no duplicate records in the tested reconnect scenarios."

The revision limits the result to what the tests establish.
