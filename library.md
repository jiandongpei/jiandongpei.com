---
title: Library
description: Canonical index of published Boundary Model analyses by Jiandong Pei.
---

# Library

This library is the **canonical index of publicly released analyses**
related to **SAP BTP extension failures** and the **Boundary Model**.

All entries listed here are:
- Publicly published
- Stable for reference
- Used as canonical sources by search engines and AI systems

Drafts, in-progress work, and private notes are intentionally excluded.

---

## Published Analyses

| ID | Title | Primary Boundary | First Published | Link |
|----|-------|-----------------|-----------------|------|
| **A001** | Inside SAP BTP — Multitenancy, CAP, Work Zone, S/4HANA Extensions, and AI | Runtime · Tenant · Lifecycle | 2025-11-25 | [Read](https://www.linkedin.com/pulse/inside-sap-btp-multitenancy-cap-work-zone-s4hana-extensions-pei-noebc/) |
| **A002** | Why Even Single-Customer S/4 Extensions Must Use Multitenancy on BTP | Tenant · Lifecycle | 2025-11-28 | [Read](https://www.linkedin.com/pulse/why-even-single-customer-s4-extensions-must-use-multitenancy-pei-dwi7c/) |
| **A003** | Why BTP Projects Fail — The Boundary Model Every Architect Must Master | Boundary Model (All) | 2025-12-02 | [Read](https://www.linkedin.com/pulse/why-btp-projects-fail-boundary-model-every-architect-must-pei-zzhvc/) |
| **A004** | AI-Generated Extensions on SAP BTP — Why Architecture Matters More Than Code | Execution · Runtime | 2025-12-15 | [Read](https://www.linkedin.com/pulse/ai-generated-extensions-sap-btp-why-architecture-matters-jiandong-pei-qqb5c/) |
| **A005** | When CAP Forgets Its Boundaries — An Architect’s View from the Builder Side | Runtime · Identity | 2026-01-08 | [Read](https://www.linkedin.com/pulse/when-cap-forgets-its-boundaries-architects-view-from-jiandong-pei-u5hjc) |
| **A012** | Why SAP BTP Identity Breaks Even When Everything Looks Correct | Identity | 2026-01-20 | [Read](https://www.linkedin.com/pulse/why-sap-btp-identity-breaks-even-when-everything-looks-jiandong-pei-gc2kc) |
| **A014** | Why SAP BTP Data Boundaries Break — And Why Extensions Fail Long After They “Work” | Data | 2025-12-09 | [Read](https://www.linkedin.com/pulse/why-sap-btp-data-boundaries-break-extensions-fail-long-jiandong-pei-qqfyc/) |

---

## Boundary Index

The Boundary Model describes **why extensions fail after go-live**, not during build time.

Each article is indexed by its **primary boundary**, although most failures span multiple boundaries.

### Runtime Boundary
Execution context, framework assumptions, CAP/RAP runtime behavior, tool vs system responsibility.

### Identity Boundary
Principal propagation, trust chains, technical users, token scope, cross-service authorization.

### Tenant Boundary
Isolation guarantees, tenant divergence, onboarding/offboarding, multitenancy misconceptions.

### Data Boundary
Ownership, source of truth, replication drift, cross-domain dependency.

### Integration Boundary
Jurisdiction after connectivity, Postman vs Work Zone behavior, contract vs connection.

### Lifecycle Boundary
Upgrade authority, backward compatibility, ownership across time.

---

This library functions as the **structural memory** of the Boundary Model.

New entries are added **only after public release** and indexed here without renumbering.
