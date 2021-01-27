---
pagename: Week of February 1st
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-february-week-of-february-1st.html
isTutorial: false
isNew: false
date: '2021-01-27'

---

These release notes include new features arriving February 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Manager Workspace] Skills widget 
### Type: Enhancement (MW 1.11)

Today, when tracking the performance of multiple skills, managers are required to manually filter the workspace skill by skill in order to view the data they need. A new skill-level table has been added to the workspace, allowing managers to do this more easily. The table displays all existing metrics as well as new metrics like "Actionable" and  "Wait time for assignment (50%)".

{: .notice}
**Please note:** This feature has backend dependencies. For more information please contact your LivePerson representative.

**Who can view the widget?**
A new permission “View skill level metrics in the manager workspace” has been added under the agent manager role. The permission is Off by default. 
Note: This permission is visible when the Manager Workspace Skills View Enabled feature is ON (Messaging.ManagerWorkspaceSkillsView)

![](img/week-of-february-1st-1.png)

Once it is turned on for the relevant agent manager profiles, the Manager Workspace layout will be changed for the relevant users so that a new “Skills” widget will be visible (currently it is located between the Agent Widget and the Conversation Widget).

![](img/week-of-february-1st-2.png)

**Which metrics are available in the table?**

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

**Which skills will each user see?**
The table displays a full list of all the skills for which the user has permissions, i.e., skills assigned to the agents under the groups the user is managing.

**How will the group filter impact the Skills list?**
* Metrics which are queue-related (pre agent assignment) will not be impacted by the filter. For example: unassigned, actionable, wait time for assignment etc.
* Metrics which are attributed to agents, will be impacted. For example: assigned, response time, online agents etc.
* Filtering the workspace by group, will NOT impact the list of skills (skills population) retrieved. The skills list is impacted only by the user’s permissions. 

## [Manager Workspace] Freeze main filters 
### Type: Enhancement (MW 1.11)

Until now, when users scrolled down in the Manager Workspace, the header which contains information such as filters and time frames, disappears. This meant that if users wanted to take a quick glance at the current filter or needed to make a change, they  would need to scroll back to the top of the screen to complete the task. Freezing the headers (making them “sticky”) enables users to constantly see what is impacting their workspace and be able to make changes more easily. 

![](img/week-of-february-1st-4.png)

## [Manager Workspace] Online and Away load in Activity Summary
### Type: Enhancement (MW 1.11)

Users of the Manager Workspace need to be able to understand the actual current load on Online agents and Away agents (human agents only) as a derivative of the total load. These metrics provide managers with better visibility into their actual agent availability and load. These metrics are also inline with minimizing the gap between the Manager Workspace and the Real Time Dashboard in light of the upcoming deprecation.
* **Online Load** - The number of active conversations as a percentage of max concurrent conversations of agents in Online state.
* **Away Load** - The number of active conversations as a percentage of max concurrent conversations of agents in Away state.

![](img/week-of-february-1st-5.png)

## [Manager Workspace] Filter By Intent in Conversation Widget
### Type: Enhancement (MW 1.11)

For accounts using the LivePerson’s Intent Analyzer tool, the Intents column in the Conversation widget will now become filterable. The column which holds the list of all unique intents detected in the conversations will now also enable filtering of specific intents, allowing for easy and quick discovery of conversations on specific topics as well as issue detection.

**Please note:** In order to see the intent column filter, LivePerson’s Intent Analyzer tool must be enabled and configured in the account.

![](img/week-of-february-1st-6.png)

![](img/week-of-february-1st-7.png)

## [Manager Workspace] Messaging agents list for agents using the enhanced Agent Workspace 
### Type: Enhancement (MW 1.11)

Previously, agents using the enhanced Agent Workspace were not able to view the “Messaging agents list” even if they had the "View agents list" permission. Now, agents using the enhanced Agent Workspace will automatically have access to this data through a limited access view of the Manager Workspace. The Manager Workspace icon will be added to the navigation bar for agents with the “View agents list” permission. They will be able to monitor other agents in their group in real time.

{: .notice}
**Please note:** This feature has backend dependencies. For more information please contact your LivePerson representative.

![](img/week-of-february-1st-8.png)

## [Manager Workspace] Logged in agents state is blank “()” 
### Type: Bug fix (MW 1.11)

For accounts using “Away” as the default state upon login, users appear to have no state description upon initial login and before the state is changed manually. This is seen within the Agents Widget area for the Agent Manager Workspace. This issue is now resolved and the users will have the “Away” status updated. 

## [Manager Workspace] Incorrect French Translation in Manager Workspace 
### Type: Bug fix (MW 1.11)

In the French UI in the Agent Manager Workspace there were previously several mistranslations. This has been resolved.

## [Manager Workspace] NPS not shown for conversations where same NPS question was answered more than once
### Type: Bug fix (MW 1.11)

An issue was discovered causing the NPS not to be displayed in the Conversation widget. This has occured when the same NPS question was answered twice - once with an invalid answer, and the second time with a valid answer. This issue is now resolved.

## [Manager Workspace] Consumer name shown under Agent Manager Workspace is different as compared to consumer name in Agent Workspace
### Type: Bug fix (MW 1.11)

A bug was discovered causing the consumer name to be shown under Agent Manager Workspace differently when compared to consumer name in Agent Workspace. This issue is now resolved, so consumer names appear the same in both workspaces.

## [Manager Workspace] Agent Manager Configuration widget does not hide agent name 
### Type: Bug fix (MW 1.11)

The current Agent widget configuration hides the status and agent name fields only in the table display, but not in the card display. This issue is now resolved, and the configuration will not be available.

## [All Conversations] Cannot use spaces in the skill filter
### Type: Bug fix (MW 1.11)

When using the All Conversations tab in the enhanced Agent Workspace, users were unable to search skills that have spaces in the name. The input field does not allow spaces to be used at all. For brands with many skills, this makes it very difficult to track data per some of their skills. Now users can type and add a space for filtering of skills. 


