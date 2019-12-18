---
pagename: Week of December 23rd
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-december-week-of-december-23rd.html
isTutorial: false
isNew: false
date: '2019-12-11'

---
These release notes include new features arriving to LiveEngage during December 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Queue prioritization] Priority for conversations sent back to the queue

### Type: New functionality (Agent Matching 4.0.1)

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

This feature enables brands to assign extra velocity to conversations that were sent back to queue by an agent. For example, assign extra priority to conversations that arrived to an agent just before he left for his lunch.

{. :notice} Please note: This feature requires enablement. Please contact your LivePerson representative for more information. 

## MCS in Spanish 

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

MCS is now available in Spanish. For every Spanish conversation the brands will now be able to get an MCS score. 

![](img/week-of-december-23rd-1.png)

## FaaS Debugger 

### Type: New functionality (FaaS 1.14)

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
<td>N/A</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The FaaS Debugger allows the user to start a new debugging session for any function. This provides developers with the capability to identify semantic issues during development faster.
As of now, the Debugger allows you to manage breakpoint, start/stop debugging session, step-over to next line, continue to new breakpoint/end, check variable values & show log output. Step-into functions is currently not supported.

Please note that each FaaS user-session will have an exclusive sandbox for debugging, while starting the debugger for the first time, users of the FaaS Debugger might experience a longer start up period (max. 30 sec).

![](img/week-of-december-23rd-2.png)

## [FaaS] Functions Sleep-Mode

### Type: New functionality (FaaS 1.14)

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
<td>N/A</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

So far FaaS ensured that your function is always running, even if it has not been invoked for the past weeks. In order to save server capacity we introduced the scale to zero feature for FaaS, Functions that have not been invoked for the past 72 hours, will be automatically stopped and warmed up on-demand during first invocation. This currently comes with a cost of 8 sec. warm-up time. In case this warm-up time is currently not acceptable, a scheduled job can be maintained to trigger an invocation within 72 hours. Please note that scheduled invocations are triggered without any input-data.

**Note:** Warm-up time will be reduced in future to be around 1 - 1.5 sec and Sleep-Mode will start already after a few minutes.

