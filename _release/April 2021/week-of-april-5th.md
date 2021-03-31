---
pagename: Week of April 5th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-april-week-of-april-5th.html
isTutorial: false
isNew: false
date: '2021-03-31'

---

These release notes include new features arriving April 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

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

## [LE UI] Hide self-provisioning from the UI
### Type: Enhancement (LE UI 12.9)

Later this year, the ability to self-provision Twilio numbers will be relaunched in the Management Console. This is the planned long-term approach to supporting self-provisioning. Support for self-provisioning will be phased out of the Campaign Builder / Data Sources area beginning with the feature change described here. Brands needing to provision a number during this change will work with their CSMs to receive the assistance of the SMS Distribution team. Please contact your LivePerson representative for more information. 

## [LE UI] Auto-close feature - new minimal valid value
### Type: Enhancement (LE UI 12.9)

The Auto-close feature has now a new minimal valid value of 10 minutes, instead of 25 minutes. Accounts can now configure the auto-close time to be lower than 25 minutes (but up to 10). 

![](img/week-of-april-5th-1.png)

![](img/week-of-april-5th-2.png)

## [LE UI] Agent Manager Permissions Granularity - Allow “Manage” or “Edit only” permissions for Agent Managers
### Type: Enhancement (LE UI 12.9)

Based on user enhancement requests from the field, we added the capability to separate the “Manage” and the “Edit only” permissions per Agent Manager. This allows the administrator to control, per Agent Manager, if this user has “Edit only” permissions, or “Manage” permissions, which also allows them to create new users or to delete existing users. The “Edit only” permissions will allow the user to edit skills, agent groups, profiles and users in groups only.

Turning on this feature will add 6 new Agent Manager permissions, which are “Edit Only” permissions. The change requires enablement, which means that there is no impact on any brand, unless turning this feature is turned ON. 

Please reach out to your LivePerson representative in order to activate this feature.

**Limitations:**

1. The new “Edit only ”permissions are NOT instead of the existing “Manage” permissions, but in addition to them. So the Admin or LP representative will need to turn Off the “Manage” permissions for Agent Managers with “Edit only” permissions.
2. Once this feature is enabled on the backend, When disabling it, the administrator or LP representative will need to turn off the “Edit only” permissions manually in order to go back to allow all Agent Managers the “Manage” permissions.

![](img/week-of-april-5th-3.png)

## [Enhanced Agent Workspace] Accessibility -  A11Y Project Fixes
### Type: Bug fix (NAW 1.24)

During the last several weeks, the team has worked on fixing A11Y issues that were found as part of regression A11y tests on the Conversational Cloud.

The following bugs were fixed, and are included in NAW 1.24:
* [AE-15410] In the Agent Survey, when no option is selected in question dropdown, then pressing tab after Additional comments, JAWS is not navigating to Submit button and reading the button
* [AE-15408] JAWS not reading question from 'Agent Survey ' panel, it is reading dropdown menu options, but not reading the question
* [AE-15407] JAWS not telling how to navigate overdue button, it is just reading the overdue time and not telling how we can go to overdue button
* [AE-15406] JAWS is reading 'press space to go to menus and then use arrow key to move forward' but by using arrow keys it is not moving to next smiley icon
* [AE-15405] JAWS not reading menu enabled or disabled from 'Conversation button ' menu
* [AE-15404] JAWS not reading customer name and Authenticated icon on web message window, focus is going directly to 3 dots menu icon
* [AE-15403] Using Tab JAWS  not reading the number mentioned with Overdue, Ongoing, In queue and Idle icons
* [AE-15402] JAWS is not reading the notification of incoming message, when the bell rings

The above bugs have been resolved. 

## [Enhanced Agent Workspace] Predefined Content line breaks not carrying over to input field 
### Type: Bug fix (NAW 1.24)

A bug was discovered in the enhanced Agent Workspace, causing Predefined Content that was created by importing it from a file, to not carry over line breaks. This bug has been fixed, and Pedefined Content of all types displays as expected.

## [Enhanced Agent Workspace] History Conversations fail to display image preview
### Type: Bug fix (NAW 1.24)

A bug was discovered in the enhanced Agent Workspace, causing images review to not be displayed in historical conversations under the Conversation History widget and the ones displayed above the conversation transcript. This bug has been fixed, and the images preview will load as expected for historical conversations.

## [Enhanced Agent Workspace] Agents cannot open the attachment for historical conversations
### Type: Bug fix (NAW 1.25)

A bug was discovered in the enhanced Agent Workspace, causing attachments to fail to load in historical conversations for agents who didn't handle these conversations, even when they were allowed to view these attachments. This bug has been fixed, and attachments now load successfully.

