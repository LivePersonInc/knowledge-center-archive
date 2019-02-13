---
pagename: Preparing agents to start a shift
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: 'Assign messaging conversations gradually using an agent warmup at the start
  of an agent’s shift '
level3: ''
permalink: contact-center-management-messaging-operations-preparing-agents-to-start-a-shift.html
isTutorial: false
date: 2019-01-17 13:01:22 +0000
isNew: false

---
## Overview: the agent warmup

In order for agents to start their shifts smoothly and be able to ‘warm up’ to the flow of conversations, brands can configure LivePerson to assign conversations to the agents gradually.

![](/img/agent-warmup-1.png)

When an agent first signs in they will receive one conversation. After a pre-configured time interval a second conversation will be assigned, and so on, until the agent reaches their maximum number of messaging conversations.

## How it works

The warm up algorithm incrementally assigns the conversations to the agent in the following way:

1. Once an agent logs in, the first conversation will be assigned to them immediately.
2. After a predefined time interval the agent will receive the next conversation (regardless of whether they accepted the previous one or not). The predefined time interval can be configured by the brand, with a default value of 90 seconds.
3. The warm up process continues, with conversations being assigned to the agent at the same predefined time intervals, until the number of assigned conversations reaches the agent’s **max # of messaging conversations.** The conversations are assigned regardless of the conversation’s weight, i.e., whether they are active or inactive).
4. Additional conversations will be assigned based on available capacity, according to the smart capacity calculation. For further information on how smart capacity is calculated, refer to the [Smart Capacity documentation.](contact-center-management-messaging-operations-smart-capacity-overview.html)

{: .notice}
Messaging warm up applies from the moment an agent logs in. It is also applied if at least one hour has passed since they last received a conversation from the queue. For example, an agent logs in at 8:45 AM, receives a new incoming conversation at 9:00 AM and then logs out. The maximum warm up period is set by default to 20 minutes.

### Examples

* If the agent logs in again at 9:55 AM (55 minutes after last receiving a conversation), warm up does not apply.
* If the agent logs in again at 10:05 AM (65 minutes after last receiving a conversation), warm up is applied.

To enable messaging warm up on your account, contact your LivePerson account team.