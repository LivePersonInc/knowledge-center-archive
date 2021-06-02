---
pagename: Week of June 7th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-june-week-of-june-7th.html
isTutorial: false
isNew: false
date: '2021-06-02'

---

These release notes include new features arriving June 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Bot Analytics] MACS: A new measure of bot conversation quality
### Type: New feature (Release Conversation Builder 2021_7.0)

{: .notice}
This feature is coming soon

This new feature is available for all channels supported by the Conversational Cloud platform.

LivePerson is pleased to introduce the Meaningful Automation Conversation Score, or MACS, which is a new measure of bot conversation quality. This new feature is currently scheduled for GA release starting on June 15, 2021.

### What is MACS? 
LivePerson has found through research that consumer effort is a key determiner in how the consumer perceives the quality of a conversational experience. Given this, MACS is a score that’s calculated by identifying and quantifying this within the bot conversation, using proprietary LivePerson AI logic. Issues within the conversation’s structure are detected and used to derive the score:

* Was the consumer stuck in an endless loop?
* Did the bot ignore the consumer’s question? 
* Did the bot understand the consumer’s question?
* Was the bot able to transfer to an agent successfully?

MACS is calculated for each Conversation Builder bot conversation based on these issues. The conversation is classified with MACS 1, 2 or 3 where:
| Score | Description                                                                                            |
| ----- | ------------------------------------------------------------------------------------------------------ |
| 1     | A potentially below average conversational experience was detected. The bot needs immediate attention. |
| 2     | A potentially average conversational experience was detected. The bot needs improvement.               |
| 3     | A potentially good conversational experience was detected. The bot still might need more tuning.       |

To indicate overall bot performance, an average score is also calculated for each bot based on its conversation scores.
![](img/1-MACS.png)

In this initial release of MACS, you can use MACS within the Bot Analytics application to quickly identify underperforming bots and find their failure points. Then, review selected conversations to understand the broken flows and identify the dialogs and interactions to tune.

![](img/2-MACS.png)

We want to hear from brands about MACS! On the Bot Conversation Transcript page, there are mechanisms for sending feedback on the conversation’s MACS.
![](img/3-MACS.png)

As mentioned above, MACS data is only available within Bot Analytics, but we’re just getting started with MACS. Stay tuned for new ways to work with this powerful, new quality measure.

## A new Universal interaction
### Type: New feature [Conversation Builder Release 2021_7.0]

This new feature is available for all channels supported by the Conversational Cloud platform.

Is there a cutting-edge interaction in a channel that you want to implement in your bot? Do you want to fast track its usage now, before support for it is added to the Statement and Question interactions in Conversation Builder? Now you can. Conversation Builder introduces a new “universal” interaction to meet this need.
This powerful, new interaction is designed for advanced bot developers, and it opens up many more opportunities to achieve the exact layout and styling that you require. For example, you might want a vertical card layout or perhaps a button question that uses just buttons (images) without button labels (text).
To use this code interaction, add it to your bot, and enter the appropriate JSON code within it. You are limited only by what’s supported by the Conversational Cloud, as the JSON must adhere to the Conversational Cloud rich message format. Templates that you can quickly copy are provided to accelerate your coding efforts.

![](img/CB-RN-June7-1.png)

To fully test a Universal interaction, use Conversation Builder’s Conversation Tester tool or a Web client.

{: .notice}
The Universal interaction isn’t intended to replace the Statement and Question interactions in Conversation Builder. For fast and easy bot development, LivePerson recommends that you always use them whenever they meet your requirements.

## More flexibility when sending post-conversation surveys
### Type: Enhancement [Conversation Builder Release 2021_7.0]

In a previous release, we added support for an account-level Survey Request Interval setting, so you can control how often a consumer is sent a post-conversation survey when one is triggered. In this release, we enhance the setting to give you more flexibility.

As an example, assume you have surveys A, B and C, and you enable this setting with a value of 20 days:

As before, you can apply the setting to all bots collectively, i.e., at the account level. So, if the consumer receives survey A, they will not receive survey A again, or receive surveys B and C, until 20 days have passed.
However, now, you can also choose to apply the setting to each bot individually, i.e., at the survey bot level. In this case, if the consumer receives survey A, they will not receive survey A again until 20 days have passed. During this time, they still might receive surveys B and C.

Tip: You enable the Survey Request Interval setting in the Bot Accounts application.
![](img/CB-RN-June7-2.png)

## A redesigned Conversation Tester
### Type: Enhancement [Conversation Builder Release 2021_7.0]

This enhancement is available for all channels supported by the Conversational Cloud platform.

We’ve redesigned the Conversation Tester. In this release, you’ll find a fresh, new look-and-feel that aligns with Conversation Builder. What’s more, you’ll find the new UI makes the tool faster and easier to use.

![](img/CB-RN-June7-3.png)

## LivePerson NLU engine supports Spanish 
### Type: Enhancement [Intent Builder Release 2021_7.0]

This enhancement is available for all channels supported by the Conversational Cloud platform.

In this release, LivePerson broadens the language support for its LivePerson Natural Language Understanding (NLU) engine: Spanish is now a supported language.


