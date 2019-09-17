---
pagename: Week of April 29th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: Release notes
level3: April
permalink: release-notes-2019-april-week-of-april-29th.html
isTutorial: false
isNew: false
date: '2019-04-23T16:29:39.000+00:00'

---
These release notes include new features arriving to LiveEngage during April 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Reporting for Smart Capacity (LE-95785)

<div class="tablecontainer">
<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twillio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

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

<td>Yes</td>

</tr>

</tbody>

</table>
</div>

**Available to all customers?** No (for Report Builder-enabled customers with CSO)

Report Builder Advanced Messaging Performance, powered by the Analytics Group, now offers new metrics designed by Product indicating if Smart Capacity feature is well configured for the brand and how it impacts the brand’s efficiency.

There are 2 sets of new metrics:

**Staffing-related metrics:** Is the contact center correctly staffed?

When the contact center is overstaffed or understaffed - the smart capacity algorithm will not have any impact. Staffing-related metrics will give brands indication for their staffing state.

**Smart-capacity related metrics:**

How does smart capacity impact the KPIs of the Contact Center?

Is smart capacity configured correctly for optimizing agents’ performance?

With the new metrics, you can assess whether your contact center is staffed correctly for using smart capacity, and understand how the feature impacts each skill’s performance.

We have included the following metrics (all available at the agent, agent-group and skill levels):

### Metrics definitions

#### Staffing related metrics

**Analysis questions:**

* How much of the agent’s capacity is wasted?
* Is the contact center overstaffed?

**Metric: Available conversation slots ratio - Online**

The percentage of the agent’s capacity which remains available (and unused) while online out of the configured logged-in capacity. Higher values for this metric can indicate of overstaffing.

**Formula**:

Cumulative Logged In & **Online** Available Capacity \\ Cumulative Logged In & **Online** Capacity

**Metric: Available conversation slots ratio**

The percentage of the agent’s capacity which remains available (and unused) while online out of the total logged-in capacity. Higher values for this metric can indicate of overstaffing.

**Formula**:

Cumulative Logged In & **Online** Available Capacity \\ Cumulative Logged In Capacity

**Analysis Questions:**

* How much time an actionable conversation waits in queue until being assigned?
* Is the contact center understaffed?

**Metric: AVG. time to assignment - actionable**

The time on average a conversation remains in queue until assigned to an agent. Measured from the time the conversation entered the queue (including: new conversation, transfer to skill/back-to-queue, fallback from unsuccessful transfer-to-agent) until the time is was assigned to an agent. Calculated only for actionable conversations.

**Metric: Median Time to assignment - actionable**

The median time a conversation remains in queue until assigned to an agent. Measured from the time the conversation entered the queue (including: new conversation, transfer to skill/back-to-queue, fallback from unsuccessful transfer-to-agent) until the time is was assigned to an agent. Calculated only for actionable conversations.

#### Smart Capacity related metrics

**Analysis Question**

* How much time does it take the agent to respond for the first time when his loaded with work?
* Is the agent correctly loaded with work?

**Metrics: AVG. Time to First Response from agent assignment - while fully loaded**

The average time taken by an agent, while being fully loaded with conversations, to respond to the first message a consumer sent. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for the first agent message sent in a new conversation and after the conversation was transferred, from the time the agent was assigned.

**Metric: Time to First Response from agent assignment - while fully loaded - 50th Percentile**

The median time taken by an agent, while being fully loaded with conversations, to respond to the first message a consumer sent. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for the first agent message sent in a new conversation and after the conversation was transferred, from the time the agent was assigned.

**Metric:Time to First Response from agent assignment - while fully loaded - 90th Percentile**

The 90th percentile of time taken by an agent, while being fully loaded with conversations, to respond to the first message a consumer sent. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for the first agent message sent in a new conversation and after the conversation was transferred, from the time the agent was assigned.

**Analysis question:**

* How much time does it take the agent to respond when he loaded with work?

**Metric: AVG. Time to Response from agent assignment - while fully loaded**

The average time taken by an agent, while being fully loaded with conversations, to respond to the consumer during the conversation. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for all the agent messages sent in a conversation excluding the first response, from the time the agent was assigned to the conversation.

**Metric: Time to Response from agent assignment while fully loaded - 50th Percentile**

The median time taken by an agent, while being fully loaded with conversations, to respond to the consumer during the conversation. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for all the agent messages sent in a conversation excluding the first response, from the time the agent was assigned to the conversation.

**Metric: Time to Response from agent assignment - while fully loaded - 90th Percentile**

The 90th percentile of time taken by an agent, while being fully loaded with conversations, to respond to the consumer during the conversation. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for all the agent messages sent in a conversation excluding the first response, from the time the agent was assigned to the conversation.

**Analysis question:**

* How much time does it take the agent to respond when he is loaded with work?

**Metric: AVG. Time to Response from agent assignment - while fully loaded**

The average time taken by an agent, while being fully loaded with conversations, to respond to the consumer during the conversation. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for all the agent messages sent in a conversation excluding the first response, from the time the agent was assigned to the conversation.

**Metric: Time to Response from agent assignment while fully loaded - 50th Percentile**

The median time taken by an agent, while being fully loaded with conversations, to respond to the consumer during the conversation. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for all the agent messages sent in a conversation excluding the first response, from the time the agent was assigned to the conversation.

**Metric: Time to Response from agent assignment - while fully loaded - 90th Percentile**

The 90th percentile of time taken by an agent, while being fully loaded with conversations, to respond to the consumer during the conversation. The agent is defined as fully loaded when there is no more free capacity for conversation to be assigned.

Measured for all the agent messages sent in a conversation excluding the first response, from the time the agent was assigned to the conversation.

**Analysis question:**

* How much time does an agent spend idle in the peak hours (when he’s loaded with work)?
* Are there underutilized agents in the shift?
* Which part of the shift is wasted?

**Metric: Ratio of Idle time while fully loaded**

The percentage of time the agent is idle - spends time in between messages or delays to respond to a consumer message (over 120 sec). Measured for an agent while being online and fully loaded with conversations.

**Analysis question:**

* How many conversations are agents resolving per hour?

**Metric: Repeat corrected CCPLH**

The number of conversations that were closed and the consumer didn’t reach back to the contact center within 1/3/7 days, per login-in hour.

Formula: CCPLH * (1-RCR)

#### How to enable

An updated copy of the Advanced Messaging Performance Dashboard may be requested from [Analytics@liveperson.com](mailto:Analytics@liveperson.com)

### FaaS - MSG Post conversation survey Invocation

<div class="tablecontainer">
<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twillio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

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

</tr>

</tbody>

</table>
</div>

Brands are able to invoke functions following a Post Messaging Survey. Invocation will be possible at the start or upon completion of a survey. Brands can react to the content of the survey in real time, like for example, to trigger alerts in a call center dashboard.

Brands can choose from an invocation point at the beginning or after the submission of a Post Messaging Survey. Along with the invocation event, a payload of data will be passed to the function allowing Brands to react in real time to the content of the survey. Brands can create functions with custom logic that address the desired reaction to the survey.

The hook in the survey to invoke the function is not expecting a response

The payloads at start and end of the survey are not similar. Completion of additional information needed in the function should be obtained with LP APIs.

**Dependencies**

Post Conversation Survey needs to be deployed

## Bug fix

### AC-Campaign - Interaction-history API (LE99600)

<div class="tablecontainer">
<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twillio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

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

<td>Yes</td>

</tr>

</tbody>

</table>
</div>

In interaction-history api the ac-client for fetching campaign gets all the relevant information of the campaign.

If however, the engagement is modified at a later date, the ac-client will identify it has some delta to fetch and when it will attempt to fetch this delta, it will catch an exception and the response of the modified field will be empty value. This bug is fixed by the adoption of new ac-campaign version.