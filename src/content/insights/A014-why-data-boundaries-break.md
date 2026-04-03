---
articleId: A014
title: Why SAP BTP Data Boundaries Break — And Why Extensions Fail Long After They “Work”
published: "2025-12-09"
boundary: Data
audience: Data Architect
symptom: Integrity and ownership drift across domains
featured: false
source: LinkedIn
canonicalUrl: https://www.linkedin.com/pulse/why-sap-btp-data-boundaries-break-extensions-fail-long-jiandong-pei-qqfyc/
summary: Data ownership and integrity drift at runtime causes post–go-live failures that code fixes cannot resolve.
---

**Jiandong Pei**  
Independent SAP BTP Architect | Former SAP Build Code (Joule) Core Initiator |  
Creator of the Boundary Model™


---

## 0. A Simple Observation

Extensions don’t fail when they are built.  
They fail when they grow.

For the first 12–18 months, almost every SAP BTP extension looks “perfect”:

- fast UI  
- clean HDI tables  
- stable CAP services  
- “working” S/4 integrations  
- replicated data that appears consistent  

And then — something happens:

- onboarding a new tenant  
- S/4 upgrade  
- schema migration  
- region rollout  
- subtle mismatches in master data  
- lifecycle operations that suddenly stop working  

The extension freezes. Evolution becomes impossible.

Most teams blame CAP, HDI, Event Mesh, developers, missing APIs, or “SAP complexity.”

But the real root cause is far simpler:

**The Data Boundary was violated long before the failure became visible.**  
And Data Boundary failures surface only during lifecycle events.

---

## 1. Data Boundaries Are About Ownership, Not Storage

Developers often ask:

- “Can we store this in HDI?”  
- “Can we replicate S/4 master data?”  
- “Can CAP join this entity?”  

These are the wrong questions.

The real question is:

> **Who owns the truth?**

In SAP’s architecture:

- ✔ S/4 / MDG owns business truth. **Always.**  
- ✔ Extensions own extension truth — **never core truth.**

HDI may store:

- extension-specific attributes  
- tenant metadata  
- UI-derived fields  
- computed helper values  

HDI must not store:

- authoritative business truth  
- replicated S/4 semantics  
- shadow forms of master data  

The moment this happens, a **Shadow Truth** forms —  
and the countdown to failure begins.

---

## 2. Replication ≠ Synchronization

Replication creates drift.

Teams often believe:

- “We will keep the copy in sync.”  
- “Events will update it.”  
- “We can refresh it daily.”  

No — they won’t.

Because the SAP ecosystem does not provide:

- field-level deltas  
- globally consistent domain semantics  
- lifecycle-safe propagation  
- multi-tenant schema guarantees  

The moment you copy S/4 truth into HDI:

- the copy loses authority  
- drift becomes inevitable  
- lifecycle debt accumulates  

Shadow Truth doesn’t break features.  
**Shadow Truth breaks evolution.**

---

## 3. Why Shadow Truth Always Fails  
*(Not Immediately — But Inevitably)*

Systems with shadow data:

- work in development  
- work in pilot  
- work for early customers  
- work through the first few releases  

And then:

- onboarding breaks  
- schemas diverge  
- S/4 truth no longer aligns  
- multi-tenant upgrades fail  
- reconciliation becomes impossible  

The system freezes.

Not because developers lack skill —  
but because **architecture always wins.**

---

## 4. Why This Is Not the Developers’ Fault

Developers copy S/4 data because:

- CAP cannot join remote entities in HDI  
- UI needs low-latency dropdowns  
- S/4 APIs cannot sustain high-frequency reads  
- Event Mesh does not emit attribute-level deltas  
- MDI / SAP Graph cannot express extension semantics  

Copying data is rational engineering.

But:

**Rational engineering under structural constraints  
still violates the Data Boundary.**

This is an architectural failure — not an operational one.

---

## 5. Builder-Side Note — What the Platform Actually Tried

*(This part can only be written by someone who helped build the platform.)*

During my years working on SAP Build Code, we confronted this problem directly.

CAP developers naturally model CDS views that look like joins.  
But performing those joins in HDI requires replicating S/4 data,  
which immediately creates a second source of truth.

To address this, I contributed to the design and implementation of:

**Runtime External Service Handler**  
*(shipped, production-proven, and widely used in Build Code’s LCAP runtime)*

Its purpose:

- intercept CDS reads involving external entities  
- fetch authoritative truth from S/4 at runtime  
- perform semantic joins in memory, not in HDI  

This ensured:

- zero persistence of S/4 business truth  
- derived-only fields in HDI  
- no accidental Shadow Truth  
- Data-Boundary-safe composition  

From the outside, it looked like a convenience feature.  
From the Builder Side, it was an architectural guardrail.

But even platform safeguards cannot overcome structural limits:

- S/4 emits no field-level deltas  
- semantics differ across domains  
- lifecycle propagation cannot be guaranteed  
- multi-tenant schema alignment cannot be enforced  
- truth cannot be reconstructed from partial events  

If even platform-level mechanisms cannot fully govern truth,  
the problem is the **boundary** — not the developers.

---

## 6. Derived Fields Are Allowed. Shadow Truth Is Not.

Extensions may store:

- display labels  
- search keys  
- composite strings  
- performance caches  
- UI-level derived attributes  

But derived fields must follow strict rules:

- Derived ≠ truth  
- Derived must not drive business logic  
- Derived must be fully rebuildable  
- Derived must drift safely  

Shadow Truth violates all of these.

---

## 7. The Lifecycle Test

Ask one question:

> **“Can you onboard a brand-new tenant  
> and reconstruct truth perfectly?”**

If the answer is no:

- the extension is already broken  
- the failure simply hasn’t surfaced yet  

Lifecycle events reveal the truth.

---

## 8. The Data Boundary Contract — The Only Sustainable Path

- S/4 is the only System of Record for business truth.  
- HDI stores extension truth and derived truth — **never core truth.**  
- Replication is allowed. Shadow Truth is not.  
- Derived fields must be explicitly non-authoritative.  
- All tenants must evolve schema identically.  
- Extension data must be reconstructible from S/4 truth.  
- Events invalidate caches; they do not synchronize truth.  
- Runtime composition is allowed. Authoritative recomposition is not.  

This is the only sustainable model.

---

## 9. Why Extensions Fail Long After They “Work”

Because:

**Data Boundary violations do not break features.  
They break evolution.**

And evolution is what defines SaaS.

---

## 10. Closing Thoughts  
*(From Someone Who Helped Build the Platform)*

I have been on both sides:

- inside SAP building Build Code & LCAP runtime  
- supporting internal S/4 and BTP product teams  
- architecting customer extensions  
- auditing multi-tenant landscapes  

The conclusion is consistent:

Extensions do not fail because teams are inexperienced.  
Extensions fail because **Data Boundaries are architectural** —  
and architecture always wins.

Respect truth.  
Derive locally.  
Never create Shadow Truth.  
Design for lifecycle — not for demos.

This is the Boundary Model.  
And this is why it matters.

— Jiandong
