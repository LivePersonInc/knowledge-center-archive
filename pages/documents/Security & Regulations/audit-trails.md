---
pagename: Audit trail
categoryName: Security & regulations
subCategoryName: Web messaging
indicator: both
subtitle: " Track all user changes for regulatory or troubleshooting purposes"
level3: ''
permalink: security-regulations-audit-trail.html
isTutorial: false
isNew: false
date: 2019-01-24 13:00:44 +0000

---
A list of all changes made to individual users, profiles, skills, lines of business or agent groups across the whole account is available for view by account administrators in the audit trail for users.

An activity log will display which element has been changed, when and by whom, as well as displaying both the old and the updated value of the changed element. Changes can include adding new elements or modifying or deleting existing ones.

An audit trail is available for the following elements:

* Users
* Skills
* Agent groups
* [Permissions](admin-settings-permissions-assign-permissions.html)
* [LoBs](admin-settings-skills-groups-operate-business-divisions-from-one-account.html)
* [Post Conversation Survey](data-reporting-messaging-messaging-dashboards-post-conversation-survey.html)
* [Campaign scheduling](contact-center-management-campaigns-time-frame.html)
* [Working hours management](contact-center-management-messaging-operations-working-hours-management-best-practices.html)

Audit data related to user logins to the LiveEngage system is not available.

### Audit trail table

The following values are recorded in the audit trail:

* **Object Type:** the type of object on the platform (as above, Users, Skills, Agent Groups, Permissions, LOBs)
* **Object name:** the name of the object that was modified
* **Action type:** the type of modification (edit, add new, delete)
* **Element:** the item that was modified (Member of, Password, Profile)
* **Old value:** the original value of the object
* **New value:** the new value of the object
* **Date:** the date the object was modified
* **Originator:** the user responsible for change

### Audit trail permission

The audit trail can be accessed by clicking on the account settings menu to the top right of the LiveEngage workspace.

![](/img/audit2.png)

Account administrators have access to audit trail reports by default. If a brand would like to enable the audit trail permission for some administrators, but not for others, this can be achieved by creating a new custom profile within the admin role. For further information, refer to the [customize user profiles.](admin-settings-permissions-customize-permissions.html)

### Exporting data

Data for the last 13 months are available and can also be exported to excel. However, data will only be recorded in the log from the point at which the feature is enabled; historical information will not be displayed retroactively.

The audit trail export is limited to 100,000 records. In case more than 100,000 activities were made in the selected timeframe, the administrator will need to narrow down the selected timeframe or use the Audit Trail API in order to export the full set of data.

Audit trails are available on the following features:

* Working hours management
* Campaign timeframes
* Post Conversation Survey

![](/img/Audit-trail4.png)