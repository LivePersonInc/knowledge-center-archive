---
pagename: Week of May 10th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-may-week-of-may-10th.html
isTutorial: false
isNew: false
date: '2021-03-31'

---

These release notes include new features arriving May 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## User management module separation 
###  Type: New functionality [LE UI 13.0]

This is a technical change that will not impact customers. The user management module in LE UI was decoupled and separated from the main fe-framework project and now has a separate release and deployment lifecycle.
The translation files were also decoupled from the Languino project and are now contained within the separated users module - changes in translation files will require a new release of User management module.

#### How to enable: 
Running LEUI locally now requires a slightly different configuration, please contact your account team for more information

## Old Agent Workspace module separation 
### Enhancement[LE UI 13.0]

This is a technical change that will not impact customers. The Old Agent WS module in LE UI was decoupled and separated from the main fe-framework project and now has a separate release and deployment lifecycle.
The module translation files were also decoupled from the Languino project and are now contained within the separated Old Agent WS module - changes in translation files within the module will require a new release of Old Agent WS module.

#### How to enable: 
Running LEUI locally now requires a slightly different configuration, please contact your account team for more information

## Intent Panel [Performance Optimizer v1.3]
### Type: New functionality 

Type: New Feature 

Available to all customers? This feature is not available for all customers.  In order to access the Intent Panel, the brand must have purchased both Performance Optimizer as well as Intent Manager. 

The new Performance Optimizer Intent Panel creates an intent-focused view answering the question of how effectively an operation resolves its consumers’ intents, the customer experience impact, and provides clear and simple view(s) that prioritize areas of opportunity and provide clear action items to optimize the intent and operational performance.  These views will enable a Performance Optimizer user to understand the intent mix and nature of primary contact drivers into the operation and their evolution over time while identifying intents suitable for automation, increase efficiency and reduce operational expenditure. 

There are 3 primary components to the Intent Panel: 
1- A heatmap graphic that will visually prioritize automation opportunities by intent 
2- Automated text that contextualizes 4E performance by intent performance 
3- Intent classification metrics and graphics 

1- The Intent Panel allows users to view the following metrics within the heatmap by Intent for the LOB(s) selected: 

* Closed Conversations
* Closed Conversations % of Total
* Avg. Conversation Duration
* Agent Responses Per Closed Conversation
* MCS (normalized 1-100)

2- The Intent graphics shows the metrics below for the LOBs selected:
* Intentful Rate
* Classification Rate
* Total Messages
* Intentful Messages
* Classified Messages
* Unclassified Messages

3- The automated Intent Diagnostics section will include text that will contextualize performance and provide specific recommendations to improve performance leveraging intent data. 

### How to enable
The Intent Panel does not require enablement; however Intent Manager must be activated in order to view the data. 
Dependencies
Brands must have purchased and activated Conversational Cloud’s Intent Manager. 

### Limitations
The Performance Optimizer Intent Panel is only visible for brands who have purchased Intent Manager. In addition to having purchased and enabled Intent Analyzer, Performance Optimizer users must also have the relevant permissions (refer to Intent Analyzer enablement guide).

In the event either Intent Analyzer is not enabled or the user does not have permissions, the Intent Panel will display a call to action to enable (can be dismissed until such time as Intent Analyzer is enabled or user has permissions).

## New "Annotator" column in AI Tasks table and exported report (AI Annotator)
### Enhancements [Enhanced Agent Workspace NAW 1.26]

New column named "Annotator" was added between the "Bot" and "Time" columns of the AI Tasks table and the exported report, exposing the name of the annotating user.

## Allow Agent managers that are not agents to view secure forms for open conversations 
### Enhancements [Enhanced Agent Workspace NAW 1.26]

Agent managers who were granted with the “View secure form responses in Conversation History” permission, will now be able to view secure forms for both open and closed conversations (and not just closed conversations).

## Support Voice/Video calls from Agent Workspace when consumer is in connectors channel
### Enhancements [Enhanced Agent Workspace NAW 1.26]

#### Available to all customers? No, customers using relevant connectors only.
The purpose of this feature is to allow agents to be able to invite consumers to video and voice calls on connectors conversations (SMS, WhatsApp, FB etc). Via the various connector messaging channels, we will send a voice or video invitation (in English only) to the consumer (with a link), which will allow the consumer to tap on the invite link and join the voice or video session. The link will open in the device’s default browser, the browser will ask for camera and microphone permissions, then the consumer will be able to see and hear the agent.

## Removal of the Thumbs Up and Thumbs Down button in the Agent Assist UI [Agent Assist]
### Enhancements [Enhanced Agent Workspace NAW 1.26]
#### Available to all customers? Yes

The Thumbs Up and Thumbs Down button in the Agent Assist UI was removed.
Before:
![](img/RNNAW-May10th-1.png)
After:
![](img/RNNAW-May10th-2.png)

## "Remove bot" UI is appearing for System bots in the All Conversations tab unexpectedly [Agent Assist]
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]

Available to all customers? Yes

A bug has been discovered with Agent Assist in the All conversations list of the enhanced Agent Workspace, causing the Bot remove window to be shown for conversations that don't have bots added with Agent Assist, but just have a manager bot.
This bug has been fixed, and the "Remove bot" UI block will only appear when the "My Conversations" tab is selected.

## Invitation can be sent when one agent or agent managers are in a session [CoBrowse]
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]

Available to all customers? Yes

A bug has been discovered with CoBrowse in the enhanced Agent Workspace, allowing new invitations to be sent when one agent or agent managers are already in a session.
This bug has been fixed, and cobrowse, voice and video buttons  will be disabled when a session is already active between the consumer and another agent.

## Default agent message state [Social Messaging]
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]

#### Available to all customers? Social Messaging customers only

A Social Messaging conversation (originating from Facebook or Twitter) can consist of public messages (post/comment/tweet), private messages (Direct message/Messenger) or both.
For conversation that has both public and private messages, the agent can toggle between public and private replies. 
The default agent reply has been improved, and now set according to the last conversation’s message - whether it is an agent message or consumer response.

## Buttons disappear [Social Messaging] 
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]
#### Available to all customers? Social Messaging customers only

A bug has been discovered in Social Messaging conversations (Facebook/Twitter public conversations) - whenever the user navigates from an open conversation under “My Conversations” into “All conversations”, then go back to “My Conversations” list → some of the dedicated buttons of Social Messaging conversations disappeared, and only appears back upon user page refresh.
The bug has been fixed.

#### Screenshots
Image 1: “My Conversations” before the fix
![](img/RN-May10th-7.png)

Image 2: “My Conversations” after the fix: 
![](img/RN-May10th-6.png)

## Navigate to “All Conversations” shows the incorrect Social widget data (SM-854, AE-16748)[Social Messaging]
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]
#### Available to all customers? Social Messaging customers only

A bug has been discovered in Social Messaging conversations (Facebook/Twitter public conversations) - whenever the user navigates from an open conversation under “My Conversations” into “All conversations” and focuses on some conversation, the “Social Messaging” widget displays the wrong consumer information.
The bug has been fixed, and the widget now exposes the correct user’s data. 

#### Screenshots

Image 1: Conversation under “All Conversations” displays the wrong consumer information
![](img/RN-May10th-5.png)

## Accessibility -  A11Y Project Fixes
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]
#### Available to all customers? Yes

Duplicate ID's is defined in the page with id attribute: app. Tihs bug has now been fixed

## Fix delay message rendering in Conversation Tester [Bot Connectors 2.30.1]
### Type: Bug fix

Available to all customers? Y 

Proper rendering bot responses type delay inside the Conversation Tester feature. This issue has now been fixed

![](img/RN-May10th-1.png)

## Fix invalid parsed response errors for Dialogflow CX [Bot Connectors 2.30.1]
### Type: Bug fix
Users were seeing invalid parsed response error in the Conversation Tester, when the bot response does not have any parsed message or action. There will be a link to our documentation to help troubleshooting it.

![](img/RN-May10th-2.png)

## Rebrand Dialogflow V2 to Dialogflow ES [Bot Connectors 2.30.1]
Type: Enhancement 

All the UI labels that had Dialogflow V2 now will have Dialogflow ES. 

#### Bot Creation Wizard
![](img/RN-May10th-3.png)

#### Dashboard
![](img/RN-May10th-4.png)

