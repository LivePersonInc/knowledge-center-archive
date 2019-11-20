---
pagename: Week of November 18th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-november-week-of-november-25th.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during November 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Enhancements to the agent survey for messaging

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The agent survey for messaging was enhanced with the following new capabilities:
* **Previously submitted surveys** - The agent survey widget will now have a new tab named ‘previously submitted’. This tab will show all surveys that have been submitted for the current conversation. A new permission will be added. If the permission ‘view previously submitted surveys’ is on, the agent will see **all** surveys submitted for the conversation, even by other agents. When the permission is off, the agent will see only surveys submitted by themself.
* **Engagement history widget** - The engagement history widget will now reflect the last submitted agent survey for each conversation
* **All Connections icon (old agent workspace)** - Conversations with pending surveys will have a new icon in the All Connections list, showing the survey is still pending. A pending survey is a survey that has not yet expired and wasn’t submitted.
* **All Connections filtering (Current workspace)** - New filters were added in order to find specific conversations per the following:
  * Survey status (pending/non-pending)
  * Survey name / id
  * Survey questions + answers
* **Closed conversations icon** - Agents will have an indication of conversations that are pending agent survey in their closed conversations section.

**Screenshots** 

![](img/week-of-november-25th-1)

![](img/week-of-november-25th-2)

## Light and dark theme support for Users module

### Type: Enhancement

The new light and dark themes are now supported in the Users section of LiveEngage. Starting with this version, the selection of light/dark theme will apply to the appearance of the users configuration section in the platform. 

**Screenshots** 

Dark theme:

![](img/week-of-november-25th-3)

Light theme: 

![](img/week-of-november-25th-4)

## Ability to remove the engagement window border

### Type: Enhancement 

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Brands now have the ability to configure whether the engagement window frame will have a border or not. This new configuration has been added to the "Additional window settings" area of the engagement window studio, under the "Look and feel" section.

By default the configuration is set to “Yes”, which means that the window will have a border, as it does today. This will apply to the embedded window for normal and maximized states (with slideout) on mobile and desktop.

**How to enable:**
* Log into LiveEngage
* Go to Engagement studio
* Click on “Additional window settings”
* Expand “Look and feel” section
* Click on the dropdown for “Engagement window border” and select “Yes”
* Click on “Save”

**Screenshots** 

Image 1: Configure engagement window border

![](img/week-of-november-25th-5)

Image 2: Engagement window with border vs without border

![](img/week-of-november-25th-6)

![](img/week-of-november-25th-7)

## Ability to configure the engagement window shadow 

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Brands now have the ability to configure the engagement window shadow. This configuration has been added to the “Additional window settings” area of the engagement window studio, under the “Look and feel” section.

**The field reads:** Entry must be in the format of h-offset(px) v-offset(px) blur(px) spread(px) rgba(red,green,blue,alpha). Rgb valid value is between 0-255. An invalid format notification message will be displayed if the rgb value is entered outside this range.
Default value is 0 0 16px 3px rgba(0,0,0,0.2). Please note: px is mandatory if non zero value is used. Eg. 0 0 16px 3px rgba(0,0,0,0.2).

This entry will apply to the embedded window for normal and maximized states (with slideout) on desktop.

**How to enable:** 
* Log into LiveEngage
* Go to Engagement studio
* Click on “Additional window settings”
* Expand “Look and feel” section
* Enter values for “Engagement window shadow”
* Click on “Save”

**Screenshots**

Image 1: Configure engagement window shadow

![](img/week-of-november-25th-8)

Image 2: Engagement window with shadow

![](img/week-of-november-25th-9)

Image 3: Engagement window without shadow

![](img/week-of-november-25th-10)

## Horizon theme enhancements

### Type: Enhancement

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The following features are now included by default for any new engagement window with the Horizon theme:
* Emoji icon
* Menu at the top + attachment icon (for web messaging)
* Floating window with rounded corners at the bottom
* Grouped bubbles
* Grouped timestamp
* Timestamp located below the bubble
* New send icon
* Browser notification: tab and native

**Screenshots**

All new features as default: 

![](img/week-of-november-25th-11)

![](img/week-of-november-25th-12)
