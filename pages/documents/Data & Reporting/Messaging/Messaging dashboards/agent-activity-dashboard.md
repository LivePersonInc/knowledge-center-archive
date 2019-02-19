---
pagename: Agent activity dashboard
categoryName: Data & reporting
subCategoryName: Messaging
indicator: both
subtitle: This dashboard includes operational metrics used to analyze agent activity
  and performance
level3: Messaging Dashboards
permalink: data-reporting-messaging-messaging-dashboards-agent-activity-dashboard.html
isTutorial: false
date: 2019-01-21 13:17:48 +0000
isNew: false

---
This dashboard includes operational metrics used to analyze agent activity and performance. This dashboard also entails hour offset capabilities allowing users to show the data with an offset to match the time zone where they manage their operation.

**Primary Datasets:** Agent activity, conversions, engagements, surveys

**Primary Filters:** Agent, agent group, skill

**Minimum timeframe:** Hourly

## Main panel: agent activity dashboard

The following default panel will be presented when accessing the agent activity predefined dashboard. It provides an overview of the performance of all agents active on the account.

![](/img/agent-activity-dashboard 1.png)

Image 1 - Agent activity dashboard main panel

Visualizations:

| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| --- | --- | --- | --- |
| Logged in time(pie chart) | LOGGED IN TIME | AGENT STATUS | Hover to view the % contribution of the angle |
| Away Time(pie chart) | AWAY | AWAY REASON | Hover to view the duration of a specific away reason and the % contribution of the angle |
| Engaged duration per state (bar chart) | ENGAGED TIME | DATE | Filter by Agent Status (attribute) |
| NON ENGAGED TIME |  |  |  |
| Engagements per hour(bar chart) | INTERACTIVE ENGAGEMENTS PER HOUR | DATE | N/A |
| Concurrency(line chart) | CONC. ENGAGED | DATE | N/A |
| CONC. LABOR |  |  |  |
| CONC. LOGGED IN |  |  |  |
| Conversions(bar chart) | IN SESSION CONVERSIONS | DATE | N/A |
| CROSS SESSION CONVERSIONS |  |  |  |
| Revenue(bar chart) | IN SESSION REVENUE | DATE | N/A |
| CROSS SESSION REVENUE |  |  |  |

## Panel 2: Agent activity grid

The following grid view presents information available on a daily basis which can be exported to excel for further manipulation of the data, primarily by agent groups and day of the week.

![](/img/agent-activity-dashboard2.png)

Image 2 - agent activity grid (panel 2)

**Rows (attributes):** DATE, DAY OF THE WEEK, GROUP, AGENT

**Columns (metrics):**

 1. LOGGED IN TIME
 2. ONLINE / AWAY / BACK SOON (time)
 3. ONLINE / AWAY / BACK SOON RATE
 4. ONLINE / AWAY / BACK SOON TIME ENGAGED
 5. ENGAGED / NON ENGAGED TIME
 6. ENGAGED / NON ENGAGED RATE
 7. CUMULATIVE ENGAGED CHAT TIME
 8. LABOR TIME / RATE
 9. INTERACTIVE ENGAGEMENTS PER HOUR
10. CONC. LOGGED-IN / LABOR / ENGAGED
11. CONVERSIONS
12. IN SESSION / CROSS SESSION CONVERSIONS
13. REVENUE
14. IN SESSION / CROSS SESSION REVENUE
15. INTERACTIVE CHATS
16. AVG. INTERACTIVE CHAT LENGTH
17. CONNECTED CHATS
18. NO. OF COBROWSE INTERACTIVE SESSIONS (CHAT)
19. NO. OF SECURE FORM (PCI) SUBMITTED (CHAT)

## Panel 3: Agent performance

The following grid view presents agent performance metrics for the entire duration of the time selected in the date filter available on the dashboard. The grid data may be exported to excel to manipulate the data further, such as by grouping the agents into custom groups based on their performance.

![](/img/agent-activity-dashboard3.png)

Image 3 - Agent performance (panel 3)

**Rows (attributes):** AGENT

**Columns (metrics):**

1. CSAT SCORE
2. ENGAGED TIME RATE
3. INTERACTIVE ENGAGEMENT PER HOUR
4. AVG. INTERACTIVE CHAT LENGTH
5. CONC. ENGAGED