---
pagename: 'Messaging Conversation Segments '
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
* Takeover - agent manager taking over a conversation from his agents becomes the assigned agent of the conversation but the conversation remains assigned to the same skill

### Metrics

| Manager Question | Answer (Metric) | Action |  
| --- | --- | --- |  
| How many times were conversations assigned to my skill, to be handled by my team of human or bot agents? | Skill Segments | By understanding the number of conversations, managers can ensure agents are taking the optimal number of conversations. This metric will be a more precise version of CCPLH. | | How many times did consumers abandon a conversation assigned to my skill? | Abandoned Segments (Skill)Abandoned Segments Rate (Skill) | Isolate abandonment reasons to the team who’s accountable - when more than one team is handling conversations (e.g. tier 1 and tier 2).Determine a skill driving abandonment and whether it’s tied to wait time. | | How many times did consumers abandon a conversation while waiting in my skill-queue? | Abandoned Segments - In Queue (Skill) | This metric enables you to determine issues arising from the length of your queues - before an agent is assigned. Action is to adjust the SLA per skill. | | How many times did my team try to reach out to a consumer but the consumer never replied? | Segments with Non Responsive Consumers (Skill) | Determine why consumers are leaving conversations. Potentially adjust your auto messages or check if the auto close is too fast. Are consumers are not getting to answer in time from your skill? | | How many times did conversations timeout, closed by my agents, or transferred to another skill, while my agents didn’t respond to the consumer? | Segments with Non Responsive Agents (Skill) | This can showcase situations where consumers are being transferred and other skill not answering - does the process of internal transfer need fixing? | | How many times did my team conduct a dialog with consumers? | Interactive Segments (Skill)Interactive Segments Rate (Skill) | More accurate view of actual number of engagements conducted by agents in this skill. | | How long are conversation owned by my agents? | Avg. Segment Duration (Skill) | Clean view into the time agents spend on the skill’s conversations. | | Skill-Queue Statistics | | How long do consumers wait in my skill-queue for an agent to be assigned? | Wait Time for Agent Assignment - Average- Max- 50th percentile- 90th percentile | Understand how long the average consumer waits in the queue and how long consumers wait before abandoning |

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

### Metrics

| Manager Question | Answer (Metric) | Action |  
| --- | --- | --- |   
| How many times were conversations assigned to each agent, human or bot? | Agent Segments | By understanding the number of conversations, managers can ensure agents are taking the optimal number of conversations. This metric will be a more precise version of CCPLH. | | How many times did consumers abandon a conversation handled by my agents? | Abandoned Segments (Agent)Abandoned Segments Rate (Agent) | Isolate abandonment reasons to each agent accountable - when more than one agent is handling conversations (e.g. tier 1 and tier 2).Determine a specific agent driving abandonment and whether it’s caused by lack of training. | | How many times did an agent try to reach out to a consumer but the consumer never replied? | Segments with Non Responsive Consumers (Agent) | Determine why consumers are leaving conversations. Potentially train your agents to give better service or change the flow of the conversation. | | How many times did conversations timeout, closed or transferred by an agent before providing a response to the consumer? | Segments with Non Responsive Agents (Agent) | This can showcase situations where agents are assigned to conversation but aren’t taking any actions on it. Is there a problem with the routing? Or is the agent refusing to deal with specific cases? | | How many times did each agent conduct a dialog with consumers? | Interactive Segments (Agent)Interactive Segments Rate (Agent) | More accurate view of actual number of engagements conducted by agents. | | How long are agents participating in conversations? | Avg. Segment Duration (Agent) | This can help to quantify the agents’ activity during conversation. | | How many responses my agents send in an average conversation? | Avg. No. of Agent Responses in Segment (Agent) | | Time to Response Statistics | | How quickly is my team responding to incoming conversations from the moment the conversation is assigned to an agent? | “Avg. Time to Response in Segment” | TTR and TTFR in a segment - provides a clearer picture of the time it takes an agent to take action after being assigned to the conversation | | I have a rather high non-responsive rate by consumers. How long does it take, on average, for my agents to respond to a consumer who was waiting in my skill-queue? | “Avg. Time to First Response in Segment” |

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