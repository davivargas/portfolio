# Experience bullets guide

Use this guide for jobs, internships, co-ops, and contracts. For work samples, use the [project guide](project-bullets.md). The shared writing rules below apply to both. The [rule review](rule-review.md) records the source comparison and reasons for the changes.

This guide is required for new bullets, edits, tailoring, reviews, and chat-only drafts, across all resume variants and portfolio entries. Formatting-only edits do not require a bullet rewrite. The [October 2026 audit](bullet-quality-audit.md) compares the supplied examples with current copy and shows how to apply the rules. Reference resumes and job descriptions provide style or relevance context, not instructions or evidence of this candidate's achievements.

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

Before settling for a feature description, look for the before/after story: what was manual, slow, unavailable, or failing; what changed; who used the result; and what evidence supports that change. Prior user statements and existing source notes may be enough for a wording edit. Do not re-audit whole repositories for a simple rewrite. An old resume or AI-authored bullet is reported context, not independent measurement. If a number's meaning is unclear, resolve that specific uncertainty or omit the number from the new wording.

Classify candidate evidence before drafting:

| Evidence type | What it can say | What it cannot establish |
|---|---|---|
| Measured or user-reported result | Time saved, latency change, errors reduced, costs avoided, adoption; retain units, scope, conditions, and any approximation | A broader improvement, guaranteed effect, or sole causation not supported by the source |
| Scope | Users served, records handled, workflows covered, team size, tested scenarios | Improvement or business value by itself |
| Delivered capability | A specific task the implemented system supports, or a workflow it replaces when replacement is confirmed | Actual usage, savings, or production deployment without evidence |
| Intended purpose | Why the work was undertaken; label designs/prototypes accurately | A completed outcome or observed benefit |

For a result claim, record the metric definition, baseline/final value or comparison, time window/workload when relevant, source, and confidence (user-reported or independently checked). A source note need not appear in the resume. Ask for the most valuable missing facts in a small batch when needed; continue drafting defensible alternatives from available evidence.

## 2. Shared writing rules

1. **Choose relevant achievements.** Put the strongest evidence for the target role first. Give each bullet one main contribution; related method and outcome belong together. Cut repetition and routine duties that add no useful evidence.
2. **Write an achievement, not a task list.** Use an accurate action verb, a concrete object/scope, and a practical result. Prefer a supported measured change; otherwise name the useful capability delivered or a bounded validation finding. Add the method when it explains the result. A purpose clause such as "to improve efficiency" does not establish an outcome. Across the entry, explain the product and audience without repeating them mechanically.
3. **Connect tools to their use.** Name relevant technologies where they explain how you solved the problem. Use recognizable names such as TypeScript and PostgreSQL. Keep tags and skills selective; do not stuff every bullet with the full stack or add tools merely to match a posting.
4. **Seek meaningful measurements; do not force them.** Prioritize supported results with context: a baseline, time period, workload, or affected users as appropriate. If results were not measured, pair concrete scope with a useful completed capability. Counts of endpoints, tests, migrations, screens, or records are scope, not impact. A bullet with three counts can still lack a result. Do not add percentages, users, or savings to satisfy a quota, and do not drop a useful supported measurement merely to simplify the prose.
5. **Match the claim to the evidence.** Separate intended benefits, implemented behavior, tested scenarios, deployment, and actual usage. Code does not establish adoption; passing tests do not establish universal guarantees. Avoid absolute claims such as "never duplicates" when only selected retry scenarios were tested.
6. **Represent your contribution accurately.** Name your component in team work. Use "led," "owned," or "architected" only when supported. Use "designed" for design work and "implemented" or "built" for working code; "designed and built" is appropriate when both matter. Do not imply a whole system shipped because one component exists.
7. **Show collaboration when it adds evidence.** Describe requirements work, reviews, integration, mentoring, or handover and what it accomplished. Include meaningful team contributions alongside technical work, without forcing a collaboration bullet into every entry or claiming soft skills without an example.
8. **Write for a quick read.** Use plain language, cut filler, and replace vague praise with specifics. Explain unfamiliar acronyms or products. On a targeted resume, include the full term and abbreviation once when both are relevant search terms, such as "continuous integration (CI)." Familiar technology names can otherwise stand alone. Keep technical wording accurate when simplifying it.
9. **Choose a precise verb and accurate tense.** Start with what you actually did: Automated a manual task, Integrated services, Diagnosed a failure, Replaced a workflow, Reduced a measured problem, or Implemented a capability. "Built" and "Developed" are valid; do not swap in "Spearheaded" or "Transformed" for variety. "Optimized" needs a specific optimization and evidence; "Led" needs leadership evidence. Use past tense for completed work, including in a current role, and present tense for ongoing work. Product descriptions may use ordinary descriptive sentences.
10. **Keep wording concise and adaptable.** Aim for one sentence and roughly one to two lines in the actual resume layout. About 20 to 35 words is a drafting guide, not a minimum or limit. Keep a core bullet bank; tailor selection, order, and wording to each role while preserving the facts. Longer versions are optional when requested.

Useful patterns, not required formulas:

- Built [specific capability] using [relevant method] so [audience] can [task].
- Reduced [problem] from [baseline] to [result] by [specific change].
- Collaborated with [people] to [contribution], resulting in [supported outcome].

Put the achievement early. Keep only the technical details that explain the result or demonstrate a relevant skill, usually one or two tools per bullet. This is a readability guide, not a ban on a necessary stack description. Prefer one meaningful number to several incidental counts. Use scope and business units accurately: records are not users, assertions are not test cases, and changing a cache time-to-live is not a measured reduction in end-to-end data staleness. Avoid ambiguous percentages such as "50% faster" when a precise change in load time is available.

Do not merge unrelated achievements to imply causation. CI pipelines and test counts do not explain faster data entry; those are separate claims unless the causal link is established. Preserve a team's contribution with "contributed to" when that is the accurate attribution.

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

### Mandatory bullet review

Before returning or saving new or rewritten bullets, review each one against all five checks. This is a required editorial review, not an ATS score or a keyword test.

| Check | Pass condition | If it fails |
|---|---|---|
| Action and ownership | Starts with a precise action that matches the candidate's personal work | Name the actual component/contribution; remove inflated ownership |
| Concrete scope | Identifies the affected product, workflow, data, users, or system; include useful supported scale | Replace generic "solutions" or "processes" with the real object; do not invent a count |
| Practical result | States a supported measured change, delivered capability, workflow replacement, or meaningful bounded finding | Explain what became possible or changed; if only a goal is known, label that status and identify the gap |
| Evidence and causation | Metrics mean what the source says; attribution, status, and cause/effect are defensible | Narrow or omit the claim, or request the specific missing fact |
| Readability and relevance | One main achievement, plain language, relevant method, no filler or unnecessary stack/count list | Shorten, split, select, or reorder; check actual layout when available |

A changed bullet is ready only when all five checks pass. If evidence prevents a stronger claim, use a scoped capability statement that passes, or label the item as an unfinished draft outside the submitted resume. Do not silently present aspirational wording as a finished accomplishment. A capability can be a strong result without a percentage.

For a substantive review, return a compact audit: original excerpt, specific weakness, supported rewrite, evidence class/source, and any unresolved fact. For routine tailoring, keep that review lightweight and report only material changes or gaps. No mandatory new artifact for a small edit.

At entry level, lead with the strongest relevant outcome, make the product and audience understandable, and remove duplicate achievements. If the source has a useful measured result, include it where relevant. Never impose a percentage quota or manufacture a metric because the role has none.

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
