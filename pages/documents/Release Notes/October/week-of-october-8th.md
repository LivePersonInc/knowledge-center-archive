---
pagename: 'Week of October 8th '
subtitle: ''
categoryName: Release notes
subCategoryName: 2018
level3: October
permalink: release-notes-2018-october-week-of-october-8th.html
indicator: both
isTutorial: false

---
These release notes include new features arriving to LiveEngage during October 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}

The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionalities

### \[ABC\] Authentication Interactive Message - LiveEngage Support (LE-89160)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

The new Apple Business Chat Authentication Interactive Message enables businesses to authenticate consumers using OAuth2 protocol via the Business Chat conversation.

**Main capabilities:**

* Business Chat will support a new OOTB Interactive Message that allows brands to authenticate their consumers using their OAuth 2.0 provider (only from iOS 12 onwards)
* The brands will use their private OAuth service and will supply the service details in their Apple management area (register.apple.com). The details include:
  * Authentication endpoint URL
  * Token URL
  * Client Identifier
* LiveEngage will support agent/bot generation of the new Auth Interactive Message using the Structured Content framework and configuration (similar to list and time picker)
  * Agent/bot will know if consumer supports the new Auth Message via an engagement attribute, in order to determine if the consumer is qualified to receive the authentication message before sending it.
* Consumer will receive the Authentication Interactive Message and will be able to tap to authenticate on the brand’s Authentication service URL
* Agents and bots on LiveEngage will get real-time updates upon a consumer’s response
* Upon successful or failed authentication, LiveEngage will support passing the authentication status and token back to LiveEngage Conversational Metadata, in order to allow the brand to perform validation on the authentication information

{: .important}

This feature requires enablement - please contact your LivePerson account team

**Limitations**

* Currently the Authentication Interactive Message will only enable brands to perform authentication validation against their OAuth service, and will not enable them to automatically push authenticated engagement attributes to the conversation - supporting engagement attributes is planned for H1, 2018.
* In the current solution, only a bot (using the Agent SDK) can receive the authentication response from the consumer (after the consumer submits authentication on Business Chat) - In the next phase, we will add a user interface indication on LiveEngage which will allow a live agent to see authentication status as well.

{: .sidebyside}
![](/img/release-notes-2018-october-week-of-october-8th-2018.png) ![](/img/week-of-october-8th-2.png)

### \[ABC\] Apply Pay Interactive Message - LiveEngage Support (LE-89070)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

Apple Pay provides an easy and secure way for consumers to buy goods and services within a Business Chat conversation - when a brand asks for payment from a customer who is purchasing goods and services through Business Chat, the consumer can use Apple Pay to make the payment.

**Main capabilities:**

* Business Chat will support a new OOTB Interactive Message that allows brands to submit payment requests to consumers using Apple Pay
* Brands will use their private Apple Pay accounts (or will create new accounts) and will supply their Apple Pay Merchant ID on their Apple management area (register.apple.com).

{: .notice}
Brands need to first register a Merchant Identifier (Merchant ID) in their Apple Developer Account to enable Apple Pay payments in Messages. For information on creating your merchant ID, see [Configuring Your Environment.](https://developer.apple.com/library/content/ApplePay_Guide/Configuration.html#//apple_ref/doc/uid/TP40014764-CH2)

* LiveEngage will support agent/bot generation of the Apple Pay Interactive Message using the Structured Content framework and configuration (similar to list and time picker)
* Consumers will receive the Apple Pay Interactive Message and will be able to tap to pay using their Apple Pay user on their iOS device.
* Agents and bots on LiveEngage will get real-time updates upon a consumer payment response
* Upon successful or failed payment, LiveEngage will support passing the payment details back to LiveEngage Conversational Metadata in order to allow the brand to perform validation on the payment information against their Apple Pay account

{: .important}
This feature requires enablement - please contact your LivePerson account team

#### Limitations

In the current solution, only a bot (using the Agent SDK) can receive the payment response from the consumer (after the consumer submits payment on Business Chat) - In the next phase we will add a user interface indication on LiveEngage which will allow a live agent to see payment details as well.

{: .sidebyside}
![](/img/week-of-october-8th-4.png) ![](/img/week-of-october-8th-5.png) ![](/img/week-of-october-8th-6.png)

### RCS Business Messaging Connector - Messaging Capabilities (LE-92815)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

The RCS Business Messaging Connector to LiveEngage allows brands to communicate with consumers via RCS Business Messaging.

Text

* Agent to consumer
* Consumer to agent

Typing indication

* Agent to consumer
* Consumer to agent

Delivered Indication

* Agent to consumer
* Consumer to agent

{: .notice}  
Google RCS Business Messaging is currently in beta mode. If you have brands that are interested in participating in the beta program, please contact Galit Hoffer.

![](/img/week-of-october-8th-7-1.jpg)

### RCS Business Messaging Connector - Conversation Attributes (LE-92816)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

Mapping RCS Business Messaging information and passing it to LiveEngage Engagement Attributes:

**Consumer ID** - LiveEngage will manage a unique consumer RCS Business Messaging ID across the consumer’s conversations, for unified history, agent or bot context and to allow the brands to map the consumer ID info to CRM systems in order to manage user identity. The RCS Business Messaging consumer ID will be mapped to the Consumer ID field in the consumer profile information, as well as to the “Customer Info” - “Customer ID” engagement attribute, and will be visible in real time to the agent, to the agent widget SDK or to the agent SDK, as well as in historic conversations.

**RCS Agent ID** - The identifier for each business as registered in Google, which will be the brand registered RCS Agent ID. The Agent ID can be applied for skill routing logic.  
The brand’s RCS Agent ID will be mapped to the “Customer Info” - "companyBranch" engagement attribute, and will be visible in real time to the agent, to the agent widget SDK or to the agent SDK, as well as in historic conversations.

**Consumer Phone Number** - LiveEngage will collect the consumer’s phone number and pass it as an engagement attribute to the agent workspace and reporting. The consumer’s phone number will be mapped to the "Personal Info" - "Phone number" engagement attribute, and will be visible in real time to the agent, to the agent widget SDK or to the agent SDK, as well as in historic conversations.

### RCS Business Messaging Connector - Skill Routing (LE-92822)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>

Brands can now configure skill routing per the brand’s Google RCS Agent ID (Google RCS Business ID).

{: .important}
This feature requires enablement** - please contact your LivePerson account team

### RCS Business Messaging Connector - Card, Carousels & Quick Replies (LE-92997, LE-92998, LE-92823)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>

LiveEngage Structured Content is the framework for building conversational UI using various features and elements such as: cards, carousels, quick replies and more.

LiveEngage messaging connectors support for the framework is intended to provide a rich conversational experience across all the LiveEngage messaging channels, while the LiveEngage messaging gateway manages the template mapping behind the scenes.

Structured content support for RCS Business Messaging templates will allow brands to use structured content elements from the LiveEngage agent workspace (bot or agent), while sharing them with consumers who are messaging over the RCS channel, using the RCS Business Messaging supported structured content templates.

The RCS Business Messaging templates will support RCS cards, carousels and quick replies using LE’s structured content.

{: .important}
This feature requires enablement** - please contact your LivePerson account team

![](/img/week-of-october-8th-8-2.jpg)

### RCS Business Messaging Connector - Consumer to agent image support (LE-92818)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>

With RCS Business Messaging supported by the Android Messages app, consumers can select images from their device’s image gallery or take a real-time image and share it with agents on LiveEngage.

**Supported image formats:**
JPG, JPEG, PNG, GIF

{: .important}
This feature requires enablement** - please contact your LivePerson account team

![](/img/week-of-october-8th-9-2.jpg)

### RCS Business Messaging Connector - Reporting on RCS Business Messaging source in LiveEngage (LE-92819)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>

**Agent Workspace:**

* Open Connections - Consumer Info widget
* All Connections - Consumer Info widget
* Reporting platform - report builder

### Post Conversation Survey Support - RCS Business Messaging (LE-94611)

<table class="releasenotes">
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
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>

The post conversation survey is now supported for the RCS Business Messaging connector, giving brands the ability to collect feedback from consumers at the end of a conversation. It is delivered in a conversational experience to drive higher completion rates.

**Contents:**

* Special predefined questions - CSAT, FCR & NPS
* Custom brand KPIs
* Free text questions
* Survey logic based on consumer responses
* Full reporting & analytics on survey responses, answer distribution and funnel metrics

**Survey Experience in RCS Business Messaging:**

For use in Google RCS Business Messaging, you can configure the survey through the Bot Studio using LE structured content and it will be seamlessly translated into Google RCS’s templates (quick replies, cards etc.) Brands can configure one survey and apply it to all channels, or they can configure separate surveys per channel (each channel should have a separate skill).

{: .important}
This feature requires enablement** - please contact your LivePerson account team

**Limitations**

* Quick replies will have the 'alt' property (for text fallback) defined in UMS version 3.15, which will only be rolled out in October - this means that in the first version of surveys for SMS, quick replies will not be supported.

### \[Twilio\] Post conversation Survey - Twilio Support (LE-90206)

<table class="releasenotes">
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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

The post conversation survey is now supported for the Twilio SMS connector, giving brands the ability to collect feedback from consumers at the end of a conversation. It is delivered in a conversational experience to drive higher completion rates.

**Contents:**

* Special predefined questions - CSAT, FCR & NPS
* Custom brand KPIs
* Free text questions
* Survey logic based on consumer responses
* Full reporting & analytics on survey responses, answer distribution and funnel metrics

**Survey Experience in Twilio SMS:**

LiveEngage automatically translates rich surveys into textual surveys for the Twilio SMS channel. Brands can configure one survey and apply it for all channels or they can configure separate surveys per channel (each channel should have a separate skill) - current channels supported are ABC, Facebook Messenger and now Twilio SMS.

When configuring the survey in the Bot Studio, the brand must configure the ‘fallback text’ on every rich element, this way they can customize the experience for textual channels.

{: .important}
This feature requires enablement** - please contact your LivePerson account team

**Limitations**

Quick replies will have the 'alt' property (for text fallback) defined in UMS version 3.15, which will only be rolled out in October - this means that in the first version of surveys for SMS, quick replies will not be supported.

![](/img/week-of-october-8th-10-1.png)

### \[Twilio\] Connectors Image Share Support (Consumer -> Agent): Twilio SMS (LE-80986)

<table class="releasenotes">
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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

The Twilio SMS connector now supports image sharing from consumer to agent. Consumers will be able to use the default SMS app on their device (whether it’s an iOS or Android device), choose an image from the phone gallery or take a new image and share it with the brand. The agent on the LiveEngage web console will receive the image and will be able view.

{: .important}
This feature requires enablement** - please contact your LivePerson account team.

**Limitations**

Twilio only supports sharing images (MMS) in the US and Canada. Therefore sharing images outside these regions will not work due to Twilio limitations.

Agent side:

![](/img/week-of-october-8th-11.png)

Consumer side:

![](/img/week-of-october-8th-2018-13.png)

## Enhancements

### \[Twilio\] Migration of Twilio Connector from messaging gateway to LE connector platform

<table class="releasenotes">
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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

The current version of the Twilio Connector has been migrated to the new LiveEngage connectors platform, which supports error handling, a message-retry mechanism and was built to enhance the Twilio connector’s performance.

## Bug fixes

### \[Twilio\] Failure to send a message to Twilio - isn't reported back to UMS and LE UI (LE-90596, LE-88928, LE-75265)

<table class="releasenotes">
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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

If an agent’s message fails to send to Twilio, there's no feedback sent to UMS and LE UI. This causes a error in agent experience, while there’s no error notification sent to the agent to notify him that the message wasn’t delivered.

The current version of theTwilio connector has now been migrated to the new LE connectors platform, which supports error handling and message-retry mechanisms for the connectors channels (in this case Twilio). The new version of the Twilio connector will retry sending the message to Twilio upon receiving a message failure, and will also report an error back to UMS and LE UI (“No Acknowledge” error), notifying the agent that the message was not sent.

### \[Twilio\] Twilio Connector message retry when UMS Socket is Closed (LE-87239)

<table class="releasenotes">
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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

When a consumer sends an SMS to a brand using the Twilio connector, messages are not being received by UMS due to a momentary failure to open a websocket between the messaging gateway and UMS. This causes the message to be lost.

The current version of the Twilio connector has now been migrated to the new LiveEngage connectors platform, which supports retry mechanism between the messaging gateway and UMS. The new version of the Twilio connector will retry sending the message to UMS, in the case of a message failure.