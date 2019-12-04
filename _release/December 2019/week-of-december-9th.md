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

## Agent status not updated correctly in case of backend failure 
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

Whenever agent changes their status within LiveEngage, sometimes the new status chosen by the agent was only updated in the LiveEngage UI and this change was not reflected in the backend (due to connectivity issues).
This caused a discrepancy between the status displayed to the agent and the actual status reported to the backend server. It may also have affected the reporting.

This bug has been fixed, and now whenever there are connectivity issues/backend issues, LiveEngage UI will be updated with the new agent status (according to the actual status saved in the server).

## Reject conversations when agent not online  
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

For this reason, messaging accounts could experience a discrepancy between the status displayed to the user on LiveEngage (e.g - Agent displayed as Away), while in realtime, the agent kept getting incoming messaging conversations (since the internal backend server considered the agent to be Online).

This bug has been fixed, and now whenever the agent changes status through LiveEngage to Away/Back soon, any incoming Messaging conversation will be rejected.

## Online agents are not getting new incoming messaging conversations 
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

Messaging customers sometimes experienced a situation where agents were Online and there were conversations in queue, but the agents were not getting any new incoming rings. This bug has now been fixed.

## Fix for memory leak with Custom Widgets on old agent workspace caused system crash 
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

A fix was made on the new agent workspace for memory leak with Custom Widgets working with Internet Explorer 11. It caused the LiveEngage old workspace to crash whenever the user clicked “Hide conversation”.
The bug has now been fixed, and agents can hide conversations without experiencing any issues in the old agent workspace.

## Engagement attribute's structure discrepancy between old agent workspace and new workspace 
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
<td>No</td>
</tr>
</tbody>
</table>
</div>

For customers using custom widgets, and reporting engagement attributes, it was found that the following engagement attributes structure were different in old workspace vs. the new workspace.
The following field names have been changed:
“customerStatus": was 'status'
"customerType": was 'type'
This bug has been fixed, and the field names are now identical to the old workspace names.
