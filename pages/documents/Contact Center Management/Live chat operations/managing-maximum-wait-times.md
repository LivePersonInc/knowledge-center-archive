---
pagename: Managing maximum wait times
categoryName: Contact center management
subCategoryName: Live chat operations
indicator: chat
subtitle: ''
level3: ''
permalink: contact-center-management-live-chat-operations-managing-maximum-wait-times.html
isTutorial: false
date: '2019-01-21T09:51:22.000+00:00'
---

When you first configure a skill in LivePerson, you select the maximum wait time after which engagements will not be displayed to visitors. This is to ensure that visitors do not click an engagement and end up waiting for a long time to be answered by an agent. The goal of this setting is to suggest chat to every visitor, ignoring agent availability check.

**How to Use ‘Ignore Max Wait Time’**

The Ignore Max Wait Time configuration is in the drop-down Online menu within the Engagement Studio.

![](/img/max-wait-time-1.png)

Sometimes, you wish to override this setting for a particular engagement, and allow the engagement to display regardless of the length of time that visitors will have to wait. LivePerson allows you to decide to override the max wait time setting that you've configured in your Skills settings.

![](/img/max-wait-time-2.png)

By ignoring max wait time, you allow the engagement to display regardless of wait time.

{: .notice}
**Please note:** For chat engagements with "no skill", the default maximum wait time is 120 seconds. This is not configurable.

{: .notice}
**Please note:** The "Ignore max wait time" option is available for chat engagements. When this option is chosen on the engagement settings, the result is that the invitation will be displayed to the consumer as long as there is at least 1 logged-in agent (regardless of the agent status: Away/Online/Back Soon). Visitors that queue  will be waiting until an agent replies, and it may result in long waiting times. 

