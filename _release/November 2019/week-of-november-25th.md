---
pagename: Week of November 25th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-november-week-of-november-25th.html
isTutorial: false
isNew: false
date: '2019-11-20'

---
These release notes include new features arriving to LiveEngage during November 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Enhancements to the agent survey for messaging
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

The agent survey for messaging was enhanced with the following new capabilities:
* **Previously submitted surveys** - The agent survey widget will now have a new tab named ‘previously submitted’. This tab will show all surveys that have been submitted for the current conversation. A new permission will be added. If the permission ‘view previously submitted surveys’ is on, the agent will see **all** surveys submitted for the conversation, even by other agents. When the permission is off, the agent will see only surveys submitted by themself.
* **Engagement history widget** - The engagement history widget will now reflect the last submitted agent survey for each conversation
* **All Connections icon (old agent workspace)** - Conversations with pending surveys will have a new icon in the All Connections list, showing the survey is still pending. A pending survey is a survey that has not yet expired and wasn’t submitted.
* **All Connections filtering (Current workspace)** - New filters were added in order to find specific conversations per the following:
  * Survey status (pending/non-pending)
  * Survey name / id
  * Survey questions + answers
* **Closed conversations icon** - Agents will have an indication of conversations that are pending agent survey in their closed conversations section.

**Screenshots** 

![](img/week-of-november-25th-1.png)

![](img/week-of-november-25th-2.png)

## Light and dark theme support for Users module

### Type: Enhancement

The new light and dark themes are now supported in the Users section of LiveEngage. Starting with this version, the selection of light/dark theme will apply to the appearance of the users configuration section in the platform. 

**Screenshots** 

Dark theme:

![](img/week-of-november-25th-3.png)

Light theme: 

![](img/week-of-november-25th-4.png)

## Ability to remove the engagement window border

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

Brands now have the ability to configure whether the engagement window frame will have a border or not. This new configuration has been added to the "Additional window settings" area of the engagement window studio, under the "Look and feel" section.

By default the configuration is set to “Yes”, which means that the window will have a border, as it does today. This will apply to the embedded window for normal and maximized states (with slideout) on mobile and desktop.

**How to enable:**
* Log into LiveEngage
* Go to Engagement studio
* Click on “Additional window settings”
* Expand “Look and feel” section
* Click on the dropdown for “Engagement window border” and select “Yes”
* Click on “Save”

**Screenshots** 

Image 1: Configure engagement window border

![](img/week-of-november-25th-5.png)

Image 2: Engagement window with border vs without border

![](img/week-of-november-25th-6.png)

![](img/week-of-november-25th-7.png)

## Ability to configure the engagement window shadow 

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

Brands now have the ability to configure the engagement window shadow. This configuration has been added to the “Additional window settings” area of the engagement window studio, under the “Look and feel” section.

**The field reads:** Entry must be in the format of h-offset(px) v-offset(px) blur(px) spread(px) rgba(red,green,blue,alpha). Rgb valid value is between 0-255. An invalid format notification message will be displayed if the rgb value is entered outside this range.
Default value is 0 0 16px 3px rgba(0,0,0,0.2). Please note: px is mandatory if non zero value is used. Eg. 0 0 16px 3px rgba(0,0,0,0.2).

This entry will apply to the embedded window for normal and maximized states (with slideout) on desktop.

**How to enable:** 
* Log into LiveEngage
* Go to Engagement studio
* Click on “Additional window settings”
* Expand “Look and feel” section
* Enter values for “Engagement window shadow”
* Click on “Save”

**Screenshots**

Image 1: Configure engagement window shadow

![](img/week-of-november-25th-8.png)

Image 2: Engagement window with shadow

![](img/week-of-november-25th-9.png)

Image 3: Engagement window without shadow

![](img/week-of-november-25th-10.png)

## Horizon theme enhancements

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

The following features are now included by default for any new engagement window with the Horizon theme:
* Emoji icon
* Menu at the top + attachment icon (for web messaging)
* Floating window with rounded corners at the bottom
* Grouped bubbles
* Grouped timestamp
* Timestamp located below the bubble
* New send icon
* Browser notification: tab and native

**Screenshots**

All new features as default: 

![](img/week-of-november-25th-11.png)

![](img/week-of-november-25th-12.png)

## Improve the engagement window text area focus

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

In order to improve the look and feel of the engagement window, once the consumer focuses on the text area in the engagement window, they will now see a blue border appear. 

The new design includes the following changes when the text area is in focus:
* Cursor is in the text area field
* Top border color is #00085EF
* Text area covers the entire area including the buttons
* Text area turns 10% lighter

**Please note:** This change will be applied automatically to all engagement windows for both new and existing accounts.

**Screenshots** 

Image 1: Look and feel of text area when in focus before and after

![](img/week-of-november-25th-13.png)

![](img/week-of-november-25th-13a.png)

## File sharing attachment not working

### Type: Bug fix

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

Consumer to agent file sharing is not working on mobile iOS 13 and Safari desktop version 13. When visitors try to share files with an agent, they see an error indicating there was an issue sending it. This was caused by the thumbnail size for the file being too big and eventually dropped the websocket connection. 

**Fix:** In order to circumvent this issue, the thumbnail image is replaced with the generic “Click to View” image. This generic thumbnail image will be used for all supported file types that visitors share with agents. The thumbnail will be presented for both the agent and the consumer.

**Please note:** This is only for the Safari version. All other browsers remain the same.

**Screenshots**

Image 1: Consumer shares file on mobile iOS 13

![](img/week-of-november-25th-14.jpeg)

![](img/week-of-november-25th-15.jpeg)

Image 2: Consumer shares file on mobile iOS 13 - agent side

![](img/week-of-november-25th-16.png)

## Secure form displays with incorrect header and blank screen after conversation is closed

### Type: Bug fix 

If a visitor has filled out a secure form and submitted it to the agent, and then closes the conversation window, reopens the window and clicks on the secure form link in the conversation history, the form will open in a slide out window but the panel will appear bank. This issue has been resolved.

## [Manager workspace] New wait time in queue metric

### Type: New functionality  

In order to have better visibility of the status of the queues, a new “Wait time” metric has been added to the “Queue summary” widget. The metric is available on a skill level (queue) breakdown. 

The metric displays the **90% percentile of the consumers wait time for an agent assignment.** This means that 90% of consumers are currently waiting for an agent assignment for this amount of time or less. The metric is not impacted by the time frame filter, as it is showing the current status of the queue.  

![](img/week-of-november-25th-17.png)

## [Manager workspace] New overdue metric 

### Type: New functionality  

The new overdue metric has been added in the following two locations of the manager workspace: 
* **Queue summary:** This metric displays the number of conversations *assigned to agents* of the groups you manage, which exceeded the target response time.
* **Activity summary:** This metric displays the number of conversations *waiting in queue*, which exceeded the target response time.

![](img/week-of-november-25th-18.png)

## [Manager workspace] Filter by specific hour 

### Type: New functionality  

Until now, users have been able to change the time range of the manager workspace to view data from the past X hours (maximum supported time range is 24 hours).

With this version, users will also be able to filter the workspace from a specific hour in time, in a range between midnight and the current time. This is most useful for brands wishing to monitor the workspace from the beginning of the business day or the shift. 

![](img/week-of-november-25th-19.png)

## Navigation from enhanced agent workspace to the manager workspace 

### Type: New functionality 

When a user drills down to read the transcript of a specific conversations from the “Conversations widget” in the manager workspace, the user is navigated to the enhanced agent workspace. Today, in order to navigate back to the conversation list, the user has to click on the manager workspace icon in the navigation bar. With this version, in order to make the flow more clear, a new “Back to manager workspace” button has been added to easily help you navigate back to the manager workspace.

{: .notice}  
**Please note:** This functionality is available only to agent managers who are using both the new manager workspace and the enhanced agent workspace.

![](img/week-of-november-25th-20.png)

## [PCS] New email transcript questions as part of the template  

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

Two new questions were added at the end of the Post Conversation Survey template:
* **Email transcript question:** The text question “Would you like us to email you a transcript of this conversation?” with quick replies ‘Yes’ or ‘No’. Once the consumer selects the “Yes” option he will be prompted with the second question. The “No” option will lead the consumer to the end of the survey.
* **Email address question:** The text question: “Please provide your email”. Once the consumer types his email address the bot checks whether the email address is valid. For more information please refer to the “Response to unrecognized user email” section.

![](img/week-of-november-25th-21.png)

## [PCS] New email transcript predefined brick 

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

A new email transcript brick was added to the predefined brick list for the Post Conversation Survey. The brick includes an email address question. This is the text question: “Please provide your email”. Once the consumer types his email address the bot checks whether the email address is valid. For more information please refer to the “Response to unrecognized user email” section.

![](img/week-of-november-25th-22.png)

## [PCS] New “Response to unrecognized user email” settings

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

Once the survey includes an email transcript question that was selected either from the survey template or from the predefined bricks, it is required to configure the email transcript response.
The survey settings have a new section for “Response to unrecognized user email” settings under
“Bot message to unrecognized user email”

The new settings include: 
* Bot message to unrecognized user email. The default message is “Please provide a valid email address”
* Skip survey automatically after X unrecognized user email. The default is set to 2.
* Closing message due to unrecognized email. The default message is “The email address is not valid. The survey will now close. Sorry for the inconvenience”
* Please provide sender email address. This email is a must in case you have an email transcript question in your survey. 
* Please provide sender name. This will be presented in the email as the sender’s name. Sender name must be provided in case the survey includes an email transcript question.

{: .notice} 
**Note:** For help configuring email settings please contact your LivePerson representative. 

![](img/week-of-november-25th-23.png)

## Email conversation transcript 

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

If the Post Conversation Survey includes an email transcript question and the consumer provided a valid email address, an email with the conversation transcript will be sent to them.
The email will be sent from the email address that was set as part of the survey settings and the sender name will be based on the survey settings as well. The transcript will include text only.

**Limitations:** Rich content messages, such as structure content and files, are not supported at this stage and will be presented as “Rich content was shared by agent/you”.

For more information please refer [here](/ai-bots-automation-post-conversation-survey-bot.html).

![](img/week-of-november-25th-24.png)

![](img/week-of-november-25th-25.png)

## [Enhanced agent workspace] Hyperlink support for messaging 

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>v</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

Brands now have the ability to share hyperlinks with consumers during a messaging conversation from the enhanced agent workspace.

In order to do so, a new hyperlink button has been added to the agent workspace, allowing agents to define the link text and URL:

![](img/week-of-november-25th-26.png)

After filling in the data and pressing OK, the agent will be able to share the hyperlink with the consumer, as part of the general message.
Within the agent input area, the hyperlink will appear in blue and underlined, to indicate that it is a hyperlink and the agent will be able to edit it as long as the message was not sent yet. 

![](img/week-of-november-25th-27.png)

After sending the message to the consumer, the link will appear underlined as well in the transcript area. The link will be clickable for the agent via the agent workspace:

![](img/week-of-november-25th-28.png)

The consumer experience will be identical, and the hyperlink will be displayed as a clickable text within the conversation window:

![](img/week-of-november-25th-29.png)

{:. notice}
**Please note:** This feature requires enablement. For more information please contact your LivePerson representative. 

**Limitations:**
* Hyperlinks are supported in messaging for users working with the enhanced agent workspace only. The old agent workspace does not support hyperlinks for messaging.
* Hyperlinks are only supported for web messaging (including mobile web), and are not supported for the mobile app or other channels 
 * The hyperlink button will not be displayed for conversations originating from unsupported sources.
 * Since consumers may start conversations from web messaging and continue their messaging interaction from the mobile app, brands should be aware of the fact that links will not be displayed for mobile consumers. 

For more information [click here](https://knowledge.liveperson.com/messaging-channels-rich-messaging-hyperlinks-overview.html).

## [Enhanced agent workspace] Updated keyboard shortcuts 

In the enhanced agent workspace, some of the agent shortcuts were not working properly for some browsers on specific operating systems. We found that some of the shortcut combinations (e.g. users working with Internet Explorer on Windows) were already in use by the browser or by the operating system. Therefore, we changed the shortcut combinations so that they will be supported for all browsers, in all operating systems.

The new shortcuts are as follows:
* Move to next conversation: Alt + Shift + M
* Deselect conversation: Alt + Shift + U
* Copy as plain text: Alt + Shift + Y
* Return to queue: Alt + Shift + Q
* Transfer conversation: Alt + Shift + R
* Close conversarsation: Alt + Shift + W
* Accept conversation: Alt + Shift + N
* Takeover conversation: Alt + Shift + O
* Leave conversation: Alt + Shift + I
* Logout from LiveEngage: Alt + Shift + L
* Change status: Alt + Shift + S

**Screenshots**

![](img/week-of-november-25th-30.png)

## Support for sending multiple messages with Microsoft Bot connector
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

This feature enhances the Microsoft Bot Framework connector in sending multiple messages from MS Bot Framework to our connector within one activity. This bypasses the limitation that our connector only checks the first activity that is sent in response to a customer message. The messages can be one of the following: Rich Content, Pause, Text.

## Support for encoded metadata with all the vendors 
### Type: New feature

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

LiveEngage Messaging provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field and is available as of UMS 3.15 version. This enhancement is now supported by Third-Party bots as well with all the vendors (Dialogflow V2, Watson V1 and V2, Amazon Lex, FaaS and Microsoft Bot Framework).

##  Bot Wizard  breadcrumbs clickable allowing easy navigation 
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

Previously, the breadcrumbs of the four configurations step of Bot wizard were not clickable. The only way to navigate from each step was with the buttons below it; back and next. With this enhancement, the user can directly jump back to any step, to check the configuration.
Jumping forward is only blocked in case a step is not completed (empty mandatory fields) but jumping back is still possible by clicking on the breadcrumbs.

![](img/bot_connectors_RN2.13_1.png)

## Viewing of the configuration of a running bot 
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

Previously, if a user wanted to see the configuration of a bot then it was only possible if the bot was offline. This enhancement in our system allows the user to see the bot configuration in read-only mode even if the bot is running. This option can be accessed from the menu in the listing page of bots.

![](img/Bot_connectors_RN2.13_2.png)

## Deprecate Dialogflow
### Type: Change

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

Support for Dialogflow V1 has been removed from our connector. The user will no longer be able to create or start a Dialogflow V1 bot.

## Watson SDK update to 5.0
### Type: Change

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

Watson introduced a new SDK with enhancement on all over the library for Assistant. The library has been updated to conform with the new breaking changes and standards of the new SDK.

## Fix inactive visitor timeout behaviour on chat
### Type: Bug fix

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
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

With this bugfix for an inactive chat, the system will not only send the warning message but also the closing message will be shown and the chat will be closed as defined in the chatbot configuration. 

## Bot dashboard or listing doesn’t show the updated state
### Type: Bug fix

If the bot is running correctly, even after the interruption, this state is not reflected in the bot status dashboard or listing.

## Watson V2 session expires after 5 minutes causing escalations if user response is delayed
### Type: Bug fix

Watson session expires after 5 minutes. This means if a consumer sends a message after that time, it will be escalated due to an error. 

## Fixing issues during conversation context creation for messaging
### Type: Bug fix

Sometimes the bot is not responding to the welcome message on messaging.
Looking into the logs filtered on the convId from the E2E logs  we noticed the following error:
"Could not create conversation context"
It looks like this happens to a lot of conversations because campaignInfo is undefined in the conversationDetails and when creating the conversationContext this is not expected.
This will be caught and the context is created based on the history API data.

## Cannot start/stop bots from dashboard
### Type: Bug fix
Since white-theme release, the start/stop buttons in the dashboard don’t work anymore. This fix removed that problem.
