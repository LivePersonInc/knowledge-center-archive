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

### What’s the purpose of labeling a conversation as actionable?

Actionable conversations get higher priority in the[ routing queue]() than non-actionable conversations. This means that if a non-actionable conversation is pending dispatch in the routing queue, and a newer actionable conversation enters the queue, the newer conversation will be dispatched first.

The logic behind this is to [give priority to conversations]() in the following instances:

* A consumer is waiting for an answer from the agent (pending agent response)
* The conversation requires special treatment (manual SLA).
* The conversation needs to be handled by another “department” (being transferred)