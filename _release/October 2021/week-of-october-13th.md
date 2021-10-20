---
pagename: Week of October 13th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3:
permalink: release-notes-2021-october-week-of-october-13th.html
isTutorial: false
isNew: false
date: '2021-10-13'

---

These release notes include new features arriving October 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Localization - Phase 1

### Type: Enhancement [Analytics Builder 4.12]

**Channels:** All

#### Availability: All brands with enablement Analytics Builder

### Description

Today, Analytics builder translation is limited to the analytics builder tool’s texting only ( i.e “Shared Reports”, “My reports”, “Export” etc), while the names of the metrics, attributes, descriptions and datasets are not translated.

With this release, the full translation of the following languages is implemented:
* Japanese
* Portuguese (Brazil)
* Spanish (Latin) 

Additional languages are planned to be supported within the next releases. 

### Enablement
The configuration of an account’s Conversational Cloud UI language setting is currently performed in the Users Model footnotes.

![](img/oct-13-rn-1.png)

A user can override his/her language from ״my details״ page, which is accessed through the user menu, as shown below:

![](img/oct-13-rn-2.png)

![](img/oct-13-rn-3.png)

## New Rollover Dashboard 

### Type: Enhancement [Analytics Builder 4.12]

**Channels:** All

#### Availability: All brands with enablement Analytics Builder

### Description

Rollover feature enables a configured “Handler” (rollover) account to answer conversations on behalf of other Conversational Cloud accounts.  
 
Today’s reporting solution most often only looks at the activity on the individual account itself. 
A new dashboard is now available for the Rollover accounts under:

Shared reports>LE predefined dashboard>Rollover dashboard

Exposing detailed visualization into all conversations the Rollover account Handled, broken by each Owner account to monitor the answering volume.  

The report contains three sections:

1. **Summary** - a high level summary of the rollover account performance

![](img/oct-13-rn-4.png)

2. **Details by brand** - a brand level grid to display the activity by brand.

![](img/oct-13-rn-5.png)

3. **Details by agent** - agent level grids to track the performance of specific agents. 

![](img/oct-13-rn-6.png)

## New Agent Operations Dashboard

### Type: Enhancement [Analytics Builder 4.12]

**Channels:** All

#### Availability: All brands with enablement Analytics Builder

### Description

A new separate report will be added to the Predefined Dashboards focused on agent performance. The report will contain the following information:

**HIGH LEVEL OPERATIONS**
A high level trending view of the group(s) assigned to an agent manager focused on the key agent level metrics.  An agent manager should start with these to determine if the metrics are trending in the right direction and decide on areas of focus for coaching.

**AGENT OPERATIONS**
Once an area of focus is decided upon, the agent manager should move to the AGENT OPERATIONS tab GRID VIEW.  Here, they can see a view of all of their assigned agents for a filtered time period.  A manager can right click on a column and sort metrics ascending or descending and look for agents that may be having an effect on the specific metric in question.

By clicking on the agent name in the GRID VIEW, it will automatically take the manager to the AGENT DETAIL GRAPHS tabs and filter for the chosen agent.  This will display all of the key metrics for the agent over the selected time frame.  You should use a time period of 4-8 weeks so you can see how the agents' metrics are trending over time.

**CSAT SURVEY TAKE RATE**
This tab allows an agent manager to compare the agents CSAT Score to the percentage of surveys completed by customers.  A high CSAT Score with a low Survey Take Rate may indicate an agent is picking and choosing which conversations go to a survey.  If this is the case,the manager would want to look for higher than normal transfer rates or system close rates.

**AWAY ANALYSIS tab**
This tab helps a manager understand how an agent is spending their time in the AWAY states.  This works best if a brand is using Custom Awaya States in the Conversational Cloud.  

**AGENT AWAY ANALYSIS grid**
This grid is sortable by the metrics.  You can click on a particular agent and the graphs on the right side of the screen will filter for that agent and show the Online/Away/Back Soon performance over time as well as a pie chart with the Away Reason breakdown to determine if the agent is using an away state properly and how they are spending their time while logged into the conversational cloud.

**AGENT TRANSFER ANALYSIS**
This report displays a grid on the left side that is sortable by the transfer metrics. By choosing an agent in this grid, the report on the right is filtered for that agent and that time period and will display the Date, the Skill the conversation was in, and the skill the agent transferred the conversation to.

It also displays the Conversation ID, so the transcript can be reviewed in the Conversational Cloud or the MCS Toolkit to determine if the transfer was appropriate. It also shows the agent segments.  Most of the time, this will be at one, however if you see a number more than 1, it means the agent transferred a conversation to a skill or Back to Queue, and it was assigned back to the same agent.

**REPEAT CONTACT RATE ANALYSIS**
This report displays a grid on the left side that is sortable by the Repeat Contact metrics. By choosing an agent in this grid, the report on the right is filtered for that agent and that time period and will display the Date, the Close Reason, and the Repeat Contact Rate bucket the conversation repeated in will be assigned a metric of 100%.  It also displays the Conversation ID, so the transcript can be reviewed in the Conversational Cloud to determine why the conversation may have repeated.  It also displays the CSAT score to help determine why the conversation may have been repeated.

**DETAILED DATA GRID**
The DETAILED DATA GRID repeats many of the metrics seen in the other tabs in a grid format, along with some additional metrics. The manager also has an AWAY DETAILS grid to display time spent in Custom Away States if the manager prefers to see the data in this format.


## SLA reports

### Type: Enhancement [Analytics Builder 4.12]

**Channels:** All

#### Availability: All brands with enablement Analytics Builder

### Description
A new report  “SLA REPORT” is now available under the “Messaging Performance Dashboard”. (Shared reports>LE predefined dashboard>Performance Dashboard for Messaging>Brand level) 

The report allows brands to view the number of agent responses and the percentage of agent responses which met the advertised SLA. It contains two skill level daily grids: 

* First message SLA Grid -  aimed to analyze the SLA of the first response to the customer. 
* Other messages SLA Grid - aimed to analyze the SLA of all responses, excluding the first one. 

Each one of the Grids holds the following metrics, which were computed for different pre-defined SLA buckets:

* The total number of agent responses answered within X minutes. 
* The percentage of agent responses answered within X minutes out of all agent responses.

The available pre-defined SLA’s are:
* Immediate SLAs:
* 5 minutes 
* 10 minutes 
 
Non-immediate SLAs:
* 30 minutes
* 1 hour
* 3 hours
* 1  day
* Above 1 day

For the “Other messages Grid”, the counter of the number of responses is raised per the segment average. I.e, an average of the agent response time within a segment (except for the first message) is attributed once to the relevant time bucket . For example, in case the average of all agent responses within the skill segment is 4 minutes,  the 5 minutes SLA bucket will rise by 1

![](img/oct-13-rn-7.png) 

## Change Analytics Builder default prompt to “last 10 days”

### Type: Enhancement [Analytics Builder 4.12]

**Channels:** All

#### Availability: All brands with enablement Analytics Builder

### Description

As of today, the Analytics Builder default prompt is set to “Last 60 days”, while the dashboard itself shows the last week's information.

Starting this version, the default prompt will be “Last 10 days”. There is always an option to change it to any other option before running the Dossier.


## Hide Agent Details from Agent Manager (Italy)

### Type: Enhancement [Analytics Builder 4.12]

**Channels:** All

#### Availability: All brands with enablement Analytics Builder

### Description

Regulations in some countries restrict managers from viewing the performance of a single user. This enhancement enables you to mask all agents’ personal information. 


## Adding "Deleted Agent Indicator" to Performance Dashboard for Messaging

### Type: Enhancement [Analytics Builder 4.12]

**Channels:** All

#### Availability: All brands with enablement Analytics Builder

### Description

Allow brands to filter deleted agents from the Analytics Builder predefined dashboards.  This change will allow brands, who often delete agents, to better understand their team performance by removing the agents who are no longer part of the team. This change will not affect the existing default data and visualizations. 


## 'Assigned Conversations' works properly in Business Dashboard for Messaging

### Type: Fix [Analytics Builder 4.12]

**Channels:** All

#### Availability: All brands with enablement Analytics Builder

### Description
When adding the metric “ASSIGNED CONVERSATIONS” to the different grids under the “Business activity dashboard”, the metric value always resulted in 0. This issue is now resolved. 


## Post conversation survey for Twitter

### Type: New Feature [Social Messaging]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook</th>

<th>Twitter</th>

<th>ABC</th>

<th>Line</th>

<th>RCS Business Messaging</th>

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

#### Availability: All brands.

### Description
Social Messaging for Twitter now supports post-conversation survey bots via the direct channel. A post-conversation survey bot is a bot that is triggered at the end of a conversation with an agent or custom bot. It can be used to obtain feedback from the consumer on the consumer's experience with a brand.

### Enablement

[Conversation Builder - Post-Conversation Survey Bots](https://developers.liveperson.com/conversation-builder-bots-post-conversation-survey-bots.html)

#### Dependencies
Conversation Builder

#### Limitations
Open Questions only

![](img/week-of-october-13th-3.png)

## Secure forms on Twitter

### Type: New Feature [Social Messaging]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook</th>

<th>Twitter</th>

<th>ABC</th>

<th>Line</th>

<th>RCS Business Messaging</th>

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

#### Availability: All brands.

### Description
Social Messaging for Twitter now supports secure forms via the direct channel. The secure form dedicates a "secure tunnel" within the Twitter conversation for exchanging Personal Identifiable Information (PII), Cardholder Data (CHD), and other sensitive identity validation data like answers to verification questions and PINs. Agents continue to operate in the same Agent Workspace environment as data is sent from the visitor to the agent in a safe, PCI compliant interaction.

#### Dependencies
Conversation Builder

#### Limitations
Open Questions only

![](img/week-of-october-13th-1.png)

## Availability of Engagement Attributes for Public Twitter

### Type: Enhancement [Social Messaging]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook</th>

<th>Twitter</th>

<th>ABC</th>

<th>Line</th>

<th>RCS Business Messaging</th>

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

#### Availability: All brands.

### Description
Public Twitter & Social Monitoring can now take advantage of Campaigns for Messaging. 

### Enablement
[Campaigns for Messaging - Twitter Public & Social Monitoring](https://docs.google.com/document/d/1CrMOi6exLPjXYSWVJvkvnwPNsUQaCUKsmP3OILAZTk8/edit#heading=h.cldpqf8fys3zhtml)

#### Dependencies
* Social Monitoring Rules - Configured by R&D
* Social Monitoring App Installation - Configured by R&D

#### Limitations
* If the consumer is eligible for more than one engagement the engagement will be picked at random.
* It is considered best practice to carefully create engagements which do not conflict.

![](img/week-of-october-13th-2.png)

## Rename Country labels into Country/Region

### Type: Enhancement [Old Agent Workspace]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>SMS</th>

<th>Facebook</th>

<th>ABC</th>

<th>Line</th>

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

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

**Availability:** All brands.

### Description
To ensure that labels are neutral in all aspects of system operation, we have added the ability to change the “Country” column’s title to “Country/Region”. This feature can be configured by a brand’s account team and will take effect for all agents once turned on and the agents log out and log back into the Agent Workspace.
