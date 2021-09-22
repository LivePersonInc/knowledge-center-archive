---
pagename: Week of September 7th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-september-week-of-september-7th.html
isTutorial: false
isNew: false
date: '2020-09-01'

---

These release notes include new features arriving September 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [SMS] Agent-to-consumer image sharing
### Type: New functionality (v3.27.7)

Agent-to-consumer image sharing is now supported for SMS. This capability enables agents to share images with consumers to explain complex issues or requests quicker and more accurately. Photo sharing makes messaging a more visual experience, increasing communication efficiency and reducing time to resolution.

{: .notice} 
**Please note:** This feature requires backend enablement. Please work with your LivePerson account manager to enable agent-to-consumer image sharing on your account and make sure that the agent has the required permission.

**Limitations:** This feature only works on MMS-enabled phone numbers.

![](img/week-of-september-6-1.png)

## [GBM] CSAT survey
### Type: New functionality (GBM 3.18.0)

A CSAT survey is now automatically triggered upon the closing of a Google Business Messaging conversation. This score reflects your customers’ rating of your engagement with the agent. The data is collected from customers in the post-chat survey. By reading your CSAT score, agents can see if they need to improve their messaging skills. 

*CSAT = total number of positive answers / total number of answers*

**Current functionality**

Trigger the CSAT survey (not PCS) and capture the survey results when:
* The conversation is manually closed by the agent or by the consumer. In case of no response or when the conversation is still open, Google triggers the survey after 12 hours. 

**Limitations:**

For ongoing conversations: a conversation is broken into sessions by the google API, so the CSAT can be sent every 24 hours
*  If LivePerson is triggering it, we can only trigger once every 24 hours. For example, if the conversation closes and we trigger the CSAT, then two days later the user replies again, we can send another CSAT survey.
* If LivePerson doesn't, Google will automatically trigger a survey after 12 hours. 

![](img/week-of-september-6-2.png)

## [Conversation Builder] Dialog Import
### Type: New functionality 

{: .notice} 
**Please note:** This feature is available for all channels supported by the Conversational Cloud platform.

In the Conversation Builder, you can now import dialogs from one bot to another in your organization. This can be useful when you have a well-defined dialog in one bot that you want to quickly and easily reuse in a different bot. During the import, the associations of domains, intents, and entities to interactions are maintained.

![](img/dialogs_import1.png)

## [Conversation Builder] Permanent variables
### Type: Enhancement 

{: .notice} 
**Please note:** This enhancement will be available to all clients as part of a future release.

As previously announced, in an upcoming release of the Conversation Builder, LivePerson will be removing the "Forever" option for the duration of a variable or a slot. No change to the Request, Dialog, or Session options will be made.
In addition, in the setBotVariable scripting function, we will likewise deprecate support for a value of “true” for the persistForever argument: setBotVariable(name, value, persistForSession, persistForever). A value of “false” for this argument will remain supported.
These changes are backwards-compatible and will not adversely affect existing bots. However, LivePerson will be contacting affected brands, so they can begin the development work to update their bots to take advantage of the recommended alternative for storing data long-term, namely, use of the Context Session Store. The Context Session Store allows for setting data in Global, User, and Conversation scopes.

![](img/foreverOption_RN.png)

## [Intent Builder] Pre-built domains
### Type: New feature 

{: .notice} 
**Please note:** This feature is available for all channels supported by the Conversational Cloud platform.

To get you quickly up and running with intents, LivePerson now provides a set of prebuilt domains that you can easily add to your Intent Builder environment. A “prebuilt domain” is a ready-made, pretrained domain that includes a set of well-defined intents. There are two kinds of prebuilt domains:
Generic, prebuilt domains for a number of verticals: Telecommunications, Financial Services, Airlines and Insurance.
A cross-vertical, prebuilt domain that is appropriate for all verticals. This includes intents for things like customer account management, customer order management, e-commerce, billing and payment.
Once you add a prebuilt domain, you can customize it as you see fit. And after customization, you’ll need to retrain the domain as you normally do.

{: .notice}
Domains added from prebuilt domains use the LivePerson NLU v2 engine.

For more information, click [here](https://knowledge.liveperson.com/getting-started-getting-started-with-intents.html#step-2-create-a-domain-by-selecting-a-prebuilt-domain)

![](img/Getting-started-intent4.png)

## [Intent Builder] Regular Expression entities
### Type: New feature 

{: .notice} 
**Please note:** This feature is available for all channels supported by the Conversational Cloud platform.

In Intent Builder, domains using the LivePerson NLU v2 engine now support Regular Expression entities. A “Regular Expression entity” has as its value a single expression that’s defined using Regular Expression rules, for example (for a 6-digit number):
^\b\d{6}\b
Use a Regular Expression entity in situations where the possible entity values all conform to a specific pattern, but that list of values is so long that it renders use of a regular entity (now called a “Value Set entity”) unfeasible. Some example use cases include:
* Flight numbers
* Order numbers
* Help Desk ticket numbers
When it comes to entity detection and intent matching, both Value Set entities and Regular Expression entities work in the same way.

{: .notice} 
Regular Expression entities are available only in domains using the LivePerson NLU v2 engine.

![](img/Entity_details.png)

## [Knowledge Base] Valid dates for articles 
### Type: Enhancement 

{: .notice} 
**Please note:** This feature is available for all channels supported by the Conversational Cloud platform

In the Advanced Settings of a Knowledge Base article, you can now specify optional Valid From and Valid To dates. If you specify these, an enabled article is active (i.e., returned in knowledge base searches in Knowledge Base integrations) for only that period. If you leave these fields undefined, the enabled article is always active.

Specifying valid dates for an article is useful when you have an article that’s only meant for use during a specific period of time. For example, you might be running a promotion over a holiday that has an associated FAQ. Before this change, you had to approve the article when needed and delete the article when no longer needed. With this change, all you need to do is specify the valid dates. The rest works seamlessly.

![](img/kb_validDates.png)

## Performance Optimizer
### Type: New Data Analytics Product Dashboard 

{: .notice} 
**Please note:** This is a paid for product and will only be available upon contract update 

The Performance Optimizer is a global application within Conversational Cloud that displays data in clear, consolidated views with relevant context such as industry benchmarks, account settings, and metric correlations.   At the core of the portal is a set of interactive dashboards aligned to 4 pillars of measurement: Operations, Automation, Intent, and Funnel.  Each pillar contains a dashboard module and enablement framework that clearly articulates how primary and secondary KPIs influence success and align to the 4E framework. 

The Performance Optimizer contextualizes data through anonymized brand comparisons, industry benchmarks, segmentations, and KPI targets. Narrative-driven dashboards and data contextualization allow people to diagnose issues in a faster, more intelligent way.  Successes and failures can be generalized and mapped to specific actions, and LivePerson expertise can be injected directly into Analytics views.  The net output of AI and Success Science within the Performance Optimizer is a simple graphic interface preventing the need for high cognitive skills such as complex information processing, advanced data analysis, and mathematical skills.  This provides users of the Portal not only with results, but with actionable information and recipes for success.

**How to enable**
Please contact your account team 

**Dependencies**
The Performance Optimizer only reflects messaging data. Brands who have not converted to messaging, or have partial messaging conversations will not see their chat data. 

**Limitations**
Only messaging conversations are included within the Performance Optimizer analytics dashboard. 

![](img/Performance-portal-RN.png)

## [Agent App] All updates to the Agent App on Android
### Type: Enhancements

**Consumer Info**
When messaging the the consumer, tapping on the consumer's name at the top shows information about the consumer. It also the source of their conversation and their WhatsApp phone number, if applicable. 

![](img/ConsumerInfo.jpg)

**WhatsApp Audio**
When messaging, if the consumer is connected by WhatsApp and sends an audio message, the application will present the audio with a headphone icon. Clicking the download button will download the message and then it can be played with the Play button. 3 screenshots with WhatsAppAudio1,2,3.

![](img/WhatsAppAudio1.jpg)

**Video calls**
Video calls within the app is now available on mobile.
To start a call from a conversation 
a. Click on the vertical ellipse at the top
b. Select Start Video Call
c. The first time a video call is made after app installation you need to accept camera and microphone permissions (two different permission prompts).
d. After that the workflow is the same as on web, the consumer will need to accept the call and then the video will begin

{: .notice} 
Video calls are only available for web messaging conversations.

![](img/Android-Agent-AppVideo3.jpg)





