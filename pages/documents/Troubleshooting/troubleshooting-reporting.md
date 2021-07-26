---
pagename: Data & Reporting
categoryName: Troubleshooting
subCategoryName: ''
indicator: both
subtitle: Troubleshooting for all questions in Reporting & Data
level3: ''
permalink: troubleshooting-data-reporting.html
isTutorial: false
isNew: false
date: 2019-02-26 12:03:37 +0000

---
## For how long is the data stored?
Operational data is stored for 13 months.

## Missing Excel export button in Analytics Builder and cannot export dashboards

### Cause:

The user does not see the visualization headers that contain the Export options menu (at the top right corner).

For users who do not have “Edit” access in Analytics Builder, the visualization headers are hidden and these users cannot change the header settings.

{: .notice}  
Only custom dashboards saved in the My Reports or My Account folder have hidden headers. In predefined dashboards the visualization headers are always set to visible.

### Solution:

Set visualization headers to visible as follows:

1. Log in to the account with an LPA user or any user that has Edit access in Analytics Builder.
2. Select the visualization with the hidden header and navigate to the **Properties** panel (on the left, interchanging with the Filters panel).
3. Set visualization headers to visible as follows:  
   a. Check the box next to **Show title bar** in order to unhide the header.  
   b. Log in to the account with an LPA user or any user that has **Edit** access in Analytics Builder.  
   c. Select the visualization with the hidden header and navigate to the **Properties** panel (on the left, interchanging with the Filters panel).
4. Save a copy of the dashboard. Now the Export option will be visible.

## In the Analytics Builder, the Total No. of Conversations Handled are not adding up

The totals that are displayed on the Messaging Performance dashboard (highlighted in red in image below) are not the same as the totals reported in the exported Excel file.

For example, the total NO. OF CONVERSATIONS HANDLED reported in the Excel file is higher than the total NO. OF CONVERSATIONS HANDLED (for the same time period) reported on the Messaging Performance dashboard.

**Analytics Builder report**

![](/img/troubleshooting-Reporting1-2.png)

**Exported report totals**

![](/img/troubleshooting-reporting2.png)

### Cause:

In messaging, an agent can transfer a conversation to a skill or queue (but not to another agent). The conversation will then be assigned to another agent. The transferred conversation is counted both as the first agent’s conversation and as the second agent’s conversation.

The Excel report displays the sum of all agents’ NO. OF CONVERSATIONS HANDLED in the Totals field. Since a transferred conversation is counted toward two different agents, it is counted twice in the Excel report.

The Messaging Performance dashboard displays the total number of distinct conversations (distinct conversation IDs) in NO. OF CONVERSATIONS HANDLED Totals field. In other words, a conversation that was handled by two different agents (due to transfers) is only counted once in the dashboard.

This is the reason for a smaller value in Total NO. OF CONVERSATIONS HANDLED on the dashboard than in the Excel report.

### Solution:

This is expected behavior.

**To verify that the totals add up in both reports:**

1. Search for the word transfer (in the report in question).
2. If there were transferred conversations during the report period, the search results will include the metrics NO. OF TRANSFERS – SKILL and/or NO. OF TRANSFERS – BACK TO QUEUE.
3. Add the sum of the values in the two “transfer” metrics to the value of the NO. OF CONVERSATIONS HANDLED metric on the Messaging Performance Dashboard.
4. The result should equal the total number in the Excel report.

## Why aren’t Analytics Builder dashboard filters working?

When you set/change filters on the Analytics Builder dashboards, there is no noticeable impact to the dashboard data.

### Cause:

The dashboard is not refreshing due to a caching mechanism managed by the user’s browser.

### Solution:

1. If you are an Administrator or a user with Analytics Builder “Edit” access, click the Refresh button at the top of the dashboard.
2. If you are not any of the above, click File > Re-prompt. The time frame selector displays again.
3. Run the dashboard again to refresh the data.

## Why do chat transcript export files display incorrect customer IDs?

### Cause:

When we export chat transcripts to a CSV file, the customer IDs are displayed in scientific format. Then we convert the IDs back to decimal format. But the converted ID does not match the original ID.

For example, one of our customer’s IDs is 5121079781289563. In the export file it is displayed as 5.12108E+15, and when we convert it back to decimal, it comes out as 5121079781289560.

This is an MS Excel limitation. Excel displays numbers containing 15 or more digits in scientific format even though it has saved them in decimal format.

When you open the CSV file as a text file, you can see the Customer ID in decimal format and it is correct and matches the original ID.

The Conversational Cloud does not convert these long numbers to text before the Chat Transcript Export because the CSV files may be used by some customers with other applications, parsers, or macros and not just with MS Excel.

### Solution

You can use this workaround to “fix” the MS Excel display:

1. After exporting to CSV, do not open the CSV file. (If you already opened it, close it without saving.)
2. Upload the CSV file to a Google Sheet.
3. Open the CSV file in Google Sheets. You will see that all the Customer IDs are displayed correctly.
4. Download the Google Sheet (File -> Download as) to a Microsoft Excel file (.xlsx).
5. Open the new file in MS Excel. The Customer IDs are now displayed correctly.

{: .notice}  
Don’t change the scientific numbers the CSV file to decimal format because MS Excel will corrupt them again when you save the CSV file.

## Why is the Agent Goal Tracker “missing” transactions reported in Web History?

### Cause:

Some order ID’s (sales transactions) reported in Web History are not reported by the Agent Goal Tracker (on the Agent Manager BI Dashboard).

The “missing” orders took place before the visitors began to chat. Conversions that take place before chat, cannot be allocated to a specific agent and do not count as goals reached.

The Agent Goal Tracker only tracks goals reached (transactions, orders, etc.) during or after chats, and allocates them to the agents who conducted the chats.

Web History contains the transaction details of orders that took place in the same visitor session even if the transaction took place before chat. Therefore you cannot use transaction data in Web History to track conversions and goals reached.

### Solution

* Use BI reports or Analytics Builder for reporting and tracking SALES (conversions).
* Do not use Web History to track conversions – it is not designed for this purpose.

## Which report can I use to retrieve a specifically defined data set?

Conversational Cloud uses a large amount of metrics to provide insightful and detailed reporting.
Click [here](https://knowledge.liveperson.com/data-reporting-reporting-metrics.html) to learn more about the reports metrics and on which dashboards they can be found. 

## How can I delete my account? 

Deleting your account can be done by our Sales team, their working hours are from Monday to Friday from 8am to 5pm EST. You are welcome to contact your sales representative.

## I have an alert for a new conversation but nothing is there

### Resolution1:
This behavior seems to be present only in conversations that have a post conversation survey bot attached. In most cases, this issue seems to resolve itself after 48 hours (at most), coinciding with the expiration time of the survey for the conversation in which the issue originated.

### Resolution 2:
Something that has worked when dealing with this behavior, is clearing cache and cookies from the browser as well as trying from a different browser. Note that the browsers need to be updated to the latest version.

## Low memory warning when attempting to run Analytics Builder

Low memory warning usually disappears after a few minutes. Please wait and then try again to reload 
Analytics Builder. 

## My sound notifications are not working

1) Click on the agent picture button in the bottom left corner and toggle the “Sound On” option.
2) If the browser is not set to “Play Sounds in Webpages”,  turn on audio for webpages from the browser’s settings.
3) For Chrome browsers, see Turn notifications on or off in Google Chrome Help.
4) For other browsers, search the browser’s Help for instructions on turning on audio.

For Internet Explorer, follow these steps:
* Open Your Control Panel: The easiest way to open the Control Panel is to click on “Start” and then click on “Control Panel.”
* Open the Internet Options: Use the search box to find the “Internet Options” section of the Control Panel.
* Select the “Advanced” Tab: The Advanced Tab is usually on the far-right side of the Internet Options screen.
* Scroll Down to Multimedia: Scroll through the options until you see the section called “Multimedia.”
*  Deselect the Play Sounds Option: Click to uncheck the option called “Play Sounds in Webpages.” This will turn off all sounds in your internet browsers.
* Turn sound on again when you’re ready: If you would like to resume listening to sounds on your internet browser, be sure to follow these steps again and check the “Play Sounds in Webpages” option once again.

{: .notice}
It’s recommended to try with different browsers and incognito browser mode.
 
## Why is my API call not working? 

Your API call could be failing for multiple reasons. Make sure to double check the Method being used (GET, POST, etc.) as well as the URL being used (correct domain, account #, etc.) against the documentation that you are following to make the request. Below are some of the common response codes that you may receive when your API call fails:

* 400 Bad Request - This response code indicates that there is an error in the structure of the API request body. Refer back to the API documentation to make sure that all required parameters are included in the body; also check that there aren't any missing or misplaced commas, parenthesis, brackets, etc.
* 401 Unauthorized - This response indicates that the authorization provided in the call does not have the proper permissions for the request that you are attempting to make. Double-check to make sure that your API key has all necessary permissions enabled.
* 404 Not Found - This response indicates that the data you are requesting does not exist. A common example of this response would come from attempting to request files using the Data Access API prior to it being provisioned for your account. Double-check that any times, IDs or other parameters in your request are correct.
* 405 Method Not Allowed - This response indicates that you are using the incorrect method (GET, POST, etc.) for the request. Double-check the documentation for the API you are using and adjust your method accordingly.
* 429 Too Many Requests - This response indicates that there have been too many requests from the account in quick succession and has thus triggered rate-limiting. Try the request again after a few minutes.
* 500 Internal Server Error - This is a generic error response used when an unexpected condition was encountered and a more specific response did not fit.
* 503 Service Unavailable - The server cannot handle the request due to being overloaded or maintenance. Try again later.

For guidelines on retrying failed API calls, please refer to our: [Retry Policy Recommendations](https://developers.liveperson.com/retry-policy-recommendations.html) for more information.

## I can't see Manager Workspace data

The Agent Manager must have the relevant Agent Group assigned to him/ The Agent Manager must manage the appropriate groups in order to view data.
1. Select the “Manage users and skills” tab from the navigation bar on the left.
2. Select the user you want to edit
3. Assign the relevant Agent Group and click Save.
4. Upon their next login, the user will be able to view data in the Manager Workspace for the newly assigned group.

## What's the difference between metric X and Y? 

You can easily compare two or more metrics [here](https://knowledge.liveperson.com/data-reporting-reporting-metrics.html). You can learn more about the metrics, see on which dashboards they can be found, which channel they are used for, what their functionality is and what is the formula behind them. 
