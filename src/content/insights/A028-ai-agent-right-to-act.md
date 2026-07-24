---
articleId: A028
title: Your AI Agent Had a Valid Token. Did It Have the Right to Act?
subtitle: The Missing Responsibility Architecture Between Human Intent, Delegated Authority, Tool Execution, and Business Consequences
published: "2026-07-24"
boundary: Responsibility
audience: Enterprise Architecture
symptom: Valid credentials do not prove business authority
featured: true
source: LinkedIn
sourceUrl: https://www.linkedin.com/pulse/your-ai-agent-had-valid-token-did-have-right-act-jiandong-pei-0w5fc/
summary: Agent execution needs a bounded, execution-time, reconstructible, and revocable responsibility path from human intent to business consequence; a valid token alone does not prove the right to act.
tags: [sap-btp, enterprise-ai, agents, authorization, responsibility, delegated-authority, boundary-model]
---

# Your AI Agent Had a Valid Token. Did It Have the Right to Act?

## The Missing Responsibility Architecture Between Human Intent, Delegated Authority, Tool Execution, and Business Consequences
---

## 1. The Action Succeeded. The Proof Did Not.

An AI agent creates a sales quotation in SAP S/4HANA.

The API call succeeds.

The OAuth token is valid.

The user previously said “yes.”

The audit log records the technical account that performed the write.

Every component appears to have worked.

But was the action authorized?

Did the user approve this exact customer, material, quantity, payment term, price, and discount?

Was the user still authorized when the quotation was created, or only when the conversation began?

Which agent instance acted, and was it acting for the user, for Joule, for a workflow, or under its own technical identity?

If one agent delegated part of the task to another, did the downstream agent receive narrower authority—or a broader credential?

If the model, prompt, policy, or tool changed after the user’s confirmation, was the original approval still valid?

If the task was canceled, did the cancellation stop the model call, child agent, queued message, webhook, and final business write?

And if the quotation is challenged three months later, can the enterprise reconstruct why that exact action had the right to happen?

These questions expose a gap that is easy to miss in enterprise agent architecture.

A valid token proves that a technical caller passed an access-control check.

It does not, by itself, prove that the resulting business action was legitimate.

> **VALID TOKEN ≠ RIGHT TO ACT**

This is not an argument that tokens, OAuth, RBAC, logging, or human confirmation are unimportant.

They are necessary.

But an enterprise agent can satisfy all of them locally and still fail to preserve end-to-end responsibility.

That is the real problem.

---

## 2. Technical Permission Is Not Business Authority

Enterprise systems often compress several different questions into the word “authorization.”

They should be separated.

**Authentication** asks:

> Who or what presented these credentials?

**Technical authorization** asks:

> May this identity call this API, skill, or tool?

**Business authority** asks:

> May this exact action be performed now, on this business object, with these parameters, for this purpose, through this delegation path?

**Accountability** asks:

> Who owns the resulting business consequence?

Traditional software can already fail when these questions are confused.

Agents make the confusion more dangerous because they introduce planning, dynamic tool selection, delegated execution, long-running state, model-driven interpretation, and multi-agent collaboration between human intent and the final system write.

A user may be authorized to request a quotation.

That does not mean an agent may select any discount.

An agent may be authorized to use a quotation tool.

That does not mean it may use the tool for every customer, sales organization, amount, or payment condition.

A service account may be authorized to write to S/4HANA.

That does not prove the user, agent, approval, and business context behind this specific write were valid.

The missing concept is not another token.

It is a **responsibility path**.

For every business-impacting action, the enterprise must preserve a responsibility path that is:

- bounded;
- valid at execution time;
- reconstructible;
- and revocable.

If any one of these properties disappears, technical execution may continue while business authority has already failed.

---

## 3. The Responsibility Path

A production agent action should not be understood as a direct jump from user prompt to tool call.

It is a chain:

```text
Human Intent
    ↓
Delegated Authority
    ↓
Agent Instance
    ↓
Execution-Time Policy
    ↓
Tool Invocation
    ↓
System-of-Record Change
```

Across the entire chain, three controls must remain active:

```text
Durable State  |  Responsibility Evidence  |  Cascading Revocation
```

Each step answers a different question.

**Human Intent** identifies the initiating goal, not merely the last message in a chat.

**Delegated Authority** defines what power was transferred, by whom, for how long, and under what constraints.

**Agent Instance** identifies the actual non-human actor, rather than hiding every execution behind one shared service account.

**Execution-Time Policy** verifies that the action remains permitted when it is about to produce an effect—not only when planning began.

**Tool Invocation** constrains the specific action, object, parameters, purpose, and approval requirements.

**System-of-Record Change** records the actual business consequence in the system that owns the truth.

This path must also preserve several identities at the same time:

```text
subject   = the person or business principal being represented
actor     = the agent instance currently executing
delegator = the assistant, workflow, or upstream agent that delegated the task
tenant    = the organizational and data boundary
task      = the bounded unit of work
authority = the effective permission for this task
```

Collapsing these into a single `userId` or service account may simplify a demo.

It destroys information the enterprise later needs to answer who intended, who delegated, who acted, which authority applied, and who remains accountable.

### Bounded

Authority must not silently expand as a task moves across agents and tools.

A downstream agent should receive no more authority than the intersection of:

- the original user’s authority;
- the upstream agent’s delegated authority;
- the downstream agent’s own permitted role;
- the policy for the current task;
- and the tool’s business constraints.

Delegation should attenuate authority.

It should not create it.

### Valid at Execution Time

An agent may plan an action at 10:00 and execute it at 10:20.

During those twenty minutes:

- the user’s role may change;
- the customer may be blocked;
- the order value may cross an approval threshold;
- the quotation inputs may change;
- the policy may be updated;
- the task may be canceled;
- or a fraud-control signal may appear.

Authorization at task creation is therefore not enough.

The system must evaluate effective authority at the point of business effect.

### Reconstructible

An audit log that says `technical-user-42 called POST /quotation` is useful operational telemetry.

It is not a complete responsibility record.

The enterprise must be able to reconstruct:

- the initiating intent;
- the subject, actor, and delegation chain;
- the exact approved parameters;
- the policies evaluated;
- the model, prompt, tool, and workflow versions;
- the business data used;
- the resulting system-of-record object;
- and any later correction or compensation.

### Revocable

Authority must not remain alive simply because execution has already spread across a task graph.

Revocation must reach the agent, child agents, credentials, queue messages, scheduled callbacks, checkpoints, webhooks, and in-flight or retried tool calls.

A task state marked `canceled` is not proof that business authority has been withdrawn.

It is only a status unless the execution graph can no longer create effects.

---

## 4. Why Traditional Architecture Reviews Miss the Gap

The responsibility path crosses too many organizational boundaries.

The IAM team verifies the token.

The agent team verifies the prompt and tool schema.

The application team verifies the API.

The workflow team verifies that a confirmation step occurred.

The operations team verifies that logs exist.

The business team verifies that the result looks reasonable.

Every team can be locally correct.

The end-to-end action can still be unjustified.

This is a familiar enterprise architecture problem:

> Every component is green, but the system is not governed.

Agents intensify it because their behavior is not defined by code alone.

It may depend on:

- model version;
- system prompt;
- retrieved context;
- tool descriptions;
- policy;
- memory;
- workflow state;
- approval state;
- external data;
- and the behavior of other agents.

This also creates a particularly dangerous architecture: the **technical–business hybrid agent**.

A technical agent may modify code, configuration, deployment, tool definitions, or runtime policy.

A business agent may create quotations, release purchases, change master data, block payments, or initiate HR actions.

A hybrid agent can change the environment and then act through the environment it changed.

> The most dangerous agent is not necessarily the one with the broadest permissions. It is the one that can change the execution environment and then use that changed environment to produce business consequences.

This is why separation of duties cannot be replaced by a good prompt.

The actor that proposes or creates a capability should not automatically approve it, publish it, widen its permissions, and use it for high-impact execution.

The control must exist outside the agent’s own reasoning loop.

---

## 5. Seven Controls a Production Agent Must Preserve

The responsibility path becomes practical when it is translated into seven production controls.

### 1. Identity Must Be a Chain, Not a Label

The final system should not see only a human user or only a service account.

It should preserve both the represented subject and the acting agent.

At minimum, the execution context should distinguish:

- subject;
- actor;
- delegator;
- tenant;
- task;
- and purpose.

This allows the enterprise to distinguish:

- a user acting directly;
- an agent acting on behalf of a user;
- an agent acting under application authority;
- a workflow-owned action;
- and one agent delegating to another.

Agent identity does not eliminate human responsibility.

It prevents agent action from becoming invisible inside human or technical credentials.

### 2. Delegated Authority Must Narrow

Multi-agent collaboration is often described as coordination.

From a security perspective, it is authority transfer.

Every transfer should answer:

- Who delegated?
- What exact authority was transferred?
- Which data and tools are in scope?
- How long is it valid?
- May the recipient delegate again?
- What event revokes it?

The downstream agent should not inherit a broad upstream credential and then decide for itself which subset to use.

Its effective authority should be explicitly constrained and non-composable.

Two narrow permissions should not be silently combined into one broad capability that no single delegator intended to grant.

### 3. Business Policy Must Be Enforced at the Tool Boundary

A tool schema can prove that `discount` is numeric.

It cannot prove that a 25% discount is allowed for this customer, sales organization, product, user, and deal value.

That requires policy outside the LLM.

The policy enforcement point should evaluate:

- identity and role;
- business object;
- action;
- parameter values;
- amount or risk threshold;
- data classification;
- purpose;
- segregation-of-duties rules;
- and approval evidence.

Human confirmation must also become structured authority.

A conversational “yes” is not enough unless it is bound to:

- the approver’s identity and business role;
- the exact action and parameters;
- the target business object;
- the agent, policy, prompt, model, and tool versions;
- an expiry time;
- and a single-use approval identifier.

Otherwise, the agent can change the parameters, re-plan the task, or resume from a checkpoint while still treating an old “yes” as current approval.

### 4. Runtime Isolation Must Bound What the Agent Can Reach

Even a correctly authorized tool call can be surrounded by an unsafe runtime.

Production architecture must constrain:

- network egress;
- filesystem access;
- process execution;
- secret access;
- tool discovery;
- code execution;
- cross-tenant access;
- and communication with unverified agents or MCP servers.

Infrastructure isolation alone is not enough, but it matters.

An agent should not be able to escape a narrow business tool by discovering a broader technical route to the same system.

### 5. Durable State Must Preserve Authority, Not Only Conversation

Long-running agents need more than chat history.

They need durable, tenant-isolated task state that can survive restart, scale-out, retry, failover, and human delay.

That state should include:

- task and tenant identity;
- authority and approval references;
- policy decision;
- model, prompt, tool, and workflow versions;
- idempotency keys;
- completed and pending effects;
- compensation state;
- and revocation status.

Most importantly, restoration must not automatically restore authority.

When a task resumes, the system should revalidate whether the user, policy, approval, business object, and task are still valid.

A durable checkpoint without authority revalidation can preserve a zombie permission long after the original context has expired.

### 6. Evidence Must Prove the Business Action

Observability answers:

> What happened inside the system?

Responsibility evidence must answer:

> Why was this business action allowed to happen?

The evidence record should connect the whole path:

```text
intent
→ subject
→ actor
→ delegation
→ policy decision
→ approval
→ tool invocation
→ business object
→ final effect
```

It should be tamper-resistant, time-correlated, and linked to the resulting S/4HANA or other system-of-record object.

Logging every prompt and response is neither sufficient nor always desirable.

The goal is not indiscriminate surveillance.

It is the minimum structured evidence needed to reconstruct authority, execution, and consequence.

### 7. Revocation Must Cascade Through the Task Graph

Revocation is often treated as token expiry or a task status change.

That is too narrow for agents.

A production revocation model must address:

- current model execution;
- child agents;
- delegated tokens;
- queue messages;
- push notifications;
- webhooks;
- scheduled jobs;
- cached credentials;
- checkpoint restoration;
- retries;
- and partially completed business transactions.

Some effects can be stopped.

Some can only be compensated.

The architecture must know the difference.

If a task is canceled after a quotation was created but before it was communicated to the user, the correct response may not be to pretend execution never happened.

It may require cancellation, reversal, or a compensating business process in the system of record.

---

## 6. What SAP’s Official Agent Samples Reveal

SAP’s official samples are useful precisely because they show how quickly modern agent functionality can be assembled.

The [SAP Code-Based Agents CodeJam](https://github.com/SAP-samples/codejam-code-based-agents) demonstrates model access through SAP Generative AI Hub, tool use, grounding, multi-agent collaboration, A2A deployment, and Joule integration.

It also handles some boundaries correctly.

The application’s connection to SAP AI Core uses a Cloud Foundry service binding rather than embedding credentials in code.

Tool inputs use schemas.

A2A provides task, context, status, and artifact semantics.

These are meaningful controls.

But they do not form an end-to-end responsibility path.

In the [TypeScript A2A server](https://github.com/SAP-samples/codejam-code-based-agents/blob/main/project/JavaScript/solution/src/server.ts) and [Joule integration exercise](https://github.com/SAP-samples/codejam-code-based-agents/blob/main/exercises/JavaScript/09-integrate-agent-into-joule.md):

- the A2A server has no authentication middleware;
- the Agent Card does not declare a security scheme;
- the Joule integration exercise configures the BTP Destination with `NoAuthentication`;
- tasks use `InMemoryTaskStore`;
- and cancellation only records that cancellation was requested.

This creates a revealing asymmetry.

The hop from the application to the SAP AI service is protected through platform-managed credentials.

The path from user or Joule to agent, through tool execution, and into final business responsibility is not closed.

A later [SAP pro-code A2A sample](https://github.com/SAP-samples/btp-joule-a2a-pro-code-agent) goes further with CAP, LangGraph, human-in-the-loop interaction, streaming, push notifications, logging, and deployment scaffolding.

But its current [server](https://github.com/SAP-samples/btp-joule-a2a-pro-code-agent/blob/main/a2a-agent/pro-code-agent/agent/srv/server.ts), [security configuration](https://github.com/SAP-samples/btp-joule-a2a-pro-code-agent/blob/main/a2a-agent/pro-code-agent/agent/xs-security.json), and [agent executor](https://github.com/SAP-samples/btp-joule-a2a-pro-code-agent/blob/main/a2a-agent/pro-code-agent/agent/srv/agent-executor.ts) still use:

- `UserBuilder.noAuthentication`;
- an `xs-security.json` with empty scopes and role templates;
- `InMemoryTaskStore`;
- LangGraph `MemorySaver`;
- an in-process Map for conversation context;
- and an empty cancellation implementation.

Its [system prompt](https://github.com/SAP-samples/btp-joule-a2a-pro-code-agent/blob/main/a2a-agent/pro-code-agent/agent/srv/utils/prompts.ts) says the user must confirm before a sales quotation is created.

That is a useful interaction pattern.

It is not yet parameter-bound approval evidence enforced outside the model.

These observations should not be turned into the claim that “SAP’s sample is insecure.”

That would be unfair and architecturally unhelpful.

CodeJams and samples are designed to teach a functional path.

They simplify production concerns deliberately.

The real lesson is:

> A sample can prove that an agent works. It cannot transfer responsibility for the production architecture to the platform or sample author.

The danger begins when the happy path is copied into production and its omissions are mistaken for capabilities that the platform handles automatically.

---

## 7. What Platforms and Standards Solve—and What They Do Not

The industry is not ignoring these problems.

Important parts of the responsibility architecture are now emerging across platforms and standards.

### A2A

Current [A2A enterprise guidance](https://a2a-protocol.org/latest/topics/enterprise-ready/) supports standard web authentication, OAuth2 and OpenID Connect, security declarations in Agent Cards, server-side validation, task lifecycle, and cancellation semantics.

It also states that authorization remains specific to the agent implementation, its data, and enterprise policy, including skill-, data-, and action-level authorization.

That is the correct division.

A2A can carry secure agent communication.

It does not decide whether a particular employee may authorize a particular discount for a particular customer.

### SAP

SAP AI Agent Hub is moving toward the control plane the enterprise will need: registry and discovery, evaluation and verification, identity and access control, runtime permissions, MCP governance, observability, and agent mining.

SAP’s [AI Agent Hub product description](https://www.sap.com/products/artificial-intelligence/ai-agent-hub.html) sets out that direction. Its [2026 Innovation Guide](https://www.sap.com/topics/events/sapphire/innovation-news-guide-2026) makes the maturity distinction important: evaluation and verification are generally available, while identity and access control, runtime observability, and agent mining are planned for Q3 2026.

This direction strongly supports the argument that agents require inventory, identity, policy, runtime enforcement, observability, and lifecycle governance.

But even a mature Agent Hub cannot decide the enterprise’s business authority model.

It cannot determine by itself:

- who may approve a 25% discount;
- whether procurement and payment-release duties must be separated;
- which source owns a business fact;
- which agent action requires workflow;
- or who is accountable when technically valid execution produces an invalid business result.

The platform supplies control planes.

The enterprise must still define responsibility.

### AWS

Amazon [Bedrock AgentCore Policy](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy.html) can intercept tool traffic at the gateway and enforce deterministic policies outside the agent code, including conditions based on user identity and tool input parameters.

[AgentCore Identity](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/on-behalf-of-token-exchange.html) also supports on-behalf-of token exchange that carries both agent and original caller identity signals to downstream services.

These are significant steps toward a real responsibility path.

They solve more than a tool allowlist.

But they still do not create an enterprise’s sales, procurement, finance, HR, or compliance authority model.

### Microsoft

[Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/) treats agents as first-class identities with blueprints, owners, sponsors, lifecycle governance, Conditional Access, protection, and OAuth-based authorization patterns.

This is important because an agent should not disappear inside a shared service principal.

But identity answers who the agent is and what resources it may access.

The business still has to determine why a specific action should occur.

### NIST

NIST’s [2026 AI Agent Standards Initiative](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative) and its [concept work on software and AI agent identity and authorization](https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd) explicitly examine identification, authorization, auditing, non-repudiation, secure action on behalf of users, and multi-agent interaction.

That is evidence of industry convergence on the problem.

It is also evidence that the end-to-end answer is not finished.

We now have stronger components for identity, transport security, tool policy, inventory, observability, and lifecycle control.

What is still missing is a commonly adopted enterprise profile that proves how those components combine to justify one concrete business action.

The gap is no longer:

> There are no security mechanisms for agents.

The more accurate statement is:

> There are many agent security mechanisms, but they do not automatically compose into business authority.

---

## 8. The Production Responsibility Review

Before an enterprise agent is allowed to create business consequences, the architecture review should be able to answer ten questions.

### 1. Who initiated the business goal?

Not only which account sent the last request, but which human, process, event, or business principal originated the task.

### 2. Who is the subject, and who is the actor?

Can the system distinguish the represented user from the agent instance performing the action?

### 3. Through what path was authority delegated?

Can every handoff—from assistant to agent, agent to agent, and agent to tool—be reconstructed?

### 4. Does authority narrow at every hop?

Can any downstream agent combine, expand, or reuse permissions beyond the original purpose?

### 5. Does tool policy constrain the actual business parameters?

Are object, amount, customer, organizational scope, data class, purpose, and risk threshold evaluated outside the model?

### 6. Is authority revalidated at execution time?

Are identity, role, approval, policy, task status, and business-object state checked immediately before the effect?

### 7. Does durable state preserve control context?

Can a restored task prove which authority, policy, approval, model, prompt, and tool versions apply—and revalidate them?

### 8. Are retry and recovery bounded?

Are idempotency, partial completion, timeout, retry, rollback, and compensation explicitly designed?

### 9. Can evidence reach the system-of-record object?

Can the enterprise move from a quotation, order, payment block, or employee action back through the complete responsibility path?

### 10. Can revocation stop or compensate the whole task graph?

Does cancellation reach child agents, credentials, queues, webhooks, checkpoints, retries, and business effects?

If these questions cannot be answered, the agent may still be an excellent assistant.

It may still be a useful recommender.

It may still be safe inside a constrained workflow.

But it is not yet ready for independent business-impacting execution.

---

## Closing

Building agents is becoming easier.

Connecting models, tools, A2A endpoints, MCP servers, workflows, and enterprise APIs is becoming faster.

That is real progress.

But it also changes what enterprise architecture must prove.

The enterprise does not only need evidence that the agent could call the API.

It needs evidence that the exact business action had the right to happen.

That proof cannot live only in a token.

It cannot live only in a prompt.

It cannot live only in a confirmation message.

It cannot live only in an audit log.

It must live across the complete responsibility path:

```text
Intent
→ Delegation
→ Agent Identity
→ Execution-Time Policy
→ Tool Authority
→ Business Effect
→ Evidence
→ Revocation
```

For every business-impacting action, that path must remain bounded, valid at execution time, reconstructible, and revocable.

That is the missing architecture between agent intelligence and enterprise trust.

And it is the difference between an agent that can act and an enterprise that can prove it had the right to act.

— Jiandong

---

## References and Implementations Reviewed

1. [SAP Code-Based Agents CodeJam](https://github.com/SAP-samples/codejam-code-based-agents)
2. [SAP CodeJam TypeScript A2A server](https://github.com/SAP-samples/codejam-code-based-agents/blob/main/project/JavaScript/solution/src/server.ts)
3. [SAP CodeJam Joule integration exercise](https://github.com/SAP-samples/codejam-code-based-agents/blob/main/exercises/JavaScript/09-integrate-agent-into-joule.md)
4. [SAP BTP Joule A2A Pro-Code Agent](https://github.com/SAP-samples/btp-joule-a2a-pro-code-agent)
5. [A2A Enterprise Features](https://a2a-protocol.org/latest/topics/enterprise-ready/)
6. [SAP AI Agent Hub](https://www.sap.com/products/artificial-intelligence/ai-agent-hub.html)
7. [SAP Sapphire Innovation News Guide 2026](https://www.sap.com/topics/events/sapphire/innovation-news-guide-2026)
8. [Amazon Bedrock AgentCore Policy](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy.html)
9. [Amazon Bedrock AgentCore On-Behalf-Of Token Exchange](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/on-behalf-of-token-exchange.html)
10. [Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/)
11. [NIST AI Agent Standards Initiative](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative)
12. [NIST Software and AI Agent Identity and Authorization Concept Paper](https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd)
