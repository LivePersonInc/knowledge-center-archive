---
pagename: Week of January 25th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-january-week-of-january-25th.html
isTutorial: false
isNew: false
date: '2021-01-20'

---

These release notes include new features arriving January 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Agent Assist enhancements 
### Enhancement [Conversation Orchestrator] 

**Channel:** This enhancement is available for all channels supported by the Conversational Cloud platform.

Conversation Orchestrator introduces two new enhancements to Agent Assist.
First, up to to five recommendations can now be made to the agent for a detected intent. Previously, only one recommendation could be made. The maximum number of recommendations is configurable, and the default value is 3.
In the following image, the agent is presented with two recommendations, one for a knowledge base article and the other for a bot.

![](img/Conv-orchestrator-jan-25-1.png)

Second, as before, Agent Assist recommends articles and bots to the agent based on the detected intent of the consumer. However, we’ve taken this one step farther. Now, when Agent Assist makes recommendations, it always does so based on not just the consumer’s intent, but also the conversation’s skill. This means you can map a slice of content to desired skills, and then recommend articles and bots based on the intent detected in the consumer utterance.

![](img/Conv-orchestrator-jan-25-2.png)

**Please note:** During setup, you must assign at least one skill to a knowledge base or bot for it to be used in recommendations. Enablement of the knowledge base or bot, which happens by default, is not enough. This is by design.
All knowledge bases and bots that were previously enabled before the release of this change are automatically mapped to all skills available for the account. You can change these at any time.

**Tip:** Take advantage of this skill-based feature change to facilitate your testing. Create a test skill to use to test Agent Assist before assigning a production skill to the knowledge base or bot.

## [Enhanced Agent Workspace] Add agentGroupName key to Agent Workspace Widget SDK
### Type: Enhancements (NAW 1.21)

The missing *agentGroupName* key was added to the *agentInfo* field in the Public Model Structure of the Agent Workspace Widget SDK.

## [Photo sharing] Support for key shortcuts and right-click menu
### Type: Enhancements (NAW 1.21)

The enhanced Agent Workspace now supports key shortcuts ("Ctrl+C" / "Ctrl+V") and the right-click menu for the photo sharing feature. 

## [Enhanced Agent Workspace] Enhanced design for Private Messages and Bot Escalation Summary
### Type: Enhancements (NAW 1.21)

Private Messages and Bot Escalation Summary messages now have enhanced design in the enhanced Agent Workspace. This enhanced design will allow agents to spot these messages within the transcript easily and prevent confusion with other messages.

![](img/week-of-january-25th-1.png)

## [Enhanced Agent Workspace] Expired image indication
### Type: Enhancements (NAW 1.21)

The enhanced Agent Workspace now displays an indication for expired images (like Facebook stickers, unreached image links, etc.).

![](img/week-of-january-25th-2.png)

![](img/week-of-january-25th-3.png)

## [Enhanced Agent Workspace] Agent Widget SDK 'SendFile' command not honoring 'Send files to consumers from custom widgets' permission 
### Type: Bug fix (NAW 1.21)

When working with custom widgets, there are many methods you can utilize in the agent widget SDK. A bug has been discovered In the enhanced Agent Workspace for custom widgets that use the command method “SendFile” - this command used to ignore the  'Send files to consumers from custom widgets' permission when trying to send a file. This bug has been fixed, and this method is now working as expected.

## [Consumer Info widget] SKU field presented as NULL
### Type: Bug fix (NAW 1.21)

A bug was discovered in the Consumer Info widget of the enhanced Agent Workspace. When an agent opens the Consumer Info widget, the text in the SKU field of the Shopping cart update section is presented as NULL, when the relevant data is empty. This bug is now fixed and the field will not be presented when this data is missing.

## [All Conversations] Failing to filter by FCR for languages other than English 
### Type: Bug fix (NAW 1.21)

A bug has been discovered in the All Conversations area of the enhanced Agent Workspace. When a user is trying to filter by conversation FCR, and using a language other than English, relevant results are missing. This bug is now fixed, and the filter works as expected.

## [Enhanced Agent Workspace] Sending the "Less than" sign (<) results in text loss
### Type: Bug fix (NAW 1.21)

A bug was discovered in the enhanced Agent Workspace. When an agent sends a message that includes the "less than" sign (<) during a messaging interaction, the sign and any text after the sign are removed. This bug has been fixed, and a warning message will now be presented when suspicious text is found in the agent’s input.

![](img/week-of-january-25th-4.png)

## [All Conversations] Failing to filter by Post Conversation Survey name 
### Type: Bug fix (NAW 1.21)

A bug has been discovered in the All Conversations area of the enhanced Agent Workspace. When a user is trying to filter by Post Conversation Survey name, relevant results are missing. This bug is now fixed, and the filter works as expected.

## [Enhanced Agent Workspace] Agent Managers are not able to see secure forms on closed conversations
### Type: Bug fix (NAW 1.21)

A bug has been discovered in the enhanced Agent Workspace, preventing agent managers who do not have the agent role assigned to them from seeing secure form indications for closed conversations. This bug is now fixed, and managers with the ‘View secure form responses in Engagement History’ permission are able to see the secure form indication.

## [Enhanced Agent Workspace] Agent Managers not able to see double tick mark for some message types in closed conversations
### Type: Bug fix (NAW 1.21)

A bug has been discovered in the enhanced Agent Workspace, preventing agent managers, who do not have the agent role assigned to them from seeing the double tick mark indications (which represent the message delivered state) for the following message types in closed conversations:
* NPS
* CSAT
* Menu card

This bug is now fixed, and managers are able to see these indications.

## [Predefined Content] Preview overlaps the agents’ ability to select content from list
### Type: Bug fix (NAW 1.21)

A bug has been discovered in the enhanced Agent Workspace, causing the preview for long Predefined Content messages to overlap the Predefined Content widget and preventing the agent from selecting content from the list. This bug is now resolved.

![](img/week-of-january-25th-5.png)

## [Agent Survey] Survey cleared when bot survey ends
### Type: Bug fix (NAW 1.21)

A bug has been discovered in the Agent Survey widget in the enhanced Agent Workspace. When a field is selected in the agent survey and the bot survey ends, the selected field is being cleared out. This bug is now fixed, and the bot survey won’t affect the agent survey.

