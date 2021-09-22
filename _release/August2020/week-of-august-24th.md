---
pagename: Week of August 24th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-august-week-of-august-24th.html
isTutorial: false
isNew: false
date: '2020-08-20'

---

These release notes include new features arriving August 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Enhanced Agent Workspace] Enable Transfer "Rollback" from Rollover Accounts
### Type: New functionality (NAW 1.17)

A new functionality was added for Rollover accounts, letting agents to "Rollback" a conversation to another account in the account’s Rollover hierarchy. This functionality is useful for cases where the consumer needs to connect directly with the answering service from the layer above the current handler. 

## [Enhanced Agent Workspace] Update of CoBrowse API
### Type: Enhancement (NAW 1.17)

Custom CoBrowse integration via the Messaging Window API will receive a new dialog update event for the CoBrowse dialog. This new event will trigger when the consumer joins the CoBrowse session or Voice/Video Call. The sessionState value will not change, therefore event listeners which act when sessionSate is “ACCEPTED” will now act twice. Typical integrations do not act at all in this case and will therefore be unaffected. Those that do can also look at the notificationKey field which transitions from “accepted” to “joined”.

The updated developer documentation for CoBrowse can be found [here](https://developers.liveperson.com/messaging-window-api-tutorials-cobrowse.html). And for Voice & Video calls, [here](https://developers.liveperson.com/messaging-window-api-tutorials-voice-and-video-calls.html).

## [Enhanced Agent Workspace] All Conversations list filter - NPS survey filter doesn't contain 0 value
### Type: Bug fix (NAW 1.17)

A bug has been discovered in the All Conversations list filter of the enhanced Agent Workspace, causing the NPS survey to not contain the value 0 as an option. This bug has been fixed and conversations with NPS 0 value can now be filtered.

## [Enhanced Agent Workspace] All Conversations list - Device info is not getting updated for C4M conversations
### Type: Bug fix (NAW 1.17)

A bug has been discovered in the All Conversations list of the enhanced Agent Workspace, causing the consumer device to be unavailable for C4M conversations. This bug has been fixed and the consumer device will be shown as expected for those conversations.

## [Enhanced Agent Workspace] All conversations list - Engagement skill in Consumer Info widget not getting updating
### Type: Bug fix (NAW 1.17)

A bug has been discovered in the All Conversations list of the enhanced Agent Workspace, causing the engagement skill in the Consumer Info widget to always present “Unassigned”. This bug has been fixed and the engagement skill will be shown as expected.

## [Enhanced Agent Workspace] New message notification wouldn't disappear even when the agent read message and sent reply 
### Type: Bug fix (NAW 1.17)

A bug has been discovered in the enhanced Agent Workspace, causing the new message notification to be displayed even when the agent read the message and sent a reply. This bug has been fixed and the notifications will disappear in the relevant flows.

## [Enhanced Agent Workspace] Bot Escalation Summary - Private Message indication is missing in case there are other bot messages after the escalation summary
### Type: Bug fix (NAW 1.17)

A bug has been discovered in the enhanced Agent Workspace, causing private message indication to be missing in cases when there are other bot messages after the escalation summary. This bug has been fixed and the private message indication will be added to the other messages as well.

## [Enhanced Agent Workspace] Connectors metadata couldn’t be retrieved in custom widgets
### Type: Bug fix (NAW 1.17)

A bug has been discovered in the enhanced Agent Workspace, preventing custom widgets from retrieving connectors metadata.
This bug has been fixed and conversation's metadata can be retrieved again along with the following fields:
* metadata.connectorAuthResponse
* metadata.connectorPaymentResponse

Like [here](https://developers.liveperson.com/agent-workspace-widget-sdk-public-model-structure.html) for more information. 

