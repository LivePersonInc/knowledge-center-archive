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

## A new Universal interaction
### Type: New feature [Conversation Builder Release 2021_7.0]

This new feature is available for all channels supported by the Conversational Cloud platform.

Is there a cutting-edge interaction in a channel that you want to implement in your bot? Do you want to fast track its usage now, before support for it is added to the Statement and Question interactions in Conversation Builder? Now you can. Conversation Builder introduces a new “universal” interaction to meet this need.
This powerful, new interaction is designed for advanced bot developers, and it opens up many more opportunities to achieve the exact layout and styling that you require. For example, you might want a vertical card layout or perhaps a button question that uses just buttons (images) without button labels (text).
To use this code interaction, add it to your bot, and enter the appropriate JSON code within it. You are limited only by what’s supported by the Conversational Cloud, as the JSON must adhere to the Conversational Cloud rich message format. Templates that you can quickly copy are provided to accelerate your coding efforts.



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

## A redesigned Conversation Tester
### Type: Enhancement [Conversation Builder Release 2021_7.0]


This enhancement is available for all channels supported by the Conversational Cloud platform.

We’ve redesigned the Conversation Tester. In this release, you’ll find a fresh, new look-and-feel that aligns with Conversation Builder. What’s more, you’ll find the new UI makes the tool faster and easier to use.

## LivePerson NLU engine supports Spanish 
### Type: Enhancement [Intent Builder Release 2021_7.0]

This enhancement is available for all channels supported by the Conversational Cloud platform.


In this release, LivePerson broadens the language support for its LivePerson Natural Language Understanding (NLU) engine: Spanish is now a supported language.

## Support for a Spanish-language user interface
### Type: Enhancement [Conversation AI applications Release 2021_7.0]

This enhancement is available for all channels supported by the Conversational Cloud platform.

The following Conversation AI applications now make available a Spanish-language user interface:

* Conversation Builder
* Intent Builder
* Knowledge Base
* Bot Analytics
* Bot Accounts
* Bots Status

All copy within the interface (labels, error messages, etc.) is available in Spanish (Latin America).

To change the language, access your Conversational Cloud profile, click My Details, and change the Language setting to Spanish (Latin America).


 

