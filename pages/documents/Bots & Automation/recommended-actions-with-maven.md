---
pagename: Recommended Actions with Maven
categoryName: Bots & automation
subCategoryName: ''
indicator: both
subtitle: A continuously-learning platform that orchestrates all conversational interactions
  to recommend the best outcomes
level3: ''
permalink: bots-automation-recommended-actions-with-maven.html
isTutorial: false
isNew: false
date: 2019-03-14 13:31:44 +0200
published: false

---
LivePerson’s Maven is a continuously-learning AI engine that orchestrates all conversational interactions to ensure the best outcomes. Maven consists of suite of features from smart routing to bots and agents, intelligent handoffs, trend detection and reaction, analytics, recommendations and much more.

**Recommended Actions** is Maven’s agent assistance feature that actively recommends or executes hand-offs to bots based on the conversation. It scans each conversation turn for intent, and then determines and presents the next best action to the agent. By incorporating automations mid-conversation, Recommended Actions frees up agent capacity to handle other messages, making agents significantly more efficient.


## Key benefits of Recommended Actions

* Examines each conversational turn to assess consumer intent, historical context, personalized info, available agents and more
* Recommends or executes the next action for the best outcome
* Makes human agents more efficient by enabling them to hand off menial tasks to automations
* Accelerates utilization of existing automations by improving contextual discovery

## How it works

![](/img/recommended-actions-with-maven-2.png)

### Intent recognition

Maven intercepts each message and leverages all the bots registered to assess their understanding of customer’s intent. Intent is understood by leveraging different NLU providers (1st party or 3rd party) built into each bot from their respective platforms: LivePerson’s Conversation Builder, Watson, or DialogFlow.

### Best actions recommended in real time

Maven analyzes all available bots and automations to match the identified intent, and recommends the best automation in real time to the agent. Recommendations are done by choosing the highest ranked bot by score, after calibrating the score using a machine learning based on historical performance of the bot. Agents can then easily opt to manually transfer the conversation to the recommended automation.

![](/img/recommended-actions-with-maven-3-1.png)

### Closed-loop training for optimization

Agents are able to rate the relevance and usefulness of the recommended automation using a simple thumbs-up or down button. Maven then registers and utilizes the feedback to train the model for all future recommendations.

![](/img/recommended-actions-with-maven-4.png)

### Plug in any automations/bots

Build automations or bots using LivePerson’s [Conversation Builder](https://knowledge.liveperson.com/bots-automation-conversation-builder-overview.html), or integrate bots that were created using Dialogflow or Watson. See the Developers' Community for [tutorials and guides on the Conversation Builder](https://developers.liveperson.com/conversation-builder-platform-overview.html) to learn how to get started.

To get the bigger picture or learn more about how Maven fits into, check out the [LivePerson’s Conversational Commerce platform](https://knowledge.liveperson.com/getting-started-livepersons-conversational-commerce-platform.html#how-our-conversational-platform-works).