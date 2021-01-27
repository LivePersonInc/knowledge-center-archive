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

## [Agent App] Conversation Rollover support
### Type: New functionality (v2.6.2)

The Agent App now supports Conversation Rollover.

In the conversation list the brand name will be visible below the visitor name:

![](img/week-of-february-1st-9.png)

In the conversation view, the brand name will also be visible below the visitor name:

![](img/week-of-february-1st-10.png)

During a conversation transfer, a rollback is possible.

![](img/week-of-february-1st-11.png)

**How to enable:** 

Search for LivePerson Agent App on the Google Play Store or Apple App Store and download the app 
[Agent App on Apple App Store](https://apps.apple.com/us/app/liveperson-agent-app/id1533849048)
[Agent App on Google Play Store](https://play.google.com/store/apps/details?id=com.liveperson.LiveEngageMessaging)

## [Analytics Builder] New Bot Performance Dashboard including Agent Annotation reporting
### Type: New functionality (Analytics Builder 4.9)

The new Bot Performance Dashboard will allow brands to review and analyze their Bot Performance in messaging over time, and measure the impact of agent annotations on the Bot Performance for bots designed by Conversation Builder.

The new dashboard will enable brands to track the bot funnel, including: Assigned conversations, Handled conversations, Intent matched rate and Conversations closed by the bot. This data will be available by date and hour.

The report will show data at 2 levels:
* Brand level - enables users to view bot quality trends over time and the impact of annotations over time, including:
  * How many conversations are assigned to bots? How many are transferred to agents? How many are escalated to other skills?
  * What’s the intent match rate? Is it improving over time?
  * What is the annotation rate over time? What is the ROI of the annotations? 
* Bot level - enables users to analyze and optimize each bot, including: 
  * Does the Intent match rate improve when we are investing the time to annotate?
  * What is the trend of unmatched intents? Has it decreased over time? 
  * Which bot annotations are submitted? Do all bots improve over time when annotations are added by agents?

![](img/week-of-february-1st-12.png)

![](img/week-of-february-1st-13.png)

## [Analytics Builder] Post Conversation Survey scores attributed to bots as well
### Type: Enhancement (Analytics Builder 4.9)

Before this release, we had the following behavior of the metrics in Survey for Messaging and Performance Dashboard for Messaging:

1. **CSAT SCORE (UNIFIED) metric:** shows data from the old and new post- conversation solutions - apply for bots and humans.
2. **CSAT(Brand) and CSAT (agent and skill) metrics:** include answers from the new solution only:
    * CSAT(Agent and Skill) is calculated only for the last human agents - only human
    * CSAT(Brand) includes BOT and HUMAN 

  Note: FCR, NPS behaves the same.
  
With this new release, the attribution will be to the last  human agent assigned (if exists), and to all bots assigned to a conversation. This change will allow measuring satisfaction scores for bots that participated in the conversation. For human agents, sales teams usually want to attribute the sale only to the last human agent and this is going to behave the same as before.

Below is a table with several scenarios that demonstrate the changes:

![](img/week-of-february-1st-14.png)

## [Analytics Builder] Expose the Assignment metrics in the Business Dashboard for Messaging 
### Type: Enhancement (Analytics Builder 4.9)

The Business Dashboard for Messaging was enhanced to include 2 additional metrics to provide the ability to analyze a campaign funnel with the Assignments metric.

| Metric Name | Description |
| --- | --- | 
| ASSIGNMENTS| The number of times a conversation was assigned to an agent. This metric does not count instances when an agent manager or bot joined a conversation. |
| ASSIGNED CONVERSATIONS | The number of conversations that were assigned to at least one agent during the selected time frame. |

## [Analytics Builder] Conversation ID is available in the Performance Dashboard for Messaging  
### Type: Enhancement (Analytics Builder 4.9)

The Performance Dashboard for Messaging was enhanced to include the actual conversation ID as displayed in all connections.
Conversion ID value was added to the datasets: **Agent Messaging Activity, Consumer Messaging Activity and RCR.**

The example below shows the Conversation ID as well as its respective string ID, along with metrics from agent Messaging Activity dataset.

![](img/week-of-february-1st-15.png)

New ‘List of All Conversations’ dataset was added to the dashboard which enables users to add CONVERSATION to the filter or visualization.

![](img/week-of-february-1st-16.png)

Users can also enable **Display Attribute Forms** and choose **DESC**  to see the actual Conversation ID:

![](img/week-of-february-1st-17.png)

![](img/week-of-february-1st-18.png)

These conversations are populated from **Agent Messaging Activity, Consumer Messaging Activity and RCR**, which enables users to see metrics coming from these datasets - pertaining to each CONVERSATION.

## [Analytics Builder] Expose key metrics Numerator and Nominator to the hidden field 
### Type: Enhancement (Analytics Builder 4.9)

The Performance Dashboard for Messaging was enhanced to expose the numerator and nominator of agent loads, so brands can calculate the agent load in a more accurate way,  knowing the numerator and denominators and not only the final average results.

The metrics will be exposed as hidden fields, which LivePerson CSMs or brands with customization features can unhide and use  in the dashboard.

Exposed metrics:
* SUM_Of_Agent_Load  - Total sum of all agent load events (sent when agent is logged in, every 60 seconds)
* NO of Events - No. of reported agent load events (sent when agent is logged in)
* AGENT FIRST RESPONSE TIME - required for the calculations of AVG. WAIT TIME FOR FIRST AGENT RESPONSE = ([AGENT FIRST RESPONSE TIME] / [TOTAL NO. OF FIRST RESPONSES])
* RESOLVE DURATION - required for the calculator of  AVG. CONVERSATION DURATION =  ([RESOLVE DURATION] / [CLOSED CONVERSATIONS])

## [Analytics Builder] Skill Active Indicator 
### Type: Enhancement (Analytics Builder 4.9)

Skill Active Indicator attribute was added to the predefined dashboards to allow brands to select skills in an efficient way by viewing only the skills which are used and not deleted from the system. The Skill Active Indicator attribute was added to the dashboards Messaging Performance Dashboard, Agent Activity, Bot performance, Goal tracker for messaging and for chat, and Network manager.

## [Analytics Builder] Missing columns Question Type and Question Position in Survey Dashboard for Live Chat 
### Type: Bug fix (Analytics Builder 4.9)

Security filter prevented users with agent manager permission only to see data in  the following two columns: Question Type and Question Position in Survey Dashboard for Live Chat.

## [Analytics Builder] Users with View permission cannot replace the grid granularity to Hour in the Agent Activity Dashboard  
### Type: Bug fix (Analytics Builder 4.9)

Users with view-only permissions cannot replace the grid granularity with Hourly in the Agent Activity Dashboard (The option of right-clicking on a date in the Agent Activity dashboard, in the grid and selecting ‘Replace with’ hour  was removed). This bug has been resolved.

## [Performance Optimizer] LOB Purpose Tagging 
### Type: New functionality (PO v1.1)

Line of Business Purpose tagging gives brands the ability to capture the primary and secondary “LOB Purpose(s)”.  Future iterations will allow the user to view the LOB purpose against the 4E framework and benchmarking functionality available within the Performance Optimizer. 

**Enablement:** This optional feature is automatically available to all users who configure LOBs. To add an LOB Purpose, the user must select from a drop down list of primary and secondary (if applicable) purposes.  

![](img/week-of-february-1st-19.png)

## [Performance Optimizer] Ability to disable a 4E metric from configuration tab 
### Type: New functionality (PO v1.1)

Users now have the ability to disable a 4E metric for LOB(s) from the configuration tab in the Performance Optimizer. Should that metric be manually disabled, it will not be displayed in the UI and will not be included in the 4E composite scores. 

![](img/week-of-february-1st-20.png)

## [Performance Optimizer] Resource vs. Demand panel 
### Type: Enhancements (PO v1.1)

The Volume panel in the Performance Optimizer has been renamed “Resources vs. Demand” panel. Users are now able to see the login hours over time, overlaid against the closed conversations over time. The closed conversations cumulative was removed from the Performance Optimizer as this was deemed not to provide added value. 

![](img/week-of-february-1st-21.png)

## [Performance Optimizer] Opportunities Panel Redesign 
### Type: Enhancements (PO v1.1)

In the Opportunities Panel, metrics are now color-coded per their respective 4E category. Users also have the ability to filter the chart by 4E category so that the graph displays one or more of the 4E categories.  


![](img/week-of-february-1st-22.png)

![](img/week-of-february-1st-23.png)

## [Performance Optimizer] Addition of Web and App Messaging sources 
### Type: Enhancements (PO v1.1)

The Channels panel differentiates closed conversations for “Web” and “In App” entry points. Previously, these two entry points were contained within the “Other” category. 

## [Performance Optimizer] 4E Summary position change
### Type: Enhancements (PO v1.1)

The 4E composite score placement has been modified such that “Effort” and “Emotion” are the top metrics, and “Efficiency” and “Effectiveness” are now in the bottom position.  This visualization is consistent with other training materials and product documentation. 

![](img/week-of-february-1st-24.png)

## [Performance Optimizer] Data to Text redesign 
### Type: Enhancements (PO v1.1)

The new data to text redesign provides Performance Optimizer users with an in-depth analysis for each 4E metric with additional context, tactical optimization plans, and links to diagnostic playbooks. Collapsible headers have been added for each metric that display the actual performance, trend, and icon that describes the metric as “OK”, “Very Good” or “Needs Improvement”. 

![](img/week-of-february-1st-25.png)

## [Performance Optimizer] Additional 4E Metrics 
### Type: Enhancements (PO v1.1)

The following metrics have been incorporated into the 4E framework: 
* Human First Response Time After Bot (Minutes)
* Human First Response After Bot Count
* Agent First Response Time Overall (Minutes)
* Agent First Response Count
* Agent Response Time Overall (Minutes)

These new metrics are displayed within the Performance Optimizer panels: 
* Opportunities Panel 
vLine of Business List 
* 4E Summary
* 4E Detail

