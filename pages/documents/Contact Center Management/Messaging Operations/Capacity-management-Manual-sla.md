---
pagename: 'Capacity management for manual SLA '
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: Smart capacity reacts to manual SLA settings and improves the operation
level3: Smart Capacity
permalink: contact-center-management-messaging-operations-smart-capacity-capacity-management-for-manual-sla.html
isTutorial: false
isNew: false
date: 2019-03-18 08:31:11 +0000

---
Today conversations that are set with a long manual SLA maintain a capacity of 1 (active) until the "time to inactive" defined by [Smart Capacity](contact-center-management-messaging-operations-smart-capacity-smart-capacity-overview.html) had passed. Only then the weight of the conversation would go down to its inactive weight. While it makes sense in cases where short manual SLAs are set, in cases where long manual SLAs are set - this behavior blocks the agent capacity until the conversation reaches its inactive state. This behavior translates into agent wasted capacity of about 2-4 min, depending on the brand Smart Capacity configuration. Lowering the weight of the conversation whenever a long manual SLA is set enables agents to take on additional conversations without waiting for conversations to become inactive and by that, optimize the agent conversation load. With this in mind, it is important to have a minimum time setting that defines that if the set SLA is higher than a certain amount of time, lower the conversation weight immediately, otherwise, keep it as is it is today where the standard smart capacity logic applies to the conversation.

## How does the feature work?

Whenever an agent sets a manual SLA to a conversation, we check to see if the set SLA is higher than a predefined value. If the value is higher than the configured value, the weight of the conversation would be immediately set to match an inactive conversation weight allowing another conversation to be assigned to the agent.  
If the set SLA is lower than the configured value, the weight of the conversation will maintain a value of an active conversation until enough time had passed to allow the conversation to be regarded as inactive, per the standard Smart Capacity logic that applies to all conversations.

### When will the conversation regain back the weight of an active conversation?

If the conversation was set with an inactive conversation weight, the conversation will remain with an inactive weight until one of the following events will occur. After which the conversation weight will be set as an active conversation weight:

* If the agent wrote a new line in the conversation, the conversation is considered active.
* If the consumer wrote a new line in the conversation, the conversation is considered active.

### How does this affect the auto close process?

With the new feature enabled, conversations that were set with a manual SLA will be considered for auto close assuming the following:

* The manual SLA on the conversation expired.
* The agent wrote at least one line in the conversation after the manual SLA expired.

If the above two conditions are not met, the conversation will not be auto-closed.

Assuming the conversation manual SLA expired, the countdown to auto close will be able to begin right after the agent wrote a new line in the conversation and according to the standard auto close criteria that apply to any other conversation.

_Note - If the agent canceled the manual SLA, the conversation will be considered for auto close and the same as any other conversation following the the standard conversation auto close criteria._

### What would happen if the conversation gets sent back to the queue or transferred?

When a conversation receives an inactive weight, following the manual SLA being set by the agent, the conversation is also defined as non-actionable. This status will be kept until the time is configured time before the SLA expires.  
For example, if the value of _messaging.smart.capacity.reduction.on.manual.ettr.sec_ equals 10 min and the manual SLA was set to 1 hour at 10 AM and was also transferred to skill, agent or sent back to the queue, then 10 min before 11 AM (which is when the SLA expires) the conversation will become actionable again and will be then arriving at the top section of the queue to await an agent assignment.

_Note - When a conversation is transferred to a skill or to another agent it will be marked as active so that the agent assigned with the conversation will receive it as an active conversation. This way it would maintain a coherent conversation capacity upon assignment and won’t be any different from other assigned conversations._

### What happens if the feature is turned on however the manual SLA set is below the threshold?

When the manual SLA is set to a value which is lower than the configured threshold value, the conversation weight will maintain its active weight and would act like any other conversation when it comes to Smart Capacity calculations and the agent load.

In this case, where the SLA is lower than the configured threshold, the conversation would still be considered for auto close with the same logic as if it was set with an SLA which is higher than the threshold. Meaning, for auto close to be considered, the manual SLA must expire and the agent must write at least one line to the conversation after the SLA expired.

### How does this feature changes the behavior we see today when setting a manual SLA to a conversation?

When the feature is off the capacity of the conversation won’t change and would behave the same as any other conversation.

Another major difference is that when this feature is disabled, auto close would never close a conversation that was set with a manual SLA, even if the SLA expired and even if the agent and the consumer wrote new lines to the conversation.

## How to configure the feature?

To configure this feature, please contact your LivePerson account team.

Your account team will ask you for the following information in order to configure this feature:

* What is the manual SLA threshold (time) that you would like to set for the feature so that if an agent sets a manual SLA which is higher than the threshold, the conversation would immediately be set with an inactive conversation weight.

  **Example:** Threshold is 30 minutes so that if my agent sets a manual SLA of 45 minutes the conversation will receive an inactive weight.