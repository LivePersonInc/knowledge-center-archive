---
pagename: Week of April 6th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-april-week-of-april-6th.html
isTutorial: false
isNew: false
date: '2020-04-01'

---

These release notes include new features arriving to LiveEngage during April 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Global skill filter  
### Type: New functionality (Manager workspace 1.8)

A new global skill filter has been added to the manager workspace, allowing users to easily filter the entire workspace by specific skills. The filter is available on the top right corner of the page, next to the timeframe and group filters. The new filter impacts all widgets and metrics available.
When filtering by skill, the “Agents” widget will retrieve the list of agents that are assigned to the selected skills. Please note that the metrics associated will not be filtered according to the skill, but for all of the agent’s activity. For example, if an agent is assigned multiple skills, the metrics will reflect all of their conversations and not just the filtered skill. 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-april-6th-1.png)


## Global filter setting at logout retained upon login
### Type: Enhancement (Manager workspace 1.8)

In order to spare users from having to reset the workspace filters with each login, the global filter setting at logout will be retained upon login. The filters which are retained are only the global filters (available at the top right corner of the workspace): timeframe, group and skill filters. The filter settings are kept on the local storage of specific computer and browser per LiveEngage user.

## Active metric added to agent card view 
### Type: Enhancement (Manager workspace 1.8)

The “Active” metric, which was previously available only on the list view of the Agents widget, has been added to the card view as well. The metric displays the number of conversations at full intensity.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-april-6th-2.png)

## Agent group filter for conversation widget 
### Type: Bug fix (Manager workspace 1.8)

If a conversation was transferred between different groups (the transferring agent group and the destination agent groups were different), and the workspace was filtered by the group of the transferring agent, the conversation would have been retrieved in the conversation widget, although it is currently not handled by the transferring group. This issue is now resolved, so that the filter retrieves only the conversations of the group which is **currently handling** the conversation.  

## Support step up SDEs
### Type: New Functionality (Messaging History API 1.0.0.14)

Following the step up feature, Messaging History API did not show authenticated SDEs for step up conversations. In this new release, authenticated SDEs will be presented in the UI.

## Web navigation History - real time flow
### Type: New Functionality (Messaging History API 1.0.0.14)
Messaging History API will show the navigation history of a consumer in the last 48 hours (from the time the conversation is queried).

## Rollover  
### Type: New Functionality (Messaging History API 1.0.0.14)
This feature will provide support to allow a configured Rollover account to see all active conversations from multiple Brand accounts in the Manager Workspace, and also allow Agents to see All Connections historical conversations.  

## OS version should be taken from a new field
### Type: Bug fix (Messaging History API 1.0.0.14)
Use the correct data event to show the correct OS version

## lastAgent details were incorrect following a takeover 
### Type: Bug fix (Messaging History API 1.0.0.14)
Messaging Interaction API: the ‘info’ fields related to the last assigned agent (latestAgentID, latestAgentFullName, latestAgentNickname etc.) do not update to the actual most recent agent following a “Takeover”.
Takeover is noted as part of the transfer list but doesn’t impact the ‘info’ section of the API. 

## Agent Survey for Messaging 
### Type: Bug fix (Messaging History API 1.0.0.14)
Last Submitted shows timeout even though submitted 

## Return version parameter in subsequent call 
### Type: Bug fix (Messaging History API 1.0.0.14)

Add the version parameter to the subsequent call


