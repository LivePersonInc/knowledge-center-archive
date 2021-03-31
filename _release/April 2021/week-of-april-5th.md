---
pagename: Week of April 5th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-march-week-of-march-22nd.html
isTutorial: false
isNew: false
date: '2021-03-31'

---

These release notes include new features arriving March 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Agent Assist]  Customize the messages for join/remove bot 
### Type: Enhancement (Conversation Orchestrator)

In Agent Assist, when a bot is joined to or removed from a conversation, a message is sent to the consumer.
![](img/RN-22april-CO1.png)
You can now customize these join/remove messages. For example, you might want to change the language that’s used.
Customization is done within Agent Assist’s configuration for bots:
![](img/RN-22april-CO2.png)

## [Agent Assist] Fixes to remove bot and replace bot
### Type: Bug fix (Conversation Orchestrator)

* Fixed the issue where the "Remove bot" UI button block was added to all conversations when the bot only joined one of the conversations.
* Fixed the issue where the bot name was missing in the “Remove bot” UI button block.
* Fixed the issue where multiple bots were allowed to join the same conversation. After this fix, only one bot is allowed in a conversation, and the agent must click the “Replace bot” button to switch to another bot.
