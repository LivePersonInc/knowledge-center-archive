---
pagename: AI Annotator
categoryName: Bots & automation
subCategoryName: ''
indicator: both
subtitle: AI Annotator provides brands with a straightforward way to identify, flag, and correct automation issues
level3: ''
permalink: ai-bots-automation-ai-annotator.html
isTutorial: false
isNew: false

---

## Overview

AI drives an increasing amount of conversations, due to the efficiency and superior customer experience it delivers. In an environment where consumers' needs are constantly changing and the AI automations built by brands are being revised accordingly, it is important to quickly find and correct issues that may impact consumer experience. 

<iframe src="https://player.vimeo.com/video/506110564?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

AI Annotator provides brands with a straightforward platform to do so, by empowering agents and QA teams to provide valuable feedback with an easy-to-use and efficient interface. This feedback can then be easily reviewed and used to correct the brand’s AI automations. This process of labeling data which is later used to improve an AI model, is called AI Annotation.

{: .notice}
**Please note:** AI Annotator requires backend enablement. Please contact your LivePerson representative for more information.

### The annotating agent

By the nature of their work, agents are exposed to hundreds and sometimes thousands of conversations. As a result, they practically become “distinguished experts” in identifying consumers' needs and wants based on text. When agents receive a conversation, they quickly understand the consumers’ intent, and in the event that the intent is not clear, they have the option of asking the consumer to clarify it. Therefore, agents are in an ideal position to identify AI automation issues and suggest a correct solution. Agents can use their expertise to suggest an intent for messages in which bots did not identify the intent. In many cases, the permission to annotate is granted to the more experienced agents. 

## Intent Annotations

One common use case occurs when a bot does not recognize the intent behind a consumer’s message. For example, in the event that a consumer says “I would like to activate my service” and the bot does not recognize the intent. This will happen when the training phrases that comprise the brand’s intents are not yielding a high enough confidence level to trigger an intent identification. 

When an intent is not recognized, a fallback message will be triggered and the consumer may be asked to rephrase the message. Finally, if the bot does not recognize the intent in the rephrased message, the conversation may be escalated to an agent, who will handle the conversation.

![](img/ai-annotator-1.png)

The brand’s goal would then be to quickly find the consumer intent that has not been identified, and add it to the bot training model as a training phrase. By doing so, the bot will be able to identify the intents behind similar consumer messages in the future, and prevent the conversation from being escalated to a live agent.

AI Annotator achieves this by providing users who view conversations with the ability to annotate the correct intent. Once the annotation is submitted, the consumer phrase along with the suggested domain and intent will be presented in the “AI Tasks” tab. A user with permissions to view the tab and edit the intent model can add the consumer message into the correct intent. 

![](img/ai-annotator-12.gif)

## Setting up Intent Annotations

### Step 1 - Initiating bots to create Intent Annotations

In the Conversation Builder Bot Settings, go to “More Settings” for the bot which is expected to open Intent Annotations. Note: select bots that are using the LivePerson NLU (V1 or V2) or a third party NLU using the Fire API. A bot that is based on patterns only, will not create annotations

![](img/ai-annotator-2.png)

Turn on the “Enable Agent Annotations” flag and click “Save”

![](img/ai-annotator-3.png)

In Conversation Builder, under the bot “Agent Connector”, click Stop and then Start. 

![](img/ai-annotator-15.png)

### Step 2 - Provide users with permissions to open Intent Annotations

Turn on the permission “AI Annotator: handle Intent Annotations” via “Edit Profile” for the **Bot** users that are expected to open annotations. This permission is available for the roles: “Agent” and  “Agent Manager” and is Off by default.

![](img/ai-annotator-4.png)

### Step 3 - Provide users with permissions to submit Intent Annotations

To enable human users (e.g. agents, or bot tuners) to view the “Intent Annotations” widget and submit annotations, turn on the permission “AI Annotator: handle Intent Annotations” via “Edit Profile”. This permission is available for the roles: “Agent” and “Agent Manager” and is Off by default.

![](img/ai-annotator-5.png)

To edit user roles click on the Manage Users and Skills tab, and make sure that the role is added to the annotating users. When editing a specific user profile, you may update user roles, under  “Assignment”. 

![](img/ai-annotator-6.png)

### Step 4 - Provide users with permissions to view submitted Intent Annotations

To enable users to view, copy and export the submitted annotations in the new AI Tasks tab, turn on the permission “AI Annotator: View AI Tasks”  via “Edit Profile” in Conversational Cloud. 

This permission is available for the roles: agent manager and admin, and is Off by default.

![](img/ai-annotator-7.png)

### Expected results 

With the configurations above done properly, a user with an “AI Annotator: handle Intent Annotations” permission will be able to see and submit annotations created by bots which were set to open annotations. In addition, users with the permission  “AI Annotator: View AI Tasks”, will be able to review, copy and export submitted annotations.

![](img/ai-annotator-8.png)

## Using Intent Annotations

### Identifying conversations with open Intent Annotations

Conversations with open Intent Annotations will feature a new icon in the shape of a question mark, appearing to the left of the conversation preview avatar. Conversations that have no Intent Annotations, or conversations in which all Intent Annotations have been submitted, will not feature the icon.

![](img/ai-annotator-9.png)

All the conversations with Intent Annotations can be easily found by using the filter in the All Conversations area. 

![](img/ai-annotator-10.png)

### Identifying messages with annotations

A message which has an open Intent Annotation will feature the question mark icon within the transcript area. If the Intent Annotation has not been submitted, the color of the icon will be white. If the Intent Annotation has been submitted, the color of the icon will be green.

A second method of identifying messages with Intent Annotations is by using the Intent Annotations widget, which is available for all users with the permission to submit Intent Annotations, and is populated with the annotations from the conversation. Similar to its appearance in the transcript area, the Intent Annotations icon will be white if the Intent Annotation has not been submitted, and green if the Intent Annotation has been submitted. By clicking on the Intent Annotation icon, the relevant message will be highlighted in the transcript area. If the message is not shown in the transcript area (i.e. above or below the fold), it will automatically scroll to become visible.

![](img/ai-annotator-11.png)

### Submitting an annotation 

To submit an Intent Annotation, click on the Intent Annotations widget icon. Within the widget, click on the message to reveal the Domain and Intent dropdown lists. The lists are populated with the domains and intents that were defined by the brand. Select the domain from the dropdown list and then select the intent. Click “Submit”. 

**Note:** Once an annotation has been submitted, it can not be canceled or edited.

![](img/ai-annotator-12.gif)

### Reviewing an Intent Annotation 

All submitted Intent Annotations, including the consumer message and the suggested domain and intent, will be available for review in the AI Tasks tab. You may filter for the Intent Annotations according to the time in which they were opened, navigate to the conversation to which it belongs, and copy an individual message to the clipboard. You may also export the list of Intent Annotations as a csv file.

![](img/ai-annotator-13.png)

***Remember:** viewing the AI Tasks tab requires granting a role permission.

### Adding Intent Annotations to an intent

For information on this, see [here](https://developers.liveperson.com/intent-manager-optimize.html) in the Developer Center.

## False Response Annotations
**Please note:** This feature may require backend enablement. Please contact your LivePerson representative for more information.

### False Response Annotation
One common use case occurs when a bot provides an incorrect response to a consumer’s message. For example, in the event that a consumer says “I would like to change my flight seat”,  the bot may identify a “change flight” intent instead of a “change seat” intent. This will happen when the training phrases that comprise the brand’s intents are not yielding an identification of the incorrect response. It also may be that the intent recognition is done correctly, but that the information included in the response is outdated or inaccurate.

Unlike the case where a bot does not recognize the user’s intent, the False Response cases are often difficult to discern, since inherently, the bot cannot report an issue it is not aware of. In case the bot is not successful in recovering from this situation,  the conversation may be escalated to an agent, who will handle the conversation.

![](img/ai-annotator-false-1.png)

The brand’s goal would then be to quickly spot this issue and correct it. For example, by tuning the intent or by tweaking the information included in the bot’s response. 

AI Annotator False Response achieves this by providing users who view conversations with the ability to flag incorrect Bot Messages. Once a message is flagged, it will appear in the “AI Tasks” tab. A user with permissions to view the tab can then correct the issue.

![](img/ai-annotator-false-2.gif)

## Setting up AI Annotator False Response 

**Step 1 - Providing users with permission to submit annotations**

To enable users to view the False Response flag and be able to flag messages, turn on the permission “AI Annotator: Handle False Responses” via “Edit Profile” for the human users (e.g. agents, or bot tuners). This permission is available for the roles: “Agent” and  “Agent Manager” and is set to “Off” by default.

![](img/ai-annotator-false-3.png)

**Step 2 - providing users with permission to view submitted annotations**

The "AI Tasks" tab is an additional tab in the Agent Workspace which enables users to view, copy and export the submitted annotations in this tab. Turn on the permission "AI Annotator: View AI Tasks" via "Edit Profile" in Conversational Cloud.

This permission is available for the roles: "Agent Manager" and "Admin", and is set to "Off" by default.

![](img/ai-annotator-false-4.png)

[Intent Analyzer](/https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-the-power-of-an-intent-driven-contact-center.html) is an Intent Management tool in Conversational Cloud. Brands who use this tool, may leverage it to display submitted annotations. 

In order to view submitted annotations in Intent Analyzer, first follow the steps required to view submitted annotations in the AI Tasks tab. Secondly, Make sure that Intent Analyzer is configured for your account and that you have [permissions](/https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-getting-started.html#managing-user-access
) to view it. 

## Expected results

With the configurations above done properly, a user with an "AI Annotator: handle False Responses" permission will be able to flag any bot response as incorrect, in conversations opened after the flag has been opened. In addition, users with the permission  “AI Annotator: View AI Tasks”, will be able to review, copy and export flagged messages. The users who performed the relevant configuration, will be able to view submitted annotations via Intent Analyzer. 

![](img/ai-annotator-false-5.png)
