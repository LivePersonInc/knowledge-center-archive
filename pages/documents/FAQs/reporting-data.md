---
pagename: Reporting & data
categoryName: Getting started
subCategoryName: ''
indicator: both
subtitle: ''
level3: ''
permalink: faqs-reporting-data.html
isTutorial: false
isNew: false
date: 2019-01-27 12:08:37 +0000

---
## How do I find chats that only contain private messages?

To locate chats that only contain private messages:

* On the Web History page, export your data in JSON format
* In the JSON file, search all data containing: “subType”:”ONLY_TO_REP”

## How do I understand why a chat ended?

When a chat ends, the reason for the chat’s termination is displayed in the chat transcript. To view the reason for the chat’s termination:

* Log into LivePerson and go to Visitors > Web History tab
* Locate the chat(s) you’re interested in
* The reason for chat termination is recorded in the chat end reason column
* You can export the chat transcript by selecting 'Export to CSV' from the action drop down menu

![](/img/reporting-data-faqs-1.png)

Read more about it in [understanding the reason a chat ends](contact-center-management-live-chat-operations-understanding-the-reason-a-chat-ends.html).

## How do I change the email address for scheduled reports?

Unfortunately, there is no way to change the email in the LivePerson interface. If you’d like to change the email where you receive Report Builder [scheduled reports](data-reporting-report-builder-report-builder-overview.html#scheduling).

## How do I retrieve data that has been masked?

Information that has been masked for security and data protection reasons cannot be unmasked. Masked information will appear as a series of asterisks.

For example: If “1234” is masked it will be replaced with “****”

## Where is deleted user data visible, and for how long is it there?

![](/img/reporting-data-faqs-2.png)  
Deleted user data is stored in LivePerson and visible for **13 months following deletion**.

Deleted agents are displayed with a '(deleted)' indicator in the Open Connections, All Connections, Web History lists, and the engagement history widget.

{: .notice}
Before deleting a user, ensure that the agent doesn’t own any open conversations (if so, these conversations should be transferred to the queue) and that the user is logged out of LivePerson.

Filter by deleted agents is available in the Open Connections, All Connections, and web history lists.

In the visitor conversation window, the name of the deleted agent will be displayed in the window header (with no indication that they have been deleted).

The LivePerson user limit 'collections.maxElements' will not count the number of deleted users in the total.

{: .important}
A user who joined a chat and then was deleted won’t be reflected as deleted in the history.