---
pagename: Proactive Messaging for App Messaging 
categoryName: Messaging channels
subCategoryName: Proactive Messaging
indicator: messaging
subtitle: App Messaging is a new channel available in the Proactive Messaging solution that currently also supports SMS and WhatsApp
level3: ''
permalink: messaging-channels-proactive-messaging-proactive-messaging-for-app-messaging.html
isTutorial: false
isNew: false

---

App Messaging is a new channel available in the Proactive Messaging solution that currently also supports SMS and WhatsApp. Brands using the Mobile SDK will now be able to send outbound messages to their consumers via the app. 

## High-level capabilities

### Proactive Messaging APIs: 
Brands will be able to leverage the Proactive Messaging API in order to send outbound messages to consumers via App Messaging.  
Using the Proactive Messaging API capabilities, brands can:
* Define the skill that the conversation will be routed to once the consumer replies
* Define the recipient/s using the internal consumers’ IDs (the same internal ID used to authenticate brand’s consumers against their IDP in the In-App authentication flow)
     - Proactive Messaging API supports sending outbound messages to as little as 1 or as many as 100K consumers per campaign   
* Define the outbound message content (text and emoji only)
* Set a lookback period to control for how long the proactive outbound message configuration will be valid for:
    - Displaying the push message in the notification center
    - Routing to the configured skill     

### App Push Notifications: 
* Consumers will receive the outbound message via the app’s push notifications, enabling them to tap on the message and be directed to the messaging interface to start conversing 
* Brands can define if the push notifications will be sent when users are logged into the app, as well as logged out of the app.

### Agent and bot operations: 
* Agents and bots have the full details on the Proactive and IVR configurations which triggered the conversation, as well as basic consumer information in the ConsConversational Cloud workspace: 
   - Campaign info - Campaign name, engagement name, and skill, campaign source (e.g Proactive Messaging, IVR deflection, etc). 
   - Consumer info - Consumer device OS, device, country, city
   - Conversation info - Conversation start time, ID, and channel source (e.g App Messaging, SMS, WhatsApp.)

## Prerequisites

1/. Mobile SDK Installation: Brands need to install, configure and deploy the Mobile SDK (minimum iOS SDK version 6.2, minimum Android SDK version 4.7/5.5) on their mobile apps prior to creating a proactive campaign. To review the Mobile SDK installation guide, please see the developer documentation:

**For iOS:** please see the [installation guide](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-overview.html) and the advanced [configuration](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html) for Proactive App Messaging
**For Android:** please see the [installation](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-overview.html)guide and the [advanced configuration](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html) for Proactive App Messaging

2/. **LP Pusher:** For Proactive or IVR to App Messaging to be successful, push notifications must be configured in order to display the outbound messages to consumers when they are away from the app. To review the LP Pusher configuration guide, please see the [developer documentation.](https://developers.liveperson.com/push-notification-service-overview.html)
Note that brands can also choose to use their own push notifications as a push proxy, see the developer documentation to support push proxy. 

{: .notice}
Note that brands can also choose to use their own push notifications as a push proxy, see the [developer documentation](https://developers.liveperson.com/push-notification-service-overview.html) to support push proxy. 
 
3/. **Configure first message widget:**
Install the new widget in Agent Workspace to display the first outbound message. You can display a maximum of five outbound messages in 30 days.
* Follow the steps to create a new widget in the Agent Workspace.
* Create the widget name: InApp-Widget
* Copy this link for respective regions
  - NA Region - Copy this link for NA accounts: https://proactive-messaging.z1.fs.liveperson.com/api/cx-widget/login
  - EMEA Region - Copy this link for EMEA accounts: https://proactive-messaging.z2.fs.liveperson.com/api/cx-widget/login
  - APAC Region - Copy this link for APAC accounts: https://proactive-messaging.z3.fs.liveperson.com/api/cx-widget/login
* Add the link in new the widget screen

## Onboarding
Once the brands have successfully installed the Mobile SDK on iOS and Android as well as configured LP Pusher, Proactive Messaging API integration will be the next step:

**Proactive Messaging 2.0** - To review the onboarding steps to the Proactive Messaging API, please see the getting started guide in the [developer documentation.](https://developers.liveperson.com/proactive-messaging-api.html#getting-started)

### High-level sequence diagrams
![](img/PM-IAM1.png)

### Create campaigns for in-app messaging channel 
On the Conversational Cloud portal, go to the quick launch window and login into the Proactive Web Tool. Brands have to create API handoff in the webtool and use Proactive messaging API to schedule the proactive campaigns. Brands cannot send In-App campaigns directly from the webtool. Only users who have campaign managers or administrator privileges can access the webtool.  

Once logged in, follow the steps below for creating campaigns for the In-App messaging channel, 

#### 1. Create API Handoff
Click on the API HandOffs tab on the top of the screen. Then click “New Handoff”. In the wizard select “In-App” as the channel and follow the direction on the screen to complete the creation of an API Handoff. 

![](img/inapp-prmsg-create-1.png)

{: .notice}
Lookback period: This is the time period during which the consumer responses are routed to the skill specified in the Proactive outbound API. If the consumer responds after the lookback period it is routed to default skills.

![](img/inapp-prmsg-create-select.png)

App Name: up to 4 app names can be chosen in one handoff. 

#### 2. Call Proactive Outbound API to create the campaign 
	
In this step, we will use the API Handoff id created in the previous step and call Proactive messaging API to create campaigns. Here is the detailed documentation on the APIs. 
	
The image below shows the request payload for creating a campaign:

![](img/inapp-outboundapi.png)

The image below shows the response payload from the Proactive Messaging API endpoint: 
![](img/inapp-outboundapi2.png)

At this point, the Proactive API has sent the campaign to the consumers. Consumers will receive the proactive message as a push notification on their mobile. 
When they tap on the notification, the message will open in the conversation dialog of the brand’s app as shown below.
Agent or agent manager with the correct skill will receive the message from the consumer and accept it. The first Proactive message will display in the agent widget.

![](img/inapp-agent-workspace.png)

## Analytics Reporting 2.0 API
For getting detailed analytics for the campaigns please refer to the outbound reporting API documentation click [here.](https://developers.liveperson.com/outbound-reporting-api-overview.html)

## Feature Limitations
* Brands have to create API handoff in the webtool and use outbound API to schedule the proactive campaigns. Brands cannot send In-App campaigns directly from the webtool. Only users who have campaign managers or administrator privileges can access the webtool.   
* New outbound messages will NOT be sent if an open conversation currently exists between the brand and the consumer.
* Currently, there’s a rate limit of 10 req/ sec, the brands need to manage this limit on their end. 
* In case the consumer never logged into the brand’s app (not even one time) the consumer will not be able to receive the push notifications 
* If a welcome message is enabled on the account and an outbound message was sent, the welcome message will not be displayed. 
* We support sending only text messages (including text and emojis). 
* We support only authenticated App Messaging. 
* There is no support for consumer SDE yet. 
* InApp channels cannot be configured together with SMS or WA channels on the same proactive or IVR handoff configuration. This means that the channel prioritization feature will not be available between InApp to SMS or WhatsApp (however there will be no problem to onboard and enable all channels together on the account while receiving inbound messages from all channels).   
* The outbound message will be displayed to the agent in an Agent Widget on the Agent Workspace (this will not affect the consumer view of the outbound message in the messaging interface)
* Message Templates will not be supported as this is a specific solution for the WhatsApp channel. 
* iOS limitation - Due to operating system limitation, if the user does not tap on the notification in the notification center he/she will not be able to see that message in the brand’s App conversation interface.  




