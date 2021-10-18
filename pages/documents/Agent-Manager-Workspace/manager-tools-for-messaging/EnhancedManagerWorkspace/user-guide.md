---
pagename: Enhanced Manager Workspace user guide
categoryName: Agent & Manager Workspace
subCategoryName: Agent manager tools for messaging
indicator: messaging
subtitle: 
level3: ''
permalink: agent-manager-workspace-manager-tools-for-messaging-manager-workspace-for-messaging-enhanced-manager-workspace-user-guide.html
isTutorial: false
date: 2019-01-21 09:24:58 +0000
isNew: false

redirect_from:
 - agent-manager-workspace-manager-tools-for-messaging-enhanced-manager-workspace-for-messaging-user-guide.html
 - agent-manager-workspace-manager-tools-for-messaging-enhanced-manager-workspace-for-messaging-manager-workspace-user-guide.html
 - agent-manager-workspace-manager-tools-for-messaging-new-manager-workspace-for-messaging-enhanced-manager-workspace-user-guide.html
 - messaging-managers-manager-workspace-user-guide.html
---


## Configuration

To enable the Manager Workspace on your LivePerson Conversational Cloud account, please contact your LivePerson account team. Once the feature is on, a new permission will be added to the agent manager profile: “View agent manager workspace”. The permission is “On”  by default.

![](img/new-manager-workspace-permissions.png)

### Configuration of metrics to display

This new capability allows brands to configure, per widget, which metrics will be displayed in the workspace.
For example, brands that are not tracking the CSAT metric will now be able to remove it from their view.
The configuration definition will be done for the entire account (impacts the view of all users of the manager workspace).

Since the configuration operation is done only once or a few times, it is a best practice to turn the permission off to all users once you are done to avoid any future confusion, or to allow it for a really small group of people.
The configurable widgets are the “Activity Summary”, “Agents” and “Conversations” widgets. 

{: .notice}  
**Please note:** This feature has a backend dependency. Please contact your LivePerson representative for more information. 

Who can change the configuration?
A new permission “Configure agent manager workspace” has been added to the agent manager profile. **It is Off by default**. 
![](img/week-of-may-4th-5.png)

Once it is turned on for the desigered profile, a new configuration icon will become available in the top right corner of the workspace:
![](img/week-of-may-4th-6.png)

Clicking on it will reveal the configuration window, allowing the user to easily toggle on or off the relevant metric per each configurable widget.
![](img/week-of-may-4th-7.png)

### New Agent Workspace

Here you can also control the permissions for the enhanced Agent Workspace. The permission is currently **“Off”** by default. We recommend enabling the enhanced Agent Workspace for all managers using the new Manager Workspace. Please note that if the new Manager Workspace is enabled but the enhanced Agent Workspace **has not been enabled**, managers will be redirected to the old workspace after selecitng a conversation.

![](img/new-manager-workspace-permissions-2.png)

## Filters

Users will only be exposed to data related to the groups they manage. For example, an agent manager of the group "Sales" will only be able to view data and metrics which are driven from:
* Conversations which are currently waiting in queue in any of the skills assigned to the agents of the "Sales" group.
* Conversations which are currently assigned to agents of the "Sales" group.

The above assumes that no filters are enabled and thus represents the default view of the Manager Workspace.

The following filters can be applied to the sections listed above:

1. **Time filter** - by default, the workspace will show data from the last hour. Users will be able to change the time range to view data from the past X hours. The maximum supported time range is 24 hours.

![](img/new-manager-workspace-7.png){:class="newagent"}

{:start='2'}
2. **Group filter** - managers will be able to filter the data by a single group or a number of groups. The list will only contain groups and sub-groups the agent manager is managing.

![](img/new-manager-workspace-8.png){:class="newagent"}

## In queue widget

The "in queue" widget presents the number of conversations currently waiting for agent assignment. The number will only include conversations associated with skills which are assigned to agents in groups the agent manager can view.

* The widget will not be impacted by the time filter or group filter available at the right top corner of the workspace.
* The widget is filterable by skill.
* A breakdown of "in-queue" conversations by skill is shown.
* Conversations assigned to the "UNASSIGNED" skill will also be included in the in queue conversations value.

![](img/new-manager-workspace-9.png){:class="newagent"}

![](img/new-manager-workspace-10.png){:class="newagent"}

## Activity summary

The metrics widget provides a high level "health check" of your group’s real-time performance. The following metrics available:
* **ASSIGNED** - The number of open conversations currently assigned to logged in agents**. **Note:** This metric is not affected by the time filter.
* **LOAD** - The total weight of assigned conversations as a percentage of the maximum concurrent conversations of all agents. **Note**: This metric is not affected by the time filter.
* **CLOSED** - Number of conversations closed within the selected timeframe by the agent, the system or the consumer.
* **CSAT** - The percentage of questions which were answered with 4 or 5 (top two boxes) out of the total responses submitted by consumers to a CSAT question within the selected timeframe.
* **Online Load** - The number of active conversations as a percentage of max concurrent conversations of agents in Online state.
* **Away Load** - The number of active conversations as a percentage of max concurrent conversations of agents in Away state.

![](img/new-manager-workspace-11.png){:class="newagent"}

## Agent widget

The agent widget shows all agents under the manager which are currently connected to the Conversational Cloud (The list of agents which are shown is not affected by the time filter). The widget will be displayed only in case the user assigned with “View agents list” permission.

The widget supports two views, which can be switched using the icons available on the left top corner of the widget:

### Card view

This view is useful for managers who monitor a short list of agents and would like to see a more visual manner - or if you’d like an easier way to view information on a specific agent.

![](img/new-manager-workspace-12.png){:class="newagent"}

### List view

This view is helpful for managers who have a large number of agents and need a list to quickly view and sort.  The list view is also very helpful when comparing metrics between agents.

![](img/new-manager-workspace-14.png){:class="newagent"}

#### Definitions

* **AGENT GROUP** - The group the agent is assigned to.
* **SKILLS** - The skills assigned to the agent.
* **STATE** - The status of the agent: online, back soon or away. The away reason will be shown as well, if it exists. **Note:** This metric is not affected by the time filter.
* **STATE DURATION** - Time since the agent last changed their state. **Note**: This metric is not affected by the time filter.
* **ONLINE RATE** - The percentage of time the agent has spent in the Online state out of their total logged in time over the selected timeframe. **Note:** This metric is not affected by the time filter.
* **ASSIGNED** - The number of open conversations being handled by the agent. **Note:** This metric is not affected by the time filter.
* **ACTIVE** - Number of conversations at full intensity. **Note:** This metric is not affected by the time filter.
* **MAX.OPEN** - The configured maximum number of high intensity conversations.
* **CLOSED** -  Number of conversations closed by the agent within the selected timeframe OR number of conversations closed by the consumer or the system within the selected timeframe while the agent is the assignee.
* **LOAD** - Total weight of the assigned conversations divided by the agent’s configured maximum number of high intensity conversations. **Note:** This metric is not affected by the time filter.
* **CSAT** - The percentage of questions which were answered with 4 or 5 (top two boxes) out of the total responses submitted by consumers to a CSAT question within the selected timeframe. Attributed to the last assigned agent of the conversation.

#### Filters

In addition to the time and group filter available in the top right corner of the workspace impacting the ‘Agents’ widget , it can also be filterable by:

* **STATE** - Clicking on each status button will filter the agents widget to show only agents in this status. In addition, managers will be able to view how many agents are at each one of the states.

The following screenshot demonstrates the filter showing only ‘away’ agents:

![](img/new-manager-workspace-16.png){:class="newagent"}

* **AGENT NAME** - The filter is  available from the filter icon in the top left corner of the widget OR in the agent name column in the ‘List view’
* **SKILLS** - The filter is  available from the filter icon in the top left corner of the widget OR in the agent name column in the ‘List view’

![](img/new-manager-workspace-17.png){:class="newagent"}

#### Sorting

The table can be sorted by: State, Assigned, Active, Max.open and load columns.

### Conversations widget

#### Population

The conversation widget enables the manager to drill down to the conversation level. The conversation list will include:

* All open conversations.
* Conversations which were closed within the selected time frame (1 hour by default, up to 24 hours).

#### Definitions

The list will include following columns:

* **STATUS**- The status of the conversation. The conversation can be in one of the following statuses:
  * _In queue_ - conversation is waiting in queue to be assigned to an agent.
  * _Assigned_ - conversation is currently being handled by an agent.
  * _Closed_ - conversation is closed (by agent, system or consumer). Conversations which are currently in post-survey status are considered closed.
* **AGENT NAME** - The name of the agent currently assigned to the conversation.
* **AGENT GROUP** - The group of the agent which is currently assigned to the conversation.
* **SKILL** - The current skill of the conversation.
* **CONSUMER** - The consumer name appears based on the available information from the messaging channel. For authenticated messaging, if the name of the consumer is known, it will appear here. For messaging channels where the name is unknown it will appear as ‘visitor’. Clicking on the consumer name will open the conversation window.
* **RESPONSE TIME** - The duration of time remaining until a response is required.
* **START TIME** - The time the visitor first started a conversation with the agent (displayed in the visitor’s local time), or the time the agent resumed the conversation with the consumer.
* **MCS** - Meaningful Conversation Score.
* **CSAT** - Customer satisfaction rated from 1 to 5, as submitted by the customer within the survey.
* **NPS** - Customer Net Promoter Score rate from 0 to 10, as submitted by the customer within the survey.

#### Navigating to the conversation

Clicking on the consumer name  column will open the conversation window in the [‘Conversation view’](https://knowledge.liveperson.com/agent-manager-workspace-manager-tools-for-messaging-enhanced-manager-workspace-for-messaging-all-connections.html#2-conversation-view) of the ‘All Conversations list.

![](img/new-manager-workspace-18.png){:class="newagent"}

![](img/new-manager-workspace-20.png){:class="newagent"}

#### Filters

In addition to the group and time filters at the top of the dashboard, the list can be filtered by:
* **STATUS** - The status of the conversation. Can be either: in-queue, assigned or closed.
* **AGENT NAME** - Filtering by agent name will retrieve:
  * The conversations the agent is currently assigned to.
  * Closed conversations that the agent was the last to handle.
* **SKILL** - Retrieves conversations which are currently assigned with the filtered skill.
* **INTENT** - Enables filtering of specific intents, allowing for easy and quick discovery of conversations on specific topics as well as issue detection.

![](img/new-agent-workspace-21.png){:class="newagent"}

#### Sorting

The list is sortable by "Response time". The list will be sorted by default by “Response time”, so that conversations which are waiting the longest will be placed at the top of the list.

### Skills widget

A new skill-level table has been added to the Manager Workspace, allowing managers to track the performance of multiple skills more easily. The table displays all existing metrics as well as new metrics like "Actionable" and  "Wait time for assignment (50%)".

{: .notice}
**Please note:** This feature has backend dependencies. For more information please contact your LivePerson representative.

#### Who can view the widget?
A new permission “View skill level metrics in the manager workspace” has been added under the agent manager role. The permission is Off by default. 
Note: This permission is visible when the Manager Workspace Skills View Enabled feature is ON (Messaging.ManagerWorkspaceSkillsView)

![](img/week-of-february-1st-1.png)

Once it is turned on for the relevant agent manager profiles, the Manager Workspace layout will be changed for the relevant users so that a new “Skills” widget will be visible (currently it is located between the Agent Widget and the Conversation Widget).

![](img/week-of-february-1st-2.png)

**Definitions**

| New Column name | Tooltip | Visible by default  |
| ------------- | ------------- | ----- |
| Open | The number of open conversations | Yes |
| Overdue  | The number of open conversations which exceeded the SLA | No |
| Unassigned | The number of conversations in the queue that are waiting for an agent assignment | Yes |
| Actionable | The number of conversations in the queue that are pending immediate agent response | No |
| Overdue (unassigned) | The number of conversations in the queue that are waiting for an agent assignment and exceeded the SLA | No |
| Wait time (50%) | 50% of consumers are currently waiting in the queue for an agent assignment this amount of time or less | No |
| Wait time (90%) | 90% of consumers are currently waiting in the queue for an agent assignment this amount of time or less | Yes |
| Assigned | The number of open conversations assigned to agents | Yes |
| Overdue (assigned) | The number of open conversations assigned to agents which exceeded the SLA | No |
| Load | The total weight of assigned conversations as a percentage of the maximum concurrent conversations of all agents | Yes |
| Online | Agents currently in the ONLINE state | Yes |
| Away | Agents currently in the AWAY state | Yes |
| Back soon | Agents currently in the BACK SOON state | Yes |
| Closed | Total number of conversations which were closed within the selected timeframe | Yes |
| TTFR | Time to first response (TTFR). The average time consumers wait for the first human response in a conversation | Yes |
| TTFR from first assign | Time to first response (TTFR) from the time of first agent assignment. The average time it took a human agent to respond to the first message a consumer sent in a conversation, from the time the agent was assigned to the conversation. Measured for the first human agent message sent in a new conversation | Yes |
| TTR | Time to respond (TTR). The average time consumers wait for a human response in a conversation | Yes |
| TTR from assign | Time to response (TTR) from time of agent assignment. The average time  it took a human agent to send a message to the consumer from the time the agent was assigned to the conversation. | Yes |

**Note:** Brands can control which metrics will be displayed in the widget via the configuration window (some of the metrics are turned off by default as listed in the metrics table above):

![](img/week-of-february-1st-3.png)

#### Which skills will each user see?
The table displays a full list of all the skills for which the user has permissions, i.e., skills assigned to the agents under the groups the user is managing.

#### How will the group filter impact the Skills list?
* Metrics which are queue-related (pre agent assignment) will not be impacted by the filter. For example: unassigned, actionable, wait time for assignment etc.
* Metrics which are attributed to agents, will be impacted. For example: assigned, response time, online agents etc.
* Filtering the workspace by group, will NOT impact the list of skills (skills population) retrieved. The skills list is impacted only by the user’s permissions. 

## Limitations

* The data presented are refreshed at a maximum of every 40 seconds from the time of login and may vary slightly from what is presented in the Agent Workspace due to refresh-rate differences.
