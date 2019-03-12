---
pagename: 'Smart Capacity per skill '
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: Manage the Smart Capacity settings per skill to better control the time
  it takes a conversation to become inactive
level3: ''
permalink: contact-center-management-messaging-operations-smart-capacity-per-skill.html
isTutorial: false
date: 2019-01-17 12:39:54 +0000
isNew: false

---
## Overview

The [Smart Capacity](contact-center-management-messaging-operations-smart-capacity-overview.html) feature enables brands to better manage their messaging operations by controlling the weight an active and inactive conversation takes up in the overall agent capacity. Brands can now customize the Smart Capacity settings per skill and thereby achieve a higher level of control on the time it takes a conversation to become inactive. Brands can also define the weight that an inactive conversation would take up in the agent capacity once the conversation becomes inactive.

## Calculating the agent load

The Smart Capacity setting revolves around the state of the conversation. An **actionable conversation** (one that is waiting for the agent to act upon) is also considered an active conversation, and as such, it takes up a certain weight in the agents overall capacity to handle conversations simultaneously.

A **non-actionable conversation** (one that waits for the consumer to act upon) is considered an inactive conversation, and as such, it can take up less weight in the agent’s overall capacity to allow the agent to handle additional conversations.

The first definition that sets the ground for managing the agent capacity is the _Max conversations_ setting that can be defined per user within the platform.

If the agent is set to have _Max conversations_ of 4 conversations, it means that the agent will be able to handle 4 active conversations at the same time. That is the agent’s max capacity or max load.

### Settings:

* The weight of an active conversation. Usually set with the value of 1, meaning 1 conversation.
* The weight of an inactive conversation. Usually set with a low value like 0.1 of a conversation.
* The time it takes for a non-actionable conversation to be assigned with the weight of an inactive conversation. Usually set at 4 minutes.

The agent’s load is then calculated based on the number of active conversations and inactive conversations an agent fit into his overall capacity.

The formula for calculating the overall capacity of all the conversations that are assigned to a specific agent is:

![](/img/SC-per-skill-1.png)

Next, the “Agent Load” is calculated based on the agent’s “Max conversation” and the capacity that has just been calculated:

![](/img/SC-per-skill-2.png)

This is the same formula as it is with the Smart Capacity feature, if the _Agent load_ is nearing the _Max conversations_ setting, the agent may not be able to receive additional conversations.

### Example:

Assume the following settings:

* Max conversations = 4
* The weight of active conversations = 1
* The weight of inactive conversations = 0.1

The agent can now have:

* Three active conversations with a total weight of 3
* Ten inactive conversations with a total weight of 1

If the agent has multiple skills assigned to it, Smart Capacity will look at the skill on which the conversation is assigned and will calculate the conversation weight based on the skill smart capacity settings. **Please note:** the max conversations setting defines the hard limit for the number of conversations an agent can handle.

## Smart Capacity recommended values

In order to come up with the most relevant smart capacity values for a specific brand, an analysis can be carried out by LivePerson’s Analytics and Data Science teams. They will generate a list of recommended Smart Capacity values per the brands' skills based on an analysis of the consumer response times to messages from agents, per skill. Please contact your LivePerson account team to set up Smart Capacity Per Skill.

## Tracking in real time

The effect of Smart Capacity can be seen under the “Messaging Agents” tab in LiveEngage under the agent load.