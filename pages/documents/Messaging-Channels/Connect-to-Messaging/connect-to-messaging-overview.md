---
pagename: Connect to Messaging overview 
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-connect-to-messaging-connect-to-messaging-overview.html
isTutorial: false
isNew: false

---

## Introducing Connect to Messaging

LivePerson Connect to Messaging (C2M) is an IVR deflection solution that lets brands move voice calls to messages through the Conversational Cloud platform. Once consumers opt to deflect to a messaging conversation, they will receive an outbound message over SMS, WhatsApp, Apple Business Chat (ABC), or App Messaging, which will allow them to respond and start messaging with the brand. The consumer responses are routed into the Conversational Cloud’s Agent Workspace, where conversations can be handled by human agents, automation, or a mix of both. This service enables a richer and more personalized consumer experience while utilizing all Conversational Cloud capabilities. SMS, WhatsApp, Apple Business Chat (ABC) and App Messaging are the supported messaging channels, with more messaging options coming in the near future.

### Consumer benefits of using C2M

* **Eliminate call waiting:** People on average end up spending 10-45 minutes tied up on calls during business hours. Messaging is much quicker and allows consumers to talk when it’s convenient for them. 
* **Easy to reach different services:**  Consumers can call one customer service number to route voice calls to various agent skills for a better consumer experience.

### Brand benefits of using C2M

* **Reach consumers through popular channels:** Brands can offer multiple deflection messaging channels to their consumers, allowing them to interact through WhatsApp, SMS, ABC, and App Messaging.
* **Handle conversations in one place:** Brands have a single view to the contact center operations with unified messaging operations and analytics for all consumer channels.
* **Build an ongoing relationship with consumers:** Brands can personalize the first outbound message sent to the consumers, this will improve the response rate and create conversations. 
* **Improve consumer experience:** This service routes the consumer’s message to the right agent skill, removing the need for multiple transfers across agents. This will drive better consumer care and reduce operational costs.

### Prerequesites

* Brands need access to a LivePerson Conversational Cloud account in order to activate Connect to Messaging.
* Brands must enable one or more of the following messaging channels on their account so they can shift voice calls to messaging: SMS Twilio, WhatsApp, ABC, App Messaging.

## Capabilites 

* Quick and easy self-service onboarding and configuration. Account managers or CSMs can enable the C2M 2.0 service on behalf of their brands directly from the Conversational Cloud platform.
* Brand users can configure skill-based routing through self-service web tools with campaigns and engagements.
* Brand users can create and manage API Configurations, as well as WhatsApp message templates through the Connect to Messaging (C2M) web tool.
* Brand users have role-based permissions which enable them to create, edit or view API configurations and account settings from the C2M web tool.
* Brand users can prioritize messaging channels, such as SMS or WhatsApp, at the individual API Handoff configuration level.
* Brands at the account settings level can enable or disable landline/mobile number checks.
* Brand users can view additional details of visitors’ (customer, personal) information with engagement attributes in the Agent Workspace.
* [New Reporting 2.0 API](https://developers.liveperson.com/outbound-reporting-api-overview.html) endpoints provide full funnel metrics; such as: deflections sent, delivered by messaging channel, read, and responded back by the consumer. It provides complete pre and post conversation events and raw transactional data for a given period.

## Consumer journeys

### IVR deflection to SMS channel
When a voice call is deflected to an SMS channel, the consumer receives a push notification on their phone. They can read the message by tapping on it and consumers can then reply to this message to continue their conversations with the brand.

![](img/C2M_Overview-1.png)

### IVR deflection to In-App channel
When a voice call is deflected to an In-App channel, the consumer receives a push notification. When the consumer taps on the notification, the message is opened in the messaging window of the In-App channel, and consumers can continue their conversation with the brand. Note: If the consumer has turned off their app push notification then they will not receive the deflected message. For further details on In-App setup and limitations please refer [here](https://knowledge.liveperson.com/messaging-channels-connect-to-messaging-connect-to-app-messaging.html). 


![](img/C2M_Overview-2.png)

### IVR deflection to WhatsApp channel
When a voice call is deflected to a WhatsApp channel, the consumer receives a push notification on their phone. By tapping on the notification, they can open and read the message, and then reply in order to continue their conversations with the brand on this channel. 

![](img/C2M_Overview-3.png)

### IVR deflection to Apple Business Chat
When a voice call is deflected to the ABC channel, the consumer receives an SMS message with a link to start an ABC chat session. Consumers can tap on the ABC link to start a conversation in the Apple Business Chat window, or they can reply directly in the SMS channel. 
Note: If the receiving consumer is on an Android phone and taps on the ABC link, then they will be redirected back to SMS to continue the conversation with the brand. 

![](img/C2M_Overview-4.png)

### Limitations
* In the event that the consumer has an open conversation with the brand, the outbound message will not be sent to the consumer. 
* Rate limit: Currently there is a rate limit of 30 req/ sec for all the channels per account. 
* The first outbound App message will be displayed to the agent in the new CX Agent Widget on the Agent Workspace (this will not affect the consumer view of the outbound message in the messaging interface). It will not show up in the agent conversation transcript window.
* WhatsApp Rich Message Templates are not supported.
* For In-App messaging limitations please refer here. 