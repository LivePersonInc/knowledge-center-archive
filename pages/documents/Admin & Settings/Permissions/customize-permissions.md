---
pagename: 'Profiles '
categoryName: Admin & settings
subCategoryName: Permissions
indicator: both
subtitle: Customize user permissions with profiles
level3: ''
permalink: admin-settings-permissions-profiles.html
isTutorial: false
isNew: false
date: '2019-01-23T12:20:28.000+00:00'
redirect_from:
- working-with-profiles.html
- admin-settings-permissions-customize-permissions.html

---
At LivePerson we recognize that every brand is unique and employs an individual approach to managing their users.

To ensure that complex organizations have the flexibility to tailor user roles to the distinct way they run their business, the permissions feature within LivePerson provides brands with the opportunity to fully customize each of the four roles:

* Agent
* Agent manager
* Campaign manager
* Admin

![](img/Edit-Profile.png)

## Customized profiles

Brands are able to create profiles - customized permissions sets within roles. For example, within the Agent role, Senior Agent and Junior Agent profiles can be created, with permission sets enabled or disabled for each profile. For ease and usability, the Conversational Cloud creates a default permission set per role. Brands can customize these sets and also have the option to create new profiles that meet their specific structural business needs.

In addition to these configurable permission sets, there is a core set of permissions within each role that cannot be disabled. For the full list, refer to the tables below within each role (agent, agent manager, campaign manager & admins).

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
6\. Set a password. Click **save**.
{: .notice}  
Agents who are not assigned to skills can only accept chats originated by engagements that are not assigned to skills.

## Definitions, permission and default states

A **role** defines the scope of the user’s work. Each **role** encompasses a _unique_ set of permissions. **Roles** cannot be created or edited.

A **profile** is a set of **permissions**, derived from a Conversational Cloud role. **Profiles** can be created and edited.

The tables below list the permissions that can be configured per role, along with their definitions and default state.

### Role: Agent

The following core permissions are included with the agent role and cannot be disabled:

* Ability for agent to change their name, password, regional settings and so on
* Ability to accept any chat or conversation request, within the agent’s maximum concurrency limit
* View information about their individual performance

| Agent permissions | Permission definition | Default State (role) |
| --- | --- | --- |
| Join agents' conversations in group | Join conversations handled by other agents in the group | Off |
| View agents' conversations in group | View conversations handled by other agents in the group | Off |
| View list of agents in the group | View list of agents in the group | Off |
| Initiate CoBrowse view-only session, with scroll control |	Invite consumer to join a CoBrowse session, with the ability to view their screen with scroll control	| On |
| Initiate CoBrowse view-only session	| Invite consumer to join a CoBrowse session, with the ability to view their screen | On |
|Initiate CoBrowse shared control session	| Invite consumer to join a CoBrowse session, with the ability to control actions on their screen	| On |
| View account support cases in Connection Area	| This only applies to eligible customers as part of their CSO package | Off |
| Message LivePerson support	|Message LivePerson support	| On |
| Handle messaging conversations and view All Conversations list	| Handle messaging conversations and view all resolved conversations handled by agents |	On |
| View Connection Area	| View Connection Area tab. See separate permissions for enabling the user to message LivePerson and/or open support cases |	On |
| Handle messaging conversations	| Handle messaging conversations | On |
| Set manual SLA for conversations	| Set manual SLA for conversations |On |
| Transfer messaging conversations to an agent in "online" or "back soon" states | Transfer messaging conversations to a specific agent in "online" or "back soon" states	| On |
| Access Conversational AI menu	|  Access Conversational AI menu	| On | 
| Transfer messaging conversations to an agent in "offline" state	| Transfer messaging conversations to a specific agent in "offline" state	| Off |
| Transfer messaging conversations to an agent in "away" state	| Transfer messaging conversations to a specific agent in "away" state | Off |
| Use Third-Party Bots to manage external bot integrations | Use Third-Party Bots to manage external bot integrations | Off |
| Send files to consumers from local file browser | Additional configuration may be required to enable file sharing; contact your account administrator |	Dependant on account |
| Send files to consumers from custom widgets| Additional configuration may be required to enable file sharing; contact your account administrator	|	Dependant on account |
|Conversation Builder: Content User	| Use Knowledge Base, Intent Analyzer, Intent Builder, and Bot Analytics	|	Dependant on account |
|Conversation Builder: Business User	| Use Bot Analytics to view and download data	|	Dependant on account |
| Conversation Builder: Bot Status Access	| Use Bots Status to create, deploy, and manage connectors for the entire organization	|	Dependant on account |
| Conversation Builder: Bot Builder	| Use all Conversation Builder features with the exceptions of Bot Status and managing bot templates, accounts, and users	|	Dependant on account |
| Use enhanced agent workspace	| This module will be visible in addition to the current Visitors module |	Dependant on account |
| View all agent surveys for current conversation	| View all agent surveys for current conversation	| Off |
| Conversation Builder: Bot Builder Lite	| Create and manage bots; no integrations, credentials, or export/import permissions |	Dependant on account |
| Conversation Builder: Import/Export Manager	| Users can only export/import bots and knowledge bases	| Dependant on account |
| Conversation Builder: API Credentials Manager	| Manage credentials for API and NLU integrations	| Dependant on account |
| Use secure form in a conversation	| For brands who have enabled the secure forms feature, this permission allows the Agent to use the form in a conversation	| Dependant on account |
|Initiate voice conversation	| Invite consumer to join a voice conversation	| Dependant on account |
| Initiate live video conversation	| Invite consumer to join a live video session	| Dependant on account |
| Create new support cases in Connection Area (for CSO only)	| This only applies to eligible customers as part of their CSO package	| Dependant on account |
| Update consumer profile via API	| Use the Consumer Profile API to make edits to a consumer’s profile	| Dependant on account |
| Conversation Builder: Release Creator	| Create and delete versions	| Off |
| Conversation Builder: Release Acceptor | Create versions and accept releases i.e. upgrade bots | Off |

### Role: Agent manager

The following core permissions are included with the agent manager role and cannot be disabled:

* Ability for Agent manager to change their name, password, regional settings and so on
* View the status of the chat queue for all Agents in the queue health dashboard
* View detailed information about Agent performance and engagement activity in the Agent Manager BI dashboard

| Agent Manager permissions | Permission definition | Default State (role) |
| --- | --- | --- |
| Join agents' conversations within group	| Join conversations handled by other agents in their group or sub-group	| On |
| View agents' conversations within group	| View conversations handled by other agents in their group or sub-group	| On |
| View Conversation History	| View all conversations handled by agents in their group or sub-group | On |
| Handle messaging conversations and view | All Conversations list	| Handle messaging conversations and view all resolved conversations handled by agents	| On |
| Handle messaging conversations	| Handle messaging conversations | Depenant on account |
| View list of agents in the group	| View list of agents in the group, as well as their login status and real-time KPIs | on |
| Manage settings in Night Vision overlay	| Change configurations in Night Vision	| on |
| View secure form responses in Conversation History | See the secure form results in Conversation History, once the form has been submitted and the conversation is closed	| Depenant on account |
| Manage agent users in group	 | Create, edit or delete users with an agent role in their group(s) or sub-group(s)	| Off |
| Manage agent manager users in group	 | Create, edit or delete users with an agent manager role in their group(s) or sub-group(s) | Off | 
| Manage agent profiles in group	| Create, edit or delete agent role profiles |	Off |
| Manage agent manager profiles in group	| Create, edit or delete agent manager role profiles	| Off |
| Manage agent groups	| Create, edit, restructure or delete their agent groups or sub-groups |	Off |
| Manage skills	| Create, edit or delete skills |	Off |
| Export list of users in group	| Includes agent and agent manager users in group(s) or sub-group(s) as well as the list of skills, profiles, groups, and sub-groups managed by agent managers |	Off |
| Set manual SLA for conversations	| Set manual SLA for conversations	| On |
| View all reports in Analytics Builder	| View all reports in Analytics Builder	| Depenant on account |
| Customize reports in Analytics Builder	| Customize reports in Analytics Builder	| Depenant on account |
| Share reports in Analytics Builder	| Share reports in Analytics Builder | Depenant on account |
| View reports in Operational BI | View reports in Operational BI	| On |
| View Connection Area	| View Connection Area tab. See separate permissions for enabling the user to message LivePerson and/or open support cases	| On |
| Message LivePerson support	| Message LivePerson support	| On |
| View account support cases in Connection Area	| This only applies to eligible customers as part of their CSO package	| Off |
| Create new support cases in Connection Area (for CSO only)	| This only applies to eligible customers as part of their CSO package	| Depenant on account |
| Update consumer profile via API	| Use the Consumer Profile API to make edits to a consumer’s profile	| Depenant on account |
| Define working hours for messaging in Shift Scheduler	| Define working hours for messaging in Shift Scheduler	| On |
| Request customer data deletion via API	| Request customer data deletion via API	| Off |
| Assign workdays and special occasions	| Assign workdays and special occasions	| Off |
| Access Conversational AI menu	| Access Conversational AI menu	| On |
| Transfer messaging conversations to an agent in "online" or "back soon" states	| Transfer messaging conversations to a specific agent in "online" or "back soon" states	| On |
| Transfer messaging conversations to an agent in "offline" state | Transfer messaging conversations to a specific agent in "offline" state	| Off |
| Transfer messaging conversations to an agent in "away" state |	Transfer messaging conversations to a specific agent in "away" state |	On |
| Use Third-Party Bots to manage external bot integrations	| Use Third-Party Bots to manage external bot integrations | On |
| Send files to consumers from local file browser |	Additional configuration may be required to enable file sharing; contact your account administrator |	Depenant on account |
| Send files to consumers from custom widgets | Additional configuration may be required to enable file sharing; contact your account administrator 	Depenant on account |
| Conversation Builder: Content User	| Use Knowledge Base, Intent Analyzer, Intent Builder, and Bot Analytics	| Depenant on account |
| Conversation Builder: Business User	| Use Bot Analytics to view and download data	| Depenant on account |
| Conversation Builder: Bot Status Access |	Use Bots Status to create, deploy, and manage connectors for the entire organization| Depenant on account |
| Conversation Builder: Bot Builder |	Similar to Administrator, without the ability to manage users in Conversation Builder or access Bot Status |	Depenant on account |
| Use enhanced agent workspace	| This module will be visible in addition to the current Visitors module	| Yes (depending which workspace they are using)|
| View agent manager workspace |	Track real-time shift management KPIs, view agent lists for groups and subgroups, and view all open and resolved conversations handled by agents |	on |
| View all agent surveys for current conversation | View all agent surveys for current conversation	| on |
| Submit messaging agent survey	| Submit messaging agent survey |	off |
| Conversation Builder: API Credentials Manager |	Users can only manage credentials for API and NLU integrations. Whenever you assign this permission, also assign Bot Builder Lite and API Developer |	Depenant on account |
| Conversation Builder: Bot Builder Lite	| A lite version of Bot Builder. No ability to create and work with integrations, create and work with credentials, or export and import bots |	Depenant on account | 
| Conversation Builder: Import/Export Manager	| Users can only export/import bots and knowledge bases. Can be added to Bot Builder Lite	| Depenant on account |
| Conversation Builder: API Developer |	Users can only create and manage integrations. Can be added to Bot Builder Lite |	Depenant on account |
| Conversation Builder: Release Creator |	Create and delete versions	| off |
| Conversation Builder: Release Acceptor | Create versions and accept releases i.e. upgrade bots |	off |

### Role: Campaign manager

The following core permissions are included with the campaign manager role and cannot be disabled:

* Ability for Campaign Manager to change their name, password, regional settings and so on
* View all Campaigns in the Campaign Builder
* View all visitors in the Agent Workspace
* View a snapshot of the performance of all your account’s Campaigns in the Campaigns Dashboard
* View detailed information on the performance of all your account’s Campaigns in the Campaign Manager BI dashboard

| Campaign Manager permissions | Permission definition | Default state (role) |
| --- | --- | --- |
| Edit campaigns | Create and modify campaigns | On |
| Publish campaigns | Control the publishing of campaigns | On |
| Configure predefined content | Add and edit Predefined Content in the Agent Workspace | On |
| Configure Automatic Messages | Add and edit Automatic Messages in the Agent Workspace | On |
| Configure engagement attributes | Add and edit Engagement Attributes used in campaigns | On |
| Import and export predefined content | Import and export Predefined Content to and from Conversational Cloud | On |
| Export predefined content | Export Predefined Content from Conversational Cloud | On |
| View API keys | For brands who have enabled the API key management feature, this permission allows viewing of API keys used by the brand | On |
| Edit conversation source | Configure consumer entry points to engage with your brand | On |
| Edit skills | Edit skills and configure default survey for skill change | On |
| Configure authentication server | For brands who have enabled the authentication conversation feature, this permission allows users to configure the authentication server | On |
| View reports in Analytics Builder | For brands who have enabled the Analytics Builder feature, this permission allows viewing of all reports | Off |
| Customize reports in Analytics Builder | For brands who have enabled the Analytics Builder feature, this permission allows campaign managers to customize reports | Off |
| Share reports in Analytics Builder | For brands who have enabled the Analytics Builder feature, this permission allows reports to be shared with other users on the account | Off |
| View reports in Operational BI | View reports in the Operational BI dashboard | Off |
| View reports in Campaign BI | View reports in the Campaign BI dashboard | On |
| View Connection Area content | View relevant content from the Connection Area per journey | On |
| Contact LivePerson support within Connection Area | Chat with the LivePerson support team | On |
| View support cases in Connection Area | View open and closed support cases from the Connection Area | Off |
| Create new support cases in Connection Area | For CSO only - open new case from Connection Area | Off |

### Role: Admin

The following core permissions are included with the Admin role and cannot be disabled:

* Ability to change their name, password, regional settings and so on
* View all campaigns in the Campaign Builder
* View all visitors in the Agent Workspace
* View a snapshot of the performance of all your account’s campaigns in the campaigns dashboard
* View detailed information on the performance of all your account’s campaigns in the campaign manager BI dashboard
* Ability to configure the authentication server
* Ability to configure monitored domains
* View the web tag page

| Admin permissions | Permission definitions | Default State (role) |
| --- | --- | --- |
| User administration | Create, edit and delete users and configure their assignments | On |
| Profile administration | Create, edit and delete profiles (including customizing permissions) | On |
| Skill administration | Create, edit and delete Skills | On |
| Agent Groups administration | Create, edit, restructure or delete Agent Groups | On |
| API key administration | For brands who have enabled the API key management feature, this permission allows Administrators to create, manage and integrate API keys | On |
| Night Vision (advanced configuration) | Make advanced configurations within Night Vision | On |
| Line of Business administration | For brands who have enabled the Line of Business feature, this permission allows Administrators to create, edit and delete individual Lines of Business within their LivePerson Conversational Cloud account | On |
| View account billing details | Access to billing details and online invoices | On |
| View and export audit trail | For brands with the audit trail feature enabled, this permission allows admins to view and export audit trail data | On |
| View Connection Area | View relevant content from the Connection Area per journey | On |
| Contact LivePerson support within Connection Area | Chat with the LivePerson support team | On |
| View support cases in Connection Area | View open and closed support cases from the Connection Area | Off |
| Create new support cases in Connection Area | For CSO only - open new case from Connection Area | Off |
| Configure shift status | For brands who have enabled the Messaging feature, this permission allows an admin to configure the shift status | On |
| FaaS Invocation | Allows to invoke LivePerson Functions (FaaS) | On |
| FaaS Admin | Allows to administrate LivePerson Functions (FaaS) Settings | On |
| FaaS Developer | Allows to develop LivePerson Functions (FaaS)| On |


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
