---
pagename: Messaging performance dashboard
categoryName: Data & reporting
subCategoryName: Messaging
indicator: messaging
subtitle: This predefined dashboard includes operational data for all messaging channels.
level3Name: Messaging dashboards
permalink: data-&-reporting-messaging-messaging-dashboards-messaging-performance-dashboard.html
isTutorial: false
level3: Messaging Dashboards
date: 2019-01-15 16:29:49 +0200
published: false

---
## Agent level data sheet

* The predefined dashboard includes operational data for all messaging channels.
* The primary datasets: Agent and consumer messaging activity.
* Minimum timeframe: Hourly
* Primary Filters: _agent, agent group, skill, source type_

## Main panel: agent performance summary

The following panel will be presented when accessing the messaging performance predefined dashboard. It consists of an analysis of every messaging agent’s activity and performance. The default view summarizes the data for all agents, and offers dynamic filtering with the ability to select any of the agents on the list to show only their individual performance.

![](/img/mpd1.png)

| Graph name (type) | Vertical / angle (metrics) | Horizontal / color (attributes) | Additional functions |
| --- | --- | --- | --- |
| Agent State Activity (pie chart) | Away rate / back soon rate / online rate | N/A | Yes* |
| Activity State Breakdown (pie chart) | Away | away reason | Yes* |
| Agent Response Times (line chart) | AVG. RESPONSE TIME BY AGENT / AVG. TIME TO AGENT FIRST RESPONSE | N/A | No |
| Agent KPI Trend (line chart) | MCS / CSAT SCORE Date | No |  |
| Agent KPI Trend (bar charts) | HANDLED CONVERSATIONS (bar chart) / AVG. CONVERSATION DURATION (line chart - secondary axis) / TOTAL NO. OF TRANSFERS (bar chart) | Date | No |

### **Top data bar (Grid)**

**Columns (Metrics):**

1. LOGGED IN TIME
2. ONLINE / AWAY / BACK SOON (time)

### **Overview by Agent (Grid)**

**Rows (Attributes):** AGENT

**Columns (Metrics):**

1. HANDLED CONVERSATIONS
2. MCS
3. CSAT SCORE
4. AVG. RESPONSE TIME BY AGENT
5. LOGGED IN TIME
6. AGENT RESPONSES PER CLOSED CONVERSATION
7. AVG. CONVERSATION DURATION

**Additional Function:** This grid dynamically controls the other visualizations on this panel. When clicking on an agent from the list presented in the grid, the data displayed in the other visualizations refreshes to reflect only the selected agent’s activity and performance.

## Panel 2: Consumer and Agent Response Activity by Day of the Week

The following panel provides an analysis of the consumer demand and agent response. The data is aggregated by day of the week. Selecting a specific day in the week dynamically filters the top data bar high level metrics.

![](/img/mpd2.png)

_Image 2: Consumer and Agent Response Activity (panel 2)_

| Graph name (type) | Vertical / angle (metrics) | Horizontal / color (attributes) | Additional functions |
| --- | --- | --- | --- |
| Consumer Responses (Demand) vs Agent Responses (Supply), by Day of Week, by Hour | TOTAL NO. OF AGENT RESPONSES / TOTAL NO. OF CONSUMER RESPONSES | DAY OF WEEK, HOUR OF DAY | No |

**Top data bar (Grid)**

**Columns (Metrics):**

1. LOGGED IN TIME
2. ONLINE / AWAY / BACK SOON (time)

**Overview by Agent (Grid)**

**Rows (Attributes):** Day of Week

**Columns (Metrics):**

1. MCS
2. CSAT SCORE
3. AVG. RESPONSE TIME BY AGENT
4. LOGGED IN TIME
5. TOTAL NO. OF AGENT RESPONSES
6. TOTAL NO. OF CONSUMER RESPONSES

**Additional Function:** This grid dynamically controls the top data bar. When clicking on a specific day of the week from the list presented in the grid, the performance data displayed will refresh to reflect the selected day.

## Panel 3: Agent Level Data Export

The following panel provides an exportable grid which includes agent-related activity and performance metrics.

**![](https://lh3.googleusercontent.com/rhXhRmh8RU_i2s1X2aOn_IhtLitx_u3EVzSjrf8HfDJTpLvUFLAtTz90d0JrYaiLK-op3t3aNEVJlL6YnQy2-mOS1_xIm6oBb5IdCOR2uNhMf3S-IZSL-c8q1y5kFJdgiXNVuvC5 =624x356)**

Image 4.2 - Agent level data export grid (panel 3)

**Rows (Attributes):** DATE, GROUP, AGENT, SKILL

**Columns (Metrics):**

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

Primary Filters: Skill, Source (App, Web, Agent, SMS, Facebook etc.)

The main panel provides an executive view of the messaging program performance. It summarizes daily activity and allows the user to choose a specific source from which conversations are generated.

![](https://lh3.googleusercontent.com/IoNBuJ_1hIdX6bx8NgU0h0QL_t0EWi-jbQYoANzvWyN7p2PLC4v0W0vAsiM0oM6jcVavwVVy95bXii7ac2-1Ns3AaTYAVYPpwocd9He6__VJu5Qtukn63V26jghgNAugs1PF3uT9 "rand messaging summary main panel" =624x359)

table

**Traffic Source (Grid)**

**Rows (Attributes):** Source

**Additional function:** This grid acts as a selector to filter the visualizations in this panel. The user can select a specific source or de-select to return to the general view.

**Top data bar (Grid)**

**Columns (Metrics):**

1. ACTIVE CONSUMERS
2. AVG. RESPONSE TIME BY AGENT
3. MCS
4. CSAT SCORE

**Brand Performance Detail (Grid)**

**Rows (Attributes):** DATE

**Columns (Metrics):**

1. **Conversation Detail (section header)**
   1. ACTIVE CONSUMERS
   2. NO. OF OPENED / CLOSED CONVERSATIONS
   3. AVG. CONVERSATION DURATION
2. **Conversation Operations (section header)**
   1. AVG. RESPONSE TIME BY AGENT
   2. AVG. CONSUMER RESPONSE TIME
   3. AVG. TIME TO AGENT FIRST RESPONSE
   4. TOTAL NO. OF AGENT / CONSUMER RESPONSES
3. **Survey (section header)**
   1. MCS / CSAT SCORE
4. **Agent Activity (section header)**
   1. LOGGED IN TIME
   2. ONLINE / AWAY / BACK SOON (time)
   3. ONLINE / AWAY / BACK SOON RATE

## Panel 2: Brand Level Data Export

Export the following grid to create custom visualizations and generate calculations from the data available in this grid view.

### **![](https://lh3.googleusercontent.com/F6Yco2c2Z9QYkGvLqP3TObgYaqU7ZCGQoy5i7UzYMKLXHs3TjPQvfTveJEVGgEYvRrAMgJ3Q-yIV9rN7G4Uelq9TeRFNu1_L4zcS6fDLbB0_U7q86VHmWkgdApNJJK2M6mv0Ee8U =624x349)**

**Rows (Attributes):** DATE, SKILL

**Columns (Metrics):**

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

When computing a messaging related metric that should allow filtering by an Agent or Skill, an attribution model is applied. This to resolve the many-to-many relationship which is inherent in the Messaging channel in which conversations may change hands and skills during their lifetime.

| Metric Name | Attribution to Agent | Attribution to Skill |
| --- | --- | --- |
| AVG. RESPONSE TIME BY AGENT | To the responding agent | To the skill assigned to the conversation when the response was given |