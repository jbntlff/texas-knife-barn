# Texas Knife Barn Domain Model

**Status:** Approved
**Version:** 1.0
**Last Updated:** 2026-06-27
**Related Sprint:** 3.6 – Product Configuration System

---

# Purpose

This document defines the core business concepts of the Texas Knife Barn platform.

It describes **what the business is**, not how the software is implemented.

Every architectural decision, database schema, API, user interface, and workflow should support the domain model described here.

Whenever a design question arises, ask:

> **Does this match the Texas Knife Barn domain model?**

If the answer is **No**, the implementation should be reconsidered.

---

# Vision

Texas Knife Barn is being designed as a platform for custom knife makers.

It begins as the online storefront for:

* Joel Bintliff
* Brian Milinski

The long-term vision is to allow additional makers to present and sell their work while preserving the individuality of every maker and every knife.

The architecture should naturally support this evolution.

---

# Domain Philosophy

Texas Knife Barn is **not** a generic e-commerce application.

It is software designed to model how custom knife makers create, manage, and sell handcrafted knives.

The software should adapt to the craft—not force the craft to adapt to generic commerce software.

---

# Core Principles

## Principle 1 — Think Like a Knife Maker

A knife maker does not think in terms of inventory records and product variants.

A knife maker thinks about:

* designing a knife
* selecting materials
* crafting something unique
* assigning value
* offering it for sale

The software should support that workflow.

---

## Principle 2 — Products Represent Families

A Product is not a physical knife.

A Product represents a family or style of knives.

Examples include:

* Hunter
* Camp Knife
* Skinner
* EDC

Products define common characteristics shared by multiple knives.

---

## Principle 3 — Configured Knives Are Sold

Customers purchase a specific configured knife.

A configured knife represents:

* one physical knife
* one SKU
* one selling price
* one inventory record
* one collection of photographs

Internally this may continue to use the existing `product_variants` table, but the business concept is a **Configured Knife**.

---

## Principle 4 — Configuration Describes

Configuration answers questions such as:

* Which steel?
* Which handle material?
* Which blade shape?
* Which finish?
* Which sheath?

Configuration describes the knife.

Configuration does **not** determine price.

---

## Principle 5 — The Maker Determines Value

Selling price is determined by the maker.

Price reflects the complete evaluation of the finished knife.

Factors may include:

* craftsmanship
* rarity
* Damascus pattern
* handle figure
* symmetry
* finish quality
* artistic value

Because of this:

**Price belongs to the Configured Knife.**

Price does **not** belong to configuration.

---

## Principle 6 — Every Knife Is an Individual

Even two knives with identical configurations may differ in:

* Damascus pattern
* wood grain
* handle figure
* photographs
* craftsmanship
* selling price

The platform should never assume handcrafted knives are interchangeable.

---

## Principle 7 — Inventory Belongs to the Knife

Inventory tracks the availability of a configured knife.

Inventory is independent from product information.

Inventory exists as its own business concept.

The inventory system is the single source of truth for stock.

---

## Principle 8 — Every Concept Has One Owner

Each business concept should have one authoritative owner.

| Business Concept    | Owner                      |
| ------------------- | -------------------------- |
| Product Information | Product                    |
| Configuration       | Product Configuration      |
| Selling Price       | Configured Knife           |
| Inventory           | Inventory                  |
| Images              | Product / Configured Knife |
| Maker               | Maker                      |

Duplicating ownership creates ambiguity and should be avoided.

---

# Primary Business Entities

## Maker

Represents the craftsman responsible for creating a knife.

Initially:

* Joel Bintliff
* Brian Milinski

Future versions of Texas Knife Barn should support additional makers without changing the overall architecture.

---

## Product

Represents a family of knives.

Examples:

* Hunter
* Camp Knife
* Skinner

Products provide shared information such as:

* description
* category
* specifications common to all configurations

Products are templates—not inventory.

---

## Product Configuration

A Product Configuration describes the characteristics of a knife.

Examples include:

* Steel
* Handle Material
* Blade Shape
* Blade Finish
* Sheath
* Grind
* Lock Type

Configuration exists to accurately describe the knife.

---

## Configured Knife

A Configured Knife is a completed, sellable knife.

It contains:

* SKU
* Selling Price
* Inventory
* Images
* Selected Configuration

Customers purchase configured knives.

---

## Inventory

Inventory represents the current stock available for a configured knife.

Inventory is maintained independently from product information.

Inventory is responsible for:

* quantity
* availability
* low-stock thresholds

---

# Product Categories

Texas Knife Barn initially supports three product categories.

## Handcrafted

One-of-a-kind knives.

Typical characteristics:

* Inventory = 1
* Unique photographs
* Individually priced

---

## MidTech

Small production runs.

Configurations may repeat.

Inventory is typically greater than one.

---

## Signature Series

Limited production knives.

Produced in larger quantities while maintaining premium craftsmanship.

---

# Long-Term Architecture

The platform should naturally evolve toward the following business hierarchy.

```text
Maker
    ↓
Product
    ↓
Configuration
    ↓
Configured Knife
    ↓
Inventory
```

This hierarchy represents the business—not necessarily the database schema.

---

# Decision Framework

When introducing a new feature, ask the following questions:

1. Does this reflect how a knife maker thinks?
2. Does every concept have a single owner?
3. Does this preserve the individuality of each knife?
4. Does this scale naturally to multiple makers?
5. Does this simplify the domain rather than complicate it?

If the answer to any question is **No**, reconsider the design.

---

# Closing Statement

Texas Knife Barn exists to celebrate craftsmanship.

The platform should present every handcrafted knife as an individual work created by a maker—not as an interchangeable retail product.

Every architectural decision should preserve that philosophy.
