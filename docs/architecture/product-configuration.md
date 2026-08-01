# Product Configuration System

**Status:** Draft
**Version:** 1.0
**Last Updated:** 2026-06-27
**Related Sprint:** 3.6 – Product Configuration System

---

# Purpose

The Product Configuration System defines **how a knife is described**.

Its responsibility is to capture the characteristics of a knife accurately and consistently.

It is **not** responsible for pricing, inventory, or order management.

---

# Design Goals

The Product Configuration System should:

* describe a knife completely
* be simple for makers to use
* support handcrafted knives
* support production knives
* support future marketplace expansion
* remain independent of pricing

---

# Guiding Principle

Configuration answers one question:

> **"What is this knife?"**

Configuration does **not** answer:

> **"What is this knife worth?"**

---

# Business Concepts

## Product

A Product represents a family of knives.

Examples:

* Hunter
* Camp Knife
* Skinner
* EDC

Products define shared information.

---

## Configuration Dimensions

A Configuration Dimension is a characteristic that can vary.

Examples include:

* Steel
* Blade Shape
* Handle Material
* Handle Color
* Blade Finish
* Grind
* Lock Type
* Sheath

A Product determines which dimensions apply.

---

## Configuration Values

Each Configuration Dimension contains one or more possible values.

Example:

Steel

* 1095
* CPM MagnaCut
* Damascus
* AEB-L

Example:

Handle Material

* Walnut
* Maple Burl
* Micarta
* G10

Configuration Values describe.

They do **not** determine selling price.

---

## Configured Knife

A Configured Knife selects one value from each applicable Configuration Dimension.

Example:

Hunter

Steel:
Damascus

Blade Shape:
Clip Point

Handle Material:
Maple Burl

Handle Color:
Natural

Finish:
Hand Satin

This collection of selections completely describes the knife.

---

# Selling Price

Selling price belongs exclusively to the Configured Knife.

The Product Configuration System intentionally does not calculate pricing.

The maker assigns value to the completed knife.

Two knives with identical configurations may legitimately have different prices.

---

# Inventory

Inventory is not part of Product Configuration.

Inventory belongs to the Configured Knife.

Configuration describes the knife.

Inventory describes availability.

These are separate business concepts.

---

# Images

Configured Knives may have their own photographs.

This is especially important for:

* Damascus steel
* Burl woods
* Exotic handle materials
* One-of-a-kind handcrafted knives

Customers should see photographs of the actual knife being purchased whenever possible.

---

# Categories

The Product Configuration System supports all product categories.

## Handcrafted

Every configured knife is typically unique.

Inventory is often one.

---

## MidTech

Multiple configured knives may share the same configuration.

Inventory is greater than one.

---

## Signature Series

Configured knives may exist in limited production runs.

The same configuration may be produced repeatedly.

---

# Future Marketplace

As Texas Knife Barn evolves into a marketplace, each Configured Knife will belong to a Maker.

The Product Configuration System is intentionally independent of the Maker entity so that the same configuration model can be used by every craftsman.

---

# Business Rules

1. Products describe families.
2. Configuration describes the knife.
3. Price belongs to the Configured Knife.
4. Inventory belongs to the Configured Knife.
5. Images belong to the Product and/or Configured Knife.
6. Every Configured Knife represents something that can be purchased.

---

# Implementation Notes

Current implementation may continue to use the existing `product_variants` table while the platform transitions toward the Product Configuration model.

The business language and the implementation language are intentionally separated.

Future database refactoring may rename or restructure implementation details without changing the business concepts described in this document.

---

# Future Considerations

Future versions of the Product Configuration System may include:

* reusable configuration templates
* maker-specific configuration dimensions
* validation rules
* required configuration dimensions
* configurable search filters
* advanced specification generation

These enhancements should build upon the principles defined in this document rather than replacing them.

---

# Closing Statement

The Product Configuration System exists to describe handcrafted knives faithfully.

Its purpose is not to automate pricing or manufacturing.

Its purpose is to help makers communicate exactly what they have created so that customers understand and appreciate the uniqueness of every knife.
