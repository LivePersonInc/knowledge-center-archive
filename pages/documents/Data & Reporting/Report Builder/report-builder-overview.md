---
pagename: Report Builder overview
categoryName: Data & reporting
subCategoryName: Report Builder
indicator: both
subtitle: A high-level overview of the Report Builder
level3: ''
permalink: data-reporting-report-builder-report-builder-overview.html
isTutorial: false
date: '2019-01-09T12:35:11.000+00:00'
redirect_from:
- report-builder.html

---
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/344251526" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

The Report Builder offers brands ready-made dashboards reflecting a wealth of data drawn from their LiveEngage account activity. These dashboards allow brands to monitor and optimize contact center operations, increase conversions through LiveEngage campaigns and enact data-driven decisions. Up to 4 months of data can be displayed at any one time (the months do not have to be consecutive), selected from up to 13 months of data available in Report Builder.

Brands with a customer success offering can request customized dashboards with self-defined KPIs and visualizations tailored to their business needs. Access to the Report Builder offers the opportunity to view all your prepared dashboards, run or filter them according to your requirements, and export data to excel or PDF.

**Report Builder allows brands to:**

* Evaluate and optimize agent efficiency
* Identify opportunities to convert more consumers using funnel dashboards
* Plan ahead for staffing needs through skill supply and demand analysis
* Track every assisted conversion achieved by agents
* Understand how messaging operations can be optimized and track progress as messaging adoption increases
* Combine existing KPIs to create new ways of measuring success through custom dashboards and visualizations
* Schedule reports in order to receive regular updates by email

## Freshness of data

As an offline business intelligence decision support tool, the Report Builder is updated periodically with recent activity that took place on your LiveEngage account. The data refresh process takes place three times a day. The first update runs every morning before 8 AM in the account timezone (according to the data center in which the account is stored), and includes data accumulated up to midnight the same day. For example, on Wednesday at 8 AM, Report Builder will show data updated to the Tuesday at 11:59 PM. The following updates run every 8 hours and these updates include data accumulated from up to 6 hours before the start time of this process.

Every LiveEngage account sits on one of our three farms. Your account’s farm is indicated in the account URL, for example: [https://z1.le.liveperson.net/a/19935036/](https://z1.le.liveperson.net/a/19935036/)

The three farms, and their time zones, are as follows:

* Z1 = Virginia, North America. The time zone for the Virginia farm is EST.
* Z2 = UK. The time zone for the UK farm is GMT (or GMT+1 during Daylight Saving Time).
* Z3 = Sydney, Australia. The time zone for the Sydney farm is AEST.

Please note: Certain metrics available in Report Builder may update retroactively. These metrics are either part of the “Funnel” (available in the Business Activity and Operational & Staffing predefined dashboards), or specific to Messaging (available in the Messaging Performance predefined dashboard). These metrics are updated for full visit sessions to the website, or closed messaging conversations. The description of such metrics include an explicit indication respectively. For more information, please see [metric glossary](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html).

## Evolution of LiveEngage BI

Report Builder is a new and improved version of LiveEngage BI dashboards (which remains fully accessible to LiveEngage users).

With superior performance, an additional layer of messaging KPIs, and the ability to tailor dashboards to specific business needs, the Report Builder goes beyond the capabilities available in LE BI.

The following considerations should be taken into account when using Report Builder:

1. Unlike the Agent Manager BI dashboards, Report Builder presents data in the account’s time zone.
2. Scheduling is performed by LivePerson administrators.

## Predefined dashboards

LiveEngage comes with a set of predefined dashboards which offer ready made reports. These predefined dashboards can be used out of the box, or manipulated to create customized reports which contain unique key performance indicators.

The data currently available in the predefined dashboards are as follows:

**Messaging & Live Chat dashboards:**

* [**Agent activity dashboard**](data-reporting-messaging-messaging-dashboards-agent-activity-dashboard.html): Includes operational data about agents
* [**Goals tracker dashboard**](data-reporting-messaging-messaging-dashboards-goal-tracker-report.html): Includes information about each conversion

**For Messaging only:**

* [Performance Dashboard for Messaging](data-reporting-messaging-messaging-dashboards-messaging-performance-dashboard.html) Includes operational and business data about messaging conversations.
* Survey dashboard for Messaging: Includes information about responses to surveys
* [Business dashboard for Messaging:](data-reporting-live-chat-chat-dashboards-business-activity-dashboard-grid.html) Includes information about campaigns and engagements performance. Business Activity Grids are also available in Excel export formats, in daily and monthly level aggregations.

**Chat only dashboards:**

* [**Operational & staffing dashboard**](data-reporting-live-chat-chat-dashboards-operational-staffing-dashboard.html) **for Live Chat:** Includes information about skill performance and skill demand
* [**Survey dashboard for LiveChat:**](data-reporting-live-chat-chat-dashboards-survey-activity-dashboard.html) Includes information about responses to surveys
* [**Skill dashboard** for Live Chat](data-reporting-live-chat-chat-dashboards-skills-activity-dashboard.html) Includes operational data about skills
* Business dashboard for LiveChat: Includes information about campaigns and engagements performance.

## Scheduling

LivePerson administrators can schedule reports to run at set times on a recurring basis within saved report parameters, and can be delivered to the requested email inbox.

## Latest updates to Report Builder

LivePerson is continuously working on enhancing the Report Builder. In 2018/2019, the following enhancements and new features have been added to Report Builder:

* A new set of metrics have been added to the Messaging Performance Predefined Dashboard to help analyze human agent performance and takeovers by agents (bots or humans).
* The messaging performance dashboard has been enriched with a set of attributes which can be used to filter the operational metrics by campaigns and engagements.
* Messaging queue length metrics including actionable and non actionable unassigned conversations have been added to the Messaging Performance Dashboard to enable comparison between skill queues.
* A new tab has been added to the messaging dashboard, “Survey Data Export” sheet which contains data collected by the Post Conversation Survey bot.
* The data refresh rate has been enhanced to every eight hours.
* Agent load KPIs are added to the Predefined Messaging Performance Dashboard to reflect how smart capacity functions. These KPIs give agent managers a view of how productive their agents have been.
* New conversion metrics have been added to the Messaging Performance Dashboard to allow analysis of sales results together with messaging operations data.
* User can change the time zone of a dashboard to analyze performance in their local time. This capability has been added to two predefined dashboards: skill activity and messaging performance.
* The field details tab has been redesigned and contains a list of all the available attributes and metrics.
* The response time metrics in the Messaging Performance dashboard will be enriched to provide a detailed view of the consumers experience (i.e., how much time consumers are waiting for a response?), and a more accurate measurement for the responsiveness of the agents (i.e., how long it takes an agent to respond from the point the conversation is assigned to him?).
* LivePerson is offering predefined documents intended for easy download and subscriptions. The content of these documents replace the grids that are available in the Operational BI. The following reports will be created as standalone documents:
  1. Agent Activity Grid - Daily & Monthly
  2. Skill Activity Grid - Daily & Monthly
  3. Survey Activity Grid - Daily & Monthly
  4. Goal Tracker Grid

### Exporting to PDF

Users are able to export dossiers to a formatted PDF file, including visualizations and advanced formatting options such as:
layout ( Automatic, Portalit, Landscape). Advanced mode to export the visualizations individually on separate pages to include all data.

![](img/export-to-pdf.png)

### PDF scheduling

New scheduling to a PDF file format will soon be available. In addition, setting the scheduling to PDF format can be done within the dashboard. Go to the file menu and select ‘Schedule Delivery to email’.

![](img/pdf-scheduling.png)

### Personalized view

Users can now save their own customized personal view of the dossier. A personal view is a lightweight copy of a dossier and includes every change that was made to the dossier including filtering the report period time frame and the offset selector. This updates will save time when choosing data to analyze and it allows you to define different views on the same dashboard without having to re select the filters on the dossier.

To create and save a personal view go to the file menu, select ‘Create Personal View’ and change the name to a meaningful name.

To run a personal view, after launching the Report Builder , select ‘My Subscriptions’ where you will see all your personal view subscriptions
In the personal view subscriptions area, click the name of the personal view to run or edit it.

For example, you can create a view on the Agent Activity Dashboard for the last 30 days filtered for internal employees only and another view of the offshore team for the last 120 days.

![](img/personalized-view.png)

{: .notice}
These changes will only impact the predefined dossiers. User copies of previous predefined  dossiers will not be impacted automatically. If there is a need to update existing user copies of the dashboard to the new color palette, this can be done manually in the Report Builder. After opening the required dossier, go to ‘Format’ Menu and choose ‘Custom Pallets’ -> LivePerson Palette and then save the changes.

![](img/pallete.png)