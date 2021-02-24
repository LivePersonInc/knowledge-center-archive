---
pagename: Connect to App Messaging 
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-connect-to-messaging-connect-to-app-messaging.html
isTutorial: false
isNew: false

---

App Messaging is a new channel available for the Connect to Messaging (IVR deflection) solution, which currently supports SMS and WhatsApp. Brands using the Mobile SDK and allowing their consumers to message them through their app will now be able to deflect consumers from IVR to App Messaging.

## High-level capabilities

* **Connect to Messaging APIs:** Brands will be able to leverage the Connect to Messaging 2.0 APIs in order to send outbound messages to consumers via App Messaging. Using the Connect to Messaging API capabilities, brands can:
  * Define the **skill** that the conversation will be routed to once the consumer replies
  * Define the **recipient/s** using the internal consumers’ IDs (the same internal ID used to authenticate brand’s consumers against their IDP in the In-App authentication flow)
        * Proactive Messaging supports sending outbound messages to as little as 1 or as many as 100K consumers per campaign   
  * Define the **outbound message content** (text and emoji only)
  * Set a **lookback period** to control for how long the proactive or IVR outbound message configuration will be valid for:
        * Displaying the push message in the notification center
        * Routing to the configured skill     

* **App Push Notifications:** 
  * Consumers will receive the outbound message via the app’s push notifications, enabling them to tap on the message and be directed to the messaging interface to start conversing 
  * Brands can define if the push notifications will be sent when users are logged into the app, as well as logged out of the app. 

* **App Push Notifications:** Agents and bots have the full details on the Proactive and IVR configurations which triggered the conversation, as well as basic consumer information in the Conserational Cloud workspace: 
  * **Campaign info** - Campaign name, engagement name and skill, campaign source (e.g proactive messaging, IVR deflection etc).
  * **Consumer info** - Consumer device OS, device, country, city
  * **Conversation info** - Conversation start time, ID, and channel source (e.g App Messaging, SMS, WhatsApp, etc.)

* **Analytics:** 
 * * **Phase 1 (now available):** Brands will have access to the Connect to Messaging report metrics. Reporting metrics include: 
  * Number of messages **sent**
  * Number of messages **failed**
  * **Retrieving the data:** Brands will have access to the new Reporting 2.0 API which will allow them to retrieve the message status (sent or failed). The reporting 2.0 API is now available. 
 * **Phase 2 (planned for March 2021):** Brands will have access to more types of message metrics, as well as be able to access them via the Reporting 2.0 API or the new Analytics dashboard:
  * More metrics will include: Outbound message delivered, read, replied to and outbound message failure reasons. 
  * The new Analytics Dashboard will be available in March 2021 

## Brand prerequesites 

* Brands must use the Mobile SDK version that supports the Proactive and IVR to Messaging solution.
    * Android Version: SDK 5.5 (Android X support), SDK 4.7 (without Android X).
    * iOS Version: SDK 6.2.
    * Brands must have the new SDK released with their app latest version 
    * Brands must use LP Pusher or Push Proxy in order to allow consumers to receive proactive push notifications.
* Brands must onboard to Proactive Messaging 2.0 
* Brands must be able to identify and pass their consumer IDs to the Proactive Messaging APIs, in order to trigger the Proactive Message to the consumer. 
* Brands must utilize campaigns for messaging when setting up engagements on their app

## Onboarding steps

1. **Mobile SDK Installation:** Brands need to install, configure and deploy the Mobile SDK (Minimum iOS SDK version 6.2, minimum Android SDK version 4.7/5.5) on their mobile apps prior to creating a proactive campaign. To review the Mobile SDK installation guide, please see the developer documentation:
  * For iOS: please see the installation [guide](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-overview.html) and the advanced [configuration](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html) for Connect to Messaging. 
  * For Android: please see the installation [guide](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-overview.html) and the advanced [configuration](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html) for Connect to Messaging. 

2. **LP Pusher:** For Proactive or IVR to App Messaging to be successful, push notifications must be configured in order to display the outbound messages to consumers when they are away from the app. To review the LP Pusher configuration guide, please see the [developer documentation](https://developers.liveperson.com/push-notification-service-overview.html). 
  * Note that brands can also choose to use their own push notifications as a push proxy, see the [developer documentation](https://developers.liveperson.com/push-notification-service-overview.html) to support push proxy. 

3. **Connect to Messaging 2.0 APIs:** Once the brands have successfully installed the Mobile SDK on iOS and Android as well as configured LP Pusher, Proactive/Connect to Messaging (IVR) API integration will be the next step:
  * Connect to Messaging (IVR) 2.0: The Connect to Messaging 2.0 [onboarding guide and APIs](messaging-channels-connect-to-messaging-user-guide.html) are now available. 

![](img/ivr-to-app-messaging-1.png)

## Limitations 

* In the event that the consumer has an open conversation with the brand, the outbound message will not be sent to the consumer.
* Currently there is a rate limit of 3 req/ sec, the brand must control this rate limit. More requests per second will fail. 
* In the event that the consumer never logged into the brand’s app (not even one time) the consumer will not be able to receive the proactive push notifications.
* If a Welcome Message is enabled on the account and a Proactive Message was sent, the Welcome Message will not be displayed. 
* This version will support sending only text messages (including text and emojis). Rich content (images, docs etc.) and Structured Content (quick replies, cards etc.) will be supported in future releases.
* This version will support only authenticated App Messaging. 
* The App Messaging channel cannot be configured together with SMS or WhatsApp channels on the same Proactive handoff configuration. This means that the channel prioritization feature will not be available between App Messaging to SMS or WhatsApp (however there will be no problem with onboarding and enabling all channels together on the account while receiving inbound messages from all channels).   
* The outbound message will be displayed to the agent in the Agent Widget of the Agent Workspace (this will not affect the consumer view of the outbound message in the messaging interface)
* Message Templates will not be supported as this is a specific solution for the WhatsApp channel. 
* iOS limitation - Due to Operating System limitations, if the user does not tap on the notification in the notification center they  will not be able to see that message in the conversation interface.  
