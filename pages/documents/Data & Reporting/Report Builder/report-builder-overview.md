---
pagename: Analytics Builder overview
categoryName: Data & reporting
subCategoryName: Analytics Builder
indicator: both
subtitle: A high-level overview of the Analytics Builder
level3: ''
permalink: data-reporting-analytics-builder-analytics-builder-overview.html
isTutorial: false
date: '2019-01-09T12:35:11.000+00:00'
redirect_from:
- report-builder.html
redirect_from: data-reporting-report-builder-report-builder-overview.html

---
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/344251526" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

The Analytics Builder offers brands ready-made dashboards reflecting a wealth of data drawn from their LiveEngage account activity. These dashboards allow brands to monitor and optimize contact center operations, increase conversions through campaigns and enact data-driven decisions. Up to 4 months of data can be displayed at any one time (the months do not have to be consecutive), selected from up to 13 months of data available in the Analytics Builder.

Brands with a customer success offering can request customized dashboards with self-defined KPIs and visualizations tailored to their business needs. Access to the Analytics Builder offers the opportunity to view all your prepared dashboards, run or filter them according to your requirements, and export data to excel or PDF.

**Analytics Builder allows brands to:**

* Evaluate and optimize agent efficiency
* Identify opportunities to convert more consumers using funnel dashboards
* Plan ahead for staffing needs through skill supply and demand analysis
* Track every assisted conversion achieved by agents
* Understand how messaging operations can be optimized and track progress as messaging adoption increases
* Combine existing KPIs to create new ways of measuring success through custom dashboards and visualizations
* Schedule reports in order to receive regular updates by email

## Predefined dashboads
LiveEngage comes with a set of predefined dashboards which offer ready made reports. These predefined dashboards can be used out of the box, or manipulated to create customized reports which contain unique key performance indicators.

See [Predefined dashboards](data-reporting-report-builder-predefined-dashboards.html)

## Freshness of data

As an offline business intelligence decision support tool, the Analytics Builder is updated periodically with recent activity that took place on your LiveEngage account. The data refresh process takes place three times a day. The first update runs every morning before 8 AM in the account timezone (according to the data center in which the account is stored), and includes data accumulated up to midnight the same day. For example, on Wednesday at 8 AM, Analytics Builder will show data updated to the Tuesday at 11:59 PM. The following updates run every 8 hours and these updates include data accumulated from up to 6 hours before the start time of this process.

Every LiveEngage account sits on one of our three farms. Your account’s farm is indicated in the account URL, for example: [https://z1.le.liveperson.net/a/19935036/](https://z1.le.liveperson.net/a/19935036/)

The three farms, and their time zones, are as follows:

* Z1 = Virginia, North America. The time zone for the Virginia farm is EST.
* Z2 = UK. The time zone for the UK farm is GMT (or GMT+1 during Daylight Saving Time).
* Z3 = Sydney, Australia. The time zone for the Sydney farm is AEST.

Please note: Certain metrics available in Analytics Builder may update retroactively. These metrics are either part of the “Funnel” (available in the Business Activity and Operational & Staffing predefined dashboards), or specific to Messaging (available in the Messaging Performance predefined dashboard). These metrics are updated for full visit sessions to the website, or closed messaging conversations. The description of such metrics include an explicit indication respectively. For more information, please see [metric glossary](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html).

## Evolution of LiveEngage BI

Analytics Builder is a new and improved version of LiveEngage BI dashboards (which remains fully accessible to LiveEngage users).

With superior performance, an additional layer of messaging KPIs, and the ability to tailor dashboards to specific business needs, the Analytics Builder goes beyond the capabilities available in LE BI.

The following considerations should be taken into account when using the Analytics Builder:

1. Unlike the Agent Manager BI dashboards, Analytics Builder presents data in the account’s time zone.
2. Scheduling is performed by LivePerson administrators.

### Exporting to PDF

Users are able to export dossiers to a formatted PDF file, including visualizations and advanced formatting options such as:
layout ( Automatic, Portalit, Landscape). Advanced mode to export the visualizations individually on separate pages to include all data.

![](img/export-to-pdf.png)

### Personalized view

Users can now save their own customized personal view of the dossier. A personal view is a lightweight copy of a dossier and includes every change that was made to the dossier including filtering the report period time frame and the offset selector. This updates will save time when choosing data to analyze and it allows you to define different views on the same dashboard without having to re select the filters on the dossier.

To create and save a personal view go to the file menu, select ‘Create Personal View’ and change the name to a meaningful name.

To run a personal view, after launching the Analytics Builder , select ‘My Subscriptions’ where you will see all your personal view subscriptions
In the personal view subscriptions area, click the name of the personal view to run or edit it.

For example, you can create a view on the Agent Activity Dashboard for the last 30 days filtered for internal employees only and another view of the offshore team for the last 120 days.

![](img/personalized-view.png)

{: .notice}
These changes will only impact the predefined dossiers. User copies of previous predefined dossiers will not be impacted automatically.

### How to change customized dashboard to the updated look & feel
If there is a need to update existing user copies of the dashboard to the new color palette, this can be done manually in the Analytics Builder. After opening the required dossier, go to ‘Format’ Menu and choose ‘Custom Pallets’ -> LivePerson Palette and then save the changes.

![](img/pallete.png)
