---
pagename: Performance dashboard for messaging
categoryName: Data & reporting
subCategoryName: Messaging
indicator: messaging
subtitle: This predefined dashboard includes operational and business data for all
  messaging channels
level3: Messaging Dashboards
permalink: data-reporting-messaging-messaging-dashboards-performance-dashboard-for-messaging.html
isTutorial: false
date: '2019-01-15T14:29:49.000+00:00'

---
## Agent level data sheet

The predefined dashboard includes operational and business data for all messaging channels

* The primary datasets: agent and consumer messaging activity
* Minimum timeframe: hourly
* Primary Filters: agent, agent group, skill, source type

## Main panel: agent performance summary

The following panel will be presented when accessing the messaging performance predefined dashboard. It consists of an analysis of every messaging agent’s activity and performance. The default view summarizes the data for all agents, and offers dynamic filtering with the ability to select any of the agents on the list to show only their individual performance.

_Agent performance summary_

![](/img/Performance-Dashboard-messaging-summary.jpg)

| Graph name (type) | Vertical / angle (metrics) | Horizontal / color (attributes) |
| --- | --- | --- |
| Agent State Activity (pie chart) | Away rate / back soon rate / online rate | N/A |
| Activity State Breakdown (pie chart) | Away | away reason |
| Agent Response Times (line chart) | AVG. RESPONSE TIME BY AGENT / AVG. TIME TO AGENT FIRST RESPONSE | N/A |
| Agent KPI Trend (line chart) | MCS / CSAT SCORE Date | No |
| Agent KPI Trend (bar charts) | HANDLED CONVERSATIONS (bar chart) / AVG. CONVERSATION DURATION (line chart - secondary axis) / TOTAL NO. OF TRANSFERS (bar chart) | Date |

### Top data bar (grid)

**Columns (metrics):**

1. LOGGED IN TIME
2. ONLINE / AWAY / BACK SOON (time)

### Overview by agent (grid)

**Rows (attributes):** AGENT

**Columns (metrics):**

1. HANDLED CONVERSATIONS
2. MCS
3. CSAT SCORE
4. AVG. RESPONSE TIME BY AGENT
5. LOGGED IN TIME
6. AGENT RESPONSES PER CLOSED CONVERSATION
7. AVG. CONVERSATION DURATION

**Additional function:** This grid dynamically controls the other visualizations on this panel. When clicking on an agent from the list presented in the grid, the data displayed in the other visualizations refreshes to reflect only the selected agent’s activity and performance.

## Panel 2: Consumer and agent response activity by day of the week

The following panel provides an analysis of the consumer demand and agent response. The data is aggregated by day of the week. Selecting a specific day in the week dynamically filters the top data bar high level metrics.

![](/img/Performance-Dashboard-messaging-activity-breakdown.jpg)

| Graph name (type) | Vertical / angle (metrics) | Horizontal / color (attributes) | Additional functions |
| --- | --- | --- | --- |
| Consumer Responses (Demand) vs Agent Responses (Supply), by Day of Week, by Hour | TOTAL NO. OF AGENT RESPONSES / TOTAL NO. OF CONSUMER RESPONSES | DAY OF WEEK, HOUR OF DAY | No |

### Top data bar (grid)

**Columns (metrics):**

1. LOGGED IN TIME
2. ONLINE / AWAY / BACK SOON (time)

### Overview by agent (grid)

**Rows (attributes):** Day of week

**Columns (metrics):**

1. MCS
2. CSAT SCORE
3. AVG. RESPONSE TIME BY AGENT
4. LOGGED IN TIME
5. TOTAL NO. OF AGENT RESPONSES
6. TOTAL NO. OF CONSUMER RESPONSES

**Additional function:** This grid dynamically controls the top data bar. When clicking on a specific day of the week from the list presented in the grid, the performance data displayed will refresh to reflect the selected day.

## Panel 3: agent level data export

The following panel provides an exportable grid which includes agent related activity and performance metrics.

_Agent level data export grid (panel 3)_

![](/img/Performance-Dashboard-messaging-brand-level-data-data-export.jpg)

**Rows (attributes):** DATE, GROUP, AGENT, SKILL

**Columns (metrics):**

 1. NO. OF CONVERSATIONS OPENED / CLOSED BY AGENT
 2. AVG. RESPONSE TIME BY AGENT
 3. AVG. TIME TO AGENT FIRST RESPONSE
 4. TOTAL NO. OF AGENT RESPONSES
 5. TOTAL NO. OF MESSAGES SENT BY AGENT
 6. MCS
 7. CSAT SCORE
 8. TOTAL NO. OF TRANSFERS
 9. LOGGED IN TIME
10. ONLINE / AWAY / BACK SOON (time)
11. ONLINE / AWAY/ BACK SOON RATE

## Brand level data sheet - main panel

**Primary Filters:** Skill, source (App, web, agent, SMS, Facebook etc.)

The main panel provides an executive view of the messaging program performance. It summarizes daily activity and allows the user to choose a specific source from which conversations are generated.

_Brand messaging summary main panel_

![](/img/RB_Brand_Level_Data1.png)

| Graph name (type) | Vertical / angle (metrics) | Horizontal / color (attributes) | Additional functions |
| --- | --- | --- | --- |
| Avg. Response Time vs MCS (bar chart) | MCS / AVG RESPONSE TIME BY AGENT | Date | Dynamically filtered by “Traffic Source” selector grid |
| Login hrs vs Conversations Per Login Hr (bar chart) | HANDLED CONVERSATIONS PER LOGIN HOUR / LOGGED IN TIME | Date | Dynamically filtered by “Traffic Source” selector grid |

### Traffic source (grid)

**Rows (attributes):** Source

**Additional function:** This grid acts as a selector to filter the visualizations in this panel. The user can select a specific source or de-select to return to the general view.

### Top data bar (grid)

**Columns (metrics):**

1. ACTIVE CONSUMERS
2. AVG. RESPONSE TIME BY AGENT
3. MCS
4. CSAT SCORE

**Brand performance detail (grid)**

**Rows (attributes):** DATE

**Columns (metrics):**

1. **Conversation detail (section header)**
   1. ACTIVE CONSUMERS
   2. NO. OF OPENED / CLOSED CONVERSATIONS
   3. AVG. CONVERSATION DURATION
2. **Conversation operations (section header)**
   1. AVG. RESPONSE TIME BY AGENT
   2. AVG. CONSUMER RESPONSE TIME
   3. AVG. TIME TO AGENT FIRST RESPONSE
   4. TOTAL NO. OF AGENT / CONSUMER RESPONSES
3. **Survey (section header)**
   1. MCS / CSAT SCORE
4. **Agent activity (section header)**
   1. LOGGED IN TIME
   2. ONLINE / AWAY / BACK SOON (time)
   3. ONLINE / AWAY / BACK SOON RATE

## Brand level data export

Export the following grid to create custom visualizations and generate calculations from the data available in this grid view.

Brand level data export (panel 2)

![](/img/Performance-Dashboard-messaging-brand-level-data-export.jpg)

**Rows (attributes):** DATE, SKILL

**Columns (metrics):**

 1. ACTIVE CONSUMERS
 2. NO. OF OPENED / CLOSED CONVERSATIONS
 3. AVG. CONVERSATION DURATION
 4. AVG. RESPONSE TIME BY AGENT
 5. AVG. CONSUMER RESPONSE TIME
 6. AVG. TIME TO AGENT FIRST RESPONSE
 7. TOTAL NO. OF AGENT / CONSUMER RESPONSES
 8. TOTAL NO. OF MESSAGES SENT BY AGENT / CONSUMER
 9. TOTAL NO. OF TRANSFERS
10. MCS
11. CSAT SCORE

## Messaging metrics attribution to agent and skill

When computing a messaging related metric that should allow filtering by an agent or skill, an attribution model is applied. This is to resolve the inherent issue in messaging channels in which conversations may change hands and skills during their lifetime.

| Metric Name | Attribution to Agent | Attribution to Skill |
| --- | --- | --- |
| AVG. RESPONSE TIME BY AGENT | To the responding agent | To the skill assigned to the conversation when the response was given |
| AVG. RESPONSE TIME BY AGENT | To the responding agent | To the skill assigned to the conversation when the response was given |
| AVG. CONSUMER RESPONSE TIME | Not assigned to an agent | To the skill assigned to the conversation when the response was given |
| AVG. TIME TO AGENT FIRST RESPONSE | To the responding agent | To the skill assigned to the conversation when the response was given |
| MCS | To the last agent assigned to the conversation | To the last skill assigned to the conversation |
| CSAT SCORE | To the last agent assigned to the conversation | To the last skill assigned to the conversation |
| HANDLED CONVERSATIONS | To the agent who sent a message in the conversation, resumed it, or closed it | Skill assigned to the conversation in at least one of the events this metric calculates |
| TOTAL NO. OF TRANSFERS | To the agent who transferred the conversation | Skill assigned to the conversation when it was transferred out (origin skill) |
| AGENT RESPONSES PER CLOSED CONVERSATION | To the responding agent | Numerator - To the skill assigned to the conversation when the response was given / Denominator - To the last skill assigned to the conversation |
| TOTAL NO. OF AGENT RESPONSES | To the responding agent | To the skill assigned to the conversation when the response was given |
| TOTAL NO. OF CONSUMER RESPONSES | Not assigned to an agent | To the skill assigned to the conversation when the response was given |
| TOTAL NO. OF MESSAGES SENT BY AGENT | To the agent who sent the message | To the skill assigned to the conversation when the message was sent |
| TOTAL NO. OF MESSAGES SENT BY CONSUMER | Not assigned to an agent | To the skill assigned to the conversation when the message was sent |
| HANDLED CONVERSATIONS PER LOGIN HOUR | Not assigned to an agent | See logic for “NO. OF HANDLED CONVERSATIONS” |
| ACTIVE CONSUMERS | Not assigned to an agent | Not assigned to a skill |
| NO. OF OPENED CONVERSATIONS | To the agent who was assigned to the conversation at the time it was opened | To the skill the conversation was assigned to when it was opened |
| NO. OF CONVERSATIONS OPENED BY AGENT | To the agent who opened (resumed) the conversation | To the skill assigned to the conversation at the time the agent resumed it |
| NO. OF CONVERSATIONS CLOSED BY AGENT | To the user who closed the conversations (agent or agent manager) | To the skill assigned to the conversation at the time it was closed |
| NO. OF CONVERSATIONS CLOSED BY CONSUMER | The last agent assigned to the conversation | To the last skill assigned to the conversation |
| NO. OF CONVERSATIONS CLOSED BY SYSTEM | The last agent assigned to the conversation | To the last skill assigned to the conversation |
| AVG. CONVERSATION DURATION | To the last agent assigned to the conversation | To the last skill assigned to the conversation |
| INTERACTIVE / NON INTERACTIVE / ABANDONED CONVERSATIONS | To the last agent assigned to the conversation | To the last skill assigned to the conversation |

## Predefined grid

The grid spreads out all the relevant metrics in a granular view so any member on the account may easily download the grid or receive scheduled copies to their email.

Perform the analysis and customization you need using an offline copy, in excel using the complete grid. You can choose the document type (daily/monthly) based on your needed timeframe. The daily grid gives daily aggregations for all the [metrics](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html#documenttitlecontainer) while the monthly grid offers the corresponding aggregations at the monthly level. The data is presented at the brand, campaign and engagement level.

## Metrics

For all metrics available within this dashboard please search the Analytics Builder Data Metrics by the name of the dashboard [here](https://knowledge.liveperson.com/data-reporting-reporting-metrics.html)
