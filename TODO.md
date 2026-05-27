You are working on the GitHub Pages / Astro website repository for jiandongpei.com.

Goal:
Reposition the website from a narrow “Independent SAP BTP Architecture Verdict” site into a broader but still highly differentiated positioning:

SAP BTP & Enterprise AI Architecture
Boundary Model for agents, extensions, workflows, and core systems

Important strategic direction:
Do NOT abandon the existing SAP BTP / Boundary Model / post-go-live extension failure assets.
Instead, downgrade “BTP Verdict” from the main identity into a foundation/proof layer, and upgrade the front-facing positioning to:

- SAP Enterprise AI architecture
- Agent / Extension / Workflow responsibility boundaries
- Boundary governance for SAP AI systems
- SAP BTP builder-side experience as the credibility foundation

The new site should make clear:

Core systems own business truth.
Extensions define governed enterprise capabilities.
Workflows govern repeatable and accountable execution.
Agents select and coordinate action under policy.
Assistants provide the interaction surface.

The site should not become generic “AI consultant” copy.
It must remain clearly SAP / BTP / enterprise architecture specific.

Before editing:
1. Inspect the repository structure.
2. Identify the Astro pages/components/layouts used by the current site.
3. Reuse the existing visual style and component conventions.
4. Do not delete old pages unless explicitly requested below.
5. Preserve existing URLs as much as possible.
6. Do not invent biographical claims or credentials.
7. Keep the tone authoritative, direct, architectural, not salesy or hype-driven.

Current problem to solve:
The current site over-indexes on:
- Independent SAP BTP Architect
- post-go-live SAP BTP extension failure
- Architecture Verdict Services
- Boundary Audit / Verdict as the primary commercial offer

This is still valuable, but too narrow as the main front door.

The new site should communicate:
AI agents, extensions, workflows, automations, and SAP core systems are now being built together. The real architectural risk is unclear responsibility: who owns truth, action, state, lifecycle, and accountability.

Primary audience:
- SAP platform leaders
- enterprise architects
- SAP BTP / S/4HANA / Clean Core decision-makers
- teams building SAP agents, workflows, extensions, Joule-related capabilities, CAP services, or AI-enabled business applications
- leaders worried that impressive AI demos may hide governance and lifecycle ambiguity

Main positioning sentence:
“I help SAP teams define responsibility boundaries between agents, extensions, workflows, and core systems — before AI demos become ungovernable enterprise execution.”

Global tagline:
Change the site-wide tagline from something like:
“Independent SAP BTP Architect — Boundary Model”
to:
“SAP BTP & Enterprise AI Architecture — Boundary Model”

If there is a shared layout/header config, update it there.

Navigation changes:
Current nav likely includes items such as Boundary Model, Failure Patterns, Insights, Work With Me, Implementation vs Verdict, When to Call Me, About.

Update navigation to include a new front-facing AI architecture entry.

Preferred nav:
- Agent–Extension Model
- Boundary Model
- Failure Patterns
- Insights
- Work With Me
- About

If the existing design has limited nav space, use:
- Enterprise AI Boundaries
- Boundary Model
- Insights
- Work With Me
- About

Do not remove existing pages, but make the new Agent–Extension Model one of the primary nav items.

Required new pages:

1. /agent-extension-boundary-model/
Title:
Agent–Extension Boundary Model

Subtitle:
A responsibility model for SAP agents, extensions, workflows, and core business systems.

Purpose:
This is the new main conceptual page. It should explain the five responsibility units:

Core systems own business truth.
Extensions define governed capabilities.
Workflows govern repeatable execution.
Agents select and coordinate action under policy.
Assistants provide the interaction surface.

Page content should include:

Opening:
SAP enterprise AI will not fail only because agents hallucinate.
It will fail when no one can clearly say what belongs to an agent, what belongs to an extension, what belongs to a workflow, what must remain in S/4HANA, and who owns the final business action.

Section: Why this model exists
Explain that SAP enterprise AI increasingly combines agents, apps, workflows, extensions, integrations, and business data. Platform unification is necessary, but product unification is not responsibility clarity.

Section: The responsibility model
Use the following text as the core:

Core systems own business truth.
Extensions define governed enterprise capabilities.
Workflows define repeatable and accountable execution.
Agents select and coordinate action under policy.
Assistants provide the interaction surface.

Section: The dangerous model
Show this as a simple code/text diagram:

Business intent
  → Agent
  → Everything

Explain that this looks autonomous but collapses responsibility boundaries.

Section: The governable model
Show this as a simple code/text diagram:

Business intent
  → Assistant
  → Agent
  → Governed tool or skill
  → Workflow or extension API
  → Core system

Explain that this model preserves truth, lifecycle, authorization, and accountability.

Section: The seven boundaries
Include seven boundary cards or sections:

1. Truth Boundary
Who owns canonical business truth?
Core systems own core business truth. Extensions may own extension-specific truth. Workflows own process state. Agents do not own canonical truth by default. Agent memory is not business truth.

2. Capability Boundary
What should become a stable enterprise capability?
Stable reusable business logic should be modeled as an extension, API, service, or governed tool. Agents should invoke capabilities, not hide stable business logic inside prompts.

3. Process Boundary
What must be governed as repeatable workflow?
Repeatable, auditable, approval-based, SLA-driven execution belongs in workflow. Agents may participate in workflow but should not replace it when process evidence matters.

4. Execution Boundary
What is the agent allowed to do?
Each agent needs an explicit action class: read-only, summarize, recommend, draft, prepare, trigger workflow, execute low-risk action, execute high-risk action with approval, or never execute certain actions.

5. Context Boundary
What can the agent see, retrieve, remember, or infer?
Tenant-specific and role-specific context must remain scoped. RAG, memory, MCP servers, and semantic context must not become uncontrolled context bridges.

6. Lifecycle Boundary
How do agents, extensions, workflows, tools, policies, and context evolve together?
Agent behavior changes when prompts, model versions, tools, policies, memory, RAG sources, workflows, or extension APIs change. Agent upgrade is behavior migration.

7. Accountability Boundary
Who is responsible for the final business action?
Every agent action needs an accountable owner, every tool call needs traceability, every business write needs an actor and authorization chain, and multi-agent collaboration must not dissolve responsibility.

Closing CTA:
“Use this model before deciding whether something should become an agent, an extension, a workflow, or a lightweight automation.”

2. /sap-agent-extension-workflow/
Title:
Should This Be an SAP Agent, an Extension, or a Workflow?

Subtitle:
A practical decision guide before enterprise AI creates responsibility drift.

Purpose:
This is a search-friendly and reader-friendly page. It should answer a practical question.

Page structure:

Opening:
Many SAP AI discussions start with the wrong question:
“Should we build an agent?”
The better question is:
“What responsibility are we assigning?”

Section: Use an extension when...
- the enterprise needs a stable reusable business capability
- custom UI, backend, authorization, APIs, data model, or tenant lifecycle is required
- extension-owned state must be versioned and migrated
- the capability must be secured, tested, monitored, and evolved
- business logic should not be hidden inside an agent prompt

Section: Use a workflow when...
- the path is known or repeatable
- approval, audit, SLA, escalation, or exception handling is required
- the process must be replayed or explained
- cross-system orchestration needs governance
- agents may help but should not swallow process accountability

Section: Use an agent when...
- input is ambiguous or unstructured
- the system must interpret intent
- the path is not fully predetermined
- dynamic tool selection is required
- contextual judgment, summarization, recommendation, or coordination is needed
- the agent acts under policy through governed tools

Section: Use lightweight automation when...
- the task is low-risk
- the process is internal or experimental
- speed matters more than long-term governance
- no core business truth or regulated execution is involved

Section: Keep it in the core system when...
- canonical business truth is involved
- financial, legal, HR, procurement, or compliance truth is at stake
- S/4HANA or another system of record owns the business object
- the enterprise cannot tolerate truth drift

Decision summary:
Stable capability: extension.
Repeatable process: workflow.
Contextual decision and tool selection: agent.
Human interaction surface: assistant.
Canonical business truth: core system.

Closing:
The goal is not to build fewer agents. The goal is to avoid assigning the wrong responsibility to the wrong execution unit.

3. /enterprise-ai-responsibility-architecture/
Title:
Enterprise AI Responsibility Architecture

Subtitle:
Why agent governance is not enough without truth, execution, lifecycle, and accountability boundaries.

Purpose:
Broader strategic page. It should position the user as someone who understands enterprise AI beyond generic agent governance.

Page sections:

Opening:
Enterprise AI governance cannot start only with model risk, prompt policy, or agent inventory.
Those controls matter, but they are not enough if the enterprise has not defined what each artifact is allowed to own.

Section: The new ambiguity
Agents, workflows, extensions, integrations, and core systems now collaborate in the same business action. This creates responsibility ambiguity.

Section: Responsibility drift
Define responsibility drift:
Responsibility drift occurs when agents, extensions, workflows, automations, and core systems all appear to work locally, but the enterprise can no longer determine who owns truth, action, state, lifecycle, or accountability.

Subsections:
- Truth Drift
- Execution Drift
- Identity Drift
- Lifecycle Drift
- Accountability Drift

Use concise explanations:

Truth Drift:
S/4HANA, extensions, workflow logs, agent memory, and RAG indexes may all hold versions of a business fact. The enterprise must know which one is authoritative.

Execution Drift:
One team lets agents recommend, another lets them execute, another lets them trigger workflows, another lets them write directly. There must be an enterprise execution boundary.

Identity Drift:
A user initiates intent, an agent plans, a workflow runs, an extension validates, a service account writes. The identity chain must remain auditable.

Lifecycle Drift:
Agent behavior changes when prompt, model, tool, policy, context, workflow, or extension API changes. Agent lifecycle is behavior migration.

Accountability Drift:
Every layer can say “my part worked,” while nobody owns the final business action.

Section: Why BTP experience matters
Explain that this responsibility architecture is built on SAP BTP builder-side experience with identity, tenant, data, integration, runtime, and lifecycle boundaries.

Closing:
Agent governance is necessary. But governance must sit on top of a responsibility model. Otherwise an enterprise may govern many assets without knowing what each asset is allowed to own.

Homepage update:

Update the homepage to make the new positioning clear.

Recommended hero:

H1:
SAP Enterprise AI Needs Clear Responsibility

Subtitle:
Agents, extensions, workflows, and core systems should not collapse into one blurred execution layer.

Body:
I help SAP teams reason about what belongs where:

what should become an agent,
what should remain a governed extension,
what belongs in workflow,
what must stay anchored in S/4HANA,
and who owns truth, lifecycle, and accountability.

The Boundary Model™ originated from SAP BTP builder-side experience with post-go-live extension failures. In the AI era, it extends to agent-extension responsibility architecture.

Primary CTA:
Read the Agent–Extension Boundary Model

Secondary CTA:
Explore the SAP BTP Boundary Model

Homepage sections to add or revise:

Section: The problem
Use:
AI can help teams create agents, workflows, integrations, and extensions faster than before.
But faster creation does not automatically create clear responsibility.
A demo may work while truth, execution, lifecycle, and accountability are already drifting.

Section: What I focus on
Cards:
- Agent–Extension Responsibility
- SAP BTP Boundary Model
- S/4HANA Extensibility and Clean Core
- Lifecycle and Reconstructibility
- Enterprise AI Governance

Section: The responsibility model
Show the five-line model:
Core systems own business truth.
Extensions define governed capabilities.
Workflows govern repeatable execution.
Agents select and coordinate action under policy.
Assistants provide the interaction surface.

Section: Why this is different
Use:
This is not implementation staffing.
This is not generic AI advisory.
This is architectural judgment about where responsibility belongs before enterprise AI becomes ungovernable execution.

Do not make the homepage primarily about prices or SOW.

About page update:

Rewrite the About page so it no longer reads only as proof for BTP verdict services.

Recommended About opening:

My work focuses on SAP BTP and enterprise AI architecture, especially the boundaries between agents, extensions, workflows, and core business systems.

AI can help teams create agents, applications, workflows, integrations, and extensions faster than before. But faster creation does not automatically create clear responsibility.

In SAP landscapes, the real architectural questions are often:

What should become an agent?
What should remain a governed extension?
What belongs in workflow?
What must stay anchored in S/4HANA or another system of record?
Who owns business truth, execution authority, lifecycle, and accountability?

Then preserve and adapt existing background:
- Former SAP engineer
- SAP BTP builder-side experience
- CAP
- XSUAA
- AppRouter
- Work Zone
- multitenancy
- integration
- lifecycle
- Build Code / Joule-era platform work if already present in the site
- Boundary Model creator

Add:
The Boundary Model™ began as a way to analyze SAP BTP extension failure across runtime, identity, tenant, data, integration, and lifecycle boundaries. In the enterprise AI era, the same boundary discipline becomes necessary for agents, workflows, extensions, and core systems acting together.

Work With Me page update:

Do not remove existing BTP Architecture Verdict Services.
But reduce the impression that the only available service is post-go-live BTP verdict.

Add a new top-level section:

Architectural Judgment for SAP BTP and Enterprise AI

I help teams clarify responsibility boundaries before or during high-risk SAP architecture decisions, especially when agents, extensions, workflows, integrations, and core systems are being combined.

Advisory areas:
- Agent / Extension / Workflow responsibility review
- SAP BTP boundary review
- Enterprise AI architecture ambiguity assessment
- Post-go-live SAP BTP extension failure verdict
- Clean Core and S/4HANA extensibility boundary review
- Lifecycle and reconstructibility review

Add a new service option before or alongside existing options:

Agent–Extension Responsibility Review

Purpose:
To determine whether an SAP enterprise AI initiative has clearly assigned responsibility across agents, extensions, workflows, and core systems.

Typical questions:
- Should this be an agent, an extension, a workflow, or automation?
- What business truth is involved?
- What can the agent execute?
- Which workflow contains accountability?
- Which extension APIs or governed tools should be invoked?
- Which system owns final state?
- How will agent behavior, tools, prompts, workflows, and extension APIs evolve?

Deliverable:
Responsibility Boundary Memo, including:
- responsibility map
- identified ambiguity areas
- truth / execution / lifecycle / accountability risks
- recommended architecture direction

Keep existing BTP verdict offerings but present them as one part of the broader work.

Avoid putting pricing in the first screen. If pricing already exists and is important, leave it lower on the page or in a downloadable / detailed section.

Insights page update:

Current insights likely says something like:
Essays for post-go-live SAP BTP extension problems where architecture is under question.

Change to:
Essays on SAP BTP, enterprise AI architecture, agent-extension boundaries, Clean Core, S/4HANA extensibility, and post-go-live failure patterns where implementation success is not the same as architectural validity.

Reorganize insights into categories if the site supports categories. If not, add section headings or curated lists.

Suggested categories:

1. Enterprise AI / Agent Architecture
Include or prepare links for:
- Should This Be an SAP Agent, an Extension, or a Workflow?
- Agents Do Not Replace Extensions
- Is This Agent Safe to Execute?
- Agent Memory Is Not Business Truth
- Agent Lifecycle Is Behavior Migration

2. Boundary Model / SAP BTP Failure
Existing articles on:
- BTP extension failure
- Data Boundary
- Integration Boundary
- Identity Boundary
- Tenant Boundary
- Lifecycle Boundary
- CAP boundaries

3. Clean Core / Governance / Long-Term Architecture
Existing Clean Core, S/4HANA extensibility, governance, lifecycle, RISE-related articles.

If exact article files do not exist, do not invent links. Only link to existing pages or leave future placeholders clearly disabled / not linked.

Boundary Model page update:

Do not replace the existing Boundary Model.
Add a note near the top:

The Boundary Model™ originated in SAP BTP extension architecture, especially post-go-live failures where systems continue to run but lose reconstructibility under lifecycle change.

In the enterprise AI era, the same boundary discipline extends to agents, workflows, and governed capabilities. AI does not remove boundary problems. It makes responsibility boundaries more urgent.

Add a cross-link:
Read the Agent–Extension Boundary Model.

Failure Patterns page update:

If there is a Failure Patterns page, add a short new section:

AI-era failure patterns:
- Responsibility drift
- Truth drift
- Execution drift
- Identity drift
- Lifecycle drift
- Accountability drift

Link to the new Enterprise AI Responsibility Architecture page.

SEO requirements:

Update meta titles/descriptions for changed pages.

Homepage meta title:
SAP BTP & Enterprise AI Architecture | Boundary Model

Homepage meta description:
SAP BTP and enterprise AI architecture by Jiandong Pei. Boundary Model for agents, extensions, workflows, S/4HANA extensibility, Clean Core, lifecycle, and responsibility governance.

New page meta:

/agent-extension-boundary-model/
Title:
Agent–Extension Boundary Model | SAP Enterprise AI Architecture
Description:
A responsibility model for SAP agents, extensions, workflows, assistants, and core systems. Define who owns business truth, capability, process, execution, lifecycle, and accountability.

/sap-agent-extension-workflow/
Title:
SAP Agent, Extension, or Workflow? | Enterprise AI Decision Guide
Description:
A practical responsibility guide for deciding when to use an SAP agent, extension, workflow, lightweight automation, or core system ownership.

/enterprise-ai-responsibility-architecture/
Title:
Enterprise AI Responsibility Architecture | SAP Agents, Workflows, Extensions
Description:
Why agent governance is not enough without truth, execution, lifecycle, context, and accountability boundaries in SAP enterprise AI systems.

Internal linking requirements:
- Homepage links to Agent–Extension Boundary Model and SAP BTP Boundary Model.
- Agent–Extension Boundary Model links to SAP Agent / Extension / Workflow decision guide.
- Agent–Extension Boundary Model links to Work With Me.
- Boundary Model page links to Agent–Extension Boundary Model.
- Work page links to Agent–Extension Boundary Model.
- Insights page includes new pages/articles prominently.
- About page links to Boundary Model and Agent–Extension Boundary Model.

Tone requirements:
- Direct, sharp, architectural.
- Avoid generic AI hype.
- Avoid “transform your business with AI” language.
- Avoid sounding like a vendor implementation shop.
- Avoid excessive sales language.
- Use clear sentences.
- Prefer “responsibility”, “boundary”, “truth”, “lifecycle”, “accountability”, “governed capability”, “reconstructibility”, “enterprise AI”, “SAP BTP”, “S/4HANA”, “Clean Core”, “workflow”, “agent”.
- Do not overuse trademark symbols.
- Keep “Boundary Model™” where already used, but do not make every sentence trademark-heavy.

Do not:
- Remove existing BTP credibility.
- Delete current verdict pages.
- Rebrand as generic AI consulting.
- Claim official SAP endorsement.
- Claim SAP partnership unless already stated in existing site.
- Invent case studies or client logos.
- Add unrealistic guarantees.
- Make the site look like a SaaS product if it is a personal expert site.

Optional but recommended:
Create a document file in the repo, for example:
docs/linkedin-about-draft.md

Put this LinkedIn About draft in it for the site owner to manually use:

I work on SAP BTP and enterprise AI architecture, with a focus on the boundaries between agents, extensions, workflows, and core business systems.

My perspective comes from builder-side SAP experience across SAP BTP platform and extension architecture, including CAP, XSUAA, AppRouter, Work Zone, multitenancy, integration, lifecycle concerns, and SAP Build Code / Joule-era platform work.

The problem I focus on is becoming more important in the AI era:

AI can help teams create agents, applications, workflows, integrations, and extensions faster than before. But faster creation does not automatically create clear responsibility.

In SAP landscapes, the real architectural questions are often:

What should become an agent?
What should remain a governed extension?
What belongs in workflow?
What must stay anchored in S/4HANA or another system of record?
Who owns business truth, execution authority, lifecycle, and accountability?

I created the Boundary Model™ to analyze these questions across runtime, identity, tenant, data, integration, lifecycle, and now agent-extension responsibility boundaries.

My work is not implementation staffing or generic advisory. I focus on architectural judgment: identifying where local correctness hides global ambiguity, where demos mask responsibility drift, and where enterprise AI or SAP BTP extensions may become difficult to govern, evolve, or trust.

I write about SAP BTP, Clean Core, S/4HANA extensibility, AI agents, workflows, CAP, multitenancy, and the architecture boundaries required for enterprise systems to remain safe to evolve.

Implementation requirements:
1. Inspect current codebase and identify page/component conventions.
2. Implement the content changes using existing components where possible.
3. Add new Astro or Markdown pages according to the repository’s current pattern.
4. Update navigation.
5. Update metadata.
6. Update internal links.
7. Keep design consistent.
8. Run format/lint/build commands if available.
9. Fix broken links or TypeScript/Astro errors.
10. Provide a final summary of changed files and any manual follow-up needed.

Validation checklist:
- Site builds successfully.
- Homepage no longer presents only “Independent SAP BTP Architect” as the main identity.
- New positioning clearly says SAP BTP & Enterprise AI Architecture.
- New Agent–Extension Boundary Model page exists and is linked from nav/home.
- Existing Boundary Model and BTP Verdict assets remain accessible.
- Work page includes Agent–Extension Responsibility Review or equivalent.
- About page explains builder-side SAP BTP experience as the credibility source for AI-era responsibility architecture.
- Insights page includes enterprise AI / agent-extension framing.
- SEO titles/descriptions updated.
- No fictional claims added.
- No generic AI consulting language dominates.