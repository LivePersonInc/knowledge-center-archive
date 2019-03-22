---
pagename: Smart Capacity overview
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: A smart algorithm adjusts agent capacity based on availability, rather than
  conversation concurrency
level3: Smart Capacity
permalink: contact-center-management-messaging-operations-smart-capacity-smart-capacity-overview.html
isTutorial: true
date: 2019-01-17 11:53:17 +0000
isNew: false

---
## How messaging impacts a conversation's lifecycle

In the world of messaging, consumers are connected to a brand 24/7. They can pick up a conversation with an agent at any time and from any device, without ever being disconnected. Consequently, the frequency of messages sent by the consumer changes throughout the conversation life cycle. As time passes, the frequency or _intensity_ of the messages drops, meaning the chances of the consumer answering fall, and an agent needs less time to deal with them.

https://vimeo.com/312486745/acb54c76ca 

### Shifting the focus from concurrency to intensity

This behavior, unique to messaging, means that measuring agent capacity based on their concurrency doesn’t work for messaging in the way it does for chat.

A chat agent with a capacity of three conversations will handle and resolve each conversation before a new one is assigned to them. Chat conversations are active by nature, meaning the agent will chat continuously with the consumer until the issue has been resolved and they can close the chat. This means that chat agents are assigned a maximum concurrency reflecting the number of conversations they are able to handle at any one time.

If applied to a messaging conversation, the use of concurrency to determine the number of conversations assigned to an agent can lead to a substantial amount of idle time for the messaging agent. For example, an agent can be at maximum concurrency, with three conversations in progress, but be sitting idle because the agent is awaiting a consumer response in all of them.

![](/img/smart-capacity-overview-1b.png)

This can trigger several possible issues:

* **Underutilized agents** - with routing based on concurrency, the agents’ time is not being optimized.
* **Cut off conversations** - in order to free up their concurrency, agents may close conversations before an issue is fully resolved.
* **CSAT fal**l - if conversations are closed prematurely, consumers may provide a negative CSAT rating.
* **Long wait times** - during busy periods, a large number of agents at maximum concurrency can lead to longer queue times.

## How LivePerson's Smart Capacity works

LivePerson has address this concern and ensures agents are kept at maximum capacity whenever they are online and available. Smart Capacity uses an algorithm that identifies agent availability **not by the number of conversations they are handling, but rather by calculating the frequency rate of messages or ‘message intensity’ within each conversation.** It then assigns the conversation an appropriate slot weight to reflect it's new worth.

Conversations assigned to an agent can either be pending consumer or pending agent. If a conversation is pending an agent (since the last message was sent by the consumer) it will be considered fully active and will always take a full slot. If the conversation is pending the consumer (since the agent wrote the last message), the Smart Capacity solution will calculate how much of a slot the conversation will take up, as follows:

1. The Smart Capacity algorithm marks a conversation pending consumer as one that will take a full slot of the agent’s capacity or just part of it by looking at the intensity of the conversation, as indicated by the time the consumer’s last message was sent.
2. The algorithm knows that the longer the time since the consumer’s last message, the less chance of them responding. The conversation therefore takes up less of the agent’s capacity. Whereas when the conversation is still at a high intensity, with the consumer continuing to send messages, the conversation will take up a full slot.

{: .notice}
Setting a manual SLA for a conversation will not affect its intensity, and therefore will not affect how Smart Capacity treats it.

{:start="3"}

1. When Smart Capacity detects a conversation with a low intensity, it will assign it with a lower weight. This frees up the agent’s capacity, allowing new conversations to enter the agent’s queue.

{: .notice}
This method ensures that the agent’s capacity is adjusted based on their actual availability, rather than their concurrency.

For example, if an agent has three conversations open, but is only messaging actively in one of them, the algorithm will identify the low intensity of two of the conversations, assign them a low weight and direct additional conversations to that agent to maximize their productivity.

The agent’s load as calculated above is displayed in the Messaging Agents List.

![](/img/smart-capacity-overview-2b.png)

### An immediate and positive impact

Using smart capacity management, LivePerson will instantly increase the capacity of agents communicating with consumers via messaging. This will have a domino effect on other metrics, ensuring that queue size is kept down and consumer satisfaction is driven upwards.

Smart capacity results include:

* Agents are kept at maximum capacity, whenever they are online and available.
* Queue size is kept down.
* Consumer satisfaction is increased.

### **Extra capacity**

Smart Capacity keeps an extra 0.5 slot to enable the assignment of new conversations. This can cause agents to exceed their configured capacity by up to 0.5 slots.

For example:

* An agent has a configured capacity of 3 slots.
* He currently has 2 'active' conversations which consume a full slot each, and one 'inactive' conversation which consumes 0.1 of a slot. In total he has 2.1 "busy" slots.
* He will still be able to receive an additional incoming 'active' conversation due to the extra 0.5 slot.
* After accepting the incoming conversation his busy slots count will be 3.1 - exceeding the maximum configured number of slots.

## KPIs & measurements

The agent load, displayed in a column in the Messaging Agent List, is an indication of the agent’s capacity and helps agent managers to understand how the agent is managing their workload.

The load is calculated by dividing the total weight of the assigned conversations by the agent’s maximum number of messaging conversations (which can be configured on the user page). The weight of each conversation is determined using smart capacity.

### To configure agent maximum capacity:

1. On the **Users** list, click the user you would like to edit.
2. Under ‘Max. no. messaging conversations’, enter the maximum number of **active conversations** the agent can handle.

This means the maximum number of conversations with a high intensity of messages that the agent will be part of at any one time, and does not include conversations that are idle.

{:start="3"}

1. Click **Save**.

![](/img/smart-capacity-overview-3b.png)

{: .notice}
To maximize agent capacity and ensure conversation routing is as rapid and efficient as possible, ensure the **Automatic Chat/Conversation Distribution (ACD)** feature is enabled to auto-accept on your account.

![](/img/smart-capacity-overview-4.png)

**Auto-accept** means a new messaging conversation will open automatically, without the agent needing to accept it. Instead of lighting up the ‘waiting’ indicator at the bottom of the screen, the message will immediately appear as a new conversation in the agent workspace. Auto-accept does not disrupt the agent’s current conversation; new messages will wait in the conversation bar until the agent clicks on them.

![](/img/smart-capacity-overview-5b.png)

## Smart Capacity per skill

The Smart Capacity feature enables brands to better manage its messaging operation by controlling the weight an active and inactive conversation takes up in the overall agent capacity. With Smart Capacity Per Skill, brands can now customize the smart capacity settings per skill and thereby achieve a higher level of control on the time it takes a conversation to become inactive. Brands can now also define the weight that an inactive conversation would take up in the agent capacity once conversation becomes inactive. For more information see [Smart Capacity per skill](contact-center-management-messaging-operations-smart-capacity-per-skill.html).