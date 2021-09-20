---
pagename: Automatic messages
categoryName: Contact center management
subCategoryName: Live chat operations
indicator: chat
subtitle: Provide contextual information to consumers about the conversation during
  a chat
level3: ''
permalink: contact-center-management-live-chat-operations-automatic-messages.html
isTutorial: false
isNew: false
date: '2019-01-23T12:22:36.000+00:00'

---
Automatic messages are messages that are presented automatically in the Engagement Window during a conversation to provide a contextual information to consumers about the status of the conversation. For example:

* When the Engagement Window opens
* When an agent accepts the conversation
* When the consumer is transferred to another agent

![](/img/automatic-messages-chat-1b.png)

## Configuration: Customize Automatic Messages for chat

LivePerson has a default set of messages configured at the account level. Messages can be customized for all skills and/or specific skills by the account administrator, agent manager or campaign manager according to your business need.

### To customize an automatic message

1. Log into the Conversational Cloud, and then click on the **Campaign Builder** tab. The footnote is displayed at the bottom of the page.
2. In the footnote, click **Automatic Messages**. The Automatic Messages list is displayed. Click the Live chat tab:

![](/img/automatic-messages-library.png)

{:start="3"}
3\.    Select a message to edit. The **Edit Automatic Message** page is displayed.

![](/img/automatic-messages-messaging-11b.png)

{:start="4"}
4\.    Enter the relevant text to the text field. Note that you can add dynamic text (see below).  
5\.    Click **Save**.

{: .notice}
The automatic message library can also be reached from the chat settings in the Engagement studio by clicking ‘Customize Automatic Messages’.

### To translate a message

1. On the **Edit Automatic Messages** page, click the “+” button next to the default language (English in the illustration above). The Engagement Language page is displayed.
2. From the “Available languages” list, select the language(s) you would like to translate your messages into.
3. Click **Save**.

![](/img/automatic-messages-messaging-8b.png)

### To customize messages for a specific skill

1. On the **Edit** **Automatic Messages** page, click the “+” button below the message description next to the default set. A skill selection floating window is displayed.
2. Select the skill(s) this message will be customized for and press “Done”. A new tab will be added for each skill selected.
3. Select a skill tab (for example Billing or Tech support, as shown in the illustration above). The skill’s related fields will appear. Note: if there is no text input for that message, the tab will appear with dashes, and in the meantime, the default set will be used.
4. Enter the relevant text to the text field. Note: you can use dynamic text (see below).
5. Click **Save**. Note: you need to save your changes for each skill separately.

{: .notice}
When transferring a chat to a different agent, the skill-specific message will only be shown if the target agent has the skill of the chat. Otherwise, the default message will be shown.

![](/img/automatic-messages-messaging-1b.png)

## Adding dynamic text to messages

Some of the messages can be customized to include dynamic text. Dynamic text changes based on the current characteristics of the agent, such as the Agent’s name. The available options are:

* _Average wait time_ - The average wait time computed for this visitor. Separate fields are provided for the minutes and seconds to allow for formatting:
  * Average wait time (seconds) - {AvgWaitSeconds}
  * Average wait time (minutes) - {AvgWaitMinutes}
* _Queue length_: The number of visitors in the "waiting to chat" queue {QueueLength}
* _Place in queue_: The visitor's numerical rank in the "waiting to chat" queue {PlaceInQ}.
* _Agent name_: The nickname of the current operator {name}.
* _Email address_: The visitor’s email address {email}.

### To add dynamic text to an automatic message

1. Go to the Edit automatic message window. (See instructions in **To edit an automatic message**).
2. Place the cursor where you want to add the dynamic field in the sentence.
3. Click **Add dynamic text** and choose the text type you want to add.
4. Click **Save**.
5. Click **Done**.

![](/img/automatic-messages-chat-9b.png)

## Available Automatic Messages for chat

The following list sets out the default Automatic Messages in the Conversational Cloud, divided into 3 groups: system messages, non-responsive messages and on-hold messages. The list includes the message properties, such as when they will be displayed and the supported dynamic text.

### System messages

These messages appear during the conversation to provide visitors contextual information about the conversation.

| When the message is displayed? | Message name in the Agent Workspace | Default text | Available dynamic text |
| --- | --- | --- | --- |
| This message is displayed when the agent closes/ends the chat. | Engagement disconnected by agent | Thank you for chatting with us. |  |
| This message is displayed before the chat starts, when the visitor is routed to an agent. | Routing chat to an agent | Thank you for choosing to chat with us. An agent will be with you shortly. | ·       {AvgWaitMinutes}·       {AvgWaitSeconds}·       {QueueLength}·       {PlaceInQ} |
| This message is displayed before the chat starts, while the visitor is waiting for an available agent. | Waiting for an available agent | All agents are currently assisting others. Your estimated wait time is {AvgWaitMinutes} minutes and {AvgWaitSeconds} seconds.  Thank you for your patience. | ·       {AvgWaitMinutes}·       {AvgWaitSeconds}·       {QueueLength}·       {PlaceInQ} |
| This message is displayed after the “Waiting for an available agent” message if the consumer has waited for an available agent for a predefined amount of time. | Chat agents currently unavailable | There are currently no agents available to chat. Please try again soon. |  |
| This message is displayed to when the chat is transferred to a different skill group. | Engagement transferred to a different skill | Please wait while your chat is transferred to the appropriate group. |  |
| This message is displayed if the chat was disconnected | Chat engagement not in progress | You are not currently connected to an agent. |  |
| This message is displayed when the chat is transferred to a different agent. | Engagement transferred to a different agent | Please wait while your chat is transferred to {name}. | {name} |
| This message is displayed when the chat is transferred to a different agent because the assigned agent has disconnected. | Engagement transferred due to agent disconnection | There is a problem connecting with {name}. Please wait while your chat is transferred to another agent. | {name} |
| This messages is displayed requested the chat transcript. | Chat transcript requested by visitor | The chat transcript will be sent to: {email} at the end of your chat. | {email} |
| This message is displayed when the chat is transferred to a different agent due to a problem connecting to the assigned agent. | Engagement re-queued by system | There is a problem connecting with {name}. Please wait while your chat is transferred to another agent. | {name} |
| This messages is displayed when an agent accepts the chat. | Agent accepts the engagement | You are now chatting with {name}. | {name} |
| This message is displayed when the chat has been disconnected. | Engagement disconnected | Sorry, our chat session has ended unexpectedly. Come chat with us again for further assistance. |  |

{: .notice}
This feature requires backend enablement. For more information, please contact your LivePerson representative. 

### Non-responsive messages

When the consumer does not respond for a specified amount of time, two messages are displayed sequentially to the visitor. The **Timeout** is the number of seconds that the system would wait for a response before the first non-responsive message would be sent.

| Message name in the Agent Workspace | Default text | Available dynamic text | Timeout | Can be disabled? |
| --- | --- | --- | --- | --- |
| Non-responsive Fair Warning | We have not heard from you for some time.  Do you wish to continue to chat? | X | 180 | ✓ |
| Non-responsive Final Warning | Since we have not heard from you for some time, we will now end this chat. Please contact us again if we can be of further assistance. | X | 180 | ✓ |


### On-hold messages

Three default Automatic Messages are displayed to consumers when the agent does not respond for a specified amount of time. These ‘on-hold’ messages are selected randomly while ensuring that the consumer will never receive the same message more than twice in a row. The **Timeout** is the number of seconds that the consumer will wait for an agent’s reply before the first on-hold message is sent.

| Message name in the Agent Workspace | Default text | Available dynamic text | Timeout | Can be disabled? |
| --- | --- | --- | --- | --- |
| On-hold message #1 | I'll be right with you. | X | 180 | ✓ |
| On-hold message #2 | Thank you for waiting. I'll be with you in just a moment. | X | 180 | ✓ |
| On-hold message #3 | I'm sorry for the delay. I'll be right with you. | X | 180 | ✓ |
