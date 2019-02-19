---
pagename: Data availability and latency
categoryName: Data & reporting
subCategoryName: Report Builder
indicator: both
subtitle: An overview in to data availability and latency within Report Builder
level3: ''
permalink: data-reporting-report-builder-data-availability-and-latency.html
isTutorial: false
date: 2019-01-17 09:37:53 +0000
isNew: false

---
### How long is data stored for in Report Builder?

Operational data is stored for 13 months, while Business (funnel) data is available since March 2017

### How frequently is the data updated in Report Builder?

Reports are refreshed throughout the day, every eight hours. The first data update takes place every morning, between 07:00 to 08:00 in the timezone of the data center timezone* from which your account is operated. After each update, the reports display the data collected up to 6 hours earlier.

\*Every LiveEngage account sits on one of our three farms. Your account’s farm is indicated in the account URL, for example: https://z1.le.liveperson.net/a/9999999/#wa!webagent. The three data centers, and their timezones, are as follows:

* Z1 = Virginia, North America. The timezone for the Virginia farm is EST.
* Z2 = UK. The timezone for the UK farm is GMT (or GMT+1 during Daylight Saving Time).
* Z3 = Sydney, Australia. The timezone for the Sydney farm is AEST.

### How can I change the data’s timezone in Report Builder?

The data is shown according to the LiveEngage account-level time zone configuration. When changing the account-level timezone, the change will take place in Report Builder on the next load. In addition, in the [Agent Activity Dashboard ](data-reporting-live-chat-chat-dashboards-agent-activity-dashboard.html)and the [Goal Tracker Dashboard**,**](data-reporting-live-chat-chat-dashboards-goal-tracker-report.html) users are able to change the time in which data is presented by selecting a time offset. This allows the users to analyze performance in their local time. In operational dashboards users are able to change the time in which the data is presented by selecting a time offset. This allows the users to analyze performance in their local time.

### How long after changing a setting in my account does the Builder reflect the change?

Changes in settings are reflected in the Report Builder after the succeeding data load is completed.

### Is historical data from deleted attributes (such as agents, surveys, etc.) available in the Report Builder?

Yes. There is no deletion process in Report Builder, only the addition of data. The historical data will be available and can be filtered, in most cases, by a deleted indicator, for example - the 'ACTIVE AGENT INDICATOR' attribute cab used to show data of only non-deleted agents.