---
pagename: Analytics Builder FAQs
categoryName: Data & reporting
subCategoryName: Analytics Builder
indicator: both
subtitle: All the questions you want answered about the Analytics Builder
level3: ''
permalink: data-reporting-analytics-builder-analytics-builder-faqs.html
isTutorial: false
date: '2019-01-16T13:47:26.000+00:00'
isNew: false
redirect_from: data-reporting-report-builder-report-builder-faqs.html
---
### How can I access Analytics Builder?

From any one of the Conversational Cloud UI dashboards click the Analytics Builder icon on the left side of the screen; or via the Quick Launch menu using the button on the left of Conversational Cloud navigation panel.

### Can I create my own reports?

The Conversational Cloud Analytics Builder offers users to [create custom dashboards](data-reporting-report-builder-report-builder-user-guide-(customization).html) that can best fit their business needs. To create your own custom dashboards, please contact your LivePerson Account Manager or Customer Success Manager for additional information on how to obtain Edit Access to Analytics Builder.

### What reporting data is available?

To view available data in Conversational Cloud see [Predefined dashboards](data-reporting-report-builder-predefined-dashboards.html). Data in My Account is dependent on your individual account settings.

### With regard to data storage, where are the Analytics Builder servers located? In the same LivePerson data centres or in the Microstrategy cloud?

Analytics Builder data is all stored internally - on the same LivePerson servers as the rest of the Conversational Cloud, in the same LivePerson data centers.

### Is the information stored on Analytics Builder encrypted?

The same security measures applied to all other LivePerson products and servers also apply to Analytics Builder, including encryption.

## Performance

### Why is the 'predefined dashboards’ folder empty (no dashboards appear)?

There might be a caching issue with the browser. Please try to clear the cache on the browser, close and reopen the browser and login again.

### Data discrepancies

### Why do I see different values for metrics in the Analytics Builder and the BI Dashboards?

Make sure the filters are the same in the Analytics Builder and the BI. As default, the agent manager BI filter includes agent managers’ data, but doesn’t include inactive agent groups & agents (under INCLUDE section).

In Analytics Builder, the flexibility is higher and there are at least 3 different indicators:

* ACTIVE GROUP IND
* ACTIVE AGENT IND
* IS MANAGER IND

The default values are the same as in the BI, but when customizing a report and adding a new sheet - make sure to add these indicators to the filter panels and set the the same values as in the BI.

**Timezone for data display:** It is important to note that the Agent Manager BI displays data in the user’s local timezone, while the Analytics Builder dashboards and Campaign BI utilize the account’s timezone. For any other question\\issue not listed above, please contact LivePerson Technical Support through the Connection Area.

## Usability

### Can I move a dashboard I’ve created from one folder to another, or into a new folder?

You may only create a copy of the dashboard and select in which folder to save it. Please refer to the [Analytics Builder User Guide](data-reporting-report-builder-report-builder-user-guide-(standard).html) for additional information about working with folders.

### After deleting a campaign in LE, how can I remove the campaign from list of campaign in the filter?

Add the “CAMPAIGN DELETED INDICATOR” and “CAMPAIGN NAME” under the List of Campaigns dataset to the filter pane. Right-click the new filter and choose “Select Targets”. Choose the CAMPAIGN NAME attribute from the list. For more information please refer to the [user guide.](data-reporting-report-builder-report-builder-user-guide-(standard).html)

### What should I do to see a new metric created in the predefined dashboards in my copy of the dashboard?

New metrics added to existing datasets will appear as hidden in user copies once added to the predefined dashboard. To locate the new metric click on the arrow icon next to the “DASHBOARDS DATASETS” title line, and choose Show Hidden Objects. Scroll down to locate the new metric and check the box next to the metric.

![](/img/FAQRB-1.png)

{: .notice}  
New datasets added to the predefined dashboards do not get carried over to dashboard user-copies.

### The format of a time based derived metric I’ve created is wrong. Why?

After creating a time based derived metric such as ONLINE NOT ENGAGED = ONLINE - \[ONLINE TIME ENGAGED\], you’ve probably adjusted the “Number format” for the metric to “Time” in order to display the time values for the agents in a grid visualization.

Unfortunately, the default format in Micro strategy for Time based metrics does not carry over 24 hours properly. Therefore, it is advised to use the custom format “\[h\]:mm” instead of the default time format, as shown in the below screenshot:

## ![](/img/FAQ2RB-2-1.png)Funnel Reports

### How are indirect conversions attributed?

Before diving into specific scenarios, it is recommended to review documentation that explains how conversions are attributed to campaigns.

_Consider the following scenario:_

1. A visitor is engaged in a service campaign with a service based goal
2. Agent transfers visitor to a sales skill
3. Visitor proceeds to purchase a product associated with a Conversion goal from a sales campaign

### What is the attribution flow here if last agent / last campaign is configured on the account?

The last agent would be attributed with the conversion of this visitor. In this scenario, it is the sales agent.

The “last campaign” attribution in relevant to content banners alone. In this use case, this setting is irrelevant.

### Will this conversion be counted as an Indirect conversion towards the sales campaign?

The conversion will be counted as an Indirect conversion towards the Service campaign. The condition in question is: does the goal that was reached match the goal associated with campaign the visitor engaged in? In this example, the answer is NO. The goal achieved was a sales goal, while the goal configured on the campaign the visitor engaged through is a service goal. Therefore, the campaign the visitor engaged through will be attributed with an indirect conversion.

### Why is the campaign BI showing lower numbers for funnel metrics than those presented by Analytics Builder?

Funnel metrics, such as prospects and exposures, may show higher numbers in Analytics Builder predefined dashboards, for the same filtered timeframe.

The different originates from the methodology funnel metrics are computed:

* The Conversational Cloud campaign BI uses both the Visit session start time and the event time to match between the date/time filter and the metric results
* Analytics Builder uses only the Visit session start time

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
| Analytics Builder | 1 | 1 | 1 |

The Campaign BI validates that both visit start time and the event time were recorded during 20-Feb, while Analytics Builder only requires the visit start time to be recorded during 20-Feb.

Analytics Builder funnel metrics that are included in the above explanation are available through the “Exposures” and “Viewed and Accepted Offers” datasets. Please refer to the [Analytics Builder metrics](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html) for the full list of available metrics.

## Goal Tracker

### How can one capture cross-session conversions when running the dashboard?

The date filter of the goal tracker is applied to the engagement start time. Therefore, a cross-session conversion will be logged under the date on which the chat started. The following example aims to clarify on the expected behavior:

* The account’s conversion window is set to 3 days.
* On June 1st a chat engagement took place.
* On June 3rd the consumer converted.
* On June 4th the campaign manager wishes to pull a report for all conversions achieved on June 3rd
* The campaign manager needs to set the date filter in the goal tracker to include at least June 1st this cross session conversion.

## Handling of 3rd party defects

### What 3rd party tool does the Analytics Builder use and what is it's support policy?

The builder is based on a 3rd party tool by Microstrategy, named Microstrategy Desktop - Web Client. LivePerson is entitled to and will escalate newly discovered defects with the tool to Microstrategy. LivePerson does not commit to resolution of defects found within the Microstrategy platform, however, is committed to deploying fixes made available by Microstrategy to improve the stability and availability of the builder for LivePerson’s customers.

### What are the reporting tool browser requirements?

To ensure your browser and export software are supported for using the builder, review the [Microstrategy Desktop - Web Client system requirements website](https://env-132731.customer.cloud.microstrategy.com/MicroStrategyLibrary/app/0F79F3C611E92F02184F0080EF9511BB/DD9A640145118E77CC948A9410AC6539/K53--K46)
