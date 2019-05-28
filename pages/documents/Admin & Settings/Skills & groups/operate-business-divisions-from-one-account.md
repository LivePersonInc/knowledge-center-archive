---
pagename: Lines of business
categoryName: Admin & settings
subCategoryName: Skills & groups
indicator: both
subtitle: Operate business divisions from one account
level3: ''
permalink: admin-settings-skills-groups-lines-of-business.html
isTutorial: false
isNew: false
date: '2019-01-23T09:46:18.000+00:00'
redirect_from:
- manage-lines-of-business.html

---
The LivePerson platform is designed to reflect and support your brand goals and business structure as closely as possible. By creating individual Lines of Business (LoBs) within one single account, each with its own campaigns and engagements, brands are better able to track campaign success and engagement impact on each area of their business.

Each line of business will be set up with unique and siloed campaigns and reports. [Campaigns](contact-center-management-campaigns-campaigns-overview.html) will be assigned to a particular LoB, meaning that campaign managers will have access to all campaigns, with the ability to filter campaign lists and reports by LoB.

The following global entities can be shared across the account and its LoBs:

* Users
* Skills
* Campaign libraries
* Engagement attributes
* Predefined content and automatic messages

In addition, the following dashboards and reports will now reflect LoBs:

* Engagement History
* Campaigns databar and dashboard
* CM BI dashboard
* Goal Tracker report

## To enable Line of Business:

1. In the Users area, select the Night Vision view.
2. Select Line of Business and switch the toggle to Enable. Click Save.
3. Once the page is refreshed a new tab for Line of Business will appear in the Users area.

## To add a Line of Business:
1. In the Users area, on the Line of Business tab, click Add Line of Business.
2. Give the LoB a name and add a description if required.
3. Click Save.

![](/img/LoB2.png)

## To assign a campaign to a Line of Business:

1. In the Campaigns tab, click Add Campaign.
2. Select from the LoBs available in the drop-down menu.

{: .notice}

* Campaigns can be assigned to one LoB only.
* Unassigned Campaigns can be assigned to a LoB.
* Once assigned to a LoB, the Campaign cannot be reassigned.

3. Click Assign.
4. Give the Campaign a name and a description if required.
5. Each Engagement created under the Campaign will also be assigned to the same LoB.
6. Click Publish.

![](/img/LoB4.png)

## To assign unassigned Campaigns to a LoB:

Unassigned Campaigns are those that were created before LoBs were introduced. It is possible to retrospectively assign a LoB to these Campaigns, in order to include them in reporting and analytics for specific LoBs.

1. In the Campaigns tab, click on the Campaign you wish to assign.
2. Under the option to ‘Assign to a line of business’, select a LoB from the drop-down menu.
   
   {: .notice}
   * Campaigns can be assigned to one LoB only.
   * Once assigned to a LoB, the Campaign cannot be reassigned.
3. Click Yes if you are sure you want to assign the Campaign to the selected LoB.
4. The page will automatically update to show the LoB.

## To view LoB in reporting:

The Campaigns dashboard and BI dashboard can display data at an account level or by individual LoBs. Data for aggregated LoBs cannot be displayed.

1. Filter the Campaigns by LoB as above, selecting the LoB you wish to view the data for.
2. Click the Campaigns dashboard icon to display the dashboard.
3. Select the date range you wish to view the data by. The dashboard will display the data for the selected LoB during that period.
4. To view the BI dashboard, click the BI button on the left of the page.
5. The dashboard will display the data for the selected LoB over the set time period.
6. To change the filtering options, click the LoB filter icon and select the LoB you wish to filter by

## To filter Campaigns by LoB:

1. In the Campaigns tab, click the filter button on the Line of Business column.
2. From the drop-down menu, select the LoB you wish to filter by.

Please note:

* More than one LoB can be selected from the drop-down list. However in order to view Campaign data in the dashboard, only one LoB can be selected.
* If no filters are added, the page will display all account level data, including both assigned and unassigned Campaigns.

3. Click **Filter**.
4. The page will now display the Campaigns assigned to the LoB you selected; the dashboard will reflect the data for these Campaigns.

![](/img/LoB7.png)

## To filter entities by LOB:

On accounts with a large number of entities (such as users, skills, etc.), it can be very easy for users to accidentally edit the wrong entity. The ability to filter entities by LOB means users can only view and edit those entities designated to the LOBs already assigned to them.  
For example, users assigned to the Sportswear LOB will only be able to view and edit the skills, predefined content etc, of that LOB. They will not be able to view or edit entities of other LOBs, such as the Homeware LOB, unless those LOBs are also assigned to them.

The following entities can be assigned to LOBs:

* Users (multiple LOBs per user)
* Skills (multiple LOBs per skill)
* Predefined content (multiple LOBs per predefined content)
* Campaigns (one LOB per campaign)

Once a user assigned to a specific LOB logs in to LiveEngage, the relevant tables will be pre filtered according to his assigned LOBs.