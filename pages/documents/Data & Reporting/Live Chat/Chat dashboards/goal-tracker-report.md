---
pagename: Goal tracker report
categoryName: Data & reporting
subCategoryName: Live chat
indicator: both
subtitle: The goal tracker report includes raw data for every goal reached in any
  selected campaign
level3: Chat Dashboards
permalink: data-reporting-live-chat-chat-dashboards-goal-tracker-report.html
isTutorial: false
date: 2019-01-21 12:05:18 +0000
isNew: false

---
This dashboard includes raw data for every goal reached in any of the selected account’s campaigns. The goal achieved event, which serves as the data source for this report, includes all goal types:

1. Assisting goals: interact with visitors, increase page views, and “other” (user defined URL based goals)
2. Conversion goals: sell product / service, generate leads, service activity complete

This dashboard is loaded with assisted conversion; which occurred after an engagement with an agent. The goal tracker does not include self serve conversion / assisting goals reached.

This dashboard also entails hour offset capabilities allowing users to show the data with an offset to match the time zone where they manage their operation.

## Main panel: agent goals tracker report

The following panel will be presented when accessing the goal tracker predefined dashboard. It provides an overview of all goals reached (including conversions), by skill and by agent, and a list of all goals reached events within the selected timeframe.

![](/img/Goal-tracker-report2.png)

_Image 1- Agent goals tracker report main panel_

**Visualizations:**

| Graph Name (Type) | Vertical / Angle (Metrics) | Horizontal / Color (Attributes) | Additional functions |
| --- | --- | --- | --- |
| Conversion/Goal by Agents (bar chart) | CROSS SESSION CONVERSION/GOAL, IN SESSION CONVERSION/GOAL | AGENT | N/A |
| Conversion/Goal by skill (bar chart) | CROSS SESSION CONVERSION/GOAL, IN SESSION CONVERSION/GOAL | SKILL | N/A |

**Campaign goals by skill and agent (grid)**

**Rows (attributes):** Agent, skill, campaign name, goal name, goal type

## Retrieving cross session conversion / goal by date

The goal tracker date filter is applied to the engagement start time. A cross session conversion will therefore be logged under the date on which the chat started. The following example demonstrates the expected behavior:

* The account’s conversion window is set to 3 days.
* On June 1st a chat engagement took place.
* On June 3rd the consumer converted.
* On June 4th the campaign manager wishes to pull a report for all conversions achieved on June 3rd.
* To ensure this cross session conversion is included in a goal tracker report, the campaign manager needs to set the date filter in the goal tracker to go back at least as far as June 1st.

## Engagement attributes in goal tracker

The following metrics and attributes may be added to the predefined dashboard visualizations by an LPA user who has edit permissions in Report Builder.

The goal tracker is currently unique in the sense that it captures engagement attributes sent to LivePerson from the brand’s website. The data source feeding the goal tracker includes all events indicating that a campaign goal was achieved. Each event contains relevant meta data per goal type. The following is a categorized list of goal types and their corresponding attributes that are included in the meta data:

![](/img/Table-goal-tracker-report1.png)

To learn more about engagement attributes, [click here](data-reporting-engagement-attributes-data-sources-engagement-attributes-overview.html)

\** The “PRODUCT LIST” attribute is a delimited list of the Products included in the Cart Engagement attribute. The cart is included in the Transaction Engagement attribute which is intended to be passed upon a completion of purchase. The list of values includes: name, category, sku, price, and quantity.

## Predefined grid

The grid spreads out all the relevant metrics in a granular view so any member on the account may easily download the grid or receive scheduled copies to their email.

Perform the analysis and customization you need using an offline copy, in excel using the complete grid. You can choose the document type (daily/monthly) based on your needed timeframe. The daily grid gives daily aggregations for all the [metrics](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html#documenttitlecontainer) while the monthly grid offers the corresponding aggregations at the monthly level. The data is presented at the brand, campaign and engagement level.

## Metrics:

For all metrics available within this dashboard please search the Report Builder Data Metrics by the name of the dashboard in the [Developers Community.](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html#documenttitlecontainer)

![](/img/General-Data-metrics-table.png)