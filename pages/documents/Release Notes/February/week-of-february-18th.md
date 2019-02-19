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
date: 2019-02-19 15:51:35 +0200
published: false

---
These release notes include new features arriving to LiveEngage during Feb 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

  
**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New Functionality

### Back-end chat: Adding New FaaS Permissions (LE-98895)

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

## Edit Rights in bot integration permission (LE-98301)

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

## Messaging connectors

### WhatsApp: sharing contacts during a conversation (CX-85)

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

**Screenshots**

Consumer opts to share contact during conversation:

![](https://lh6.googleusercontent.com/PpoIU6ruJAuob16g3G9OJCXgBP-j2zH6a5wdZ0j0sLsSm62gCVsqvt8tMdd9OGA6z_-rvdNfoE4hvHNKF-qPlmVoPPW0ZCU8noXZVK7930dKSDOvu9XWX-53I2Mb8njf7z3ibNB_ =130x231) ![](https://lh6.googleusercontent.com/yqvmCF9LkXCxMkAMOFxk4kJX_VlLVLl8X89smW8XvRmLA3BG-L-PLHqyXE0CmQO65ogSjibxV5P1QcozMMD4wYh8v9SsQyvKUR-gJLkBZ_OxOXg1GSEXkYhXIVYbTYFDz_IOizGi =140x230) ![](https://lh5.googleusercontent.com/-0NreDR6nsyw-20VSHzrcKj3EdKZIttU3PL1lL5tXImNe5DJsaJKoUI3IaI2yDpobtEkknScU6Pr1FG1jAf4H2A4tzrPJ6L2qFNtREtJQvUqUG_r6YNkB5Uj05Fn2jMlzBQjV1dE =134x226)

Agent will receive contact sharing info as text:

![](https://lh4.googleusercontent.com/rSR9X9-aMZt4YSdCTYaYDwxWRg4mJKsXr-y1BDQtx3Dmrm-niEiIoWHcNu6nv2dVoV_neKw0-FI3xBns68tFyqrtDVDkyTlfjAPPyjIDU3s4qu4Zi7xE3tvBHuN4EOuCxlJ_HNlS =216x321)

### WhatsApp: sharing location during a conversation (CX-86)

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

**Screenshots**

Consumer opts to share his current static location during a conversation:

![](https://lh5.googleusercontent.com/N_hC_IFoU4Bj5MN2y998j5-BHbHrXZ1iWO0TQa6ES96SeYRtzdfaB81UZZJKG1Mb0zJRT7jrwhlJ8Oht6CCOykKKbk_4C3iGcCRI7IFivBKzJAkUq3zlu_SZw7cFbNTl_c9wIREK =166x254) ![](https://lh5.googleusercontent.com/oHJh2nfa_3dIQ9kTUE7J0XnL0Qjf3uM-lxX3bHfawFPLDaz7hkaEjiMVU10rtbNDx-B49osvIwMN8DIz0GL1LW1XBWkljnFYJjMMYXsFMBWazmUuOJp5zdEvsRKkK2ZZs4ERokBb =163x258) ![](https://lh4.googleusercontent.com/SMDizJPt4vujCR19r0_7bYtbXHzPJ2VYoak___1BBg1SVUyx5fvoXDyI61mMB_hbnd7RoXMIUnl8T44UJ_mPlzCxHyaigo-h4X_F5icEPC52Fs8ctxAvslldFkP8idh99TvqdsyU =154x261)

Agent will receive static location sharing as text:

## ![](https://lh3.googleusercontent.com/foxKp8TVLwRiTEWsSnTl7R7WudKGPXv1SbE2Ypcgsuz5HJxfXdtcmMYB_6ZUfnjy3Xj24FOxsLOEoyKUlSxgeYuuV2sMIZ7XkWzDVsdD9ZOGAt-iBgvXEbfdL5Qv3B9kbazz_3eK =197x353)

Consumer opts to share a location/address during a conversation:

![](https://lh5.googleusercontent.com/N_hC_IFoU4Bj5MN2y998j5-BHbHrXZ1iWO0TQa6ES96SeYRtzdfaB81UZZJKG1Mb0zJRT7jrwhlJ8Oht6CCOykKKbk_4C3iGcCRI7IFivBKzJAkUq3zlu_SZw7cFbNTl_c9wIREK =166x254) ![](https://lh6.googleusercontent.com/FR_22qADdgdjn2OJZ1Tejvs4h10ieR9e2ZCDqg0n_UZVSyGLdtg_PWQiSRbsStTIO6SNFHtSGYoXiN2L977lUH9xfEIgUGTLvjmjG5WUuGGIqJ1I-ZFCYIzu4aRxWo4TKyOp04Aa =147x254) ![](https://lh5.googleusercontent.com/vlnrkyDchw-hBPcYBVAUBdMJYeItMyMCZyM1JMc3zAQCXWcV4CFsStay04ISbwJS7T8479vhMG1qXt0YuRw5CUHRM_Z9Hi2Nn0U8At_wAdNgUbwrLmzz_x2pKaIYlT5Blc1_rzhb =161x260)

Agent will receive location sharing as text:

![](https://lh6.googleusercontent.com/vzgrBupTiAgQfkit-zqmtSFDUNPuREINIcm1YEtW-oGV_3jyK3G8XcWiifm0onLyUbvlAsjyNBjnVAIWe_sBlGKJdZhwaH7wnWllY9hA4eb2pRGkXXS2tm8ErEy13EfHgGKVq2uJ =319x439)

### Google RCS: Change the default media height in Card elements to "TALL" (CX-18)

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>

For Google RCS Business Messaging, the default media height in card elements has changed from "MEDIUM" to "TALL."

Bug Fixes

## Back-end chat

### Automatic message timing is misbehaving (LE-89122)

Every time the visitor sends a message, the countdown is reset so potentially if a visitor sends a message every 2 minutes and the countdown is set to 3 minutes, the visitor will never receive the on-hold message.

Now, when a visitor sends the last message, the countdown timer starts the countdown from the last message until the agent sends a message, regardless of whether the visitor sent any further messages. The solution proposed is to remove the reset logic for the Staller timeout implementation.

### Updates to data masking configuration are not taking effect (LE-89023)

The configuration of data masking is performed in the Admin Area in Security > Data Masking.

There you can choose which Masking Patterns to use. However, although the options you choose are saved in the UI, the actual patterns used for masking the chat are not updated.

Now, the patterns are updated properly. The solution proposed is to implement the logic where data masking can be changed without having to restart the servers.

## Messaging connectors

### WhatsApp: Agent sending links to consumer causes an unexpected behavior (CX-21)

| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS (Twilio) | Facebook | ABC | RCS Business Messaging | WhatsApp | Line | Google My Business |
| No | No | No | No | No | No | Yes | No | No |

If an agent attempts to send certain files via links to a consumer, it causes certain unexpected behavior, like redirecting to another link causing an infinite loop.

  
**Fix:** The message will be sent to the consumer as text message instead.

### Bad URLs on WhatsApp Container health check (CX-114)

| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS (Twilio) | Facebook | ABC | RCS Business Messaging | WhatsApp | Line | Google My Business |
| No | No | No | No | No | No | Yes | No | No |

****

The URL pattern was not constructed properly with the location (brand’s phone number). This caused timeouts which caused message delays issue in WhatsApp connector.

  
**Fix:** The URL pattern is now constructed properly and should not cause an issue.