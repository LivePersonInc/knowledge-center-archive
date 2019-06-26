---
pagename: 'Week of January 14th '
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: January
permalink: release-notes-2019-january-week-of-january-14th.html
isTutorial: false
isNew: false
date: 2019-02-06 08:51:46 +0000

---
These release notes include new features arriving to LiveEngage during January 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionalities

### Audit trail on campaign time frame

<div class="tablecontainer">
<table class="releasenotes">
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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Customers will now be able to track changes made to the campaign time frame in the LiveEngage audit trail.

### Audit trail on shift scheduler (working hours)

<div class="tablecontainer">
<table class="releasenotes">
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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Customers can now do the following in the LiveEngage audit trail:

* Track changes on the shift scheduler
* Tracking changes to weekdays and special occasion items and their assignment- per account and per skill

![](/img/week-of-january-14th-1.png)

**Limitations**

If you change either the name of the occasion or the time frame, you will see 2 lines:

N/A -> new

old -> N/A

### Opacity of the embedded window on Mobile Web (campaigns)

<div class="tablecontainer">
<table class="releasenotes">
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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>N/A</td>
<td>No</td>
<td>N/A</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

When opening the engagement window in embedded mode on a mobile browser, the window will be 5% transparent. This ensures that the engagement window was opened on top of the website, and that the consumer was not redirected to another page.

In some cases, where the design of the underlying website conflicts with the design of the engagement window, the consumer might think that there is something wrong with the engagement window. In this case, the brand can decide to keep the engagement window in embedded mode and it will be solid, not showing the underlying website.

**How to change the opacity**

1. On the Campaign page, click on the “Edit” function next to the “Engagement window” of the relevant engagement.![](/img/week-of-january-14th-3b.png)

   {: .important}

   This setting is on the window level, and will apply to all the engagements
2. Click on the relevant window and select “edit.”
3. In the Engagement window studio, open “Additional window settings” in the top right corner.
4. Define the window opacity on mobile web.
5. Click “**Save**”

![](/img/week-of-january-14th-4b.png)

**Notes:**

* This applies only to the embedded mode, and only for Mobile Web messaging.
* The default is “No”, which is the current behavior.

### Bot connectors: Support for Google Dialogflow V2 in the LivePerson Bot Platform OOTB Connectors

Support has been added for Google Dialogflow V2 in the LivePerson Bot Platform OOTB Connectors. Google [Dialogflow V2](https://dialogflow.com/docs) integrations require oAuth2 authentication. The connector platform now allows for access to Dialogflow V2 intent APIs VIA oAuth2 credentials. Previously the Bot Platform Connectors supported Dialogflow V2.Customers can self service their Dialogflow V2 bots & configure the required oAuth2 credentials VIA the LivePersons OOTB configuration & management tools rather than build or upgrade their existing connector.

Brands should seek consult with their LivePerson field teams before making a decision.

### Bot Connectors: Support for Google Dialogflow V2 in the LivePerson Bot Platform OOTB Connector Console & Connector service

Support has been added for [Google Dialogflow V2](https://dialogflow.com/docs) in the LivePerson Bot Platform OOTB Connector Console & Connector service. Integration guides can be found in the LivePerson [developer hub](https://developers.liveperson.com/customer-facing-bots-deploying-bots-to-liveengage.html).

## Enhancements

### Bot connectors: Deprecation of Google Dialogflow V1

As of October 23rd 2019 Google Dialogflow V1 will be deprecated. Customers should migrate before this date to V2, see [migration guide](https://dialogflow.com/docs/reference/v1-v2-migration-guide)

## Bug fixes

### Agent status changes to away involuntarily

<div class="tablecontainer">
<table class="releasenotes">
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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

If the ACD setting for chat was configured to “advanced mode” and “agent status changes to **away** if missed accepting the chat,” and then afterwards, the setting was changed to “Auto-accept” mode, the agent state would still change to “away” in some scenarios.

![](/img/week-of-january-14th-5.png)

### Messaging - Automatic Messages - line break is being shown in conversation

<div class="tablecontainer">
<table class="releasenotes">
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
</div>

If an automatic message is configured with a break line in it, it displayed as “< br / >” in the agent transcript.