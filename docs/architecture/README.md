
# Texas Knife Barn Architecture

**Status:** Approved
**Version:** 1.0
**Last Updated:** 2026-06-27
**Project:** Texas Knife Barn

---

# Purpose

This file serves as the **README.md for the **``** directory**.

The `docs/architecture` directory contains the architectural documentation for the Texas Knife Barn platform.

These documents describe **why** the system is designed the way it is—not simply **how** it is implemented.

As the platform evolves, this directory should remain the authoritative source for architectural principles, design decisions, and business-domain concepts.

---

# Philosophy

The source code explains **how** the software works.

The architecture documents explain **why** it was built that way.

When future development raises questions such as:

* Why is inventory stored this way?
* Why are configured knives separate from products?
* Why is price stored on the configured knife instead of configuration?
* Why are customer and admin authentication separated?

…the answers should be found here.

---

# Guiding Question

Every significant architectural decision should answer one question:

> **Does this match the Texas Knife Barn domain model?**

If the answer is **No**, the implementation should be reconsidered before code is written.

---

# Documentation Structure

```
docs/
└── architecture/
    ├── README.md
    ├── domain-model.md
    ├── product-configuration.md
    ├── inventory.md
    ├── authentication.md
    ├── order-lifecycle.md
    └── decisions/
        ├── README.md
        ├── ADR-0001-inventory-source-of-truth.md
        ├── ADR-0002-configured-knife-model.md
        └── ADR-0003-maker-entity.md
```

---

# Document Descriptions

## README.md

Introduces the architecture documentation and explains its purpose.

---

## domain-model.md

Defines the business concepts that drive Texas Knife Barn.

Examples include:

* Products
* Configured Knives
* Inventory
* Makers
* Pricing
* Categories

This document should be considered the foundation of every future architectural decision.

---

## product-configuration.md

Describes the Product Configuration System introduced in Sprint 3.6.

It explains how products are configured, how configured knives are created, and how the system models handcrafted knives.

---

## inventory.md

Defines the inventory architecture.

Topics include:

* Inventory ownership
* Inventory lifecycle
* Inventory adjustments
* Low-stock thresholds
* Inventory as the single source of truth

---

## authentication.md

Documents authentication architecture.

Topics include:

* Customer authentication
* Administrator authentication
* Authorization boundaries
* Security principles

---

## order-lifecycle.md

Documents the complete order workflow.

Topics include:

* Cart
* Checkout
* Order creation
* Inventory reduction
* Fulfillment
* Shipment
* Completion

---

# Architecture Decision Records (ADRs)

The `decisions/` directory contains Architecture Decision Records.

An ADR captures:

* the problem being solved
* the decision that was made
* the reasoning behind the decision
* consequences of the decision

ADRs exist to preserve architectural intent long after implementation details have changed.

---

# When to Create an ADR

A new ADR should be created whenever an architectural decision:

* changes the domain model
* introduces a new core entity
* changes how important data is stored
* changes ownership of business concepts
* changes long-term architectural direction

Examples include:

* inventory architecture
* product configuration
* maker support
* authentication boundaries
* pricing model

Minor implementation details do not require ADRs.

---

# Documentation Guidelines

These documents should describe:

* business concepts
* architectural principles
* design rationale
* long-term direction

These documents should **not** describe:

* implementation details
* specific React components
* TypeScript syntax
* SQL statements
* framework-specific behavior

Those belong in the source code.

---

# Living Documentation

The architecture documentation is intended to evolve alongside the software.

When architecture changes:

1. Update the relevant document.
2. Add or update an ADR if the change is architectural.
3. Keep the documentation synchronized with the implementation.

Documentation should never become an afterthought.

---

# Long-Term Vision

Texas Knife Barn begins as an online storefront for handcrafted knives created by Joel Bintliff and Brian Milinski.

The long-term vision is to become a platform that enables custom knife makers to present, manage, and sell their work online while remaining faithful to the craft of knife making.

The architecture should always reflect this vision.

---

# Final Principle

The software should adapt to the way custom knife makers build and sell exceptional knives.

The business should never have to adapt itself to fit the limitations of generic e-commerce software.
