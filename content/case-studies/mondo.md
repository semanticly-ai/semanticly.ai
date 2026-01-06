---
title: "Mondo Disease Ontology"
description: "Building an ontology reconciliation framework for continuous alignment of disease terminology across global resources."
category: "Ontology & Mapping"
client: "Mondo Consortium"
duration: "2020 - Present"
tags: ["ontology", "mapping", "disease", "reconciliation"]
weight: 2
---

## The Challenge

The medical community uses many different systems to classify diseases—ICD, OMIM, Orphanet, SNOMED CT, and others. Researchers and clinicians need to navigate between these systems, but existing mappings are often incomplete, inconsistent, or outdated.

[Mondo](https://mondo.monarchinitiative.org/) was created to provide a unified disease ontology that integrates and reconciles these diverse resources.

## My Role

I developed and maintain the technical infrastructure that keeps Mondo aligned with external disease resources through continuous reconciliation.

### Mapping Pipeline

The pipeline automatically:

1. **Detects changes** in external resources (new terms, modifications, deprecations)
2. **Generates candidate mappings** using multiple matching algorithms
3. **Flags conflicts** where external resources disagree
4. **Queues items for human review** with relevant context

### Human Review Workflow

I designed GitHub-based workflows that enable:

- Clear presentation of mapping candidates with evidence
- Structured review process with documented decisions
- Audit trail for all mapping changes
- Community input on contentious mappings

### Quality Assurance

The validation system ensures:

- Logical consistency of all mappings
- Detection of circular or redundant mappings
- Compliance with SSSOM standard
- Coverage metrics for key external resources

## Outcomes

- **30,000+ mappings** to external disease resources, continuously maintained
- **Monthly releases** with full provenance and validation
- **Community adoption** by major databases and clinical systems
- **Transparent process** enabling community participation
- **Reusable framework** that has influenced how other ontology projects approach external alignment

## Technologies Used

- SSSOM (mapping standard)
- Ontology Development Kit
- Custom matching algorithms
- GitHub Actions CI/CD
- ROBOT

## Links

- [Mondo Disease Ontology](https://mondo.monarchinitiative.org/)
- [Mondo GitHub Repository](https://github.com/monarch-initiative/mondo)
