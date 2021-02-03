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

## [Marketplaces] Allow Providers to insert Merchant Brand Names into the Welcome Message 
### Type: New functionality (WX 10.7)

Provider accounts can now use a wildcard within the welcome messages based on the Merchant account’s configuration to provide a more personalized experience to a Network Manager driven conversation. This enhancement will display the Merchant’s configured Brand Name within the Provider defined welcome message, so that after the consumer starts a conversation with Merchant A, the welcome message is unique to Merchant A.  Given they engage with Merchant B, the welcome message can be specific to Merchant B. This allows consumers to feel confident they are messaging the correct brand, and for individual brands to showcase themselves within the provider messaging experience. 


## [Marketplaces] Collapse consumer message history when new conversation starts 
### Type: New functionality (WX 10.7)

Brands can now configure collapsing message history in the consumer window. Utilizing this option reduces initial window load time and improves consumer experience for consumers with long message histories. We will be slowly changing the default for all brands to collapse history in the coming months. This setting can be changed at any time in the Engagement Window Studio (Under the ![](img/week-of-february-8th-2.png) menu > Look and Feel section).

![](img/week-of-february-8th-3.png)

**Note:** These changes in Engagement Window will be available after the release of LEUI 12.7.

![](img/week-of-february-8th-4.png)

## WCAG 2.1 AA / Accessibility Remediation
### Type: Enhancement (WX 10.7)

The Web Experiences team is partnering with Deque, a website accessibility firm, to remediate, validate, and ultimately certify the LivePerson consumer experience as WCAG 2.1 AA compliant.  To reach WCAG 2.1 AA compliance, we will be deploying fixes to the consumer experience over the next few months that will incrementally get us to certification.  

Please note that issues that are remediated and validated under WCAG 2.1 AA compliance only apply for the default engagements, window themes, and out-of-the-box features/taglets within the consumer window. Any Brands that utilize custom windows, taglets, and engagements, should be reviewed and updated by the customer, or their representative, to meet WCAG 2.1 AA compliance. 

## [Window] NVDA screen reader announces characters twice
### Type: Bug fix (WX 10.7)

This bug has been resolved. 

## [Window] Pre-chat survey announces “aria-label” unnecessarily 
### Type: Bug fix (WX 10.7)

This bug has been resolved. 

## [Window] audio elements must have a captions track
### Type: Bug fix (WX 10.7)

This bug has been resolved. 

## [Mobile Web Window] Honoring bold and underline within messages 
### Type: Bug fix (WX 10.7)

When an agent sends a message that includes text that is bold and underlined, the window will now show the message to the consumer as both bold and underlined.

## [Mobile Web Window] Underline links in messages from consumer 
### Type: Bug fix (WX 10.7)

When a consumer sends a link in the mobile web window, the message will now appear as underlined text, can be clicked and opened, as expected of a link.

## [Mobile Web Window] Text formatting (bold, underline, italicized) does not show in consumer chat window 
### Type: Bug fix (WX 10.7)

When a consumer sends text in the mobile web window, the message will now appear with the correct formatting.

## [Authenticated Web] Resuming an auth web messaging conversation via the identities function does not work when 3rd party cookies are blocked 
### Type: Bug fix (WX 10.7)

When a browser blocks the window from opening up to resume an authenticated message, the window will appear in a minimized state on the webpage. When the consumer clicks on the minimized window, the window will open in a separate window as it does normally when cookies are blocked. Brands can configure this behavior within the taglet if this flow is sub-optimal.

## [[Window] Data Masking notification banner not showing in the window
### Type: Bug fix (WX 10.7)

Fixed an issue where the data masking banner was not displayed on chat or messaging window, note that data masking was and is working as expected. 

## [[Window] Web Messaging window makes duplicate shift-status-skill calls at "shift start" and "shift end" causing traffic spike on UMS
### Type: Bug fix (WX 10.7)

This bug has been resolved. 

## [[Window] Redundant calls for favicon if in external window
### Type: Bug fix (WX 10.7)

This bug has been resolved. 

## [CCPattern] Luhn check is missing from cleanCCPatterns taglet 
### Type: Bug fix (cleanCCPatterns v10.7)

This bug has been resolved. 

## [CCPattern] CleanCCPatterns taglet fails when REGEX contains a percentage symbol  
### Type: Bug fix (cleanCCPatterns v10.7)

It is now possible to use the % operation in REGEX without errors.

## [Unauthenticated Messaging] Unified.window.allow.first.party.storage now honors consumer clear history 
### Type: Bug fix (Unauthenticated Messaging v1.10)

When first.party.storage is set to true and a consumer clicks ‘Clear History’ in the action menu, the window will close and their conversation history will be empty when the consumer opens the messaging window again.
