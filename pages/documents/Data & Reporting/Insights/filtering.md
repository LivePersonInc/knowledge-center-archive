---
pagename: Filtering 
categoryName: Data & reporting
subCategoryName: Insights
indicator: messaging
subtitle: Filtering allows you to quickly drill down into items of interest for analysis
level3: Getting started
permalink: data-reporting-insights-filtering.html
isTutorial: true
isNew: false
date: 2020-05-19
---

## Overview
Filtering within the dashboard can be achieved in a variety of ways, allowing you to quickly drill down into items of interest for analysis. In addition to drilling down into individual items within a visualisation, filtering can be applied at a Global, Tab or Widget level.

## Global Filtering
Filtering at a global level (i.e., across the dashboard) can be achieved by clicking on the filter icon to the left of the dashboard.
Use global filtering when you want to apply a specific filter across all elements of the dashboard (e.g., a set time range or a specific set of skills).
* Click on the Filter Icon
* Click Add Filter
* Select the field on which you would like to apply a filter
* Select Range / Values to include / exclude. Here you can also Include/Exclude Non-Existent Values (i.e., records that have an empty value for that field)
* Add Filter

Note: Once you add the filter, it applies to every widget on every tab of the dashboard. If you add tab-level or widget-level filters, by default, the tab or widget-level filters apply to the already-filtered data set at the global filter level.

### Common Filter Examples:
#### Selecting Specific Items:
Skill Names

#### Selecting a Range - Dates, e.g., Start Time / Date
Use the calendar icons to select start and end dates for date fields
NB - Times convert to UTC when you apply a date/time filter

#### Selecting a Range - Numerical Fields, e.g. CSAT
In addition to selections, you can filter by a numerical range for numeric fields
For the From value, you can select greater-than, or greater-than-or-equal-to.
For the To value, you can select less-than, or less-than-or-equal-to.

## Tab Level Filtering
Alternatively, you can filter a specific tab only, affecting widgets within that tab
Use tab level filtering when you want to apply a specific filter for a tab distinct to the rest of the dashboard (e.g., a subset of skills)
* Select Filter from the Drop Down menu to the right of the tab name
* Click Add Filter (note the bottom left hand corner check box allows you to  Override Global Filters)
* Select the field on which you would like to apply a filter
* Select Range / Values to include / exclude. Here you can also Include/Exclude Non-Existent Values
* Add Filter , then Submit

## Widget Level Filtering
You can also filter at a widget level. This is particularly useful where a field may have a large amount of non-existent values (e.g., Survey response answers) 
* Select Filters from the menu on the top right of the widget 
* Click Add Filter (note the bottom left hand corner check box allows you to  Override Global Filters)
* Select the field on which you would like to apply a filter
* Select Range / Values to include / exclude. Here you can also Include/Exclude Non-Existent Values
* Add Filter , then Submit

## Filtering within a Graph / Table
Clicking on any part of a visualisation (e.g., graph, word cloud or list item), has the effect of a global filter. Further to this, you can also filter on a range of items (e.g., Days) on any bar graph by pressing the left mouse button down and dragging across bars. You can filter on multiple items across widgets. All filters are displayed as tabs at the bottom of the dashboard. Filter can be removed by clicking on these tabs and selecting the cancel x button.

## Searching within Customer / Agent Verbatim
On the Data tab, searching for specific words within customer / agent verbatim gives a quick view of conversations containing select words.

Note: this is only suitable for individual words (e.g., email) or a string of words in an exact order (e.g., got an email). 

* Click on Data Tab
* Navigate to relevant model (eg Customer NLU Model)
* In Search By box select field (e.g., customer_verbatim)
* Type word next to magnifying glass in next box
* Click Search button to display results
* Note that search is case sensitive and retrieves exact matches only

## Adding more than one filter of the same attribute
We cannot add two separate filters of the same attribute at tab/widget/global level.  So, create a filter by using one of the filters at tab level and the other one at the global/widget level, depending on the use case.
