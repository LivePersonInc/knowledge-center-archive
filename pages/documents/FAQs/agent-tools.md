---
pagename: Agent tools
categoryName: Getting started
subCategoryName: ''
indicator: both
subtitle: ''
level3: ''
permalink: faqs-agent-tools
isTutorial: false
isNew: false
date: 2019-01-27 11:50:19 +0000

---
## How do agents login to their LivePerson workspace?

Navigating to [http://liveengage.liveperson.net/](http://liveengage.liveperson.net/ "http://liveengage.liveperson.net/") and enter login credentials:

* LivePerson Account number
* Email
* Password

These credentials can be obtained from the account admin.

## How can I access Predefined Content?

As an agent, you can access Predefined Content when inside a conversation, using any of these methods:

From the conversation window,

* Click the Predefined Content widget to display a list of predefined content categories (Greeting, Conversational, etc.),
* Click a category to display its list of predefined content.

From the conversation window,

* Open the Predefined Content widget
* Enter a string in the search box.

Use hotkeys to display a category of predefined content to choose from:

* Press a letter + right arrow to display the category’s items,
* Then click an item from the list to enter it in the conversation text box. For example, pressing W + right arrow displays the Greeting category’s predefined content.

  Use hotkeys to enter a predefined content item in a conversation:
* Place your cursor in the conversation text box,
* Press a letter + right arrow + number (the number of the item in the category’s list). For example, press W + right arrow + 1 to enter the first item in the Greeting category.

  {: .notice}  
  Your administrator can provide you with the list of predefined content and hotkeys defined in your account.

## How do I add links to predefined content?

To add links to predefined content, use the HTML tag for hyperlinks. For example:

![](/img/faqs-reporting-data.png)

Generally HTML elements can be integrated into Predefined Content entries. Chat visitors will receive the content with the HTML formatting.

## How do I enable/disable audio notification in MS Internet Explorer?

The agent workspace is pre-configured to play sounds for different activities such as incoming messages for agents.  To turn these sounds on and off, each agent has to adjust their computer settings with the following steps:

1. Open control panel: the easiest way to open the control panel is to click on “Start” and then click on “Control Panel.”
2. Open the internet options: use the search box to find the “Internet Options” section of the Control Panel.
3. Select the “Advanced” tab: the Advanced Tab is usually on the far-right side of the internet options screen.
4. Scroll down to multimedia: scroll through the options until you see the section called “Multimedia.”
5. Deselect the play sounds option: click to uncheck the option called “Play Sounds in Webpages.” This will turn off all sounds in your internet browsers.
6. Turn sounds on again when you’re ready: If you would like to resume listening to sounds on your internet browser, be sure to follow these steps again and check the “Play Sounds in Webpages” option once again.

## Do agents need to install software on their computers?

No. Installation or plug-ins are required as the LivePerson platform is HTML/JavaScript-based. For more information and on system requirements and supported browsers, refer to [LivePerson System Requirements](admin-settings-system-requirements.html).

## Is there a spell check for agents?

The browsers supported by LivePerson have built-in spell checking. When the browser’s spell checking is enabled, the spell checker will automatically run in the LivePerson Engagement Window as well as in other browser windows.

In addition, you can add extensions (for example, _Grammarly_) to the browser that auto correct spelling and grammar.

## What is an actionable conversation?

An actionable conversation can be any one of the following:

* A conversation in which the last message is from the consumer, and it is pending agent response.
* A conversation that is set to manual SLA and the account's site setting: 'actionable during manual sla enabled' = true
* A conversation that is in the process of being transferred (transfer to skill time > last message from agent time) and the account's site setting: 'actionable during transfer enabled' = true

## What’s the purpose of labeling a conversation as actionable?

Actionable conversations get higher priority in the [routing queue](contact-center-management-messaging-operations-routing-logic-overview.html) than non-actionable conversations. This means that if a non-actionable conversation is pending dispatch in the routing queue, and a newer actionable conversation enters the queue, the newer conversation will be dispatched first.

The logic behind this is to [give priority to conversations](contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html) in the following instances:

* A consumer is waiting for an answer from the agent (pending agent response)
* The conversation requires special treatment (manual SLA).
* The conversation needs to be handled by another “department” (being transferred)

## What do I do when my shift ends?

Re-queue each of your ongoing conversations and then log out of LiveEngage, as follows:

a. Change your status to Away.

b. Inform the consumer who is in a conversation with you (listed on the My Connections tab) that you are transferring them to another Agent who will continue to assist them.

c. Click the small arrow (top right of the conversation window) and choose Return to queue.

d. Log out of LiveEngage.

## How can I access a new conversation?

LiveEngage indicates that a consumer has sent a message by making a ringing sound, and displaying a flashing connection box at the bottom left of the VISITORS tab. Click the flashing box to connect with the consumer. A conversation window opens where you can type messages to the consumer and read messages that they send.

How can I access my ongoing conversations?

a. Click the VISITORS tab (top left corner of LiveEngage). Your ongoing conversations are displayed as small connection boxes at the bottom of the window.

b. Click a box to return to an ongoing conversation.

## Where can I see the list of all consumers who are connected via the LiveEngage Messaging App (not just my connections)?

a. Immediately after login, on the first window displayed - the App Connections list on the VISITORS tab. Once you’ve navigated away from the App Connections list, you can return to it as follows: b. On the VISITORS tab, click App Connections. The list of all consumers connected to your LiveEngage account via messaging is displayed. c. From inside the conversation window, click the small three stripes (lower left side).

## how do I transfer a connection?

You can send a conversation back to the queue where it will be redirected to another online agent. You cannot transfer a conversation directly to a specific agent.

a. Open the conversation window, click the small arrow (top right corner), and choose Return to queue.

b. Once “re-queued”, the conversation is redirected to another online Agent (or Agents, depending on the account settings).

{: .notice}  
You may need to change your status to Back Soon in order to “re-queue” a conversation, depending on the account’s settings.

## How do I resolve a conversation?

Once you’ve finished handling a client’s inquiry, and the client confirms that their inquiry is resolved, close and hide the conversation as follows:

a. In the conversation window, click the small arrow (top right corner), and choose Close conversation. The conversation ends but the connection remains open (and is still accessible on the My Connections tab, App Connections tab, and in the bottom bar).

b. Open the Summary widget and type in the conversation summary. The summary is saved automatically when you type it.

c. In the conversation window, click the small arrow (top right corner) and choose Hide conversation. The conversation is now resolved and no longer displayed on the My Connections tab or on the App Connections tab.

## Where can I view summaries of resolved conversations?

On the Engagement history tab, click an engagement to see its summary.

## Why don’t I see any agents in the agents list?

Users with Agent permissions cannot see the list online agents. Only users with Agent Manager or Administrator permissions can see this list. If you access to the list of online Agents, please contact your LiveEngage account administrator.