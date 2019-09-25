---
pagename: Week of September 30th
categoryName: Release notes
subCategoryName: '2019'
indicator: both
subtitle: ''
level3: September
permalink: release-notes-2019-september-week-of-september-23rd.html
isTutorial: false
isNew: false
published: false

---
These release notes include new features arriving to LiveEngage during September 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Auto Closet reset

### Type: New functionality

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

This feature defines a set of configurations that would enable brands to achieve finer control over what kind of scenarios would trigger the auto-close mechanism to reset its countdown to conversation close per a specific conversation. The new configuration will enable the control if a conversation auto-close timer should be reset or not when a conversation:

* Was opened for viewing without having the viewing agent join the conversation (joins just as a READER).
* Was joined by an agent/agent manager/admin as an active participant in the conversation.

Besides these new configurations, writing a line in the conversation or changing its state would still reset the auto-close timer.

**How to configure?**

Please contact your LivePerson account team

## Partial data masking

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

Enables brands to configure a data-masking regex which leaves the final four digits of credit card numbers unmasked. This is an addition to the recently released data-masking feature which masks the entire credit card of object matching the regex. Clients who choose the leave the final four digits of credit cards unmasked can track and audit messages while retaining consumer privacy.

**How to configure?**

Please contact your LivePerson account team

## Static load balancing

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

As part of the Static Load Balancing feature, a conversation’s allocated group field, used to route conversations to specific agent groups, will be set based on the resuming agent group ID.  
The above action would take place only if the Load Balancing feature is Enabled by your LivePerson account team.

## AgentGroup filter for Agent & AgentManager 

### Type: Bug Fix

If a user is marked as both an AGENT and AGENT_MANAGER, the agent group filtering feature did not properly apply a group filter to show a limited result conversations. Instead, all conversations were shown as if there was no filter applied.

The ordering of clauses on the filter query was fixed, resolving this filtering bug.

## Skill filter should be applied only when group filter is applied for a brand+user

### Type: Bug Fix

Two new features were recently added to UMS: Agent Group Filtering and Agent Skill Filtering. Agent Skill Filtering should be seen as a sub-feature of Agent Group Filtering, as it makes no sense outside of the context of Agent Group Filtering.

However, the initial implementation of the two filters technically allowed them to operate independently of each other, even though this is not a valid use case. To fix this, the implementation was changed to make the Agent Skill Filtering only possible to enable for a brand when Agent Group Filtering is enabled as well.

A change was made to the Agent Group Filtering to consider AGENT_MANAGER users without agents to manage as ‘super users’ that show all conversations in the brand.

A change was made to the Agent Group Filtering to allow users who are labeled as AGENT and AGENT_MANAGER to receive conversations filtered for the AGENT group assigned to them.

A change was made to the Agent Skill Filtering to allow users who are labeled as AGENT and AGENT_MANAGER to be notified for conversations on skills assigned to them, even if those skills are not shared by any other group or user.

## Allow LPA user to subscribe to groups 

### Type: Bug Fix

**Available to all customers?** yes

**Description:** LPA users were not present in Account Configuration (AC). Agent group filters which depend on data from AC thus did not apply to LPA users in the LiveEngage (LE) UI. This was resolved by adding LPA users to AC, allowing them to subscribe to groups and filter conversations in the LE UI.

**Ac users are deleted when delta arrived on** **callback** ([AE-6287](https://jira.liveperson.com/browse/AE-6287))

**Type:** Bug Fix

**Available to all customers?** yes

**Description:** When receiving a missing response from AC on delta calls we cleared the skills on the users, which led to an edge case of conversations that had no available agents by mistake and were routed to skill -1 .