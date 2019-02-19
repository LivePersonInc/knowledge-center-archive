---
pagename: Report Builder FAQs
categoryName: Data & reporting
subCategoryName: Report Builder
indicator: both
subtitle: All the questions you want answered about the Report Builder
level3: ''
permalink: data-reporting-report-builder-report-builder-FAQs.html
isTutorial: false
date: 2019-01-16 13:47:26 +0000
isNew: false

---
### How can I access Report Builder?

Report Builder can be accessed through the LiveEngage UI. From any of the dashboards, click the Report Builder icon on the left of the screen.

### Can I create my own reports?

LiveEngage Report Builder offers users to [create custom dashboards](data-reporting-report-builder-report-builder-user-guide-(customization).html) that can best fit their business needs. To create your own custom dashboards, please contact your LivePerson Account Manager or Customer Success Manager for additional information on how to obtain Edit Access to Report Builder.

### What reporting data is available?

The data currently available in LiveEngage predefined dashboards is detailed below. Data in My Account is dependent on your individual account settings.

* [Agent activity dashboard](data-reporting-messaging-messaging-dashboards-agent-activity-dashboard.html): Includes operational data about agents.
* [Skill activity dashboard:](data-reporting-live-chat-chat-dashboards-skills-activity-dashboard.html) Includes operational data about skills.
* [Goals Tracker:](data-reporting-messaging-messaging-dashboards-goal-tracker-report.html) Includes information about each conversion.
* [Messaging Performance Dashboard](data-reporting-messaging-messaging-dashboards-messaging-performance-dashboard.html): Includes business and operational data about messaging conversations.
* [Business Activity Dashboard:](data-reporting-messaging-messaging-dashboards-business-activity-grid.html) Includes information about campaigns and engagements performance.
* [Business Activity Grids](data-reporting-live-chat-chat-dashboards-business-activity-grid) are also available in Excel export format, in daily and monthly level aggregations.
* [Operational & Staffing dashboard](data-reporting-live-chat-chat-dashboards-operational-staffing-dashboard.html): Includes information about skill performance and skill demand.
* [Survey activity dashboard:](data-reporting-live-chat-chat-dashboards-survey-activity-dashboard.html) Includes information about responses to surveys presented  in Live Chat.

## With regard to data storage, where are the Report Builder servers located? In the same LivePerson data centres or in the Microstrategy cloud?

Report Builder data is all stored internally - on the same LivePerson servers as the rest of LiveEngage, in the same LivePerson data centers.

## Is the information stored on Report Builder encrypted?

**A:** The same security measures applied to all other LivePerson products and servers also apply to Report Builder, including encryption.

## Performance

## Why is the ‘LiveEngage predefined dashboards’ folder empty (no dashboards appear)?

There might be a caching issue with the browser. Please try to clear the cache on the browser, close and reopen the browser and login again.

## Data discrepancies

### Why do I see different values for metrics in the Report Builder and the BI Dashboards?

Make sure the filters are the same in the Report Builder and the BI. As default, the agent manager BI filter includes agent managers’ data, but doesn’t include inactive agent groups & agents (under INCLUDE section).

In Report Builder, the flexibility is higher and there are at least 3 different indicators:

* ACTIVE GROUP IND
* ACTIVE AGENT IND
* IS MANAGER IND

The default values are the same as in the BI, but when customizing a report and adding a new sheet - make sure to add these indicators to the filter panels and set the the same values as in the BI.

**Timezone for data display:** It is important to note that the Agent Manager BI displays data in the user’s local timezone, while the Report Builder dashboards and Campaign BI utilize the account’s timezone. For any other question\\issue not listed above, please contact LivePerson Technical Support through your LiveEngage Connection Area.

## Usability

## Can I move a dashboard I’ve created from one folder to another, or into a new folder?

 You may only create a copy of the dashboard and select in which folder to save it. Please refer to the [Report Builder User Guide](data-reporting-report-builder-report-builder-user-guide-(standard).html) for additional information about working with folders.

## After deleting a campaign in LE, how can I remove the campaign from list of campaign in the filter?

Add the “CAMPAIGN DELETED INDICATOR” and “CAMPAIGN NAME” under the List of Campaigns dataset to the filter pane. Right-click the new filter and choose “Select Targets”. Choose the CAMPAIGN NAME attribute from the list. For more information please refer to the [user guide.](data-reporting-report-builder-report-builder-user-guide-(standard).html)

## What should I do to see a new metric created in the predefined dashboards in my copy of the dashboard?

New metrics added to existing datasets will appear as hidden in user copies once added to the predefined dashboard. To locate the new metric click on the arrow icon next to the “DASHBOARDS DATASETS” title line, and choose Show Hidden Objects. Scroll down to locate the new metric and check the box next to the metric.

![](/img/FAQRB-1.png)

{: .notice}  
New datasets added to the predefined dashboards do not get carried over to dashboard user-copies.

## The format of a time based derived metric I’ve created is wrong. Why?

After creating a time based derived metric such as ONLINE NOT ENGAGED = ONLINE - \[ONLINE TIME ENGAGED\], you’ve probably adjusted the “Number format” for the metric to “Time” in order to display the time values for the agents in a grid visualization.

Unfortunately, the default format in Micro strategy for Time based metrics does not carry over 24 hours properly. Therefore, it is advised to use the custom format “\[h\]:mm” instead of the default time format, as shown in the below screenshot:

## ![](/img/FAQ2RB-2-1.png)Funnel Reports

## How are indirect conversions attributed?

Before diving into specific scenarios, it is recommended to review documentation that explains how conversions are attributed to campaigns.

_Consider the following scenario:_

1. A visitor is engaged in a service campaign with a service based goal
2. Agent transfers visitor to a sales skill
3. Visitor proceeds to purchase a product associated with a Conversion goal from a sales campaign

## What is the attribution flow here if last agent / last campaign is configured on the account?

The last agent would be attributed with the conversion of this visitor. In this scenario, it is the sales agent.

The “last campaign” attribution in relevant to content banners alone. In this use case, this setting is irrelevant.

## Will this conversion be counted as an Indirect conversion towards the sales campaign?

The conversion will be counted as an Indirect conversion towards the Service campaign. The condition in question is: does the goal that was reached match the goal associated with campaign the visitor engaged in? In this example, the answer is NO. The goal achieved was a sales goal, while the goal configured on the campaign the visitor engaged through is a service goal. Therefore, the campaign the visitor engaged through will be attributed with an indirect conversion.

## Why is the campaign BI showing lower numbers for funnel metrics than those presented by Report Builder?

Funnel metrics, such as prospects and exposures, may show higher numbers in report builder predefined dashboards, for the same filtered timeframe.

The different originates from the methodology funnel metrics are computed:

* LiveEngage campaign BI uses both the Visit session start time and the event time to match between the date/time filter and the metric results
* Report Builder uses only the Visit session start time

#### Example

1. The following session is given
   1. 20-Feb 23:30 Visitor enters the website
   2. 20-Feb 23:35 Visitor becomes eligible for a campaign (Prospect)
   3. 21-Feb 00:10 Visitor views a chat button (Exposure)
   4. 21-Feb 00:15 Visitor clicks on chat button (Accepted Offer)
2. A campaign manager sets the date filter to 20-Feb (full day)

|  | Prospects | Exposed | Accepted Offers |
| --- | --- | --- | --- |
| Campaign BI | 1 | 0 | 0 |
| Report Builder | 1 | 1 | 1 |

The Campaign BI validates that both visit start time and the event time were recorded during 20-Feb, while Report Builder only requires the visit start time to be recorded during 20-Feb.

Report Builder funnel metrics that are included in the above explanation are available through the “Exposures” and “Viewed and Accepted Offers” datasets. Please refer to the [Report Builder metrics](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html) for the full list of available metrics.

## Goal Tracker

## How cab one capture cross-session conversions when running the dashboard?

The date filter of the goal tracker is applied to the engagement start time. Therefore, a cross-session conversion will be logged under the date on which the chat started. The following example aims to clarify on the expected behavior:

* The account’s conversion window is set to 3 days.
* On June 1st a chat engagement took place.
* On June 3rd the consumer converted.
* On June 4th the campaign manager wishes to pull a report for all conversions achieved on June 3rd
* The campaign manager needs to set the date filter in the goal tracker to include at least June 1st this cross session conversion