---
pagename: Week of September 21st
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-september-week-of-september-21st.html
isTutorial: false
isNew: false
date: '2020-09-09'

---

These release notes include new features arriving September 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Android mobile SDK version 4.6.0 is now available (Android release with support for legacy library - not Android X) 
### Environment Requirements

The Android Mobile Messaging SDK version 4.6.0 uses:
* Minimum API version 19
* Compile API version 28
* Target API version 28
* Maps SDK "com.google.android.gms:play-services-maps:16.1.0"
(unchanged from version 4.5.0)

## Android mobile SDK version 5.4.0 is now available (variant of Android 4.5 with support for Android 10 and Android X)
### Environment Requirements

The Android Mobile Messaging SDK version 5.4.0 uses:
* Minimum API version 19
* Compile API version 29
* Target API version 29
* Maps SDK "com.google.android.gms:play-services-maps:16.1.0"
(unchanged from version 5.3.0)

## Auto Logout - Improve logout options
### Type: New functionality (Android SDK v4.6/5.4)

An SDK enhancement has been added that will prevent a second customer from viewing the chat history of the customer who chatted before them, while optimizing the flow in a way that clears just the necessary set of user information in a quick manner. This new feature adds an additional layer of security to our brand’s while verifying that conversation history and information will only be available to the consumer that was logged in to the app at the time of the conversation. 


**Please note - there a branding.xml attribute update:**
lp_hide_ui_until_auth is removed. Previous conversations will now not be displayed automatically until the consumer's authentication information is validated. 

## Android SDK crash due to empty recycler view object
### Type: Bug fix (Android SDK v4.6/5.4)

A crash that occurred when onSaveInstanceState method is called in SDK has been fixed. 

## "link_preview_enable_feature" configuration is not working as expected 
### Type: Bug fix (Android SDK v4.6/5.4)

A bug was discovered that “link_preview_enable_feature” config can’t disable link preview. The configuration now supports enabling and disabling the link preview in the conversation. 

## Failed to reconnect if LP token not expired
### Type: Bug fix (Android SDK v4.6/5.4)

A bug was discovered that caused Messaging.reconnect() not to work when the ‘token is expired’ flag was set to false. The new flow will include a reconnect method when the token is expired and the flag is not turned on, which means that the reconnect will be performed on any other IDP errors that are not expired JWT. 

## iOS SDK version 6.0.1 is now available 

**Environment Requirements:**
* The iOS Mobile Messaging SDK version 6.0.1 is supported on iOS versions 11 through 13.
* XCFramework is supported on CocoaPad versions 1.9.0 and greater.

**Content:**
* iOS SDK 6.0.1 contains same changes as [v6.0.0](release-notes-2020-august-week-of-august-31st.html)
* This is an additional version that also compiles on the XCode 12 beta

## Collaboration channels usage reports for messaging  
### Type: Enhancement [Analytics Builder 4.8]

**Channels**: Web Messaging, Mobile App Messaging

The Analytics Builder predefined dashboards: Agent Activity, Business Activity for Messaging and the Performance Dashboard For Messaging were enhanced to allow brands to measure the Collaboration channels ( Co Browse,Voice, video) ) usage and ROI. Brands can now track their daily usage and correlation of the feature usage vs. performance KPIs such as conversion, revenue, CSAT at brand, skill and agent level.

### Agent Activity:
In the agent Activity, the COBROWSE chat metrics were exposed: 

| Metric  | Description |  
|---------|-------------|
| CHAT COBROWSE DURATION (SEC)  | The total duration of COBROWSE sessions for Chat  |  
| NO. OF CHAT COBROWSE SESSIONS  | Number of COBROWSE sessions for Chat |  

New metrics for Messaging and StandAlone( CoBrowse for Voice) were added:

| Metric  | Description |  
|---------|-------------|
| CHAT COBROWSE DURATION (SEC)  | The total duration of standalone collaboration sessions ( CoBrowse for Voice)  |  
| NO. OF CHAT COBROWSE SESSIONS  | Number of standalone collaboration sessions ( CoBrowse for Voice) |  
| NO. OF STANDALONE COBROWSE INTERACTIVE SESSIONS | Number of Interactive standalone collaboration sessions ( CoBrowse for Voice). An interactive session involves participation of both agent and consumer, and lasts 60 seconds or more.|
| MESSAGING COLLABORATION DURATION (SEC)| The total duration of messaging collaboration sessions.|
| NO. OF MESSAGING COLLABORATION SESSIONS | Number of collaboration sessions. Interactive and non interactive sessions.|
| NO. OF MESSAGING COLLABORATION INTERACTIVE SESSIONS | Number of Interactive messaging collaboration sessions. An interactive session involves participation of both agent and consumer, and lasts 60 seconds or more| 
| COLLABORATION DURATION (SEC)| The Total Collaboration Duration for all channels: Messaging, Chat and standalone |
| NO. OF COLLABORATION SESSIONS | The Total NO. of Collaboration sessions for all channels: Messaging, Chat and standalone |
| NO. OF COLLABORATION INTERACTIVE SESSIONS |  The Total NO. of Interactive Collaboration sessions for all channels: Messaging, Chat and standalone
| COLLABORATION END REASON | The reason for the collaboration session end: SERVER, VISITOR, AGENT, TIMEOUT | 
| CHANNEL | Channel can be: Messaging, Chat, Standalone - mainly for CoBrowse for voice.| 

### Business Activity for Messaging, Performance for Messaging:

| Metric  | Description |  
|---------|-------------|
| MESSAGING COLLABORATION DURATION (SEC)| The total duration of messaging collaboration sessions.|
| NO. OF MESSAGING COLLABORATION SESSIONS | Number of messaging collaboration sessions for all session types.|
| NO. OF MESSAGING COLLABORATION INTERACTIVE SESSIONS | Number of Interactive messaging collaboration sessions.An interactive session involves participation of both agent and consumer, and lasts 60 seconds or more. |

**New attributes**

| Attribute Name  | Description |  
|---------|-------------|
| COLLABORATION SESSION TYPE | Collaboration Session Types: Voice,Video, Co Browse
| COLLABORATION END REASON | The reason for the collaboration session end: SERVER, VISITOR, AGENT, TIMEOUT

## PCI Forms usage for messaging
### Type: New functionality [Analytics Builder 4.8]
Channels: Web Messaging, Mobile App Messaging

The Analytics Builder predefined dashboards: Agent Activity, Business Activity for Messaging and the Performance Dashboard For Messaging were enhanced to allow brands to measure the PCI Secure forms usage and ROI. Brands can now track their daily usage, feature funnel and correlation of the PCI forms vs. performance KPIs such as conversion, revenue, CSAT at brand, skill and agent level.

#### Agent Activity:

| Metric  | Description |  
|---------|-------------|
| NO. OF SECURE FORM (PCI) SENT (MESSAGING)| Number of secure forms sent by an agent to a consumer during a conversation.|
| NO. OF SECURE FORM (PCI) SUBMITTED (MESSAGING)| Number of secure forms completed and submitted back to the agent by a consumer during a conversation.| 
| NO. OF SECURE FORM (PCI) VIEWED (MESSAGING) | Number of secure forms viewed by the consumer during a conversation.|

#### Business Activity for Messaging, Performance for Messaging:
**New metrics:**

| Metric  | Description |  
|---------|-------------|
| NO. OF SECURE FORM (PCI) SENT (MESSAGING)| Number of secure forms sent by an agent to a consumer during a conversation.|
| NO. OF SECURE FORM (PCI) SUBMITTED (MESSAGING)| Number of secure forms completed and submitted back to the agent by a consumer during a conversation.|
| NO. OF SECURE FORM (PCI) VIEWED (MESSAGING) | Number of secure forms viewed by the consumer during a conversation.|

**New attributes:**

| Attribute Name | Description |  
|---------|-------------|
| IS ACTIVE SECURE FORM (PCI)| Indicates whether the secure form has been deleted from the account's configuration. Use this attribute to filter out deleted secure forms|
| SECURE FORM (PCI) NAME | The name of the Secure Form (PCI)|

**Limitations:**
In the Agent Activity Dashboard, The filter ‘Conversation Type’  does not apply on the PCI Messaging KPIs.
In the Business Messaging dashboard, the Goal Type filter does not apply on the new Secure forms usage metrics 

## CCPLH and CCPOH added out of the box to the Performance messaging dashboard
### Type: Enhancement [Analytics Builder 4.8]

Channels:
Web Messaging
Mobile App Messaging

The ‘Performance Dashboard for Messaging’ was enhanced to include the CCPLH and CCPOH metrics for measuring Human Agent Efficiency.
The metrics are calculated based on Closed Conversation divided by Login\Online.

CCPLH =  Closed Conversations / Login Hours 
CCPOH  = Closed Conversations / Online Hours 

The metrics added by default to the Brand and Agent summary pages in a dedicated area to include data for Human Agents only and for non managers agents:.
* Login Hours  should only be captured for human non-managers.  Otherwise CCPLH will be artificially low.  
* Online Hours should also be captured for human non-managers only.
*  Avg. Agent Load is captured for non-managers, and it includes a filter to only include Human agents.  This is because bots have a default Max Capacity setting of 999, which artificially lowers the Agent Load

![](img/RN21Sept_AB1.png)

## Agent level funnel( Opened, Submitted, Closed) for Agent survey in ‘Survey Dashboard for Messaging’- SD-9476
### Type: Enhancement [Analytics Builder 4.8]
Channels: Web Messaging, Mobile App Messaging, Twilio, Facebook ABC, Line,Google RCS,Google My Business ,WhatsApp Business, CM, WeChat

The ‘Survey Dashboard for Messaging’ was enhanced to include the Agent funnel Analysis.
Till now funnel Analysis was available only for the Brands, with this enhancement, an Agent performance in regards to Agent Surveys submission can be analyzed as well.

## Adding Group Filter in ‘Business Dashboard for Messaging’.
### Type: Enhancement [Analytics Builder 4.8]

**Channels:** Web Messaging, Mobile App Messaging, Twilio, Facebook ABC, Line,Google RCS,Google My Business ,WhatsApp Business, CM, WeChat

The ‘Business Dashboard for Messaging’ was enhanced to include a Group filter on the metrics in the ‘Messaging Conversion - Daily' Cube to allow brands to measure conversions by group: 
* Total Conversions after Engagement 
* Total Direct Revenue after Engagement

Other metrics in the cube designed for measuring conversions on  scenarios where an agent is not involved will not be filtered by group, I. e. Self Service & Control group metrics.

## REQUESTED CHATS' KPI added to Business Activity predefined grids (Monthly, weekly)
### Type: Enhancement [Analytics Builder 4.8]

Channel: Chat

The ‘Business Dashboard for Chat’ grids were enhanced to include a the ‘'REQUESTED CHATS' KPI (Monthly, weekly).

## Cancel a Proactive outbound campaign
### Type: Enhancement [Proactive Messaging September release]

#### Channels: Twilio, WhatsApp Business

When a Proactive outbound campaign is created today, there isn’t a way to cancel it. This means, if a campaign is scheduled to go out to 1000 recipients by mistake, brands would have to reach out to the product team to cancel it. With this release, brands will be able to cancel the campaign by themselves from the UI. 
When a campaign containing multiple recipients is cancelled, Proactive will only stop sending the outbound messages to the set of recipients that have not been executed at that time. This means, if a Proactive campaign is scheduled at 09:10:01 time, and it’s cancelled at 09:10:31, any messages that are already sent during that time will NOT be cancelled. Any messages that have not been sent during that time will be cancelled. 

## Allow customized text for prioritized channel
### Type: Enhancement [Proactive Messaging September release]
#### Channels: Twilio, WhatsApp Business
When sending outbound messages on Proactive, brands can select ‘Prioritized’ channel. This means, the outbound message will be first sent on WhatsApp and if the consumer phone number is not eligible on WhatsApp, the message will be sent via SMS. When ‘Prioritized’ channel is selected today, the WhatsApp message template content is copied to the SMS section without an option to edit. With this release, brands will be able to edit the SMS fallback message if they choose to. 

## Show WhatsApp template rejection reason]
### Type: Enhancement [Proactive Messaging September release]
#### Channels: Twilio, WhatsApp Business

When a WhatsApp message template is submitted to WhatsApp for approval, it can be rejected. With this release, we add a column to show the rejected reasons as provided by WhatsApp. This will help brands to know why and can resubmitted the template accordingly. 

## Add lookback period to Proactive campaign creation experience]
### Type: Enhancement [Proactive Messaging September release]
#### Channels: Twilio, WhatsApp Business

A lookback period is the duration when the consumer response to Proactive outbound messages will be routed to agents/bots with the skill as specified in the Proactive campaign. Till date, when a Proactive campaign is scheduled a lookback period is set by default to 30 days and this value can not be changed. We recently enabled a feature to allow brands to set this value when the campaign is created. By default, the value is set to 30 days, which is also the maximum duration. Brands can set this value to 1 hour minimum. 

## Show list of phone numbers associated with WhatsApp Account ID when creating a WhatsApp message template]
### Type: Enhancement [Proactive Messaging September release]
#### Channels: Twilio, WhatsApp Business

For a single WhatsApp Account ID, there can be multiple phone numbers associated with it. When a brand creates a WhatsApp message template, it is useful to see what phone numbers are associated with the WhatsApp Account ID they are creating the template with. This enables brands to know if the message template can be used when sending outbound messages.

## Fix column sort on Proactive campaign list page
### Type: Bug fix [Proactive Messaging September release]

Previously, attempting to sort any column on Campaign list page will throw an error. In this release, we fix that issue and now brands can sort properly. 

## Fix column sort on Proactive WhatsApp message template page]
### Type: Bug fix [Proactive Messaging September release]

Previously, attempting to sort any column on WhatsApp message template list page does not work. In this release, we fix that issue and now brands can sort properly. 

## Fix date filter on Analytics page to show the current date
### Type: Bug fix [Proactive Messaging September release]

Previously, Analytics page’s filters always defaulted to 2019. With this release, we fix the issue and default to the current date.
