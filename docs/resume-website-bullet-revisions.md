# Resume and website bullet revisions

Proposed copy for the six populated files in `resumes/` and all Experience/Projects entries, including entries behind the website's expansion controls. Card summaries are included where they need matching context. Commented resume alternatives are grouped at the end by the files that contain them. Figures retained from existing career records are identified in the explanations. Sprinter copy assumes the completed project, as requested.

## resumes/swe_resume.tex

### Sprinter Delivery

1. Built a ten-screen React and TypeScript portal for courier orders, dispatch, and billing, replacing an Excel and VBA workflow containing 13,855 legacy orders.

   **Why:** Keeps the completed portal and legacy-replacement outcome, while connecting the stack and scope to concrete office workflows.

2. Built a React and TypeScript Progressive Web App (PWA) that stores delivery photos, signatures, and GPS data in IndexedDB and queues uploads while couriers work offline.

   **Why:** Connects the stack to a driver capability without implying that a simulated offline test proves every full-shift scenario.

3. Integrated QuickBooks invoicing and payment-status webhooks with the courier platform, alongside Pumble dispatch notifications, reducing manual transfer of accounting and delivery information.

   **Why:** Restores the completed integrations and connects them to office workflows without inventing a time-saving metric.

### Zip

1. Built six React and TypeScript dashboards backed by 35 REST endpoints for Linear ticket data, giving engineering managers views of project progress, review delays, estimation accuracy, and contractor costs.

   **Why:** Restores verified API scope: 35 distinct HTTP-method/path pairs in `server/routes/agenticAiTicketRoutes.ts` at revision `ea8f455`, serving the six Linear dashboards.

2. Built scheduled ingestion for approximately 10,000 Linear and Asana tickets using GraphQL and REST APIs, with cursor checkpoints, rate-limit retries, and daily reconciliation checks.

   **Why:** Retains documented ticket scale and recovery mechanisms without guaranteeing that audits catch every missed update.

3. Migrated dashboard reads to PostgreSQL and Redis, reducing modal-cache expiration from 12 hours to 10 minutes and invalidating cached results after successful synchronization.

   **Why:** Preserves the supported before-and-after figure but identifies it as cache configuration, not measured end-to-end freshness.

4. Added 11 health checks for drift, stalled synchronization, and API availability, with reconciliation triggers and Claude-generated explanations of likely causes for dashboard users.

   **Why:** Retains documented monitoring scope; describes AI output as suggested causes rather than verified root-cause analysis.

### ICBC

The first proposed bullet combines the two overlapping testing bullets.

1. Developed and maintained more than 70 JavaScript and TestCafe regression tests for UI workflows and backend APIs, supporting ICBC's insurance-platform cloud migration.

   **Why:** Combines overlapping testing claims and retains the resume-reported test count; no ICBC repository was available for independent verification.

2. Integrated parallel automated tests into TeamCity continuous integration and delivery (CI/CD) pipelines, reducing reliance on local runs and cutting test development time by approximately 40%.

   **Why:** Expands CI/CD and preserves the resume-reported development-time metric; it is not a claim about execution speed or an independently verified measurement.

3. Automated test-data extraction and consolidation across multiple sources with Python, replacing manual review steps and saving the team more than 10 hours per week.

   **Why:** Keeps the task, method, and resume-reported time saving; no underlying measurement records were available.

### Fall Line

1. Built an offline Android snowboarding tracker with Flutter and Kotlin, backed by FastAPI and PostgreSQL, to record GPS sessions and identify runs, lifts, and stops.

   **Why:** Makes the project purpose clear while retaining the core stack; avoids implying a production launch.

2. Configured GitHub Actions to run pytest and Flutter tests with linting and type checks, applying Alembic migrations before backend tests to check database compatibility.

   **Why:** Explains the CI behavior; removes test totals without inspected run output rather than presenting static counts as verified results.

## resumes/front-end_resume.tex

### Sprinter Delivery

1. Built a React and TypeScript Progressive Web App (PWA) that stores delivery photos, signatures, and GPS data in IndexedDB and queues uploads while couriers work offline.

   **Why:** Connects the stack to a driver capability without implying that a simulated offline test proves every full-shift scenario.

2. Replaced a courier's Excel and VBA interface with a React and TypeScript admin portal featuring a live order board, command palette, dispatch controls, and billing workflows.

   **Why:** Retains the completed replacement outcome and focuses the frontend version on interactions office staff use.

3. Created shared design tokens for light and dark themes, with automated contrast checks and an ESLint rule to prevent hardcoded component colors.

   **Why:** Keeps the design-system mechanism; removes a blanket 4.5:1 claim because the current design documentation records a contrast waiver.

4. Added Vitest component tests and Playwright workflows with axe accessibility checks for the courier apps, enforced through GitHub Actions before each deployment.

   **Why:** Replaces the mixed approximately 1,400-test total with the testing layers and their purpose.

### Zip

1. Built six React and TypeScript dashboards backed by 35 REST endpoints for Linear ticket data, giving engineering managers views of project progress, review delays, estimation accuracy, and contractor costs.

   **Why:** Restores verified API scope: 35 distinct HTTP-method/path pairs in `server/routes/agenticAiTicketRoutes.ts` at revision `ea8f455`, serving the six Linear dashboards.

2. Added reusable searchable filters and five-minute dashboard refreshes that pause in hidden tabs and resume on return, preserving users' filters and pagination.

   **Why:** Retains the implemented interaction behavior; removes the vague shared-interaction-layer label.

3. Built a Recharts scatter plot of estimated versus actual ticket hours, with a regression line and confidence band to help managers inspect estimation bias.

   **Why:** Keeps the visualization and user task; removes the claim that the chart establishes systematic misestimation.

4. Migrated dashboard reads to PostgreSQL and Redis, reducing modal-cache expiration from 12 hours to 10 minutes and invalidating cached results after successful synchronization.

   **Why:** Preserves the supported before-and-after figure but identifies it as cache configuration, not measured end-to-end freshness.

### ICBC

1. Developed and maintained more than 70 JavaScript and TestCafe regression tests for UI workflows and backend APIs, supporting ICBC's insurance-platform cloud migration.

   **Why:** Combines overlapping testing claims and retains the resume-reported test count; no ICBC repository was available for independent verification.

2. Extended automated test coverage to previously untested UI components and user scenarios, using Jira to review requirements and track defects with developers and product teams.

   **Why:** Combines related coverage and collaboration claims into one contribution without inventing a coverage percentage.

### Fall Line

1. Built an offline Android snowboarding tracker with Flutter and Kotlin, backed by FastAPI and PostgreSQL, to record GPS sessions and identify runs, lifts, and stops.

   **Why:** Makes the project purpose clear while retaining the core stack; avoids implying a production launch.

2. Organized the Flutter client into presentation, domain, and data layers with Riverpod, keeping GPS filtering and ride statistics on-device for use without connectivity.

   **Why:** Links the architecture to offline functionality; removes a routing-library mention that adds less value here.

## resumes/cloud_resume.tex

### Sprinter Delivery

1. Deployed an offline courier app and an admin operations portal to Cloudflare Pages, sharing a Supabase PostgreSQL database for delivery, dispatch, and billing.

   **Why:** Describes the completed deployment and shared architecture in terms relevant to cloud engineering.

2. Built a GitHub Actions pipeline that recreates a Docker-based Supabase database, replays 38 migrations, and runs database and browser tests before deploying both apps to Cloudflare Pages.

   **Why:** Connects the migration and test checks to the completed deployment workflow while retaining concrete scope.

3. Replaced text-message dispatch with PostgreSQL-backed assignments and Deno Web Push notifications, returning driver acceptance or rejection to the admin board in real time.

   **Why:** Retains the completed dispatch replacement and explains the method and visible result in one contribution.

4. Added PostgreSQL row-level security policies and pgTAP tests covering cross-driver access to orders, delivery records, and stored media.

   **Why:** Replaces broad security and no-card-data assurances with specific access controls and tested scenarios.

### Zip

1. Migrated dashboard reads to PostgreSQL and Redis, reducing modal-cache expiration from 12 hours to 10 minutes and invalidating cached results after successful synchronization.

   **Why:** Preserves the supported before-and-after figure but identifies it as cache configuration, not measured end-to-end freshness.

2. Containerized the dashboard as five Docker Compose services for Railway, adding startup checks that stop workers when required PostgreSQL tables are missing.

   **Why:** Retains the documented deployment topology; narrows the schema-readiness guarantee to the tables actually checked.

3. Added Redis locking for Linear writers and PostgreSQL deadlock retries for ticket updates to handle overlapping worker containers during Railway deployments.

   **Why:** Corrects the original scope: the distributed lock applies to Linear, while Asana relies on transaction retries.

4. Added 11 health checks for drift, stalled synchronization, and API availability, with reconciliation triggers and Claude-generated explanations of likely causes for dashboard users.

   **Why:** Retains documented monitoring scope; describes AI output as suggested causes rather than verified root-cause analysis.

### ICBC

1. Developed automated end-to-end tests for ICBC's insurance-platform cloud migration, covering user workflows, backend APIs, and data flows.

   **Why:** Names the system and validation scope without implying responsibility for validating the entire migration.

2. Integrated parallel automated tests into TeamCity continuous integration and delivery (CI/CD) pipelines, reducing reliance on local runs and cutting test development time by approximately 40%.

   **Why:** Expands CI/CD and preserves the resume-reported development-time metric; it is not a claim about execution speed or an independently verified measurement.

3. Automated test-data extraction and consolidation across multiple sources with Python, replacing manual review steps and saving the team more than 10 hours per week.

   **Why:** Keeps the task, method, and resume-reported time saving; no underlying measurement records were available.

### Fall Line

1. Containerized a FastAPI and PostgreSQL backend with Docker Compose for an offline Flutter snowboarding tracker, applying Alembic migrations when the backend starts.

   **Why:** Emphasizes the cloud resume's infrastructure contribution rather than packing the entire mobile stack into the product bullet.

2. Configured GitHub Actions to run pytest and Flutter tests with linting and type checks, applying Alembic migrations before backend tests to check database compatibility.

   **Why:** Explains the CI behavior; removes test totals without inspected run output rather than presenting static counts as verified results.

## resumes/qa_resume.tex

### Sprinter Delivery

1. Wrote 561 pgTAP assertions covering database constraints and row-level security, including attempts to access another driver's orders, delivery records, and media.

   **Why:** Retains the total reported in the latest verification ledger; explains test scope instead of treating the count as proof of complete security.

2. Wrote a Playwright scenario that queues 15 delivery records offline through login-token expiry, then checks for duplicate records after reconnection and upload.

   **Why:** Keeps the concrete scenario and scale; avoids presenting a finite automated check as a universal exactly-once guarantee.

3. Built a GitHub Actions quality gate that replays 38 database migrations and runs Vitest, pgTAP, and Playwright checks, including axe accessibility audits, before deploying the courier apps.

   **Why:** Focuses on the gate's behavior; removes mixed unit, browser, and skipped-project counts that obscure what is tested.

### Zip

1. Added Vitest, Jest, and Supertest coverage for dashboard APIs and data repositories, using Testcontainers to exercise PostgreSQL queries against a real database.

   **Why:** Explains what was tested; removes the unverified personal share of 58 out of 72 suites and the overly broad no-mocks claim.

2. Built daily drift audits comparing stored Linear and Asana tickets with source APIs, alongside health checks that trigger reconciliation when discrepancies are detected.

   **Why:** Describes validation and recovery behavior without implying that every ticket is checked by every health probe.

3. Migrated dashboard reads to PostgreSQL and Redis, reducing modal-cache expiration from 12 hours to 10 minutes and invalidating cached results after successful synchronization.

   **Why:** Preserves the supported before-and-after figure but identifies it as cache configuration, not measured end-to-end freshness.

### ICBC

The first proposed bullet combines the overlapping test-design and regression-maintenance bullets.

1. Applied the Software Testing Life Cycle (STLC) to design and maintain more than 70 automated regression tests for ICBC's cloud migration using JavaScript and TestCafe.

   **Why:** Combines duplicate test-design and maintenance bullets while retaining the QA keyword and resume-reported scale.

2. Integrated parallel automated tests into TeamCity continuous integration and delivery (CI/CD) pipelines, reducing reliance on local runs and cutting test development time by approximately 40%.

   **Why:** Expands CI/CD and preserves the resume-reported development-time metric; it is not a claim about execution speed or an independently verified measurement.

3. Translated user stories into Gherkin and Cucumber test scenarios, using Jira to investigate failures, report defects, and validate fixes with developers and product teams.

   **Why:** Keeps the recorded testing tools in a concrete collaboration context instead of repeating a stack list.

### Fall Line

1. Built an offline Android snowboarding tracker with Flutter and Kotlin, backed by FastAPI and PostgreSQL, to record GPS sessions and identify runs, lifts, and stops.

   **Why:** Makes the project purpose clear while retaining the core stack; avoids implying a production launch.

2. Configured GitHub Actions to run pytest and Flutter tests with linting and type checks, applying Alembic migrations before backend tests to check database compatibility.

   **Why:** Explains the CI behavior; removes test totals without inspected run output rather than presenting static counts as verified results.

## resumes/data-AI_resume.tex

### Sprinter Delivery

1. Modelled courier order and customer data in PostgreSQL after analyzing 13,855 legacy orders, consolidating customer and delivery-location records into a shared data model.

   **Why:** Retains documented legacy scale; replaces claims that every VBA module was covered and duplicate drift was eliminated.

2. Rebuilt courier pricing in PostgreSQL using annual rate cards, zoning for 74 cities, and weekly fuel surcharges, preserving per-order calculations for auditable invoices.

   **Why:** Connects the completed pricing engine to invoice traceability and retains meaningful geographic scope without asserting every pricing case is covered.

3. Built a React and TypeScript Progressive Web App (PWA) that stores delivery photos, signatures, and GPS data in IndexedDB and queues uploads while couriers work offline.

   **Why:** Connects the stack to a driver capability without implying that a simulated offline test proves every full-shift scenario.

### Zip

1. Built an extract, transform, load (ETL) pipeline for approximately 10,000 Linear and Asana tickets, loading PostgreSQL with checkpointed ingestion and daily drift audits.

   **Why:** Expands the relevant acronym and keeps source, destination, scale, and data-quality context.

2. Integrated Anthropic Claude to summarize stalled-ticket context, with prompts requesting evidence-based explanations and cached responses keyed by a hash of the input.

   **Why:** Keeps a concrete AI integration; makes clear that the prompt requests factual behavior rather than guaranteeing it.

3. Added a least-squares regression of actual versus estimated hours, with a confidence band, to help engineering managers inspect estimation bias across completed tickets.

   **Why:** Explains the analytical purpose; avoids overstating the statistical precision of the implementation's fixed 1.96 multiplier.

4. Migrated dashboard reads to PostgreSQL and Redis, reducing modal-cache expiration from 12 hours to 10 minutes and invalidating cached results after successful synchronization.

   **Why:** Preserves the supported before-and-after figure but identifies it as cache configuration, not measured end-to-end freshness.

5. Added 11 health checks for drift, stalled synchronization, and API availability, with reconciliation triggers and Claude-generated explanations of likely causes for dashboard users.

   **Why:** Retains documented monitoring scope; describes AI output as suggested causes rather than verified root-cause analysis.

### ICBC

1. Automated test-data extraction and consolidation across multiple sources with Python, replacing manual review steps and saving the team more than 10 hours per week.

   **Why:** Keeps the task, method, and resume-reported time saving; no underlying measurement records were available.

2. Developed and maintained more than 70 JavaScript and TestCafe regression tests for UI workflows and backend APIs, supporting ICBC's insurance-platform cloud migration.

   **Why:** Combines overlapping testing claims and retains the resume-reported test count; no ICBC repository was available for independent verification.

### Fall Line

1. Built a Python hidden Markov model (HMM) with Viterbi decoding to classify snowboarding GPS tracks into runs, lifts, and stops using speed and vertical movement.

   **Why:** Makes the model's task and inputs explicit and includes both the full term and acronym.

2. Versioned stored session-analysis results and added a Python reanalysis command to update sessions processed by older models.

   **Why:** Clarifies that the repository provides a reanalysis command, not necessarily an automatically scheduled job.

## resumes/data-analysis_resume.tex

### Sprinter Delivery

1. Profiled 13,855 legacy Excel orders across 105 columns, identifying deleted-row artifacts and inconsistent customer records to inform a replacement PostgreSQL schema.

   **Why:** Keeps meaningful profiling scope; removes a crowded metric list and unnecessary public disclosure of sensitive payment-data findings.

2. Built CSV order imports that normalize legacy column names, validate row values, and report saved, duplicate, or invalid records when loading data into PostgreSQL.

   **Why:** Connects bulk order loading to its validation and duplicate-handling behavior without inventing measured typing savings.

3. Rebuilt courier pricing in PostgreSQL using annual rate cards, zoning for 74 cities, and weekly fuel surcharges, preserving per-order calculations for auditable invoices.

   **Why:** Connects the completed pricing engine to invoice traceability and retains meaningful geographic scope without asserting every pricing case is covered.

### Zip

1. Built six React and TypeScript dashboards with Recharts to analyze Linear ticket progress, engineer workload, estimation accuracy, and contractor costs.

   **Why:** Prioritizes analytics outputs and relevant technologies instead of unsupported comparisons with Linear.

2. Built quarterly contractor reports using Zip's fiscal calendar, with Excel formulas and charts that recalculate cost estimates when managers change rates.

   **Why:** Connects the export implementation to a useful task without suggesting modeled savings are realized business savings.

3. Reconstructed ticket status histories as PostgreSQL time spans and surfaced aging-review queues so managers could identify work waiting for review.

   **Why:** Keeps the time-in-state analysis; removes a universal three-day rule and the unsupported claim that Linear never surfaces review delays.

4. Added a least-squares regression of actual versus estimated hours, with a confidence band, to help engineering managers inspect estimation bias across completed tickets.

   **Why:** Explains the analytical purpose; avoids overstating the statistical precision of the implementation's fixed 1.96 multiplier.

5. Built a PostgreSQL reporting layer for approximately 10,000 Linear and Asana tickets, with ten-minute ingestion schedules and daily audits for missing or stale records.

   **Why:** Keeps documented scale and cadence while separating scheduling from measured data freshness.

### ICBC

1. Automated test-data extraction and consolidation across multiple sources with Python, replacing manual review steps and saving the team more than 10 hours per week.

   **Why:** Keeps the task, method, and resume-reported time saving; no underlying measurement records were available.

2. Worked with developers and product teams in Jira to translate user stories into test cases, investigate failures, track defects, and validate fixes during ICBC's cloud migration.

   **Why:** Replaces generic collaboration language with the documented testing workflow; no new team-size or impact metric is introduced.

### Fall Line

1. Built an offline snowboarding tracker that turns GPS sessions into runs, lifts, and stops using a Python hidden Markov model backed by PostgreSQL.

   **Why:** Emphasizes the data transformation and analytical method while keeping the product understandable.

2. Built a Python import for OpenStreetMap-derived ski-resort data, preserving inactive records when sources disappear and routing uncertain resort matches for manual review.

   **Why:** Keeps lifecycle handling and matching decisions; identifies the upstream-derived data instead of implying a direct raw OSM integration.

## src/components/sections/Experience.tsx

### Sprinter Delivery

**Card summary:** Replaced a courier company's Excel and VBA operations system with an offline driver app and an admin portal for orders, dispatch, and billing, integrated with QuickBooks and Pumble.

**Why:** Presents the completed engagement and its operational outcome, with the product context kept in the card summary.

1. Built a ten-screen React and TypeScript portal for courier orders, dispatch, and billing, replacing an Excel and VBA workflow containing 13,855 legacy orders.

   **Why:** Keeps the completed portal and legacy-replacement outcome, while connecting the stack and scope to concrete office workflows.

2. Built a React and TypeScript Progressive Web App (PWA) that stores delivery photos, signatures, and GPS data in IndexedDB and queues uploads while couriers work offline.

   **Why:** Connects the stack to a driver capability without implying that a simulated offline test proves every full-shift scenario.

3. Built a GitHub Actions pipeline that recreates a Docker-based Supabase database, replays 38 migrations, and runs database and browser tests before deploying both apps to Cloudflare Pages.

   **Why:** Connects the migration and test checks to the completed deployment workflow while retaining concrete scope.

4. Replaced text-message dispatch with PostgreSQL-backed assignments and Deno Web Push notifications, returning driver acceptance or rejection to the admin board in real time.

   **Why:** Retains the completed dispatch replacement and explains the method and visible result in one contribution.

5. Rebuilt courier pricing in PostgreSQL using annual rate cards, zoning for 74 cities, and weekly fuel surcharges, preserving per-order calculations for auditable invoices.

   **Why:** Connects the completed pricing engine to invoice traceability and retains meaningful geographic scope without asserting every pricing case is covered.

6. Integrated QuickBooks invoicing and payment-status webhooks with the courier platform, alongside Pumble dispatch notifications, reducing manual transfer of accounting and delivery information.

   **Why:** Restores the completed integrations and connects them to office workflows without inventing a time-saving metric.

7. Added PostgreSQL row-level security policies and pgTAP tests covering cross-driver access to orders, delivery records, and stored media.

   **Why:** Replaces broad security and no-card-data assurances with specific access controls and tested scenarios.

### Zip

**Card summary:** Built six dashboards for Zip's custom AI engineering team to review ticket progress, estimation accuracy, and contractor costs using synchronized Linear data.

**Why:** Keeps the audience and analytical purpose while shortening the implementation-heavy card copy.

1. Built six React and TypeScript dashboards backed by 35 REST endpoints for Linear ticket data, giving engineering managers views of project progress, review delays, estimation accuracy, and contractor costs.

   **Why:** Restores verified API scope: 35 distinct HTTP-method/path pairs in `server/routes/agenticAiTicketRoutes.ts` at revision `ea8f455`, serving the six Linear dashboards.

2. Built scheduled ingestion for approximately 10,000 Linear and Asana tickets using GraphQL and REST APIs, with cursor checkpoints, rate-limit retries, and daily reconciliation checks.

   **Why:** Retains documented ticket scale and recovery mechanisms without guaranteeing that audits catch every missed update.

3. Added 11 health checks for drift, stalled synchronization, and API availability, with reconciliation triggers and Claude-generated explanations of likely causes for dashboard users.

   **Why:** Retains documented monitoring scope; describes AI output as suggested causes rather than verified root-cause analysis.

4. Built quarterly contractor reports using Zip's fiscal calendar, with Excel formulas and charts that recalculate cost estimates when managers change rates.

   **Why:** Connects the export implementation to a useful task without suggesting modeled savings are realized business savings.

5. Migrated dashboard reads to PostgreSQL and Redis, reducing modal-cache expiration from 12 hours to 10 minutes and invalidating cached results after successful synchronization.

   **Why:** Preserves the supported before-and-after figure but identifies it as cache configuration, not measured end-to-end freshness.

6. Added PostgreSQL integration tests with Testcontainers and wrote deployment, scheduling, and recovery runbooks to support handover to Zip's maintainers.

   **Why:** Connects tests and documentation to maintainability; drops unsupported authorship totals and a runbook count that varies by what is included.

### ICBC

**Card summary:** Developed automated tests and Python tooling for ICBC's insurance-platform cloud migration, working with developers and product teams on release validation.

**Why:** Replaces a vague reliability outcome with the specific testing and tooling contribution.

Combines original bullets 1–2 and 5–6 to remove repeated testing and collaboration claims.

1. Developed and maintained more than 70 JavaScript and TestCafe regression tests for UI workflows and backend APIs, supporting ICBC's insurance-platform cloud migration.

   **Why:** Combines overlapping testing claims and retains the resume-reported test count; no ICBC repository was available for independent verification.

2. Integrated parallel automated tests into TeamCity continuous integration and delivery (CI/CD) pipelines, reducing reliance on local runs and cutting test development time by approximately 40%.

   **Why:** Expands CI/CD and preserves the resume-reported development-time metric; it is not a claim about execution speed or an independently verified measurement.

3. Automated test-data extraction and consolidation across multiple sources with Python, replacing manual review steps and saving the team more than 10 hours per week.

   **Why:** Keeps the task, method, and resume-reported time saving; no underlying measurement records were available.

4. Extended automated test coverage to previously untested UI components and user scenarios, using Jira to review requirements and track defects with developers and product teams.

   **Why:** Combines related coverage and collaboration claims into one contribution without inventing a coverage percentage.

### Petrobras

**Card summary:** Coordinated offshore ballast operations, supervised four operators, and used Python and VBA to automate recurring procedures.

**Why:** Replaces broad safety and workflow adjectives with the recorded responsibilities, team scope, and tools.

1. Automated offshore operational procedures with Python and VBA, reducing manual errors by 15%.

   **Why:** Removes vague efficiency language; retains the outcome reported in the existing resume and website, which could not be independently verified.

2. Coordinated ballast and vessel-stability operations with offshore teams, communicating operational changes and monitoring systems during daily procedures.

   **Why:** Replaces generic safety praise with the operational work already described in the resume and site.

3. Supervised four offshore operators, coordinating daily tasks and communication as operational conditions changed.

   **Why:** Retains reported team scope while replacing vague claims about keeping work organized.

### LiftBank

**Card summary:** Built finance-data automation and reporting tools with Python and VBA to support recurring operational and executive reports.

**Why:** Connects tools recorded in the resume alternatives to the reporting work; avoids an undefined efficiency claim.

Removes the original third bullet about lessons learned; it adds no distinct accomplishment.

1. Automated recurring finance tasks and reports, saving the team more than 20 hours per week.

   **Why:** Keeps the website-reported aggregate saving; does not equate it with the separate five-hour executive-reporting figure in commented resume bullets.

2. Built internal reports from operational data to help leadership review recurring finance processes.

   **Why:** States a tangible contribution; removes the unsupported faster-decision claim and the separate personal-learning bullet.

## src/components/sections/Projects.tsx

### Fall Line

**Card description:** An offline Android snowboarding tracker with a Flutter client and FastAPI backend that records GPS sessions and identifies runs, lift rides, and stops; development is ongoing.

**Why:** Keeps product, platform, and current scope clear without implying deployment or user adoption.

1. Classified snowboarding tracks with a Viterbi-decoded hidden Markov model, combining speed and vertical movement with mapped ski-lift paths to distinguish runs, lifts, and stops.

   **Why:** Keeps the distinctive algorithm and map context while making the terminology easier to scan.

2. Persisted GPS points in a local Drift database through a Kotlin foreground service, then uploaded batches to FastAPI with duplicate checks based on elapsed time.

   **Why:** Connects the mobile and backend mechanisms; removes the unconditional claim that retries never double-count.

3. Configured GitHub Actions to run pytest and Flutter tests with linting and type checks, applying Alembic migrations before backend tests to check database compatibility.

   **Why:** Explains the CI behavior; removes test totals without inspected run output rather than presenting static counts as verified results.

### PullerBear

**Card description:** A VS Code extension built with three teammates at a BCIT hackathon to summarize incoming Git changes and answer follow-up questions, with reliability improvements added afterward.

**Why:** Preserves team context and purpose without implying sole ownership of the extension or every post-event change.

1. Added OpenRouter model configuration, retry controls, and actionable error messages to a TypeScript VS Code extension that summarizes incoming Git changes.

   **Why:** Replaces broad ownership and bundler details with improvements supported by your post-hackathon commits.

2. Corrected incoming-commit counts for configured Git branches and added branch-change cleanup so PullerBear discards reviews that no longer match the selected branch.

   **Why:** Replaces a product-wide polling claim with changes attributed to you in repository history.

3. Fixed review-data persistence for PullerBear's OpenRouter chat and added Mocha tests for summary generation, API failures, and question-and-answer workflows.

   **Why:** Keeps the AI integration while focusing on your documented reliability and testing work instead of sole authorship of the prompt pipeline.

### AskMii

**Card description:** A three-person BCIT course project where students ask and answer course questions; contributed responsive homepage layouts, saved-question features, and personalized displays.

**Why:** Makes your contribution explicit; removes the unverified claim of uninterrupted hosting since December 2024.

1. Merged AskMii's separate homepage layouts into a responsive HTML and CSS interface, adapting navigation and question browsing for phones, tablets, and desktop screens.

   **Why:** Replaces a whole-site page count with your documented responsive-homepage contribution.

2. Implemented JavaScript and Firestore bookmarking so signed-in students can save questions, remove saved items, and browse their bookmarked course discussions.

   **Why:** Replaces database-model/authentication ownership with the feature your commits establish.

3. Added bookmarked-question previews and a Firestore-backed points display to AskMii's homepage, giving students quick access to saved discussions and their contribution score.

   **Why:** Replaces ownership of the scoring algorithm with the homepage display work supported by your commits.

### COMP 2522 Java Term Project

**Card description:** A solo Java course project with a geography quiz, a number-ordering game, and Quantum Sum, a JavaFX puzzle developed with documented ChatGPT assistance.

**Why:** Keeps project scope and AI assistance clear while avoiding an unsupported originality claim.

1. Built three Java games behind a shared menu, using a common Game interface and abstract base class to organize console and JavaFX implementations.

   **Why:** Explains the design and scope without low-value stylesheet details.

2. Managed the JavaFX lifecycle with a shared runtime and CountDownLatch synchronization, allowing players to relaunch graphical games from the console menu without restarting the application.

   **Why:** Connects the concurrency mechanism to the concrete relaunch problem.

3. Wrote JUnit tests for Quantum Sum's move validation, grid updates, dice behavior, and score-file parsing, including corrupted-input cases.

   **Why:** Prioritizes meaningful scenarios over an unverified test total; avoids implying that probabilistic checks prove dice fairness.

## resumes/custom_resume.tex

No replacement bullets: this file is empty.

## Commented alternatives in resumes/*.tex

These replacements apply to the named files if those entries are restored. They are not additions to the active resume sets above.

### ICBC: commented alternatives

**Files:** cloud_resume.tex; data-analysis_resume.tex

1. Developed and maintained more than 70 JavaScript and TestCafe regression tests for UI workflows and backend APIs, supporting ICBC's insurance-platform cloud migration.

   **Why:** Combines overlapping testing claims and retains the resume-reported test count; no ICBC repository was available for independent verification.

**Files:** cloud_resume.tex; data-AI_resume.tex; swe_resume.tex

1. Worked with developers and product teams in Jira to translate user stories into test cases, investigate failures, track defects, and validate fixes during ICBC's cloud migration.

   **Why:** Replaces generic collaboration language with the documented testing workflow; no new team-size or impact metric is introduced.

**Files:** cloud_resume.tex; qa_resume.tex; swe_resume.tex

1. Extended automated test coverage to previously untested UI components and user scenarios, using Jira to review requirements and track defects with developers and product teams.

   **Why:** Combines related coverage and collaboration claims into one contribution without inventing a coverage percentage.

**Files:** data-AI_resume.tex; data-analysis_resume.tex; front-end_resume.tex

1. Integrated parallel automated tests into TeamCity continuous integration and delivery (CI/CD) pipelines, reducing reliance on local runs and cutting test development time by approximately 40%.

   **Why:** Expands CI/CD and preserves the resume-reported development-time metric; it is not a claim about execution speed or an independently verified measurement.

**Files:** data-analysis_resume.tex

1. Developed automated end-to-end tests for ICBC's insurance-platform cloud migration, covering user workflows, backend APIs, and data flows.

   **Why:** Names the system and validation scope without implying responsibility for validating the entire migration.

**Files:** front-end_resume.tex; qa_resume.tex

1. Automated test-data extraction and consolidation across multiple sources with Python, replacing manual review steps and saving the team more than 10 hours per week.

   **Why:** Keeps the task, method, and resume-reported time saving; no underlying measurement records were available.

### Petrobras: commented alternatives

**Files:** cloud_resume.tex; data-AI_resume.tex; data-analysis_resume.tex; front-end_resume.tex; qa_resume.tex; swe_resume.tex

1. Automated offshore operational procedures with Python and VBA, reducing manual errors by 15%.

   **Why:** Removes vague efficiency language; retains the outcome reported in the existing resume and website, which could not be independently verified.

2. Coordinated ballast and vessel-stability operations with offshore teams, communicating operational changes and monitoring systems during daily procedures.

   **Why:** Replaces generic safety praise with the operational work already described in the resume and site.

3. Supervised four offshore operators, coordinating daily tasks and communication as operational conditions changed.

   **Why:** Retains reported team scope while replacing vague claims about keeping work organized.

### LiftBank: commented alternatives

**Files:** data-AI_resume.tex; data-analysis_resume.tex; front-end_resume.tex; qa_resume.tex; swe_resume.tex

1. Built Python and VBA tools to process financial datasets, using PyAutoGUI and Selenium to automate repetitive application and browser steps.

   **Why:** Uses the tools recorded in the commented resumes; removes the undefined 20% operational-efficiency metric.

2. Automated executive reporting by consolidating financial datasets, saving approximately five hours per week.

   **Why:** Preserves the specific resume-reported reporting saving; avoids conflating it with the site's broader 20-hour total.

### PullerBear: commented alternatives

**Files:** cloud_resume.tex; data-AI_resume.tex; data-analysis_resume.tex; front-end_resume.tex; qa_resume.tex; swe_resume.tex

1. Collaborated on a four-person BCIT hackathon team to build PullerBear, a TypeScript VS Code extension that summarizes incoming Git changes before a pull.

   **Why:** Preserves the recorded team and product context; uses collaboration rather than an independently unverified leadership claim.

2. Improved PullerBear's React sidebar with loading states, retry controls, and persisted OpenRouter review context for follow-up questions about incoming commits.

   **Why:** Replaces whole-interface ownership with improvements supported by your history.

### AskMii: commented alternatives

**Files:** cloud_resume.tex; data-AI_resume.tex; data-analysis_resume.tex; front-end_resume.tex; qa_resume.tex; swe_resume.tex

1. Merged AskMii's separate homepage layouts into a responsive HTML and CSS interface, adapting navigation and question browsing for phones, tablets, and desktop screens.

   **Why:** Replaces a whole-site page count with your documented responsive-homepage contribution.

2. Implemented JavaScript and Firestore bookmarking so signed-in students can save questions, remove saved items, and browse their bookmarked course discussions.

   **Why:** Replaces database-model/authentication ownership with the feature your commits establish.

3. Added bookmarked-question previews and a Firestore-backed points display to AskMii's homepage, giving students quick access to saved discussions and their contribution score.

   **Why:** Replaces ownership of the scoring algorithm with the homepage display work supported by your commits.

### Zip: commented alternatives

**Files:** swe_resume.tex

1. Added PostgreSQL integration tests with Testcontainers and wrote deployment, scheduling, and recovery runbooks to support handover to Zip's maintainers.

   **Why:** Connects tests and documentation to maintainability; drops unsupported authorship totals and a runbook count that varies by what is included.

2. Built quarterly contractor reports using Zip's fiscal calendar, with Excel formulas and charts that recalculate cost estimates when managers change rates.

   **Why:** Connects the export implementation to a useful task without suggesting modeled savings are realized business savings.

### Fall Line: commented alternative

**Files:** swe_resume.tex

1. Classified snowboarding tracks with a Viterbi-decoded hidden Markov model, combining speed and vertical movement with mapped ski-lift paths to distinguish runs, lifts, and stops.

   **Why:** Keeps the distinctive algorithm and map context while making the terminology easier to scan.

### Stock template example in all six populated resumes

No replacement for the commented Apache Beam example: it belongs to sample template content and does not establish a personal accomplishment.
