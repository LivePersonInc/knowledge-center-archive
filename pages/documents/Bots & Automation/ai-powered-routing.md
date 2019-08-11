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

## How to build a routing policy

AI powered routing uses centralized policies to achieve routing to best human agent (direct, skill) or bot, based on intent and/or context attributes such as consumer profile data, operational context (load, predicted wait time, KPI’s) and conversational history.

![](/img/ai-powered-routing-1.png)

To build a routing policy, brands first set the context by leveraging a combination of different attributes to be used in the routing policy, including:

* User context, such as consumer names and email address
* Conversational context, such as agent skills or consumer intent from the LiveEngage platform
* Operational context, such as a contact center’s wait time
* Predefined custom attributes from an external data source, such as a Salesforce CRM database, using [FaaS function](https://knowledge.liveperson.com/developer-tools-liveperson-functions.html), and any custom attribute using Session Store APIs

For example, a brand can use a consumer’s intent in a policy for VIP customers - deriving that value from a Salesforce CRM database using a FaaS function. The policy can then direct certain intents for all VIP customers to a specialized agent skill - while ensuring wait times are not high.

![](/img/ai-powered-routing-2.png)

By combining information from external systems like a CRM, the consumer can be immediately identified by name, location, and other information, such as VIP status. LivePerson Functions allows brands to easily integrate data from external systems, like Salesforce, using a secure, LivePerson-managed function services.

![](/img/maven-overview-4-1.png)

{: .notice}  
“Route a group of intents (e.g. order enquiry, cancellation, scheduling) to general order skill, unless customer is a VIP, then send them to their Dedicated Advisor”v

### Set up routing policies

With full integration into LivePerson’s platform, brands can trigger AI powered routing through one of the following actions:

1. Adding ‘Maven’ skill to campaigns
2. Customizing Maven through the AskMaven APIs to be used on greeting bots, websites, or apps. This is best for brands that have a concierge bot, as well as deeper customization needs.

{: .notice}  
Maven includes an out-of-the-box bot template that comes pre-wired with greeting intents and API integrations for brands to get up and running quickly.

### Get started in the Maven Workspace

Brands can login and manage how AI is used in their conversational pipeline, as well as create and tweak AI powered routing policies through Maven’s Workspace. The workspace provides a self service experience for brand and contact center leaders to:

* Author AI-policies for Routing
* Configure Maven features (ex: Recommended Actions for Agents)
* Configure developer functions to integrate with CRM
* Analyze the usage and impact of AI-policies

## Analytics dashboard & Maven Mobile App

Maven’s analytics dashboard and Mobile App provides contextual analytics on the performance of routing policies so brands can manage and optimize its performance on the go.

![](/img/ai-powered-routing-4-1.png)

With Maven, brand and contact center leaders have full visibility over how AI is used in their routing policies, and have the ability to configure integrations and context, and access a performance dashboard to optimize Maven’s AI decision making.