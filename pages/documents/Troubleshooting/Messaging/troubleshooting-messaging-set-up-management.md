---
pagename: 'Set up and management '
categoryName: Troubleshooting
subCategoryName: Web messaging
indicator: messaging
subtitle: 'Troubleshooting for all questions relating to set up and management '
level3: ''
permalink: 'troubleshooting-web-messaging-set-up-and-management '
isTutorial: false
isNew: false
date: 2019-02-26 15:16:26 +0200

---
### Why isn’t AutoClose closing conversations?

#### Issue:

Our conversations aren’t closing even 3 hours after the last agent message was sent. This is occurring for a specific agent, not for all agents and our account’s AutoClose is set to 2 hours.

#### Cause:

* The AutoClose process runs every 25 minutes.
* If the account’s AutoClose is configured to 2 hours, the conversation automatically closes within 120-145 minutes.
* This applies only if during those 120-145 minutes the following conditions applied:
  * The last message in the conversation was sent by an agent (pending visitor response)
  * No conversation 'metadata' was updated (transfer to different skill, return to queue, user spectates, agent manager joins, agent adds conversation summary, etc.).
  * SLA was not set manually for the conversation

LiveEngage logs showed that the specific agent had been “visiting” the conversations from time to time as an agent (spectating or opening conversations from the list of conversations) and this was resetting the AutoClose timer.

#### Solution:

Ask the agent not to open conversations pending visitor response for a while and verify that AutoClose then closes the conversations in under 145 minutes.  
For more information, see [Auto close for messaging conversations](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=auto-close.).

### A consumer is no longer receiving messages from our agents. What happened?

#### Issue:

A consumer using messaging began a conversation with us and received an initial reply from one of our agents at 08:09 on Sunday, 18th. The consumer replied at 08:10 and again at 5:31 but did not receive any responses from our agents since the initial agent reply.

#### Possible causes:

1. The agent transferred the conversation to a different skill and no agents assigned to that skill have been available since the transfer,
2. The agent returned the conversation to the queue and then logged out of LiveEngage. No other messaging agents have been available since the conversation was returned to queue.

### Solution:

This is expected behavior.

1. Make sure to set the **fallback skill** and **default skill** according to your account’s needs.
2. As a best practice, if agents have permissions to do so, they should verify that agents are available before transferring conversations to a skill or returning them to the queue.
3. Alternatively, agents can ask an agent manager to join the conversation and transfer the conversation to a skill with available agents.

### **Why is the wrong conversation response time (SLA) displayed in the message window?**

#### Issue:

How come when a consumer opens a new messaging conversation, and there aren’t any agents online, the response time (SLA) displayed in the conversation window doesn’t factor in agent availability?

#### Cause:

The SLA in messaging is designed to correspond to the account's Response time configuration only. In messaging, unlike chat, agent availability and status are not calculated because messaging allows agents more flexibility in handling conversations.

#### Solution:

* In order to provide consumers with a more accurate estimation of the response time when the call center is not operational, we have a feature called Shift Status. This feature enables you to set offline hours for your account.
* During offline hours, the response time displayed takes into account both the account’s response time settings and the Shift Status settings.
* For more information about the Shift Status feature, please see [Configuring response times for messaging conversations](contact-center-management-messaging-operations-configuring-response-times.html).

### Why doesn’t the CSAT survey display to all consumers once their conversations are closed?

#### Issue: 

When some conversations are closed, the CSAT survey doesn’t display to the consumer. Why isn’t it consistent?

#### Cause**:**

* A CSAT survey is not displayed if the conversation is not associated with an agent (indicated in All Connections by Agent Name = N/A) when it is closed.
* This can happen if an Agent Manager joins a conversation that is not assigned to an agent (it is in queue) and then closes the conversation without interacting with the consumer.
* It can also happen when an Agent Manager joins a conversation that is not assigned to an agent (it is in queue), the Agent manager interacts with the consumer, and then closes the conversation.

### Solution:

The CSAT survey is presented to a consumer (assuming that CSAT survey is configured) when either the LiveEngage agent or the consumer closes the conversation.

* The CSAT survey is displayed regardless of the assigned agent's state (Online, Back, Away).
* The CSAT survey is displayed regardless of whether the conversation was interactive (message sent from both the agent and the consumer) or not.

### Why can’t we change the order of macros in iOS strings in predefined content or auto messages?

### Issue:

We are not able to change the order of macros in iOS strings although in Android we can do so.

In Android the order of the macros can be changed. For example, the message stating when the conversation was resolved and by what agent can be either of these:

* agent name first and time second: %1$s - agent name %2$s - time
* time first and agent second: Conversation was resolved at %2$s by %1$s

### Cause:

The order of the order of macros in strings In iOS are determined by their position. The macros are not numbered as in Android (%1$s and %2$s). They are resolved by %@ .

#### Solution:

This is expected behavior. The order of macros in iOS strings is predetermined.

### Why isn’t dynamic text in predefined content working?

#### Issue:

When messaging agents use a predefined content item that contains dynamic text, when the content item is displayed to a consumer, the dynamic text is not being replaced with a value.

For example, the following predefined content string, is displayed to the consumer like this:

“Hello, you're chatting with $!{operator.nickname}. How may I help you?”

Why isn’t LiveEngage replacing $!{operator.nickname} with the actual nickname?

#### Cause:

Dynamic Text in predefined content is not not supported for Messaging. It is supported in chat only.

#### Solution:

Messaging agents should not use predefined content items that contains dynamic text.

Best practice: Use a naming convention that helps easily identify predefined content items that contain dynamic text. This will help messaging agents easily avoid using those items.

For example, the content item mentioned above could be named How may I help? (chat only).

### Why are new SMS conversations created when a visitor replies to CSAT questions?

#### Issue:

Each time a consumer using the LiveEngage SMS interface closes a conversation and replies to the CSAT questions, a new conversation is automatically opened.

**Cause:**

The consumer answered the CSAT question with text and not just a number (for example: “5 superb person”). In the LiveEngage SMS interface, CSAT answers should be numeric only (even though the UI does not prevent a consumer from entering text). It is a known issue that answers containing text create new SMS conversations.

**Solution**:

This is a known limitation of the LiveEngage SMS interface.

### Why aren’t we receiving SMS messages in LiveEngage from some of our clients?

#### Problem:

We are not receiving SMS messages from some of our clients. This happens inconsistently and sometime we receive only parts of those messages from the clients.

#### Cause:

Not all LOCAL Twilio numbers (depends on country) support sending SMS messages. The ability of consumers to send SMS messages via these numbers will be partial at best.

Therefore if there are multiple Twilio 30008 errors (or similar) and it looks like a large chunk of SMS messages don't come into LE form Twilio, chances are the issue is with the type of the phone number.

This can be confirmed by opening a case with Twilio.

#### Solution:

If the SMS messages that are not received or are partially received have been sent from LOCAL Twilio numbers:

1. Check whether those numbers support SMS messages (see [Twilio international phone number availability and their capabilities](https://support.twilio.com/hc/en-us/articles/223183068-Twilio-international-phone-number-availability-and-their-capabilities)).
2. If your local Twilio numbers do not support SMS,and your mobile numbers do, use mobile lines instead.

### A LiveEngage account’s Facebook messages are no longer being routed to LiveEngage.

#### Issue:

Facebook messages were coming into the account previously but are no longer being routed to LiveEngage.

* The account has not made any changes to their configuration.
* LivePerson Support verified that the account’s messaging gateway configuration and page tokens are valid.
* Support is able to log into the account with the messaging gateway user.

#### Possible cause:

Possible Facebook bug.

#### Solution:

* LivePerson Support unsubscribed and resubscribed the account’s mobile application to the Liveperson Facebook connector and routing began working again immediately.
* LivePerson reported this to Facebook.

### Why aren’t automatic offline messages triggering during “off shift” hours?

#### Issue:

Automatic Offline Messages are not triggering during “off shift” hours.

#### Possible causes and solutions:

1. The customer disabled automatic messages for a period of time, either in the past or currently.
2. The agent manager set the LiveEngage account’s Off hours in the Shift status to the wrong time period. For more information about shift settings, see [Configuring response times for messaging conversations](contact-center-management-messaging-operations-configuring-response-times.html)

   {: .notice}  
   Off hours are set according to the timezone of the browser you’re in when you set Off hours – not according to the account’s timezone.