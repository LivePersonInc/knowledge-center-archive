---
pagename: Week of January 18th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-january-week-of-january-18th.html
isTutorial: false
isNew: false
date: '2021-01-13'

---

These release notes include new features arriving January 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Dialogflow Regions
### Type: Enhancement [Third-Party Bot Connectors 2.26]
#### Available to all customers? Yes

To reduce network latency of the Dialogflow AI, Google introduced a new feature to create agents in different locations. Third-Party Bots supports this now and it is possible to select the agent region in the Connect to A.I step while configuring a Dialogflow v2 bot. 

The following dialogflow agent locations are now supported:
* europe-west2 ( London )
* asia-northeast1 (Tokyo)
* australia-southeast1 ( Sydney )
* US

### How to enable
Enabled for all customers by default.

![](img/RN_Jan18_1.png)

## PVA Platform Support for Microsoft DirectLine Connector 
### Type: Enhancement [Third-Party Bot Connectors 2.26]
#### Available to all customers? Yes

The Microsoft Dynamics Team provides the Power Virtual Agents Solution to create and manage bots visually on a web platform. Directline agents that were built with this PVA Platform are now supported in Third Party Bot’s Direct Line connector.  To use a PVA Directline agent, the user needs to enable the Power Virtual Agents checkbox at the “Connect to A.I.” step of the Directline Connector inside the Third-Party Bots configuration wizard.

### How to enable
Enabled for all customers by default 

![](img/RN_Jan18_2.png)

## Model Tester
### Type: Enhancement [Intent Builder]

#### Channel
This feature is available for all channels supported by the Conversational Cloud platform.
Available to all customers? Yes

If your domain is using the LivePerson NLU v2 engine, there’s now an advanced Model Tester that’s available. The Model Tester is designed to:
* Provide broad testing coverage for the domain
* Help you determine if the model is improving or regressing from one version to the next

You define the test set (a set of phrases/consumer utterances that are mapped to expected intents), and then you run the test against a specific model version. By repeating the test with the next model version, and then comparing the reports, you can determine if the model is improving or regressing from one version to another.

![](img/Model-tester-RN.png)

## Conversation Tester
### Type: Enhancement [Conversation Builder]
 
#### This feature is available for all channels supported by the Conversational Cloud platform.
#### Available to all customers? Yes

Conversation Builder now includes a Conversation Tester tool that’s designed for testing and debugging after deployment. You can use the tool to:
* Test the end-to-end flow after you have finished building and deploying a bot
* Debug a deployed bot

The Conversation Tester lets you quickly start a conversation and view both the conversation and the debug log side by side. The conversation travels from the Conversational Cloud channel, to Conversational Cloud, to the agent connector, to the bot server, and back again. In short, there is end-to-end testing of the entire flow over the Web.

![](img/conv_tester_RN.png)

## Topic Clustering for Intent Discovery and Optimization 
### Type: Enhancement [Intent Manager 2.0]

Optimizing the coverage and quality of intents is a critical component of Intent Management. Intent Manager 2.0 introduces new language clustering visualizations that help brands discover new topics and trends in their conversational data. 
Clusters are groupings of messages that share similarities in language. Messages in each cluster share a noun (such as the word “order”), and each cluster contains sub-clusters that have noun-verb combinations such as “place order” or cancel order”. Both clusters and sub-clusters provide an intuitive way to identify common combinations of phrases that consumers are using to express their intent. When used in combination with various search and filter criteria, clusters can be used to identify opportunities to further develop your intent taxonomy and help define ways to optimize your intent model. 

![](img/IM2.0_1.png)

Brands can combine the power of clustering with Semantic Search and power filters to quickly build new, high-quality intents, which are based on a diverse set of training data that has been extracted from real customer conversations. The new Intent Directory pop-over enables you to see all the intents and training phrases used in a single place. You can access it by clicking on the orange icon on the bottom right corner of the screen. The Intent Directory and improved integration with Intent Builder makes it easier than ever to correct misclassified messages and tune the overall recognition quality of their ML models without a dependency on specialized data scientists. 

The Messages table view has moved to the Intent Discovery tab (from the Conversation Details tab). 
The Intent-detection coverage widget shows classified vs unclassified message count. 

![](img/IM2.0_2.png)

### How to enable:
Enabled by default by end of January

## Enhanced Intent Trends dashboard with new Customizable Metrics & KPIs
### Type: Enhancement [Intent Manager 2.0]

The ability to analyze and track key performance indicators by intent is a key value proposition of the Intent Powered business. Intent Manager 2.0 adds 7 new intent correlated metrics to the Intent Trends dashboard that are aligned to the LivePerson 4E Framework. The release also adds a new configuration panel that enables brands to select which metrics to include in summary cards, charts and graphs, and data tables in the Intent Trends dashboard. By clicking the gear icon in the top right corner you can configure which metrics show where. 
This enables brands to remove empty/ extraneous information and to tune the Intent Analyzer dashboard for use with specific personas and use cases. 

Intent Trends now includes the following metrics:

| Metric | Description | 4E Category|
|--------|-------------|------------|
| MCS | [The meaningful connection score](https://knowledge.liveperson.com/data-reporting-meaningful-conversation-score-(mcs)-meaningful-conversation-score-(mcs)-overview.html) for a conversation is an automatic, unbiased method to measure the relationship between consumers and brands | Emotion |
| CSAT | CSAT score is the average of scaled responses to a post- conversation survey question that asks a customer to rate their satisfaction | Emotion |
| Avg. Duration | The average duration of a conversation | Efficiency |
| NPS | The Net Promoter score associated with a conversation | Emotion |
| % of fully automated conversations | Conversations with intents that were fully automated (no agent assignments) | Effectiveness |
| % of partially automated conversations | Conversations with intents that had both a bot and an agent (TANGO) | Effectiveness / Efficiency |
| % of agent only conversations | Conversations with intents that had only Human Agent assignments | Effectiveness / Efficiency |
|Avg # of transfers | The average number of transfers in a conversation by Intent | Efficiency |
| Average # of consumer Messages | The average number of consumer messages sent in a conversation | Effort |
| Avg # of Agent/Bot responses | The average number responses sent by agents or bots to the consumer in a conversation | Efficiency |
| RCR (coming soon) | The number of repeat customer contacts pers intent | Effectiveness |

### How to enable:  
Enabled by default 
**Available to all customers?** Yes
![](img/IM2.0_6.png)

## Enhanced Conversation Details Panel for Improved Transcript Analysis
### Type: Enhancement [Intent Manager 2.0]

The ability to  analyze and explore conversations by intent is greatly improved in Intent Manager 2.0. Brands can use power filters to search for keywords and phrases in both the agent and consumer portions of the transcript. Brands can easily browse a list of conversations that match their filter criteria with associated metadata and KPIS. The transcript view now supports structured content inside a streamline UI.

![](img/IM2.0_9.png)

### How to enable:  
Enabled by default 
**Available to all customers?** Yes

## The Ability to Create and Manage Rule-Based Power Filters
### Type: Enhancement [Intent Manager 2.0]

Building on existing advanced filter functionality brands can now save and manage complex filters that enable them to surface and track specific insights on exact topics. Brands can use regular expressions to instantly mine and query up to 13 months of conversation data that matches specific criteria. This functionality is complementary to ML powered Intents and allows brands to cover analysis use cases that don’t work within the Intent taxonomy.

![](img/IM2.0_10.png)
**Available to all customers?** Yes

### How to add filters
* To add a filter, click on the Add Filter button on the top left corner. Choose a filter property from the drop down list and add constraints based on your needs. * To save a filter, Click on save
* Once you add and save a filter, you will be able to access previously saved filters and search for specific filters too.

### How to enable:  
Enabled by default 
**Available to all customers?** Yes

## Added Coverage For Existing Starter Packs
### Type: Enhancement [Intent Manager 2.0]

**Available to all customers?** Yes

Intent Manager 2.0 includes updates to three of core starter packs to improve coverage and accuracy. 
* The Telco starter pack now includes 21 intents with typical coverage of 45%
* The Airlines starter pack now includes 13 intents with typical coverage of 74%
* The Insurance starter pack now includes 12 intents with typical coverage of  78% 
If you want to create a new starter starter pack model - please contact your account team.
For more info on starter pack intents click [here.](https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-create-and-optimize-intents.html)

## Visual Overhaul and UX improvements
### Type: Enhancement [Intent Manager 2.0]

Intent Manager 2.0 has updated styles, a new menu structure and usability & accessibility improvements.

For more information [click here](https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-intent-manager-updates.html)
