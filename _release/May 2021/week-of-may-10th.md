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
date: '2021-05-05'

---

These release notes include new features arriving May 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Intent Builder - Generating training phrases for intents
###  Enhancement [Conversation Builder 2021_6.0]

Adding training phrases to an intent can sometimes be a challenge, so in this release, we add a tool to help with this. Within an intent, provide just a single training phrase as the input, and the tool automatically generates additional phrases that are similar in meaning. The suggestions are based on actual utterances by your users.

Generating training phrases is useful when: 
You’re building out a LivePerson or third-party NLU domain that you’ve created from scratch.
You’ve converted a LivePerson (Legacy) domain to the LivePerson NLU engine, and now you need to increase the number of training phrases to meet the LivePerson engine’s minimum requirements.

Note:
To have access to this new tool, Intent Analyzer must be enabled for a domain (any domain) in your account, as the tool makes use of the data that it captures.
If you’ve enabled Intent Analyzer recently, expect the tool’s results to improve over time as more data is captured.
If you're a new customer, expect no results until suggestions can be offered based on utterances by your users. And here again, expect the tool's results to improve over time.

This enhancement is available for all channels supported by the Conversational Cloud platform.

## New Language - Spanish Latin American 
### Type: Enhancement [LEUI 13.0]
#### Available to all customers? The language configuration will be available to all customers. 

Account level language setting configuration: To configure an account’s Conversational Cloud UI language setting, change the language settings in the Users Model footnotes. User level language setting configuration: A user can override his/her language from the my details page, which is accessed through the user menu.

#### Description & Dependencies
Configuration of a new UI language of Latin American Spanish has been added. 
Once chosen, all UI modules that support this new language will appear in this language, while all other modules will remain in English. 
Please note that there is a dependency of the deployment of the language per module.
For a full list of supported languages for LivePerson products and tools, please visit the [Knowledge Center.](https://knowledge.liveperson.com/admin-settings-supported-languages.html)

## Set “Manage Groups” field to mandatory in the user profile 
### Type: Enhancement [LEUI 13.0]
#### Available to all customers? This enhancement will be available to all customers, to enable, please contact your LivePerson account team.

Today when Agent Manager users are being created or modified, they are created without being assigned to manage a group, when they should always be assigned to one. As a result, impacted users are not able to see the correct conversation and reporting data in the Conversational Cloud.
With this new enhancement, while creating the new user, it’s mandatory to assign him to a group, without a way to save changes if the user is not assigned to one.
Note - No changes for account with only one group.

## Intent Panel 
### Type: New functionality [Performance Optimizer v1.3]

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
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RNNAW-May10th-1.png)
After:
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RNNAW-May10th-2.png)

## "Remove bot" UI is appearing for System bots in the All Conversations tab unexpectedly (Agent Assist)
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]

Available to all customers? Yes

A bug has been discovered with Agent Assist in the All conversations list of the enhanced Agent Workspace, causing the Bot remove window to be shown for conversations that don't have bots added with Agent Assist, but just have a manager bot.
This bug has been fixed, and the "Remove bot" UI block will only appear when the "My Conversations" tab is selected.

## Invitation can be sent when one agent or agent managers are in a session [CoBrowse]
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]

Available to all customers? Yes

A bug has been discovered with CoBrowse in the enhanced Agent Workspace, allowing new invitations to be sent when one agent or agent managers are already in a session.
This bug has been fixed, and cobrowse, voice and video buttons  will be disabled when a session is already active between the consumer and another agent.

## Default agent message state (Social Messaging)
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]

#### Available to all customers? Social Messaging customers only

A Social Messaging conversation (originating from Facebook or Twitter) can consist of public messages (post/comment/tweet), private messages (Direct message/Messenger) or both.
For conversation that has both public and private messages, the agent can toggle between public and private replies. 
The default agent reply has been improved, and now set according to the last conversation’s message - whether it is an agent message or consumer response.

## Buttons disappear (Social Messaging) 
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]
#### Available to all customers? Social Messaging customers only

A bug has been discovered in Social Messaging conversations (Facebook/Twitter public conversations) - whenever the user navigates from an open conversation under “My Conversations” into “All conversations”, then go back to “My Conversations” list → some of the dedicated buttons of Social Messaging conversations disappeared, and only appears back upon user page refresh.
The bug has been fixed.

#### Screenshots
Image 1: “My Conversations” before the fix
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN-May10th-7.png)

Image 2: “My Conversations” after the fix: 
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN-May10th-6.png)

## Navigate to “All Conversations” shows the incorrect Social widget data (SM-854, AE-16748)[Social Messaging]
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]
#### Available to all customers? Social Messaging customers only

A bug has been discovered in Social Messaging conversations (Facebook/Twitter public conversations) - whenever the user navigates from an open conversation under “My Conversations” into “All conversations” and focuses on some conversation, the “Social Messaging” widget displays the wrong consumer information.
The bug has been fixed, and the widget now exposes the correct user’s data. 

#### Screenshots

Image 1: Conversation under “All Conversations” displays the wrong consumer information
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN-May10th-5.png)

## Accessibility -  A11Y Project Fixes
### Type: Bugfix [Enhanced Agent Workspace NAW 1.26]
#### Available to all customers? Yes

Duplicate ID's is defined in the page with id attribute: app. Tihs bug has now been fixed

## Fix delay message rendering in Conversation Tester 
### Type: Bug fix [Bot Connectors 2.30.1]

Available to all customers? Y 

Proper rendering bot responses type delay inside the Conversation Tester feature. This issue has now been fixed

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN-May10th-1.png)

## Fix invalid parsed response errors for Dialogflow CX 
### Type: Bug fix [Bot Connectors 2.30.1]
Users were seeing invalid parsed response error in the Conversation Tester, when the bot response does not have any parsed message or action. There will be a link to our documentation to help troubleshooting it.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN-May10th-2.png)

## Rebrand Dialogflow V2 to Dialogflow ES 
### Type: Enhancement [Bot Connectors 2.30.1]

All the UI labels that had Dialogflow V2 now will have Dialogflow ES. 

#### Bot Creation Wizard
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN-May10th-3.png)

#### Dashboard
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN-May10th-4.png)

## Transfer analysis in the Performance Messaging Dashboard.
### Type: Update [Analytics Builder 4.10] 

Due to the effect of this feature on dashboard loading times,a rollback was performed for this feature only. The feature will be redeployed later this quarter.
