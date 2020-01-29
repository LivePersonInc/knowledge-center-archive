---
pagename: Week of February 3rd
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-february-week-of-febuary-3rd.html
isTutorial: false
isNew: false
date: '2020-01-29'

---

These release notes include new features arriving to LiveEngage during January 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Proactive Messaging
### Type: Enhancement

Proactive messaging was previously in early access but is now available to all our customers.
 
**Updates to Proactive messaging include:**
- Reliable routing using LiveEngage Campaign & Engagement instead of the routing bot
- First outbound message is now part of the conversation transcript instead of a widget
- Full set of LiveEngage skills available when scheduling the proactive campaign (no longer need to manually on-board new skills)
- Full set of approved WhatsApp message template when scheduling a proactive campaign (no longer need to manually on-board new message template)
- Ability to choose what number to send the outbound message from for both SMS and WhatsApp (no more manual hard-code configuration to set the send from number)
- Ability to create WhatsApp Message Templates for Proactive outbound and submit to WhatsApp for approval
 
**Additional features include:**

**Self-service onboarding** -  A simpler, self-service onboarding option is available. Brands can access Proactive Messgaing via Quick Launch and request access through LivePerson account team.
 
**Scheduling guardrails** - To help brands to stay in compliance, we ensure that the tool only sends outbound messages to recipients within the compliance timeframe based on the recipient's time zone. This is determined based on their phone number's country code and area code. Brands can customize this time window to their preference but the default time window is 8am-9pm. For example, a proactive campaign starts at 8pm PST sending outbound messages to recipients in New York City, EST time zone. Our tool will smartly determine that it is outside of the allowed send window for the recipient, put the message in the queue with Scheduled status, then attempt to send the message the next day at 8am EST for the recipient.
 
**Generic opt-out service for Proactive Messaging** - if a consumer opts out of SMS for a particular brand, we will ensure no future outbound message will be sent to that consumer from any phone number that is associated with that brand (managed by LivePerson) unless the customer re-opts-in. 
 
**GDPR (General Data Protection Regulation)** - We are fully GDPR compliant. If a consumer requests to be forgotten, we will honor it per LivePerson's standard. 
 
**Support multi-regions** - Proactive is built on Amazon AWS on three regions US-West, EMEA and APAC. 
 
For more information please click [here](https://knowledge.liveperson.com/messaging-channels-proactive-messaging-proactive-messaging-overview.html)

## Goal Tracker for Messaging (Report Builder)
### Type: Enhancement [RB 4.2]

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

The new ‘Goal tracker report for Messaging’ will now allow brands to measure the conversions for all agents participating in the consumer journey based on the cross-session window configuration in the account. This helps brands better attribute conversions to all the agents who were assigned to the conversation, as well as the ability to increase accountability and motivation. 

The new report will show data at the Brand, Agent and Skills level, alongside compelling data such as: assigned time and number of sent agent messages. This allows brands to make better decisions regarding the contribution of each agent to the achieved goal.

![](img/RB2.4_1.png)
![](img/RB2.4_2.png)

{: .notice}
The existing ‘Goals Tracker Report’ will be renamed to ‘Goals Tracker for Live Chat’ and will include messaging data only for the next 6 months. It can be used for settings of First/Last agent only.
The Dashboard will show data only for sources that supports campaign in LiveEngage ( Web messaging and in app messaging)

**How to enable**
The new Dashboard is enabled OOTB.
New settings will be added to LiveEngage UI to enable brands to choose the attribution model for messaging (First, Last, All). The window for consideration is the same cross session window defined in Live Engage UI.
The UI is not deployed yet, in order to change the setting to ‘All’  please contact the Live Person account team.

## Messaging Performance Grids (Report Builder)
### Type: Enhancement [RB4.2]

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Messaging Performance grids based on Messaging Performance Dashboard will be available also in Excel export format, for the Brand and Agent in daily and monthly level aggregations to allow easy subscription to the data.

- Performance Messaging Agent Grid - Daily / Monthly
- Performance Messaging Brand Grid - Daily / Monthly
