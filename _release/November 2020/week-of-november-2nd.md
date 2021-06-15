---
pagename: Week of November 2nd
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-november-week-of-november-2nd.html
isTutorial: false
isNew: false
date: '2020-10-28'

---

These release notes include new features arriving November 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Window] Support for new Chrome user agent recognition method 
### Type: Enhancement [Web Experiences 10.5]

Chrome and Chromium-based browsers are phasing out UserAgent and navigator.UserAgent elements, which is heavily used by the web messaging window and taglets to trigger experiences based on consumer device, browser, or OS. Updates have been made to continue to use the new navigator.userAgentData API provided by Chrome as a replacement and, in its absence, fallback to the previous navigator.UserAgent method.

## [Taglet] Customizable focus indicator for engagements
### Type: Enhancement [Web Experiences 10.5]

Extend the lp_css_customization taglet to allow brands to customize the focus border indicator on their engagement to improve color contrast or set the border to an appropriate brand color. 

## [Translation] Updated Japanese translation for consumer window 
### Type: Enhancement [Web Experiences 10.5]

Updated the Japanese translation for the Web Messaging window - including “info” and other areas where English words were being used.

## [Predefined Content] Update CSV filename to Conversational Cloud
### Type: Enhancement [Web Experiences 10.5]

As part of the rebranding of Conversational Cloud, the file name for the export of Predefined Content was updated to “Conversational Cloud_Predefined_Content_###.csv”

## WCAG 2.1 AA / Accessibility Remediation
### Type: Enhancement 

The Web Experiences team is partnering with a website accessibility firm to remediate, validate, and ultimately certify the LivePerson consumer experience as WCAG 2.1 AA compliant.  To reach WCAG 2.1 AA compliance, we will be deploying fixes to the consumer experience over the next few months that will incrementally get us to certification.  

Please note that issues that are remediated and validated under WCAG 2.1 AA compliance only apply for the default engagements, window themes, and out-of-the-box features/taglets within the consumer window. Any Brands that utilize custom windows, taglets, and engagements, should be reviewed and updated by the customer, or their representative, to meet WCAG 2.1 AA compliance. 

## [Rich Carousel] Add name and role to previous/next buttons
### Type: Enhancement [Web Experiences 10.5]

Added appropriate aria-label for previous and next, and role as button so that screen readers can appropriately announce the navigation buttons within the carousel.

## [Quick Replies] Allow brands to orient Quick Replies
### Type: Enhancement [Web Experiences 10.5]

Brands can invoke an element in Quick Reply that will make the chips “wrap” the window instead of creating a scroll for the consumer. In a future LE UI release, we will update this functionality for quick replies in the Welcome Messages as well.

This feature can be invoked by using the following code:

```
// rowSize must be false or undefined
chips = new Chips({
                el: container,
                items: lineData.quickReplies.replies,
                rowSize: false,
                rowWrap: true,
                renderer: Chips.Renderer.StructuredContentButton
            });
```

## [Window] Customize the color of focus border indicators with the Window Customization API
### Type: Enhancement [Web Experiences 10.5]

Brands are able to utilize the Window Customization API in order to modify the CSS for the focus border indicator for all elements within the Web Messaging window. 

The appropriate CSS element is below:

```
.lpc_desktop.lpc_window_maximized button:focus, input:focus, textarea:focus, select:focus, a:focus, div:focus {  outline: none !important;}
```

## [Window] Keep focus in an active messaging window
### Type: Enhancement [Web Experiences 10.5]

Focus will remain in the active Web Messaging window until the consumer closes or minimizes the window and then the consumer will be able to navigate around the brand’s website using keyboard navigation.

## [Window] Maintain focus when an active conversation is minimized 
### Type: Enhancement [Web Experiences 10.5]

Focus will remain on the maximize button of an engagement when a consumer chooses to minimize an active conversation. This way, the consumer can quickly maximize the active conversation if needed without having to keyboard navigate through the brand’s website. Focus will not return to the engagement if the consumer opens the messaging window and minimizes without starting a conversation (inactive conversation) and instead focus will return to the brand’s website.

## [Window] Improved Action Menu keyboard navigation
### Type: Enhancement [Web Experiences 10.5]

Optimized keyboard navigation so that it is now possible to navigate within the Action Menu using a keyboard.

## [Window] More descriptive Add Attachment button labels
### Type: Enhancement [Web Experiences 10.5]

Updated the Add Attachment button label to be more descriptive and match similar verbiage used in other messaging channels. 

## [Window] Updated message area placeholder text and labels 
### Type: Enhancement [Web Experiences 10.5]

To be more clear to consumers familiar with the behavior of other messaging channels, the placeholder and aria labels for the message text area have been updated to “Type your message”.

## [Window Widget] Messaging window maintains focus when slideout is closed
### Type: Enhancement [Web Experiences 10.5]

When a consumer rejects an incoming Video Chat and the slideout window closes, focus will remain on the active web messaging window. When a consumer is navigating around the slideout within a Video Chat, they will only be able to navigate within the slideout window until they either reject the call or minimize the slideout window.

## [Video Chat] Add Video Chat dialog name and header
### Type: Enhancement [Web Experiences 10.5]

When the Video Chat slideout opens, screen readers will read the slideout heading as “Video Chat” appropriately.

## [Video Chat] More descriptive Minimize / Maximize button labels
### Type: Enhancement [Web Experiences 10.5]

Updated Video Chat button labels to be “Minimize Video Chat” and “Maximize Video Chat” so that it is more clear that the consumer is interacting with the Video Chat as opposed to the Web Messaging window or the browser window. 

## [Window] Improved announcement for new messages
### Type: Bug fix [Web Experiences 10.5]

Fixed an issue where screen readers were announcing that new messages were available during common keyboard navigation. Reduced the number of announcements and made the announcement more clear.

## [Window] Not displaying rollover or double rollover agent names in transcript 
### Type: Bug fix [Web Experiences 10.5]

Resolved issue where rollover or double rollover agent names were showing as ‘Agent’ in the Web Messaging window.

## [Window] Brand logo not appearing in provider Web Messaging window 
### Type: Bug fix [Web Experiences 10.5]

Fixed an issue where the brand logo was not appearing in the web messaging window for a conversation started on a provider web page.

## [Window] Some bot skills were causing the unified window to spam the shift status API
### Type: Bug fix [Web Experiences 10.5]

Fixed a loop in the TTR manager of the unified window.

## [Window] Multiple requests on Chrome 84 involving storage.secure.min.js 
### Type: Bug fix [Web Experiences 10.5]

Fixed loop that occurred when an authorize function was looking at an empty file.

## [Window] lpcdn cookies are blocked by chrome 85 due to same-site attribute missing 
### Type: Bug fix [Web Experiences 10.5]

Fixed as part of the update to use the new Chrome user agent recognition method.

## [JSON Pollock Playground] New design
### Type: Enhancement

We have introduced several UX/UI improvements to the [JSON Pollock playground](https://livepersoninc.github.io/json-pollock/editor/) that makes the playground much cleaner, easier to use, and showcases new action buttons.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-1.png)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-2.png)

## [JSON Pollock Playground] New action buttons 
### Type: Enhancement 

As part of the update, new action buttons allow for developers to build, validate, and save/share structured content quickly and easily.

#### Validation by channel (Beta)

Implementing a utility from the Connectors team, the Validate action button will validate structured content JSON on selected channels and present any errors from that channel.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-3.png)

#### Templates 

A set of structured content templates is now available to allow developers to quickly build their JSON objects across multiple channels.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-4.png)

#### Feedback

A new Feedback button has been added to the action menu. Developers can use this button to provide feedback to the JSON Pollock development team. Note that providing feedback requires being signed into Github. 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-5.png)

#### Documentation 

The documentation button has moved to the action menu and allows developers to quickly reference the Liveperson Developer pages related to structured content.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-6.png)

#### GitHub Save / Share

For GitHub users, it is now possible to save and load previous JSON files. This is helpful when sharing files across groups and keeping track of multiple structured content implementations.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-7.png)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-8.png)

## [JSON Pollock Playground] Structured Content updates
### Type: Enhancement 

There are additional updates that have been or will be delivered to structured content JSON:

#### Invoke window widget within Structured Content

On click, open a window window with the embedded web view from the deeplink

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-2nd-9.png)

This functionality is invoked by adding “target”:”slideout” in the click action element. An example is below:

```
{
 "type": "vertical",
 "elements": [
   {
     "type": "text",
     "text": "product name (Title)",
     "tooltip": "text tooltip"
   },
   {
     "type": "button",
     "tooltip": "button tooltip",
     "title": "Add to cart",
     "click": {
       "actions": [
         {
           "type": "link",
           "name": "Add to cart",
           "uri": "https://example.com",
           "target": "slideout"
         }
       ]
     }
   }
 ]
}
```
**Additional notes:**
* Clicking on a second deeplink with target:slideout will replace the previous content in the slideout
* To deeplink to a YouTube video in the slideout, use YouTube’s embed URL
* It is not required to have the widget SDK taglet enabled to utilize the structured content method of opening the slideout window
* Customer activity within the slideout is not currently reported to the agent workspace
* While we have not updated the examples, target:slideout can be used in both JSON Pollock Playground and the Structured Content Widget to test and verify implementation of structured content

## [Enhanced Agent Workspace] Engagement skill is not displayed for Rollover conversations
### Type: Bug fix (NAW 1.20)

A bug has been discovered in the enhanced Agent Workspace, causing engagement skills to be missing if a conversation is accepted on a rollover account. This bug has been fixed, and the engagement skill will now be displayed as expected for rollover conversations.

## [Enhanced Agent Workspace] Lead generation topic is not displayed in the Consumer Info widget
### Type: Bug fix (NAW 1.20)

A bug has been discovered in the enhanced Agent Workspace, causing the Lead generation topics to be missing from the Consumer Info widget for cases when the topic has no value. This bug has been fixed, and the topic will now be displayed as expected.

## [Enhanced Agent Workspace] Bot escalation summary from node agent SDK bot not displayed for agent managers
### Type: Bug fix (NAW 1.20)

A bug has been discovered in the enhanced Agent Workspace, causing the Bot escalation summary to not be displayed in the transcript of closed conversations for agent managers, in case they weren't joined into these conversations. This bug has been fixed, and the Bot escalation summary will now be displayed in the transcript of closed conversations for agent managers.

## [Back-end messaging server]  StepUp - Update firstConversation to false if authenticated consumer has conversation history
### Type: New feature (UMS 4.0)

Currently the firstConversation flag is only updated when a new conversation is created. In the case of an unauthenticated conversation this value is always "true", indicating that the system has no previous record of a conversation with that customer. This feature will update firstConversation to false after step up if an authenticated customer has conversation history.

## [Back-end messaging server]  Rollover - Prioritize skill specified in request over engagement configuration
### Type: New feature (UMS 4.0)

**Available to all customers:** yes (will be enabled by default with feature to disable)
This feature will prioritize the incoming ConsumerRequestConversation request’s Skill over the campaign’s Skill. To revert to the old functionality a FF will have to be enabled.
**How to configure:** Disable by enabling the following feature flags - 
async-messaging.prioritize-skill-from-campaign  -> ON

## [Back-end messaging server]  Rollover Encryption
### Type: New feature (UMS 4.0) 

**Available to all customers:** yes (if feature flag is enabled)
This PR is to address encryption/decryption not working for Rollover use cases since messages/user profile data was encrypted in the context of the connecting user's account ID and rollover conversations involve cross-account access.
The solution is to inspect request messages and find an appropriate ID in Couchbase to look up the conversation owner's account ID -> always use this account for encryption/decryption.

**How to configure:** Following unleash feature flags should be enabled - 
async-messaging.encryption-account-lookup-for-rollover-enabled  -> ON

## [Back-end messaging server]  Send PCS only if conversation is ever assigned to a human agent
### Type: New feature (UMS 4.0) 

**Available to all customers:** yes 
This feature will send the PCS only if the conversation is ever assigned to a human agent. To configure, please contact your LivePerson account team.

## [Back-end messaging server]  Return 403 on connection attempt - when async-messaging features if OFF
### Type: Enhancement (UMS 4.0) 

**Available to all customers:** yes 

This feature requires enablement, please contact your LivePerson representative. 
 
## [Back-end messaging server]  Fixing the decryption issue (removing old cached value on warmup)
### Type: Bug fix (UMS 4.0) 

**Available to all customers:** yes
The fix allows to eliminate potential decryption failures that happened previously to some brands after the leader jump due to outdated cache, which is properly refreshed now. 

**How to configure:** Available out of the box. 

## [Back-end messaging server] Fix for the wrong timezone used in shift status API causing wrong shift calculation (especially in APAC region)
### Type: Bug fix (UMS 4.0) 

**Available to all customers:** yes
This fix implements the safe mechanism of caching of the timezone, which is fetched from the external server. The probability of the timezone being empty at the moment of shift calculation is reduced almost to zero.

**How to configure:** Available out of the box. 
