---
pagename: June 2019
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Top features include Queue Prioritization for authenticated consumer attributes
  and more
level3: ''
permalink: whats-new-june-2019.html
isTutorial: false
isNew: false

---
Here is a round-up of the latest features, enhancements and enablements that are coming in the following weeks- all designed to help you make even more meaningful connections. Please see release notes section for exact release dates of all the features below.

![](/img/02_EmailThumbnail_Mai19-1.jpg)

## Engagement window enhancements

New elements will be added to the engagement window to give you more flexibility and control over your user experience. This month you will be able to customize your web messaging window further with the ability to set the window size, use customized fonts to align with your website and choose different styles for the minimized window icon. There will also be additional messaging bubbles styles, modern read indication symbols and ability to close the conversation window automatically once the conversation ends.

## Queue prioritization based on authenticated consumer attributes

You will be able to tailor your queue prioritization business rules based on authenticated consumer attributes. This way, you can define that customers with high account balances or those marked as VIP’s receive a velocity factor that helps them advance faster in the queue - reducing the response time for these consumers. For more information on queue prioritization, see the [queue prioritization overview](https://knowledge.liveperson.com/contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html).

## Offsite engagements for web messaging

To expand the availability of web messaging to your customers, you will be able to embed a link to launch web messaging from any location and through any media including, email, digital advertising or social media sites. All you need to do is create a URL or QR code, plug it anywhere and consumers can click to start messaging.

## Third party NLU with the Conversation Builder

The Conversation Builder has been enhanced allowing you to build conversations using third party NLU engines such as Watson or Dialog Flow. This means that you will be able to utilize the Conversation Builder and all its design tools to create bots in different languages.

![](/img/CB third party NLU WNJune.png)

## Secure forms support in the Conversation Builder

You can create an interaction through Bot Automation that enables visitors to authenticate - moving from guest user to authenticated user. The Secure Form allows users to authenticate in the same messaging window by asking the user a token / pin that is later sent to external systems for authentication. This requires messages to be sent with a specific payload.

## Fullscreen coBrowse

Agents assisting consumers using coBrowse, will now have better visibility through the ‘full screen mode’. This mode enables agents to expand the view of their consumers screen. In this mode, agents will continue to receive notifications for ongoing conversations.

## New Business Dashboard for Messaging in the Report Builder

This new dashboard will appear as a new predefined dashboard in Report Builder called “Business Dashboard for Messaging”

The Business Dashboard for messaging allows brands to analyze the consumer journey in messaging. Brands will have the ability to:

* View funnel metrics, conversions, and revenue data
* Analyze campaign data at the level of: brand, line of business, campaign, entry point and engagement

There are two separate dashboards, one for messaging (“Business Dashboard for Messaging” ) and one for chat (“Business Dashboard for Live Chat”)

## Skill & agent segments metrics

In situations where multiple skills or agents are assigned to each conversation, measuring the performance (e.g. time to first response) requires segmenting the conversation. LivePerson has introduced a new segmentation model to measure each individual skill performance and present accurate KPIs per skill and per agent.

The new metrics and new skill/agent segment level visualizations will be available in Report Builder’s Performance Dashboard for messaging and the Messaging Operations API.

## Time zone support for Survey dashboard in live chat (chat only)

Report Builder users can change the time zone of the Survey predefined dashboard to analyze performance in their local time.

## Data Transporter for custom formats

Data Transporter will provide you with the ability to choose a custom filename that can be made up of static text or dynamic elements. Additionally, Data Transporter will provide alternative options to remove the limitations of two strings that are concatenated for certain reports (i.e. instead of "::", a brand could choose "||", for example)

![](/img/WNJune Data transporter.png)

## Scheduled Function Execution in FaaS

Functions will no longer be tied to the occurrence of a specific account event, such as conversation state changes or external invocations, but will be time-bound and set to run in advance. Until now, functions could only be triggered by the occurrence of defined LiveEngage event.

## Embedded secure form for Apple Business Chat

Brands who use LivePerson’s ABC SDK will now have the secure forms embedded into the Messages thread instead of being opened in a browser.

The secure form bubble can be customized per ABC businessID including: title, subtitle, secondary subtitle, tertiary subtitle, image, image subtitle and image title.

## File sharing (consumer to agent & agent to consumer) for Apple Business Chat & WhatsApp

Empowers consumers and agents to share files with each other to complete business flows end-to-end within Apple Business Chat (ABC) & WhatsApp conversations, reducing time to resolution. By sharing files such as PDFs, you can serve more use cases such as sending and receiving forms, signing contracts and more - directly within WhatsApp or ABC conversations.

![](https://lh6.googleusercontent.com/phvdoVT7QeoBm4ZB5dBe4o01hq0X-MReML7BfDkCF3feXtFqywy2Lsu6bIHL1bQO1c3AoJWzfp7a0Al0-lYgeBUnD4UETm2Wvvq7Mo4QRg6PSK39uUmzfHJaP7zSiqNXb2COhWqJ =169x331)

## Response as part of agent widget SDK and Security enhancement (Apple Pay)

Currently to use Apple Pay you must have a bot added to the LiveEngage conversation via the Agent SDK. To reduce implementation effort, the ABC Payment response will be added to the Agent Widget SDK. In terms of security, the new flow will provide a way for brands to sign the payload, which will be verified by the connector before sending out to Apple.

## Support for Facebook Handover Protocol

Facebook Handover Protocol enables two or more apps to participate in a conversation by passing control of the conversation between them.

This feature makes it possible to simultaneously use a 3rd party bot, outside of LiveEngage, for handling automated responses, and use LiveEngage for customer service with human agents.

## Mutual TLS Proxy self service using API

Mutual TLS Proxy self service allows admins to upload and manage MTLS certificates for multiple services through self-service, using an API. Mutual TLS self service helps decrease the response time, and reduce the LivePerson support time spent on configuration.

## Sunset of BI Reporting

In August, LivePerson will sunset the BI reporting tool, migrating all accounts to our new reporting platform, Report Builder.

Report Builder is a new and improved version of LiveEngage BI dashboards. With superior performance, an additional layer of messaging KPIs, and the ability to tailor dashboards to specific business needs, the Report Builder includes more powerful capabilities than those available in LiveEngage BI. For an overview of Report Builder, please [click here.](https://knowledge.liveperson.com/data-reporting-report-builder-report-builder-overview.html) If you have questions, please send an email to [bi-eol-questions-lp@liveperson.com](mailto:bi-eol-questions-lp@liveperson.com)![](https://ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif)