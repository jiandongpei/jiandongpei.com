---
articleId: A019
title: The Integration Boundary
subtitle: Why Connectivity Is Not Integration
published: "2026-02-03"
boundary: Integration
audience: Integration Lead
symptom: Postman works; runtime surface fails
featured: false
source: LinkedIn
canonicalUrl: https://www.linkedin.com/pulse/integration-boundary-why-connectivity-jiandong-pei-icbdc
summary: Integration jurisdiction at runtime differs from connectivity success; why governance must cross system edges.
---

### An Architect’s View from the Builder Side
---

## Preface — Integration Is a Governance Problem

Most teams treat integration as wiring.

Endpoints connect. Tokens flow. Payloads return. Demos pass.

But real integration is not “can system A reach system B.”

**Integration is the governance of meaning — not the wiring of endpoints.**

And when governance is missing, the failure is never a clean technical defect.
It becomes a cross-team incident, a months-long blame cycle, and a permanent confidence drain across the program.

That failure has a name:

**Integration Boundary Failure** — when cross-system behavior is no longer under architectural jurisdiction.

---

## 1. The Constitutional Definition — Integration Boundary = Jurisdiction

In SAP BTP landscapes, “integration” is often reduced to:

* destinations
* connectivity
* APIs
* eventing
* adapters
* middleware

Those are mechanisms.

The Integration Boundary is something else:

> **Integration Boundary is whether the platform (and the program) can enforce consistent cross-system semantics — across teams, environments, and years — without relying on folklore.**

On BTP, **jurisdiction** means the landscape can reliably enforce:

* identity semantics (who the caller is, and what that means)
* tenant scope (which tenant context is valid, where it is derived, and where it can change)
* routing semantics (what entry paths are canonical vs incidental)
* lifecycle semantics (how changes roll out, and who can break whom)
* responsibility semantics (who owns which failure domains, with evidence)

When those semantics are not explicitly governed, connectivity becomes a trap:
everything can talk, but nothing can be trusted.

---

## 2. The Contract Card — The Missing Artifact in Most Programs

Every stable integration has an implicit contract.

Most BTP programs never write it down.

So the contract still exists — but it lives in:

* individual engineers’ heads
* tribal rules in chat threads
* ad-hoc runbooks
* “the one person who knows”
* undocumented assumptions baked into destinations and routers

That is not integration. That is **institutional memory pretending to be architecture.**

Here is the simplest stabilizer I’ve seen across successful platforms:

### The Integration Contract Card (what must be explicit)

**A. Identity Contract**

* What identity is authoritative at each hop
* What “user context” means end-to-end
* What can be downgraded (and what cannot)

**B. Tenant Contract**

* Where tenant context is derived (host/subdomain, subscription, token claims, etc.)
* Where tenant context is allowed to transform
* Which artifacts are tenant-scoped vs global by design

**C. Entry Contract**

* What is the canonical entry path (experience layer / router / API gateway)
* What paths exist only for testing or operations
* What “local success” is not allowed to prove

**D. Destination / Connectivity Contract**

* Which destination scopes are legal for which calls
* What authentication mechanism is a propagation contract (not a setting)
* What is prohibited even if it “works”

**E. Lifecycle Contract**

* How changes roll out across tenants and environments
* What “compatible” means
* What must be versioned and what must be synchronized

**F. Ownership / Evidence Contract**

* Which team owns which failure domain
* What evidence establishes responsibility
* What escalation path is valid

This card is not bureaucracy.

It is the difference between a program that scales — and one that accumulates invisible integration debt until it fractures.

---

## 3. The Failure Pattern — Local Success Signals Are Cheap

Most integration failures on BTP do not start as outages.
They start as **locally correct behavior** that is globally invalid.

A token validates, but under the wrong semantics.
A destination connects, but collapses tenant scope.
A route resolves, but bypasses the canonical entry boundary.
An S/4 call returns data, but under an identity downgrade no one notices.

So teams see “proof” everywhere:

* component health looks green
* requests return 200s
* a developer can reproduce success in one path
* a PoC demo works

But integration correctness is not a local property.
It is a composition property.

> **A landscape can be “green” in every component and still be integration-invalid as a whole.**

That is why integration failures are so damaging:
they do not look like failure until the system is exercised through the real topology — real entry paths, real tenants, real lifecycle conditions, real org pressure.

---

## 4. The Ownership Collapse — When No One Owns the Chain

BTP landscapes are not one system.
They are a chain of boundaries:

* experience layer
* router / entry mediation
* app runtime
* destination + connectivity
* system of record
* cross-account / cross-environment topology

In most programs, ownership is assigned by component:

* IAS / IdP owned by security/Basis
* destinations owned by integration
* Work Zone owned by UX/platform
* CAP owned by app team
* S/4 trust owned by ERP security
* subaccounts treated as “just environments”

Each component has an owner.

**No one owns the chain.**

And the chain is where integration lives.

So when cross-system behavior breaks, the program doesn’t debug — it negotiates.

---

## 5. The Escalation Law — Integration Debt Always Becomes Organizational Debt

When integration boundaries are not governed, every incident trends toward:

* cross-team by default
* cross-layer by necessity
* slow by design
* politically expensive
* eventually normalized

The system may continue to “work.”

But it becomes ungovernable.

This is the moment many programs quietly enter a new phase:

> **When jurisdiction is missing, the organization becomes the integration runtime.**

Meetings become your orchestrator.
Escalations become your routing rules.
Hero engineers become your consistency model.

And once that happens, the platform stops scaling.

---

## 6. Three Classes of Integration Boundary Violations

Most integration failures fall into three constitutional classes.
The class matters more than the symptom.

### (Unstable) Violations — Works, but drifts

These produce the most expensive long-term failure modes.

* “It works in one environment, fails in another.”
* “It works until tenants diverge.”
* “It works until rollout pressure hits.”

### (Illegal) Violations — Breaks jurisdiction

These may work today, but they destroy the possibility of stable governance.

* identity downgraded to make calls succeed
* tenant scope collapsed for convenience
* canonical entry boundary bypassed as “just another path”

### (Ungovernable) Violations — Cannot be repeated

These create landscapes where success cannot be recreated reliably.

* manual configs as the source of truth
* environment-specific folklore
* integration encoded in code paths instead of explicit contracts

These categories are not rhetorical.

They predict whether your program can survive year 2 and year 3.

---

## 7. Common Boundary Violations on SAP BTP (and Why They’re Misdiagnosed)

Below are recurring violations I see across large BTP programs.
Notice how none of them are “connectivity problems.”

### Violation A — (Unstable) Tenant scope collapses silently

A global artifact is used to serve tenant-scoped semantics.

The system still responds.
But tenant context becomes ambiguous, and drift becomes inevitable.

### Violation B — (Illegal) Identity is downgraded to “make it work”

Technical identity replaces real user context.
Principal propagation is avoided.
Auditing becomes performative.

This is not a workaround.
It is a constitutional break: you have removed jurisdiction over meaning.

### Violation C — (Ungovernable) Destinations become integration logic

Destinations are treated as “API bookmarks,” but they are boundary enforcement points.
They can rewrite identity, scope, and behavior while looking healthy.

When the contract is not explicit, a destination becomes a silent compiler of semantics.

### Violation D — (Unstable) Canonical entry is not enforced

Multiple entry paths exist, each exercising different constraints.
Some paths are “for testing.”
Some are “for the UI.”
Some are “for ops.”

The result is predictable: local successes multiply, while global correctness decays.

### Violation E — (Ungovernable) Lifecycle semantics are left implicit

Rollout becomes a social process.
Compatibility is assumed, not defined.
Tenants receive changes through timing and luck, not architecture.

This is where large programs begin to fracture **after go-live**.

---

## 8. The Verdict Rule — How to Recognize a Boundary Failure Early

This is not a “how to fix integration” guide.

It is a verdict rule for establishing invalidity.

> **If a cross-system failure cannot be assigned to a single accountable owner with evidence — early — it is rarely a defect. It is a boundary failure.**

Defects are isolated.
Boundary failures are relational.

Defects can be patched.
Boundary failures require re-assigning jurisdiction — and enforcing contracts.

This is why “integration debugging” often feels endless:
you are trying to treat a constitutional failure as a component bug.

---

## 9. Builder-Side Reality — Why SAP Can Do It and Customers Often Can’t

Inside SAP, large product teams do not release isolated artifacts.

They release governed systems, where:

* identity semantics
* routing semantics
* lifecycle rollout rules
* tenant boundaries
* UI entry composition
* service contracts

are treated as one coherent unit.

Customers often release applications.
SAP releases systems.

The difference is not tooling.

It is **boundary discipline** — enforced by contracts, ownership, and lifecycle governance.

---

## 10. Final Thought — Integration Is Where Trust Lives or Dies

Integration is where:

* meanings collide
* identities transform
* tenants drift
* ownership fragments
* lifecycle pressure reveals hidden assumptions

You can connect systems quickly.
You cannot govern semantics accidentally.

If your integration has no contract,
it may look productive at first —
and become unmanageable later.

Because in the end:

> **If connection has no contract, integration is already broken.**

—
**Jiandong Pei**
Independent SAP BTP Architect
Creator of the Boundary Model™
