---
pagename: Getting started with bots
categoryName: Getting started
subCategoryName: ''
indicator: both
subtitle: Learn how to get started building a bot with everything from creating a
  use case, choosing a host and connecting conversations
level3: ''
permalink: getting-started-getting-started-with-bots.html
isTutorial: false
isNew: false
date: '2019-02-11T12:56:04.000+00:00'

---
{: .notice}   
**To get started right away, see the** [**Bots Quick Start**](getting-started-quick-start-guides-conversation-builder-quick-start.html) **article.**

## The benefits of bots in LivePerson

Brand using chat and messaging services can scale significantly with automation. Enterprises can use bots to enhance digital care and sales processes to deliver high-quality customer interactions. Check out our in depth article on: [How bots work in LivePerson](ai-bots-automation-how-bots-work-with-liveperson.html). Here’s a summary of main concepts

* **Humans and bots work together in LivePerson**  
  In LivePerson, bots work alongside human agents. This allows conversations to be seamlessly passed back and forth between human and bot agents, and gives human agents the ability to manage and take over conversations as needed. Similarly agents can assign bots to handle routine tasks, automating common customer service conversations.
* **Track and monitor bots like any other agent**  
  Bot conversations appear in the agent workspace allowing agents and agent managers to monitor bot performance in real time. A bot’s performance is measured in a centralized report like any other agent, against the same KPIs. A detailed and flexible LivePerson reports allow managers to drill down further and optimize bot performance.
* **Set consumer expectations for a better bot experience**
  In the conversation window, the consumer sees either an agent or a bot as the agent icon in order to manage consumer expectations. This agent icon is updated to a bot icon and automatically switched to the agent icon

## Step 1: Create conversation playbook

Work with your brand’s design experts or the LivePerson Conversation Design experts to determine a solidified bot strategy, and map out the use cases and flows you’d like the bot to cover. The bot should reflect your brand image and voice; we recommend spending some time creating a bot persona that matches your brand personality. Key questions include:

* What are the type of conversations you have?
* From those, which conversation types are easily automated?
* What are fully automated versus partially automated?
* What are the goals of your bots?
* What should be the content of automatic responses?

| Bot type | Definition | Goal | How to use with Conversation Builder* |
| --- | --- | --- | --- |
| Standard | Collects information with the intention of handing off to an agent. Examples: form fill, FAQs, light data collection, etc. | Automate simple tasks to save agent time | Create your own dialogue from scratch. |
| Routing | Collects information and routes to a skill in LE. This could include upfront pre-chat survey questions or a welcome message before routing. | Facilitate / automate tasks | The bot serves routing cards (structured content) with buttons. Each button can be assigned with a different action for example ‘transfer conversation to skill X’ or direct consumers to self-serve assets. |
| Post Conversation Survey | Collects information post-conversation | Measure customer satisfaction | Currently in the Bot Studio (soon to be integrated with the Conversation Builder). Customize the survey including: predefined questions (CSAT, NPS and FCR), custom/free text questions, and logic between the questions. |
| FAQ | Answers customer questions free-form | Resolve/contain the conversation | Use the conversation builder - using the Knowledge base bot template. |
| Transactional | An end-to-end, customer service bot (i.e. order status, bill payment, password reset). Likely include an integration. | Resolve / complete customer journey without need of agent | Add relevant integrations to enable back-end transactions. |
| Sales | Fulfill orders and complete purchases. | Fulfill orders and complete purchases. | Use the prebuilt sales templates. Shopify & Apple Pay integration included. |

{: .notice}  
Only applicable if choosing option A - leverage LivePerson’s Conversation Builder with native bots - when implementing automation/bot in step 2 below. Get more  info on the [post conversation survey](ai-bots-automation-post-conversation-survey-bot.html) bot.

## Step 2: Implement automation and build a bot

There are three steps in implementing a bot with LivePerson. You will need to choose a way to create your bot, a way to host your bot, and a way to connect your bot to LivePerson.

**Choose which system to build your bot with:**

### A. Leverage LivePerson’s Conversation Builder with native bots

{: .notice}
To access the Conversation Builder, click the Automation tab at the top of your LiveEngage screen. From there, click on the Conversation Builder icon in the left hand side-bar and then clicking on the Conversation Builder icon on the screen which opens.

**Method:** The Conversation Builder offers a high-value solution for brands to address a wide variety of automation workflows and use cases in multiple industries. These bots can carry out a variety of automatic tasks and communicate with consumers to help take the load off agents. See the [Conversation Builder](ai-bots-automation-conversation-builder-conversation-builder-overview.html) article to learn how to get started, set up a user, and get up and running with pre-built bot templates.

**Host:** Hosting / running is done automatically by the Conversation Builder.

**Connection:** Brands simply need to connect to LivePerson, and choose which bot to run at any given moment.

### B. Connect a third-party bot framework using LivePerson’s bot connectors

**Method**: Bot connectors are pre-built connectors to certain bots. Brands who want to bring their own bots - including their own custom bots - can integrate any third-party bot technology. This is one of the main benefits of LivePerson as an open, conversational platform: any chat bot, created by a brand or a 3rd party can be fully integrated into LivePerson to become a component of your customer care team.

**Host:** These bots run on a brand’s server. Depending on the bot framework, occasionally the bot framework handles hosting for a brand.

**Connection:** Brands need to connect the bot to LivePerson using our bot connectors. Follow the guides on specific bot connectors here:

* [Google dialogue flow](https://developers.liveperson.com/bot-connectors-google-dialogflow.html)
* [IBM Watson assistant](https://developers.liveperson.com/bot-connectors-ibm-watson-assistant.html)
* [Amazon Lex](https://developers.liveperson.com/bot-connectors-amazon-lex.html)
* Microsoft LUIS (coming soon)
* Custom bot ([Messaging Agent SDK](https://developers.liveperson.com/messaging-agent-sdk-overview.html))

## Step 3: Connect conversations to your bots

Once your bot is hosted, running, and connected in the Conversation Manager, the next step is to assign conversations to the bot.

**How to assign bots to specific skills** - Create skills for different uses cases. All conversations routed to a specific bot skill will automatically be assigned to that bot first, and routed to a human after if needed.

## Step 4: Monitor and report bot performance

LivePerson includes a comprehensive set of management and reporting capabilities that can be used to manage both LivePerson bots or any third-party bots alongside agents. Managers can manage bots the same as human agents, in a real-time dashboard with flexible and detailed reports that helps evaluate success.

## Bot dashboard

The bot dashboard will help brands monitor the technical and operational activity of their third party bot. Brands will be able to see key operational metrics such as, ongoing conversations, transferred conversations, errors, uptime and more.

This dashboard will provide the ability to track these metrics over time and thereby identify issues, follow the bots improvement over time and identify when its encountering an issue. There will also be an option to export the data as well as view logs related to the bots operational.

![](/img/bot dashboard1.png)

For more information please visit the [developers community](https://developers.liveperson.com/bot-connectors-getting-started.html)
