---
pagename: 'Recommended Actions '
categoryName: Bots & automation
subCategoryName: ''
indicator: both
subtitle: A continuously-learning platform that orchestrates all conversational interactions
  to recommend the best outcomes
level3: Getting started
permalink: ai-bots-automation-maven-recommended-actions.html
isTutorial: false
isNew: false
date: 2019-03-14T11:31:44.000+00:00

---

LivePerson’s [Maven](ai-bots-automation-maven-overview.html) is an AI powered platform that orchestrates conversations involving bots and human agents - the  brain inside LivePerson’s conversational commerce platform.

The **Recommended Actions widget** is one of Maven Assist’s capabilities that helps increase agent productivity by recommending the most applicable actions to the agent in real-time. 

## Key benefits of Recommended Actions

Recommended Actions encourages agents to leverage existing bots and content, and frees up agent capacity to handle other conversations. The result is improved agent efficiency, especially as conversation volume, use cases, and number of automations expand. 

**Benefits include:**

* Leverages Maven's identification of consumer intent
* Recommends or executes the next action for the best outcome
* Makes human agents more efficient by enabling them to hand off menial tasks to automations
* Accelerates utilization of existing automations by improving contextual discovery

## How it works

### Intent recognition

When a consumer sends a message, [Maven](ai-bots-automation-maven-overview.html) scans the conversation to identify the consumer’s intent.  Intent is understood by leveraging different NLU providers (1st party or 3rd party) built into each bot from their respective platforms: LivePerson’s Conversation Builder, Watson, or DialogFlow.

Maven then analyzes all available bots, knowledge base articles, and other useful actions to discover the best tool that can help the agent with the intent.

Each bot, article or action is graded by the conversation’s context and its relevance - how agents have historically rated the action’s performance for the intent.

### Actions recommended in real time

After matching the intent to the best action, the Recommended Action widget displays the option to the agent.

The agent has the ability to initiate the action - such as joining a bot or inserting an article into the conversation - to immediately start handling the consumer’s request. 

Maven's Recommended Actions continues to make recommendations as the conversation evolves. For example, the agent can join a bot to the conversation, stay in the conversation or jump in to activity monitor it, as well as remove the bot from the conversation if needed. 

![](/img/RA-join-bot-1.png)

### Optimization with closed-loop training

Recommendations are made based on the relevant and high confidence score of the intent, after calibrating the score using a machine learning based on historical performance. 

Agents are able to rate the relevance and usefulness of the recommended automation using a simple thumbs-up or down button. 

In the background, Maven is learning from the conversations and improves the model for all future recommendations over time.

![](/img/recommended-actions-with-maven-4.png)

## Plug in any automation or bot

Build automations or bots using LivePerson’s [Conversation Builder](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-conversation-builder-overview.html), or integrate bots that were created using Dialogflow or Watson. See the [tutorials and guides on the Conversation Builder](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-getting-started-tutorials.html) to learn how to get started.