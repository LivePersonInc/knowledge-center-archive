---
pagename: Week of August 12th
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: August
permalink: release-notes-2019-august-week-of-august-12th.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during August 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [ABC] Increase file sharing size limit

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

Consumers can now share files and images that are bigger than before, improving the consumer experience and conversation quality:
* Size limit for file types PDF, DOC (X), PPT (X), XLS(X) is increased to 25 MB
* Size limit for image types JPG,GIF,JPEG,PNG is increased to 10 MB

**Dependencies:**
* UMS 3.22

**Limitation:** File name must start with a letter if size is greater than 10 MB.

## [ABC] Support structured content list picker within Post Conversation Survey messages

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
<td>Yes</td>
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

ABC Post Conversation Survey is enhanced to support survey questions with structured content of these types:
* List Picker
* Date Picker

This is in addition to the support of questions with quick replies option, which is already supported.

## [ABC] Mapping customer’s device locale setting to language engagement attribute

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
<td>Yes</td>
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

ABC “Locale” property, taken from the customer locale setting will be added to the ABC connector and mapped to the language SDE. This value will be presented to the agent as part of the consumer personal info section and can be used for routing, by bot, and for reporting purposes.

For example, locale value "en_AU" specifies the language as English and the region as Australia. This property will be mapped to the language SDE under Personal info.

**Screenshot**

Image 1: Language SDE added under Personal info

![alt text](img/week-of-august-12-1.png)
