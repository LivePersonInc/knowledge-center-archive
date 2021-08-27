---
pagename: All Conversations
categoryName: Agent & Manager Workspace
subCategoryName: Agent manager tools for messaging
indicator: messaging
subtitle: 
level3: ''
permalink: agent-manager-workspace-manager-tools-for-messaging-manager-workspace-for-messaging-all-conversations.html
isTutorial: false
date: 2019-01-21 09:24:58 +0000
isNew: false
redirect_from:
  - agent-manager-workspace-manager-tools-for-messaging-new-manager-workspace-for-messaging-all-connections.html
  - agent-manager-workspace-manager-tools-for-messaging-new-manager-workspace-for-messaging-all-conversations.html
  - agent-manager-workspace-manager-tools-for-messaging-other-manager-tools-for-messaging-all-conversations.html
---

The All Conversations tab displays every one of your brand’s messaging conversations, both open and closed, that have began in the past 13 months. This area is a useful tool that features advanced filtering and search capabilities, which lead to meaningful analysis on business topics, consumer satisfaction, and operational effectiveness. All Conversations allows agent managers to view the entire flow of a conversation, including transfers to another agent or skill, offering them a detailed understanding of the consumer experience and agent performance.

![alt text](img/new-manager-workspace-6.png)

The “All Conversations tab enables agents and managers to perform two major actions:
  1. **View and search conversations:** All Conversations enables users to search through both open and closed conversations that began in the past 13 months with advanced search and filter capabilities.
  2. **Take actions on conversations:** Managers (or agents with permissions) can perform actions on conversations in real time, such as joining a conversation, transferring it to another skill, closing the conversation and more.

## Default view

To access the **All Conversations** list directly, first select the **Agent Workspace** icon from the left side navigation. The Agent Workspace will open with an option to click on the **All Conversations** tab at the top.

By default, the **All Conversations** list displays conversations that began in the past week. The list is sorted by the conversation’s start time, so that conversations which were recently opened will appear at the top of the list.

Each user may change the time frame for viewing this list, selecting a range of up to 3 months from the previous 13 months. All search and sort items will display conversations within this selected timeframe.

## Permissions

Agents and managers will be able to view the All Conversations tab only if they have the appropriate permissions turned on (on by default):
* For managers -  “View all conversations” permission.
* For agents - “Handle messaging conversations and access all conversations list” permission.

## Conversations displayed per user

The list of conversations displayed will vary according to each user’s role and permissions:

|    Role   | Assigned OR closed conversations | In-queue conversations
| ------- | ------- | ------- |
Agents | View conversations which they are currently handling or handled in the past | ---
Agents with "view other agents conversations" permission | Will be able to view conversations which are handled or were handled in the past by other agents in their agent group | ---
Agent managers | Will be able to view conversations which are being handled or were handled in the past by agents in the agent groups they manage | Conversations which are waiting in-queue for skills which are assigned to the agent groups they manage

## Available views

Users will be able to view conversations in All Conversations in two modes. Each user can select their desired view mode from the icons found in the top right of the list.

### 1. List view

Displays a list of both opened and closed conversations with sorting and filtering capabilities. This list includes the full view of available information on each conversation, such as skill, agent name, group, start time and more.

![alt text](img/all-connections-manager-workspace.png)

#### Definitions

* **Status** - The current status of a messaging conversation. Each conversation must have one of these three statuses below.

Icon | Status | Description        
| ------- | ------- | ------- |
![alt text](img/manager-workspace-icon-1.png) | In queue | Conversation is waiting in the queue to be assigned to an agent
![alt text](img/manager-workspace-icon-2.png) | Assigned | Conversation is currently being handled by an agent
![alt text](img/manager-workspace-icon-3.png) | Closed | Conversation closed - in the list view, the close reason will be displayed in brackets (possible values: agent or auto close or consumer)


In addition, a conversation may have the below indications as well.

Icon | Status | Description
| ------- | ------- | ------- |
![alt text](img/manager-workspace-icon-4.png) | First time consumer | Conversation with a consumer who is contacting the brand for the first time via messaging
![alt text](img/manager-workspace-icon-5.png) | In survey | Conversation was closed and consumer is currently filling the Post Conversation Survey

* **Consumer name** - The consumer name appears based on the available information from the messaging channel.  For authenticated messaging, if the name of the consumer is known, it will appear here. For messaging channels where the name is unknown it will appear as ‘visitor’.
* **Response time** - The amount of time remaining until an agent response is required, as defined by the SLA. Conversations where the SLA has been exceeded are overdue will be marked in red.
* **Skill** - The skill assigned to the conversation.
* **Agent name** - The name of the agent currently assigned to the conversation.  For conversations that were also handled by other agents (e.g. in a case of a transfer), the additional agents will be displayed as well.
* **Agent group** - The agent group that the agent(s) assigned to the conversation belong to.
* **MCS** - The [Meaningful Conversation Score](/data-reporting-meaningful-connection-score-(mcs)-meaningful-connection-score-(mcs)-overview.html) displays the real-time positive or negative sentiment of the consumer based on natural language understanding.
* **Start time** - The time the visitor first started a conversation with the agent (displayed in the visitor’s local time), or the time the agent resumed the conversation with the consumer.
* **Last message time** - The time the last message was sent, by either the agent or consumer, in the conversation. In addition, hovering over the column presents the last message text.
* **Duration** - The time frame between when the consumer started the conversation until it was closed by either the consumer or the agent. For active conversations the duration displayed here represents the time from the start of the conversation until the moment this data is viewed.

#### Sorting

* The list is sorted by default by the conversation start time, so that conversations which were recently opened will appear at the top of the list.
* Users will be able to sort the list by
  * Conversation start time
  * Response time

### 2. Conversation view

This mode is designed to filter and view conversations that you’d like to see the details of. There are two ways to enter conversation mode:
* Select the ‘conversation mode’ icon from the top right corner
* Click on a consumer name in a selected conversation

This view displays the conversation transcript along with its associated information widgets.

The same list displays on the left with the ability to navigate through the list and read the transcript for each conversation. The list of conversations is the same list that displays in the list view (with only the summary data).

![alt text](img/new-manager-workspace-6.png)

#### Definitions

* **Status** - The current status of a messaging conversation.  Each conversation must have one of these three statuses: in queue, assigned and closed.  Additional statuses such as ‘first time customer’ and ‘in-survey’ will not display in this view.
* **Response time** -  The amount of time remaining until a response is required, as defined by the SLA. Conversations where the SLA has been exceeded and are overdue will be marked in red.
* **Consumer name** - The consumer name appears based on the available information from the messaging channel.  For authenticated messaging, if the name of the consumer is known, it will appear here. For messaging channels where the name is unknown it will appear as ‘visitor’.
* **Start time** - The time the visitor first started a conversation with the agent (displayed in the visitor’s local time), or the time the agent resumed the conversation with the consumer.

## Search and filter

Agents and agent managers can search/filter conversations with the following parameters (note that the results will display according to the time frame selected in the header of the All Conversations tab):
* Keywords from transcripts
* Duration of conversation
* Agent
* Agent group
* Skill
* Start time
* Status (open and closed)
* Meaningful Conversation Score (MCS)
* Conversation ID
* CSAT
* Summary keywords
* Engagement Attribute keywords

**For example:** An agent manager can filter conversations by duration. By drilling down further and refining the search, they will be able to pinpoint why the conversations had an abnormal length. Managers can also view all conversations with a low MCS, or a low CSAT, and identify the cause by referring to the conversation transcripts.

## Taking actions on conversations (messaging, sending back to queue, transferring, etc)

Managers can now easily join a conversation and perform actions, such as transferring it to another agent or closing the conversation. Managers can join conversations when they are actively handled by an agent, or if they are still in the queue (unassigned). The join option is available from the conversation mode (not from the list mode). Simply click **+ Join Conversation** at the bottom of the transcript, and **then you may send a message or take an action.**

![](img/new-manager-workspace-use-case-7a.png)

When selecting **Join**, you can:
1. Begin messaging with the consumer alongside the agent
2. Take any of the following actions from the current window:
  * **Return to queue:** you will still be joined to the conversation, it will appear in your My Conversations list.
  * **Transfer conversation:** you will still be joined to the conversation, it will appear in your My Conversations list.
  * **Close conversation**
  * **Leave the conversation:** use this action in order to stop being an active participant and remove it from your My Conversations list. This action is helpful if you joined a conversation that you do not want to take action on OR for a conversation that you’ve transferred or returned to queue and you’d like to remove from your lists.

The new enhancements make it possible for agents to easily perform actions for an agent who is unavailable. Once you are in the conversation mode, simply filter the All Conversations list to the left by the desired agent. Once the agent has been selected, you will see only their conversations. You can now use the **+ Join Conversation** option and the actions menu to take the desired action.  

If you take an action on a conversation (e.g. send back to queue, transfer or takeover) that is currently being handled by an agent - they will be notified of the action. If the agent is in the conversation, a pop up will appear on their screen to let them know that they are no longer assigned to this conversation. If the agent doesn’t have the conversation open it will disappear from their My Conversations list without notification.

## Taking over a conversation

Managers with the “Takeover conversation” permission will be able to takeover conversations which are currently assigned to agents. The user who is taking over the conversation will become the new assignee of the conversation and the previous assignee is removed from the conversation.

The “Takeover” option is available in the conversation menu, if the user has permissions for this action. Once the user has chosen the “Takeover” option, he will be navigated to the My Conversations tab, focused on that conversation.

If you takeover a conversation that is currently being handled by an agent - they will be notified of the action.  If the agent is in focus on the conversation, a pop up will appear on their screen to let them know that they are no longer assigned to this conversation. If the agent is not in focus on the conversation, the conversation will disappear from their My Conversations list without notification.

{: .notice}
**Please note:** In the new Manager Workspace you must first **join** a conversation before you can use the takeover action.

## Resuming a conversation

In many use cases, agents and managers need to send messages to consumers after the conversation with them has already been closed.

In order to do so, a ‘Resume’ option will be available from the conversation mode .
When selecting ‘Resume’, a new conversation will be started with the consumer and users will be navigated to the My Conversations list, focused on the conversation.
