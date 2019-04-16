---
pagename: Week of April 15th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: April
permalink: release-notes-2019-april-week-of-april-15th.html
isTutorial: false
isNew: false
date: 2019-04-10 11:31:58 +0000

---
These release notes include new features arriving to LiveEngage during April 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionalities

### Automation tab

The new Automation Module has been added to LiveEngage.

There are three items under this tab:

1. **Overview of bots & AI in LivePerson:** This page is informative only and will be viewable by all users.
2. **Conversation Builder (build and manage bots)**: The Conversation Builder will be embedded directly into this tab, enabling users to access bot building directly from the LiveEngage UI.
   **Note:** This tab will be available to accounts that have the Conversation Builder enabled.
3. **Bot Connectors**: This area will display all the 3rd party bots created and on-boarded into the account from Dialogflow or Watson and enable brands to connect to additional instances quickly and easily. Additional AI vendors will be added to this offering in the future (view[ documentation](https://developers.liveperson.com/bot-connectors-getting-started.html) on the Developers Community).
   **Note:** This tab will be available to accounts that have the Bot Connectors enabled. Contact your account team to get your account enabled.

![](/img/week-of-april-15th-2.png)

### About permissions:

New items added to ‘profiles’ to enable brands to control who can view and utilize these tools:

* Automation area (on/off) - enables the entire automation tab for this profile
* Edit Bot Integrations (on/off) - enables viewing and editing of bot connectors. Note: the account must also be provisioned for this capability as part of the Early Adopters program.
* Conversation Builder permissions (coming soon) - Note: the Conversation Builder will be added to ‘permissions’ in May. Until that date, it will be available to all roles and users of accounts with the Conversation Builder enabled.

## Bug fixes

### \[WhatsApp\] Connector sends repeated irrelevant MTM (CX-146)

When a consumer starts a conversation with an audio message after 24 hours of it being initiated, the automated MTM message is sent along with the agent reply message to the consumer every time. This issue is now resolved.