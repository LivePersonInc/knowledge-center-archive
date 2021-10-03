---
pagename: Data availability and latency
categoryName: Data & reporting
subCategoryName: Analytics Builder
indicator: both
subtitle: An overview in to data availability and latency within Analytics Builder
level3: ''
permalink: data-reporting-analytics-builder-data-availability-latency.html
isTutorial: false
date: 2019-01-17 09:37:53 +0000
isNew: false
redirect_from: data-reporting-report-builder-data-availability-latency.html
---
## Data stored and updated in Analytics Builder

Operational data is stored for 13 months, while Business (funnel) data is available since March 2017.

Reports are refreshed throughout the day, every eight hours. The first data update takes place every morning, between 07:00 to 08:00 in the timezone of the data center timezone* from which your account is operated. After each update, the reports display the data collected up to 6 hours earlier.

\*Every LivePerson Conversational Cloud account sits on one of our three farms. Your account’s farm is indicated in the account URL, for example: https://z1.le.liveperson.net/a/9999999/#wa!webagent. The three data centers, and their timezones, are as follows:

* Z1 = Virginia, North America. The timezone for the Virginia farm is EST.
* Z2 = UK. The timezone for the UK farm is GMT (or GMT+1 during Daylight Saving Time).
* Z3 = Sydney, Australia. The timezone for the Sydney farm is AEST.

## Changing the data’s timezone in Analytics Builder

The data is shown according to the LivePerson Conversational Cloud account-level time zone configuration. When changing the account-level timezone, the change will take place in Analytics Builder on the next load. In addition, in the [Agent Activity Dashboard ](data-reporting-live-chat-chat-dashboards-agent-activity-dashboard.html)and the [Goal Tracker Dashboard**,**](data-reporting-live-chat-chat-dashboards-goal-tracker-report.html) users are able to change the time in which data is presented by selecting a time offset. This allows the users to analyze performance in their local time. In operational dashboards users are able to change the time in which the data is presented by selecting a time offset. This allows the users to analyze performance in their local time.

## Changing settings and reflected changes

Changes in settings are reflected in the Analytics Builder after the succeeding data load is completed.

## Historical data from deleted attributes

There is no deletion process in Analytics Builder, only the addition of data. The historical data will be available and can be filtered, in most cases, by a deleted indicator, for example - the 'ACTIVE AGENT INDICATOR' attribute cab used to show data of only non-deleted agents.
