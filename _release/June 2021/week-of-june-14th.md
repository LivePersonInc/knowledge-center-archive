---
pagename: Week of June 14th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-june-week-of-june-14th.html
isTutorial: false
isNew: false
date: '2021-06-09'

---

These release notes include new features arriving June 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Bot Analytics] MACS: A new measure of bot conversation quality
### Type: New feature [Conversation Builder Release 2021_7.0]

This new feature is available for all channels supported by the Conversational Cloud platform.

LivePerson is pleased to introduce the Meaningful Automation Conversation Score, or MACS, which is a new measure of bot conversation quality. This new feature is currently scheduled for GA release starting on June 15, 2021.

### What is MACS?
LivePerson has found through research that consumer effort is a key determiner in how the consumer perceives the quality of a conversational experience. Given this, MACS is a score that’s calculated by identifying and quantifying this within the bot conversation, using proprietary LivePerson AI logic. Issues within the conversation’s structure are detected and used to derive the score:

* Was the consumer stuck in an endless loop?
* Did the bot ignore the consumer’s question?
* Did the bot understand the consumer’s question?
* Was the bot able to transfer to an agent successfully?

MACS is calculated for each Conversation Builder bot conversation based on these issues. The conversation is classified with MACS 1, 2 or 3 where:
* Score 1- A potentially below average conversational experience was detected. The bot needs immediate attention.
* Score 2- A potentially average conversational experience was detected. The bot needs improvement.              
* Score 3- A potentially good conversational experience was detected. The bot still might need more tuning.      

To indicate overall bot performance, an average score is also calculated for each bot based on its conversation scores.
![](img/1-MACS.png)

In this initial release of MACS, you can use MACS within the Bot Analytics application to quickly identify underperforming bots and find their failure points. Then, review selected conversations to understand the broken flows and identify the dialogs and interactions to tune.

![](img/2-MACS.png)

We want to hear from brands about MACS! On the Bot Conversation Transcript page, there are mechanisms for sending feedback on the conversation’s MACS.
![](img/3-MACS.png)

As mentioned above, MACS data is only available within Bot Analytics, but we’re just getting started with MACS. Stay tuned for new ways to work with this powerful, new quality measure.
