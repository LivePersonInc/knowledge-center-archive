---
pagename: Week of February 18th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: February
permalink: release-notes-2019-february-week-of-february-18th.html
isTutorial: false
isNew: false
date: 2019-02-19 13:51:35 +0000

---
These release notes include new features arriving to LiveEngage during February 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionalities

### Messaging interactions API: New intent section in the response and intent filters

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

When accessing the API with "intents" keyword on “ContentToRetrieve” Parameter, the list of conversations will now be retrieved with the addition of 'intents' section, as a data visualization tool. Intent related filters will also be available to filter specific conversations.

### Back-end chat: Adding new FaaS permissions (LE-98895)

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

The new permissions added are:

* **FaaS Invocation - system user:** Permission for external systems to invoke a lambda (used for oAuth2.0).
* **FaaS Admin User:** Permission for admins to adjust whitelisting + secrets.
* **FaaS Developer User:** Permission to develop new lambdas.

### Edit Rights in bot integration permission (LE-98301)

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

This permission will allow brands to choose who has access to the service. ie. admins, agent managers, campaign managers.

### WhatsApp: sharing contacts during a conversation (CX-85)

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
</tr>
</tbody>
</table>

Consumers can now share a contact (from their contacts list) with a business in a WhatsApp conversation, allowing the agent to view the contact information and perform actions on that contact (save as an emergency contact in the CRM, etc).

* Agents or bots will be able to see the contact information name, phone numbers, organization (company, department, title), email, birthday, address, and contact URL
* The contact info mentioned above will be displayed as a text message in the conversation, on behalf of the consumer lines.

#### Screenshots

Consumer opts to share contact during conversation:

{: .sidebyside}

![](/img/week-of-february-18th-1.png) ![](/img/week-of-february-18th-2.png) ![](/img/week-of-february-18th-3.png)

Agent will receive contact sharing info as text:

![](/img/week-of-february-18th-4.png)

### WhatsApp: sharing location during a conversation (CX-86)

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
</tr>
</tbody>
</table>

Consumers can now share a static location with a business on a WhatsApp conversation, allowing the agent/bot to view where they are currently located/a location the consumer wants to go to or is interested in.

* If a consumer shared their current static location, the agent or bot will be able to see the longitude and latitude as texts in the conversation thread on behalf of the consumer lines.
* If consumer shared a location/address, the agent or bot will be able to see the following location parameters as texts in the LiveEngage conversation thread on behalf of the consumer lines:
  * Address
  * Name
  * URL

#### Screenshots

Consumer opts to share his current static location during a conversation:

{: .sidebyside}

![](/img/week-of-february-18th-5.png) ![](/img/week-of-february-18th-6.png) ![](/img/week-of-february-18th-7.png)

Agent will receive static location sharing as text:

![](/img/week-of-february-18th-8.png)

Consumer opts to share a location/address during a conversation:

{: .sidebyside}

![](/img/week-of-february-18th-9.png) ![](/img/week-of-february-18th-10.png) ![](/img/week-of-february-18th-11.png)

Agent will receive location sharing as text:

![](/img/week-of-february-18th-12.png)

### Google RCS: Change the default media height in Card elements to "TALL" (CX-18)

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>

For Google RCS Business Messaging, the default media height in card elements has changed from "MEDIUM" to "TALL."

## Bug fixes

### Back-end chat: Automatic message timing is misbehaving (LE-89122)

Every time the visitor sends a message, the countdown is reset so potentially if a visitor sends a message every 2 minutes and the countdown is set to 3 minutes, the visitor will never receive the on-hold message.

Now, when a visitor sends the last message, the countdown timer starts the countdown from the last message until the agent sends a message, regardless of whether the visitor sent any further messages. The solution proposed is to remove the reset logic for the Staller timeout implementation.

### Back-end chat: Updates to data masking configuration are not taking effect (LE-89023)

The configuration of data masking is performed in the Admin Area in Security > Data Masking.

There you can choose which Masking Patterns to use. However, although the options you choose are saved in the UI, the actual patterns used for masking the chat are not updated.

Now, the patterns are updated properly. The solution proposed is to implement the logic where data masking can be changed without having to restart the servers.

### WhatsApp: Agent sending links to consumer causes an unexpected behavior (CX-21)

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
</tr>
</tbody>
</table>

If an agent attempts to send certain files via links to a consumer, it causes certain unexpected behavior, like redirecting to another link causing an infinite loop.

**Fix:** The message will be sent to the consumer as text message instead.

### WhatsApp: Bad URLs on container health check (CX-114)

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
</tr>
</tbody>
</table>

The URL pattern was not constructed properly with the location (brand’s phone number). This caused timeouts which caused message delays issue in WhatsApp connector.

**Fix:** The URL pattern is now constructed properly and should not cause an issue.