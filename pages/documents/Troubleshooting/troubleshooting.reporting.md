---
pagename: Reporting & Data
categoryName: Troubleshooting
subCategoryName: ''
indicator: both
subtitle: Troubleshooting for all questions in Reporting & Data
level3: ''
permalink: troubleshooting-reporting-data.html
isTutorial: false
isNew: false
date: 2019-02-26 12:03:37 +0000

---
## Missing Excel export button in Report Builder

The client is unable to export Report Builder reports from any of the Report Builder dashboards.

**The reason this happens is:**

The user does not see the visualization headers that contain the Export options menu (at the top right corner).

For users who do not have “Edit” access in Report Builder, the visualization headers are hidden and these users cannot change the header settings.

{: .notice}  
Only custom dashboards saved in the My Reports or My Account folder have hidden headers. In predefined dashboards the visualization headers are always set to visible.

**To resolve this issue you should**:

Set visualization headers to visible as follows:

1. Log in to the account with an LPA user or any user that has Edit access in Report Builder.
2. Select the visualization with the hidden header and navigate to the **Properties** panel (on the left, interchanging with the Filters panel).
3. Set visualization headers to visible as follows:  
   a. Check the box next to **Show title bar** in order to unhide the header.  
   b. Log in to the account with an LPA user or any user that has **Edit** access in Report Builder.  
   c. Select the visualization with the hidden header and navigate to the **Properties** panel (on the left, interchanging with the Filters panel).
4. Save a copy of the dashboard. Now the Export option will be visible.

## In the Report Builder, the Total No. of Conversations Handled are not adding up

The totals that are displayed on the Messaging Performance dashboard (highlighted in red in image below) are not the same as the totals reported in the exported Excel file.

For example, the total NO. OF CONVERSATIONS HANDLED reported in the Excel file is higher than the total NO. OF CONVERSATIONS HANDLED (for the same time period) reported on the Messaging Performance dashboard.

**Report Builder report**

![](/img/troubleshooting-Reporting1-2.png)

**Exported report totals**

![](/img/troubleshooting-reporting2.png)

**The reason this happens is**:

In messaging, an agent can transfer a conversation to a skill or queue (but not to another agent). The conversation will then be assigned to another agent. The transferred conversation is counted both as the first agent’s conversation and as the second agent’s conversation.

The Excel report displays the sum of all agents’ NO. OF CONVERSATIONS HANDLED in the Totals field. Since a transferred conversation is counted toward two different agents, it is counted twice in the Excel report.

The Messaging Performance dashboard displays the total number of distinct conversations (distinct conversation IDs) in NO. OF CONVERSATIONS HANDLED Totals field. In other words, a conversation that was handled by two different agents (due to transfers) is only counted once in the dashboard.

This is the reason for a smaller value in Total NO. OF CONVERSATIONS HANDLED on the dashboard than in the Excel report.

This is expected behavior.

**To verify that the totals add up in both reports:**

1. Search for the word transfer (in the report in question).
2. If there were transferred conversations during the report period, the search results will include the metrics NO. OF TRANSFERS – SKILL and/or NO. OF TRANSFERS – BACK TO QUEUE.
3. Add the sum of the values in the two “transfer” metrics to the value of the NO. OF CONVERSATIONS HANDLED metric on the Messaging Performance Dashboard.
4. The result should equal the total number in the Excel report.

## Why aren’t Report Builder dashboard filters working?

When you set/change filters on the Report Builder dashboards, there is no noticeable impact to the dashboard data.

**The reason this happens is**:

The dashboard is not refreshing due to a caching mechanism managed by the user’s browser.

**To resolve this issue you should**:

1. If you are a LiveEngage Administrator or a user with Report Builder “Edit” access, click the Refresh button at the top of the dashboard.
2. If you are not any of the above, click File > Re-prompt. The time frame selector displays again.
3. Run the dashboard again to refresh the data.

## Why do chat transcript export files display incorrect customer IDs?

#### Problem

When we export chat transcripts to a CSV file, the customer IDs are displayed in scientific format. Then we convert the IDs back to decimal format. But the converted ID does not match the original ID.

For example, one of our customer’s IDs is 5121079781289563. In the export file it is displalyed as 5.12108E+15, and when we convert it back to decimal, it comes out as 5121079781289560.

#### Cause

This is an MS Excel limitation. Excel displays numbers containing 15 or more digits in scientific format even though it has saved them in decimal format.

When you open the CSV file as a text file, you can see the Customer ID in decimal format and it is correct and matches the original ID.

LiveEngage does not convert these long numbers to text before the Chat Transcript Export because the CSV files may be used by some LiveEngage customers with other applications, parsers, or macros and not just with MS Excel.

#### Solution

You can use this workaround to “fix” the MS Excel display:

1. After exporting to CSV, do not open the CSV file. (If you already opened it, close it without saving.)
2. Upload the CSV file to a Google Sheet.
3. Open the CSV file in Google Sheets. You will see that all the Customer IDs are displayed correctly.
4. Download the Google Sheet (File -> Download as) to a Microsoft Excel file (.xlsx).
5. Open the new file in MS Excel. The Customer IDs are now displayed correctly.

{: .notice}  
Don’t change the scientific numbers the CSV file to decimal format because MS Excel will corrupt them again when you save the CSV file.

## Why is the Agent Goal Tracker “missing” transactions reported in Web History?

Some order ID’s (sales transactions) reported in Web History are not reported by the Agent Goal Tracker (on the Agent Manager BI Dashboard).

Why is the Agent Goal Tracker missing these order IDs?

**The reason this happens is**:

The “missing” orders took place before the visitors began to chat. Conversions that take place before chat, cannot be allocated to a specific agent and do not count as goals reached.

The Agent Goal Tracker only tracks goals reached (transactions, orders, etc.) during or after chats, and allocates them to the agents who conducted the chats.

Web History contains the transaction details of orders that took place in the same visitor session even if the transaction took place before chat. Therefore you cannot use transaction data in Web History to track conversions and goals reached.

**To resolve this issue you should**:

* Use BI reports or Report Builder for reporting and tracking SALES (conversions).
* Do not use Web History to track conversions – it is not designed for this purpose.