---
pagename: Week of March 4th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: March
permalink: release-notes-2019-march-week-of-march-4th.html
isTutorial: false
isNew: false
date: 2019-03-20 16:19:40 +0000

---
These release notes include new features arriving to LiveEngage during Feb 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionalities

### \[Messaging connectors\] Secure form support for Facebook Messenger and Apple Business Chat (CX-125, CX-126)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | Yes | Yes | No | No | No | No | No |

There is now support for secure forms for the Facebook Messenger and Apple Business Chat connectors. This feature allows brands to perform identification and authorization, pass payment details, share PII information to generate leads, or to perform a registration process during a conversation in a PCI compliant environment.

PCI secure form for messaging connector channels will expand brands’ business use cases on channels that do not have the native secure form capabilities, allowing them to build a conversational commerce strategy with LiveEngage.

**Connectors support for secure forms**

For messaging connectors, secure forms will be sent to the relevant channel via an external link. The consumer will be able to tap on the link, which will navigate them to the device default browser, where they will be able to see the form, fill it and submit. The design for the form in the messaging connectors experience is inherited from the engagement window default design.

* Secure form flow for connector channels:
  * Facebook Messenger and Apple Business Chat will support secure forms via an external clickable link - all future channels will be supported in the same manner, and will only present the link to the consumer which will allow him to tap and open the secure form on the device browser
  * Agents will be able to send the secure form in the same manner that they send it in web messaging or in-app conversations - via the predefined content widget
  * Consumer will receive the secure form sent by the agent on the relevant channel via a link (view the user flow in the below screenshots)
  * Consumer will be able to submit the form, and will receive a push notification via the connector channel he/she is conversing from, indicating the form was received by the agent, with the following message: “The following secure form has been submitted: <Secure form name>”
  * Agent will be able to view the secure form answers in the same manner that he/she does today for in-app and web messaging. This text and view will appear to the agent: The Secure Form \[secure form name\] has been submitted. View secure form \[contains clickable link to view secure form content\].
* Agent conversation transcript indicators for connectors secure forms will show the following status:
  * Sent by the agent
  * Received by the consumer
  * Submitted by the consumer

<br/>  
**How to enable:** To configure this feature, please speak to your LivePerson representative.

For more information, please see the following documents:

* [External Configuration guide](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Secure+form+for+messaging.pdf)

**Limitations**

* Secure form enablement is account-wide.
* Secure forms are general (not specific per skill).
* Invitation text can be customized on the In-App SDK only.
  * Connectors text is currently fixed to: `<secure form name>: <secure form link>`
* Secure forms are created by the LivePerson account team.
* Data submitted in the secure form is only retrievable by the agent for the duration of the messaging session it was submitted in (until the conversation is closed by the agent or auto closed), and only to the agent that sent the form.
* Secure forms cannot be shared by bots.
* Consumer cannot open the same secure form more than once - If a consumer clicks in the secure form link, closes it before submitting, and tries to click on it again, they will receive an error message.
* Secure forms for connectors will not be available to consumers to open and fill on desktop.
* Currently, reporting will be carried out on a per-need basis through the analytics team.
* Additional, smaller limitations for connector channels are shared in the configuration guide.

![](/img/week-of-march-4th-1.png)

![](/img/week-of-march-4th-2.png)

![](/img/week-of-march-4th-3.png)

![](/img/week-of-march-4th-4.png)

### Realtime Dashboard - Overdue Conversations KPI & API

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

Addition of new metrics within the Messaging Queue Health API that are exposed within the Realtime Dashboard. This feature is available to all customers.

New KPIs are available in the [Messaging Queue Health ](https://developers.liveperson.com/messaging-operations-api-methods-messaging-queue-health.html)to provide greater control to the Contact Center & Agent Managers of their Queue Health. Specifically, identify how many conversations are currently in queue and in breach of the Time to Response (Overdue).

* Overdue While in Queue
* Overdue While Assigned
* Total Overdue

The definition of the overdue_Conversations metric is the number of conversations which are pending in-queue (“unassigned”) and in breach of the preset TTR (time to respond) of an agent to the consumer.

* **Granularity**: _as per Messaging Operations Queue Health_
* **Date / Time Filter Attribution**: _as per Messaging Operations Queue Health_
* **Aggregation Function**: _as per Messaging Operations Queue Health_
* **Supported Source Types & Conversation Types**: _as per Messaging Operations Queue Health_
* **Attribution Model**: _as per Messaging Operations Queue Health_
* **Filter:** _as per Messaging Operations Queue Health_

**How to enable**: Enabled by default in the Realtime Dashboard

**Limitations:** This metric is not available for Chat.

**Current section:**

![](/img/week-of-march-4th-5.png)

**Skills section:**

![](/img/week-of-march-4th-6.png)

### Conversation Builder

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

Brands are rapidly expanding their conversational commerce capabilities, reaching customers through popular messaging services like SMS, Facebook Messenger, Apple Business Chat, WhatsApp and more.

AI and automation, including bots, are critical to delivering high-quality brand-to-consumer interactions through messaging. Yet, there are many challenges that come with building bots and automations:

* The development is complex and requires developers
* Consumer intents are difficult to understand, especially using different NLU systems and entities
* The training and optimization of bots is best conducted by agents - conversation and brand experts- but is conducted by the people who understand code, mainly developers and data scientists.

#### **Key features of the Conversation Builder**

The Conversation Builder is part of the new AI capabilities from LivePerson that helps brands deliver high-impact conversational experiences at scale.

The Conversation Builder is a code-free, dialogue based tool, for creating automated conversations. It is built from the ground up to enable anyone to build bots using simple UI and includes some unique capabilities:

1. **There is no need for code**. Because the Conversation Builder doesn’t require coding to create a bot’s conversation, agents, who are closest to consumers, can directly participate in the conversational design, optimization and training of bots and automations.
2. **Brands don’t need to start from scratch for building bots**: The Conversation Builder provides an out-of-the-box automation library with templates for common workflows and verticals, such as retail and telco. These automation templates are plug and play with a simple, one-time plug-in to APIs and brands can take advantage of pre-packaged dialogues. Templates include: Concierge, Lead Generation, Product Promotion, Schedule Appointments, Product Search and Shopping, Checkout, Order Status, Off Business Hours, FAQ’s and Gift Guide.
3. With **full integration to our conversational platform**, brands have all of the same processes, such as reporting and real time monitoring, built in to the same environment agents are already working in. Brands can leverage pre-built API Integrations to easily connect to systems like Shopify, Salesforce, Timetrade, Hybris and more.

**How it works**

Bots are easy to create in Conversation Builder. For example, a brand can use a prebuilt retail template from the automation library, edit the script to customize it according to their brand lingo, and immediately integrate to Shopify or their product catalogue.

The Conversation Builder sits on top of our AI engine, Maven, which orchestrates conversations by suggesting to agents the next-best actions or the right bot/automation to use based on the consumer intent.

**Supported Browsers:** Chrome (Version 64.0 onwards - Mac OS, Windows)

![](/img/week-of-march-4th-7.png)

For detailed documentation on the Conversation Builder including an overview, scripting functions, interactions and conditions, please see the [Developers Community.](https://developers.liveperson.com/conversation-builder-conversation-builder-overview.html)

## Bug fixes

### \[ABC\] List picker does not send response when there’s no button (CX-150)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google RCS | Google My Business | WhatsApp Business | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | Yes | No | No | No | No | No |

When an agent sends list picker type structured content without metadata payload, the response from consumer does not send to agent. This issue has been resolved.