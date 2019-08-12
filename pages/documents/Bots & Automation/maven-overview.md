---
pagename: Maven overview
categoryName: Getting started
subCategoryName: ''
indicator: both
subtitle: Maven is LivePerson’s platform for AI-powered conversational orchestration
  & continuous learning
level3: Getting started
permalink: ai-bots-automation-maven-maven-overview.html
isTutorial: false
isNew: false
date: '2019-03-14T11:31:44.000+00:00'

---
## Overview

Conversational Commerce has unlocked new channels for consumers to interact with brands on their terms. Consumer demand for messaging presents a challenge for brands to effectively handle high-volumes of messaging conversations while simultaneously delivering personalized and effective service to every consumer.

LivePerson’s Maven AI offers brands tools to enable efficient and personalized customer journeys at scale, while allowing brands control and transparency over how AI is used in their business.

Maven, part of LivePerson’s Conversational AI, empowers brands to create highly personalized conversational experiences for their customers. Maven provides the following key value to brands:

* **Humans in loop**: Accelerate human agents in the contact center with Recommended Actions
* **Go handsfree with AI**: Centralized AI policy experience that evolves with your business, and allows you to use all information to make decisions using the Context Warehouse
* **Connect to an AI ecosystem**: Use AskMaven APIs from an application or bot, or go faster with inbox predictions and models
* **Drive continuous improvements** using Maven learning, that improves predictions and outcomes with more usage.

Maven introduces a suite of products, experiences, and developer platform features, that enable brands to more easily achieve conversational commerce at scale, with higher trust and transparency in their conversational journeys:

## Maven Workspace

The Maven Workspace is a self-service, low-code/no-code experience for brands to enable or tune Maven capabilities and features. With Maven brands can:

* Setup **Maven Assist's** [Recommended Action]( "https://knowledge.liveperson.com/ai-bots-automation-maven-recommended-actions.html")s to increase agent productivity by suggesting bots or knowledge base articles based on customer’s intents.
* Manage and use the **Maven Context warehouse**, a repository for brand, session, or customer attributes, including the ability to connect to external data sources (CRM [using a FaaS](https://knowledge.liveperson.com/developer-tools-liveperson-functions.html)), and use these attributes throughout the customer’s conversation journey or in routing policies.
* Author dynamic **AI Powered Routing** policies based on attributes (intent, content, session, or AI based inferences) to route to the right human or bot - unlocking highly personalized consumer journeys.

Access developer features such as **AskMaven** for next action or **Context Session Store** to customize and integrate Maven AI orchestration into their decision processes.

![](/img/maven-overview-1.png)

## Maven Assist

Maven [Recommended Actions](https://knowledge.liveperson.com/ai-bots-automation-maven-recommended-actions.html) is part of Maven Assist, a suite of features that improves productivity for agents and consumers. Recommended actions is a capability of Maven Assist that suggests the next best action - joining bots or adding knowledge base articles into the conversation - to agents in real time, based on consumer’s intent.

Maven analyzes all available automations for the identified intent and recommends the best one in real time to the agent. Recommendations are done by choosing the highest ranked bot or KB article by score, after calibrating the score using a machine learned signal about the historical performance. Agents can opt to manually use the KB article to help user, or join the bot to the conversation, monitor, and remove if needed.

![](/img/maven-overview-2.png)

## Context Warehouse

The context warehouse is a centralized repository of brand, customer, conversational, session, and custom attributes that can be used to build customized conversation solutions. Maven provides three types of Context Attributes:

1. Inbox System Attributes (e.g. conversation history)
2. Custom attributes with static data or external system integrations with FaaS
3. Context session store with APIs to store and retrieve session context and carry them over the conversational journeys.

### Common use cases

Context warehouse attributes can be used in several ways:

* Save conversation session state info in LiveEngage (e.g. agent notes), and retrieve them later in a different conversation session.
* Save contextual attributes in concierge bot (e.g.) intents and carry over context to another bot or human skill.
* Use intents and entities from a bot, and use them in conjunction with system inbox attributes, or custom static or FaaS to create complex routing policies. Please see section on AI Powered Routing to learn more about how to create such policies.

## AI Powered Routing

Maven’s AI powered routing provides a centralized experience to create dynamic policies to achieve routing to best human agent (direct, skill) or bot, based on intent and/or context attributes such as consumer profile data, operational context (load, predicted wait times, KPIs), and conversation history.

The power of Maven’s AI Powered Routing comes from its ability to use a variety of attributes in routing policies - including intents, context, and predictive AI models - in order to create highly personalized journeys to optimize care and sales experiences.

![](/img/maven-overview-4.png)

### Common Use cases

* **When** brand suffers an exceptional **event** (storm, incident) **route** to a bot for **intents** related to the outage. For all other intents (e.g. billing) route to human agent pool.
* **Route** a group of **intents** (e.g. order enquiry, cancellation, scheduling) to general order skill, **unless** customer is a **VIP**, then send them to their **Dedicated Advisor**
* **For** lost baggage **intent**, return to **same agent** if customer is **returning within a time period**; for **premium-elite** customers route to high priority skill

To get the bigger picture or learn more about how Maven fits into your contact center operations, check out the [LivePerson’s Conversational Commerce platform](https://knowledge.liveperson.com/getting-started-livepersons-conversational-commerce-platform.html#how-our-conversational-platform-works).