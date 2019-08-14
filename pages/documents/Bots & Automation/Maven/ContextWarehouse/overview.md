---
pagename: Context Warehouse
categoryName: AI, bots & automation
subCategoryName: Maven
indicator: messaging
subtitle: Maven is LivePerson’s platform for AI-powered conversational orchestration
  & continuous learning
permalink: ai-bots-automation-maven-context-warehouse.html
isTutorial: false
isNew: false
date: '2019-03-14T11:31:44.000+00:00'
published: true

---

## What is Context Warehouse

The context warehouse is a centralized repository of brand, customer, conversational, session, and custom attributes that can be used to build customized conversation solutions. 

Maven provides three types of Context Attributes:

1. Inbox System Attributes (e.g. conversation history)
2. Custom attributes with static data or external system integrations with [Functions](liveperson-functions-overview.html)
3. Context session store with APIs to store and retrieve session context and carry them over the conversational journeys

<img class="fancyimage" width="800" src="img/Context Warehouse Diagram.png">

## Common Use Cases

Context warehouse attributes can be used in several ways:

1. Save conversation session state info in LiveEngage (e.g. agent notes), and retrieve them later in a different conversation session.
2. Save contextual attributes in concierge bot (e.g.) intents and carry over context to another bot or human skill.
3. Use intents and entities from a bot, and use them in conjunction with system inbox attributes, or custom static or FaaS to create complex routing policies. Please see [AI Powered Routing](https://developers.liveperson.com/maven-ai-powered-routing-overview.html) to learn more about how to create such policies. 

Brands can use and manage Context Warehouse from the Maven Workspace:

<img class="fancyimage" width="750" src="img/contextWarehouse-custom.png">

For more information on implementation, please see the LivePerson [Developer Center](https://developers.liveperson.com/maven-context-warehouse-overview.html).