---
pagename: Post conversation survey bot
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: Collect feedback from consumers at the end of a conversation without utilizing
  the time of a human agent
level3: ''
permalink: ai-bots-automation-post-conversation-survey-bot.html
isTutorial: false
isNew: false
date: 2019-02-18 13:54:54 +0000
redirect_from:
  - using-forms.html
  - bots-automation-post-conversation-survey.html
---
The post conversation survey bot (PCS) gives brands the ability to collect feedback from consumers at the end of a conversation, without utilizing the time of a human agent. The bot can ask specialized questions, designed to provide CSAT, FCR and NPS metrics for the brand, questions that reflect a brand’s custom KPIs, or free text questions. This feature is ideal for brands to measure agent and skill performance and identify opportunities to improve on quality targets.

## Survey flow

Once the conversation ends the survey is automatically triggered and the bot sends the greeting message.

The bot sends the questions one by one based on the brand configuration. Questions can be quick replies, structured content or simple text.

Once the consumer finishes answering the questions or upon survey timeout, the survey will be closed with a closing message.

## How it works

### Survey triggering

* Once the messaging conversation has ended (either by the consumer or the agent) the survey will be automatically triggered (no need to transfer)
* A survey is not triggered upon auto close
* A survey is triggered based on the last skill of the conversation
* Only conversations with a skill assigned to them will be able to trigger a survey. If a conversation is “unassigned” no survey will be triggered.

### Conversation

* The bot will send the questions one by one as configured by the brand
* Upon each consumer response, the bot will send the next question based on the logic defined
* The survey questions and answers are based on structured content, quick replies and regular text messages - all fully customizable by the brand

### Skipping the survey

* Brands will be able to configure specific phrases that, if typed by the consumer, will skip and close the survey
* For each question the brand can add a ‘skip’ button to make it optional

### Survey timeout

* If the consumer does not respond for X time from the last bot message, the bot will close the survey and report on it accordingly

### Typing free text

* For questions that are not ‘free text’ questions, the consumer will be asked to choose from a list of answers (either shown in quick replies or in the card buttons).
* For each button or quick reply, the brand can also configure phrases which if typed by the consumer would be recognized by the bot as a valid answer.

### Consumer errors

* In case the consumer types in free text that is not recognized as a valid answer, the bot will send an error message and resend the last question again
* After X times which the user received an error, the bot will automatically close the dialog.

### Survey outcomes

The survey will be closed in a number of different scenarios:

* Survey completed
* Survey timeout
* Survey skipped

Each outcome is tracked and reported on as part of the Report Builder to enable brands full analysis of the results.

The brand can configure a closing message that will be sent to the consumer for each of the above survey scenarios.

Any message sent by the consumer after the survey has been closed will open a new messaging conversation with the brand.

## Prerequisites

Ensure with your account manager that post conversation survey has been provisioned on your account.

### For In-app Messaging:

* In-app Messaging SDK supporting PCS (v3.3 or above available for both Android and iOS)

\- Integrate the SDK into your brand app

\- Ensure that the following toggle is enabled within the SDK (for configuration steps see section below):

* iOS - enableStructuredContent
* Android - enable_structured_content
* Structured content needs to be enabled by your LivePerson Account Manager in addition to the above configuration by the client inside the SDK.

### For web messaging:

Structured content needs to be enabled by your LivePerson Account Manager. No further configuration is needed on the client side.

Post conversation survey bot is available on all messaging channels including web messaging, in-app messaging, Twilio SMS, Facebook and LINE.

## How to create a survey using the Bot Studio

### Step 1 - Log in to the Bot Studio

Log in to the Bot Studio using the following link: [https://va.routingbot.ext.liveperson.net/login](https://va.routingbot.ext.liveperson.net/login "https://va.routingbot.ext.liveperson.net/login")

Make sure to use your account admin credentials.

![](/img/Post-conversation-survey-2.png)

## Step 2 - Create a survey bot and first survey

Once logged in to the Bot Studio, create a new survey bot by clicking on "Add a survey bot" under the Survey Bots tab.

![](/img/post-conversation-survey-user-guide3.png)

Once the survey bot is created, enter the survey bot’s Survey Gallery and press the “Add a new survey” button to create a new survey.

Select the skills that will trigger the survey once the conversation is closed.

## Step 3 - Define the survey flow with sequences and bricks

This step will instruct you on how to create a survey flow using the Bot Studio Editor.

### What is a survey?

A survey is a collection of sequences where each sequence is built out of bricks (questions).

### What is a sequence?

A sequence is essentially a business flow. For example, if you would like to collect the user’s name and age at the beginning of the survey, you would create a sequence and would name it “Personal info”. You would then go and define a few bricks under the “Personal info” sequence for collecting the required user information.

### What are bricks?

Bricks are visual elements such as Text bubbles, Structured content with Images and buttons and Text bubbles with quick replies.

### What are predefined bricks?

Predefined bricks are the NPS, CSAT and FCR bricks. They are called predefined since the bot designer can’t edit their structure (for example number of quick replies) but can only edit their content (for example question text or quick reply names). By definition, a survey can have only one predefined brick of each type in a single survey. (One CSAT, One NPS & One FCR question per a single survey)

### What is an unassigned sequence?

An unassigned sequence is a sequence that is not referenced by the main tree of the survey (orphan sequence). It would appear at the bottom of the Sequence List in the Unassigned Sequences section.

### Which actions are available?

The available actions that can be defined for each quick reply or button are:

* **Continue sequence** - This tells the Bot Studio UI that another brick should come right after the brick in which this action is defined.
* **Go to sequence** - If a quick reply is defined to “Go to sequence” when pressed, it would trigger the first brick in the target sequence using a “next” command.
* **End survey** - triggers an “end conversation message” that is assigned with the terminate command in the JSON.

## Step 4 - Define survey settings

To define settings for your survey, click on "Settings" in the header bar.

### Skip Survey

You can set phrases that will allow the consumer to skip the survey. If the consumer enters one of the set phrases (exact phrase, not case sensitive) the closing message will be displayed to the user and the bot will end the survey.

### Survey timeout

To set the survey timeout, set the aamount of time under "Survey timeout". Enter the amount of time the survey will remain active before it is closed and a closing message is displayed.

The survey timeout is calculated from the moment the survey starts until it reaches the timeout.

![](/img/post-conversation-survey-user-guide4.png)

## Step 5 - Publish the survey

In order to publish a survey, it must be valid. Make sure that the survey has no warning icons on bricks and has no unassigned sequences.

In the image below there are a few errors that will prevent the survey from being published:

1. Some of the bricks are missing an Action definition (Go to sequence etc’).
2. Some of the bricks are missing essential information such as the question text.
3. The survey has an unassigned sequence.

![](/img/post-conversation-survey-user-guide5.png)

Attempting to publish this survey will fail with a Bot Studio error message.

Once the survey contains no warnings, click on "Publish" in the header bar to have the survey loaded to you LiveEngage account. At this point, if the survey is defined as active, it will be live for your users.

## Step 6 - Trigger the survey

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes the survey will be triggered and the agent workspace will show the caption - “Survey in progress”

![](/img/post-conversation-survey-user-guide6-2.png)

While the survey is active the agent won’t be able to write in the conversation. The survey will end when the consumer finishes entering the survey or when the survey timeout is reached. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

## Free text responses

Consumers may choose to type in free text using their keyboard instead of selecting a preconfigured response. It is possible to set up predefined phrases that the bot will recognize and act upon. Predefined phrases can be used either to allow the user to skip the survey, skip a question or to type in an answer to a question instead of clicking on an answer or button.

#### **Skipping the survey**

In the settings under the skip survey section, you can add the phrases which the user can type to trigger the end of the survey.

![](/img/post-conversation-survey-user-guide7 (1).png)

**Answer question using free text**  
Another use for free text is to enter an answer for a question. In order to add a free text phrase that the bot would recognize for a button or quick reply, go to the brick you want to set a free text phrase for. Under the Setting Action page, click on the “Set additional free text answers” for the button you want and enter the phrases using a comma to separate the answers. For example, the user can type in ‘yeah’ or ‘Ya’ and the bot will recognize this as a valid response.

![](/img/post-conversation-survey-user-guide8 (1).png)

{: .notice}  
The user will need to enter the exact phrase in order for it to match, however, it is not case sensitive.

## Unrecognizable user response

When the bot does not recognize user text, a warning message will appear prompting the user to select one of the quick replies or buttons presented. After a configurable amount of time, the bot will automatically end the survey. The response to unrecognized user text as well as the number of unrecognizable errors allowed can be configured in the survey settings.

## Enabling support for textual channels

Surveys can be configured to run on non-structured content channels such as Apple Business Chat (ABC), SMS etc.

When the setting is enabled, every brick within the survey receives a “Text Fallback” field that is sent instead of the structured content whenever the survey is served on a skill associated with a textual channel or a channel that is not compatible with the LivePerson rich content framework.

To enable this setting, click on "Settings" in the header bar. Check the checkbox - “Enable survey for channels that are not compatible with LiveEngage rich content (e.g. SMS).”

Once enabled, make sure to fill in the desired text in the Text Fallback Tab. This tab will appear next to the Action and Design tabs of the Settings window once enabled.

![](/img/post-conversation-survey-user-guide9 (1).png)

## Reporting

![](/img/post-conversation-survey-user-guide10.png)

The messaging performance dashboard in Report Builder has been enhanced to include a dedicated “survey data export” sheet containing an in-depth analysis of the new messaging post conversation survey flows. The flows included in Report Builder are based on the ones configured in the LiveEngage Bot Studio.

The new sheet contains an additional set of metrics and attributes which support the following analysis:

* Predefined KPIs at the Agent & Skill level: CSAT, NPS, and FCR (pre-calculated)
* Detailed brand-level answer distribution per each configured question and answer
* Detailed “agent and skill”-level answer distribution per each question and answer
* Survey activity and performance, allowing to monitor the response rates for example
* Question level performance, allowing to monitor the avg. time to respond for example

In a single messaging conversation followed by the submission of a survey by the consumer, multiple agents and skills may be assigned. To eliminate double counting, and to prepare for our phase 2 development (which expands the attribution model to not just the last agent assigned), the data model has been prepared accordingly. Please see the [post conversation survey](data-reporting-messaging-messaging-dashboards-messaging-survey-dashboard.html) messaging dashboards for more information.

## Design

Each kind of brick has its own design parameters associated with it and some elements are customizable.

The text and quick replies brick has two main design aspects that can be controlled through the Bot Studio:

1. Text within buttons - The size of the text can be changed between small, medium and large. The font color may be changed using the hexadecimal code. The text can be bolded and/or italicized.
2. Buttons layout and colors - the number of quick replies per row may be set between 1 and 8. The fill and border colors mybe be changed using the hexadecial code. The border radius may be changed between 1 and 14.

![](/img/post-conversation-survey11.png)

For survey questions that include a text bubble, for example a text and quick replies brick, the text bubble will inherit its design from the overall window look and feel which you have already customized for your LiveEngage account.

For web messaging, this window customization is controlled through the LiveEngage UI in the campaigns, window gallery.

For mobile app messaging, the window customization is conducted via parameters within the SDK.

For more details on this please click the “Learn more” link located at the bottom of the design tab.

## The new PCS vs the old CSAT survey

On channels such as web messaging and In-app messaging there is already an existing survey solution where a single CSAT question can be presented to the consumer when the conversation ends. If a brand chooses to shift from the old CSAT survey to the new post conversation survey, it is possible to keep both types of surveys working simultaneously with the following logic:

* If both PCS and old CSAT are enabled, PCS gets the priority and the old CSAT question won’t be displayed.
* If the conversation ends on a device that doesn’t support PCS (for example an app running SDK v3.2 or lower) then the old CSAT question may appear, assuming it was configured to appear.
* If the conversation ends with a skill on which there is not PCS defined, the old CSAT question may appear, if it was enabled.

## Tutorials

The help section, which includes tutorials, is made available to you after you create the survey bot and add your first survey.

## FAQs

### Q: I see that I have missing info in bricks but I’m not sure what it means.

Make sure that:

* All actions are populated and make sense. If you chose a ‘Continue sequence’ action for a brick, make sure that there is another brick that follows it in the sequence.
* If "Enabled survey for channels thaat are not compatible with LiveEngage rich content (e.g. SMS)" is enabled in settings, make sure that the “Text Fallback” Tab has some text defined in it. Without it you won’t be able to publish to AC.
* Make sure your survey doesn’t contain Unassigned Sequences. Delete them if not needed.

### Q: I configured the post conversation survey but when the conversation ends I get the old CSAT question survey? Why?

Make sure that the conversation ends with a skill that is mapped to the survey you’ve created. The survey mapping is done when you create the survey and it can also be edited by pressing the “Edit details” within the survey gallery.

### Q: I don’t see the latest changes I have made to the survey when I end the conversation. Why is that?

In order for the changes you make in the Bot Studio to take effect you need to publish the changes. Make sure that your survey is published by pressing the "Publish" button in the Survey Editor screen and start a new conversation for it to take effect.

### Q: I elevated my LPA user to have Admin permissions, but I keep getting an error when trying to add the bot.

Please contact the LivePerson NOC and ask to move your LPA to the “LPA Product” group or to add the “view messaging survey” & “edit messaging survey” permissions to your existing LPA group.

### Q: I created a bot that was assigned with the “Survey bot” profile using the LiveEngage user creation UI. Why can’t I add it in the Bot Studio?

The survey bot user is added automatically by the Bot Studio when you press “Add survey bot” in the Bot Studio UI. This means that the Admin doesn’t need to create a bot user before going to the Bot Studio. To resolve the issue, delete any bot user that was assigned with the “Survey bot” profile and try to add the bot again using the Bot Studio.

### Q: I added a survey bot using the Bot Studio but I can’t see its user in the LiveEngage UI. Why is that?

When the Bot Studio creates the survey bot user it is created as a system user. This means that the survey bot user doesn’t appear as an agent in LiveEngage.

### Q: On Facebook, whenever I send out an NPS question in which the skip button was added, the conversation ends abruptly. Why?

Unfortunately, Facebook doesn’t support sending structured content that has more than 11 quick replies. The NPS question and skip is 12 quick replies.

### Q: Something has changed in my survey and I’m not sure who made the change. How can I find this out?

The post conversation survey is tracked by [Audit Trail](security-regulations-audit-trail.html). Go the Audit Trail section within LiveEngage and filter for “post conversation survey”.
