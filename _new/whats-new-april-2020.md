---
pagename: April 2020
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Highlights include Agent app available on Android, Dialog Editor 2.0 & more
level3: ''
permalink: whats-new-april-2020.html
isTutorial: false
isNew: false

---
Here’s the latest features, enhancements and enablements that are coming in the following weeks.
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/410243448?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Agent App available on Android 
The Agent app offers messaging capabilities to help agents that are working from home to continue to provide services to their consumers, and brands transition to work-at-home operations. This app runs on IOS currently, but will now be made available on Android too.

Agents can use the app to accept new conversations when an agent is online, manage the list of conversations, transfer to another skill, close conversation or return them to the queue, predefined content & share images, and use of secure forms.

{: .notice}
This feature only supports version iOS12 and up.

For more information on the Agent App, please visit the Knowledge Center.

## EmailConnect - multiple email addresses
Email Connect provides the ability for brand agents to receive and respond to consumer emails within LiveEngage.

* Assign email to skill — Brands are able to assign skill (existing or new) to the configured email address using Email Connect Setup tool.
* Custom headers and footers — Brands are able to add custom html headers and footers to their outbound emails in the Email Connect Setup page.
* Custom auto-response text — Brands are able to add custom auto response text in their preferred language which will be used in an email back to the consumer when the consumer already has a conversation open in LiveEngage.
* Multiple email addresses — Brands can add an unlimited number of email addresses to LiveEngage and even route each email address to a different skill. For example, you can route info@, support@ and sales@ to different skills, allowing specialized bots and agents to handle your email interactions.

{: .notice}
EmailConnect does not support legacy chat conversations 

For more information on Email Connect, please visit the [Knowledge Center.](https://knowledge.liveperson.com/messaging-channels-emailconnect.html)

## AI and Automation updates
As COVID-19 disrupts workplaces around the globe, LivePerson has jumped on the opportunity to roll out new initiatives that help brands handle the unprecedented increase in overall call volume, sudden labor shortages, and work-from-home transformations.

## Prebuilt bot templates for COVID-19 FAQs
Prebuilt bot templates rapidly deliver automations that provide quick COVID-19 related responses to handle increase of messaging traffic with Prebuilt bot templates. There are vertical templates for: Generic, Airline, FinServ, Telco, Insurance, Utilities. The packages are ready for deployment to help brands mitigate labor shortages and better manage queues - specifically designed to address FAQs that relate to rapidly-changing business conditions.
Package 1: Concierge bot with FAQ
Package 2: Concierge bot with Data Collection/Integration and FAQ
For more information on Prebuilt bot templates for COVID-19 FAQs please contact your account manager.

## Conversation Builder is launching the Dialog Editor 2.0 
Dialog Editor 2.0 is a one-stop tool for designing and building scalable conversations with dialogs and interactions across multiple channels. 

Bot developers can easily develop and maintain hundreds of dialogs and interactions using Dialog Editor 2.0:
There have bee a number of improvements including: 
- Self-guided interface for easily creating rules, without the need for coding
- Scalable UI for dialog creation and management, with multiple types of Interactions, dialog templates and libraries to facilitate building better conversation flow
- Improved UI for configuring user response handling 
- Improve overall readability of conversation flow
- Aligned navigation towards the overall Conversational Cloud 

For more information on the improvements to the Dialog Editor 2.0, click [here.](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-coming-soon-to-the-conversation-builder.html)

## Bot Groups

Bot Groups makes transfers across multiple bots easier, smarter and more efficient.
It allows bots to act collaboratively and handle multiple types of requests, greatly improving the consumer experience while eliminating the need for custom code.

With this feature, bots can now automatically discover other bots within a group based upon their capabilities. When a topic changes in the middle of a conversation, the current bot can now find the appropriate bot to handle this topic and seamlessly transfers the conversation.

## Post Conversation Survey in the Conversation Builder 
Brands can use Conversation Builder for all their bot needs, including surveys as the Post Conversation Survey is now in the Conversation Builder platform.

Within this feature, brands can now ask their customers to fill a brief survey at the end of a conversation and collect feedback in a single flow. The collected data provides valuable insights about the customer experience. 

Bot developers can create and activate Net Promoter Score (NPS), Customer Satisfaction (CSAT), and First Call Resolution (FCR) surveys from Conversation Builder platform. Post conversation surveys are activated at account level and will be presented to the user after a conversation is closed.

Note: Bot Studio will continue to offer this feature, but we recommend all the new surveys to be created in Conversation Builder

## Support private messages for bot connectors
Bots integrated via the 3rd Party Bot Platform will be able to send private messages into the conversation so that other agents can see a message from the Bot without the consumer seeing. This provides the ability to pass customized data from the bot to the agent, such as ‘escalation summary details’, accumulated data from other integrations with the bot vendor.
Using a predefined syntax, the bots will send private message actions to the LiveEngage 3rd-party bot platform that will publish the private messages into the conversation for other agents to read.  

## 3rd Party Bot platform -  Public API
The Public APIs for the 3rd Party Bot connector will allow brands to build automations where the bot pro-actively takes actions on conversations instead of only reacting to customer messages. This means that for example, brands can design bots to send messages that are timed to consumer inactivity time.

## Support MTLS for Bot connectors
Brands can choose to use LivePerson MTLS with the bot connectors and enhance the security of the connection between LP and the Bot vendor with a signed certificate specific to the brand. 
Brands will have a choice to enable the MTLS flow for new and existing bots. The brand can provide LivePerson with a generated certificate that will be hosted in our secret storage system. If this flow is enabled, the connector will confirm the signing of the certificate using LPs MTLS service before providing content to the configured endpoint.

### Messaging
## Structured Content - Multiple selection checkbox
A multiple selection checkbox for structured content, for the agent workspace gives agents the ability to suggest multiple options for consumers to select in a structural way.

## “All Conversations” View for Rollover Accounts
Rollover accounts are typically answering conversations from multiple LiveEnhage accounts.  The UI now better supports displaying these historical conversations to the agent in the Agent Workspace, as well as gives an Agent Manager a real-time view of all conversations ongoing with their agent pool. 



## New Manager Workspace
For a comprehensive tutorial of the New Manager Workspace check out this [video.](https://vimeo.com/358055055/d830be4007)

Here’s the latest updates to the manager workspace:

## Global Skill Filter 
We’re making it easier for managers to make data driven decisions by allowing them to easily filter the entire workspace by specific skills. Until now, the skill filter was available per widget (e.g. by queue summary, agents and conversation widget). 
When filtering by skill, the agent’s widget will retrieve the list of agents which are assigned to the selected skills.  The metrics associated will not be filtered according to the skill, but for all of the agent’s activity.
For example, if an agent is assigned multiple skills, the metrics will reflect all of their conversations and not just the filtered skill.
The filter is available on the top right corner of the page.

{: .notice}
This filter will be automatically enabled for any user that is using the new manager workspace.


## Global filter setting at logout retained upon login 
In order to spare managers from resetting their workspace filter preferences each time they log in, the global filter settings will be saved automatically. The filters that are retained are only the global filters (available at the top right corner of the workspace) including: timeframe, group and skill filters. 

{: .notice}
The filter settings are kept on the local storage of the specific computer and browser per user.

## Active metric added to agent card view 
The “active” metric which was available until today only on the list view of the agents widget has been added to the card view as well. The metric displays the number of conversations at full intensity. 

{: .notice}
Automatically enabled for any user that enabled the new manager workspace.




