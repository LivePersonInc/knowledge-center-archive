---
pagename: Report Builder FAQs
categoryName: Data & reporting
subCategoryName: Report Builder
indicator: both
subtitle: All the questions you want answered about the Report Builder
level3: ''
permalink: data-&-reporting-report-builder-report-builder-FAQs
isTutorial: false
date: 2019-01-16 15:47:26 +0200
published: false

---
## Framework inquiries

### **Q: How can I access Report builder?**

**A:** Report Builder can be accessed through the LiveEngage UI. From any of the dashboards, click the Report Builder icon on the left of the screen.

### **Q: Can I create my own reports?**

**A:** LiveEngage Report Builder offers users to create custom dashboards that can best fit their business needs. To create your own custom dashboards, please contact your LivePerson Account Manager or Customer Success Manager for additional information on how to obtain Edit Access to Report Builder.

### **Q: What reporting data is available?**

**A:** The data currently available in LiveEngage predefined dashboards is detailed below. Data in My Account is dependent on your individual account settings.

* Agent Activity Dashboard: Includes operational data about agents.
* Skill Activity Dashboard: Includes operational data about skills.
* Goals Tracker: Includes information about each conversion.
* Messaging Performance Dashboard: Includes business and operational data about messaging conversations.
* Business Activity Dashboard: Includes information about campaigns and engagements performance.
* Business Activity Grids are also available in Excel export format, in daily and monthly level aggregations.
* Operational & Staffing dashboard: Includes information about skill performance and skill demand.
* Survey Activity Dashboard: Includes information about responses to surveys presented  in Live Chat.

### **Q: With regard to data storage, where are the Report Builder servers located? In the same LivePerson data centres or in the Microstrategy cloud?**

**A:** Report Builder data is all stored internally - on the same LivePerson servers as the rest of LiveEngage, in the same LivePerson data centers.

### **Q: Is the information stored on Report Builder encrypted?**

**A:** The same security measures applied to all other LivePerson products and servers also apply to Report Builder, including encryption.

## Performance

### **Q: Why is the ‘LiveEngage predefined dashboards’ folder empty (no dashboards appear)?**

**A:** There might be a caching issue with the browser. Please try to clear the cache on the browser, close and reopen the browser and login again.

## Data discrepancies

### **Q: Why do I see different values for metrics in the Report Builder and the BI Dashboards?**

**A:** Make sure the filters are the same in the Report Builder and the BI. As default, the agent manager BI filter includes agent managers’ data, but doesn’t include inactive agent groups & agents (under INCLUDE section).

In Report Builder, the flexibility is higher and there are at least 3 different indicators:

* ACTIVE GROUP IND
* ACTIVE AGENT IND
* IS MANAGER IND

The default values are the same as in the BI, but when customizing a report and adding a new sheet - make sure to add these indicators to the filter panels and set the the same values as in the BI.

**Timezone for data display:** Note that the Agent Manager BI displays data in the user’s local timezone, while the Report Builder dashboards and Campaign BI utilize the account’s timezone. For any other question\\issue not listed above, please contact LivePerson Technical Support through your LiveEngage Connection Area.

## Usability

### **Q: Can I move a dashboard I’ve created from one folder to another, or into a new folder?**

**A:** You may only create a copy of the dashboard and select in which folder to save it. Please refer to the [Report Builder User Guide](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Report+Builder/Report+Builder+User+Guide.pdf) for additional information about working with folders.

### **Q: After deleting a campaign in LE, how can I remove the campaign from list of campaign in the filter?**

**A:** Add the “CAMPAIGN DELETED INDICATOR” and “CAMPAIGN NAME” under the List of Campaigns dataset to the filter pane. Right-click the new filter and choose “Select Targets”. Choose the CAMPAIGN NAME attribute from the list. For more information please refer to the [user guide](https://app.getguru.com/#/facts/d5a4d2a3-69ae-4009-83f4-16896afa1356).

### **Q: What should I do to see a new metric created in the predefined dashboards in my copy of the dashboard?**

**A:** New metrics added to existing datasets will appear as hidden in user copies once added to the predefined dashboard. To locate the new metric click on the arrow icon next to the “DASHBOARDS DATASETS” title line, and choose Show Hidden Objects. Scroll down to locate the new metric and check the box next to the metric.

![](https://lh4.googleusercontent.com/cg6GfNM6hMMg_gXQhCIpH5gdJs_pOL9GIGG90jro9fE9P5cFYgBZ4y6l2mqk8_LxxXknVEvHleKbglRYYy8vJYjjUSwVjpQkJfbQUirP2UqobLijDKIXh5pX_WPJQ3zmkIIA9_Bk =624x177)  
It is important to note that new datasets added to the predefined dashboards do not get carried over to dashboard user-copies.

### **Q: The format of a time based derived metric I’ve created is wrong. Why?**

**A:** After creating a time based derived metric such as ONLINE NOT ENGAGED = ONLINE - \[ONLINE TIME ENGAGED\], you’ve probably adjusted the “Number format” for the metric to “Time” in order to display the time values for the agents in a grid visualization.

Unfortunately, the default format in Micro strategy for Time based metrics does not carry over 24 hours properly. Therefore, it is advised to use the custom format “\[h\]:mm” instead of the default time format, as shown in the below screenshot:

## ![](https://lh6.googleusercontent.com/82iU4ATDdK6CNss_pqMt7HlcDDycTghIxKrkS6w3SmCXWzjToqSr0Eo_eYYUEcMLGQdwmo6AJoX5J6s9ZvF7FiqmtDBCZEa07tKlUVMpjfOHzApbTkRAZwPCxQcpgJzIqyQAObYf =624x312)Funnel Reports

### **Q: How are indirect conversions attributed?**

**A:** Before diving into specific scenarios, it is recommended to review [documentation](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=what-made-your) that explains how conversions are attributed to campaigns.

_Consider the following scenario:_

1. A visitor is engaged in a service campaign with a service based goal
2. Agent transfers visitor to a sales skill
3. Visitor proceeds to purchase a product associated with a Conversion goal from a sales campaign

### **Q: What is the attribution flow here if Last Agent / Last Campaign is configured on the account?**

**A:** The Last Agent would be attributed with the conversion of this visitor. In this scenario, it is the Sales agent.

The “Last Campaign” attribution in relevant to content banners alone. In this use case, this setting is irrelevant.

### **Q: Will this conversion be counted as an Indirect Conversion towards the Sales Campaign?**

**A:** The conversion will be counted as an Indirect conversion towards the Service campaign. The condition in question is: does the goal that was reached match the goal associated with campaign the visitor engaged in? In this example, the answer is NO. The goal achieved was a sales goal, while the goal configured on the campaign the visitor engaged through is a service goal. Therefore, the campaign the visitor engaged through will be attributed with an indirect conversion.

### **Q: Why is the Campaign BI showing lower numbers for funnel metrics than those presented by Report Builder?**

**A:** Funnel metrics, such as prospects and exposures, may show higher numbers in report builder predefined dashboards, for the same filtered timeframe.

The different originates from the methodology funnel metrics are computed:

* LiveEngage Campaign BI uses both the Visit session start time and the event time to match between the date/time filter and the metric results
* Report Builder uses only the Visit session start time

Example

1. The following session is given
   1. 20-Feb 23:30 Visitor enters the website
   2. 20-Feb 23:35 Visitor becomes eligible for a campaign (Prospect)
   3. 21-Feb 00:10 Visitor views a chat button (Exposure)
   4. 21-Feb 00:15 Visitor clicks on chat button (Accepted Offer)
2. A Campaign Manager sets the date filter to 20-Feb (full day)

|  | Prospects | Exposed | Accepted Offers |
| --- | --- | --- | --- |
| Campaign BI | 1 | 0 | 0 |
| Report Builder | 1 | 1 | 1 |

The Campaign BI validates that both visit start time and the event time were recorded during 20-Feb, while Report Builder only requires the visit start time to be recorded during 20-Feb.

Report Builder funnel metrics that are included in the above explanation are available through the “Exposures” and “Viewed and Accepted Offers” datasets. Please refer to the [Report Builder glossary file](https://app.getguru.com/#/facts/e1be28cc-cfc9-4f4d-82df-f9fcc0b3d8aa) for the full list of available metrics.

## Goal Tracker

### **Q: How could one capture cross session conversions when running the dashboard?**

**A:** The Date filter of the Goal Tracker is applies to the Engagement start time. Therefore, a cross session conversion will be logged under the date on which the chat started. The following example aims to clarify on the expected behavior:

* The account’s conversion window is set to 3 days.
* On June 1st a Chat engagement took place.
* On June 3rd the consumer converted.
* On June 4th the Campaign Manager wishes to pull a report for all conversions achieved on June 3rd
* The Campaign Manager needs to set the Date filter in the Goal Tracker to include at least June 1st this cross session conversion