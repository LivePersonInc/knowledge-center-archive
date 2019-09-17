---
pagename: AskMaven API
categoryName: AI, bots & automation
subCategoryName: Maven
level3: ''
indicator: messaging
subtitle: Maven is LivePerson’s platform for AI-powered conversational orchestration
  & continuous learning
permalink: ai-bots-automation-maven-askmaven-api.html
isTutorial: false
isNew: false
date: '2019-03-14T11:31:44.000+00:00'
published: true
redirect_from:
  - ai-bots-automation-maven-askmaven.html

---

## What is the AskMaven API

The AskMaven API is a REST API that allows you and your bots, web sites, and apps to call Maven capabilities programmatically. You can use the API to ask Maven for the next best action (route to skill, KB article, etc) for a concierge bot/app.

<img class="fancyimage" style="width:750px" src="img/askmaven.png">

## Common Use Case

<img class="fancyimage" style="width:600px" src="img/askmaven-use-case.png">


A typical use case for using the AskMaven API is to get a routing decision to transfer to a skill from a Bot or LOB app. 

1. A brand's concierge bot (for example a bot built in Conversation Builder or Google Dialogflow) handles branded greetings, dialogs, and intents.
2. It then calls the AskMaven API which evaluates all the policies setup in AI Powered routing and then returns the next best best action.
3. The concierge bot then uses the action (for example route to a skill), to transfer the conversation to that skill in LiveEngage.
4. This is often used in conjunction with the Context Session Store to pass custom attributes to use in a policy (for example intents). To learn more about how to use the Context Session Store [please see documentation](https://developers.liveperson.com/maven-context-warehouse-context-session-store.html).


For more information on implementation, please see the LivePerson [Developer Center](https://developers.liveperson.com/maven-askmaven-overview.html).
