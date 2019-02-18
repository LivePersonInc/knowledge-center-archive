---
pagename: Wrap-up time
categoryName: Contact center management
subCategoryName: Live chat operations
indicator: chat
subtitle: Allow time for important agent tasks at the end of a chat
level3: ''
permalink: contact-center-management-live-chat-operations-wrap-up-time.html
isTutorial: false
date: 2019-01-21 11:09:31 +0000

---
Allocating a ‘wrap up’ period at the end of each chat gives agents time to fill-in surveys and record any important details about the chat.

Once a chat is ended, either by the agent or by the consumer, the wrap up period starts. During this time the agent can complete any post-chat tasks. When the wrap up time expires, a slot is released and the agent is ready to receive a new chat. The agent doesn’t need to use the whole time allocated; the wrap up time also expires automatically when the agent submits the agent survey.

Wrap up time is disabled by default. Once enabled, the default time allocated is 60 seconds; this can be configured by the brand. The time can be configured either at the account or at the skill level.

![](/img/wrap-up-time-chats-2b.png)

### **How to enable wrap-up for chat**

1. Contact your LivePerson account team so they can enable the feature.
2. In LiveEngage, go to Visitors>Open Connector or Visitors>Web Visitors.
3. Click the night vision button.
4. Under ACD settings > Live Chat:
5. Enable the “Wrap-up time” toggle button.
6. Set a default value. This value should be the same value as set in the Admin Console.
7. Press the **Save** button.

{: .notice}
This value is for display only, it will be the value shown in the skill level by default but have no actual effect on the wrap-up time

### **How to configure wrap-up time at the skill level:**

1. In LiveEngage, go to Users >Skills.
2. Edit any skill that requires a wrap-up time different to the default value.
3. Enter the wrap-up time value. Note by default the value shown is the one set in night vision.
4. Click **Save**.

   ![](/img/wrap-up-time-chats-3b.jpg)

**Notes:**

1. When enabled, the wrap-up time does not affect reporting, i.e. chat duration does not include the wrap-up time.
2. An agent can terminate the wrap-up period by submitting an agent survey.
3. We recommend adjusting the wrap-up time value at the individual skill level, rather than using the admin console or night vision. This is because:
   * The wrap-up time set in the admin console overrides the value set for individual skills. However, this value will not be reflected in the skill level in LiveEngage.
   * Changing the wrap-up time value in night vision will have no effect on the wrap up time, but the updated value will be displayed in skills that were not set with a specific value.