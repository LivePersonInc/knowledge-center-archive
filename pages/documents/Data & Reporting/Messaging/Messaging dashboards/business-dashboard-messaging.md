---
pagename: Business dashboard for messaging
categoryName: Data & reporting
subCategoryName: Messaging
indicator: both
subtitle: The business activity dashboard for messaging provides a daily snapshot
  of campaign performance
level3: Messaging Dashboards
permalink: data-reporting-messaging-messaging-dashboards-business-dashboard-for-messaging.html
isTutorial: false
date: '2019-01-21T13:15:27.000+00:00'
isNew: false

---
The Business dashboard for messaging provides a daily snapshot of campaign performance, allowing brands to analyze the campaign funnel for messaging engagements. Using this dashboard, you can identify opportunities to grow your reach and boost service availability by extracting actionable conclusions based on the consumer’s journey through the brands website, and other engagement sources. This dashboard reflects consumer demand as well as how successfully the campaign was set up on the account. You can utilize this dashboard to optimize your campaign targeting and engagement routing.

Brands are able to view messaging data at the Brand, Line of Business, Campaign, Engagement and Entry Point levels for funnel metrics.

**Primary datasets:**

* New aggregation model (currently known as Agent Messaging Activity)
* Conversion Daily
* Conversion Daily- Brand
* Visits Daily
* Exposures Daily - Brand Distinct
* Exposures Daily  - LOB Distinct
* Exposures Daily - Campaign Distinct
* Exposures Daily - Engagement Distinct
* Exposures Daily - Entry Point Distinct
* View and Accepted Offers Daily
* Consumer Messaging Activity
* Agent Activity Hourly

**Primary filters:**

* Date
* Group
* Initial device: desktop/laptop, mobile smartphone, mobile tablet
* Goal type
* Source Type: Web, Brand App, Twilio SMS, Facebook, Apple business chat, Google, Line

**Manual filter by Panel:**

* Campaign
* LOB
* Entry Point
* Engagement

**Minimum time frame:** Daily

## Understanding funnel metrics (aggregation levels and distinct counting)

### Aggregation Levels

The business funnel can be analyzed from several different aspects. The Business activity for messaging dashboard offers a view into 4 of these: Brand, Line of Business, Campaign, Entry Point and Engagement. At each level, the metrics included in the business funnel are pre-aggregated to reflect the corresponding aspect.

A suffix has been added to each metric name to allow users to identify the level to which the metric is pre-aggregated. For example: “PROSPECTS (CAMP)” and “EXPOSED (LOB)”.

Important to note that the funnel is aligned to the visit session start time. This means that the date filter set on the dashboard applies to all visits starting within the selected range, including the events which occurred for the entire duration of the retrieved visit sessions.

### Distinct metrics

Each funnel metric is assigned to a distinct level, which indicates the consumer experience. There are two distinct levels in the Business Activity dashboard: visitor-session and engagement.

* Distinct per visitor session will add 1 to the metric results when a defined event occurred during the visit.
* Distinct per engagement will add 1 to the metric results when a visitor was exposed to a specific engagement.

  The following list contains the distinct metrics and their underlying formula (where applicable):

  #### Distinct to visit
  * PROSPECTS - Number of visits that were eligible to receive at least one engagement. Includes control group visitors if defined in the account
  * EXPOSED -Number of visits during which the visitor was offered an engagement
  * ENGAGED - Number of visitors who had at least one engagement during their visit
  * SESSIONS - Total number of web sessions on the monitored wed sessions

  #### Distinct to Engagement
  * EXPOSURES - Number of times each engagement was offered to a visitor

## Reporting on campaigns funnel from messaging engagements

The business funnel is open to engagements from all sources, including those originating from the Mobile app. The primary difference between tracking the funnel from a website (for Web Messaging) and from a Mobile app is the automated manner in which the funnel metrics are populated.

The LivePerson monitoring code present on your website pages automatically transmits to LiveEngage each step in the consumer’s journey. This translates into metrics included in the Business Activity dashboard. In order to integrate consumer journeys taking place in the mobile app into Campaign Funnel metrics, the use of an SDK is required (read more on how to integrate your app with LiveEngage Campaigns).

The following diagram outlines how funnel metrics are calculated for Messaging Engagements which do not originate from a monitored web source:

![](/img/Business-activity-grid-image1.png)

### Counting “sessions” from the Mobile App

The LiveEngage platform manages consumer activity through “sessions”. A visitor (aka “consumer”) session on a website begins when the visitor enters a webpage monitored by LiveEngage Tag. In most cases, a session ends when the visitor navigates out of the website or closes the browser completely.

Throughout the session, funnel events are transmitted to LiveEngage from the tag present on the web pages.  
Similar to the activity on the website, LiveEngage will initiate a session when the mobile app requests a Campaign and Engagement in order to start the in-app conversational experience. This will result in an increase in the SESSIONS metric.

### Conversions from the Mobile App

The Business activity for messaging dashboard offers a significant number of metrics which track conversions.

The LiveEngage campaign funnel ends with a successful assisted conversion. An assisted conversion is achieved during or after a conversation with an agent. The mobile app, similar to the website, should report an Engagement Attribute which triggers a campaign goal.

**In-session vs. cross-session conversions:** A campaign goal achieved during an ongoing session (as explained in the previous section here) is considered an in-session conversion. In order for an in-session conversion to be registered, the mobile app should report on the corresponding Engagement Attribute within 6 hours of the conversation initiation. Beyond 6 hours and with respect to the cross-session window setup in LiveEngage, the conversion will be considered cross-session.

{: .notice}
A mobile app messaging conversation may continue beyond 6 hours and is not coupled with the monitored session managed by LiveEngage.

**Attribution of conversions to agents:** Conversions from the mobile app are either attributed to the first agent of the conversation, or the last. This model is similar to conversions tracked on your website, and is set up via the LiveEngage campaigns settings.

## Main sheet: Business Activity for messaging analysis

Corresponding to the aggregation levels presented in the above section, the predefined main sheet of the Business activity for messaging dashboard contains a panel for each aggregation level. The metrics are not identical across all panels. Brand, Campaign, Engagements have the same funnel at their aggregated level. LOB and Entry Point do not contain any information following an opened conversation.

There are five available panels in this dashboard: Brand, LoB, Campaign, Engagement and entry point.

FUNNEL DATA - Common to All Panels

* SESSIONS (only at Brand Level)
* PROSPECTS
* PROSPECT RATE
* EXPOSED
* EXPOSED RATE
* EXPOSURES
* AVG. EXPOSURES
* ONLINE EXPOSURES
* ONLINE EXPOSURE RATE
* ENGAGEMENT VIEWS
* ACCEPTED OFFERS
* ACCEPTED RATE

CONVERSATION DATA - Common to Brand, Engagement, Campaign Panels

* NO. OF OPENED CONVERSATIONS
* CONVERSATION OPEN RATE
* ABANDONED CONVERSATIONS
* ABANDONED RATE
* INTERACTIVE CONVERSATIONS
* INTERACTIVE RATE
* CLOSED CONVERSATIONS
* NO. OF CONVERSATIONS CLOSED BY AGENT
* CLOSED BY AGENT RATE
* NO. OF CONVERSATIONS CLOSED BY CONSUMER
* CLOSED BY CONSUMER RATE
* NO. OF CONVERSATIONS CLOSED BY SYSTEM
* CLOSED BY SYSTEM RATE
* TOTAL NO. OF TRANSFERS
* SKILL TO SKILL TRANSFERS
* BACK TO QUEUE TRANSFERS
* HANDLED CONVERSATIONS

CONVERSION & REVENUE DATA - Common to Brand, Engagement, Campaign Panels

* TOTAL CONVERSIONS AFTER ENGAGEMENT
* TOTAL CONVERSION RATE AFTER ENGAGEMENT
* TOTAL CONVERSION RATE AFTER EXPOSURE NOT ENGAGEMENT
* INCREMENTAL CONVERSIONS
* INCREMENTAL CONVERSION RATIO
* TOTAL DIRECT REVENUE AFTER EXPOSURE
* TOTAL DIRECT REVENUE AFTER ENGAGEMENT
* TOTAL DIRECT REVENUE AFTER EXPOSURE NOT ENGAGEMENT
* TOTAL AOV AFTER EXPOSURE
* TOTAL AOV AFTER ENGAGEMENT
* TOTAL AOV AFTER EXPOSURE NOT ENGAGEMENT

EFFICIENCY-Common to Brand, Engagement, Campaign Panels

* CLOSED CONVERSATIONS PER LOGIN HOUR
* CLOSED CONVERSATIONS PER ONLINE HOUR
* CONVERSIONS PER ONLINE HOUR
* REVENUE PER ONLINE HOUR

OPERATIONS-Common to Brand, Engagement, Campaign Panels
* CSAT SCORE (UNIFIED)
* MCS
* LOGGED IN TIME
* ONLINE
* ONLINE RATE
* AWAY
* AWAY RATE
* BACK SOON
* BACK SOON RATE
* AVG CONSUMER RESPONSE TIME
* AVG CONVERSATION DURATION

## In panel search functionality

In order to isolate filtering by a specific object name to a single panel without influencing the other panels, a search box has been added to each panel. Searching and selecting one or more Lines of Business, Campaigns, Engagements, or Entry Points (each in their respective panel), will filter all the visualizations in the panel. This will allow drill down to the performance of a designated group of object (for example: all Sales related LoBs).

See example below

![](/img/business-activity-dashboard4.png)

## Graphs relevant to Brand, Engagement & Campaigns

| Measurement | Attributes | Graph type |
| --- | --- | --- |
| Efficiency | Closed Conversations- Y Axis left / CCPLH- metric- y axis right / CCPOH- metric - y axis right / Date - attribute - x axis | Closed Conversations- Bar / CCPLH- Line / CCPOH- Line |
| Conversion | Conversions - Y axis left / Conversion Rate - y axis right / DATE- X AXIS | Conversions - Bar / Conv. Rate - Line |
| Consumer experience | CCSAT-Y AXIS LEFT / MCS - Y AXIS RIGHT / DATE- ATTRIBUTE X AXIS | CSAT-Line / MCS- Line |

For all metrics available within this dashboard please search the Report Builder Data Metrics by the name of the dashboard in the [Developers Community.](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html)

![](/img/General-Data-metrics-table.png)