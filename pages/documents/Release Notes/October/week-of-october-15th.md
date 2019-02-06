---
pagename: Week of October 15th 2018
categoryName: Release notes
subCategoryName: 2018
indicator: chat
subtitle: LivePerson Release Notes
level3: October
permalink: Release-notes-2018-october-week-of-october-15th-2018.html
isTutorial: false
isNew: false
date: 2019-02-06 12:43:51 +0200

---
These release notes include new features arriving to LiveEngage during October 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

\***Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important} The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New Functionality

### Queue visibility in Realtime Dashboard and in the KPI bar in All connections

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

Ability to view the number of actionable conversations in queue out of total unassigned conversations directly from the LiveEngage data bar and the Realtime dashboard. Actionable conversations are those that require the agent’s attention. A conversation may also be considered actionable if it meets any of the following conditions:

* The last message was sent by the consumer.
* The conversation was set with a manual SLA
* The conversation was transferred to the queue

Actionable conversations metric is also available via Messaging Operations API so customers can retrieve the information independently as an accumulated value from the last 24 hours or as a snapshot of the current state of the queue.

### Push Notification Proxy - Self Service (LE-89348)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| No | Yes | No | No | No | No | No | No | No |

This functionality enables the configuration of a push notification proxy through the LiveEngage UI, which was previously configured through R&D and required a service deployment.

Further details are available on the developers site:

[https://developers.liveperson.com/push-notification-service-overview.html](https://developers.liveperson.com/push-notification-service-overview.html "https://developers.liveperson.com/push-notification-service-overview.html")

This functionality is enabled by default to all customers through the Mobile app management section, under Data Sources.

![](/img/week-of-october-15th-2018-2.png)

### Predefined Content & Content Categories - Audit Trail (AE-110)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

An audit trail provides the ability to track changes made to LiveEngage Predefined content. It's needed for several reasons:

* **For customers:** To track changes performed in their LiveEngage account. For Enterprise customers (especially Financial Services), it is required as part of their security regulations.
* **For Support:** When troubleshooting an issue, tracking changes performed in the account will assist the support personnel with narrowing down the reasons for an issue.

Today, LiveEngage offers a partial solution for auditing: Changes done on specific administration components can be tracked in the audit trail, while predefined content and category changes cannot be tracked.

Therefore, we added the ability to view details on changes made to the PDC and content categories in the audit trail in LE UI.

The Audit Trail table was enhanced to show details of changes made to Predefined Content (PDC) and content categories.

\***This feature requires enablement ​- please contact your LivePerson account team.**

![](/img/week-of-october-15th-2018-3.png)

### Intelligent Routing Queue Delivery (back-end messaging-server)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| Yes | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

**Where Do I define Sorting Business Rules?**

Sorting business rules are defined in site settings under property in site settings:

**messaging.routing.sorting.queue.definitions**

The definition is JSON based rules

**What is the outcome of defining business rules?**

Every rule is producing a 'velocity' for conversation.

Conversations with higher 'velocity' will have higher priority in routing unassigned conversations in queues.

**Rules Description**

**Transfer Rule**

Transfer rule is made in order to give higher priority to conversations that are 'During Transfer'.

A conversation is 'During Transfer' if :

1. The last message before the transfer is from an Agent
2. A transfer was made from Skill1 to Skill2 ( Skill1 can be equal to Skill 2 or different)
3. After the transfer action, no message was written on the conversation (No message from Agent or No message From Consumer)

#### **Transfer Rules Types :**

1. 'SourceDestination' skill rule
2. 'Threshold' rule

#### **Transfer Rules Types Description**

| Transfer Rule Name | Description | Fields | Optional Fields | Mandatory Fields | Valid Values |  
| --- | --- | --- | --- | --- | --- ||  
| SourceDestination | Defining a velocity in case a conversation had transferred from 'source' skill to 'destination' skillWe can define either only source, only destination or both. | sourceSkilldestinationSkillvelocity | sourceSkilldestinationSkill | velocity | 'sourceSkill' , 'destinationSkill' : String'velocity' :1 <= Positive Decimal number <= 5 | | Threshold | Defining a velocity in case of numbers of transfers.We can define a different velocity for number of transfers | numberOfTransfersvelocity | All Mandatory | numberOfTransfersvelocity | 'numberOfTransfers' : Positive Number => 1'velocity' : 1 <= Positive Decimal number <= 5 |

* In case no rule match is defined on the conversation, default velocity will be 1
* If inside a rule there are few overlapping conditions, the first condition wins. ( see examples below )
* Every rule will produce a velocity, a conversation will have an aggregation of velocities from all rules

**Transfer Rules Examples**

**EXAMPLE 1 - Number of transfers**

Expected outcome : A conversation that had at least 1 transfer will have velocity 4, a conversation that had at least 3 transfers will have velocity 5

Json Example :

{

"sortType":"S1",

"fixedFifoProbability":0.5,

"businessRules":{

"transfer":{

"transferVelocityThresholdList":

\[

{"numberOfTransfers":1,"velocity":4},

{"numberOfTransfers":3,"velocity":5}

\]

}

}

}

In this example:

if the conversation had 1 transfer - velocity will be 4

if the conversation had 2 transfers - velocity will be 4

if the conversation had 3 transfers - velocity will be 5

if the conversation had above 3 transfers - velocity will be 5

**EXAMPLE 2 - Velocity Based On Source Destination Skill**

Expected outcome :

1. Give higher priority to conversations that were transferred **to destination skill "RETENTION-SKILL-ID"**
2. Give **higher priority especially** for conversations that were transferred **to destination skill "RETENTION-SKILL-ID"** and arrived **from source skill "VIP-SKILL-ID"**
3. **Ignore velocity** and give no priority if the **bot** did the transfer , i.e **source transfer skill is "BOT-SKILL-ID"**

**In this case condition, 1,2 are overlapping so if we want that condition 2 will win, we need to put it first in the JSON definition**

Json Example :

{

"sortType":"S1",

"fixedFifoProbability":0.5,

"businessRules":{

"transfer":{

"transferVelocitiesList":

\[

{"sourceSkillId":VIP-SKILL-ID,"destinationSkillId":RETENTION-SKILL-ID,"velocity":5}, **// Condition #2**

{"sourceSkillId":BOT-SKILL-ID,"velocity":1}, **// Condition #3**

{"destinationSkillId":RETENTION-SKILL-ID,"velocity":4} **// Condition #1**

\]

}

}

}

**EXAMPLE 3 - Multiple Transfer Ruled**

{

"sortType":"S1",

"fixedFifoProbability":0.5,

"businessRules":{

"transfer":{

"transferVelocitiesList":

\[

{"sourceSkillId":VIP-SKILL-ID,"destinationSkillId":RETENTION-SKILL-ID,"velocity":5}

\],

"transferVelocityThresholdList":

\[

{"numberOfTransfers":1,"velocity":4}

\]

}

}

}

### Shift status REST API (91371, 91374, 91373, 91388)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
 | Yes | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

**Expose Shift Status API:**

* A new module was created in async (not part of aam or cm\\ms)
* Rest API exposed
* Rest API advocates WorkdaysManager in common to get shift status
* Authentication is done using bearer\\jwt

**Rate limit:** default rate limit 300r/s per IP

**Cache the result:**

* added Map<BrandId, Map<Skill, ShiftData>>
* use caching and recalculate when:
  * time > Min(nextOn, nextOff) - recalculate
  * changes in configuration\\skill

**API per brand:** API module depends on ac-common

### UMS Encoded Metadata (new) (94530)

LiveEngage Messaging provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing [conversation metadata](https://developers.liveperson.com/messaging-agent-sdk-conversation-metadata-guide.html) input field and is available as of UMS 3.15 version.

**Value**

Bots implementations (Bots Central, external bots) can leverage this capability by passing unstructured data on a conversation, without the need to follow up on a specific schema structure. That allows the freedom for each bot’s implementation to define their own unstructured data needs.

**Risk**

As the content of the encoded metadata is unknown to LiveEngage, data can potentially contain PII, offensive or malicious content.

Brands who wish to use that feature will have to sign a legal waiver indicating that they are the owners of the encoded data and are responsible for its content. The responsibility for it is entirely on the brand's responsibility.

**Implementation**

Prior to using encoded metadata, brands must first

Sign the LP Legal Waiver

Enable the encoded metadata AC feature (contact LP representative) - cannot be enabled before the legal waiver was signed and filed.

Sending and receiving encoded metadata is similar to any metadata transfer, as described in the [Conversation Metadata Guide](https://developers.liveperson.com/messaging-agent-sdk-conversation-metadata-guide.html).

**Sending Encoded Metadata**  
To send encoded data, use the metadata input filed: “encodedMetadata”.  
For example, sending encoded metadata on a publish-event would look like this:

{  
"kind": "req",  
"id": 1,  
"body": {  
"dialogId": "2324be55-7f85-41f4-8092-5260cbc45d1a",  
"eventId": 1,  
"event": {  
"type": "ContentEvent",  
"contentType": "text/plain",  
"message": "sending encoded metadata!!"  
}  
},  
"encodedMetadata":"<base64-encoded string>",  
"type": "ms.PublishEvent"  
}

**Receiving Encoded Metadata**  
To receive encoded metadata, use the [Messaging Agent SDK](https://developers.liveperson.com/messaging-agent-sdk-overview.html) (on Agent side) or [Messaging Window API](https://developers.liveperson.com/messaging-window-api-overview.html) (on Consumer side).

**Data Validation**

LiveEngage will validate the following points on every request containing the encoded metadata input field:

1. AC feature is ON
2. Metadata size is limited to 5k
3. Content is base64 encoded
4. (In case metadata was sent with a message) a text message is passed along with the metadata

Failing to comply with the above validation points will cause the message to be dropped and an error response of BadRequest will be returned and the client will be disconnected.

**Behavior**

An agent or a consumer can send encoded metadata field on a publish message of type text plain and rich content. All subscribers, of all types, will get it on the WebSocket.

All other API requests are not supported for sending the encoded metadata field.

**Please note:**

1. Encoded metadata is only available for real-time, not for historical data.
2. Encoded metadata is stored on Couchbase but does not trigger any events and not saved to Kafka or Hadoop.
3. Encoded metadata is not available on Agent Widget SDK and does not show on Agent Workspace. It is available on Agent SDK only so that it can be collected on the agent side.
4. Encoded metadata is not part of the WebHook notifications, thus cannot be used via the Connector API.

### Privileges infrastructure instead of role-based permissions (82296)

Change the way UMS validates API requests by LE user from role-based permissions to privileges-based permissions.

Now UMS is aligned with other LE services and supports permissions and profiles which are configurable by brand from the LE UI.

While the agent workspace UI does some validations on permissions, these should also be enforced by the backend since the API is also external.

## Enhancements

### Add unauthenticated consumerId to Agent widget SDK (AE-463)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

As part of the Agent Widget SDK, a new "_claimsAndAuthType_" field was exposed. This field will include the “claims” key, replacing the authenticatedData (which is now deprecated) and the “acr” (AuthType) key of the conversation.

This new field will contain all engagement attributes and ACR (authentication level) for both authenticated and unauthenticated conversations. The “claims” key will include the engagement attributes (SDEs) passed from the IDP. The engagement attributes will now hold the consumerId, under the Personal Info SDEs (under the “customerId” key).

### Post conversation survey - Audit Trail (LE-93260)

  
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| Yes | Yes | Yes | Yes | Yes | No | No | No | No |

Changes made to LiveEngage’s post conversation survey are now audited so admins have the ability to track changes and take action if needed.

Use case: The account admin added a new survey to the account or modified an existing survey through the Bot Studio and published it. Now the admin can review:

* Which skills were added or removed from the survey (skills on which the survey would present when the conversation ends)
* Who activated or deactivated the survey
* Modifications that were done on the survey questions and logic (see Review Changes screenshot below for the side by side comparison between the old and new survey versions)

\***This feature requires enablement ​- please contact your LivePerson account team.**

![](/img/week-of-october-15th-2018-4.png)

### LOBs External API - Add keys (AE-405)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
 |Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

Lines of Business have been exposed as an external API for some time. This change exposes it in the LE UI.

We exposed the API under:

**Campaigns -> Data sources -> API -> "Add new API key" -> Select APIs -> Administration**

When advanced options toggle is OFF: * Title: Lines of Business

* Keys: "ac.lob.read.external" and “ac.lob.write.external"
* The user gets both read and write permissions

![](/img/week-of-october-15th-2018-5.png)

When advanced options toggle is ON: * Title: Lines of Business

* Subtitle: Read
  * Key: "ac.lob.read.external"
* Subtitle: Write
  * Key: "ac.lob.write.external"

This feature is enabled by default to all customers.

![](/img/week-of-october-15th-2018-6.png)

### Offline survey email settings (LE-94582)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| No | No | No | No | No | No | No | No | Yes |

This provides the ability to change the offline survey email settings (such as the recipient, subject and footer) through UI (self-served), instead of contacting LivePerson Support. The survey settings are per survey.

{: .notice}**  
**It is recommended to fill out all fields or leave them blank to use the account default settings.

This enhancement is enabled by default for all customers.

![](/img/week-of-october-15th-2018-7.png)

**Limitations**

The settings are only applicable for a non-default engagement window, i.e. it is not possible to adjust the survey settings for the default engagement window.

### Send PDC-id to UMS on publish message (LE-91761)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

In order to support reporting on predefined content usage for messaging (as exists already in chat), we now send the PDC (Predefined Content) **Id**, **Category** and if **it was edited** when publishing a message to UMS from the web agent as part of the metadata.

### Expose unauthenticated consumer ID in consumer profile for back-end messaging server (92875)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| Yes | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

Expose customerID on unauthenticated flows (LP GUID) in order to allow reporting of SDE's.

### Alternative Text in Publish Text for back-end messaging server (92952)

A new optional field named ‘alt’ was added to the publish event API. The purpose of this field is to provide a simple text fallback message when the clients do not know how to display the original message.

Example:

A published event message with quick replies:

* Message: “What bundle would you like?”
* Quick Replies: button: “1GB”, button “10GB”, button “40GB”
* Alt: “What bundle would you like? Send 1 for a 1GB plan, 10 for a 10GB plan or 40 for a 40GB plan. ”

Some clients receiving this message may display the original message with the quick replies. Other clients, for example those using SMS connectors, may choose to display the ‘alt’ message instead.

### Expose Skill ID on conversation info (93187)

Expose skill on conversation info on the consumer side.  
The skill is not needed for the window itself, but for the integration with other tools on the brand's webpage.

### Upgrade Jetty version to latest stable (9.4.10) (90484)

Upgrade Jetty version to latest stable (9.4.10)

## Bug Fixes

### Agent Widget SDK: bind to chatInfo does not always return chat skill (AE-473)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| No | No | No | No | No | No | No | No | Yes |

On Agent widget SDK: bind to chatInfo does not always return "chatInfo.chatSkill". This bug is now resolved.

### Typing in the studio preview URL field generates errors in the console within campaign manager (LE-83481)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

In the engagement studio, when a user clicks on the preview button and enters characters in the URL field, a bug results with an error in the console (Chrome Developer Tools). The user can still enter the URL but cannot load it by clicking the enter key. However, clicking the “Go” button will load the URL. This bug has been resolved.

### MS was not being updated intermittently by CM on occasions (91590)

Agents cannot send messages to consumers or return the conversation to Q, only close. This issue has now been fixed. The fix included increasing the time period on notifications that need to be handled after a restart.

### PCS - missing reporting / action is not reported from metadata (95404)

Fix missing reporting on customers responses on PCS from SMS and Facebook