---
pagename: Messaging conversation segments
categoryName: Data & reporting
subCategoryName: Messaging
indicator: messaging
subtitle: When a conversation has multiple skills or agents assigned to it, measuring
  the performance requires segmentation
level3: ''
permalink: data-reporting-messaging-messaging-conversation-segments.html
isTutorial: false
isNew: false

---
The reality of messaging conversations today is that about 50% of interactions are transferred between skills. Many of the brands are also experiencing transfers between human agents.

In situations where multiple skills\\agents are assigned to each conversation, measuring the performance (e.g. time to first response) of each skill\\agent individually requires segmenting the conversation.

LivePerson introduces a new segmentation model to measure each individual skill\\agent performance and present accurate KPIs per skill\\agent.

The new metrics are added to the Report Builder for historical data analysis and are also available for real time data extraction:

* Report Builder - included in the Performance dashboard for Messaging
* Messaging Operations API - in the following methods:

1. [Messaging Skill Segment](https://developers.liveperson.com/messaging-operations-api-methods-messaging-skill-segment.html)
2. [Messaging Agent Segment](https://developers.liveperson.com/messaging-operations-api-methods-messaging-agent-segment.html)

## What is a segment?

A part of the conversation which is assigned to a specific skill\\agent.

LivePerson defines two types of segments - skill segments and agent segments.

## Skill segments

The emphasis of these metrics are on “my team” or “my skills”. As an Agent Manager, whether managing humans or bots, you will be able to focus on conversations opened to your skill or transferred to your skill, and measure performance for the time-period until these conversations are closed in your skill or transferred out from your skill to another skill.

### Skill-segment definition

A skill-segment starts when:

* a new conversation is assigned to a skill
* a conversation is transferred from another skill

A skill-segment ends when:

* a conversation is transferred to another skill
* a conversation closes while assigned to the skill

{: .notice}  
System messages (Controller Bot) - are ignored in the calculation of skill-segments

Please note: the following scenarios do not start a new skill-segment:

* Back-to-Queue - returning a conversation to the same skill-queue
* Takeover - agent manager taking over a conversation from his agents becomes the assigned agent of the conversation but the conversation remains assigned to the same skill.
  ![](/img/Messaging_segments1-1.png)

## Metrics

**Manager Question**

How many times were conversations assigned to my skill, to be handled by my team of human or bot agents?

**Answer (Metric):** Skill Segments

**Action:** By understanding the number of conversations, managers can ensure agents are taking the 	optimal number of conversations.

This metric will be a more precise version of CCPLH.

**Manager Question:** How many times did consumers abandon a conversation assigned to my skill?

**Answer (Metric):** Abandoned Segments (Skill) / Abandoned Segments Rate (Skill)

How many times did consumers abandon a conversation while waiting in my skill-queue?

**Answer (Metric):** Abandoned Segments - In Queue (Skill)

**Action:** This metric enables you to determine issues arising from the length of your queues - 		before an agent is assigned.  Action is to adjust the SLA per skill.

**Manager Question:** How many times did my team try to reach out to a consumer but the consumer never replied?

**Answer (Metric)** Segments with Non Responsive Consumers (Skill)

**Action:** Determine why consumers are leaving conversations. Potentially adjust your auto messages or check if the auto close is too fast.  Are consumers are not getting to answer in time from your skill?

**Manager Question**: How many times did conversations timeout, closed by my agents, or transferred to another skill, while my agents didn’t respond to the consumer?

**Answer (Metric)** Segments with Non Responsive Agents (Skill)

**Action:** This can showcase situations where consumers are being transferred and other skill not answering - does the process of internal transfer need fixing?

**Manager question:** How many times did my team conduct a dialog with consumers?

**Answer (metric)** Interactive Segments (Skill) / Interactive Segments Rate (Skill)

**Action:** More accurate view of actual number of engagements conducted by agents in this skill.

**Manager question:** How long are conversation owned by my agents?

**Answer (metric)** Avg. Segment Duration (Skill)

**Action:**  Clean view into the time agents spend on the skill’s conversations.

### Skill-Queue Statistics

**Manager question:** How long do consumers wait in my skill-queue for an agent to be assigned?

**Answer (metric)** Wait Time for Agent Assignment  - Average / - Max / - 50th percentile - 90th percentile

**Action:** Understand how long the average consumer waits in the queue and how long consumers wait before abandoning

## Attributes

Skill-segment metrics can be sliced and diced by:

* Skill
* Campaign, Engagement
* Source, source type
* Consumer Device
* User Type - possible values:
  1. Human - segments that included only human agent\\s - If skill-segment includes both human agents and bot\\s (uncommon scenario as the best practice is to have a dedicated skill for each type of agent), the user type will show human
  2. Bot - segments that included only bot\\s
  3. N\\A - No assignment to any agent
* Skill-Segment start reason - possible values:
  1. New conversation
  2. Agent transfer from another skill
  3. Skill transfer
  4. Resume
  5. Other - conversation was routed to a specific skill (a new conversation or a transferred conversation) but, as there was no agent that accepted it, the conversation was routed again to the default skill defined in the accounts
* Skill-Segment end reason - possible values:
  1. Agent transfer to another skill
  2. Skill transfer
  3. Closed by agent
  4. Closed by consumer
  5. Closed by system

## Agent segments

The emphasis of the following metrics are on “my group” or “my agents”.

As an Agent Manager, whether managing humans or bots, you will be able to focus on the parts of the conversations that are handled by your agent-group, and measure the performance of your agents in the time-period the conversation are owned (assigned) by them.

### Agent-segment definition

An agent-segment starts when an agent is assigned to a conversation:

* Assigned to a new conversation (segment start time=assignment time)
* Assigned to a conversation after it was transferred (transferred between skills, agents or back to queue) (segment start time=assignment time)
* Takeover (segment start time = moment of takeover)
* Resume (segment start time = conversation start time)

{: .notice}  
Joining \\ reading a conversation does not start a new agent-segment.

An agent-segment ends when the agent is no longer assigned to the conversation -

* the agent transfers the conversation (to another skill, to another agent or back to queue) (segment end time = moment of transfer)
* the conversation is taken-over by a manager (segment end time=moment of takeover)
* the conversation closes (by the agent, consumer or system) while the agent is assigned (segment end time=close time)

Please note:

* Joined agent\\reader leaving a conversation does not end an agent-segment.
* Time in Queue is not ‘owned’ by any agent, therefore is not be part of any agent-segment.

![](/img/agent segments new.png)

## Metrics

**Manager Question:** How many times were conversations assigned to each agent, human or bot?

**Answer (Metric):** Agent Segments

**Action:** By understanding the number of conversations, managers can ensure agents are taking the optimal number of conversations.

This metric will be a more precise version of CCPLH.

**Manager question:** How many times did consumers abandon a conversation handled by my agents?

**Answer (Metric):** Abandoned Segments (Agent) , Abandoned Segments Rate (Agent)

**Action:** Isolate abandonment reasons to each agent accountable - when more than one agent is handling conversations (e.g. tier 1 and tier 2). Determine a specific agent driving abandonment and whether it’s caused by lack of training.

**Manager Question:** How many times did an agent try to reach out to a consumer but the consumer never replied?

**Answer (Metric):** Segments with Non Responsive Consumers (Agent)

**Action:** Determine why consumers are leaving conversations. Potentially train your agents to give better service or change the flow of the conversation.

**Manager Question:** How many times did conversations timeout, closed or transferred by an agent before providing a response to the consumer?

**Answer (Metric):** Segments with Non Responsive Agents (Agent)

**Action:** This can showcase situations where agents are assigned to conversation but aren’t taking any actions on it. Is there a problem with the routing? Or is the agent refusing to deal with specific cases?

**Manager Question:** How many times did each agent conduct a dialog with consumers?

**Answer (Metric):** Interactive Segments (Agent) , Interactive Segments Rate (Agent)

**Action:** More accurate view of actual number of engagements conducted by agents.

**Manager Question:** How long are agents participating in conversations?

**Answer (Metric):** Avg. Segment Duration (Agent)

**Action:** This can help to quantify the agents’ activity during conversation.

**Manager Question:** How many responses my agents send in an average conversation?

**Answer (Metric):** Avg. No. of Agent Responses in Segment (Agent)

## Attributes

Agent-segment metrics can be sliced and diced by:

* Agent and Agent Group
* User type
* Campaign, Eng
* Source, source type
* Consumer Device
* Agent-segment start reason - possible values:
  1. New conversation
  2. Agent transfer
  3. Skill transfer
  4. Taken from Queue
  5. Takeover
  6. Resume
* Agent-segment end reason - possible values:
  1. Agent transfer
  2. Skill transfer
  3. Back to Queue
  4. Takeover from agent
  5. Closed by agent
  6. Closed by consumer
  7. Closed by system

## Calculation considerations

* Metrics are attributed to the end time of the segment. Only closed segments are included in the calculations.
* Metrics include only actions by the assigned agents - messages given to the consumer by participating agents who are not the assigned agent are omitted from the calculations.
* Messages provided by the Controller Bot (system messages) are omitted from the calculations.
* In case of resumed conversations - the first message sent by the agent after resuming a conversation is not included in the averages
* Takeovers - the first message sent by the manager after taking over a conversation is not included in the averages.

## Understanding the metrics (aggregation levels)

### Aggregation Levels

The segments data can be analyzed from several different aspects. The Performance dashboard offers a view into two of these as described in this article: Skill and Agent. At each level, the metrics included in the dashboard are pre-aggregated to reflect the corresponding aspect.

A suffix has been added to each metric name to allow users to identify the level to which the metric is pre-aggregated. For example: “INTERACTIVE SEGMENTS (SKILL)” and “ABANDONED SEGMENTS (AGENT)”.

Please note: Skill level metrics and agents level metrics **should not be combined** in the same grid as the underlying data is calculated and implemented differently.

* For analyzing skill demand and supply - use the ‘Skill Segment Data’ grid (3rd panel in the ‘Brand Level Data’ in the Performance dashboard for Messaging)
* For analyzing agent performance and efficiency - use the Agent Segment Data’ grid (4th panel in the ‘Agent Level Data’ in the Performance dashboard for Messaging)

When comparing segment level data with conversation level data, a few considerations should be taken into account:

* Time attribution

  \- Segment level metrics are attributed to the end time of the segment. Conversation level metrics have different time -attribution. For example, ‘Opened Conversations’ is attributed to the opening time of the conversation.
* A single conversation may include more than one segment for each participating skill\\agent. This happens when the conversation is transferred to another skill and back to the original skill, for example.

## Metric definitions

Following are the explanations of the metrics defined per segment (relevant for both agent and skill segments):

### Interactive Segments

The number of segments which included at least one response from the consumer to an agent’s message.

### ![](/img/Mess_segments3.png)

### Abandoned Segments

The number of conversations closed by a consumer which included no agent message. Measured during the last segment of the conversation, and is unaffected by the agent activity from previous segments. Attributed to the last agent\\skill assigned to the conversation.

![](/img/abandoned segments.png)

### Segments with non Responsive Agents

The number of segments which ended in a transfer or closed by agent\\system with no message from an agent.

![](/img/non_responsive_agents.png)

### Segments with Non Responsive Consumers

The number of closed conversations which included no consumer response to an agent's message. Measured during the last agent-segment of the conversation.

![](/img/ageny segments new2.png)