---
articleId: A023
title: Should This Be an SAP Agent, an Extension, or a Workflow?
subtitle: A Responsibility Model for SAP Enterprise AI
published: "2026-05-27"
boundary: Responsibility
audience: Enterprise Architecture
symptom: Responsibility drift
featured: true
source: LinkedIn
sourceUrl: https://www.linkedin.com/pulse/should-sap-agent-extension-workflowa-responsibility-model-pei-rksjc/
summary: A responsibility model for deciding when SAP enterprise AI work belongs in an agent, extension, workflow, assistant, automation, or core system.
tags: [sap-btp, enterprise-ai, agents, workflows, extensions, boundary-model]
---

# **Should This Be an SAP Agent, an Extension, or a Workflow?**

## **A Responsibility Model for SAP Enterprise AI**

The demo looks perfect.

A business user describes a goal in natural language.
An agent understands the intent.
A workflow starts.
An extension API is called.
S/4HANA is updated.
A confirmation appears.

Everyone says: this is the future.

And they may be right.

But architecturally, what just happened?

Did the agent make the decision?
Did the workflow own the process?
Did the extension own the business capability?
Did S/4HANA remain the source of truth?
Who owns the state?
Who owns the upgrade path?
Who is accountable if the action is wrong?

These questions matter because enterprise AI demos often make different responsibilities look like one seamless action.

That is powerful.

It is also dangerous.

The danger is not that agents fail visibly.

The danger is that they succeed in demos while hiding responsibility ambiguity.

---

## **1. Product Unification Is Not Responsibility Clarity**

SAP is clearly moving toward a unified enterprise AI platform direction.

SAP Business AI Platform brings together AI, data, process context, connectivity, and governance so organizations can build, integrate, scale, and run AI across the enterprise. It explicitly includes AI agents, applications, workflows, business context, lifecycle control, and governance as part of the platform story.

Joule Studio goes further by bringing agent building, applications, workflows, SAP Cloud Application Programming Model development, managed runtime, and extensions into the same development experience.

SAP AI Agent Hub addresses another side of the problem: discovery, inventory, governance, evaluation, observability, identity, access control, and MCP server governance across the business landscape.

This platform direction is necessary.

But it is not sufficient.

A platform can provide common tooling.
It can provide runtime.
It can provide governance controls.
It can provide visibility.
It can connect agents, workflows, applications, integrations, and business context.

But a platform cannot automatically decide which responsibility belongs to an agent, an extension, a workflow, an assistant, or a core system.

That decision is architectural.

And if the responsibility model is unclear, enterprise AI will not create autonomy.

It will create ambiguity at scale.

---

## **2. The Wrong Question: Should We Build an Agent?**

Many teams are beginning with the wrong question.

They ask:

Should this be an agent?

Or:

Should we build an extension?

Or:

Can we automate this with workflow?

Or:

Can this be done with n8n, SAP Build Process Automation, Integration Suite, or a custom service?

Those are implementation questions.

They are not the first architectural question.

The first question should be:

> What kind of responsibility are we introducing into the enterprise system?

Before deciding whether something should become an agent, extension, workflow, automation, or assistant, every enterprise artifact should be forced to answer a smaller set of responsibility questions:

Does it own business truth?
Does it own state?
Does it make decisions?
Does it execute actions?
Does it expose a stable capability?
Does it orchestrate a repeatable process?
Does it require lifecycle versioning?
Who is accountable when it fails?

If these questions cannot be answered, the system is not ready for autonomous execution.

It may be ready for a demo.

It is not ready for enterprise architecture.

---

## **3. A Responsibility Model for SAP Enterprise AI**

The cleanest way to think about agents, extensions, workflows, assistants, and SAP core systems is not as competing technologies.

They are different responsibility units.

Each should own something different.

A healthy SAP enterprise AI architecture starts with this separation:

> Core systems own business truth.
> Extensions define governed capabilities.
> Workflows govern repeatable execution.
> Agents select and coordinate action under policy.
> Assistants provide the interaction surface.

This sounds simple.

But most future failures will happen because this distinction was never made explicit.

---

## **4. Core Systems Own Business Truth**

In an SAP landscape, core systems such as S/4HANA, SuccessFactors, Ariba, Concur, and other systems of record often own the authoritative business truth.

They own the canonical business object.
They own the official transaction state.
They own financial, legal, HR, procurement, supply chain, or compliance-relevant truth.
They own the meaning of many business events.

This does not mean every extension must be thin.

It does not mean every process must be forced back into the core.

It does not mean innovation must stop at the edge of S/4HANA.

But it does mean one principle must remain clear:

> An agent may act on business truth.
> It should not silently become business truth.

This is one of the most important boundaries in the agentic enterprise.

If S/4HANA owns the purchase order, the agent should not create a parallel truth in memory.

If SuccessFactors owns employee data, the agent should not silently become an alternate HR record.

If an extension owns supplier risk enrichment, that truth must be explicitly bounded, versioned, and governed.

If a workflow owns approval state, that state should not be replaced by conversational history.

The moment core truth, extension truth, workflow state, and agent memory blur together, the enterprise no longer has intelligence.

It has truth drift.

---

## **5. Extensions Define Governed Capabilities**

An extension is not just “some custom code.”

An extension is a long-lived enterprise capability.

It may include UI.
It may include a CAP service.
It may include backend logic.
It may expose APIs.
It may own extension-specific data.
It may implement authorization rules.
It may manage tenant lifecycle.
It may integrate with S/4HANA or other systems.
It may become part of the enterprise’s operating model.

That is why extension architecture is not replaced by agents.

It becomes more important.

If the enterprise needs a stable, reusable, governed business capability, that capability should not be hidden inside an agent prompt.

It should be modeled, exposed, versioned, secured, tested, monitored, and evolved as an extension or governed service.

The agent can invoke it.

The agent should not secretly become it.

For example, if a company needs a supplier risk assessment capability, the answer is probably not to let an agent invent risk logic in conversation each time.

The enterprise may need a governed extension or service that defines:

* the risk model
* the data sources
* the authorization model
* the API contract
* the tenant behavior
* the audit record
* the version history
* the lifecycle path

An agent may use that capability to answer a business question.

But the capability itself should be governed.

That is the distinction.

> If the enterprise needs a stable capability, build an extension.
> If the enterprise needs contextual judgment over when and how to use that capability, use an agent.

Agents do not eliminate extension architecture.

They increase the cost of getting it wrong.

---

## **6. Workflows Govern Repeatable Execution**

Workflow is another responsibility unit.

A workflow is not just automation.

A workflow owns repeatable execution.

It is the right structure when the business process requires:

* known steps
* approval paths
* SLA tracking
* auditability
* exception handling
* handoff between users or systems
* process visibility
* deterministic control
* compliance evidence

This is where many agent discussions become dangerously vague.

If a process requires approval, audit, escalation, rollback, or regulated evidence, it should not disappear into agent reasoning.

An agent may participate in the workflow.

It may summarize inputs.
It may classify exceptions.
It may prepare a recommendation.
It may draft a response.
It may select the next likely action.
It may trigger a workflow under policy.

But it should not replace the workflow when the business requires repeatable, accountable execution.

A simple principle helps:

> If the path must be auditable, repeatable, and approved, it belongs in workflow — even if an agent participates in it.

This applies whether the workflow is built with SAP Build Process Automation, Integration Suite, a BPM platform, n8n, a custom orchestration layer, or another automation tool.

The tool matters.

But the responsibility matters more.

Lightweight automation can be excellent for internal glue, experiments, low-risk back-office tasks, and fast iteration.

But when automation becomes part of a core SAP process, it must answer enterprise questions:

Who owns the identity context?
Where is the audit trail?
How are versions promoted?
How are failures replayed?
How are approvals enforced?
How are secrets governed?
How is tenant behavior isolated?
How is rollback handled?

If those questions are not answered, the workflow is not a governance layer.

It is just faster ambiguity.

---

## **7. Agents Select and Coordinate Action Under Policy**

An agent is not a better extension.

It is not a workflow engine with a nicer interface.

It is not a place to hide business logic that nobody wants to model.

An enterprise agent is a delegated reasoning and execution unit.

It is useful when the task involves:

* ambiguity
* non-structured input
* contextual judgment
* tool selection
* exception interpretation
* natural language interaction
* planning across multiple possible paths
* recommendation under incomplete information
* coordination across several governed capabilities

That is the real power of agents.

They allow users to express intent rather than navigate systems.

They can interpret context.

They can choose tools.

They can summarize, compare, classify, plan, draft, and coordinate.

But this also makes them dangerous if their authority is not bounded.

An agent should not have unrestricted write access just because it can reason.

It should not bypass extension APIs.

It should not call core systems with broad technical credentials.

It should not turn memory into business truth.

It should not implement business rules that should have been modeled as governed services.

It should not make high-impact decisions without approval boundaries.

The right model is:

> Agents select and coordinate action under policy.

Not:

> Agents do everything.

The difference is fundamental.

In a healthy architecture, the agent acts through governed tools, workflows, APIs, and extensions.

In an unhealthy architecture, the agent becomes a universal bypass.

That bypass may look impressive in a demo.

In production, it becomes a shadow execution layer.

---

## **8. Assistants Provide the Interaction Surface**

Assistants and agents are often mixed together.

They should be separated.

An assistant is where user intent enters.

It provides the conversational or embedded interaction surface.

It may understand natural language.
It may present options.
It may show results.
It may ask for confirmation.
It may route the request to an agent.
It may help the user navigate enterprise work.

But the assistant is not necessarily the decision-maker.

It is not necessarily the execution owner.

It is not necessarily the process owner.

A simple separation is useful:

> The assistant is where intent enters.
> The agent is where delegated reasoning happens.
> The workflow is where repeatable execution is governed.
> The extension is where enterprise capability is stabilized.
> The core system is where business truth is protected.

Once this is clear, the architecture becomes discussable.

Before this is clear, every discussion about agents becomes a product debate.

---

## **9. The Decision Matrix: Agent, Extension, Workflow, or Automation?**

The decision should not start with tool preference.

It should start with responsibility.

If the enterprise needs a stable reusable business capability, build an extension or governed service.

If the enterprise needs UI, backend logic, authorization, data model, tenant lifecycle, and versioned APIs, build an extension.

If the enterprise needs to own extension-specific state, build an extension.

If the process steps are known, repeatable, auditable, and approval-driven, use workflow.

If the process crosses systems in a predictable way, use workflow, integration, or orchestration.

If the input is unstructured and requires interpretation, use an agent.

If the path is not fully predetermined and the system must select tools dynamically, use an agent.

If the user needs a natural language interface, use an assistant with agent support.

If the task is low-risk internal glue, lightweight automation may be enough.

If the action writes to core business systems, it should go through governed workflow or extension APIs.

Not direct free-form agent execution.

A useful summary is:

> Stable capability: extension.
> Repeatable process: workflow.
> Contextual decision and tool selection: agent.
> Human interaction surface: assistant.
> Canonical business truth: core system.

This is not a product taxonomy.

It is a responsibility taxonomy.

---

## **10. Collaboration Is Necessary — But Only Through Boundaries**

The future SAP landscape will not be made of isolated artifacts.

Extensions will call other extensions.
Agents will invoke extensions.
Extensions may use agents.
Agents may participate in workflows.
Workflows may call agents.
Agents may coordinate with other agents.
SAP and non-SAP systems will interact through APIs, events, skills, integrations, and MCP servers.

Collaboration is not the problem.

Unbounded collaboration is the problem.

---

## **11. Rule One: Extensions Collaborate Through Contracts, Not Internal State**

Extensions may need to interact.

That is normal.

But extension-extension interaction should happen through explicit contracts:

* released APIs
* events
* domain events
* integration contracts
* asynchronous messaging
* governed service interfaces

It should not happen through:

* direct reads of another extension’s database
* shared internal tables
* implicit tenant assumptions
* duplicated hidden state
* manual synchronization
* technical-user shortcuts
* undocumented side effects

Otherwise, independent extensions become a distributed monolith.

Each team may still complete its own task.

Each extension may still pass its local tests.

But the enterprise system becomes non-reconstructible because the real dependency structure is no longer visible.

Extensions can collaborate.

But they must not dissolve each other’s boundaries.

---

## **12. Rule Two: Agents Invoke Extensions; They Do Not Bypass Them**

Agent-extension collaboration will become one of the most common enterprise AI patterns.

That is good.

But the direction must be clear.

A healthy pattern looks like this:

```text
User intent
  → Assistant
  → Agent
  → Governed tool contract
  → Extension API
  → Business validation
  → Core system
```

A dangerous pattern looks like this:

```text
User intent
  → Agent
  → Broad technical credential
  → Direct core write
```

The first pattern preserves architecture.

The second pattern bypasses it.

The agent should not receive more authority than a properly governed application just because the interface is conversational.

In fact, because agents can plan dynamically, invoke tools, and operate over ambiguous context, their execution rights should usually be more carefully bounded.

A simple rule:

> The more dynamic the agent, the more explicit the boundary must be.

Agents should call governed capabilities.

They should not become ungoverned capability factories.

---

## **13. Rule Three: Workflows Contain Accountable Execution**

Agents can be embedded into workflows.

They can enrich workflows.

They can accelerate workflows.

They can help workflows handle exceptions and ambiguity.

But when the business process requires accountable execution, workflow should remain the container.

For example, an agent may review a supplier risk case and recommend mitigation.

But if the action affects contract terms, supplier status, payment block, purchase order release, or compliance classification, the final execution path may need workflow governance.

That workflow should define:

* who approves
* what evidence is required
* what state changes
* what system is updated
* what audit record is kept
* what exceptions are allowed
* what rollback or correction path exists

The agent helps the process.

It does not erase the process.

This is one of the most important distinctions in enterprise AI.

Without workflow containment, agentic execution can become impossible to audit.

---

## **14. Rule Four: Agent-Agent Collaboration Requires Singular Accountability**

Agent-agent collaboration sounds advanced.

It may also become necessary.

One agent may handle procurement context.
Another may handle supplier risk.
Another may handle legal review.
Another may handle financial impact.
Another may coordinate the final recommendation.

But agent-agent collaboration must not mean that responsibility disappears into a swarm.

Every multi-agent process needs:

* an orchestrator
* explicit agent roles
* allowed tools
* context boundaries
* output schemas
* escalation rules
* decision checkpoints
* traceable delegation
* a final accountable owner

Otherwise, agent-agent collaboration creates a new failure mode:

One agent’s assumption becomes another agent’s fact.
One agent’s draft becomes another agent’s decision.
One agent’s memory becomes another agent’s evidence.
One agent’s error becomes a workflow outcome.

That is not autonomy.

That is distributed ambiguity.

A useful principle:

> Agent-agent collaboration is acceptable only when delegation is explicit and accountability remains singular.

---

## **15. The New Failure Mode: Responsibility Drift**

Traditional SAP extension failures often appear as lifecycle failures.

Tenant onboarding breaks.
Schema migration becomes unsafe.
Identity propagation fails under hardening.
Integration contracts shift.
Rollback disappears.
Data truth becomes unreconstructible.

Agentic enterprise systems introduce another failure mode:

> Responsibility drift.

Responsibility drift occurs when agents, extensions, workflows, automations, and core systems all appear to work locally, but the enterprise can no longer determine who owns truth, action, state, lifecycle, or accountability.

This is not a theoretical risk.

It is the natural result of building agents, workflows, and extensions in parallel without a responsibility model.

---

## **16. Truth Drift**

Truth drift happens when multiple layers silently begin to own different versions of the same business fact.

S/4HANA owns one version.
An extension stores another.
A workflow log captures another.
An agent memory remembers another.
A RAG index retrieves another.
A spreadsheet export preserves another.

Each team can explain why its version exists.

But the enterprise can no longer determine which version is authoritative.

This is especially dangerous with agents because agents are good at making fragmented context look coherent.

They can summarize conflicting data into a confident answer.

They can turn uncertain sources into fluent recommendations.

They can make truth drift feel resolved when it has only been linguistically smoothed over.

That is why agent memory must not be treated as business truth.

And agent output must not become canonical without validation.

---

## **17. Execution Drift**

Execution drift happens when different teams give agents different levels of authority without a common model.

One team allows agents to recommend.

Another allows agents to draft.

Another allows agents to trigger workflows.

Another allows agents to call APIs.

Another allows agents to write directly to business systems.

Each team may believe its decision is reasonable.

But the enterprise now has no consistent execution boundary.

The same type of business action may require approval in one area and be autonomous in another.

The same risk class may be handled differently by different agents.

The same user role may receive different execution power depending on which agent was deployed first.

This is how AI governance becomes political rather than architectural.

---

## **18. Identity Drift**

Identity drift happens when the enterprise can no longer prove who acted.

A user starts the request.
An assistant receives the intent.
An agent plans the action.
A workflow executes a step.
An extension validates a rule.
An integration layer calls S/4HANA.
An MCP server invokes an external tool.
A technical credential performs the final write.

Who acted?

The user?
The agent?
The service account?
The workflow owner?
The extension?
The integration runtime?

If the identity chain is not designed, the audit trail becomes misleading.

This is one of the most dangerous forms of agentic ambiguity.

Enterprise AI needs delegated execution.

But delegated execution must preserve principal intent, tenant context, authorization semantics, and traceability.

Otherwise, the system may automate work while destroying accountability.

---

## **19. Lifecycle Drift**

Lifecycle drift may become the most underestimated agent problem.

Extension upgrades are already difficult.

But agent upgrades are more complex because agent behavior is not defined only by code.

Agent behavior may change when any of the following changes:

* prompt
* instruction hierarchy
* model version
* tool list
* tool schema
* extension API
* workflow definition
* policy
* memory
* RAG source
* business context
* SAP Knowledge Graph semantics
* approval threshold
* runtime guardrail
* evaluation suite

This means agent upgrade is not just deployment.

Agent upgrade is behavior migration.

A prompt change can be a version change.
A model change can be a version change.
A tool schema change can be a version change.
A policy change can be a version change.
A context source change can be a version change.

If the enterprise does not version agent behavior, it cannot explain why the same business request produced different actions over time.

That is lifecycle drift.

And it will be much harder to detect than traditional deployment drift.

---

## **20. Accountability Drift**

Accountability drift happens when every layer can deny final responsibility.

The agent team says the tool returned the wrong result.
The tool team says the extension API allowed the action.
The extension team says the workflow should have required approval.
The workflow team says the user confirmed the step.
The business team says the system recommended it.
The platform team says all controls were technically green.

Everyone completed their part.

But nobody owns the whole action.

This is the enterprise AI version of a familiar architecture problem:

APIs respond.
Tokens validate.
Destinations are green.
Each team proves its component works.
But the end-to-end responsibility model is broken.

Agentic AI makes this problem more urgent because it can coordinate more actions across more systems faster than traditional applications.

Speed does not remove responsibility.

It compresses the time available to notice that responsibility was never assigned.

---

## **21. The Extension–Agent Boundary Model**

Agent governance alone is not enough.

Extension governance alone is not enough.

Workflow governance alone is not enough.

The enterprise needs a boundary model that defines how capabilities, processes, agents, context, lifecycle, and accountability interact.

I call this the Extension–Agent Boundary Model.

It has seven boundaries.

---

## **22. Truth Boundary**

Who owns canonical business truth?

Principles:

Core systems own core business truth.
Extensions may own extension-specific truth.
Workflows own process state.
Agents do not own canonical truth by default.
Agent memory is not business truth.
RAG output is not business truth.
A generated recommendation is not business truth until validated.

This boundary prevents agents from becoming invisible systems of record.

---

## **23. Capability Boundary**

What should become a stable enterprise capability?

Principles:

Stable reusable business logic should be exposed as an extension, service, API, or governed tool.

Agents should invoke capabilities.

They should not hide stable business logic inside prompts.

If a business rule must be tested, versioned, reused, audited, secured, and evolved, it probably does not belong only in an agent instruction.

It belongs in a governed capability.

This boundary prevents agents from becoming ungoverned application layers.

---

## **24. Process Boundary**

What must be governed as repeatable workflow?

Principles:

Repeatable, auditable, approval-based, SLA-driven execution should be modeled as workflow.

Agents may participate in workflow.

They may enrich workflow.

They may select workflow.

They may prepare workflow input.

But they should not replace workflow when the enterprise needs process evidence.

This boundary prevents agent reasoning from swallowing process governance.

---

## **25. Execution Boundary**

What is the agent allowed to do?

Every enterprise agent should have an explicit action class.

For example:

Read only.
Summarize only.
Recommend.
Draft.
Prepare.
Trigger workflow.
Execute low-risk action.
Execute high-risk action with approval.
Never execute certain actions.

Without an execution boundary, an agent’s authority becomes a product configuration accident.

With an execution boundary, autonomy becomes governable.

This boundary answers the most important operational question:

What can this agent actually do?

---

## **26. Context Boundary**

What can the agent see, retrieve, remember, or infer?

Principles:

Tenant-specific context must remain tenant-specific.
Role-specific context must remain role-specific.
Sensitive business context must be governed.
Memory must be scoped.
RAG sources must be versioned.
MCP servers must not become uncontrolled context bridges.
Context must not silently become truth.

This boundary is essential because agents do not only act on data.

They act on interpreted context.

If the context is wrong, unauthorized, stale, cross-tenant, or semantically unstable, the agent may produce a confident but invalid action.

---

## **27. Lifecycle Boundary**

How do agents, extensions, workflows, tools, policies, and context evolve together?

Principles:

Extensions need versioning.
Workflows need versioning.
Tools need versioning.
Prompts need versioning.
Policies need versioning.
Models need release awareness.
Context sources need lifecycle control.
Critical agent behavior needs evaluation before promotion.

Agent lifecycle is not a side concern.

It is central.

The enterprise must be able to answer:

What changed?
Why did behavior change?
Which tool version was used?
Which policy applied?
Which context was retrieved?
Which model executed?
Which prompt was active?
Which evaluation was passed?

Without this, agentic execution cannot be reconstructed.

---

## **28. Accountability Boundary**

Who is responsible for the final business action?

Principles:

Every agent action needs an accountable owner.
Every tool call needs traceability.
Every business write needs an actor and authorization chain.
Every autonomous path needs an escalation rule.
Every multi-agent collaboration needs singular accountability.
Every high-impact action needs a clear approval or override model.

This boundary prevents autonomy from dissolving responsibility.

An enterprise can delegate execution.

It cannot delegate away accountability.

---

## **29. Why This Is Not Anti-Agent**

This model is not an argument against agents.

The opposite is true.

Agents will become important because enterprise work is full of ambiguity.

Users do not always know which application to open.
Processes do not always follow clean paths.
Exceptions require judgment.
Information is scattered.
Decisions depend on context.
Business users want outcomes, not screens.

Agents are a natural response to this complexity.

But that is exactly why they need architectural boundaries.

The more powerful the agent, the more important it becomes to define what it does not own.

Agents should not replace extensions.

They should execute through governed capabilities.

Agents should not replace workflows.

They should operate inside accountable process structures when the business requires them.

Agents should not replace core systems.

They should respect systems of record and truth ownership.

Agents should not replace architecture.

They make architecture visible again.

---

## **30. The Real Test Before Building an Agent**

Before building another SAP agent, ask these questions:

What business responsibility is this agent supposed to carry?
Is it deciding, recommending, drafting, triggering, or executing?
What truth does it depend on?
What truth is it allowed to create?
Which extension capabilities does it invoke?
Which workflow contains its execution?
Which core system owns the final state?
Which identity is used at each step?
Which tenant context applies?
Which tools are allowed?
Which actions require approval?
How is its behavior versioned?
How is it evaluated before promotion?
How is it audited after execution?
Who is accountable if it is wrong?

If these questions are too heavy for the project, the project may not need an autonomous agent yet.

It may need a workflow.

Or an extension.

Or a governed API.

Or a better process model.

Or simply a clearer ownership decision.

---

## **31. The Architecture That Will Survive**

The future SAP landscape will not be only applications.

It will include core systems, extensions, workflows, assistants, agents, skills, integrations, MCP servers, business data platforms, semantic layers, and automation tools acting together.

That future can work.

But only if responsibility does not blur.

A survivable model looks like this:

```text
Business intent
  → Assistant
  → Agent
  → Governed tool or skill
  → Workflow or extension API
  → Core system
```

A dangerous model looks like this:

```text
Business intent
  → Agent
  → Everything
```

The second model looks more autonomous.

The first model is more governable.

Enterprise AI should not flatten the architecture.

It should operate through it.

---

## **Closing**

Agents do not replace extensions.

They execute through them.

Extensions define governed enterprise capabilities.
Workflows define repeatable and accountable execution paths.
Agents select and coordinate action under policy.
Assistants provide the interaction surface.
Core systems protect business truth.

If these responsibilities are clear, enterprise AI can evolve safely.

If they blur, enterprises may not get autonomous execution.

They may get autonomous ambiguity.

And ambiguity, once automated, does not become intelligence.

It becomes risk at scale.

— Jiandong

[1]: https://www.sap.com/products/ai-platform.html "SAP Business AI Platform | Build and Govern Agentic AI | SAP"
[2]: https://www.sap.com/products/artificial-intelligence/joule-studio.html "Joule Studio | Build AI Agents, Apps, and Workflows"
[3]: https://www.sap.com/products/artificial-intelligence/ai-agent-hub.html "SAP AI Agent Hub | AI Governance and Agent Management System"
