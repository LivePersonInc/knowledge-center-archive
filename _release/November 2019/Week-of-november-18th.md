---
pagename: Week of November 18th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-november-week-of-november-18th.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during November 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Enable Rollover for Back end messaging

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

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

</tr>

</tbody>

</table>

</div>

This functionality allows brands to let a dedicated 3rd party Contact Center handle conversations for the main brand on their behalf, rather than answering messages themselves. Additional configurations on the brand level are required to make this feature work.

{: .notice}  
This feature is enabled on a per brand basis by the LivePerson account team 

## Agents will see all conversations that they are a participants in

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

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

</tr>

</tbody>

</table>

</div>

Agents currently only receive conversations in the Open Connections tab of the Agent Workspace that are directly assigned to him. Once the feature is enabled by the LivePerson account team, agents will receive all conversations in the Open Connections tab of the Agent Workspace that they are a participant on.

{: .notice}  
The LivePerson account team will enable this automatically for all customers after the deployment is complete.

## Maximum length of quickReply field in the Post Conversation Survey updated

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

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

</tr>

</tbody>

</table>

</div>

Previously the number of characters available to clients in the quickReply field of the Post Conversation Survey to 5000. This has been expanded to 15000 characters.

## Fixed Validation when creating Avro Event with incorrect PhoneType SDE (async-messaging)

### Type: Bug fix

If the PhoneType field in a client’s Structured Data Element is not a number ( e.g. “HOME” instead of “1”), the back end messaging server fails to parse it to the numeric value, eventually resulting in a rejection of the SetUserProfile request. This usually manifests itself as the user name being shown as “Visitor” in the All Connections page.

 This has now been fixed enhancing the PhoneType parsing so the SetUserProfile request will not be rejected.

## Fixes in WorkShiftManagement - for incorrect ETTR calculations 

### Type: Bug fix

Errors in the Work Shift Management feature (due to the time zones difference and DayLightSaving), including calculating an incorrect ETTR for clients that resulted in an extra day being added to shift start times on certain occasions.

## Conversations stuck after transfer to skill request and ensuing failure loop

### Type: Bug fix

On some occasions when a request to transfer a conversation to a skill was validly rejected, the back end messaging server still attempts to re-route the conversation and became stuck in a loop. This also caused the conversation to become stuck for the client.

Additional validation have been added to prevent it from attempting the re-route under those conditions.

## AgentRequestConversation allocated group field is set to an allocated groupId of previous consumer's conversation

### Type: Bug fix

**Available to all customers:** Yes

Previously, agents that requested conversations had their group become the conversation’s allocatedGroup. This resulted in stuck conversations in certain circumstances, if the conversation was requested by a manager who then attempted to transfer it to another agent. This has now been fixed

## Fix TenantIsolationException of rollover brand in getUserProfile.

### Type: Bug fix

Agents of rollover feature brands couldn’t perform getUserProfile on consumers mapped to the main brand due to tenant isolation restrictions. Tenant Isolation validation has been  modified to allow this case.

## Keys for Connectors Outbound API for chat

### Type: Feature

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

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

<td>NA</td>

</tr>

</tbody>

</table>

</div>

Includes new API privileges for the Connectors Outbound API for:

* Messaging Connector Outbound Write Internal
* Messaging Connector Outbound Read Internal
* Messaging Connector Outbound Write External
* Messaging Connector Outbound Read External

## Partial Data Masking: Leave the Last 4 Digits Unmasked

### Type: Feature

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

<td>No</td>

<td>No</td>

<td>No</td>

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

Some customers would like to have the ability to leave the last 4 digits/characters of masked data unmasked. We recently implemented mandatory credit card data masking, but at least one customer will not accept this without the ability to leave the last 4 digits unmasked for audit-ability.

## Privileges for AppManagement

### Type: Feature

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

<td>No</td>

<td>No</td>

<td>No</td>

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

Includes new user privileges for App Management for:

* LiveEngage App Management full access
* LiveEngage App Management read access

## Long JWTs Cause 400 Errors in GateKeeper

### Type: Bug Fix

  
During logins, the authorization header, which contains the JWT, passed the max limit of header size in back-end chat server. This caused 400 error responses that fail due to GateKeeper being unable to process the request.

## "Visitor Name" displayed as "You" in the payload of FaaS chat events 

### Type: Bug Fix

When the FaaS chat events are dispatched from back-end chat server, the value of 'visitorName' is 'You' when the chat payload is seen using JSON.JSON.stringify(chat) in the chat events on LivePerson FaaS functions.

## Auto away logins should dispatch the right away reason ID 

### Type: Bug Fix

When agents log in with automatic away, the away times are not calculated properly due to missing away reason IDs. This is due to events that are dispatched during agent logins that happen within milliseconds of each other. All events should have an away reason ID that are dispatched from back-end chat server during logins.

## Static load balancing - configure skill by parent groups

{: .notice}  
Available to messaging customers only

Brands will now be able to configure the load balancing by parent groups (aka contact centers) and not only by child groups, greatly simplifying the configuration process.

For example, Load balance between:

* Contact center 1 - 30%
* Contact center 2 - 30%
* Contact center 3 - 60%

!\[\](img/)

![](https://lh5.googleusercontent.com/ea1jje4CaQ5V5x9vGGiXGIUA8XLgEEmsojVwBx3vLA0xUqwGXQVcHzra7b8MP8CFsrnjaMEoQgf35AKe6VA1xIatFjNgqwfzclJEyvgs87uG3hNkmr0T5QXZebdW5ecdI8v5Akgg =456x266)

**{: .important}**

Resumed conversations will retain the resuming agent group and not the parent group ID. The next version of back-end messaging server will address this issue and make sure that resumed conversations will be allocated to the parent group if needed.

### Queue prioritization - Priority based on messaging source

**Type:**

Enables brands to capitalize on high converting channels or specific campaigns sent by channels by assigning extra velocity to conversations based on the messaging source the conversation is coming from. For example, brands can look at the data on incoming messaged from whatsApp and decide that WhatsApp has higher conversion rates that other messaging channels and therefor, assign extra priority to conversations coming in from WhatsApp.

{: .notice}**  
**This feature needs to be configured by LivePerson account team

  
Bug Fixes

### Validate Ring is in state ringing on ring accept business logic (AE-6414)

Bug: After leader jump, Sky’s bot that subscribed to the same routing task notification got the same ring several times - accepted and changed skills. We added validation on the ring, to verify it is still in valid state to accept.