---
title: "Semantic Entity Mapping"
description: "Connect disparate semantic spaces by aligning the same real-world entities across different identifier schemes, data models, and ontologies—so your data becomes interoperable end-to-end."
icon: "mapping"
weight: 1
---

## The Problem

Your data uses one set of identifiers. Your collaborators use another. Public databases use a third. Without mappings between them, integration is manual, error-prone, and doesn't scale.

Semantic entity mapping solves this by systematically aligning entities across identifier schemes, data models, and ontologies—so "the same thing" is recognized as such, wherever it appears.

## What You Get

A complete, validated mapping set connecting your source entities to your target vocabularies, delivered in [SSSOM](https://w3id.org/sssom) format with full provenance. Depending on your needs, this can be:

- A **one-off mapping** for a specific integration project
- A **continuous mapping system** that stays current as source and target resources evolve

## How It Works

### 1. Scope Definition

We start by agreeing on boundaries:

- **What's being mapped?** (e.g., all disease concepts, a subset of assays, specific entity types)
- **Where are they mapping to?** (e.g., a particular ontology branch, multiple target vocabularies)
- **What precision is required?** Do you need exact semantic matches, or is controlled conflation acceptable for your use case?

### 2. Automated Candidate Generation

We generate candidate mappings using multiple approaches:

- Lexical matching (string similarity, normalization)
- Semantic similarity (embeddings, structural features)
- Mapping hops via existing mapping sets
- Hybrid methods combining multiple signals

Every candidate is captured with rich metadata—match confidence, method used, supporting evidence—using the SSSOM standard we helped develop.

### 3. Iterative Refinement

Raw candidates aren't final mappings. We refine them through:

- **Constraint enforcement**: one target per source, or multiple where appropriate
- **Agentic workflows**: AI-assisted filtering using evidence and provenance to surface high-confidence matches and flag ambiguous cases
- **Human review**: Expert judgment on mappings that require domain knowledge

The level of human oversight is adjustable based on your quality requirements.

### 4. Delivery

You receive:

- Validated mapping files in SSSOM format
- Documentation of scope decisions and methodology
- Quality metrics and coverage reports
- Training for your team (if maintaining mappings in-house)
- Pipeline integration (optional)

For continuous mappings, we establish update cycles and change detection so your mappings evolve with your data.

## Why This Approach

Most mapping efforts fail in one of two ways: they're too automated (generating garbage), or too manual (never finishing). This methodology balances both—using automation to scale, and human expertise where it matters.

The result: mappings you can trust, with clear provenance for every decision.

## Case Study

Learn how we built a [continuous reconciliation system for Mondo](/case-studies/mondo/) that maintains 30,000+ mappings to external disease resources through automated matching and structured human review.

---

[Get in touch](/contact) to discuss your mapping needs.
