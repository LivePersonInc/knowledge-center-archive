---
pagename: Understanding the reason a chat ends
categoryName: Contact center management
subCategoryName: Live chat operations
indicator: chat
subtitle: 'Insight into why chats end is important for agents and agent managers trying
  to gain a full understanding of a consumer’s experience during an engagement. '
level3: ''
permalink: contact-center-management-live-chat-operations-understanding-the-reason-chat-ends.html
isTutorial: false
date: 2019-01-21 13:38:59 +0200

---
When a chat ends, the reason for the chat's termination is displayed in the chat transcript. There are a number of reasons why a chat might end, whether initiated by a consumer or an agent, or as a result of an external event or issue.

To view the reason for a chat's termination:

1. On the web history page, in the visitors tab, click chat export (to CSV or JSON) from the Action menu to the right of the page.
2. In the exported spreadsheet, refer to the ‘chat end reason’ column. The column displays the reason for each engagement ending.

{: .notice}
This information is also available in the Engagement History API.The table sets out the reasons why a chat might end, along with an explanation for each reason.

| Value | Explanation |
| --- | --- |
| Transfer - rep stopped chat | The agent transferred the chat to another agent. |
| Transfer - reassignment to skill | The agent transferred the chat to a skill. |
| Rep stopped chat | The agent clicked the End Chat button and ended the chat. |
| Rep disconnected | The agent was disconnected from the internet (usually as a result of local internet connectivity). |
| Visitor disconnected | The visitor was disconnected due to connectivity issues on their side. If a chat is disrupted or fails due to connectivity issues, the LiveEngage system will wait for 40 seconds before it defines the chat as inactive and will end it.Note:  After clicking the Close button,  the visitor may still be able to submit the Exit Survey. |
| Visitor was no longer in chat | For visitors who are disconnected and the connection was not terminated, a cleaning process clears those chat connections |
| Visitor closed chat | The visitor closed the chat by clicking End Chat or clicking the X button of the engagement window. |