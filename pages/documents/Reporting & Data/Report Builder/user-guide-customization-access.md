---
pagename: Report Builder user guide (customization)
categoryName: Data & reporting
subCategoryName: Report Builder
indicator: both
subtitle: 'This user guide sets out detailed instructions for building your own dashboards,
  creating filters and visualizations and more '
level3: ''
permalink: data-&-reporting-report-builder-user-guide-customization-access.html
isTutorial: false
date: 2019-01-16 13:37:29 +0200
published: false

---
# Introduction

This User Guide sets out detailed instructions for building your own dashboards, creating filters and visualizations and more.

**DISCLAIMER:**

LivePerson will support standard reports that are provided by LivePerson as part of the Report Builder product. If you use Report Builder to create or implement custom reports, we suggest that you keep the guidelines outlined in the [customize dashboards](https://docs.google.com/document/d/1JE5RT9ebB1gU0WJUO2iB50wSy7ZSJWapvid0RsDkyFU/edit#heading=h.jyq1rsq9ms12) section in mind. However, please note that we will not provide support for these custom reports. LivePerson is not liable for any loss or damage to data that may result from the use or performance of any custom reports.

# Getting Started

## Accessing Report Builder

Brands can access Report Builder through the LiveEngage UI, from the messaging real time dashboard, queue health dashboard, and campaign dashboard.

**How to access the Report Builder**

1. Log into LiveEngage using your campaign manager or agent manager credentials.
2. Open the dashboard by clicking the drag down icon
3. Click the Report Builder icon on the left of the screen. A new tab will open.

**How to video:** [**Getting started**](https://bcove.video/2vj2Sid)

## Permissions

In order for agent managers and campaign managers to be able to view, customize or share reports in Report Builder, the following permissions need to be enabled in their user profile:

* View reports in Report Builder - allows viewing of all reports
* Customize reports in Report Builder - allows users to customize reports and save them within the 'My Reports' folder.
* Share reports in Report Builder - allows users to share reports with other account users by saving them in the my account folder

  **Note:** These permissions are disabled for both agent manager and campaign manager roles by default.

To enable permissions:

1. In the Users tab, click on the profiles page.
2. Click on the ‘agent manager’ or ‘campaign manager’ profile. The edit profile page will open.
3. Under permissions, scroll down to the Report Builder permissions listed above and enable the permissions you wish the user to have.
4. Click **Save**.

**Note:** If you would like to enable one or more of the Report Builder permissions for some users, but not for others, this can be achieved by creating a new custom profile within either the agent manager or campaign manager role. For further information, refer to the [Customize user profiles documentation]().

## Data view restrictions

Report Builder filters data by agent groups, meaning that agent group managers can see data from their own group(s) and subgroups only.

Where there are data that cannot be pre-filtered by agent group, there are also restrictions by role:

* Agent managers are not allowed to view data in the Business Activity Dashboard that cannot be filtered by agent groups.
* If a copy of the Business Activity Dashboard is saved under the ‘my account’ folder, an agent manager trying to access it will receive an error message and will not be able to see any data.
* No restrictions apply for campaign managers.
* Agent managers required to view business data available on the Business Activity Dashboard will need to be assigned the role of campaign manager as well.

## Report Builder Folders

Dashboards in Report Builder are saved in folders. The available folders are as follows:

* **Shared reports** - dashboards saved here are visible to all the users in the account.
* **LE predefined dashboards**: All available predefined LiveEngage dashboards. See details below.
* **My account**: Reports that have been designed specifically for your account, created by you, other users in the account or by the LP account team.
* **Analytics RB reporting**: Customized reports created by LP for accounts with a CSO (Customer Support Offering) package. The folder will be visible and accessible as read-only for accounts eligible of a CSO package.
* **My reports -** dashboards saved here are visible only to the user who created the dashboard.

### Creating and managing Sub folders

In the **my account** and **my reports folders**, users may create sub-folders to organize copies of existing dashboards. Each sub-folder can contain any number of saved dashboard. While any user with access to Report Builder may view sub folders and their content, managing sub-folders is only available to users with the permission to Customize Reports.

![](https://lh4.googleusercontent.com/6RG7a3N6q_RjfGIrnGAcbqFkmLQwWEJUPAcfRIfuRFqHG45NshzicYrfVTC595mZAZfEIpsILxrJFBS1lvzyidmxh4L-WBtuGx2WV2Dvpb4f2wViaY_k6V6lQzOf50cglguA2aXJ =624x115)

**Creating** a folder under “my account” or “my reports” folders

1. Access Report Builder and navigate to one of the above mentioned folders
2. Right-click an existing dashboard and from the drop-down menu, select “New” and then “Folder”
3. Once the name is chosen and submitted, the icon for the new folder will appear on screen

![](https://lh5.googleusercontent.com/z41j7ey3iLrw-lok7OzAu0sxUcC3ZH44ie8NQcO16wS91owvPwW5qA1qbiAdggZVqPBW--1P-663EV18smm5_INBuZxMeSIX8RNeplN0cyTGRteiD79A5EVg4571eIzPjII1sDhL =619x367)

Alternatively, a new folder can be created by copying an existing dashboard (right-click and “Copy”), or by selecting the Save As menu option from within an opened dashboard. In both options, to the right of the folder selection-box, click on the create folder icon

![](https://lh6.googleusercontent.com/iX_kUZGyGWVbP84vfzwvuNEY8Rz4hBZDNuUd3PAr-IL9kcApQUM-VLcISuzKKuvRLJBKFIDfmMpC7RCjKYNPgx6zY6VFvU_wgBo8wLY9HlmlSJYUYErvFxngQEAOU5M4QruSAo1b =537x525)

**Deleting** and **renaming** an existing dashboard is also available via right-clicking the folder icon.

**Important note:** When deleting a folder, its content is deleted as well, and cannot be recovered.

**Feature Releases**

With every release, new features are added to the predefined dashboards, but not all the changes are automatically updated in the custom dashboards.

* New metrics in existing datasets - new metrics added to existing datasets in the predefined dashboards will be available in custom dashboards as well.
* New attributes in existing datasets -  new attributes will be automatically added to custom dashboards, but will show with only IDs as values. The attribute’s description is part of a new dataset (the dimension dataset) which is not added automatically.
  * In order to see the attributes’ description, the user must recreate his custom dashboard by creating a new copy of the predefined dashboard.
* New datasets and visualizations - will not be added to existing custom dashboards.
* Derived metrics - will not be added to the custom dashboards.

Users are advised to create new reports often to get the latest version of the predefined dashboards.

# Capabilities

A user with edit access can use the builder in a similar manner to the use of a spreadsheet in Google Spreadsheets or Microsoft Excel. These tools as well as the builder have limitations and the following points should help you avoid interruptions to your work on the builder:

## Dashboards

A dashboard is an interactive display that you can use to quickly and easily explore your business data. Dashboards allow you to:

* View visual representations of the data (called visualizations) in the dashboard to make the data easier to interpret.
* Sort and rearrange data in visualizations.
* Perform manipulations on the data to display only the information you are interested in.
* Use pre-defined, presentation-quality formatting to quickly display your data in a visually-striking way.

LiveEngage comes with a set of predefined dashboards which offer ready made reports for account data flowing into Report Builder from the LiveEngage data platform. These predefined dashboards can be used out of the box, or manipulated to create customized reports which contain unique key performance indicators.

![](https://lh5.googleusercontent.com/58g-IUwiBU_ZQTdPL-zyIrCyljSrZ9kB5_8h-agT4mLWWOvCnIUrQp-bkeoGOoOZtjJUYLBvjvZ84eHAJM1UD653ZR34sXS9XC2zdoh7A-FnaovGtApv4y-C6jx064Afq2XVdGo7 =548x331)

### **Customize a predefined dashboard**

1. Open any dashboard from the ‘LE predefined dashboards’ folder.
2. Click the ‘**save as**’ option under the ‘File’ drop-down menu.
3. Save a copy of the predefined dashboard under the ‘My Reports’ folder.
4. Select the ‘**run newly saved dashboard**’ option.
5. The new dashboard is now created, ready for you to customize.

**How-to video:** [**Creating dashboards**](https://bcove.video/2wtZwaH)

### **Saving changes**

Idle time thresholds are enforced in Report Builder, and aligned with the LiveEngage platform setup. These thresholds in place protect your account. Please make sure to save your dashboard so editions will not be lost. Report Builder does not offer an auto save function at this time, and it is recommended to save your work after every bulk of changes.

### **Share a custom dashboard**

1. Open the desired dashboard.
2. Click the ‘**save as**’ option under the ‘file’ drop-down menu.
3. Save a copy of the desired dashboard under the ‘my accounts’ folder.
4. The dashboard will be available to all the users in the account.

### **Export a dashboard to PDF**

1. Open the desired dashboard.
2. Click the ‘**export to PDF**’ option under the ‘file’ drop-down menu.
3. In the export option window select ‘current sheet’ to export only the selected sheet, or ‘All Sheets’ to export every sheet, and click **OK**.

### **Create subscriptions (scheduling)**

Scheduling dashboards to email is currently available via you LivePerson account team.

## Tabs and panels

A dashboard contains multiple layouts. To switch between the pages of data in the dashboard, or tabs, click the name of a layout tab. Each tab can contain multiple panels of content, all using the same tab filters. You can switch between panels by clicking the blue dot at the bottom of each panel.

### **Add a new tab**

1. Click the ‘**+**’ sign next to the names of the tabs.
2. Give the tab a name by double-clicking on the name field.
   * Note: the existing filters will not apply to the new tab. To apply filters to the new tab, please refer to the instructions regarding adding filters below.

{: .notice}  
It is recommended to use an existing tab with its filters and modify it, rather than adding a new empty tab. The predefined tabs include all the filters needed in order to see the data properly. Copy a predefined tab and delete the irrelevant visualizations or modify them to fit your needs.

### **Copy an existing tab**

1. Click on the down-arrow next to the tab’s name.
2. Select ‘Duplicate’.

### **Remove a tab**

1. Click on the down-arrow next to the tab’s name.
2. Select ‘**Delete**’.

### **Add a new panel to an existing tab**

1. Click on the down-arrow next to the tab’s name.
2. Select ‘**insert panel**’.
3. Give the panel a name by double-clicking on the name field.
4. Move between panels by clicking on the blue dot at the bottom of each panel.

     
   **Note:** all existing filters on the tab will automatically apply to all panels.

{: .notice}  
It is recommended to create new tabs rather than many panels in a single tab

**How-to video:** [**Sheets and Panels**](https://bcove.video/2wIfhug)

**How-to video:** [**Working with datasets**](https://bcove.video/2wwnQJ0)

## Filters

You can filter the data displayed in a dashboard by selecting from various options in the filters panel. For example, a dashboard displays engagement data for several different agent groups, from 2017 to 2019. You can filter the data in the dashboard to only display data for a specific agent group in 2018.

There are two types of filters available:

* Attribute filter
* Metric filter

**How-to video:** [**Filters and Dates**](https://bcove.video/2wKACTG)

### **Add an attribute filter to the filters panel**

1. From the dataset panel, select the attribute you want to use to filter your data, and drag it onto the Filters panel.

You can place the attribute above or below the filters already displayed in the panel.

1. Hover the cursor over the name of the filter you just added, then click the arrow icon. A list of options will display.
2. Click on display style, then select the style you want to use to display the filter. The options are:
   * Check boxes
   * Search box
   * Slider
   * Radio buttons
   * Drop down
3. You can choose to include or exclude data using elements selected in the filter, as follows:
   * To display data in the dashboard only for selected elements, select **include**.
   * To display data in the quick dashboard for all elements except the elements that are selected, select **exclude**.

{: .notice}**  
Note!** The filters of a any dashboard must contain at least one attribute from the “Time” dataset which appears at the top of the DASHBOARD DATASETS list. Attributes of the Time dataset include: DATE, DAY OF WEEK, WEEK, and MONTH.

### **Add a metric filter to the filters panel**

1. From the dataset panel, click the metric you want to use to filter data, and drag it onto the filters panel. You can place the metric above or below the filters already displayed in the panel.
2. Hover the cursor over the name of the metric you just added, then click the arrow icon. Click on display style and select one of the following:
   * To filter data by creating a qualification on a metric, select **Qualification**.
   * To filter data by choosing values on a slider, select **Slider**.

![](https://lh6.googleusercontent.com/4EOTUIrt3f8vWNPUSLO_fSfW5NvZQn_0S9InJzsQKAHF6wUq7VC0Cw0TaMvHjuKLk8UmXKMu-9YcC7gD3hqMeCt-RGv0jhfm56Jm6YGi83Ao7vUVo1pjfpbcCApOFXWF-rTEH-vq =299x203)

1. Hover the cursor over the name of the metric you just added, then click the arrow icon and select one of the following:
   * To filter by the metric's values, select **Qualify on Value**. For example, you can display data only for agents with engagements greater than or equal to 100.
   * To assign a numeric rank to the metric values and then filter by rank, select **Qualify on** **Rank**. A few options are available:
     1. To assign a numeric rank to the metric values, where 1 is the highest metric value, and then filter by rank, select **Highest** in the drop-down list. For example, you can display data for the ten agents with the highest MCS score.
     2. To assign a numeric rank to the metric values, where 1 is the lowest metric value, and then filter by rank, select **Lowest** in the drop-down list. For example, you can display data for the ten agent groups stores with the lowest login time.
     3. To filter by the top n% of metric values, select **% Highest** in the drop-down list. For example, if eight items are displayed in a visualization, Rank % Highest = 25 displays the top two items.
     4. To filter by the bottom n% of metric values, select **% Lowest** in the drop-down list. For example, if eight items are displayed in a visualization, Rank % Lowest = 25 displays the bottom two items.

![](https://lh3.googleusercontent.com/Al2lBJzmp7L3WbylXPJ-mpcmeg65ShFyGNTnlvLpxoCabHyBQqAAU_MUsqZAmc9flcOhENhDZXj_4Bt2GB8Pl2mtta471itImHKENzKZoEHGn242QaE5q1yFhIhyD3EQWUlK9cPf =205x176)

1. There are two options to configure how users will be able to filter the data:
   * To allow users to filter data by creating a qualification on a metric, perform the following steps:
     1. Click **Greater than or equal to**. From the drop down list, select the operator you want to use to compare data, such as less than or equals.
     2. In the field, type the value you want to use to filter data, then press ENTER. The qualification is created.
   * To allow users to filter data by choosing values on a slider, perform the following steps:
     1. Click and drag the endpoints of the slider to cover the range of values for which you want to filter data.
     2. You can choose to include or exclude data using the values selected in the slider. Hover the cursor over the metric name and click the arrow icon, then do one of the following:
        * To display data in the quick dashboard only for metric values selected in the slider, select **include**.
        * To display data in the quick dashboard for all metric values except the values selected in the slider, select **exclude**.

### **Remove a filter from the filters panel**

1. Hover the cursor over the name of the filter you wish to remove, then click the arrow icon. A list of options is displayed.
2. Select **delete**.

### **Use a filter as a filter to another**

You can choose to show only a subgroup of values in a filter by using a second filter to sort the options. For example, filter AGENT attribute by GROUP - once a specific group is selected, only agents assigned to this group will be visible in the filter.

1. Hover the cursor over the name of the filter, then click the arrow icon. A list of options is displayed.
2. Point to **select targets**, then select the other filters within the Filter panel to filter by the pre-selected filter. How to video: [Using visualizations as filters](https://bcove.video/2wTZrMV)

### Visualizations

Once the dashboard is ready, you can quickly add visual representations of the data (called visualizations) to the dashboard to make the data easier to interpret.

### **Add a visualization to a dashboard**

1. Click the ‘Insert Visualization’ ![](https://lh6.googleusercontent.com/3QQM3Fyk7ZIhdyEg32Lxj0KyaqS6umHpVWiwX3wQAVkgPwEgcbWl4qwo0ngQxWDBtY50f7_6vH0p_NzDbBBLK2o5XQlncxyjHpCtBxDOr69xrxrLS_W61Qpflm8eCpDcbgkUhuuX =28x22) icon in the top bar. A new empty visualization is added to the dashboard.
2. Add metrics and attributes to the visualization by drag-and-drop (to the ‘Editor’ panel or directly to the grid). How to video: [Working with graphs and visualizations]()

### **Rearrange the visualizations**

1. To quickly rearrange the visualizations in a tab, click and drag the visualization to its new location in the tab. The other visualization will automatically be shifted and resized.

### **Rename a visualization**

1. Click on the visualization.
2. Click the down-arrow icon on the top-right corner of the visualization. A list of options is displayed.
3. Select ‘**rename**’, then type a new name for the visualization in the field.
4. Press **enter**. The visualization is renamed.

### **Delete a visualization**

1. Click on the visualization.
2. Click the down-arrow icon on the top-right corner of the visualization. A list of options is displayed.
3. Select ‘**Delete**’.

### **Export a visualization**

1. Click on the visualization.
2. Click the down arrow icon on the top right corner of the visualization. A list of options is displayed.
3. Select ‘**export**’ and then select the type of file to export: PDF, Excel or Data (CSV).

{: .notice}  
 It is highly recommended to limit the amount of metrics included in a detailed grid that is based on attributes such as “AGENT” or “HOUR”. When pulling data for long timeframes, the performance of large grids may deteriorate. Therefore, it is recommended to either limit the amount of rows (attributes) or columns (metrics) in grids that present more than a week of data.

## Metrics & attributes

Once you have added visualizations to a dashboard, you can add metrics and attributes to show data.

**Providing business context to a report: attributes**

Attributes provide a context in which to report on and analyze business facts or calculations. While being aware of your account’s total conversions is useful, knowing when and by whom it was submitted provides the kind of analytical depth users require on a daily basis.

For example, you have a report containing the Week, Month, and Group attributes, as well as a Conversions metric. The report displays your account’s conversions for each group, during each week and month for which data are available. Because of the attributes on the report, a substantial amount of information is available, such as which group produced the least conversions and which months saw the highest growth in conversions. Without these attributes, the report will only display the total number of conversions, meaning you will miss out on this valuable in-depth analysis.

**Calculating data on a report: metrics**

Metrics are objects that represent business measures and key performance indicators. They are similar to formulas in spreadsheet software. It is not an overstatement to say that the focus of almost any report is its metrics. Most of the decisions you make about the other objects to include on a report depend on the metrics you use on the report. Questions such as ”How many engagements were handled by agents during the fourth quarter?” can easily be answered by metrics.

### **Add attributes and metrics to a visualization**

1. From the Dataset panel on the left, select attributes and metrics, and drag them onto the ‘editor’ panel.
2. Attributes can be added to:
   1. ‘Rows’ - the attribute’s values will be displayed on the rows of the grid.
   2. ‘Columns’- the attribute’s values will be displayed on the columns of the grid.
3. Metrics can only be added to the ‘metrics’ to show data.

**How-to video:** [**Creating attributes**](https://bcove.video/2wFwMMr)

**How-to video:** [**Create an Hourly Interval Attribute**](https://bcove.video/2wI4DU8)

### **Remove a metric or attribute from a visualization**

1. Click on the metric or attribute. A list of options is displayed.
2. Select ‘**remove**’.

You can also create your own metrics. This option in is useful if you would like to achieve any of the following:

* Perform additional calculations on the metrics from the datasets (such as multiplying by a constant or using a function).  For example, you can subtract the values of one metric from the values of another metric, such as Logged in Time - Online.
* Create calculations that combine metrics from different datasets.
* Create totals using specific functions. You can calculate an hourly average, for example, Interactive Engagements / (Labor Time * 24).

Custom metrics are named ‘Derived metrics’. These are metrics that a report analyst can create based on existing metrics in the report. A derived metric performs a calculation on the fly with the data available on a report, without re-executing the report against the data source.

Derived metrics are not metric objects that can be re-used in other reports and documents. They are metrics that are saved and displayed only on the specific report on which they are created. You can only use metrics already existing in a report to create a derived metric.

### **Create a new metric**

1. Right click anywhere in the datasets panel and select ‘create metric’.
2. A new window ‘metric editor’ will open up.
3. Use objects and functions or operators to create the required formula.
   1. Objects: the metrics and attributes available in the report.
      1. To add an attribute or metric, double-click an object from the ‘**objects’** list to the right to add it to the formula field.
   2. Functions: when you create a derived metric, you can define it using a function, which allows you to create a more complex derived metric. For example, you can choose a RunningSum function to create a RunningSum of Revenue (RunningSum(Revenue)) metric.
      1. To create a derived metric using a function, select the function, define its arguments and parameters, and then specify the metrics on which to base the new metric.

Note: Refer to the [Functions Reference](http://www2.microstrategy.com/producthelp/9.5/manuals/en/FunctionsReference.pdf) for information on the types of functions available, what each function calculates, the correct syntax to use for each, and examples.

1. Click ‘**validate**’ and make sure the formula is valid.
2. Name the metric and save it.

How-to video: [Creating metrics](https://bcove.video/2vPgq6B)

![](https://lh3.googleusercontent.com/C9MKagJ16RvH2ol71fYmFgxDIJPjNA1mtNPr1ggxGs8EemtLp387UDsm6Sw6dcE5FyPh3PfETTR6-E1-atkR9BG4lV8KW7Hg_sknIWqdLSpWh0fUs1DPHRTF3ysO5n_TzpN0uvno =624x399)

### **{Tips}**

* Quantity: Adding more than 3 derived metrics to a single dataset may ultimately harm the performance of your dashboard to the extent that it may be virtually unusable. We encourage you to use the existing metrics available in the builder and minimize the number of additional derived metrics you create on your own.
* Formulas: Functions which parse values stored in Attributes are known to impact processing time. Similarly, adding “Distinct” counting to built in functions would also have a relatively higher impact to the processing and ultimately load time of any dashboard.
* More information on using functions in metrics please visit this [website ](https://community.microstrategy.com/s/learning-center)(our 3rd-party provider).

### **Edit a metric**

1. Right click on the metric name on the Dataset panel or Editor panel.
2. Select ‘**Edit**’.
3. The ‘Metric Editor’ window will open up allowing you to modify the metric’s formula.

### **Change the format of a metric**

1. Right click on the name of the metric on the Datasets panel.
2. Select ‘Number format’ and then select the format from the available options (Currency, Date, Time, Percentage and so on).

![](https://lh5.googleusercontent.com/umIejyyAQeMOTdbBqC7ydJdrT9puoOPcRcNlapgWdkcVIu5usDb6inB-6ZwRz0wPff4NX5ff5fVf_DAK23NfcgvI5fbYL5dolkwkIZYDC_zfSFOgkA1KEQ2LEUu42m_m7VP3S7vn =322x349)

1. Change the decimal places by clicking the ‘Increase Decimal’ or ‘Decrease Decimal’ icons.

{: .notice} 
Due to the platform design, when creating time based derived metrics, it is recommended to user the “Custom” formatting and change the prefix of the ‘hour” attribute from “h” to “\[h\]”. Example: \[h\]:mm

## Visualization Styles

Once a visualization is created with metrics and attributes, you can display it in several ways:

### **Change widget style using the Visualization Gallery**

1. Click on the visualization.
2. Select the desired style from the ‘Visualization Gallery’, on the right of the screen.

The table below lists the available styles:

| Icon | Visualization style | When to use |
| --- | --- | --- |
|  | Grid | Display data in a tabular layout - multiple attributes and metrics |
|  | Heat Map | 1 attribute and a metric |
|  | Bar Chart | 1 or more metrics |
|  | Line Chart | 1 or more metrics1 or more attributes |
|  | Area Chart | 1 or more metrics1 or more attributes |
|  | Bubble Chart | 1 or more metrics1 or more attributes |
|  | Pie Chart | 1 or more attributes |
|  | Combo Chart | 2 or more metrics1 or more attributes |
|  | Network Chart | 1 or more attributes |

![](https://lh4.googleusercontent.com/pehkL2seRI49l4b9CcE4rokJj7Ez9scKYAMtBrji29uF5TOOuqFK7Sbo677wiSQKbrVHIgxXTBm7xolhPqwZ5lsjq8qoc3JQsbpLp4-Ky3ujpXfPEZnRxJxHOH4R50xy-cr7EfQE =541x345)

### Graphs with more than 1 metric

### **Change the axis**

1. On the ‘EDITOR’ panel, right click on the name of the metric you’d like to move the axis of. A list of options is displayed.
2. Select ‘Right Axis’. The metric’s axis will move from the default left axis to a new axis on the right of the graph.

**Change color shapes according to the metric names**

1. On the ‘EDITOR’ panel, click on the ‘**Metric Names**’ rectangle.

![](https://lh3.googleusercontent.com/WjB9F_Sx4dH0Rmexy7P6LLhc3jFr3HEXT9u7utBIuB5HZ0TSmong6T95rD8LL1DgPWeJnYZfK3rGqp17-wHvpVhaSKm7hY0bahEn0peClmafgurZ8m95fK1STpMBQFq8Z8KlZGZ0 =153x29)

1. Drag the rectangle and drop it into the ‘Color By’ section in the panel:

![](https://lh6.googleusercontent.com/BY__8lC4vYCJrdg4gmiAY4upfIvZr-QMKKF6IFPgsX27eeJEYfK_4XdjDqiIDPby_IDpoYMBkPcg3T2Ushr1CoJ279b-opVoCP5Ax1adHli-7wVMOfMgDrGtuQKgFUL7waALBVjg =167x82)

1. The shapes will be colored differently according to the metrics.

**Add a legend**

1. Right Click anywhere inside the visualization (but not on the shape itself). A list of options is displayed.
2. Click on ‘**Show Legend**’. The legend will display on the right of the visualization.
3. On hover a few options will be displayed:
   1. In the top left corner - an arrow, allowing you to minimize\\maximize the legend.
   2. In the top right corner - an ‘X’ button, allowing you to close the legend.

![](https://lh3.googleusercontent.com/I7xZZFtSoZzXOCvMtRSKZnOe-9-Rq0o24yKnuHpnevIGkq9nqutzxLqEDX7ua92ijeoQV9VtYBFCJ2f2odpcQNPRsQsB_GnXg5H-PPBk9HhH6Fnt4X6U_X4Rt2hkX28Ga6vraIY2 =98x146)

## Formatting

### Formatting a graph

#### **Change the color of shapes**

1. Right click on the shape you would like to change the color of. A list of options is displayed.
2. Click on ‘**Shape Fill Color**’ and select a color of your choice.

#### **Add data labels**

1. Right click on the shape you’d like to add labels to. A list of options is displayed.
2. Click on ‘**Data Labels**’ and select ‘Only Value’.
3. Labels will be added to the visualization.

### Thresholds

You can highlight metric data in a visualization by displaying the data in a different font color, or by replacing it with an image. For example, a Grid visualization displays conversions data for different agent groups. You can use thresholds to display conversions values of less than 1,000 in red. Thresholds can make analyzing large amounts of data easier because images are easy to locate and different font colors are quickly identified.

A threshold is made up of two parts: the condition, and the formatting that will be applied to the values that meet the condition. Conditions can vary in complexity depending upon the type of threshold that is created. The data that meets the condition are considered to be data that have passed the threshold of the condition. Once data passes the threshold, formatting is automatically applied to the data.

#### **Create a threshold for a metric**

1. On the selected grid, right click on the name of the metric you’d like to define a threshold for. A list of options will display.
2. Select ‘**Thresholds**’. The Thresholds dialog box will open.
3. From the ‘Thresholds Type’ options, select the type of formatting you want to apply to the metric values that meet the threshold condition, as follows:
   1. Color-based: to create a threshold to change the background color used to display metric values.
   2. Image-based: to replace metric values with an image.
4. From the second drop-down list, select the color or images you want to display:
   1. Color: select a set of colors to apply to the values, such as Orange, Green, Red.
   2. Images: select the images you would  like to display. The options include:
      1. Arrows ![Example of an Arrow threshold image](https://lh4.googleusercontent.com/knQMws-0QixiMB3ZEX5uSn0ecTM18UbVzLRbiUUMsVcYXuLJJu8_YOzaB-mmjSmbd8LQ6hkUiYW_TEzLUIeu5Sp-aIWp1sKUQ2XD7SlC4ND8eENzGSmRlqZuU5hqJDRp9U83vCmy "Example of an Arrow threshold image" =20x25)
      2. Regular Pin ![Example of a Regular Pin threshold image](https://lh5.googleusercontent.com/DlkblS7RZe6Va2tM4dw8_8juU5Km8tSWGOfHgOGT89ISPyCdwtPqkmLQLDvsjbcj6IuQ04uvGg3jntjLveMrT6GGotwZL5eoE2BLNUJoEcdnFna4WBlTlI8BgQVAeOYtV3aDbDnR "Example of a Regular Pin threshold image" =25x32)
      3. Rounded Pin ![Example of a Rounded Pin threshold image](https://lh5.googleusercontent.com/dZJTtJTqJVdsUPHoARacK6LQ-mU_PWQRo1Z1WeSyyY4cwUdbOMeW8jIIssV4BTSYKh6JyML4APzVWwIP-3LU1-yjs781z_5fTjvl-6BlXWaYHdkVukjvejZXpJzLEgcPGYwE2-n6 "Example of a Rounded Pin threshold image" =25x29)
      4. And many more
5. From the ‘Based on’ drop-down list, select the metric to use to define the threshold.
6. From the drop-down list that will appear once you have selected the metric, select one of the following:
   1. To create a threshold based on the value of the metric, select **Value**. For example, you can display metric values greater than 5 million in blue.
   2. To create a threshold based on the top x metric values, select **Highest**. For example, you can display the top 5 metric values in red.
   3. To create a threshold based on the bottom x metric values, select **Lowest**. For example, you can display the bottom 5 metric values in green.
   4. To create a threshold based on the top x percent of metric values, select **Highest %**. For example, you can display the top 10% of metric values with a green flag.
   5. To create a threshold based on the bottom x percent of metric values, select **Lowest %**. For example, you can display the bottom 50% of metric values with a red flag.

![](https://lh3.googleusercontent.com/X2m_G5fhszCbek2fE-MkR4EbEguGo0RjSRhbSPZMsnKiqvqWVB6FqmlIFaM6ZskzzAH3HYb9KWQYXAXDTaCaPoZ8WztwOjuZyIar_iqCGKXbyv9XuBSvswksjk9_Fy7PcoNdgUp4 =113x149)

1. From the ‘Break By’ drop-down list, select the attribute level at which you want to restart counting rank or percent values for the metric. This option is only available for thresholds based on rank or percent values.
2. Each band displayed in the dialog box represents a different range of values. You can click and drag a thumb left or right along the slider to increase or decrease the range of values covered by the band.

![](https://lh5.googleusercontent.com/l0wJ7twuY8-ult4Bhfgw6Icatw_37fBqKjIJ-jXqwAXmlqg6wc7FO2k22DnTdwDQMGTZ6uN53qcIJtPV2b55mCQSs5wY4Au6xQ6ZugDaR4TzTHUPIre162ujXKlD9P0SKfQd3D7o =447x83)

1. Further customizations are available:
   1. To create a new band, hover the cursor underneath the band and click on the ![](https://lh4.googleusercontent.com/7qoI4gMDE2CRDdMhHPfCIphyNnArBZ4ncN9mMJmKRFAYzo0Yth2VrD1hxRELgJengqhxWzIQ-AbqzpIEcV2LKC0HCkkkCIkFMzZez5sRqnWslmPIBGfA7rKOlDsRauHg-3PmvC2A =19x19) icon that appears to place a new band.
   2. To change the color applied to the range of values covered by a band, hover on the band, the band will be highlighted. Click on the band, a palette of colors will be opened. Select the new color from the palette.
   3. To delete a band, hover the cursor over the band, then right-click and select ‘Delete’. The band is deleted.
2. You can preview your changes by clicking **Apply**. Once you have finished defining the threshold, click **OK**. The threshold is created.

**Clear all thresholds applied to a metric**

1. On the selected grid, right click on the name of the metric you’d like to clear thresholds for. A list of options will display.
2. Select ‘**Clear Thresholds**’. All thresholds defined for the metric are cleared, and no longer affect the display of data in the visualization.

### Formatting the dashboard

#### **Add a title**

1. Click the ‘Insert’  ![](https://lh4.googleusercontent.com/CbDkcPtAXQ6iIcUoaNgRPsummHx6hfEiaS4ylpFyC5FCqS7EIGHZoxJ-m5mekEMDVLYiawO61V23RZnAYc6QY0rYekEljhhkxYUYat5iD6fH9re0ET4WyddtvmTqIRbKCMteNaz0 =31x19) icon in the top bar. A list of options will display.
2. Select ‘**Text**’. A new title bar will display.
3. Click on the text bar and type your desired text.
4. You can drag and drop the title bar to anywhere in the dashboard.
5. You can format the text font by selecting the title bar and changing the settings on the ‘PROPERTIES’ panel.

![](https://lh6.googleusercontent.com/F44svbxi618BomghoO-NOvnLRdPvam5Y2b2ppNaNw8tEJ6tNEjVApYroCUIktWkUZkK5PLHLd9plMR_yCD_zKWVOcodSCELESJMXXReobFldBb_sSyG4AEbnXe1QEC1iZVx0U4mH =101x26)

## Groups

When you have a very large dataset within a dashboard, it can be easier to work with that data by grouping it into logical subsets, and viewing only one or a few of the subsets at a time.

For example, a grid displays requested engagements by campaign. If there are multiple campaigns configured with similar properties (e.g. one for mobile and another for desktop), they can be grouped together in order to display their aggregated data. All the data from the grid is still present, but it is grouped into smaller, more manageable sections.

Once you have added an attribute to the grid, you can perform the following steps to group the data. When you group data in a dashboard, the grouping creates a new attribute, which is marked with the ![](https://lh3.googleusercontent.com/Cce8-ypmPVXqxhYQb7zEXCWr7jB5gyiUGYaNAYJJ9BzkcgeyvuuM36HQAqQPSqXU_c0-marHz7K-Gwbnm7_jW1pdZz7C7kxuAfNGxWZf3R98O83Yw1VMuWj1mwyd3rtCMUY4AYFt =21x22) icon. You can use this new attribute in any of your visualizations.

### **Group or ungroup data**

1. Right-click on the name of the attribute you’d like to group, on the EDITOR panel. A list of options will display.
2. Select ‘**Create Groups**’. A new window, the ‘Group Editor’, will open.
3. Name the new attribute.
4. Name a group and add values to it by dragging them from the ‘Available’ list on the left of the window and dropping them into the ‘Selected’ section on the right.
5. Click the ![](https://lh5.googleusercontent.com/NOpVvoRbFqzalWr59YuSUGKbBUk_AkohaA47SRjNlQ91WzHya7uE7mvdk4_p_NgUF_qCnpdVqMMq64QOflhRkGT1oR2ja7GQjzsGPQNcuCPJbL65oThwLWcM9rrQNBVMlsKTt-st =46x26)button once your group is complete.
6. Add more groups by clicking in the ‘Add a Group’ link.
7. Once you’ve finished creating the groups, click ‘**Save**’.
8. You can now use the new attribute instead of the original attribute.

## ![](https://lh5.googleusercontent.com/CkCsIRWMqOkIBQb3AMOVwS8Ocvo6dHZJ-XFD-qdcMyyEEcfFlDJCkHXoyvH06fppnsEioXnjCNG-WkLtl6CspL9rYkljbzL7UcTktzRLOIZroTSdqdRWr7zUu7R43-FI7a5Rafjd =413x413)

**How-to video:** [**Creating and Managing Groups**](https://bcove.video/2wFK5MK)

# Recommendations for creating custom dashboards

* Dashboards
  * Users are advised to recreate their dashboards every so often in order to get the latest version of the predefined dashboards.
* Tabs
  * It is recommended to use an existing tab with its filters and modify it, rather than adding a new empty tab. The predefined tabs include all the filters needed in order to see the data properly. Copy a predefined tab and delete the irrelevant visualizations or modify them to fit your needs.
  * It is recommended to create new tabs rather than many panels in a single tab
* Filters
  * The filters of a any dashboard must contain at least one attribute from the “Time” dataset which appears at the top of the DASHBOARD DATASETS list. Attributes of the Time dataset include: DATE, DAY OF WEEK, WEEK, and MONTH.
* Metrics & Attributes
  * It is highly recommended to limit the amount of metrics included in a detailed grid that is based on attributes such as “AGENT” or “HOUR”. When pulling data for long timeframes, the performance of large grids may deteriorate. Therefore, it is recommended to either limit the amount of rows (attributes) or columns (metrics) in grids that present more than a week’s worth of data.
* Derived metrics
  * Quantity: Adding more than 3 derived metrics to a single dataset may ultimately harm the performance of your dashboard to the extent that it may be virtually unusable. We encourage you to use the existing metrics available in the builder and minimize the number of additional derived metrics you create on your own.
  * Formulas: Functions which parse values stored in Attributes are known to impact processing time. Similarly, adding “Distinct” counting to built in functions would also have a relatively higher impact to the processing and load time of any dashboard.
  * Time based derived metrics - it is recommended to use the “Custom” formatting and change the prefix of the ‘hour” attribute from “h” to “\[h\]”. Example: \[h\]:mm
* 

# 

1. Training Videos
   1. Basic Level
      1. [Getting started](https://bcove.video/2vj2Sid)
      2. [Filtering](https://bcove.video/2wwcWD6)
      3. [Filters and Dates](https://bcove.video/2wKACTG)
      4. [Creating dashboards](https://bcove.video/2wtZwaH)
      5. [Working with datasets](https://bcove.video/2wwnQJ0)
      6. [Working with graphs and visualisations](https://bcove.video/2wKCFY4)
      7. [Sheets and Panels](https://bcove.video/2wIfhug)
   2. Intermediate
      1. [Creating metrics](https://bcove.video/2vPgq6B)
      2. [Creating and Managing Groups](https://bcove.video/2wFK5MK)
      3. [Create an Hourly Interval Attribute](https://bcove.video/2wI4DU8)
   3. Advanced
      1. [Creating attributes](https://bcove.video/2wFwMMr)
      2. [Using visualizations as filters](https://bcove.video/2wTZrMV)