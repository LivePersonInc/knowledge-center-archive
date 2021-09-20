---
pagename: User Guide (standard)
categoryName: Data & reporting
subCategoryName: Analytics Builder
indicator: both
subtitle: 'User guide for users with read only access '
level3: ''
permalink: data-reporting-analytics-builder-analytics-builder-user-guide-(standard).html
isTutorial: false
date: '2019-01-10T09:10:56.000+00:00'
redirect_from: 
   - data-reporting-report-builder-report-builder-user-guide-(standard).html
---
## Accessing Analytics Builder

Brands can access Analytics Builder through the Conversational Cloud UI, from the messaging real time dashboard, queue health dashboard, and campaign dashboard.

To access the Analytics Builder:

1. Log into the Conversational Cloud using your campaign manager or agent manager credentials.
2. Open the dashboard by clicking the drag down icon.
3. Click the Analytics Builder icon on the left of the screen. A new tab is opened.
4. Click **shared reports**. Two folders are displayed:
   * **LE predefined dashboards**: All available predefined LivePerson dashboards.
   * **My account**: Reports that have been designed specifically for your account.
   * **Analytics reporting**: Customized dashboards created by LP for brands with a customization package.
5. Click on a folder to view the available reports inside.

## Data view restrictions

Analytics Builder filters data by agent groups, meaning that agent group managers can see data from their own group(s) and subgroups only.

Where there is data that cannot be pre-filtered by agent group, there are also restrictions by role:

* Agent managers are not allowed to view data in the business activity dashboard that cannot be filtered by agent groups.
* If a copy of the business activity dashboard is saved under the ‘my account’ folder, an agent manager trying to access it will receive an error message and will not be able to see any data.
* No restrictions apply for campaign managers.
* Agent managers required to view business data available on the business activity dashboard will need to be assigned the role of campaign manager as well.

## Analytics Builder folders

Dashboards in Analytics Builder are saved in folders. The available folders are as follows:

* **Shared reports -** dashboards saved here are visible to all the users in the account.
* **Predefined dashboards**: All available predefined dashboards.
* **My account**: Reports that have been designed specifically for your account, created by you, other users in the account or by the LP account team.
* **Analytics reporting**: Customized dashboards created by LP for brands with a customization package. All users eligible for receiving these customized reports will have view access to the folder and its dashboards.
* **My reports -** dashboards saved here are visible only to the user who created the dashboard.

## LivePerson predefined dashboards

The Conversational Cloud Analytics Builder provides a robust reporting platform with powerful DIY features allowing brands to create their own business-intelligent dashboards. The Conversational Cloud comes with a set of predefined dashboards which offer ready made reports for account data flowing into Analytics Builder from the Conversational Cloud data platform. These predefined dashboards can be used out of the box, or manipulated to create customized reports which contain unique key performance indicators.

If you wish to enrich the predefined dashboards, and customize them to their needs are requested to approach their LivePerson account manager.

The data currently available in the predefined dashboards can be found [here](https://knowledge.liveperson.com/data-reporting-report-builder-predefined-dashboards.html)

{: .notice}  
The data included in the Analytics Builder is constantly evolving.

## Metrics glossary

Before beginning your analysis using the available predefined dashboards, we highly recommend opening the glossary listing all metrics with their corresponding formulas and descriptions.

The glossary contains a full list of metrics available through Analytics Builder. Metrics that do not appear in the predefined dashboards can be added by a LivePerson member to the account specific dashboards upon request. Please reach out to your account manager or customer success manager for information about gaining access to additional metrics.

Click [here](https://knowledge.liveperson.com/data-reporting-reporting-metrics.html) to access the Analytics Builder Data Metrics.

## Field details sheet

Every predefined dashboard includes a sheet titled “field details.” This sheet presents a grid with the definitions of each metric and attribute displayed in the visualizations of the dashboard.

### **Viewing reports**

Each report in the Analytics Builder includes dashboard view(s) and field details. You can change between views by using the tabs at the bottom of the screen.

**To run a report:** Click on the dashboard you wish to open.

### **Time-frame selector**

When selecting a dashboard to run you will be asked to select a timeframe for the dashboard data. This prompt is the “time frame selector.” The dashboard will only present data from the pre-loaded timeframe. You can always “re-prompt” from within the dashboard’s file menu.

In the selector, you may choose from one of the following time-frame options:

1. Last 120 days
2. Last 60 days (default)
3. Last 30 days
4. Filter for months - choose up to four individual months from the past 13 months

### **Hour offset selector**

When running the dashboards below another prompt will be shown - “hour offset selector.” This prompt presents a selection of time offsets from the default timezone of the account. Using this allows you to present the data in the dashboard in your local time zone (in case it is different from the account's).

* [agent activity dashboard](data-reporting-messaging-messaging-dashboards-agent-activity-dashboard.html)
* [goal tracker dashboard](data-reporting-messaging-messaging-dashboards-goal-tracker-report.html),
* [Performance dashboard for messaging](data-reporting-messaging-messaging-dashboards-performance-dashboard-for-messaging.html)
* [Survey dashboard for Messaging & Live Chat](https://knowledge.liveperson.com/data-reporting-messaging-messaging-dashboards-survey-dashboard-for-messaging.html)
* [Skill dashboard for Live Chat](https://knowledge.liveperson.com/data-reporting-live-chat-chat-dashboards-skills-dashboard-for-live-chat.html)


If you do not require any change in view from the account default time zone setting, you won’t need to choose anything in the pop-up prompt before running the dashboard (the default offset is TZ+0 which is a zero hour offset from the account default setting).

### **Dashboard view**

Data is displayed in a graphical format and/or in grid view. The data is presented to all users according to their LivePerson Conversational Cloud account-level time zone, even if their user-level time zone has been configured differently.

![](/img/Business_Dashboard_for_Livechat_Campaign.jpg)

Hover over any report with your mouse to view an explanation of what the report displays. You can customize how the data is displayed by choosing your own color scheme.

## Filtering reports

Each report can be filtered to ensure that only the most relevant data is displayed. Reports can be filtered according to specific criteria. These criteria include some or all of the following parameters: date, agent group, agent, skill and so on.

To filter a report:

1. Select a report either from the predefined dashboards or from the reports in My Account. For the example below, the Agent Activity Dashboard is used.
2. On the left of the screen, select the dates for which you would like to display data.

   Please note:
   * Data will only display for dates chosen within the timeframe selected when you first ran the report.
   * You can select specific dates using the calendar option, or you can select dynamic date to select a timeframe relative to today’s date.
3. Click **OK**.
4. Under each parameter, for example Agent, use the checkmarks to select the data you would like to be displayed.
5. At the top left of the screen, click **Apply.** The data will now be displayed according to your preferences.

## Exporting reports

Exports can be exported in PDF or Excel format.

To export a report:

1. Hover your mouse cursor over the top right corner of your screen until an arrow is displayed.
2. Click the arrow, and then select **export.** The following options are displayed: **Excel**, **PDF**, **data**.
3. Select an export option.

By default:

* Excel will be used when the view is grid.
* PDF will be used when the view is widgets.
* Data is exported to a CSV file.

## LivePerson technical support

LivePerson technical support is available 24/7 in the[ Connection Area](https://liveengage.liveperson.net/a/new/#registration!signUp).

Please note that LivePerson support troubleshoots and resolves issues in predefined dashboards officially released by LivePerson as part of the product.

Issues with dashboards residing in the “my account” or “my reports” folder should be directed to your account manager.
