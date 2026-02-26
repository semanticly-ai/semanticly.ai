---
title: "Every Cure: Drug Repurposing Powered by Knowledge Graphs"
description: "Embedding with a non-profit's data team to design the disease list powering drug repurposing predictions, and advancing open science practices for mission-critical data assets."
category: "Applied Knowledge Engineering"
client: "Every Cure (via University of North Carolina)"
duration: "2024 - 2026"
tags: ["drug repurposing", "knowledge graph", "open science", "rare disease"]
weight: 2
---

## The Challenge

[Every Cure](https://everycure.org/) is a non-profit working to identify drug repurposing opportunities — finding new uses for existing drugs, with a particular focus on diseases where patients have few options. Their [MATRIX platform](https://github.com/everycure-org/matrix) generates predictions across thousands of drugs and diseases, prioritising high-evidence candidates for clinical trial design.

The challenge: how do you systematically represent ~22,000 diseases in a way that supports meaningful drug-disease pair selection? And how do you ensure that the data assets driving life-or-death predictions are open, well-documented, and maintainable?

## My Role

As an external consultant, I was embedded with Every Cure's data team, where my work focused on three areas: disease list design, KG validation and metrics, and open science practices.

### Disease List Design

My main project was contributing to the design of the MATRIX disease list — the curated set of all ~22,000 disease entities from Mondo, enriched with metadata that enables targeted filtering to identify diseases of specific relevance in the context of a drug repurposing inquiry. This included designing features used by downstream applications to strategically select interesting drug-disease pairs for expert review.

This work is described in: DeLuca M, Matentzoglu N, et al. (2026). [Medicines, Diseases, Indications, and Contraindications (MeDIC)](https://pubmed.ncbi.nlm.nih.gov/41385096/). *Nucleic Acids Research*.

### KG Validation and Metrics

I contributed to quality assurance for the MATRIX knowledge graph — developing validation checks and metrics to ensure the integrity of the data feeding into drug repurposing predictions.

### Open Science Practices

I worked to strengthen Every Cure's open science posture:

- Created public attribution documentation for the infrastructure and data resources that support MATRIX
- Got core data assets published in a public repository (Hugging Face) with commitments to ongoing maintenance
- Advocated for transparent, reproducible data pipelines

### What I Learned

This engagement reinforced a conviction I bring to all my work: that formal domain modelling — building an explicit model of how a domain works, what data sources represent, and why they're relevant — pays off in the long run. It surfaces assumptions, identifies gaps, and builds the kind of understanding that makes a system trustworthy beyond its original creators. Working in a fast-moving, mission-driven environment sharpened my thinking about when and how to advocate for that approach.

## Outcomes

- **Disease list** covering all ~22,000 Mondo disease entities with rich metadata for targeted filtering
- **Published data assets** on Hugging Face with maintenance commitments
- **Public attribution documentation** for infrastructure dependencies
- **Feature design** supporting strategic drug-disease pair selection in the MATRIX pipeline

### Why This Matters

Drug repurposing has the potential to help patients who have no other options — particularly in rare disease. Every Cure's MATRIX platform was named one of [TIME's Best Inventions of 2025](https://time.com/collections/best-inventions-2025/7318443/every-cure-matrix/). The disease list is a small but critical piece of that pipeline: without a well-structured representation of what diseases exist and how they relate to each other, prediction is just noise.

## Links

- [Every Cure](https://everycure.org/)
- [MATRIX Platform](https://github.com/everycure-org/matrix)
- [MeDIC Paper](https://pubmed.ncbi.nlm.nih.gov/41385096/)
