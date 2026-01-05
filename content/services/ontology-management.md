---
title: "Ontology Management"
description: "Establish sustainable practices for ontology release, versioning, FAIR compliance, and community governance."
icon: "management"
weight: 3
---

## The Problem

You've built an ontology—now what? Without proper infrastructure, ontologies drift into unmaintainability: broken releases, inconsistent identifiers, no documentation, and no way for others to find or trust your resource.

Sustainable ontology management means establishing the workflows, tooling, and registrations that let your ontology thrive long-term.

## What You Get

A fully operational ontology infrastructure: automated releases, persistent identifiers, registry listings, and documentation—aligned with FAIR and OBO community standards. Your ontology becomes discoverable, citable, and maintainable.

## How It Works

### 1. Scope and Identity

We establish the foundations:

- **Name and namespace**: Clear naming, abbreviation, and IRI namespace for your ontology
- **Scope definition**: What the ontology covers and where its boundaries lie
- **Persistent identifiers**: PURL setup via [w3id.org](https://w3id.org/) so your IRIs resolve reliably, forever
- **CURIE registration**: Prefix registration with [Semantic Farm](https://bioregistry.io/) (formerly Bioregistry) so your identifiers are recognized across tooling

### 2. ODK Setup

We deploy the [Ontology Development Kit (ODK)](https://github.com/INCATools/ontology-development-kit)—which we co-develop and maintain—to scaffold your repository:

- **Standardized project structure**: Consistent layout that other semantic engineers recognize
- **Dependency management**: Clean imports from external ontologies (e.g., BFO, RO, OBI) with version pinning
- **Design patterns**: Template-based term generation using [DOSDP](https://github.com/INCATools/dead_simple_owl_design_patterns), [ROBOT templates](http://robot.obolibrary.org/template) and [LinkML schemas](http://linkml.io/) for consistent class definitions
- **Validation rules**: Automated checks for logical consistency, metadata completeness, and style conformance

The ODK has been deployed to **120+ ontologies worldwide**, including HPO, Mondo, Uberon, and many OBO Foundry (and beyond OBO) projects.

### 3. Curation Workflows

We establish how terms get added and modified:

- **Manual curation**: Protégé-based workflows with clear guidelines for curators
- **Pattern-based curation**: Spreadsheet or YAML-driven term generation for repetitive structures
- **Review processes**: Pull request workflows with automated validation before merge, including widely established quality testing powered by the ODK, and AI-powered workflows for the review of curated content
- **AI-powered curation workflows**: Automate simple community requests with AI without the need to open your Ontology IDE.

### 4. CI/CD and Release System

We implement automated pipelines (GitHub Actions, GitLab CI) that:

- Run validation on every commit
- Generate release artifacts in multiple formats (OWL, OBO, JSON)
- Apply versioning (dated IRIs, semantic versioning)
- Publish releases to GitHub with changelogs

Releases become reproducible and consistent—no more manual, error-prone release days.

### 5. Documentation and Metadata

We create the supporting materials:

- **Ontology metadata**: Title, description, license, contact, citations—aligned with OBO and FAIR principles based on your needs
- **User documentation**: What the ontology is for, how to use it, contribution guidelines

### 6. Registry and Search Integration

We support you registering your ontology where people look:

- **[OBO Foundry](https://obofoundry.org/)**: If your ontology meets OBO principles, we guide you through the registration process
- **[OLS (Ontology Lookup Service)](https://www.ebi.ac.uk/ols4/)**: EBI's search infrastructure used by thousands of researchers
- **[BioPortal](https://bioportal.bioontology.org/)**: NCBO's ontology repository and search service
- **[Semantic Farm](https://bioregistry.io/)**: Prefix and metadata registry for identifier resolution

This makes your ontology findable—not just by URL, but through the search tools your community already uses.

## Why This Matters

An ontology without infrastructure is a file on someone's laptop. With proper management, it becomes a living resource: versioned, documented, discoverable, and trusted.

The investment in setup pays off in reduced maintenance burden, easier collaboration, and actual adoption by your target community.

## Case Study

See how we helped the [OBO Foundry](/case-studies/obo-foundry/) standardize infrastructure across 50+ ontologies, deploying ODK workflows that are now used by 120+ projects worldwide.

---

[Get in touch](/contact) to discuss your ontology management needs.
