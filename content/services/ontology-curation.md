---
title: "Evidence-Driven Curation"
description: "Collaborative workflows that combine rigorous evidence documentation with domain expertise and modern automation — so your knowledge systems are trustworthy and maintainable."
slug: "evidence-driven-curation"
icon: "curation"
weight: 2
---

## The Problem

Ontologies and knowledge systems need constant attention: new terms to add, definitions to refine, classifications to fix, external resources to align with. Traditional curation is slow, inconsistent, and doesn't scale. But fully automated approaches produce garbage that experts don't trust.

The real challenge isn't speed — it's building curation workflows where every choice is backed by documented evidence, domain experts make the decisions that matter, and automation handles the tedious parts.

## What You Get

A sustainable, collaborative curation workflow: clear patterns defining what belongs, evidence documentation for every decision, systematic extraction from your sources, and quality checks that catch problems before release. Your team grows their understanding of the domain — not just their dependency on tooling.

## How It Works

### 1. Define Content Patterns and Scope

I work with your domain experts to establish what your knowledge system should contain:

- **Content patterns**: What types of terms belong? (e.g., infectious diseases follow one pattern, Mendelian diseases another)
- **Scope boundaries**: What's in, what's out? Where does your resource end and others begin?
- **Relationship templates**: How should terms connect to each other and to external resources?

These patterns become executable — used to validate new content, guide extraction, and ensure consistency across curators.

### 2. Identify Information Sources

I determine where curation content comes from:

- **Literature**: Papers, reviews, clinical guidelines
- **Databases**: Existing resources like OMIM, Orphanet, UniProt
- **Other ontologies**: Terms to import or align with
- **Expert knowledge**: Domain specialists on your team
- **Community input**: Structured workflows for handling requests, feedback, and contributions from your user community

For each source, I define relevance criteria: what information matters for your patterns?

### 3. Extract and Document Evidence

As I curate, I build evidence dossiers:

- **Provenance tracking**: Every term knows where it came from — PubMed ID, database entry, expert assertion
- **Automated extraction**: LLMs and NLP to identify candidate terms, definitions, and relationships from literature
- **Evidence compilation**: Supporting citations and references attached to each piece of curated content
- **Agentic workflows**: Automated agents that surface high-confidence suggestions and flag ambiguous cases for human review

This isn't just good practice — it's what makes your knowledge system trustworthy and maintainable. When someone asks "why is this term here?", there's always an answer.

### 4. Collaborative Review and Integration

I incorporate curated content through workflows designed for collaboration:

- **Pattern-based validation**: New terms checked against defined patterns before integration
- **Review gates**: Human approval for automated suggestions, with clear accept/reject/modify workflows
- **Community deliberation**: Structured processes for resolving disagreements and ambiguous cases
- **Automated triage**: Routine community requests handled without requiring curators to open their ontology IDE

Integration is systematic, not ad-hoc. Every addition follows the same process — whether it comes from automated extraction, a curator, or a community request.

### 5. Continuous Improvement

Curation is ongoing. I establish processes to surface issues and keep quality high:

- **Gap analysis**: Missing terms, incomplete classifications, outdated definitions
- **Quality reports**: Automated checks that flag problems for curator attention
- **Consistency enforcement**: Agentic approaches that identify and resolve inconsistencies across the resource
- **Review cycles**: Regular processes to keep the knowledge system current with evolving domain understanding

## Why This Approach

Curation fails when it's undocumented (no one knows why terms exist), inconsistent (different curators do different things), or unsustainable (one person's head holds all the knowledge).

This approach makes curation explicit: patterns define what belongs, evidence documents why, and collaborative workflows ensure consistency. Automation scales the extraction; humans make the decisions. The result is a knowledge system your community can trust — and maintain — long-term.

Having maintained Mondo's disease curation pipeline for years, I've learned that the hard part isn't adding terms — it's knowing _why_ each term exists and having that reasoning survive staff turnover. That's why evidence documentation isn't a final step in my process; it's built into every stage. And it's why I invest in workflows that grow your team's understanding, not just their throughput.

## Tools I Use

- **[Ontology Development Kit (ODK)](https://github.com/INCATools/ontology-development-kit)**: Standardized workflows and quality control
- **[ROBOT](http://robot.obolibrary.org/)**: Command-line ontology operations
- **LLM integrations**: Automated term extraction, definition drafting, classification suggestions, and consistency checking
- **Custom curation interfaces**: Simple UIs for domain experts who don't need to learn ontology tooling

## Case Study

See how Mondo maintains a unified disease ontology with automated extraction, rigorous evidence documentation, and community collaboration in this [case study](/case-studies/mondo/).

---

[Get in touch](/contact) to discuss how I can help scale your curation workflows.
