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

## Balance of workload between agent groups

In the event of a particularly high flow of chats to one or more agent group, the traffic can be set to transfer, or ‘cascade’, to other specified agent groups.

For example, consumers normally directed to an agent group speaking their native language can be sent to another language group if the first becomes overloaded. Agent Group A is the primary group assigned to handle the Sales Spanish language Skill. Should this group become unavailable, chats can be set to cascade to Agent Group B - the secondary group assigned to handle that Skill.

![](/img/workload-distribution-between-agent-groups-4b.png)

In a similar way, should internal agent teams become too busy, consumers can then be directed to external vendors. The percentage allocation per group will determine the exact workload distribution between them.

![](/img/workload-distribution-between-agent-groups-5b.png)

**To cascade workload to backup groups:**

1. In the Advanced Workload Distribution section, click **+Add secondary groups**.
2. To cascade the workload between the secondary agent group(s), **select a group** from the dropdown menu and allocate a percentage to that group.
3. To add another agent group, click **+Add agent group** and complete the allocation.

   Note: ensure the total % allocated to all groups adds up to 100%.
4. Click **Save**.

![](/img/loadbalancing3.png)