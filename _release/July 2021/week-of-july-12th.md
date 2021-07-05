---
pagename: Week of July 12th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-july-week-of-july-12th.html
isTutorial: false
isNew: false
date: '2021-07-09'

---

These release notes include new features arriving July 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Post-conversation survey that supports migration to Conversation Builder 
### Type: Enhancement [Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

There’s a new enhancement to Conversation Builder post-conversation survey bots in support of brands that are migrating from Bot Studio to Conversation Builder for creating and managing survey bots. Specifically, brands that make use of survey, question, and answer IDs in their reporting on survey bots can now download a report on these for a given survey bot. Within Conversation Builder, go to the dashboard of bots, access the three-dot menu for the specific survey bot, and select Generate IDs report from the menu.

## New Dynamic Routing tile
### Type: Enhancement [Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

Dynamic Routing is the intelligent routing of consumer conversations to the most qualified agents -- bot or human -- based on intent data and other contextual data: consumer inputs, past interactions, loyalty tier, and other attributes. Dynamic routing makes possible highly personal consumer journeys and routing at scale. It is a key architectural component of Conversation Orchestrator, one of LivePerson’s Conversational AI applications.

In this release, Conversation Builder adds a new, code-free Dynamic Routing interaction, which you can use in a routing bot or in any other bot that needs to route the conversation intelligently.

The Dynamic Routing interaction executes Conversation Builder’s askMaven scripting function to get from Conversation Orchestrator the next actions for the current conversation. (The next actions are determined based on the routing policies that you define in Conversation Orchestrator.) The Dynamic Routing interaction then automatically performs those next actions.

IMAGE 1

There are other ways to implement Dynamic Routing. However, in a Conversation Builder bot in particular, using the new Dynamic Routing interaction is now recommended, as it’s the simplest and easiest approach. Those integrations and related interactions to transfer the conversation to the skill and to the agent? You don’t need them anymore. All that JavaScript code manually added by you? It’s no longer necessary. You configure just the Dynamic Routing interaction, which does it all: It makes the call to get the next actions, and then it performs those actions.

## Redesigned Bots dashboard
### Type: Enhancement [Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

The Bots dashboard in Conversation Builder has been redesigned for improved performance and usability. You’ll find the new dashboard performs faster and makes it easier to quickly find and access the bot you ne


##  Limit for downloading custom events has increased
### Type: Enhancement [Bot Analytics - Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

In Bot Analytics, the limit for downloading custom events in specific has been increased from 10,000 in number to 100,000.

## Unified navigation for Intent Builder and Intent Analyzer
### Type: Enhancement [Intent Manager - Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

The Intent Builder and Intent Analyzer applications have been combined into a single, navigational user interface, for a cohesive and more intuitive user experience.

Previously, you access and worked in two,separate applications:

IMAGE 2

We’ve changed this so that now there’s a single entry point:

IMAHE 3

Within the new, consolidated Intent Manager application, you’ll find a new dashboard, as well as a feature set that’s organized into four main tabs:

* Discover: Explore topic clusters in historical conversations to discover and define new customer intents and associated training phrases
* Build: Build, train, test, and activate machine-learning models
* Optimize: Leverage agents to annotate messages for optimized intent models
* Analyze: Analyze patterns in consumer intent and associated KPIs to derive insights that drive business decisions and operational actions

IMAGE 4

Note: For brands that don’t have Intent Analyzer enabled, the “Discover” and “Analyze” features are “locked.”

## 
### Type: Enhancement [Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

