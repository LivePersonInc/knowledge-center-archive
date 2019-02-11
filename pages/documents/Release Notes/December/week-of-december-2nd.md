---
pagename: 'Week of December 2nd '
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: ''
level3: December
permalink: release-notes-2018-december-week-of-december-2nd.html
isTutorial: false
isNew: false
date: 2019-02-10 11:16:18 +0200

---
These release notes include new features arriving to LiveEngage during December 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Smart Capacity Per Skill (AE-492)

<table>
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>No</td>
</tr>
</tbody>
</table>

Enable the Smart Capacity feature to be applied for specific skills. A brand can choose if the selected skills in the account would use the Smart Capacity default setting or custom settings.
Controlling the feature is available through Houston only. Contact you LP representative to configure Smart Capacity parameters.

### Maximum Wait Time In Queue (Chat Operational Realtime API)

<table>
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>Yes</td>
</tr>
</tbody>
</table>

This feature is an enhancement to Current Queue State method of Operational Realtime API and is available to all customers

A new metric is now available in the Current Queue State method of the Chat Operational Realtime API (currentMaxWaitTimeInQueue) and is available by skill.

The definition of this metric is: Maximum time chat visitors have been waiting in a given queue (skill) to be connected to an agent - the time begins when the chat enters a skill queue from either beginning a new chat, or from being transferred to a new skill.

The time shown is the maximum time across visitors in that skill in milliseconds (ms), or the maximum time across all skillIds in the given filter (“total”).

**How to enable**

To receive this metric in the Current Queue State API response, once must also pass **v=2** as a query parameter (instead of v=1)

**Please note:**

Currently the LiveEngage Web Visitors page also shows the maximum time a visitor has been waiting in queue - however, this time is the maximum time from the beginning of the visitors session, even if they have been transferred (meaning, the time is not reset upon transfer to a new queue).

The new metric instead will reset the timer for the maximum amount of time waiting in queue whenever the visitor changes queue due to an agent transfer.

Additionally, only chats that started within the last 24 hours will be included in the output of Maximum Waiting Time - meaning, if a visitor entered a queue over 24 hours ago and is currently waiting in queue, the currentMaxWaitTimeInQueue will not include this visitor.

![](/img/week-of-december-2nd-1.png)

## Enhancements

### Agent Navigation in Photo Sharing (AE-379)

<table>
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>No</td>
</tr>
</tbody>
</table>

If a consumer sends the agent multiple photos, the agent can now navigate between the photos using their mouse. We have added the ability to navigate via arrow keys on the keyboard as well.

## Bug Fixes

### Multiple agent survey's “Submit Requests” come from Web Agent unexpectedly (AE-858)

<table>
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>Yes</td>
</tr>
</tbody>
</table>

In some cases, web agent UI bombards the back-end server with dozens of agent survey submissions.  What should happen is that once an agent submits the survey, only one submission should be sent to the server. We are now actively blocking submissions of surveys if they are identical to the last submitted survey (for the same chat).

### User with Agent and Admin profiles unable to see their conversations on “All connections” tab (AE-827)

<table>
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>No</td>
</tr>
</tbody>
</table>

Users who were assigned both Agent and Admin profiles were unable to see conversations handled and closed by them in the “All Connections” tab. This issue is now resolved.

### For some languages (German and Romanian) buttons are overlapping within the Identification Verification Window (AE-191)

<table>
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>Yes</td>
</tr>
</tbody>
</table>

When using IDNV feature in German or Romanian languages, the “Submit” and “Cancel” buttons are overlapping one another. This issue has been resolved.

### Conversation widget opens with continuous loading gif instead of empty window for empty conversations (AE-179)

<table>
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>No</td>
</tr>
</tbody>
</table>

When you go to the “Open Connections” tab and open a conversation widget that has no messages within it,
a loading gif is displayed rather than an empty conversation transcript. After the fix, conversations without messages will display as an empty transcript

### Agent Widget SDK: bind to chatInfo does not always return chat skill (reopened) (AE-473)
<table>
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>Yes</td>
</tr>
</tbody>
</table>

On Agent widget SDK: bind to chatInfo does not always update "chatInfo.chatSkill”. This is now resolved. 