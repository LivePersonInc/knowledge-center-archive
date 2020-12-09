---
pagename: November what's new
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Highlights include Rollback Conversations, Conversation Builder New tutorials and more
level3: ''
permalink: whats-new-november-whats-new.html
isTutorial: false
isNew: false
---

As we approach the high season, our focus and priority is stability and availability of service for our customers.

### Updates this quarter include:

## Highlights of the Unified Window
* Updates to support new Chrome User Agent method
* WCAG updates to window widget, Video/CoBrowse, rich content, as well as focus and navigation improvements of the main window area and action menu
* Brands can set Quick Replies to “wrap” the window
* Customizable focus indicator border color - can be customized through Window customization API or the CSS customization taglet
* Updated Japanese translation

LivePerson has additional improvements coming soon including Message history improvements. A consumer's messaging history can be very long and from a long time period, up to 13 months. While we want this history to be available, long histories create problems for screen readers (WCAG) and performance of a new conversation. As such, users will soon be able to collapse the messaging history and allow the consumer to decide if they want to see past interactions. 
This is a feature enhancement sub-item of WCAG 2.1 Certification efforts.

## Conversation Builder  *New tutorials available*
Check out the new tutorial videos to help you get started with our Conversation Builder. These videos cover the basic concepts and usage of the Conversation Builder, allowing you to get started with building bots in minutes. Click [here](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-getting-started-tutorials.html)

#### Topics include: 

* Dialogs and patterns - Learn how to get started with some very basic bots, and the concept of dialogs (the different conversation flows a bot can have) and patterns, which allow the bot to match user input and respond intelligently.

* Intents and entities - Take a deeper dive into user input matching and look at the more advanced concepts of intents and entities.

* Advanced interactions - Learn about complex bot interactions, allowing you to present the user with multiple choice questions, messages with rich content, and more.

* Integrations - Use integrations to programmatically access catalogs, databases, and other web services to super power your bot responses.

* Deploy a bot -  Learn about deploying our Getting Started bot to a live demonstration page. 

* Escalate to agent - Demonstrates how to efficiently transfer conversations to a human agent as needed.

* Disambiguation - Learn how to use disambiguation to clarify user intents and ensure that their needs are being addressed appropriately. 

* Knowledge Base -  Learn how to use bots to leverage intents and entities to recommend the most accurate articles to an inquiring consumer.

* SmallTalk Meta Intent - Learn about Meta Intents to funnel a variety of intents into a single dialog for processing.

* Auto Escalation -  Conversation Builder provides a special dialog type that takes care of auto escalations without the need to write any code.

* Complex conditions - Learn about the Conversation Builder condition editor, which provides you with a code-free way of looking at multiple factors in determining what information to display to users.

* Bot groups and collaboration - Learn about the new design pattern which deviates from the standard single bot approach and breaks up your automation’s functionality among several bots in a group.

Click [here](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-getting-started-tutorials.html)

## Rollback Conversations to brand
Conversation Rollover feature allows a brand/merchant account to roll over conversations to a designated handler account, enabling the handler account(s) to answer conversations on the brand’s behalf. The consumer experience is seamless, to the point the consumer will not know they are not speaking directly with the brand but with an answering service agent. 

Conversation Rollback allows a conversation to be transferred back from the handler agent or bot, to the queue of the brand/merchant account, based on the intent of the consumer. 

The handler account may see an opportunity for rollback to the brand to deepen and personalize the consumer experience based on the consumer’s intent. For example, the handler account has led the customer to make a purchase, but only an agent on the brand account can handle a checkout. Conversation Rollback enables the handler agent to easily send the conversation back to the brand account for a seamless conversational experience.

#### Features currently available:
* Rollover configuration by skill - Owner accounts can configure their Rollover settings differently for each skill on their account
* Double Account Rollover - multiple layers of Conversation Handlers
* Rollover Account Dashboard (Analytics Builder)
* All Connections Support for Handler Accounts
* Rollback  - Allows for a brand handler account to transfer a conversation back to the Conversation Owner, based on the needs and intent of the consumer

#### Features coming soon:
* Rollback for bots
* Manager Workspace support for Rollover
* Rollover to multiple accounts
* Video Messaging and Co-Browse support
* Intent Manager integration
* Rolldown - proactively roll down a conversation to a Conversation Handler account

To enable, please contact your LivePerson account team.

![](img/Rollover-whats-new-1.png)

## Proactive Messaging support for Mobile SDK
The proactive messaging tools allow brands to share outbound messages with their consumer over the most relevant channels for their desired use case and consumer preferences. LivePerson will enrich the available Proactive Messaging channels and add Mobile SDK as an additional channel available on Proactive.

## Intent Manager
New features will be added to Intent Discovery & Optimization to help brands discover new topics and quickly find diverse training phrases for building new intents. Brands will have the ability to create, save, and manage advanced filters, as well as customize and configure metric widgets to better suit different personas and use cases.
Expanded starter packs will be introduced for intents including initial tests for FinServ + cross vertical intents followed by adding cross vertical intents to Telco, Airlines and Insurance starter packs.

### Announcements

## Realtime Dashboard for Messaging - End of life pushed to March 2021

Please note, the date of the Realtime Dashboard deprecation has been moved from December 2020 to the end of Q1 2021 to provide additional time to allow business monitoring operations to migrate to the new Manager Workspace. 

The Realtime Dashboard was developed before the new Manager Workspace was introduced. The new Manager Workspace is embedded into the core platform, allowing users to manage their operation seamlessly and in real time, eliminating the need to support the Realtime Dashboard. Note: Chat users will not be affected by this at this time. For more information on the new Manager Workspace, click [here](https://knowledge.liveperson.com/agent-manager-workspace-manager-tools-for-messaging-new-manager-workspace-for-messaging-introducing-the-new-manager-tools.html).

![](img/Man-workspace-whats-new.png)

## NodeAgent SDK
LivePerson empowers external bot vendors and bot builders to build fully customized bots with LivePerson, leveraging the Messaging Agent SDK for node.js.  
You’ll be pleased to know that we have released a new version of NodeAgent SDK which will improve resilience and stability of your third-party bots. Please upgrade to the new NodeAgent SDK as soon as possible to see these improvements. For the latest SDK version, click [here.](https://github.com/LivePersonInc/node-agent-sdk/releases)
With the upgrade to the latest version, we recommend auditing your integration to ensure compliance with the best practices around managing connections with LivePerson’s Conversational Cloud. Click [here](https://github.com/LivePersonInc/node-agent-sdk/wiki/NodeAgentSDK-Connection-Best-Practices) for the best practices.

## Internet Explorer 11 -  End of Life
Microsoft 365 apps and services will no longer support Internet Explorer 11 (IE 11) and will move to support the new Microsoft Edge. By November 30th, 2020, the Microsoft team’s web app will no longer support IE 11. By August 17th, 2021, the remaining Microsoft 365 apps and services will no longer support IE 11. This means customers still using IE11 will have a degraded experience or will be unable to connect to Microsoft 365 apps and services. As such, LivePerson is discontinuing support of IE11 in line with the above dates, as we don’t want our customers to be negatively impacted by this change. Though LivePerson supports Microsoft Edge and FireFox, the recommended browser for messaging workspace is Chrome.

For more information, please see the Microsoft announcement [here.](https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666)

## Advanced Messaging Dashboard

The Advanced Messaging Dashboard was originally built for critical messaging reporting needs that could not be served elsewhere. All of those reporting needs are now being served by either the Analytics Builder Predefined Dashboards or other reporting tools within Conversational Cloud. The Advanced Messaging Dashboard is undergoing a sunset plan, end of life is planned for April 30th 2021.  



