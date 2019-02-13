---
pagename: Week of November 19th
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: ''
level3: November
permalink: release-notes-2018-november-week-of-november-19th.html
isTutorial: false
isNew: false
date: 2019-02-06 11:57:44 +0000

---
These release notes include new features arriving to LiveEngage during November 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New Functionalities

### Connectors support: Structured Content "External ID" metadata for message tracking and click operations (LE-94788)

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
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

LiveEngage allows brands to send structured content messages (by human or bot) in a variety of ways and formats, per each messaging connector source. Every messaging source features a different set of templates, which is supported by the structured content framework, allowing the agent or bot to enrich the messaging conversation on every channel.

The following will be added in order to allow the brands to report on structured content templates in the LiveEngage report builder:

**Tracking click operation in  reports**

* Messaging connectors which support structured content elements (Apple Business Chat, Facebook Messenger, Google RCS Business Messaging, or future connectors) will enable the brand's agents/bots to share "External ID" metadata with the structured content click object

**Tracking number of times Structured Content event was sent/delivered or viewed in  reports**

* Each connector supports a different type of message indication for the delivered state (delivered to server, delivered to consumer device or viewed by consumer). Per each supported indication, the connector will report back the right message state (as supported today)

For a more in depth guide on how to add metadata in structured content templates, please refer to the [Conversation Metadata guide](https://developers.liveperson.com/guides-conversation-metadata-guide.html). For more information about the Structured Content templates supported for each channel, please refer to the [developer community](https://developers.liveperson.com/).

{: .notice}
**Note:** This feature requires enablement, please contact your LivePerson account team for more information.

**Dependencies:** To create Structured Content templates for any of the supported connector sources, brands must use the Agent Widget SDK or the Agent SDK. For more information please review the Rich Messaging section in the [developer community](https://developers.liveperson.com/)

## Bug Fixes

### Messaging connectors: Consumer is able to send audio message with field set to false (LE-94809)

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
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>N/A</td>
</tr>
</tbody>
</table>

With the Audio Message setting disabled, if a visitor sends an audio message over supported connector channels (RCS Business Messaging, Apple Business Chat, WhatsApp Business and Facebook Messenger), the message appears to have been sent successfully from the visitor's view. This bug has now been resolved.

**Fix:** The audio message will not be sent to LiveEngage UI, and an error will be presented to the consumer. The error message that will be sent to Facebook Messenger, WhatsApp Business and RCS Business Messaging if the audio feature is not enabled reads: “Sorry! Unfortunately audio messages cannot be sent via RCS Business Messaging/WhatsApp/Facebook”

### Facebook Messenger - Blank conversations started when deleting and responding to CSAT (LE-95931)

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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

When a consumer sends a CSAT response in Facebook Messenger, they then have the option to delete the response from within the Facebook Messenger window, which causes the CSAT questions to be sent again. When the CSAT response is chosen a second time, this opens a blank conversation. This bug has been resolved.

### Apple Pay ID incorrect request identifier (LE-95465)

Currently when a brand adds a request Identifier to the Authentication Interactive Message structured content JSON, the connector will create a new request ID. This causes a problem between the outgoing request ID and the authentication response request ID (which for data correction should be the same).

Fix: The connector will not create a new request identifier when the brand adds one to the Authentication Interactive Message structured content JSON (the connector will only create a request identifier when the brand does not add a request identifier to the structured content JSON). This bug has now been resolved.

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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>