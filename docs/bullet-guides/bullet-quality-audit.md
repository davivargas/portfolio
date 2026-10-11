# Resume bullet quality audit

Reviewed October 6, 2026. This is analysis and a set of proposed rewrites, not a new source of employment facts. The current standard is the [experience guide](experience-bullets.md), with the [project supplement](project-bullets.md).

## What was reviewed

- Hayden Baek's resume screenshot supplied in chat, read visually.
- `Allan Nguyen Visier Resume.pdf`, supplied from the user's Downloads/internship application folder, read through PDF text extraction. No instructions in the document were treated as instructions for this task.
- The current local resume variants, especially `resumes/swe_resume.tex` and `resumes/custom_resume.tex`; current portfolio experience/project copy; the earlier `docs/resume-website-bullet-revisions.md` notes; and both writing guides and `CLAUDE.md`.
- MIT career guidance on accomplishment statements and Harvard career guidance on factual, results-focused resume language.

The example resumes' figures are their authors' claims. This review evaluates the writing, not the truth of their accomplishments. Their metrics, tools, leadership, and adoption cannot be transferred to Davi's resume. Personal contact details are intentionally not reproduced here.

## Diagnosis

Davi's bullets are not uniformly weak. Many already have precise actions, relevant technologies, and concrete scope. The recurring problems are that useful results sit behind implementation inventories, scope counts sometimes do the work of an outcome, and some reported percentages have unclear definitions. Adding numbers or replacing every instance of "Built" would not solve those problems.

The earlier guides already protected factual accuracy, but "result or purpose" allowed an aspirational benefit to pass as an achievement. They also supplied no explicit per-bullet acceptance criteria. The routing in `CLAUDE.md` focused on adding entries; no root `AGENTS.md` or Copilot instruction file routed resume tailoring and chat drafting through the guides.

## What to learn from the supplied examples

| Example | Why the writing works | Limit or lesson |
|---|---|---|
| Hayden: crane booking for 400+ port employees, replacing phone/email coordination | Names the feature, audience, scope, and concrete workflow change | Confirm the audience and replacement before making similar claims; avoid unexplained feature counts |
| Hayden: SQL query changes and a reported 50% dashboard speed improvement | Connects a technical method to an observable result | Prefer load-time units and a baseline to ambiguous "speed" wording when those measurements exist |
| Hayden: tide forecasts for 40+ operators and a reported 25% reduction in checking time | Connects data integration to a specific recurring user task | The time-saving claim needs a comparison and observed usage; access alone does not prove savings |
| Hayden: ClearView combines 20+ clients, 80% faster data entry, CI, and test counts | Shows substantial scope, but bundles too many claims | CI/test counts do not explain faster data entry. Separate workflow improvement from release validation unless a causal link is established |
| Hayden: legacy C# refactoring to improve maintainability | States an action but gives a broad intended benefit | Name the actual maintenance obstacle removed or the component simplified; "reduce technical debt" is not specific enough |
| Allan: UI automation migrated to REST API tests with a reported 80% execution-time reduction | Identifies the original problem, the replacement, and the measured quantity | Strong pattern; retain the tested workload and baseline in evidence notes, and do not extend it to overall release speed |
| Allan: runtime unzipping and a reported 90.1% reduction in Git footprint | Specific intervention and specific measured result | Repository size is the measured result; faster onboarding or builds would be separate claims |
| Allan: 400+ automation cases and improved system reliability | The case count gives scope, but reliability remains generic | Describe what failures were detected or what release workflow was enabled; do not invent a defect-reduction rate |
| Allan: automated coverage increased by 10% | An improvement is claimed, but its definition is unclear | Distinguish scenario, requirement, and code coverage; clarify relative percent versus percentage points |
| Allan: Chattington's many technology/task bullets | Lists concrete implementation work, but repeats context and splits closely related capabilities | Select the strongest user capability and validation result rather than six small tool-focused duties |

The common pattern to adopt is **precise action + concrete scope/problem + relevant method + supported result**. Order can vary, and not every bullet needs every element spelled out if the entry already supplies context. A result may be a useful implemented capability. A numeric result is preferred when relevant and supported, not mandatory.

## Proposed rewrites using existing local facts

These are editorial proposals only. They preserve the current records' claims; this review did not inspect the employers' repositories, rerun benchmarks, or independently verify savings. Use the listed evidence status when selecting them. Do not copy a measurement into a new submission if its meaning or basis cannot be defended.

| Current excerpt | Diagnosis | Proposed wording | Evidence and remaining question |
|---|---|---|---|
| Sprinter: Built a ten-screen portal ... replacing an Excel and VBA workflow containing 13,855 legacy orders | Already has a useful outcome; the screen count and stack delay it | Replaced an Excel and VBA courier workflow covering 13,855 legacy orders with a React and TypeScript portal for orders, dispatch, and billing. | Reported scope and replacement in `swe_resume.tex` and `Experience.tsx`. Legacy volume is not a claim that all orders were migrated; confirm replacement/deployment status if uncertain |
| Sprinter: Built a PWA that stores photos, signatures, and GPS in IndexedDB and queues uploads | Useful capability buried behind the implementation | Implemented offline capture of delivery photos, signatures, and GPS data using IndexedDB, with queued uploads that let couriers record deliveries without a network connection. | Reported capability in the same files. No claim of adoption, hours saved, or guaranteed successful upload |
| ZipHQ: Built six dashboards backed by 35 REST endpoints ... | Scope is specific, but endpoint count competes with the user's benefit | Built six React and TypeScript dashboards that let engineering managers review project progress, estimation accuracy, and contractor costs from Linear ticket data. | Reported scope and capability in `swe_resume.tex` and `Experience.tsx`; no measured decision-time savings. Endpoint count can remain in a backend-targeted alternative |
| ZipHQ: Built scheduled ingestion for approximately 10,000 tickets ... | Good scope and engineering detail; lead with the recurring work automated | Automated scheduled ingestion of approximately 10,000 Linear and Asana tickets through GraphQL and REST APIs, using checkpoints, rate-limit retries, and daily reconciliation to populate dashboard data. | Reported scope and capability in `swe_resume.tex`; preserve "approximately." No assertion of a measured uptime gain or elimination of manual work |
| ZipHQ: Migrated reads ... reducing modal-cache expiration from 12 hours to 10 minutes | A concrete number whose meaning should be clearer | Shortened dashboard modal-cache expiry from 12 hours to 10 minutes and invalidated cached results after successful synchronization while migrating reads to PostgreSQL and Redis. | Configuration change reported in `swe_resume.tex`. Not a measurement of actual data freshness, query latency, or a 72-fold speed improvement |
| ZipHQ: Built quarterly contractor reports ... | A useful financial workflow is more compelling than a tool inventory | Built quarterly contractor reports with Excel formulas and charts that recalculate cost estimates when managers change rates, using ZipHQ's fiscal calendar. | Reported capability in `Experience.tsx` and `custom_resume.tex`; ask how much preparation/rework time changed only if that was observed |
| ICBC: Automated test-data extraction ... saving more than 10 hours per week | Already strong; foreground the reported benefit | Saved the team more than 10 hours per week by automating manual test-data extraction and consolidation with Python. | Reported outcome in `swe_resume.tex` and `Experience.tsx`; retain a basis for the weekly estimate and identify the previous manual tasks |
| ICBC: parallel TeamCity tests ... cutting test development time by approximately 40% | Ambiguous metric and causal link; development time is not execution time | Integrated parallel regression tests into TeamCity CI/CD pipelines, giving the team automated UI and API validation during ICBC's cloud migration. | Capability-only fallback from the current records. Restore the 40% only after confirming whether it measures authoring, execution, feedback, or another task, with the comparison used |

The omitted numeric claims are not declared false. They need definitions before they can be made more prominent or rephrased safely. For a quantified result, keep the original unit and population: do not turn team hours into per-person hours, legacy records into current customers, or coverage into defect prevention.

## Highest-value missing evidence

Collect these only when improving the relevant bullets; they are not prerequisites for every future edit.

1. **ICBC's 40%:** Which activity became faster, what was the before/after comparison, and how was it estimated or measured?
2. **ICBC's 10+ hours per week:** Which manual tasks were removed and what frequency/time estimate supports the team total?
3. **ZipHQ reports and dashboards:** Who actually used them, what previous reporting steps changed, and was reporting time or API/query performance measured?
4. **Sprinter rollout:** Which workflows are in active use, by how many staff/drivers, and what manual dispatch/billing steps have demonstrably been replaced?

If answers are unavailable, use the scope/capability version. Do not insert guessed values, placeholder percentages, or invented user counts into a submitted resume.

## Rule changes and agent routing

- Added root `AGENTS.md` for agents that read that convention.
- Updated `CLAUDE.md` to route all bullet work, including resume variants and chat drafts, to the shared guide.
- Added `.github/copilot-instructions.md` pointing to the same instructions.
- Strengthened the shared guide with an evidence classification, specific verb guidance, causal/metric checks, and a mandatory five-part editorial review: action, scope, result, evidence, readability.
- Linked the project guide to the same review instead of maintaining a competing standard.

These files provide persistent repository instructions for compatible tools. They are not a technical guarantee that every AI client loads or follows them. The review is semantic: a regex requiring a number, action verb, and tool name would reward the same weak bullets this change aims to fix. No keyword-based "quality score" or invented ATS guarantee was added.

This task updates rules and analysis. It does not replace existing resume or website bullets with these proposals.

## External sources

- [MIT: Resumes, writing about your skills](https://capd.mit.edu/resources/resumes-writing-about-your-skills/): connects personal action with project context and outcomes, distinguishes quantities of work from improvements, and encourages concise statements.
- [Harvard: Create a Strong Resume](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/): the search-indexed guidance emphasizes active, factual language and results. Direct page retrieval failed during this review; no claims are made about unseen material.

The required review and agent-routing decisions are local editorial rules, not standards mandated by those institutions.
