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
date: 2019-04-10 14:31:58 +0300
published: false

---
These release notes include new features arriving to LiveEngage during April 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important} The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Application infrastructure

To allow for future development and align with industry standards, we enhanced our UI application infrastructure and frameworks.

### Knowledge Center button

LivePerson’s new knowledge base can now be accessed from a link in the Connection Area as well as a button in the LiveEngage UI. The Knowledge Center can be reached by clicking the link in the connection panel or selecting the question mark icon in the top right corner and clicking ‘Knowledge Center.’

**![](https://lh5.googleusercontent.com/NhE2df0pWyECmUDwZFKN8sCOvj6NXxnLOt-1_YYvTQfpQ3ZJo2UoUBvGmtngV2S72VPnex9yj0PQISfD8wXTDRMgAciVrn1yTj6XaIZ0-ezFslYlkKnr3OL8ub0p1TQYJSzdE_1W =342x512)**

### Automation tab

### ![](https://lh3.googleusercontent.com/QyC0avm9WGjOUxlV9XCBG17Soau1V6XpP-Ff61Fp-iabR2yeuDQ74ZXntetfS8_1GkywUn_ONjQaXhUNZ_L8wXy4N65wKnh-kte7BkR1C3yGo3ay4PwnH5EUkQADOFTsaIpLLVgJ =624x235)

  
The new Automation Module has been added to LiveEngage.

There are three items under this tab:

1. **Overview of bots & AI in LivePerson: **This page is informative only and will be viewable by all users.
2. **Conversation Builder (build and manage bots)**: The Conversation Builder will be embedded directly into this tab, enabling users to access bot building directly from the LiveEngage UI.
3. **Bot Connectors**: This area will display all the 3rd party bots created and on-boarded into the account from DialogueFlow or Watson and enable brands to connect to additional instances quickly and easily. Additional AI vendors will be added to this offering in the future (view[ documentation](https://developers.liveperson.com/bot-connectors-getting-started.html) on the Developers Community).

  
**Note:** This tab will be available to accounts that have the Conversation Builder enabled.

### \[Facebook\] Self serve on-boarding should enable adding more than 25 pages to an account (LE-97225)

Enables Facebook self-serve onboarding page to support the subscription to more than 25 Facebook pages.

## Bugs Fixes

### \[WhatsApp\] Connector sends repeated irrelevant MTM (CX-146)

When a consumer starts a conversation with an audio message after 24 hours of it being initiated, the automated MTM message is sent along with the agent reply message to the consumer every time. This issue is now resolved.