---
pagename: Week of September 14th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-september-week-of-september-14th.html
isTutorial: false
isNew: false
date: '2020-09-09'

---

These release notes include new features arriving September 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Manager Workspace] Skills widget 
### Type: Enhancement (MWS 1.11) 

Today, when tracking the performance of multiple skills, managers are required to manually filter the workspace skill by skill in order to view the data they need. A new skill-level table has been added to the workspace, allowing managers to do this more easily. The table exposes existing metrics as well as new metrics like **"Actionable"** and  **"Wait time for assignment (50%)".**

{: .notice}  
**Please note:** This feature has backend dependencies. For more information please contact your LivePerson representative. 

#### Who can view the widget?
A new permission “View skill level metrics in the manager workspace” has been added under the agent manager role.
The permission is *Off* by default.

![](img/week-of-september-14-1.png)

Once it is turned on for the desired agent manager profiles, the Manager Workspace layout will be changed for the relevant users so that a new “Skills” widget will be visible (currently it is located between the Agent Widget and the Conversation Widget).

![](img/week-of-september-14-2.png)

#### Which metrics are available on the table?

![](img/week-of-september-14-3.png)

Brands can control which metrics will be displayed in the widget via the configuration window (some of the metrics are turned off by default as listed in the above metrics table):

![](img/week-of-september-14-4.png)

#### Which skills will each user see?

The table will hold the list of all skills the user is privileged to, i.e skills assigned to the agents under the groups the user is managing.

#### How will the group filter impact the skills list?

* Metrics which are queue-related (pre agent assignment) will not be impacted by the filter. **For example:** unassigned, actionable, wait time for assignment etc.
* Metrics which are attributed to agents, will be impacted. **For example:** assigned, response time, online agents etc.
* Filtering the workspace by group, will NOT impact the list of skills (skills population) retrieved. The skills list is impacted only by the user privileges. 

## [Manager Workspace] Freeze main filters
### Type: Enhancement (MWS 1.11) 

Up till now, when users scrolled down in the Manager Workspace, the header which contains information such as filters and time frames, disappears. This meant that if a user wanted to take a quick glance at the current filter or needed to make a change, the user would need to scroll back to the top of the screen to complete the task. Freezing the headers (making them “sticky”) enables users to constantly see what is impacting their workspace and be able to make changes more easily. 

![](img/week-of-september-14-5.png)

## Facebook Referral param feature
### Type: Enhancement (v3.23.7) 

The Messenger platform supports the passing of an arbitrary parameter via these m.me links. This can be used for many purposes, such as tracking different links placed in different channels, or tying a Messenger user to a session or account in an external app. You can even use it to direct the user to specific content or features available within your Messenger experience. An m.me link with an added parameter looks like this:

![](img/week-of-september-14-7.png)

Based on the consumer intent, it will enable brands to pass the "ref" parameter into the conversation.This can then be used for routing or shown to an agent as ‘status’ SDE in the consumer info for reference.

**How to enable:**
The brand must resubscribe to the Facebook page again in order to use this feature.

**Limitations**
* The referral parameter must be a string that may be up to 2,083 characters in length.
* The page the app is connected to must be published to receive the referral parameter for all users, except those that have the developer, tester, or admin role for your bot.
* The referral parameter is supported in the Messenger web client, as well as the Messenger app for iOS and Android version 92.0 and above.

## Missing notifications in chat workspace when conversation is in focus
### Type: Bug fix (LE UI 12.5) 

A bug has been discovered within the Agent Workspace for chat, which prevents users from getting notifications for new messages when a conversation is in focus. This behavior is now fixed, and users will always be notified of new messages in the chat workspace.

## [Connection Panel] Modify the cases displayed 
### Type: Bug fix (LE UI 12.5) 

A change has been made to the cases displayed in the connection panel. The "Pending bug process" status in Salesforce was renamed to “Pending Engineering" and has 3 sub-statuses: Pending Investigation, Pending Development, Awaiting Deployment.
  * Cases with the Pending Investigation sub-status should be displayed under **Open** cases with status as "Pending Engineering" and sub-status as "Pending Investigation".
  * Cases with the Pending Development or Awaiting Deployment sub-status should be displayed under **Cases with Bugs** with status as "Pending Engineering" and sub-status as "Pending Development" or "Awaiting Deployment" accordingly.
  
## [Enhanced Agent Workspace] Conversations of deleted agent cannot display predefined content
### Type: Bug fix (NAW 1.18) 

A bug has been discovered in the enhanced Agent Workspace, causing the Predefined Content widget to fail to load for conversations of deleted agents. This bug has been fixed, and the widget is now loading as expected for those conversations.

## [Enhanced Agent Workspace] Secure form reading indication
### Type: Bug fix (NAW 1.18) 

New indication is now displayed for viewed secure forms in the enhanced Agent Workspace.

![](img/week-of-september-14-6.png)

## [Enhanced Agent Workspace] Customer info widget was not loaded when accepting conversation from 'All Conversations’ tab
### Type: Bug fix (NAW 1.18) 

A bug has been discovered in the enhanced Agent Workspace, causing the Customer Info widget to fail to load when accepting conversations from the 'All Conversations' tab. This bug has been fixed, and the widget is now loading as expected for those conversations.

## [Enhanced Agent Workspace] All conversations list filter - agent names filter doesn't show results when searching for ‘deleted’
### Type: Bug fix (NAW 1.18) 

A bug has been discovered in the enhanced Agent Workspace, preventing users from using the search functionality to quickly look for deleted agents. This bug has been fixed, and deleted agents will now be shown when the 'deleted' value is in the search field.
(**Reminder:** to include deleted agents in the filter, users need to slide on the 'include deleted agents' button).

## [Enhanced Agent Workspace] All Conversations list filter fails when response time filter ‘from’ parameter is a negative number
### Type: Bug fix (NAW 1.18) 

A bug has been discovered in the enhanced Agent Workspace, causing the All Conversations filter to fail when filtering by response time with a negative number. This bug has been fixed, and the response time filter now works as expected for negative numbers.

## [Enhanced Agent Workspace] Conversation history not loading after step up
### Type: Bug fix (NAW 1.18) 

A bug has been discovered in the enhanced Agent Workspace, causing Step Up conversations to fail to load their history in the My Conversations tab and when searching for those conversations in the All Conversations tab. This bug has been fixed, and the history will now be displayed in both the conversation window and the Conversation History widget.




