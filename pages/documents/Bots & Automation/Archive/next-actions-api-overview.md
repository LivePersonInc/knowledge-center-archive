---
pagename: Recommendation API
categoryName: AI, bots & automation
subCategoryName: Conversation Orchestrator
level3: ''
indicator: messaging
subtitle: Conversation Orchestrator is LivePerson’s platform for Dynamic Routing conversational orchestration
  & continuous learning
permalink: ai-bots-automation-conversation-orchestrator-recommendation-api.html
isTutorial: false
isNew: false
date: '2019-03-14T11:31:44.000+00:00'
published: true
redirect_from:
  - ai-bots-automation-maven-askmaven.html
  - ai-bots-automation-maven-askmaven-api.html
  - ai-bots-automation-conversation-orchestrator-askmaven-api.html

---

## What is the Recommendations API?
The Recommendation API is a REST API that allows you to ask Conversation Orchestrator for the next best actions (route to skill, send a response, etc.) for your bot/app. Accessing the API can be done via a [pJavaScript method](https://developers.liveperson.com/conversation-builder-scripting-functions-askmaven.html) from within a Conversation Builder bot or via the REST API for external automations and apps.

## When to use the Recommendations API
1. A typical use case for using the Recommendation API is to get a routing decision to transfer to a skill from a bot or LOB app:

2. A brand’s concierge bot (for example, a bot built in Conversation Builder) handles branded greetings, dialogs, and intents.
It then calls the Recommendation API, which evaluates all the policies set up in Dynamic Routing and returns the next best action.

* If you're using the Conversation Orchestrator bot template, the ask maven call is already pre-configured for you, and you don’t have to do this.
* If you're using a different Conversation Builder bot, you can use the askMaven JavaScript method.
* If you're using a third-party bot on any external platform (for example, Google Dialogflow), use the REST API.

3. The concierge bot then uses the action (for example, route to a skill) to transfer the conversation to that skill in Conversational Cloud.

This is often used in conjunction with the Conversation Context Service to pass custom attributes to use in a policy (for example, intents).

## Getting started
1. Log in to Conversation Orchestrator with your Conversational Cloud credentials, and navigate to Developer Key.
2. Copy and paste the key provided, and use it in your API headers.
3. To generate a new key, click the Regenerate Key button. This will invalidate the previous key. The key is shared for all Conversation Orchestrator APIs; therefore, you must use the new key wherever the APIs are being called.

![](img/co_ccs_developerkey2.png)

Please see [Dynamic Routing's Getting Started]https://developers.liveperson.com/conversation-orchestrator-dynamic-routing-getting-started.html) for more information.
