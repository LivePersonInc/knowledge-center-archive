---
pagename: LivePerson Functions
categoryName: Getting started
subCategoryName: ''
indicator: both
subtitle: LivePerson Functions enables brands to quickly and easily customize how
  the LivePerson platform behaves.
level3: ''
permalink: developer-tools-liveperson-functions.html
isTutorial: false
isNew: true
redirect_from:
- developer-tools-function-as-a-service-(faas).html
---
{: .notice}
This page contains an overview of LivePerson Functions and their benefits. For more in-depth, technical documentation about working with LivePerson Functions, please see our [Developers' Community](https://developers.liveperson.com/liveperson-functions-overview.html).

LivePerson’s open platform new initiative, offers “[Functions](https://faas.liveperson.net)” - a Function as a Service (FaaS) platform that lets brands develop custom behaviors within the LivePerson platform to better tailor the conversational platform to their needs. This allows brands to:

### Rapidly build, test and deploy new conversational experiences

Using Functions, brands can quickly and easily extend LivePerson’s conversational commerce platform by triggering custom code as a reaction to platform events, such as creating alerts or passing data as a reaction to the change in the status of conversation. Functions doesn’t only make it easier, but allows for a faster time to production for custom code.

### Customize how LivePerson’s platform reacts to specific events

Functions enables developers to write a simple function, deploy it to LivePerson's infrastructure and go live in a matter of minutes. This resolves the complexity that brands usually encounter when they need to customize a solution to address specific unique business needs.

### Optimize functions quickly, with no lag time or lengthy deployment cycles

Functions does not require brands to spin up a new service, create new APIs, set up and monitor new servers or manage security risks. Rather, Functions processes a brand’s unique code while monitoring and maintaining the infrastructure, and scaling automatically.

### Eliminate the need for storage and code security

Since all functions are saved within the LivePerson cloud, brands do not have to spend resources on hosting the custom code. In addition, all strengths of the LivePerson platform including security and scalability will apply to your code.

![](img/FaaS.gif)

## How does LivePerson Functions work?

Functions allows brands to write their own custom behavior - through code - that is triggered by events. **Events,** include external innovations and internal LivePerson platform events, such as the start of a conversation, keyword recognition, off-hours detection and even custom bot events.

Brands can deploy the code as a **function** and have the custom behavior become a part of their conversational commerce platform. A **function** is the canvas, where brands can put in the code they want, to ultimately invoke a desired action or outcome.

![](/img/faas-ui-1.png)

The full picture of an event invoking a function can be: an account is tailored to send an alert to an agent manager (function) every time a customer gives an agent negative feedback (event).

## Popular use cases

Since Functions allows brands to write custom, the number and variety of use cases are endless. Here are a few popular, real-life use cases:

### **Use case 1: Trigger actions based on specific intents**

If the contact center is able to recognize intent (using [Maven with LiveIntent](https://knowledge.liveperson.com/ai-bots-automation-maven-overview.html) or another intent analyzer), then a brand can choose to trigger actions from specific intents. For example, if a customer uses the word “outage”, and the brand has identified “outage” as an intent, an action can be triggered to send a proactive alert to the network operation manager. Another popular example is if consumer asks to ‘cancel my subscription’ - the intent of ‘cancel’ is identified and can be customized to automatically display the latest retention offer to the agent.

![](/img/faas-use-case-agent-retention-offers-1.png)

### Use case 2: Customize routing

In collaboration with a routing Bot or with Maven's AI powered routing, when a customer starts a conversation, a brand can develop a function to be invoked to make routing decisions based on the customer’s conversation history. For example, a function can be created to pass the conversation to the last agent who handled it, along with a set of fallback decisions in case that agent is unavailable/offline.

![](/img/faas-use-case-routing-1.png)

Fall back decisions mean, if the agent isn’t online, the fallback action can be customized to pass it to the group the agent is apart of, or the same skill as the last agent. The sophistication of the conditioning a brand can choose to incorporate into this routing logic is limitless. For example, if a brand wants to condition the “last agent” as one that had more than a 5 minute encounter with the customer, that is possible.

### Use case 3: CSAT submission triggers custom notifications or actions

A function can be developed to automatically send a conversation’s transcript to the agent manager. That function can be further customized by a brand to include only conversations that have a negative CSAT or are with VIP customers.

![](/img/faas-use-case-csat-1.png)

### Use case 4: Integrate with a ticketing system with much greater flexibility

Today, brands can integrate ticketing systems to empower agents with detailed and custom information about the consumers in a conversation. Functions enables brands to take this integration further with full control over what information is passed and displayed to agents and what actions they can perform in the ticket as part of the conversation.

For example, LivePerson Functions allows brands to easily integrate data from enterprise systems, like a CRM, through a secure, LivePerson-managed functions service. This will empower agents to see the status of the consumer’s open ticket and take actions like closing or updating the ticket during the conversation with the consumer.

### Use case 5: Leverage customer information to create alerts or actions

Using the consumer information passed from a CRM integration, a function can be invoked to trigger a notification or action to the call centers. For example, if the consumer information reveals that a VIP consumer is in a conversation, brands can customize an alert to be sent into the call center or to the agent manager. Similar actions can be created, such as to update a dashboard that monitors VIP consumers, send an SMS to the account manager of the VIP consumers, and so on.

## How to get started with FaaS

As part of the offering, LivePerson supplies an easy-to-use interface where brands and their developers can select an event to trigger a function. Once an event is selected, developers can either write custom functions or leverage LivePerson Functions' templates for commonly used functions. Brands can set one or more triggers from events, and then automatically launch functions through Functions.

These functions can be created and deployed in a matter of minutes, allowing brands to rapidly build new conversational experiences, such as: seamless connections to CRM to inform routing decisions, the ability for agents to schedule consumer follow-ups, automatic lookups of outstanding consumer tickets, and more. The simplicity and speed of building new functions also lets developers test and learn without waiting through lengthy deployment cycles.

### Vault storage for secrets

LivePerson’s offering includes a secret storage feature that gives brands a self-service way to secure, manage and update confidential consumer data or credentials. Read more about [how the Vault stores secrets](https://developers.liveperson.com/function-as-a-service-developing-with-faas-storing-secrets.html#documenttitlecontainer).

### Scheduled function execution

This feature allows developers to schedule the execution of a function and the invocation of an event in advance - making the functions time bound and able to run in advance.

## Benefits of developing with Functions

**Simpler development**

* Single authentication method for all functions
* Consistent code framework for all functions (node.js)
* Utilize templates for common use cases

**Infrastructure included**

* Hosted on LivePerson’s scalable and stable cloud
* All LivePerson’s world class security compliance & regulations apply (ISO27001, SOC2, HIPAA)
* No need for development environments
* Built-in testing

**Streamlined Integrations**

* Built-in, template-based integrations to popular 3rd party systems (e.g. Salesforce)
* Simpler information retrieval from integrations using a universal ‘payload’ method
