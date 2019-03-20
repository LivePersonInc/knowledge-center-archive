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
date: 2019-03-14 11:31:44 +0000

---
LivePerson’s [Maven](ai-bots-automation-maven-maven-overview.html) is a continuously-learning AI engine that orchestrates all conversational interactions to ensure the best outcomes - the  brain inside LivePerson’s conversational commerce platform.

**Recommended Actions** is Maven’s agent assistance feature that actively recommends hand-offs to bots based on the conversation. It scans each conversation turn for intent, and then determines and presents the next best action to the agent. By incorporating automations mid-conversation, Recommended Actions frees up agent capacity to handle other messages, making agents significantly more efficient.

## Key benefits of Recommended Actions

* Examines each conversational turn to assess consumer intent
* Recommends or executes the next action for the best outcome
* Makes human agents more efficient by enabling them to hand off menial tasks to automations
* Accelerates utilization of existing automations by improving contextual discovery

## How it works

### Intent recognition

[Maven](ai-bots-automation-maven-maven-overview.html) intercepts each message and leverages all the bots registered to assess their understanding of customer’s intent. Intent is understood by leveraging different NLU providers (1st party or 3rd party) built into each bot from their respective platforms: LivePerson’s Conversation Builder, Watson, or DialogFlow

### Actions recommended in real time

Maven analyzes all available bots and automations to match the identified intent, and recommends the best automation in real time to the agent. Recommendations are done by choosing the highest ranked bot by score, after calibrating the score using a machine learning based on historical performance of the bot. Agents can then easily opt to manually transfer the conversation to the recommended automation.

![](/img/recommended-actions-with-maven-3-1.png)

### Closed-loop training for optimization

Agents are able to rate the relevance and usefulness of the recommended automation using a simple thumbs-up or down button. Maven then registers and utilizes the feedback to train the model for all future recommendations.

![](/img/recommended-actions-with-maven-4.png)

## Plug in any automation or bot

Build automations or bots using LivePerson’s [Conversation Builder](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-conversation-builder-overview.html), or integrate bots that were created using Dialogflow or Watson. See the [tutorials and guides on the Conversation Builder](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-getting-started-tutorials.html) to learn how to get started.