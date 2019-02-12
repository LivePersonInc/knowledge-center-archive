---
pagename: Automatic messages configuration guide
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: Provide contextual information to consumers about the conversation
level3: Automatic messages
permalink: contact-center-management-messaging-operations-automatic-messages-automatic-messages-configuration-guide.html
isTutorial: true
date: 2019-01-21 12:49:33 +0000
isNew: false

---
<iframe src="https://player.vimeo.com/video/312480396" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Introduction

Automatic, or system, messages are predefined messages that are presented automatically in the Engagement Window during a conversation to provide a contextual information to consumers about the status of the conversation. Their purpose is to gain the consumer’s trust in the messaging channel, by setting expectations and giving the consumer visibility over the agent’s availability.

![](/img/automatic-messages-messaging-1.png)

Auto messages are triggered upon specific events that are detected by the system, for example:

* the consumer opens a new conversation
* the conversation is transferred to another agent
* the time to respond is updated

When the auto messages are sent, they are displayed to the consumer and the agent within the conversation transcript, as well as in the conversation history both for the consumer and in LiveEngage. Auto messages do not affect to whom the conversation is pending, nor the time to respond.

## Configuration

Automatic messages require enablement. Please contact your LivePerson account team to enable this feature.

{: .notice}
When auto messages are enabled, they are all enabled by default and all have the default text. It is advised to review them immediately and modify them to suit your brand needs.

## Customizing automatic messages

LivePerson has a default set of messages configured at the account level. Messages can be customized for all skills and/or specific skills by the account administrator, agent manager or campaign manager according to your business need.

### To customize an automatic message:

1. Click on the **Campaigns tab**. The footnote is displayed at the bottom of the page.

![](/img/automatic-messages-messaging-2.png)

{:start="2"}
2\. In the footnote, click **Automatic Messages**. The Automatic Messages list is displayed for both Live chat and Messaging; select Messaging.

![](/img/automatic-messages-messaging-3.png)

{:start="3"}
3\. Select a message to edit. The Edit Automatic Message page is displayed.

![](/img/automatic-messages-messaging-4.png)

{:start="4"}
4\. The default automatic message will be displayed in the Text field. The message can be edited as required. Note that you can add dynamic text (see below). This message will be displayed for all skills, unless you add a customization for specific skills (see below).

1. Click **Save**.

Note: The automatic message library can also be reached from the messaging settings in the Engagement studio by clicking ‘Customize Automatic Messages’.

![](/img/automatic-messages-messaging-6.png)

### To translate a message

1. On the Edit Automatic Messages page, click the “+” button next to the default language (English (US) in the illustration below). The Engagement languages page is displayed.
2. From the “Available languages” list, select the language(s) you would like to translate your messages into.
3. Click Save

![](/img/automatic-messages-messaging-7.png)

### To customize messages for a specific skill

1. On the **Edit Automatic Message** page, click the “+” button below the message description, next to the default All Skills button. A skill selection floating window is displayed.

![](/img/automatic-messages-messaging-8.png)

{:start="2"}
2\. Select the skill(s) this message will be customized for and press “**Done**”. A new tab will be added for each skill selected.

1. Select a skill tab (for example Escalation or Sales, as shown in the illustration above). The skill’s related fields will appear.

Note: if there is no text input for that message, the tab will appear with dashes, and in the meantime, the default set will be used. 4. Enter the relevant text to the text field. 5. Click Save. Note: you need to save your changes for each skill separately.

## Adding dynamic text to messages

Some of the messages can be customized to include dynamic text. Dynamic text changes based on the current characteristics of the Agent, such as the Agent’s name. The available options are:

* **Expected response time** - The expected response time or SLA before the consumer will be answered by an agent {expectedResponseTime}. The time can be set in days, hours or minutes.

**Agent name** - The nickname of the current operator {agentNickname}.

### To add dynamic text to an automatic message:

1. Go to the Edit Automatic Message window.
2. Place the cursor where you want to add the dynamic field in the sentence.
3. Click Add dynamic text and choose the text type you want to add.
4. Click Save
5. Click Done.

![](/img/automatic-messages-messaging-9.png)

## Adding a time period setting

Some of the messages can be customized to be sent to the consumer after a specific time period elapses, for example if the agent or consumer does not respond for a long time.

The following auto messages have a timer before they are sent:

* Agent non-responsive
* Consumer non-responsive
* Time in queue

Brands can set a different timer per skill.

### To add a time period setting to an automatic message

1. Go to the **Edit Automatic Message** window.
2. Under the text field, enter the time after which the message should be sent (the time can be configured in seconds, minutes or hours).
3. Click Save
4. Click Done.

![](/img/automatic-messages-messaging-10.png)

## Editing the look and feel of auto messages

For web messaging, the font and font color can be edited in the window studio in LivePerson. Click the auto message text to open the configuration dialog.

![](/img/automatic-messages-messaging-11.png)

or in-app messaging this can be configured in the SDK. Disabling an automatic message Each automatic message can be disabled, either for all skills, or per skill. To disable an automatic message

1. Go to the Edit Automatic Message window
2. Change the Active toggle from enabled to disabled
3. Click Save
4. Click Done.

{: .notice}
If you wish to disable the message for some skills but not for others, select the individual skill tab and change the toggle for each skill as required.

## Notes

* Messages are supported in all LivePerson languages. For further information, please refer to the [LiveEngage System Requirements and Supported Languages]() documentation. For the connectors (SMS, Facebook, Google My Business, Line, etc.) only one language can be supported (configurable by the brand). Contact the account team to set the language.
* The content of each message can be edited by the brand.
* Skill variation is supported, including enabling/disabling the messages for each skill.
* For messages with a timer (agent non-responsive, consumer non-responsive and time in queue), the timer can be configured to X seconds, minutes, hours. The timer can also be configured per skill.
* Dynamic text can be added to the messages, which will be replaced with a runtime value, such as agent name.
* Agent name macro in the auto message will display the agent nickname
* Auto messages do not affect who the conversation is pending (agent or consumer), the time to respond or the conversation activity (auto messages do not affect auto close).
* In case the time to response (TTR) is overdue, the auto message will not appear if it contains the TTR macro.
* Messages with overdue time to response (TTR) will not be presented. This can happen in case of transfer, connection to an agent, back to queue, etc. if using the TTR macro in the relevant messages. If the macro appears in the message and the TTR is overdue, no message will be displayed
* If the brand is using an SDK with version earlier than 2.8, or if the consumer did not update his app to the latest version, the existing SLA toaster will appear on the consumer side.
* Language of the conversation is determined at the beginning of the conversation. E.g. if the agent starts a conversation on web, with a French engagements, and continues the conversation in-app when the phone’s language is English, the auto messages will appear in French.

## Supported automatic messages

The following list sets out the default automatic messages for messaging in LivePerson. The list includes the message properties, such as when they will be displayed and the supported dynamic text.

### New conversations

| Event | Message name in LivePerson | Default text | Trigger |
| --- | --- | --- | --- |
| A consumer opens a conversation for the first   time ever, during working hours | First time welcome message | Welcome! We're excited to offer you messaging,   allowing you to reply to us in your own time. An agent should reply within   {expectedResponseTime} | A first time consumer (identified by a new   consumer ID) opens a conversation for the very first time when the contact   center is set to working hours (see APPENDIX A on how to set working   hours) |
| A consumer opens a conversation during working   hours | Welcome message | Thank you for messaging us. An agent should   reply within {expectedResponseTime}. | A returning consumer (identified by an   existing consumer ID) opens a conversation when the contact center is set to   working hours (see APPENDIX A on how to set working hours). See APPENDIX   E for   more information on the behavior of welcome messages after auto close |

### Off hours

| Event | Message name in LivePerson | Default text | Trigger |
| --- | --- | --- | --- |
| A consumer opens a conversation for the first   time ever, during off hours | First time off hours welcome message | Welcome! Although our contact center is   currently closed, we're excited to offer you messaging, allowing you to reply   in your own time. An agent should reply within {expectedResponseTime} | A first time consumer (identified by a new   consumer ID) opens a conversation for the very first time when the contact   center is set to off  hours (see APPENDIX A on how to set off    hours) |
| A consumer opens a conversation during off   hours | Off hours welcome message | Thank you for messaging us. Our contact center   is currently closed. An agent should reply within {expectedResponseTime}. | A returning consumer (identified by an   existing consumer ID) opens a conversation when the contact center is set to   off hours (see APPENDIX A on how to set off hours). See APPENDIX   E for   more information on the behavior of welcome messages after auto close |
| The consumer sends the first message during   off hours in an open conversation | Off hours message mid conversation | Sorry, our contact center is currently closed.   An agent should reply within {expectedResponseTime}. | In an already open conversation, the consumer   sends a message when the contact center is set to off  hours (see APPENDIX A on how to set off    hours) |

### Time to respond

| Event | Message name in LivePerson | Default text | Trigger |
| --- | --- | --- | --- |
| The response time is updated manually by the   agent | Manual response time update | An agent should respond within {expectedResponseTime}. | The agent sets a manual SLA |
| The consumer marks the conversation as urgent | Conversation marked as urgent | You have marked this conversation as urgent.   An agent should respond within {expectedResponseTime}. | The consumer clicks ‘mark as urgent’ when the   conversation is pending agent and the SLA is not overdue |
| The consumer dismisses the conversation urgent   state | Conversation no longer urgent | You have marked this conversation as not   urgent. An agent should respond within {expectedResponseTime}. | The consumer clicks dismiss urgent when the   conversation is pending agent and the SLA is not overdue |

### Consumer/Agent non-responsive

| Event | Message name in LivePerson | Default text | Trigger |
| --- | --- | --- | --- |
| The consumer has not responded for X   seconds/minutes/hours | Consumer non-responsive message | We haven't heard from you in a while. Do you   still need help with something? | The consumer has not sent a message for over x   secs/mins/hours since last    Assigned Agent OR Agent OR Manager last wrote   a message.   For more info about the logic see APPENDIX D) |
| The agent did not respond for X   seconds/minutes/hours | Agent non-responsive message | Sorry it's taking longer than expected to   reply. Your agent will respond shortly. | The assigned agent has not replied within X   mins from assignment   OR   Assigned agent / Agent / Manager has not   replied within X minutes from first consumer message, since last Agent(s)   message or assignment    (for more info about the logic see APPENDIX B) |
| Conversation is in queue for X mins/hours | Waiting in queue message | Sorry our wait times are longer than expected.   You will be connected to an agent shortly. | When a conversation enters a queue for any   reason (e.g. new conversation, transfer, back to queue) and is unassigned for   X mins the message is triggered (for more info about the logic see APPENDIX C) |

### Transfers and connection to agents

| Event | Message name in LivePerson | Default text | Trigger |
| --- | --- | --- | --- |
| The conversation is transferred to a different   skill | Conversation transferred to a different agent | You are being transferred to another agent | Agent transfers the conversation. When using   skill variation for the messages, when agent of skill A transfers to agent of   skill B, the variation of skill B will be used |
| The agent returns the conversation to the   queue | Conversation returned to queue | Sorry, your agent can't respond right now.   Another agent will be with you in {expectedResponseTime}. | Agent returns the conversation to the queue |
| The consumer is connected to an agent | Agent accepts conversation | You are now connected to {agentNickname}. | The conversation is assigned to an agent |

### Conversation participants

| Event | Message name in LivePerson | Default text | Trigger |
| --- | --- | --- | --- |
| Agent manager joins the conversation | Agent manager joins conversation | {agentNickname} joined the conversation. | Agent manager OR another Agent joins the   conversation |
| The joined agent manager leaves the   conversation | Agent manager leaves conversation | {agentNickname} left the conversation. | The joined agent manager or agent leaves the   conversation |

### Agent Experience

The auto messages appear on the agent side as well as part of the conversation transcript, so he can be aware of what messages the consumer can see. They appear inline with a dedicated look and feel. The auto messages also appear in the conversation’s history.

![](/img/automatic-messages-messaging-16.png)

### Reporting

LiveEngage Report Builder will support analysis of Auto Messages activity. To easily identify activity generated by Auto Messages a “User Type” filter has been added to all relevant Report Builder predefined dashboards.

The User Type filter is set to exclude the “System” user which generates Auto Messages. The “System” user will still appear in the list of Agents presented in the dashboard. Therefore, the activity of Auto Messages is excluded by default.

To view Auto Messages activity, the User Type filter can be set to include the value “System”. By checking this value, all metrics attributed to an agent will reflect the activity generated by the system, which is currently, Auto Messages. This includes metrics available through the Agent Messaging Activity dataset, such as number of messages sent or responses given by the system.

{: .notice}
To ensure account level KPIs are not deviated from by system activity, the following Messaging metrics will always exclude activity generated by the system, regardless of the User Type filter settings:

#### Agent Messaging Activity

1\.     AVG. AGENT FIRST RESPONSE TIME TO FIRST TIME CONVERSATIONS

2\.     AVG. RESPONSE TIME BY AGENT

3\.     AVG. TIME TO AGENT FIRST RESPONSE

4\.     INTERACTIVE CONVERSATIONS

5\.     NON - INTERACTIVE CONVERSATIONS

6\.     ABANDONED CONVERSATIONS

#### **Consumer Messaging Activity**

1\.     AVG. CONSUMER RESPONSE TIME

## Best practices

* It is recommended to keep automatic messages short for better readability
* When messaging on channels such as SMS, Google and Facebook, LivePerson cannot control the look and feel of the messages, and auto messages will appear as agent messages. There are 2 options to solve this:
* Create a dedicated skill for these channels and add a prefix for these messages such as “This is an automatic message:”
* Add wording to the message that will make it clear (e.g. “Info: <auto message>”)
* Do not use HTML, and line breaks (clicking enter) in auto messages.
* Messages with overdue times to response (TTRs) are not sent. Hence, it is recommended not to use the TTR macro in the following messages which may trigger when the TTR is overdue:
  * Connection to an agent
  * Transfer
  * Back to queue

{: .notice}
If the TTR macro is not used the message will be sent even if the TTR is overdue.

## Limitations

* Conversation closed messages (displayed when the agent/consumer closes the conversation) are out of the scope of phase 1. Existing messages are displayed instead and are not editable on web messaging, nor editable per skill in in-app messaging). This will be supported in later phases.
* There is a known limitation in LivePerson that any conversations that start during working hours will still be defined as working hours even if mid conversation it is now off-hours (and vice versa). Auto messages works around this and will show the correct Time to Response (TTR) to the consumer. On the agent side however, the agent will see the wrong TTR (e.g. working hour TTR when it’s off hours).
* TTR messages can only provide the time period until the expected response and not timestamp (e.g. “An agent will respond in 2 hours”, and not “An Agent will respond at 10:00”). This will be supported in phase 2.
* TTR messages only display the first 2 time units, not rounded. E.g. if TTR is 1 day 20 hours and 40 minutes, the TTR will be 1 day and 20 hours. This will be supported in a later phase.
* HTML is not supported in auto messages and should not be used. Do not use the following chars in the auto message: < > \\. Using these characters may cause the message not to be sent
* All the connectors (SMS, Facebook, Google My Business, etc.) support only 1 language. The language needs to be set in Houston. When connectors are supported in campaigns for messaging at a later date, all languages will be supported.
* A new profile, related to the auto messages, is added to LiveEngage and appears in the UI. **This profile should not be deleted/edited**.

## Setting the contact center off hours

1\.Click the downward arrow next to the user name and click "Shift Scheduler"

![](/img/automatic-messages-messaging-17.png)

2\.The Account Shift Scheduler screen will now be displayed. Choose the “Manual” option.

![](/img/automatic-messages-messaging-18.png)

3\.Define your current shift status:

a. Choose “Off hours” when your connection center is inactive (this is used for the SLA calculation):

i. Define the next shift start date

ii. Define the next shift start time

iii. Consumers will get auto messages with expected time to response equal to the time until next shift time + the conversation SLA.

iv. LiveEngage will automatically set to “Online” again on the next shift date and time.

1. Save the page.

**Note:**

* When off hours are over, the brand needs to set the account back to working hours. This must be completed daily; changing from working to off hours and vice versa.
* Off hours are set at the account level and not per skill.
* Auto messages for off hours are triggered only when the contact center is set to off hours.

## Logic of “Agent non-responsive” auto message

The _Agent non responsive_ message will be triggered in one of these 2 scenarios:

* Assigned agent did not reply within X seconds/minutes/hours from assignment, regardless of consumer writing a message
* Assigned agent did not reply within X seconds/minutes/hours from first consumer message since agent's last reply

The _Agent non responsive_ message will be sent only if the conversation is assigned to an agent and is not sent during off-hours.

{: .notice}
The minimum available time frame is 15 seconds.

#### Example Scenarios

_Timer set for 10 minutes_

**1. Assigned agent did not reply within 10 mins**

10:00 - Conversation is opened and enters the queue

10:10 - Conversation is assigned to an agent but agent does not send a message

10:20 - _Agent non responsive_ message is triggered

**2. Transferred conversation - agent assigned didn't reply within 10 mins** (_Scenario A)_

10:00 - Conversation is opened and enters the queue

10:10 - Conversation is assigned to agent A but agent does not send a message

10:15 - Agent A transfers the conversation; conversation is returned to the queue

10:20 - Conversation is assigned to agent B but agent B does not send a message

10:30 - _Agent non responsive_ message is triggered (_Scenario b)_

10:00 - Conversation is opened and enters the queue

10:10 - Conversation is assigned to agent A

10:14 - Agent A sends a message

10:15 - Agent transfers the conversation; conversation is returned to the queue

10:20 - Conversation is assigned to agent B but agent B does not send a message

10:30 - _Agent non responsive_ message is triggered

**The above scenarios also apply to ‘back to queue’.**

**3. Agent non responsive after consumer message**

10:00 - Conversation is opened and enters the queue

10:09 - Conversation is assigned to agent A

10:10 - Agent A sends a message

10:15 - Consumer sends message #1

10:20 - Consumer sends message #2

10:25 - _Agent non responsive_ message is triggered

## Logic of “Time in queue” auto message

* When a conversation enters a queue for any reason (such as a new conversation, transfer, back to queue) and is unassigned for X mins the _Time in queue_ message is triggered.
* When the conversation is picked up by an agent/agent manager - the timer resets.
* If the agent transfers/returns to queue - the timer starts again.
* The message is sent once the conversation is in the queue and is sent during working hours only.

NOTE: The minimum available time frame is 15 seconds.

#### Example Scenarios

_Timer set for 15 minutes_

**Scenario 1**

10:00 - Conversation starts and enters skill A’s queue

10:15 - In queue message triggered

10:20 - Agent is assigned

10:25 - Agent transfers/returns conversation to skill B’s queue. No agent is assigned for 15 mins

10:40 - In queue message triggered

**Scenario 2**

10:00 - Conversation starts and enters skill A’s queue

10:10 - Agent is assigned

10:11 - Agent transfers/returns conversation to skill B’s queue

10:26 - In queue message triggered

## Logic of “Consumer non-responsive” message

* When the consumer did not send a message for over x seconds/minutes/hours since last assigned agent OR agent OR agent manager last wrote a message, the auto message is triggered.
* Agents sending more messages will reset the time.
* This auto message will trigger if the conversation is currently assigned to an agent.
* Timer does not reset upon transfer.

{: .notice}
The minimum available time frame is 15 seconds.

#### Example Scenarios

#### _Timer set for 10 minutes_

**Scenario 1**

10:00 - Agent sends a message

10:10 - _Consumer non-responsive_ message is triggered

**Scenario 2**

10:00 - Agent sends a message

10:05 - Agent transfers conversation / returns conversation to queue

10:10 - Conversation is unassigned; _Consumer non-responsive_ message is triggered

**Scenario 3**

10:00 - Agent sends a message

10:05 - Agent transfers conversation / returns conversation to queue

10:07 - Conversation is assigned to a new agent

10:10 - _Consumer non-responsive_ message is triggered

## Logic of “Welcome” message following auto close

When a conversation is auto closed by the system, a _Welcome_ message will be sent to the customer the next time he opens a conversation, but only after 48 hours have passed. This applies to both the off hours _Welcome_ message and the working hours _Welcome_ message.

The logic behind this behavior is that auto close is a ‘silent’ action and the consumer may not know when the conversation has been closed. Therefore when he returns to the conversation, it should continue from where he left off, without any mention or indication of a new conversation. However after 48 hours, the customer is more likely to be addressing a new topic, and therefore the conversation can be treated as new. At this point, it is appropriate to send a _Welcome_ message.

#### **Example Scenarios**

_Auto close after 2 hours_

**Conversation reopened during off hours after less than 48 hours**

10:00 - Customer opens conversation, _Welcome_ message is sent and agent and customer message

10:30 - Last message sent by the customer

12:30 - Conversation is auto closed

22:00 - Customer sends a message, conversation opens and no _Welcome_ message is sent

**Conversation reopened during off hours after more than 48 hours**

10:00 - Customer opens conversation, Welcome message is sent and agent and customer message

10:30 - Last message sent by the customer

12:30 - Conversation is auto closed

\+48hrs 22:00 - 2 days later consumer sends a message, conversation opens and _Off hours welcome_ message is sent

**Conversation reopened during working hours after less than 48 hours**

10:00 - Customer opens conversation, Welcome message is sent and agent and customer message

10:30 - Last message sent by the customer

12:30 - Conversation is auto closed

22:00 - Customer sends a message, conversation opens and no _Welcome_ message is sent

**Conversation reopened during working hours after more than 48 hours**

10:00 - Customer opens conversation, Welcome message is sent and agent and customer message

10:30 - Last message sent by the customer

12:30 - Conversation is auto closed

\+48hrs 22:00 - 2 days later consumer sends a message, conversation opens and _Working hours welcome_ message is sent