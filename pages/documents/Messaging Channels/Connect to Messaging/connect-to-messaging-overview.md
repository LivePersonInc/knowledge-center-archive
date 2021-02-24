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

LivePerson Connect to Messaging (C2M) is an IVR deflection solution that lets brands move voice calls to messaging through the Conversational Cloud platform. Once consumers opt to deflect to a messaging conversation, they will receive an outbound message over SMS, WhatsApp or App Messaging, which will allow them to respond and start messaging with the brand. The consumer responses are routed into the Conversational Cloud’s Agent Workspace, where conversations can be handled by human agents, automation, or a mix of both. This service enables a richer and more personalized consumer experience, while utilizing all Conversational Cloud capabilities. SMS, WhatsApp and App Messaging are the supported messaging channels, with more  messaging options coming in the near future.

### Consumer benefits of using C2M

* **Eliminate call waiting:** People on average end up spending 10-45 minutes tied up on calls during business hours. Messaging is much quicker and allows consumers to talk when it’s convenient for them. 
* **Continuous conversation history:** With voice calls, the consumer needs to remember previous calls, take down all the notes and repeat to call back again. Messaging allows them to view previous conversations. 
* **Easy to reach different services:**  Consumers can call one customer service number to route voice calls to various agent skills for a better consumer experience.

### Brand benefits of using C2M

* **Reach consumers through popular channels:** Brands can offer multiple deflection messaging channels to their consumers, allowing them to interact through WhatsApp, SMS, and App Messaging.
* **Handle conversations in one place:** Brands have a single view to the contact center operations with unified messaging operations and analytics for all consumer channels.
* **Build an ongoing relationship with consumers:** Brands can personalize the first outbound message sent to the consumers, this will improve better response rate and create conversations. 
* **Improve consumer experience:** This service routes the consumer’s message to the right agent skill, removing the need for multiple transfers across agents. This will drive better care and reduce operational costs.  

### Prerequesites

* Brands need a LivePerson Conversational Cloud account to activate Connect to Messaging
* Brands must enable one or more of the following messaging channels on their account (SMS Twilio, WhatsApp, App Messaging) to shift voice calls to messaging	

## Capabilites 

* 100% easy and quick self-service onboarding and configuration. Account managers or CSM’s can enable C2M 2.0 service on behalf of their brands directly from the Conversational Cloud platform
* Brand users can configure skill-based routing through self-service web tools with campaigns and engagements
* Brand users can create, manage API Configurations, WhatsApp message templates through the Connect to Messaging (C2M) web tool
* Brand users have role-based permission who can create, edit or view API configurations and account settings from the C2M web tool
* Brand users can prioritize messaging channels like SMS or WhatsApp at the individual API Handoff configuration level
* Brands at the account settings level can enable or disable landline/mobile number checks
* Brand users can now view additional details of visitor’s (customer, personal) information with engagement attributes in the Agent Workspace
* Brand agents can now view the first outbound message in the conversation transcript window instead of separate agent widget
* New Reporting 2.0 API endpoints provide full funnel metrics such as deflections sent, delivered by messaging channel, read and responded back by the consumer. It provides complete pre and post conversation events and raw transactional data for a given period.

## Limitations

* In the event that the consumer has an open conversation with the brand, the outbound message will not be sent to the consumer.
* Rate limit: Currently there is a rate limit of 30 req/ sec for all the channels per account. 
* In the event that the consumer never logged into the brand’s app (not even one time) the consumer will not be able to receive the proactive push notifications.
* This version supports sending only text messages (including text and emojis). Rich content (images, docs etc.) and Structured Content (quick replies, cards etc.) will be supported in future releases.
* This version supports only authenticated App Messaging. 
* The App Messaging channel cannot be configured together with SMS or WhatsApp channels on the same proactive or IVR handoff configuration. This means that the channel prioritization feature will not be available between App Messaging to SMS or WhatsApp (however there will be no problem to onboard and enable all channels together on the account while receiving inbound messages from all channels).   
* The first outbound App message will be displayed to the agent in the new CX Agent Widget on the Agent Workspace (this will not affect the consumer view of the outbound message in the messaging interface). It will not show up in the agent conversation transcript window.
* WhatsApp Rich Message Templates will not be supported for this release.
* iOS limitation - Due to Operating System limitations, if the user does not tap on the notification in the notification center they  will not be able to see that message in the conversation interface.  
