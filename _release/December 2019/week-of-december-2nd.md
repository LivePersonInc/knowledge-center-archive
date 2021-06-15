---
pagename: Week of December 2nd
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-december-week-of-december-2nd.html
isTutorial: false
isNew: false
date: '2019-11-27'

---
These release notes include new features arriving to LiveEngage during December 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [GMB/P2A] Consumer to agent image sharing support 

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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

Brands now have the ability to enable image sharing from consumers to agents, while allowing consumers to use the Google Business Messaging conversational interface to share images from their device with agents. 

Supported file formats and sizes:
* Image types: JPG, GIF, JPEG, PNG 
* Size: up to 10 MB
 
If the consumer sends an image that is not supported or image size is beyond the supported size, the agent will receive the image as a URL. If the file sharing has not been enabled, the consumer will see this message: “Sorry! Unfortunately files cannot be sent via Google.”

{: .notice}
**Please note:** This feature requires enablement. For more information please contact your LivePerson representative.

**Screenshots** 

Image 1: Consumer sends an image to agent

![](img/week-of-december-2nd-1.png)

Image 2: Agent sees the image in their workspace

![](img/week-of-december-2nd-2.png)

## [ABC] URL error in CIM with SDK enabled

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

When an account has an SDK enabled, ABC Customer Interactive Message (CIM) property URL was encoded twice when additional payload was provided. This has been resolved. 

[ABC] Blank conversations

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

Some brands were experiencing empty, or blank conversations coming from Apple Business Chat in the agent workspace. A fix and resolution has been applied to prevent this bug going forward.
