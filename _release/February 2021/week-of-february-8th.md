---
pagename: Week of February 8th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-february-week-of-february-8th.html
isTutorial: false
isNew: false
date: '2021-02-03'

---

These release notes include new features arriving February 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [iOS SDK] Error reporting enhancements 
### Type: New Functionality (iOS SDK 6.2)

The new SDK error reporting will allow brands to better understand what failures they are seeing, and how they might be fixed. The SDK will emit a unique error code that will help troubleshoot the issue with descriptions of the errors.

## [iOS SDK] Proactive and IVR deflection to App Messaging
### Type: New Functionality (iOS SDK 6.2)

As we continue to enhance the Proactive and IVR to Messaging solutions, App Messaging is a new channel we added to our offering that currently supports SMS and WhatsApp. Brands using the Mobile SDK and allowing their consumers to message them through their app, will now be able to send outbound messages to their consumers via the app. 

**Enablement** 
To integrate Proactive or IVR Deflection to App messaging, brands must follow these configurations steps when implementing the SDK (minimum version iOS SDK 6.2): 
* Make sure the brand app already has push notification set up in order to enable their consumers to receive notifications. You can find detailed instructions on how to set up LivePerson's push notification service [here](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-push-notifications.html).

**Limitations**
* Currently the proactive messages only work for notifications that are received when the application state is not active and the notifications are tapped.

## [iOS SDK] Send Push Notification in logout state - new Logout API
### Type: New Functionality (iOS SDK 6.2)

Consumers can now receive push notifications even in logged out state from the app. The Mobile SDK has introduced a new enum configuration to let brands decide If they want consumers to receive notifications even when logged out. 

**Enablement** 
Brands can choose either of the following configurations to unregister user from pusher:

```func logout(unregisterType: LPPusherUnregisterType, completion: @escaping ()->(), failure: @escaping (_ errors: [Error])->())```

***LPPusherUnregisterType***
* **All:** unregister for all types of push notification messages
* **None:** do not unregister from the pusher at all
* **Agent:** Unregister only for agent push notification messages. Consumers can still receive outbound push notifications sent from the Proactive or Connect to Messaging (IVR) services.

## [iOS SDK] Rendering links in hiMessage and Welcome Message: 
### Type: New Functionality (iOS SDK 6.2)

The iOS mobile SDK will now support rendering links automatically when adding them in the hiMessage and Welcome Message. Now, When setting a URL(https:), sms:, tel:, facetime: or facetime-audio:, as part of the Welcome Message text or "hiMessage" string, these elements will by highlighted as links.

**Limitations**
* This change only adds support to url, sms, tel, facetime, facetime-audio, and doesn't cover hyperlinks format.

![](img/week-of-february-8th-1.png)

## [iOS SDK] LPConfig property inputTextViewContainerBackgroundColor is not respecting color
### Type: Bug fix (iOS SDK 6.2)

Fixed a bug where setting inputTextViewContainerBackgroundColor color to clear, it will surface hidden UI elements. This bug has been resolved. 

## [iOS SDK] LPConfig property conversationBackgroundPortraitImage is not changing image
### Type: Bug fix (iOS SDK 6.2)

A bug was found causing the background image to not change when setting LPConfig conversationBackgroundPortraitImage. This bug has been resolved. 

## [iOS SDK] Gap in background color on SDK messaging window
### Type: Bug fix (iOS SDK 6.2)

A bug where there was a gap of white space surrounding the conversation separator on SDK iOS 6.1.0.747. This bug has been resolved. 

## [iOS SDK] Loading screen is not showing after resuming conversation after logout
### Type: Bug fix (iOS SDK 6.2)

A bug was found where the loading screen was not showing after resuming conversation after logout. This bug has been resolved.

## [iOS SDK] Unread message divider is not showing for one unread message
### Type: Bug fix (iOS SDK 6.2)

A bug was fixed where an unread message divider was not showing for one unread message. 

## [iOS SDK] File/Photo preview not updated when network unreachable 
### Type: Bug fix (iOS SDK 6.2)

A bug was found  where If a consumer loses connection while sending an image/file, the image/file sent did not display the error icon to indicate the image/file was not sent. Now when an image/file cannot be sent to a network issue the consumer will see the failure indication. 

## [iOS SDK] Brand Avatar not displaying inWindow Mode
### Type: Bug fix (iOS SDK 6.2)

A bug was found when using the brandAvatarImage configuration, causing the image to not be displayed on the navigation bar of the conversation screen. Now, It will be displayed in the same position as the Agent Avatar when the consumer is having a conversation.

## [iOS SDK] Scroll to bottom issue when conversation screen is loaded and has content but screen does not scroll all the way down 
### Type: Bug fix (iOS SDK 6.2)

A bug was found when the conversation screen was loaded with content, the screen did not scroll down to bottom although the scroll to button configuration is set to bottom. This bug has been resolved. 

## [iOS SDK] Closed conversation divider is displayed in auto closed conversations
### Type: Bug fix (iOS SDK 6.2)

A bug was found where closed conversation dividers were displayed in auto closed conversations, although it should not be displayed in auto closed conversations by default. We also added a new configuration that allows brands to decide if they want to show the divider or not in case of auto closed conversations. 
 
**Enablement** 

New configuration **enableConversationSeparator** will allow brands to control if the whole separator view should be displayed or not, this is how the old configurations would work:
* enableConversationSeparatorTextMessage: enables separator text message when conversation resolved from agent or consumer.
* enableConversationSeparatorLine: enables a separator line when conversation resolved from agent or consumer.

ee the new configuration in the [Developer Center](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-sdk-attributes-sdk-5-0-and-above.html#conversations)
 
**Note:** Separator Text and Line won't be displayed if enableConversationSeparator is disable, even if  enableConversationSeparatorTextMessage or enableConversationSeparatorLine are enabled

## [iOS SDK] Encryption Recovery - Reset user messaging cache 
### Type: Bug fix (iOS SDK 6.2)

When a user logs in and the encryption keys have either failed or are not set in place, the data store was unable to be retrieved by Core Data. The SDK is unable to decrypt the messages.

To fix this we created a service responsible for deleting the local cache in stages, while resetting the user encryption key:
* All data
* User only data
* Brand only data
* Specific user relevant data

## [iOS SDK] Fixing input text view cut off on the right side in file preview view
### Type: Bug fix (iOS SDK 6.2)

A bug was discovered where in the file preview, the input text view is cut off partially on the right side. This bug has been resolved. 
