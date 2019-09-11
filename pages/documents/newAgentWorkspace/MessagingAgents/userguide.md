---
pagename: User guide
categoryName: Agent & manager workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: 'Get acquainted with the agent workspace '
level3: ''
permalink: messaging-agents-user-guide.html
isTutorial: false
date: 2019-01-21 09:24:58 +0000
isNew: false
layout: newAgentWorkspace
---

## Summary of enhancements

Enhanced by automation and featuring an upgraded design, the agent workspace has been updated to boost your efficiency as an agent and improve the productivity of messaging operations. The new design caters specifically to the unique demands of messaging, featuring self-serve capabilities and utilizing automatic algorithms on the backend to dynamically prioritize conversations for you. This new dynamic list allows agents to work more intuitively, saving precious time and removing the need for guesswork.

**Main enhancements to the agent workspace include:**

**New UI:** The platform’s new look and feel was designed to give agents maximum efficiency in messaging operations. With the conversation list prominently displayed and easy access to all your widgets, you will be able to handle more conversations concurrently with ease.

**Recommendation of next conversation to answer:** Dynamic conversation list features built-in automation that tells you which conversation to answer next, removing the need for decision making that can be time consuming and prone to human error.
New idle status filter: The addition of the new ‘idle’ status filter allows you to determine which conversations have been pending a consumer response for over five minutes.

**Enhanced conversation summary:** The conversation summary widget has been enhanced to support the entering of multiple notes by several agents. When handling conversations that have been transferred and owned by several agents, this will allow you to see a log of comments for context.

**History in transcript:** The conversation history now appears directly in the transcript so that you can easily access past conversations, rather than needing to navigate to a dedicated widget.

**Closed conversation status filter:** Closed conversations can be filtered into the conversation list by status, allowing agents to ensure that all their documentation is in place when wrapping up their shift.

**Idle conversation status and filter:** When a consumer hasn't responded in five minutes or longer, a conversation is marked with the new idle status. You can filter these conversations out for a more focused conversation list.

## Workspace basics

As an agent, your workspace is a centralized location for handling all of your conversations. When you login to LiveEngage your workspace will open as the default homepage. Below are the main areas and tools you'll be using within the workspace for your daily messaging operations.

### Dynamic conversation list

The new dynamic conversation list is sorted by SLA, or response time. Conversations with the shortest SLA are the most urgent, and are therefore sorted to the top of the list. The list updates automatically after every agent action or incoming conversation, ensuring that the most important conversations are always prioritized. This allows you to efficiently work through the conversation list by always focusing your attention on the conversation at the top of the list, rather than manually determining who to help next.

The conversation list is comprehensive, including ongoing, overdue, idle, and closed conversations that are filterable by status. Clicking on each conversation will allow you to read the transcript, browse different widgets and start engaging with your customers. If you choose to click on a consumer’s name, it will open up the entire conversation and you can begin messaging.

![alt text](img/New Agent work space GIF1.gif){:class="newagent"}

#### My Connections
The My Connections list includes all of the recent conversations that were assigned to you, including conversations that were recently closed. You can work through your My Connections list from the top down, and filter closed conversations into the list at the end of your shift to ensure you documented everything properly.

#### All Connections
While the My Connections list only stores conversations that were recently handled (the length of time depends on your contact center's configuration), the All Connections list includes all your conversations that began in the last 13 months. It can be filtered and used to find previous conversations that require a follow up.

![alt text](img/new-agent-workspace-all-connections.png){:class="newagent"}

### Conversation status and filters

The new conversation list includes ongoing, overdue, idle, and closed conversations. By default, ongoing, overdue and idle conversations are filtered on. Conversations with the idle or closed status can be filtered in or out of the list. Ongoing and overdue conversations **cannot** be filtered out of the conversation list.

You can filter conversations in the list by status:

| Status        | Icon    |  Description        | Use    |
| ------------- |-------------| ------------- |-------------|
| Ongoing | ![alt text](img/ongoing-conversation-status.png) |Ongoing conversations are open conversations that are currently active.|These conversations are in the list by default and **cannot** be filtered out.|
| Overdue |![alt text](img/overdue-conversation-status.png) |Conversations that were not answered before the SLA has expired. |These conversations are in the list by default and **cannot** be filtered out.|
| Idle |![alt text](img/idle-conversation-status.png) |Conversations in which the consumer hasn’t replied for 5 minutes or longer, defined as inactive.|These conversations are filterable. Filter them **out of the list** for a more succinct list of conversations that require urgent action.|
| Closed |![alt text](img/closed-conversation-status.png) |Conversations that have been marked as ‘closed’ by you, by consumers, or have been automatically closed by the system due to timeout. |These conversations are filterable. Filter them **into the list** at the end of your shift, or if you have down time to review your documentation.|

![alt text](img/New Agent work space GIF2.gif){:class="newagent"}

{: .notice} 
**Please note:** The 'urgent' and '1st time consumer' statuses from the previous workspace no longer exist. 

### Your personal data bar

As you go about your shift, your own agent data bar will display on the top of your workspace and will update immediately. This will help you keep track of your performance as well as expected workload. The data bar in the agent workspace represents the real-time tracking of your current workload and shift.

![image alt text](img/databar.jpg){:class="newagent"}

The data bar in your workspace will represent the queue data that is relevant only to you and your conversations for the current shift. Here you will see real-time data tracking the following:

**OPEN:** number of current open conversations

**PENDING:** number of conversations pending an agent response

**OVERDUE:** number of conversations that exceeded the target response time

**SOON TO BE OVERDUE:** number of conversations about to exceed the target response time in 5 minutes

**ACTIONABLE:** number of conversations that are waiting to be assigned to an agent in the queue and have an immediate action (e.g. reply to a waiting customer)

**IN QUEUE:** overall number of conversations in the queue, including actionable and not actionable. A not actionable conversation is one that is still open but awaiting a consumer reply. Only the actionable conversations are routed to agents.

**CSAT:** displays the customer satisfaction score based on the Post Conversation Surveys that were completed in the last 12 hours.

### Shortcuts & hotkeys

To save you time - there are seven hotkeys configured on your workspace for some of the most common tasks. To use a shortcut, hold the control (ctrl) and backtick (`) keys along with the corresponding letter below. 

| ACTION        | HOTKEY    |
| ------------- |-------------|
| MOVE to the next conversation (NEW) |  CTRL ` M  |
| COPY as plain text (NEW) | CTRL ` C  |
| ACCEPT a new incoming conversation| CTRL ` A |
| TRANSFER conversation to another skill | CTRL  ` E |
| Return conversation to QUEUE | CTRL  ` Q |
| CLOSE conversation | CTRL  ` X |
| STATUS: toggle your status between Online, Back Soon and Away | CTRL  ` S |
| LOGOUT of the agent workspace | CTRL  ` L |

## Managing messaging conversations

### Beginning your shift

When you start your shift, you should change your status to online in order to start receiving messages. To change your status, click on your image in the bottom left corner to open the drop down status menu and select **Online**. Once you do that, conversations from the queue will be assigned to you based on their priority. If there are already existing conversations in your queue, you will see them here, in the My Connections list. 

![alt text](img/Agent menu open.jpg){:class="newagent"}

#### Warm up: staggered incoming conversations at the beginning of your shift

Some contact centers opt to configure the ‘warm up’ function for agents. If this is enabled, the incoming conversations assigned to you at the beginning of your shift will be slower and build gradually. The warm up feature will send you one message at a time with a defined interval between the first few incoming conversations, allowing you to adjust to your shift and get into the flow of your messaging workload.

### Taking incoming conversations

The updated agent workspace uses SLA to prioritize conversations on your behalf, allowing you to simply respond to the conversation at the top of the list. When you first enter the conversation list you will first see that there is no conversation selected. Click on the conversation at the top of the list to start handling conversations. 

By default, the list will have ongoing, overdue, and idle conversations filtered on. You can filter idle and closed conversations out to keep your list concise and stay focused on the most urgent conversations.

#### Incoming message alerts

You can now see the number of incoming conversations in the top Connection bar. An orange dot will appear on the conversation in the list that has a new incoming message. 

![alt text](img/New Agent work space GIF1.gif){:class="newagent"}

Once you start handling conversations, you should work through the conversation list from top to bottom. Once you handle a customer, more customers can come in, and when you finish the conversation you will be taken to the next conversation in the list.

Conversations that reach your workplace have already undergone detailed analysis and prioritization. Based on the configurations selected by your contact center manager, there are two ways to accept incoming conversations into your workspace:

* **Auto accept**: This means conversations will automatically enter your list and be sorted without any action on your end, and your conversation list will automatically update when a new conversation is added. This is a more popular configuration for call centers.

* **Advanced mode**: For this option, incoming messages will ‘ring’ in your workspace and you’ll have to manually click to open and move this conversation to your conversation list, sorted by SLA. If you do not click to accept an incoming conversation and other agents are available, it will circle and ring to other available agents.

**Auto accept:**
![image alt text](img/autoaccept.jpg){:class="newagent"}

**Advanced mode:**
![image alt text](img/advancedaccept.jpg){:class="newagent"}

### Understanding the context & history

There are several tools in place to help you access the information you’ll need to provide excellent service and understand your consumers and their intent.

* **Conversation summary**: This dedicated widget enables you to write notes and comments after finishing a conversation. It has been enhanced to support the entering of multiple notes by several agents, allowing you to see a log of comments for context. Since the connection may be ongoing, these notes will help you quickly catch up on the conversation and keep other agents in the loop should it be assigned to them in the future.

![alt text](img/New Agent work space GIF3.gif){:class="newagent"}

* **Conversation history**: For repeat customers, any previous messaging history will be displayed directly in the conversation transcript. This way you can simply scroll up to review previous conversations, rather than needing to switch screens and navigate to a dedicated widget. The conversation history will be stored within the conversation for up to 13 months, to view history beyond this please check your CRM.

![image alt text](img/convohistory.jpg){:class="newagent"}

* **Consumer info**: This widget automatically displays important information about the consumer who is messaging you. This information will include the source channel of the conversation or any custom variables collected by your contact center.

![image alt text](img/consumerinfo.jpg){:class="newagent"}

### Replying to consumers

#### Predefined Content

You can reply by using free text, but we recommend using predefined content. Your contact center manager would have created a set of quick answers to the most common inquiries that you can easily enter into the conversation. By choosing predefined content templates, you can lower your average response time by saving time that would have been spent typing out responses. 

![image alt text](img/predefinedcontent.png)

Some predefined answers have associated hotkeys that will enable you to enter responses even more easily. Now, you can configure your own hotkeys for predefined content. Simply start typing the shortcut into the conversation and all of the relevent options will display. 

#### Rich messaging

There are many tools at your disposal that can be used to foster relationships and carry out effective conversations. Rich messaging enhances the consumer experience by providing a richer, more engaging channel of communication.

The following types of rich messaging are being supported for the enhanced agent workspace:
* Structured content cards and carousels
* Consumer to agent photo sharing 
* Consumer to agent audio sharing 
* Agent to consumer file sharing 

### Additional actions

While conducting a conversation, there are a few actions you can take. Click on the three white dots that appear in the top right of the conversation view. Here you will see a menu of actions with their corresponding shortcuts. 

![alt text](img/agent-workspace-additional-actions .png)

**Copy as plain text:** This action opens a window that includes that text of the conversation that can be copied to anywhere you need, such as into a CRM record.

**Transfer conversation:** Select a skill or agent status to transfer your conversation to. Use the search bar to find the relevant skill or status. Once you do this, the conversation will move out of your workspace and enter the relevant queue.

**Resume conversation:** This action reopens a closed conversation in order for you to follow up with a customer.

#### Adjusting the SLA for follow up

Every time a consumer sends a message, the SLA, or your expected time to reply resets. For example, if you are expected to respond within 1 minute, each time a consumer answers a message the one minute will start over and the conversation will be prioritized automatically and adjusted appropriately in your conversation.

As an agent, you are able to control the amount of time you need to reply to consumers manually. For example, if you are chatting with a customer and you need to check the status on their application, you can let the customer know that you’ll get back to them in a couple of hours and then manually adjust the SLA of this conversation. By doing so, it will appear in your queue in the appropriate time and remind you to follow up with the customer.

![image alt text](img/sla.jpg){:class="newagent"}

#### CoBrowse

With CoBrowse, agents and visitors can view each other’s virtual mouse cursors, and simply double-clicking on an element or piece of text in the web page creates an animation effect. This allows brands to address customers’ queries quickly and efficiently by helping them navigate web pages collaboratively. In the enhanced agent workspace, this capability is currently available **only for the My Connections list.** For more information on CoBrowse, [click here](/agent-manager-workspace-agent-tools-for-messaging-cobrowse-for-messaging.html). 

## Closing conversations

The nature of messaging conversations is that they are ongoing and can be resumed at anytime. However, in order to manage agent work streams and ensure consumer requests have been fulfilled, conversations can be marked as ‘closed.’ A closed conversation can be reopened again - either by the consumer or by the agent - with the entire history kept intact.

The conversations can be marked as resolved or closed, either by the consumer or the agent. Within the conversation window, customers have ‘options’, one of which is to select to closed a conversation. For messaging channels such as SMS or Facebook Messenger, where a custom ‘options’ table is not available, customers will not be able to mark conversations as closed. As an agent, you can close a conversation when you know that it has been resolved. Closing a conversation is done via the drop down menu within the conversation window. It is important that you close conversations as soon as you are confident that they are resolved in order to clear your work queue and keep your performance KPIs accurate.

At the end of your shift or during downtime you can use the status filter to filter closed conversations back into your My Connections. This will allow you to review your conversation summaries and ensure that your conversations were properly documented. Closed conversations are stored in the My Connections list for between 24 hours up to 14 days, depending on your contact center's configuration. Conversations that exceed this can be found in the All Connections list.

![alt text](img/closed-conversations-filter.gif){:class="newagent"}

### Surveys 

**Post Conversation Survey:** Upon the closing of a conversation (whether done by the customer, by you or automatically) the Post Conversation Survey will be triggered to the customer (as defined by your brand). This survey is comprised of CSAT, NPS or other custom questions. The CSAT scores calculated for your performance in the KPI bar are derived from results calculated from the Post Conversation Survey.

**Agent survey (date TBD):** The agent survey, which was previously available only for chat, allows brands to gather data and insights from their agents about their conversations with consumers. Gathering data from your perspective helps them to determine and analyze the nature of conversations and understand their outcomes. Once collected, this information can be used to recognize issues and optimize messaging operations.  

### Auto Close for inactive conversations

For conversations that are awaiting a consumer response, the auto close mechanism will automatically close these conversations after a length of time that has been defined by your contact center manager. Conversations will not be subject to auto close if they are pending an agent’s reply or if you have set up a manual SLA. Learn more about auto close for messaging here.

## Taking breaks & ending your shift

### Before you take a break

* Set your status to away so that you do not have new incoming conversations assigned to you. If there are multiple away states displayed in your status menu, select the most appropriate one.
* Don’t leave conversations waiting. If you have any active conversations, you can take one of these two actions:
    * Let each customer know that you will get back to them in x amount of time and set the manual SLA to reflect this commitment
    * Return conversations to queue so that another agent will be able to answer the consumer (you can leave notes to help your colleagues in the summary section)

### Before you leave for the day

* Set your status to away about 10 minutes before you are ready to leave so that you do not receive new incoming conversations (refer to your company’s manual on guidance for the accurate amount of time  in advance)
* Review your open conversations and resolve the ones that can be closed
* Determine which conversations you want to continue servicing the next day, let the customers know, and manually set the SLA for the next day
* For conversations that should continue immediately - return them to the queue so that another agent will be able to answer the consumer (you can leave notes to help your colleagues in the summary section)
* Filter closed conversations into the list to review the conversations you handled during the shift and ensure that everything has been documented properly.
