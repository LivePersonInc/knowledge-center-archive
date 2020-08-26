---
pagename: Week of August 31st
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-august-week-of-august-31st.html
isTutorial: false
isNew: false
date: '2020-08-26'

---

These release notes include new features arriving August 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Free trial accounts] Onboarding dialog updates
### Type: Enhancement (LE UI 12.4)

Content updates have been applied to the **Welcome and Return** modals that free trial users using the enhanced Agent Workspace see when they first enter the Conversational Cloud and when they log back in. The modals now contain deep links to **Intent Manager** and **Proactive Messaging** and links to the Getting Started articles for both.

## [CoBrowse API] Additional CoBrowse and Voice/Video Call Dialog State Update When Consumer Joins
### Type: Enhancement (LE UI 12.4)

The custom CoBrowse integration via the Messaging Window API will receive a new dialog update event for the CoBrowse dialog. This new event will trigger when the consumer joins the CoBrowse session or voice/video call. The sessionState value will not change, therefore event listeners which act when sessionState is “ACCEPTED” will now act twice. Typical integrations do not act at all in this case and will therefore be unaffected. Those that do can also look at the notificationKey field which transitions from “accepted” to “joined” (case insensitive).

The updated developer documentation for CoBrowse can be found [here](https://developers.liveperson.com/messaging-window-api-tutorials-cobrowse.html). And for Voice & Video calls, [here](https://developers.liveperson.com/messaging-window-api-tutorials-voice-and-video-calls.html).

## [Mobile SDK] SDK support of XCFramework - new format of packaging frameworks
### Type: Enhancement (iOS SDK 6.0)

From iOS SDK version 6.0 and up, the SDK will [support the new XCFramework](https://developer.apple.com/videos/play/wwdc2019/416/). The new format packages all dependencies under all target platforms and architects into a single, unified bundle, removing the version-lock in swift as well as eliminating the need to build a fat framework. This means that the installation process for V6.0 and up, and V5.2.1 and down, will have different steps to follow. We have two quick start guides that are dedicated to the different processes, which will help you to install the relevant version on your app. 

**To enable:** 

Please see the [quick start guide](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-quick-starts-quick-start-6-0-and-up-xcframework-support.html) available in the Developer Center.

**Prerequesites:**
  * Bundle ID registered in an Apple developer account.
  * Xcode11 and above
  * Swift 5.1 and above

## [Mobile SDK] Supporting Xcode 12 beta version
### Type: Enhancement (iOS SDK 6.0)

In order to allow brands and their developers to prepare for iOS14 while building and getting ready with their apps for next iOS launch, this version will support compiling the app with Xcode 12 beta version and Swift 5.3.

**To enable:**

Please see the [quick start guide](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-quick-starts-quick-start-6-0-and-up-xcframework-support.html) available in the Developer Center.

## [Mobile SDK] Historical Data fetch (Masking)
### Type: Enhancement (iOS SDK 6.0)

This feature addresses the issue of inconsistent behavior in the mobile SDK historic transcript fetch, which led to having some conversations masked and others not masked. With the previous behavior, we pulled and fetched the closed conversations (in the last 14 days) from UMS and remaining closed conversations from INCA. This led to some concerns from brands that some closed conversations are not masked. With the new design flow, we improved the consumer experience on historical data masking and retrieved all the closed conversations from INCA. This will enable a consistent historic data fetch experience.

## [Mobile SDK] Update LPLogger to leverage Apple's Unified Logging
### Type: Enhancement (iOS SDK 6.0)

We now provide the ability to distinguish between LivePerson’s logs and other system logs by taking advantage of both Apple's logging levels and Apple’s OSLog object. Without disturbing our logging, we can bridge our logging levels with Apple’s, so brands can filter logs in Xcode's device manager: 
