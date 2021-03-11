---
pagename: Week of March 15th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-march-week-of-march-15th.html
isTutorial: false
isNew: false
date: '2021-03-11'

---

These release notes include new features arriving March 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Manager Workspace] New Bot Performance widget
### Type: New Functionality (MW 1.12)

Today, human agents and bots are treated similarly in the Manager Workspace. They are both treated as the same type of agent without the ability to distinguish between the two. In order to view bot agents, the user must filter by the agent name column or the skills column. So, as a first step, an easy distinction is required.

While most of the metrics measured today are relevant for both human and automated agents, there are differences between these user types. The metrics available today are all human-centric so additional bot-centric metrics are required.

![](img/week-of-march-15th-1.png)

As the Manager Workspace  is designed to assist managers to manage and track the shift in real time, the focus of the new Bot Performance widget is to provide a view of automations and metrics which are relevant and actionable in real time, rather than offline.

![](img/week-of-march-15th-2.png)

![](img/week-of-march-15th-3.png)

## [Manager Workspace] Quick filters and presets 
### Type: New Functionality (MW 1.12)

Previously, every time an agent manager logged out of the Conversational Cloud, all filters and sort definitions defined in the Manager Workspace were lost. This means every shift the agent manager has to filter and configure the workspace again, with no ability to save predefined states of filters and sort definitions.

To save time, effort, and a lot of manual repetitive work, a new capability was created that allows agent managers to save a snapshot of all filters and sort definitions to reuse as needed.

![](img/week-of-march-15th-4.png)

The Manager Workspace presents large amounts of real-time data and metrics which are aggregated into several widgets, and each widget allows filtering and sorting of data by key properties. It is very common for an agent manager to set multiple filters and sorting across different widgets to give themself a clearer view of the shift according to different points of interest. Additionally, agent managers might often require different filters and sorting to represent different states of the shift like “Online”, “Away” and more.

To alleviate the need to recreate the preferable configuration each time an agent manager logs into the application and to give them the ability to quickly switch between multiple filter and sorting configurations, the Manager Workspace is being enhanced with the following capabilities:
* Ability to save, edit and remove configurations across different sessions 
* Easily switch between multiple saved configurations 

## [Manager Workspace] Transcripts in Conversation widget  
### Type: Enhancement (MW 1.12)

Managers looking to better understand the conversations, intents and overall experience during a shift can now use the Manager Workspace’s Conversation widget to gain complete visibility into the details of each conversation. Now, with a single click on the relevant conversation, users can open conversation transcripts within the Conversation widget. 

This means that managers can filter relevant agents, skills, intents and timeframes to quickly scroll through different transcripts, making it easy to compare situations and identify issues in real time without switching between the Manager and Agent Workspaces. 

![](img/week-of-march-15th-5.png)

## [Manager Workspace] Activity Summary Close Reason
### Type: Enhancement (MW 1.12)

The Activity Summary widget in the Manager Workspace has been enhanced to present how a conversation closed (whether by the agent, the consumer, or the system) within the Closed conversations metric. 

![](img/week-of-march-15th-6.png)

## Wrap Up time for account level
### Type: Enhancement (Denver 5.2)

This features provides the ability for an account to set wrap ip time at the account level for all skills. This feature gives agents a configurable amount of time between finishing a chat and the next chat being assigned to "wrap up" their work with any additional tasks. There was previously a UI control for this in Night Vision that did not work, and this task enabled that feature to work. Skill-based overrides of the wrap up time still function the same.

## [Get All Users API] Response changes
### Type: Enhancement (5.11.0.18)

A change was made for security purposes affecting the response returned from the Get All Users API. This change will only affect calls made with OAuth2 authentication (Bearer authentication) made by agents.Calls made using OAuth1 authentication, or calls made by admins will remain unchanged.

The fields that are returned in the new response are:
id, 
deleted, 
fullName, 
nickname, 
pictureUrl, 
skills, 
memberOf, 
maxChats, 
userTypeId, 
skillIds, 
memberOf.

## [Enhanced Agent Workspace] Accessibility -  A11Y Project Fixes
### Type: Bug fix (NAW 1.23)

The following bug was found as part of regression A11y tests on the Conversational Cloud: JAWS not reading Secure Forms from the Predefined Content panel. This bug has been resolved. 
