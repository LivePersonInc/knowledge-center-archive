---
pagename: Connect to Messaging user guide 
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-connect-to-messaging-user-guide.html
isTutorial: false
isNew: false

---

## Getting started

Connect To Messaging IVR solution moves voice calls to messaging platforms to create two way conversations.

### Connect to Messaging webtool 
Connect To Messaging can be leveraged using webtools. Connect to Messaging v2.0 API is the latest API that integrates with Conversational Cloud campaigns and engagements for skill-based routing.

### Permissions
Only brand administrator and campaign manager profiles have access to the Connect To Messaging webtool after the account has been enabled by the LivePerson account team. 

### Enabling C2M

#### Requesting to enable the C2M Service

Brand campaign managers or administrators can request to enable the service by clicking the contacts us button on the welcome page. The contact us will open a new tab where the user will provide the following information listed in <Onboarding request form>. 

![](img/c2m-user-guide-1.png)

#### LPA users enabling the service 

Only LPA users with elevated administrator permissions can enable the C2M Service.  After successful enablement of the C2M 2.0 service, the following system generated keys are created in the Conversation Cloud platform. 

Users click on the Campaign Builder on the left side navigation -> Click Data Sources -> Select the API Tab to view this page.

![](img/c2m-user-guide-2.png)
Key-1: liveperson-outbound-user is the system user.
Key-2: SmartConnect key is created to access the C2M webtool. 

## C2M API

### Prerequisites for the C2M 2.0 API

* **Enable channels:** Brands are required to enable at least one or more messaging channels: SMS, WhatsApp or their mobile app to use C2M 2.0 API Service.
  * Steps to enable [SMS Twilio quick start guide](getting-started-quick-start-guides-twilio-sms-quick-start.html)
  * Steps to enable [WhatsApp quick start guide](messaging-channels-whatsapp-business.html)
  * Steps to enable [App Messaging channel]()
   * Review the [App Messaging quick start guide](messaging-channels-app-messaging-add-messaging-to-your-mobile-app.html)
   * For iOS
    1. Install and and configure the iOS SDK on the brand’s app. See the Installation [Developer Community article](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-overview.html)
    2. Perform the advanced configuration needed to enable C2M on the SDK. See the [Developer Community article](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html)
   * For Android
    1. Review and the Android App Installation [Developer Center article](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-overview.html)
    2. Perform the advanced configuration needed to enable C2M on the SDK. See the [Developer Center article](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html) 
   * LP Pusher configuration
    1. To configure the push notification please review and follow this [guide](https://developers.liveperson.com/push-notification-service-overview.html) 
    2. Review the push notification setting needed for [Android](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-push-notifications.html)
    3. Review the push notification setting needed for [iOS](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-push-notifications.html) 
* **Enable Skills:** Brands require to have at least one or more skills to do skill based routing through LE campaigns and engagements.
  * To create skills see this [guide](admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html)


