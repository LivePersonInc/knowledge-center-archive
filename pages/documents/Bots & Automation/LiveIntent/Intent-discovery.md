---
pagename: Intent Discovery
categoryName: Bots & automation
subCategoryName: LivePerson Intent Manager
indicator: messaging
subtitle: A step-by-step guide on how to improve your Intent model. 
level3: ''
permalink: ai-bots-automation-liveperson-intent-manager-intent-discovery.html
isTutorial: false
isNew: false

---

The vision of the Intent-Driven Business is to fundamentally change how brands understand and act on what their consumers want and need - not through proxies like website click patterns - but in consumers’ own intents. Intent Manager is foundational to this vision enabling brands to Discover, Build, Analyze, and Optimize state of the art ML models for intent classification with intuitive self-service tooling.

Here is a step-by-step guide & top tips on how to improve your Intent model in the Intent Disocvery feature. 

## Improve my overall intent-detection coverage
### This is useful if you want to increase your current intent classification’s message coverage.

**a. Discover new consumer intents**
* Turn on the switch for “Only show unclassified messages”
* Explore the largest clusters and subclusters–they contain a larger portion of consumer intents
* Identify any patterns within a cluster.
For example, if a cluster named “contract” has several sub-clusters with similar meanings, like “end contract” and “expire contract”, it may be worth exploring.
* View the messages within the subclusters and validate if they contain similar intents.
For example, the “end contract” sub-cluster may contain several messages where users are wondering when their contract ends (as opposed to wanting to prematurely end their contract).

**b. Create a new intent**
* Click on the button “Create/modify intents with this sub-cluster”. You should be shown a table that displays all the messages from the sub-cluster.
* Individually select the relevant messages, or select them all by clicking on the checkbox at the top of the Messages table.
* Click on the dropdown button “Set Intent”, and then select “Create a new intent” to open up a modal.
* Set the Domain, Intent Name. Then you can modify, remove, and add new messages to the Utterance Library that will be used to train the new Intent. Once completed, * click on “Create new Intent”.

**c. Train and deploy the new intent model**
* Navigate to the Intent Builder and select the domain of the newly added intent. You should see the new intent you just created. You may want to test some phrases by using the intent tester 
* Click on “Train” to begin training the intent model with the new intent.
* In the Versions tab, once training is complete, press “Activate” on the new version. Your model is now updated.

## Improve a specific intent’s classification rate and/or confidence rating
### This is useful if a specific intent has low confidence scores, or lacks a sufficient number of training utterances.

**a. Determine which intent(s) need improvement**
Use the cluster chart to visually identify sub-clusters that contain a mix of both classified and unclassified messages (a mixed distribution of classifications suggests the messages are not being consistently identified correctly). If the classified messages have different intents, the sub-cluster would be an even stronger candidate for improvement.

**Modify the existing intent(s)**
Click on the button “Create/modify intents with this sub-cluster”. You should be shown a table that displays all the messages from the sub-cluster.
You can batch-select the messages that should be added or reclassified to the correct intent by following the steps in 1b, or you reclassify them one-by-one by using the dropdown input in the Intent column of the table.

**c. Train and deploy the new intent model** (same steps as c. above)
* Navigate to the Intent Builder and select the domain of the newly added intent. You should see the new intent you just created. You may want to test some phrases by using the intent tester 
* Click on “Train” to begin training the intent model with the new intent.
* In the Versions tab, once training is complete, press “Activate” on the new version. Your model is now updated.

## Improve the false classifications for a specific intent
### This is useful if a specific intent is misclassifying messages via either false-negatives (not identifying a message’s intent when it should) or false-positives (identifying a message’s intent when it should not).

**a. Determine which intent(s) need improvement.**
There are 2 methods of approaching this:
1)  Hide unclassified messages by using the filter to exclude “unclassified” messages, or
2) Apply a filter for a specific intent, then analyze the various cluster and sub-cluster labels for suspicious patterns. For example, if a filter for the “cancel service” intent is applied, and there are cluster labels with the word “cancel order” in the chart, then there may be some misclassifications.

**b. Scan and reclassify the sub-clusters’ messages**
* Preview the messages by clicking on the sub-cluster, followed by the “Create/modify intents with this sub-cluster” button. In the Messages table, visually scan the Intents column for anomalies. If there are any, investigate if the message has been correctly identified.

**c. Train and deploy the new intent model** (same steps as c. above)
* Navigate to the Intent Builder and select the domain of the newly added intent. You should see the new intent you just created. You may want to test some phrases by using the intent tester 
* Click on “Train” to begin training the intent model with the new intent.
* In the Versions tab, once training is complete, press “Activate” on the new version. Your model is now updated.


Features in the Intent Manager that support Intent Discovery:

## Topic Clustering for Intent Discovery and Optimization 

Optimizing the coverage and quality of intents is a critical component of Intent Management. Intent Manager 2.0 introduces new language clustering visualizations that help brands discover new topics and trends in their conversational data. 

### What are clusters?
Clusters are groupings of messages that share similarities in language. Messages in each cluster share a noun (such as the word “order”), and each cluster contains sub-clusters that have noun-verb combinations such as “place order” or cancel order”. Both clusters and sub-clusters provide an intuitive way to identify common combinations of phrases that consumers are using to express their intent. When used in combination with various search and filter criteria, clusters can be used to identify opportunities to further develop your intent taxonomy and help define ways to optimize your intent model. 

![](img/IM2.0_1.png)

Brands can combine the power of clustering with Semantic Search and power filters to quickly build new, high-quality intents, which are based on a diverse set of training data that has been extracted from real customer conversations.

The new Intent Directory pop-over enables you to see all the intents and training phrases used in a single place. You can access it by clicking on the orange icon on the bottom right corner of the screen. The Intent Directory and improved integration with Intent Builder makes it easier than ever to correct misclassified messages and tune the overall recognition quality of their ML models without a dependency on specialized data scientists. 

![](img/IM2.0_2.png)

It is important to note that the Messages table view has moved to the Intent Discovery tab (from the Conversation Details tab). The Intent-detection coverage widget (classified vs unclassified message count). 

![](img/IM2.0_3.png)

{: .notice}
Please note this will be released in waves and will be enabled for your account shortly, by default. 
Please contact your account team if you would like access sooner. 

## A new Model Tester for Intent Builder
It’s important to train and test updated domain models before they are activated. Our new model tester enables brands to more easily see how model changes impact the quality of their intent recognition, as they work to optimize their taxonomy. Brands can use an intuitive interface to create a gold test of phrases, and then map them to their expected intents, just like how a quiz has an answer key. 

### It’s simple to use:
Create a test set by adding the sample phrases that you want to ensure that your model is properly detecting. 
Match the sample phrases to their intents. For example, the phrase  “I want to cancel my policy” should be mapped to the “cancel policy” intent.
Once all the phrases are added, click on “Run Test” to generate a score for the current intent model.

Whenever changes are made to the model, you can re-run the test set and review a quality report prior to activating the new model in production.

{: .notice}
This feature will be enabled by default.

![](img/IM2.0_4.png)
![](img/IM2.0_5.png)

## An Enhanced Intent Trends dashboard with new Customizable Metrics & KPIs

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

![](img/IM2.0_6.png)

### Settings page
![](img/IM2.0_7.png)

## Enhanced Conversation Details Panel for Improved Transcript Analysis
The ability to  analyze and explore conversations by intent is greatly improved in Intent Manager 2.0. Brands can use power filters to search for keywords and phrases in both the agent and consumer portions of the transcript. Brands can easily browse a list of conversations that match their filter criteria with associated metadata and KPIS. The transcript view now supports structured content inside a streamline UI.

### Before
![](img/IM2.0_8.png)

### After
![](img/IM2.0_9.png)

## Its easy to use:
Simply click on a conversation to populate the transcript view. 
Other updates include:
Agent name is now included in transcript (previously this was a timestamp, agent, and an icon) 
You can also see if it was a routing bot 
The intent is numbered in order and displayed within the consumer text bubble so when you have multiple intents triggered in a message you can see order of them easily

By conversations, you can see all the new metrics including turns in conversation, numbers of transfers, duration, first intents, etc. previously you could only see CSAT and MCS score. 

## The Ability to Create and Manage Rule-Based Power Filters
Building on existing advanced filter functionality brands can now save and manage complex filters that enable them to surface and track specific insights on exact topics. Brands can use regular expressions to instantly mine and query up to 13 months of conversation data that matches specific criteria. This functionality is complementary to ML powered Intents and allows brands to cover analysis use cases that don’t work within the Intent taxonomy.

![](img/IM2.0_10.png)

### How to add filters
* To add a filter, click on the Add Filter button on the top left corner. Choose a filter property from the drop down list and add constraints based on your needs. * To save a filter, Click on save
* Once you add and save a filter, you will be able to access previously saved filters and search for specific filters too.

### Filters and REGEX
An example use case for using a REGEX is if an airline wants to search each time a reservation number comes up. They can search in addition to intents if you want to find all messages.
For more information on REGEX, click [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/regexp-syntax.html)

## Added Coverage For Existing Starter Packs
Intent Manager 2.0 includes updates to three of core starter packs to improve coverage and accuracy. 
* The Telco starter pack now includes 21 intents with typical coverage of 45%
* The Airlines starter pack now includes 13 intents with typical coverage of 74%
* The Insurance starter pack now includes 12 intents with typical coverage of  78% 

If you want to create a new starter starter pack model - please contact your account team.
For more info on starter pack intents click [here.](https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-create-and-optimize-intents.html)

## Visual Overhaul and UX improvements
Intent Manager 2.0 has updated styles, a new menu structure and usability & accessibility improvements.


