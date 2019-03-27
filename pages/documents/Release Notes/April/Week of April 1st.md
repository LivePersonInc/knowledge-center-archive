---
pagename: Week of April 1st
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: April
permalink: release-notes-2019-april-week-of-april-1.html
isTutorial: false
isNew: false
date: 2019-03-27 13:59:09 +0200

---
These release notes include new features arriving to LiveEngage during January 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .notice}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Data Transporter - Release of Data Transporter to GA Environment

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

**Available to all customers?** Y (subject to pricing and Beta agreement)

The Data Transporter enable brands to schedule raw and formatted data report exports from LiveEngage Data APIs, including Messaging History, Engagement History, Messaging Operations and Chat Realtime Operations - each report can be setup on a recurring frequency, including but not limited to weekly, daily, and hourly, and the report will be delivered to a destination of the users choice, including internal LP Cloud, Amazon S3, Google Cloud, or SFTP.

Some reports come pre-formatted in flat-file tables, such as Messaging and Engagement History, to be easily consumed by your chosen BI solution, making the process of having conversation data scheduled for delivery quick and simple.

[**Link to user-guide**]()

**How to enable**

Contact your account manager who can provide details on pricing and enablement.

**Dependencies**

* On first login, user will need to click “I agree” to the [beta terms](https://www.liveperson.com/policies/analytics-beta-tou)
* Encryption of all reports is mandatory to protect your data privacy; a brand can bring your own PGP/GPG based encryption key, or generate a set from the application

**Please note:**

* Reports can only be sent from the time the task is created (historically is not supported)
* Single Sign-on enabled accounts not currently supported
* Only 1 type of report can be configured by LiveEngage source

### Capacity management for manual SLA (AE-1875)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

**Available to all customers?** yes

Today conversations that are set with a long manual SLA maintain a capacity of 1 (active) until the time to inactive defined by Smart Capacity had passed. Only then the weight of the conversation would go down to its inactive weight. While it makes sense in cases where short manual SLAs are set, in cases where long manual SLAs are set this behavior blocks the agent capacity until the conversation reaches its inactive state. This behavior translates into agent wasted capacity of about 2- 4 min, depending on the brand Smart Capacity configuration.

With the new Capacity management for manual SLA, it is now possible to define a threshold value that in cases where the manual SLA set to the conversation is higher than this value, the conversation capacity would immediately be set to the inactive weight, and by that optimize the agent and brand efficiency.

Additionally, with this new feature, conversations that are set with manual SLA can auto-close, assuming that the manual SLA set to the conversation had expired.

{: .notice}

This feature may only be configured by LivePerson account team

### Transfer to Agent (AE-555)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

**Available to all customers?** yes

The transfer to agent capability enables agents, agent managers and bots to transfer a messaging conversation to a specific agent, chosen by the transferring agent. Brands will be able to configure the skills, states, and overall behavior of the transferred conversation.

### Agent File Sharing (Phase I - Photos)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | Yes | No | No | No | No | No | No |

**Available to all customers -** Yes

**Description**  
Agent file sharing enables agents and bots to share files with consumers.At this phase, only photos can be shared via web-messaging. In the future, more file formats will be supported.

Agents will now be able to share photos with consumers in order to answer questions that can be better explained using images. For example, a screenshot for tech support or a product photo for sales use cases.

To enable “Agent file sharing” capability on your LiveEngage account, please contact your LivePerson account team.

### Consumer Step Up (CO-183)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

**Available to all customers:** Yes (Customers using async messaging supported by consumer journey driven engagements)

The Step Up Authentication feature will allow consumers to authenticate in the middle of the conversation. No new conversation will be created for the same consumer. Instead, authenticated user will be added to the existing conversation and agent will be able to see unauthenticated conversation history maintaining the continuity of the conversation. Agent will also able to see consumer PII information reflected in the live conversation. The feature will support either consumer or agent initiating the step up from unauthenticated state to authenticated state during the conversation. The authenticated conversation history will not be visible in the consumer window when the consumer has logged out. Consumer can log back in to see the complete conversation history.

**How to configure?**

To enable Step Up feature please contact you LivePerson account team

**Dependencies**

There are a few dependencies for this feature. Please contact your LivePerson account manager to check you have all the latest versions.

### Language support for an existing feature (MCS) - Italian and Japanese

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

**Available to all customers?** Yes

The LiveEngage Meaningful Connection Score™ (MCS) provides an automatic, unbiased method to measure the relationship between consumers and brands and serves as a real-time customer satisfaction metric, an alternative to CSAT.

It can be used by brands for actionable real-time alerts, for agent performance management and coaching, integration with internal BI systems (such as Power BI, Tableau, etc), or for tracking broader brand performance (e.g. for staffing adjustments).

New feature adds a support for the existing MCS for two additional languages - Italian and Japanese.

**How to enable**

Enabled by default. No need to configure anything.

Custom lexicon per account is not supported in Japanese language. Japanese lexicon can only be updated via code change & rollout of the service.

## Enhancements

### Messaging Queue Health - New metric for Time in Queue for brands using routing bot (LE-99210)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

**Available to all customers?** Yes

**Description**

For brands with a bot configured to be the first agent handling each conversation (for example, a routing bot), a new metric as been added to measure the average time conversation are waiting in queue to be assigned.

The new metric ‘avgWaitTimeForAgentAssignment_AfterBotTransfer’ as been added to both Messaging Queue Health and Messaging Current Queue Health methods.

The metric measures the average number of milliseconds a transferred conversation is waiting in the queue (unassigned) for the next agent to be assigned to it. These metrics measure for transfers from bots.

**How to enable**

Added to the existing Messaging Operations API - Messaging Queue Health and Messaging Current Queue Health methods. No additional enablement needed.

Full documentation, including the definition of the newly exposed metric, can be found in the [LivePerson Developers Community](https://developers.liveperson.com/messaging-operations-api-methods-messaging-queue-health.html).

### Messaging Skill Segments - Filtering skill-segments metrics by user type: bot\\human (LE-97744)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

**Available to all customers?** Yes

For brands with a bot configured to be the first agent handling each conversation (for example, a routing or greeting bot), the API now provides an easier mechanism to distinguish between BOT results and HUMAN results.

A new parameter as been added to the Messaging Skill Segment method, part of the RT Messaging Operations API, to allow filtering the data in the response by the user type of the participating agent.

The optional parameter ‘userType’ can be added to the request URL with any of the following values:

* userType=human

  The response will be filtered to show segments in which only human agent\\s participated in
* userType=bot

  The response will be filtered to show segments in which only bot\\s participated in
* userType=all

  The response will not be filtered by the user type of the agent. All segments will be included

**How to enable**

Added to the existing Messaging Operations API, Messaging Skill Segments method.

In order to filter the API response by the new parameter, it has to be included in the request URL. Full documentation can be found in the [LivePerson Developers Community](https://developers.liveperson.com/messaging-operations-api-methods-messaging-skill-segment.html).

### Advance high-priority skills in the queue (AE-492)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

**Available to all customers?** yes

Enable brands to assign predefined velocity to conversations based on the conversation assigned skill. This way brands can define that conversations that are carried on their high-priority skills can receive a velocity factor that helps them advance faster in the queue and by that reduce the Time-To-First-Response for these skills.

**Dependencies**

Available only through the Queue Prioritization feature

**Please note:**

This feature may only be configured by LivePerson account team

### Send Messaging Queue State event on rings (AE-2560)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

**Available to all customers?** yes

To enable the BI team to distinguish exactly when conversations should be considered overdue, the messagingQueueState event is sent.

## Bug Fixes

### Messaging Queue Health - The metric wait time for Agent Assignment - New Conversation shows null values when using ‘system routing’ feature (LE-99161)

The metric avgWaitTimeForAgentAssignment_NewConversation was fixed to show data also for brands using system routing feature.

The metric now displays the time the conversation waits in queue after it has been routed to the relevant skill by the system.

**How to enable**

Fixed in the existing Messaging Operations API - Messaging Queue Health and Messaging Current Queue Health methods. No additional enablement needed.