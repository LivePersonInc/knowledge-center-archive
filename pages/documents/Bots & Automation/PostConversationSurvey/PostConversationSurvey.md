---
pagename: Post-Conversation Survey bot
categoryName: Getting started
subCategoryName: Post-conversation surveys
indicator: messaging
subtitle: Getting feedback from your consumers on their experiences with your brand
level3: Getting started
permalink: ai-bots-automation-post-conversation-surveys-post-conversation-survey-bot.html
isTutorial: true
isNew: false
date: 2020-08-12 14:03:55 +0000
redirect_from:

---

## What's a post-conversation survey bot?
 
A post-conversation survey bot is a bot that is triggered at the end of a conversation with an agent or custom bot. You can use it to obtain feedback from the consumer on the consumer's experience with your brand. A survey bot is a great way to measure agent/bot and skill performance and to identify opportunities to improve on your quality targets.

<img style="width:400px" src="img/surveyBot_example.png">

When you build a survey bot in Conversation Builder, you can use special, predefined interactions for capturing standard survey metrics:

* Net Promoter Score (NPS)
* Customer Satisfaction (CSAT)
* First Contact Resolution (FCR)

The Post-Conversation Survey bot does not affect the conversation’s duration. Data on these survey metrics is captured in Conversational Cloud and exposed via the [Analytics Builder](data-reporting-analytics-builder-analytics-builder-overview.html) application. You'll find this information in the predefined [Survey Dashboard for Messaging](data-reporting-messaging-messaging-dashboards-survey-dashboard-for-messaging.html), which you can use out-of-the-box or manipulate to create customized reports.
  
{: .important}
To use survey bots created in Conversation Builder, you must be on the LivePerson platform, i.e., you log into Conversation Builder via single sign-on through Conversational Cloud. This feature isn't supported on the AWS platform where you log into Conversation Builder directly.<br><br>
Survey bots are supported only in Messaging, not in Live Chat.

## Net Promoter Score (NPS) metrics
 
Net Promoter Score (NPS) metrics are commonly used to measure the loyalty of a consumer to a brand. PCS bots have a predefined NPS interaction for capturing the consumer's response to a standard NPS question: *Based on your experience today, how likely are you to recommend us to a friend or colleague?* This lets you quickly and easily start measuring NPS over messaging.

<img style="width:600px" src="img/surveyBot_nps.png">

## Customer Satisfaction (CSAT) metrics

Customer Satisfaction (CSAT) metrics are used to measure the frequency at which your brand meets or exceeds consumer expectations. PCS bots have a predefined CSAT interaction for capturing the consumer's response to a standard CSAT question: *How would you rate your overall satisfaction with the service you received?* Like the NPS interaction, this is a great way to quickly start measuring consumer satisfaction.
 
<img style="width:600px" src="img/surveyBot_csat.png">

## First Contact Resolution (FCR) metrics

First Contact Resolution (FCR) metrics are used to measure operational efficiency in resolving consumer issues. PCS bots have a predefined FCR interaction for capturing the consumer's answer as to whether their inquiry was resolved: *Were you able to resolve your inquiry today?* This feedback helps you to measure and improve agent/bot and skill performance.

<img style="width:600px" src="img/surveyBot_fcr.png">
 
## Closed-ended and open-ended questions

When building a survey bot in Conversation Builder, you can also create closed-ended and open-ended questions. These let you gather feedback on the custom metrics that you care about most. Ask anything!

*Closed-ended questions* are multiple choice questions that have a custom, predefined list of answer choices. They’re great when you need quantifiable data and want to categorize your consumers.

<img style="width:600px" src="img/surveyBot_closed.png">

*Open-ended questions* allow your consumers to provide answers in their own words, instead of being constrained by a predefined list of answer choices. Use these when you want to offer the opportunity for this type of free-form feedback.

<img style="width:600px" src="img/surveyBot_open.png">

Like the other survey question types, the results from both closed-ended and open-ended questions are reported automatically to Analytics Builder.

## Building a survey bot with Conversation Builder

You [use Conversation Builder to create survey bots](https://developers.liveperson.com/conversation-builder-bots-post-conversation-survey-bots.html), which allows you to use the same, familiar tool that use to create custom bots. This makes the process quicker and more efficient.

## Tips on writing effective survey questions

When defining survey questions, keep these basic guidelines in mind:

* Less is more! The fewer survey questions you include, the more likely consumers are to complete your survey.
* Keep the questions simple, clear and specific. 
* Avoid using jargon and double negatives.
* Make sure a question asks about only one thing.
* Don’t ask the same question more than once.
* Make most questions optional using the survey interaction's “skip” feature.
* Avoid leading questions that suggest an answer or convey an opinion, e.g., “How great was your experience today?”
* Make sure the answer choices are balanced and objective, i.e., don’t include just answer choices that reflect a positive opinion, also include those that don’t. 
* Minimize the use of open-ended questions that require free text responses, as these require more effort from the consumer.

## Migrating from Bot Studio to Conversation Builder

If you're already using [survey bots created in Bot Studio](ai-bots-automation-post-conversation-surveys-legacy-post-conversation-survey-bot.html), but you want to migrate to using Conversation Builder, see [here](ai-bots-automation-post-conversation-surveys-migrating-from-bot-studio-to-conversation-builder.html) for information on how to make the switch.
