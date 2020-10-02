---
pagename: Overview
categoryName: Bots & automation
subCategoryName: LivePerson Intent Analyzer
indicator: messaging
subtitle: The LivePerson Intent Analyzer provides real-time intent identification to help businesses optimize
  operations and enable data-driven automation programs
level3: ''
permalink: ai-bots-automation-liveperson-intent-analyzer-overview.html
isTutorial: false
isNew: false
redirect_from: 
  - ai-bots-automation-liveintent-overview.html
  - ai-bots-automation-intent-analyzer-overview.html
---

## Introduction

### Discover & understand what consumers want with Intent Manager

The Intent Manager is the suite of tools that allows you to build an intent taxonomy, analyze the most popular consumer intents, optimize how well they are being fulfilled, and discover intents that can or should be automated. The Intent Manager is made up of the Intent Builder and the LivePerson Intent Analyzer. 

The LivePerson Intent Analyzer automatically analyzes customer messages sent to human agents as well as automated bots, instantly identifying and recording customer intent through every turn in the conversation. It integrates seamlessly with the Intent Builder to provide a powerful unified system for intent modeling and management.

The Intent Builder makes it possible for brands to create their own intents and entities organized by domain. 

Intent Manager starter packs are available to accelerate the development of Intent Taxonomy with both vertical specific and universal starter intents to enable our customers to quickly get started with an intent-driven business. Intent starter packs are available for cross verticals such as e-commerce and insurance for purchases and escalations. 

<img class="fancyimage" style="width:750px" src="img/intentanalyzer_dashboard-section-1.png">

## Terminology

| Term | Definition  |  
|------|-------------|
| Intent | A customer’s desire to change  something to do with your brand from state A to state B|
| Domain | Domain is a list of intents and entities, that can be matched to user training phrases (utterances) with an intent-recognition model|
| Pre-built domain | A pre-built domain is a starting point for you to get going with Intents. The intent-recognition model is filled with predefined intents, that have been trained and activated for your convenience. The model has been developed using aggregated and anonymized data from several brands. While pre-built domains are functional, you will need to customize it for your specific needs to get the best performance.|
| NLU | NLU stands for Natural Language processing. In this context NLU refers to the customized machine learning algorithms that are trained to understand the intent expressed in your conversations|
| Training phrases (utterances) | Training phrases are example utterances for each intent in your custom taxonomy. Pre-built domains use generic training phrases to get you started. To improve your model you can replace these generic phrases with examples of real consumer messages from your conversation history.|

## Example Use Cases

### Business Analyst

#### Challenge

An Airline doesn’t have a real-time way to understand customer contacts by intent.

#### How LivePerson's Intent Analyzer Helps

The analyst uses LivePerson's Intent Analyzer to discover, define, and enable the following high impact intents

1. Customer doesn’t understand policy changes
2. Customer can't find their discount code
3. The discount code doesn’t work
4. Customer wants to cancel their account

#### Outcome

The analyst enables detailed real-time insight into the problem by defining intents

### Agent Manager

#### Challenge
There is influx in account cancellations related to the policy changes

#### How LivePerson's Intent Analyzer Helps

The Agent Manager uses the LivePerson Intent Analyzer dashboard to explore conversations with the intent “Cancel my account.”

He discovers that some agents are successfully able to redirect the conversation and prevent cancelation by offering a concession. He uses this insight to develop a new policy

#### Outcome

The Agent Manager is able to quickly roll out a new training which results in a lower account cancellation rate

### Bot Builder

#### Challenge

The Bot Builder wants to use automation to help with influx of messages related to a policy change.

#### How LivePerson's Intent Analyzer Helps

The Bot Builder reviews the LivePerson Intent Analyzer dashboard and notices that the “can’t find discount code” intent is, both, a high volume intent and is easily automatable.

She creates a bot in Conversation Builder for handling these requests and creates an intent-based routing rule in the Conversation Orchestrator that automatically directs customers to the bot.

#### Outcome

The company is able to greatly reduce the volume of agent conversations related to the policy change.

## Getting Started

To enable the LivePerson Intent Analyzer on your account, please contact your LivePerson account representative.

### Permissions
LivePerson's Intent Analyzer inherits its permission structure from Conversation Builder, as the primary admin/ configuration work is related to setting up intents and training models in Intent Builder. Therefore, LivePerson's Intent Analyzer also requires Conversation Builder permissions to be turned ON in Administrator Profile, if not already done so.

Access to LivePerson's Intent Analyzer dashboard is currently granted to the following roles:
* CB_VIEW_ANALYTICS
* BOT_BUILDER_ADMIN
* BOT_BUILDER_BOTS
* BOT_BUILDER_CONTENT_USER
* BOT_BUILDER_BUSINESS_USER
* LPA

### Starter Pack Quick Start

If you do **not** already have intents created in Intent Builder, and if you would like to **get up to speed quickly**, LivePerson's Intent Analyzer offers starter packs filled with common intents for various different business verticals. These starter packs leverage your historical transcript data to automatically create a model for your brand. 

To get started with starter packs, please contact your account representative.

### Once you're set up - optimize your intent taxonomy using the Intent Discovery and Optimization tools

The Intent Discovery and Optimization tools enable you to quickly uncover patterns in your existing data, better discover high impact intents, and automatically develop training phrases to train your machine learning models. It makes it easy for you to annotate incorrectly classified messages so that models can be improved and new intent classes can be created. With these enhancements you can now quickly tune your own Intent taxonomy and deploy new Machine Learning models within minutes, without assistance from LivePerson.

![](img/Intent-discovery.png)

If you have **intents in an external system**, you can [import](https://developers.liveperson.com/intent-builder-overview.html#adding-a-domain) those into Intent Builder to get started quickly.

If you have **intents in Intent Builder** already, [see here](https://developers.liveperson.com/intent-builder-overview.html#intent-analyzer) for how to enable them in Intent Analyzer.

{: .notice}
Please see [this guide](https://knowledge.liveperson.com/ai-bots-automation-intent-analyzer-intent-analyzer-tips.html) for tips on using Intent Builder with Intent Analyzer.

## Using LivePerson's Intent Analyzer

When you have intents and they are enabled for LivePerson's Intent Analyzer, you can view your data in the [LivePerson's Intent Analyzer dashboard](ai-bots-automation-intent-analyzer-dashboard.html).
<!--
See [LivePerson Intent Analyzer Best Practices](intent-analyzer-best-practices.html) for some common usage flows and best practices.
-->

## Managing user access
In order for a user to access Intent Analyzer, they must be assigned a profile that has at least one of the following permissions:
* Conversation Builder: Administrator OR
* Conversation Builder: Content User OR
* Conversation Builder: Business User OR
* Conversation Builder: Bot Builder
For more information on permissions, click [here](https://knowledge.liveperson.com/admin-settings-permissions-profiles.html)
