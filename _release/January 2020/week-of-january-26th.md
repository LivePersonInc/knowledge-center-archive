---
pagename: Week of January 26th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-january-week-of-january-26th.html
isTutorial: false
isNew: false
date: '2020-01-22'

---

These release notes include new features arriving to LiveEngage during January 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Proactive Messaging updates  
### Type: Enhancement
Proactive messaging is no longer is early access mode and will be available to all our customers by default.
For more information on Proactive Messaging please see the [overview document.](https://knowledge.liveperson.com/messaging-channels-proactive-messaging-proactive-messaging-overview.html)

**Self-service onboarding** -  A simpler, self-service onboarding option is available to brands at this point and will be the new route for brands to onboard to Proactive Messaging. 
Updates to Proactive messaging onboarding include:
- Reliable routing using LiveEngage Engagement in the backend
- First outbound message is now part of the conversation transcript instead of a widget
- Full set of LiveEngage skills available when scheduling the proactive campaign (no longer need to manually on-board new skills)
- Full set of approved WhatsApp message template when scheduling a proactive campaign (no longer need to manually on-board new message template)
- Ability to choose what number to send the outbound message from for both SMS and WhatsApp (no more manual hard-code configuration to set the send from number)
 
**Scheduling guardrails** -  To help brands to stay in compliance, we ensure that the tool only sends outbound messages to recipients within the compliance timeframe based on the recipient's time zone. This is determined based on their phone number's country code and area code. Brands can customize this time window to their preference but the default time window is 8am-9pm. For example, a proactive campaign starts at 8pm PST sending outbound message to recipient in New York City, EST time zone. Our tool will smartly determine that it is outside of the allowed send window for the recipient, put the message in the queue with Scheduled status, then attempt to send the message the next day at 8am EST for the recipient.
 
**Generic opt-out service for Proactive Messaging** - if a consumer opts out in SMS for a particular brand, we will ensure no future outbound message will be sent to that consumer unless they re-opt-in. We ensure to honor this including in the case where brands have multiple siteIDs and phone numbers. 
Once a consumer opts out from a brand's phone number or siteIDs, they are considered opted out for all of the brand's phone number and siteIDs. 
 
**GDPR** - We are fully GDPR compliant. If a consumer requests to be forgotten, we will honor it per LivePerson's standard. 
 
**Support multi-regions** - We are on AWS US-West and are adding an instance in EMEA as we speak. We will be adding another instance in APAC in January (currently there is no customer in APAC). 

**LPA access** - This enables LivePerson to to troubleshoot issues for brands using LivePerson Account elevated access to the tool. 

## Markdown hyperlinks 
### Type: Enhancement [UMS 3.25] 

Adds a new API feature allowing customers to specify their support for Markdown Hyperlinks. This is available to all customers. 

## Encryption enhancement of data 
### Type: Enhancements [UMS 3.25]
IDP auth JWT has now the entire lp.ext cyphered, and not only lp_sdes fields. UMS is now supported this new way of encryption. 

{: .notice}
The old way of encryption is also still supported.

## Rest over websocket UMS Consumer API V3 now returns 400 
### Type: Bug fix [UMS 3.25]
Rest over websocket UMS Consumer API V3 now returns 400 (instead of 500) when trying to use URL of API V2.
Description: URL of API V2 should contain JWT in the URL, API V3 - shouldn’t. When there is a mismatch in these combinations, a 500 error was returned. This caused retries from the front-end implementation. 
Now UMS returns the proper 400 response.    

## Initial subscription should return empty list only to Administrator or Campaign Manager (logic is based on the wrong privilege)
### Type: Bug fix [UMS 3.25]

Some agents stopped seeing conversations in LE UI. It appeared that they’ve removed from these agents the privilege, which UMS considered to be an indicator of an Administrator or Campaign Manager, which shouldn’t see conversations at all. 
Now the code relies on a set of hardcoded/hidden privileges, to identify Administrator and Campaign Manager.

## Block SubscribeExConversations from the SendAPI Connector API [UMS 3.25]
### Type: Bug fix [UMS 3.25]
It was allowed before this fix to subscribe to ExConversationNotifications using SendAPI (ConnectorAPI), which didn’t produce any notifications ( due to the sendAPI HTTP nature ), but created the subscription, which was never deleted from the subscriptions map. 
This issue has now been resolved.

## Add @NotNull to required fields to provide the proper request validation [UMS 32.5] 
### Type: Bug fix [UMS 3.25]

Due to the wrong implementation customer sent to UMS requests without `message` field.
Now such requests are rejected on the validation step due to the new restriction added, making this field a mandatory one.

## [UI hotfix] Visit info widget fields are overlapping
### Type: Bug fix [LE UI 11.4]

A bug has been discovered in the “Visit info” widget for users of live chat and the old agent workspace. It appears that sometimes, some of the widget fields and titles are overlapping. This bug has been resolved.

![](img/week-of-january-26th-hotfix.png)
