---
pagename: Marketplace reporting
categoryName: Marketplace solutions
subCategoryName: Conversational Marketplace
indicator: both
subtitle: Out-of-the-box reporting dashboards for your Marketplace
level3: ''
permalink: marketplace-solutions-conversational-marketplace-marketplace-reporting.html
isTutorial: false
date: 2021-08-08 

---
Conversational Marketplaces enables consumers to message with all of the businesses that are part of your brand’s digital marketplace.  That means, there is a lot of conversational data available to your marketplace and network of businesses.  LivePerson has created out-of-the-box reporting dashboards for your Marketplace to view all of this rich data.  We also offer an API that provides all of this data and enables you to provide this same data directly to your customers through your normal reporting capabilities. 

## Analytics Builder — Marketplace Network Dashboard

### Goals
The Marketplace Network Dashboard has been introduced to Analytics Builder as a home base report for any Marketplace Provider who wants to get a better understanding of their network. The report aggregates the performance across all of the subscriber networks and breaks down the performance by subscriber. The dashboard can be used by the client or internal account representatives who need to see the Marketplace performance in a single dashboard. 

Commonly, a Marketplace will be powered by automation to first handle incoming conversations. The Marketplace Network Dashboard has integrated automation metrics that can help the Marketplace Provider understand the success of their automation strategy. 

### Configuration
The Marketplace Network Dashboard will need to be added to the Marketplace’s designated Provider account and will then be part of the Predefined Dashboards. 

![](/img/marketplace-reporting-1.png)

{: .notice}
**Note**: Please reach out to your CSM for enablement.

### Provider Summary Section

The first section provides an aggregate view of the Marketplace as a whole and visualizes the performance based on the selected date filter. Some key metrics called out within the Provider Summary section of the report:

* **Active Subscribers** — The number of Network Manager subscribers who have sent at least one message to a consumer. 

* **Number of Opened Conversations** — The number of opened conversations by agents and/or consumers - broken down by day to see the daily metrics and trends. 

* **Containment** - Number of Conversations Handled by Bot — Total number of conversations handled by the bot only. Closed Conversations answered by the bot and not escalated to a human. 

* **‘Tango’: Number of Conversations with Human Response** — The number of conversations transferred to human agents with at least one response from a human to a consumer. 

* **Closed Conversations by Conversation Type** — Number of conversations closed by agent, consumer, or the system. This is broken out by day to see the daily metrics and trends and a charted visualization. 

![](/img/marketplace-reporting-2.png)

### Subscriber Performance Section

The second section of the Marketplace Network Dashboard breaks down the data by subscriber, gives more insight into which subscriber the conversations are targeting, and the volume of those conversations. 

* **Closed Conversations by Subscriber** — Closed conversations are broken out by the subscriber Account ID. 

* **Average Wait Time for First Human Response** — Given the bot automation could not handle the consumer conversation, the conversation can be escalated to a human. This metric shows the response rate of that human from the bot escalation.

### Messaging Interactions API for Providers

The Messaging Interactions API has been enhanced to enable the aggregation of a Marketplace data across all of its subscribers. The API will be a key piece to the Marketplace product offering, as this will be used to provide detailed reporting (including transcripts) to the Marketplace provider, which they can then provide to their subscribed network.

The Conversational Cloud [Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-overview.html) retrieves the most up-to-date information available about contact center messaging interactions. This API makes it possible to search, filter, and analyze data and transcripts of open and closed conversations. The API returns the conversation’s transcripts and all of its related metadata; such as: start time, end time, Meaningful Conversation Score (MCS), CSAT, summary, participating agents, the reason the conversation was closed, and more. This API supports the HTTP POST functionality (data retrieval), and all data is returned in JSON format.

{: .notice}
**Note**: For enablement and access to API please reach out to account manager.


## Configuration
Please reach out to your LivePerson account representative for API integration.

{: .notice}
**Note**: Aggregation and visibility to subscriber data for a Marketplace is a legal consumption. There should be a contractual agreement between the Marketplace and its subscriber network to ensure that the subscribers are OK with the Provider having access to conversational data and transcripts from the Marketplace. 
