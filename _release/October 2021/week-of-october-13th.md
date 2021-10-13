---
pagename: Week of October 13th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3:
permalink: release-notes-2021-october-week-of-october-13th.html
isTutorial: false
isNew: false
date: '2021-10-13'

---

These release notes include new features arriving October 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Post conversation survey for Twitter

### Type: New Feature [Social Messaging]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook</th>

<th>Twitter</th>

<th>ABC</th>

<th>Line</th>

<th>RCS Business Messaging</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

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

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

#### Availability: All brands.

### Description
Social Messaging for Twitter now supports post-conversation survey bots via the direct channel. A post-conversation survey bot is a bot that is triggered at the end of a conversation with an agent or custom bot. It can be used to obtain feedback from the consumer on the consumer's experience with a brand.

### Enablement

[Conversation Builder - Post-Conversation Survey Bots](https://developers.liveperson.com/conversation-builder-bots-post-conversation-survey-bots.html)

#### Dependencies
Conversation Builder

#### Limitations
Open Questions only

![](img/week-of-october-13th-3.png)

## Secure forms on Twitter

### Type: New Feature [Social Messaging]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook</th>

<th>Twitter</th>

<th>ABC</th>

<th>Line</th>

<th>RCS Business Messaging</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

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

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

#### Availability: All brands.

### Description
Social Messaging for Twitter now supports secure forms via the direct channel. The secure form dedicates a "secure tunnel" within the Twitter conversation for exchanging Personal Identifiable Information (PII), Cardholder Data (CHD), and other sensitive identity validation data like answers to verification questions and PINs. Agents continue to operate in the same Agent Workspace environment as data is sent from the visitor to the agent in a safe, PCI compliant interaction.

#### Dependencies
Conversation Builder

#### Limitations
Open Questions only

![](img/week-of-october-13th-1.png)

## Availability of Engagement Attributes for Public Twitter

### Type: Enhancement [Social Messaging]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook</th>

<th>Twitter</th>

<th>ABC</th>

<th>Line</th>

<th>RCS Business Messaging</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

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

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

#### Availability: All brands.

### Description
Public Twitter & Social Monitoring can now take advantage of Campaigns for Messaging. 

### Enablement
[Campaigns for Messaging - Twitter Public & Social Monitoring](https://docs.google.com/document/d/1CrMOi6exLPjXYSWVJvkvnwPNsUQaCUKsmP3OILAZTk8/edit#heading=h.cldpqf8fys3zhtml)

#### Dependencies
* Social Monitoring Rules - Configured by R&D
* Social Monitoring App Installation - Configured by R&D

#### Limitations
* If the consumer is eligible for more than one engagement the engagement will be picked at random.
* It is considered best practice to carefully create engagements which do not conflict.

![](img/week-of-october-13th-2.png)

## Rename Country labels into Country/Region

### Type: Enhancement [Old Agent Workspace]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>SMS</th>

<th>Facebook</th>

<th>ABC</th>

<th>Line</th>

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

</tr>

</tbody>

</table>

</div>

**Availability:** All brands.

### Description
To ensure that labels are neutral in all aspects of system operation, we have added the ability to change the “Country” column’s title to “Country/Region”. This feature can be configured by a brand’s account team and will take effect for all agents once turned on and the agents log out and log back into the Agent Workspace.