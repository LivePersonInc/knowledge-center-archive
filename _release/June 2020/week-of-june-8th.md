---
pagename: Week of June 8th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-june-week-of-june-8th.html
isTutorial: false
isNew: false
date: '2020-06-03'

---

These release notes include new features arriving to LiveEngage during June 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Private Messages for messaging
### Type: New functionality 

A new capability is now supported in the enhanced Agent Workspace for messaging - the ability to send private messages to all conversation participants, except for the consumer. This capability will enable managers to guide agents during active conversations, while agents will be able to ask managers for directions and clarifications.
Private messages will not affect the conversation’s SLA, intensity (active/inactive status), and it will not reset the auto-close timer. This feature is enabled by default. 

**Limitations**
* Private messages are not available to bot agents at the moment, only to human agents.
* Private messages will not show a notification to the agent near the module icon, or on top of the conversation line in the My Connections panel (unlike regular messages).

Image 1: A new private message action is available within the action menu
![](img/week-of-june-8th-5.png)

Image 2: A private message displayed within the conversation area, with a “PRIVATE” badge.
![](img/week-of-june-8th-6.png)

## Analyze Web Sales conversions with Control Group and Self Service group. 
### Type: Enhancement (Report Builder 4.5)

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The ‘Operational & Staffing for Live Chat’ was enhanced to allow brands to analyze the converted consumers versus the control group and self served visitors groups.

Self service visitors -  Visitors who were exposed to an invite, but did not have any engagement/chat  and converted on the web site ( they might clicked on content but they didn't start a chat)
Control group visitors -  Visitors who were not exposed to any engagement in their site journey either they were in a control group or prospects who aren't exposed to invites.

Previously,  the report  included only Chat group metrics for visitors that end up in interactive chats. In this version we added the following groups.

#### Metrics and descriptions

**CONTROL GROUP IN SESSION AOV**
Average order value of conversions from control group visitors during their visitor sessions. Control group visitors, visitors who were not exposed to any engagement in their site journey either they were in a control group or prospects who aren't exposed to invites.

**CONTROL GROUP IN SESSION CONVERSIONS**
Conversions by control group visitors purposely never exposed to chat invites occurring during a visitor session. Control group visitors , visitors who were not exposed to any engagement in their site journey either they were in a control group or prospects who aren't exposed to invites.

**CONTROL GROUP IN SESSION REVENUE**
Revenue from conversions by control Group visitors purposely never exposed to chat invites, occurring during a visitor session. Control group visitors - Visitors who were not exposed to any engagement in their site journey either they were in a control group or prospects who aren't exposed to invites.

**TOTAL CONTROL GROUP AOV**
Average order value of in-session and cross-session conversions for Control group visitors - Visitors who were not exposed to any engagement in their site journey either they were in a control group or prospects who aren't exposed to invites.

**TOTAL CONTROL GROUP CONVERSION RATE**
Conversion rate of Control group visitors - Visitors who were not exposed to any engagement in their site journey either they were in a control group or prospects who aren't exposed to invites.

**TOTAL CONTROL GROUP CONVERSIONS**
Total conversions achieved by visitors in the Control group visitors, Visitors who were not exposed to any engagement in their site journey either they were in a control group or prospects who aren't exposed to invites.

**TOTAL CONTROL GROUP REVENUE**
Total revenue achieved by control group visitors, Visitors who were not exposed to any engagement in their site journey either they were in a control group or prospects who aren't exposed to invites.

**TOTAL SELF SERVICE EXPOSED AOV**
Average revenue achieved for Self service visitors, Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

**TOTAL SELF SERVICE EXPOSED CONVERSION RATE**
Percentage of TOTAL SELF SERVICE EXPOSED CONVERSIONS out of total chat exposed. Self service visitors, Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

**TOTAL SELF SERVICE EXPOSED CONVERSIONS**
Total number of conversions achieved after the consumer was exposed to an engagement and did not initiate a chat with an agent. Self service visitors , Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat.

**TOTAL SELF SERVICE EXPOSED REVENUE**
Total revenue achieved after the consumer was exposed to an engagement and did not initiate a chat with an agent. Self service visitors - Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

**SELF SERVICE EXPOSED CROSS SESSION AOV**
Average revenue achieved after exposure out of the number of purchase transactions completed after exposures, where exposure and purchase event occur in different sessions for Self service visitors - Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

**SELF SERVICE EXPOSED CROSS SESSION CONVERSIONS**
Number of conversions achieved after an invite exposure occurred in a previous visit to the site for the Self service visitors - Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

**SELF SERVICE EXPOSED CROSS SESSION REVENUE**
Revenue achieved after an invite exposure occurred in a previous visit to the site for the Self service visitors - Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

**SELF SERVICE EXPOSED IN SESSION AOV**
Average of the revenue achieved after exposures out of the number of purchase transactions completed after exposures, where exposure and purchase event occur in the same session for Self service visitors - Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

**SELF SERVICE EXPOSED IN SESSION CONVERSIONS**
Number of conversions achieved after an exposure in the same session for Self service visitors - Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

**SELF SERVICE EXPOSED IN SESSION REVENUE**
Revenue achieved after exposure, where exposure and purchase event occur in the same session for the Self service visitors - Visitors who were exposed to an invite, but did not have any engagement/chat and converted on the web site ( they might clicked on content but they didn't start a chat).

## Revenue metrics in Business Dashboard for messaging  
### Type: Bug fix (Report Builder 4.5)

Business dashboard for Messaging was showing incorrect revenue values (for example Total revenue after engagement) and data was not consistent (ir decreased) for the same dates when running a couple days later. This issue has now been resolved.

## New field in API - Add nickname field to getUserProfile/setUserProfile API
### Type: Enhancement (UMS 3.26)

Possibility to populate the nick name when setting up User Profile. 
This is available without any configuration. You need to add the nickname field to setUserProfile payload in order to submit the data.

## Send push notification about the secure form submission
### Type: Enhancement (UMS 3.26)

This enhancement is relevant to those who are using the Agent App and enables agents to receive push notification when a consumer submits a secure form. To configure, please contact your LivePerson account team.

## Allow AgentManager to transfer / close conversation without joining.
### Type: Enhancement (UMS 3.26)
This feature allows agents with privilege of AGENT_JOIN_AS_MANAGER (privilege Id #13) to do actions without joining conversation such as transfer conversation or close conversation   
How to configure: Feature flag needs to be turned on. Please contact your account manager for more details.

## Rollover - allow to agent from rollover account to Query Messages
### Type: Enhancement (UMS 3.26)
Allows the agent from the rollover account to get a transcript of the conversation from the owner’s account. 
This is availabe for customers for whom rollover is enabled for the Brand.

## FaaS Chat Post Survey: Include Engagement ID/ChatId in payload 
### Type: New feature (Denver 5.16)

This update includes the EngagementId and ChatId in the payload of the Chat Post Survey invocation that is made to FaaS.

## GBM, RCS, and LINE Conversation Sources
### Type: Enhancement (LE UI 11.9)

New conversation sources were added for LINE and RCS (Rich Communication Services) with a link to their respective onboarding forms. Existing conversation sources like WhatsApp Business and GBM (Google Business Messaging) were updated so that they link to their own onboarding forms. This will allow a better and more streamlined onboarding experience for all these solutions.

![](img/week-of-june-8th-1.png)

![](img/week-of-june-8th-2.png)

## Load balancing for messaging - Redistribute the load to connected agent groups
### Type: Enhancement (LE UI 11.9) 

Messaging Advanced load distribution is a routing capability that allows brands to define how the messaging load gets distributed between different agent groups. This kind of capability is a necessity for brands that outsource their messaging operations and must meet clear contractual obligations as to which vendor handles which percentage of the total brand messaging traffic. It allows the brand to define that a specific agent group is correlated with a specific vendor and define, per skill, the way that the load will be distributed between the agent groups.

This phase of the feature looks to address cases where the contact center is offline. The new enhancement is able to automatically apply a new load balancing scheme which is based on the skill load balancing configuration as well as the current online state of the rest of the defined agent groups. The new load balancing will reroute both incoming conversations as well as conversations that are already in the queue and were not yet assigned to a human agent, to the rest of the online contact centers.

In order to prevent contact center attribution issues, conversations that were already assigned to a human agent within one contact center will not get redistributed to other contact centers within the span of a single conversation. Such conversations will remain assigned to the contact center that handled them first.

**Example:**
* Skill A is defined to load balance with the percentages:
  * Contact center 1 - 50% of the load
  * Contact center 2 - 30% of the load
  * Contact center 3 - 20% of the load
* Contact center 1 goes offline at 8 PM while contact centers 2 and 3 go offline an hour later (different time zones)
* At 8PM the new incoming conversations as well as conversations that were waiting for contact center 1 and were not yet assigned to a human agent to be distributed to contact centers 2 and 3 based on the respective ratios:
  * Contact center 1 - offline
  * Contact center 2 - 30/50 = 60% of the load
  * Contact center 3 - 20/50 = 40% of the load
* Once contact center 1 reopens the load will automatically rebalance again

{: .notice}
This feature has backend dependencies. Please contact your LivePerson representative for more information. 

**How to enable:**
A checkbox was added to the Advanced load distribution section in LiveEngage under the skill settings. Once the “Redistribute load when agents are not connected” checkbox is marked, the new enhancement is effective.

![](img/week-of-june-8th-3.png)

## Disable authentication within the Connection Panel
### Type: Bug fix (LE UI 11.9) 

A bug has been found within the Connection panel after an upgrade to the latest UI version, we added the option for users to be authenticated when using the feedback bot, which caused a bug. The bug caused the Connection Panel authentication to stop working for some accounts/users. This means that the accounts can't open new conversations from the connection panel. The bug has been fixed and we reverted the changes, so the feedback bot will only be unauthenticated again when we are able to implement a better solution.

## Distorted info tooltip icon under Edit skill
### Type: Bug fix (LE UI 11.9) 

A visual bug was found and fixed where an info tooltip icon got distorted when working in dark mode. This bug has been resolved. 

![](img/week-of-june-8th-4.png)
