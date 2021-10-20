---
pagename: Week of October 20th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3:
permalink: release-notes-2021-october-week-of-october-20th.html
isTutorial: false
isNew: false
date: '2021-10-20'

---

These release notes include new features arriving October 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Agents Performance Widget - Transfer Rate Metric

### Type: Enhancement [Manager Workspace]

#### Description
The Manager Workspace agent widget was enhanced with a new metric which is now available to agent managers: Transfer Rate.
The transfer rate metric represents the number of transfer conversations (to agent or skill) out of the total concluded conversations. Concluded = all transfer types (including B2Q and Takeover) + closed.

#### Availability
Brands using the manager workspace.

#### Enablement
The metrics are ‘on’ by default and will be automatically added to the widget. If the user wishes to remove/disable the feature, they can do so from the Widgets Personalization area.

#### Limitations
The column is not scrollable or filterable in this release. 

![](img/week-of-october-20th-1.png)

## Activity Summary Widget - Resolution Time Metric

### Type: Enhancement [Manager Workspace]

#### Description
The Manager Workspace queue summary widget has a new additional metric which is now available to agent managers: Resolution Time.
The metric represents the average handling time of **closed** conversations in the selected timeframe. Handling time is counted for assigned conversations from the conversation start time.

#### Availability
Brands using the manager workspace.

#### Enablement
The metrics are ‘on’ by default and will be automatically added to the widget. If the user wishes to remove/disable this feature, they can do so from the Widgets Personalization area.

#### Limitations
The column is not scrollable or filterable in this release. 

![](img/week-of-october-20th-2.png)

## Conversations Widget - Closed By Metric

### Type: Enhancement [Manager Workspace]

#### Description
The Manager Workspace conversations widget was extended with a new metric which is now available for closed conversations: Closed by metric.
The metric indicates by whom/what each conversation was closed: Consumer, Agent, Timeout, System.

#### Availability
Brands using the manager workspace.

#### Enablement
The metric is ‘on’ by default and will be automatically added to the widget. If the user wishes to remove/disable the metric, they can do so from the Widgets Personalization area.

#### Limitations
The column is not scrollable or filterable in this version.

![](img/week-of-october-20th-3.png)

## Conversations/Bots/Skills Widgets - Select number of items in page

### Type: Enhancement [Manager Workspace]

#### Description
In order to align with the ‘Agent Performance’ widget, the Manager Workspace conversations, skills and bot performance widgets were extended with the ability to decide how many conversations will appear in each page of the widget: 10, 25 or 50 conversations per page.

#### Availability
Brands using the manager workspace.

#### Enablement
This functionality is on by default and cannot be removed.

#### Limitations
The column is not scrollable or filterable in this version.

![](img/week-of-october-20th-4.png)
![](img/week-of-october-20th-5.png)

## Queue Summary Widget - Skills List Update

### Type: Enhancement [Manager Workspace]

#### Description
Until today, the Queue Summary Widget showed all skills, even if there were no agents connected to it and 0 conversations in queue. In addition, there was no paging in this widget, but rather a long scrollable list. 
The Manager Workspace queue summary widget will now present only skills with the following conditions:
* There are existing conversations in the queue (queue size>0)
    **OR**
* There are agents assigned to the skills that are logged in
In addition to the above, the widget will now include paging.

#### Availability
Brands using the manager workspace.

#### Enablement
This functionality is on by default and cannot be removed.

![](img/week-of-october-20th-6.png)

## Cosmetic Updates

### Type: Enhancement [Manager Workspace]

#### Description
The Manager Workspace activity summary widget now supports another metric and therefore when choosing to enable all metrics, the structure of the tiles is reactive to the number of metrics.
In addition, some of the icons were updated with new ones, and their location has moved next to the metric name.

#### Availability
Brands using the manager workspace.

![](img/week-of-october-20th-7.png)

## Status Duration Alert Update

### Type: Fix [Manager Workspace]

#### Description
Fixed an issue where if a client had Away Reasons configured on their account - the status duration alert wasn’t working as intended in some cases. This issue is now resolved. 

#### Availability
Brands using the manager workspace.

