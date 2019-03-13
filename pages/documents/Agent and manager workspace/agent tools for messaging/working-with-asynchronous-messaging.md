---
pagename: Working with asynchronous messaging
categoryName: Agent & manager workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: Agents using messaging to make sales or provide service have the full suite
  of LivePerson tools at your disposal to be successful
level3: ''
permalink: agent-manager-workspace-agent-tools-for-messaging-working-with-asynchronous-messaging.html
isTutorial: false
date: 2019-01-21 09:13:27 +0000

---
It’s important to understand how messaging is different from live chat. With messaging, interactions with visitors can be ongoing, and visitors have the freedom to respond on their own time. This means that the interaction can last a full shift or a few days, allowing agents to pick up pending conversations any time of the day. Another benefit of messaging is that consumers can return to the same agent and seamlessly continue their journey, creating a better, more continuous user experience.

Yet, for contact centers, these characteristics present the following questions:

* For long term conversations, how do we define an active or open conversation as opposed to a resolved conversation?
* If a consumer takes hours or days to reply, what should be done with that pending and open conversation?
* What about conversations that are left unresolved? Should they remain open?
* How many concurrent messages can an agent handle?

## How LivePerson helps agents manage asynchronous conversations

To help answer the questions and differences raised by asynchronous messaging, LivePerson has various ‘behind the scenes’ tools and capabilities that help agents manage their messaging conversations effectively.

### Smart Capacity: the dynamic concurrency method

Agents who have worked on live chat are accustomed to having a set number of conversations they can handle concurrently. This is straightforward for chat conversations, as they have a distinct end time. However, since messaging conversations can span over a longer period and the end time is not always predictable, the old set concurrency model no longer applies.

[Smart Capacity](contact-center-management-messaging-operations-smart-capacity-overview.html) takes into account which conversations are active or inactive. For example, if a consumer has not answered your message for 10 minutes, they are likely to answer at a later time, so the conversation is marked ‘inactive’ in the meantime. Smart Capacity knows to automatically mark conversations as inactive and manage your workload dynamically.

To learn more about smart capacity, watch this video:

<iframe src="https://player.vimeo.com/video/241513074" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Queue Prioritization: manage the order in which agents receive conversations

Queues of incoming messages for asynchronous messaging conversations can be long due to the fact that messaging is available to your customers 24/7.

In order to ensure that the most relevant conversations reach agents, automation and analysis is first done on the queue using our [queue prioritization](contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html). By the time that agents receive a conversation, it would have gone through analysis to determine the following:

* **Level of freshness:** For conversations that came in overnight, or several hours ago, the consumer is less likely to be connected for immediate reply. On the other hand, recent conversations are more likely to be active. Our advanced algorithm analyzes the probability for consumer availability and sends you the freshest conversations.
* **Actionable vs. not-actionable:** LivePerson scans conversations to understand which ones are actionable, meaning pending an action on behalf of agents, versus not actionable, or awaiting a consumer reply. Agents will only receive the actionable conversations.
* **Business priority:** Each brand can utilize various parameters to determine which conversations should jump ahead in the queue. For example, retention questions may be more time sensitive or pressing and therefore should be handled first.

To learn more about queue prioritization, watch this 2 min video:

<iframe src="https://player.vimeo.com/video/241513020" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### SLAs: guidelines for response time management

A Service Level Agreement, or ‘SLA’ is a time commitment for when a brand will respond to incoming conversations. This is determined by the account manager. For example, an SLA of 2 minutes means that incoming conversations should be answered no longer than 2 minutes after they are received. The SLA is assigned to incoming conversations and resets after each consumer reply.

Agents will have clear view of conversation SLAs for all conversations in their workspace. In addition, agents can manually adjust the SLA for individual conversations. For example, if you’ve let a customer know you’ll get back to them in 2 hours, you can mark this deadline manually and the conversation will appear in your workspace in 2 hour’s time. Learn more about shift management in out [shift scheduler guide](contact-center-management-messaging-operations-shift-scheduler-configuration-guide.html).