---
pagename: Operational & staffing dashboard
categoryName: Data & reporting
subCategoryName: Live chat
indicator: chat
subtitle: ''
level3: Chat Dashboards
permalink: data-reporting-live-chat-chat-dashboards-operational-staffing-dashboard.html
isTutorial: false
date: 2019-01-21 14:11:34 +0200
published: false

---
This dashboard includes operational metrics used to analyze agent activity and performance. It provides brands the ability to monitor from both supply and demand perspective, their chat operation at the LOB, skill, campaign and engagement level. A dedicated user guide for working with this Dashboard can be found [here](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Report+Builder/Operational+%26+Staffing+Dashboard+Overview.pdf).  
  
**Primary Datasets:** Exposures Hourly, Post Connect Hourly, Queue Health Hourly, Survey Hourly

**Minimum timeframe:** Hourly

## Demand Analysis Sheet

**Primary Filters:** Skill, LOB

### Main Panel: Demand Summary

The following panel will be presented when accessing the Operational & Staffing predefined dashboard. It provides an overview of Demand analysis. The dashboard aggregates data by the chosen skills to show Chat funnel metrics and present visualizations of the funnel in two levels; comparing prospects the exposures and the showing the requested chat funnel to connected chats.

![](https://lh3.googleusercontent.com/IecuoVWKiGVGD1YKbukpJ2eTW-0Z_3rtZTKDBdeJ6_gV2l3bGbrjTY1nj6WyKTczWOlVBbYgu7vMsqkOUT1FDx6BfuXAR3zkwt9GuLxhXGE-SvVuvrdmRI5uKcfGXrK6dDAl5p7a =864x427)

**Top data bar (Grid)**

**Columns (Metrics):**

1. CHAT PROSPECTS
2. CHAT EXPOSED
3. EXPOSED RATE
4. REQUESTED CHATS
5. CLICK RATE
6. CONNECTED CHATS
7. CONNECTED CHAT RATE
8. INTERACTIVE CHART
9. INTERACTIVE CHAT RATE

Visualizations:

| --- | --- | --- | --- |
| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| Prospects vs. Exposure by day (Area Chart) | CHAT PROSPECTS (SKILL) For FxCHAT EXPOSED (SKILL) For Fx | DAY OF THE WEEK = A | Hover to view the data points per hour of the dayDynamically reflects the aggregated selected skill’s data as chosen in the filter.  |
| Chat Funnel {Requested, Interactive, Connected} (Area Chart) | REQUESTED CHATSINTERACTIVE CHATSCONNECTED CHATS | DAY OF THE WEEK | Hover to view the data points per hour of the dayDynamically reflects the aggregated selected skill’s data as chosen in the filter.  |

### Panel 2: Demand Processing

The following panel will be presented when accessing the Operational & Staffing predefined dashboard. It provides an overview of Demand analysis. The dashboard aggregates data to the campaign and engagement level and shows the funnel metrics in a gridview as well as through a day by day trend view (bar chart)

![](https://lh3.googleusercontent.com/LNB-gaTRDDcRfswLpem_C1UYdxMkp1Gs_twCZUSTMcRjwmsT61gJg19B8h0DCK78WMSVbDm42ZphGflyF294VcGWYWPyEwcSfIAopVHW7Ei_VsHu5Pe3LDDbcTVs4JqysimzFeT6 =864x453)

**Left data table (Grid) “Campaign”**

**Columns (Metrics):**

1. CAMPAIGN NAME
2. INTERACTIVE CHATS

**Right data table (Grid) “Engagement Breakdown”**

**Columns (Metrics):**

1. ENGAGEMENT NAME 
2. CHAT PROSPECTS (SKILL ENG)
3. REQUESTED CHATS (SKILL ENG) 
4. CONNECTED CHATS (SKILL ENG) 
5. INTERACTIVE CHATS (SKILL ENG) 
6. ABANDONED CHATS (SKILL ENG) 

Visualizations:

| --- | --- | --- | --- |
| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| Historical Volume (Combe Chart) | INTERACTIVE CHAT RATEINTERACTIVE CHATS | DATE | Dynamically reflects the aggregated data of the selected Campaign from the Campaign Grid (left). Click on a Campaign name and see the relevant data in the visualization.  |

## Staffing Analysis Sheet

**Primary Filters:** Skill

### Main Panel: Summary

This panel presents a summary of the Staffing related metrics as they pertain to the consumer and agent experience. Users see the queue times aggregated byu the chosen skill as well as the skill’s abandonment rate and derived missed opportunities. The survey funnel is also represented in this summary to complete the consumer’s experience.

 ![](https://lh3.googleusercontent.com/4N_ng98GjUC4Lof2F7PoddYhvH15PkCPuqUn9SJ99LXscnoqOW7aaTpA1d6pH2mvzpHcLr0x4c9T69cIAvIr05akAggnRjXhlDo9DbgT2CS8O5NlVqff6OPwsdw2RaS8Z8yktzIg =864x468)

**Top data table (Grid) “Operational KPIs”**

**Columns (Metrics):**

1. LOGGED IN TIME
2. ENGAGED TIME
3. ONLINE
4. ONLINE TIME ENG.
5. AWAY
6. AWAY TIME ENG
7. BACK SOON
8. BACK SOON TIME ENG.

Visualizations:

| --- | --- | --- | --- |
| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| Queue Times (Bar Chart) | AVG. TIME TO ANSWER | HOUR |  |
| Abandonment (Bar Chart) | ABANDONED CHAT RATE | HOUR |  |
| Missed Opportunity by skill (Pie Chart) | MISSED OPPORTUNITIES (SKILL) | SKILL |  |

**Bottom data table (Grid) “Survey”**

**Columns (Metrics):**

1. SURVEY TYPE
2. VIEWED SURVEY
3. COMPLETED SURVEY
4. COMPLETION RATE

### Panel 2: Missed Opportunity

This panel presents a deep dive into missed opportunity as it pertains to actual staffing. It highlights the times of day where staffing impacts the potential for increasing expose of chat buttons to consumers. This helps Brands optimize their operation to fit the demand in increase targeting in relation to the staffing. 

![](https://lh5.googleusercontent.com/Bu-Uh1CBPGbgI7VWCB2xyyRSLGWt5aroVlhVlbCvtI85kfYDEJHAyLzA6YrjedrsFBGKXKqST-TbCnzN6bKAlb8q3APXH1cqVdF8J38pSqE8I71qivQ90oBd8fO1oG0ccH3yAMaH =864x471)

Visualizations:

| --- | --- | --- | --- |
| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| Missed Opportunity Weekly (Stacked Combo Bar & Line Chart) | CHAT EXPOSED (SKILL)MISSED EXPOSED (SKILL)EXPOSED RATE (SKILL) | DATE |  |
| Total vs Actual Volume (Stacked Area Chart) | POTENTIAL ENGAGEMENTS (SKILL)ENGAGEDPOTENTIAL EXPOSED (SKILL)CHAT EXPOSED (SKILL) | DATE |  |
| Missed Opp. by Day of Week by Hour (Area Chart) | MISSED OPPORTUNITIES (SKILL) | DAY OF THE WEEK& HOUR |  |

# Microstrategy Terminology

Microstrategy Sources: [http://www2.microstrategy.com/producthelp/10.2/MobileServer/WebHelp/Lang_1033/Content/MobileDesignAndAdmin/Glossary.htm](http://www2.microstrategy.com/producthelp/10.2/MobileServer/WebHelp/Lang_1033/Content/MobileDesignAndAdmin/Glossary.htm "http://www2.microstrategy.com/producthelp/10.2/MobileServer/WebHelp/Lang_1033/Content/MobileDesignAndAdmin/Glossary.htm")

| --- | --- |
| Term | Description |
| Dashboard | A visually intuitive display of data that summarizes key business indicators for a quick status check. A special type of document, dashboards usually provide interactive features that let users change how they view the dashboard’s data. |
| Sheet | Sheets allow you to create layers of data that are filtered in different ways. Each sheet has a separate set of filters, allowing you to create different filters for different sheets. Each sheet is displayed on a separate tab in the dashboard. |
| Panel | A way of grouping data in a document so that users can navigate subsets of data as if the subsets were pages in a smaller document. Each “page”, or layer of data, is a panel; a group of panels is called a panel stack. |
| Grid / Graph  | A control placed in a document that displays information in the same way a MicroStrategy report does. |
| Dataset | A MicroStrategy report that retrieves data from the data warehouse or cache. It is used to define the data available on a document. |
| Metric | A business calculation defined by an expression built with functions, facts, attributes, or other metrics. For example: Sum(dollar_sales) or \[Sales\] - \[Cost\].The MicroStrategy object that contains the metric definition. It represents a business measure or key performance indicator. |
| Derived metric | A metric that you can create based on existing objects on the dashboard. A derived metric performs a calculation on the fly with the data available on a dashboard, without re-executing the dashboard against the data source. Derived metrics are saved and displayed only on the specific dashboard on which they are created.  |
| Attribute | A data level defined by the system architect and associated with one or more columns in a data warehouse lookup table. Attributes include data classifications like Region, Order, Customer, Age, Item, City, and Year. They provide a means for aggregating and filtering at a given level. |
