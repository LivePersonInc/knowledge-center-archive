---
pagename: Queue prioritization overview
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: 'Learn how LivePerson has developed queue prioritization specifically for
  brands using messaging '
level3: Getting started
permalink: contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html
isTutorial: true
date: 2019-01-16 08:25:55 +0000
isNew: false

---
<iframe src="https://player.vimeo.com/video/312481307" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Queue prioritization focuses agent resources on the conversations that matter most. It allows brands to efficiently allocate staffing resources and better handle incoming messages by prioritizing conversations in the queue based on importance. Benefits include:

* Handling more conversations - By prioritizing interactive conversations first you can drive more conversations towards a resolution.
* Allocate staff efficiently - better use agent’s time by prioritizing incoming conversations  based on importance.
* Align business strategy and reflect on which consumers you answer first - Use business rules to select the most suitable prioritization
* Increasing the customer satisfaction for the VIP consumers - lower wait times on high priority skills.

Proper queue prioritization holds special weight in the world of contact centers since it sets the foundation for good customer service, agent efficiency and the ability to scale contact center’s operations. Learn how LivePerson has developed queue prioritization specifically for messaging to help brands overcome challenges and effectively manage one of the most central operations in a contact centers.

## Why queue prioritization is more important than ever

With messaging, contact centers quickly reap the benefits of becoming instantly and easily accessible, as well as face the challenges born from that instant connectivity. Contact centers need to manage, scale to and prioritize the influx of new messages coming in. The biggest challenge being: **How to focus agent resources on the conversations that need it the most.**

Moving conversations from voice and chat to messaging, where customers are always connected, contact centers are released from the outdated ‘first come, first serve’ approach. Brands need to quickly align processes, systems and digital journeys to fully capitalize on messaging and to be prepared to manage messaging operations at scale. When messages may not have a clear end, agent managers need to define new best practices and KPIs that cover everything from agent response time to time to close conversations.

## Changes in agent and consumer behavior

LivePerson analyzed more than 50 million conversations to get a clear understanding of how consumers and agents behave differently than they do with chat. We found, among other things, consumers would rather gain the flexibility of messaging than be forced to be on the phone or sit in front of a computer, even if the agent response may not be immediate. This leaves room for agents to work based on a customized set of prioritized conversations rather than answer on a parameter of ‘first come, first serve’.

Yet, data also reveals that the sooner messages are answered by an agent, the more likely the consumer will respond. Meaning, **the ideal queue should combine both importance of conversation with likelihood for interaction - the chance a consumer will respond**.

## Queue prioritization with LivePerson

With Liveperson, brands have ability to define business rules as well as giving higher weightings to conversations that meet certain criteria. If a conversation was transferred more than X times, for example, this conversation can advance faster in the queue leading to higher customer satisfaction.

The goal of this feature is to improve the agent efficiency and consumer satisfaction KPI’s by driving more conversations towards a resolution.

### Which conversations should be at the top of the queue?

**Handle actionable conversations first.**

* Actionable conversations are those conversations that require immediate agent activity.
* Non-actionable conversations are conversations awaiting a customer response, rendering them non-actionable from the brands perspective.

**What makes a conversation actionable:**

* The last message was sent by the customer
* The agent set a manual SLA on the conversation
* The conversation was returned to the queue after transfer.

**Customizing additional priorities:**

Making a decision to work on those actionable conversations first makes sense, now the question remains: Out of a brand’s actionable conversations, which should be handled first?

Priority is given to actionable conversations based on the time in which they entered the queue and their SLA. For example, a conversation that entered the queue earlier and has lower SLA will get served first.

The queue prioritization algorithm allows brands to choose a custom blend of prioritization approaches for driving more actionable conversations towards a resolution. The approaches are:

* **Queue entrance time** - Give priority to conversations according to their entrance time into the queue.
* **Interactiveness** - Give priority to conversations where the consumer has just written a message and therefore is considered more interactive.
* **Customized prioritization rules** - Gain control of the prioritization and define parameters that affect how the conversation advances in the queue. Rules include:  
  Assign a conversation with higher velocity according to the number of transfers it already went through, or, assign a conversation with higher velocity if it was transferred from or to a specific skill.

Brands can also define their own business rules that dictate which conversations to prioritize based on the number of transfers the conversation has been through or by assigning a higher priority to conversations that are being transferred to or from a specific skill.

{: .important}  
The SLAs defined per skill are taken into consideration when prioritizing conversations.

Queue prioritization works in prioritization cycles that run every 2 seconds. In each cycle the conversations priority is set based on a formula that takes in two main parameters:

* The score calculated based on the prioritization approach that was drawn for the cycle.
* The conversation velocity which is derived from the configured business rules and serves as a multiplier for the conversation rate of advancement in the queue.

![](/img/queue-prior-overview.png)

Once the conversations are scored, the top scoring conversations receive an agent assignment and are then pushed to agents for handling.

### How does it work?

LivePerson takes a data-based approach to queue prioritization by providing a conversational platform that uses AI to queue consumers based on attributes such as **lifetime value, churn risk**, and more. LivePerson also has a parameter of “freshness” so brands can prioritize based on the time from last consumer interaction and likeliness of response in addition to other parameters

There are instances where consumers have an urgent, time-sensitive issue that needs to be handled right away, such as a lost credit card. To prioritize this conversation, brands would need set queue parameters by intent. Another exception is prioritized by consumer attribute -- when certain consumers, no matter the issue, need to be addressed right away, such as VIP customers. Other ways brands may want to prioritize a queue would be by:  use case (sales or care), first message from a consumer, returning customers in the past several days, and more.

| Conversation | Liveperson Solution |
| --- | --- |
| Importance | Prioritize based on consumer attributes including:,lifetime value, churn risk, |
| Likeliness of response | Prioritize based on parameter of freshness - time from last consumer interaction |

Queues in consists of brand new conversations, as well as those that have been transferred or returned to the queue by an agent. Before routing the messages to individual agents, the system first understands which of them require immediate agent attention by dividing the conversations into ‘actionable’ and ‘non-actionable’.

![](/img/queue-prior-overview-2.png)

Out of the conversations considered actionable, and an additional mechanism filters by urgency and importance, based on settings predetermined by the brand and calculated as:

### **Time multiplied by variables** 

#### **(the attributes discussed above)**

| Time | time when the conversation became actionable |
| --- | --- |
| Data-driven variables | freshness, interactive |
| Business use case variable | transfer, intent (urgent issue), consumer attributes (VIP), skill and channel |

## How queue prioritization impacts your KPIs

The unique nature of messaging means that companies need to adjust their KPIs accordingly. Brands must measure to ensure certain KPIs are improving, but also anticipate less important KPIs may be impacted negatively.  Here are some examples:

| KPI | Value | Impact | Why? |
| --- | --- | --- | --- |
| Avg. time to resolve important conversations | Decrease | Positive | Resolution of important conversations will decrease because they will advance in the queue and the average time to resolve will shorten. |
| Number of handled conversations | Increase | Positive | If you prioritize, for example, by likeilhood of interactions, you will catch engaged consumers and be able to handle and close more conversations. |
| Wait time for high priority skills | Decrease | Positive | With a clear way to focus agents on high priority consumers - defined by attributes - high priority consumers will be answered first. |
| Wait time for low priority skills | Increase | Negative | By focusing on higher priority consumers, lower priority ones may wait longer. |
| CSAT/ MCS of prioritized customers | Increase | Positive | They will handled faster than before |
| CSAT/ MCS of other customers | Decrease | Negative | They may be handled slower than before |
| Number of conversations assigned to an agent with no customer response | Decrease | Positive | By prioritizing by likelihood of interaction, you will be able to reach and focus more engaged consumers faster. |

**Use cases of queue prioritization**

| Use case | Goal | KPI |
| --- | --- | --- |
| Prioritize VIP customers | Better service for VIP customers | CSAT of VIP increases; CSAT of non-VIP decreases; Avg. time to resolve  VIP increases |
| Prioritize fresh customers- likiehood for interaction | Increase interactivity | CSAT (of fresh customers) increases Interactive rate increases |
| Sales - Intent to purchase | Increase conversions | Total conversation increases |

As more brands struggle to to handle the influx of digital consumer conversations, queue prioritization needs to help brands determine how to allocate resources when everything is ‘priority’. LivePerson solves queue prioritization in messaging by working with data driven parameters, automation, and open to the human touch - allowing brands to customize the queue variable to their specific needs.