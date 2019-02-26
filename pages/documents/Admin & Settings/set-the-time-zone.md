---
pagename: Set the time zone
categoryName: Admin & settings
subCategoryName: ''
indicator: both
subtitle: Understand how to setting your time zone as well as which reports are affected
  by the time zone settings.
level3: ''
permalink: admin-settings-set-the-time-zone.html
isTutorial: false
isNew: false
date: 2019-01-23 13:35:56 +0000

---
Time zone settings play a key role in the accurate compilation and generation of LivePerson reports. This article sets out everything you need to know about properly setting your time zone,  as well as which reports are affected by the time zone settings.

## Agent manager / operational reports

Operational data (including the web agent and agent manager [real time data bars and dashboards](data-reporting-messaging-real-time-data-for-messaging.html), and agent manager BI dashboards are presented according to the user's local time zone setting. This setting cannot be changed in LiveEngage.

## Campaign manager reports

* [Campaign related data](contact-center-management-campaigns-campaign-dashboard-and-data-bar.html) (including campaign and campaign manager BI dashboards) are presented to users according to their LivePerson user level time zone.
* By default, the LivePerson user-level time zone is synced to the associated LivePerson account’s time zone. Users can change their user-level time zone in order to view campaign-related data in a different time zone.
* When the LivePerson account time zone is modified, all time zones of users who have never changed their user level setting are synced to the new account-wide time zone.

## Campaign time zone

Within the LivePerson platform, each [campaign](contact-center-management-campaigns-campaigns-overview.html#what-are-campaigns) has a time zone setting. When a user creates a new campaign, the campaign’s default time zone is set to the primary user level time zone but can be easily modified in order to control when the campaign runs. However, modifying the campaign time zone does not impact the data presented in reports.

### To modify account-wide time zone:

1. Log in to LivePerson as a user with admin [permissions](admin-settings-permissions-customize-permissions.html).
2. In the users tab, scroll down to the footnote and select a time zone. The account-wide time zone is now set.

### To modify user level time zone:

1. Log in to LivePerson.
2. Click the down arrow to the right of your user name (on the top right of the screen) and select my details.
3. Under regional settings, select a time zone. The time zone for the logged in user is now set.

![](/img/Set-the-time-zone2.png)

### To modify a campaign’s time zone:

1. Log in to LivePerson as a user with campaign manager or admin permissions.
2. In the campaigns tab, select a campaign to edit.
3. Hover over the campaign time frame and click edit.
4. At the bottom of the page, select a time zone and click save. The campaign is now saved with the updated setting.

## Report Builder time zone

The data is shown according to the LiveEngage account-level time zone configuration. When changing the account-level timezone, the change will take place in[ Report Builder](data-reporting-report-builder-report-builder-overview.html) on the next load. In addition, in the operational dashboards, users are able to change the time in which data is presented by selecting a time offset. This allows the users to analyze performance in their local time. In operational dashboards users are able to change the time in which the data is presented by selecting a time offset. This allows the users to analyze performance in their local time.