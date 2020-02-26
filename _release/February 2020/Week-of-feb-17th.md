---
pagename: Week of February 17th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-february-week-of-february-17th.html
isTutorial: false
isNew: false
date: '2020-02-12'

---

These release notes include new features arriving to LiveEngage during February 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Goals tracker for messaging  

### Type: New functionality [RB 4.2]

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
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

The new ‘Goals tracker for Messaging’ dashboard will now allow brands to measure the conversions for all agents participating in the consumer journey based on the cross-session window configuration in the account. This helps brands better attribute conversions to all the agents who were assigned to the conversation, as well as the ability to increase accountability and motivation. 

The new report will show data at the Brand, Agent and Skills level, alongside compelling data such as: assigned time and number of sent agent messages. This allows brands to make better decisions regarding the contribution of each agent to the achieved goal.

**Please note:** 
The existing ‘Goals Tracker Report’ will be renamed to ‘Goals Tracker for Live Chat’ and will include messaging data only for the next 6 months. It can be used for settings of First/Last agent only.
The Dashboard will show data only for sources that supports campaign in LiveEngage ( Web messaging and in app messaging)

### How to enable
The new Dashboard is enabled OOTB.
New settings will be added to LiveEngage UI to enable brands to choose the attribution model for messaging (First, Last, All). The window for consideration is the same cross session window defined in Live Engage UI.
The UI is not deployed yet, in order to change the setting to ‘All’  please contact the Live Person account team.

**Screenshots**
![](img/new_goal_tracker_messaging_1.png)

## Messaging Performance Grids
### Type: enhancement [RB 4.2]

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

Messaging Performance grids based on Messaging Performance Dashboard will be available also in Excel export format, for the Brand and Agent in daily and monthly level aggregations to allow easy subscription to the data.
1. Performance Messaging Agent Grid - Daily / Monthly
2. Performance Messaging Brand Grid - Daily / Monthly

## Agent survey support for enhanced agent workspace 
### Type: New functionality (NAW 1.10)

Agent surveys prompt agents to record information about the conversation, update the sales lead status, and more after a conversation is complete. The information gathered can be used to optimize brand operations, improve campaigns, train agents, get additional information about conversions, reduce the need to transfer, etc. 
Currently, brands use the agent survey via the old messaging workspace to categorize, qualify and collect more information about the conversation. The agent survey feature is now added to the enhanced agent workspace as well, to provide similar benefits.

The following capabilities are supported while using the agent survey:
* The survey will appear as a new widget in the agent workspace
* Each conversation can have multiple surveys submitted
* Agents can submit engagement attributes (e.g agent on behalf for messaging)
* Custom reports can be developed upon request by the Analytics team

To enable: Please see the [Agent survey for messaging article](contact-center-management-messaging-operations-agent-survey-for-messaging.html) in the Knowledge Center

**Limitations:**
* Reporting in the Report Builder will be available in March

**Screenshots:** 
![](img/week-of-february-17th-1.png)

## Set idle time automatically according to smart suggestions 
### Type: Enhancement (NAW 1.10)

With the enhanced agent workspace launch, we introduced a new conversation status: “Idle”, which has been defined as “Consumer has not responded for over 5 minutes”. With this version release, the idle time has been aligned with the Smart Capacity settings automatically. 

This will affect all accounts working with the enhanced agent workspace, in the following way:

**Brands using [Smart Capacity per skill](contact-center-management-messaging-operations-smart-capacity-smart-capacity-per-skill.html):**
* Will now see that the idle time will be set for each conversation separately, according to the conversation’s skill.
* For example: account that set smart capacity per skill as follows: 
  * Sales: 6 minutes
  * Customer care: 4 minutes 
* For conversations assigned to the Sales skill, the conversation will be displayed as “Idle” after 6 minutes, whereas for conversation assigned to Customer Care skill, the conversation will be displayed as “Idle” after 4 minutes.
* If the conversation is not assigned to any skill - it will be displayed as “idle” according to the account’s Smart Capacity settings.

**All other brands:**
  * Idle time will now be set according to the default [Smart Capacity](contact-center-management-messaging-operations-smart-capacity-smart-capacity-overview.html) settings (per account) - which is set to 3 minutes for all accounts by default.

**Screenshots:** 

Conversations with the idle status: 
![](img/week-of-february-17th-2.png)

## Transfer to skill - Add indication for number of online agents 
### Type: Enhancement (NAW 1.10)

Whenever an agent transfers a conversation to skill, a new indication will now appear next to each skill on the list, indicating how many online agents are on that skill.  This will assist in preventing agents from transferring conversations into skill with no online agents, and reduce situations of bad consumer experience.

**Screenshots:** 

![](img/week-of-february-17th-3.png)

## Display conversation source in My Connections list
### Type: Enhancement (NAW 1.10)

The My Connections list has been enhanced to include an indication of the conversation source for each conversation on the list. The conversations source icon is displayed to the right of the consumer name. For consumers with long names, an ellipsis will be used to truncate the name, and the conversation source will be displayed as well.

{: .notice}
**Please note:** The conversation sources will be displayed to all LiveEngage accounts by default. Accounts that wish to hide the conversation source should contact their LP representative.

**Screenshots:** 

![](img/week-of-february-17th-4.png)

## System crashes when working with Internet Explorer 11
### Type: Bug fix (NAW 1.10)

Brands working with the enhanced agent workspace on top of the latest version of Internet Explorer 11 may experience performance issues. In some cases, the browser may stop responding and crash unexpectedly. After deeper investigation the root cause has been found and fixed. 

## All Connections table only exposes users from main group
### Type: Bug fix (NAW 1.10)

A new bug has been discovered in the All Connections table filter: 
When using filter dropdown by agent names, the dropdown list only displayed agents assigned to the main group, and not to the current user’s groups. This bug has been fixed, and the filter now displays all agent names which are associated with the current logged in agent groups.

**Screenshots:** 

![](img/week-of-february-17th-5.png)

## Custom widgets infinite loader
### Type: Bug fix (NAW 1.10)

A bug has been discovered in the enhanced agent workspace for brands who disabled the customer info widget while using custom widgets. It appears that when working with this configuration, the custom widget would have been loaded for a long period of time. Sometimes, an infinite loader would be displayed and the widget could not be loaded at all. This bug has been fixed.  

## Agents could not join conversation
### Type: Bug fix (NAW 1.10)

In some edge cases, when the brand had lots of open and closed conversations (above 1000), agents could not join conversations. The user could still read the conversation transcript, however when pressing the “Join conversation”, they got an error message that the operation could not be completed. The bug has been fixed.

## When Consumer Info widget is disabled, custom widgets won’t load 
### Type: Bug fix (NAW 1.10)

It was discovered that if the consumer info widget is disabled on a LiveEngage account, custom widgets configured on the account will not be loaded (an infinite loader is displayed and the widget can’t load). If the consumer info widget was enabled on the account, this issue was not reproduced. The issue has been fixed and custom widgets are now loaded and displayed properly.

**Screenshots:** 

Custom widgets not loading properly if the consumer info widget is disabled:
![](img/week-of-february-17th-6.png)

## New line represented as `<br>` gets ignored
### Type: Bug fix (NAW 1.10)

When the agent input area contains a new combination of line characters, explicitly `<br>`, the `<br>` combination would send as plain text, rather than actually break the line. This issue has been fixed, and now agent typing `<br>` within the input area will see a new line appear, when sending the message to the consumer.

## Orphan notification on a new message
### Type: Bug fix (NAW 1.10)

Whenever a consumer sends a new message during a messaging conversation, an unread notification badge appears on top of the “Agent workspace for Messaging” module, which counts the number of conversations with at least 1 unread message. An additional icon is displayed in the My Connections list, for every conversation with at least 1 unread message in it.

![](img/week-of-february-17th-9.png)

In scenarios when consumers sent a new message, then immediately closed the conversation (but the agent did not read the consumer message yet), the unread notification counter on the agent workspace module used to count this message as unread, while the unread notification icon in the My Connections list has not been displayed for closed conversations. 

This caused a discrepancy between the two notification icons: agents saw an unread notification on top of the agent workspace module, but could not find the conversation it originated from.

![](img/week-of-february-17th-10.png)

This bug has been fixed, and the unread notification icons are now displayed both on the module, and in the My Connections list, on top of the closed conversation line.

![](img/week-of-february-17th-11.png)

## Cancel and close buttons not responding
### Type: Bug fix (NAW 1.10)

When a logged in user attempts to change his status within LiveEngage while the server is down, an error message appears on the screen alerting that the operation cannot be completed at the moment. However, when the user was trying to click the ‘Cancel’ or “Close” buttons on the screen, nothing happened - the buttons were unresponsive. The bug has been fixed. 

## White space displayed on a video card on Internet Explorer 11
### Type: Bug fix (NAW 1.10)

Customers working on Internet Explorer 11, sending video cards to consumers - a white space has been displayed within the video card, displayed on the agent workspace side. This bug only occurs on Internet Explorer 11, and not on any other browser. The bug has been fixed.

**Screenshots** 

![](img/week-of-february-17th-7.png)

## Agents cannot copy and paste any text in summary on Internet Explorer 11
### Type: Bug fix (NAW 1.10)

In the enhanced agent workspace, agents have been unable to copy/paste text into the agent summary, it allows them only to type rather than copy/paste. This bug has been resolved. 

## Users unable to use shift to create upper case letters
### Type: Bug fix (NAW 1.10)

Users of the enhanced agent workspace were unable to type upper case letters intermittently by clicking shift+the letter. Reported letters with this issue: Q, W, R, Y, U, I, O, S, L, N, M. This issue has been resolved and users are now able to normally type upper case letters using the shift key. 

## Consumer name not updating
### Type: Bug fix (NAW 1.10)

In the new agent workspace, if the consumer name is being updated during a messaging conversation, the updated name was not displayed automatically in the conversation list and conversation title, but only after a page refresh.

The updated consumer name was reflected correctly in the consumer info widget, but didn't get updated on top of the conversation window. The bug has been fixed, and the consumer name is now automatically updated in all areas of the enhanced agent workspace.

## Multiple lines of predefined content present as one line
### Type: Bug fix (NAW 1.10)

When a user is creating predefined content and configures sentences to appear on a separate line, the predefined content instead displays on one line. This issue has been resolved and the content will now display as configured. 

**Screenshots** 

![](img/week-of-february-17th-8.png)
