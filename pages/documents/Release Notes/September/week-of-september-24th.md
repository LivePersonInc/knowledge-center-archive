---
pagename: Week of September 24th
categoryName: Release notes
subCategoryName: 2018
indicator: messaging
subtitle: ''
level3: September
permalink: release-notes-2018-september-week-of-september-24th.html
isTutorial: false
isNew: false
date: 2019-02-10 14:20:22 +0200
published: false

---
These release notes include new features arriving to LiveEngage during August 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Report Builder: Agent Load KPIs (85669)

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
<td>No</td>
</tr>
</tbody>
</table>

Agent Load KPIs have been added to the predefined Messaging Performance Dashboard to reflect how Smart Capacity functions.

These KPIs give agent managers a view of how productive their agents are and help them understand whether agents are over or under capacity in order to help agent optimization and efficiency.

Agent Load metrics can be used for staffing plans - for example; agent managers set the max capacity to X concurrent conversations per agent, and can therefore understand how well agents are being utilized/ if they are meeting their capacity.

**New Attributes / Filters**

| Attribute | Description |
| --- | --- |
| Max No. of Messaging Conversations | The maximum capacity an agent is setup to handle. The maximum capacity equals to the total weight of the conversations assigned to the agent. |

**New Metrics**

| Metric | Description |
| --- | --- |
| Avg. Agent Load | The average conversation load on an agent. The load is determined by the weights assigned to conversations by Smart Capacity. A conversation can have a maximum weight of “1” and a minimum of 0.1. |
| Max Agent Load | The maximum conversation load on an agent. The load is determined by the weights assigned to conversations by Smart Capacity. A conversation can have a maximum weight of “1” and a minimum of 0.1. |
| Min Agent Load | The minimum conversation load on an agent. The load is determined by the weights assigned to conversations by Smart Capacity. A conversation can have a maximum weight of “1” and a minimum of 0.1. |
| Average No. of Active Conversations | The average number of conversations assigned to an agent with the maximum weight by Smart Capacity, and therefore occupying a full agent capacity slot. These are named “Active Conversations”. |
| Average No. of Assigned Conversations | The average number of conversations concurrently assigned to an agent. |
| Active Conversation Ratio | The percentage (%) of active conversations assigned to agents out of the total number of assigned conversations. |

<div class="important">
<b>Note:</b>
<ul>
<li>Metrics are added to list of available metrics that need to be dragged and dropped into the dashboard (for edit access users only). There will be no change to the dashboard’s visualization.</li> <li>The new metrics will not appear in user copies.</li>
</ul>
</div>

### Conversion rate in Messaging Performance Dashboard (84175)

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
<td>No</td>
</tr>
</tbody>
</table>

New conversion metrics are added to the Messaging Performance Dashboard to allow analysis of sales results together with messaging operations data.

As part of the Campaign for Messaging epic, the dashboard is enriched with conversion, revenue and AOV metrics for ‘sell product/service’ business goal type. The metrics reflect conversions and their data, that occured after messaging conversations.

The attribution model for the conversions follows the same behaviour as in the Business Activity dashboard. Meaning, conversions are either attributed to the first agent of the conversation, or the last. This model is similar to conversions from Live Chat, and is set up via the LiveEngage campaigns settings.

**New Attributes / Filters**
| --- | --- |
| Direct Goal Indicator | Values: Direct; Indirect |

The attribute is not added as default to the filter panel. It can be added using drag and drop by any user with edit access.

**New Metrics**

| Sales Conversions | Number of “sell product / service” goals reached during or after a messaging conversation. |
| --- | --- |
| Sales Conversion Rate | Percentage of “sell product / service” goals reached after or during a messaging conversation out of all messaging conversations that were assigned to an agent. |
| Sales Revenue | Total revenue achieved, during or after a messaging conversation, from all transactions which led to a “sell product / service” goal reached. |
| Sales AoV | The average revenue generated by the orders placed after or during a messaging conversation which reached a “sell product / service” goal. |

The metrics are added to the following visalutions:

* Brand Performance Details grid - in the ‘Brand Summary’ panel
* Brand Level data export grid - in the ‘Brand Data Export’ panel
* Sales Conversion Trend - new visualization in the ‘Brand Summary’ panel

These metrics are enabled out of the box and is available to all report builder enabled customers.

<div class="important">
<b>Note:</b>
<ul>
<li>Metrics reflect only goal reached of type ‘Sell product/service’. In the future, tracking metrics for the rest of the business goal types will be added.</li> <li>Sales Revenue and Sales AoV metrics include only purchases generated from conversions (“sell product / service” goal reached). Purchases without a conversion are not counted in any of the these metrics.</li> <li>The dashboards only shows goals reached after messaging conversation. Goals reached after Live Chat can be viewed in the Business Activity Dashboard and the Goal Tracker dashboard.</li> 
</ul>
</div>


**Screenshot**

![](/img/week-of-september-24th-1.png)

## Enhancements

### Report Builder: Rename of messaging metrics

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
<td>No</td>
</tr>
</tbody>
</table>

Some metrics have been renamed in the predefined Messaging Performance Dashboard, as following:

| Old metric name | New metric name |
| --- | --- |
| NO. OF OPENED CONVERSATIONS | OPENED CONVERSATIONS |
| NO. OF CLOSED CONVERSATIONS | CLOSED CONVERSATIONS |

## Bug Fixes

### Agent Activity & Business Activity dashboard default view doesn't show data (93128)

The ‘SOURCE TYPE’ filter was set to ‘Web’ as default and caused the default view of the Agent Activity & Business activity default. The default value for the filter was changed to ‘All’ and data is now shown in the dashboards. This bug fix is applicable for edit users in accounts which have Report Builder enabled.