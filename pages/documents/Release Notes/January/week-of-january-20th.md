---
pagename: Week of January 20th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: January
permalink: release-notes-2019-january-week-of-january-20th.html
isTutorial: false
isNew: false
date: 2019-02-06 10:09:11 +0000

---
These release notes include new features arriving to LiveEngage during January 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

\***Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}

The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionalities

### Report Builder: Time zone support (90133)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
<td>N/A</td>
<td>No</td>
</tr>
</tbody>
</table>

Enterprise brands often have a global operation with contact centers in different regions. Each contact center is managed locally and by a global team.

To support both local agent managers in each region and global teams situated in the account’s timezone, Report Builder users will be able to change the time zone of a dashboard to analyze performance in their local time. In this release, we are adding this capability to two predefined dashboards: the **Skill Activity** and the **Messaging Performance.**

Before running a dashboard, the user is presented with a selection of time offsets from the default timezone of the account. This causes the data to be presented in the local time zone of the user.

Users that do not require any change in view from the account default time zone setting will not need to choose anything in the pop-up prompt before running the dashboard (the default offset is TZ+0 which is a zero hour offset from the account default setting).

\**How to enable  
\**The time zone offset feature is available to all users within the predefined dashboard folder on two dashboards: the **Skill Activity** and the **Messaging Performance**.

![](/img/week-of-january-20th-1.png)

**Please note:**

* Time offset is only possible for full hours. This means that users that are in time zones that are variations of half hours from GMT (such as certain places in India), will need to choose the full hour before or after. Half hour or quarter hour increments will not be supported.
* The drop down window that displays the time offsets available for the user to choose from, can only display 30 entries. Since there are 48 variations from GMT, there are two ‘pages’ of the dropdown.
* To support the time shift capability, the time related attributes have been altered to show an hour level granularity.
* For users with customization privileges (LPAs and brands with “edit access” feature), the attributes will now appear with the derived (fx) icon with the naming convention of the previous date/time related attributes. The naming convention of the previous attributes have been altered to be “_xxx__old” and moved out of the predefined attribute list for edit users to access. These can be reached from the hidden attribute list.
* There should be no impact or change to existing user copies. User copies created prior to this release will not display the offset functionality and therefore will not have the changes to the attributes mentioned in the note above.

### Queue health metrics by chat center (Operational Realtime API)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>Yes</td>
</tr>
</tbody>
</table>

An additional parameter has been added to the Queue Health method in the Operational Realtime API to allow retrieval of data per chat center.

Brands with multiple chat centers can now have a clear and separate view of the queue state and health for each chat center (usually operated by different vendors).

The queue health API allows retrieval of information on the queue state at the skill, account and at the contact center level. The metrics provided include number of connected or abandoned engagements, time to answer or abandon, queue size etc. This feature is available to all customers.

**How to enable**

To receive the metrics by chat contact center, one must also pass chatGroupID as a query parameter.

* When chatGroupID parameter is provided, the response will include data per skill, only for the skills associated with the chat Group.
  * Skills that are not associated with the chat group will not be included in the response.
* When chatGroupID parameter is provided, and also specific skill\\s - the response will include data per skill, only for the skills associated with the chat group.
  * If the chat group doesn’t have one of the requested skills associated with it, that skill will no be returned in the response.
* If no chatGroupID is provided, the response will provide data on all skills (as today).

{: .note}
The chat center IDs can be retrieved using the [Skills API](https://developers.liveperson.com/administration-skills-appendix.html) (agentGroupId).

**Notes:**

1. Only one chat center ID can be passed in each call to the API.
2. Filtering of the queue health data by chat center is implemented in the API only. No change has been made to the Queue Health metrics in LE UI.

## Enhancements

### Report Builder: Enhanced Field Details tab (68392)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
</tr>
</tbody>
</table>

The Field Details tab, included in each report in Report Builder has been redesigned.

The new tab contains a list of all the available attributes and metrics in the report, and related data for each. This can be enabled out-of-the-box.

## Bug Fixes

### Report Builder: Answer ratio not shown correctly for modified questions in Messaging Performance in Report Builder (96886)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
<td>N/A</td>
<td>No</td>
</tr>
</tbody>
</table>

When a question in the post conversation survey is modified, the ‘answer ratio’ metrics show incorrect values.

The metrics have been fixed now to show the correct ratio. The metrics appear in the Messaging Performance dashboard, ‘Survey Data Export’ sheet:

* ANSWER RATIO (Brand) metric in ‘Answers Distribution (Brand)’ panel
* ANSWER RATIO (Agent and Skill) metric in ‘Answers Distribution (Agent and Skill)’ panel

![](/img/week-of-january-20th-2.png)

### Report Builder: Brand Level Data tab shows no data when predefined Messaging Performance Dashboard is loaded (93773)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
<td>N/A</td>
<td>No</td>
</tr>
</tbody>
</table>

For brands using only a single source type, the default view of the ‘Brand Level Data’ sheet was empty. This is now fixed is data is visible for all accounts.

![](/img/week-of-january-20th-3b.png)

### Report Builder: Agent activity report incorrect filtering by skill (94844)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
</tr>
</tbody>
</table>

In the agent activity dashboard, ‘skill’ was part of the default filter panel, however, users are not able to filter by it. This attribute has been removed from the dashboards as it showed incorrect values (there is no direct relation between agent and skill in this dashboard).

To analyze the contact center’s performance by skill - please use Skill Activity or Operational & Staffing dashboards.

### Report Builder: Deleted agent’s groups appear in the filter but the ‘group active’ filter does not work with it (93707)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
</tr>
</tbody>
</table>

In the Agent Activity dashboard, when filtering to see only active groups (Group Active Indicator=Y), the list of groups in the filter panel will now be filtered to show only active groups.

This was implemented by using the ‘Group Active Indicator’ attribute as a filter for the ‘Group’ attribute in the filter panel.