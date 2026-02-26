---
title: "Resources"
description: "Ontologies, standards, frameworks, and training materials I develop, maintain, or contribute to."
---

An overview of the open resources I work on — from ontologies used in clinical genomics and environmental science, to standards and frameworks that support the broader semantic engineering community.

## Ontologies I Contribute To

A selection of ontologies I actively contribute to.

- **[Mondo Disease Ontology](https://mondo.monarchinitiative.org/)** ([case study](/case-studies/mondo/)) — A unified disease ontology that reconciles ICD, OMIM, Orphanet, and other disease classification systems. Mondo provides a single coherent view of disease for researchers and clinicians working across sources.

- **[Human Phenotype Ontology (HPO)](https://hpo.jax.org/)** — The standard vocabulary for human phenotypic abnormalities, widely used in clinical genomics and rare disease diagnosis. I'm responsible for the entire technical infrastructure, QC, preparing community inputs for inclusion, and recently developing agentic approaches to improve ontology consistency.

- **[Unified Phenotype Ontology (uPheno)](https://obofoundry.org/ontology/upheno.html)** — A cross-species phenotype ontology that enables translational research — for example, connecting a phenotype observed in a model organism to a clinical presentation in a rare disease patient.

- **[Uberon](https://obofoundry.org/ontology/uberon.html)** — A cross-species anatomy ontology linking anatomical structures across vertebrates and beyond. Essential for comparative biology and multi-species data integration.

- **[Cell Ontology (CL)](https://obofoundry.org/ontology/cl.html)** — A standard cell type classification used extensively in single-cell genomics to annotate and compare cell populations across experiments and species.

- **[Ontology of Biological Attributes (OBA)](https://obofoundry.org/ontology/oba.html)** — A species-independent collection of interoperable phenotypic trait categories. OBA provides a computational bridge between Mendelian phenotypes and quantitative traits (e.g. GWAS, QTL), with terms used by the NHGRI-EBI GWAS Catalog for trait annotation.

- **[Phenotype And Trait Ontology (PATO)](https://obofoundry.org/ontology/pato.html)** — A species-neutral vocabulary for phenotypic qualities (size, shape, colour, etc.) that underpins phenotype descriptions across many ontologies.

- **[Environmental Conditions, Treatments and Exposures Ontology (ECTO)](https://obofoundry.org/ontology/ecto.html)** — Linking environmental exposures to health outcomes — a critical resource for environmental health research.

- **[Environment Ontology (ENVO)](https://obofoundry.org/ontology/envo.html)** — Structured descriptions of environments, habitats, and biomes. Used in ecological research, metagenomics, and environmental data integration.

- **[Relations Ontology (RO)](https://obofoundry.org/ontology/ro.html)** — The shared vocabulary of relationships (e.g. "part of", "participates in", "causally related to") used across OBO ontologies. RO is what allows different ontologies to connect to each other in a logically consistent way.

- **[Ontology Metadata Ontology (OMO)](https://obofoundry.org/ontology/omo.html)** — A standardised vocabulary for ontology metadata — annotations like definitions, synonyms, provenance, and deprecation status. I contribute to OMO as part of broader efforts to standardise ontology metadata practices beyond the biomedical domain, making ontologies more consistently documented and discoverable regardless of their field of application.

## Standards & Frameworks

- **[Simple Standard for Sharing Ontological Mappings (SSSOM)](https://w3id.org/sssom)** — A FAIR-compliant specification I led the development of, defining how to share semantic mappings with full provenance and confidence metadata. Adopted widely across biomedical research, clinical data standards (OMOP), and industry.

- **[Semantic Mapping Vocabulary (SEMAPV)](https://mapping-commons.github.io/semantic-mapping-vocabulary/)** — A controlled vocabulary for describing how mappings were created and justified — the provenance layer that makes SSSOM mappings auditable and reproducible.

- **[Ontology Development Kit (ODK)](https://github.com/INCATools/ontology-development-kit)** — A Docker-based framework I created for managing the full ontology lifecycle: project scaffolding, dependency management, validation, CI/CD, and reproducible releases. Used by 120+ ontologies worldwide.

- **[Linked Data Modeling Language (LinkML)](https://linkml.io/)** — A modelling language for authoring schemas that compile to JSON-Schema, SHACL, SQL, and more. I'm an active contributor, involved in strategic planning, metamodel evolution, and community governance development.

- **[Babelon](https://github.com/monarch-initiative/babelon)** — A framework for managing ontology translations across languages, enabling multilingual access to biomedical ontologies.

- **[Dead Simple OWL Design Patterns (DOSDP)](https://github.com/INCATools/dead_simple_owl_design_patterns)** — A template system for consistent, pattern-based ontology term creation — so that similar classes are defined the same way every time, reducing errors and enabling automation.

- **[ROBOT is an OBO Tool (ROBOT)](http://robot.obolibrary.org/)** — A command-line tool for ontology operations: extracting modules, running reasoners, generating reports, and transforming between formats. I'm a contributor and heavy user.

- **[Ontology Access Kit (OAK)](https://incatools.github.io/ontology-access-kit/)** — A Python framework for accessing and querying ontologies from multiple backends (local files, OLS, BioPortal, SQLite). OAK provides a unified interface for ontology operations, from simple lookups to complex graph traversals.

- **[Protégé](https://protege.stanford.edu/)** — The most widely used ontology editor, maintained by Stanford. I contribute to its development and use it as the foundation of many curation workflows.

## Applied Projects

- **[Monarch Initiative](https://monarchinitiative.org/)** — An international collaboration integrating gene, disease, and phenotype data across species to advance translational research. See also the [OBO Foundry case study](/case-studies/obo-foundry/) for related community infrastructure work. I'm the Technical Lead across all Monarch ontology projects, maintaining the ontological backbone that powers Monarch's knowledge graph.

- **[Every Cure MATRIX](https://github.com/everycure-org/matrix)** ([case study](/case-studies/every-cure/)) — I contributed to the design of the disease list for Every Cure's MATRIX drug repurposing platform. The list covers all ~22,000 disease entities in Mondo, enriched with metadata that enables targeted filtering to identify diseases of specific relevance in the context of a drug repurposing inquiry. Open-source and publicly available.

- **[Research Data Alliance (RDA) FAIR Mappings](https://mapping-commons.github.io/rda-fair-mappings/)** — A Research Data Alliance working group developing practical guidelines for making semantic mappings FAIR. I contribute to both the recommendations and the reference implementations.

## Training & Education

- **[OBO Academy](https://oboacademy.github.io/obook/)** — Comprehensive open training materials for ontology development that I co-founded. Includes tutorials, best practices, standard operating procedures, and a seminar series.

- **[Simple Standard for Sharing Ontological Mappings (SSSOM) Tutorial](https://mapping-commons.github.io/sssom/)** — A hands-on guide to creating, validating, and sharing semantic mappings using the SSSOM standard.

- **[Linked Data Modeling Language (LinkML) Documentation](https://linkml.io/)** — Reference documentation and tutorials for the LinkML modelling framework.

## Selected Publications

For a full list, see my [ORCID profile](https://orcid.org/0000-0002-7356-1779).

### Standards & Frameworks

- Matentzoglu N, et al. (2022). A Simple Standard for Sharing Ontological Mappings (SSSOM). *Database*.
- Matentzoglu N, Goutte-Gattat D, et al. (2022). Ontology Development Kit: a toolkit for building, maintaining and standardizing biomedical ontologies. *Database*.
- Moxon SAT, Solbrig H, et al. (2025). LinkML: An Open Data Modeling Framework. *Gigascience*.
- Vogt L, Strömert P, Matentzoglu N, et al. (2025). Suggestions for extending the FAIR Principles. *Scientific Data*.
- Jackson R, Matentzoglu N, et al. (2021). The OBO Foundry in 2021: Principles and Practice. *Database*.

### Ontologies

- Matentzoglu N, Bello SM, et al. (2025). The Unified Phenotype Ontology (uPheno): a framework for cross-species integrative phenomics. *Genetics*.
- Vasilevsky NA, Toro S, Matentzoglu N, et al. (2025). Mondo: Integrating Disease Terminology Across Communities. *Genetics*.
- Gargano MA, Matentzoglu N, et al. (2024). The Human Phenotype Ontology in 2024. *Nucleic Acids Research*.
- Stefancsik R, Balhoff JP, Balk MA, Matentzoglu N, et al. (2023). [The Ontology of Biological Attributes (OBA)—computational traits for the life sciences](https://pubmed.ncbi.nlm.nih.gov/37076585/). *Mammalian Genome*.
- Chan LE, Thessen AE, et al. (2023). The Environmental Conditions, Treatments, and Exposures Ontology (ECTO). *Journal of Biomedical Semantics*.

### Applications

- DeLuca M, Matentzoglu N, et al. (2026). Medicines, Diseases, Indications, and Contraindications (MeDIC): a foundational resource to support drug repurposing. *Nucleic Acids Research*.
- Chimirri L, Caufield JH, et al. (2025). Consistent performance of large language models in rare disease diagnosis across ten languages. *EBioMedicine*.
- Putman TE, Schaper K, Matentzoglu N, et al. (2024). The Monarch Initiative in 2024. *Nucleic Acids Research*.

---

Have a resource suggestion? [Let me know](/contact).
