---
pagename: How to export 100,000 chats into a dashboard
categoryName: Data & reporting
subCategoryName: Live chat
indicator: chat
subtitle: Chats are easy to read when they are exported in a CSV file
level3: ''
permalink: data-reporting-how-to-export-100,000-chats-into-a-dashboard.html
isTutorial: false
isNew: false
date: 2019-01-24 13:34:47 +0000
published: false

---
Now you can export chats in two formats: as a JSON or as easier-to-read CSV files, directly from the Web History page. The JSON  has the same format as the output retrieved by the Web History API.  To export more than 100,000 chats, continue to use the API.

Chats are easy to read when they are exported in a CSV file. All of the relevant information is displayed, including the chat transcript.  
Many of the [engagement attributes](data-reporting-engagement-attributes-data-sources-engagement-attributes-overview.html) have more than one value per session. When this is the case, the latest value is the value that is exported with the chat.  
Information about surveys is also exported along with each chat. Each survey name, along with each of its questions, are displayed as column headers, and the answers provided by visitors to the questions are provided in cells in the column.

![](/img/Export-chats1.jpg)

All survey questions configured in the account are presented in the CSV, however only the ones answered in the specific engagement are filled out with values for that row.

There is a limitation for the transcript length that can be displayed in the CSV format (it is limited to 32,000 characters). It is possible to export the transcript in JSON format or view it through LiveEngage.

All types of engagement attributes are displayed in the CSV file and for each engagement attributes’ field, the latest value that was sent to the LP system will be exposed.
