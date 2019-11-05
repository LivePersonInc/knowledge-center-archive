---
pagename: Week of October 21st
categoryName: Getting started
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-october-week-of-october-21st.html
isTutorial: false
isNew: false
date: 2019-10-21
---
These release notes include new features arriving to LiveEngage during October 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## \[WhatsApp\] Unsupported message types - configurable notifications

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

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

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

When a consumer tries to send messages that are unsupported by LiveEngage, a notification message will be displayed to the consumer to indicate this. The consumer message will not be sent to LiveEngage and the agent will not be aware of it.

There are 3 types of notification messages that brands have the ability to configure

* Unsupported Type Reply Message - consumer will get this message when trying to send any other message types that are supported by WhatsApp but not by LiveEngage. i.e: sharing live location, sharing a sticker or when file sharing configuration is off.
  The default notification message for this is “_Sorry! This brand cannot receive this message type."_
* Unsupported File Size Reply Message - consumer will get this message when trying to share files, audio or images that exceed the file size limit. These are the supported sizes:

  \- Image size: up to 10 MB

  \- Document size: up to 10 MB

  The default notification message for this is: _"Sorry! This brand cannot receive this file size."_
* Unsupported File Type Reply Message - consumer will get this message when trying to share files, audio or images that are not part of the supported list. This is a list of supported file types:

  \- Image types: JPG, GIF, JPEG, PNG

  \- Document types: PDF, DOC (X), PPT (X), XLS(X)

  The default notification message for this is: _"Sorry! This brand cannot receive this file type."_

To enable please contact your LivePerson account team.

## \[WhatsApp\] Busy message customization was not working

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

<td>Yes</td>

<td>No</td>

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

Customized busy message that was configured per WhatsApp number will be sent to consumer. If there is no value configured, then the default will be “Your message was aborted as you currently hold another conversation on a different skill channel”.

## Support Function Pre, Post and Error Hooks

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

**Error-Hook:** Allows to connect a Function, which gets invoked by every error the bot occurs. The invocation payload contains conversation and error specific data.

**Pre-Hook:** Allows to connect a Function, which gets invoked before a customer message is sent to the vendor, containing all data the vendor would get. With this, it’s possible to modify and expand the data which the vendor receives.

**Post-Hook**: Allows to connect a Function, which gets invoked after the vendor sent a response, containing all data the vendor sent. With this, it’s possible to modify and expand the data which the customer receives.

**Screenshots**

![](img/Pre_Post_Error_Hooks1.png)

## Support sending LiveEngage Attributes as Context

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

Sending of [LiveEngage Attribute](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html) is supported and the LiveEngage attributes are collected **only** at the start of a conversation and passed along with every message.

## Conversation Metric fix

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

The word 'Run time' was written incorrectly in the conversation metrics. It should be replaced with 'Runtime' rather than "run time" in Conversation Metric.

![](img/Run_time_fix.png)

## Bot action menu in status dashboard fix

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

The design of the menu popover, consisting of 'Edit' and 'Delete' options in the Bot Status Dashboard, is not consistent with the design of the popover seen on the bot listing page. This has now been corrected.

![](img/Bot_Connectors_fix2.png)

## Tooltip design fix

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

The tooltip design was showing vertical lines while hovering over the status icon on the Bot Dashboard. This error has now been fixed.

![](img/Bot_Connectors_fix3.png)
