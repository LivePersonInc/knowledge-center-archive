---
pagename: Week of Sept 9th
categoryName: Release notes
subCategoryName: '2019'
indicator: both
subtitle: ''
level3: September
permalink: release-notes-2019-september-week-of-september-9th.html
isTutorial: false
isNew: false
published: false

---
These release notes include new features arriving to LiveEngage during September 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Enhanced agent workspace for Messaging

### Type: enhancement 

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

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

The enhanced workspace simplifies agent operations to dramatically increase agent focus and efficiency. It was designed to handle multiple channels of conversation at scale asynchronously, taking into account all of the features that were developed especially for messaging.

For details, see full [user guide.](https://knowledge.liveperson.com/messaging-agents-user-guide.html)

See [Enhanced Agent Workspace - New Experiences](https://knowledge.liveperson.com/new-experiences.html) for more details

This enhancement is available to all Messaging customers.

**How to enable**

[External - Configuration guide](https://knowledge.liveperson.com/messaging-agents-configuration.html)

**Limitations**

Brands with blended accounts, or those that offer both live chat and messaging, may need to make adjustments to their operations. For more information, please consult the [blended accounts overview](https://knowledge.liveperson.com/messaging-agents-blended-accounts.html).

Agent Survey is currently not supported. Will be added in Q1 2020

## Static load balancing per skill for messaging

### Type: new feature

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

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

Messaging load distribution is a routing capability that allows brands to define how would the messaging load gets distributed between different agent groups. This kind of capability is a necessity for brands that outsource their messaging operations and must meet clear contractual obligations as to which vendor handles which percentage of the total brand messaging traffic. It allows the brand to define that a specific agent group is correlated with a specific vendor and define, per skill, the way that the load will be distributed between the agent groups.

This feature is available to all customers. It is already available for Chat and now also available for Messaging)

**How to enable**

LP Account manager to enable the feature - “Messaging.Static_Load_Balancing”

Configuring a load balancing per a specific skill is then made available through the Skills settings screen in LiveEngage. The account must have at least 2 agent groups in order for the feature to become visible in the UI.

**Dependencies**

* AC-users 5.3
* UMS 3.22
* LE-UI 10.12

{: .notice}  
This feature cannot be defined to work for both Messaging and Chat load balancing per a single skill.

**Screenshot** 

![](/img/skill load balancing.png)