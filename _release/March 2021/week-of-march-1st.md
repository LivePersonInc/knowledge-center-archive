---
pagename: Week of March 1st
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-march-week-of-march-1st.html
isTutorial: false
isNew: false
date: '2021-02-24'

---

These release notes include new features arriving March 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Connect to Messaging 2.0
### Type: New Functionality (C2M 2.0)

LivePerson’s Connect To Messaging (C2M) is an IVR deflection solution that lets brands offer their consumers the option to move from voice calls to messaging. Once consumers opt to deflect to a messaging conversation, they will receive an outbound message via either SMS, WhatsApp or the brand’s mobile app, which they can respond to and start having a two-way conversation with the brand. The consumer’s responses are routed into the Agent Workspace, where conversations can be handled by human agents, automation, or a tango of both. SMS, WhatsApp and App Messaging are supported messaging channels for Connect to Messaging at this time. Connect To Messaging IVR solution moves voice calls to messaging platforms to create two way conversations.

* **Brand onboarding:** 100% easy and quick self-service onboarding and configuration. Account managers or CSM’s can enable C2M 2.0 service on behalf of their brands directly from the Conversational Cloud platform.
* **New C2M 2.0 API:** Highly reliable skill based routing by leveraging platform campaigns, and engagement capability and eliminating bot routing features in the previous version. Add new rate limits for API rate throttling to avoid any DDos attacks and limit the time interval to download reporting data.  The new rate limit will be 30 Req/ sec for all the channels combined. The brand agents can now view the first outbound message in the conversation transcript window instead of separate agent widget.   
* **Role-based access to the C2M webtool:** Only campaign managers or administrator brand users can create, manage API Configurations, WhatsApp message templates through the Connect To Messaging (C2M) web tool.
* **New channel - IVR deflection to App Messaging:** C2M 2.0 API has released the new message channel to support brands mobile app (In-App) which runs for IOS and Android platforms. 
  * **In-App First Message:** Build the new CX- widget in the agent workspace to display top five In-App first outbound messages in the last 30 days.
* **Reporting 2.0:** Release a new reporting 2.0 API endpoint to provide full funnel analytics and transactions data for SMS and WhatsApp channels.
* **WhatsApp Message Template Management Experience:** Role-based permission access to create, update and delete WhatsApp message templates in the Proactive C2M webtool will benefit brand admins and campaign managers improve back office operations management. Delete only applies to templates which are not associated with any API configuration.

{: .notice}
**Note:** This feature requires backend enablement. Please contact your LivePerson representative for more information. 

C2M Quick Launch: 
![](img/week-of-march-1st-1.png)

## Proactive Messaging 2.0
### Type: New Functionality (C2M 2.0)

Proactive Messaging is a tool that allows brands to send an outbound message to a consumer and funnel the responses from consumers into the Conversational Cloud, creating a two way conversation.

Proactive Messaging version 2.0 supports the following: 
* **App Messaging channel support:** Brands will now be able to use Proactive Messaging for two way conversations through their own app. 
* **Support for outbound campaigns with WhatsApp Rich Message Templates:** Ability to send rich WhatsApp messages outbound through proactive campaigns with videos, images, file attachments and quick reply support.
* **WhatsApp Message Templates Management:** Role based permission access to delete inactive WhatsApp message templates in the Proactive self-service tool will benefit brand admins and campaign managers and will improve back office operation management.
* **Build Proactive API Handoffs - Self Service tool:** Brands will now be able to create and manage API configurations for SMS, WhatsApp and App Messaging channels, through the Proactive self-service tool. 

{: .notice}
**Note:** This feature is currently available to early adopters. Please contact your LivePerson representative for more information. 

![](img/week-of-march-1st-1.png)

## Create new App Messaging channel API configurations
### Type: New Functionality (C2M 2.0)

Follow these steps to create API configurations for the App Messaging channel: 

Step 1: Click the new Handoff
![](img/week-of-march-1st-2.png)

Step 2: Select the channel
![](img/week-of-march-1st-3.png)

Step 3: Select the apps
![](img/week-of-march-1st-4.png)

Step 4: Create the In-App API Handoff from the Proactive webtool.
![](img/week-of-march-1st-5.png)

## Create new WhatsApp Rich Message Templates
### Type: New Functionality (C2M 2.0)

The ability to send rich WhatsApp message outbound proactive campaigns with videos, images, file attachments and quick replies is now supported. This is estimated to increase the usage volume and response rates by 30% in the year 2021.

![](img/week-of-march-1st-10.png)

![](img/week-of-march-1st-11.png)

## Support for Instagram and Twitter’s Direct Messages
### Type: New Functionality (Release 2021_3.0 Conversation Builder)

**Channels:** Instagram & Twitter
In this release, you can expand your automation footprint on social networks by adding conversational AI on Instagram and Twitter!
Conversation Builder introduces new support for bots handling conversations with consumers on Instagram and Twitter’s Direct Messages.
From a bot development perspective, you’ll find that this works a lot like for any other target channel: Simply build the bot, and configure and deploy the agent connector. The integration is seamless.
As always, brands with a global social presence can support broad language requirements by taking advantage of a third-party provider for NLU.
This is our MVP version of our support for Twitter; expect more enhancements to come!

## A new Universal Interaction
### Type: Enhancement (Release 2021_3.0 Conversation Builder)

**Channel:** This enhancement is available for all channels supported by the Conversational Cloud platform.

Is there a cutting-edge interaction in a channel that you want to implement in your bot? Do you want to fast track its usage now, before support for it is added to the Statement and Question interactions in Conversation Builder? Now you can. Conversation Builder introduces a new “universal” interaction to meet this need.

This powerful, new interaction is designed for advanced bot developers, and it opens up many more opportunities to achieve the exact layout and styling that you require. For example, you might want a vertical card layout or perhaps a button question that uses just buttons (images) without button labels (text).

To use this code interaction, add it to your bot, and enter the appropriate JSON code within it. You are limited only by what’s supported by the Conversational Cloud, as the JSON must adhere to the [Conversational Cloud message format.](https://developers.liveperson.com/getting-started-with-rich-messaging-introduction.html)

To fully test a Universal interaction, use Conversation Builder’s Conversation Tester tool or a Web client.

Note: The Universal interaction isn’t intended to replace the Statement and Question interactions in Conversation Builder. For fast and easy bot development, LivePerson recommends that you always use them whenever they meet your requirements.

## A new “slideout” window option for buttons
### Type: Enhancement (Release 2021_3.0 Conversation Builder)

**Channel**: This enhancement is available for all channels supported by the Conversational Cloud platform.

Previously, when you were configuring a button in a Structured or Button question, and the button was a link to a Web URL, you could specify whether to open the URL in a new window or the current window. In this release, we add support for a third option: Slideout.

![](img/week-of-march-1st-11.png)

Use the slideout option when you want to provide a window that “slides out” from the conversation window. This produces an attractive and tightly integrated experience for the consumer.

When handling payments in cCommerce solutions in particular, a slideout window is often considered a superior consumer experience over opening a new window. With a slideout window, the consumer can more easily return to the conversation after the transaction is completed. This is especially important to address cases where the consumer wants to ask additional questions after the invoice has been generated.

## Intent Builder - Import and export test sets from Model Tester
### Type: Enhancement (Release 2021_3.0 Conversation Builder)
Channel

**Channel**: This enhancement is available for all channels supported by the Conversational Cloud platform.

In the Model Tester in Intent Builder, you can now import and export the test set used for the domain.

![](img/week-of-march-1st-12.png)

If you’ve defined your “gold set” of test phrases to use in an external CSV file, this enhancement allows you to easily upload it.

## Intent Builder -  Enhancement to the LivePerson NLU v2 engine
### Type: Enhancement (Release 2021_3.0 Conversation Builder)

**Channel**: This enhancement is available for all channels supported by the Conversational Cloud platform.

During model training and when making predictions, NLU v2 makes use of a set of pre-trained word embeddings. In this release, NLU v2 is expanded to use all available word embeddings. This underlying change yields two, major benefits.

A bias toward words outside of this vocabulary is eliminated since the vocabulary used is significantly larger. Once you retrain your domain, user utterances with out-of-vocabulary words shouldn’t yield unexpected good matches.
Punctuation no longer degrades the accuracy of predictions. For example, an utterance that previously returned a score of 15.22% due to a period at the end now returns a 94.54%.

Action required: Please retrain your LivePerson NLU v2 domains so that they benefit from this change. No additional tuning is required; simply retrain the domain as is.

## Steps toward deprecation of the LivePerson NLU v1 engine
### Type: Enhancement (Release 2021_3.0 Conversation Builder, Intent Builder, Knowledge Base)

**Channel**: This enhancement is available for all channels supported by the Conversational Cloud platform.

In this release, LivePerson is taking a few steps to progress toward deprecation of the LivePerson NLU v1 engine, and we seek to encourage brands to leverage our NLU v2 engine as an alternative solution when it meets your language requirements.

LivePerson’s NLU v2 engine is a better performing and more scalable solution. It handles a greater volume of requests, and it provides better accuracy and faster response times than the v1 engine.

To progress toward deprecation, in this release, we remove from Intent Builder the ability to create a domain that uses the v1 engine.

Additionally, within the Knowledge Base application, we remove the ability to create:
* A knowledge base that uses Knowledge Base intents (since knowledge bases of this type use the v1 engine behind the scenes)
* A knowledge base that uses a domain using the v1 engine.

![](img/week-of-march-1st-14.png)

It is important to note: If you have an existing domain or knowledge base that uses the v1 engine, it remains unaffected by this change. You can continue to update and use it. However, all brands are encouraged to begin leveraging our v2 engine as soon as possible.

*If your language requirement is English, our v2 engine is the better option. Stay tuned for additional language support later this year.
* If you require a v1 Spanish domain, please contact your LivePerson representative.
* If you require support now for other languages, use a domain with a third-party NLU engine.

Finally, to align with the above efforts, in this release we also rename our NLU engines:
* LivePerson v1 is being renamed to LivePerson (Legacy)
* LivePerson v2 is being renamed LivePerson



