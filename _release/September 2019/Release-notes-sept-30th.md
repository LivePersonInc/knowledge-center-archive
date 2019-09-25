---
pagename: Week of September 30th
categoryName: Release notes
subCategoryName: '2019'
indicator: both
subtitle: ''
level3: September
permalink: release-notes-2019-september-week-of-september-23rd.html
isTutorial: false
isNew: false
published: false

---
These release notes include new features arriving to LiveEngage during September 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Auto Closet reset

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

This feature defines a set of configurations that would enable brands to achieve finer control over what kind of scenarios would trigger the auto-close mechanism to reset its countdown to conversation close per a specific conversation. The new configuration will enable the control if a conversation auto-close timer should be reset or not when a conversation:

* Was opened for viewing without having the viewing agent join the conversation (joins just as a READER).
* Was joined by an agent/agent manager/admin as an active participant in the conversation.

Besides these new configurations, writing a line in the conversation or changing its state would still reset the auto-close timer.

**How to configure?**

Please contact your LivePerson account team

## Partial data masking

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

Enables brands to configure a data-masking regex which leaves the final four digits of credit card numbers unmasked. This is an addition to the recently released data-masking feature which masks the entire credit card of object matching the regex. Clients who choose the leave the final four digits of credit cards unmasked can track and audit messages while retaining consumer privacy.

**How to configure?**

Please contact your LivePerson account team

## Static load balancing 

### Type: Enhancement

 As part of the Static Load Balancing feature, a conversation’s allocated group field, used to route conversations to specific agent groups, will be set based on the resuming agent group ID.   
The above action would take place only if the Load Balancing feature is Enabled by your LivePerson account team.