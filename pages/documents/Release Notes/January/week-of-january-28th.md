---
pagename: Week of January 28th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: January
permalink: release-notes-2019-january-week-of-january-28th.html
isTutorial: false
isNew: false
date: 2019-02-06 11:51:46 +0000

---
These release notes include new features arriving to LiveEngage during January 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

\***Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}

The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Secure form (PCI) support for SMS using Twilio messaging gateway (94882)

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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>N/A</td>
<td>No</td>
<td>N/A</td>
<td>No</td>
</tr>
</tbody>
</table>

There is now support for secure forms for the SMS using Twilio messaging gateway. This allows brands to perform identification and authorization, pass payment details, share PII information to generate leads, or to perform a registration process during a conversation in a PCI compliant environment.

PCI secure form for messaging connector channels will expand brands’ business use cases on channels that do not have the native secure form capabilities, allowing them to build a conversational commerce strategy with LiveEngage.

**Connectors support for secure forms**

For messaging connectors, secure forms will be sent to the relevant channel via an external link. The consumer will be able to tap on the link, which will navigate them to the device default browser, where they will be able to see the form, fill it and submit.

The design for the form in the messaging connectors experience is inherited from the engagement window default design.

* Secure form flow for connector channels:
  * Connector channels that will support secure forms in upcoming releases: WhatsApp Business, Facebook Messenger, Apple Business Chat and Google RCS Business Messaging
  * SMS over Twilio will support secure forms via an external clickable link - all future channels will be supported in the same manner, and will only present the link to the consumer which will allow him to tap and open the secure form on the device browser
  * Agents will be able to send the secure form in the same manner that they send it in web messaging or in-app conversations - via the predefined content widget
  * Consumer will receive the secure form sent by the agent on the relevant channel via a link (view the user flow in the below screenshots)
  * Consumer will be able to submit the form, and will receive a push notification via the connector channel he/she is conversing from, indicating the form was received by the agent, with the following message:  
    “The following secure form has been submitted: <Secure form name>”
  * Agent will be able to view the secure form answers in the same manner that he/she does today for in-app and web messaging. This text and view will appear to the agent:

  _The Secure Form \[secure form name\] has been submitted. View secure form \[contains clickable link to view secure form content\]._
* Agent conversation transcript indicators for connectors secure forms will show the following status:
  * Sent by the agent
  * Received by the consumer
  * Submitted by the consumer

#### How to enable

To configure this feature, please speak to your LivePerson representative. For more information, please see the [External Configuration guide](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Secure+form+for+messaging.pdf)

**Limitations**

* Secure form enablement is account-wide.
* Secure forms are general (not specific per skill).
* Invitation text can be customized on the In-App SDK only.
  * Connectors text is currently fixed to: “<secure form name>: <secure form link>”
* Secure forms are created by the LivePerson account team.
* Data submitted in the secure form is only retrievable by the agent for the duration of the messaging session it was submitted in (until the conversation is closed by the agent or auto closed), and only to the agent that sent the form.
* Secure forms cannot be shared by bots.
* Consumer cannot open the same secure form more than once - If a consumer clicks in the secure form link, closes it before submitting, and tries to click on it again, they will receive an error message.
* Secure forms for connectors will not be available to consumers to open and fill on desktop.
* Currently, reporting will be carried out on a per-need basis through the analytics team.
* Additional, smaller limitations for connector channels are shared in the configuration guide.

![](/img/week-of-january-28th-1.png)

or

![](/img/week-of-january-28th-1b.png)