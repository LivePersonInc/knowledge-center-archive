---
pagename: Queue backlog management
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: 'How to manage long queue accumulation effectively '
level3: ''
permalink: queue-backlog-management.html
isTutorial: false
date: 2019-01-17 12:09:46 +0200
published: false

---
When long queues build up, whether overnight or during an outage, consumers often become unavailable once they have sent a message. When an agent is eventually able to reply, smart capacity will still wait for a predefined interval before reducing the intensity of the conversation. This means the agent is kept waiting in vain for the consumer's response.

To avoid this scenario, if an agent responds to the last consumer message after a preconfigured interval (with a default value of 2 hours), then the conversation will automatically be assigned a low intensity value. This will free up the agent's capacity for additional conversations, and help to reduce the queue accumulation more rapidly.

{: .important}
Please contact your LivePerson account team if you would like to enable this feature. 

The following example demonstrates how the queue backlog is managed:

* _Time after agent sends message before system considers there to be a backlog: 2 hours_
* _Time after agent response to a backlog message before smart capacity allocates another conversation to them: 10 seconds_
* _Agent configured capacity: 3 conversations_

Backlog management flow:

1. Conversations 1, 2, 3, 4 and 5 begin
2. At least two hours pass without an agent response to the conversations
3. Agent logs in and changes state to Online
4. Agent accepts conversations 1, 2 and 3 (meaning they are at maximum capacity)
5. Agent replies to conversation 1, which is immediately assigned a low intensity value by smart capacity
6. After 10-12 seconds, conversation 4 is allocated to the agent