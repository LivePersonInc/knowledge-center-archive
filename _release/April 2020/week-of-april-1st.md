---
pagename: Week of April 1st
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-april-week-of-april-1st.html
isTutorial: false
isNew: false
date: '2020-03-25'

---

These release notes include new features arriving to LiveEngage during April 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Global skill filter  
### Type: New functionality (Manager workspace 1.8)

A new global skill filter has been added to the manager workspace, allowing users to easily filter the entire workspace by specific skills. The filter is available on the top right corner of the page, next to the timeframe and group filters. The new filter impacts all widgets and metrics available.
When filtering by skill, the “Agents” widget will retrieve the list of agents that are assigned to the selected skills. Please note that the metrics associated will not be filtered according to the skill, but for all of the agent’s activity. For example, if an agent is assigned multiple skills, the metrics will reflect all of their conversations and not just the filtered skill. 

![](img/week-of-april-6th-1.png)


## Global filter setting at logout retained upon login
### Type: Enhancement (Manager workspace 1.8)

In order to spare users from having to reset the workspace filters with each login, the global filter setting at logout will be retained upon login. The filters which are retained are only the global filters (available at the top right corner of the workspace): timeframe, group and skill filters. The filter settings are kept on the local storage of specific computer and browser per LiveEngage user.

## Active metric added to agent card view 
### Type: Enhancement (Manager workspace 1.8)

The “Active” metric, which was previously available only on the list view of the Agents widget, has been added to the card view as well. The metric displays the number of conversations at full intensity.

![](img/week-of-april-6th-2.png)

## Agent group filter for conversation widget 
### Type: Bug fix (Manager workspace 1.8)

If a conversation was transferred between different groups (the transferring agent group and the destination agent groups were different), and the workspace was filtered by the group of the transferring agent, the conversation would have been retrieved in the conversation widget, although it is currently not handled by the transferring group. This issue is now resolved, so that the filter retrieves only the conversations of the group which is **currently handling** the conversation.  

