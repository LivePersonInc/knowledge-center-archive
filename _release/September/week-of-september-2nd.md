---
pagename: Week of September 2nd
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: September
permalink: release-notes-2019-september-week-of-september-2nd.html
isTutorial: false
isNew: false
published: true

---
These release notes include new features arriving to LiveEngage during September 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## \[Line\] Consumer to agent image and file sharing support

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
<td>Yes</td>
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

With the Line conversational interface, consumers can now share files and images from their device with agents on LiveEngage.

Supported file formats and sizes:
  * Image types: JPG, GIF, JPEG, PNG up to 10 MB
  * Document types: PDF, DOC (X), PPT (X), XLS(X) up to 15 MB

{: .notice} 
**Please note:** This feature requires enablement. For more information, please contact your LivePerson representative. 

**Screenshots**

Image 1: consumer sends an image to agent

![](img/week-of-september-2nd-1.png)

Image 2: agent sees the image consumer sends

![](img/week-of-september-2nd-2.png)

## \[Line\] Inform consumers of unsupported messages

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
<td>Yes</td>
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

When a consumer tries to send messages that are unsupported by LiveEngage, a notification message will be displayed to the consumer to indicate that.  Consumer message will not be sent to LiveEngage and agent will not be aware of it.

There are 3 types of notification messages that brands have the ability to configure:
* **Unsupported file or image types** - consumer will get this message when trying to share files or images that are not part of the supported list
  * Supported image types: JPG,GIF,JPEG,PNG
  * Supported document types: PDF, DOC (X), PPT (X), XLS(X)
  * The default notification message for this is: “Sorry! Unfortunately we are unable to send this file type”
* **File size limit** - consumer will get this message when trying to share files or images that exceed the file size limit 
  * Supported image size: up to 10 MB
  * Suported document size: up to 15 MB
  * The default notification message for this is: “Sorry! Unfortunately we are unable to send this file due to file size limit”
* **Unsupported message type** - consumer will get this message when trying to send any other message types that are supported by Line but not by LiveEngage (i.e: sharing location or when file sharing is off)
  * The default notification message for this is: “Sorry! Unfortunately we are unable to send this type of message”

{: .notice} 
**Please note:** This feature requires enablement. For more information, please contact your LivePerson representative. 

**Screenshots**

Image 1: configure how consumer sees the unsupported messages

![](img/week-of-september-2nd-3.png)

## \[Line\] Structured content support 

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
<td>Yes</td>
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

LiveEngage Structured Content is the framework for building conversational UI using various objects and elements such as: cards, lists, carousels, quick replies and more. LiveEngage messaging connectors support for the framework is intended to provide a rich conversational experience across all the LiveEngage messaging channels.

The Line connector has been enhanced to support the following structured content templates: 
* [Quick Reply template](https://developers.liveperson.com/facebook-messenger-templates-quick-replies-template.html) - Provides a way for consumers to submit a response to a question/statement by selecting from a set of buttons that each contain a title text and/or emoji. The buttons appear at the bottom of the screen, and will be published as text in the conversation thread upon consumer selection.
* [Generic template](https://developers.liveperson.com/facebook-messenger-templates-generic-template.html) - Simple structured card message that includes at least 1 button element and up to 3 buttons with either links or publish text actions:
  * Text title
  * Text subtitle
  * Image
* [Carousel template](https://developers.liveperson.com/facebook-messenger-templates-carousel-template.html) - Horizontally scrollable carousel of generic or button templates that includes a list of up to 10 generic or button cards that each can include:
  * Text title
  * Text subtitle
  * Image
  * Up to 3 buttons with either links or publish text actions

Brands will be able to share these templates through structured content basic elements while using the structured content JSON properties.

{: .notice} 
**Please note:** This feature requires enablement. For more information, please contact your LivePerson representative. 

**Limitations:** 
* For carousel structured content, number of items must be the same on each card.
* For quick replies template, only text button is supported.
* For quick replies template, up to 13 buttons with text title and publish text click action are allowed.

**Screenshots** 

Image 1: consumer sees quick replies option

{: .sidebyside} 
![](img/week-of-september-2nd-4.png)![](img/week-of-september-2nd-5.png)

Image 2: agent sees quick replies structured content

![](img/week-of-september-2nd-6.png)

Image 3: agent sends generic card template

![](img/week-of-september-2nd-7.png)

Image 4: consumer sees the card template and clicks on "more details"

{: .sidebyside} 
![](img/week-of-september-2nd-8.png)![](img/week-of-september-2nd-9.png)

Image 5: agent sends structured content with carousel template

![](img/week-of-september-2nd-10.png)

![](img/week-of-september-2nd-11.png)

Image 6: consumer sees structured content carousel template, clicks on "order now" then clicks "more details" 

{: .sidebyside} 
![](img/week-of-september-2nd-12.png)![](img/week-of-september-2nd-13.png)![](img/week-of-september-2nd-14.png)

## \[Line\] Secure forms support

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
<td>Yes</td>
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

Secure forms are now enabled for the Line connector. Secure forms allow brands to perform identification and authorization, and pass payment details to process payments, share PII information to generate leads, or to perform a registration process during a conversation in a PCI-compliant environment.

For more details on secure forms and how they are configured, please [read here](/security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html). 

## \[Line\] Post Conversation Survey support

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
<td>Yes</td>
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

The Line connector has been enhanced to support the Post Conversation Survey (PCS). The Post Conversation Survey enables brands to gather feedback from consumers and measure their success. Once a messaging conversation is ended by the agent, the survey will be automatically triggered. The bot will start to send the questions one by one as configured by the brand. Upon each consumer response, the bot will send the next question based on the logic defined. The survey questions and answers are based on regular text messages - all customized by the brand.

The survey can be closed in a number of different scenarios: Survey completed, survey timeout or survey skipped. Each outcome is tracked and reported on as part of the Report Builder to allow brands to fully analyze the results.

For more details on PCS and how it is configured, please [read here](/ai-bots-automation-post-conversation-survey-bot.html). 

**Screenshots**

Image 1: agent sees survey questions

![](img/week-of-september-2nd-15.png)

Image 2: consumer sees the survey in progress

![](img/week-of-september-2nd-16.png)

## \[Line\] Unfollow event support

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
<td>Yes</td>
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

When a consumer blocks or deletes an official brand, the brands can no longer send messages to this consumer. Therefore, the Line connector will automatically close an open conversation with this consumer, if it exists, to prevent agents from sending messages to the consumer.  In case an agent attempts to send a message to the consumer by resuming the conversation, he will see a NACK notification in the agent workspace. 

## [Bot Connectors] Add FaaS function as a new vendor

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

Bot Connectors now support “Custom Integration.” This allows the customer to write a custom vendor connector or bot implementation using LivePerson’s Functions (FaaS). The response to the customer can be customized using FaaS. This is acheived by the bot sending all messages and events it receives to the FaaS services, where they can be manipulated and then sent back to the customer.

**Dependencies:** LivePerson FaaS including customized events and templates

{: .notice} 
**Please note:** This feature requires enablement. For more information, please contact your LivePerson representative. 

**Screenshots** 

![](img/week-of-september-2nd-17.png)

![](img/week-of-september-2nd-18.png)

## [Bot Connectors] Finish initialization of job before the execution of bot

### Type: Bug fix

If the bot is started via the UI, but is in the start mode and then gets closed/shutdown, the clean up job is performed asynchronously, thus making job processing continue with the login/initialization tasks and executes the bot. However, as the job was deleted and yet not finished, it will be executed and become an orphan. Because of this it can only be removed by deleting the executing pod. This should be avoided at all costs by first finishing up the initialization process before deleting the job.

