---
pagename: Week of July 1st
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: July
permalink: release-notes-2019-july-week-of-july-1st.html
isTutorial: false
isNew: false

---
## Messaging Conversation Segments (available soon)

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

The reality of messaging conversations today is that about 50% of interactions are transferred between skills. Many of the brands are also experiencing transfers between human agents.

In situations where multiple skills\\agents are assigned to each conversation, measuring the performance (e.g. time to first response) of each skill\\agent individually requires segmenting the conversation.

LiveEngage introduces a new segmentation model to measure each individual skill\\agent performance and present accurate KPIs per skill\\agent.

These new measurements and metrics are added to the Performance dashboard for Messaging in Report Builder.

Full information can be found [here](https://knowledge.liveperson.com/data-reporting-messaging-messaging-conversation-segments.html).

This new feature is enabled OOTB and is available for all Report Builder enabled customers.

### Skill segments

The following metrics and attributes are added to a new panel named ‘Skill segment’ under the ‘Brand Data’ sheet

| Metric | Definition |
| --- | --- |
| Skill Segments | The number of times conversations were assigned to a skill. Measured for conversations that were opened to the skill or transferred to it. A conversation may be assigned more than once to a given skill. |
| Abandoned Segments (Skill) | The number of conversations closed by a consumer which included no agent message. Measured during the last segment of the conversation, and is unaffected by the agent activity from previous segments. |
| Abandoned Segments Rate (Skill) | The percentage of abandoned segments out of the total segments assigned to the skill. Formula: Abandoned Segments (Skill) / Skill Segments |
| Abandoned Segments - In Queue (Skill) | The number of conversations closed by a consumer which included no agent message since no agent was assigned. Measured during the last skill-segment of the conversation, and is unaffected by the agent activity from previous skill-segments. |
| Segments with Non Responsive Consumers (Skill) | The number of skill-segments which ended in a transfer to another skill or closed with no response from the consumer to an agent’s message. |
| Segments with Non Responsive Agents (Skill) | The number of skill-segments which ended in a transfer to another skill or closed by agent/system with no message from an agent. |
| Interactive Segments (Skill) | The number of skill-segments with at least one response from a consumer to a skilled-agent’s message. Measured from the first message sent by an agent in a new skill-segment. |
| Interactive Segments Rate (Skill) | The percentage of interactive segments out of all the segments assigned to the skill. Formula: Interactive Segments (Skill) / Skill Segments |
| Avg. Segment Duration (Skill) | Average duration of skill-segments. Measured from the time the conversation was assigned to the skill until it was closed or transferred to another skill. |

| Attribute | Definition |
| --- | --- |
| Skill Segment start reason | Possible values: New conversation, Skill transfer, Agent transfer from another skill, Resume |
| Skill Segment end reason | Possible values: Closed by agent, Closed by consumer, Closed by system, Skill transfer, Agent transfer to another skill |

### Agent Segments

The following metrics and attributes are added to a new panel named ‘Agent segment’ under the ‘Agent Data’ sheet:

| Metric | Definition |
| --- | --- |
| Agent Segments | The number of times conversations were assigned to an agent.A conversation may be assigned more than once to a given agent. |
| Agent Assignment Rate | The percentage of assignments to agent out of the total assignments to the agent’s skill.Formula: Agent Segments / Assignments to Skill |
| AVG. No. of Agent Responses in Segment (Agent) | Average number of responses provided by agent during an agent-segment |
| AVG. No. of Consumer Responses in Segment (Agent) | Average number of responses provided by consumers to an agent's message during an agent-segment |
| Avg. Segment Duration (Agent) | Average duration of an agent-segment. Measured from the time the conversation was assigned to the agent until it was closed or transferred. Attributed to the assigned agent, group and skill. |
| Interactive Segments (Agent) | The number of agent-segments which included at least one response from the consumer to an agent’s message. |
| Interactive Segments Rate (Agent) | The percentage of interactive segments out of the total segments assigned to the agent.Formula: Interactive Segments (Agent) / Agent Segments |
| Abandoned Segments (Agent) | The number of conversations closed by a consumer which included no agent message. Measured during the last agent-segment of the conversation, and is unaffected by the agent activity from previous segments. Attributed to the last agent assigned to the conversation. |
| Abandoned Segments Rate (Agent) | The percentage of abandoned segments out of the total segments assigned to the agent.Formula:Abandoned Segments (Agent) / Agent Segments |
| Segments with Non Responsive Consumers (Agent) | The number of closed conversations which included no consumer response to an agent's message. Measured during the last agent-segment of the conversation. |
| Segments with Non Responsive Agents (Agent) | The number of agent-segments which ended in a transfer or closed by agent or system with no message from an agent. |
| Avg. Time to Response in Segment | The average time taken by an agent to respond to the consumer in an agent-segment (an agent segment is defined as the part of the conversation in which the agent was assigned. Measured from the time the agent is assigned until s\\he is not longer assigned). |
| Avg. Time to First Response in Segment | The average time taken by an agent to respond for the first time to the consumer in an agent-segment (an agent segment is defined as the part of the conversation in which the agent was assigned. Measured from the time the agent is assigned until s\\he is not longer assigned). |

| Attribute | Definition |
| --- | --- |
| Agent Segment start reason | Possible values: New conversation, Agent transfer, Skill transfer, Taken from Queue, Takeover, Resume |
| Agent Segment end reason | Possible values: Closed by agent, Closed by consumer, Closed by system, Agent transfer, Skill transfer, Back to Queue, Takeover from agent |

Please note:

* Metrics include only actions of the assigned agents - responses given to the consumer by participating agents who are not the assigned agent are omitted from the calculations.
* Messages provided by the Controller Bot (system messages) are omitted from the calculations.
* In case of resumed conversations - the first message sent by the agent after resuming a conversation is not included in the averages
* Takeovers - the first message sent by the manager after taking over a conversation is not included in the averages

## Add Timezone to Survey dashboard for Live Chat in Report Builder (available soon)

### Type:  New functionality

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

Timezone support is added to the Survey dashboard for Live Chat.  
Enterprise brands often have a global operation with contact centers in different regions. Each contact center is managed locally and by a global team.

To support both local agent managers in each region and global teams situated in the account’s timezone, Report Builder users will be able to change the time zone of the dashboard to analyze performance in their local time.

Before running a dashboard, the user is presented with a selection of time offsets from the timezone of the defined on the LiveEngage account. This causes the data to be presented in the local time zone of the user.

This new feature is enabled OOTB and is available for all Report Builder enabled customers.

**Please note:**

* Time offset is only possible for full hours. This means that users that are in time zones that are variations of half hours from GMT (such as certain places in India), will need to choose the full hour before or after. Half hour or quarter hour increments will not be supported.
* The drop down window displaying the time offsets available for the user to choose from, can only display 30 entries. Since there are 48 variations from GMT, there are two ‘pages’ of the dropdown.
* To support the time shift capability, the time related attributes have been altered to show an hour level granularity.

  For user with customization permissions, the attributes will now appear with the derived (fx) icon with the naming convention of the previous date/time related attributes. The naming convention of the previous attributes was altered to be “_xxx__old” and moved out of the predefined attribute list for users with customization permissions to access.
* There should be no impact or change to existing user copies. User copies created prior to this release will not display the offset functionality and therefore will not have the changes to the attributes mentioned in the note above.

![](/img/RB3.3-2.png)

## Third Party NLU support

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

<td>No</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>No</td>

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

Conversation Builder is integrated with Fire API for supporting 3rd party NLU engines like Google Dialog Flow and IBM Watson. This feature helps our customers to build intents and train them on Watson and Dialog Flow, in addition to Conversation Builder’s native NLU.

The intent building and training is generally available for intents in English language and we are looking for early adopters for non English language based intents.

**How to enable**

In order to enable this feature for the customers, Super Admin users in Conversation Builder can go to customer accounts and enable the NLU providers; Watson and Google DialogFlow.

![](https://lh3.googleusercontent.com/1_2xJm8sUou672Qd01Xu_7rWfIomCcunD0wsVE5b8TdC1OZzbzthgr-xKwyoTl6VfqXl2LqLNB498HkMoTFCxtWq8itlsFzpg46e45rK8S3YFRu8MGMo-XdTTeO7KohDCK4Q8fVZ =503x372)

**Dependencies**

* Fire API support from Austin team on US, UK and APAC regions
* Customers are expected to create Watson and DialogFlow accounts and use the API keys

**3rd Party NLU limitations**

* Third Party NLU Domain - Entity length should not exceed 64 characters. (Watson limitation)
* Each domain can only support one language and it is available in the settings page.

**Fire API-CB limitations:**

* KB does not support 3rd party NLU right now.
* CB Builder does not support pulling existing models from IBM Watson and Google Dialogflow into Intent Builder, only model push is supported.

**Please note:**

* Meta intents are not working for Watson

## Conversation Builder: Language support

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

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>No</td>

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

Brands will be able to utilize the Conversation Builder for bots in various different languages including German and Japanese , allowing the NLU intent analysis as an integration into Conversation Builder.

## Fallback configuration by skill

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

While assigning conversations to agents, it is possible that certain skills would have no online agents that could receive the conversations. In such cases, brands need to be able to define a secondary fallback skill to which the conversation will be assigned.

Fallback configuration by skill adds a new section under the skill settings in LiveEngage that enables brands to define the skill to which conversation will be routed if there are no online agents on the skill or if all agents are in an away status.

![](/img/rn-week-of-july-1.png)

**Configuration**

LP Account manager to enable the feature - “_Messaging.FallbackSkillPerSkill_”

Configuring a fallback skill per a specific skill is then made available through the Skills settings screen in LiveEngage.

**Dependencies**

* UMS 3.21
* AC_users 5.2

## \[ABC\]\[WhatsApp\] Add support for agent to share photos and documents with consumer

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
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

This feature enables agents to share photos and documents with consumers via Apple Business Chat and WhatsApp Business. Files will be shared from local file dialog.

The following file types are supported:

* PDF
* DOCX
* PPTX
* XLSX
* JPG,GIF,JPEG,PNG

All files types have a file size limitation of 5MB. The file sharing flow, functionality, capabilities and limitations, remain similar to definitions described in photo sharing scope ([view here](https://knowledge.liveperson.com/messaging-channels-rich-messaging-agent-file-sharing-overview.html)).

## \[ABC\] Embedded secure form

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
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

Brands can improve the secure form consumer experience by embedding the form directly in the message thread rather than receiving it as a URL that opens in a new browser. The secure form bubble can be customized per ABC businessID including: title, subtitle, secondary subtitle, tertiary subtitle, image URL, image subtitle and image title.

**Dependencies:**

* iMessage App (extension)
* ABC SDK embedded and configured for secure forms
* LPABCSDK 1.1.0 downloaded and embedded into their app/extension

**Limitations:**

* If image URL is not provided within the structured JSON schema, the layout view will be an empty frame.

{: .notice}
**Please note:** This feature requires enablement. For more information, please contact your LivePerson representative.

**Screenshots**

**Image1: Embedded form within conversation thread**

![](/img/rn-week-of-july-1-3.png)

![](/img/rn-week-of-july-1-2.png)