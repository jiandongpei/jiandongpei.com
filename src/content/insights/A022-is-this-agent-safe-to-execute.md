---
articleId: A022
title: Is This Agent Safe to Execute?
subtitle: The Boundary Model for SAP Enterprise Agents in the Age of Trusted Execution
published: "2026-05-14"
boundary: Execution
audience: Enterprise Architecture
symptom: Agent readiness hidden by demo success
featured: true
source: LinkedIn
sourceUrl: https://www.linkedin.com/pulse/agent-safe-execute-boundary-model-sap-joule-agents-enterprise-pei-9xuac/
summary: Enterprise agent readiness requires identity, tenant, data, integration, lifecycle, and execution boundaries before trusted action.
tags: [sap-btp, enterprise-ai, agents, joule, boundary-model]
---

# Is This Agent Safe to Execute?

## The Boundary Model for SAP Enterprise Agents in the Age of Trusted Execution

**By Jiandong Pei**
SAP BTP & Enterprise AI Architecture
Former SAP Build Code / Joule Core Initiator
Creator of the Boundary Model™

---

## 0. The Market Has Changed

For decades, enterprise software was expensive because software behavior was hard to create.

A business process had to be understood.
A system had to be designed.
Code had to be written.
Integrations had to be built.
Extensions had to be implemented.
Migrations had to be planned.
Workflows had to be configured.
Testing had to be executed.
Operations had to be maintained.

That difficulty created value.

It created value for software vendors.
It created value for implementation partners.
It created value for consultants.
It created value for engineers.

But AI is changing that assumption.

Software behavior is becoming cheaper to generate.

A model can generate code.
An assistant can create a workflow.
An agent can call APIs.
A migration tool can transform artifacts.
A developer can build a prototype in hours instead of weeks.
A business user can describe an outcome and expect software to move toward it.

This does not mean enterprise software becomes easy.

It means the old source of value is being repriced.

The market is moving from:

> software is valuable because it is hard to build

toward:

> software is valuable when it can be trusted to act

That distinction is crucial.

In the AI era, generating behavior is no longer the hardest problem.

The harder problem is trusted execution.

Can this behavior be governed?
Can it preserve identity?
Can it respect tenant context?
Can it distinguish business truth from derived data?
Can it act through stable integration contracts?
Can it survive lifecycle change?
Can it be audited, constrained, stopped, and owned?

That is the new enterprise software question.

And it becomes even sharper when we move from copilots to agents.

---

## 1. The Question Has Changed

Most enterprise AI conversations started with a simple question:

> Can AI help users work faster?

That was the copilot question.

Can AI summarize?
Can AI explain?
Can AI generate code?
Can AI draft a response?
Can AI guide a user through a task?

Those questions still matter.

But they are no longer the frontier.

As SAP moves Joule from a copilot entry point toward an enterprise agent orchestration layer, the real question changes.

It is no longer only:

> Can AI answer correctly?

The harder question is:

> Can this agent safely execute inside an enterprise architecture?

A copilot assists.
An agent acts.

And once AI begins to act across business systems, data, workflows, identities, tenants, and lifecycle states, the architectural risk changes category.

The question is no longer about intelligence alone.

It is about boundaries.

---

## 2. Copilots Answer. Agents Act.

A copilot helps a user complete work.

It may explain a process, draft content, generate code, summarize a document, or suggest the next step.

The user remains the main execution boundary.

An enterprise agent is different.

An agent may:

* retrieve business data
* call APIs
* trigger workflows
* update records
* create follow-up tasks
* coordinate with other agents
* execute actions across SAP and non-SAP systems

That changes the architecture.

Because once an agent can act, every action raises questions that a normal chatbot does not have to answer:

* Who is the actor?
* Is the agent acting as the user, for the user, or as a system?
* Which tenant context applies?
* Which data is authoritative?
* Which integration contract governs the action?
* Can the action be audited?
* Can it be reversed?
* Can the agent be disabled, upgraded, or constrained without breaking the process?

These are not prompt-engineering questions.

They are architecture questions.

More precisely, they are boundary questions.

---

## 3. The Builder-Side Lesson from SAP Build Code and Joule

During my time working on SAP Build Code and early Joule integration, one lesson became very clear:

AI was never safe simply because it could generate or execute something.

It became useful only when its actions were routed through controlled, platform-aware capabilities.

Those capabilities understood:

* project structure
* CAP conventions
* BTP runtime assumptions
* service bindings
* destination patterns
* identity expectations
* deployment artifacts
* extension lifecycle constraints

In other words, the intelligence was not only in the model.

It was in the boundary around the model.

This distinction matters.

Inside a controlled builder environment, AI-powered actions can be safe because the system already understands what kind of project it is operating on, what artifacts are valid, what services are bound, which runtime assumptions apply, and which generation paths are tested.

That is very different from allowing an unconstrained model to call arbitrary tools against enterprise systems.

The lesson is simple:

> Enterprise AI is not safe because it is intelligent.
> It becomes safe when intelligence is constrained by platform knowledge, tested execution paths, and architectural boundaries.

That lesson now matters far beyond code generation.

It matters for enterprise agents.

---

## 4. The Repricing of Software: From Hard to Build to Hard to Trust

The current AI wave is forcing the enterprise software market to rethink what is actually scarce.

In the old model, much of the value came from the difficulty of producing working software behavior.

If a team could build the extension, configure the workflow, migrate the artifacts, connect the systems, and deliver the project, that capability itself carried high value.

AI is weakening that scarcity.

It does not eliminate the need for engineers, architects, consultants, or platforms.

But it compresses the value of many production tasks that used to justify large budgets:

* code generation
* API wrapping
* CRUD creation
* workflow scaffolding
* documentation
* test generation
* migration assistance
* configuration suggestions
* integration-flow creation
* report generation
* first-level troubleshooting

When these activities become faster and cheaper, enterprise software cannot rely only on the old claim:

> We can build it.

The new claim must be stronger:

> We can make it safe to trust.

This is the deeper shift.

AI makes software behavior easier to create.

But enterprise trust remains hard.

A generated application still needs ownership.
A generated workflow still needs accountability.
A generated integration still needs a contract.
A generated agent still needs execution boundaries.
A generated business action still needs governance.

That is why architecture does not become less important in the AI era.

It becomes more important.

Because as creation becomes cheaper, judgment becomes more valuable.

---

## 5. A Working Agent Demo Proves Very Little

One of the biggest traps in the agent era will be the demo.

A demo agent can look impressive very quickly.

It can retrieve a customer record.
It can update a sales order.
It can trigger a workflow.
It can generate a summary.
It can call an API.
It can coordinate several steps in a polished sequence.

But a working demo proves only one thing:

> The agent can produce current behavior under selected conditions.

It does not prove that the agent is enterprise-ready.

It does not prove:

* identity is preserved
* tenant context is correct
* business truth is respected
* integration contracts are governed
* lifecycle behavior is safe
* execution is isolated
* responsibility is auditable

This is the same pattern we have seen for years in SAP BTP extensions.

A system can work in the demo path and still be architecturally unsafe.

A CAP service can run.
A Work Zone tile can open.
A destination can connect.
A Postman request can succeed.
An API can return data.

But if identity, tenant, data, integration, lifecycle, and execution boundaries are not governed, current success is not architectural proof.

It is only local evidence.

Enterprise agents will magnify this problem.

Because agents do not only display information.

They act on it.

---

## 6. CRUD Is Easy. Trusted Action Is Not.

In the current wave of AI-assisted development, generating CRUD logic is becoming easy.

A model can create a data model, service handler, UI, API wrapper, workflow step, or integration script very quickly.

But enterprise software has never been hard because CRUD is hard.

It is hard because trusted action is hard.

Consider a simple question:

> Can this agent update an order?

Technically, the answer may be easy.

Generate an API call.
Pass the order ID.
Update the field.
Return success.

But architecturally, the real questions are much harder:

* Who is requesting the update?
* Is the agent acting as that user or as a system identity?
* Does the user have the right business role?
* Is the order inside the correct tenant context?
* Is the data coming from the system of record?
* Is the field allowed to be changed by this process?
* Is approval required?
* Is the change auditable?
* Can the action be reversed?
* What happens if the agent makes the right technical call for the wrong business reason?

That is not a CRUD problem.

That is an identity, tenant, data, integration, lifecycle, and execution problem.

This is why enterprise agents cannot be judged by whether they can perform an action.

They must be judged by whether they can perform the action within the correct boundaries.

---

## 7. The Agent Boundary Model

The Boundary Model was originally developed to explain why SAP BTP extensions fail long after they appear to work.

The core idea is simple:

> Systems do not usually fail because components are missing.
> They fail because boundaries are crossed, weakened, hidden, or left unowned.

In the agent era, this becomes even more important.

A traditional extension crosses boundaries because it connects systems.

An enterprise agent crosses boundaries because it acts across systems.

That difference makes the risk sharper.

For SAP enterprise agents, I would evaluate six boundaries:

1. Identity Boundary
2. Tenant Boundary
3. Data Boundary
4. Integration Boundary
5. Lifecycle Boundary
6. Execution Boundary

Each boundary answers a different question.

But together, they answer the only question that matters:

> Is this agent safe to execute?

---

## 8. Identity Boundary

The first question is:

> Who is the agent acting as?

This is the most important question in enterprise agent architecture.

An agent may act:

* as the user
* on behalf of the user
* as a delegated process
* as a technical system
* as another agent
* as a workflow participant

Each mode has different consequences.

If this is not explicit, the architecture becomes unsafe.

Identity Boundary questions include:

* Is user context preserved end to end?
* Is the agent allowed to act independently?
* Are scopes minimal?
* Are actions tied to business roles?
* Can the organization distinguish human intent from agent execution?
* Can the action be audited back to a responsible identity?
* Is technical identity being used to bypass business authorization?

The most dangerous failure is not that the agent cannot act.

The most dangerous failure is that the agent can act too broadly, under the wrong identity, while appearing successful.

In SAP landscapes, identity is never just login.

It is a chain.

Once agents enter the chain, they must not become a shortcut around it.

---

## 9. Tenant Boundary

The second question is:

> Which tenant does the agent belong to, and where is that tenant context enforced?

In SAP BTP, tenant context is not cosmetic.

It affects identity, routing, data isolation, subscriptions, lifecycle, authorizations, and system behavior.

An agent that ignores tenant context can create serious risk even if its logic is correct.

Tenant Boundary questions include:

* Where is tenant context derived?
* Is tenant context taken from the host, token, subscription, route, or data scope?
* Can the agent accidentally read or act across tenants?
* Are tools and destinations tenant-scoped?
* Can the same agent behavior run safely across multiple tenants?
* Can tenant-specific configuration drift over time?

Many agent demos are effectively single-tenant demos.

That is fine for exploration.

It is not enough for enterprise execution.

If an agent cannot explain its tenant context, it is not ready to act in a multi-tenant enterprise landscape.

---

## 10. Data Boundary

The third question is:

> Does the agent know what data is truth?

This may become one of the most dangerous areas in enterprise AI.

Agents are very good at composing information.

They can read from databases, documents, APIs, caches, vector stores, reports, data products, replicated tables, and user-provided context.

But enterprise systems do not treat all data equally.

Some data is authoritative.
Some data is derived.
Some data is cached.
Some data is historical.
Some data is incomplete.
Some data is only valid for a specific process step.

An agent that cannot distinguish these categories can easily create shadow truth.

Data Boundary questions include:

* What is the system of record?
* Is the agent reading authoritative data or derived data?
* Can the agent update business truth?
* Can it create new operational truth outside the governed system?
* Does it treat replicated data as canonical?
* Does it preserve the distinction between S/4 truth and extension data?
* Can its decisions be reconstructed from governed data sources?

This is where many AI systems will look impressive and become dangerous.

They will produce fluent answers from mixed data sources.

But fluent output is not the same as governed truth.

For enterprise agents, data grounding is not enough.

Truth ownership must be explicit.

---

## 11. Integration Boundary

The fourth question is:

> Through which contract does the agent act?

Agents will call tools.

That sounds simple.

But in enterprise architecture, tools are not just utilities.

They are integration surfaces.

An agent may call:

* SAP APIs
* BTP destinations
* Integration Suite flows
* workflow services
* S/4HANA APIs
* SuccessFactors APIs
* Ariba APIs
* third-party systems
* custom services
* MCP servers
* partner tools

Each call has an architectural meaning.

Integration Boundary questions include:

* Is the agent using governed APIs or direct endpoints?
* Are tools versioned and owned?
* Are destination semantics explicit?
* Is identity propagated correctly through the integration?
* Are non-SAP tools governed under the same policy model?
* Can the integration contract survive upgrades?
* Who owns the failure domain when the agent call produces the wrong business result?

Connectivity is not integration.

This was true before agents.

It becomes even more important with agents.

Because an agent can make connectivity look intelligent while hiding the fact that no stable integration contract exists.

---

## 12. Lifecycle Boundary

The fifth question is:

> Can this agent evolve safely?

Most teams will initially focus on agent creation.

But the harder problem is agent lifecycle.

Agents will change.

Prompts will change.
Tools will change.
Models will change.
Policies will change.
Business rules will change.
APIs will change.
Tenant-specific behavior will change.

That means every enterprise agent needs lifecycle governance.

Lifecycle Boundary questions include:

* Can the agent be versioned?
* Can behavior changes be tested before rollout?
* Can the agent be disabled per tenant or per process?
* Can old behavior be reconstructed?
* Can changes be rolled back?
* Can tool access be tightened without breaking hidden dependencies?
* Can the organization prove which version made which decision?

A static agent is easy.

A living agent inside an enterprise landscape is hard.

If an agent cannot be upgraded, constrained, audited, or rolled back, it is not enterprise-ready.

It is a temporary automation.

---

## 13. Execution Boundary

The sixth question is new and essential:

> What is the agent actually allowed to do?

This is the Execution Boundary.

Traditional applications execute through known code paths.

Agents introduce a different execution shape.

They may plan, choose tools, call APIs, invoke workflows, coordinate steps, and adapt based on intermediate results.

That flexibility is powerful.

It is also dangerous.

Execution Boundary questions include:

* What actions are allowed?
* What actions are prohibited?
* Are tool calls sandboxed?
* Are approvals required for high-impact actions?
* Can the agent write data or only propose changes?
* Can it trigger irreversible operations?
* Are execution logs complete?
* Can actions be replayed or inspected?
* Can the agent be stopped immediately?
* Can different tenants or roles receive different execution limits?

This is where enterprise agents become operationally serious.

An agent without an execution boundary is not enterprise automation.

It is uncontrolled execution with a natural-language interface.

---

## 14. Agent Announcements Are Not Agent Readiness

There is another reason this distinction matters.

Enterprise customers will not adopt agents simply because more agents exist.

A large number of agents may create excitement, but it does not automatically create trust, adoption, or business value.

For customers, the real question is not:

> How many agents are available?

The real question is:

> Which agents are safe enough to enter my business process?

This is why agent readiness will become more important than agent availability.

An agent that can demonstrate a task is not the same as an agent that can be trusted in production.

An agent that can call an API is not the same as an agent that can preserve identity, tenant context, data ownership, integration contracts, lifecycle control, and execution accountability.

This is also why enterprise AI monetization will not be driven only by model intelligence or agent count.

It will be driven by confidence.

Confidence that the agent acts under the right identity.

Confidence that it does not create shadow truth.

Confidence that it respects integration contracts.

Confidence that its behavior can be observed, constrained, audited, upgraded, and stopped.

In enterprise software, trust is not created by capability alone.

It is created by governed capability.

That is why agent readiness is not a secondary concern.

It is the condition for adoption.

---

## 15. The Partner Agent Question

This becomes especially important as partners begin building specialized agents.

If agent readiness is the condition for adoption, then partner-built agents will need more than functional demos.

They will need architectural trust.

Partner-built agents may become extremely valuable.

They can encode industry knowledge, customer-specific processes, domain expertise, and repeatable automation patterns.

But every partner agent raises a governance question:

> Why should this agent be trusted inside my enterprise process?

That trust cannot be based only on demo quality.

It must be based on architecture.

A customer should ask:

* What can this agent access?
* What can it change?
* Which identity does it use?
* Which tenant context does it preserve?
* Which data sources does it treat as authoritative?
* Which APIs does it call?
* How is it versioned?
* How is it audited?
* How can it be disabled?
* Who owns the outcome?

This is where agent readiness becomes a real enterprise discipline.

The market may eventually contain many agents.

But the enterprise will not need only more agents.

It will need a way to judge which agents are safe to execute.

---

## 16. Why Acceleration Raises the Governance Requirement

AI changes the speed of software creation.

That is obvious.

But the more important point is this:

> AI accelerates behavior faster than organizations can naturally evolve governance.

When software delivery moves slowly, weak governance may survive for a while.

When AI pushes delivery speed dramatically higher, the same governance model becomes dangerous.

Driving at 30 miles per hour and driving at 180 miles per hour are not the same activity.

The road may be the same.
The vehicle may be the same.
But the required discipline is completely different.

At higher speed, small mistakes become structural risks.

The same is true for enterprise AI.

If agents allow teams to create more actions, more workflows, more integrations, and more automation faster than before, then architecture judgment becomes more important, not less.

Acceleration does not reduce the need for governance.

It raises the cost of missing it.

---

## 17. Why SAP’s Direction Makes Architectural Sense

This is why SAP’s movement toward Joule-based agent orchestration makes sense.

Enterprise agents cannot simply be scattered across disconnected tools.

They need:

* business data grounding
* role-aware access
* governed execution
* process context
* system context
* integration contracts
* lifecycle management
* auditability
* platform control

A general-purpose model cannot provide all of that by itself.

The model may reason.

But the platform must constrain, route, verify, govern, and execute.

That is the deeper architectural meaning of Joule moving beyond copilot.

Joule is not only a chat interface.

It is becoming an orchestration entry point for enterprise AI actions.

And once that happens, the quality of the orchestration layer matters as much as the quality of the model.

Maybe more.

Because in enterprise systems, an intelligent action in the wrong boundary is still a wrong action.

---

## 18. The New Architecture Review Question

For years, SAP BTP extension reviews have asked questions like:

* Is the extension clean-core aligned?
* Is identity propagation correct?
* Is tenant isolation preserved?
* Is S/4 the system of record?
* Are integrations contract-based?
* Can the extension survive lifecycle change?

Those questions remain.

But the agent era adds a new review question:

> Is this agent safe to execute?

That question should become a standard part of enterprise AI governance.

It is not enough to ask whether the agent works.

It is not enough to ask whether the model is accurate.

It is not enough to ask whether the workflow completes.

The right question is whether the agent can act inside the enterprise landscape without weakening the boundaries that keep the system governable.

That is the real test.

---

## 19. A Simple Agent Readiness Standard

A SAP enterprise agent is not ready because it can complete a task.

It is ready only when it can preserve the boundaries required for safe execution.

At minimum, a serious agent readiness review should answer:

### Identity

Can the agent preserve user, role, authorization, and accountability context?

### Tenant

Can the agent act without collapsing tenant isolation or routing assumptions?

### Data

Can the agent distinguish business truth from derived, cached, replicated, or incomplete data?

### Integration

Can the agent act through governed contracts rather than direct shortcuts?

### Lifecycle

Can the agent be versioned, tested, upgraded, disabled, audited, and rolled back?

### Execution

Can the agent’s actions be constrained, isolated, logged, approved, and stopped?

If these cannot be answered, the agent may still be useful.

But it is not yet enterprise-safe.

---

## 20. The Boundary Model Becomes More Important, Not Less

Some people may assume that as AI becomes more powerful, architecture becomes less important.

I believe the opposite is true.

The more powerful agents become, the more important boundaries become.

Because the risk is no longer only that software may be wrong.

The risk is that software may act.

It may act quickly.
It may act across systems.
It may act under unclear identity.
It may act on mixed data.
It may act through weak integration contracts.
It may act in ways that are hard to reconstruct later.

That is why the Boundary Model becomes more important in the agent era.

It gives architects a way to ask:

* Which boundary does this agent cross?
* Which boundary does it preserve?
* Which boundary does it weaken?
* Which boundary does it hide?
* Which boundary does no one own?

Those are the questions that decide whether enterprise AI remains governable.

---

## 21. The New Scarcity Is Judgment

The AI era will reduce the value of many things that used to be scarce.

It will reduce the scarcity of code.
It will reduce the scarcity of prototypes.
It will reduce the scarcity of first drafts.
It will reduce the scarcity of basic integrations.
It will reduce the scarcity of technical implementation paths.

But it will increase the value of something else:

judgment.

Judgment about what should not be automated.
Judgment about which identity may act.
Judgment about which data may be trusted.
Judgment about which integration path is legitimate.
Judgment about which lifecycle risk is acceptable.
Judgment about where execution must stop.

This is why the role of architecture changes.

Architecture is no longer only the design of systems.

It becomes the governance of accelerated action.

That is the real enterprise AI problem.

---

## 22. Final Thought: Enterprise AI Becomes Real at the Boundary Layer

The future of enterprise AI will not be decided only by model intelligence.

It will be decided by whether intelligent actions can be made safe, governed, auditable, and lifecycle-aware.

Copilots made AI visible.

Agents will make AI operational.

But orchestration is what will make AI enterprise-grade.

And orchestration only works when boundaries are explicit.

The enterprise market will not ultimately reward agents for existing.

It will reward agents that can be trusted to execute.

So the defining question of the next phase is not:

> How smart is the agent?

It is:

> Is this agent safe to execute?

Because enterprise AI becomes real not when agents can act.

It becomes real when their actions are governable.

That is where architecture begins.

And that is where the Boundary Model matters most.

---

**Jiandong Pei**
