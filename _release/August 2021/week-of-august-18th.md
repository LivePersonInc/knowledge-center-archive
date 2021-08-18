---
pagename: Week of August 18th
categoryName: Release notes
subCategoryName: '2021'
indicator: both
subtitle: ''
level3: August 2021
permalink: release-notes-2021-august-week-of-august-18th.html
isTutorial: false
isNew: false
published: true
date: 2021-08-17
---
These release notes include new features arriving August 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New look & feel, terminology alignment, and access points

### Type: Enhancement [Consumer Identity Provider]

**Availability:** All brands

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

</div>

### Description
1. New look & feel - A completely new, and modernized look and feel. Aligned to Conversational Cloud’s dark and light themes.
2. Terminology alignment - We are aligning to the industry standards and changing the name of the page and its entities from ‘Authentication Server’ to ‘Consumer Identity Provider’.
3. New ways to access - Accessing the Consumer Identity Provider page from the Management Console.


**Enablement:** Available immediately to everyone.

**Dependencies:** None

**Limitations:** None

![](img/week-of-august-18th-1.png)

## Support for JWKS endpoint 
### Type: Enhancement [Consumer Identity Provider]

**Availability:** All brands

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

**Description**
Introducing JWKS endpoint support. Brands can now choose between configuring their JWT Public Key for JWT validation or to provide a JWKS Endpoint (jwks_uri) for JWT key set discovery.
Using [JWKS endpoint](https://datatracker.ietf.org/doc/html/rfc8414), brands are able to control their JWTs validation keys and certification dynamically without needing to update their Conversational Account on every certificate change.


**Enablement:** Available immediately to everyone.

**Dependencies:** None

**Limitations:** None

![](/img/week-of-august-18th-2.png)
