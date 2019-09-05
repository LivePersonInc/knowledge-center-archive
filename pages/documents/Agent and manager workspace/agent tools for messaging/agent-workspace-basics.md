---
pagename: Workspace basics
categoryName: Agent & manager workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: 'Get acquainted with the Agent Workspace '
level3: ''
permalink: agent-manager-workspace-agent-tools-for-messaging-workspace-basics.html
isTutorial: false
date: 2019-01-21 09:24:58 +0000
isNew: false

---
By logging into the platform as an agent, you will automatically be brought to the agent workspace. Your default status will be set according to what your brand has configured. If needed, you can easily switch your status in the title bar under your login on the right hand side of the page. The ‘Online’ status will enable to you begin receiving conversations.

## Main areas of your workspace

There are three main tabs that you will use as a messaging agent: **Open Connections**, **All Connections** and **Messaging Agents**.

1. **Open Connections:** This is where all your assigned conversations will appear. In this tab you will see all your conversations organized by priority and sorted by SLA. Conversations that have passed their SLA will be marked in red. Clicking on a conversation will allow you to view the conversation or the consumer info. If you choose to click on a consumer’s name, it will open up the entire conversation and you can begin messaging.
2. **All Connections:** If you have permission to access this tab, this is where you view all of your conversations - both open and closed. You can filter your conversations with the "Filter by keyword" drop down. You can view the MCS score for the conversation or read the transcripts for quality assurance purposes. Learn more about the All Connections tab below.
3. **Messaging Agents:** If you have permission to access this tab, this is where you can see your team’s shift status, everyone's login status, load, number of open conversations, number of closed conversations and more. This is a good indication of how your team is doing.

## Your personal data bar

The data bar in your workspace will represent the queue data that is relevant only to you and your conversations for the current shift. Here you will see real-time data including:

* **Open** - Number of open conversations - These are the open conversations you still need to handle
* **Pending** - The number of conversations that are pending your immediate reply
* **Unassigned** - Conversations in the queue that are not yet assigned an agent, this figure will provide visibility into upcoming workloads
* **Overdue** - The Number of conversations that have passed the SLA deadline for reply
* **Soon to be overdue** - The Number of conversations that are within 5 min of surpassing the SLA deadline
* **CSAT** - Average [CSAT](contact-center-management-messaging-operations-benchmarks-to-measure-messaging-success.html#2-customer-satisfaction-score-csat) assigned to you from all the conversations conducted in the current shift

## Beginning your shift

When you start your shift, you should change your status to "Online" in order to start receiving messages. Once you do that, conversations from the queue will be assigned to you based on their priority. If there are already existing conversations in your queue, you will see them in your Open Connections tab.

Make sure you have all your tools ready at hand, your CRM integrations are logged in and working, and any external systems being used.

### **Warm up: staggered incoming conversations at the beginning of your shift**

Some contact centers opt to configure the ‘Warm up’ function for agents. If this is enabled, the incoming conversations assigned to you at the beginning of your shift will be slower and build gradually. The warm up feature will send you one message at a time with a defined interval between the first few incoming conversations, allowing you to adjust to your shift and get into the flow of your messaging workload.

## Viewing closed conversations

![](/img/agent-workspace-basics-1.png)

[All Connections](agent-manager-workspace-manager-tools-for-messaging-all-connections.html) displays every one of your brand’s messaging conversations, both active and closed, in one easy-to-navigate page.

* Advanced filtering and search capabilities lead to meaningful analysis on business topics, consumer satisfaction, and operational effectiveness
* Transcripts are available in near real-time, so managers can track and analyze conversations on-the-go
* Instant insight into the consumer’s voice helps quickly identify the topics that need addressing

<br/>
**All Connections includes the following information:**

* **Status** - The status of the conversation, whether active or closed
* **Response Time** - The duration of time remaining until a response is required
* **Consumer name -** The consumer’s name if available for authenticated conversations or a pre-chat survey. This field will display "Visitor" if the consumer's name is unknown.
* **Skill -** The skill assigned to the conversation
* **Agent name -** The name of the agent(s) assigned to the conversation. Due to the continuous nature of messaging conversations, it is likely that more than one agent will have been active in a conversation with the consumer over time,
* **Agent group -** The Agent Group that the agent(s) assigned to the conversation belongs to
* **MCS -** The [Meaningful Connection Score](data-reporting-meaningful-connection-score-(mcs)-meaningful-connection-score-(mcs)-overview.html), available for English language text analysis
* **Start Time -** The time the visitor first started a conversation with the agent (displayed in the visitor’s local time), or the time the agent resumed the conversation with the consumer
* **Last message time -** The time the last message was sent, by either the agent or consumer, in the conversation
* **Duration -** The time frame between when the consumer started the conversation until it was ended by either the consumer or the agent. For active conversations, the duration displayed represents the time from the start of the conversation until the moment the data is viewed.

![](/img/agent-workspace-basics-2.png)

### Pre-filtered connections

The All Connections page is pre-filtered. Agent managers are able to view conversations handled by agents in the agent groups they manage, as well as unassigned conversations that have a skill assigned to one of the agents they manage in the All Connections list; other unassigned conversations will not be displayed. For example, an unassigned conversation with the Sales skill is waiting in the queue. The agent manager has several agents with the Sales skill and will therefore see the unassigned conversation, while other agent managers who do not manage agents with this skill will not see it.

Agents, on the other hand are able to view only the conversations for which they were the last assigned agent. Agents are unable to view unassigned conversations.

### Search and filter

The All Connections page offers advanced filtering and search capabilities that can provide in-depth, meaningful analysis on key topics for your business, consumer sentiment and the operational effectiveness of your contact center. See [benchmarks for measuring success](contact-center-management-messaging-operations-benchmarks-to-measure-messaging-success.html).

Agents and agent managers can search/filter conversations with the following parameters:

* Keywords from transcripts
* Duration of conversation
* Agent
* Agent group
* Skill
* Start time
* Status (open or closed)
* [Meaningful Connection Score](data-reporting-meaningful-connection-score-(mcs)-meaningful-connection-score-(mcs)-overview.html) (MCS)
* Conversation ID
* CSAT
* Summary keywords
* [Engagement Attribute](data-reporting-engagement-attributes-setting-up-engagement-attributes.html) keywords*

<br/>
**For example:** An agent manager can filter conversations by duration to identify those with an unusual duration. By drilling down further and refining the search, they will be able to pinpoint why the conversations had an out of the ordinary length. Managers can also view all conversations with a low MCS, or a low CSAT, and identify the cause by referring to the conversation transcripts.

![](/img/all-connections-2.png)

### Consumer journey

The All Connections tab allows agent managers and agents to view the entire flow of a conversation, including transfers to another agent or skill, offering them a detailed understanding of the consumer experience and agent performance.

A column displaying the MCS of the conversation helps agent managers track consumer sentiment (CSAT is also available in the conversation’s consumer info section).

<div class="notice"> <b>Note:</b> <ul> <li>Engagement attributes comprised of numbers that contain more than three consecutive digits cannot currently be searched for. </li> <li> While the engagement attributes can be viewed immediately, the ability to search by them is only available after two hours.</li> <li>In order to search for a phrase by keywords in transcripts, summary or engagement attributes, the user must place quotation marks at the beginning and end of the phrase. This will make sure that the search will run according to all specified terms in that phrase and in the same position relative to each other. (For example: “[tester@liveperson.com](mailto:tester@liveperson.com)”, will search for the words “tester” and “liveperson.com”  in that order.)</li>
</ul>
</div>
