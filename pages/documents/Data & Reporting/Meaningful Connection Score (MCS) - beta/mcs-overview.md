---
pagename: Meaningful Connection Score (MCS) overview
categoryName: Data & reporting
subCategoryName: Web messaging
indicator: both
subtitle: Measure the quality of your brand’s connection with every consumer over
  time
level3: ''
permalink: data-reporting-meaningful-connection-score-(MCS)-meaningful-connection-score-(MCS)-overview.html
isTutorial: false
date: 2019-01-22 09:35:20 +0000
isNew: false

---
**(BETA)**

Our mission at LivePerson is to help our clients create meaningful connections. We set out to find a reliable way to accurately and automatically measure the quality of the connection between brands and the entire consumer audience.

The result is the development of the **Meaningful Connection Score (MCS)** - an automatic, unbiased method to measure the relationship between consumers and brands. The MCS evaluates and measures the overall customer relationship, solving a major issue inherent in other customer satisfaction measurements.

![](/img/MSC1.png)  
**The problem with traditional customer satisfaction metrics**

While commonly used customer satisfaction measurements, such as customer surveys, provide valuable insights into the views of responders, they fall short in offering a complete view of how consumers really feel about a brand.

* Only a small proportion of consumers submit surveys. They generally have a very **low response rate**
* The customers most likely to respond to surveys are usually the happiest, meaning the responses are **biased** and can be misleading
* Actions as a result of survey feedback are taken only retrospectively, **missing real time feedback**
* Messaging is an **ongoing relationship**; measuring sentiment at the end of a session doesn’t accurately reflect the nature of the messaging connection

### **Why MCS?**

MCS does not rely on customers answering surveys, but rather on a deep analysis of the tone, content, and sentiment of consumer’s actual conversations with the brand in real time.

At the the heart of the solution, validated in collaboration with leading universities, lies specialized NLP machine learning-based technology that is able to adjust its algorithm to fit each brand and/or industry.

MCS is a score that is calculated dynamically in multiple dimensions, using a bottom up, modular approach. This property enables the MCS to measure several aspects of the interaction:

* **Message score**: The MCS process starts at the message level, attributing a score, in real time, to every consumer message that enters the system.
* **Conversation MCS**: The combination of all the message scores added together, this score updates continuously throughout the conversation.
* **Brand MCS**: The combination of all conversation MCSs.

MCS can also be applied to **skill**, **agent**, **agent group** and **brand** . In this way, brands can get a full picture of any aspect of their operational performance.  
{: .notice)  
The MCS is calculated in realtime. As a result, it is not guaranteed that MCS will be calculated for every conversation.

### **Calculating MCS**

The following example shows how MCS is calculated over the course of a messaging conversation. MCS is based on a detected sentiment and is calculated using a specific formula - further explanation of this can be found below. The **MCS range** is between -100 to 100.

### How it works

Each message in a conversation is given a score dependent on the sentiment expressed in the message: positive, neutral or negative. The more positive the message, the higher the score; the more negative, the lower the score.

The MCS aggregates the sentiment scores up to each point in the conversation, taking into account the emotional consumer context for each message. Within the aggregation, positive messages are weighted less than negative messages, at a ratio of 1:2 between positive and negative. This is indicated in the formula below by the ⅓ for positive messages and the ⅔ for negative messages.

The more recent the message, the greater the effect it will have on the total score.

Some negative impact of a score remains regardless of the time that has passed, i.e. if negative emotion has been detected, it will linger through the entire conversation to some extent.

The dynamic changes to the MCS can be tracked in the web messaging API.

### MCS applications

**1. Real time alerts**

Real-time alerts on live engagements, displayed on the All Connections list and Web Visitors list, allow difficult interactions to be identified as they happen, enabling timely intervention to rectify the situation. Agents exposed to their ongoing MCS in real time can adjust their current conversations in order to increase their scores.

For messaging conversations, the MCS score and alerts (smileys) are displayed in a dedicated column on the All Connections page. The MCS alerts are indicated with a frown like face for scores < -33 and a smiley face for scores > 33.

For chat conversations, the MCS score and smileys are displayed in dedicated columns on the Web History and Web Visitors list, and on the Agent Workspace.

![](/img/MCS2.png)

_Chat web history_

![](/img/MCS3.png)

_Chat agent workspace_

**2. Training opportunities**

[MCS Toolkit]() allows brands to identify training opportunities for agents and agent groups, meaning agent performance can be benchmarked and best practices standardized across the account. Conversation MCS offers brands the ability to deep dive into the evolution of consumer sentiment throughout the lifetime of a conversation. This allows agent managers to identify weak points in service, recognize trends and pinpoint areas that require improvement.

![](/img/MCS4.png)

MCS can be viewed in the All Connections list and Web History, as well as being exported so that brands can later integrate and further analyze the data using third-party tools .

All MCS data is available via the [Engagement History API](https://developers.liveperson.com/data-engagement-history-overview.html) for chat and the [Messaging Interactions API](https://developers.liveperson.com/data-messaging-interactions-overview.html) for messaging.

**3. Tracking broader brand performance**

Brands can gain an even deeper understanding of consumer sentiment by looking at MCS for different variables, such as:

* Brand MCS
* Agent
* Agent group
* Skill

For these variables, the MCS is calculated using the following method:

When aggregating MCS to entities like agent, skill and brand the conversations are split into 3 groups: positives, neutrals, and negatives.

* Positives: Conversation MCS of more than 0
* Neutrals: Conversation MCS of 0
* Negatives: Conversation MCS of less than 0

The aggregated MCS is calculated by: %Positives - %Negatives.

For example, a brand wants to evaluate an agent’s MCS from five conversations they have handled. The MCSs were: -60, -20, -5, 0 and 50. There are three negative conversations, comprising 60% of the conversations, one neutral which is 20% and one positive which is 20%. Hence this agent’s MCS is -40 (20%-60%).

All of these entities can be tracked through Report Builder, where brands can analyze MCS by agent group, skill, line of business or other variables.

**MCS in Report Builder**

The Report Builder allows brands to build their own reports based on account data available in LiveEngage. The tool gives brands the ability to understand and analyze the performance of a campaign, as well as measuring the performance of their contact center operations and drilling down into detailed operational metrics.

MCSs for messaging conversations are available in Report Builder for brands to further track and analyze data around consumer sentiment.

### ![](/img/MSC5.png)More about MCS

* The MCS is available in both the **English and French languages** and **German** to be launched soon.
* The MCS model can be **customized per account**, ensuring that the score takes into consideration tone, content and other variables specific to each brand, that could impact the calculation of the score. For example, _smell_ might be flagged as negative content for many brands, but for a perfume retailer it should be treated as neutral. For information on configuring MCS specifically for your account, contact your LivePerson account team.

In short, MCS can be:

* Applied to 100% of all digitally-connected consumers - **no survey bias**
* Calculated seamlessly in the background - **does not disturb consumers**
* Utilized for real-time tracking on live conversations - **triggers immediate action**
* Measured on different levels and perspectives - **benchmarking & trends**
* Reflective of the continuous nature of messaging - **accurate and constant analysis**