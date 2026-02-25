---
title: "OBO Foundry: Building a Self-Sustaining Data Community"
description: "How 150+ independent ontology teams became a coordinated community with shared governance, infrastructure, and training — a model now replicated in other domains."
category: "Community Building & Governance"
client: "OBO Foundry"
duration: "2020 - Present"
tags: ["community", "governance", "standards", "infrastructure"]
weight: 3
---

## The Challenge

The [Open Biological and Biomedical Ontologies (OBO) Foundry](https://obofoundry.org/) comprises 150+ ontologies maintained by independent teams across the life sciences. Each ontology served its own community, but there was no shared infrastructure, no consistent practices, and no clear way for new teams to join or learn from existing ones.

This isn't just a technical problem — it's a community coordination problem. How do you get dozens of independent groups, each with their own priorities and funding, to align on shared practices without a top-down mandate?

## My Role

As co-lead of the OBO Foundry Technical Working Group, I approached this as a community-building challenge, not just an infrastructure one.

### Shared Infrastructure: The Ontology Development Kit (ODK)

I developed the [Ontology Development Kit](https://github.com/INCATools/ontology-development-kit) to give every team the same foundation:

- **Reproducible builds**: Same tools, same versions, same results — regardless of who runs the pipeline
- **Standardized workflows**: Common processes for release, validation, and quality control
- **CI/CD templates**: Automated testing and release via GitHub Actions
- **Low barrier to adoption**: Teams can adopt ODK incrementally, not all-or-nothing

The key design principle: shared infrastructure should reduce the burden on individual teams, not add to it. Adoption was voluntary — and it worked because the tooling genuinely made people's lives easier.

The ODK has been adopted by **120+ ontologies worldwide**.

### Training and Onboarding: OBO Academy

I co-founded [OBO Academy](https://oboacademy.github.io/obook/) to solve the knowledge-transfer problem:

- Comprehensive training materials and tutorials for new ontology developers
- Documented best practices and standard operating procedures
- A seminar series for ongoing community learning
- A reference that lets new contributors become productive quickly

Without onboarding infrastructure, communities lose knowledge every time someone leaves. OBO Academy ensures the community's expertise is documented, not just held in individuals' heads.

### Governance and Standards

I designed and implemented the governance structures that make the community self-sustaining:

- **[Role system](https://obofoundry.org/roles/overview)**: Clearly defined roles with documented SOPs for the Operations Committee — including Registry Metadata Steward and New Ontology Request (NOR) Manager — so that governance doesn't depend on institutional memory or any single person
- **Metadata harmonisation**: Drove adoption of the [Ontology Metadata Ontology (OMO)](https://obofoundry.org/ontology/omo.html) as a shared vocabulary for ontology annotations, making registration and quality validation consistent across the Foundry
- **Quality metrics**: Co-developed the [OBO Dashboard](https://dashboard.obofoundry.org/), providing automated validation against community-agreed principles for every registered ontology
- **Decision-making processes** for contentious technical issues

### Community Communication

A community that can't talk to each other can't coordinate. I established the core communication channels that keep the OBO ecosystem connected:

- **OBO Community Newsletter**: The main communication line for the community, coordinating updates across projects
- **OBO Community Slack**: Founded and manage the shared workspace that has become a core environment for collaboration between members of the OBO, LinkML, and mapping communities

## Outcomes

- **120+ ontologies** now use ODK, up from a handful in 2020
- **Standardized releases** across major OBO ontologies
- **Reduced maintenance burden** through shared tooling
- **Community knowledge sharing** via OBO Academy
- **Self-sustaining governance**: The community continues to grow and coordinate without depending on any single person or grant
- **Model for other domains**: The OBO Foundry's approach has been cited as a template by other scientific communities looking to build similar shared data infrastructure

### Why This Matters

The OBO Foundry demonstrates that it's possible to build a self-sustaining community around shared data standards — without top-down control. Every ontology that adopts shared infrastructure is one fewer team reinventing release pipelines from scratch. That saved effort compounds across the entire biomedical community, freeing curators to focus on the domain knowledge that only they can provide.

## Links

- [OBO Foundry](https://obofoundry.org/)
- [Ontology Development Kit](https://github.com/INCATools/ontology-development-kit)
- [OBO Academy](https://oboacademy.github.io/obook/)
