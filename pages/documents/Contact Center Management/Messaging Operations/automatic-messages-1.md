---
pagename: Automatic messages
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: Provide contextual information to consumers about the conversation
level3: ''
permalink: contact-center-management-messaging-operations-automatic-messages.html
isTutorial: true
date: 2019-01-21 14:49:33 +0200

---
[https://vimeo.com/312480396/7579cfc4e8](https://vimeo.com/312480396/7579cfc4e8 "https://vimeo.com/312480396/7579cfc4e8")

Automatic, or system, messages are predefined messages that are presented automatically in the Engagement Window during a conversation to provide a contextual information to consumers about the status of the conversation. Their purpose is to gain the consumer’s trust in the messaging channel, by setting expectations and giving the consumer visibility over the agent’s availability.

{image 1}

Auto messages are triggered upon specific events that are detected by the system, for example:

* the consumer opens a new conversation
* the conversation is transferred to another agent
* the time to respond is updated

When the auto messages are sent, they are displayed to the consumer and the agent within the conversation transcript, as well as in the conversation history both for the consumer and in LiveEngage. Auto messages do not affect to whom the conversation is pending, nor the time to respond.

## Configuration

Automatic messages require enablement. Please contact your LivePerson account team to enable this feature.

Note: When auto messages are enabled, they are all enabled by default and all have the default text. It is advised to review them immediately and modify them to suit your brand needs. Customizing automatic messages LivePerson has a default set of messages configured at the account level. Messages can be customized for all skills and/or specific skills by the account administrator, agent manager or campaign manager according to your business need.

### **To customize an automatic message:**

1. Click on the Campaigns tab. The footnote is displayed at the bottom of the page.

{image 2}

2\. In the footnote, click **Automatic Messages**. The Automatic Messages list is displayed for both Live chat and Messaging; select Messaging.

{image 3}

3\. Select a message to edit. The Edit Automatic Message page is displayed.

{image 4}

4\. The default automatic message will be displayed in the Text field. The message can be edited as required. Note that you can add dynamic text (see below). This message will be displayed for all skills, unless you add a customization for specific skills (see below).

5\. Click **Save**.

Note: The automatic message library can also be reached from the messaging settings in the Engagement studio by clicking ‘Customize Automatic Messages’.

{image 5}

### To translate a message

1\. On the Edit Automatic Messages page, click the “+” button next to the default language (English (US) in the illustration below). The Engagement languages page is displayed.

{image 6}

2\. From the “Available languages” list, select the language(s) you would like to translate your messages into.

3\. Click Save

### To customize messages for a specific skill

1\. On the **Edit Automatic Message** page, click the “+” button below the message description, next to the default All Skills button. A skill selection floating window is displayed.

{image 7}

2\. Select the skill(s) this message will be customized for and press “**Done**”. A new tab will be added for each skill selected.

3\. Select a skill tab (for example Escalation or Sales, as shown in the illustration above). The skill’s related fields will appear.

Note: if there is no text input for that message, the tab will appear with dashes, and in the meantime, the default set will be used. 4. Enter the relevant text to the text field. 5. Click Save. Note: you need to save your changes for each skill separately.

### Adding dynamic text to messages

Some of the messages can be customized to include dynamic text. Dynamic text changes based on the current characteristics of the Agent, such as the Agent’s name. The available options are:

* **Expected response time** - The expected response time or SLA before the consumer will be answered by an agent {expectedResponseTime}. The time can be set in days, hours or minutes.

**Agent name** - The nickname of the current operator {agentNickname}.

#### To add dynamic text to an automatic message:

1. Go to the Edit Automatic Message window.
2. Place the cursor where you want to add the dynamic field in the sentence.
3. Click Add dynamic text and choose the text type you want to add.
4. Click Save
5. Click Done.

{image 8}

### Adding a time period setting

Some of the messages can be customized to be sent to the consumer after a specific time period elapses, for example if the agent or consumer does not respond for a long time.

The following auto messages have a timer before they are sent:

* Agent non-responsive
* Consumer non-responsive
* Time in queue

Brands can set a different timer per skill.

#### To add a time period setting to an automatic message

1. Go to the **Edit Automatic Message** window.
2. Under the text field, enter the time after which the message should be sent (the time can be configured in seconds, minutes or hours).
3. Click Save
4. Click Done.

{image 9}

### Editing the look and feel of auto messages

For web messaging, the font and font color can be edited in the window studio in LivePerson. Click the auto message text to open the configuration dialog.

{image 10}

or in-app messaging this can be configured in the SDK. Disabling an automatic message Each automatic message can be disabled, either for all skills, or per skill. To disable an automatic message

1. Go to the Edit Automatic Message window
2. Change the Active toggle from enabled to disabled
3. Click Save
4. Click Done.

Note: if you wish to disable the message for some skills but not for others, select the individual skill tab and change the toggle for each skill as required.

{image 11}

### Notes

* Messages are supported in all LivePerson languages. For further information, please refer to the LiveEngage System Requirements and Supported Languages documentation. For the connectors (SMS, Facebook, Google My Business, Line, etc.) only one language can be supported (configurable by the brand). Contact the account team to set the language.
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

The following list sets out the default automatic messages for messaging in LiveEngage. The list includes the message properties, such as when they will be displayed and the supported dynamic text

### **New conversations** 

| --- | --- | --- | --- |
| Event | Message name in LiveEngage | Default text | Available dynamic text |
| A consumer opens a conversation during working hours | Welcome message | Thank you for messaging us. An agent should reply within {expectedResponseTime}. | {expectedResponseTime} |
| A consumer opens a conversation for the first time ever, during working hours | First time welcome message | Welcome! We're excited to offer you messaging, allowing you to reply to us in your own time. An agent should reply within {expectedResponseTime} | {expectedResponseTime} |

## Off hours

| --- | --- | --- | --- |
| Event | Message name in LiveEngage | Default text | Available dynamic text |
| A consumer opens a conversation during off hours | Off hours welcome message | Thank you for messaging us. Our contact center is currently closed. An agent should reply within {expectedResponseTime}. | {expectedResponseTime} |
| A consumer opens a conversation for the first time ever, during off hours	 | First time off hours welcome message | Welcome! Although our contact center is currently closed, we're excited to offer you messaging, allowing you to reply in your own time. An agent should reply within {expectedResponseTime} | {expectedResponseTime} |
| The consumer sends the first message during off hours in an open conversation | Off hours message mid conversation | Sorry, our contact center is currently closed. An agent should reply within {expectedResponseTime}. | {expectedResponseTime} |

## Time to respond

| --- | --- | --- | --- |
| Event | Message name in LiveEngage | Default text | Available dynamic text |
| The response time is updated manually by the agent | Manual response time update | An agent should respond within {expectedResponseTime}. | {expectedResponseTime} |
| The consumer marks the conversation as urgent | Conversation marked as urgent | You have marked this conversation as urgent. An agent should respond within {expectedResponseTime}. | {expectedResponseTime} |
| The consumer dismisses the conversation urgent state | Conversation no longer urgent | You have marked this conversation as not urgent. An agent should respond within {expectedResponseTime}. | {expectedResponseTime} |

## Consumer/Agent non-responsive
| Event | Message name in LiveEngage | Default text | Trigger |
| --- | --- | --- | --- |
| The consumer has not responded for X seconds/minutes/hours | Consumer non-responsive message | We haven't heard from you in a while. Do you still need help with something? | Yes |
| The agent did not respond for X seconds/minutes/hours | Agent non-responsive message | Sorry it's taking longer than expected to reply. Your agent will respond shortly.  | Yes |
| Conversation is in queue for X mins/hours  | Waiting in queue message | Sorry our wait times are longer than expected. You will be connected to an agent shortly. | Yes |

## Transfers and connection to agents
| Event | Message name in LivePerson | Default text | Trigger |
| --- | --- | --- | --- |
| The conversation is transferred to a different skill | Conversation transferred to a different agent | You are being transferred to another agent |  |
| The agent returns the conversation to the queue | Conversation returned to queue | Sorry, your agent can't respond right now. Another agent will be with you in {expectedResponseTime}. | {expectedResponseTime} |
| The consumer is connected to an agent | Agent accepts conversation | You are now connected to {agentNickname}. | {agentNickname} |

## Conversation participants
| Event | Message name in LiveEngage | Default text | Trigger |
| --- | --- | --- | --- |
| Agent manager joins the conversation  | Agent manager joins conversation | {agentNickname} joined the conversation. | {agentNickname}  |
| The joined agent manager leaves the conversation 	 | Agent manager leaves conversation | {agentNickname} left the conversation. | {agentNickname}  |