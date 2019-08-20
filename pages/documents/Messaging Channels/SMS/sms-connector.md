---
pagename: SMS connector
categoryName: Messaging channels
subCategoryName: SMS
indicator: messaging
subtitle: Connect with your consumers on their native messaging app
level3: ''
permalink: messaging-channels-sms-sms-connector.html
isTutorial: false
date: '2019-01-17T14:40:01.000+00:00'
isNew: false

---
The addition of SMS to LivePerson operations creates another gateway for messaging between brands and consumers. Brands can tap into the wide pool of consumers who prefer to use SMS as a form of communication and want to text with brands just like they would their friends and family.

{: .notice}  
Brands planning to use Twilio for SMS, can get started right away using the [Twilio SMS Quick Start](getting-started-twilio-sms-quick-start.html) article.

## Why use SMS to connect with your consumers?

* **Channel of choice** — SMS is the most commonly used app for mobile consumers, and is available natively on all mobile phones.
* **Lower costs** — There is no custom development and conversations cost less than a phone call.
* **Easy setup** — Onboarding can be accomplished rapidly as no tagging or coding is required and LiveEngage connects SMS texts directly to your operations, routing each customer to the best agent available.
* **No download required** — Because consumers already have SMS on their mobiles, no new customer interface or download is needed.
* **Rich Messaging capabilities** — Rich Messaging capabilities like image sharing provide an enhanced messaging experience with more flexibility.

## How conversations start

**Brands and consumers can begin interacting over SMS through multiple entry points, here are are some of the ways conversations can start:**

* **Reduce the queue with IVR deflection:** Get customers off hold faster with the option of exiting the line and continuing the conversation over text, or automatically send a text message as an alternative for people who have dialed.
* **Keep in touch after phone support:** Empower agents to send follow-up items such as service follow-ups, upgrades and personalized offers, to keep the conversation going and drive usage.
* **Turn automation into conversation:** Allow customers to respond to automated texts, like account updates or appointment reminders, and begin a conversation with an agent.
* **Add two-way communication to any ad:** Add text to existing ads, whether digital, print or even radio. By providing a quick and instant way for consumers to get in touch, the impact of promotions and other engagements will surge.

## Setting up the SMS connector

Our self-serve setup for the SMS connector means brands can quickly and easily add this channel to their operations, in order to successfully manage all their consumer digital interactions in one place. For guidance on setting up the Twilio SMS connector for your brand, [click here](messaging-channels-sms-twilio-sms-connector-setup.html).

It's always important to ensure that your SMS operations meet local regulations and guidelines. For more information on compliance, read our best practices for complying with text messaging regulations [here](messaging-channels-sms-complying-with-sms-regulations.html).

**Please note:** The character limit for messages sent on the SMS channel by agents is 1600. The character limit for messages sent by consumers is 5000.

## **How does LiveEngage treat multi-segmented SMS messages?**

Multi-segmented SMS messages are messages that are counted as multiple SMS messages at the time they are sent because they contain a large number of characters.

LiveEngage does not consolidate or separate SMS multi-segment messages. Consolidation depends on the 3rd party SMS providers.

* **Twilio** consolidates multi-segment SMS messages before sending them to LiveEngage. So the entire multi-segment SMS is treated as a single message in LiveEngage.
* **Open Market** sends LiveEngage each of the segments of a multi-segment SMS separately. Therefore each segment is treated as a separate message in LiveEngage.