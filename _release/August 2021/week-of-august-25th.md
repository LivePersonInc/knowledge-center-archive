---
pagename: Week of August 25th
categoryName: Release notes
subCategoryName: '2021'
indicator: messaging
subtitle: ''
level3: August 2021
permalink: release-notes-2021-august-week-of-august-25th.html
isTutorial: false
isNew: false
published: true
date: 2021-08-25
---
These release notes include new features arriving August 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Dynamic routing of conversations is easier than ever!

### Type: Enhancement [Conversation Orchestrator]

**Availability:** All brands

</div>

### Description
Dynamic Routing enables intelligent routing of conversations to the most qualified agents -- bot or human -- based on intent and other contextual data, such as: consumer inputs, past interactions, loyalty tier, and other attributes. Dynamic routing makes highly personal consumer journeys possible at scale. It is a key application within LivePerson’s Conversational AI product suites.

We’re super excited to announce a new code-free experience that will make intelligent routing effortless. This bot is a true powerhouse, as it significantly simplifies Dynamic Routing. Here are some major enhancements:

Use the **new Dynamic** Routing bot to set up and deploy Dynamic Routing within minutes
Place the **new Dynamic Routing interaction** anywhere in any bot to enable Dynamic Routing
Create and manage routing policies including fallbacks and failures with minimal effort
Enable routing by channel and intent out-of-the-box, and combine it with other data like structured data entities (SDEs) or context variables to create personalized journeys



**Enablement:** Available immediately to all brands.

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

**Description**
Introducing JWKS endpoint support. Brands can now choose between configuring their JWT Public Key for JWT validation or to provide a JWKS Endpoint (jwks_uri) for JWT key set discovery.
Using [JWKS endpoint](https://datatracker.ietf.org/doc/html/rfc8414), brands are able to control their JWTs validation keys and certification dynamically without needing to update their Conversational Account on every certificate change.


**Enablement:** Available immediately to all brands.

**Dependencies:** None

**Limitations:** None

![](/img/week-of-august-18th-2.png)
