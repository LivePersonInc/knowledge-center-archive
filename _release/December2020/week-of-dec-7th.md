---
pagename: Week of December 7th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-december-week-of-december-7th.html
isTutorial: false
isNew: false
date: '2020-12-02'

---

These release notes include new features arriving December 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Conversation Builder Dialog Templates
### Type: Enhancement 

Channel
This feature is available for all channels supported by the Conversational Cloud platform.

In this release, Conversation Builder introduces Dialog Templates. A dialog template is a set of resources that:
- Support a conversational flow
- Are defined as a unit for the purpose of import by others

When a bot developer imports a single Dialog Template, the entire unit of working functionality is imported. This includes not only the main dialog that supports the flow, but also all other necessary resources: other dialogs, domains, integrations, and so on. 

Once a bot developer imports a Dialog Template into a destination bot, it becomes a normal dialog within the bot, and the dialog functions as if it had been created from scratch.
Dialog templates are a great way to:
* Formalize the import process for a dialog
* Ensure that bot developers import all required components supporting a dialog

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CB_release_notes_dec7_1.png)

## Bot Analytics- Metrics and trend charts on the main dashboard
### Enhancement 

This feature is available for all channels supported by the Conversational Cloud platform.

Bot Analytics is introducing organization-level metrics and trend charts on its main dashboard.
The organization-level metrics and trend charts are based on the data for all your bots regardless of environment (Demo, Production, and undeployed). Use them to gain a quick understanding of overall performance.

It is important to note:
* If you have bots that are hosted in both the LivePerson cloud and the Amazon Web Services (AWS) cloud, you’ll only see the data for the bots within one cloud at a time, namely, the one you’re logged into.
* You can use the date filter to show the data for any 7-day date range within the last 13 months. By default, you are shown the data for the most recent 7 days. If you drill down to a bot dashboard, you can use the date filter to show the data for any 60-day date range within the last 13 months. By default, the date range that’s in use on the main dashboard is applied.
* “Escalations” are now called “Transfers.” As in the previous release, these can be intended (implemented by design) or unintended (performed due to a consumer’s request or an automatic escalation by the system).

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/ba_dashboard_release_notes_dec7.png)

