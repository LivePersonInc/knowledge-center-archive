---
pagename: Analytics Builder Permissions
categoryName: Data & reporting
subCategoryName: Analytics Builder
indicator: both
subtitle: All the questions you want answered about the Analytics Builder
level3: ''
permalink: data-reporting-analytics-builder-analytics-builder-permissions.html
isTutorial: false
date: '2020-12-30'
isNew: false

---

As we move into the New Year, we are updating permissions to the Analytics Builder to ensure efficiency for users when using the Conversational Cloud platform. To minimize unnecessary waste and improve efficiency of our platform, users who have not accessed the Analytics Builder tool since September 1st, 2020 will have their permission changed to “off” by default. For any current user of the Analytics Builder, permissions will remain unchanged but you will notice a change in the profile name (an additional suffix of  _AB will be added).

This change will come into effect from **January 10th-17th 2021.** 
There is no action required by users, this update will happen automatically and no functionality will be affected during this change. 
This update will affect all Conversational Cloud accounts where the Analytics Builder feature is enabled.

The plan is to implement this change in the Conversational Cloud Profile mechanism as follows:
* For Conversational Cloud users who had Access permission to the Analytics Builder, but did not use it since September 1st, 2020, LivePerson will update the existing profiles, which will uncheck the option for Viewing, Editing or Sharing permissions for Reports in the users’ profiles.
* For Conversational Cloud users who had access to the Analytics Builder, and did access it since September 1st, 2020, LivePerson will grant access to the Reporting tool via a new profile. The new profile will be created based on the existing profile and permissions, e.g., if the old profile contained only View permissions, then the new profile will also have only this permission, and will be named with the original name with the additional suffix  _AB (Analytics Builder).
* After this change, administrators or any other users who have permission to edit profiles should be aware that whenever they need to create a new profile for agent manager or for campaign manager roles, the Analytics Builder permissions will be set by default to OFF. 
* After the final phase of the rollout the Quick Launch and old Reporting buttons will be visible only to logged in users defined with at least one Analytics Builder permission: View, Edit or Share.

{: .notice}
Administrators will still be able to manually enable the reporting permissions in the profiles for Agent and Campaign Managers, for accounts that are eligible for Analytics Builder.

## Permission FAQs

### Which accounts will be affected by the change?
All Conversational Cloud accounts where the Analytics Builder feature is enabled.

### How will the existing profiles change after this update?
In general, for every account that has the Analytics Builder feature enabled, LivePerson will duplicate some of the profiles of Agent and Campaign Managers. This will ensure a smooth process of reviewing Analytics Builder permissions, removing unused permissions and redefining used profiles.

Let’s look at the following example:
Account 1234567 had 5 user profiles before the update:

![](img/table-AB-permissions-1.png)
After the change, this account will have two additional profiles:
![](img/table-AB-permissions-2.png)

### Can new profiles be created after the change?
Yes, users can create new profiles, but the reporting permissions will be OFF by default, and can enable the permission for specific users.

### Which users are going to be affected by the change?
Users who have permission to access the Analytics Builder, but did not log in to the tool since September 1, 2020.

### Can I enable the View or Customize permissions in new profiles created after the change?
Yes, the Administrators who have access to the User Management area in the Conversational Cloud can still add the Reporting permissions to Agent Manager and Campaign Managerroles.
If a user with an Administrator role requires access to the Analytics Builder, they need to associate one of the profiles that has Reporting permissions, such as Agent Manager or Campaign Manager, in addition to the Administrator profile they have.

Please see [Release Notes](https://knowledge.liveperson.com/release-notes-latest-release-notes.html) for more information.
