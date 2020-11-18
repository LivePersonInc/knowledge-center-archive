---
pagename: Week of November 23rd
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-november-week-of-november-23rd.html
isTutorial: false
isNew: false
date: '2020-11-18'

---

These release notes include new features arriving November 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Agent App now fully available for both Android & iOS
### Type: Enhancement (Agent App - Android version 2.5.6)

The Agent App is now in GA for both Android and iOS.

New functionalities included in this version:
* Remember Account Id on login screen
* Structured Content is now viewable in conversations
* New tablet mode
* Multi back to queue

#### How to enable
Search for LivePerson Agent App on the Google Play Store or Apple App Store and download the app 
[Agent App on Apple App Store](https://apps.apple.com/us/app/liveperson-agent-app/id1533849048)
[Agent App on Google Play Store](https://play.google.com/store/apps/details?id=com.liveperson.LiveEngageMessaging)

Please note: 
In the future the following functionality will added
- SSO
- Network effect support
- Automotive specific feature support

Please see the [user guide](https://knowledge.liveperson.com/agent-manager-workspace-agent-app-agent-app-user-guide.html)for more information.

## Public API Transfer Conversation failure for existing skill 
### Type: Bug fix (Third Party Bot Connectors - Version 2.24)

When a customer tried to use the Transfer command of Public API with existing skills,  they received the skill not found error in response. 
This issue has fixed that transfer problem and skills are recognized if exists on the Conversational Cloud platform. 

## Fix SDE fetching logic
### Type: Bug fix/Improvement (Third Party Bot Connectors version 2.24.6)

The process to fetch SDE by the third Party bot platform experienced some recurring failures due to a race condition. As the SDEs are not always present the moment the Bot platform gets the conversation creation event, it was experienced that during the fetching process, it received errors due to missing SDEs. In addition it was established that the platform unnecessarily retrieves SDEs after a bot restarted. 
The fix fetches the SDEs retrieval after the first message the bot receives/send. At this time the SDEs are already set. We also now check if the SDEs are already retrieved to prevent unnecessary calls.

## Fix faas Hooks
### Type: Bug fix/Improvement (Third Party Bot Connectors 2.24.6)

Due to some changes made on calling Functions, the hooks functionality was broken. We updated the hook handling to fix the issue and additionally added tests to ensure the implementation of the hooks is always functioning properly.
The integration tests are simulating real faas functions calls which makes them more reliable.

## Limit the maximum number of open bot convs to 999 
### Type: Bug fix (Third Party Bot Connectors Version 2.24.9 Worker 2.24.5 API)

With this Hotfix, LivePerson will now limit the number of open conversations per one bot to 999 max. 
Any new conversation arriving after hitting the limit will be error escalated with a new error type, as described in the [Developers Center.](https://developers.liveperson.com/third-party-bots-bot-conversation-errors.html#comlivepersonbot-connectors-workererrorpipesconversation-limit-checkermax-conv-limit-reached)
This behaviour is also documented [here](https://developers.liveperson.com/third-party-bots-getting-started.html) 

This new error can be found inside the Conversation Errors TAB on the Bot View Dashboard, see screenshot below.

![](img/RN-week-of-nov-23-1.png)

## Close/transfer conversations on bot stop not working properly 
### Type: Bug fix (Third Party Bot Connectors Version 2.24.9 Worker 2.24.5 API)

Currently, if a bot is stopped, the customer has an option to close or transfer all currently connected conversations. However, if one of these conversations fails to close/transfer, the action is aborted. With this fix we will ensure to perform the desired actions on all connected conversations, even if something fails in the meantime.

## [Messaging Window] Configuration to collapse message history when loading new conversation
### Type: Enhancement (Web experiences 10.6)

As part of an effort to improve load times for a new conversation, we have added the ability to hide older messages behind a button. The two most recent conversations will show in the window and each conversation can be displayed by pressing the “Show Previous” button. If the consumer does not have more than two previous conversations, the button will not show. This feature allows for faster loading of the message window while still having older conversations available to the consumer. Transcripts will function as they always have, printing the entire text conversation. 

**Customization:** Brands are able to customize the look and feel of the “Show Previous” button based on the following CSS properties within the Window Customization API:

![](img/week-of-november-23rd-2.png)

![](img/week-of-november-23rd-1.png)

{: .notice} 
**Please note:** This feature requires backend enablement. Please contact your LivePerson representative for more information. 

## [Messaging Window] WCAG 2.1 AA / Accessibility Remediation
### Type: Enhancement (Web experiences 10.6)

The Web Experiences team is partnering with a website accessibility firm to remediate, validate, and ultimately certify the LivePerson consumer experience as WCAG 2.1 AA compliant.  To reach WCAG 2.1 AA compliance, we will be deploying fixes to the consumer experience over the next few months that will incrementally get us to certification.  

Please note that issues that are remediated and validated under WCAG 2.1 AA compliance only apply for the default engagements, window themes, and out-of-the-box features/taglets within the consumer window. Any Brands that utilize custom windows, taglets, and engagements, should be reviewed and updated by the customer, or their representative, to meet WCAG 2.1 AA compliance. 

## [Messaging Window] Updated input field description for Android
### Type: Bug fix (Web experiences 10.6)

The input field descriptive text on Android is now consistent with all other Web Messaging descriptive text.

## [Messaging Window] Rich carousel navigation issue
### Type: Bug fix (Web experiences 10.6)

This bug has been resolved and rich carousels now navigate appropriately when set to right-to-left (RTL).

## [Messaging Window] Text box disappearing on mobile Web Messaging
### Type: Bug fix (Web experiences 10.6)

On mobile web, scrolling no longer results in the text entry box disappearing. This bug has been resolved. 

## [Messaging Window] iOS mobile web enhancement 
### Type: Bug fix (Web experiences 10.6)

A bug has been resolved to optimize sending a message on iOS mobile web.

## [Messaging Window] Issue with scroll in the messaging window
### Type: Bug fix (Web experiences 10.6)

This bug has been resolved and the messaging window now scrolls on iOS mobile web when the keyboard is visible. 

## [Messaging Window] Messaging window spacing 
### Type: Bug fix (Web experiences 10.6)

The gap has been adjusted between the messaging window and keyboard for mobile Safari and Chrome on iPhone X.

## [Messaging Window] Duplicate timestamps in transcript
### Type: Bug fix (Web experiences 10.6)

This bug has been resolved and the printed transcript no longer shows duplicate timestamps.

## [Messaging Window] Auto close window disappearing 
### Type: Bug fix (Web experiences 10.6)

Under auto-close conditions, a minimized window can now be maximized without disappearing.

## [Messaging Window] HTML output
### Type: Bug fix (Web experiences 10.6)

The word “span” no longer produces an HTML output when used in a message.

## [Messaging Window] Window reappearing on new page
### Type: Bug fix (Web experiences 10.6)

After ending an authenticated conversation, the window will not appear when the consumer navigates to a new page.
