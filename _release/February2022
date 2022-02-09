---
pagename: Week of February 9th
categoryName: Release notes
subCategoryName: "2022"
indicator: both
subtitle: ''
level3: February 2022
permalink: release-notes-2022-february-week-of-february-9th.html
isTutorial: false
isNew: false
date: '2022-02-08'

---

These release notes include new features arriving February 2022. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Rich content consumer events are forwarded to the bots 

### Type: New feature [Bot Connectors 2.37]

**Available to all customers?** Yes

Rich content events will now be processed by Third-Party Bots and the data will be made available to all bots through the context data. 
Exactly which events are supported depends on the channel, e.g., on WhatsApp the consumer can now share its location with the bot.
Rich content messages can be identified by the com.liveperson.bot-connectors.consumer.send-rich-content identifier in the message payload.
The data of such a message can be found inside the lpEvent sent on the context payload. 


## Support Conversational Cloud vanity domains

### Type: New feature [Bot Connectors 2.37]

**Available to all customers?** No

So far the Third-Party bots UI could only be fully accessed inside the Conversational Cloud if it was running under a LivePerson Domain. In order to support vanity domains this limitation has been removed. Be advised that the Third-Party Bots API will stay reachable only from LivePerson Domains and vanity domains.

## Support new version of the Medallia adapter

### Type: Enhancement [Bot Connectors 2.37]

**Available to all customers?** Yes
The Medallia adapter is able to send survey data asynchronously via the public API and disables all of Third-Party Bots static system messages on surveys except in case of internal errors. It also improves the information provided on survey conversation errors inside the bot dashboard.

## Dedicated wizard step for survey bots 

### Type: Enhancement [Bot Connectors 2.37]

**Available to all customers?** Yes

All survey bot settings not related to the AI vendor (the Medallia Adapter) have been moved to a separate step.
In this step the bot manager can configure which survey App ID and last conversation skill the bot accepts post conversation dialogues.
Additionally, the consumer-facing error message is now configurable in order to support addtional user cases, e.g. non-English surveys.

![](img/RN-2-2022-1.png)

## Prevent already assigned agents from being reused

### Type: Fix [Bot Connectors 2.37]

**Available to all customers?** Yes

The list of available agents in the wizard has been showing already assigned agents since the last release. This is fixed now and an additional check was added to the API to prevent bots from being assigned if they are already in use even in case the API is accessed directly.

## No override of authenticated SDEs with ‘null’ values

### Type: Fix [Bot Connectors 2.37]

**Available to all customers?** Yes

The consumer profile data can contain multiple SDEs of the same type. When merging these entries Third-Party Bots has accepted ‘null’ values as valid data in the past. With this fix ‘null’ values will no longer override properties of another SDE entry of the same type.


## Agent Assist' is now 'Conversation Assist' and comes with rich analytics

### Type: New feature [Conversation Assist]

**Available to all customers?** Yes

The Agent Assist application is now called Conversation Assist, and comes with several exciting changes to make it easier to set up recommendations and evaluate how well they are serving your agents with new, rich analytics.

<img width="400" src="week-of-november-10th-2021-2.gif" align="left" style="margin: 0px 25px 0px 0px;">

Conversation Assists is faster to access, as you can now do so directly from the Conversational AI applications page.

![](img/week-of-november-10th-2021-3.png)
The Agent Assist application—now called Conversation Assist—introduces several exciting changes to make it easier to set up recommendations and evaluate how well they are serving your agents.

![](img/week-of-november-10th-2021-4.png)

Conversation Assist’s new home page includes a dashboard of rich, diagnostic analytics. Use the dashboard to get an at-a-glance, holistic understanding of when and how recommendations are offered and used.

![](img/week-of-november-10th-2021-5.png)

The UI has been redesigned to make it more intuitive: You’ll find your knowledge bases and bots on two different tabs of the new Recommendation Sources page. From here you can easily turn these sources on and off and assign skills to them.

Find settings that impact all your recommendation sources on a redesigned Settings page. Use this page to:

* Temporarily suspend all recommendations if you need to.

* Configure the maximum number of recommendations to serve at one time.

* Set the minimum scores that answers and bots should have for them to be offered as recommendations.

* Customize the messages sent to the consumer when a bot is added to and removed from a conversation.

![](img/week-of-november-10th-2021-6.png)

## Sending Doc Feedback

### Type: New feature [Conversation Builder]

Watch this short, 45-second video to learn how to send us feedback on the Conversation Builder documentation. It's quick and easy. We value your feedback, so thank you in advance: https://player.vimeo.com/video/673282819

