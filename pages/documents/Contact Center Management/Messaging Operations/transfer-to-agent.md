---
pagename: Transfer to agent
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: ''
level3: ''
permalink: contact-center-management-messaging-operations-transfer-to-agent.html
isTutorial: false
isNew: false
date: '2019-03-26T14:17:05.000+00:00'

---
## Introduction

The transfer to agent capability enables agents, agent managers and bots to transfer a messaging conversation to a specific agent, chosen by the transferring agent. Brands will be able to configure the skills, states, and overall behavior of the transferred conversation.

Once the conversation is transferred, it will reach the queue and will advance according to the queue policy defined for the account. It will ring for the destination agent or be auto accepted, according to the brand’s Automatic Conversation Distribution (ACD) configuration. This will only occur when the agent is online and has free capacity to accept the conversation.

Brands will also be able to set the fallback time after which the conversation will be re-routed to any available agent assigned to the destination to which the conversation was transferred. In addition, adopting the queue prioritization feature will enable brands to impact the velocity by which transfer-to-agent conversations advance in the queue.

## Permissions

The capability to transfer a conversation to a specific agent is permission-based. Only users with appropriate permissions will be able to perform the operation.

The destination agent’s state at the time of transfer (online, back soon, away or offline) is an important parameter to consider when determining whether to transfer the conversation. While some asynchronous flows require “transfer at any state,” for other use cases this should be prevented.

In order to support maximal flexibility, three new permissions have been added to both the agent and agent manager profiles, allowing brands to configure permissions for this feature based on the destination agent’s status:

| Permission | Agent role default | Manager role default |
| --- | --- | --- |
| Transfer messaging conversations to a specific agent in ‘online’ or ‘back soon’ state | on | on |
| Transfer messaging conversations to a specific agent in ‘away’ state | off | on |
| Transfer messaging conversations to a specific agent in ‘offline’ state | off | off |

Each user should have at least one of the above permissions in order to be able to utilize this feature.

When transferring a conversation to a specific agent, only agents in a state for which the transferring agent has permissions will show up. For example, if the transferring agent has only the “online” or “back soon” states configured, away or offline agents will not appear in the list.

![](/img/transfer-to-agent-1.png)

![](/img/transfer-to-agent-2.png)

## Transferring agent experience

Agents with appropriate permissions to transfer to a specific agent (at least one of the 3 mentioned above) will be exposed to a new “Agent” tab when choosing the “Transfer conversation” option in the conversation menu.

Once they click on the tab, a list of optional destination agents will be shown. Transferring agents will be able to use a dynamic search for the agent name.

![](/img/transfer-to-agent-3.png)

![](/img/transfer-to-agent-4.png)

## Destination agents list

Only agents in states for which the transferring agent has permissions will appear in the destination agents list.

In addition, the list will only contain agents who are assigned to skills that the current skill of the conversation is set to transfer to, according to the following existing setting:

![](/img/transfer-to-agent-5.png)

| Transfer to skills setting | Agents appearing in the destination agents list |
| --- | --- |
| The skill cannot transfer to any other skills | The list will present only agents which are assigned to the current skill of the conversation. |
| The skill can transfer to all skills | The list will present all agents, including agents without skills assigned to them |
| The skill can transfer only to specific skills | The list will present agents who are assigned to the current skill of the conversation or to the specific set skills |

The destination agents list for the offline state will include any offline agent who has had at least one messaging conversation in the past three weeks.

## Changing the conversation skill

The destination agent may not necessarily be assigned to the current skill of the conversation before it is transferred.

In order to make sure agents handle conversations associated only with skills they are assigned to and within the right context (like SLA, auto messages, predefined content, custom widgets and so on) the transferring agent will have to choose the new skill of the conversation as well.

These limitations and conditions apply:

* If the destination agent is assigned to only one skill, the skill selection list will not be displayed, i.e., the conversation will be transferred to that skill.
* If the destination agent has no skills assigned to them, the skill selection list will not be displayed and the conversation skill will be changed to “N\\A.”
* If the destination agent is assigned to multiple skills:
  * If the agent is assigned to the current skill of the conversation - it will be the one selected by default and shown at the top of the list. However, transferring agents will still be able to choose a different skill if needed.
  * If the agent is not assigned to the current skill of the conversation - the list will be sorted in alphabetical order and the first item in the list will be selected by default.

Once selecting a destination agent, a list of optional skills will be presented:

![](/img/transfer-to-agent-6.png)

## Queue behavior

To fully understand the context, it is highly recommended to review the following document: [Queue Prioritization overview](https://knowledge.liveperson.com/contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html)

Once the conversation had been transferred to the destination agent and skill, it will reach the brand’s general queue. The conversation will advance in the queue according to the queue policy defined on the account. By default, this conversation will be handled by the queue like any other conversation, with no weighting or preference given to it.

The conversation will ring at the destination agent or will be auto accepted (according to the account ACD configuration) only when they are online and have free capacity. If not, the conversation will wait in the queue for the destination agent to be online and to have free capacity.

### Queue prioritization

Brands have the capability to configure their queue so that transfer-to-agent conversations will be given a higher score and will advance in the queue faster than other conversations. In order to achieve this, brands must adopt the queue prioritization feature.

This will give brands the capability to set a new business rule, which will assign extra velocity to conversations transferred to a specific agent. These conversations will be scored higher and will advance in the queue faster. The setting will be available on both the account and skill level.

{: .notice}
**Note**: If the account has not adopted the queue prioritization feature, transfer-to-agent conversions will advance in the queue like any other conversation.

To configure this feature please contact your LivePerson representative.

## Fallback to skill

Brands will be able to define how long conversations will wait for the destination agent to accept them (whether manually accepting them or by auto accept) before the conversation will be routed to any other available agent on the destination skill. The wait time is measured from the moment of transfer and limited to a maximum of 21 days. This setting will be available on the account and skill level.

### Account level configuration

The default setting will be set to **two hours.** The configuration is set for **both** auto-accept mode or advanced mode.

![](/img/transfer-to-agent-7.png)

### Skill level configuration

![](/img/transfer-to-agent-10.png)

## Destination agent experience

Conversations transferred directly to an agent will appear as any other conversation assigned to the agent.

The only way the target agent will know the conversation has been sent directly to them is by concluding it from reading the transcript (since it will include the transferring agent’s conversation).

## Viewing transferred conversations in the All connections and Open connections tabs

Conversations which are transferred to a specific agent will reach the queue as normal. Hence, they will appear in the “All connections” and “Open connections” tabs in the “in queue” state. However, while agent name is “N/A” for regular in-queue conversations, for transfer-to-agent conversations, the agent name column will be populated with the destination agent name. The box containing the agent name in this case will be dashed to differentiate it from regular conversations. The Agent Group column will be populated with “N/A.”

When the agent accepts the conversation, the conversation will appear as any other assigned conversation. If the agent did not accept the conversation and timeout was reached, the conversation will appear as any other conversation in-queue.

![](/img/transfer-to-agent-11.png)

## Response time (SLA)

In case the skill has been changed, the response time will be reset and then counting will resume according to the destination skill response time setting.

In case the skill has not been changed:

* If the consumer was the last to message, the response time countdown will keep running.
* If the agent was the last to message, response time is irrelevant, hence will be empty.

## Auto Messages

Brands will be able to configure the message sent to consumers once they were transferred to a specific agent. A new auto message will be added with the following default text:

“You are being transferred to another agent.”

No dynamic texts are currently available when transfer to agent was used.

{: .notice}
**Note**: the auto message triggered by a transfer to agent operation will not include the “Response time” parameter (since the agent time to respond might be different than the SLA setting for the skill). However, the response time exposed in LiveEngage to agents will be based on the skill Time To Response (TTR).

![](/img/transfer-to-agent-12.png)

![](/img/transfer-to-agent-13.png)

## **Reporting**

In order to analyze “transfer-to-agent” operation, you may refer to the Report Builder.

On “Messaging Advanced Dashboard”> “Agent Messaging Activity” dataset the following metrics are available for use:

* **“AGENT TO AGENT TRANSFER”** - counts the total number of transfers to specific agent. The metric is attributed to the transferring agent and the skill from which the transfer was initiated.
* **“TOTAL NO.OF TRANSFERS”** - this metric will now include the transfer-to-agent population as well.

## Implementing transfer to agent bot logic (using APIs)

In some business flows, brands would like to have the ability to transfer a conversation to a specific agent using their own bot logic. For example, returning a new conversation to the pervious agent who handled the consumer. In order to achieve this, brands can use the following APIs, available on our Developers Community:

**Transfer to agent API call:**

[Changes in updateConversationField](https://github.com/LivePersonInc/node-agent-sdk#example-transfer-conversation-to-a-new-agent)

[Subscribing to AgentExConversationChangeNotification with Transfer to agent](https://github.com/LivePersonInc/node-agent-sdk/blob/master/README.md#subscribing-to-change-notifications-with-transfer-to-agent)

**Messaging Interactions API:**

* Please note two new values have been added to the ‘reason’ key of the transfers array.
* In addition, once a conversation has been transferred to a specific agent, the destination agent will appear in the agentParticipants array under a new permission type: “SUGGESTED_ASSIGNED_AGENT”.

[https://developers.liveperson.com/messaging-interactions-api-methods-conversations.html](https://developers.liveperson.com/messaging-interactions-api-methods-conversations.html "https://developers.liveperson.com/messaging-interactions-api-methods-conversations.html")

**Return to the same agent sample app:**

[Return to the same agent - sample app](https://developers.liveperson.com/messaging-agent-sdk-examples.html#return-to-same-agent-bot-example)

### Configuration steps summary

1. To enable “Transfer to agent” capability on your LiveEngage account, please contact your LivePerson account team.
2. Define the maximal wait time for agent to accept as described in the [Fallback to skill ](contact-center-management-messaging-operations-transfer-to-agent.html#fallback-to-skill)section.
3. Define who can perform the transfer-to-agent operation as described in the [Permissions](contact-center-management-messaging-operations-transfer-to-agent.html#permissions) section.
4. Define consumer experience as described in the [Auto Messages](contact-center-management-messaging-operations-transfer-to-agent.html#auto-messages) section.
5. Consider - Assigning a priority for transfer-to-agent conversations as described in the [Queue prioritization](contact-center-management-messaging-operations-transfer-to-agent.html#queue-prioritization) section.To configure this please contact your LivePerson representative.
6. To use the transfer-to-agent API, upgrade to UMS connection version 2.1. Details described in the [Transfer to agent API](contact-center-management-messaging-operations-transfer-to-agent.html#implementing-transfer-to-agent-bot-logic-using-apis) section.

### Limitations:

* The destination agent list refresh time will be up to 40 seconds at most. During this time changes in agent status or skill will not be reflected.
* Destination agents list size limitation in LiveEngage will show up to 5000 agents.
* Offline agents (logged out) are agents who were connected at least once in the past 3 weeks.
* Agent will not be able to transfer to another agent or manager that is currently participating in the conversation. For example agent cannot transfer the conversation to his manager if she is currently joined to the conversation.
* Suggested (destination) agent will not be able to join a conversation that had been transferred to them.