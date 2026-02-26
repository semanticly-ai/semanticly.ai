---
title: "Ontology & Knowledge Graph Engineering"
description: "Design, build, and sustain ontologies and knowledge graphs with reproducible infrastructure, full provenance, and FAIR compliance."
icon: "knowledge-graph"
weight: 3
---

## The Problem

You need a knowledge system — an ontology, a knowledge graph, or both — but building it is only half the challenge. Without proper infrastructure, ontologies drift into unmaintainability and knowledge graphs become untrusted hairballs. You need systems that are reproducible, documented, and sustainable.

## What You Get

End-to-end engineering of ontologies and knowledge graphs: from conceptual modelling and scope definition through to automated releases, persistent identifiers, registry listings, and production-ready data integration — all with full provenance and FAIR compliance.

## How It Works

### Ontology Engineering

#### 1. Scope and Identity

I establish the foundations:

- **Name and namespace**: Clear naming, abbreviation, and IRI namespace for your ontology
- **Scope definition**: What the ontology covers and where its boundaries lie
- **Persistent identifiers**: PURL setup via [w3id.org](https://w3id.org/) so your IRIs resolve reliably, forever
- **CURIE registration**: Prefix registration with [Bioregistry](https://bioregistry.io/) so your identifiers are recognized across tooling

#### 2. ODK Setup

I deploy the [Ontology Development Kit (ODK)](https://github.com/INCATools/ontology-development-kit) — which I created and maintain — to scaffold your repository:

- **Standardized project structure**: Consistent layout that other semantic engineers recognize
- **Dependency management**: Clean imports from external ontologies (e.g., BFO, RO, OBI) with version pinning
- **Design patterns**: Template-based term generation using [DOSDP](https://github.com/INCATools/dead_simple_owl_design_patterns), [ROBOT templates](http://robot.obolibrary.org/template), and [LinkML schemas](http://linkml.io/) for consistent class definitions
- **Validation rules**: Automated checks for logical consistency, metadata completeness, and style conformance

The ODK has been deployed to **120+ ontologies worldwide**, including HPO, Mondo, Uberon, and many projects beyond OBO.

#### 3. CI/CD and Release System

I implement automated pipelines (GitHub Actions, GitLab CI) that:

- Run validation on every commit
- Generate release artifacts in multiple formats (OWL, OBO, JSON)
- Apply versioning (dated IRIs, semantic versioning)
- Publish releases to GitHub with changelogs

Releases become reproducible and consistent — no more manual, error-prone release days.

#### 4. Documentation, Metadata, and Registry Integration

I create the supporting materials and make your ontology findable:

- **Ontology metadata**: Title, description, license, contact, citations — aligned with OBO and FAIR principles
- **User documentation**: What the ontology is for, how to use it, contribution guidelines
- **Registry listings**: [OBO Foundry](https://obofoundry.org/), [OLS](https://www.ebi.ac.uk/ols4/), [BioPortal](https://bioportal.bioontology.org/), [Bioregistry](https://bioregistry.io/) — so your ontology is discoverable through the search tools your community already uses

### Knowledge Graph Construction

#### 1. Use Case Definition

I start with your question, not your data:

- **What do you need to answer?** (e.g., "Which genes are associated with this disease, and what's the evidence?")
- **Who will use it?** Researchers, analysts, applications?
- **What decisions does it support?**

This keeps the project focused and ensures I build something useful, not just comprehensive.

#### 2. Conceptual Modelling

I sketch the core structure:

- **Entities**: What things exist in your domain? (genes, diseases, compounds, publications...)
- **Relationships**: How do they connect? (gene → associated with → disease)
- **Properties**: What attributes matter?

This rough model guides source selection and transformation — I refine it as I learn more about your data.

#### 3. Source Assessment and Transformation

I assess which data sources will populate the graph, then define how they map to your model:

- **Relevance and quality**: What does each source contribute? How trustworthy is it?
- **Schema mapping**: How do source fields map to graph entities and relationships?
- **Identifier standardization**: Normalizing prefixes and formats
- **Evidence propagation**: How does provenance carry through the transformation?

I typically use [LinkML](https://linkml.io/) and [LinkML-map](https://linkml.io/linkml-map/) to formally specify transformations — executable documentation that can be validated and versioned.

#### 4. Integration and Provenance

I combine transformed sources into a unified graph:

- **Entity resolution**: Recognizing the same entity across sources
- **Evidence aggregation**: Combining support from multiple sources for the same relationship
- **Conflict handling**: What happens when sources disagree?
- **Metadata attachment**: Download dates, source versions, transformation specs — all queryable

The result is a single graph where you can query across all sources while still drilling down to the provenance of any individual fact.

## Why This Approach

An ontology without infrastructure is a file on someone's laptop. A knowledge graph without provenance is a hairball no one trusts. Both need the same things: reproducible builds, documented decisions, and sustainable maintenance.

I built the ODK because I saw the same infrastructure problems repeated across dozens of ontology projects — each team reinventing the wheel. Having also built KG infrastructure for the Monarch Initiative and contributed to the design of the disease list for Every Cure's drug repurposing pipeline, I've seen firsthand what separates useful knowledge systems from expensive dead ends: it's not the volume of data, it's whether each piece carries enough context for someone to evaluate whether they should trust it.

## Past Work

- **[OBO Foundry](/case-studies/obo-foundry/)**: Standardized infrastructure across the OBO Foundry's 150+ registered ontologies, deploying ODK workflows now used by 120+ projects worldwide
- **[Monarch Initiative](https://monarchinitiative.org)**: Integrating gene, disease, and phenotype data across species for translational research
- **[Virtual Fly Brain](https://virtualflybrain.org)**: Drosophila neuroscience knowledge base linking anatomy, genetics, and imagery

---

[Get in touch](/contact) to discuss your ontology or knowledge graph engineering needs.
