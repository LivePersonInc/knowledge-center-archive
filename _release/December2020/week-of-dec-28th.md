---
pagename: Week of December 28th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-december-week-of-december-28th.html
isTutorial: false
isNew: false
date: '2020-12-28'

---

These release notes include new features arriving December 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Change in Reporting permissions
### Type: Enhancement [Analytics Builder]

*Channel:*All channels
*Available to all customers?* Y (Analytics Builder enabled) 
*Dependency:* LE UI 12.7

As we move into the New Year, we are updating permissions to the Analytics Builder to ensure efficiency for users when using the Conversational Cloud platform. To minimize unnecessary waste and improve efficiency of our platform, users who have not accessed the Analytics Builder tool since September 1st, 2020 will have their permission changed to “off” by default. For any current user of the Analytics Builder, permissions will remain unchanged but you will notice a change in the profile name (an additional suffix of  _AB will be added).

This change will come into effect from January 10th-17th 2021. There is no action required by users, this update will happen automatically and no functionality will be affected during this change. This update will affect all Conversational Cloud accounts where the Analytics Builder feature is enabled.

The plan is to implement this change in the Conversational Cloud Profile mechanism as follows:
For Conversational Cloud users who had Access permission to the Analytics Builder, but did not use it since September 1st, 2020, LivePerson will update the existing profiles, which will uncheck the option for Viewing, Editing or Sharing permissions for Reports in the users’ profiles.
For Conversational Cloud users who had access to the Analytics Builder, and did access it since September 1st, 2020, LivePerson will grant access to the Reporting tool via a new profile. The new profile will be created based on the existing profile and permissions, e.g., if the old profile contained only View permissions, then the new profile will also have only this permission, and will be named with the original name with the additional suffix  _AB (Analytics Builder).
After this change, administrators or any other users who have permission to edit profiles should be aware that whenever they need to create a new profile for agent manager or for campaign manager roles, the Analytics Builder permissions will be set by default to OFF. 
After the final phase of the rollout the Quick Launch and old Reporting buttons will be visible only to logged in users defined with at least one Analytics Builder permission: View, Edit or Share.

{: .notice}
Administrators will still be able to manually enable the reporting permissions in the profiles for Agent and Campaign Managers, for accounts that are eligible for Analytics Builder.

#### Which accounts will be affected by the change?
All Conversational Cloud accounts where the Analytics Builder feature is enabled.

#### How will the existing profiles change after this update?
In general, for every account that has the Analytics Builder feature enabled, LivePerson will duplicate some of the profiles of Agent and Campaign Managers. This will ensure a smooth process of reviewing Analytics Builder permissions, removing unused permissions and redefining used profiles.

#### Can customers create new profiles after the change?
Yes, customers can create new profiles, but the reporting permissions will be OFF by default, and customers can enable the permission for specific users.

#### Which users are going to be affected by the change?
Users who have permission to access the Analytics Builder, but did not log in to the tool since September 1, 2020.

#### Can my brand enable the View or Customize permissions in new profiles created after the change?
Yes, the administrators who have access to the User Management area in the Conversational Cloud can still add the Reporting permissions to Agent Managers and Campaign Managers roles.
If a user with an Administrator role requires access to the Analytics Builder, they need to associate one of the profiles that has Reporting permissions, such as Agent Manager or Campaign Manager, in addition to their Administrator profile they have.

### Analytics Builder Permissions
For example: An Agent Manager profile could have 3 Analytics Builder permissions:
* View all reports in Analytics Builder
* Customize reports in Analytics Builder
* Share reports in Analytics Builder

![](img/AB_permissions_1.png)
![](img/AB_permissions_2.png)

### Analytics Builder Access
There are 2 locations where a user can access the Analytics Builder:
The Reporting area within the Campaign Manager/Old Agent Workspace-Open Conversations: This button is available today for any user who has access to the reporting area (which means any Administrator, Campaign Manager and Agent Manager), without the need to validate the permission. After the final rollout the Analytics Builder button will be available only for users who have at least one of the reporting permissions.

#### Campaign Manager access:
In Campaign Builder click the arrow button on the top of the screen:
![](img/AB_permissions_3.png)

Then, in the Reporting area, click the Analytics Builder button on the left.
![](img/AB_permissions_4.png)

### Agent Manager access:
![](img/AB_permissions_5.png)

### QuickLaunch button: 
Available for Conversational Cloud users that have at least one of the Reporting permissions turned ON
![](img/AB_permissions_6.png)


