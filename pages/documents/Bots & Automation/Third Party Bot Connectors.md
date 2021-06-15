---
pagename: Third-party Bot Connectors
categoryName: Getting started
subCategoryName: Web Messaging
indicator: both
subtitle: LivePerson allows for external Bot Vendors and Bot builders to be enabled
  and managed through the Conversational Cloud just like a normal human agent
level3: ''
permalink: ai-bots-automation-third-party-bot-connectors.html
isTutorial: false
isNew: false

---
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/3rd Party Bot GIF.gif)

Bots can have a dramatic impact on contact center operations, helping brands to free up valuable agent time and reducing customer care costs by using bots to handle mundane and monotonous tasks allowing human agents the time to focus on more complex conversations.

LivePerson allows for external Bot Vendors and Bot builders to be enabled and managed through the Conversational Cloud just like a normal human agent.

Using Third-Party Bots Connectors, brands can provision and enable Bots from IBM Watson, Google Dialogflow, Amazon Lex, Microsoft Bot Framework or leverage LivePerson Functions with the Custom Integrations Option.

Each connector provides the functionality to

* send/receive text messages
* send [structured content](https://developers.liveperson.com/getting-started-with-rich-messaging-introduction.html)
* transfer the conversation to other skills
* change Time To Response for a messaging conversation
* close a conversation

Some connectors may provide more or less functionality depending on the specifics of the product to which it is connecting. You have the option to send the bot consumer information that the bot will be able to leverage as part of its logic during the conversation. If you need to connect an external bot that does not have a pre-built connector, see [this document](https://developers.liveperson.com/third-party-bots-custom-integration.html) for instructions.

Each bot has a [dashboard](https://developers.liveperson.com/third-party-bots-bot-status-dashboard.html) so you can monitor its activity in real-time along with some key operational metrics (see below).

## How to onboard a bot

There are four steps to onboarding a bot.

1. Assign / create a bot agent in the Conversational Cloud under which that bot operates
2. Choose the conversation type ( chat or messaging)
3. Error handling - define fallback messages and skills to which the conversation will be routed if the bot becomes unavailable during the conversation.
4. Connect to the bot vendor:
   1. [IBM Watson Assistant](https://developers.liveperson.com/bot-connectors-ibm-watson-assistant.html)
   2. [IBM Watson Assistant Version 2](https://developers.liveperson.com/third-party-bots-ibm-watson-assistant-version-2.html)
   3. [Google Dialogflow ES](https://developers.liveperson.com/third-party-bots-google-dialogflow-es-introduction.html)
   4. [Google Dialogflow CX](https://developers.liveperson.com/third-party-bots-google-dialogflow-cx.html)
   5. [Amazon Lex](https://developers.liveperson.com/bot-connectors-amazon-lex.html)
   6. [Microsoft Direct Line](https://developers.liveperson.com/third-party-bots-microsoft-direct-line-introduction.html)
   7. [Custom Integration](https://developers.liveperson.com/third-party-bots-custom-integration.html)

For more information and detailed steps of how to onboard - please visit the [Developer Center](https://developers.liveperson.com/third-party-bots-getting-started.html#provision-a-connector)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/bot_status_select.png)

## Custom integration

Instead of a vendor, like IBM Watson for example, LivePerson Functions allows you to write your own custom bot and connect it to the Conversational Cloud. In order to achieve this, you will need to implement a LivePerson Functions **Custom Integration**.

To connect to a third-party bot with the custom integration, you will need to write code using Node.JS from LivePerson’s Functions platform.

Whenever a message is sent from the consumer into LE, the custom connector takes that message and triggers the function you develop to link to your Bot provider and sends the message.

### **Steps for custom integration**

#### Step 1 - Create a function

From the Bot onboarding wizard, chose to create a new Function. This will take you to the LivePerson Functions interface.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/chat_settings.png)

#### Step 2 - Edit the Function

Adjust the default Function code from the function template, according to your needs. Here you will need to code into the function the connecting parameters to your Bot vendor (Vendor URL, credentials/secrets). Please see this document for more information on [developing functions](https://developers.liveperson.com/liveperson-functions-development-overview.html).

#### Step 3 - Deploy the function

After completing the code, deploy the function to our functions cloud and have the integration ready to work with your bot in a matter of seconds.

For more detailed information, please visit the [Developer Center](https://developers.liveperson.com/third-party-bots-custom-integration.html)

## Third-party bot status dashboard

The bot status dashboard provides a detailed overview for the most important bot KPIs. It features a chronological history of different bot state events, such as online time and interruptions. The dashboard also provides a calculated uptime for the bot.

To track the efficiency of the bot, the dashboard features an overview for the number of handled conversations over time.

The dashboard can be accessed by clicking on the bot's name.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/bot_status_metrics.png)

## Limitations

* Currently the connectors only support text input from the customer.
* The third-party Bot connectors support only Liveperson’ [rich content](https://developers.liveperson.com/getting-started-with-rich-messaging-rich-messaging-channel-capabilities.html) structure.

For more information, please visit the [Developer Center](https://developers.liveperson.com/third-party-bots-getting-started.html#limitations)
