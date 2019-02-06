---
pagename: 'Week of October 29th '
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: LiveEngage Release Notes
level3: October
permalink: Release-notes-2018-october-week-of-October-29th.html
isTutorial: false
isNew: false
date: 2019-02-06 14:15:16 +0200

---
These release notes include new features arriving to LiveEngage during October 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

\***Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important} _The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change._

## New Functionality

### Methods for Messaging Skill Segments (messaging operations API)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

The Messaging Operations API is being enhanced to include operational data on the state of the queue and agent performance at the Skill level.

Essentially, segmenting messaging conversations by the skill assigned to a conversation allows you to measure both consumer experience and contact center operational targets, separately, for bots and agents, and the relationships between them while the consumer is navigated through the conversational flow.

The API will facilitate the retrieval of information on the queue state, consumer experience and agent performance at the skill or account level, including the number of skill segments assigned during a specific or cumulated time frame, the number of abandonments or non responsive agents and more.

This data will be reported in two ways:

1. Accumulated in intervals over the last 24 hours. The interval size is in minutes and can be configured, for example in buckets of 5 or 10 minutes.
2. The current state - the state of the operational KPIs at the moment that the API is called. The API exposes information about interactivity during conversations and wait times of current open conversations (unassigned / in-queue).

Full documentation, including a list of the newly exposed metrics, can be found in the [LivePerson Developers Community](https://developers.liveperson.com/messaging-operations-api-overview.html) and the [user guide.](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/User+guides/User+Guide_+Skill-based+messaging+operations+efficiency.pdf)

**How to enable**

Added to the existing Messaging Operations API. No additional enablement needed.

### WhatsApp Business - Multiple number support per LiveEngage account (LE-95291)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | RCS Business Messaging | WhatsApp Business | Google My Business | Chat |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |   
| No | No | No | No | No | No | No | Yes | No | No |

This functionality enables brands to route multiple WhatsApp Business numbers into one LiveEngage account, and enables multiple Lines of Business to be facilitated and managed within the LiveEngage account, using LE's operational tools.

The WhatsApp Business connector is currently in Beta mode. Only brands that meet the requirements and have been approved by WhatsApp may participate.

**Please note:**

Busy Message - since LiveEngage does not support multiple consumer conversations in real time, if a consumer starts a second conversation with a WhatsApp business number connected to the same account, they will receive a configurable busy message to the WhatsApp conversation thread.