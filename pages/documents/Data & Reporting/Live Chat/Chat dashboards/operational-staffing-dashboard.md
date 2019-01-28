---
pagename: 'Operational & staffing dashboard'
categoryName: Data & reporting
subCategoryName: Live chat
indicator: chat
subtitle: This dashboard includes operational metrics used to analyze agent activity
  and performance with the ability to monitor from both supply and demand perspectives
level3: Chat Dashboards
permalink: data-reporting-live-chat-chat-dashboards-operational-staffing-dashboard.html
isTutorial: false
date: 2019-01-21 14:11:34 +0200

---
This dashboard includes operational metrics used to analyze agent activity and performance. It provides brands the ability to monitor from both supply and demand perspective, their chat operation at the Line of Business (LOB), skill, campaign and engagement level.

**Primary Datasets:** Exposures hourly, post connect hourly, queue health hourly, survey hourly  
**Minimum timeframe:** Hourly

## Demand analysis sheet

**Primary filters:** Skill, LOB

### Main Panel: Demand Summary

The following panel will be presented when accessing the operational & staffing predefined dashboard. It provides an overview of demand analysis. The dashboard aggregates data by the chosen skills to show chat funnel metrics and present visualizations of the funnel in two levels; comparing prospects the exposures and the showing the requested chat funnel to connected chats.

![](/img/opstaff1.png)

**Top data bar (grid)**

**Columns (metrics):**

1. CHAT PROSPECTS
2. CHAT EXPOSED
3. EXPOSED RATE
4. REQUESTED CHATS
5. CLICK RATE
6. CONNECTED CHATS
7. CONNECTED CHAT RATE
8. INTERACTIVE CHART
9. INTERACTIVE CHAT RATE

**Visualizations:**

| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| --- | --- | --- | --- |
| Prospects vs. Exposure by day (Area Chart) | CHAT PROSPECTS (SKILL) For FxCHAT EXPOSED (SKILL) For Fx | DAY OF THE WEEK = A | Hover to view the data points per hour of the dayDynamically reflects the aggregated selected skill’s data as chosen in the filter. |

### Panel two: Demand processing

The following panel will be presented when accessing the operational & staffing predefined dashboard. It provides an overview of the demand analysis. The dashboard aggregates data to the campaign and engagement level and shows the funnel metrics in a grid view as well as through a day by day trend view (bar chart)

![](/img/opstaff2.png)

**Left data table (grid) “Campaign”**

**Columns (metrics):**

1. CAMPAIGN NAME
2. INTERACTIVE CHATS

**Right data table (Grid) “Engagement breakdown”**

**Columns (metrics):**

1. ENGAGEMENT NAME
2. CHAT PROSPECTS (SKILL ENG)
3. REQUESTED CHATS (SKILL ENG)
4. CONNECTED CHATS (SKILL ENG)
5. INTERACTIVE CHATS (SKILL ENG)
6. ABANDONED CHATS (SKILL ENG)

Visualizations:

| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| --- | --- | --- | --- |
| Historical Volume (Combe Chart) | INTERACTIVE CHAT RATE INTERACTIVE CHATS | DATE | Dynamically reflects the aggregated data of the selected Campaign from the Campaign Grid (left). Click on a Campaign name and see the relevant data in the visualization. |

## Staffing analysis sheet

**Primary Filters:** Skill

### Main panel: summary

This panel presents a summary of the staffing related metrics as they pertain to the consumer and agent experience. Users see the queue times aggregated by the chosen skill as well as the skill’s abandonment rate and derived missed opportunities. The survey funnel is also represented in this summary to complete the consumer’s experience.

**![](/img/oppstaff3.png)Top data table (grid) “Operational KPIs”**

**Columns (metrics):**

1. LOGGED IN TIME
2. ENGAGED TIME
3. ONLINE
4. ONLINE TIME ENG.
5. AWAY
6. AWAY TIME ENG
7. BACK SOON
8. BACK SOON TIME ENG.

**Visualizations:**

| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| --- | --- | --- | --- |
| Queue Times (Bar Chart) | AVG. TIME TO ANSWER | HOUR |  |

**Bottom data table (grid) “Survey”**

**Columns (metrics):**

1. SURVEY TYPE
2. VIEWED SURVEY
3. COMPLETED SURVEY
4. COMPLETION RATE

### Panel two: Missed opportunity

This panel presents a deep dive into missed opportunity as it pertains to actual staffing. It highlights the times of day where staffing impacts the potential for increasing expose of chat buttons to consumers. This helps brands optimize their operation to fit the demand in increase targeting in relation to the staffing.

![](/img/oppstaff4.png)**Visualizations:**

| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| --- | --- | --- | --- |
| Missed Opportunity Weekly (Stacked Combo Bar & Line Chart) | CHAT EXPOSED (SKILL)MISSED EXPOSED (SKILL)EXPOSED RATE (SKILL) | DATE |  |

## Microstrategy Terminology

Microstrategy sources: [http://www2.microstrategy.com/producthelp/10.2/MobileServer/WebHelp/Lang_1033/Content/MobileDesignAndAdmin/Glossary.htm](http://www2.microstrategy.com/producthelp/10.2/MobileServer/WebHelp/Lang_1033/Content/MobileDesignAndAdmin/Glossary.htm "http://www2.microstrategy.com/producthelp/10.2/MobileServer/WebHelp/Lang_1033/Content/MobileDesignAndAdmin/Glossary.htm")

| Term | Description |
| --- | --- |
| Dashboard | A visually intuitive display of data that summarizes key business indicators for a quick status check. A special type of document, dashboards usually provide interactive features that let users change how they view the dashboard’s data. |
