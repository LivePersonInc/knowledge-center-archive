---
pagename: Week of July 13th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-july-week-of-july-13th.html
isTutorial: false
isNew: false
date: '2020-07-01'

---

These release notes include new features arriving July 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Manager Workspace] Accessibility -  A11Y Project 
### Type: New functionality (Manager Workspace 1.10)

LivePerson is working on designing the platform in order to be able to make the brand-facing products accessible according to WCAG 2.1 AA in 2020. This is an ongoing process which will be completed during Q3 and will affect the login pages, the chat workspace, the enhanced Agent Workspace, Manager Workspace and more. Within this version we added the a11y capabilities to various areas within the Conversational Cloud.

## [Manager Workspace] Groups filter - support groups hierarchy
### Type: Enhancement (Manager Workspace 1.10)

The global group filter available in the top right corner of the workspace has been modified to support:
1.Visualization of the groups hierarchy in your account. The groups list, which was displayed as a flat list up until today, will now be viewed as a hierarchy tree of the groups. As before, managers will only be able to view the groups they manage , including their sub-groups.
2. Once a group is selected, its sub-groups will be auto-selected as well. Users will be able to select only the parent group without its sub-groups by clicking on the parent group name rather than the checkbox.

![](img/week-of-july-13th-1.png)

## [Manager Workspace] Displaying consumer intents in Conversation widget
### Type: Enhancement (Manager Workspace 1.10)

For accounts using the Intent Analyzer tool, a new Intents column will now become available in the Conversation widget. The column holds the list of all unique intents detected in the conversations in real time. It enables managers to view consumer' intents in real time and easily detect conversations on specific topics without having to read the conversation transcript. The column is configurable, allowing brands to disable it from the view if they wish, by turning it off via the configuration window. The intent detection is based on machine learning classifications. Due to this, false negative and false positive intent detections are expected. In these cases, it is recommended to improve the quality of the intents via the Intent Builder.

{: .notice}  
**Please note:** This feature has a backend dependency. Please contact your LivePerson representative for more information. 

![](img/week-of-july-13th-2.png)

## [Manager Workspace] Conversation Rollover - All Conversations
### Type: Enhancement (Manager Workspace 1.10)

The Manager Workspace for Conversation Handler accounts is now configured to have visibility to all of the conversations that are being handled by the account.  All active conversations will appear in the Conversation widget so that the Agent Manager will be able to see all of the conversations from their agents, regardless of the brand. The Conversation widget also has a new column called “Brand Name”, which currently displays the Account ID of the associated brand in which the conversation is ongoing with.  

![](img/week-of-july-13th-3.png)

## [Enhanced Agent Workspace] Idle conversation status tooltip translation fix 
### Type: Bug fix (NAW 1.15)

A bug has been discovered within the enhanced Agent Workspace with the idle conversation status translations. This bug has been fixed and the idle conversation status tooltip translations are now correct for all supported languages.

## [Enhanced Agent Workspace] Add missing translations
### Type: Bug fix (NAW 1.15)

Some missing translations have been discovered within the enhanced Agent Workspace for the following scenarios:
1. Transferring a messaging conversation when there are no online agents in the selected skill
2. Sending a private message.

These missing translations have been added and are now correct for all supported languages.

