---
pagename: Analytics Builder Permissions
categoryName: Data & reporting
subCategoryName: Analytics Builder
indicator: both
subtitle: All the questions you want answered about the Analytics Builder permissions update
level3: ''
permalink: data-reporting-analytics-builder-analytics-builder-permissions.html
isTutorial: false
date: '2020-12-30'
isNew: false

---
As we move into the New Year, we are updating access permissions to the Analytics Builder.

LivePerson want to ensure that we have an accurate view of active and inactive users, which will allow us to get a clear idea of our customers reporting requirements and ability to plan for scaling in the future. Users who have not accessed the Analytics Builder tool since Sept 1, 2020 will have their permission changed to “off” by default. For anyone currently using the Analytics Builder, permissions will remain unchanged, but there will be a slight change to the profile name (an additional suffix of  _AB will be added).

These changes will come into effect at the end of January through February (timeline to be updated shortly). For more information on the exact date this update will occur, please contact your account manager.

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

| No. | Profile name | Reporting Permissions | Activity of associated users from Sept 1, 2020 | After rollout of Remediation Process | 
| --- | --- | --- | --- | --- | 
| 1 | Administrator | N/A | None of the users associated with this profile accessed Analytics Builder. | No change |
| 2 | Campaign Manager Sales | View | None of the users associated with the profile accessed Analytics Builder. | View permission will be removed from the ‘Campaign Manager Sales’ profile. View = OFF |
| 3 | Campaign Manager Retention| View =ON Customize =ON | Users who didn't access Analytics Builder | View permission will be removed from the ‘Campaign Manager Sales’ profile. View=OFF, Customize - OFF |
| 3A (new) | Campaign Manager Retention_AB | View =ON Customize = ON | Users who accessed Analytics Builder | A New Profile ‘Campaign Manager Retention_AB’ will be created and associated with any user who accessed the Analytics Builder. This profile will be an exact duplicate of the ‘Campaign Manager Retention’ before the change. View = ON Customize =ON |
| 4 | Agent Manager sales | View =ON | None of the users associated with the profile accessed Analytics Builder | View permission will be removed from the ‘Agent Manager sales’ profile. View = OFF | 
| 5| Agent Manager Retention | View = ON Customize =ON | Users who didn't access Analytics Builder. | View & Edit permissions will be removed from the ‘Agent Manager Retention profile. View =OFF Customize = OFF |
| 5a (New)| Agent Manager Retention_AB | View = ON Customize =ON | Users who accessed Analytics Builder. | New Profile ‘Agent Manager Retention_AB’ will be created and associated with any user who accessed the Analytics Builder. This profile will be an exact duplicate of the ‘Agent Manager Retention’ profile before the change.
View = ON Customize =ON | 

After the change, this account will have two additional profiles:

| No. | Profile name | Reporting Permissions | Activity of associated users from Sept 1, 2020 | 
| --- | --- | --- | --- | 
| 6 | Campaign Manager Retention_AB’ | View and Customize | Only users who accessed Analytics Builder | 
| 7 | Agent Manager Retention_AB’ | View and Customize | Only users who accessed Analytics Builder |

### Can new profiles be created after the change?
Yes, users can create new profiles, but the reporting permissions will be OFF by default, and can enable the permission for specific users.

### Which users are going to be affected by the change?
Users who have permission to access the Analytics Builder, but did not log in to the tool since September 1, 2020.

### Can I enable the View or Customize permissions in new profiles created after the change?
Yes, the Administrators who have access to the User Management area in the Conversational Cloud can still add the Reporting permissions to Agent Manager and Campaign Managerroles.
If a user with an Administrator role requires access to the Analytics Builder, they need to associate one of the profiles that has Reporting permissions, such as Agent Manager or Campaign Manager, in addition to the Administrator profile they have.

{: .notice}
You will receive an email with the exact timeline of when the update will occur. If you have already received an email, please note that the dates may have changed. Contact your account team for more information. 
