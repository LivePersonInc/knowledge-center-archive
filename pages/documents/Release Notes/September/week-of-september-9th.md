---
pagename: Week of September 9th
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: ''
level3: September
permalink: release-notes-2018-september-week-of-september-9th.html
isTutorial: false
isNew: false
date: 2019-02-06 15:29:42 +0000
published: false

---
These release notes include new features arriving to LiveEngage during September 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Post Conversation Survey and Bot Studio

The Post Conversation Survey Bot gives brands the ability to collect feedback from consumers at the end of a conversation, without utilizing the time of a human agent. The bot can ask specialized questions, designed to provide CSAT, FCR and NPS metrics for the brand, questions that reflect a brand’s custom KPIs, or free text questions. This feature is ideal for brands to measure agent and skill performance and identify opportunities to improve on quality targets.

![](/img/week-of-september-9th-1.png)

The post conversation survey bot is available for Messaging customers on mobile app, web, ABC, Facebook. SMS is coming soon in September.

#### Survey Flow

1. Once the conversation ends the survey is automatically triggered and Bot sends the greeting message

![](/img/week-of-september-9th-2.png)

{:start="2"}

1. The Bot starts to send the questions one by one based on the brand configuration. Questions can be quick replies, structured content or simple text.

![](/img/week-of-september-9th-3.png)

{:start="3"}

1. Once the consumer finished answering the questions or upon survey timeout, the survey will be closed with a closing message

![](/img/week-of-september-9th-4.png)

#### How to create a survey using the Bot Studio:

**Step 1 - Log in to the Bot Studio**

Log in to the Bot Studio using the following link: [https://va.routingbot.ext.liveperson.net/login](https://va.routingbot.ext.liveperson.net/login "https://va.routingbot.ext.liveperson.net/login")

Make sure to use your account Admin credentials.

![](/img/week-of-september-9th-5.png)

**Step 2 - Create a bot and your first survey**

![](/img/week-of-september-9th-6.png)

Once the bot is created, Enter the Bot’s Survey gallery and press the **Add Survey** button to create a new survey.

Select the skills on which the survey will be triggered once the conversation is closed.

**Step 3 - Define the survey flow with sequences and bricks**

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

**Step 4 - Set the survey timeout and general settings**

#### **Survey timeout**

To set the survey timeout, head to the survey settings and enter the amount of time you wish the survey to be live before the survey bot ends it with a timeout message.

The survey timeout is calculated from the moment the survey starts until it reaches the timeout.

#### **Survey skip phrases**

In the settings, you can set the phrases that could help the consumer to skip the survey. If the consumer would enter one of the set phrases (exact phrase, not case sensitive) the survey skip message would be written to the conversation and the bot would end the survey.

![](/img/week-of-september-9th-7.png)

**Step 5 - Reaching a valid survey for publishing**

If you wish to know that your survey is valid for publishing, make sure that the survey has no warning icons on bricks and has no Unassigned Sequences.

In the image below there are a few errors that prevent the survey from being published:

1. Some of the bricks are missing an Action definition (Go to sequence etc’).
2. Some of the bricks are missing essential information such as the question text.
3. The survey has an unassigned sequence.

![](/img/week-of-september-9th-25.jpg)

Attempting to publish this survey will fail with a Bot Studio error message.

Once the survey contains no warnings, hit the Publish button to have the survey loaded to you LiveEngage account. At this point, if the survey is defined as active, it would already be live for your users.

**Step 6 - Trigger the survey**

![](/img/week-of-september-9th-9.png)

While the survey is active the agent won’t be able to write in the conversation. The survey would end when the consumer finishes entering the survey or when the survey timeout is reached. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

For more information on this feature, please refer to the [User Guide](). Please also refer to the release notes for \[Post Conversation Survey Reporting\].()

### Facebook Messenger and Apple Business Chat support for Post Conversation Survey (LE-90206, LE-89069)

The post conversation survey is now supported for the Facebook Messenger and Apple Business Chat connectors, giving brands the ability to collect feedback from consumers at the end of a conversation. It is delivered in a conversational experience to drive higher completion rates.

**It contains:**

* Special predefined questions - CSAT, FCR & NPS
* Custom brand KPIs
* Free text questions
* Survey logic based on consumer responses
* Full reporting & analytics on survey responses, answer distribution and funnel metrics

<br/>
**Survey Experience in Facebook Messenger:**
For use in Facebook Messenger, you can configure the survey through the Bot Studio using LE structured content and it will be seamlessly translated into Facebook’s templates (quick replies, cards etc.) Brands can configure one survey and apply it to all channels, or they can configure separate surveys per channel (each channel should have a separate skill).

![](/img/week-of-september-9th-10-1.png)

**Survey Experience in Apple Business Chat:**
LiveEngage automatically translates rich surveys into textual surveys for the ABC channel.

Brands can configure one survey and apply it for all channels or they can configure separate surveys per channel (each channel should have a separate skill). When configuring the survey in the Bot Studio, the brand must configure the ‘fallback text’ on every rich element, this way they can customize the experience for textual channels.

![](/img/week-of-september-9th-11-1.png)

{: .notice}
**Please note:** This feature requires enablement - please contact your LivePerson account team.This feature requires enablement - please contact your LivePerson account team.

**Limitations:** Quick replies will have the 'alt' property (for text fallback) defined in UMS version 3.15 which will only be rolled out in October - this means that in the first version of surveys for ABC, quick replies will not be supported.

### Audio Message - Facebook Messenger and Apple Business Chat Support (LE-89904)

The Apple Business Chat and Facebook Messenger connectors to LiveEngage now support the following audio message flow:

* Consumer on ABC or FBM records and sends an audio message to an agent on LE
* Agent receives an audio type message and can play the message the consumer has recorded on the agent workspace
* Agent can play and replay audio messages sent by consumers for open and closed conversations (agent cannot record audio messages)
* Consumer can replay his own audio messages (speaker only) - as supported on each channel
* LiveEngage does not convert voice to text

Audio messaging is currently still in beta, due to the fact that the audio files are not yet going through a sanitation process in LiveEngage (sanitation will be added later in September). Customers that are interested in joining the beta program should contact Or Garmolin to sign the beta agreement.

**Supported formats and sizes:**

* Recording length supported by UMS is 2 minutes (a larger file will be rejected and an error message will be sent to the consumer)
* File size supported by UMS is up to 5MB
* Supported formats: connectors will convert the connectors audio file type to MP3

**Limitations:**

* Audio files longer than 2 minutes will be rejected - error will be shared with consumers
* Audio message will not be converted to text - agent will only be able to play and listen to the the audio file

{: .notice}
**Please note:** This feature requires enablement - please contact your LivePerson account team.

![](/img/week-of-september-9th-12.png)

![](/img/week-of-september-9th-13.png)

### Dynamic text (macros) in Predefined Content for messaging (LE-91252)

This feature enables users to set up dynamic text, such as agent name or skill name, within the predefined content template for messaging conversations. Predefined Content helps automate some of the agent’s freehand typing, which will result in better agent productivity.

#### **Setting**

Accounts may now use the dynamic text option in the “Manage Predefined Content” screen (campaign footer) for messaging as well as chat.

The supported dynamic texts are (as available for chat today):

1. Skill Name - $!{skill.name}
2. Skill Description - $!{skill.description}
3. Agent Name - $!{operator.displayname}
4. Agent Nickname - $!{operator.nickname}
5. Agent Email - $!{operator.email}

The feature is also supported for rich content and quick replies (accounts can use the macros within their code).

#### **Agent experience**

1. Agent can choose a Predefined content template containing a dynamic text, or type a dynamic text freehand
2. Once template with the dynamic text is chosen, its value is inserted within the text editor
3. The dynamic text value will be shown in the transcript area immediately after the agent sends the message.

{: .notice}
**Please note:** this functionality is available only through the web agent (LE UI) and not directly through the API.

Configuration of predefined content:

![](/img/week-of-september-9th-14.png)

The text editor before sending the message:

![](/img/week-of-september-9th-15.png)

The message after it is sent:

![](/img/week-of-september-9th-16.png)

### Resume conversations without time restrictions (LE-83882)

Agents and agent managers now have the ability to resume conversations with consumers at any point in time after the conversation is closed. Previously, the time frame limit for resuming a conversation was just 14 days after the conversation closed. Now, the conversation can be resumed for the length of time it remains on the LiveEngage database (13 months).

Following message shall not appear anymore :

![](/img/week-of-september-9th-23.jpg)

### Remove 'description' from Agent Widget SDK setConsumerProfile (AE-374)

The ‘description’ property cannot be updated by an agent using the Consumer Profile API as it is reserved for the consumer’s external ID. When an agent updates the 'description', assuming it is used to describe the user, that property populates the 'Consumer ID' field in the consumer info widget. This causes unexpected behavior for the agent.

In order for brands not to misuse it, we need to prevent agents from setting that property when updating the consumer profile. Therefore, the field ‘description’ is removed from the update API. If it is sent as part of the setUserProfile, it will be ignored.

## Enhancements

### Chat back-end server: Remove interaction content access for LPA users (89500)

Remove access to interaction content by having the following settings/permissions enforced on LPAs upon login: change LPA user privileges from 8, 10, 33 to 9, 10, 33.

### Chat back-end server: Convert Date to Long with insufficient data (93480)

Some customers send SDEs without last payment date object, that should have a year, month, day fields. When Denver issue a call to IDP it gets LPGWT, without lastPaymentDate.

Denver tries to convert to Long and fail.

Solution: If one of the fields is null - don't convert the object to long, but return null.

### Chat back-end server: Adding FaaS PostSurvey Implementation (92041)

Enabling the usage of FaaS for the Denver PostSurvey Email Transcript notification.

### Chat back-end server: GDRS - Ticketing Implementation AppServer (89437,92462,89441,85057)**:**

As part of the “Right to be Forgotten” epic, consumer related data needs to be masked from existing tickets via a new dedicated GDRS API, if a RTBF request arrives from a brand’s consumer. This enhancement is applicable only for legacy account customers with Ticketing system.

* The tickets themselves will not be deleted but rather the metadata which links the tickets to the requesting consumer will be masked: ticket message (email) headers, UDEs (legacy SDEs) and ticket contact info.
* Attachments in relevant tickets should be completely deleted.
* The APIs for masking data will be available only for live accounts.
* Legacy accounts which upgraded to LE (i.e. those who have not created a new site for LE), won't have ticketing ​system available to them. If they moved to a new site, their legacy one will remain live for 13 months and they should be able to mask consumer personal data during that time.

## Bug Fixes

### Chat back-end server: Password policy - update passwords blacklist in PasswordPatterns.txt (91288)

This bug is applicable to the AppServer and enforces by default the prevention of using commonly used password phrases when setting a new password as an authenticated user to LE.

### Chat back-end server: Open redirect vulnerability - sales/base.liveperson.net (88039)

Remove the risk that attackers could use this link in order to redirect users for malicious sites.

This is part of the effort for limiting the allowed redirection targets to same-origin resources and white-listed domains if needed.

### Agent workspace: Real time dashboard not refreshing automatically (LE-92947)

On LiveEngage -> Visitors tab -> Real Time Databar and associated dashboard does not refresh automatically (unless the page has been refreshed manually). This bug is a result of the previous LiveEngage version and is now fixed, so the dashboard will be refreshed automatically every 10 seconds.

![](/img/week-of-september-9th-18.png)

### Agent workspace: Empty data for AOV and revenue widgets (LE-93425)

On LiveEngage -> Campaigns tab -> Dashboard, the “Average Order Value” and “Revenue After Chats” widgets displayed with empty data.

This bug is a result of the previous LiveEngage version and is now fixed, and the widgets now display both the AOV and revenue after chat real data.

![](/img/week-of-september-9th-19.png)

### Agent workspace: lpTag overrides lpTag.identities property (LE-92870)

With the introduction of the new Identity function, brands can determine the identity of logged-in (authenticated) users on each page, ensuring a smooth transition between authenticated and unauthenticated pages. With this fix, the identity can be added to the page before the lpTag.

The updated lpTag is available for all customers to implement on their webpages. lpTags, which were already implemented before, will not be updated automatically. In order to benefit from the change customers are requested to reimplement the new lpTag on their pages.

### Messages sent from agent to consumer are marked as “read” when agent manager joins the conversation (LE-88929)

On “All connections” > summary view:

Messages sent from agents are marked as “read” (with two orange check marks) if they were read by the agent manager who joined the conversation. The status should be changed only when the consumer reads the messages. This bug is now resolved.

### Conversation engagement attributes shown in chat sometimes if both handled by the same agent (LE-91274)

On Visit info > consumer info , Visit info > personal info:

When an agent takes both chats and messaging conversations at the same time, personal data information from different conversations may leak to the chat. Once the browser is reloaded, irrelevant information is removed.

The conversation data:

![](/img/week-of-september-9th-20.png)

The chat data with the leaked conversation data:

![](/img/week-of-september-9th-21.png)

### Wrong wait time behavior for transferred chats (AE-197)

On Visit info > Visitor info > wait time:

When transferring a chat, the wait time should display the duration between the time of the transfer till the agent’s assignment. Instead, it displays the overall chat time. This issue has been resolved.

After the fix, the wait time is reset (in this case auto accept is on, so the wait time is 0 minutes after the transfer. Before the bug the value would have been the total chat time):

![](/img/week-of-september-9th-22.png)