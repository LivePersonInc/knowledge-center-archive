---
pagename: 'Configuring response times '
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: 'Manage expectations and keep consumers informed about expected wait times '
level3: ''
permalink: contact-center-management-messaging-operations-configuring-response-times.html
isTutorial: false
date: 2019-01-17 09:53:26 +0000
isNew: false
redirect_from:
  - configuring-response-times.html

---
The LivePerson [routing engine](contact-center-management-messaging-operations-routing-logic-overview.html) prioritizes conversations that are waiting to be assigned to an agent according to their response time. This is the time that brands are committed to responding to their consumers within, to ensure that queue time is minimized and consumers receive a timely response. Each conversation will wait in their allocated place in the queue until they ring through to the assigned agent.

To help manage consumer expectations around the time they should expect to wait for a response, any new conversation pending a response by the agent is given a pre-configured response time. The response time is displayed to the consumer based on how automatic messages have been configured.

Response times can be configured at the account level and by skill for three types of conversations:

* Default  (all conversations)
* Urgent  - where the consumer marked the conversation as urgent
* First time - where it is the very first time the consumer has initiated a conversation with the brand. A first time consumer will get the first time response time throughout his/her first conversation with the brand and not only on the first message.

{: .notice}
Urgent capabilities are available for web and in-app messaging, and not on other messaging channels. Mark as urgent will be available only from the second time a consumer starts a conversation.

![](/img/config-response-time-1.png)

In order to provide the best possible experience for consumers, the response times for each of these conversation types can be configured separately. We recommend that urgent and first time conversations are both assigned shorter response times than regular conversations.

The conversation’s priority in the queue is decided based on the response time it has been given as well as on additional parameters. Conversations with a shorter response time, or those that are overdue, will be given a higher priority in the queue.

The ability to set different response times for different skills gives brands greater control over messaging queue prioritization, as well as enabling them to offer a better service to consumers by providing a more accurate response time (SLA).

For example, the “Loan request_”_ skill’s default response time may be 1 hour while the _”Lost credit card”_ skill’s default response time could be 5 minutes since it requires a prompt response.

When an agent transfers a conversation to a different skill, its response time is recalculated based on the configuration of its new skill.

In addition, if it was “pending consumer” since the agent wrote a message before transferring, and therefore did not have a response time, it will become “pending agent” again and will be given a new response time.

{: .notice}
This behavior can be disabled if required. To disable the “pending agent” after transfer feature contact the LivePerson Consulting Services.

For further information, refer to the [Connect visitors to agents by skill](admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html "Connect visitors to agents by skills").

**Manual override**

In some instances an agent may need to alter a response time, for example, if they need more time to deal with the consumer’s inquiry. To achieve this they can override the conversation’s given response time, by manually changing it within the conversation window.

Each conversation’s response time is displayed in the Active Connections page in countdown format, so agents have full visibility at all times over which conversations to prioritize with a response.

Note: When agents manually update the response time and subsequently send or receive a message within the configured response time, the updated response time is not affected. This could lead to the conversation becoming overdue, even if correctly handled within the set time. This is explained in the pop-up that appears to agents when manually changing the response time.

![](/img/config-response-time-1.png)

**Offline hours**

LivePerson allows brands to set offline hours - the times during which no agents are available to take conversations in the connection center. These hours can be set by configuring the shift status. If a consumer messages while the connection center is offline, they can be given a configured response time that combines both the default response time for that conversation, in addition to the time that the agents will be offline.

For example, if the contact center is offline from 8pm until 8am, and the default response time is 15 minutes, a consumer messaging at midnight will be given a response time of 8 hours and 15 minutes.

![](/img/config-response-times-4.png)

The shift status is accessible from the drop down menu which opens from the top right of the screen in LivePerson.

![](/img/Agent menu open.png)

**How to configure response times**

Configuration of response times for the different conversation types is available at the account level and can also be overridden at the skill level.

To configure response times for the entire account:

1. Click the **Night Vision** button at the top of the screen
2. Under _Response time_, click **Edit**.
3. The _Response time_ window opens. Adjust the response times for each conversation type as required. Time units are available in minutes, hours and days.

![](/img/config-response-times-6.png)

1. Click **Save**.

Note: Auto close for messaging conversations can also be configured here. For further information, refer to the _Auto close_ article in the related articles section. To override the account level configured response times for a specific skill:

1. From the skills management view, click on the skill that you want to edit.
2. Under _Messaging Response time_ select **Custom settings**.
3. Adjust the response times for each conversation type as required. Time units are available in minutes, hours and days.
4. Click **Save**.  
   Notes:
   * Changes in configuration will only apply to new conversations or after the conversation has been transferred to a different skill.
   * For conversations which are are not assigned to a skill, the account level configuration will be applied.

![](/img/messaging-response-time-settings.png)
