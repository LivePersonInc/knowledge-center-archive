---
pagename: February 2019
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Conversation Builder (bot builder), voice and video calls, Messaging Interaction
  API with intents & more
level3: ''
permalink: whats-new-february-2019.html
isTutorial: true
isNew: false
date: 2019-02-19 14:36:04 +0200
published: false

---
[https://vimeo.com/317231543/2de5ca695a](https://vimeo.com/317231543/2de5ca695a "https://vimeo.com/317231543/2de5ca695a")

Here is a round-up of the latest features, enhancements and enablements that are coming in February 2019 - all designed to help you make even more meaningful connections.

## Conversation Builder

The [Conversation Builder](bots-automation-conversation-builder-conversation-builder-overview.html) is a world-class automation platform and bot builder that enables you to seamlessly create new automations, or connect an existing automation. It’s simple UI and unique capabilities allows you to easily build and design conversational bots. With automatic matches from response to intents and a rich library of pre-built conversation templates, even your non technical staff can design bots. More information on the conversation builder will be coming soon!

##   
WhatsApp Business Connector enhancements

WhatsApp have introduced new enhancements to their WhatsApp Business APIs that will allow you to utilize new and enhanced WhatsApp conversational capabilities using LiveEngage. You will now be able to see the consumer profile name (as listed on the user’s WhatsApp settings), receive message status indicators (sent, delivered, read), as well as receive consumer messages that includes contacts and locations.

## Voice and video calls for web messaging

Voice and video calls are already available for mobile app messaging using the CoApp SDK. In February we are enabling this feature for web messaging conversations too in order to enhance the conversational experience and agents will be able to solve intricate tech support issues that would be hard to describe without visuals.

## Post Conversation Survey enhancements

### Search survey data in ‘All Connections’

Agent and managers can filter within ‘All Connections’ historical conversations based on defined survey criteria from the [post conversation survey](bots-automation-post-conversation-survey.html). This is ideal for training agents by reading transcripts that have negative CSAT scores to highlight where improvement is needed.

### Messaging interactions API enhancements

Pull the post conversation survey data in an easy way to get visibility on the open questions and answers as well as FCR, CSAT and custom question defined in their surveys. The post conversation survey data are new fields added to the messaging interactions API.

### Bot studio enhancements

When building a survey, the bot studio has been enhanced so you can move each brick within its sequence using directional arrows. If, for example you want to insert a question in between two questions, all you need to do is create new question at the end of the sequence and use arrows to slot the question in the correct place.

## Overdue conversations KPI (& API)

Overdue conversations will provided in the Messaging Operations API available as three metrics: Overdue while in queue, Overdue while assigned, and Total overdue.

Overdue conversations KPI will be added to the [real time dashboard](data-reporting-messaging-messaging-dashboards-real-time-messaging-dashboard-overview.html) using the API, allowing you to directly use the API to show data wherever they want.

## Audit trail on working hours

Track the changes made by users to the working hours or special occasions items, as well as its assignment on the account level (in the [Shift Scheduler](contact-center-management-messaging-operations-shift-scheduler-configuration-guide.html)) or skill level, to monitor changes and quickly rectify any mistakes.

## Messaging Interaction API - with intents

[Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-overview.html) retrieves a list of conversations with all their metadata, including intents, and related messages based on a predefined search criteria. Each intent will have a name, a confidence score and a list of classifiers used to detect this intent. Search criteria is going to be extended to include filtering by intent names, confidence score and intent model versions.

## **Transport Layer Security (TLS) announcement**

Please note this important announcement about Transport Layer Security (TLS). These are the protocols that websites use to secure all communications between their servers and web browsers.

If you are still using TLS 1.0 or 1.1 after Q1 you will not be able to use LivePerson services. The reason for this change is because these versions are two decades old and not sufficiently secure. Most of you will have already upgraded, but make sure to check with your development team that you are using TLS version 1.2 or higher. For all the features listed above please check the weekly release notes for exact rollout dates as delivery dates may vary and are subject to change.