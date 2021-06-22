---
pagename: Consumer experience
categoryName: Troubleshooting
subCategoryName: Web Messaging
indicator: chat
subtitle: Troubleshooting for questions relating to the consumer experience
level3: ''
permalink: troubleshooting-messaging-consumer-experience.html
isTutorial: false
isNew: false
date: 2019-02-26 12:39:36 +0000

---
## Agent icon not aligned with first line of message on consumer iOS devices

### Cause:

The Agent icons are not aligned with first line of messages on consumer iOS devices. Instead the icons are located at/aligned with the bottom line of the messages.This issue occurs on iOS devices only. On Android devices the agents icons are aligned with the first line of the messages.

### Solution:

This is expected behavior.

## App Messaging: Number of unread messages isn’t displayed

### Cause

The red badge containing the number of unread messages doesn’t always display to App Messaging consumers using Android devices..

Let’s say you’re a consumer using your Android phone to message with a LivePerson agent and you do the following:

1. You receive 3 unread messages and the number 3 is displayed in the red badge on your scroll down indicator.
2. You click the scroll down indicator twice and it scrolls down to the “X unread messages' label.
3. You read all 3 messages; then you **scroll up** to look at an older message.
4. You get 2 more new messages.
5. The gray scroll down indicator displays **but the red badge does not display.**

**Scroll down indicator with red badge**

![](/img/troubleshooting-consumer-experience1.png)

### Solution:

It is expected behavior for the red badge to be removed when the scroll down indicator is clicked.

* When you click the scroll down indicator once, you will be scrolled down to the "X new messages" section.
* When you click the scroll indicator again, you’ll be scrolled down to the last new message.

{: .notice}
If you manually scroll down to the new messages, the badge remains on the scroll down indicator. The red badge is removed ONLY if you click the scroll down indicator to reach new messages.

In addition, if the focus is on items below the 'X unread messages' label when a consumer receives new messages, the badge will not display on the scroll down indicator.

If the focus is on items above the 'X unread messages' label, or the label was removed (e.g. the user wrote new message to agent), when a new message is received the badge is displayed again.

**Text visible below UNREAD MESSAGES LINE**

![](/img/troubleshooting-consumer-experience2.png)

## App Messaging: link preview not working on Android

### Cause:

The agent sent the URL without the **http://** prefix ([www.mysite.com](http://www.mysite.com) rather than [http://www.mysite.com](http://www.mysite.com "http://www.mysite.com")). Our Android SDK requires the the **http://** prefix in order to be able to display the Link Preview.

### Solution:

Always include the the **http:// prefix** in URLs that you send when messaging.

![](/img/troubleshooting-consumer-experience3.png)

## App Messaging: double click doesn’t scroll to last message

### Cause:

This is expected behavior on Android devices. When there is an unread message counter (red badge) on the scroll down indicator /shortcut in the Messaging window, the consumer needs to tap on the indicator twice to reach the latest message. They should be able to tap once to reach the latest message.

### Solution:

 he first click takes you to the "X unread messages" notification. It is NOT supposed to take you to the last message.

How the New Message Mechanism Works

* When there are unread messages the SDK "groups" them into chunks by adding an "X unread messages" notification below the last message read and immediately above the new messages in the flow, just like Whatsapp does.
* You receive one or more new messages and a red badge with the number of unread messages is displayed on the scroll down indicator.

  **Scroll down indicator with red badge**

  ![](/img/troubleshooting-consumer-experience4.png)
* You click the scroll down indicator once and it takes you to the “X unread messages' label (displayed immediately above the unread messages).

  **UNREAD MESSAGES LINE**

  ![](/img/troubleshooting-consumer-experience5.png)
* You click the scroll down indicator (that no longer has the red badge) a second time, its functionality changes, and it takes you to the last message.

## Why are messages disappearing from a consumer’s messaging window whilst agent can see all messages?

### Cause:

The conversation had been ongoing for a very long time and consisted of more than 1000 conversation events.

* Each time a consumer goes back into an existing conversation, the Conversational Cloud fetches all the Conversation History and events from the time the conversation began and attempts to display all the messages to the consumer.
* The Conversational Cloud process can fetch a maximum of 1000 conversation events. If there are more than 1000 events, the process randomly fetches and displays messages from the conversation. (The messages exist in the Conversational Cloud database but cannot all be retrieved by the consumer side’s end point)
* An average conversation consists of 17 messages. Therefore this issue is very rare and only likely to occur when a conversation has been ongoing for a long time.

### Solution:

* "Resolve" conversations periodically (try not to continue a single conversation for more than a few weeks)
* Set Autoclose to close conversations automatically after a set period of time, if it is not already set.

**Best Practice:** Once an agent resolves a specific topic for the customer, they should make sure the conversation is closed.

## Consumer’s Web Messaging window is stuck

#### Cause:

The brand was sending the customerId SDE with a value from an unauthenticated page and therefor experienced the following issues:

1. A visitor has a Web Messaging window open on an authenticated web page.
2. In the middle of the conversation (without closing the messaging window), the visitor logs out and is taken to the logout page (an unauthenticated page).
3. The engagement window opens on the logout page but a spinning circle displays in the window indefinitely.

### Solution:

When a visitor logs out (or moves to an unauthenticated page) in the middle of a conversation, the customerId SDE attribute should be reset to null ("").

## Why aren’t some of our messaging agents receiving messages?

### Cause:

* No pages (Facebook) / phone numbers (SMS) / SDEs (in-app) are set to route conversations to that skill.
* Agents are not set to accept conversations (max conversation = 0). If this was changed while they were logged in they need to logout and login again.
* Conversations entered the queue while Sales agents weren’t online/available and the skill for these conversations was changed to the fallback skill.

### Solution:

Configure user settings and skill routing properly. Make sure to set the fallback skill and default skill according to your account’s needs.

## Apple Business Chat – Message could not be delivered to a customer

### Cause

When attempting to respond to a customer’s message via Apple Business Chat, the agent received the error “Message could not be delivered to the consumer”. This could be due to the consumer having closed (deleted) the iMessage thread on their device; therefore message could not be delivered.

### Solution:

Consumer should not delete the iMessage thread on their device.

## Why am I unable to deliver facebook messages?

Please note that the brand Facebook Admin must do this on the Account, since you have to access the Facebook Page itself.
Go to "Manage Campaigns and engagements"
Access the "Data Sources" from the bottom of the Tab;
Go to "Facebook Messenger" and click on "Edit";
Click on "Next" and from here select the Subscribe Facebook Page option, there after logging in you need to first unsubscribe and then subscribe again to the Page.

## How can agents see their previous conversations with a visitor?

View the conversation history within the agent workspace.
From within the agent workspace, open a conversation with the desired customer (whether active or closed) and scroll up within the conversation widget. All previous conversations held by the user will be available in the history of the customer.

## How can agents see their previous conversations with a visitor?

View the conversation history within the agent workspace.
From within the agent workspace, open a conversation with the desired customer (whether active or closed) and scroll up within the conversation widget. All previous conversations held by the user will be available in the history of the customer.

## Why aren't my Twilio messages delivered

* Reach out to your LivePerson account team, so the proper account configurations can be set to enable Twilio messaging.
* Make sure you are using a paid Twilio account or sending a message to a verified number. 
* Check for Twilio outages on p[LivePerson Status Dashboard](https://status.liveperson.com/) or [Twilio Status Page](https://status.twilio.com/).
* If the issue still continues, please contact support.

## Why are my messages sent twice?

1. Check network speeds to confirm there is no latency issue
2. Visit https://www.speedtest.net/ and perform a speed test
3. If speeds and ping look good, please confirm that you have a stable connection. Please note that 
mobile connections can cause latency.
4. If the issue still continues, please contact support

## Why can’t I see the Analytics Builder Icon? 

Please note that you need to have the Agent Manager or Campaign Manager roles assigned to you or Administrator permissions to resolve this issue.
It could also be thay Analytics Builder has not been turned on for your account. Please contact your account team to enable the Analytics Builder.

