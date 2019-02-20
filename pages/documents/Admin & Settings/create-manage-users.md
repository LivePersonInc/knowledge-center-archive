---
pagename: Create and manage users
categoryName: Admin & settings
subCategoryName: ''
indicator: both
subtitle: Create and manage users and their roles
level3: ''
permalink: admin-settings-create-and-manage-users
isTutorial: false
date: 2019-01-21 13:55:21 +0000
isNew: false

---
As an administrator you can add and manage up to 18,000 users in your account. Users in LivePerson have different permission sets, according to their roles.

It’s also possible for brands to create profiles - customized permissions sets within roles, for additional user management flexibility. For further information on customizing profiles and permissions sets, see [profiles (permissions)]()

![](/img/create-manage-users1.png)

## Adding a user

1. On the **users** list, click **add user** at the bottom of the page.
2. Type in the user’s details.
   * The login name can be entered in English, numbers or special characters only. Once entered, the login name cannot be changed.
   * The name as it appears in LiveEngage.
   * The nickname is the name that will be displayed to the visitors in the chat.
3. Set a password with a minimum of eight (8) characters. Click **save**.
4. To set a change password prompt to appear when the user next logs in, toggle the password prompt to on.
5. Under assignment, select the profile(s) that apply to the user. Up to four profiles can be selected, but only one from within each role.

{; .sidebyside}
![](/img/create-manage-users2.png)![](/img/ create-manage-users3.png)

### For users with an agent profile you’ll need to define additional settings:

* Set the maximum number of chats that the user can accept at any given moment. Consider your agent’s capabilities, the number of agents available, etc.
* If your brand is enabled with the messaging feature, set the maximum number of messaging conversation.

#### There are 2 options for this setting:

a) You can set it to inherit it from the account level setting that can be configured through the footnote in the Users tab. Any change to the account level setting will impact all agents defined with setting.

b) You can custom set it, meaning any change to the account level setting won’t change it for users set with the custom setting.

For visitors to be routed to the appropriate agent when they initiate a chat, assign the user a skill:

a) Select a skill from the menu by clicking the skills field and selecting an existing skill, or

b) Create a new skill by typing in the name of the skill in the skills field.

{: .notice}  
Agents who are not assigned to skills can only accept chats originated by engagements that are not assigned to skills.

### **To edit a user**

1. On the users list, click the user you would like to edit.
2. Edit the user details.
3. Click **save**.

### **To duplicate a user:**

1. On the users list, select the user’s checkbox.
2. Click the action menu and select duplicate.
3. A new user page will open for editing, with the following fields already populated:
   * Picture
   * Assigned profiles
   * Skills
   * Groups
   * Max. number of chats
   * Max. number of messaging conversations

{: .notice}  
When duplicating a user, the administrator will still need to complete the following fields: login name, email, name, nickname, employee ID and password.

### To enable\\disable a user

1. On the Users list, click the user.
2. Click the enable button.
3. Click save.

### To delete a user:

1. On the user list, select the user’s checkbox.
2. Click the action menu and select delete.
3. Click delete to confirm.

{: .notice}  
Before deleting a user, we recommend first ensuring that the agent doesn't own any open conversations (if so, these conversations should be transferred to the queue) and that they are not logged in.

Once a user has been deleted, it will still be possible to view their conversations in the conversations list (Open Connections, All Connections and Web History).

## Bulk user operations

Account users, with user management permissions enabled, can make certain bulk changes to users with an agent profile instead of having to make changes one by one.

Users can make the following configurations in bulk (up to 1,000 users at a time):

* **Skill assignment** - this will allow the user to assign, or unassign, skills to multiple users
* **Concurrency setting** - this will allow the user to edit the maximum number of live chats or the maximum number of messaging conversations assigned to multiple users

### To assign an action to users in bulk

1. Select the users you wish to make the changes to. You can select users individually, or you can select the checkbox in the top left corner to select all users on a page.

{: .notice}  
Users can be selected from multiple pages by selecting individual users or all users from each page.
2. From the action menu, you can select one of the following actions to apply changes to all selected users:

a) Set concurrency - leaving a field blank in the concurrency settings box will mean the current settings will be retained.

b) Assign skills - in cases where the selected users share common skill(s), the shared skill(s) will appear in the skill selection field.

3. Once you have made the changes to the settings, click save. The changes will be applied to all selected users.

{: .notice}  
The above actions are only available if all of the selected users have an agent user profile enabled.

## Search for users

You can easily search for users and their information according to their name, nickname, email address, permission set and/or group. Just type in the search box the target word/name and all results will be returned in the list.

In the following example, the term “agent” was input to the search box and all users with either agent or agent manager permission sets have been returned as the search result.

![](/img/create-manage-users4.png)

## Change password on next login

Safeguarding the privacy of user passwords is an important part of maintaining the security of LiveEngage accounts. When editing a user, account administrators can set a prompt to appear for the user to change their password when they next log in. In this way, if the admin has set a default password for a new user, or has reset the password on a user’s account, they can ensure that the user will have to change the password to one of their own choosing when they next log in.

## Export users

The users lists can be exported as a zipped file containing individual CSV files for the following entities:

* Users
* Skills
* Profiles
* Agent groups
* Lines of Business (LOB)

### To export users:

1. From the users tab, select export all from the action menu.
2. The zipped file will appear in the downloads folder on your computer.

{: .notice}  
Only UTF 8 encoding is supported. We therefore recommend using Google spreadsheet, numbers, or OpenOffice to open the exported file if they include non-Latin characters.