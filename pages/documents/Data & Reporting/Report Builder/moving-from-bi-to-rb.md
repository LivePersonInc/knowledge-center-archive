---
pagename: Moving from BI to Report Builder
categoryName: Data & reporting
subCategoryName: Report Builder
indicator: both
subtitle: 'Report Builder is a new and improved version of LiveEngage BI dashboards '
level3: ''
permalink: data-reporting-report-builder-moving-from-BI-to-report-builder.html
isTutorial: false
date: 2019-01-17 09:52:11 +0000
isNew: false

---
Report Builder is a new and improved version of LiveEngage BI dashboards.  
With superior performance, an additional layer of messaging KPIs, and the ability to tailor dashboards to specific business needs, the Report Builder goes beyond the capabilities available in LE BI.

## Getting started

Brands can access Report Builder through the LiveEngage UI, from the Messaging Real-time Dashboard, Queue Health Dashboard, and Campaign Dashboard.

To access Report Builder:

1. Log into LiveEngage using your campaign manager or agent manager credentials.
2. Open the dashboard by clicking the drag down icon.
3. Click the Report Builder icon on the left of the screen. A new tab is opened.
4. Click **shared reports**. Two folders are displayed:
   * **LE predefined dashboards**: All available predefined LiveEngage dashboards.
   * **My account**: Reports that have been designed specifically for your account.
5. Click on a folder to view the available reports inside.

Please see the [Report Builder overview](data-reporting-report-builder-report-builder-overview.html) for more information.

## Available data and dashboards

Report Builder includes all the data that is available in BI and much more (for example, messaging KPIs are only available through RB).

Please note that though the visualizations and grids may vary between the BI dashboards and their equivalent in the Report Builder, all the data can be obtained from these dashboards.

In case a certain KPI is not available out-of-the-box in a Report Builder dashboard, please reach out to your LP team to ensure it is added to your dashboards. Brands with a customer success offering can also request for customized dashboards with self defined KPIs and visualizations tailored to their business needs.

Below are the steps needed in order to reach each of the available reports in the BI, through Report Builder:

### Agent manager BI dashboards

Agent manager BI dashboards are available through ‘VISITORS’ tab.

![](/img/moving-from-BI-RB1.png)

### Agent activity

1. Go to: shared reports > LE predefined dashboards > agent activity dashboard
2. Choose your selectors:
   1. Time frame selector - the time frame included in the report
   2. Hour offset selector - the timezone in which the data is presented
3. **Dashboard**: Agent activity dashboard - 1st panel (default panel)
4. **Grid**: Agent activity grid - 2nd panel (move between panel by clicking on the blue dots at the bottom of the dashboard)

### Agent goal tracker

1. Go to: Shared reports > LE predefined dashboards > Goal tracker dashboard
2. Choose your selectors:

* Time frame selector - the time frame included in the report
* Hour offset selector - the timezone in which the data is presented

### Survey activity

1. Go to: Shared reports > LE predefined dashboards > Survey activity dashboard
2. Selectors screen: Select the time frame for the report
3. **DASHBOARD**: Survey activity dashboard - 1st tab (default tab)
4. **GRID**: Survey activity grid - 2nd tab (move between panel by clicking on the blue dots at the bottom of the dashboard)

### Engagement activity

1. Go to: Shared reports > LE predefined dashboards > Skill activity dashboard
2. Selectors screen: Select the time frame for the report
3. **DASHBOARD**: Skill activity dashboard - 1st panel (default panel)
4. **GRID**: Skill activity grid - 2nd panel (move between panel by selecting the 2nd blue dot at the bottom of the dashboard)

### Campaign BI dashboards

Campaign BI dashboards are available through ‘CAMPAIGNS’ tab.

![](/img/moving-from-BI-RB2.png)

### Campaign dashboard

1. Go to: Shared Reports > LE predefined dashboards > business activity dashboard
2. Selectors screen: Select the time frame for the report

### Site level grid - daily

1. Go to: Shared Reports > LE predefined dashboards > business activity grid - daily
2. Selectors screen: Select the time frame for the report

### Site level grid - monthly

1. Go to: Shared Reports > LE predefined dashboards > business activity grid - monthly
2. Selectors screen: Select the time frame for the report

### Campaign level grid

1. Go to: Shared Reports > LE predefined dashboards > business activity dashboard
2. Selectors screen: Select the time frame for the report
3. Campaign - 3rd panel (move between panel by clicking on the blue dots at the bottom of the dashboard)

### Engagement level grid

1. Go to: Shared Reports > LE predefined dashboards > business activity dashboard
2. Selectors screen: Select the time frame for the report
3. Engagement- 4th panel (move between panel by clicking on the blue dots at the bottom of the dashboard)

## Considerations

### Time zone for data display

The agent manager BI displays data in the user’s local timezone, while the Report Builder dashboards and campaign BI utilize the account level time zone configuration.

When changing the account-level timezone, the change will take place in Report Builder on the next load. In addition, in the agent activity dashboard​ and the goal tracker dashboard, ​users are able to change the time in which data is presented by selecting a time offset. This allows the users to analyze performance in their local time. The data in RB is shown according to LiveEngage’s account-level time zone configuration. In operational dashboards users are able to change the time in which the data is presented by selecting a time offset. This allows the users to analyze performance in their local time.

### Data refresh

Currently in RB, data is refreshed once a day, to include data up to the previous day (inclusive). In the August release, the refresh rate will increase to three times a day.

### Data display

In Report Builder, within each dashboard, data can be displayed for any four month period from over the previous 13 months (the months do not have to be consecutive). However, in the business activity grid - monthly​, ​users are able to select to display the entire last 13 months of data.

## Funnel metrics

Funnel metrics, such as prospects and exposures, may show higher numbers in Report Builder predefined dashboards, for the same filtered timeframe.

The different originates from the methodology funnel metrics are computed:

* Campaign BI uses both the visit session start time and the event time to match between the date/time filter and the metric results
* Report Builder uses only the visit session start time

**Example**

The following session is given

* 20-Feb 23:30 visitor enters the website
* 20-Feb 23:35 visitor becomes eligible for a campaign (prospect)
* 21-Feb 00:10 visitor views a chat button (exposure)
* 21-Feb 00:15 visitor clicks on chat button (accepted offer)

  A Campaign Manager sets the date filter to 20-Feb (full day)

|  | Prospects | Exposed | Accepted Offers |
| --- | --- | --- | --- |
|  | Prospects | Exposed | Accepted Offers |
| Campaign BI | 1 | 0 | 0 |
| Report Builder | 1 | 1 | 1 |

The campaign BI validates that both visit start time and the event time were recorded during 20-Feb, while Report Builder only requires the visit start time to be recorded during 20-Feb.

Report Builder funnel metrics that are included in the above explanation are available through the “exposures” and “viewed and "accepted offers” datasets. Please refer to the [Report Builder metrics](https://developers.liveperson.com/essential-resources-report-builder-data-metrics.html) for the full list of available metrics.