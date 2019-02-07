---
pagename: 'Week of Dec 17th '
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: LiveEngage Release Notes
level3: December
permalink: release-notes-2018-december-week-of-Dec-17.html
isTutorial: false
isNew: false
date: 2019-02-06 14:57:08 +0200

---
These release notes include new features arriving to LiveEngage during December 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

\***Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important} The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Maximum wait time in queue metric in real-time dashboard

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

A new metric is now available in the Current Queue State method of the Chat Operational Realtime API (**currentMaxWaitTimeInQueue**) and is available by skill. It is now exposed by default in the Realtime Dashboard.

The definition of this metric is: Maximum time chat visitors have been waiting in a given queue (skill) to be connected to an agent - the time begins when the chat enters a skill queue from either beginning a new chat, or from being transferred to a new skill.

The time shown in the Realtime Dashboard is the maximum time across visitors in that skill, or the maximum time across all skillIds in the given filter (“total”) - all times are displayed in minutes and seconds.

**How to enable**

Enabled by default in the Realtime Dashboard

**Dependencies**

None

**Please note:**

Currently the LiveEngage Web Visitors page also shows the maximum time a visitor has been waiting in queue - however, this time is the maximum time from the beginning of the visitors session, even if they have been transferred (meaning, the time is not reset upon transfer to a new queue).

The new metric instead will reset the timer for the maximum amount of time waiting in queue whenever the visitor changes queue due to an agent transfer.

Additionally, only chats that started within the last 24 hours will be included in the output of Maximum Waiting Time - meaning, if a visitor entered a queue over 24 hours ago and is currently waiting in queue, the **MAX WAIT IN QUEUE** will not include this visitor.

**Screenshots**

![](/img/Week-of-December-17.png)

### Abandon Segments Rate (%)

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
<td>N/A</td>
<td>Yes</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Addition of new calculated metrics from Skill Segment API**.**

Two new metrics are now available in the Realtime Dashboard (Messaging mode).

1. Abandoned Segments % - percentage of segments abandoned during the last skill-segment (calculated as Abandoned Segments divided by Total Segments)
2. Abandoned Segments in Queue % - percentage of segments abandoned while in queue, waiting to be assigned to an agent in the selected timeframe (calculated as Abandoned Segments in Queue divided by Total Segments)

**How to enable**

Enabled by default in the Realtime Dashboard

**Please note:**

Only available in the “Today from X” section and “Skills” section. In both sections, the result shown is based on the time-frame selected (i.e. Today from 12:00am, or Last 6 Hours)  
**Screenshots**

![](/img/Week-of-December-17-2.png)

### Google website translator

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
<td>Yes</td>
</tr>
</tbody>
</table>

Google Translate has been added to data applications

To cater to browsers with default languages other than English, the Google Website Translator service has been added to MCS Toolkit and Realtime Dashboard - this enables full translation of all text, as translated by Google, in a large selection of languages other than English.

**How to enable**

After logging into MCS Toolkit or Realtime Dashboard, click on the main menu icon in the top right corner and toggle the TRANSLATE option.

Once toggled, a Google Translate banner will appear on the top of the page allowing the user to select their language. Simply select the language from the drop-down box and the Google Website Translator service will re-render the text on the page.

If toggled, the local user browser will cache this setting to remember for next time the user logs into Realtime Dashboard (or MCS Toolkit).

**Please note:**

Translation quality is subject to that of the Google Translate service and may not be 100% accurate.

**Screenshots**

![](/img/Week-of-Dec-17th-4.png)

## New source filter options (MCS toolkit)

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
<td>N/A</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
</tr>
</tbody>
</table>

New filter options are now available.

As new Messaging channel sources are made available for brands, so to are the options to access the historical conversation data.

To facilitate this within MCS Toolkit, the **Source** filter within the Filter Menu has been updated with the following new channel sources:

1. WhatsApp Business
2. WeChat __**__
3. RCS Business Messaging

**How to enable**

Enabled by default in MCS Toolkit

**Please note:**  
WeChat source is not currently officially available as a LiveEngage channel - however, once it is available, this source filter option will allow for filtering of WeChat based conversations.

Additionally, only 1 source can be selected at a time (known limitation).

**Screenshots  
![](/img/Week of Dec 17th-5.png)**

## Bug fix

### Load calculation issue (Real-time Dashboard)

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
<td>N/A</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
</tr>
</tbody>
</table>

The overall Agent Load % in the CURRENT section of the Realtime Dashboard was invalid due to a formula error resulting in the display of a Load rate slightly lower than the overall weighted average of the individual agent Load rates. This issue has now been resolved in the Realtime Dashboard.

### Admin user permission issue (Real-time Dashboard)

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
<td>N/A</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
</tr>
</tbody>
</table>

When an user with profile of admin logs into the Dashboard (messaging mode), some results from Messaging Operations API would not return as expected resulting in failure of the Realtime Dashboard.

Messaging Operations API is designed to only return results for Agent Manager type user profiles.

When an admin user logs into the Realtime Dashboard, a fallback is now in place to prevent failure when no results are returned. In order to take advantage of all APIs that the Realtime Dashboard is built upon, the user should be of Agent Manager type profile.
