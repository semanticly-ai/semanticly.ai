---
title: "Mondo: Evidence-Driven Disease Curation at Scale"
description: "How automated extraction, rigorous evidence documentation, and community collaboration maintain a unified disease ontology used worldwide."
category: "Evidence-Driven Curation"
client: "Mondo Consortium"
duration: "2020 - Present"
tags: ["curation", "evidence", "disease", "AI", "community"]
weight: 1
---

## The Challenge

The medical community uses many different systems to classify diseases — ICD, OMIM, Orphanet, SNOMED CT, and others. [Mondo](https://mondo.monarchinitiative.org/) provides a unified disease ontology that reconciles these resources. But maintaining 30,000+ mappings and thousands of disease definitions isn't a one-time effort — it's a continuous curation challenge.

New diseases are described. Existing classifications change. External resources update on different schedules. The question isn't how to build a disease ontology — it's how to keep one trustworthy, up-to-date, and transparent as the world's understanding of disease evolves.

## My Role

I'm responsible for the curation infrastructure that makes Mondo sustainable: the workflows, automation, evidence tracking, and quality systems that let a distributed community maintain a resource of this scale.

### Automated Extraction and Candidate Generation

The pipeline automatically:

1. **Detects changes** in external resources (new terms, modifications, deprecations)
2. **Generates candidate mappings** using multiple matching algorithms
3. **Flags conflicts** where external resources disagree
4. **Surfaces high-confidence suggestions** and queues ambiguous cases for human review

Automation handles the volume; curators focus on the decisions that require domain expertise.

### Evidence-Driven Review Workflows

Every curation decision in Mondo carries its evidence. I designed GitHub-based workflows that enable:

- Clear presentation of mapping candidates with supporting evidence
- Structured review process with documented reasoning — not just accept/reject, but *why*
- Audit trail for all changes: who made the decision, what evidence they considered, when it happened
- Community deliberation on contentious cases, with transparent resolution

This is what makes Mondo trustworthy. When a clinician or researcher relies on a Mondo mapping, they can trace it back to the evidence and the decision that created it.

### Quality Assurance and Consistency

The validation system ensures:

- Logical consistency across the entire ontology
- Detection of circular or redundant mappings
- Compliance with the SSSOM standard for all mappings
- Coverage metrics for key external resources
- Automated consistency checks that flag problems before they reach a release

## Outcomes

- **30,000+ mappings** to external disease resources, continuously maintained
- **Monthly releases** with full provenance and validation
- **Community adoption** by major databases and clinical systems worldwide
- **Transparent process** enabling community participation in curation decisions
- **Reusable framework** that has influenced how other ontology projects approach evidence-driven curation

### Why This Matters

When a clinician looks up a rare disease, they shouldn't have to know whether the code came from OMIM, Orphanet, or ICD. Mondo's unified classification means patients get consistent answers regardless of which system their hospital uses — and researchers can aggregate data across sources that were previously siloed.

But the real achievement isn't the ontology itself — it's the curation process. Mondo demonstrates that you can maintain a large, complex knowledge resource with a combination of systematic automation, rigorous evidence documentation, and community collaboration. That's the model I bring to every curation engagement.

## Technologies Used

- SSSOM (mapping standard)
- Ontology Development Kit
- Automated curation workflows
- Custom matching algorithms
- GitHub Actions CI/CD
- ROBOT

## Links

- [Mondo Disease Ontology](https://mondo.monarchinitiative.org/)
- [Mondo GitHub Repository](https://github.com/monarch-initiative/mondo)
- Vasilevsky NA, Toro S, Matentzoglu N, et al. (2025). [Mondo: Integrating Disease Terminology Across Communities](https://pubmed.ncbi.nlm.nih.gov/41052288/). *Genetics*.
