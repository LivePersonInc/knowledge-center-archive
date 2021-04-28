---
pagename: Week of May 3rd
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-may-week-of-may-3rd.html
isTutorial: false
isNew: false
date: '2021-03-31'

---

These release notes include new features arriving May 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Analytics Builder 4.10]   Bot Performance Dashboard Phase 2
### Type: Enhancement

Channel: All messaging channels
Available to all customers? Y (Analytics Builder enabled) 

The new Bot Performance Dashboard will be enhanced to allow brands to review and analyze their Bot Performance in messaging over time for bots designed and managed by Conversation Builder.
![](img/RN-May3rd-1.png)

## [Analytics Builder]  Transfer analysis in the Performance Messaging Dashboard.
### Type: Enhancement
Channel: All messaging channels
Available to all customers? Y (Analytics Builder enabled) 

The ‘Performance Dashboard for Messaging’ was enhanced to include skill and Agent transfer analysis.
Agent and skill segments reporting was enhanced to include the skill destination in transfer, this will allow to analyze the transfer conversation volume alongside performance over transferred conversation( agent and skill level), metrics such as interactiveness, abandonments and wait times.
New attributes ‘TRANSFER TO SKILL (AGENT LEVEL)’ and ‘TRANSFER TO SKILL (BRAND LEVEL)’ were added to the dashboard.

#### Brand Level Data: Skill Segments Data
![](img/RN-May3rd-2.png)

#### Brand Level Data: Skill Transfer Analysis

![](img/RN-May3rd-3.png)

#### Agent Level Data :Agent Level Data

![](img/RN-May3rd-4.png)

## [Analytics Builder]  Expose key metrics Numerator and Nominator to the hidden field 
### Type: Enhancement

Available to all customers? Y (Analytics Builder enabled) 
Channel: All messaging channels

The Performance Dashboard for Messaging was enhanced to expose the numerator and nominator of wait time fields, so brands can calculate the wait time in a more accurate way,  knowing the numerator and denominators and not only the final average results.

The metrics will be exposed as hidden fields, which LivePerson CSMs or brands with customization features can unhide and use  in the dashboard.
Exposed metrics:
For metric AVG. WAIT TIME FOR FIRST HUMAN AGENT RESPONSE ( = FIRST HUMAN MESSAGE DUR DAYS/ TOTAL NO OF FIRST HUMAN MESSAGE DUR DAYS)
For metric AVG. TIME TO FIRST RESPONSE FROM AGENT ASSIGNMENT ( -  NullToZero(([FIRST RESPONSE FROM AGENT ASSIGNMENT] / [TOTAL NO OF FIRST RESPONSE FROM AGENT ASSIGNMENT]))
 
## [Analytics Builder]  Customer Type and Customer Status attributes were added to the Messaging Performance Dashboard.
### Type: Enhancement
Available to all customers? Y (Analytics Builder enabled) 
Channel: All messaging channels

The Performance Dashboard for Messaging was enhanced to include Customer type and Customer status attributes reported by the Brand in Customer Info Engagement attributes.
The new attributes will allow ‘Closed Conversations’, ‘RCR’ as well as other metrics from Agent Messaging Activity, Consumer Messaging Activity, Agent Segment Conversation, Skill Segment Conversation and Repeat contact rate data sets by the new attributes.

![](img/RN-May3rd-5.png)
![](img/RN-May3rd-6.png)

## [Analytics Builder]  Reporting on Agents unassigned conversations in Agent Segments
### Type: Enhancement
Available to all customers? Y (Analytics Builder enabled) 
Channel: All messaging channels

The Performance Dashboard for Messaging was enhanced to include a new end reason for Agents unassigned conversations.
With the new end reason a brand can analyze the number of conversions where agent was unassigned, per Agent and hour.


