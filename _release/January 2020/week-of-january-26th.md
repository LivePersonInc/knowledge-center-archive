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

## Block SubscribeExConversations from the SendAPI Connector API
### Type: Bug fix [UMS 3.25]
Before this fix, you could subscribe to ExConversationNotifications using SendAPI (ConnectorAPI), which didn’t produce any notifications (due to the sendAPI HTTP nature). It did however, create the subscription which was never deleted from the subscriptions map. This issue has now been resolved.

## Add @NotNull to required fields to provide the proper request validation 
### Type: Bug fix [UMS 3.25]

Due to the wrong implementation customer sent to UMS requests without `message` field.
Now such requests are rejected on the validation step due to the new restriction added, making this field a mandatory one.

## [UI hotfix] Visit info widget fields are overlapping
### Type: Bug fix [LE UI 11.4]

A bug has been discovered in the “Visit info” widget for users of live chat and the old agent workspace. It appears that sometimes, some of the widget fields and titles are overlapping. This bug has been resolved.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-january-26th-hotfix.png)
