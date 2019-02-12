---
pagename: Survey activity dashboard
categoryName: Data & reporting
subCategoryName: Live chat
indicator: chat
subtitle: Capture all responses to surveys presented to agents and consumers
level3: Chat Dashboards
permalink: data-reporting-live-chat-chat-dashboards-survey-activity-dashboard.html
isTutorial: false
date: 2019-01-21 11:41:23 +0000

---
Capture all responses to surveys presented to agents and consumers in your Live Chat implementation. This dashboard supports dynamic drilling down into specific survey questions and their respective responses, including a dedicated predefined visualization for analyzing CSAT trends.

**Primary datasets:** survey forms and answers

**Minimum timeframe:** daily

**Primary filters:**

1. Survey type / form, and question
2. Agent, agent group, and skill

## Main panel: survey analysis

This panel consists of an interconnected set of visualizations allowing for a drill down form the survey form level down to an analysis of distribution of responses for a specific survey question. Click through from top to bottom to follow the analysis path.

![](/img/survey-activity-dashboard1.png)

Image 1: survey activity main panel

## Second panel: CSAT analysis

This panel displays the trend of CSAT score over the selected time frame. The grid will drill down to show the CSAT scoring by survey question at the skill level per day.

![](/img/survey-activity-dashboard-2.png)

### CSAT Grid

**Row (attributes)**

1. Question
2. Skill

**Row (Metrics)**

1. Answered Questions
2. CSAT Score
3. Question completion rate

**Columns (attributes)**

1. Date

## Survey activity grid

## Main panel: survey question grid

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

## Second panel: survey form grid

Export a high level overview of the survey forms to analyze the display and completion rates.

**Survey analysis (grid)**

Rows (attributes):

1. DATE
2. DAY OF WEEK
3. SURVEY TYPE
4. SURVEY FORM

**Columns (metrics):**

1. VIEWED SURVEY
2. COMPLETED SURVEY
3. SURVEY COMPLETION RATE

{: .notice} This dashboard is also available in BI