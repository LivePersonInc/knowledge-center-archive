---
pagename: Week of June 7th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-june-week-of-june-7th.html
isTutorial: false
isNew: false
date: '2021-06-02'

---

These release notes include new features arriving June 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## A new Universal interaction (Beta)
### Type: New feature [Conversation Builder Release 2021_7.0]

**Available to all customers?** Yes

**Channels**: This new feature is available for all channels supported by the Conversational Cloud platform.

Conversation Builder introduces a new Universal interaction that offer your brand a way to add a cutting-edge interaction in a channel that you want to implement in your bot, and the ability to fast track its usage now, before support for it is added to the Statement and Question interactions in Conversation Builder.

**Note**: The Universal interaction is in Beta release, and currently it’s only available for the Web messaging channel.

Designed for advanced bot developers, the Universal interaction is a flexible, channel-agnostic, code-based interaction that brands can customize to render any conversational response from the bot.

![](img/CB-RN-June7-add.png)

This powerful, new interaction opens up many more opportunities to achieve the exact layout and styling that your brand requires. For example, add a vertical card layout or perhaps a button question that uses just buttons (images) without button labels (text).

To use this code interaction, add it to your brand's bot, and enter the appropriate JSON code within it. You are limited only by what’s supported by the Conversational Cloud, as the JSON must adhere to the Conversational Cloud rich message format. Templates that you can quickly copy are provided to accelerate your coding efforts.

![](img/CB-RN-June7-add1.png)

To fully test a Universal interaction, use a deployed bot.

**Note**: The Universal interaction isn’t intended to replace the Statement and Question interactions in Conversation Builder. For fast and easy bot development, LivePerson recommends that you always use them whenever they meet your requirements.

## More flexibility when sending post-conversation surveys
### Type: Enhancement [Conversation Builder Release 2021_7.0]

In a previous release, we added support for an account-level Survey Request Interval setting, so you can control how often a consumer is sent a post-conversation survey when one is triggered. In this release, we enhance the setting to give you more flexibility.

As an example, assume you have surveys A, B and C, and you enable this setting with a value of 20 days:

As before, you can apply the setting to all bots collectively, i.e., at the account level. So, if the consumer receives survey A, they will not receive survey A again, or receive surveys B and C, until 20 days have passed.
However, now, you can also choose to apply the setting to each bot individually, i.e., at the survey bot level. In this case, if the consumer receives survey A, they will not receive survey A again until 20 days have passed. During this time, they still might receive surveys B and C.

Tip: You enable the Survey Request Interval setting in the Bot Accounts application.
![](img/CB-RN-June7-2.png)

## A redesigned Conversation Tester
### Type: Enhancement [Conversation Builder Release 2021_7.0]

This enhancement is available for all channels supported by the Conversational Cloud platform.

We’ve redesigned the Conversation Tester. In this release, you’ll find a fresh, new look-and-feel that aligns with Conversation Builder. What’s more, you’ll find the new UI makes the tool faster and easier to use.

![](img/CB-RN-June7-3.png)

## LivePerson NLU engine supports Spanish 
### Type: Enhancement [Intent Builder Release 2021_7.0]

This enhancement is available for all channels supported by the Conversational Cloud platform.

In this release, LivePerson broadens the language support for its LivePerson Natural Language Understanding (NLU) engine: Spanish is now a supported language.

## AI Annotator - Increase number of AI Tasks max exported rows to 50,000 (AE-17682)
### Type: Enhancement [NAW version 1.28]
As customers continuously adopt AI Annotator, more and more annotations are created. Since in many cases, bot tuning activities are managed through a spreadsheet, LivePerson needs to provide the ability to download more rows than is now possible (5,000) when exporting submitted annotations. 

## Enhanced Agent Workspace - Prevent Transfers within the same skill (AE-17568)
### Type: Enhancement [NAW version 1.28]

To prevent abusing the system and provide a better customer experience, the ability to prevent transfers within the same skillis is now supported in the enhanced agent workspace for messaging.
Accounts with this feature On, will have the following behavior while transferring conversations:
1.  When transferring by skill - The destination skills list wouldn't contain the conversation skill.
2.  When transferring by agent - 
a) The conversation skill cannot be transferred to any other skills - The destination agents list would be empty.
b)  The skill can transfer to all skills - The destination agents list would contain only agents without skills assigned to them or that have at least 1 skill different than the conversation skill assigned to them.
c) The skill can transfer only to specific skills - the destination agents list would contain only agents that have at least 1 skill from the allowed skills list, that is different from the conversation skill, assigned to them.

### How to enable
To enable this feature, please contact your LivePerson account team

## Enhanced Agent Workspace - Displaying Consumer Profile Picture for 3rd party connectors conversations (AE-16566)
### Type: New feature [NAW version 1.28]

**Available to all customers?** No, only for accounts configured with 3rd party connectors

A new capability is now supported in the enhanced agent workspace for messaging - the ability to view consumer profile pictures for conversations sourced by 3rd party connectors (Instagram, Facebook, etc.).
The consumer profile will be available on the My Conversation list and in the conversation area for both My Conversation and All Conversation.

## Enhanced Agent Workspace -  Support CoBrowse, Voice and Video collaboration sessions in Rollover conversations (AE-17610)
### Type: Enhancement [NAW version 1.28]

**Available to all customers?** No. This feature will only apply to those accounts that are the designated Conversation Handler (Rollover) accounts.

The ability to start and participate in CoBrowse, Voice or Video Messaging collaboration  sessions in rollover conversations is now supported in the enhanced agent workspace for messaging.

## Enhanced Agent Workspace Accessibility -  A11Y Project Fixes
### Type: Bugfix

**Available to all customers?** Yes

During the last weeks, LivePerson worked on fixing A11Y issues that were found as part of regression A11y tests on the Conversational Cloud.
The following bug was fixed, and is included in NAW 1.28:
[AE-16821] Required ARIA child role is not present for multiple fields in 'Filter By' section present beside the search field.
[AE-17032] Transcript Area - Conversation Input Toolbar : Keyboard Access
[AE-17075] All Connections table Filters - Search Transcript: Form Label

## Enhanced Agent Workspace [Social Messaging]- Agents unable to send messages in conversations coming from Facebook (AE-17625/SM-1088)
### Type: Bugfix [NAW version 1.28]

**Available to all customers?** No. Social Messaging customers only.

A bug has been discovered in Social Messaging conversations, sourced from Facebook, causing agents to fail to reply to messages in these conversations.
This bug has been fixed, and agents are now able to reply to conversations from all sources.

## Enhanced Agent Workspace [Social Messaging] - Social Conversations are not displayed in the My Conversations List after getting accepted by the agent (AE-17651)
### Type: Bugfix

**Available to all customers?** Social Messaging customers only
A bug has been discovered in the enhanced Agent Workspace with Social Messaging conversations (Facebook/Twitter public conversations) causing them to not be added to the My Conversations List after getting accepted by the agent, and only appears back upon the user page refresh.
The bug has been fixed.

## Unified Window v10.9: Rendering Version 3.46, Unauthenticated Messaging Version 1.11, Secure Storage Version 3.13
### Type: Enhancement [WCAG 2.1 AA / Accessibility Remediation]

**Channel:** Web Messaging

*Note: The Web Experiences team is partnering with Deque, a website accessibility firm, to remediate, validate, and ultimately certify the LivePerson consumer experience as WCAG 2.1 AA compliant.  To reach WCAG 2.1 AA compliance, we will be deploying fixes to the consumer experience over the next few months that will incrementally get us to certification.  Please note that issues that are remediated and validated under WCAG 2.1 AA compliance only apply for the default engagements, window themes, and out-of-the-box features/taglets within the consumer window. Any Brands that utilize custom windows, taglets, and engagements, should be reviewed and updated by the customer, or their representative, to meet WCAG 2.1 AA compliance.*

[Window] Remediation of 42 issues related to keyboard navigation, focus indicators, alt text / aria labels, and screen readers compatibility:
* Action menu
* Emoji menu
* Consumer file sharing
* Consumer text area
* Slideout / Window Widget SDK

**Additional notes:**
The Liveperson.com URL has been removed from the Liveperson logo within the Action menu
[Rich Content] Remediation of 4 issues related to focus order, hidden elements, aria labels:
Quick Replies

[Rendering Taglet v3.46] Optimize keyboard navigation to embedded engagements

### Type: Bug fixes [Operational Excellence]
[UW 10.9, Unauth Taglet v1.11, Secure Storage v3.13] Message window opening in new tab even when first party storage set to true

Description - Using Incognito Mode in Chrome versions 85 and higher will now open in the same browser when unified.window.allow.first.party.storage is set to true.

### Type: Enhancement [Secure Storage v3.13]
Description - Optimization of window load time  
