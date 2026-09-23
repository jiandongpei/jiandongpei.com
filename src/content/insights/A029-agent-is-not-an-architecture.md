---
articleId: A029
title: "“Agent” Is Not an Architecture"
subtitle: What DeepSeek Harness, Codex, Claude Code, and SAP Reveal About the Emerging Enterprise Agent Stack
published: "2026-09-01"
boundary: Execution
audience: Enterprise Architecture
symptom: The agent label hides the architecture requirements
featured: true
source: LinkedIn
sourceUrl: https://www.linkedin.com/pulse/agent-architecture-what-deepseek-harness-codex-claude-jiandong-pei-3mvyc/
summary: An agent label is not an architecture decision; the runtime, enterprise control plane, and completion model must match the system's execution openness and business consequence.
tags: [sap-btp, enterprise-ai, agents, agent-harness, execution, governance, enterprise-architecture, boundary-model]
---

# “Agent” Is Not an Architecture

## What DeepSeek Harness, Codex, Claude Code, and SAP Reveal About the Emerging Enterprise Agent Stack

**By Jiandong Pei**<br>
*Enterprise AI and Cloud Platform Architect*

---

An HR policy assistant and Claude Code are both called agents.

Architecturally, that label tells us almost nothing.

The HR assistant may search a bounded knowledge base, call two approved business APIs, and operate inside a largely predefined workflow.

Claude Code may inspect an unfamiliar repository, read and modify files, execute shell commands, invoke compilers and tests, observe failures, revise its plan, and continue working across many steps.

The coding agent typically places greater demands on runtime engineering.

But that does not necessarily make the enterprise agent simpler.

A payroll agent may have only three tools and a four-step plan, yet still expose sensitive employee data, alter compensation, trigger legal obligations, and create records that cannot simply be undone.

One system may require a sophisticated execution harness.

The other may require stronger identity, authorization, workflow, business validation, audit, and accountability.

Some agents require both.

This is the problem with the word **agent**:

> **It describes a behavioral category. It does not define an architecture.**

---

## 1. The Agent Label Has Become Too Broad

Many current discussions place very different systems under the same name.

A bounded domain agent might consist of:

- a model;
- retrieval-augmented generation;
- several business tools;
- and a largely predefined workflow.

Its task may be narrow:

- explain an HR policy;
- classify a support case;
- summarize an order exception;
- retrieve a supplier record;
- recommend the next workflow step.

Its action space is relatively small.

Its planning horizon is short.

Its state may live only for one request or one workflow instance.

Its tools are known in advance.

Its autonomy is intentionally constrained.

A coding or general-purpose execution agent operates differently.

It may have access to:

- the file system;
- a shell;
- source repositories and Git;
- compilers and test runners;
- package managers;
- web tools;
- MCP servers;
- and other agents.

The environment is open-ended.

The next step is not always known.

The agent may need to explore, act, observe, fail, revise, and recover repeatedly.

Its runtime must therefore manage much more than a model request.

This does not mean one should be called a “real agent” and the other should not.

Both can legitimately be agents.

It means that the term alone is not precise enough for architecture selection.

Once a team has decided that a problem genuinely needs agentic behavior, a second question begins:

> **What kind of operating envelope will this agent have?**

---

## 2. Agent Complexity Is Not a Single Ladder

Agent complexity is often described as though it increases along one path:

> Chatbot → RAG → Tool Calling → Agent → Multi-Agent → Autonomous Agent

That model is too simple.

I find it more useful to assess agents along two largely independent dimensions.

### Dimension One: Execution Openness

Execution openness describes how difficult the agent is to run reliably.

It includes:

- the size of its action space;
- the number and variety of available tools;
- the uncertainty of the environment;
- the length of the planning horizon;
- how often it must observe and re-plan;
- how long state must survive;
- whether it executes code;
- whether it creates subagents;
- whether it must recover after interruption;
- whether it needs sandboxing, checkpointing, or replay.

Coding agents typically score high on this dimension.

### Dimension Two: Business Consequence

Business consequence describes how difficult the agent is to authorize, govern, and hold accountable.

It includes:

- whether the agent produces side effects;
- whether it modifies a system of record;
- whose authority it uses;
- whether the action is reversible;
- whether financial, HR, legal, privacy, or compliance obligations are involved;
- whether an incorrect action can be compensated;
- what evidence must be retained;
- who remains accountable for the outcome.

Enterprise domain agents often score high on this dimension.

Together, these dimensions create four broad operating envelopes.

### 2.1 Bounded Execution + Lower Business Consequence

Examples include:

- read-only RAG assistants;
- internal policy assistants;
- document summarization agents.

These agents usually have a small action space, a short planning horizon, and limited side effects.

A relatively lightweight agent architecture may be enough: authorized retrieval, a small tool set, basic session handling, and evaluation.

### 2.2 Bounded Execution + Higher Business Consequence

Examples include:

- payroll change agents;
- procurement approval agents;
- HR execution agents.

The runtime itself may be relatively simple.

But identity, delegated authority, workflow containment, approval, auditability, business validation, and accountability become much more important.

In this envelope, deterministic process controls may matter more than an advanced autonomous planner.

### 2.3 Open Execution + Lower Business Consequence

Examples include:

- a local coding agent;
- an isolated research agent;
- an agent operating in a disposable sandbox.

These agents may require sophisticated runtime capabilities—sandboxing, session management, context management, checkpointing, recovery, and cost limits—even when their direct business consequences are intentionally contained.

### 2.4 Open Execution + Higher Business Consequence

Examples include:

- a production remediation agent;
- a coding agent with deployment authority;
- an autonomous cross-system enterprise agent.

This is the most demanding envelope.

It may require the full stack:

- a full agent harness;
- an enterprise control plane;
- durable workflow and business state;
- reconciliation and compensation;
- independent verification;
- and incident containment.

These are not permanent product categories.

They describe an agent’s operating envelope in a particular deployment context.

A local coding agent may have high runtime complexity but relatively limited business consequence. Give the same agent production credentials, CI/CD access, and database migration authority, and its governance requirements change dramatically.

The same is true for domain agents. An HR policy assistant may be tightly bounded and largely read-only, while an HR agent allowed to change employee compensation may have a simple runtime but carry significant business, compliance, and accountability requirements.

> **Agent architecture should scale with execution openness and business consequence—not with the label “agent.”**

---

## 3. Coding Agents Made the Harness Visible

The rise of coding agents has made one architectural fact difficult to ignore:

> **A model is not an agent runtime.**

A model can reason about the next action.

It cannot, by itself, provide:

- durable session state;
- tool registration;
- execution isolation;
- filesystem controls;
- approval handling;
- context compaction;
- retry behavior;
- recovery;
- subagent scheduling;
- cancellation;
- telemetry;
- lifecycle management.

Those responsibilities belong to the system around the model.

Terminology still varies, but in this article I use **agent harness** to mean the execution system that turns model decisions into continued, bounded, and observable work.

A simplified loop looks like this:

```text
Goal
  ↓
Context Assembly
  ↓
Model Decision
  ↓
Tool Selection
  ↓
Policy / Approval
  ↓
Execution
  ↓
Observation
  ↓
State Update
  ↓
Re-plan or Verify
```

The model proposes the next step.

The harness keeps the work coherent, constrained, recoverable, and inspectable.

This distinction matters even when the visible product appears to be one AI assistant.

Behind a serious agent is an execution system.

---

## 4. What DeepSeek Harness Gets Right

DeepSeek Harness is useful not because it is already the definitive enterprise agent platform, but because it makes the runtime structure unusually inspectable.

Its central formulation is:

> **Agent = Model + Harness**

More importantly, it turns that formulation into an explicit architecture.

### A Composable Runtime

[DeepSeek Harness](https://www.deepseek.com/harness/en/) defines models, tools, skills, sessions, sandboxes, storage, loops, scheduling, and the user interface as composable plugins.

Developers can replace or extend individual capabilities without rewriting the central agent loop.

That matters because a real platform rarely wants one fixed implementation of everything.

It may need:

- different models;
- different persistence backends;
- different sandboxes;
- different tool gateways;
- different policy engines;
- different deployment environments;
- different telemetry systems.

A modular harness creates the seams through which those capabilities can be integrated.

### The Session as an Execution Record

DeepSeek Harness also treats a session as more than conversational history.

Its [session model](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/session) is an append-only log of typed events and the source from which model history is derived. Persistence, replay, forking, and interrupted-run recovery operate over the same event stream.

This creates a useful distinction:

**Chat history** tells us what was said.

**Execution history** tells us what the agent saw, what it decided, what it called, what happened, and how the run evolved.

That is much closer to an execution runtime than to a chat application.

### Governable Tool-Execution Seams

DeepSeek Harness also exposes a clear [tool-execution pipeline](https://deepseek-harness.github.io/deepseek-harness/en/reference/tool-execution-pipeline):

```text
tools/pre-execute
        ↓
guards and approval
        ↓
tools/execute
        ↓
tools/post-execute
        ↓
tools/result
```

Policy, sandboxing, timeouts, metrics, approval, result transformation, and final observation can be attached around execution without rewriting the agent loop.

This is exactly the kind of technical seam an enterprise needs.

It provides a place to ask:

- Allow?
- Deny?
- Require approval?
- Restrict?
- Record?

But it does not, by itself, define the enterprise meaning behind those decisions.

A runtime can provide the enforcement point.

It does not automatically know:

- which procurement role may create a purchase order;
- which company code is in scope;
- whether an amount requires two approvals;
- whether the requester may also be the approver;
- which business object owns the authoritative state;
- who is accountable for the resulting transaction.

That is the boundary between an agent harness and an enterprise agent platform.

DeepSeek Harness is therefore an instructive **runtime reference implementation**, not a drop-in enterprise production platform.

Its own [safety documentation](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md) describes it as experimental developer-preview software that has not undergone a security audit and should not be treated as secure or production-ready.

That limitation does not reduce its architectural value.

It clarifies its role.

---

## 5. Codex and Claude Code Show the Same Convergence

DeepSeek is not alone in moving agent architecture toward an explicit harness layer.

OpenAI describes the [Codex harness](https://developers.openai.com/blog/codex-as-a-platform) as responsible for conversation state, streamed execution, tools, configured sandbox and approval policies, and continued work across turns.

Codex app-server exposes those capabilities through threads, turns, events, and approval requests so other products can build on the runtime rather than reimplement it.

Anthropic follows a similar direction.

The [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) exposes the agent loop and context-management system used by Claude Code, together with built-in tools, hooks, subagents, MCP integration, permissions, resumable sessions, checkpointing, cost tracking, and observability.

The implementations differ.

Their maturity, abstraction boundaries, and commercial models differ.

But they point toward the same conclusion:

> **Agent runtime is becoming a first-class software layer.**

A serious agent is no longer simply:

> Prompt → Model → Function Call

It increasingly requires:

- context;
- state;
- tools;
- sandboxing;
- permissions;
- sessions;
- hooks;
- recovery;
- subagents;
- observability.

Coding agents exposed this requirement early because their environments are so open.

Enterprise agents will need many of the same capabilities whenever their execution becomes long-running, adaptive, or cross-system.

But runtime is only one side of the architecture.

---

## 6. A Great Harness Is Still Not an Enterprise Platform

A harness can make an agent capable.

It does not automatically make the agent a legitimate and accountable enterprise actor.

Consider a tool call proposed by a model:

```json
{
  "tool": "create_purchase_order",
  "supplier": "S1001",
  "amount": 530000,
  "companyCode": "CN01"
}
```

A mature harness may be able to:

- validate the schema;
- pause for approval;
- isolate execution;
- record the call;
- retry after technical failure;
- restore the session;
- present the result to the model.

But the enterprise must still answer:

- Who initiated this action?
- Which agent instance is acting?
- On whose behalf?
- What authority was delegated?
- Is that authority still valid now?
- May this user create a purchase order for company code CN01?
- Does ¥530,000 require additional approval?
- Does this violate segregation of duties?
- Which purchasing organization is valid?
- Is the supplier currently blocked?
- Which system owns the final transaction?
- Who is responsible if the action is wrong?

These are not generic runtime questions.

They require enterprise context.

They depend on identity, organization, business roles, tenant, policy, process, data semantics, current system-of-record state, approval structure, lifecycle, and accountability.

A generic harness can expose enforcement hooks for these decisions.

It cannot invent the enterprise constitution those hooks must enforce.

This is where SAP’s architecture becomes especially relevant.

---

## 7. What SAP’s North Star Adds

SAP approaches agent architecture from the opposite direction.

DeepSeek Harness begins with runtime mechanics and grows outward.

SAP begins with enterprise systems, identities, processes, business semantics, and governance—and then places the agent runtime inside them.

SAP’s [AI-native North Star Platform Layer](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/platform-layer) describes a managed agent runtime on SAP BTP with security, observability, tenant isolation, sandboxing, persistent memory, reusable skills, container-hosted execution, and continuous evaluation.

Its architectural principle is concise:

> **The model reasons. The harness governs.**

But SAP does not stop at the harness.

Its [integration, security, ethics, and governance architecture](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/integration-security-ethics-governance) also describes:

- agents as first-class principals with their own identity;
- scoped and delegated authorization;
- a governed gateway controlling system and tool access;
- parameter-level policy enforcement;
- human-in-the-loop routing;
- MCP for tool integration and A2A for agent collaboration;
- business context grounded in enterprise data and semantics;
- lifecycle and portfolio governance;
- continued authority of systems of record.

This is why SAP’s architecture is more comprehensive than a standalone harness.

It is answering a larger question.

DeepSeek Harness primarily asks:

> **How can an agent continue working in a real environment?**

SAP also asks:

> **How can that agent become a legitimate enterprise actor?**

SAP’s work with NVIDIA makes the distinction especially clear.

SAP describes [OpenShell](https://news.sap.com/2026/05/secure-ai-agents-how-sap-and-nvidia-co-define-enterprise-grade-agent-execution/) as helping answer:

> “Can this action safely execute?”

while the Joule Studio runtime and enterprise harness must also answer:

> “Should this action happen at all?”

The second question includes business-aware policy, identity, access control, observability, auditability, deployment, and lifecycle governance.

That is the difference between technical capability and business authority.

A sandbox may prevent an agent from accessing an unauthorized filesystem path.

It cannot decide whether a finance agent may release a payment.

A generic approval prompt can pause execution.

It cannot define the company’s approval hierarchy or segregation-of-duties rules.

A tool registry can describe an API.

It cannot, by itself, understand the business meaning of the object the API changes.

SAP’s major contribution is to make those enterprise semantics part of the agent architecture.

That does not mean the entire North Star is already delivered as mature product functionality.

SAP explicitly describes the [AI-native North Star](https://architecture.learning.sap.com/docs/tags/ai-native-north-star) as a target state and direction of travel—not a product specification, roadmap, or promise of delivery.

It is best understood as an enterprise architecture blueprint.

Not as proof that every runtime and governance problem has already been solved.

SAP itself notes that integration remains a major challenge in enterprise AI and that governance and compliance are not yet fully solved across industries.

That acknowledgment strengthens the architecture rather than weakening it.

---

## 8. The Missing Layer Between Action and Business Completion

DeepSeek Harness makes the execution layer visible.

SAP makes the enterprise control layer visible.

But a complete architecture still needs another layer:

> **Business Completion and Truth.**

Suppose an agent has been authorized to create a purchase order.

The harness sends the tool call.

The request times out.

What happened?

There are several possibilities:

1. The request never reached S/4HANA.
2. The request reached S/4HANA, but the transaction failed.
3. The transaction succeeded, but the response was lost.
4. The transaction succeeded partially, and a downstream step failed.
5. The purchase order was created, but its state does not satisfy the business objective.

The harness may know that a call was initiated.

The enterprise control plane may know that the agent was authorized.

Neither fact proves that the correct purchase order now exists.

Blindly retrying the call may create a duplicate.

Marking the agent task as successful may conceal an incomplete business state.

Restoring the session may restore technical progress without restoring valid authority.

A complete enterprise architecture therefore needs several additional mechanisms.

### Durable Workflow State

The business process must survive restarts, delays, approvals, retries, and handoffs without depending on the model’s context window.

When a run resumes, identity, authority, approval, policy, and relevant business state may need to be revalidated.

A durable checkpoint should not preserve expired authority.

### Idempotency and Reconciliation

A timed-out write must be reconciled against the system of record before it is retried.

The important question is not:

> Did the agent receive a response?

It is:

> What state now exists in the authoritative system?

The operation may require an idempotency key, a source-of-truth query, and an explicit reconciliation strategy.

### Compensation

Many enterprise actions cannot be rolled back as one database transaction.

If an agent:

> creates an order → reserves inventory → initiates payment → fails during shipment creation

recovery may require a sequence of compensating business actions.

There is no universal `undo()`.

### Independent Verification

The agent should not be the sole authority on whether its task succeeded.

```text
Agent:
“I completed the task.”

Same Agent:
“I checked, and I agree with myself.”
```

is not strong verification.

Completion should be established through explicit postconditions:

- the purchase order exists in S/4HANA;
- the supplier, amount, and company code are correct;
- required approvals are present;
- no unresolved policy violation remains;
- downstream workflow state is valid.

For high-impact processes, verification should use deterministic checks, authoritative system state, or an independent verifier.

### Responsibility Evidence

Observability tells us what happened inside the runtime.

Responsibility evidence must connect the business outcome back to:

- the initiating intent;
- the human or business principal;
- the acting agent;
- the delegation path;
- the policy decision;
- the approval;
- the tool invocation;
- the resulting system-of-record object;
- the final verification result.

This leads to an essential distinction:

> **Agent completion is not business completion.**

The agent may have finished reasoning.

The harness may have finished executing.

The business objective may still be incomplete, duplicated, invalid, unauthorized after resumption, or unreconciled.

---

## 9. A Three-Plane Enterprise Agent Architecture

Bringing these ideas together produces a clearer architecture.

### Plane One: Agent Execution Plane

This is where DeepSeek Harness, Codex, and Claude Code provide strong engineering references.

It contains:

- model access;
- the agent loop;
- planning and re-planning;
- context assembly;
- session state;
- tool registration and execution;
- sandboxing;
- subagents;
- recovery;
- telemetry.

It answers:

> **How does the agent continue working?**

### Plane Two: Enterprise Control Plane

This is where SAP’s North Star is especially strong.

It contains:

- agent identity;
- delegated authority;
- tenant and organization context;
- policy enforcement;
- business roles;
- approval;
- segregation of duties;
- governed tool access;
- data and context authorization;
- lifecycle governance;
- agent portfolio ownership.

It answers:

> **May this agent perform this action, here and now, on behalf of this principal?**

### Plane Three: Business Completion and Truth Plane

This plane connects execution to an actual business outcome.

It contains:

- durable workflow;
- systems of record;
- authoritative business state;
- idempotency;
- reconciliation;
- compensation;
- postconditions;
- independent verification;
- responsibility evidence.

It answers:

> **What actually happened, and was the business objective truly completed?**

Together, the three planes create a full responsibility path:

```text
Human or Business Intent
            ↓
Enterprise Control Plane
            ↓
Agent Execution Plane
            ↓
Governed Tool or Workflow
            ↓
Business Completion and Truth Plane
            ↓
Verified Business Outcome
```

Lifecycle management, evaluation, observability, cost control, supply-chain security, and incident response cut across all three planes.

The relationship can be summarized simply:

> **The model proposes.<br>
> The harness executes.<br>
> The enterprise control plane authorizes.<br>
> The system of record establishes truth.<br>
> The verifier determines completion.**

No single layer should claim all five responsibilities.

---

## 10. What This Means for SAP Extension Architecture

From a BTP extension perspective, agent development is not replacing extension architecture.

It is adding a probabilistic execution layer on top of it.

A healthy responsibility model still looks like this:

- **Core systems** own canonical business truth.
- **Extensions and governed services** own stable enterprise capabilities.
- **Workflows** own durable, repeatable, and accountable process state.
- **Agents** interpret context and select or coordinate actions under policy.
- **Assistants** provide the user interaction surface.

The agent should invoke governed capabilities.

It should not hide stable business logic inside a prompt.

The agent may participate in a workflow.

It should not replace workflow where repeatability, approval, SLA, evidence, or compensation are required.

The agent may act on business truth.

Its conversation history and memory should not become business truth.

This is why BTP extension experience remains highly relevant to the agent era.

The same foundational responsibilities reappear in a new form:

- IAS and XSUAA identity become part of agent identity and delegation.
- Destinations and Integration Suite become part of governed tool access.
- CAP services become stable business capabilities for agents to invoke.
- SAP Build Process Automation becomes a deterministic process boundary.
- Cloud Foundry and Kyma remain execution and isolation environments for pro-code agents.
- Transport, versioning, and landscape management become part of agent lifecycle governance.
- S/4HANA and other business applications remain systems of record.

Having worked on BTP extension and builder-side platform responsibilities, one lesson stands out:

Generating behavior was never the whole system.

A generated CAP service became enterprise-ready only when identity, service binding, destinations, multitenancy, integration, deployment, and lifecycle responsibilities were correctly aligned.

The same lesson applies even more strongly to agents.

A model can generate a plan.

A tool API can execute an action.

But enterprise readiness lives in the architecture around them.

> **Agent development does not remove boundaries. It makes execution cross those boundaries dynamically.**

The more dynamic the agent becomes, the more explicit and enforceable the boundaries must be.

---

## 11. The Real Enterprise Agent Question

The industry often asks:

> Which model is best?

Then:

> Which agent framework is best?

Then:

> Which protocol should we use—MCP or A2A?

Those questions matter.

But they come after a more important one:

> **What kind of agent are we allowing this system to become?**

Before selecting the technology, the architecture should establish:

- How autonomous is the agent?
- How open is its action space?
- How long can it operate?
- What state must survive?
- Can it execute code?
- What can it change?
- Whose authority does it carry?
- Can its actions be reversed or compensated?
- What business truth does it depend on?
- Who determines that the task is complete?
- Who remains accountable?

A bounded domain agent may need a relatively simple runtime and a strong deterministic workflow boundary.

A coding agent may need a sophisticated harness and a strong sandbox.

An enterprise operations agent may need both—plus a durable completion and verification layer that neither the model nor the harness is allowed to replace.

Technology selection should follow the operating envelope.

Not the other way around.

---

## Closing — An Agent Is an Operating Envelope

DeepSeek Harness makes the runtime visible.

Codex and Claude Code show that harness engineering is becoming an independent platform discipline.

SAP’s North Star makes the enterprise boundary visible: identity, delegation, business context, process, governed integration, lifecycle, and accountability.

Each perspective is important.

None should be mistaken for the complete architecture by itself.

A capable harness does not automatically make an agent enterprise-grade.

An enterprise control plane does not automatically guarantee durable business completion.

A successful tool call does not automatically establish business truth.

And an agent saying “done” does not prove that the task is complete.

The future enterprise agent stack must connect three things:

> **Reliable execution<br>
> + Legitimate authority<br>
> + Verified business outcome**

That is why “agent” is not an architecture.

It is only the beginning of the architecture conversation.

The defining question is not whether a system can be called an agent.

It is whether its execution openness and business consequences are matched by the right runtime, the right control plane, and the right completion model.

Because the enterprise will not ultimately trust the agent that appears most autonomous.

It will trust the agent whose operating envelope is clearest—and whose boundaries remain enforceable when the model, tools, workflows, identities, and business conditions change.

---

**Jiandong Pei**

---

## Source Notes

The factual descriptions of the technology directions in this article were checked against current first-party materials:

- **DeepSeek Harness:** [overview](https://www.deepseek.com/harness/en/), [session architecture](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/session), [tool-execution pipeline](https://deepseek-harness.github.io/deepseek-harness/en/reference/tool-execution-pipeline), and [safety status](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md).
- **OpenAI Codex:** [Codex as a platform: build on the open agent harness](https://developers.openai.com/blog/codex-as-a-platform).
- **Anthropic Claude:** [Claude Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview).
- **SAP:** [AI-native North Star Platform Layer](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/platform-layer), [Integration, Security, Ethics & Governance](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/integration-security-ethics-governance), [SAP and NVIDIA on enterprise-grade agent execution](https://news.sap.com/2026/05/secure-ai-agents-how-sap-and-nvidia-co-define-enterprise-grade-agent-execution/), and the [North Star scope statement](https://architecture.learning.sap.com/docs/tags/ai-native-north-star).
