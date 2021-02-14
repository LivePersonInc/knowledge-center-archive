---
pagename: Introducing the enhanced Analytics Builder
categoryName: Analytics Builder
subCategoryName:
indicator: both
subtitle: ''
level3: ''
permalink: data-reporting-analytics-builder-introducing-the-enhanced-analytics-builder.html
isTutorial: false
date:
isNew: false
redirect_from:
  - data-reporting-report-builder-introducing-the-enhanced-report-builder.html
---

The Analytics Builder infrastructure has been upgraded to the latest MicroStrategy (MSTR) version in order to benefit from the performance, scalability and enhanced secure platform.

## Getting started
### Look and feel

All predefined dashboards include diverse data visualizations that offer multiple color schemes.

![](img/new-look-and-feel.png)

### Terminology

With the new Infrastructure upgrade there are some changes in terminology which are relevant mostly for users who have edit access:

* Dashboard ⇒ Dossier

* Sheet ⇒ Chapter

* Panel ⇒ Page

### Access
The Analytics Builder can be accessed through the quick launch menu which is located on the bottom left of the navigation panel.

### Navigation
Dossier navigation has been moved from the bottom of the dashboard to the top. There are also new headings for each panel inside the sheet for effective use.

![](img/navigation.png)

### New KPI widget
The new KPI widget provides a quick visual snapshot of the current value of a KPI and how that KPI has changed over time.

![](img/new-kpi-widget.png)

The widget displays:

* The previous date value data

* Trend Indicator ( X%) which shows the trend between the previous date and the current date. The color will be green to reflect an improvement in the KPI and  red to reflect a negative change.

* Trend Graph which shows the trend for the filtered date range.

* Tooltips when hovering over the trend graph to see the date and value.

### View only users experience
Clear presentation for users with ‘view only’ permission, the filter panel has moved from left to the right to allow the data to be in the main focus area.

### Additional data visualizations
New visualization types for creating custom dossiers (histogram, waterfall chart, box plot)

![](img/additional-data.png)

## New functionality

### Personalized view
Users can save their own customized personal view of the dashboard. A personalized view is a lightweight copy of a dashboard and includes every change that was made to the dashboard including filtering the report period time frame and the offset selector. These updates will save time when choosing data to analyze and it allows you to define different views on the same dashboard without having to re-select the filters on the dashboard.
To create and save a personal view go to the file menu, select ‘Create Personal View’ and change the name to a meaningful name.
To run a personal view, after launching the Analytics Builder , select ‘My Subscriptions’ where you will see all your personal view subscriptions In the personal view subscriptions area, click the name of the personal view to run or edit it.
For example, you can create a view on the Agent Activity Dashboard for the last 30 days filtered for internal employees only and another view of the offshore team for the last 120 days. 

![](img/personalized-view.png)

{: .notice}
These changes will only impact the predefined dossiers. User copies of previous predefined  dossiers will not be impacted automatically. 

If there is a need to update existing user copies of the dashboard to the new color palette, this can be done manually in the Analytics Builder. After opening the required dossier, go to ‘Format’ Menu and choose ‘Custom Pallets’ -> LivePerson Palette and then save the changes.

![](img/pallete.png)

### Exporting to PDF
Users can export dashboards to a PDF file, and include custom visualization formatting and automatic, portrait and landscape layout options. They can use Advanced mode to export each visualization individually on separate pages to include all data. Export pdf is limited to 100 pages.

![](img/export-to-pdf.png)
