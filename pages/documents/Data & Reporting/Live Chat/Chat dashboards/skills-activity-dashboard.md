---
pagename: Skills activity dashboard
categoryName: Data & reporting
subCategoryName: Live chat
indicator: chat
subtitle: 'This dashboard includes metrics used to analyze skill queue performance '
level3: Chat Dashboards
permalink: data-reporting-live-chat-chat-dashboards-skills-activity-dashboard.html
isTutorial: false
date: 2019-01-21 12:55:50 +0000
isNew: false

---
This dashboard includes metrics used to analyze skill queue performance. This dashboard also entails hour offset capabilities allowing users to show the data with an offset to match the time zone where they manage their operation.

**Primary datasets:** Queue health, engagements, surveys

**Primary filters:** Skill, agent group

**Minimum timeframe:** Hourly

## Main panel: skills activity dashboard

The following panel will be presented when accessing the skills activity predefined dashboard. It provides an overview of the performance of all skills associated with active agents on the account.

![](/img/skillsact1 (1).png)

Image 1 - Skill activity dashboard main panel

**Visualizations:**
| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| --- | --- | --- | --- |
| Eng. Volume(area chart) | REQUESTED CHATS / CONNECTED CHATS / INTERACTIVE CHATS | DATE | N/A |
| Average engagement length (bar chart) | CSAT / AVG. INTERACTIVE CHAT LENGTH | DATE | N/A |
| Abandon Rate (bar chart) | ABANDONED CHAT RATE | DATE | N/A |
| Average wait time (line chart) | AVG. TIME TO ABANDON CHAT / AVG. TIME TO ANSWER CHAT / CSAT | DATE | N/A |

## Panel 2: Skill Activity Grid

| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| --- | --- | --- | --- |
| Eng. Volume(area chart) | REQUESTED CHATS | DATE | N/A |

## Panel two: skills activity grid

The following grid view presents information available on a daily basis which can be exported to excel for further manipulation of the data, primarily by skills, agent groups, and day of the week.

![](/img/skills-activity-dashboard-2.png)

Image 2 - Skills activity grid (panel 2)

**Rows (attributes):** Date, day of week, group, skill

**Columns (metrics):**

1. REQUESTED / CONNECTED / INTERACTIVE CHATS
2. INTERACTIVE CHAT RATE
3. ABANDONED CHATS
4. ABANDONED CHAT RATE
5. AVG. INTERACTIVE CHAT LENGTH
6. AVG. TIME TO ABANDON / ANSWER CHAT
7. MAX TIME TO ABANDON / ANSWER CHAT

{: .notice}  
This dashboard is also available in BI.

## Predefined grid

The grid spreads out all the relevant metrics in a granular view so any member on the account may easily download the grid or receive scheduled copies to their email.

Perform the analysis and customization you need using an offline copy, in excel using the complete grid. You can choose the document type (daily/monthly) based on your needed timeframe. The daily grid gives daily aggregations for all the metrics while the monthly grid offers the corresponding aggregations at the monthly level. The data is presented at the brand, campaign and engagement level.

## Metrics

For all metrics available within this dashboard please search the Report Builder Data Metrics by the name of the dashboard in the [Developers Community.](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html#documenttitlecontainer)

![](/img/General-Data-metrics-table.png)