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

## Mobile SDK 6.0 is now available

### Environment Requirements for iOS Mobile SDK 6.0
 * iOS Mobile Messaging SDK 6.0.0 is supported on iOS versions 11 through 13. 
 * iOS Mobile Messaging SDK 6.0.0 is available on Swift version 5.1.3 (swiftlang-1100.0.282.1 clang-1100.0.33.15), and Swift version 5.2.4 (swiftlang-1103.0.32.9 clang-1103.0.32.53)

## [Mobile SDK] SDK support of XCFramework - new format of packaging frameworks
### Type: Enhancement (iOS SDK 6.0)

From iOS SDK version 6.0 and up, the SDK will [support the new XCFramework](https://developer.apple.com/videos/play/wwdc2019/416/). The new format packages all dependencies under all target platforms and architects into a single, unified bundle, removing the version-lock in swift as well as eliminating the need to build a fat framework. This means that the installation process for V6.0 and up, and V5.2.1 and down, will have different steps to follow. We have two quick start guides that are dedicated to the different processes, which will help you to install the relevant version on your app. 

**To enable:** 
Please see the [quick start guide](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-quick-starts-quick-start-6-0-and-up-xcframework-support.html) available in the Developer Center.

**Prerequesites:**
  * Bundle ID registered in an Apple developer account.
  * Xcode11 and above
  * Swift 5.1 and above

## [Mobile SDK] Historical Data fetch (Masking)
### Type: Enhancement (iOS SDK 6.0)

This feature addresses the issue of inconsistent behavior in the mobile SDK historic transcript fetch, which led to having some conversations masked and others not masked. With the previous behavior, we pulled and fetched the closed conversations (in the last 14 days) from UMS and remaining closed conversations from INCA. This led to some concerns from brands that some closed conversations are not masked. With the new design flow, we improved the consumer experience on historical data masking and retrieved all the closed conversations from INCA. This will enable a consistent historic data fetch experience.

## [Mobile SDK] Update LPLogger to leverage Apple's Unified Logging
### Type: Enhancement (iOS SDK 6.0)

We now provide the ability to distinguish between LivePerson’s logs and other system logs by taking advantage of both Apple's logging levels and Apple’s OSLog object. Without disturbing our logging, we can bridge our logging levels with Apple’s, so brands can filter logs in Xcode's device manager: 

![](img/week-of-august-31st-0.png)

**To enable:**
See [Apple’s documentation (https://developer.apple.com/documentation/xcode/diagnosing_issues_using_crash_reports_and_device_logs/acquiring_crash_reports_and_diagnostic_logs) on how to use device console logs.

## [Mobile SDK] Auto-logout - improved logout options
### Type: Enhancement (iOS SDK 6.0)

An SDK enhancement has been added that will prevent a second customer from viewing the chat history of the customer who chatted before them, while optimizing the flow in a way that clears just the necessary set of user information in a quick manner.

## [Mobile SDK] Hyperlink support
### Type: New funcionality (iOS SDK 6.0)

Users using the enhanced Agent Workspace have the ability to share hyperlinks with consumers during a messaging conversation. Now, they can share hyperlinks with consumer's that are messaging over the Mobile SDK as well.

**To enable:**
* Please see the [Knowledge Center overview](messaging-channels-rich-conversations-hyperlinks-overview.html)
* SDK configuration - New Attributes:
 * markdownHyperlinkFromAgent - Enable or disable hyperlink support. Agent won’t be able to send hyperlink messages if set to false.
  * Type: bool
  * Default value: true
 * remoteUserBubbleHyperlinkColor - Set the link message text color.
  * Type: color
  * Default value: For iOS 13, we use UIColor.label, anything below that uses UIColor.black

![](img/week-of-august-31-1.png)

## [Mobile SDK] Adding new configurations for Structured Content Button type 
### Type: Enhancement (iOS SDK 6.0)

New configurations have been added to LPConfig to change the border and text color on the Structured Content button type. Please note that these properties are only used if there is no style available for such elements on the SC JSON Payload.

**To enable:**

Configuration - New Attributes:

structuredContentButtonBorderColor
Sets border color for button type element on Structured Content
 * Type: color
 * Default value: lightBlue
**Important:** Accessibility compliance highlights the need for links and buttons to have a distinctive UI characteristic, changing this value might break compliance.

structuredContentButtonTextColor
Sets text color for button type element on Structured Content
 * Type: color
 * Default value:  For iOS 13, we use UIColor.label, anything below that uses UIColor.black

structuredContentTextColor
Sets text color for text type element on Structured Content
 * Type: color
 * Default value: For iOS 13, we use UIColor.label, anything below that uses UIColor.black

**Limitations:**
Accessibility compliance highlights the need for links and buttons to have a distinctive UI characteristic, changing this value might break compliance that is set OOTB.

## [Mobile SDK] Expired JWT, reconnect 
### Type: Enhancement 

Improvements were added to the SDK to provide a better reconnect experience when handling, invalidating and requesting new JWTs.

## [Mobile SDK] ConversationViewController Fails to update UMS Read message status
### Type: Bug fix (iOS SDK 6.0)

An issue occured where the updated message read status and message received status was not reported correctly in the Agent Workspace UI. This bug has been resolved. 

## [Mobile SDK] Agent typing indicator does not show
### Type: Bug fix (iOS SDK 6.0)

An issue was fixed pertaining to the agent typing indicator not showing up for consumers on Mobile SDK. This bug has been resolved.

## [Mobile SDK] iOS SDK crash fixes
### Type: Bug fix (iOS SDK 6.0)

Several fixes were implemented to eliminate specific crash events in the iOS SDK.

## [Mobile SDK] Fails to connect if host app does not have reconnect mechanism in place
### Type: Bug fix (iOS SDK 6.0)

An issue was occurring when reconnecting using expired JWT’s from the SDK cache. This bug has been resolved. 

## [Mobile SDK] Welcome message appearing twice upon skipping CSAT
### Type: Bug fix (iOS SDK 6.0)

An issue was found where consumers may have observed two welcome messages when skipping the CSAT. This bug has been resolved. 

## [Mobile SDK] System messages container has a different background color in activity and window modes
### Type: Bug fix (iOS SDK 6.0)

An issue was resolved of a discrepancy between system message background colors between window mode and container view mode within the conversation view. 

## [Mobile SDK] "Failed to connect, Retry" banner appears briefly 
### Type: Bug fix (iOS SDK 6.0)

An issue was resolved where the “failed to connect” banner appears briefly even if connected when returning from background. This bug has been resolved. 

## [Mobile SDK] Conversation resolved message not appearing
### Type: Bug fix (iOS SDK 6.0)

An issue was found where the “conversation was resolved” message may not appear under certain SDK branding configurations. This bug has been resolved. 

## [Accessibility] WCAG 2.1 AA / Accessibility remediation
### Type: Enhancement (Web Experiences 10.4)

The Web Experiences team is partnering with Deque, a website accessibility firm, to remediate, validate, and ultimately certify the LivePerson consumer experience as WCAG 2.1 AA compliant. To reach WCAG 2.1 AA compliance, we will be deploying fixes to the consumer experience over the next few months that will incrementally get us to certification.  

Please note that issues that are remediated and validated under WCAG 2.1 AA compliance only apply for the default engagements, window themes, and out-of-the-box features/taglets within the consumer window. Any brands that utilize custom windows, taglets, and engagements, should be reviewed and updated by the customer, or their representative, to meet WCAG 2.1 AA compliance. 

## [Window] Optimize the header logo for screen readers
### Type: Enhancement (Web Experiences 10.4)

An alt text field has been added to the Engagement Window Studio Header section. Screen readers will read the alt text instead of the Target URL for the logo.

![](img/week-of-august-31-2.png)

## [Window] Optimize keyboard navigation when closing a conversation 
### Type: Enhancement (Web Experiences 10.4)

When a consumer selects “End conversation”, they can now navigate the “Yes” and “No” buttons using a keyboard.

![](img/week-of-august-31-3.png)

## [Window] Optimize keyboard navigation for emojis in window
### Type: Enhancement (Web Experiences 10.4)

The emoji list can now be navigated through using a keyboard to find, open, and select an emoji.

![](img/week-of-august-31-4.png)

## [Window] Maintain focus on the message text box
### Type: Enhancement (Web Experiences 10.4)

Focus will now stay within the messaging text box as new messages come into the conversation, including dynamic messages like structured content. For consumers utilizing screen readers, they will be made aware that new messages are available and can navigate into the message window to interact with the new messages.

## [Window] All messages are being read out when a new message comes in
### Type: Enhancement (Web Experiences 10.4)

Removed “role=log” so that all previous messages will not be read by screen readers when the consumer has a new message.

## [Rich content] Update to the border and focus indicator for structured content
### Type: Enhancement (Web Experiences 10.4)

The border around structured content has been closed. With the change above to always keep focus on the message textbox, the border will only show when a consumer clicks or keyboard tabs to the structured content. 

![](img/week-of-august-31-5.png)

Brands can customize the focus indicator border color by adding and changing the following CSS element in the Window Customization API:

![](img/week-of-august-31-6.png)

## [CoBrowse Video] Update keyboard navigation for CoBrowse video elements
### Type: Enhancement (Web Experiences 10.4)

The tab order was corrected for the banner which says “You are in a video call”. Now it is more intuitive for keyboard users to tab to this banner. This banner behaves like a button. When clicked (by pressing enter or space bar), it unhides (aka maximizes) the ongoing voice/video call.

## [CoBrowse Video] Better handling of views in the Window Widget
### Type: Bug fix (Web Experiences 10.4)

This bug would very rarely appear after something went wrong with the video call or the invitation, causing parts of the current and previous invitation/call could both be seen partially at the same time within the same slider.

The code which changes the content within the slider window now tracks the current view and ensures that it is always removed before adding a new view to the slider. Better handling of timed events and timeouts was also added to ensure that incorrect views are not displayed.

### Incidents (Web Experiences 10.4)

Performance improvements:
* Added a new client configuration to reduce the number of requests to UMS for idle conversations.

Improvements to consumer messaging window:
* Landscape view for iPhone and iPad devices
* Full screen window on larger iOS devices
* IE11 browsers on Windows 10 and 8 devices
* Offline surveys will no longer display when agents are available
* Real-time data masking now masks whole data pattern that starts with number “1”

Better error handling:
* Favicon 404 errors
* Retry icon 404 errors

Rich content:
* Structured content text will wrap instead of expanding outside of the card borders

Translation updates:
* Traditional Chineses (HK and Taiwanese Chinese) updated for missing word

## Voice and Video for Web Messaging 
### Type: New functionality 

Agents handling Web Messaging conversations are now able to invite consumers to a voice and video conversation from a messaging conversation. The consumer's engagement window is expanded to show the video/call invitation. Once the invitation is accepted, the consumer must agree to allow their browser to use the computer’s microphone and camera. Following agreement, the peer-to-peer call takes place via the extended engagement window. The agent sees the consumer via a dedicated voice and video agent window.

Both agent and consumer use their device’s audio and video capabilities like with Zoom or Google Hangouts. Brands can choose if the consumer starts automatically with their camera on or off to protect their privacy. Like with CoBrowse, the use of voice and video consumes an additional credit per conversation. Both consumer and agent have the ability during the call to toggle the camera or microphone, and to end the call. 

**To enable:** 
The feature will be enabled by default for all brands and all agents. The functionality can be disabled for the account on the backend. It is possible to control agent use via profile permissions, thereby limiting only certain agent groups via profile permissions to use voice and video. By default, all agents have the permissions enabled and will see the initiation buttons over their text box in the Agent Workspace.  

**Dependencies:**
Only supported browsers can use this feature. If the consumer and/or agent browser is not supporting the needed technology, the initiation button will not appear for the agent. Most shelf browsers are supported (Chrome, Firefox, Safari, Edge [on Chromium]).

**Limitations:**

This feature is only available for Web Messaging. In the future [target Q4] we will also release a clickable link that will launch a browser, thereby allowing support for all other channels.

![](img/voiceandvideodemo720p.gif)

## Context Store integration
### Type: New functionality (FaaS 1.20)

The integration of the Context Store will allow you to save information permanently between invocations. Leveraging the [Conversation Context Service](https://developers.liveperson.com/conversation-orchestrator-context-warehouse-context-session-store.html), you can retrieve and save values during invocations. These values are not only available to future invocations and other Lambdas, but also in any LP System which integrates the Conversation Context Service. To simplify the use of the integration, you also have ready-made code snippets that can be used for reading, writing, and deleting data from the Context Store.

## [Bot connectors] Conversation errors 
### Type: Enhancement (Third-party bots 2.24)

To improve the self-service ability of our customers and also improve their bot flows, we created a new tab in the Bot Dashboard, where both messaging and chat customers can view errors that lead to an error escalation by the used bot. 

In V1 it is possible to:
* View conversation errors
* Search by convId for a particular error

**Limitations:**
Conversation errors are limited to max. 2000 errors storage per bot. Any new errors coming in will replace the oldest ones from the storage. Furthermore, existing errors will be removed after 2 days.

## [Bot connectors] Bot Action invocation
### Type: Enhancement (Third-party bots 2.24)

As an additional functionality, it’s now possible to trigger a function invocation using botActions. This feature is available for both chat and messaging and can be used with all third-party bots.

**Limitations:**
It’s only possible to send one bot action. So it’s not possible to simultaneously transfer or close a conversation while using FaaS invocation.

## [Bot connectors] ReadOnly mode is not working on the bot Detailed View 
### Type: Bug fix (Third-party bots 2.24)

The ‘View Bot’ configuration was not visible in the bot’s dashboard. With this fix, the users are now able to access the bot’s configuration when they are in the dashboard.

![](img/week-of-august-31-7.png)

## [Google Business Messages] Structured Content support 
### Type: New functionality (GBM 3.23.0)

Structured Content allows brands to send messages to customers in a variety of ways and formats, making conversations more flexible - able to handle new and varying types of interactions. This feature enriches the consumer experience by allowing the agent to share Quick Replies, Rich Cards and Carousels with the consumer via Google Business Messages.

**GBM Rich Conversation capabilities include:**

1. **Quick Replies** - Quick replies are a group of actionable items (chips) that appear as part of the conversation, making it easier to have an automated conversation with consumers. It creates an easier, faster way for consumers to respond to messages.You can add up to 13 quick replies while having a conversation from agent to consumer.

2. **Rich Cards** - Rich cards allow the agent to send multiple units of information in a single message. Rich cards can contain the following items:.
 Media (JPG, JPEG, or PNG, maximum 5 MB)
 * Title (maximum 200 characters)
 * Description (maximum 2000 characters)
 * A list of suggested replies and suggested actions (maximum 4)
 
3. **Rich Carousels** - Carousels string together multiple rich cards, allowing users to compare items and react to each individually. Carousels may contain a minimum of two and a maximum of ten rich cards. Rich cards within carousels must conform to general rich card requirements for content and height.

Quick replies: 
![](img/week-of-august-31-8.png)

Image Carousel: 
![](img/week-of-august-31-12.png)

Rich Carousel: 
![](img/week-of-august-31-13.png)

Rich Card: 
![](img/week-of-august-31-14.png)

## [Google Business Messages] Typing indication for agents
### Type: New functionality (GBM 3.23.0)

Agents using Google Business Messages will now have typing indications. Typing events from the users tells the agents that the user is composing a response or that backend automation is processing their question or request. 

![](img/week-of-august-31-10.png)

## [Google Business Messages] User identity (Display Name)
### Type: New functionality (GBM 3.23.0)

Agents will be able to see the user's display name using the user's locale determined by the device's settings.

![](img/week-of-august-31-11.png)
