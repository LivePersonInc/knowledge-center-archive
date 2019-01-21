---
pagename: Survey activity dashboard
categoryName: Data & reporting
subCategoryName: Live chat
indicator: chat
subtitle: Capture all responses to surveys presented to agents and consumers
level3: Chat Dashboards
permalink: data-reporting-chat-dashboards-live-chat-chat-dashboards.html
isTutorial: false
date: 2019-01-21 11:41:23 +0000

---
Capture all responses to surveys presented to agents and consumers in your Live Chat implementation. This dashboard supports dynamic drilling down into specific survey questions and their respective responses, including a dedicated predefined visualization for analyzing CSAT trends.

**Primary datasets:** Survey forms and answers

**Minimum timeframe:** Daily

**Primary filters:**

1. Survey type / form, and question
2. Agent, agent group, and skill

## Main panel: Survey analysis

This panel consists of an interconnected set of visualizations allowing for a drill down form the survey form level down to an analysis of distribution of responses for a specific survey question. Click through from top to bottom to follow the analysis path.

![](/img/surveyactdash.png)

Image 1: Survey Activity main panel

Visualizations:

| --- | --- | --- | --- |
| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| Daily Survey Completion Rate(combined bar and line chart) | VIEWED SURVEY(bar chart) | DATE | Hover over bars display popup:DATEVIEWED SURVEY or COMPLETED SURVEY |
| COMPLETED SURVEY(bar chart) |
| SURVEY COMPLETION RATE(line chart - right axis) |
| Question Completion Rate(grid) | QUESTION COMPLETION RATE | QUESTION | Dynamically populates the “Answer Analysis” bar chart, and the “CSAT Analysis” line chart (if the question if of type CSAT). |
| SURVEY FORM |
| Answer Analysis(bar chart) | ANSWER COUNT | ANSWER | Dynamically populates the “Distribution per answer” line chart.Deselecting an answer will show the distribution for all answers of the selected question, side by side. |
| Distribution per Answer(line chart) | ANSWER RATE | DATE | Hover over live displays popup:ANSWERDATEANSWER RATE |
| ANSWER |

## Second Panel: CSAT Analysis

This panel displays the trend of CSAT score over the selected time frame. The grid will drill down to show the CSAT scoring by survey question at the skill level per day. 

![](/img/surveyactivitydash2.png)

### CSAT Grid

**Row (Attributes)**

1. Question
2. Skill

**Row (Metrics)**

1. Answered Questions
2. CSAT Score
3. Question Completion rate

Columns (Attributes)

1. Date

## Survey activity grid

## Main panel: Survey question grid

Export daily survey responses with a full distribution of the provided answers. This ready made grid captures the survey responses per skill and agent to support additional offline manipulations over the available granularity.

**Detailed Analysis (Grid)**

Rows (attributes):

 1. DATE
 2. DAY OF WEEK
 3. GROUP
 4. SKILL
 5. AGENT
 6. SURVEY TYPE
 7. SURVEY FORM
 8. QUESTION
 9. QUESTION REQUIRED INDICATOR
10. QUESTION TYPE
11. ANSWER
12. ANSWER TYPE
13. STRUCTURED ANSWER INDICATOR

Columns (metrics):

1. ANSWER COUNT
2. ANSWER RATE

## Second panel: Survey form grid

Export a high level overview of the survey forms to analyze the display and completion rates.

**Survey analysis (grid)**

Rows (attributes):

1. DATE
2. DAY OF WEEK
3. SURVEY TYPE
4. SURVEY FORM

Columns (metrics):

1. VIEWED SURVEY
2. COMPLETED SURVEY
3. SURVEY COMPLETION RATE