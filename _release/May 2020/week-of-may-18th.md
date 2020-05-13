---
pagename: Week of May 18th 
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-may-week-of-may-18th.html
isTutorial: false
isNew: false
date: '2020-05-13'

---

These release notes include new features arriving to LiveEngage during May 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Agent App - Android version 1
### Type:New feature (Agent App)
<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

The new mobile Agent App on Android offers agents working from home or on-the-go basic messaging capabilities, so they can continue to serve customers with efficiency. Agents can use the app to complete conversations with consumers including:  Accept new conversations when agent is online, manage the list of conversations, transfer to another skill, close conversation or return them to the queue.

Other functionalities included in this version:
- Receive message (text) from consumer
- Send message (text) from consumer
- Change agent status (Online, back soon, away)
- End conversation
- Push Notifications
- French Language
- Show open and closed conversations
- Return to queue
- Transfer conversation to skill or agent
- Manager view
- Authenticated Messaging
- Limited WhatsApp functionality

#### How to enable
Search for LivePerson Agent App in the Google playstore & Download the app 

Please note: 
In the future the following functionality will added:
- Live video calls
- Tablet version
- Photos, videos & file sharing
- Structured content
- Secure forms
- Multi send back to queue
- Consumer info
- SSO
- Network effect support
- Automotive specific feature support

![](img/Agent-App-Android-RN.png

{: .notice}
The new Agent App will be released initially for Android in 4 steps in Q2 and Q3. In Q4 it will be released for IOS and replace the existing IOS Agent App.

For more information on the Agent App Android Version, please see the Android [user guide](https://knowledge.liveperson.com/agent-manager-workspace-agent-app-android-user-guide.html)

## COVID-related Rapid Response Automation Templates
### Type: New feature

Due to COVID-19, many customers are experiencing high volumes of intents. Customers need turnkey solutions to deploy quickly. This initiative is to create automation solutions for our customers and get them up and running quickly.
What are the bot packages?

There are two bot packages, Basic and Plus, that are focused on handling a brand’s top volume intents:
- Basic: Routing bot with FAQs
- Plus: Routing bot with FAQs and data collection (to give agents data that they need to close the conversation quickly)

To deploy quickly, we're customizing these packages for certain verticals:
- Airlines
- Travel
- Telco
- Financial Services
- Utilities
- Insurance
- General
For more information on how to get started and access these packages, please contact your LivePerson account team.

## Post conversation survey bots
### Type: New functionality (Conversation Builder)

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

{: .notice}
Before using this feature, it must be enabled in Conversation Builder by LivePerson. Contact your LivePerson account representative to have this configuration change made.

In this release, Conversation Builder introduces survey bots, which you can create and manage directly within the Conversation Builder application. A survey bot lets you collect feedback from consumers at the end of a conversation with a custom bot or human agent. The survey bot can ask:
- Specialized questions designed to provide First Call Resolution (FCR), Customer Satisfaction (CSAT), and Net Promoter Score (NPS) survey metrics
- Questions that reflect your brand's key performance indicators
- e-text questions

Use a survey bot to measure bot/agent and skill performance and to identify opportunities to improve on your quality targets.
![](img/RN-May18-1.png)

Please note:
- To use survey bots created in Conversation Builder, you must log into Conversation Builder via single sign-on through the Conversational Cloud (previously known as LiveEngage). This feature isn't supported on the AWS platform where you log into Conversation Builder directly.
- Survey bots are supported only in Messaging, not in Live Chat.
- Before using this feature, it must be enabled in Conversation Builder by LivePerson. Please contact your LivePerson account representative to have this configuration change made. 

## Language support
### Type: Enhancement (Conversation Builder)

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

In this release, we’ve enhanced the language support for simple and complex bots:

#### Simple bots
These are bots that don’t use Natural Language Understanding (NLU) for intent matching and instead rely on pattern matching. When you create a simple bot and set the bot’s language, you can now specify any language that’s desired. The list of available languages includes all those supported by available NLU providers (LivePerson, Google Dialogflow, and IBM Watson). If you don’t see the language that you need, you can select “Other” and specify the language.

#### Complex bots: 
These are bots that use some measure of NLU for intent matching. When you create a domain, you can now select from all languages supported by the NLU provider (LivePerson, Google Dialogflow, and IBM Watson). Previously, only a subset of the 3rd-party NLU provider’s languages were available.

{: .notice}
When you create a complex bot and set the bot’s language, take care to select the language of the domain that will be associated with the bot. Otherwise, errors will occur during NLU processing.

## Proactive 2.0 API
### Type: New functionality (Proactive Messaging)

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

Proactive Messaging enables brands to send outbound messages to consumers and when consumers respond creating 2-way conversations in Conversation Cloud platform (previously named LiveEngage). Proactive Messaging v2.0 API is the latest API release with a high send rate (up to 10 messages/account/second), rate limiting, support for guardrails and integrates with LE campaign and engagement for conversation routing. Proactive Messaging v2.0 API is currently available to all customers for WhatApp channel.

#### How to enable
Fill out this request to get onboarded to Proactive first.
Create 2 new bot users in Conversational Cloud (previously known as LiveEngage). LivePerson account team can do this on behalf of the brand using elevated LivePerson credentials. Please make sure the bot users have Campaign Manager roles & privileges. 
Provide LivePerson Proactive team with the user key and secret of the 2 bots created in step #2. We will coordinate this with you after you fill out the details in step 1. 
LivePerson will provide brands the client ID and secrets which will be used to create an app jwt for authentication. 

### Limitations
- This API doesn’t support SMS in this release. This will come in a later release.
- This API doesn’t support multiple send-from numbers yet. This will come in a later release. 
- This API doesn’t support passing basic context such as customer information, shopper id, or any information brands want to pass along to help the agents to have more context when there is a response to an outbound message. 
- This API doesn’t support sending messages on WhatsApp with fall back on SMS.

## Personal info attributes in Engagement History API 
### Type: New functionality (Messaging History API)
Add address (country, region, zipCode) has been added to the personal information in messaging responses.

## Bug fixes for Messaging History API
- In the Agent Survey, there was a mismatch between questions with the corresponding answers. 
- Incorrect campaign info presented for chat session 
- Fix OS version field 
These issue has now been resolved. 

## Double Account Rollover
### Type: Enhancement (UMS 3.25)
Ability to rollover conversations from a Brand to another Answering Service, then to another Answering service that might be used as backup.  This feature is highly valuable for Brands that have centralized answering services, that need back-up answering service provided by LivePerson or another vendor.

## Updated UI for CoBrowse for Voice agents
### Type: Enhancement (CoBrowse 3.15)

The user interface of the CoBrowse for Voice agent console was updated to align with the beautified UI and dark theme. 

![](img/week-of-may-18th-1.png)

## Voice/Video Calls: Camera no longer required 
### Type: Enhancement (CoBrowse 3.15)

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

In the event that an agent and consumer are chatting, and the agent does not have a camera connected, video calls will still start with voice in both directions and consumer-to-agent video only. 

## Voice/Video Calls failed to resume
### Type: Bug fix (CoBrowse 3.15)

When navigating to a different page during a video or voice call, the call did not resume after the new page was loaded. This bug has been resolved. 

## FaaS CLI
### Type: Enhancement (FaaS V1.17)

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>N/A</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

FaaS CLI is LivePerson Functions’ very own command line interface. It allows you to create, deploy and manage Functions as well as debug them without the need to login into the FaaS UI. If you work with FaaS on a daily basis you can expect many quality of life improvements such as being able to use your own development tools (e.g. visual studio), easily share code across different accounts or managing the versioning of your function using popular tools such as git. 


