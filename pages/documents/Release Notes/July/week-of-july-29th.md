---
pagename: Week of July 29th
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: July
permalink: release-notes-2019-july-week-of-july-29th.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during July 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## \[LE UI\] Control group settings - Support additional control group sizes

### Type: New functionality

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

LiveEngage supports the option to define a control group - a random number of visitors to your website who do not receive any type of engagement from a LiveEngage campaign, in order to evaluate the effectiveness and performance of campaigns (and your account as a whole).  
Up until today, LiveEngage supported the following increments: 0%, 5%, 10%, 15%, 20%, and 25% per account or per campaign.

We have added the option to configure a control group of any integer between 0% to 25% (increments of 1), to support more use cases to measure efficacy.

**Screenshots**

Control group - site level, before the change:  

![](/img/week-of-july-29-1.png)

Control group - campaign level, before the change:  

![](/img/week-of-july-29-2.png)

After the change:

![](/img/week-of-july-29-3.png)

![](/img/week-of-july-29-4.png)

## Post conversation survey - Close reason on conversation separator in agent workspace

### Type: Enhancement

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

When a consumer receives a PCS survey at the end of the conversation and does not answer it or chooses to skip the survey, the agent workspace doesn't reflect the circumstances in which the survey ended. This information is important for Agent Managers to have some reassurance that the survey worked as expected, meaning that it expired after a reasonable amount of time and as configured. Today agent managers need to open a support ticket in order to gain visibility into the circumstances in which the survey ended. With this new enhancement, the separator line at the end of the survey will reflect the circumstances in which the survey ended e.g. survey skipped, ended, timed out, etc.

**Possible PCS close reasons:**

* Survey expired - The survey timed out, ignored, partially completed, partially completed and then skipped.
* Survey skipped - the survey was skipped, closed due to unrecognized user input or ended by the consumer.
* Survey closed - The survey was completed in full.

**Screenshot**

![](/img/week-of-july-29-5.png)

**Possible PCS close reasons:**

* Survey expired - The survey timed out, ignored, partially completed, partially completed and then skipped.
* Survey skipped - the survey was skipped, closed due to unrecognized user input or ended by the consumer.
* Survey closed - The survey was completed in full.

**Dependencies**

* LE UI Version Release - 10.10
* PCS in use

## Promotion (Launchpad) link in QuickLaunch menu

### Type: Enhancement

Discoverability - exposing a dedicated unique link that will address a promotion page of all LivePerson’s products offerings.

The upcoming plan is to expose the ‘Launchpad LE-App’ in that link to make it discoverable and unique across other apps. The link will be visible once the Launchpad is deployed.

**Screenshots** 
![](/img/week-of-july-29-6.png)

## \[Sinch\] Sinch SMS connector - messaging capabilities

### Type: New functionality

The SMS connector to the Sinch (formerly referred to as ‘CLX’) gateway gives brands an alternative to the current SMS Twilio and SMS CM connectors. Sinch allows brands to converse with consumers using their SMS application (iOS or Android) and manage those conversations at scale using LiveEngage’s automation platform and operational tools.

**The messaging capabilities that are supported are:**
* Text
  * Agent to consumer
  * Consumer to agent
* Messages Status:
	* Delivered indication (agent to consumer) - based on delivery to the Sinch SMS gateway

{: .notice}
**Please note:** This feature requires enablement. Please contact your LivePerson representative for more information.

## \[Sinch\] Sinch SMS connector - Conversation Attributes

### Type: New functionality

This functionality allows for mapping of Sinch SMS gateway information and passing it to LiveEngage Engagement Attributes:
* **Consumer ID Engagement Attributes** - LiveEngage will manage a unique consumer phone number across the consumer’s conversations for a unified history, agent or bot context, and to allow the brand to map the consumer ID info to CRM systems in order to manage user identity. The consumer phone number will be mapped to the Consumer ID field in the “Consumer Info”, as well as to the “Customer Info” - “Customer ID” engagement attribute, and it will be visible in real time to the agent, the agent widget SDK or the agent SDK, as well as in historic conversations.
* **Sinch Business phone number** - The identifier for each business as registered in the Sinch gateway, which will be the brand’s registered SMS number. The Sinch business phone number can be applied for skill routing logic.   
  The brand’s Sinch business phone number will be mapped to the “Customer Info” - "Company branch" engagement attribute, and will be visible in real time to the agent, the agent widget SDK, or the agent SDK, as well as in historic conversations.
* **Consumer Phone Number Engagement Attributes** - LiveEngage will collect the consumer’s phone number and pass it as an engagement attribute to the agent workspace and reporting. The consumer’s phone number will be mapped to the "Consumer info" - "Consumer name" engagement attribute, and will be visible in real time to the agent, the agent widget SDK or the agent SDK, as well as in historic conversations.

**Enablement:** This feature is automatically enabled.


## \[Sinch\] Sinch SMS Connector - Skill Routing

### Type: New functionality

Enables brands to configure skill routing per the brand’s Sinch business phone number, in order to allow for routing rules to different skills based on the brand’s various lines of business.

**Please note:** This feature requires enablement. Please contact your LivePerson representative for more information.

## \[Sinch\] SMS Connector - Reporting on SMS source in LiveEngage

### Type: New functionality

Brands using the Sinch SMS Messaging connector on LiveEngage will be able to view the channel source as “SMS” on:

* Agent Workspace:
  * Open Connections - Consumer Info widget
  * All Connections - Consumer Info widget
* Reporting platform - report builder

**Enablement:** This feature is automatically enabled.

## \[Sinch\] Sinch SMS Connector - Post Conversation Survey

### Type: New functionality

The post conversation survey is now supported for the Sinch SMS connector, giving brands the ability to collect feedback from consumers at the end of a conversation. It is delivered in a conversational experience to drive higher completion rates.

**It contains:**
* Special predefined questions - CSAT, FCR & NPS
* Custom brand KPIs
* Free text questions
* Survey logic based on consumer responses
* Full reporting & analytics on survey responses, answer distribution and funnel metrics

**Survey Experience in SMS:**

LiveEngage automatically translates rich surveys into textual surveys for the SMS channel. Brands can configure one survey and apply it for all channels or they can configure separate surveys per channel (each channel should have a separate skill). Current channels supported are Apple Business Chat, Facebook Messenger and now SMS. When configuring the survey in the Bot Studio, the brand must configure the ‘fallback text’ on every rich element, this way they can customize the experience for textual channels.

For more information on the PCS and how it is configured please refer [here](/ai-bots-automation-post-conversation-survey-bot.html).

## \[Sinch\] Sinch SMS Connector - Secure Forms support

### Type: New functionality

Secure forms are now enabled for the Sinch SMS connector. Secure forms allow brands to perform identification and authorization, and pass payment details to process payments, share PII information to generate leads, or to perform a registration process during a conversation in a PCI compliant environment.

For more information on secure forms and how they are configured, please refer [here](/security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html).

## \[Sinch\] Sinch SMS Connector - Auto Messaging support

### Type: New functionality

Automatic Messages (AKA System Messages) are predefined messages about events that occur in the conversation and are sent to the consumer as the events occur. Their purpose is to gain the consumer’s trust in the messaging channel by setting expectations and giving the consumer visibility over the agent’s availability.

For more information on automatic messages and how they are configured, please refer [here](https://knowledge.liveperson.com/contact-center-management-messaging-operations-automatic-messages-automatic-messages-configuration.html).