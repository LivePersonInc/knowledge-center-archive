---
pagename: Week of May 31st
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-may-week-of-may-31st.html
isTutorial: false
isNew: false
date: '2021-05-26'

---

These release notes include new features arriving May 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Agent App Twitter Support
### Type: Enhancement [Agent App Android v2.6.9]

Agent App v2.6.9 introduces full Twitter support, a new UI for the conversation page, allows agents to edit a consumer’s name, and allows agents to send files.
To enable: search for LivePerson Agent App on the Google Play Store or Apple App Store and download the App.
[Agent App on Apple App Store](https://apps.apple.com/us/app/liveperson-agent-app/id1533849048)
[Agent App on Google Play Store](https://play.google.com/store/apps/details?id=com.liveperson.LiveEngageMessaging)

## Bot Connectors - Migrating Redis Conversation Data (INT-1512)
### Type: Change [Bot Connectors v2.31]

Currently the conversation state is stored as part of the Bull job data in Redis. To improve performance when operating on conversation data, Third Party Bots will store the conversations as separate hashmap entries directly in Redis in the future. This release provides the necessary changes for this.
This change will go through a migration phase. The Automation Integration team will take the necessary steps to enable this feature and gradually migrate the existing conversation data without interruptions for the customers.

## Handle PVA platform errors gracefully (INT-1603)
### Type: Bug fix[Bot Connectors v2.31]

The Microsoft Power Virtual Agents platform sends error messages under certain circumstances that can’t be rendered in UMS. Since this normally would error escalate the conversation with no further indication, Third Party Bots will add the the error details PVA is sending to the conversation error in the bot dashboard.

## Write valid bot agent attributes for Dialogflow CX (INT-1687)
### Type: Bug fix[Bot Connectors v2.31]

For Dialogflow CX Bots the Agent Attributes (Bot Technology) have not been written correctly in the previous release. This had no impact on the customer but limited our visibility on business metrics for this vendor type. The release now fixes the issue for new or updated bots by setting the technology field to “Other” and the technology_name field to “DialogFlow CX”










