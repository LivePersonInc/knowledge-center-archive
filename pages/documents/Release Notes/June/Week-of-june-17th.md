---
pagename: Week of June 17th
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: June
permalink: release-notes-2019-june-week-of-june-17th.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during June 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Fallback skill per skill 

### Type: new feature

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

While assigning conversations to agents, it is possible that certain skills would have no online agents that could receive the conversations. In such cases, brands need to be able to define a secondary fallback skill to which the conversation will be assigned.

Fallback skill per skill adds a new section under the skill settings in LiveEngage that enables brands to define the skill to which conversation will be routed if there are no online agents on the skill or if all agents are in an away status.

## ![](/img/fallback skill.png)  
Queue prioritization - Priority based on consumer attributes

Enable brands to define business rules that would assign extra priority to specific conversations based on the consumer engagement attributes. The supported consumer attributes according to which the new business rules can be defined are listed in this link under:

* Consumer Info
* Personal Info

Example use case - “If the customer associated with a conversation is either a VIP customer OR has a balance in his account of more than 2000 units OR registered with the company before 10.15.2014, assign a velocity of 15 to the conversation.