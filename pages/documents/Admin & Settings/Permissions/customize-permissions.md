---
pagename: Customize permissions
categoryName: Admin & settings
subCategoryName: Permissions
indicator: both
subtitle: Customize user permissions with profiles
level3: ''
permalink: admin-settings-permissions-customize-permissions.html
isTutorial: false
isNew: false
date: '2019-01-23T12:20:28.000+00:00'
redirect_from:
  - working-with-profiles.html

---
At LivePerson we recognize that every brand is unique and employs an individual approach to managing their users.

To ensure that complex organizations have the flexibility to tailor user roles to the distinct way they run their business, the permissions feature within LivePerson provides brands with the opportunity to fully customize each of the four LiveEngage roles:

* Agent
* Agent manager
* Campaign manager
* Admin

![](/img/permissions1 (1)-1.png)

## Customized profiles

Brands are able to create profiles - customized permissions sets within roles. For example, within the Agent role, Senior Agent and Junior Agent profiles can be created, with permission sets enabled or disabled for each profile. For ease and usability, LiveEngage creates a default permission set per role. Brands can customize these sets and also have the option to create new profiles that meet their specific structural business needs.

In addition to these configurable permission sets, there is a core set of permissions within each role that cannot be disabled. For the full list, refer to the Appendix.

## Multiple user roles

To ensure small and medium-sized businesses also have flexibility within their user management capabilities, users can now be assigned more than one role. For example, a manager who also takes chats can be assigned both ‘agent manager’ and ‘agent’ roles and a campaign manager who also manages users and takes care of account administration can be assigned both ‘campaign manager’ and ‘admin’ roles.

## More control for agent managers

To further empower agent managers, there will be an additional option to grant this role limited user management permissions, including:

* Create /edit users of agent and agent manager roles within their group’s structure
* Create /edit agent groups within group’s structure
* Create /edit agent and agent manager’s profiles
* Create /edit skills

{: .notice}  
Profiles and users can only be configured by admins and agent managers with special permissions.

**To create or customize a profile:**

1. In the user tab, select **add profile**. The edit profile screen will appear.
2. Select the **role** the profile will sit within: agent, agent manager, campaign manager or admin.
3. Give the profile a name, e.g. senior agent manager and add a description (optional).
4. The permissions assigned to the role will appear automatically enabled. Switch the toggles off to disable individual permissions.
5. To return the profile to the default permissions set, click **restore defaults**.
6. **Save** the profile.

### To create a user and assign a profile:

1\. On the **users** list, click **add user** at the bottom of the page.

2\. Type in the user’s details.

* Login name
* Email address
* User’s name
* User’s nickname (this is the name that will be displayed to visitors in a chat)

3\. Under **assignment**, select the profile(s) that apply to the user. Up to four profiles can be selected, but only one from within each role.

### **_Steps 4 and 5 apply to users with an agent role profile only:_**

4\. Set the maximum number of chats that the user can accept at any given moment. Consider your agent’s capabilities, the number of agents available, etc.

5\. For visitors to be routed to the appropriate agent when they initiate a chat, assign the user a skill:

* Select a skill from the menu by clicking the **skills** field and selecting an existing skill, or
* Create a new skill by typing in the name of the skill in the **skills** field

{: .notice}  
Agents who are not assigned to skills can only accept chats originated by engagements that are not assigned to skills.

6\. Set a password. Click **save**.

![](/img/permissions3 (2).png)

## Definitions, permission and default states

A **role** defines the scope of the user’s work. Each **role** encompasses a _unique_ set of permissions. **Roles** cannot be created or edited.

A **profile** is a set of **permissions**, derived from a LiveEngage role. **Profiles** can be created and edited.

The tables below list the permissions that can be configured per role, along with their definitions and default state.

### Role: Agent

The following core permissions are included with the agent role and cannot be disabled:

* Ability for agent to change their name, password, regional settings and so on
* Ability to accept any chat or conversation request, within the agent’s maximum concurrency limit
* View information about their individual performance

| Agent permissions | Permission definition | Default State (role) |
| --- | --- | --- |
| Join Agents' conversations | Join a conversation handled by another Agent within their Group | Off |
| View Agents' conversations | View conversations handled by other Agents within their Group | Off |
| View Agent List | View full list of Agents within their Group | Off |
| Use secure form within a conversation | For brands who have enabled the secure forms feature, this permission allows the Agent to use the form within a conversation | On |
| Initiate CoBrowse view-only session, with scroll control | Invite consumer to join a CoBrowse session, with the ability to view their screen with scroll control | On |
| Initiate CoBrowse view-only session | Invite consumer to join a CoBrowse session, with the ability to view their screen | On |
| Initiate CoBrowse shared control session | Invite consumer to join a CoBrowse session, with the ability to control actions on their screen | On |
| Initiate voice conversation | Invite consumer to join a voice conversation | On |
| Initiate live video | Invite consumer to join a live video session | On |
| Handle messaging conversations | For brands who have enabled the Messaging feature, this permission allows an agent to handle messaging conversations | On |
| Handle messaging conversations and access All Connections List | For brands who have enabled the Messaging feature, this permission allows an agent to handle messaging conversations and view all resolved conversations handled by agents | On |
| Set manual SLA | Allows agents to manually configure the response time in a conversation | On |
| View Connection Area | View relevant content from the Connection Area per journey | On |
| Contact LivePerson support within Connection Area | Chat with the LivePerson support team | On |
| View support cases in Connection Area | View open and closed support cases from the Connection Area | Off |
| Create new support cases in Connection Area | For CSO only - open new case from Connection Area | Off |
| Update consumer profile via API | Enables agent to use the Consumer Profile API to make edits to a consumer’s profile | Off |

### Role: Agent manager

The following core permissions are included with the agent manager role and cannot be disabled:

* Ability for Agent manager to change their name, password, regional settings and so on
* View the status of the chat queue for all Agents in the queue health dashboard
* View detailed information about Agent performance and engagement activity in the Agent Manager BI dashboard

| Agent Manager permissions | Permission definition | Default State (role) |
| --- | --- | --- |
| Join Agents' conversations | Join a conversation handled by any Agent within their Group(s) or Sub-group(s) | On |
| View Agents' conversations | View conversations handled by Agents within their Group(s) or Sub-group(s) | On |
| View Engagement History | View all engagements handled by Agents within their Group(s) or Sub-group(s) | On |
| View All Connections List | For brands who have enabled the Messaging feature, this permission allows viewing of all resolved conversations handled by Agents | On |
| View Agent List | View full list of Agents within their Group | On |
| Night Vision (advanced configuration) | Make advanced configurations within Night Vision | On |
| View secure form responses in Engagement History | For brands who have enabled the secure forms feature, this permission allows the Agent Manager to view all secure form responses in the Engagement History | Off |
| Edit Agent users | Create, edit or delete users with an Agent role within their Group(s) or Sub-group(s) | Off |
| Edit Agent Manager users | Create, edit or delete users with an Agent Manager role within their Group(s) or Sub-group(s) | Off |
| Edit Agent profile | Create, edit or delete Agent role profiles | Off |
| Edit Agent Manager profile | Create, edit or delete Agent Manager role profiles | Off |
| Agent Groups administration | Create, edit, restructure or delete their Agent Groups or Sub-groups | Off |
| Edit Skills | Create, edit or delete Skills | Off |
| Export users | Export the list of Agent or Agent Manager users in their groups or sub-groups; this will also export the list of skills, profiles and the groups and sub-groups managed by the Agent Managers | Off |
| Set manual SLA | Allows agent managers to manually configure the response time in a conversation | On |
| View reports in Report Builder | For brands who have enabled the Report Builder feature, this permission allows viewing of all reports | Off |
| Customize reports in Report Builder | For brands who have enabled the Report Builder feature, this permission allows agent managers to customize reports | Off |
| Share reports in Report Builder | For brands who have enabled the Report Builder feature, this permission allows reports to be shared with other users on the account | Off |
| View reports in Operational BI | View reports in the Operational BI dashboard | On |
| View Connection Area | View relevant content from the Connection Area per journey | On |
| Contact LivePerson support within Connection Area | Chat with the LivePerson support team | On |
| View support cases in Connection Area | View open and closed support cases from the Connection Area | Off |
| Create new support cases in Connection Area | For CSO only - open new case from Connection Area | Off |
| Configure shift status | For brands who have enabled the Messaging feature, this permission allows an agent manager to configure the shift status | On |
| Update consumer profile via API | Enables agent manager to use the Consumer Profile API to make edits to a consumer’s profile | Off |

### Role: Campaign manager

The following core permissions are included with the campaign manager role and cannot be disabled:

* Ability for Campaign Manager to change their name, password, regional settings and so on
* View all Campaigns in the Campaigns tab
* View all visitors in the Agent Workspace
* View a snapshot of the performance of all your account’s Campaigns in the Campaigns Dashboard
* View detailed information on the performance of all your account’s Campaigns in the Campaign Manager BI dashboard

| Campaign Manager permissions | Permission definition | Default state (role) |
| --- | --- | --- |
| Edit campaigns | Create and modify campaigns | On |
| Publish campaigns | Control the publishing of campaigns | On |
| Configure predefined content | Add and edit Predefined Content in the Agent Workspace | On |
| Configure automatic messages | Add and edit Automatic Messages in the Agent Workspace | On |
| Configure engagement attributes | Add and edit Engagement Attributes used in Campaigns | On |
| Import and export predefined content | Import and export Predefined Content to and from LiveEngage | On |
| Export predefined content | Export Predefined Content from LiveEngage | On |
| View API keys | For brands who have enabled the API key management feature, this permission allows viewing of API keys used by the brand | On |
| Edit conversation source | Configure consumer entry points to engage with your brand | On |
| Edit skills | Edit skills and configure default survey for skill change | On |
| Configure authentication server | For brands who have enabled the authentication conversation feature, this permission allows users to configure the authentication server | On |
| View reports in Report Builder | For brands who have enabled the Report Builder feature, this permission allows viewing of all reports | Off |
| Customize reports in Report Builder | For brands who have enabled the Report Builder feature, this permission allows campaign managers to customize reports | Off |
| Share reports in Report Builder | For brands who have enabled the Report Builder feature, this permission allows reports to be shared with other users on the account | Off |
| View reports in Operational BI | View reports in the Operational BI dashboard | Off |
| View reports in Campaign BI | View reports in the Campaign BI dashboard | On |
| View Connection Area content | View relevant content from the Connection Area per journey | On |
| Contact LivePerson support within Connection Area | Chat with the LivePerson support team | On |
| View support cases in Connection Area | View open and closed support cases from the Connection Area | Off |
| Create new support cases in Connection Area | For CSO only - open new case from Connection Area | Off |

### Role: Admin

The following core permissions are included with the Admin role and cannot be disabled:

* Ability to change their name, password, regional settings and so on
* View all campaigns in the campaigns tab
* View all visitors in the agent workspace
* View a snapshot of the performance of all your account’s campaigns in the campaigns dashboard
* View detailed information on the performance of all your account’s Campaigns in the campaign manager BI dashboard
* Ability to configure the authentication server
* Ability to configure monitored domains
* View the LiveEngage tag page

| Admin permissions | Permission definitions | Default State (role) |
| --- | --- | --- |
| User administration | Create, edit and delete users and configure their assignments | On |
| Profile administration | Create, edit and delete profiles (including customizing permissions) | On |
| Skill administration | Create, edit and delete Skills | On |
| Agent Groups administration | Create, edit, restructure or delete Agent Groups | On |
| API key administration | For brands who have enabled the API key management feature, this permission allows Administrators to create, manage and integrate API keys | On |
| Night Vision (advanced configuration) | Make advanced configurations within Night Vision | On |
| Line of Business administration | For brands who have enabled the Line of Business feature, this permission allows Administrators to create, edit and delete individual Lines of Business within their LiveEngage account | On |
| View account billing details | Access to billing details and online invoices | On |
| View and export audit trail | For brands with the audit trail feature enabled, this permission allows admins to view and export audit trail data | On |
| View Connection Area | View relevant content from the Connection Area per journey | On |
| Contact LivePerson support within Connection Area | Chat with the LivePerson support team | On |
| View support cases in Connection Area | View open and closed support cases from the Connection Area | Off |
| Create new support cases in Connection Area | For CSO only - open new case from Connection Area | Off |
| Configure shift status | For brands who have enabled the Messaging feature, this permission allows an admin to configure the shift status | On |

## Visuals

See screenshots below as examples of permissions for the different roles:

### Agent

![](/img/Agent.png)

### Admin

![](/img/Admin.png)

### Campaign Manager

![](/img/Campaign Manager - part 1.png)

### Agent Manager

![](/img/Agent Manager - part 1 (1).png)
