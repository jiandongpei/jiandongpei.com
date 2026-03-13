---
articleId: A003
title: Why BTP Projects Fail — The Boundary Model Every Architect Must Master
published: "2025-12-02"
boundary: Boundary Model
audience: Architect
symptom: Post–go-live failures
featured: true
source: LinkedIn
canonicalUrl: https://www.linkedin.com/pulse/why-btp-projects-fail-boundary-model-every-architect-must-pei-zzhvc/
summary: Introduces the Boundary Model and explains why failures surface at runtime boundaries months after go‑live.
---

# Why BTP Projects Fail — The Boundary Model Every Architect Must Master

By Jiandong Pei — Independent SAP BTP Architect · Builder-Side Veteran

---

## TL;DR

SAP BTP projects rarely fail because of code.  
They fail because teams violate boundaries they cannot see.

Runtime  
Identity  
Tenant  
Data  
Integration  
Lifecycle  

This article introduces the **Boundary Model** — a diagnostic framework refined during years on the Builder-Side of SAP Build Code.

If you understand boundaries, BTP becomes predictable.  
If you ignore them, the system becomes fragile.

---

## 0. The Real Reason BTP Projects Break

SAP has radically accelerated extension development.

A CAP + Fiori Elements + S/4-integrated extension can be generated in minutes.

This is a major advancement.

But acceleration introduces a paradox:

When creation becomes easy, complexity does not disappear.  
**It relocates into the boundaries.**

And this is where real-world projects break:

- UI shell ↔ routing
- AppRouter ↔ identity
- XSUAA ↔ CAP
- tenant isolation ↔ shared infrastructure
- extension logic ↔ S/4 trust
- onboarding ↔ persistence lifecycle

Most teams follow the same pattern:

Build → Configure → Connect → Deploy  

Everything works.  
Until it doesn’t.

Not because code changed.  
But because a boundary was crossed without realizing it.

---

## 1. Runtime Boundary — Execution Drift

BTP is not one runtime.

At minimum:

- Work Zone
- AppRouter
- Cloud Foundry
- Kyma / Kubernetes
- HDI containers

A common assumption:

> “If it runs on CF, it behaves the same on Kyma.”

It doesn’t.

- Environment injection differs  
- Connectivity resolution differs  
- Startup assumptions differ  
- Error propagation differs  

A real example from the field:

The exact same CAP service behaved differently on CF and Kyma —  
not due to code, but due to environment injection semantics.

If your architecture assumes  
**“same code = same behavior”**,  
runtime drift will break your system.

---

## 2. Identity Boundary — The Context Chain

Identity is not a component.  
Identity is a chain:
IAS → XSUAA → AppRouter → CAP → S/4HANA


Each hop transforms the context:

- IAS: trust
- XSUAA: scopes
- AppRouter: tenant subdomain
- CAP: authorization
- S/4HANA: business roles

Break one link, and the entire chain snaps.

The subdomain is not cosmetic.  
**It is the physical identity boundary.**

---

## 3. Tenant Boundary — The Isolation Fabric

Tenancy is not a deployment choice.  
It is the foundation of BTP architecture.

A common misconception:

> “The global account defines the tenant.”

It doesn’t.

The **subaccount** is the tenant fabric.

Tenant boundaries define:

- subdomain → identity
- HDI container → data
- subscription → lifecycle
- role collections → access
- routing → isolation

When tenant boundaries drift, issues cascade —  
often surfacing late in the project.

---

## 4. Data Boundary — Ownership & Drift

Most teams worry about replication.

But replication is not the real danger.

**Data drift is.**

Violations include:

- cross-tenant leakage
- shared data stored in HDI
- extension tables treated as master data
- assuming replication = synchronization
- mixing extension state with business truth

Nothing breaks an extension faster than  
out-of-sync truth between the extension  
and the system of record.

Data boundary issues don’t break systems on day 1.  
They accumulate into long-term failures.

---

## 5. Integration Boundary — The Handshake

Integration problems almost never come from connectivity.

A common pattern:

- API works in Postman
- API works via API Hub
- API works via Cloud Connector
- Fails through AppRouter or Work Zone

Why?

Identity context and tenant context do not align.

Integration is not  
“can I reach the URL”.

Integration is alignment of context:

- identity
- tenancy
- routing
- lifecycle

---

## 6. Lifecycle Boundary — Invisible and Expensive

Lifecycle governs long-term behavior:

- deploy
- subscribe
- onboard
- migrate
- rollback
- deprovision

Lifecycle failures are subtle:

- deployment works, onboarding fails
- onboarding works, authorization incomplete
- HDI migration breaks tenant isolation
- upgrades overwrite tenant artifacts
- rollback leaves inconsistent schemas

Lifecycle is the least visible and most expensive boundary.

Misalignment here creates failures that surface in  
**year 2 or year 3**, not week 1.

This is why many extensions work, scale, and then collapse.

---

## 7. The Real Reason BTP Projects Fail

It is almost never:

- CAP
- XSUAA
- destinations

These are symptoms.

The root causes are:

- runtime assumptions violated
- identity chain broken
- tenant fabric misaligned
- data drift increasing
- integration mismatch
- lifecycle unmanaged

When a project “suddenly breaks”,  
a boundary has been violated.

---

## 8. The Boundary Model — A Builder-Side Diagnostic Framework

Every architecture review begins with one question:

> “Which boundary is misaligned?”

Then boundaries are checked in this order:

1. Runtime
2. Identity
3. Tenant
4. Data
5. Integration
6. Lifecycle

Almost every “impossible issue” becomes solvable  
once the correct boundary is identified.

When these boundaries align, the extension becomes:

- predictable
- scalable
- stable

When they drift, the system becomes fragile —  
even if everything appears fine.

---

## 9. Final Thoughts — Architecture Lives in the Boundaries

Enterprise architecture is not defined by components.  
It is defined by the relationships between them.

Boundaries determine:

- security
- identity propagation
- tenant isolation
- data integrity
- lifecycle safety
- integration predictability

SAP BTP is a boundary-driven platform.

When boundaries are respected, the system works.  
When they are not, nothing works.

If your project is failing and you cannot explain why, start here.

The Boundary Model will show you the truth.

— Jiandong

