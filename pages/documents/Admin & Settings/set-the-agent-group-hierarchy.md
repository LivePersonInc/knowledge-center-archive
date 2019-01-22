---
pagename: Set the agent group hierarchy
categoryName: Admin & settings
subCategoryName: Skills & groups
indicator: both
subtitle: Learn how to use agent groups to reflect your connection center hierarchy
level3: ''
permalink: admin-settings-skills-groups-set-the-agent-group-hierarchy.html
isTutorial: false
date: 2019-01-22 15:58:55 +0200
published: false

---

Businesses are often divided into groups that reflect their organization and hierarchy. A connection center can be thought of as group: in which sub-groups of agents are each responsible for a different area of support. To help you mirror your connection center structure in LiveEngage, we’ve created the **agent groups** capability.

LiveEngage includes a default group, called the **main group** that consists of all the users in LiveEngage configured as agents and subgroups. The Main Group can’t be moved or deleted. It is the top-level group in the hierarchy and is also considered the parent group.

Groups can be divided into **subgroups**. Any group that has subgroups is considered a parent group and the Main Group is always the highest parent group in the hierarchy.

Each group can have a manager(s) who is capable of viewing the data of their group members and subgroups only. If no manager is assigned to the group, the manager of the group’s parent group is considered the manager of the subgroup and will be able to see its data. This allows managers to focus on their own responsibilities and better manage their teams. In large organizations, where connection centers are managed by different vendors, groups provide a more secure view, since each vendor can view the data of their own group and subgroups only.

![](https://lh4.googleusercontent.com/pO_JvDnMvARMg1P_8kGYd11hmTh7RaNdUUDcJPPrzH8LB8cqUXzHyumEj3q3TdZQCKJhq0Fx13pGaZDTm81udg2E_VSMvBo-R0GCKqVCJJjUIt6M784ibc_FWPd3lKv5w-xy45xQ =390x249)

_Group B’s managers can view the data of groups B, D and E only._

_Group C’s managers can view group C data only._

Managing Agent Groups

An Agent Group Manager can be either an Agent Manager or an Administrator. As an **Agent Group manager**, you can see data and run reports related to users that are assigned to your groups and subgroups. As an **Administrator** who is also an Agent Group manager, you can also perform user management tasks such as creating and editing groups, subgroups and resetting passwords. To learn how to create and edit Agent Groups see the procedures below. 

**Note**: Group managers who take conversations (i.e., their concurrency is greater than 0) must also be configured as members of a group.

**Viewing the Agent Group data**

The agent manager data bar and dashboard provide you with a snapshot of your agents’ efficiency and operational performance at any given time. Reports are configured to display the data related to agents assigned to your groups and subgroups and to your agents’ related skills only. If you manage more than one group, you can apply a filter to view each group’s data separately.

**Note**: Initially all agents are members of the **Main** Agent Group. Once an agent is moved to a different Agent Group, data related to the agent’s conversations from that point onwards are available to the manager(s) of the new group only. And data related to the agent’s conversations from before the move are available to the manager(s) of the Main Agent Group only.

  ![](https://lh4.googleusercontent.com/KNyyjJffSkODg0a-guAizqUWF6F2fr0kzh_WCanOlnAI2ETLw0kAFciyXi5wBZFSiTqLfimSomsa-b6au7VqNnUk5wSjIbOAsZEdgYF-FdBvEupPcbW4_8agAtYD4nVYv8M_8ruH =432x138)

Viewing conversation transcripts

In the Web History and All Connections tabs you can view conversations handled by agents assigned to your groups or subgroups. You can search, sort and copy their conversation transcripts. Reading conversation transcripts is a good way to review what’s happening in your connection center; once you identify problem areas, you can take corrective actions.

 

 ![](https://lh3.googleusercontent.com/htUkOMIUUq4lfUAlCHpgKRth7yLIFxEP5lR1Iz86gMdw-WqG8WUwDYbMF57Ob4ATEVkyuVxZ2prt4-76jkdQjxtHBReJonaOgw7aQRtgBkpxBAoltxdnQewpf1HiQNRPeUfhMQzO =428x111)

* To filter by Agent Group in **Web History,** click on the filter icon in the Agent Group column header, and select the Agent Group(s) you want to filter by. Click **Filter**. The page will now refresh to show data only from the Agent Group(s) selected. 
* To filter by Agent Group in **All Connections**, click on the filter icon next to the search bar on the right side of the page. In the dropdown list next to Agent Groups, select the Agent Group(s) you want to filter by. Click **Filter**. The page will now refresh to show data only from the Agent Group(s) selected. 

**Viewing engagements over time using the Agent Manager BI Dashboard**

Using the Agent Manager BI Dashboard you can monitor, track and improve connection center performance. The dashboard displays KPIs related to agents assigned to your groups and subgroups.

  
In some cases, when agent managers are also configured to take conversations, they may impact the group statistics. For example, the agent manager status is usually **away** and will be “online” only when they are needed to take conversations. This might impact the group’s utilization KPIs. If you wish to include or exclude manager activities from the report, check/uncheck the **Include Agent managers** checkbox.

![](https://lh4.googleusercontent.com/3FihZoqVsdcMo_dIe7HOXb19e_C0oL0DLguf-00q0j5NcdfoEWlnxAsIkDgZS3U9wkSZFli-sKgk6vKrvFEvDKgMsbGNrEEgi__bcUMCfCjqOl-mOKvgg2RvYFAPa6KONMURD9jM =434x350)

Groups are an efficient way to logically organize and manage the users in your organization. They save you time performing administrative actions: you have the ability to define, modify and set configurations for a group of agents as a mass instead of defining it many times per each user.

Adding a new Agent Group

The **Add group** button will be enabled once you select a parent group from the list. The new group will be set as the subgroup of the selected group.

 

**To add a new group:**

1. On the Users tab go to the Agent Group list.
2. Select the parent group from the list.

![](https://lh5.googleusercontent.com/b4W3kJnGS1oCobS4gL79GtG8CTznAoUmLFmFV2XJ9VIaWMUbZMlvl7V1ib0b5nFeXzupWNfFbVvJ8Fhq_zexX97PsOwKkPq4c4k7yRFJ9XA-FEkJqRTV6U1vzC-mBcZvn4wotLVp =432x113)

3. Click **Add group** or click the **Action** menu, and then click **Add**.
4. Fill in group details:
   * Type a group name.
   * Type the name of the user(s) you want to assign as a manager(s).
   * Add members to the group.

![](https://lh5.googleusercontent.com/rbStq8-OvsVAL37fezIJICznP8Z8sNhyQLz85Au0RQF_m5IMD_IXYro0L4TbsxalFI5yIEFDd-z7RS2elXWUBNL6z1XIcaMn9c1bunySQW3vyyojIA5RA9HbNt5KqSgQCG4Wi3MR =430x292)

5. Click **Save**. The Edit agent group window closes and the agent group list is displayed.
6. Click the group you edited. The Edit agent group window now shows the group members that you added in the Member’s Name table.

 

![](https://lh5.googleusercontent.com/GaNQjbWgpEzFNNeOkbrHXmY87EnT8hlsOqUZWr5c797RmY3FXCjqy71d7YxALgQIJkfNEJoDPPaDPAzDpQFK5C2UWs8F_qKPCJFuYOAuKBtigNwrmsLefhGdjnBnhh3amwaY-BYO =431x331)

 

 

 **To edit an agent group:**

1. Click on the Agent Group you want to edit. The Edit Agent Group page will open. 
2. After making your changes, click **Save**. 