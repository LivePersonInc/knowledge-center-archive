---
pagename: Week of September 22nd
categoryName: Release notes
subCategoryName: "2021"
indicator: messaging
subtitle: ""
level3: September 2021
permalink: release-notes-2021-september-week-of-september-22nd.html
isTutorial: false
isNew: false
published: true
date: "2021-09-22"
---

These release notes include new features arriving September 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.


## Engagement Controller version 1.2.2

### Type: New Feature [Engagement Controller]

**Channels:**

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

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

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

**Availability:** All brands.

### Description

The Engagement Controller is a feature that enables brands to control the incoming flow of conversations in Web Messaging.
This dynamic feature is an addition to the existing Campaign Builder settings. It allows brands to use welcome bots to start conversations and will show or hide Web Messaging engagements based on skill availability. Campaign Builder settings such as ‘enable’ or ‘disable’ engagements or ‘Campaign time frame’ will always have higher priority than Engagement Controller settings.
Users are able to set up rules within the Conversation Orchestrator UI that contain conditions which check skill availability based on the queue size and the wait time metrics, as well as actions to show or hide engagements. Rules can be set up on the campaign or engagement level. Rules on campaign level will affect all engagements in the campaign.

### Enablement

Enabled by default. 

### Dependencies

**User Interface:** The Engagement Controller UI is within Conversation Orchestrator.

**Backend:** The Engagement Controller is consuming its metrics from internal systems and sending events to the Campaign Builder. 

**Reporting:** The Engagement Controller contributes to the Messaging Business Dashboard, allowing tracking of web messaging engagements and identification of missed opportunities on a daily basis. 
Please add additional requirements through the feature request form.


### Limitations

* Using Engagement Controller in Web Messaging can create a synchronous, chat-like experience with limited wait times. This doesn’t allow for the advantages of an asynchronous Messaging journey for brands to always be available to their customers. 
* When assigning conversations to agents, it is possible that certain skills will have no online agents that can receive the conversation and therefore a fallback skill can be assigned in Conversational Cloud which assigns conversations to other skills. The Engagement Controller feature only checks the availability of the skill set in the rule within the feature. It does not consider settings in the fallback skill when checking for availability.
* Conversational Cloud functionality to auto close inactive conversations after a set period of time (default 90 days) works independently of the Engagement Controller feature. Inactive conversations closed by the auto close functionality are not displayed to a returning customer if a rule in the Engagement Controller is applied to hide the engagement window.
* The Engagement Controller interface is currently available in English only. Other languages will be added in the future.
* The Engagement Controller interface is currently available in the Dark theme only. Light theme will be added in the future.
* The Engagement Controller feature does not support bot flows which transfer to multiple skills.

![](img/week_of_september_22nd_release_notes_1.png)
![](img/week_of_september_22nd_release_notes_2.png)

## Agent App - v2.7.5

### Type: New Features [Agent App]

* Social widget now supports Facebook profiles
* Character count for public Twitter messages
* Unsent messages now show warning message
* Click to open hyperlinks / emails
* Video over WhatsApp / Twitter DM

**Channels:**

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

<td>No</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

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

Note: Twillio, Google RCS, Google My Business, CM, and WeChat may work, they just haven’t been tested.

**Availability:** All brands.

### Description

Agent App v2.7.5 includes:
* Social widget now supports Facebook profiles
* Character count for public Twitter messages
* Video call support for WhatsApp, Twitter
* Unsent messages now show warning message
* Click to open hyperlinks / emails
* Bug fixes


### Enablement

Search for LivePerson Agent App on the Google Play Store or Apple App Store and download the app.

[Agent App on Apple App Store](https://apps.apple.com/us/app/liveperson-agent-app/id1533849048)

[Agent App on Google Play Store](https://play.google.com/store/apps/details?id=com.liveperson.LiveEngageMessaging)




## Twilio Connector - Consumer Name Update

### Type: Enhancement [Twilio]

**Channels:**

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

<td>Yes</td>

<td>No</td>

<td>No</td>

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

**Availability:** All brands.

### Description

Consumers that start a conversation via the LivePerson Twilio SMS Connector will now be shown as “SMS User {5-digit-number}” in the Agent workspace to align with other 3rd party channels. This provides a better overview for Agents and helps them to understand the channel from which consumers are messaging. The new format replaces the full consumer phone number that was previously used as consumer name.


### Enablement

Enabled by default.
