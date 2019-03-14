---
pagename: Bots
categoryName: Troubleshooting
subCategoryName: ''
indicator: messaging
subtitle: Troubleshooting for all questions relating to bots
level3: ''
permalink: troubleshooting-bots.html
isTutorial: false
isNew: false
date: 2019-02-26 10:10:05 +0000

---
## Bot not responding to first message of conversation (for customer bots created with Node Agent SDK)

When a consumer initiates a conversation, the conversation is assigned to the bot skill and assigned to the bot user. But on the back end the bot user doesn’t pick up the conversation and thus doesn’t respond to the conversation. The conversation stays in limbo in LiveEngage without responding.

When the consumer initiates the conversation we get the ExConversationChangeNotification but we do not get the messagingEventNotification that should follow. We use the messagingEventNotification to respond to the conversation.

### Cause:

There is a method called agent.subscribeMessagingEvents that you should use to subscribe to the events of each individual conversation.

In the current version of the Messaging API, even if you don’t use subscribeMessagingEvents explicitly, you will be notified of messaging events. But sometimes notifications are not sent (usually the first notification in the conversation).

### Solution:

Explicitly subscribe to the messaging events for each conversation that you want to follow. This will fix the bug and at the same time ensure compatibility with future versions of the API (that will not automatically subscribe to conversations).

This approach is demonstrated in this [bot example](https://github.com/LivePersonInc/node-agent-sdk/blob/master/examples/agent-bot/MyCoolAgent.js).

## Bot stopped responding to ongoing chats after a server restart

### Cause:

After a server restarts, the bot did not respond to ongoing chats that had begun before the restart. This should not be happening because chat bots are not logged out when there’s a server restart – our back-end servers keep the bot sessions “alive”.

After the restart the Bot didn’t continue to try to respond. This caused the visitor to give up and abandon the chat.

### Solution:

Developers should add a retry mechanism to their Bot. The mechanism should take restarts into account. For details, see [Retry Policy and KeepAlive Best Practices](https://developers.liveperson.com/guides-retry-policy.html) in the LivePerson Developers Community.

## Why are two out of four of our bot agents being disabled automatically?

* Two out of four of our bot agent users are being disabled by the system shortly after logging in.
* All four bots have the same setup.
* When our agent manager enables the two bot agents, they are disabled again after a minute or two.

Why is the system disabling these two bots and not the other two which are connecting with the same code?

### Cause: 

* The bot user exceeded the allowed login attempts.
* Each account has a login policy that determines after how many login attempts a user will be disabled. The bot user in this case had exceeded the number of login attempts allowed by his account, causing his user profile to be disabled.
* Login failure due to login policy
* The cause of the bot user login failures was due to the account login policy which prevented users from logging in from unauthorized (non-whitelisted) IP addresses.
* The server from which the bots were ‘logging in’ have a dynamic IP. Due to the account’s login policy the generated IPs were often not in the customer’s whitelist.
* Since the bots were hosted on different servers they didn’t share the same IP. This is why only two bots were impacted.

### Solution:

Do one of the following:

1. Place a static IP on the server where the bot service is hosted and add the IP to the account’s Login Policy whitelist.

OR

1. Within the Login Policy, whitelist the full IP range used by the servers running bot services. Please contact your LivePerson account team to help you with this.
2. If you are using dynamic IPs, you can place an alert on your side to notify you immediately when IPs of the host (where bots are running) change. This way you can take relevant steps, if required.

## Why is our bot agent initiating conversations with consumers?

Bot agents cannot initiate conversations; they can only respond to consumer requests or resume conversations that they resolved previously.

Starting a conversation consists of two separate, unlinked, requests (both sent from the consumer side).

1. A request to open a conversation.
2. The first message.

### Cause:

In the issue described above, the request to open a conversation was sent, and, in addition, one or more of the following occurred:

* The first consumer message did not reach the LiveEngage system.
* The consumer may have received an automatic message before sending his first message (open conversation default).
* Due to Bot speed, the Bot sent the first message before the consumer message was fully processed and displayed (a matter of milliseconds).

### Solution:

The system is working properly.

## Why is our bot agent receiving empty messages from consumers?

The bot’s engagement window opens but it is empty and consumers see a warning icon (red triangle) next to the messages that failed. 

### Cause:

1. Network problems on consumer side. This can occur at any point in the conversation when the consumer tries to send a message. The message doesn’t not reach the LiveEngage system and the result is an empty conversation window on the agent side.
2. The consumer, who was messaging via the SMS connector, sent images in the message but the LiveEngage SMS connector does not support images. Therefore the consumer side failed to send the images and the bot agent received an empty message.
3. The bot is configured to reply to a consumer only after receiving the consumer’s first message.
4. The consumer typed too long a message (over 5000 characters). Therefore the consumer side failed to send the message content to the LiveEngage server and the bot received an empty message.

### Solution:

1. Check network on consumer side
2. Ensure images are supported 
3. Check configuration settings of the bot
4. Ensure messages are less than 5000 characters

Note: Starting a conversation consists of two separate requests (both sent from the consumer side).

* A request to open a conversation.
* The first message.

## Why isn’t our agent manager able to join bot chats?

Our agent manager who has join agent conversations permissions is not able to see the option to join our bot’s chats. He goes to the Agents list and opens an active bot conversation. But he does not see the **join** option.

**The reason this is happening is**:

The join option is not available for bot chats. It is available for messaging conversations only.

Join conversation button on bottom of messaging window.

![](/img/Troubleshooting-bots1.png)