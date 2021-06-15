---
pagename: Week of March 22nd
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-march-week-of-march-22nd.html
isTutorial: false
isNew: false
date: '2021-03-17'

---

These release notes include new features arriving March 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Versioning and restoration of article content
### Type: Enhancement (Release CB 2021_4.0)

In this release, the Knowledge Base application introduces new support for versioning and restoration of article content. Now, whenever someone changes an article’s content (the title, the summary, the detail or a content URL), a back-up of the previous version of the article is created. The system stores the three, most recent back-up versions that have been created, and you can restore one of these if desired.

This enhancement applies to internal knowledge bases as well as external knowledge bases that use LivePerson AI.

## [Conversation Builder] A new KnowledgeAI interaction
### Type: Enhancement (Release CB 2021_4.0)

Conversation Builder introduces a new KnowledgeAI interaction that you can use in your bots when you want to search a knowledge base for articles. 

This new, powerful interaction greatly simplifies a bot’s design. It’s no longer necessary to add the integration that performs the search, the Integration interaction in the dialog, and the subsequent Statement interactions that display the returned content. The Knowledge AI interaction handles it all. You add and configure this one interaction in the dialog, and the results are rendered automatically to the consumer. They also degrade automatically and gracefully based on the channel in use.

We still support the older way of implementing a knowledge base search, but we think you’ll find  the KnowledgeAI interaction makes it faster to build better question and answer automation. 

## [Conversation Builder] Enhancements to post-conversation survey bots
### Type: Enhancement (Release CB 2021_4.0)

Conversation Builder adds two enhancements to post-conversation survey bots. 

First, you can now offer to email a transcript of the survey conversation to the consumer, and grant the consumer the option to accept or decline this. You set this up in the bot’s Bot Settings. Simply enable the Email Transcript setting, and configure the associated settings. 
Second, you can now customize the answer choice text of the survey interactions (FCR, CSAT and NPS), and reorder the choices.

Customizing the answer choice text and reordering choices has no impact on the underlying actual values that are reported to Analytics Builder. These never change; this ensures that the survey answers are always properly reported.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CB4.0-week-of-march-22nd-1.png)

**Note:** Take care when changing the answer text; remember to update the conditions in the rules accordingly.

## [iOS mobile SDK] Video and Voice call support
### Type: New functionality (iOS SDK 6.3)

Brands that are using the Mobile SDK will now be able to invite consumers to video or voice calls via the messaging interfaces on the brand’s app. Agents will be able to send the video or voice call invitation from the Agent Workspace, while the mobile SDK will display the invite to the consumer. Consumers will be able to tap on the invite in order to initiate or decline the voice or video call, while the call will be facilitated via a webview on the messaging interface. 

To read more information about the video and voice feature please see the [Knowledge Center article](agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-voice-and-video-calls-overview.html).

#### Enablement

**First, brands will need to enable the voice and video call feature on the conversational Cloud account:** 

Voice and video calls are automatically enabled on the brand’s Conversational Cloud account. [Agent Profiles and Permissions](admin-settings-permissions-profiles.html) can be used to allow or restrict the video and voice calls feature for all agents or only a subset of agents. The permissions are part of the Agent profile. The permissions that control this feature are the “Initiate voice conversation” permission to allow voice calls, and the “Initiate live video conversation” permission to allow video calls.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-march-22nd-4.png)

**Then, the brands will need to configure voice and video on the SDK:**

Video and voice for Mobile SDK can be enabled via the SDK configuration, and we will also allow brands to decide on the video/voice call invitation look and feel through new configuration elements (invitation background color, border color and shape, button colors, as well as the webview bar colors and more). To review the full configurations see the [Developer Center article](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-advanced-features-voice-and-video.html). 

#### New attributes: 

***enableVoiceVideoCall***

Enable or disable the ability for an agent to start a voice or video call.
* Type: bool
* Default value: false

***voiceCallImageIcon***

Defines default image icon for voice invite.
* Type: UIImage
* Default value: nil

***videoCallImageIcon***

Defines default image icon for video Invite.
* Type: UIImage
* Default value: nil

***voiceVideoAcceptCallButtonImage***

Defines default background image for Decline button on voice & video invite
* Type: UIImage
* Default value: nil

***voiceVideoDeclineCallButtonImage***

Defines default background image for Decline button on voice & video invite
* Type: UIImage
* Default value: nil

***voiceVideoEndCallButtonImage***

Defines default background image for End button on voice & video invite
* Type: UIImage
* Default value: nil
* Preconditions: This image is only shown on the voice & video invite when the consumer has an active call
* Notes: To enable this image voiceVideoEndCallButtonType should be set to hangup`

***voiceVideoJoinCallButtonImage***

Defines default background image for Join button on voice & video invite
* Type: UIImage
* Default value: nil
* Preconditions: This image is only shown on the voice & video invite when the consumer has an active call

***voiceVideoInviteIconTint***

Defines default icon tint color on voice & video invite
* Type: UIColor
* Default value: gray

***voiceVideoAcceptButtonTint***

Defines default tint color for Accept/Join button on voice & video invite
* Type: UIColor
* Default value: white
* Note: This property controls both the Accept and Join call button

***voiceVideoDeclineButtonTint***

Defines default tint color for Decline/End button on voice & video invite
* Type: UIColor
* Default value: red
* Note: This property controls both the Decline and End call button

***voiceVideoAcceptButtonBackgroundColor***

Defines default background color for Accept/Join button on voice & video invite
* Type: UIColor
* Default value: green
* Note: This property controls both the Accept and Join call buttons

***voiceVideoDeclineButtonBackgroundColor***

Defines default background color for Decline/End Button on voice & video invite
* Type: UIColor
* Default value: clear
* Note: This property controls both the Decline and End call buttons

***voiceVideoInvitationIconRenderingMode***

Defines default rendering mode for voice or video invitation icon
* Type: UIImage.RenderingMode
* Default value: alwaysTemplate

***voiceVideoAcceptButtonRenderingMode***

Defines default rendering mode for Accept button on voice & video invite
* Type: UIImage.RenderingMode
* Default value: alwaysTemplate

***voiceVideoDeclineButtonRenderingMode***

Defines default rendering mode for Decline button on voice & video invite
* Type: UIImage.RenderingMode
* Default value: alwaysTemplate

***voiceVideoEndCallButtonType***

Defines which icon to display on Join button for voice & video invite
* Type: VoiceVideoEndCallButtonType
* Default value: close
* Preconditions: This type is only shown on the voice & video invite when the consumer has an active call

***voiceVideoButtonsInnerPadding***

Defines inner padding between Accept and Decline buttons on voice & video invite
* Type: Double
* Default value: 8.0

***voiceVideoButtonsOuterPadding***

Defines outer padding between Accept and Decline Buttons on voice & video invite
* Type: Double
* Default value: 24.0

***voiceVideoInvitationBubbleBackgroundColor***

Defines background color for voice & video invitation bubble
* Type: UIColor
* Default value: light gray

***voiceVideoInvitationBubbleBorderColor***

Defines border color for voice & video invitation bubble
* Type: UIColor
* Default value: clear

***voiceVideoInvitationBubbleBorderWidth***

Defines border width for voice & video invitation bubble
* Type: Double
* Default value: 0.0

***voiceVideoNavigationBackgroundColor***

Defines background color of Navigation and Tab bar for voice & video SFSafariViewController
* Type: UIColor
* Default value: gray

***voiceVideoNavigationTintColor***

Defines tint color for icons on Navigation and Tab bar icons for voice & video SFSafariViewController
* Type: UIColor
* Default value: black

{: .sidebyside} 
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-march-22nd-5.png) ![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-march-22nd-6.png)

## [iOS mobile SDK] Structured Content outer padding configuration
### Type: New functionality (iOS SDK 6.3)

Structured Content outer padding configuration is now supported.

#### Enablement 

***structuredButtonWidthConstant***

Defines padding constraint for Structured Constant elements of button type
* Type: CGFloat
* Default value: -20.0

## [iOS mobile SDK] Conversation Separator configurations
### Type: New functionality (iOS SDK 6.3)

Conversation Separator configurations are now supported. 

#### Enablement 

***conversationSeparatorContentViewTopPadding***

Defines the top padding for the conversation separator content view
* Type: CGFloat
* Default value: 0.0

***conversationSeparatorContentViewBottomPadding***

Defines the bottom padding for the conversation separator content view
* Type: CGFloat
* Default value: 0.0

## [iOS mobile SDK] Link Preview configuration
### Type: New functionality (iOS SDK 6.3)

Link Preview configuration is now supported. 

#### Enablement 

***linkPreviewLoadingImage***
Defines image for link preview loader
* Type: UIImage
* Default value: nil

## [iOS mobile SDK] Conversation Separator padding interfered when setting conversationBackgroundColor
### Type: Bug fix (iOS SDK 6.3)

An issue was found where Conversation Separator padding interfered when setting **conversationBackgroundColor**. This issue has now been resolved.

## [iOS mobile SDK] Quick Replies are dismissed when opening menu in Window Mode
### Type: Bug fix (iOS SDK 6.3)

An issue was found causing Quick Replies to be dismissed when opening the menu while in Window Mode. This issue has been resolved. 

## [iOS mobile SDK] inputTextViewTopBorderColor is not properly aligned when the Empty State View is presented
### Type: Bug fix (iOS SDK 6.3)

An issue was found where the **inputTextViewTopBorderColor** configuration was not properly aligned when the Empty State View was presented (“There are currently no conversations at this time”). This issue has been resolved. 

## [iOS mobile SDK] VoiceOver won’t read correct label when reading Structured Content cards
### Type: Bug fix (iOS SDK 6.3)

An accessibility issue was found causing VoiceOver not to read the correct label when reading Structured Content cards. This issue has been resolved. 

## [iOS mobile SDK] Unread bubble background will not change color when setting conversationBackgroundColor
### Type: Bug fix (iOS SDK 6.3)

An issue was found causing the unread bubble background not to change color when setting **conversationBackgroundColor**. This issue has been resolved. 

## [iOS mobile SDK] Structured Content timestamp will not resize when setting Large Text on Accessibility Setting
### Type: Bug fix (iOS SDK 6.3)

An issue was discovered causing the Structured Content timestamp not to resize when setting Large Text on Accessibility Settings on the device. This issue has been resolved.

## [iOS mobile SDK] Conversation screen will not take focus and VoiceOver will read ViewController behind it
### Type: Bug fix (iOS SDK 6.3)

An accessibility issue was found where the conversation screen does not take focus when use is focused on it, and the voice over reads the viewcontroller behind it. This issue has been resolved. 

## WCAG 2.1 AA / Accessibility Remediation

The Web Experiences team is partnering with Deque, a website accessibility firm, to remediate, validate, and ultimately certify the LivePerson consumer experience as WCAG 2.1 AA compliant.  To reach WCAG 2.1 AA compliance, we will be deploying fixes to the consumer experience over the next few months that will incrementally get us to certification.  

Please note that issues that are remediated and validated under WCAG 2.1 AA compliance only apply to the default engagements, window themes, and out-of-the-box features/taglets within the consumer window. Any brands that utilize custom windows, taglets, and engagements should be reviewed and updated by the customer, or their representative, to meet WCAG 2.1 AA compliance. 

## [Action Menu] 'End Conversation' dialog question + buttons not read correctly by all screen readers
### Type: Enhancement (UW 10.8)

The accessibility of the "Close Conversation" dialog has been refined by implementing the WCAG recommendation for dialog accessibility. The ability to close the modal dialog with the ESC key has been added. 

## [Structured Content Carousel] Carousel navigation arrows are not appropriate color contrast ratio
### Type: Enhancement (UW 10.8)

The accessibility of the Structured Content Carousel navigation buttons has been improved by converting the carousel buttons to svg icons and providing more color contrast by inverting the button colors (blue background with white arrow versus the white background with light blue arrow). It is now possible for brands to customize the coloring of these buttons in their various states (inactive, hover, active, and focus) to fit their branding. 

Previous: 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week_of_march_22nd_1.gif)

New: 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week_of_march_22nd_2.gif)

#### Window Customization CSS elements:

For the inactive state: 
```
.lp-json-pollock .lp-json-pollock-layout-carousel-wrapper>.lp-json-pollock-layout-carousel-arrow{
    fill: #0363ad;
    border: 1px solid #d4d4d5;
    background-color: #ffffff;
}
```

For the hover state: 
```
.lp-json-pollock .lp-json-pollock-layout-carousel-wrapper>.lp-json-pollock-layout-carousel-arrow:hover {
    fill: #ffffff;
    border: 1px solid #0363ad;
    background-color: #0363ad;
}
```

For the active and focus state:
```
.lp-json-pollock .lp-json-pollock-layout-carousel-wrapper>.lp-json-pollock-layout-carousel-arrow:active {
    fill: #0363ad;
    border: 1px solid #0363ad;
    background-color: #ffffff;
}
.lp-json-pollock .lp-json-pollock-layout-carousel-wrapper>.lp-json-pollock-layout-carousel-arrow:focus {
    fill: #0363ad;
    border: 1px solid #0363ad;
    background-color: #ffffff;
}
```

## [CoBrowse Embedded Window] Keyboard focus not moving to any control in the 'Video chat' window, after accessing 'maximize video chat button'
### Type: Enhancement (UW 10.8)

Whenever the video call slider is maximized, the focus will be set to the mute microphone button. This is an accessibility improvement for keyboard and screen reader users. There is a soft cross-dependency with CoBrowse 3.22 which is already deployed to GA.

## [Messaging Window] Regression fix for markdown (#md#) format 
### Type: Bug fix (UW 10.8)

Previous changes to the HyperLinksHelper created an issue with links rendering from markdown format. Special sequence #md# for links was suddenly skipped from rendering and produces a poor user experience as many brands utilize this format to serve links throughout the messaging window.

## [Structured Content Carousel] Carousel disappears after scrolling on iOS devices
### Type: Bug fix (UW 10.8)

An issue was discovered on iOS mobile Web Messaging where the Structured Content carousel would disappear when scrolling. The on-hover timestamp element at the end of the carousel was the root of the issue and, given there are timestamp elements below the carousel, the on-hover timestamp has been removed and the issue resolved. See screenshot for exact component name. 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-march-22nd-3.png)

## [Structured Content] Agent icon within the window is not aligned with Structured Content
### Type: Bug fix (UW 10.8)

An issue was discovered with Ocean theme where wide Structured Content was appearing below the agent icon instead of inline with it. This issue has been resolved. 

## [Translation] Hungarian embedded texts have incorrect translation 
### Type: Bug fix (UW 10.8)

An issue was discovered causing Hungarian embedded texts to appear with an incorrect translation. This issue has been resolved. 

## [Agent Widget] Service Scheduler widget is not working in Rollover account 
### Type: Bug fix (UW 10.8)

An issue was found causing the Service Scheduler widget not to work for agents on Rollover accounts. This issue has been resolved. 

## [Type-in Slide up Custom Taglet] Expand Customization of the Type-in Slide Up Engagement taglet
### Type: Enhancement (UW 10.8)

An enhancement has been made, allowing for customization of the type-in engagement as custom HTML inside the engagement studio. Customizations allowed include engagement content area, agent avatar size, and type-in area.

## [Type-in Slide up Custom Taglet] Type-in custom engagement: Icon and text adjustments
### Type: Bug fix (UW 10.8)

Some visual imperfections related to the paper plane icon and alignment of the “Ask a question” text were discovered and resolved. 

## Source name - Return source name in the response 
### Type: Enhancement (Engagement History Interactions API - version 1.0.0.33)

The source of the API call, which is sent by the API consumer, will now be returned in the API response. The source name will be mirrored and will be added automatically, in the case of pagination, to the URLs used as reference to the next, previous, first, and last pages in the response.
This will allow brands to add the source name only for the first call, while follow-up calls can be taken directly from the response, and without need to concatenate manually. 

