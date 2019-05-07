---
pagename: Week of May 13th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: Release Notes
level3: May
permalink: release-notes-2019-may-week-of-may-13th.html
isTutorial: false
isNew: false
published: false

---
## Messaging Agent Segments

### Type: Enhancement

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>N/A</td>

<td>No</td>

</tr>

</tbody>

</table>

As part of the Messaging Operational API, a new method will be introduced to allow retrieval of operational data on the efficiency of agents.

This method returns data on metrics which are calculated for each agent separately. The logic behind these metrics is based on segments of Messaging conversations, since one conversation can potentially go through many different agents in its lifetime.

An agent-segment begins when an agent is assigned to a messaging conversation and once the agent changes (for example, the conversation has been transferred or closed) the segment ends. A segment of a conversation is determined based on the agent assigned to it.  
  
A single conversation may include more than one segment for each participating agent. This happens when the conversation is transferred to another agent and back to the original agent, for example.

**Details**

Aggregation levels - the data can be retrieved per agent, group and skill.

Filters - the data can be filtered by:

* User type - human or bot
* Source - Web, Facebook, SMS etc
* Response metrics - as default, all metrics are returned in the response. The response can also be filtered to return specific metrics.

**Metrics**
| Metric | Definition |
| --- | --- |
| Total Agent Conversation Segments | The number of times conversations were assigned to an agent. A conversation may be assigned more than once to a given agent. |
| Avg. Agent Responses in Agent Segment | Average number of responses provided by agent during an agent-segment |
| Avg. Agent Segment Duration | Average duration of an agent-segment. Measured from the time the conversation was assigned to the agent until it was closed or transferred. Attributed to the assigned agent, group and skill. |
| Interactive Agent Segments | The number of agent-segments which ended in a transfer to another agent or closed with at least one response from a consumer to an agent’s message. Measured from the first message sent by an agent in a new agent-segment. |
| Agent Segments Abandoned By Consumers | The number of conversations closed by a consumer which included no agent message. Measured during the last agent-segment of the conversation, and is unaffected by the agent activity from previous segments. Attributed to the last agent assigned to the conversation. |
| Agent Segments With Non Responsive eConsumers | The number of agent-segments which where closed with no response from the consumer to an agent’s message. |
| Agent Segments With Non Responsive Agents | The number of agent-segments which ended in a transfer to another skill or closed by an agent or system (“auto close”), with no message from an agent. |
| Avg. Time to First Agent Message from Agent Assignment | The time on average taken by an agent to respond to a consumer from the time the agent is assigned to the conversation. Calculated only for the first agent message sent in a new conversation or after transfer. |
| Avg. Time to First Agent Message from Agent Assignment - after Transfer | The time on average taken by an agent to respond to a consumer from the time the agent is assigned to the conversation. Calculated only for the first agent message sent after the conversation was transferred. |
| Avg. Time to First Agent Message from Agent Assignment -New Conversation | The time on average taken by an agent to respond to a consumer from the time the agent is assigned to the conversation. Calculated only for the first agent message sent after the conversation started. |
| Avg. Time to Response From Agent Assignment | The time on average taken by an agent to respond to consumer message from the time the agent is assigned to the conversation. |