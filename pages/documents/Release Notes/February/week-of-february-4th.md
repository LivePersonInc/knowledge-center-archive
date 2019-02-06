---
pagename: 'Week of February 4th '
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: February
permalink: release-notes-2019-february-week-of-february-4th.html
isTutorial: false
isNew: false
date: 2019-02-05 14:15:21 +0200
published: true

---
These release notes include new features arriving to LiveEngage during February 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New Feature

### Auto close per skill (AE-1358)

<table> <thead> <tr class="categoryrow"> <th><img class="tableIcon" src="img/mobileappmessaging.svg" /></th> <th><img class="tableIcon" src="img/web-messaging.svg" /></th> <th><img class="tableIcon" src="img/abc.svg" /></th> <th><img class="tableIcon" src="img/sms.svg" /></th> <th><img class="tableIcon" src="img/fb-messenger.svg" /></th> <th><img class="tableIcon" src="img/whatsapp.svg" /></th> <th><img class="tableIcon" src="img/google-rsc.svg" /></th> <th><img class="tableIcon" src="img/line.svg" /></th> <th><img class="tableIcon" src="img/messaging-window-api.svg" /></th> <th><img class="tableIcon" src="img/connector-api.svg" /></th> </tr> </thead> <tbody> <tr> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>No</td> </tr> </tbody> </table>

Enable the auto close delay per skill feature to allow brands a higher level of flexibility in order to  determine when a conversation should close. This will avoid scenarios where conversations get closed too soon and takes into account the fact that different skills have different conversation paces. With auto close per skill, brands are able to set a different auto close time period parameter per skill and thereby improve the consumer experience as well as their operational parameters.

Enabling this feature is available through Houston only. Contact you LP representative to configure auto close per skill. Once this feature is enabled, the time parameter can be set per skill through LiveEngage.

![](/img/week-of-february-4th.png)

**Dependencies**

* Need to be using LE UI 10.3
* Need to be using ac-users 4.8 or 5.0

## Enhancements

### Align error responses to unified style (LE-94214)

**Available to all customers?** yes

**Description:**

When the “send API” composes the error message it should have a unified format and the error message should contain the request ID

**WS example:**

```
{

"kind": "resp",

"reqId": "39ca8b7a-4b4f-49ec-84be-a7eb74f2fa382-24350",

"code": 502,

"body": {

"title": "Unable to access resource",

"details": "Failed to connect to AC for setting delay",

"errorCode": 50201

},

"type": ".ReqBody$ErrorResp"

}
```

### Handle “Send API” request with wrong version (LE-94525)

**Available to all customers?** yes

**Description:**

If there is a “Send API request” using a version that is not currently supported (only version 3 is supported) then the client/caller should receive a status code 404.

## Bug Fixes

### Post conversation survey - no ExConversationChangeNotification for messages on survey dialog (LE-95168)

In post conversation survey flow - UMS does not send ExConversationChangeNotification for messages on post survey dialog which potentially caused message loss in the connector flows.

The solution is that on-going MS notification on Post Conversation Survey dialog are built as normal ExConvNotifications and sent only to the connectors. This means that the connectors can keep their current implementation without the need to be modified.

### Conversations closed with Post Conversation Survey (PCS) can't be reopened by the consumer (LE-95791)

In Post Conversation Survey flow, conversations which were closed with PCS can't be reopened by the consumer. This issue was relating to unauthenticated messaging flow while the blocking history setting was turned on. UMS has been requested in previous versions to support blocking of unAuth conversation messages and it was using the old conversation state which has been changed to support PSC to stage. The blocking mechanism has been aligned to support the stage status as well.

### Incorrect agents intensity after leader switch (LE-93861)

UMS jump on occasion caused wrong agent intensity calculation. This issue was resolved by adding an inner flag that notifies once the Kafka LPevents read has finished.

### SkillID no longer than 10 digits (CO-34)

Added SkillID validation so that there is a limitation of 10 digits.
