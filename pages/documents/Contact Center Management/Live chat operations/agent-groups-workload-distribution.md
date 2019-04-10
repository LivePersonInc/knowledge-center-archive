---
pagename: Agent groups workload distribution
categoryName: Contact center management
subCategoryName: Live chat operations
indicator: chat
subtitle: Manage workloads efficiently between agent groups using LivePerson's Advanced
  Workload Distribution
level3: ''
permalink: contact-center-management-live-chat-operations-agent-groups-workload-distribution.html
isTutorial: false
date: 2019-01-21 09:37:44 +0000
isNew: false
redirect_from:
- workload-allocation-between.html

---
A priority of any a contact center is to provide a rapid and personalized service at all times. Even when, for example, a brand's billing page goes down, or they are hit by hectic holiday volumes. By effectively distributing conversation traffic between agent groups, LivePerson ensures a brand's consumers will always be answered as quickly and as efficiently as possible - which can be particularly challenging for brands working with large numbers of agent groups, or with groups spread across different locations.

The LivePerson load balancing feature automatically distributes the incoming workload, defined by skill, between agent groups according to a pre-assigned percentage. In addition, brands are now able to define their own cascading policy; indicating what the workload allocation should be in cases where an agent group has limited or no availability.

## **Distribution of workload between agent groups**

To ensure the optimal division of workload between agents sharing the same skill, conversation volumes can be spread between agent groups.

This allocation method, especially useful for large enterprises that utilize 'agent groups' for separate departments, subcontractor vendors or call centers, ensures that the volume of chats is automatically distributed, preventing long wait times.

For example, if you have external vendors with prior contractual obligations, you can set the workload to be allocated to each vendor with a predefined percentage. Agent Group A, representing an external vendor, can be set to receive 50% of the workload and Agent Group B, representing another vendor, can be set to receive the remaining 50%.

![](/img/workload-distribution-between-agent-groups-1b.png)

In case either Agent Group becomes unavailable (i.e. the maximum wait time for the Skill is exceeded) due to understaffing or other issues, the workload can be set to be distributed to the other Agent Group.

### **To enable advanced workload distribution:**

{: .notice}

Advanced workload distribution need to be activated through your LivePerson Account Team.

In order for the Advance Workload Distribution feature to appear on the individual skill page, you must have at least two agent groups configured on the account.

1. On the **Users** area, in the **Skills** tab, click on the skill you wish to edit.
2. In the **Advanced Workload Distribution** section, click on the toggle to enable this feature.
3. The page will now display the options for distribution to the primary agent groups.
4. To distribute the workload between the primary agent groups, **select a group** from the dropdown menu and allocate a percentage to that group.
5. To add another agent group, click **+Add agent group** and complete the allocation.

   Note: ensure the total % allocated to all groups adds up to 100%.
6. Click **Save**.

![](/img/workload-distribution-between-agent-groups-3b.png)

## **Balance of workload between agent groups**

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

![](/img/workload-distribution-between-agent-groups-6b.png)