---
title: AWS Well Architected
date: '2015-05-01T22:12:03.284Z'
description: 'Whitepaper Notes'
---

## Well-Architected Framework

[Whitepaper](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)

- [ ] Read Whitepaper
- [ ] Review Notes
- [ ] Reread highlited sections
- [ ] Make Anki cards
  - [ ] definitions
  - [ ] main concepts
  - [ ] questions and answers from sections and index

---

### Pillars of AWS Well-Architected Framework

1. Operational Excellence
2. Security
3. Reliability
4. Performance Efficiency
5. Cost Optimization

### Definitions

- **component**: code and configuration of AWS resources
- **workload**: a set of components delivering value
- **milestones**: important changes in architecture throughout product lifecycle
- **architecture**: how components work together and communitcate in a workload
- **technology portfolio**: collection of workloads required for business to operate

### Architecture

- Well-Architected is a series of codified best practices based on hard data and principal engineers.
- Mechanisms (mainly automated checks) are essential for ensuring an architecture is/remains sound

### General Design Principles

1. Stop guessing capacity needs
2. Tests systems at production scale
3. Automate to make architectural experimentation easier
4. Allow for evolutionary architectures
5. Drive architectures using data
6. Improve through game days

### Operational Excellence

#### Design Principles

1. Perform operations as code
2. Annotate documentation
3. Make frequent, small, reversible changes
4. Refine operations procedures frequently
5. Anticipate Failure
6. Learn from all operational failures

#### Best Practices

- Prepare
  - Make use of checklists and playbooks
  - Simulate and rehearce scenarios to train personnel
  - Make use of AWS CloudFormation
  - Balance cost to implement standard against benefit to workload and burdon on operations
  - Implement the minimum number of standards to improve their application
  - Implement operations as code
- Operate
  - Define expected outcomes
  - Determine how success will be measured
  - Identify workload
  - Prioritize responses
  - Use dashboards and notifications to inform target audience (customer, developer, etc)
    - AWS X-Ray, CloudWatch, CloudTrail, VPC Flow Logs
  - Automate responses and avoid manual processes as much as possible
    -Evolve
  - Include feedback loops in procedures to identify areas of improvement
  - Implement continuous delivery, build, test, and deployment
  - Dedicate time and resources to incremental improvements, experimentation, and testing

#### Key Services for Operational Excellend

- Prepare: AWS Config and AWS Config
- Operate: Amazon CloudWatch
- Evolve: Amazon Elasticsearch Service (ES)
