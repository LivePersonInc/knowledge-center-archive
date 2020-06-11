---
pagename: Creating dashboards
categoryName: Data & reporting
subCategoryName: Insights
indicator: both
subtitle: Users with edit permission will be able to create new dashboards.
level3: ''
permalink: data-reporting-insights-creating-dashboards.html
isTutorial: false
date: '2020-05-19'

---

Users with edit permission will be able to create new dashboards.
  ![](img/creating_dashboards_insights1.png)
1. From the Home page within the Dashboards section, click the Add button.
2. Name the dashboard
    ![](img/creating_dashboards_insights2.png)
  * a) Tags - Enter tags to categorize dashboards for future use as templates. 
  * b) Dashboard Image - Upload a logo or other image from your computer, or select from the extensive library of images to represent the dashboard.
  * c) Theme - The Light theme is selected by default, with a grey background and white widgets, but you can choose the Dark theme to use a black background and dark grey widgets.
  * d) Type - Change the Default value to Template to save the dashboard as a template that others can use.
  * e) Description - Provide a description of the dashboard contents.
3. Select a data stream (note: you will only see data streams that have been shared with you).
4. After selecting a data stream, you can deploy a Taxonomy Analysis  model
  ![](img/creating_dashboards_insights3.png)
5. After clicking on deploy model, you can choose Unsupervised NLU Model or Taxonomy Analysis
   ![](img/creating_dashboards_insights4.png)
**N-gram generator** - This analysis goes through the chats/conversations and pulls out buzzwords which are based on their frequency in all of the verbatims. It generates a buzzword word cloud
**Geo Tag**- It creates a geo map based on the user’s IP address location (if IP address is included in your data).

**Language Detection** - identifies the languages being used in the transcripts
Sentiment Analysis - provides an average sentiment score for the entire verbatim 
User Analysis- this is to determine the gender of the user (Insights does not recommend using this analysis for our type of data)

Deploying a Taxonomy:
   ![](img/creating_dashboards_insights5.png)
1. Choose Taxonomy Analysis
2. Choose the type of verbatim (customer, agent, or bot) you would like to analyze from the list on the left side, run this as your text field. Click next.
  ![](img/creating_dashboards_insights6.png)
3. Click the blue + button to select the taxonomy  to use:
   ![](img/creating_dashboards_insights7.png)
4. Select a taxonomy from this list and click apply
     ![](img/creating_dashboards_insights8.png)
5. Name your taxonomy analysis and click submit
6 Once the model starts processing, you will see a message that says“1 model processing.”  When the model finishes processing, you will see a message that says “1 model up-to-date”.
   ![](img/creating_dashboards_insights9.png)

### Deploying an Unsupervised NLU Model
1. Choose Unsupervised NLU Model
     ![](img/creating_dashboards_insights10.png)
2. Choose the type of verbatim (customer, agent, or bot) you would like to analyze from the list on the left side and then click on the plus sign and choose text
       ![](img/creating_dashboards_insights11.png)
3. Change the name of the Unsupervised NLU Model to include the type of verbatim you are analyzing and click Submit 
4. Choose Submit again
5. Once the Unsupervised NLU Model starts processing, it will say “1 model processing”
         ![](img/creating_dashboards_insights12.png)
6. Once processing is complete, it will say Models up-to-date on the left side 
    ![](img/creating_dashboards_insights13.png)
Click [here](data-reporting-insights-insights-user-guide.html) to learn how to navigate an Insights dashboard. 

## How to copy an existing dashboard
1. To make a new copy of an existing dashboard, open the dashboard you want to copy
2. On the top left corner, choose “Save As”
3. Give the new dashboard a different name and now a copy of the dashboard has been created. 
           ![](img/creating_dashboards_insights14.png)
Note: only you can see the new dashboard. If you want other users to view it, then you need to share it. To learn how to create a new widget, click [here](https://knowledge.liveperson.com/data-reporting-insights-creating-new-widgets.html)

## Sharing dashboards
### Sharing Dashboard with a Group
Dashboards can be shared with individuals or user groups
1. Click on Dashboards to see all the dashboards
2. Click on the bottom right corner of the dashboard to start sharing
  ![](img/sharing_dashboards_insights_1.png)
3. The dashboard can be shared with users by searching their e-mail in the search bar. Once an e-mail is added to the account, the user can have different user rights. If a user group is already there, then you can see what type of user right that group can have.

{: .notice}
Users must set up an account first before they can view dashboards. For the account to be set up, please e-mail helpdesk@lp-insights.freshservice.com. 
{:start="4"}
4. Click on “Owner” to see all options
  * Can View: users can view widgets but cannot permanently modify it.
  * Can Edit: can view and modify the dashboard, but cannot share it with others.
  * Can Share: can edit and share the dashboard with others, but cannot remove others’ access.
  * Owner: can edit, share, and add or remove users with less privilege.
5. Once a user right is selected, click “+” so that group/user has access to the dashboard.

{: .notice}
A user can modify other users’ right only if they are the owner of the dashboard.



