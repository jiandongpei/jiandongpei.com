---
layout: default
title: Boundary Model
description: A runtime-focused architectural framework for diagnosing why SAP BTP extension systems fail after go-live.
---

# Boundary Model

The **Boundary Model** is an architectural framework for diagnosing why SAP BTP extension systems fail **after go-live**, rather than at design time.

Most enterprise extensions appear correct during build and initial testing.  
They break later—during rollout, tenant divergence, organizational change, or scale—when architectural boundaries that were previously implicit become stressed at runtime.

The Boundary Model examines failures through six **runtime-visible boundaries**, in the following order:

- **Runtime Boundary** — where system behavior actually executes, and where architectural assumptions are first violated  
- **Identity Boundary** — how identity context propagates at runtime across systems, services, and tenants  
- **Tenant Boundary** — how runtime behavior is associated with, isolated within, or leaks across tenants  
- **Data Boundary** — where data ownership, consistency, and truth are enforced during execution  
- **Integration Boundary** — whether cross-system behavior remains governed after runtime connection  
- **Lifecycle Boundary** — who controls change, upgrades, and long-term behavior over time

Failures explained by the Boundary Model are rarely caused by missing features or incorrect tools.  
They emerge when **ownership, responsibility, and execution authority drift out of alignment**, often months after deployment.

The model is derived from builder-side analysis of SAP BTP extension systems across multiple runtimes, including CAP, RAP, ABAP-based extensions, and event-driven architectures.

It is intended for **structural diagnosis rather than implementation guidance**.

This page serves as the canonical definition of the Boundary Model.
