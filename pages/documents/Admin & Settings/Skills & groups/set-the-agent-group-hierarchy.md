---
pagename: Set the agent group hierarchy
categoryName: Admin & settings
subCategoryName: Skills & groups
indicator: both
subtitle: Learn how to use agent groups to reflect your connection center hierarchy
level3: ''
permalink: admin-settings-skills-groups-set-the-agent-group-hierarchy.html
isTutorial: false
date: 2019-01-22 13:58:55 +0000
isNew: false
redirect-from:
  - working-with-agent-groups.html

---
Businesses are often divided into groups that reflect their organization and hierarchy. A connection center can be thought of as group: in which sub-groups of agents are each responsible for a different area of support. To help you mirror your connection center structure in LiveEngage, we’ve created the "agent groups" capability.

LiveEngage includes a default group, called the "main group" that consists of all the users in LiveEngage configured as agents and subgroups. The Main Group can’t be moved or deleted. It is the top-level group in the hierarchy and is also considered the parent group.

Groups can be divided into "subgroups." Any group that has subgroups is considered a parent group and the Main Group is always the highest parent group in the hierarchy.

Each group can have a manager(s) who is capable of viewing the data of their group members and subgroups only. If no manager is assigned to the group, the manager of the group’s parent group is considered the manager of the subgroup and will be able to see its data. This allows managers to focus on their own responsibilities and better manage their teams. In large organizations, where connection centers are managed by different vendors, groups provide a more secure view, since each vendor can view the data of their own group and subgroups only.

![](/img/pasted image 0.png)

{: .notice}  
Group B’s managers can view the data of groups B, D and E only and Group C’s managers can view group C's data only.

## Managing agent groups

An agent group manager can be either an agent manager or an administrator. As an agent group manager, you can see data and run reports related to users that are assigned to your groups and subgroups. As an administrator who is also an agent group manager, you can also perform user management tasks such as creating and editing groups, subgroups and resetting passwords. To learn how to create and edit agent groups see the procedures below.

{: .notice}  
Group managers who take conversations (i.e. their concurrency is greater than 0) must also be configured as members of a group.

## Viewing the agent group data

The agent manager data bar and dashboard provides you with a snapshot of your agents’ efficiency and operational performance at any given time. Reports are configured to display the data related to agents assigned to your groups and subgroups and to your agents’ related skills only. If you manage more than one group, you can apply a filter to view each group’s data separately.

Initially all agents are members of the main agent group. Once an agent is moved to a different agent group, data relating to the agent’s conversations from that point onwards are available to the manager(s) of the new group only. Data related to the agent’s conversations from before the move are available to the manager(s) of the main agent group only.

![](img/all-connections-6.png){:class="newagent"}

## Viewing conversation transcripts

In the [web history](agent-manager-workspace-manager-tools-for-live-chat-web-history.html) and [all connections tabs](agent-manager-workspace-manager-tools-for-messaging-all-connections.html) you can view conversations handled by agents assigned to your groups or subgroups. You can search, sort and copy their conversation transcripts. Reading conversation transcripts is a good way to review what’s happening in your connection center; once you identify problem areas, you can take corrective actions.

![alt text](img/all-connections-manager-workspace.png){:class="newagent"}

To filter by agent group in web history, click on the filter icon in the agent group column header, and select the agent group(s) you want to filter by. Click filter. The page will now refresh to show data only from the agent group(s) selected.

To filter by agent group in all connections, click on the filter icon next to the search bar on the right side of the page. In the dropdown list next to Agent Groups, select the Agent Group(s) you want to filter by. Click filter. The page will now refresh to show data only from the agent group(s) selected.

## Viewing engagements over time using the Report Builder dashboards

Using the agent manager [Report Builder dashboards](data-reporting-report-builder-report-builder-overview.html#predefined-dashboards) you can monitor, track and improve connection center performance. The dashboard displays KPIs related to agents assigned to your groups and subgroups.

In some cases, when agent managers are also configured to take conversations, they may impact the group statistics. For example, the agent manager status is usually **away** and will be “online” only when they are needed to take conversations. This might impact the group’s utilization KPIs. If you wish to include or exclude manager activities from the report, check/uncheck the 'is manager indicator' checkbox.

Groups are an efficient way to logically organize and manage the users in your organization. They save you time performing administrative actions: you have the ability to define, modify and set configurations for a group of agents as a mass instead of defining it many times per each user.

## Adding a new agent group

The add group button will be enabled once you select a parent group from the list. The new group will be set as the subgroup of the selected group.

### To add a new group:

1. On the Users tab go to the Agent Group list.
2. Select the parent group from the list.
3. Click add group or click the action menu, and then click add.
4. Fill in group details:
   * Type a group name
   * Type the name of the user(s) you want to assign as a manager(s)
   * Add members to the group

![](img/Agent Groups1.png)

5. Click save. The edit agent group window closes and the agent group list is displayed.
6. Click the group you edited. The edit agent group window now shows the group members that you added in the member’s name table.

![](img/Agentgroups2.png)

### To edit an agent group:

1. Click on the agent group you want to edit. The edit agent group page will open.
2. After making your changes, click save.
