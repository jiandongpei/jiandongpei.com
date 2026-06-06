---
articleId: A024
title: SAP AI Agent Security Is Not Just Identity
subtitle: Why Tokens, RAG, Tools, and Workflows Need New Authorization Boundaries
published: "2026-06-04"
boundary: Authorization
audience: Enterprise Architecture
symptom: Valid tokens carrying unauthorized context
featured: true
source: LinkedIn
sourceUrl: https://www.linkedin.com/pulse/sap-ai-agent-security-just-identity-why-tokens-rag-tools-pei-gydac/
summary: Enterprise agent security fails when valid identity tokens allow unauthorized business context to enter RAG, tools, workflows, and model reasoning paths.
tags: [sap-btp, enterprise-ai, agents, security, authorization, rag, boundary-model]
---

# Your SAP Agent Has a Token. That Does Not Mean It Is Safe.

## The First SAP Agent Security Failure May Look Like a Successful Answer

A junior procurement analyst asks the enterprise agent a normal question:

> “Prepare a short briefing for the supplier negotiation next week.”

The agent responds beautifully.

It summarizes supplier history.
It explains open purchase orders.
It highlights quality issues.
It identifies commercial risks.
It suggests negotiation points.

The answer looks exactly like what enterprise AI is supposed to deliver.

But there is a problem.

Part of the answer was influenced by executive margin thresholds, legal escalation notes, confidential supplier strategy documents, and internal negotiation positions that this employee could never access directly in S/4HANA, Ariba, SharePoint, or the original source systems.

The employee did not hack anything.

The employee did not bypass authorization.

The employee did not even know those confidential documents existed.

The identity provider worked.
The user was authenticated.
The token was valid.
The API call succeeded.
The demo looked impressive.

But the architecture had already failed.

Because unauthorized business context entered the agent’s reasoning path.

The breach did not start when the user read a confidential file.

It started when the agent brought unauthorized context into the model.

That is not only an AI safety issue.

It is an enterprise authorization failure.


---

## 1. The First Agent Breach May Not Look Like a Breach

Many enterprise AI failures will not start with a dramatic attack.

They may start with a normal user asking a normal question.

The problem is not that the user accessed a forbidden screen.

The problem is that the agent retrieved, combined, summarized, and reasoned over business context the user should never have seen.

This is a different kind of security failure.

In traditional enterprise applications, security is often evaluated at the point of access:

Can this user open this app?
Can this user call this API?
Can this user read this business object?
Can this user execute this transaction?

In agentic systems, that is no longer enough.

The new question is:

> What information entered the agent’s context before the final answer was shown?

That is where many enterprise AI security problems will begin.

The breach does not start when the user reads the confidential data.

It starts when unauthorized data enters the model context.

---

## 2. Traditional SAP Extension Security Is Still Necessary — But No Longer Sufficient

SAP architects already know the traditional security path.

A user opens an extension.
The request goes through AppRouter.
Identity is handled through IAS or XSUAA.
Scopes and roles are evaluated.
The backend checks authorization.
Destinations and OAuth or SAML flows connect to downstream systems.
S/4HANA authorization decides what the user can do.

A simplified version looks like this:

```text
User
  → AppRouter / IAS / XSUAA
  → CAP or backend service
  → Destination / principal propagation
  → S/4HANA authorization
```

This model is not obsolete.

It remains essential.

But an AI agent is not just a traditional API caller.

An agent may interpret intent.
It may retrieve long text.
It may search vector indexes.
It may call tools.
It may trigger workflows.
It may interact with MCP servers.
It may communicate with other agents.
It may store memory.
It may generate summaries that mix information from multiple sources.
It may prepare or execute a business action.

So the old question:

> Is the user authenticated?

is no longer enough.

The new question is:

> What is the agent allowed to see, reason over, call, remember, trigger, and execute?

That is a much larger security boundary.

---

## 3. SAP Is Moving Toward Governed Agents — But Governance Is Not the Same as Proof

SAP’s public direction is clear.

Joule Studio is described by SAP as an AI-first development environment for building custom AI agents, apps, and workflows. SAP also says it combines agent building, SAP Cloud Application Programming Model development, workflows, and managed runtime, and supports developers, architects, and technical business teams building enterprise AI solutions and extensions across SAP and third-party systems.

SAP also explicitly describes governance capabilities in Joule Studio, including identity and access controls, SAP Cloud Identity Services, pre-launch testing, validation, visibility into agent behavior, decisions, failures, managed runtime, lifecycle controls, security, and compliance.

AI Agent Hub goes further. SAP describes it as a vendor-agnostic command center for discovering, inventorying, governing, and evaluating AI agents, LLMs, and MCP servers across the business landscape. It includes registry, evaluation, verification, identity and access control, runtime permissions, policies, observability, RAG retrieval tracing, tool call tracing, and MCP governance.

This direction is necessary.

But it does not remove the architecture question.

A platform can provide governance capabilities.
A registry can inventory agents.
A runtime can enforce policies.
An observability layer can trace tool calls.
A hub can verify MCP servers.
A studio can help build agents with identity controls.

But every enterprise still has to prove:

Which user authority is being used?
Which business context is allowed?
Which data sources can be retrieved?
Which tools can be called?
Which workflows contain execution?
Which actions require approval?
Which system owns the truth?
Who is accountable if the outcome is wrong?

That proof cannot be replaced by the fact that an agent has a token.

---

## 4. Authentication Is Not Authorization for Reasoning

A traditional application usually acts within a relatively clear request boundary.

A user requests something.
The backend checks authorization.
The system returns data or rejects the request.

An agent does something more complex.

It may retrieve data before deciding what the user needs.
It may combine structured data with documents.
It may use semantic similarity to find relevant context.
It may summarize several sources into one answer.
It may create a recommendation from information the user never directly asked for.
It may call tools based on its own plan.

That means authentication proves only one thing:

> Someone is allowed to interact with the agent.

It does not prove:

* the agent can retrieve every document it finds;
* the agent can reason over every chunk in a vector index;
* the agent can call every tool attached to it;
* the agent can summarize confidential context;
* the generated answer is safe for the current user;
* the agent can trigger a workflow or write to a core system;
* the agent’s memory is scoped correctly;
* the agent’s final action is accountable.

This is why agent security must be broader than login.

Authentication answers:

> Who is here?

Authorization for enterprise agents must answer:

> What is this agent allowed to bring into the reasoning path, and what is it allowed to do with it?

---

## 5. Vector Similarity Is Not a Permission Model

This may become one of the most common enterprise AI mistakes.

A team builds an internal knowledge agent.

They take documents from multiple sources:

* supplier contracts;
* support tickets;
* account notes;
* internal strategy documents;
* pricing files;
* legal comments;
* product roadmaps;
* HR policies;
* finance analysis;
* project documentation;
* meeting notes.

They chunk the documents.
They generate embeddings.
They put everything into a vector store.
They let the agent retrieve the most semantically relevant chunks.

The agent works.

The answers are impressive.

But the security model may already be broken.

Because vector similarity does not know business authorization.

A semantically relevant chunk is not necessarily an authorized chunk.

The fact that a document is relevant to the user’s question does not mean the user is allowed to see it.

The fact that a passage improves the answer does not mean it is safe to enter the model context.

If the user cannot access the source, the chunk must not enter the model context.

That is the rule.

Not after generation.
Not after summarization.
Not after redaction.
Before reasoning.

Unauthorized data should not become part of the agent’s working context in the first place.

---

## 6. The Agent Did Not Leak Data. The Architecture Brought the Data to the User.

In many future incidents, the user will not be the attacker.

The user may not even know a confidential document exists.

The user simply asks:

> “What should I know before this negotiation?”

or:

> “Summarize the risk for this customer.”

or:

> “Prepare a briefing for this supplier.”

Then the agent retrieves sensitive context because the vector index or retrieval pipeline was not authorization-aware.

The user did not go to the confidential document.

The agent brought confidential context to the user.

This distinction matters.

Many organizations will evaluate only the final answer.

But in enterprise AI, the reasoning path matters.

If the final answer is generated from unauthorized context, the problem already exists even if the answer does not quote the confidential source word for word.

A summary can leak information.
A recommendation can leak information.
A risk score can leak information.
A negotiation suggestion can leak information.
A “safe” paragraph can still be derived from data the user was never allowed to use.

Generated output does not automatically cleanse the permission boundary.

---

## 7. RAG Security Requires Source Authorization, Chunk Metadata, and Provenance

A secure retrieval architecture cannot be just:

```text
vector similarity
  → top K chunks
  → LLM context
  → answer
```

A safer architecture must look more like:

```text
current user / role / tenant / business object authorization
  → authorized candidate set
  → retrieval
  → policy filter
  → model context
  → answer
  → audit
```

Every retrieved chunk should carry security-relevant metadata:

* source system;
* tenant;
* business object type;
* business object ID;
* owner;
* organizational unit;
* company code;
* role or group;
* data classification;
* source document ACL;
* sensitivity level;
* retention category;
* source version;
* generated timestamp.

Without this metadata, the retrieval layer cannot enforce meaningful authorization.

And without provenance, the enterprise cannot reconstruct why the agent answered the way it did.

This is especially important in SAP landscapes, where business data is rarely just “text.”

A supplier note may relate to a purchasing organization.
A customer record may relate to a sales area.
A pricing document may relate to a specific role.
A legal memo may relate to a restricted matter.
An HR file may relate to an employee group.
A finance analysis may be restricted to leadership.

If these permissions are lost during ingestion, chunking, embedding, or summarization, the vector index becomes a shadow data layer.

And a shadow data layer with semantic search is not innovation.

It is a new authorization bypass.

---

## 8. Agent Memory Is Not Automatically Safe

Memory introduces another security boundary.

If an agent remembers what it saw in one session, who is allowed to benefit from that memory later?

If an agent summarizes restricted documents, can that summary be reused by another user?

If an agent learns a supplier strategy from one team, can another team ask a broader question and receive the same strategic insight?

If a generated note combines HR, finance, legal, and procurement context, what permission does the note inherit?

Agent memory must not become a laundering mechanism for restricted data.

A generated summary should not become public simply because it is no longer the original document.

The safest principle is:

> Generated content should inherit the sensitivity of its sources unless explicitly downgraded through a governed process.

This is hard.

But ignoring it is worse.

Because agent memory can silently turn restricted context into reusable business knowledge without preserving the original access boundary.

---

## 9. Tool Calls Are Not Plugin Calls. They Are Execution Boundaries.

In consumer AI, a tool call may feel like a convenience.

In enterprise AI, a tool call is an execution boundary.

When an SAP agent calls a tool, that tool may:

* read a business object;
* update a workflow;
* create a purchase requisition;
* change supplier status;
* read customer data;
* trigger an approval;
* send an email;
* create a case;
* update S/4HANA;
* call an extension API;
* invoke an MCP server;
* delegate work to another agent.

This is not just a function call.

It is enterprise execution.

That is why tool access must be treated like a governed capability.

Which agent can call this tool?
Under whose authority?
For which users?
For which tenants?
For which business objects?
For which action class?
With which approval?
With which audit trail?
With which revocation model?

SAP AI Agent Hub’s public positioning is relevant here because SAP explicitly includes agents, LLMs, and MCP servers in a governed registry, and describes identity and access control for runtime permissions and policies. It also says verified MCP servers can be enforced for production workflows and that access can be revoked when verification status changes.

This confirms the architectural point:

MCP servers and tools cannot be treated as harmless extensions of the prompt.

They are part of the execution surface.

---

## 10. The Agent Identity Question Has More Than One Answer

A critical question for every enterprise agent is:

> Whose authority is this agent using?

There are several patterns.

### Pattern 1: On-Behalf-Of User

The agent acts under the current user’s authority.

If the user cannot see the supplier contract, the agent cannot retrieve it.
If the user cannot approve a purchase order, the agent cannot approve it.
If the user cannot access salary data, the agent cannot summarize it.

This is the safest default for user-driven business actions.

It is closest to the traditional extension model.

### Pattern 2: Scoped Agent Identity

The agent has its own technical identity, but with limited permissions.

This may be appropriate for background tasks, monitoring, classification, internal automation, or low-risk operations.

But it must be narrowly scoped.

A broad technical credential attached to an agent is dangerous.

Because the agent is not just executing a fixed script.
It may choose tools dynamically based on context.

### Pattern 3: Workflow-Contained Execution

The user expresses intent.
The agent interprets, prepares, classifies, or recommends.
A workflow contains the execution.
Approvals, policies, and audit rules determine what happens next.

This is often the most realistic enterprise pattern.

```text
User intent
  → Agent interpretation
  → Workflow
  → Approval / policy check
  → Extension API
  → Core system write
  → Audit trail
```

In this model, the agent helps the business move faster.

But it does not silently become the authority layer.

---

## 11. Workflow Is Where Accountable Execution Should Often Live

Agents are powerful because they handle ambiguity.

Workflows are powerful because they preserve accountability.

This difference matters.

An agent can classify an exception.
An agent can prepare a draft.
An agent can summarize a risk.
An agent can recommend a path.
An agent can identify the right workflow.
An agent can collect missing information.

But when the action affects a business record, approval state, financial exposure, compliance classification, supplier status, HR data, customer commitment, or legal position, the execution path often needs workflow containment.

That workflow should define:

* who approves;
* what evidence is required;
* what state changes;
* what system is updated;
* what audit record is kept;
* what exceptions are allowed;
* what rollback or correction path exists;
* who owns the final outcome.

A high-risk SAP agent should not be allowed to convert ambiguity directly into execution.

It should move ambiguity into a governed process.

That is the distinction between autonomy and unbounded execution.

---

## 12. A2A Communication Does Not Remove RACI

Agent-to-agent communication sounds advanced.

It may also become necessary.

One agent may understand procurement context.
Another may understand supplier risk.
Another may understand legal exposure.
Another may understand financial impact.
Another may coordinate the final recommendation.

But agent-to-agent communication does not remove RACI.

It makes RACI more important.

If Agent A calls Agent B, and Agent B calls an MCP server, and the MCP server triggers a workflow, and the workflow updates S/4HANA, who owns the action?

The user?
Agent A?
Agent B?
The MCP server owner?
The workflow owner?
The extension owner?
The S/4HANA business process owner?

Without a clear answer, agent-to-agent systems can create distributed responsibility drift.

Every local step may look correct.

But the final business action may have no singular accountable owner.

That is not enterprise autonomy.

That is responsibility fragmentation.

---

## 13. Agent Observability Must Include the Reasoning Path, Not Just the Result

Traditional monitoring often asks:

Did the service respond?
Was the API successful?
Was the transaction committed?
Was the workflow completed?

Agent monitoring must ask more:

What did the user ask?
Which agent interpreted the request?
Which prompt or policy was active?
Which model was used?
Which sources were retrieved?
Which chunks entered the context?
Which tools were available?
Which tools were called?
Which MCP servers were invoked?
Which workflow was triggered?
Which identity was used?
Which business object was read or written?
Which approval was required?
Which generated output was shown?
Which memory was created or reused?

SAP AI Agent Hub publicly describes observability that can trace tool calls, RAG retrieval, and system interactions with session-level data.

That direction is important.

Because for enterprise AI, observability is not only performance monitoring.

It is reconstructibility.

If the enterprise cannot reconstruct why the agent produced an answer or executed an action, it cannot govern the system.

---

## 14. The Security Boundary Has Expanded

Traditional extension security focused mainly on:

* user authentication;
* role and scope authorization;
* backend authorization;
* destination security;
* principal propagation;
* S/4HANA authorization;
* tenant isolation;
* API audit.

Agentic security must include all of that, plus:

* retrieval authorization;
* vector index security;
* chunk-level permission metadata;
* source provenance;
* generated output inheritance;
* agent memory isolation;
* tool-call governance;
* MCP verification;
* A2A delegation control;
* workflow containment;
* action-class policy;
* model and prompt lifecycle;
* runtime observability;
* accountability mapping.

This is why “the agent has a token” is not enough.

The token may prove one identity at one point in the chain.

But the agentic system contains many more boundaries than a traditional request.

---

## 15. The Minimum Readiness Test Before Execution

Before an SAP agent is allowed to execute business actions, the enterprise should be able to answer these questions.

### Identity

Whose identity does the agent use?
Is it acting on behalf of the user, as a scoped agent identity, or through a workflow-controlled service identity?
Can the identity chain be reconstructed after execution?

### Retrieval

What sources can the agent retrieve from?
Are retrieved chunks filtered by user, role, tenant, business object, and source authorization?
Can unauthorized data enter the model context?

### Vector and RAG

Does every chunk carry permission metadata?
Does the vector index preserve source ACLs?
Is semantic similarity separated from authorization?
Can the enterprise prove which sources influenced the answer?

### Memory

What does the agent remember?
Who can reuse that memory?
Does memory inherit source data sensitivity?
Can memory cross users, roles, tenants, or business domains?

### Tools and MCP

Which tools can the agent call?
Are tools mapped to business capabilities?
Are MCP servers verified before production use?
Can access be revoked if verification changes?
Are tool calls traced and auditable?

### Workflow

Which actions must enter workflow?
Which actions require approval?
Which actions are read-only, draft-only, recommendation-only, or executable?
Does workflow contain the accountable execution path?

### Core Systems

Can the agent write to S/4HANA or another system of record?
If yes, under what authority?
Which business object is affected?
Which approval or policy check is required?
Who owns the final state?

### Generated Output

Does the answer expose restricted information?
Does a summary inherit the sensitivity of its sources?
Can generated recommendations leak confidential strategy, pricing, legal, HR, or financial context?

### Lifecycle

What happens when the prompt changes?
What happens when the model changes?
What happens when a tool schema changes?
What happens when a RAG source changes?
What happens when an MCP server is added?
What happens when a workflow definition changes?

### Accountability

Who owns the final business outcome?
Who signs off on the agent’s execution scope?
Who reviews failures?
Who can stop the agent?
Who is accountable when every technical component worked, but the business action was wrong?

If these questions cannot be answered, the agent may be demo-ready.

It is not enterprise-ready.

---

## 16. The Dangerous Pattern

The dangerous pattern looks like this:

```text
User intent
  → Agent
  → Large vector index
  → Broad tool access
  → Technical credential
  → Core system write
```

This model is attractive because it works quickly.

It produces impressive demos.

It avoids slow architectural debates.

It makes enterprise AI feel autonomous.

But it also creates the highest-risk failure pattern:

* unclear user authority;
* uncontrolled retrieval;
* hidden context leakage;
* broad tool execution;
* weak auditability;
* workflow bypass;
* shadow business truth;
* unclear accountability.

This is not an enterprise AI platform.

It is a shadow execution layer.

---

## 17. The Governable Pattern

A more governable pattern looks like this:

```text
User intent
  → Assistant
  → Agent
  → Authorized retrieval boundary
  → Governed tool or extension API
  → Workflow containment for high-risk actions
  → Core system under explicit authority
  → Audit and accountability record
```

This model is less flashy.

But it is safer.

It preserves the difference between:

* user interaction;
* agent reasoning;
* authorized context;
* governed capability;
* accountable process;
* core business truth.

That difference is what enterprise AI must protect.

---

## 18. Demo-Ready Is Not Enterprise-Ready

A demo-ready agent can answer.

An enterprise-ready agent can prove what it was allowed to see.

A demo-ready agent can call a tool.

An enterprise-ready agent can prove why the tool call was authorized.

A demo-ready agent can retrieve context.

An enterprise-ready agent can prove that every retrieved source was allowed for the current user and business action.

A demo-ready agent can trigger a workflow.

An enterprise-ready agent can prove why the workflow was the correct container for execution.

A demo-ready agent can write to a system.

An enterprise-ready agent can prove whose authority, approval, and accountability governed that write.

This is the difference.

Not whether the agent works.

Whether the agent can justify its right to work.

---

## 19. This Is Not Anti-Agent

This is not an argument against SAP agents.

The opposite is true.

Agents will become important because enterprise work is full of ambiguity.

Users do not always know which system to open.
Processes do not always follow clean paths.
Exceptions require judgment.
Information is scattered across structured and unstructured sources.
Business users want outcomes, not screens.

Agents are a natural response to this complexity.

But that is exactly why security boundaries must become more explicit.

A traditional application usually exposes a designed path.

An agent may discover a path.

That discovery must be governed.

A traditional extension usually calls known APIs.

An agent may choose tools dynamically.

That choice must be governed.

A traditional workflow usually follows defined steps.

An agent may coordinate across multiple possible paths.

That coordination must be governed.

The more dynamic the agent, the more explicit the boundary must be.

---

## 20. Closing

The first SAP agent security failure may not look like a hacker breaking into a system.

It may look like a successful answer.

A normal user asks a normal question.
The agent retrieves relevant context.
The response looks intelligent.
The business is impressed.

But confidential data has already crossed the boundary.

Not because the user was malicious.
Not because the identity provider failed.
Not because the API was broken.

Because the agent architecture allowed unauthorized context into the reasoning path.

That is the new risk.

In traditional SAP extensions, architects had to prove identity, authorization, integration, tenant isolation, and system-of-record boundaries.

In enterprise AI, they must prove more.

They must prove what the agent can see.
What it can retrieve.
What it can remember.
What it can call.
What it can trigger.
What it can execute.
What it can summarize.
What it can delegate.
And who remains accountable when the final business outcome is wrong.

Your SAP agent may have a token.

That does not mean it is safe.

A demo-ready agent can act.

An enterprise-ready agent can prove why it was allowed to act.

— Jiandong Pei
