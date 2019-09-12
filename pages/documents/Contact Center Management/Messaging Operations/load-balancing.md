---
pagename: Load balancing
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: chat
subtitle: Manage load balance efficiently between agent groups using LivePerson's
  Advanced Workload Distribution
level3: ''
permalink: contact-center-management-messaging-operations-load-balancing.html
isTutorial: false
isNew: false
published: false

---
Messaging load distribution is a routing capability that allows brands to define how would the messaging load gets distributed between different agent groups. This kind of capability is a necessity for brands that outsource their messaging operations and must meet clear contractual obligations and maintain control over which vendor handles which percentage of the total brand messaging traffic. The feature allows the brand to define that a specific agent group is correlated with a specific vendor with a pre-assigned percentage and define, per skill, the way that the load will be distributed between the agent groups.

## Distribution of workload between agent groups

To ensure the optimal division of workload between agents sharing the same skill, conversation volumes can be spread between agent groups.

This allocation method, especially useful for large enterprises that utilize 'agent groups' for separate departments, subcontractor vendors or call centers, ensures that the volume of conversations is automatically distributed.

For example, if you have external vendors with prior contractual obligations, you can set the workload to be allocated to each vendor with a predefined percentage. Agent Group A, representing an external vendor, can be set to receive 40% of the workload and Agent group B & C, representing two other vendors, can be set to receive 30% each.

![](/img/load-balancing.png)

### To enable advanced workload distribution:

{: .notice}

Advanced workload distribution needs to be activated through your LivePerson Account Team. In order for the Advance Workload Distribution feature to appear on the individual skill page, you must have at least two agent groups configured on the account.

1. On the **Users** area, in the **Skills** tab, click on the skill you wish to edit.
2. In the **Advanced Workload Distribution** section, click on the toggle to enable this feature.
3. The page will now display the options for distribution to the primary agent groups.
4. To distribute the workload between the primary agent groups, **select a group** from the dropdown menu and allocate a percentage to that group.
5. To add another agent group, click **+Add agent group** and complete the allocation.

   Note: ensure the total % allocated to all groups adds up to 100%.
6. Click **Save**.

![](/img/loadbalancing2.png)

![](/img/loadbalancing3.png)

## How it works

**Step 1:** A Conversation starts on skill A. It has no allocated group.

**Step 2:** A group is allocated to the conversation based on the skill configuration. For example:

Group 1 = 60%

Group 2 = 40%

**Step 3:** Only agents from the allocated group can get assigned to the conversation

**Step 4:** The conversation will maintain its group assignment until it is closed or transferred outside the group

{: .notice}

## FAQs

**Does the feature consider agent group or online state?**

The agent online state doesn’t go into the consideration before the load balancing process runs.

**What happens if a conversation is sent back to the queue?**

The conversation would maintain its group assignment. 

**What happens if a conversation is transferred to a skill after the load balancing already took place?** 

After a group assignment takes place, transfers maintain the group assignment when transferred to skills that didn’t receive any specific load balancing configuration. If the conversation is transferred to a skill that has a load balancing configuration in which the existing allocated group is not present, a new load balancing process will assign it with a new group allocation.

**What happens when transferring a conversation to another group skill?**

When transferring to a skill that has a load balancing definition that doesn’t include the currently allocated group, the load balancing will take place once more and would select a new group allocation from the configured options.

**How will the reporting work for this feature ?**

Using the Report Builder the brand is able to view the overall opened conversations of a brand by agent group and by skill per agent group. This will enable the creation of the following:

* View a breakdown of the messaging volume per agent group.
* View the percentage of the messages that were assigned to a group of agents and their overall volume out of the total volume 

\* A conversation will be attributed to an agent group when an agent accepts the conversation.

**Will the static load balancing affect the Queue Prioritization feature?**

The Queue Prioritization feature will continue to function in a similar way as it did before using Load Balancing. Top conversations will be assigned to agents from the allocated group only.

**Can we move conversations from one group to another in case of a contact center strike for example?**

Yes, by using the fallback configuration per skill your brand will be able to redirect conversations to a skill that would change the group allocation. Then you will be able to transfer the conversations back to the original skill and have the load balancing avoid a specific contact center.