---
pagename: Week of March 11th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: March
permalink: release-notes-2019-march-week-of-march-11th.html
isTutorial: false
isNew: false
date: 2019-03-20 16:34:40 +0000

---
These release notes include new features arriving to LiveEngage during Feb 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### \[Report Builder\] Response Time metrics (LE-95919)

| Web Messaging | Mobile App Messaging | SMS (Twilio) | Facebook | ABC | WhatsApp | Line | RCS Business Messaging | Google My Business | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

The response time metrics in the Messaging Performance dashboard are enriched to provide a detailed view of the consumers experience (i.e., how much time consumers are waiting for a response?), and a more accurate measurement for the responsiveness of the agents (i.e., how long it takes an agent to respond from the point the conversation is assigned to him?).

The existing metrics for Time to Response and Time to First Response reflect the average time measured from the moment the consumer sent a message to the moment when the agent send his response. These metrics can be be used for analyzing the consumer's experience in messaging (i.e., how much time consumers are waiting for a response?), hence have been renamed to ‘Avg Wait Time’.

New metrics, reflecting agents’ efficiency, have been added, helping agent managers to answer questions such as - how efficient is the agent in responding to conversations? how long does it take the agent to respond? These metrics are measured from the moment the conversation was assigned to the agent to the moment the agent sent his response.

#### Consumer Experience metrics

| Metric Name | Description | OLD Metric Name |
| --- | --- | --- |
| AVG. Wait Time For First Agent Response | The time on average a consumer waits for a response to the first message the consumer sent in a conversation. Measured from the time the first message was sent by the consumer, to the first response provided by an agent in the conversation. | AVG. TIME TO AGENT FIRST RESPONSE |
| AVG. Wait Time For First Agent Response - First Time Conversations | The time on average a consumer who messaged the brand for the first time waits for a response from the brand. Measured from the time the first message was sent by the consumer, to the first response provided by an agent in the conversation. | AVG. AGENT FIRST RESPONSE TIME TO FIRST TIME CONVERSATIONS |
| AVG. Wait Time For First Human Agent Response | The time on average a consumer waits for a response from the first human agent assigned to the conversation.If a bot was the first assigned agent, the responses from the bot are omitted from this metric's calculation. Measured from the first message sent by the consumer in the conversation, to the first response provided by a human agent. | AVG. TIME TO FIRST HUMAN AGENT RESPONSE |
| AVG. Wait Time For First Human Agent Response - From Bot Escalation | The time on average a consumer waits for the first response in a conversation by a human agent. Measured from the time a bot escalates a conversation to another skill-queue to the first response give by the human agent. | AVG. TIME TO FIRST HUMAN AGENT RESPONSE FROM BOT ESCALATION |
| AVG. Wait time to first human agent response - After transfer | The time on average a consumer waits for a response from the first agent assigned to the conversation after it was transferred.Measured from the time the conversation was transferred (including skill-to-skill transfer, agent-to-agent transfer or takeover) until a response is given by the agent. | New metric |

#### Agent Responsiveness metrics

| Metric Name | Description |
| --- | --- |
| AVG. Time to Response from Agent Assignment | The average time taken by an agent to send a message to the consumer from the time the agent was assigned to a conversation.Measured for the all agent message sent in a conversation |
| AVG. Time to First Response from Agent Assignment | The average time taken by an agent to respond to the first message a consumer sent in a conversation from the time the agent was assigned to the conversation.Measured for the first agent message sent in a new conversation and after the conversation was transferred. |
| AVG. Time to First Response from Agent Assignment - After Transfer | The average time taken by an agent to respond for the first time after the conversation was transferred. Measured from the time the agent was assigned after the transfer. |
| AVG. Time to First Response from Agent Assignment - For New Conversation | The average time taken by an agent to respond to the first message a consumer sent in a conversation from the time the agent was assigned to the conversation.Measured only for the first agent message sent in a new conversation. |

**Please note:** No new visualization were added to the Messaging Performance Dashboard. The new metrics can be added to user copies by ‘edit access’ users.

### Predefined Grid Documents for Operational Reports (LE-98559)

| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | WhatsApp | Line | RCS Business Messaging | Google My Business | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

**Type:** Feature

**Available to all customers?** Yes

**Description**

As part of the ongoing effort to aid the adoption of Report Builder by Brands, and to allow Liveperson to progress towards sunsetting the BI reporting interface, liveperson is offering additional predefined documents intended for easy download and subscriptions. The content of these document replaces the grids that are available in the the Operational BI.

The documents come in two version; Daily and Monthly.

* The daily version has the ability to retrieve data for maximum of 4 months with data availability dating back to 13 months.
* The monthly version provides monthly aggregations of the metrics and can range from a single month to 13 months of data availability.

A new folder named ‘LE Predefined Grids’ is now available within the predefined dashboards folder containing the following documents:

| Predefined grid in RB | Same data is also available in - |
| --- | --- |
| BI grid | RB dashboard |
| Agent Activity Grid - DailyAgent Activity Grid - Monthly | Operational BI:Agent Activity Grid |
| Skill Activity Grid - DailySkill Activity Grid - Monthly | Operational BI:Engagement Activity |
| Survey Activity Grid - Daily Survey Activity Grid - Monthly | Operational BI:Survey Activity |
| Goal Tracker Grid | Operational BI:Agent Goal Tracker |
| Business Activity Grid - DailyBusiness Activity Grid - Monthly | Campaign BI:Brand (Site), Campaign and Engagement level |

{: .notice}
The Business Activity Grids are available in Report Builder since May 2018 (RB2.3). The grids have been moved into the predefined grids folder.

All the grids (new and existing) share the same look-and-feel, which is different from the RB dashabbords - they grids have white background while the dashboards have a dark theme. The white background allow easier to use grids in Excel.

**How to enable:** To enable, please contact you LivePerson account team.

{: .notice}
Users that wish to make changes to these documents can only alter the filter settings and save this as a user copy. There is not an option to alter the attributes and metrics nor change the sequence of the columns.

## Enhancements

### \[Report Builder\] Subscription expiration increase to 6 Months

| Web Messaging | Mobile App Messaging | SMS (Twilio) | Facebook | ABC | WhatsApp | Line | RCS Business Messaging | Google My Business | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

LivePerson has made an enhancement to Report Builder subscriptions that increases the automatic “Do Not Deliver After” default expiration setting for a subscription from 3 months to 6 months. Users will continue to have the ability to remove this default expiration time frame as they do today.

**How to enable**: Automatic for all subscriptions moving forward.

**Limitations:**
* For existing subscriptions, the “Do Not Deliver After” expiration date will need to be updated manually if applicable.
* The current process for renewing or modifying the subscription expiration date is not included in this enhancement.

![](/img/week-of-march-11th-4.png)

When setting up a new subscription, the default “Do Not Deliver After” date will be set 6 months in the future from the date the subscription is created.

## Agent Workspace

### \[Conversation Builder\] Enabling Automation.Conversation_Builder feature flag

| Web Messaging | Mobile App Messaging | SMS (Twilio) | Facebook | ABC | WhatsApp | Line | RCS Business Messaging | Google My Business | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | Yes | No | No | No | No | No |

**Type:** Enhancement

**Available to all customers?** No, only the ones with the Automation.Conversation_Builder feature flag enabled(in AC features)

**Description:** New privileges that will map to the roles that the LiveEngage user will have when logging in to Conversation Builder with SSO from LiveEngage.

**Dependencies:** Appserver, Denver, AC Users, UI, LE_UI 10.4

**Screenshots:**

**Administrator role(it has an extra privilege):**

![](/img/week-of-march-11th-5.png)

**Other roles (No admin privilege):**

![](/img/week-of-march-11th-6.png)