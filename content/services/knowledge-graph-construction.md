---
title: "Knowledge Graph Construction"
description: "Build connected data infrastructure that enables powerful queries, discovery, and AI applications."
icon: "knowledge-graph"
weight: 4
---

## The Problem

Your data lives in silos—spreadsheets, databases, APIs, files—each with its own schema and identifiers. Answering questions that span sources means manual joins, brittle scripts, and no clear provenance for the results.

A knowledge graph unifies these sources into a connected, queryable whole, with every fact traceable back to where it came from.

## What You Get

A production-ready knowledge graph integrating your data sources, with documented transformations and full provenance. You'll be able to query across sources, trace any fact back to its origin, and extend the graph as new data becomes available.

## How It Works

### 1. Use Case Definition

We start with your question, not your data:

- **What do you need to answer?** (e.g., "Which genes are associated with this disease, and what's the evidence?")
- **Who will use it?** Researchers, analysts, applications?
- **What decisions does it support?**

This keeps the project focused and ensures we build something useful, not just comprehensive.

### 2. Conceptual Modeling

We sketch the core structure:

- **Entities**: What things exist in your domain? (genes, diseases, compounds, publications...)
- **Relationships**: How do they connect? (gene → associated with → disease)
- **Properties**: What attributes matter?

This rough model guides source selection and transformation—we refine it as we learn more about your data.

### 3. Source Identification

We assess which data sources will populate the graph:

- **Relevance**: Does this source contain what we need?
- **Provenance**: What evidence does it provide? PubMed IDs? Confidence scores? Curation status?
- **Quality**: How trustworthy is this source? How often is it updated?
- **Subset scoping**: Which parts of the source are in scope? (You rarely need everything.)

Each source is documented with its version, access method, and the subset being used.

### 4. Transformation Specification

We define how source data maps to your graph model:

- **Schema mapping**: How do source fields map to graph entities and relationships?
- **Identifier standardization**: Normalizing prefixes and formats (e.g., `UMLS_CUI:C0001` → `UMLS:C0001`)
- **Evidence propagation**: How do we carry provenance through the transformation?

If this aligns with your needs, we typically use [LinkML](https://linkml.io/), and in particular [LinkML-map](https://linkml.io/linkml-map/) to formally specify these transformations—executable documentation that can be validated and versioned.

### 5. Transformation Execution

We run the pipelines and capture provenance:

- **Automated ingestion**: Repeatable workflows that can be re-run as sources update
- **Provenance records**: Every edge in the graph knows its source, version, transformation date, and rules applied
- **Validation**: Checks for consistency, completeness, and conformance to the model

### 6. Integration and Merge

We combine transformed sources into a unified graph:

- **Entity resolution**: Recognizing the same entity across sources
- **Evidence aggregation**: Combining support from multiple sources for the same relationship
- **Conflict handling**: What happens when sources disagree?
- **Metadata attachment**: Download dates, source versions, transformation specs—all queryable

The result is a single graph where you can query across all sources while still drilling down to the provenance of any individual fact.

## Why This Approach

Most knowledge graph projects fail because they start with data, not questions. They ingest everything, document nothing, and produce a hairball no one trusts.

Our methodology inverts this: start from use cases, document every transformation, and maintain provenance throughout. The result is a graph you can actually use—and extend—with confidence.

## Past Work

- **[Monarch Initiative](https://monarchinitiative.org)**: Integrating gene, disease, and phenotype data across species for translational research
- **[Virtual Fly Brain](https://virtualflybrain.org)**: Drosophila neuroscience knowledge base linking anatomy, genetics, and imagery

---

[Get in touch](/contact) to explore how a knowledge graph could transform your data.
