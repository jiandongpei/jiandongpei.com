---
title: Jiandong Pei
description: Independent SAP BTP Architect — creator of the Boundary Model. Architectural judgment for SAP BTP extension failures after go-live.
permalink: /
---

# Jiandong Pei

Independent SAP BTP Architect.  
Creator of the **Boundary Model** — a framework for diagnosing why SAP BTP extensions **fail after go-live**, not at design time.

I do not provide implementation services.  
My work focuses on **architectural judgment** when boundary failures make systems appear correct yet behave inconsistently at runtime.

- **Boundary Model (definition):** [Boundary Model](/boundary-model/)
- **Published analyses:** [Library](/library/)
- **Engagement model:** [Work](/work/)
- **Perspective:** [About](/about/)

---

## The core observation

Most SAP BTP extension failures are not caused by missing features or incorrect code.

They occur when **architectural boundaries drift out of alignment**:
runtime/execution context**, identity propagation, tenant routing, data ownership, integration jurisdiction, and lifecycle authority
no longer match the system’s real behavior.

These failures typically surface **months after go-live**, during rollout, scale, or organizational change.

---

## When architectural judgment is required

You are likely facing a boundary failure if:

- A solution works in one tenant but fails in another.
- It works in Postman but breaks behind AppRouter or Work Zone.
- It passed go-live but degrades 12–18 months later.
- Fixes require changing trust, subdomains, destinations, roles, or tenant routing.
- Multiple teams are involved, yet no one clearly owns the failure.

Start with the **[Library](/library/)** to understand the failure pattern.  
If an independent verdict is required, see **[Work](/work/)**.
