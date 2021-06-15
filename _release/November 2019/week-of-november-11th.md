---
pagename: Week of November 11th
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-november-week-of-november-11th.html
isTutorial: false
isNew: false
date: '2019-11-06'

---
These release notes include new features arriving to LiveEngage during November 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Additional granular permissions in Conversation Builder

### Type: New functionality

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>WeChat</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

</tr>

</tbody>

</table>

</div>

{: .notice}  
This feature is dependent upon users using LiveEngage v11.2

In order to provide granular controls in Conversation Builder, the following new permissions were added to LiveEngage:

* **Bot Builder Lite**: This permission is just like the existing Bot Builder permission except a user with this “lite” permission can’t export or import bots, nor can they create and work with integrations or credentials. Use this permission along with one or more _add-on_ permissions (below), as per your requirements. This allows you to selectively enable access to specific functions. For example, if you want to provide a bot developer with access to API integrations, grant the Bot Builder Lite and API Developer permissions.
* **API Developer**: A user with this add-on permission can only create and work with integrations.
* **API Credentials Manager**: A user with this add-on permission can only create and work with credentials.
* **Import/Export Manager**: A user with this add-on permission can only export and import bots and knowledge bases

{: .notice}  
API Developer, API Credentials Manager & Import/Export Manager are "_add-on"_ roles. They are intended to be assigned in conjunction with the Bot Builder Lite role as per users requirements.

## New scripting functions for managing the Context Session Store

### Type: New functionality

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>WeChat</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

</tr>

</tbody>

</table>

</div>

The Context Session Store is a cloud-based repository for storing and retrieving session state attributes, so they can be used throughout the conversational journey. This allows for continuity in conversations as context can be transferred between agents and bots, enabling a warm hand-off.

Several new scripting functions have been added for managing the Context Session Store. These synchronous, server-side, JavaScript functions conveniently wrap the APIs in Maven, LivePerson's AI engine.  The new Conversation Builder functions can be used to register and delete namespaces, and to set, get and delete variables.

## Usability enhancements for the Conversation Builder

### Type: enhancement

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>WeChat</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

</tr>

</tbody>

</table>

</div>

**Interactions:** Disabled interactions are now grayed out to more clearly indicate this status. Also, the tabs in the Interaction Details widget have been reordered to a more natural flow: Next Actions > Code > Settings.

**Code:** Code areas now have inline JavaScript compilation, providing errors and warnings within code blocks. And as you code, you'll see a dynamic pick list of method signatures, making it faster and easier.

**Errors:** Error messages are now more user-friendly, telling you exactly what went wrong.

**Help:** "i" help icons in interactions are now available in dialog boxes as well as beside important and/or troublesome fields. Click the icon to read its context-sensitive help information. In some cases, these also link you directly to the documentation site for details.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/Usability_enhancementCB.png)

## File upload support in the Conversation Builder

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

When a consumer is having a conversation with a bot, it is sometimes necessary for a  consumer to upload a file to get quicker time resolution. For example, if the bot supports account creation, you might need the consumer to upload their driver’s license/ID and proof of a good credit score.

LivePerson has added support for the upload of files by consumers. There is a new "file upload interaction type" which can be used in dialogs.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/Conversation_Builder_RN_Nov11.png)

## Messaging History API: Messaging agent survey

### Type: New functionality

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>WeChat</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

Update Messaging (conversation) History API to support the following:

* Ability to filter conversations that are pending agent survey
* Ability to view the survey filled in for every conversation and update if needed (in conversation view mode)
* Ability to search conversations based on agent survey Q&As:
  * Search based on question name and question ID
  * Search based on keywords in question
  * Search based on keywords in an answer
  * Search based on SDEs

We added new types to contentToRetrieve: previouslySubmittedAgentSurveys and latestAgentSurvey (not part of the default contentToRetrieve).
For more information please see the [developers community](https://developers.liveperson.com/messaging-interactions-api-methods-conversations.html)

## Thumbnail masking

### Type: Enhancement

Given a site setting, mask the thumbnail of an image sent during the conversation, only for closed conversation. The replacing value for the thumbnail should be provided in the site settings: messaging.file.sharing.preview.masking.text with an encoded string that will represent the replacement for the thumbnail.

If this input will be invalid, then the UI will present the following image:

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/Thumbnail_masking_RN.png)

## Data access: add profile ID

### Type: Enhancement

Add the profile ID of the agent in the time of the login in the 'Agent Activity' resource of the data access API. This API is based on the event RepSessionEvent produced by Denver.

The API signature has not changed, but the data structure of the JSON in the returned files has changed.

## \[Agent workspace\] Light/dark theme selection

### Type: New functionality

Users will now have the ability to select between a ‘light’ and ‘dark’ theme in their workspace. Once the theme has been chosen in the agent status menu, the UI will change colors to reflect the new theme selected. This selection will apply to future logins for the user.

**Screenshots**

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-1.png)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-2.png)

## \[Agent Survey\] Stop logic added

### Type:Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

As part of the messaging agent survey logic, we added the ability to stop the survey at specific questions/answers to prevent the agent from seeing unnecessary questions.

**Enablement:** To add this capability to your survey, set the ‘Jump to’ option to: ‘stop’ on the relevant question in the survey. This question will then end the flow.

**Screenshots**

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-3.png)

## \[New language support\] Indonesian & Vietnamese

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Brands and users will now have the ability to choose from two new languages in the platform: Indonesian and Vietnamese.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-4.png)

## \[Engagement window\] Timestamp grouping

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Today, the engagement window displays the full timestamp, including the date and time of each message, which can cause the conversation to look busy or cluttered. The new timestamp grouping capability improves the consumer experience by providing a more simple and clear design.

Brands now have the ability to set whether messages should be grouped together based on date instead of having the full timestamp displayed for each message. Message timestamps will include only the time and the date will appear as a seperator in the conversation. While scrolling through the engagement window, the date will stick to the top.

This feature applies for embedded and pop out window as well as for desktop and mobile and impacts both agent and consumer messages.

**Enablement:**

* Log into LiveEngage
* Go to Engagement studio
* Click on “Additional window settings”
* Expand “Look and feel” section
* Click on the dropdown for “Timestamp grouping” and select “Yes”
* Click on “Save”

**Screenshots**

Image 1: Configure timestamp grouping

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-5.png)

Image 2: Engagement window with timestamp grouped vs ungrouped

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-6.png)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-7.png)

## \[Engagement window\] Timestamp location

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Brands have the capability to configure the timestamp location for the agent and visitor bubble. This new configuration includes 2 options:

* Above - timestamp will display above the bubbles and is the default (as today)
* Below - timestamp will display below the bubbles

**Enablement:**

* Log into LiveEngage
* Go to Engagement studio
* Click on either agent bubble or visitor bubble
* Choose timestamp location (Above or below)

**Screenshots**

Image 1: Configure the timestamp location in engagement studio

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-8.png)

Image 2: Engagement window with timestamp set to above/below

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-9.png)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-10.png)

## \[Engagement window\] Timestamp alignment configuration

### Type: Enhancement

If a brand has the agent picture (avatar) enabled as part of the engagement window, they may now choose whether they would like the timestamp to be aligned with the agent picture (this is the default option) or the agent text bubble.

**Enablement:**

* Log into LiveEngage
* Go to Engagement studio
* Click on “Additional window settings”
* Expand “Look and feel” section
* Click on the dropdown for “Agent messages timestamp alignment” and select “Agent picture” or “Agent bubble”
* Click on “Save”

**Screenshots**

Image 1: Configure the agent messages timestamp alignment

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-11.png)

Image 2: Agent messages timestamp aligned to agent picture vs agent bubble

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-12.png)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-13.png)

## \[Engagement window\] Bubble grouping

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Today, each agent/consumer message is displayed separately, even if the consumer/agent sent several messages right after one another. As a result, the conversation can look busy and unclear.

Brands now have the ability to configure whether the bubbles should be grouped together or not. The bubble grouping will help make the conversation easier to read.

The bubbles will be grouped as long as the messages came in within a 5 minute interval and no other type of message has interrupted (system or other user message):

* For web messaging, the message status (sent, read, etc.) appears only on the last message bubble in the group with the same status.
* When the agent picture is enabled it will appear only on the last bubble.

To view the exact time each message was sent, users can hover (in desktop) or tap (in mobile) on each bubble. This feature applies for embedded and pop-out windows as well as for desktop and mobile.

**Enablement**

* Log into LiveEngage
* Go to Engagement studio
* Click on “Additional window settings”
* Expand “Look and feel” section
* Click on the dropdown for “Bubble grouping” and select “Yes”
* Click on “Save”

**Screenshots**

Image 1: Configure bubble grouping

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-14.png)

Image 2: Bubbles grouped vs ungrouped

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-15.png)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-16.png)

## \[Engagement window\] New style for send icon

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Brands now have the ability to choose between two Send icons to display in the engagement window. There are 2 options available in the engagement window studio under the text area section:

* Arrow (current)
* Paper plane (new)

This configuration will apply to desktop and mobile, embedded and pop-out windows.

**Enablement:**

* Log into LiveEngage
* Go to Engagement studio
* Click on “Text Area” section
* Choose the Send icon from the dropdown
* Click on “Save”

**Screenshots**

Image 1: Configure Send icon style

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-17.png)

Image 2: Send icons paper plane vs arrow

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-18.png)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-19.png)

## \[Engagement window\] Color theme should only impact window colors

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Today, when a user selects a color from the “Choose a color theme” section under the ‘Look and feel customization’ option in the Engagement window studio, it changes the colors of the window element, resets the font, bubble style, minimize icon style, and read indication style. Going forward, this option will apply to the colors only. The name of this feature has been changed from “Choose a color theme” to “Choose a color schema” to avoid confusion.

**Enablement**

* Log into LiveEngage
* Go to Engagement studio
* Click on “Look and feel customization”
* Choose a color scheme
* Click on “Save”

**Screenshots**

Image 1: Set window color scheme

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-20.png)

Image 2: Consumer view of window color

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-21.png)

## \[Engagement window\] Theme edit warning message

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The warning message that is displayed once a user views the out of the box themes in the Engagement window studio has been updated to reflect the fact that multiple themes are now supported.

The previous message “System default window is not editable. Create a new window to edit.” has been changed to the following:

* **For the default theme:** “The default theme is not editable. Create a new window to edit.”
* **For a theme that is not the default:** “Out of the box theme is not editable. Use duplicate action to edit.”

**Screenshots**

Image 1: Default theme warning message

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-22.png)

Image 2: Non-default theme warning message

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-23.png)

## \[Engagement window\] Large window disclaimer improvement

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

When the window size is set to large, the Engagement window studio presents a disclaimer on top of the window preview. In some screen resolutions, this disclaimer is not visible. The disclaimer has been changed to blue and fixed to the top of the engagement window studio the prevent this issue.

**Screenshots**

Image 1: Large window size disclaimer before

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-24.png)

Image 2: Large window size disclaimer after

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-25.png)

## \[Agent workspace\] Custom widgets memory leak on Internet Explorer 11

### Type: Bug fix

Customers working with Internet Explorer 11 browser and using custom widgets, mainly heavy loading widgets, have experienced a memory leak on the browser. This behavior could only be reproduced on Internet Explorer 11 and did not happen in any other browsers.

The root cause of this issue is due to a bug in Internet Explorer 11 browser memory management, which does not release memory itself on every iframe removal from the DOM.

The fix included memory management on both Internet Explorer 11 and Edge browsers. Before removing the iframe from the DOM, we first redirected the iframe to a blank page, and only then removed the iframe. Following the fix, there is a major reduction in the memory usage in these browsers.

## \[Agent workspace\] Widget icons duplicate spacing

### Type: Bug fix

For customers using the old agent workspace, the latest update to the Chrome browser causes a duplicated spacing of the widget icons in the agent workspace. We have added a dedicated CSS to prevent this spacing and this bug now fixed.

**Screenshots**

Image 1: Duplicate spacing before the fix

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-26.png)

## \[Enhanced agent workspace\] Option to view Predefined Content item titles only

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

In the enhanced agent workspace each user is able to control whether the predefined content widget displays the text and title for each piece of content, or to hide the content text and display the titles only.
If the user chooses the “Titles only” display option, hovering each item will display the text content on a tooltip for assistance. The configuration is enabled per agent only and does not affect entire account.

**Screenshots**

Image 1: The predefined content default state - titles with text for each item

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-27.png)

Image 2: New menu with the option to choose “Show titles only”

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-28.png)

Image 3: Displayed “Titles only” in the widget

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-29.png)

## \[Enhanced agent workspace\] Unselect conversation action

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

The enhanced agent workspace now features the option to “Unselect” a conversation:
When a user is focused on a specific conversation and would like to hide it, a new option has been added to the conversation action menu: “Unselect conversation”. When this option is selected it will hide the conversation from the user’s screen (but will not remove it from the My Connections list).

If, however, the user filtered out some of the statuses (e.g idle/closed conversations are filtered out) and the user chooses “Unselect” for a conversation with one of these statuses, it will also not be displayed at the list anymore (until the user filters this status back in). This functionality is supported for the My Connections list only.

**Screenshots**

Image 1: new “Unselect conversation” option in the conversation action menu

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-30.png)

Image 2: the conversation is unselected, and the workspace is not focused on any conversation

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-31.png)

## \[Enhanced agent workspace\] Display summary notes for previous conversations

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

In the enhanced workspace, past conversations are displayed above the current conversation in the transcript. We have now added the ability to see previous conversation summaries as written by previous agents who participated in the conversation (one or more). Whenever the agent views previous conversations, he will now be able to go over previous conversation summaries as well to get clarity on customer inquiries.

**Screenshots**

Image 1: Previous conversation is expanded and conversation summary is displayed

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-32.png)

## \[PCI forms\] Special characters appear in gibberish

### Type: Bug fix

For some languages that contains special characters (e.g - Russian), when a secure form is being sent to the consumer, the special characters were not displayed correctly in both the enhanced agent workspace, as well as on the consumer side. This bug has been fixed and special characters now display as expected.

Before the fix: random characters are being displayed in the agent workspace

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-november-11th-33.png)

## Custom widgets memory leak on Internet Explorer 11

### Type: Bug fix

Customers working with Internet Explorer 11 browser and using custom widget, mostly heavy loading widgets, experience a memory leak on the browser. This behavior only reproduced on IE11 and did not happen in any other browsers.

The root cause of this issue is due to bug on IE11 browser memory management, which does not release memory itself on every iframe removal from the DOM.

The fix included memory management on both IE11 and Edge browsers - before removing the iframe from the DOM, we first redirect the iframe to a blank page, and only then removing the iframe. Following the fix, there has been a major reduction in the memory usage for these browsers.

## \[Engagement Window\] Inconsistent sizing of engagement window

### Type: Bug fix

The engagement window size is inconsistent when users start a messaging conversation, then leave or navigate away from the page and back again. This means that if the engagement window is configured as large and the consumer opens another tab or minimizes the conversation and reopens it, the size will go back to small. This has been resolved.

## Text box not visible on iPad Chrome

### Type: Bug fix

The text area in the engagement window is hidden underneath the keyboard on iPad Chrome. It won’t appear even when scrolling up/down. This bug has been resolved.
