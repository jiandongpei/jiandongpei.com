---
articleId: "A005"
title: "When CAP Forgets Its Boundaries - An Architect’s View from the Builder Side"
published: "2026-01-08"
source: "LinkedIn"
sourceUrl: "https://www.linkedin.com/pulse/when-cap-forgets-its-boundaries-architects-view-from-jiandong-pei-u5hjc"
summary: "CAP projects often pass unit and contract tests yet fail at runtime boundaries — identity propagation, tenant routing, and integration jurisdiction."
tags: [sap-btp, cap, boundary-model, architecture]
---


---

## Preface — A Boundary Problem Disguised as a CAP Problem

Most CAP-related failures are not CAP problems.  
They are boundary violations that CAP was never designed to absorb.

When an application model is quietly promoted into a platform role,  
complexity does not disappear —  
it relocates into places no one owns.

That is where large SAP BTP programs begin to fracture.

This is not a critique of CAP.

CAP is one of the strongest application models SAP has ever built.  
It is elegant.  
It is productive.  
It is opinionated in the right places.

This article exists not because CAP is weak,  
but because CAP is strong enough that teams start using it beyond its constitutional boundary.

And when boundaries blur, failures do not appear as syntax errors.  
They appear as cross-layer incidents, cross-team investigations, and long-term lifecycle debt.

That is why so many CAP projects “work” — until they suddenly don’t.

---

## 1. CAP’s Constitutional Role — The Application Boundary

According to SAP’s own definition, CAP is:

> A framework of languages, libraries, and tools for building enterprise-grade cloud applications.

Architecturally, CAP is designed to own:

- Domain modeling (CDS / CDL)
- Service contracts (OData / REST / Events)
- Application logic and transaction semantics
- Application-level authorization
- Application-level multitenancy (schema-per-tenant)
- Persistence abstraction and consistency

Within this boundary, CAP is world-class.

But CAP was never designed to own:

- Enterprise identity architecture
- Global account / directory / subaccount topology
- Work Zone experience composition
- Platform-level SaaS governance
- Multi-application lifecycle orchestration
- Runtime topology decisions (CF vs Kyma)
- Region, residency, or rollout strategy

CAP can integrate with these layers.  
But it must not be mistaken for them.

CAP can interface with platform layers,  
but it must not govern them.

The problem begins when teams forget the distinction.

---

## 2. How CAP Gradually Drifts Beyond Its Boundary

Over time, CAP added many helpful conveniences:

- Multitenancy scaffolding
- SaaS provisioning hooks
- Deployment templates
- Sample UI previews
- Work Zone snippets

Each feature is reasonable in isolation.

But together, they can create a dangerous illusion:

> “CAP is the platform.”

Developers begin to treat CAP as the place where:

- UI structure is decided
- Identity problems are solved
- Tenant architecture is defined
- Lifecycle behavior is encoded

At that moment, boundaries blur.  
And once boundaries blur, failures become systemic.

---

## 3. The UI Boundary — Convenience Is Not Ownership

CAP can generate UI previews and support metadata-driven Fiori Elements.  
This is a strength.

But:

- UI composition
- navigation
- authorization mapping
- Work Zone content structure
- launchpad routing behavior

belong to the experience layer  
(Work Zone / Launchpad / Fiori Elements),  
not the CAP runtime.

When UI responsibility leaks into CAP artifacts:

- UI issues become service issues
- authorization issues look like CDS issues
- routing issues look like data issues

The system still “works.”  
But first responsibility disappears.

No team knows where to start debugging.

---

## 4. The Multitenancy Boundary — MTX ≠ SaaS Architecture

CAP multitenancy provides:

- tenant onboarding callbacks
- tenant-specific HDI containers
- subscription lifecycle wiring
- XSUAA configuration fragments

This is application-level multitenancy.

Enterprise SaaS requires more:

- subaccount-as-tenant strategy
- cross-application tenant governance
- region and residency design
- versioned rollout across tenants
- deterministic evolution across years

When teams treat:

> “cds add multitenancy”

as

> “we now have SaaS architecture”

they are building on an incomplete model.

CAP supports multitenancy.  
It does not define multitenant architecture.

---

## 5. The Security Boundary — Application Auth ≠ Identity Architecture

CAP handles:

- `@requires` annotations
- `req.user` authorization
- service-level role checks

Enterprise identity involves:

- IAS trust configuration
- XSUAA token semantics
- role collections
- principal propagation
- subdomain-based tenant isolation
- AppRouter mediation

These are platform-level contracts.

When identity design decisions are buried inside CAP logic:

- identity drift becomes invisible
- “works in Postman” becomes normal
- AppRouter failures look mysterious

Identity is a chain, not a component.  
CAP is only one link.

---

## 6. The Deployment Boundary — Templates Are Not Topology

CAP tooling can generate:

- `mta.yaml`
- `xs-security.json`
- SaaS provisioning fragments

These are conveniences — not architecture.

Real topology decisions belong to:

- global account and directory design
- subaccount landscape planning
- CF vs Kyma strategy
- connectivity and destination governance
- runtime isolation and rollback logic

When topology decisions are implicit,  
lifecycle failures appear years later — not at go-live.

---

## 7. What Happens When Boundaries Blur

When CAP absorbs responsibilities it was never meant to own:

- issues become cross-layer by default
- debugging becomes cross-team by necessity
- ownership becomes ambiguous
- “small changes” trigger large side effects

This is not a CAP failure.  
It is a boundary failure.

And boundary failures do not show up as syntax errors.  
They show up as organizational paralysis.

**Example:**  
A “metadata issue” turns into a cross-layer incident:

annotations → CAP service → role collections →  
AppRouter routing → Work Zone tile visibility.

No single team owns the first diagnostic step.

---

## 8. The Builder-Side Reality Most Docs Never Say

Inside SAP, large product teams do not release isolated artifacts.

They release governed systems, where:

- identity definitions
- schema contracts
- routing behavior
- UI composition
- tenant lifecycle rules

are treated as one coherent unit.

Customers often release applications.  
SAP releases systems.

The difference is not tooling.  
It is boundary discipline.

---

## 9. How CAP Should Be Used — Correctly

**Small teams / PoCs**

- CAP can feel almost full-stack
- MTX scaffolding is appropriate
- convenience outweighs long-term risk

**Mid-size enterprise projects**

- CAP should own domain logic
- UI / Work Zone owned elsewhere
- identity and tenancy explicit

**Large programs**

- CAP is the application kernel
- platform architecture is separate
- boundaries enforced early
- lifecycle owned intentionally

CAP performs best when it stays inside its boundary.

---

## 10. Final Thought — When CAP Issues Become Cross-Layer

Here is the simplest diagnostic rule:

If a “CAP problem” starts crossing  
identity, routing, lifecycle, and tenant evolution,  
it is no longer a CAP problem.

It is an architectural boundary failure.

At that point, you cannot fix it by:

- refactoring CDS
- tuning handlers
- adding annotations
- rearranging modules

You fix it by re-assigning ownership —  
and enforcing boundaries accordingly.

Because boundary violations cannot be solved by framework tuning.  
They require architectural judgment.

---

**— Jiandong Pei**  
Independent SAP BTP Architect  
Creator of the Boundary Model™

