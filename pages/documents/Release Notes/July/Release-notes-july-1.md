---
pagename: Week of July 1st
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: July
permalink: release-notes-2019-july-week-of-july-1st.html
isTutorial: false
isNew: false

---
## Messaging Conversation Segments

### Type: New functionality

<div class="tablecontainer">

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

<th>WeChat</th>

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

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

The reality of messaging conversations today is that about 50% of interactions are transferred between skills. Many of the brands are also experiencing transfers between human agents.

In situations where multiple skills\\agents are assigned to each conversation, measuring the performance (e.g. time to first response) of each skill\\agent individually requires segmenting the conversation.

LiveEngage introduces a new segmentation model to measure each individual skill\\agent performance and present accurate KPIs per skill\\agent.

These new measurements and metrics are added to the Performance dashboard for Messaging in Report Builder.

Full information can be found [here](https://knowledge.liveperson.com/data-reporting-messaging-messaging-conversation-segments.html).

This new feature is enabled OOTB and is available for all Report Builder enabled customers.

### Skill segments

The following metrics and attributes are added to a new panel named ‘Skill segment’ under the ‘Brand Data’ sheet

| Metric | Definition |
| --- | --- |
| Skill Segments | The number of times conversations were assigned to a skill.Measured for conversations that were opened to the skill or transferred to it.A conversation may be assigned more than once to a given skill. |
| Abandoned Segments (Skill) | The number of conversations closed by a consumer which included no agent message. Measured during the last segment of the conversation, and is unaffected by the agent activity from previous segments. |
| Abandoned Segments Rate (Skill) | The percentage of abandoned segments out of the total segments assigned to the skill.Formula: Abandoned Segments (Skill) / Skill Segments |
| Abandoned Segments - In Queue (Skill) | The number of conversations closed by a consumer which included no agent message since no agent was assigned. Measured during the last skill-segment of the conversation, and is unaffected by the agent activity from previous skill-segments. |
| Segments with Non Responsive Consumers (Skill) | The number of skill-segments which ended in a transfer to another skill or closed with no response from the consumer to an agent’s message. |
| Segments with Non Responsive Agents (Skill) | The number of skill-segments which ended in a transfer to another skill or closed by agent/system with no message from an agent. |
| Interactive Segments (Skill) | The number of skill-segments with at least one response from a consumer to a skilled-agent’s message.Measured from the first message sent by an agent in a new skill-segment. |
| Interactive Segments Rate (Skill) | The percentage of interactive segments out of all the segments assigned to the skill.Formula: Interactive Segments (Skill) / Skill Segments |
| Avg. Segment Duration (Skill) | Average duration of skill-segments. Measured from the time the conversation was assigned to the skill until it was closed or transferred to another skill. |

| Attribute | Definition |
| --- | --- |
| Skill Segment start reason | Possible values:New conversationSkill transferAgent transfer from another skillResume |
| Skill Segment end reason | Possible values:Closed by agentClosed by consumerClosed by systemSkill transferAgent transfer to another skill |

### Agent Segments

The following metrics and attributes are added to a new panel named ‘Agent segment’ under the ‘Agent Data’ sheet:

| Metric | Definition |
| --- | --- |
| Agent Segments | The number of times conversations were assigned to an agent.A conversation may be assigned more than once to a given agent. |
| Agent Assignment Rate | The percentage of assignments to agent out of the total assignments to the agent’s skill.Formula: Agent Segments / Assignments to Skill |
| AVG. No. of Agent Responses in Segment (Agent) | Average number of responses provided by agent during an agent-segment |
| AVG. No. of Consumer Responses in Segment (Agent) | Average number of responses provided by consumers to an agent's message during an agent-segment |
| Avg. Segment Duration (Agent) | Average duration of an agent-segment. Measured from the time the conversation was assigned to the agent until it was closed or transferred. Attributed to the assigned agent, group and skill. |
| Interactive Segments (Agent) | The number of agent-segments which included at least one response from the consumer to an agent’s message. |
| Interactive Segments Rate (Agent) | The percentage of interactive segments out of the total segments assigned to the agent.Formula: Interactive Segments (Agent) / Agent Segments |
| Abandoned Segments (Agent) | The number of conversations closed by a consumer which included no agent message. Measured during the last agent-segment of the conversation, and is unaffected by the agent activity from previous segments. Attributed to the last agent assigned to the conversation. |
| Abandoned Segments Rate (Agent) | The percentage of abandoned segments out of the total segments assigned to the agent.Formula:Abandoned Segments (Agent) / Agent Segments |
| Segments with Non Responsive Consumers (Agent) | The number of closed conversations which included no consumer response to an agent's message. Measured during the last agent-segment of the conversation. |
| Segments with Non Responsive Agents (Agent) | The number of agent-segments which ended in a transfer or closed by agent or system with no message from an agent. |
| Avg. Time to Response in Segment | The average time taken by an agent to respond to the consumer in an agent-segment (an agent segment is defined as the part of the conversation in which the agent was assigned. Measured from the time the agent is assigned until s\\he is not longer assigned). |
| Avg. Time to First Response in Segment | The average time taken by an agent to respond for the first time to the consumer in an agent-segment (an agent segment is defined as the part of the conversation in which the agent was assigned. Measured from the time the agent is assigned until s\\he is not longer assigned). |

| Attribute | Definition |
| --- | --- |
| Agent Segment start reason | Possible values:New conversationAgent transferSkill transferTaken from QueueTakeoverResume |
| Agent Segment end reason | Possible values:Closed by agentClosed by consumerClosed by systemAgent transferSkill transferBack to QueueTakeover from agent |

Please note:

* Metrics include only actions of the assigned agents - responses given to the consumer by participating agents who are not the assigned agent are omitted from the calculations.
* Messages provided by the Controller Bot (system messages) are omitted from the calculations.
* In case of resumed conversations - the first message sent by the agent after resuming a conversation is not included in the averages
* Takeovers - the first message sent by the manager after taking over a conversation is not included in the averages

## Add Timezone to Survey dashboard for Live Chat in Report Builder

### Type:  New functionality

<div class="tablecontainer">

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

<th>WeChat</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

Timezone support is added to the Survey dashboard for Live Chat.  
Enterprise brands often have a global operation with contact centers in different regions. Each contact center is managed locally and by a global team.

To support both local agent managers in each region and global teams situated in the account’s timezone, Report Builder users will be able to change the time zone of the dashboard to analyze performance in their local time.

Before running a dashboard, the user is presented with a selection of time offsets from the timezone of the defined on the LiveEngage account. This causes the data to be presented in the local time zone of the user.

This new feature is enabled OOTB and is available for all Report Builder enabled customers.

**Please note:** 

* Time offset is only possible for full hours. This means that users that are in time zones that are variations of half hours from GMT (such as certain places in India), will need to choose the full hour before or after. Half hour or quarter hour increments will not be supported.
* The drop down window displaying the time offsets available for the user to choose from, can only display 30 entries. Since there are 48 variations from GMT, there are two ‘pages’ of the dropdown.
* To support the time shift capability, the time related attributes have been altered to show an hour level granularity.

  For user with customization permissions, the attributes will now appear with the derived (fx) icon with the naming convention of the previous date/time related attributes. The naming convention of the previous attributes was altered to be “_xxx__old” and moved out of the predefined attribute list for users with customization permissions to access.
* There should be no impact or change to existing user copies. User copies created prior to this release will not display the offset functionality and therefore will not have the changes to the attributes mentioned in the note above.

![](/img/RB3.3-2.png)