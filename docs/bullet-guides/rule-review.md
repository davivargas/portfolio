# Bullet guide rule review

Reviewed September 21, 2026. This is a record of decisions, not an additional checklist. The current rules live in the [experience guide](experience-bullets.md) and [project guide](project-bullets.md), with a summary in [CLAUDE.md](../../CLAUDE.md).

## Source comparison

- [Stack Overflow: How to write an effective developer resume](https://stackoverflow.blog/2020/11/25/how-to-write-an-effective-developer-resume-advice-from-a-hiring-manager/) supports relevant achievements first, specific results, active language, technologies explained through work, readable presentation, and tailoring to the opening.
- [UT Austin: Strong Bullets for Technical Resumes](https://careerservices.cns.utexas.edu/resources/resumes/strong-bullets-technical-resumes) emphasizes what was built, why it matters, and how it was built, including collaboration. It suggests impact and scope measures and addresses confidential work.
- [Finch: requested software engineer bullet examples](https://www.applyfinch.com/blog/resume-bullet-examples-software-engineer) returned a generic Finch landing page in the available web reader. Targeted searches did not recover the article. Its contents could not be evaluated; no rules are attributed to it.

The readable sources support the guides' main direction. Neither establishes the original exact word ranges, tag quotas, mandatory duplicate exports, or a universal ATS scoring advantage for keywords inside bullets. Stack Overflow's categorical rejection of automatic ATS rejection and UT Austin's description of ranking/sorting differ. The revised guides make no universal claim about screening systems.

The decisions below combine those principles with editorial judgment and the repository's implementation. Word/count suggestions, evidence procedures, tense, punctuation, exports, and site fields are local conventions, not requirements asserted by the articles.

## Shared and experience rules

Repeated checklist items are covered by the rule they check.

| Original rule or requirement | Decision | Reason and replacement |
|---|---|---|
| Use the matching experience/project guide | Keep | Preserve the engagement/work-sample distinction; cross-link shared rules. |
| Always deliver entry, export, and cautions | Clarify | Applies when adding an entry; review-only requests stay within scope. |
| Run every listed repository command before drafting | Replace | Inspect only relevant evidence; accept measurements and user records outside Git. |
| Every number must trace to those commands | Replace | Trace every substantive claim to a suitable source, with its limits. |
| Infer ownership from author/directory counts | Correct | History assists attribution but aliases, squash commits, and shared work limit inference. |
| Count test files or declarations; cite a log's total as proof | Correct | Separate files, cases, assertions, and coverage; record run evidence and revision. |
| Read all docs and commit subjects; always export ownership and timeline tables | Simplify | Read relevant materials and add detailed tables only when they resolve a claim. |
| Write accomplishments rather than duties | Keep | Describe a specific contribution and its value. |
| Action + work + method + result/purpose | Keep flexible | Useful drafting aid; not every bullet needs every element. |
| Explain product, users, and technologies | Keep | Supply context across the entry and connect tools to actual work. |
| Quantify with evidence and context | Keep and clarify | Numbers are optional; distinguish scope from impact and reports from measurements. |
| Phrase a guarantee as a guarantee | Replace | Match wording to evidence; passing scenarios cannot establish unconditional behavior. |
| Accurate personal verbs; designed versus built | Keep and clarify | Credit the actual component and distinguish implementation from release or adoption. |
| At least one collaboration bullet when supported | Relax | Keep meaningful collaboration without displacing stronger evidence to meet a quota. |
| One contribution, no filler or unsupported adjectives | Keep | A related method and result still form one achievement. |
| Expand all acronyms; substitute simpler technical terms | Refine | Explain unfamiliar terms, include relevant full-term/acronym variants for targeted resumes, and avoid inaccurate substitutions. |
| Past tense for completed work, present for ongoing | Keep | Allow descriptive prose in card descriptions. |
| Strongest bullet first; ownership/testing/handover last | Refine | Relevance sets the whole order; no topic has a required final position. |
| Exactly 25 to 33 words; identical site/resume wording | Replace | Use flexible concision and a core bank with truthful tailoring. Check actual line wrapping. |
| Both long and short forms, despite requiring only one set | Resolve | Export one core set; create variants only when useful or requested. |
| Mandatory five to six bullets and six to nine tags | Relax | Select distinct achievements and relevant tools; counts are starting points, not quotas. |
| ATS scores demonstrated keywords more highly | Remove | Unsupported universal claim; use natural, truthful terminology for readers. |
| Single-column resume; never tables/icons/text boxes | Refine | Use simple one-column submission files and check extraction; portfolio presentation has separate conventions. |
| Keyword list to spread across resume sections | Refine | Keep supported technologies for tailoring without forced repetition. |
| Insert every new entry at the top | Correct | Insert by chronology unless the user specifies otherwise. |
| Approximately 30-word summary | Keep as guidance | Product context and rendered readability matter more than a count. |
| No em dashes | Keep | Explicit local copy style, not a source-backed hiring rule. |
| Employer/title from paperwork | Keep and extend | Employment dates also need records rather than inferred commit dates. |
| Prescribed export location and delivery | Keep with fallback | Preserve naming and structure; report an allowed alternative when needed. |
| Fixed alternates for many job types and condensed version | Simplify | Avoid automatic duplicate sets; add useful/requested alternatives only. |
| Always run application checks | Scope | Run for site changes; review links, consistency, and diffs for documentation edits. |
| Worked fix still ends with a commit total | Replace | Use an illustrative contribution/collaboration example without unnecessary activity counts. |
| Confidentiality not addressed in the guides | Add | Account for known restrictions when selecting public facts. |

## Project-specific rules

| Original rule or requirement | Decision | Reason and replacement |
|---|---|---|
| Purpose, personal contribution, technical substance, supported outcomes | Keep | Core criteria remain; collaboration and validation are also useful achievements. |
| First bullet always describes product; next two must be technical | Relax | Site description supplies context; resume context can move into a bullet. Order by relevance. |
| Two or three bullets but export always requires three plus alternates | Resolve | Counts are flexible and the export reflects the actual selected set. |
| Project length 20 to 33 words versus experience 25 to 33 | Unify | Use shared flexible guidance for both. |
| Every scope label must be in bullet one | Relax | Place material context visibly in the description, subtitle, or relevant bullet. |
| Deployed, feature-complete, real-device validated wording | Qualify | Each claim needs its own evidence; a URL does not establish real users. |
| Private repository must be announced in public copy | Refine | Record access limits in the bank; mention publicly when useful, without restricted links. |
| Real links; no placeholders | Keep | Omit unavailable fields and report missing or unverified links. |
| Data example omits details despite describing a bullet dialog | Correct | Include the existing optional details field. |
| Four to six exact technology tags | Relax | Prefer recognizable names and relevance without a fixed count. |
| Square SVG logo only | Correct | Current component supports square/wide marks and raster assets; preserve inversion guidance. |
| YouTube embed/fallback and parser tests | Keep and simplify | Document current behavior and run relevant tests when changing it. |
| Project example asserts exactly-once uploads and old test totals | Replace | Use clearly illustrative, bounded capability/test wording with no unverified project facts. |
| Checklist and export lack writing-source notes | Align | Reuse the shared review and identify sources actually consulted. |

The examples are now explicitly illustrative. The guides no longer treat their historical Sprinter details as current evidence about that project.

## ATS follow-up

Reviewed September 21, 2026 against the additional references:

- [UIC ATS handout](https://careerservices.uic.edu/wp-content/uploads/sites/26/2017/08/Ensure-Your-Resume-Is-Read-ATS.pdf): supports simple layout, body contact details, contextual terminology, proofreading, and full terms with abbreviations. Its legacy .doc-only recommendation and blanket restrictions on accents/templates are not adopted as universal rules.
- [Indeed ATS guidance](https://www.indeed.com/career-advice/resumes-cover-letters/automated-screening-resume), updated July 1, 2026: supports employer-directed file choice, clear fields, plain-text checking, and truthful tailoring. Its suggested keyword repetition count is not a requirement.
- [Requested Columbia ATS page](https://www.careereducation.columbia.edu/resources/optimizing-your-resume-applicant-tracking-systems): direct access returned HTTP 403. The search-indexed text of Columbia's [resume checklist](https://www.careereducation.columbia.edu/sites/default/files/DYNS%20Single%20Page%20PDF%20Form.pdf) was used as a limited fallback for consistent dates, clear sections, contextual skills, tailoring, and proofreading. This does not verify the requested page.
- [Greenhouse supported file formats](https://support.greenhouse.io/hc/en-us/articles/360052218132-Supported-formats-for-resumes-cover-letters-and-other-candidate-uploads) and [parsing limitations](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse): vendor documentation confirms DOCX and PDF support and identifies layout/image-related parsing problems. Accepted uploads and successful extraction are separate checks.

| Gap or disputed recommendation | Decision |
|---|---|
| Broad readability guidance omitted submission details | Add six shared checks for resume files; project guide and CLAUDE.md reference them. |
| Familiar acronyms could omit a relevant search variant | Include both forms once when useful for the target role, without mechanically expanding every term. |
| File advice conflicts across sources | Employer requirements govern; use accepted DOCX or text-based PDF and verify the actual export. |
| Contextual keywords versus claims about scoring | Keep contextual evidence and natural repetition; reject fixed densities, hidden text, and guaranteed scores. |
| Exact target title could alter employment history | Keep recorded titles; identify the target role separately if included. |
| Older advice bans templates, accents, and name punctuation | Judge structure and extracted text; preserve accurate names and technical spelling. |
| Document looks correct but fields may parse incorrectly | Check plain text and, when applying, review autofill. Bullet-only work cannot establish file compatibility. |
| Recruiting advice extends beyond resume preparation | Referrals, timing, and cover letters remain outside these bullet guides. |

ATS behavior varies by system and employer configuration. These additions improve practical compatibility without claiming a universal pass/fail standard.
