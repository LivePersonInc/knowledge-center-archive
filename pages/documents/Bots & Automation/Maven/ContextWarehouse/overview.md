---
pagename: Conversation Context Service
categoryName: AI, bots & automation
subCategoryName: Conversation Orchestrator
level3: ''
indicator: messaging
subtitle: Conversation Orchestrator is LivePerson’s platform for conversational orchestration
  & continuous learning
permalink: ai-bots-automation-conversation-orchestrator-conversation-context-service.html
isTutorial: false
isNew: false
date: '2019-03-14T11:31:44.000+00:00'
published: true
redirect_from:
  - ai-bots-automation-maven-context-warehouse.html
  - ai-bots-automation-conversation-orchestrator-context-warehouse.html

---

## What is Conversation Context Service?
The Conversation Context Service (CCS) provides contextual memory to power AI experiences within Conversational Cloud. It enables spontaneous, context-aware conversations by being the central place where internal and external services can store and gather conversation context to further the dialog with consumers.

The CCS is a cloud-based repository for storing and retrieving session state attributes that can be preserved and referenced throughout a consumer’s conversational journey. This feature allows all agents, whether human or bot, to access relevant information that has been previously uncovered to ensure the consumer has a seamless, thoughtful experience as they move through their conversations. By using the CCS as a single source of truth for a user’s context variables, we can craft a more personalized experience for the consumer, while reducing redundancy and limiting the potential for errors when re-entering information.

The CCS provides a system to hierarchically organize data using key-value pairs. At the top of the hierarchy, brands can have multiple namespaces to specify sections based on different business use cases. Typically, namespaces group together related attributes, such as customer information or reporting dashboard data for your account. Brands can define as many attributes as needed within their namespace, and they can further organize and structure these attributes under session IDs within the namespace.

![](img/co_ccs_namespace.png)

The CCS stores data in key-value pairs and includes developer tools like js-libraries, Liveperson Functions support and REST APIs. These can be used to store data from other products within the Conversational Cloud and from external data sources.

### When to use the Conversation Context Service
CCS attributes can be used in a variety of ways to enhance the conversational experience of consumers. Attributes are accessible at any point in the conversational journey, and they can be used in the following ways:

#### Power contextual continuity between bots 
In this example, the intent and email is being saved into the CCS by one bot and is being retrieved by another bot to continue the conversation.

![](img/co_ccs_usecase1.png)

#### Perform context-based dynamic routing at scale 
In this example, a concierge bot saves the intent into the CCS. The CCS links to an external CRM to get customer tier information. A Dynamic Routing policy then makes use of the intent and tier information to power a routing decision.

![](img/co_ccs_usecase2.png)

#### Perform human-bot tango 
In this example, bots continue to build context about the consumer and the context information can be exposed to human agents through an agent-facing widget.

![](img/co_ccs_usecase3.png)

## How to use the Conversation Context Service
Each object within the CCS comes with full CRUD (Create, Read, Update, Delete) functionality to easily generate and access the needed information. When building bots using Conversation Builder, it is highly recommended to leverage the built in botContext scripting functions. These scripting functions provide straightforward methods to simplify each CRUD action for use in the bot and other Conversational Cloud services.

### Manage the Conversation Context Service in Conversation Builder
Additionally, the CCS API offers a RESTful interface with methods to access the desired functionality from services other than Conversation Builder.

For more information on implementation & getting started, please see the LivePerson [Developer Center](https://developers.liveperson.com/conversation-orchestrator-conversation-context-service-getting-started.html).
