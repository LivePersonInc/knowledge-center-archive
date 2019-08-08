---
pagename: Week of August 12th
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: August
permalink: release-notes-2019-august-week-of-august-12th.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during August 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## \[ABC\] Increase file sharing size limit

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

Consumers can now share files and images that are bigger than before, improving the consumer experience and conversation quality:

* Size limit for file types PDF, DOC (X), PPT (X), XLS(X) is increased to 25 MB
* Size limit for image types JPG,GIF,JPEG,PNG is increased to 10 MB

**Dependencies:**

* UMS 3.22

## \[ABC\] Support structured content list picker within Post Conversation Survey messages

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

ABC Post Conversation Survey is enhanced to support survey questions with structured content of these types:

* List Picker
* Date Picker

This is in addition to the support of questions with quick replies option, which is already supported.

## \[ABC\] Mapping customer’s device locale setting to language engagement attribute

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

ABC “Locale” property, taken from the customer locale setting will be added to the ABC connector and mapped to the language SDE. This value will be presented to the agent as part of the consumer personal info section and can be used for routing, by bot, and for reporting purposes.

For example, locale value "en_AU" specifies the language as English and the region as Australia. This property will be mapped to the language SDE under Personal info.

**Screenshot**

Image 1: Language SDE added under Personal info

![](/img/week-of-august-12th-3.png)

## Localization Support for Pusher Default Notifications (Back-end messaging)

### Type: New feature

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

In order to support localization for default pusher notifications (standard and rich text), two new site settings have been added. These new settings are in json and map a message from the locale provided in the conversation context to a message. If these values are not set, behavior will revert back to the previous functionality.

## Get Unread messages count REST Api

### Type: New feature

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

Expose new rest API for retrieving the count of unread messages of consumer last opened conversation.

## Answering Service Enhancements

### Type: New feature

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

Three new Answering Service enhancements are included:

* CO_MANAGED_BACKUP
* CO_MANAGED_HYBRID
* Conversation Handler Details data now included in Avro events model

**CO_MANAGED_BACKUP**

This Rollover flow allows the brand's agents a chance to first handle the conversation. If the agents are not available during a dispatch cycle (not online or otherwise eliminated) and a valid rollover configuration is defined in the brand's site settings, then Routing will quit trying to dispatch the conversation and will issue the AGENTS_NOT_ACCEPTING fact to AMS (CM).

The AGENTS_NOT_ACCEPTING fact will kick off the RS_AGENTS_NOT_ACCEPTING flow in CM. This flow will check the current state of the conversation in CB (current agent matcher service) -- if AM (the brand), then it will double-check that there is a valid RO configuration defined. If there is, then it will update the conversation handler details to match the RO account. If the conversation is already handled by a RO account, then it will update the conversation handler details back to AM (return the conversation handler to the brand). The updated conversation handler details will be persisted, and if it has changed, then the CONVERSATION_HANDLER_CHANGED fact will be sent to Routing.

Routing will process the CONVERSATION_HANDLER_CHANGED fact and will clean the conversation's cached data (including brand shared data) to reflect that this conversation is now being handled by the new account and will reroute the conversation to its new handler.

**CO_MANAGED_HYBRID**

Rollover type which is a combination of CO_MANAGED_SCHEDULE and CO_MANAGED_BACKUP.

For a new conversation -- CO_MANAGED_HYBRID will try the brand's agents if they are currently working according to their work days shift data and will immediately rollover if they are off-shift (same behavior as CO_MANAGED_SCHEDULE).

If the brand's rollover site settings provide a valid Rollover configuration with a max number of ring attempts threshold defined and the brand's agents do not accept before that limit is reached, then Routing will fire AgentsNotAccepting. CM will act on that fact and respond with a ConversationHandlerChanged fact for Routing to try the Rollover account. This is the same behavior as CO_MANAGED_BACKUP.

**Conversation Handler Details data now included in Avro events model**

New fields are defined/populated for Conversation Handler Details on LP Avro Events for events which include ConversationDetails.

The new fields include:

1. conversationHandlerAccountId
2. conversationHandlerSkillId
3. conversationHandlerAgentGroupId
4. agentMatcherService

## Agent Group Skill Filter For Queued Conversations Notifications

### Type: New feature

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

A group skill based filter has been added on queued conversation notification for Agent-Managers. Agent Managers can only see his own territory groups members skills matched queued conversations. If he is the only one who has the skill, he will not see the matched queued conversations.

## Privileged Data Masking

### Type: New Feature

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

Customers may configure their own regular expression to mask data in messages based on agent permission. Agents now can be grouped into one which has permission to view data not masked and another which will view data masked. A typical scenario is that, all human agents can be configured as no permission to view sensitive data and hence data to them will be masked, while bots can be configured to have permission to view those data in plain text.

This permission can be granted/revoked from LE UI profile management.

Please note that, all historical data will be masked by this regular expression if feature is turned on, regardless of permission settings.

This can be turned on by customer request. The site settings will need to be provided by customer which LivePerson can set.

## Allow Agent Subscription to Already Assigned Conversations

### Type: Bug Fix

In the current system, agents are allowed to subscribe to conversations that are assigned to them but they get a notification for conversations that are assigned to them and also one that they are participants of. This is a bug because initial subscription and notification should match. So, this ticket is to allow agents to subscribe to assigned conversations or conversations that they are assigned or participant of.

## View Masked Data Privilege (Back-end chat)

### Type: New Feature

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

A new user privilege needs to be created to allow users to view masked data for both historical and real-time messaging conversations. When an agent or agent manager has this permission enabled, they will be able to see the masked data with the regular expression that matches the one in _messaging.transcript.agent.masking.regexp_ site setting. The default value for this permission is off, and is displayed in the LiveEngage user interface. The AC feature called _Messaging.AgentMasking_ has to be enabled to apply these permissions.

## Conversation Builder Privileges (back-end chat)

### Type: New feature

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
Permissions are added to support conversation builder's related actions. These permissions include: Create and Edit Bots, View Bots, Export Bots, Import Bots, Delete Bots, Create Release, Accept Release, Create Version, Restore Version, Create and Edit Enterprise Integrations, View Enterprise Integrations, Delete Enterprise Integrations, Create and Edit API Integrations, View API Integrations, Delete API Integrations, Create/Edit Global Functions, View Global Functions, Create/Edit Credentials, Use Credentials, Start a connector, Stop a connector, Create/Edit Domain, Delete Domain, View Domain, Create Edit Intents, View Intents, Delete Intents, Create/Edit Entities, View Entities, Delete Entities, Train Model, Activate Model, Create/Edit Knowledge Base, View Knowledge Base, Delete Knowledge Base, Create/Edit Article, Delete Article, Approve Article, Import Knowledge Base, Export Knowledge Base, View Analytics, Download Analytics, and Purge Data.

## Back-end chat support for NLS JWT

### Type: Bug fix

This task is intended to fix a bug when a user authenticates through the new login service (see MFA solution concept). Some services (such as Report Builder), use the old SSO solution that relies on Denver web session. Therefore, we need to allow this flow by creating a session in Denver even though the authentication was actually done in the new login service. This solution has passed security review and it’s secured by JWT signing/verification and user data hashed verification.

## Wrong Time and Timezone Presented in Transcript Email

### Type: Bug Fix

When visitor requests to get transcript by mail, the chat start/end time and timezone are not correct. The timezone appears in GMT instead of the consumer timezone. The expected behavior is for the time zone that should appear to be in the time zone of the visitors, and not GMT. The IP address is used to identify where the visitor's location and to determine which timezone the visitor resides.