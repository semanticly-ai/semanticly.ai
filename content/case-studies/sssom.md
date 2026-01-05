---
title: "SSSOM Mapping Standard"
description: "Creating a community standard for sharing semantic mappings that has been adopted across open science communities."
category: "Standards & Tooling"
client: "Multiple (EBI, LBNL, Research Data Alliance)"
duration: "2020 - Present"
tags: ["standards", "mapping", "FAIR", "community"]
weight: 4
---

## The Challenge

Mappings between ontologies, databases, and vocabularies are essential for data integration—but there was no standard way to share them. Different projects used different formats, making it hard to:

- Share mappings between collaborators
- Validate mapping quality
- Track provenance and justifications
- Aggregate mappings from multiple sources

## Our Solution: SSSOM

We led the development of the [Simple Standard for Sharing Ontological Mappings (SSSOM)](https://w3id.org/sssom), a community-driven specification that defines:

### A Standard Format

- TSV-based format readable by humans and machines
- Clear column specifications for subjects, objects, predicates
- Rich metadata for provenance, confidence, and justification
- Support for both exact and fuzzy mappings

### A Semantic Model

- LinkML-based schema with formal semantics
- Integration with OWL and RDF ecosystems
- Extensible for domain-specific needs

### Tooling Ecosystem

We developed supporting tools including:

- **sssom-py**: Python library for reading, writing, validating, and transforming SSSOM
- **Validation rules**: Automated quality checks for mapping files
- **Converters**: Transform from legacy formats to SSSOM
- **Registry**: Central discovery point for published mapping sets

## Community Adoption

SSSOM has been adopted by:

- **OBO Foundry ontologies** for inter-ontology mappings
- **Monarch Initiative** for disease and phenotype mappings
- **EMBL-EBI** for various database mappings
- **Research Data Alliance** as a recommended practice

The standard was developed through open community process, with input from dozens of contributors across institutions.

## Outcomes

- **FAIR-compliant** mapping standard recognized by funding agencies
- **Hundreds of mapping sets** now published in SSSOM format
- **Active community** maintaining and extending the standard
- **Interoperability** across previously siloed mapping efforts

## Lessons Learned

Building a successful community standard requires:

1. **Real-world grounding**: Start from actual use cases, not abstract requirements
2. **Low barrier to entry**: Keep the basic format simple (TSV, not XML)
3. **Clear governance**: Transparent decision-making process
4. **Tooling first**: People adopt standards when tools make it easy
5. **Patience**: Community consensus takes time

## Technologies Used

- LinkML (semantic schema)
- Python
- GitHub for collaborative development
- TSV/YAML formats

## Links

- [SSSOM Specification](https://w3id.org/sssom)
- [sssom-py on GitHub](https://github.com/mapping-commons/sssom-py)
- [SSSOM Tutorial](https://mapping-commons.github.io/sssom/)
