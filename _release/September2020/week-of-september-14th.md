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




