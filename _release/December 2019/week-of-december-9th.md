---
pagename: Week of December 9th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-december-week-of-december-9th.html
isTutorial: false
isNew: false
date: '2019-12-04'

---
These release notes include new features arriving to LiveEngage during December 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## MCS Toolkit - Restrict Access by Profile
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

{: .notice}
This feature is for existing or new MCS Toolkit customers. 
If you are interested in becoming an MSC toolkit customer, please contact your account manager.

Brands can now have greater control over who within the brand organization has access to MCS Toolkit data by specifying which profiles have access to MCS Toolkit.
Additionally, enabling this feature will also restrict data views for agent managers to only data related to the group(s) they manage.

**How to enable**
Please contact your account manager.
This feature works in tandem with the LiveEngage Apps feature. The Restrict Access by Profile feature will restrict login to MCS Toolkit based on the profiles in enabled for MCS Toolkit in LE Apps. A self-serve UI for managing app permissions will be available soon, but in the meantime, these permissions can be managed by your account team.
{: .notice}
With this feature enabled, Campaign Managers will not see any data in the MCS Toolkit.

## Realtime Dashboard - Restrict Access by Profile
### Type: Enhancements

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

{: .notice}
This feature is for existing or new Realtime Dashboard customers.

Brands can now have greater control over who within the brand organization has access to MCS Toolkit data by specifying which profiles have access to Realtime Dashboard.
Additionally, enabling this feature will also restrict data views for agent managers to only data related to the group(s) they manage.

**How to enable**
To enable, please contact your LivePerson account team.
This feature works in tandem with the LiveEngage Apps feature. The Restrict Access by Profile feature will restrict login to Realtime Dashboard based on the profiles in enabled for Realtime Dashboard in LE Apps. A self-serve UI for managing app permissions will be available soon, but in the meantime, these permissions can be managed by your account team.

{: .notice}
With this feature enabled, Campaign Managers will not see any data in the Realtime Dashboard.

## Agent status is not updated correctly in case of backend failure (Hotfixes for LEUI 1.3)
### Type:Bug fix

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

Whenever agent changes their status on LiveEngage, sometimes the new status chosen by the agent is only updated in the LiveEngage UI, although it was not actually changed in the backend (due to connectivity issues, for example).
This causes a discrepancy between the status displayed to the agent, and the actual status reported to the backend server. It may also affect the reporting, since the brand is expecting to see X total hours of online/away, while the numbers are actually different.
This bug has been fixed, and now whenever there are connectivity issues/backend issues, LiveEngage UI will be updated with the new agent status (according to the actual status saved in the server).

## Reject conversations when the agent is NOT in online state (Hotfixes for LEUI 1.3)
### Type:Bug fix

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

Whenever an agent changes status on LiveEngage from Online to Away/Back soon, LiveEngage UI displayed the newly updated status to the agent, without validating that all of the backend systems are aware of the status change.
For this reason, Messaging accounts could experience a discrepancy between the status displayed to the user on LiveEngage (e.g - Agent displayed as Away), while in realtime, the agent kept getting incoming messaging conversations (since the internal backend server consider the agent to be Online).
This bug has been fixed, and now whenever the agent changes status through LiveEngage system to Away/Back soon, any incoming Messaging conversation will be rejected.

## Online agents are not getting new incoming messaging conversations (Hotfixes for LEUI 1.3)
### Type:Bug fix

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

Messaging customers may sometimes experience a situation where agents are Online, there are conversations in queue, but the agents are not getting any new incoming rings. This bug has been fixed.

## Fix for memory leak with Custom Widgets on old agent workspace causes system crash (Hotfixes for LEUI 1.3)
### Type:Bug fix

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

A previous fix made on the New agent workspace version 1.8 for Memory leak with Custom Widgets IE-11 on, caused LiveEngage old workspace to crash, whenever the user clicked “Hide conversation”.
The bug has been fixed, and agents can hide conversations without experiencing any issues in the old agent workspace.

## SDE's structure discrepancy between old Agent Workspace and new workspace (Hotfixes for NAW 11.8)
### Type:Bug fix

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

For customers using custom widgets, and reporting Engagement Attributes, we found out the following engagement attributed structure is different in old workspace vs. the new workspace.
The following field names has been changed:
“customerStatus": was 'status'
"customerType": was 'type'
This bug has been fixed, and the fields names are now identical to the old workspace names.
