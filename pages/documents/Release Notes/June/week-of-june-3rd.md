---
pagename: Week of June 3rd
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-june-week-of-june-3rd.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during June 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New dashboard for analyzing survey results for Messaging in Report Builder

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

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

A new dashboard is now introduced, dedicated for reviewing and analyzing survey results in messaging conversations.

This dashboard will include the results to all types of surveys available for messaging channels - including the Post Conversation Survey (PCS), which was previously part of the predefined Messaging Performance dashboard, and any new type of survey that will be available in the future in LiveEngage (including Agent Survey, due later this year).

The new dashboard contains a tab named ‘Survey Data Export’ including 5 panels:

* Predefined survey KPIs
* Answers Distribution - Brand
* Answers Distribution - Agent & Skill
* Survey level analysis
* Question level analysis

The removal of the survey data from the Messaging Performance dashboard will allow to improve the loading time and optimize performance of this dashboard.

**Please note:**

The predefined metrics (CSAT, FCR, NPS and also MCS) will continue to be available in the predefined Performance dashboard for Messaging.

This change will not impact user copies of the Performance dashboard for Messaging created before the removal of the survey data. User copies will continue to work and hold the survey metrics after change the predefined dashboard. Users who made changes to the predefined will be able to continue to use their copy and in parallel use the predefined dashboards for new metrics (such as segments, coming out next month).

More info on reporting on PCS can be found [here](https://knowledge.liveperson.com/data-reporting-messaging-messaging-dashboards-messaging-survey-dashboard.html).

**How to enable**

Enabled OOTB.

## New Business dashboard for Messaging

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

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

The Business dashboard for Messaging allows brands to analyze the consumer journey through messaging campaigns.

Report Builder will now maintain two Business dashboards: Business for Messaging & Business for Live Chat.

In the new dashboard, brands will have the ability to:

* View funnel metrics, conversions and revenue data as they do in the current Business Activity for Live Chat
* Analyze campaign data at the level of: brand, line of business, campaign, entry point and engagement
* View out of the box visualizations for conversion, consumer experience and efficiency.

**New Metrics**

| Metric Name | Description |
| --- | --- |
| Closed by Consumer Rate | The percentage (%) of conversations closed by the system compared to the total number of closed conversations |
| Closed by Agent Rate | The percentage (%) of conversations closed by the agent compared to the total number of closed conversations |
| Closed by System Rate | The percentage (%) of conversations closed by the consumer compared to the total number of closed conversations |
| Closed Conversations by Online Hour (CCPOH) | CLOSED CONVERSATIONS / ONLINE HOURS |
| Conversions by Online Hour | The percentage (%) of total conversions after engagement by online hour |
| Total Direct Revenue Per Online Hour | TOTAL DIRECT REVENUE / ONLINE grouped at the daily hour |

**How to enable :** Enabled OOTB

**Limitations**

* Brand must be actively using web messaging platform
* Agent and Survey level data is not available within the Business Activity dashboard. This information continues to be available within the Messaging Performance and Agent Activity dashboards.

**Screenshot**

![](/img/RB3.2-2.png)

## Renaming of predefined dashboards

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

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

Report Builder predefined dashboards have been enriched and renamed to distinguish between reports containing Messaging data and Live Chat.

Here’s a mapping of the dashboards by topic:

| Topic | Live Chat \\ Messaging | Dashboard Name | OLD name |
| --- | --- | --- | --- |
| Campaigns Performance | Live Chat | Business Dashboard for Live Chat | Business Activity Dashboard |
| Campaigns Performance | Messaging | Business Dashboard for Messaging | New |
| Agent Efficiency | Live Chat + Messaging | Agent Activity Dashboard | Not changed |
| Agent Efficiency | Messaging | Performance Dashboard for Messaging | Messaging Performance Dashboard |
| Skills Activity | Live Chat | Skill Dashboard for Live Chat | Skill Activity Dashboard |
| Skills Activity | Live Chat | Operational & Staffing Dashboard for Live Chat | Operational & Staffing Dashboard |
| Goals tracking | Live Chat + Messaging | Goals Tracker Dashboard | Goals Tracker Dashboard |
| Survey Results | Live Chat | Survey Dashboard for Live Chat | Business Activity Dashboard |
| Survey Results | Messaging | Survey Dashboard for Messaging | New |

## Max/Min Agent Load metrics show incorrect value

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

The maximum and minimum agent load metrics in the predefined Performance dashboard for Messaging were showing incorrect values (the numbers were divided by 100 to show the value in decimal number instead of percentage). The calculation is now fixed and the values are shown as percentage.

## \[WhatsApp\] Support for reply indication on consumer messages

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
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

This feature enables agents to identify whether a message from a consumer is a reply from a previous message. Consumer can send a message replying to a previous message with a text, an image, an audio message or any of the supported documents. If a message from a consumer is a reply to a previous message, the reply message will have a UI reply indication icon showing in the agent workspace. Please note that the agent will only see the reply indicator icon. There is no reference to the actual message that the consumer refers to.

**Screenshots**

**Image 1:** Consumer replying to previous message

{: .sidebyside}


![](/img/week-of-june-3rd-2.png)

**Image 2:** Agent sees the reply message consumer sends

![](/img/week-of-june-3rd-3.png)

## \[WhatsApp\] Add agent name as a prefix to agent messages

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
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

Brands now have the ability to choose whether to add the agent’s nickname as a prefix to each message sent to consumers. When enabled, the agent’s nickname will be prefixed in bold with a line break followed by the message when sent to consumer. This feature is disabled by default.
Please note that once enabled, agent nickname will be presented for both human and bot agents, but won’t be presented for built-in bots such as the auto messages bot and the Post Conversation Survey bot.

{: .notice}
**Please note:** This features requires enablement. Please speak to your LivePerson account team for more information.

**Screenshots**

**![](/img/week-of-june-3rd-5.png)**

## \[ABC\]\[WhatsApp\] Add support for consumer to share documents with agent

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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

This feature enables consumers to share files with agents beyond the supported audio and image file types. The following file types are supported:

* PDF
* DOC(X)
* PPT(X)
* XLS(X)

The maximum document size is 15MB.
If consumers share a file that is not one of the supported file types, they will get a notification message saying “Sorry! This brand cannot receive the above message type.”

{: .notice}
**Please note:** This features requires enablement. Please speak to your LivePerson account team for more information.

**Screenshots**

**Image 1:** Consumer shares a file

{: .sidebyside}
![](/img/week-of-june-3rd-6.png)![](/img/week-of-june-3rd-7.png)

**Image 2:** Agent receives a file consumer shared

![](/img/week-of-june-3rd-8.png)

## \[ABC\] Media files send as text URL when unable to download instead of displaying an error

### Type: Enhancment

When agent sends consumer media file types such as AR, PNG, JPG/JPEG, etc., the Apple Business Chat Connector will try to download the file and send it to the consumer as an attachment. If there are any issues while sending that as an attachment (i.e. file reaches size limit or network issues), the connector will send the consumer the actual URL as text. This will enable the agent to continue sending the URL to the consumer, allowing the consumer to download the media directly from the URL source.