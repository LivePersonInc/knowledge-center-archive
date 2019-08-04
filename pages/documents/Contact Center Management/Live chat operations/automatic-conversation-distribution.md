---
pagename: Automatic Conversation Distribution
categoryName: Contact center management
subCategoryName: Live chat
indicator: chat
subtitle: Use Automatic Conversation Distribution (ACD) to balance your agents’ workload
level3: ''
permalink: contact-center-management-live-chat-operations-automatic-conversation-distribution.html
isTutorial: false
date: '2019-01-20T12:33:55.000+00:00'
isNew: false

---
### Balancing the agent workload

Accepting conversations manually is not always the most efficient way to manage your contact center operations. It has the potential to cause a number issues, such as customers experiencing long wait times, an imbalance of workload between agents and high rates of chat abandonment.

To avoid these problems, LivePerson’s Automatic Conversation Distribution (ACD) helps brands manage agent workload more effectively by intelligently routing conversation requests and balancing the workload among the pool of available agents. For brands using messaging, ACD also works to distribute conversations intelligently between messaging agents.

![](/img/acd-1.png)

## How ACD works

LivePerson’s ACD algorithm routes conversation requests to available agents according to their workload. The ACD algorithm takes into consideration how many conversations an agent is allowed to take, i.e., their maximum concurrency, as well as how many conversations the agent is currently handling. For brands using messaging, ACD also works to distribute conversations intelligently between messaging agents.

For routing of live chat conversations, the ACD algorithm uses an Agent Load Ratio which is calculated as follows:

The number of the agent's current chats / The maximum number of chats that an agent is allowed to handle concurrently. The ACD will route the next incoming chat to the agent with the lowest Agent Load Ratio.

As an example, let’s compare two agents:

* Agent A is permitted to handle three chats and is currently handling one.
* Agent B is permitted to handle four chats and is also currently handling only one.

The Agent Load Ratio for each of them is:

* Agent A: 1/3
* Agent B: 1/4

As you can see, Agent B has a lower Agent Load Ratio, so the ACD will route the next incoming chat to Agent B.

If both agents have the same load ratio, the chat is routed to the agent with the longest idle time. Idle time is determined by the time elapsed since the agent received the last chat. 

{: .notice}  
Agent states do not impact their place in queue, so, for example, if the agent next in queue to accept a chat moved to 'Away' status and then back to 'Online', the change of state will not reset the agent's idle time.

For information on the routing of messaging conversations, please refer to the [Routing logic for messaging](contact-center-management-messaging-operations-routing-logic-overview.html) documentation.

## Accepting a conversation

Agents can accept conversations manually or automatically, depending on which of the following ACD modes has been configured:

1. Manual (live chat default): an incoming chat request rings simultaneously for all available agents. Any agent can accept the chat by clicking the waiting indicator. The chat is assigned to the first agent that accepts the chat.

{: .notice}
Incoming chats will ring to all logged in agents, regardless of their state (for example, the chats will also ring to agents currently in the Away state).**This ACD mode is supported for live chat only.**
{:start="2"}

1. Auto-accept: conversations are automatically routed to the most available agent. The conversation window opens automatically, a new incoming conversation notification appears on the bottom of the screen, and an audio alert sounds.
2. Advanced: conversations are routed to the most available agent (in the live chat example above, this would be Agent B), who can then manually accept the conversation. If the agent has not answered the conversation within a set amount of time, then the visitor is routed back to the queue to wait for the next most available agent (Agent A in the live chat example above).
   * In addition, the status of an agent can be set to change to Away automatically when they do not accept a chat. However, incoming chats ring to all logged in agents, regardless of their state, so agents in the Away state will still receive chat notifications.
   * This option is supported for live chat only.

{: .notice}
The * indicator is for a new conversation in auto accept mode that has not yet been interacted with. This indicator cannot be turned on or off. It will happen automatically when the agent is in auto accept mode. This applies to both messaging and chat conversations.

## How to configure ACD

ACD settings can be configured  in the LiveEngage Night Vision overlay, for chat and also for messaging if enabled on the account. Settings are configured once for all the agents and skills in the account:

1. Click the Night Vision button at the top of the screen.
2. Click Edit.
3. The Change queue options window opens. Select one of the queue options. When selecting

**Advanced mode:**

1. Select the time interval before the conversation is sent back to the queue.
2. If you want the agent status to change automatically if the agent doesn’t accept the chat, select change to Away. (optional, live chat only)

![](/img/acd-3.png)