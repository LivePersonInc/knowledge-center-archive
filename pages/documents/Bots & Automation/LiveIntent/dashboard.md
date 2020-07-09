---
pagename: Dashboard
categoryName: Bots & automation
subCategoryName: Intent Analyzer
indicator: messaging
subtitle: Intent Analyzer provides real-time intent identification to help businesses optimize
  operations and enable data-driven automation programs
level3: ''
permalink: ai-bots-automation-intent-analyzer-dashboard.html
isTutorial: false
isNew: false
redirect_from: ai-bots-automation-liveintent-dashboard.html
---

This document will explain all of the various aspects of the Intent Analyzer dashboard.

All tables in the dashboards can be sorted by clicking on any of the headers.

## Autorefresh

The autorefresh setting allows you to set how often the dashboard refreshes. Setting it to the lowest time of 15 seconds will give you a live view into your intents.

## Search

The search bar will limit data to only its results across all dashboards and views of Intent Analyzer.

You are able to search for keywords in messages or metadata like conversation IDs.

When searching, you can use special operators like `AND`, `OR`, and `AND NOT`.

Example:
    `"This message" AND "that intent" AND NOT "some other text"`

## Filters

The filter options will limit data across all dashboards and views of Intent Analyzer.

### Add Filter

When you add a filter, you will see many different data points to filter by.

Skills, Groups, and Agents allow you to ensure that the right intents are occurring in the right places.

Domains, Meta-Intents, and Intents allow you to hone in on specific intents.

Selecting User Types will allow you to optimize bot-specific or human-only conversations.

MCS, Confidence Score, and CSAT will allow you to specifically dive into performance of intents.

### Time Range

You have three options to select a time range to filter your intent data.

Quick Select will provide you with the most common time ranges.

Relative gives you a rolling window of time.

Absolute lets you use Intent Analyzer as historical reporting.

## Intent Trends

The Intent trends view gives a high level view of which intents are happening in your contact center

<img class="fancyimage" style="width:750px" src="img/intentanalyzer_dashboard-section-1.png">

### Topline Metrics

At a glance, see how your intent detection is doing

### Top Intents

The volume and historical trend of your top 5 intents

### Intents with Lowest Confidence Score

The lowest 5 intents in terms of matching confidence by the NLU.

If intents have a low confidence score, that means that they may need better or more training phrases.

### Intents with Lowest MCS

The lowest 5 intents in terms of poor customer sentiment.

If intents show up here, there likely needs to be changes made to operational processes with bots or human agents.

### All Intents and KPIs

Tabular view of all data above, not limited to top or lowest 5 intents.


## Conversation Details

The converation details view is where you go to dig in to explore the messages and conversations with intent.

### Self Service Intent Discovery and Optimization
The new Self Service Intent Discovery and Optimization features enable brands to tune their Intent taxonomy and deploy improved models within minutes. Brands can now easily mine their conversation data to discover and build new intents from one unified interface. They can also correct misclassified messages and feed those annotations back into their model as new training phrases to improve recognition quality.

The information architecture has been updated to ease navigation between Intent Analyzer and Intent Builder. 

Custom Starter Packs can be generated from historical chat transcripts as well as messaging transcripts. A minimum of 200K chat messages is required, but now brands who have recently migrated to messaging can utilize their chat history to automatically build out their own initial Intent taxonomy.

### Consumer Experience
Under Conversation Details in the Intent Analyzer dashboard, users can  go through undefined messages and classify the correct intent or create a new intent.

![](img/Intent-manager-customer-experience1.png)

Brands have the ability to choose to show how many messages they would like to go through (up to 500 messages) to reclassify or create new intents in groups.

![](img/Intent-manager-customer-experience2.png)

To train the model, brands need to update the Intent Builder with the orange button. Once users click the orange button in Intent Analyzer, they will still need to go into Intent Builder to train and activate the model. 

![](img/Intent-manager-customer-experience3.png)

When you create a new intent, a modal will guide you in the creation of the new intent. Currently, you MUST add 20 new utterances for each new intent before you can re-train the domain in Intent Builder.

In order for a brand user to begin reclassifying utterances via the Intent Analyzer Discovery feature, they must have at least one of the following permissions:

Conversation Builder: Administrator
Conversation Builder: Bot Builder
Conversation Builder: Content User

### Topline Metrics

At a glance information about your messages with intent

### Messages with Intent

All messages with intent that match your filters.

Only shows up to 500 items.

Clicking on the Conversation ID, filters the dashboard via the [search bar](#search) to just that conversation. For example, see agent conversations will be filtered to just that one.

### Agent Conversations and Transcripts

This are is for exploring into specific instances of intent detection. The conversations displayed will be determined by the [filters](#filters) or [search](#search).

The transcript data can be useful for determining improvements in training phrases.

<!--
### Glossary

| Term | Definition |
| --- | ---- |
| High Impact Intents | todo |
| MCS | Meaningful Conversation Score |
-->
