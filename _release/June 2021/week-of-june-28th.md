---
pagename: Week of June 28th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-june-week-of-june-28th.html
isTutorial: false
isNew: false
date: '2021-06-24'

---

These release notes include new features arriving June 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Transfer analysis in the Performance Messaging Dashboard.
### Type: Enhancement (Analytics Builder 4.11)

Available to all customers? Y (Analytics Builder enabled) 

The ‘Performance Dashboard for Messaging’ was enhanced to include skill and Agent transfer analysis.
Agent and skill segments reporting was enhanced to include the skill destination in transfer, this will allow analyzing the transfer conversation volume alongside performance over transferred conversation( agent and skill level), metrics such as interactiveness, abandonments and wait times.
A new attribute ‘TRANSFER TO SKILL’ was added to the dashboard.

### Brand Level Data: Skill Segments Data
![](img/AB4.11-RN-1.png)

#### Brand Level Data: Skill Transfer Analysis

![](img/AB4.11-RN-2.png)

#### Agent Level Data: Agent Level Data

![](img/AB4.11-RN-3.png)
 
## 'Incremental Sales Report’ as part of the Business Dashboard for Messaging
### Type: Enhancement (Analytics Builder 4.11)

Channel: All messaging channels
Type: Enhancement
Available to all customers? Y (Analytics Builder enabled) 

The ‘Business Dashboard for Messaging’ was enhanced to include a 2nd Chapter with the ‘Incremental Sales Report’.
The report provides a simple view for sales-based clients to quantify the value of messaging on their site.
Provides account-wide KPIs including:
* Incremental Revenue
* Incremental Conversion Rate
* In Session and Cross-Session Conversions and Revenue
* ROI for the entirety of the messaging sales program (depending on cost structure) - this will determine how the daily ROI calculation is formulated, if at all
* Conversion tracking properly set up on a website

![](img/AB4.11-RN-4.png)

## Engagement ID enabling’ as part of the Messaging Dashboards
### Type: Enhancement (Analytics Builder 4.11)

Channel: All messaging channels
Available to all customers? (Analytics Builder enabled) 

The current Engagement_Name attribute is designed such that it shows a HASHED ID for the engagement and it was enhanced to show the actual ID for an engagement. 
A new form was added to the Engagemant_Name attribute that would show the actual engagement ID in all Messaging dashboards.

![](img/AB4.11-RN-5.png)

## "Assigned Conversations" not working properly in Business Dashboard for Messaging 
### Type: Bug fix (Analytics Builder 4.11)

Available to all customers? Y

Change the calculation of the derived metric "ASSIGNED CONVERSATIONS" to include: CONSUMER DEVICE at its granularity in Business Dashboard for Messaging. This is 
enabled OOTB

## Bot Performance Dashboard not loading data for Agent Managers 
### Type: Bug fix (Analytics Builder 4.11)

Available to all customers? Y

Bot Performance Dashboard not loading data for Agent Managers but only for Administrators or LPA users. This is 
enabled OOTB.

