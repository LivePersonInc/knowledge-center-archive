---
pagename: Week of April 8th
categoryName: Release notes
subCategoryName: 2019
indicator: messaging
subtitle: ''
level3: April
permalink: release-notes-2019-april-week-of-april-8th.html
isTutorial: false
isNew: false
date: 2019-04-03 14:56:36 +0300

---
These release notes include new features arriving to LiveEngage during March 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Secure forms for CM connector (CX-124)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | No | No | No | No | No | Yes | No |

There is now support for secure forms for the CM SMS connector. This feature allows brands to perform identification and authorization, pass payment details, share PII information to generate leads, or to perform a registration process during a conversation in a PCI compliant environment. PCI secure form for messaging connector channels will expand brands’ business use cases on channels that do not have the native secure form capabilities, allowing them to build a conversational commerce strategy with LiveEngage.

For messaging connectors, secure forms will be sent to the relevant channel via an external link. The consumer will be able to tap on the link, which will navigate them to the device default browser, where they will be able to see the form, fill it and submit. The design for the form in the messaging connectors experience is inherited from the engagement window default design.

* Secure form flow for connector channels:
  * CM will support secure forms via an external clickable link - all future channels will be supported in the same manner, and will only present the link to the consumer which will allow him to tap and open the secure form on the device browser
  * Agents will be able to send the secure form in the same manner that they send it in web messaging or in-app conversations - via the predefined content widget
  * Consumer will receive the secure form sent by the agent on the relevant channel via a link (view the user flow in the below screenshots)
  * Consumer will be able to submit the form, and will receive a push notification via the connector channel he/she is conversing from, indicating the form was received by the agent, with the following message: “The following secure form has been submitted: ”
  * Agent will be able to view the secure form answers in the same manner that he/she does today for in-app and web messaging. This text and view will appear to the agent: The Secure Form \[secure form name\] has been submitted. View secure form \[contains clickable link to view secure form content\].
* Agent conversation transcript indicators for connectors secure forms will show the following status:
  * Sent by the agent
  * Received by the consumer
  * Submitted by the consumer

**How to enable:** To configure this feature, please speak to your LivePerson representative.

Read more about secure forms [here](https://knowledge.liveperson.com/security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html).

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

## Bugs Fixes

### \[Twilio\] When “messaging.file.sharing.enabled” is set to false, unsupported message is not sent (CX-146)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | Yes | No | No | No | No | No | No | No | No |

When an account has file sharing disabled and the consumer sends an image, it looks like the image was sent to the agent. But since the account has file sharing disabled, nothing is sent to the agent and there's no notification to the consumer that the feature is supported.

**Fix:** When an account has file sharing disabled, a message is displayed saying, "Sorry! Unfortunately files cannot be sent via SMS." This message should be sent to the consumer when the consumer tries to send images during a conversation with an agent.

### \[Twilio\] Handle based64ed text messages (CX-147)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | Yes | No | No | No | No | No | No | No | No |

Long messages sent from consumer to agent via Twilio as MMS messages are displayed in LE UI as a base 64 encoded message.

**Fix:** Since messages are getting decoded intermittently on Twilio, LivePerson is adding this feature as an optional toggle for brands to configure whether they want to decode the messages before displaying in LE UI. When enabling this feature, only messages that are at least 100 characters long and in base64 format will be decoded to plain text. Default is disabled.

**How to enable:** To configure this feature, please speak to your LivePerson representative.

### \[ABC\] Engagement attribute isn't passed and old values are kept (CX-176)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | Yes | No | No | No | No | No | No |

When a user opens an Apple Business Chat link with engagement attribute parameters that are made of non-Latin characters, engagement attribute information in LiveEngage is not correctly updated when they already have non-Latin characters as engagement attributes from previous conversations.

**Fix:** LiveEngage UI now can handle any characters passed through engagement attribute parameters. Information is displayed in LE UI under the Customer info section.

**Screenshots**

![](/img/week-of-april-8th-1.png)