---
pagename: Post conversation survey user guide
categoryName: Bots & automation
subCategoryName: ''
indicator: messaging
subtitle: The Post Conversation Survey Bot gives brands the ability to collect feedback
  from consumers at the end of a conversation, without utilizing the time of a human
  agent
level3: ''
permalink: Bots-automation-post-conversation-user-guide.html
isTutorial: false
isNew: false
date: 2019-02-18 15:54:54 +0200

---
The Post Conversation Survey Bot gives brands the ability to collect feedback from consumers at the end of a conversation, without utilizing the time of a human agent. The bot can ask specialized questions, designed to provide CSAT, FCR and NPS metrics for the brand, questions that reflect a brand’s custom KPIs, or free text questions. This feature is ideal for brands to measure agent and skill performance and identify opportunities to improve on quality targets.

![](https://lh6.googleusercontent.com/YWtTrHvFuk03yCLftkgO8gW8CtMoGtmDj_4d7k3Lurqo0q8euC0lTDUaitgZ14ivaIPiIrL01kUH4dHaMJtdE-J-TUsZ9ScWcOhp_ClrpjeqEB4-UHHwXQoNiHx2lBJ6dOi7Q5nK =294x487)

## Survey flow

Once the conversation ends the survey is automatically triggered and Bot sends the greeting message

![](https://lh4.googleusercontent.com/LXc3CedYMzp9WFiK8sQUQLZ4FqUZjVW908M82VVIbS9WIPgyjUhYf2SLF5IHP_2eYF4vXtsv-eFIkxZNzz_DJvKp3-s8U-y1rT-Zkr8uYdNgNzZwzvOF9EyYF2kyqOVu2GrPVn9B =240x420)

The Bot starts to send the questions one by one based on the brand configuration. Questions can be quick replies, structured content or simple text.

![](https://lh3.googleusercontent.com/Om0OP8JLLCKWJ5CKlBqpPe7aV0NCb8NFxcprkvdQsrHw31gTudS2jvB24jz3wHuc1OKzMYbMwewLMPhVxmR9LaN6SoSkKrKODtMgzEyloe4FwQP2TXXyIdJM2nIf6fzf0BdwAwQL =216x379)

Once the consumer finished answering the questions or upon survey timeout, the survey will be closed with a closing message.

![](https://lh5.googleusercontent.com/PT6ngHNZT7bRmTgVaU_yvffhm6OgPkjkbBqibamDtxWrkWzBv_b8Et4po3-SZz8kQo7hOKh5-2lq-rY0VrcSV99ZS7vkxHMhzMiwo2SVPTJAGHSU9bJ5KQ9sk0XK9lH-U8QA5LAh =266x469)

## How it works

**SURVEY TRIGGERING**

* Once the messaging conversation has ended (either by consumer or agent) the survey will be automatically triggered (no need to transfer)
* A survey is not triggered upon auto close
* A survey is triggered based on the last skill of the conversation
* NOTE: only conversations with assigned skill to them will be able to trigger a survey. If a conversation is “unassigned” no survey will be triggered.

**CONVERSATIONAL**

* The bot will start to send the questions one by one as configured by the brand
* Upon each consumer response, the bot will send the next question based on the logic defined
* The survey questions and answers are based on structured content, quick replies and regular text messages - all fully customizable by the brand

**SKIPPING THE SURVEY**

* Brands will be able to configure specific phrases that, if typed by the consumer, will skip and close the whole survey
* Per each specific question the brand can add a ‘skip’ button to make it optional

**SURVEY TIMEOUT**

* If the consumer didn’t respond for X time from the last bot message, the bot will close the survey and report on it accordingly

**TYPING FREE TEXT**

* For questions that are not ‘free text’ questions, the consumer will be asked to choose from a list of answers (either shown in quick replies or in the card buttons).
* For each button or quick reply, the brand can also configure phrases which if typed by the consumer would be recognized by the bot as a valid answer.

**CONSUMER ERRORS**

* In case the consumer types in free text that is not recognized as a valid answer, the bot will send an error message and resend the last question again
* After X times which the user got this error, the bot will automatically close the dialog.

**SURVEY OUTCOMES**

* The survey can be closed in a number of different scenarios-
  * Survey completed
  * Survey timeout
  * Survey skipped
* Each outcome is tracked and reported on as part of the Report Builder to enable brands full analysis of the results.
* The brand can configure the closing message that will be sent to the consumer per each of the above survey outcomes.
* Any message sent by the consumer after the survey has been closed will open a new messaging conversation with the brand.

## Prerequisites

Ensure with your Account Manager that Post conversation survey has been provisioned on your account.

### For In-app Messaging:

* In-app Messaging SDK supporting PCS (v3.3 or above available for both Android and iOS)

\- Integrate the SDK into your brand app

\- Ensure that the following toggle is enabled within the SDK (for configuration steps see section below):

* iOS - enableStructuredContent
* Android - enable_structured_content
* Structured content needs to be enabled by your LivePerson Account Manager in addition to the above configuration by the client inside the SDK.

### For web messaging:

* Structured content needs to be enabled by your LivePerson Account Manager. No further configuration is needed on the client side.

A brand that is looking to add the Survey Bot to its ranks should consider the following:

* The Survey Bot is available for Web messaging and In-app messaging only.
* SMS, Facebook, LINE and other sources will be supported starting 9.30.18.

## How to create a survey using the Bot Studio

### **S**tep 1 - Log in to the Bot Studio

Log in to the Bot Studio using the following link [https://va.routingbot.ext.liveperson.net/login](https://va.routingbot.ext.liveperson.net/login "https://va.routingbot.ext.liveperson.net/login")

Make sure to use your account Admin credentials.

![](https://lh4.googleusercontent.com/e-hZ4BdzzdMBw7_JtJGDTTjDIefOkSScfx1qtTqZuAVF-AQmdKvTRqaEYswK4KKeQnvRNsDp41ABrDdaMTNdz0cbB9X_EbxSWjTfCZ-9yl2RsFiWsJ3IU1RogIIE-xwzJyUAyJje =461x439)

## **Step 2 - Create a Bot and first survey**

Once logged in to the Studio, create a new Bot under the Survey Bots tab.

![](https://lh6.googleusercontent.com/imtWtftTCsn7Qt7bPCmaxcBr8hHeAeM4fV8N8V84tjoWhD9H8-SMam_TrBfMW0bztLvX4_s4OerAUqPck79iqL_ebTbRJNG1Ze_WFGXlKYJoR3LGdxzqMS0zqKGoEKJG8mhql9We =624x332)

Once the bot is created, Enter the Bot’s Survey gallery and press the “Add Survey” button to create a new survey.

Select the skills on which the survey will be triggered once the conversation is closed.

![](https://lh5.googleusercontent.com/kN3b07Ni4WMm43r5JyoA-YxKkjP0xSpY54XjhJx6qCLMgl1FE203HbK8Nt17km9HwPxMwMznxPeVOJIh4eVi7WAh5anMQtrioq16KY9IupncAd55gz15OAIVoEH-iRx_5GhgufoL =653x178)

## **Step 3 - Define the survey flow with Sequences and Bricks**

This step will instruct you on how to create a survey flow using the Bot Studio Editor.

#### **What is a survey?**

A survey is a collection of sequences where each sequence is built out of bricks (questions).

#### **What is a sequence?**

A sequence is essentially a business flow. For example, If I would like to collect the user’s name and age at the beginning of the survey, I would create a sequence and would name it “Personal info”. I would then go and define a few Bricks under my “Personal info” sequence for collecting the required user information.

#### **What are bricks?**

Bricks are visual elements such as Text bubbles, Structured content with Images and buttons and Text bubbles with quick replies.

#### **What are Predefined bricks?**

Predefined bricks are the NPS, CSAT and FCR bricks. They are called predefined since the bot designer can’t edit their structure (for example number of quick replies) but can only edit their content (for example question text or quick reply names). By definition, a survey can have only one predefined of each type in a single survey. (One CSAT, One NPS & One FCR question per a single survey)

#### **What is an Unassigned Sequence?**

An unassigned sequence is a sequence that is not referenced by the main tree of the survey (Orphan sequence). It would appear at the bottom of the Sequence List in the Unassigned Sequences section.

#### **Which actions are available?**

The available actions that could be defined for each quick reply or button can perform one of the following activities:

* **Go to sequence** - If a quick reply is defined to “Go to sequence” when pressed, it would trigger the first brick in the target sequence using a “next” command.
* **Continue sequence** - This would tell the Bot Studio UI that another brick should come right after the brick in which this action is defined.
* **End conversation** - triggers an “end conversation message” that is assigned with the terminate command in the JSON.

## Step 4 - Set the Survey timeout and general settings

#### **Survey timeout**

To set the survey timeout, head to the survey settings and enter the amount of time you wish the survey to be live before the survey bot ends it with a timeout message.

The survey timeout is calculated from the moment the survey starts until it reaches the timeout.

#### **Survey skip phrases**

In the settings, you can set the phrases that could help the consumer to skip the survey. If the consumer would enter one of the set phrases (exact phrase, not case sensitive) the survey skip message would be written to the conversation and the bot would end the survey.![](https://lh4.googleusercontent.com/YGGl7Pyqlm1cUdYbsHN8e0gQcpNqC4ZsVSYtkagRYMAcS9gkRLbXbu2YgloZgBImuRmL2zTrTSzmCPEt0Mv9bCwYZ-mycWL9s5N2-Lo98XRbDk5ANRKoZCW4CGe-_h0NTqk0U2oJ =466x401)

## Step 5 - Reaching a valid survey for Publishing

If you wish to know that your survey is valid for publishing, make sure that the survey has no warning icons on bricks and has no Unassigned Sequences.

In the image below there are a few errors that prevent the survey from being published:

1. Some of the bricks are missing an Action definition (Go to sequence etc’).
2. Some of the bricks are missing essential information such as the question text.
3. The survey has an unassigned sequence.

![](https://lh5.googleusercontent.com/XhC3j4IYvsfvtz4kcjA-1wiz3rAQh5R-okl_P-YJOC3GqSD1dHb9pTfBARa-CT4jTivBZYc2LgyVIz09VvPqKhxEXYlUIAhRsfw9JYFCWTn21PsC21yeLacEZhFhrHwFcimI9Lel =757x409)

Attempting to Publish this survey will fail with a Bot Studio error message.

Once the survey contains no warnings, hit the Publish button to have the survey loaded to you LiveEngage account. At this point, if the survey is defined as active, it would already be live for your users.

## Step 6 - Trigger the survey

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes the survey will be triggered and the agent workspace would show the caption - “Survey in progress”

![](https://lh6.googleusercontent.com/no5A5N0CGvQYBFOsYoQy0eJAVolpD3BtdN1YXf6bPMgJnRCyxqTNE-PPnEwt7o4eSrf7iZbqfti6hhUYVVyE5krlVf5neVMRxInl35o7LeC3sKEoEOfJeyvNOhR4C8b4jQlvDjOv =535x611)

While the survey is active the agent won’t be able to write in the conversation. The survey would end when the consumer finishes entering the survey or when the survey timeout is reached. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

## Free Text Responses

Consumers may choose to type in free text using their keyboard instead of selecting a preconfigured response.  
It is possible to set up predefined phrases that the bot will recognize and act upon.  
Predefined phrases can be used either to allow the user to skip the survey, skip a question or to type in an answer to a question instead of selecting to click on an answer or button.

#### **Skipping the survey**

In the settings under the skip survey section, you can add the phrases which the user can type to trigger the end of the survey.

![](https://lh3.googleusercontent.com/1Y1-K9yBiLve0IdCV4Qzs6fMdJxmwRPV_54sd7eeKCFIgF4CtF1esxvHZ202RW9lQ0-dVX1IEec3kgfMyCRgDoOt7QiwSdoJjfkT1EOZPVTQkVe3ChC5gJgi0ijuaGDNzSyiJC_5 =607x248)

**Answer question using free text**  
Another use for free text could be to enter an answer for a question.  
In order to add a free text phrase that the bot would recognize to a button or quick reply, go to the button settings, click the “set additional free text answers” and

enter the phrases using a comma to separate the answers. For example, the user can type in ‘yeah’ or ‘Ya’ and the bot will recognise this as a valid response.

![](https://lh6.googleusercontent.com/q63H35wdCDRaD8QiuGWVDL1F1XDrYYyoJx6QSnuBdjihhd9ojmjHyMfvESAilcx5213js4QYLJOMoE5AjLfJzQVXi9ldOUvn5NwAeR0ES2GWIyBjh5dWZFyEGvpgJEP1tnEvepmz =348x257)

Please note: the user will need to enter the exact phrase in order for it to match, however, it is not case sensitive.

## **Unrecognizable User Response**

When the bot does not recognize user text, a warning message will appear prompting the user to select one of the quick replies or buttons presented.  
After a configurable amount of times, the bot will automatically end the survey.  
The response to unrecognized user text as well as the number of unrecognizable errors allowed can be configured in the survey settings.

## **Enabling support for textual channels**

Surveys can be configured to run on non-structured content channels such as Apple Business Chat (ABC), SMS etc’.

The way that it works is that once the setting is enabled, every Brick within the survey receives a “Text Fallback” field that is sent instead of the structured content whenever the survey is served on a skill associated with a textual channel or a channel that is not compatible with LivePerson rich content framework.

To enable the support, head to the survey settings and mark the following checkbox - “Enable survey for channels that are not compatible with LiveEngage rich content”

![](https://lh6.googleusercontent.com/1CSDp3BG2w9jIS1B5UhpoxGO9oox4RCRtYToN8rcHYiE4Oj0WxlFB5kFQwhdY85xn9ZJMkiWGaxPKGyLCq2sIhZdT3IPi_w_p0NUBEbmj1pHtHb2OxfKtB559Z4SEtotYpCRE28Y =454x383)

Once enabled, make sure to fill in the desired text in the Text Fallback Tab.

## **Reporting**![](https://lh6.googleusercontent.com/aZoP0R3FdNLw9AfwohLstvvqqaRgwEbinsiox42kS-6pdSZVCnxn-Zb--0NyRgyw9YHDWzODyry3gIGdAszkszCkDxLp-v9nD9wenaEGnIvZKNIfaOGgSUF9NGjBMxzVmgkc4Nnm =624x332)

The Predefined Messaging Performance Dashboard has been enhanced to include a dedicated “Survey Data Export” sheet containing an in-depth analysis of the new Messaging Post-Conversation Survey flows. The flows included in Report Builder are based on the ones configured in the LiveEngage Bot Studio.

The new sheet contains an additional set of metrics and attributes which support the following analysis:

* Predefined KPIs at the Agent & Skill level: CSAT, NPS, and FCR (precalculated)
* Detailed Brand-level answer distribution per each configured question and answer
* Detailed “Agent and Skill”-level answer distribution per each question and answer
* Survey activity and performance, allowing to monitor the response rates for example
* Question level performance, allowing to monitor the avg. time to respond for example

In a single messaging conversation followed by the submission of a survey by the consumer, multiple agents and skills may be assigned. To eliminate double counting, and to prepare for our phase 2 development (which expands the attribution model not just the last agent assigned), the data model has been prepared accordingly.

## **Design**

Each kind of brick has its own design parameters associated with it and some elements are customizable.

The text and quick replies brick has two main design aspects that can be controlled through the Bot Studio:

1. The design of the text within the buttons - color may be changed using the hexadecimal code
2. The buttons layout and colours - the number of Quick Replies per row may be set as well as the buttons background and border colors.

![](https://lh3.googleusercontent.com/jz1SidYOu-TXwTUVU4h0NyLMK5lBSxGautxdcQAu4R4AU_R8GXjCbm3x4XSR7ufS6wXqjPGaA5Y8vNo1wSED3qCRglYBVhDV5sxVnzxUoCtXulTtsQzh8RwLlCvoe9eDjz8TktiU =268x446)

For survey questions that include a text bubble, for example, a text+quick replies brick - the text bubble will inherit its design from the overall window look and feel which you have already customized for your LiveEngage account.

For web messaging, this window customization is controlled through the LiveEngage UI - in the campaigns, window gallery.

For mobile app messaging, the window customization is conducted via parameters within the SDK.

For more details on this please click the “Learn more” link located at the bottom of the design tab.

## **The new PCS vs the old CSAT Survey**

On channels such as Web Messaging and In-app messaging there is already an existing survey solution where a single CSAT question can be presented to the consumer when the conversation ends. If a brand chooses to shift from the old CSAT survey to the new Post Conversation Survey, it is possible to keep both types of surveys working simultaneously with the following logic:

* If both PCS and Old CSAT are enabled, PCS gets the priority and the old CSAT question won’t be displayed.
* If the conversation ends on a device that doesn’t support PCS (for example an app running SDK v3.2 or lower) then the old CSAT question may appear, assuming it was configured to appear.
* If the conversation ends with a skill on which there is not PCS defined, the old CSAT question may appear, if it was enabled.

# Tutorials

The Help section which includes tutorials is made available to you after you create the survey bot and add your first survey.

![](https://lh5.googleusercontent.com/FT5PykIObboEh0yDYoxmWJpfSJiv7KqiVYItbcNYWzlJsIqXW9HhHSiPyDcP7UeZmsfJZxO_OO_eDMXoHJJN0B2ra55uR4ii63ZdAHQYg6tK6qY2nL_erPNgK0Kpo7hjeWVS4jXk =317x49)

# **FAQs**

#### **Q: I see that I have missing info in bricks but I’m not sure what it means.**

A: Make sure that:

* All actions are populated and make sense. If you chose a ‘Continue sequence’ action for a brick, make sure that there is another brick that follows it in the sequence.
* Also, make sure that the “Text Fallback” Tab has some text defined in it. Without it (assuming the “supported on textual channel is enabled in the settings) you won’t be able to publish to AC.
* Make sure your survey doesn’t contain Unassigned Sequences. Delete them if needed.

#### **Q: I configured the post conversation survey but when the conversation ends I get the old CSAT question survey? Why?**

A: Make sure that:

* The conversation ends with a skill that is mapped to the survey you’ve created. The survey mapping is done when you create the survey and it could also be edited by pressing the “Edit survey details” within the survey gallery.

#### **Q: I don’t see the latest changes I’ve made to the survey when I end the conversation. Why is that?**

A: In order for the changes you make in the Bot Studio to take effect in realtime you need to first publish those changes. Make sure that your survey is fully

published by pressing the Publish button in the Survey Editor screen and start a new conversation for it to take effect.

#### **Q: I elevated my LPA user to have Admin permissions, but I keep getting an error when trying to add the Bot.**

A: Please contact NOC and ask to move your LPA to the “LPA Product” group or to add the “view messaging survey” & “edit messaging survey” permissions to your existing LPA group.

#### **Q: I created a bot that was assigned with the “Survey bot” profile using the LiveEngage user creation UI. Why can’t I add it in the Bot Studio?**

A: The survey bot user is actually added automatically by the Bot Studio when you press the “Add survey bot” in the Bot Studio UI. This means that the Admin doesn’t need to create a bot user before going to the Bot Studio. To resolve the issue, delete any bot user that was assigned with the “Survey bot” profile and try to add the bot again using the Bot Studio.

#### **Q: I added a survey bot using the Bot Studio but I can’t see its user in the LiveEngage UI. Why is that?**

A: When the Bot Studio create the survey bot user it is created as a system user. This means that the survey bot user doesn’t appear as an Agent in LiveEngage.

#### **Q: On Facebook, whenever I send out an NPS question in which the skip button was added, the conversation ends abruptly. why?**

A: Unfortunately, Facebook doesn’t support sending structured content that has more than 11 quick replies. NPS question + skip is 12 quick replies.

#### **Q: Something have changed in my survey and I’m not sure who made the change. How can I find this out?**

A: The post conversation survey is tracked by Audit Trail. Go the Audit Trail section within LiveEngage and filter for “Post Conversation Survey”.