---
pagename: Goal tracker report
categoryName: Data & reporting
subCategoryName: Messaging
indicator: Messaging
subtitle: This dashboard includes raw data for every goal reached in any of the selected
  account’s campaigns
level3: Messaging Dashboards
permalink: data-reporting-messaging-messaging-dashboards-goal-tracker-report.html
isTutorial: false
date: 2019-01-21 13:20:07 +0000
isNew: false

---
The goal tracker for messaging dashboard allows brands to attribute a conversion to any of the agents who handled a consumers conversation during the window time-frame the brand considers valid for attribution. In order to take the first step in this direction, a report shall be provided to instill visibility into all agents whom which the consumer engaged with during the “Cross-Session Window” configured on the account.

This dashboard includes raw data for every goal reached in any of the selected account’s campaigns. The goal achieved event, which serves as the data source for this report, includes all goal types:
Assisting goals: interact with visitors, increase page views, and “other” (user defined URL based goals)
Conversion goals: sell product / service, generate leads, service activity complete
This dashboard is loaded with assisted conversion; which occurred after an engagement with an agent. The goal tracker does not include self serve conversion / assisting goals reached.

This dashboard also entails hour offset capabilities allowing users to show the data with an offset to match the time zone where they manage their operation.

## Page1: Conversion tracking by skill

The following page will be presented when accessing the goal tracker for messaging predefined dashboard. It provides an overview of all conversions by skill and by date for the selected selected timeframe.

![](img/goaltracker_messaging_new_1.png)

The page present the following visualizations:
1. Conversion by skill - pie chart
2. Conversation by skill and date
3. Conversation by the day of the week , by segment durations.

The page allows you to filter the data by clicking on selected skill in the visualization.

Clicking on one skill on the ‘Conversation by skill’ Pie chart will apply filtering on the rest of the visualizations in the page according to the selected skill.

Another click on the selected filter will unselect the skill and reset the filtering.

## Page2: Conversion tracking

The page provides an overview of all conversions by skill, by agent, by assignment duration for the selected timeframe.
![](img/goaltracker_messaging_new_2.png)

This page presents the following visualizations:
1. Conversion by skill  and assignment durations
2. Conversation by agent and assignment durations
3. Conversion summary by agents

The page allows you to filter the data by clicking on selected skill/agent in the visualization.
Clicking on one skill on the ‘Conversation by skill’ left visualizations will apply filtering on the rest of the visualizations in the page according to the selected skill/agent.

Another click on the selected filter will unselect the skill and reset the filtering

## Page3: Agent Conversation tracking grid

![](img/goaltracker_messaging_new_3.png)

## Retrieving cross session conversion / goal by date

The goal tracker date filter is applied to the engagement start time. A cross session conversion will therefore be logged under the date on which the messaging conversation  started. The following example demonstrates the expected behavior:

- The account’s conversion window is set to 3 days.
- On June 1st a messaging engagement took place.
- On June 3rd the consumer converted.
- On June 4th the campaign manager wishes to pull a report for all conversions achieved on June 3rd.
- To ensure this cross session conversion is included in a goal tracker report, the campaign manager needs to set the date filter in the goal tracker to go back at least as far as June 1st.

## Metrics
* **CONVERSIONS** - An Indication (1/0) whether the goal was reported as success.
* **LEAD VALUES** - The Lead value extracted from the LEAD SDE sent by the brand to LE.
* **TRANSACTION VALUES** - The Total Transaction value extracted from the Transaction SDE sent by the brand to LE.  
* **AGENT MESSAGES** - The number of messages sent by the agent in the conversation.
* **AGENT RESPONSES** - The number of responses given by the agent to a consumer. A response is a set of consecutive messages sent from a participant following a message sent from the another participant in the same conversation.
* **TIME ASSIGNED** - The time the agent participated in the conversation (measured only for the time the agent was assigned to the conversation).

## Attributes
- **AGENT ASSIGNMENT TIME** - The time the agent was assigned to or joined the conversation.
- **AGENT SEGMENT END REASON**  - The reason the agent-segment ended. Possible values: Agent Transfer - conversation was transferred to another agent, Skill Transfer - conversation was transferred to another skill, Back to Queue - conversation was returned back to queue, Takeover from agent - the conversation was taken over by a manager, Closed by agentconsumersystem - onversation was closed.
- **AGENT SEGMENT START REASON**  - The reason the agent-segment started. Possible values: Agent Transfer - conversation was transferred from another agent, Skill Transfer - conversation was transferred from another skill, Taken from Queue - conversation was taken from queue, Takeover - the conversation was taken over by the manager, Resume - conversation was resumed.
- **CAMPAIGN NAME** - The name of the campaign which was displayed to the visitor.
- **CURRENCY** - The value’s currency code. Applicable only to monetary goals.
- **ENGAGEMENT NAME** - The name of the engagement.
- **GOAL EVENT TYPE** - The type of the event which triggered the goal reached. Includes: Goal Achieved, Purchase Event, and Lead Event
- **GOAL NAME** - The name of the goal that was reached.
- **GOAL TIMESTAMP** - The timestamp of the goal that was reached.
- **GOAL TYPE** - The type of the goal reached. Includes: Generate Leads, Sell Product/Service, and Service Activity Complete
- **GROUP** - The group the agent belongs to. This attribute maintains history.
- **SERVICE ACTIVITY STATUS** - Engagement attribute - service activity status.
- **SKILL** - The agent's skill.
- **SOURCE** - Represents a specific instance of the end-point (software) from which the conversation was initiated. Supported values differ according to the software supported by the account (for example, Web, Mobile Apps, Skype Connector etc.)
- **TOPIC** - Engagement Attribute - topic (Lead).
- **USER TYPE** - Configured as part of the user details in the Conversational Cloud. Supported values: Human, System, Bot, Unassigned (for Conversations that were not assigned to an agent).
- **WEEK**- The date of the first day of the week (starting on Sunday)
- **HOUR** - Hour format: MM/DD/YYYY HH:MM:SS AMPM
- **BRAND EVENT ID** - The ID sent by the brand as part of the engagement attributes to LE. The ID is extracted from orderId in Transaction SDE, serviceId in Service Activity SDE or leadId in Lead SDE.
- **CONVERSATION** - The messaging conversation ID, mapped to the Conversation History view. For Messaging: Agent Workspace >> All Conversations >> Conversation Info >> ID
- **CONVERSATION OPEN TIME** - Conversation Open Time

## Conversions
In case the attribution is set to All, and it includes all agent types:
- Agent level: The conversion will be attributed to all participants, meaning - each agent will have +1 for the Conversions metric, even if the agent was assigned more than once to the conversations with this consumer during the cross session window.
Conversions: Bot 1, AgentA 1, AgentB 1.  

- Brand level: total conversions for the brand will be counted as the number of goals reached.
Example: a consumer starts a conversation with a bot and is later transferred to 2 more agents. After the conversation the consumer reaches a goal (purchase of 100$)
Conversions total 1.   

Transaction Total :
- Per agent: total transaction should be shown for all participants in the conversation (same value for each agent)
Revenue: Bot 100$, AgentA 100$, AgentB 100$.
- Transaction Value:  the total transaction value will show the same value as each participant.
Revenue total: 100$.   

## Metrics:

For all metrics available within this dashboard please search the Analytics Builder Data Metrics by the name of the dashboard [here](https://knowledge.liveperson.com/data-reporting-reporting-metrics.html)

## Settings:
The Goal Tracker Report fro messaging shows data based on the configuration of the Contribution Window (0,1,7,14,31) and the 'Messaging conversion attribution model' : First, Last, All, defined under the Campaign area.
First- apply to the first Agent assigned to the conversation.
Last- apply to the last Agent assigned to the conversation, exludinfging the out of the Box PCS Bot.
All- apply to all agents participating in the Conversation.

