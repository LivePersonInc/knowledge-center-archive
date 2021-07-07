---
pagename: Intent Manager updates
categoryName: Bots & automation
subCategoryName: LivePerson Intent Manager
indicator: messaging
subtitle: Intent Manager 2.2 makes it easy for brands to fully manage their Intents. 
level3: ''
permalink: ai-bots-automation-liveperson-intent-manager-intent-manager-updates.html
isTutorial: false
isNew: false

---

The vision of the Intent-Driven Business is to fundamentally change how brands understand and act on what their consumers want and need - not through proxies like website click patterns - but in consumers’ own intents. Intent Manager is foundational to this vision enabling brands to Discover, Build, Analyze, and Optimize state of the art ML models for intent classification with intuitive self-service tooling.

Intent Manager 2.2 introduces unified navigation of all Intent Manager components (Intent Builder, Intent Analyzer, AI Annotation) under a shared Intent Manager user interface, as well as some new product enhancements. 

See some of the new features and exciting enhancements coming to Intent Manager:

## Unification of all Intent Manager components
In the Conversational AI section, a new Intent Manager button will serve as the single point of entry for all Intent Manager components, including Intent Builder and Intent Analyzer.. The Intent Manager unification improves the user experience as navigation is faster and more intuitive.

![](img/IM-updates-1.png)

The update Includes a new Intent Manager homepage where users can view key coverage and quality stats. The new Information Architecture combines the four key elements of Intent Management into one unified navigation experience (Discover, Build, Analyze, Optimize):

* Discover: Explore topic clusters in historical conversations to Discover and define new customer intents and associated training phrases
* Build: Build, Train, Test, and Activate ML models
* Optimize: Leverage Agents to annotate messages for optimized intent models
* Analyze: Analyze patterns in consumer intent and associated KPIs to derive insights that drive business decisions and operational actions.


Navigation between Intent Manager sections (Discover, Build, Optimize, Analyze) is seamless and coherent. For brands that do not have Intent Analyzer enabled Analyze and Discovery features will be “locked”.

## Conversational AI homepage: Before & After

![](img/IM-updates-2b.png)

### New Intent Manager Dashboard

There is a new Intent Manager Dashboard that provides a high level overview of Domains, Intent Coverage, and Intent Quality. From the dashboard you can control settings and quickly navigate to the Discover, Build, Optimize, and Analyze sections of Intent Manager for each Domain.

**'Set as Primary Domain' domain setting**
The new 'Set as Primary Domain' setting has two purposes:
* In applications that make use of a single domain (e.g., Agent Manager Workspace, Performance Optimizer, and Messaging Interaction API), this is the domain that is used. 
* When intent tracking data is gathered for analysis within Intent Manager, and multiple, good intent matches for an utterance are found, the intent in the primary domain is the one considered to be the best matched intent.

Note: The designation of a domain as primary affects only intent matching as it relates to the intent tracking data that’s gathered for display on the Analyze page within Intent Manager. It does not affect intent matching in any other way. For example, it does not affect Conversation Builder/third-party bots, Knowledge Base, Agent Assist, etc. Respectively, the designation of a primary domain plays no role in intent matching when it comes to determining a dialog to start for the consumer, a knowledge base article to send to the consumer, a knowledge base and/or bot to recommend to an agent, etc.

**'Enable Intent Tracking' domain setting**
This enables “intent listening” for the domain, which provides you with enhanced intent-related reporting on your consumers’ utterances. What’s more, it means you can now enable this for multiple domains. (Previously, you could only do this for a single domain, and you enabled intent tracking at the intent level, not the domain level.)

When intent tracking is enabled, the system records and labels all future conversations with intent metadata (e.g., a consumer utterance of “I want to cancel my flight” is labeled as having the “cancel flight” intent in an “Airlines” domain). The system also records other metrics like CSAT, Meaningful Conversation Score and more. This intent data is then populated into the Analyze page within Intent Manager.

The number of domains for which you can enable intent tracking is configurable. To increase the number, contact your LivePerson account representative. If this field is disabled, you’ve reached the limit. You can either increase the number or disable intent tracking for another domain.

You can enable intent tracking at a later time, but be aware that there is no backfill of historical data. Data begins to be recorded when this setting is enabled.

## Multi-domain support
Intent Manager 2.2 also introduces multiple intent domain support, making it possible to evaluate each consumer message against multiple machine learning models in real time, with the ability to process and store classifications from multiple Intent Domains simultaneously (up to 5 domains). 
![](img/IM-updates-3.png)

Domains are selected from Intent Manager instead of from Intent Builder.
Multi-domain opens the door for brands to:
Develop and A/B test new domains
Support more than one language per account
Support multiple lines of business
Independently tune models for specific use cases: sales and marketing, churn detection and escalation, social media monitoring, specialized bots and automation

![](img/IM-updates-4.png)



