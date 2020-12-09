---
pagename: Week of December 14th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-december-week-of-december-14th.html
isTutorial: false
isNew: false
date: '2020-12-09'

---

These release notes include new features arriving December 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Collaboration channels usage reports for messaging  
### Type: Enhancement [Analytics Builder 4.8]

**Available to all customers?** Y (Analytics Builder enabled) 
**Channels:** Web Messaging, Mobile App messaging

The Analytics Builder predefined dashboards: Agent Activity, Business Activity for Messaging and the Performance Dashboard For Messaging were enhanced to allow brands to measure the Collaboration channels ( Co Browse,Voice, video) ) usage and ROI. Brands can now track their daily usage and correlation of the feature usage vs. performance KPIs such as conversion, revenue, CSAT at brand, skill and agent level.

### Agent Activity:
In the agent Activity, the COBROWSE chat metrics were exposed: 

| Metric name  | Description | 
|--------------|-------------|
| CHAT COBROWSE DURATION (SEC) | The total duration of COBROWSE sessions for Chat | 
| NO. OF CHAT COBROWSE SESSIONS | Number of COBROWSE sessions for Chat | 

### New metrics for Messaging and StandAlone( CoBrowse for Voice)  were added:

| Metric name  | Description | 
|--------------|-------------|
| STANDALONE COBROWSE DURATION (SEC)) | The total duration of standalone collaboration sessions ( CoBrowse for Voice). | 
| NO. OF STANDALONE COBROWSE SESSIONS | Number of standalone collaboration sessions ( CoBrowse for Voice) | 
| NO. OF STANDALONE COBROWSE INTERACTIVE SESSIONS | Number of Interactive standalone collaboration sessions ( CoBrowse for Voice). An interactive session involves participation of both agent and consumer, and lasts 60 seconds or more.
| MESSAGING COLLABORATION DURATION (SEC) | The total duration of messaging collaboration sessions. | 
| NO. OF MESSAGING COLLABORATION SESSIONS | Number of collaboration sessions. Interactive and non interactive sessions. | 
| NO. OF MESSAGING COLLABORATION INTERACTIVE SESSIONS | Number of Interactive messaging collaboration sessions. An interactive session involves participation of both agent and consumer, and lasts 60 seconds or more |
| COLLABORATION DURATION (SEC) | The Total Collaboration Duration for all channels: Messaging, Chat and standalone. |
| NO. OF COLLABORATION SESSIONS | The Total NO. of Collaboration sessions for all channels: Messaging, Chat and standalone. |
| NO. OF COLLABORATION INTERACTIVE SESSIONS | The Total NO. of Interactive Collaboration sessions for all channels: Messaging, Chat and standalone
| COLLABORATION END REASON | The reason for the collaboration session end: SERVER, VISITOR, AGENT, TIMEOUT |
| CHANNEL| Channel can be: Messaging, Chat, Standalone - mainly for CoBrowse for voice.

### Business Activity for Messaging, Performance for Messaging:
#### New Metrics:

| Metric name  | Description | 
|--------------|-------------|
| MESSAGING COLLABORATION DURATION (SEC) | The total duration of messaging collaboration sessions.|
| NO. OF MESSAGING COLLABORATION SESSIONS | Number of messaging collaboration sessions for all session types.|
| NO. OF MESSAGING COLLABORATION INTERACTIVE SESSIONS | Number of Interactive messaging collaboration sessions.An interactive session involves participation of both agent and consumer, and lasts 60 seconds or more

#### New attributes

| Attribute name | Description | 
|--------------|-------------|
| COLLABORATION SESSION TYPE | Collaboration Session Types: Voice,Video, Co Browse |
| COLLABORATION END REASON | The reason for the collaboration session end: SERVER, VISITOR, AGENT, TIMEOUT|

## CCPLH and CCPOH added out of the box to the Performance messaging dashboard
### Type: Enhancement [Analytics Builder 4.8]

The ‘Performance Dashboard for Messaging’ was enhanced to include the CCPLH and CCPOH metrics for measuring Human Agent Efficiency.
The metrics are calculated based on Closed Conversation divided by Login\Online.

CCPLH =  Closed Conversations / Login Hours 
CCPOH  = Closed Conversations / Online Hours 

The metrics added by default to the Brand and Agent summary pages in a dedicated area to include data for Human Agents only and for non managers agents:
Login Hours  should only be captured for human non-managers.  Otherwise CCPLH will be artificially low.  
Online Hours should also be captured for human non-managers only.
Avg. Agent Load is captured for non-managers, and it includes a filter to only include Human agents.  This is because bots have a default Max Capacity setting of 999, which artificially lowers the Agent Load

**Available to all customers?** Y (Analytics Builder enabled) 
**Channels:** Web Messaging, Mobile App messaging

![](img/RN-4.8-1.png)
![](img/RN-4.8-2.png)

## Agent level funnel( Opened, Submitted, Closed) for Agent survey in ‘Survey Dashboard for Messaging
### Type: Enhancement [Analytics Builder 4.8]

**Available to all customers?** Y (Analytics Builder enabled) 
**Channels:** all (not including chat)

The ‘Survey Dashboard for Messaging’ was enhanced to include the Agent funnel Analysis.
Till now funnel Analysis was available only for the Brands, with this enhancement, an Agent performance in regards to Agent Surveys submission can be analyzed as well.

## Adding Group Filter in ‘Business Dashboard for Messaging’.
### Type: Enhancement [Analytics Builder 4.8]

**Available to all customers?** Y (Analytics Builder enabled) 
**Channels:** all (not including chat)

The ‘Business Dashboard for Messaging’ was enhanced to include a Group filter on the metrics in the ‘Messaging Conversion - Daily' Cube to allow brands to measure conversions by group: 
Total Conversions after Engagement 
Total Direct Revenue after Engagement
Other metrics in the cube designed for measuring conversions on  scenarios where an agent is not involved will not be filtered by group, I. e. Self Service & Control group metrics.

## REQUESTED CHATS' KPI added to Business Activity predefined grids (Monthly, weekly)
### Type: Enhancement [Analytics Builder 4.8]

**Available to all customers?** Y (Analytics Builder enabled) 

The ‘Business Dashboard for Chat’ grids were enhanced to include a the ‘'REQUESTED CHATS' KPI (Monthly, weekly).
