---
pagename: Business dashboard and grid for live chat
categoryName: Data & reporting
subCategoryName: Live chat
indicator: both
subtitle: The business activity grid spreads out the funnel metrics in a granular
  view
level3: Chat Dashboards
permalink: data-reporting-live-chat-chat-dashboards-business-dashboard-and-grid-for-live-chat.html
isTutorial: false
date: '2019-01-21T11:51:07.000+00:00'
isNew: false

---
The Business Activity predefined dashboard provides a daily snapshot of campaign performance, allowing brands to analyze the campaign funnel, including both chat and Web Messaging engagements. Using this dashboard, you can identify opportunities to grow your reach and boost service availability by extracting actionable conclusions based on the consumer’s journey through the brand website, and other engagement sources. This dashboard reflects consumer demand as well as how successfully the campaign was set up on the account. You can utilize this dashboard to optimize your campaign targeting and engagement routing.

Operational metrics for agent productivity and utilization have been added to compliment the funnel metrics. These operational metrics can be viewed alongside the funnel data but cannot be streamlined into one filterable view, as the dashboard does not include skill level analysis.

{: .notice}  
Metrics with the term “chat” in their title only include data for live chat engagements, not for Web Messaging or other sources.

**Primary datasets:** engagement exposures, viewed and accepted engagement offers, conversions

**Primary filters:**

* Initial device: desktop/laptop, mobile smartphone, mobile tablet
* Goal type: based on campaign goals, such as “Sell product/service”
* Goal: set up on the account’s campaigns
* Conversation type: chat or messaging
* Source Type: Web, Brand App, Twilio SMS, Facebook, Apple business chat, Google, Line

**Minimum time frame:** Daily

## Understanding funnel metrics (aggregation levels and distinct counting)

### Aggregation Levels

The business funnel can be analyzed from several different aspects. The Business Activity dashboard offers a view into 4 of these: Site, Line of Business, Campaign, and Engagement. At each level, the metrics included in the business funnel are pre-aggregated to reflect the corresponding aspect.

A suffix has been added to each metric name to allow users to identify the level to which the metric is pre-aggregated. For example: “PROSPECTS (CAMP)” and “EXPOSED (LOB)”.

Important to note that the funnel is aligned to the Visit session start time. This means that the date filter set on the dashboard applies to all visits starting within the selected range, including the events which occurred for the entire duration of the retrieved visit sessions.

### Distinct metrics

Each funnel metric is assigned to a distinct level, which indicates the consumer experience. There are two distinct levels in the Business Activity dashboard: visitor-session and engagement.

* Distinct per visitor session will add 1 to the metric results when a defined event occurred during the visit.
* Distinct per engagement will add 1 to the metric results when a visitor was exposed to a specific engagement.

  The following list contains the distinct metrics and their underlying formula (where applicable):

  #### Distinct to visit
  * PROSPECTS - Number of visits that were eligible to receive at least one engagement. Includes control group visitors if defined in the account
  * EXPOSED -Number of visits during which the visitor was offered an engagement
  * ENGAGED - Number of visitors who had at least one engagement during their visit

  #### Distinct to Engagement
  * EXPOSURES - Number of times each engagement was offered to a visitor
  * CHAT BUSY EXPOSURES - Number of times each engagement was offered to a visitor in busy state
  * CHAT OFFLINE EXPOSURES - Number of times each engagement was offered to a visitor in offline state
  * CHAT ONLINE EXPOSURES - Number of times each engagement was offered to a visitor in online state
  * CONTENT EXPOSURES - Number of times each content engagement was offered to a visitor
  * MESSAGING EXPOSURES - Number of times each Web Messaging engagement was offered to a visitor

  For example:

The following campaign setup is given:

![](/img/Business-activity-grid-image2.png)

Visitor **Alex** is a prospect for the “Lead Gen” campaign, and during his visit, he sees the following:

* Offline “MainPage” button
* Online “MainPage” button after moving to another page in the same section
* Online “ProductPage” button

Alex clicked the “ProductPage” button and conversed with an agent.

Visitor **Rachel** is a prospect for the “Lead Gen” and “Service” campaign during the same visit. She sees the following:

* Online “MyAccount” button
* Offline “MainPage” button

Rachel self served (meaning she did not converse with an agent during her visit).

Here are the results observed in the Business Activity dashboard per each distinct metric in each pre-aggregated level.

![](/img/business-activity-dashboard-table.png)

## Main sheet: Business activity analysis

Corresponding to the aggregation levels presented in the above section, the predefined main sheet of the Business Activity predefined dashboard contains a panel for each aggregation level. Since the panels are identical in metrics and attributes, the following section outlines the common list of metrics, followed by the additional functionality at the relevant level.

### Common to all panels

![](/img/Business-Dashboard-Live chat-Capmaign.jpg)

There are four available panels in this dashboard: Site, LoB, Campaign, and Engagement. In each panel, the following visualizations are in common.

**Top data bar (Grid)**

**Columns (Metrics):**

1. PROSPECTS
2. EXPOSED
3. ENGAGED
4. ENGAGEMENTS
5. TOTAL GOALS REACHED AFTER ENGAGEMENT
6. TOTAL CONVERSIONS AFTER ENGAGEMENT

| Graph Name (Type) | Vertical (Metrics) | Horizontal (Attributes) |
| --- | --- | --- |
| Prospects(bar chart - main axis) | PROSPECTS | WEEK |
| Exposed | EXPOSED(bar chart - main axis) | WEEK |
| EXPOSED RATE(line chart - secondary axis) | N/A | WEEK |
| Engaged | ENGAGED(bar chart - main axis) | WEEK |
| ENGAGED RATE(line chart - secondary axis) | N/A | WEEK |
| Conversions | TOTAL CONVERSIONS AFTER ENGAGEMENT(bar chart - main axis) | WEEK |
| INCREMENTAL CONVERSION RATIO(line chart - secondary axis) | N/A | WEEK |

**Trend (Grid)**

**Rows (Attributes):** WEEK, Total, Average

### Columns (Metrics):

#### Funnel metrics

 1. PROSPECTS
 2. EXPOSED
 3. EXPOSED RATE
 4. EXPOSURES
 5. AVG. EXPOSURES
 6. CHAT ONLINE EXPOSURES
 7. CHAT ONLINE EXPOSURE RATE
 8. ENGAGEMENT VIEWS
 9. ACCEPTED OFFERS
10. CHAT ACCEPTED RATE (ENG)
11. REQUESTED CHATS
12. CONNECTED CHATS
13. CONNECTED CHAT RATE (REQUESTED)
14. CONNECTED ENG. RATE (ACCEPTED)
15. ENGAGED
16. ENGAGED RATE
17. ENGAGEMENTS
18. INTERACTIVE CHAT RATE

#### Goals metrics

1. TOTAL GOALS REACHED AFTER ENGAGEMENT
2. TOTAL GOAL REACHED RATE AFTER ENGAGEMENT
3. TOTAL CONVERSIONS AFTER ENGAGEMENT
4. TOTAL CONVERSION RATE AFTER ENGAGEMENT
5. TOTAL CONVERSION RATE AFTER EXPOSURE NOT ENGAGEMENT
6. INCREMENTAL CONVERSIONS
7. INCREMENTAL CONVERSION RATIO
8. Operation metrics
   1. CUMULATIVE ENGAGED CHAT TIME
   2. AVG. CHAT LENGTH
   3. AVG. INTERACTIVE CHAT LENGTH
   4. AVG. NON - INTERACTIVE CHAT LENGTH
   5. AVG. TIME TO ANSWER CHAT
   6. MAX. TIME TO ANSWER CHAT

### Common to LoB, campaign, entry point and engagement panels

In order to isolate filtering by a specific object name to a single panel without influencing the other panels, a search box has been added to each panel. Searching and selecting one or more Lines of Business, Campaigns, Engagements, or Entry Points (each in their respective panel), will filter all the visualizations in the panel. This will allow drill down to the performance of a designated group of object (for example: all Sales related LoBs).

![](/img/Business-Dashboard-livechat-Engagment.jpg)  
Each panel, in the bottom area, includes the general volume generated by each LoB, Campaign, or Engagement.

| Graph Name (Type) | Vertical (Metrics) | Horizontal (Attributes) |
| --- | --- | --- |
| \[Object\] Name(bar chart) | PROSPECTS, ENGAGENENTS | LINE OF BUSINESS / CAMPAIGN / ENGAGEMENT |

### Site panel

The site level analysis adds to the top of the funnel an overview of web-traffic including the following additions.

| Graph Name (Type) | Vertical (Metrics) | Horizontal (Attributes) |
| --- | --- | --- |
| Prospects | PROSPECT RATE(line chart - secondary axis) | WEEK |

**Top data bar (Grid)**

Columns (Metrics):

1. SESSIONS
2. LOGGED IN TIME

**Site Trend (Grid)**

### Columns (Metrics):

#### Funnel metrics

1. SESSIONS

#### Operation metrics

 1. LOGGED IN TIME
 2. AWAY TOTAL NOT ENG.
 3. AWAT TOTAL NO ENG. RATE
 4. LABOR TIME
 5. AWAY TOTAL ENG.
 6. AWAY TOTAL ENG. RATE
 7. ENGAGED TIME
 8. ENGAGED TIME RATE
 9. OCCUPANCY RATE
10. CONC. ENGAGED
11. CONC. LABOR

### Engagement panel

Included in this panel is an engagement formats selector, allowing the filtering of all data presented in this panel by the format as set up in the engagement entity in the Conversational Cloud campaign module.

#### Supported formats include:

1. Embedded
2. Sticky
3. Overlay
4. Toaster
5. Slide-out
6. Peeling corner

### Entry point panel

The Entry Point is a section on your website. On each entry point, setup in a campaign, consumers are targeted and engaged. As your Conversational Cloud implementation grows, consumers arriving to an Entry Point may be targeted by several campaigns, effectively competing with each other towards the same or even different business goals.

Use the Business Activity by Entry Point to analyze the traffic on each website section. Are your campaigns covering all the visit sessions to this entry point? Are prospects being offered an engagement. Take the opportunity to optimize your targeting and engage with enough and the right consumers.

## Business activity grid

The business activity grid spreads out all the funnel metrics in a granular view so any member on the account may receive scheduled copies to their email.

Perform the analysis and customization you need using an offline copy, in excel using the complete business activity grid. You can choose the document type (daily/monthly) based on your needed timeframe. The daily grid gives daily aggregations for all the [metrics](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html#documenttitlecontainer) while the monthly grid offers the corresponding aggregations at the monthly level. The data is presented at the brand, campaign and engagement level.

![](/img/Business-activity-Grid.jpg)

## Predefined grid

The grid spreads out all the relevant metrics in a granular view so any member on the account may easily download the grid or receive scheduled copies to their email.

Perform the analysis and customization you need using an offline copy, in excel using the complete grid. You can choose the document type (daily/monthly) based on your needed timeframe. The daily grid gives daily aggregations for all the [metrics](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html#documenttitlecontainer) while the monthly grid offers the corresponding aggregations at the monthly level. The data is presented at the brand, campaign and engagement level.

For all metrics available within this dashboard please search the Analytics Builder Data Metrics table by the name of the dashboard [here.](https://knowledge.liveperson.com/data-reporting-reporting-metrics.html)
