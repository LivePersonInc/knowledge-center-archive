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

## Workspace basics

As an agent, your workspace is a centralized location for handling all of your conversations. Below are the main areas and tools you'll be using within the workspace for your daily messaging operations.

### Dynamic conversation list

The new dynamic conversation list is sorted by SLA, or response time. Conversations with the shortest SLA are the most urgent, and are therefore sorted to the top of the list. The list updates automatically after every agent action or incoming conversation, ensuring that the most important conversations are always prioritized. This allows you to efficiently work through the conversation list by always focusing your attention on the conversation at the top of the list, rather than manually determining who to help next.

The conversation list is comprehensive, including ongoing, overdue, idle, and closed conversations that are filterable by status. Clicking on each conversation will allow you to read the transcript, browse different widgets and start engaging with your customers. If you choose to click on a consumer’s name, it will open up the entire conversation and you can begin messaging.

![alt text](img/New Agent work space GIF1.gif){:class="newagent"}

#### My Connections
The My Connections list includes all of the recent conversations that were assigned to you, including conversations that were recently closed. You can work through your My Connections list from the top down, and filter closed conversations into the list at the end of your shift to ensure you documented everything properly.

#### All Connectons
The All Connections list includes all of the conversations you have handled historically. It can be used to follow up on previous conversations.

### Conversation status and filters

The new conversation list includes ongoing, overdue, idle, and closed conversations. By default, ongoing, overdue and idle conversations are filtered on. Conversations with the idle or closed status can be filtered in or out of the list. Ongoing and overdue conversations **cannot** be filtered out of the conversation list.

![alt text](img/New Agent work space GIF2.gif){:class="newagent"}

You can filter conversations in the list by the following statuses:

* **Ongoing**
    * **Definition:** Ongoing conversations are open conversations that are currently active. During a daily shift these conversations appear in your conversation list, telling which you should handle based on the SLA.

* **Overdue**
    * **Definition**: These are conversations that were not answerd before the SLA has expired. Each brand can define how quickly they want to commit to a reply (SLA). These conversations are visible during your shift to ensure that the consumers are helped and your KPIs are being met.

* **Idle**
    * **Definition**: These are conversations in which the consumer hasn’t replied for 5 minutes or longer, they are defined as inactive.
    * **How to use**: Filter these conversations OUT in order to have a more succinct and organized list of conversations that require urgent action. When the consumer responds they will be filtered back into the list.

* **Closed**
    * **Definition**: Conversations that have been marked as ‘closed’ by you, by consumers, or have been automatically closed by the system due to timeout. Closed conversations are stored for between 48 hours and 14 days, depending on your contact center’s configuration.
    * **How to use**: Filter these conversations into the list at the end of your shift, or if you have down time. This will allow you to proactively follow up with conversations or to review that you have taken all the necessary steps to wrap up and document each one.

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

## Configuration

The agent workspace is tailored to the needs of messaging agents and was designed using feedback and requests from hundreds of messaging agents. It is developed for an easy plug-and-play approach and requires little to no configuration.  

There are a few configurations that brands can elect to control for the agent experience as outlined below.  

{: .notice}
**Please note:** If you have set up these configurations for the existing agent workspace, you do not need to set them again - they will automatically apply.

### Configuration from your LivePerson workspace

#### Auto accept

Determine if incoming conversations will automatically enter an agent's workspace or if they have to press ’accept’ button to receive them.

Set up:
1. Login to LivePerson as an admin and access the Night Vision settings by clicking on the Night Vision icon to the top right of the screen.
2. Select ‘auto accept’ or ‘advanced’ mode.

![alt text](img/new-workspace-configuration.png)

### Additional custom configuration options

Contact your LivePerson representative to customize the following parameters per your requirements.

#### Timeframe for closed conversations
In the workspace, agents can use the filter in their conversation list to view only ‘closed’ conversations. This setting will determine the time frame to display the closed conversations, or how far back to display conversations.  

**Default:** 2 days

**Min:** 1 day

**Max:** 14 days
<br>

#### Time format
Determine the format of the time that is displayed to agents within the workspace and within conversations.

**Default:** 12 hour clock (e.g. 08:59pm)

**Option:** 24 hour clock (e.g.  = 20:59)
<br>

#### Disable emojis
Brands can elect to remove the option for agents to send emojis during a conversation.

**Default:** emojis are enabled

#### Hide unauthenticated consumer attributes
The ‘consumer info’ widget displayed consumer attributes to the agents. This setting enables brands to hide any unauthenticated attributes from the agents.

**Default:** agent can view all attributes

#### Hide visitor name from agent
Brands can elect to maintain the consumer name anonymous from agents and replace their name with ‘visitor’ in the agent list.

**Default:** off

## Managing messaging conversations

### Beginning your shift

When you start your shift, you should change your status to online in order to start receiving messages. To change your status, click on your image in the bottom left corner to open the drop down status menu and select **Online**. Once you do that, conversations from the queue will be assigned to you based on their priority. If there are already existing conversations in your queue, you will see them here, in the My Connections list.

#### Warm up: staggered incoming conversations at the beginning of your shift

Some contact centers opt to configure the ‘warm up’ function for agents. If this is enabled, the incoming conversations assigned to you at the beginning of your shift will be slower and build gradually. The warm up feature will send you one message at a time with a defined interval between the first few incoming conversations, allowing you to adjust to your shift and get into the flow of your messaging workload.

### Taking incoming conversations

The updated agent workspace uses SLA to prioritize conversations on your behalf, allowing you to simply respond to the conversation at the top of the list. By default, the list will have ongoing, overdue, and idle conversations filtered on. You can filter idle and closed conversations out to keep your list concise and stay focused on the most urgent conversations.

![alt text](img/New Agent work space GIF1.gif){:class="newagent"}

Once you start handling conversations, you should work through the conversation list from top to bottom. Once you handle a customer, more customers can come in, and when you finish the conversation you will be taken to the next conversation in the list.

Conversations that reach your workplace have already undergone detailed analysis and prioritization. Based on the configurations selected by you contact center manager, there are two ways to accept incoming conversations into your workspace:

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

* **Custom widgets**: Look at relevant widgets your brand may have built. You may also have customized widgets for your brand that should be used such as CRM integrations or any other customized widgets. The enhanced workspace allows brands to add up to 10 custom widgets, giving you convenient access to all your tools.

### Replying to consumers

#### Predefined Content

You can reply by using free text, but we recommend using predefined content. Your contact center manager would have created a set of quick answers to the most common inquiries that you can easily enter into the conversation. By choosing predefined content templates, you can lower your average response time by saving time that would have been spent typing out responses. Some predefined answers will have associated hotkeys that will enable you to enter responses even more easily.

![image alt text](img/predefinedcontent.png)

#### Rich messaging

There are many tools at your disposal that can be used to foster relationships and carry out effective conversations. Rich messaging enhances the consumer experience by providing a richer, more engaging channel of communication.

The following types of rich messaging are being supported for the enhanced agent workspace:
* Structured content cards and carousels
* Consumer to agent photo sharing (coming September)
* Consumer to agent audio sharing (coming September)
* Agent to consumer file sharing (coming September)

### Additional actions

While conducting a conversation, there are a few actions you can take:

**Copy as plain text:** This action opens a window that includes that text of the conversation that can be copied to anywhere you need, such as into a CRM record.

**Transfer conversation (coming September):** Select a skill to transfer your conversation to. Use the search bar to find the relevant skill. Once you do this, the conversation will move out of your workspace and enter that skill’s queue.

**Resume conversation (coming September):** This action reopens a closed conversation in order for you to follow up with a customer.

#### Adjusting the SLA for follow up

Every time a consumer sends a message, the SLA, or your expected time to reply resets. For example, if you are expected to respond within 1 minute, each time a consumer answers a message the one minute will start over and the conversation will be prioritized automatically and adjusted appropriately in your conversation.

As an agent, you are able to control the amount of time you need to reply to consumers manually. For example, if you are chatting with a customer and you need to check the status on their application, you can let the customer know that you’ll get back to them in a couple of hours and then manually adjust the SLA of this conversation. By doing so, it will appear in your queue in the appropriate time and remind you to follow up with the customer.

![image alt text](img/sla.jpg){:class="newagent"}

### Closing conversations

The nature of messaging conversations is that they are ongoing and can be resumed at anytime. However, in order to manage agent work streams and ensure consumer requests have been fulfilled, conversations can be marked as ‘closed.’ A closed conversation can be reopened again - either by the consumer or by the agent - with the entire history kept intact.

The conversations can be marked as resolved or closed, either by the consumer or the agent. Within the conversation window, customers have ‘options’, one of which is to select to closed a conversation. For messaging channels such as SMS or Facebook Messenger, where a custom ‘options’ table is not available, customers will not be able to mark conversations as closed. As an agent, you can close a conversation when you know that it has been resolved. Closing a conversation is done via the drop down menu within the conversation window. It is important that you close conversations as soon as you are confident that they are resolved in order to clear your work queue and keep your performance KPIs accurate.

At the end of your shift or during downtime you can use the status filter to filter closed conversations back into your My Connections. This will allow you to review your conversation summaries and ensure that your conversations were properly documented. Closed conversations are stored in the My Connections list for between 48 hours up to 14 days, depending on your contact center's configuration. Conversations that exceed this can be found in the All Connections list.


#### Surveys (coming September)

**Post Conversation Survey:** Upon the closing of a conversation (whether done by the customer, by you or automatically) the Post Conversation Survey will be triggered to the customer (as defined by your brand). This survey is comprised of CSAT, NPS or other custom questions. The CSAT scores calculated for your performance in the KPI bar are derived from results calculated from the Post Conversation Survey.

**Agent survey:** The agent survey, which was previously available only for chat, allows brands to gather data and insights from their agents about their conversations with consumers. Gathering data from your perspective helps them to determine and analyze the nature of conversations and understand their outcomes. Once collected, this information can be used to recognize issues and optimize messaging operations.  

#### Auto Close for inactive conversations

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
* Filter closed conversations into the list to review the conversations you handled during the shift and ensure that everything has been documented properly

## FAQs

### Taking breaks and ending your shift

#### I want to go on my break in 10 minutes. What should I tell my customers? And, do I need to do anything with my manual SLA?

If there is a very active conversation, you can tell the customer you are taking a break. You can give them the option to wait, or to be transferred to another agent.

Note: due to the SLA and general demand, transferring to another agent may include a longer wait time for the customer before he is served.

#### What should I do once I have set a manual SLA?

Once this has been met, you should return to default.

#### I want to go on a lunch break, which is a 45-minute break. Should I tell my customers?

For your active conversations, you should let them know that you are going on a break and give them the option to wait or to be transferred to another agent. It’s not always necessary to tell all your customers you are going on break, be aware of which customers this is relevant to. Apply common sense approach.

### Managing messaging conversations

#### It feels like my active conversations are more than I should have. Should I change my status to away?

Please do not change your status to away. This will confuse the system that is working very hard to ensure that you are not overloaded.

Messaging is designed to have you handle multiple conversations at once. There is a smart algorithm working in the background to try and ensure that you are not overloaded. You’ll have a mixture of active and inactive conversations.

It can feel like you are taking on too many conversations at one time, especially because it is new. It is normal to have a large amount of conversations throughout the day, and this will take some getting used to. You should go on away for lunch and breaks only, not to control the queue.

#### What do I do if I get a conversation in my queue that my colleague handled yesterday? Do I transfer it to them?

No, please do not transfer the conversation. We want to avoid transferring as much as possible. The only case where this is considered within the same skill is if the customer specifically asks for the previous agent. Even then, this needs to be for a very good reason.  Always offer to help instead. In most cases, you should have the messaging history of that customer.

The system will automatically do its best to route the conversation to the last agent who dealt with it, but if they are not available, due to shift patterns or load percentage, then the system has decided that you have the better capacity to handle this conversation.

#### What should I do if a customer tells me that they’ll come back in a few hours? Should I change my manual SLA?

Once you have responded to the customer (the conversation is then no longer pending), you should hide the conversation. It will become inactive and will reactivate when the customer returns and responds. Feel free to ask the customer to respond when they are ready so that the conversation becomes active again.

#### When should I return a customer to the queue?

Your brand should decide with your LivePerson representative when this is best for them. Some brands decide that this should be the case at the end of your working day. This is so that your customer can continue to get the help they may need after you have finished your shift. If you fall ill, or are not scheduled to be in the next shift, someone else can help your customer complete their query. Please speak to your team manager for more information.

#### Should I ask the customer to ping me when they’re back and ready, or should I be chasing them?

You should always ask the customer to ‘ping’ you when they’re back, so that the conversation is shown as active on your system. However, if it has been a while since you have expected to hear from your customer, then it may be worth checking if they still need help.

#### What should I do if I don’t hear from my customer in a few hours?

You should check if the customer is still available or wanting to talk. If not, after a reasonable amount of time has passed, you can close the conversation. The customer can always open the conversation again easily, and you should make this clear in your closing predefined content.

#### What should I do if a customer wants to speak to the manager?

We suggest that you transfer to your team manager. This way, it removes the conversation from your list so that you can speak to a new customer instead.

### Closing and transferring conversations

#### When is it ‘safe’ to close a messaging conversation?

When a customer confirms a resolution, or when you have waited the appropriate amount of time after checking if they are still present.

Remember, they can always restart the conversation. You won’t always have a customer confirm a resolution, and you may have customers who call in and complete the query with another channel. If you have an unresponsive customer over a certain period of time, the system will close this for you.

#### Do we close a conversation if the customer comes back in over 12 hours?

You can allow this conversation to become inactive. If you plan to pick up the conversation the next day (and you will be on shift in time for their response) then this can stay in your list. If you will not be available, you should reassign the conversation at the end of your day.

#### Can I transfer a chat to another messaging department?

There are other skills available on messaging. Speak to your team manager to understand when and to which skills you should transfer a customer.

#### We’ve been asked to respond to the first customer within a minute. How can I do that when I have so many conversations?

Messaging is designed to allow you to multitask. You should be able to click the new conversation, send the first response which is a hot-key, and return to your current message. It will take some time to get used to prioritizing and multitasking.

#### Is there a predefined response that explains that the customer is being transferred to a new team?

If not, we can draw one up for you. Speak to your Team Manager if you feel that there are any missing predefined responses. Or, if you feel like the language can be slightly changed to make it more user friendly.

#### What should I fill out in the conversation summary, and should I fill this out every time?

Yes, a conversation summary should be filled out every time.  A summary should include information that stood out about the chat, a quick summary would be really useful for the next person who deals with this customer again. It saves them from having to read the whole transcript. Keep the summary short and concise.

#### Should I ask customers to fill in feedback at the end of a conversation?

The system will automatically send out the exit survey. Sometimes it is good for the customer to know that a survey will be popping up as it may also encourage them to fill it out. Most of the time, it is good to let the customer know.

### Miscellaneous

#### When I login, I get lots of messaging conversations straight away. Is that normal?

This can be normal, depending on the time that you start a shift. If there are a lot of customers in the queue from the night before, you may be busy from when you first login.

#### What will the visitor see once I set a new SLA?

For Facebook and SMS, the customer does not get any notifications. However, if the customer is using your app, they will get a notification of the SLA response time. Make sure you are only changing the SLA if you need to.
