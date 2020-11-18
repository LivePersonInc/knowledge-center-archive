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





