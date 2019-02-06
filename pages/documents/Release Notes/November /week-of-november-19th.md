---
pagename: Week of November 19th
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: ''
level3: November
permalink: release-notes-2018-november-week-of-november-19th
isTutorial: false
isNew: false
date: 2019-02-06 13:57:44 +0200
published: false

---
These release notes include new features arriving to LiveEngage during November 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New Functionalities

### Connectors Support Structured Content "External ID" metadata for message tracking and click operations (LE-94788)

<table>
<thead>
<tr class="categoryrow">
<th><img class="tableIcon" src="img/Web_Messaging.png" /></th>
<th><img class="tableIcon" src="img/mobileappmessaging.svg" /></th>
<th><img class="tableIcon" src="img/sms.png" /></th>
<th><img class="tableIcon" src="img/fb-messenger.svg" /></th>
<th><img class="tableIcon" src="img/abc.svg" /></th>
<th><img class="tableIcon" src="img/line.svg" /></th>
<th><img class="tableIcon" src="img/google-rsc.svg" /></th>
<th><img class="tableIcon" src="img/whatsapp.svg" /></th>
<th><img class="tableIcon" src="img/web-messaging.svg" /></th>
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
</tr>
</tbody>
</table>

LiveEngage allows brands to send structured content messages (by human or bot) in a variety of ways and formats, per each messaging connector source. Every messaging source features a different set of templates, which is supported by the structured content framework, allowing the agent or bot to enrich the messaging conversation on every channel.

The following will be added in order to allow the brands to report on structured content templates in the LiveEngage report builder:

**Tracking click operation in  reports**
* Messaging connectors which support structured content elements (Apple Business Chat, Facebook Messenger, Google RCS Business Messaging, or future connectors) will enable the brand's agents/bots to share "External ID" metadata with the structured content click object
* This will allow the brand to track in report builder (by the external ID) the number of times each click action was clicked/selected

**Tracking number of times Structured Content event was sent/delivered or viewed in  reports**
* Each connector supports a different type of message indication for the delivered state (delivered to server, delivered to consumer device or viewed by consumer). Per each supported indication, the connector will report back the right message state (as supported today)
* This will allow the brand to track in the report builder (by the external ID) the number of times each Structured Content message was sent, delivered or viewed by the consumer

For a more in depth guide on how to add metadata in structured content templates, please refer to the [Conversation Metadata guide](https://developers.liveperson.com/guides-conversation-metadata-guide.html). For more information about the Structured Content templates supported for each channel, please refer to the [developer community](https://developers.liveperson.com/).

{: .notice}
**Note:** This feature requires enablement, please contact your LivePerson account team for more information.

**Dependencies:** To create Structured Content templates for any of the supported connector sources, brands must use the Agent Widget SDK or the Agent SDK. For more information please review the Rich Messaging section in the [developer community](https://developers.liveperson.com/)