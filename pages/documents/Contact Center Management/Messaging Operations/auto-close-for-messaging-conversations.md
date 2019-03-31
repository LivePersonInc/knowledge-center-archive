---
pagename: Auto close for messaging conversations
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: both
subtitle: 'Manage expectations and keep consumers informed about expected wait times '
level3: ''
permalink: contact-center-management-messaging-operations-auto-close-for-messaging-conversations.html
isTutorial: false
date: 2019-01-17 10:28:55 +0000
isNew: false
redirect_from:
  - auto-close.html

---
To help agents manage their active connections list effectively, brands are able to configure conversations to automatically close after they have been inactive for a pre configured amount of time. Auto close provides a seamless experience for consumers; they will not receive an exit survey, nor see a separator within the conversation thread.

For example, if a conversation has been idle for ten days, it can be automatically closed and moved to the closed conversations list. If the consumer sends a message after this time, it will be treated as a new incoming conversation.

![](/img/auto-close-1.png)

## Auto-close per skill

Today brands use a single time interval definition to determine how long after the conversation becomes inactive should it be closed. This single definition doesn’t take into account the fact that different skills have different conversation pace and therefore should have different time intervals to auto close.

Having such a capability will give brands a higher level of flexibility to determine when a conversation should close and avoid scenarios where conversations get closed too soon. With auto close per skill, brands are able to set a different auto close time period parameter per skill and thereby improve the consumer experience as well as their operational parameters.

![](/img/auto-close-conversations-3b.png)

**Notes:**

* Brands can configure auto close for any time period between 25 minutes and 90 days; the default setting is 90 days.
* A conversation will only auto close if it is pending a consumer response; for conversations pending an agent response, auto close will not apply.
* By default a conversation where the agent has set a manual response time will not be auto closed. This logic can be disabled in the backend by your LivePerson account team.
* Auto close is scheduled to run at 25 minute intervals, meaning that inactive conversations will be automatically closed up to 25 minutes after their inactivity threshold was reached. For example, if the configured period of inactivity is 2 hours and a conversation was last active at 1pm, the conversation will be auto closed between 3 and 3:25pm.
* Auto close is supported on web messaging and on mobile from SDK 2.1 and above.

## Configuration

1. Click the **Night Vision** button at the top of the screen.
2. Under _Response time_, click **Edit**.
3. The _Response time_ window opens. To configure auto close, adjust the configured time as required. Time units are available in minutes, hours and days.
4. Click **Save**.

## Limitations

1. **No ability to turn off auto close feature**: The messaging backend servers have a system protection mechanism that closes conversations after 90 days of inactivity in order to control the load on the server. Due to this, auto close is enabled for all accounts with a default value of 90 days which is also the maximum allowed configuration.
2. **SDK backward compatibility**: Elimination of the exit survey and close message on mobile app is supported only from SDK version 2.1 and above. Consumers messaging from an app implementing an older SDK will see the survey and a close message “Conversation resolved by you” (depending on SDK configuration) following auto close.
3. **Auto close process frequency:** Inactive conversations should be automatically closed up to 25 minutes after their inactivity threshold was reached.  
   For example:
   * Configured inactivity threshold is 2 hours.
   * Last activity recorded on a conversation was at 1pm .
   * The conversation will be auto closed some time between 3pm to 3:25pm.
4. **Joining as “reader” resets the inactivity “timer”:** The auto close "timer" is reset when an agent manager opens a conversation to view it in full screen or from the Open Connections list.
   * This is currently a technical limitation since the inactivity “timer” is reset with every metadata change of the conversation. An agent manager joining as a “reader” triggers a change in the conversation participant’s metadata.
   * There is a potential workaround: The "timer" is not reset when opening the transcript widget view from the All Connections list (see the screenshot below).
