---
pagename: 'AI-Powered Routing '
categoryName: Bots & automation
subCategoryName: ''
indicator: both
subtitle: Create AI-based routing policies using intent, context and predictive attributes
  to route conversations to the best human agent, bot, or knowledge base content.
level3: ''
permalink: ai-bots-automation-maven-ai-powered-routing.html
isTutorial: true
isNew: true
published: false

---
Typically, building custom routing requires extensive time and work that is both expensive and requires developers time to implement. With LivePerson, Maven’s AI-powered routing enables brands to create customized routing policies that uses AI and machine learning to dynamically route consumers to human or bot skill - solving customer requests as efficiently as possible.

The power of Maven’s AI-Powered Routing comes from its ability to use a variety of attributes in routing policies - including intents, context, and predictive AI models - in order to create highly personalized journeys to optimize care and sales experiences

## Key benefits

With Maven, brands easily build routing policies based on profile information, interaction history, and other contextual data. Maven’s AI-Powered Routing works by combining all available information - such as intent, contexts and predictive AI models - together with a brand’s predefined policies to make the best routing decision for the specific conversation.

**Benefits include:**

* Unlock highly personalized journeys to optimize care and sales experiences
* Customize routing based on intent, context, and predictive AI
* Solve customer requests quickly by routing dynamically to human agents or bots
* Increase agent and operational efficiency by leveraging automations in routing

## Common use cases:

All brands can offer relevant bots and knowledge base articles proactively and at the right time in the conversation, replacing sticky notes and saving time compared to structured content. Here are some use cases per industry:

* When brand suffers an exceptional event (storm, incident) route to a bot for intents related to the outage. For all other intents (e.g. billing) route to human agent pool.
* Route a group of intents (e.g. order enquiry, cancellation, scheduling) to general order skill, unless customer is a VIP, then send them to their Dedicated Advisor
* For lost baggage intent, return to the same agent if customer is returning within 24 hours; for premium elite customers route to high priority queue.

## How AI-Powered Routing works

AI-Powered Routing gives brands the power to author policies based on intent and/or context attributes (such as consumer profile data), operational context (load, wait time, KPIs), conversational history, or predicted outcomes (e.g. sales funnel conversion)

When a conversation comes into LiveEngage, [Maven](https://knowledge.liveperson.com/ai-bots-automation-maven-maven-overview.html) works in the background to quickly understand the consumer’s intent, fed from information from Liveintent. It then uses Maven’s AI-Powered Routing to assess the conversation’s context from various data sources and route to the right agent or bot.

### How to build a routing policy

AI powered routing uses centralized policies to achieve routing to best human agent (direct, skill) or bot, based on intent and/or context attributes such as consumer profile data, operational context (load, predicted wait time, KPI’s) and conversational history.

![](/img/ai-powered-routing-1.png)

To build a routing policy, brands first set the context by leveraging a combination of different attributes to be used in the routing policy, including:

* User context, such as consumer names and email address
* Conversational context, such as agent skills or consumer intent from the LiveEngage platform 
* Operational context, such as a contact center’s wait time
* Predefined custom attributes from an external data source, such as a Salesforce CRM database, using [FaaS function](https://knowledge.liveperson.com/developer-tools-liveperson-functions.html), and any custom attribute using Session Store APIs