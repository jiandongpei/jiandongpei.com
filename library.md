---
title: Library
description: Canonical index of published boundary analyses by Jiandong Pei.
---

# Library

This page indexes published analyses related to the Boundary Model and SAP BTP extension failures.

All entries below are **publicly released** and stable for reference.

---

## Published Analyses

| Title | Summary | Boundary | Date | Link |
|------|--------|----------|------|------|
| Why Even Single-Customer S/4 Extensions Must Use Multitenancy *(A002)* | Explains why single-customer extensions still require multitenant architecture on SAP BTP to remain lifecycle-safe after go-live. | Tenant / Lifecycle | 2024-xx-xx | [Read](LINK) |
| Why SAP BTP Identity Breaks Even When Everything Looks Correct *(A012)* | Analyzes how identity context silently degrades across services and tenants, causing runtime authorization failures long after deployment. | Identity | 2024-xx-xx | [Read](LINK) |
| Why SAP BTP Data Boundaries Break — And Why Extensions Fail Long After They “Work” *(A014)* | Shows how data ownership and truth drift across systems, leading to failures that cannot be fixed by configuration alone. | Data | 2024-xx-xx | [Read](LINK) |
| The Execution Boundary — Why AI Is Changing the Shape of Extensions on SAP BTP *(A016)* | Examines how execution responsibility shifts under AI-driven systems and why traditional extension assumptions collapse. | Execution / Lifecycle | 2024-xx-xx | [Read](LINK) |
| The Myth of Multitenancy on SAP BTP *(A017)* | Deconstructs common misunderstandings about multitenancy and explains what SAP BTP actually guarantees—and what it does not. | Tenant | 2024-xx-xx | [Read](LINK) |

---

## Boundary Index

- **Identity Boundary**  
  Authorization context, principal propagation, technical users, token scope, trust chains.

- **Data Boundary**  
  Ownership, replication, truth sources, cross-domain dependency.

- **Tenant Boundary**  
  Isolation, configuration divergence, onboarding/offboarding, tenant-specific behavior.

- **Lifecycle Boundary**  
  Upgrade authority, contract ownership, backward compatibility.

- **Integration Boundary**  
  Jurisdiction over cross-system behavior after connection.

Entries are grouped by their **primary boundary**, though most analyses span multiple boundaries.

This library serves as the canonical reference for boundary-related work.
