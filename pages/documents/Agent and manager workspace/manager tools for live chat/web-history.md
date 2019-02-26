---
pagename: Web history
categoryName: Agent & manager workspace
subCategoryName: Manager tools for live chat
indicator: chat
subtitle: View and search through all closed chats
level3: ''
permalink: agent-manager-workspace-manager-tools-for-live-chat-web-history.html
isTutorial: false
date: 2019-01-21 12:41:14 +0000
isNew: false

---
The web history is one of the most powerful analytics tools LivePerson has to offer, providing rich, intelligent layers of data that offer deeper insight into agent performance and customer satisfaction.

![](/img/web-history-1.png)

* Advanced filtering capabilities lead to meaningful analysis on business topics, customer satisfaction, and operational effectiveness
* Transcripts become available in minutes, so managers can start their analysis in near-real time
* Instant insight into the customer’s voice quickly identifies what topics to address

## Definitions

The web history includes the following information:

* **Start** - The time when the visitor was first connected to the agent (displayed in the visitor’s local time).
* **MCS** - The Meaningful Connection Score, available for English language analysis.
* **Visitor name** - The visitor’s name as provided in the pre-chat survey.
* **Skill** - The skill assigned to the engagement.
* **Agent name** - The name of the agent who handled the chat.
* **Length** - The length of the chat, calculated from the time the visitor first connected to the agent, until the Engagement Window is closed.
* **Device** - The device the consumer was using while chatting with the agent.
* **Start page** - The first page of the chat.

## Filter & search

**Filtering** by keywords allows you to locate specific items within the web history list. Keywords search includes transcript lines, survey questions and answers, engagement attributes, visitor information, MCS and engagement ID. For example:

* To search for a chat that closed with poor CSAT, you could filter by surveys, and search for the keywords ‘very dissatisfied’.
* To return to a chat you previously searched, you could use the engagement ID as your keyword and filter by engagement ID.
* Filtering by start page helps brands to recognize which pages generate more chats and how to tag their pages more effectively.

**Search on encrypted transcripts**

Encrypted transcripts can also be searched for keywords. It is possible to search for chats by a specific keyword or phrase and find the relevant conversations easily. This capability allows you to store your transcripts in a secured format and still have the ability to search on them.

[Survey information](contact-center-management-live-chat-operations-surveys-with-live-chat.html) (pre-chat, post-chat and agent) and [engagement attributes](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html#marketing-source) (eCommerce info, visitor info, visitor journey and more) can be viewed by the agent manager, with authenticated attributes marked with a blue checkmark.

* Search Fields in visitor info, including country, city, browser, operating system, IP address and device, provide a greater understanding of your consumers requirements and the drivers behind their customer journey.
* Detailed campaign information, including campaign name, goal name, Line of Business, engagement name and visitor behavior, is also available.
* In addition, the preview window presents the chat ID, a unique number used to search and locate the chat for troubleshooting and investigation purposes.

![](/img/web-history-2.png)

**Meaningful Connection Score (MCS) data** - In order for brands to accurately track consumer sentiment during a chat, the exact 3 digit [Meaningful Connection Score ](data-reporting-meaningful-connection-score-(MCS)-meaningful-connection-score-(MCS)-overview.html)value can be seen in the MCS column, alongside the MCS smiley. The MCS value can range between -100 and 100. This column gives Agents and Agent Managers an at-a-glance understanding of the MCS dynamics of each chat.

![](/img/web-history-3.png)

## Advanced

**History** for completed, interactive chats is displayed within five minutes of the chat closing and is available for up to 13 months.

<div class="notice">
<b>Note:</b>
<ul>
<li>Data from engagement attributes will take up to two hours to update and will include pre and during chat data only.</li> <li>When searching by keyword in conversation transcripts or engagement attributes, if a chat has been transferred, only the first chat (before the transfer) will appear in the search results. Even if a specific keyword was part of the second (after transfer) chat, the web history tab will display the first chat only.</li>
</ul>
</div>

The **Engagement History API** is available for you to search, filter and keep copies of chat transcripts and related data to later perform further analyzes using third party tools (DWH, CRM systems, etc.). The API enables the development of tailored dashboards, displaying information such as the reasons for chats ending, what time of day most chats occur, chat duration across different devices and so on. The Engagement History API is based on the RESTful architecture, where data is fetched via HTTPS requests; all information is secured using OAuth1.0.

It is also possible to export the Engagement History to Excel, and there filter the data by various parameters.