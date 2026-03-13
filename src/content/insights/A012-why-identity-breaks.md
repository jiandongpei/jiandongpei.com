---
articleId: A012
title: Why SAP BTP Identity Breaks Even When Everything Looks Correct
published: "2026-01-20"
boundary: Identity
audience: Security Architect
symptom: Works in Postman, fails behind AppRouter/Work Zone
featured: true
source: LinkedIn
canonicalUrl: https://www.linkedin.com/pulse/why-sap-btp-identity-breaks-even-when-everything-looks-jiandong-pei-gc2kc
summary: Identity propagation failures across layers despite correct configuration; where runtime context differs from design intent.
---

Why SAP BTP Identity Breaks Even When Everything Looks Correct
A Boundary Verdict, Not a Configuration Guide

By Jiandong Pei — Independent SAP BTP Architect · Builder-Side Veteran

Identity failures are the most common source of “mysterious” breakdowns in SAP BTP landscapes.
And they remain the least understood—because most teams keep looking inside components.

They configure IAS, XSUAA, AppRouter, CAP, destinations, and S/4 trust “correctly,”
see everything green in the cockpit,
and still fail at runtime.

The patterns are painfully consistent:

Works in Postman, fails through Work Zone/AppRouter.

Token is valid, but S/4 returns the wrong data / wrong org context / random 403.

Dev is green. Prod is green. Users are blocked.

Why?

Because identity on SAP BTP does not live in components.
It lives in boundaries—the transitions between layers, where context is transformed, constrained, routed, or silently overwritten.

1. The Real Cause: Modern Teams Start in the Wrong Place

Almost every real-world project starts like this:

Build CAP services

Add a tile

Create an XSUAA instance

Configure destinations

Connect to S/4

Deploy

This sequence looks harmless. It is not.

Because it embeds a misconception that seeds failure:

Identity = “CAP auth + XSUAA scopes.”

That belief creates a structural trap:

IAS → owned by Basis / security

S/4 trust → owned by functional/security teams

Destinations → owned by integration teams

Work Zone → owned by experience/UI teams

Subaccounts → treated as “just environments”

Each component has an owner.
No one owns the chain.

And on SAP BTP, identity is not a node.
Identity is a chain.

2. The CAP-First Illusion

The most common misconception in the ecosystem is:

“Identity starts at CAP.”

No.

CAP is not the start of identity.
CAP is a downstream consumer of identity decisions that were made earlier—often implicitly.

Starting your security model downstream guarantees upstream misalignment.
By the time CAP “works,” many identity failures have already been seeded—not as bugs, but as boundary violations that will only surface when the landscape is exercised through:

the real entry path (Work Zone / AppRouter), and

the real propagation path (destinations / S/4 trust contracts).

3. Identity Is a Chain, Not a Component

In many SAP BTP extensions, the effective chain often looks like:

Identity Provider → IAS (or IAS trust) → XSUAA → AppRouter → CAP → S/4HANA

Your landscape may include additional layers (API Management, Integration Suite, multiple runtimes, multiple tenants).
The rule does not change:

Each boundary transforms identity.
Identity correctness is defined at the transitions—not inside the boxes.

IAS / IdP: authentication, corporate policy, provider routing

XSUAA: token issuance, audience/client context, tenant-mode semantics

AppRouter: tenant resolution, token mediation, route/session constraints

CAP: authorization decisions, user/tenant semantics in business logic

S/4HANA: system-of-record trust semantics and propagation reality

Identity breaks because teams configure components,
but identity correctness is defined by the links between components.

A system can be “green” in every component and still be identity-invalid as a whole.

4. The Host/Subdomain Is the Physical Identity Boundary

On SAP BTP, the host/subdomain in your URL is not cosmetic.
In most landscapes, it is the physical selector that drives identity context:

which trust / identity provider routing is used

which tenant context is resolved

how AppRouter applies mediation and constraints

how destination context binds propagation

how Work Zone routing behaves

This is why one sentence repeats across BTP projects:

“It works in Postman but not through AppRouter.”

Because Postman is not your production entry boundary.
AppRouter is.

Postman often bypasses conditions your real entry path must satisfy.
So “Postman works” is not proof of identity correctness.
It is often a false comfort signal.

5. The Signature Symptom: Works Everywhere Except Through AppRouter

This is the most reliable failure signature of a boundary violation:

The API works via:

Postman

direct OAuth

API Hub

certain technical flows

But fails via:

Work Zone

UI tile navigation

the AppRouter-mediated path

the full CAP-through-UI route chain

Many teams interpret this as “AppRouter is annoying,” or “Work Zone is unstable.”

That interpretation is wrong.

AppRouter is not “just a router.”
AppRouter is an identity boundary enforcement layer:

tenant mediation

host/subdomain validation

token exchange & session constraints

destination context processing

propagation gateway behavior

If AppRouter rejects the flow, the verdict is simple:

Identity and tenancy were misaligned upstream—long before CAP code executed.

6. Destinations: The Silent Identity Killer

If the host/subdomain is the physical boundary, destinations are the silent boundary—
because they can rewrite identity while everything still “looks correct.”

The 5 most dangerous boundary violations

Subaccount-level destinations used for tenant-scoped APIs
→ collapses multiple tenants into a single effective identity model

Technical users used where principal propagation is required
→ system-of-record semantics become unpredictable and non-auditable

Manually created destinations in landscapes that require onboarding
→ identity correctness becomes environment folklore, not lifecycle-governed truth

Wrong authentication type chosen
→ OAuth2SAMLBearerAssertion vs OAuth2ClientCredentials is not a “setting”; it is the propagation contract

Identity overwritten inside destination configuration
→ “everything is green” while user context is silently replaced or stripped

Destinations are not API bookmarks.
Destinations are identity boundaries disguised as configuration.

7. Why “Everything Looks Correct” Is Not Evidence

Teams believe identity is correct because each component reports local success:

IAS login success

XSUAA token valid

AppRouter starts and routes

CAP resolves a user

S/4 returns data (sometimes the wrong data)

Everything looks correct.

Because everything is correct—locally.

But identity correctness is not a local property.
Identity correctness is a composition property.

The failure is not a node.
The failure is the relationship between nodes.

Identity is a chain.
Chains break at the links.

8. Boundary Failure Signatures and Boundary Tests

Not “how to fix,” but “how to prove it’s structurally invalid.”

Signature A — “Postman works, Work Zone fails”

Verdict: The entry boundary (tenant/host/subdomain) is not owned.

Boundary evidence to inspect:

Is the UI entry host consistent with your tenant routing model?

Does AppRouter enforce tenant resolution the same way across environments?

Is XSUAA tenant-mode aligned with routing and subscription assumptions?

Are redirect URIs and route hosts aligned with the real entry domain?

If these are inconsistent, Postman success is irrelevant—because it bypassed the physical boundary.

Signature B — “Token valid, but S/4 returns wrong data / wrong context / random 403”

Verdict: The propagation boundary was overwritten or downgraded.

Boundary evidence to inspect:

Does the destination auth type match the propagation contract required by the flow?

Is a technical user being used where user context must be preserved?

Does any layer overwrite audience/identity context?

Does S/4 expect a different principal than what is actually propagated?

When this fails, the system is not “slightly misconfigured.”
It is identity-invalid at the integration boundary.

Signature C — “Dev works, Prod fails, everything is green”

Verdict: Identity drift across environments.

Boundary evidence to inspect:

Are trust decisions identical in meaning—not just “configured”?

Are audiences/scopes/tenant semantics aligned across environments?

Are role collection mappings consistent across subaccounts?

Are destinations identical in meaning—not just in name?

Green cockpit is a component signal.
This failure is a cross-environment boundary signal.

Signature D — “Direct OAuth works, UI tile fails”

Verdict: AppRouter session/token exchange boundary mismatch.

Boundary evidence to inspect:

Does the UI path trigger a different token flow than the direct call?

Is session/token exchange aligned with the chosen auth mechanism?

Does routing introduce tenant context the direct call never exercised?

If direct OAuth works but UI path fails, your system is not “working.”
It is working only in a non-production boundary path.

9. Red Lines: When Identity Is Architecturally Invalid

Some landscapes are not “slightly wrong.”
They are architecturally invalid.

If you cross any red line below, you do not have an identity model—
you have a collection of local successes.

Red Line #1: Tenant-scoped access routed through non-tenant-scoped destinations

Red Line #2: Principal propagation replaced by technical users to “make it work”

Red Line #3: Manual destination configuration in landscapes that must support onboarding/lifecycle

Red Line #4: Host/subdomain treated as UI concern instead of identity substrate

Red Line #5: Component owners exist, but no chain owner exists

These are not best-practice violations.
They are boundary violations.

And boundary violations do not “sometimes work.”
They work until they don’t—usually at the worst possible time.

Final Thought: Identity Is the Spine of Your Extension

Identity drives:

routing

authorization

tenancy

S/4 trust

data visibility

onboarding & lifecycle determinism

If identity is consistent, your extension becomes predictable.
If identity is inconsistent, nothing behaves reliably—not even with perfect code.

Identity is not a component.
Identity is the spine of your system.

If the spine bends, the whole body collapses.

— Jiandong