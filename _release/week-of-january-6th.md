---
pagename: Week of January 6th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-january-week-of-january-6th.html
isTutorial: false
isNew: false
date: '2019-12-30'

---

These release notes include new features arriving to LiveEngage during January 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Ring for All 
### Type: New functionality (Agent Matching 4.1.0)

We’ve added a feature flag (disabled by default) that will enable a conversation alert to be sent to all available agents of the conversation’s skill at once for a given account.

{: .notice} **Please note:** This feature requires enablement. For more information please contact your LivePerson representative. 

## Sending messages to agents fails if any agent is offline (AE-6874) 
### Type: Bug fix (Agent Matching 4.1.0)

When an agent has logged out of the platform and has incoming conversations, other agents for the same brand may be unable to accept the conversations as the system doesn’t recognize that the first agent is offline. This issue has been resolved. 

## Assigned agent not updated when agent changes role from reader to assigned agent (AE-7041)  
### Type: Bug fix (Agent Matching 4.1.0)

An agent joins a conversation as a reader. When the agent changes his role on the conversation from reader to assigned agent and the conversation closes, the conversation still takes up a slot from the agent’s capacity. This issue has been resolved. 

## Agent status update - improved user experience with loader 
### Type: New functionality (UI 11.4)

LiveEngage has been improved with a new user experience when a logged in user changes their status (to Online/Away/Back soon). Up until now, whenever a user changed their status, the platform automatically changed the status on the UI, without waiting for an approval from the server that this operation was completed successfully. This meant that in some cases, when the operation failed the UI displayed the new status although in reality the actual status was different. This caused issues when agents thought they updated their status to Online, but in fact they remained Away and did not get any incoming conversations, and vice versa.

The experience is now improved, and whenever a user changes their status in the system LiveEngage will display a loader at the top of the agent status icon and the status indicator on the agent avatar will remain grey until the status has been updated in the server. Only when the status is updated on the server will the platform display the new status that has been set to the user and the status indicator color will change according to the updated status. If the operation failed, the user will be informed with an appropriate error message.

Loader on top of the user icon with the grey status indicator:

![](img/week-of-january-6th-1.png)

## Quick launch menu redesign (beautification)
### Type: Enhancement (UI 11.4)

The Quick launch menu features a new design and improved UX based on the Beautification program and aligned to LivePerson’s high delivery standards.

It includes:
a) New look and feel in both (dark and light) themes, with a basic view of up to 9 apps with a “show more” button to expand the menu to show ALL apps
b) Newly designed icons for all applications in the menu

![](img/week-of-january-6th-2.png)

![](img/week-of-january-6th-3.png)

## [Connection panel] Allow customers to specify the severity of support cases
### Type: Enhancement (UI 11.4)

A new field has been added to the support case creation form in the connection panel, allowing users specify the severity of a support inquiry. Currently, this field is available to several customers which were part of the pilot for this functionality. From now on, the field should be available to all customers.

The customer can choose between the following severity ratings:
* High: service down, blocker, security breach, data loss, recurring bug
* Medium: medium degradation of service, intermittent, latency
* Low: visual defect, workaround available, reporting, Beta, RCA, a single occurrence

This field will be used by the Support team for prioritizing the list of open cases to be handled. 

![](img/week-of-january-6th-4.png)
