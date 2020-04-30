---
pagename: Week of May 4th 
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-may-week-of-may-4th.html
isTutorial: false
isNew: false
date: '2020-04-30'

---

These release notes include new features arriving to LiveEngage during May 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## WhatsApp Onboarding Link in Conversation Source
### Type: Enhancement (LE UI 11.8)

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

WhatsApp conversation source will lead to a new and more streamlined onboarding form.The current WhatsApp conversation source includes a short form, after which the WhatsApp Solution Team reaches out to the client to fill out another form to provide more info. The new solution will consolidate the two forms into one, having the client provide all the required set up info (and agreeing to the Terms Of Service) in a single page. The page will be external to the LivePerson product, is managed by the WhatsApp Solution Team, and feeds directly into Salesforce.

![](img/week-of-may-4th-1.png)

## Add properties to the Personal info Engagement Attribute
### Type: Enhancement (LE UI 11.8)

Zip code and preferred contact method properties have been added to Engagement Attributes and Personal Info SDE. Brands can now also store Zip/Postal Code and Preferred Contact Method in Personal Info SDE. This data can be set through Engagement Attributes, custom widgets, and any other methods used to write to SDEs.

![](img/week-of-may-4th-2.png)

![](img/week-of-may-4th-3.png)

## [Ring for All] ACD Timeout Configuration for Manual Mode
### Type: Enhancement (LE UI 11.8)

The ACD Timeout (also used for Rollover time configuration) can now be set on the Manual Mode queue option. In the “Change queue options” Nightvision module, when Advanced mode is selected, there is a setting for transferring the conversations back to the queue given they are not answered in X seconds.  There has been a new option added to this Change queue options menu recently for Manual Mode (Ring for All).  This story will also add the same option to configure the timeout when the user has selected Manual Mode. 

![](img/week-of-may-4th-4.png)

## Enable Agent Manager role to turn off permission "Handle Messaging Conversations"
### Type: Enhancement (LE UI 11.8)

This enhancement is a part of a specific request, when a brand would like to allow their agents to see the Conversation History. Previously, this permission was available only for agent managers and not agents. 
We applied the following fix: Brands can now enable the agent manager role to all agents with a single permission 'View Engagements History'.

## Error when creating a widget order
### Type: Bug fix (LE UI 11.8)

A bug has been found with widget reordering, when multiple widgets are being created with order at the same time. This bug appears after enabling new features like messaging, agent survey, etc., and enabling multiple additional widgets such as agent survey, consumer info. etc.  In case there were widgets in order 1,2,3,4,5, before and the Conversational Cloud tries to create new core-system widgets in order 2,6,8, we presented an error message.

We applied the following fix: When creating new system widgets, we don't determine the order of all widgets with a higher number than the existing order.
This bug is now resolved.

## Configuration of metrics to display   
### Type: New functionality (Manager Workspace 1.9)

This new capability allows brands to configure, per widget, which metrics will be displayed in the workspace.
For example, brands that are not tracking the CSAT metric will now be able to remove it from their view.
The configuration definition will be done for the entire account (impacts the view of all users of the manager workspace).

Since the configuration operation is done only once or a few times, it is a best practice to turn the permission off to all users once you are done to avoid any future confusion, or to allow it for a really small group of people.
The configurable widgets are the “Activity Summary”, “Agents” and “Conversations” widgets. 

{: .notice}  
**Please note:** This feature has a backend dependency. Please contact your LivePerson representative for more information. 

Who can change the configuration?
A new permission “Configure agent manager workspace” has been added to the agent manager profile. **It is Off by default**. 
![](img/week-of-may-4th-5.png)

Once it is turned on for the desigered profile, a new configuration icon will become available in the top right corner of the workspace:
![](img/week-of-may-4th-6.png)

Clicking on it will reveal the configuration window, allowing the user to easily toggle on or off the relevant metric per each configurable widget.
![](img/week-of-may-4th-7.png)

## New “Response time” metrics in Activity Summary widget
### Type: Enhancement (Manager Workspace 1.9)

New response time-related metrics were added to the Activity Summary widget, allowing managers to better track consumer experience and agent performance in real time, on the group and skill levels. All metrics are computed in real time once a response takes place. In addition, the computation is based on the entire response population and not sample-based, as done in the real-time dashboard. 

The metrics can be found in two new metric cards added to the widget, representing 4 response-time related metrics:
![](img/week-of-may-4th-8.png)

Below you can find the definition of each metric and where it can be found on Report builder and the real time dashboard:
![](img/week-of-may-4th-9.png)

## Sorting capabilities for In-queue widget  
### Type: Enhancement (Manager Workspace 1.9)

The In-queue widget can now be sorted by all of the columns available in the table: 
  * Skill name
  * In-queue (Number of unassigned conversations)
  * Wait time
  
Previously, the In-queue column was the only sortable column.

## Agent away reason in Agents widget more discoverable
### Type: Enhancement (Manager Workspace 1.9)

Previously, when using the table view of the “Agents” widget to view the away reason of an agent, users had to hover over the status icon. Now, the away reason has become more discoverable, as it is located beneath the status icon (no need to hover over). 

![](img/week-of-may-4th-10.png)

## Messaging agents list for agents using the enhanced agent workspace 
### Type: Enhancement (Manager Workspace 1.9)

Previously, agents using the enhanced agent workspace were not able to view the “messaging agents list”  even if they had the "View agents list" permission. Now, agents using the enhanced agent workspace will automatically have access to this data through a limited access view of the manager workspace. The manager workspace icon will be added to the navigation bar for agents with the “View agents list” permission. They will be able to monitor other agents in their group in real time.

![](img/week-of-may-4th-11.png)

## Skill filter does not impact counts by agent status
### Type: Bug fix (Manager Workspace 1.9)

When filtering by the global skill filter at the top right corner of the manager workspace, the number of agents who are online, back soon and away are not impacted by the filter (counter remains the same). This issue is now resolved so that the status counters will be impacted as well by the selected skills.

![](img/week-of-may-4th-12.png)

## Internal IP Revealed in Messaging History
### Type: Bug fix (Messaging History API)
LivePerson's internal IP addresses are exposed in the Messaging History API. After this fix, the IP addresses will be masked. There is an option to disable this masking is site settings. To disable, please contact your account team. 

## Specific Conversation Searching with Rollover Account
### Type: Bug fix (Messaging History API) 
Messaging history does not return specific conversation searching with Rollover account ID. This has now been fixed. 
