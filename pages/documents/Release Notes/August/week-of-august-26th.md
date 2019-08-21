---
pagename: Week of August 26th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: August
permalink: release-notes-2019-august-week-of-august-26th.html
isTutorial: false
isNew: false
published: false

---
These release notes include new features arriving to LiveEngage during August 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Agent survey for messaging

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

Agent surveys prompt agents to record information about the conversation, update the sales lead status, and more after a conversation is complete. The information gathered can be used to optimize brand operations, improve campaigns, train agents, get additional information about conversions, reduce the need to transfer, etc. Currently, brands use the agent survey in chat to categorize, qualify and collect more information about the conversation. The agent survey feature will be added to messaging conversations to provide similar benefits.

In this phase, the following capabilities will be available:
* Agent managers will be able to configure the survey questions, timeout and skill
* The survey will appear as a new widget in the agent workspace
* Each conversation can have multiple surveys submitted
* Agents can submit engagement attributes (e.g agent on behalf for messaging)
* Custom reports can be developed upon request by the Analytics team

{: .notice}
**Please note:** This feature requires enablement. For more information, please contact your LivePerson representative. 

**Limitations:**
* Reporting in the Report Builder will be available in November. Custom reports can be developed upon request by the Analytics team.
* All Connections filtering of pending survey - coming early September.
* Agent survey in the current agent workspace only. Messaging agent survey for the enhanced agent workspace coming November 2019.

**Screenshots**

Image 1: Messaging agent survey library 

![](img/week-of-august-26th-1.png)

Image 2: Assign messaging agent survey to skills 

![](img/week-of-august-26-2.png)

Image 3: Edit/create agent survey 

![](img/week-of-august-26-3.png)

Image 4: Messaging agent survey widget in the agent workspace 

![](img/week-of-august-26-4.png)

## Support Video/Voice in the widget SDK

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

Brands will be able to integrate a video/audio solution within LiveEngage using the Agent Widget SDK.

{: .notice}
**Please note:** This feature requires enablement. For more information, please contact your LivePerson representative. 

## Support browser notifications


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
<td>No</td>
</tr>
</tbody>
</table>
</div>

Brands now have the ability to configure whether or not and how to notify consumers of new incoming messages in an ongoing conversation, even when they are not on your website. 

Brands have the ability to choose from one or more of the following types of web notifications

* **Native browser notification** - If the brand enables this feature, when a consumer with an open conversation navigates to a different website/app and gets a new message from an agent/bot, a browser notification appears immediately to alert them of the new message. The notification includes 3 elements:
  * Title: “New message from <agent name>”
  * Body: The message that was sent. Below you may find more information about the body text that the consumer will receive for different types of incoming messages
  * Logo: the brand's browser tab favicon 

* **Webpage tab notification** - Consumers will be able to see the number of pending agent/bot messages they have received 

For both notification types:
* Consumers will be notified only of new agent/bot incoming messages, as well as of new PCS messages
* Consumers will not be notified of new auto messages or new system messages

Configuration is available at the window level for **web messaging only**, and is disabled by default. The notification language will be set based on the engagement language.

Native notification behaviour:
* On the first attempt to send the browser notification to the consumer, the consumer will get an approval request he must accept
* The consumer can remove the notification via the browser notification settings at any time

This feature will be supported for both desktop and mobile devices
* **Desktop:** Chrome, Edge, Firefox, Opera, Safari
* **Mobile devices:** Chrome for Android, Firefox for Android, Opera for Android, Samsung Internet

**How to enable**
* Log into LiveEngage
* Go to Engagement window studio
* Click on “Open additional window settings” icon
* Click on “Browser Notifications” section, click on “Native Notification” dropdown and select “Yes”
* Click on “Webpage Tab Notification” dropdown and select “Yes”
* Click Save

**Screenshots** 

Image 1: Enable browser notifications

![](img/week-of-august-26-5.png)

![](img/week-of-august-26-6.png)

Image 2: Consumer sees browser notification

![](img/week-of-august-26-7.png)

![](img/week-of-august-26-8.png)
 
## Sandboxing the iframe of a custom agent widget blocks PDFs

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

As part of adding the flexibility to remove the sandbox attribute from the widget SDK, PDFs should have been allowed to be opened in the widget. This has been resolved.



