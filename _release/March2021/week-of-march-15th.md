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

**Limitations:**
* Users can save up to 50 presets

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

A change was made for security purposes affecting the response returned from the Get All Users API. This change will only affect calls made with OAuth2 authentication (Bearer authentication) made by agents. Calls made using OAuth1 authentication, or calls made by admins will remain unchanged.

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

## Transfer to Agent
### Type: Enhancement (Third Party Bot Connectors 2.28)
Third-Party Bots Bots are now able to transfer a conversation to a specific agent. It was only possible to transfer the conversation to a random agent with a certain skill. 
How to enable
Beforehand the user needs to enable the permissions to transfer the conversation to an agent:
Click [here](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html)

![](img/RN15March-1.png)

Afterwards the bot needs to send the skill name and agentId of the receiving agent within the Transfer Action from the vendor. 
![](img/RN15March-2.png)

## Watson Discovery Search
### Type: Enhancement (Third Party Bot Connectors 2.28)
Third-Party Bots are now able to use Watson Discovery Search responses. Discovery Search is a tool that uses the knowledge of websites, documents and other data. to generate an answer the Watson Bot is able to send within a conversation. Click [here](https://cloud.ibm.com/docs/discovery?topic=discovery-about)for more information.

### How to enable
The user needs to create a search skill in [IBM Cloud](https://cloud.ibm.com/docs/assistant?topic=assistant-skill-search-add) and define a Discovery database. Afterwards if a Third-Party Bots Watson Bot is receiving a Discovery Search message, it is getting sent as a normal message inside the conversation window with an additional link to the document (if provided)

![](img/RN15March-3.png)

## Rate limit warning should not be consumer facing 
### Type: Bug fix (Third Party Bot Connectors 2.28)

When spam protection of our bot kicks in (more than 4 messages in 2 seconds), the connector writes a message to the consumer: "You sent too much messages in a short period of time, suspending conversation". The rate limiting is now silent and doesn’t send a message to the consumer anymore. 

## Dialogflow Test Connection fix 
### Type: Bug fix (Third Party Bot Connectors 2.28)

Dialogflow test connection did only work for bots located in the US. With the fix it now works for every location.

## IBM Watson endpoints deprecation  
### Type: Change (Third Party Bot Connectors 2.28)

Watson has decided to deprecate the old domain watsonplatform.net thus all the bots must be updated to reflect the new urls provided by IBM watson. The retirement for domain is 26 May 2021. We have encouraged everyone to edit the bot configuration as soon as possible to make sure all affected bots will run smoothly after the deprecation. For more information, click [here](https://cloud.ibm.com/docs/watson?topic=watson-endpoint-change).




