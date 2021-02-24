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

Connect To Messaging IVR solution moves voice calls to different messaging channels to create two way conversations within the Conversational Cloud.

### Connect to Messaging webtool 
Connect To Messaging can be leveraged using webtools. Connect to Messaging v2.0 API is the latest API that integrates with Conversational Cloud campaigns and engagements for skill-based routing.

### Permissions
Only brand administrator and campaign manager profiles have access to the Connect To Messaging webtool after the account has been enabled by your LivePerson account team. 

### Enabling C2M

#### Requesting to enable the C2M Service

Brand campaign managers or administrators can request to enable the service by clicking the contacts us button on the welcome page. The contact us will open a new tab where the user will provide the following information listed in the [Onboarding request form](https://docs.google.com/forms/d/e/1FAIpQLScTClhEWoHlQ0gvz3d51RowfBFaA2fjude9WQrI5kECk3KMgA/viewform). 

![](img/c2m-user-guide-1.png)

#### LPA users enabling the service 

Only LPA users with elevated administrator permissions can enable the C2M Service.  After successful enablement of the C2M 2.0 service, the following system generated keys are created in the Conversation Cloud platform. 

Users click on the Campaign Builder on the left side navigation -> Click Data Sources -> Select the API Tab to view this page.

![](img/c2m-user-guide-2.png)

* Key-1: liveperson-outbound-user is the system user
* Key-2: SmartConnect key is created to access the C2M webtool

## C2M API

### Prerequisites for the C2M 2.0 API

* **Enable channels:** Brands are required to enable at least one or more messaging channels: [SMS Twilio](getting-started-quick-start-guides-twilio-sms-quick-start.html), [WhatsApp](messaging-channels-whatsapp-business.html) or their [mobile app](messaging-channels-app-messaging-app-messaging-capabilities.html) to use C2M 2.0 API Service.
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
   * Install the new widget in Agent Workspace to display the first outbound message. We display max five outbound messages in the last 30 days.
    1. Follow the steps to [create a new widget](data-reporting-insights-creating-new-widgets.html) in the Agent Workspace.
    2. Create the widget name: CX-Widget
    3. Copy the correct link for respective regions:
     * NA region - [https://connect-to-messaging.z1.fs.liveperson.com/api/cx-widget/login](https://connect-to-messaging.z1.fs.liveperson.com/api/cx-widget/login)
     * EMEA region - [https://connect-to-messaging.z2.fs.liveperson.com/api/cx-widget/login](https://connect-to-messaging.z2.fs.liveperson.com/api/cx-widget/login)
     * APAC region - [https://connect-to-messaging.z3.fs.liveperson.com/login](https://connect-to-messaging.z3.fs.liveperson.com/login)

![](img/c2m-user-guide-2b.png)

* **Enable Skills:** Brands require to have at least one or more skills to do skill based routing through LE campaigns and engagements.
  * To create skills see this [guide](admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html)

### Creating C2M 2.0 API keys

Brand administrators or campaign managers can now create C2M 2.0 API keys after the service is activated by the LivePerson team. The keys creation is a prerequisite to access the C2M 2.0 API from external systems. 

Step 1: 
![](img/c2m-user-guide-3.png)

Step 2:
![](img/c2m-user-guide-4.png)

Enter application name, enter developer name and select the IVR Engagement option highlighted in the above screenshot. This rule is required to enable IVR Deflections.

Step 3:
![](img/c2m-user-guide-5.png)

After all three steps are performed successfully the user can access authentication details required to call our C2M 2.0 API. 

### C2M 2.0 API features 

Connect To Messaging  v 2.0 serves as a middleware solution between the brands IVR system and the Conversation Cloud platform. It has a 2 step API to invite the eligible consumers to join a conversation with an agent using an available messaging channel (SMS-Twilio or WhatsApp or App Messaging). Once the consumer responds to a message from that channel, C2M ensures that the message is routed to an agent of the configured skill and creates conversation.

#### Step 1: Eligibility flow

This step is the actual capability check where the API determines whether the consumer can be sent messages over each of the channels (SMS, WhatsApp, App Messaging). Complete details of the API specification can be found [here](https://developers.liveperson.com/connect-to-messaging-api.html).

#### Step 2: Invite flow

This step is the one where the brand initiates a message to the consumer. Conversation gets created once the consumer replies to the message. With the callId generated in the eligibility flow, this API fetches the call context from its database and triggers the message to the consumer. Complete details of the API specification can be found [here](https://developers.liveperson.com/connect-to-messaging-api.html).

#### Reporting 2.0 API

Reporting feature presents a complete journey of conversation from beginning to end. The goal of this feature is to stitch pre and post conversation events for full funnel view and publish analytical and raw transactional data to subscribers. Complete details of the API specification can be found [here](https://developers.liveperson.com/outbound-reporting-api-overview.html).

## C2M webtool 

The webtool allows users to self-manage API configurations, WhatsApp Message Templates and account settings without having to depend on LivePerson staff. Brands who are on the C2M 2.0 API can access the webtool, only administrators and campaign managers can create and manage API handoffs, WhatsApp templates and skills enablement to do the conversation routing.

Main components of the webtool are:
* [Welcome page](messaging-channels-connect-to-messaging-user-guide.html#welcome-page)
* [Settings](messaging-channels-connect-to-messaging-user-guide.html#settings)
  * Channels
  * Device Check
  * Routing  
* [API Configurations](messaging-channels-connect-to-messaging-user-guide.html#api-configurations-create-and-manage-api-handoff)
* [WhatsApp Message Templates](messaging-channels-connect-to-messaging-user-guide.html#whatsapp-messaging-templates)

### Welcome page

Brand users will see the welcome page only once after the service is enabled and the user clicks on C2M from the Quick launch menu. The page provides product documents and video links for access and they can get started. 

![](img/c2m-user-guide-6.png)

Click the Connect to Messaging button in Quick launch to land onto the Welcome page.

![](img/c2m-user-guide-7.jpg)

### Settings

Brand administrators and campaign managers have to define the global settings for each brand.

#### Channels

The priority order of messaging channels and enabling/disabling message channels can be defined in this section.

![](img/c2m-user-guide-8.png)

#### Device check

Brands can either enable or disable mobile device checks. By default the value is disabled. If the flag is disabled then it is assumed mobile device check is done at the IVR system level and C2M API will not call 3rd party service to do landline or mobile device checks before sending messages.

![](img/c2m-user-guide-9.png)

#### Routing 

Connect To Messaging v 2.0 supports skill-based routing. All the skills need to be set up first in the Conversation Cloud Platform in order for them to be available in the Routing section. For more information on how to create skills please [click here](admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html). 

![](img/c2m-user-guide-10.png)

#### User role and permissions

Both admin and campaign manager users can create and view settings, while LPA users can only view them.

Role | Create | View | Delete | Edit
--- | --- | --- | --- | ---
Campaign Manager | Yes | Yes | No | No
Admin | Yes | Yes | No | No
LPA user | No | Yes | No | No
Agent | No | No | No | No
Agent Mangager | No | No | No | No

### API Configurations (Create and Manage API Handoff) 

Brand users will land directly onto the API Handoff dashboard page from the Quick Launch menu. On this page, the user can create a new Handoff or edit the existing Handoff.  API Handoff list page supports pagination, column sorting and applying filters to title and channel columns.

An API Handoff is a logical grouping of a set of configurations such as the channel the outbound message will be sent from, the priority of the channels if more than one channel will be used and more. When calling the C2M 2.0 eligibility endpoint, brands can pass this API Handoff ID and the API will leverage these configurations to send the IVR deflection outbound message.

![](img/c2m-user-guide-11.png)

#### Create API Handoff

![](img/c2m-user-guide-12.png)

* **Title:** API Handoff title should be a unique name. It can accept alphanumeric characters. Special characters (‘<’, ‘>’ ) are not allowed.
* **ID:** System generates new unique ID. Brands have to use this ID to make API calls for performing IVR deflections.  
* **Lookback period:** This is the time period during which the consumer responses are routed to the skill specified in the IVR deflection API call. If the consumer responds after the lookback period it is routed to default skills.
  * Min Value - 1 hour / 60 min
  * Max Value - 30 days
  * **Note:** If a consumer responds to an IVR deflection message and the conversation is closed, next time when the consumer sends a text message to the same conversation thread, it will open a new conversation with the brand and be treated as a new inbound conversation. It will not be treated as part of IVR Deflection conversation. 
* **Specify Channel(s) and Channel Priority Order:** Users can enable SMS or WhatsApp or both channels or change the priority order. If users enabled both WhatsApp and SMS in that order, it means Connect to Messaging will try to send a message via WhatsApp first to the consumer if they are eligible, and if not, we will fallback and send the message via SMS.
  * **Note:** App Messaging and SMS/ WhatsApp channels are mutually exclusive. If a user selects App Messaging, then SMS and WhatsApp message channels are disabled. Alternatively if the user selects SMS or WhatsApp then the App Messaging channel will be disabled as well.
  
![](img/c2m-user-guide-13.png)

#### Compose API Handoff outbound message

First, users will select the outbound SMS phone number and then create the text content for the deflection message. We support plain text and recommend keeping the content to up to 140 characters.

For SMS, the deflection message will also include a default opt-out message that is editable. This helps ensure that consumers can opt-out from receiving any future outbound messages if they choose to.

![](img/c2m-user-guide-14.png)

In the same API handoff, users can select WhatsApp's first outbound message.  Users will first pick WhatsApp outbound phone number and then choose templates from approved templates drop down and create the first outbound welcome message. The WhatsApp message templates need to be approved by the Facebook team before we can access them.

#### Confirm and save API Handoff

Preview the API handoff changes before saving it. If any changes required click the back button to go back to edit mode. Users can also rollback by clicking the cancel button.

![](img/c2m-user-guide-15.png)

#### Edit API Handoff

Brand users can select existing handoff and edit it. Users can change the lookback period, enable or disable channels, change order priority and edit messages. 

![](img/c2m-user-guide-16.png)

 API Handoff Roles and Permissions:

Role | Create | View | Delete | Edit
--- | --- | --- | --- | ---
Campaign Manager | Yes | Yes | Yes | Yes
Admin | Yes | Yes | Yes | Yes
LPA user | No | Yes | No | No
Agent | No | No | No | No
Agent Mangager | No | No | No | No

#### Create App Messaging API Handoff

Brands can only create App Messaging API handoff, they cannot combine other messaging channels when creating brand App Messaging API configurations.

* **Title:** API Handoff title should be a unique name. It can accept alphanumeric characters. Special characters (‘<’, ‘>’ ) are not allowed.
* **ID:** System generates new unique ID. Brands have to use this ID to make API calls for performing IVR deflections.   
* **Lookback period:** This is the time period during which the consumer responses are routed to the skill specified in the IVR deflection API call. If the consumer responds after the lookback period it is routed to default skills.
  * Min Value - 1 hour / 60 min
  * Max Value - 30 days
  * **Note:** If a consumer responds to an IVR deflection message and the conversation is closed, next time when the consumer sends a text message to the same conversation thread, it will open a new conversation with the brand and be treated as a new inbound conversation. It will not be treated as part of IVR Deflection conversation. 
  
 Users first click the New Handoff link in the API Handoff dashboard page.

![](img/c2m-user-guide-17.png)

Step 1: Enter title and select the lookback period for App Messaging

![](img/c2m-user-guide-18.png)

Step 2: Create the first outbound message in the message preview section. Currently we support only plain text messages. Only max 3 apps can be selected at a time to create In-App API handoff. The process is the same to create new or edit existing App Messaging Handoffs.

![](img/c2m-user-guide-19.png)

Step 3: Save the App Messaging API Handoff

![](img/c2m-user-guide-20.png)

Step 4: See the created or edited API handoff in the dashboard  list page.

![](img/c2m-user-guide-21.png)

### WhatsApp Messaging Templates

* WhatsApp requires that every outbound message sent via WhatsApp channel must use a WhatsApp Message Template approved by WhatsApp. 
* The content of the outbound message on WhatsApp channel must also be approved by WhatsApp team. Once approved, then LivePerson will onboard the message templates users would like to use as a webtool.
* WhatsApp Message Template may contain one or more variables. They have a format of {{1}}. After selecting a WhatsApp Message Template with variable(s), make sure to replate the variable(s) with an actual content i.e. ‘Hello {{1}}’ with ‘Hello Jane Doe’
* Users can create a WhatsApp Message Template and submit it to WhatsApp for approval via the Proactive Messaging tool. Please see section on “Creating WhatsApp Message Template” below for more information

![](img/c2m-user-guide-22.png)

#### Creating WhatsApp Message Templates

**Template Title** - WhatsApp template title name should be unique and it can accept alphanumeric characters

**Validation rules** - the title cannot have spaces, cannot support capital letters and only alphanumeric characters are allowed

**Type** - pick unique message category from the drop down menu

![](img/c2m-user-guide-23.png)

**Language** - select the language to which you want to create the WA message template

![](img/c2m-user-guide-24.png)

**WhatsApp Business ID** - pick the valid WhatApp Business Account ID

![](img/c2m-user-guide-25.png)

**Outbound Phone Number** - select the outbound phone number

**WhatsApp Message preview** - define the message preview with pre-defined template variables and create the WhatsApp Message Template

**Please notes:** Once WhatsApp Message Templates have been created and approved by Facebook they are not editable. 

User Role and Permissions to create and manage WhatsApp Message Templates:

Role | Create | View | Delete | Edit | Publish | Status 
--- | --- | --- | --- | --- | --- | ---
Campaign Manager | Yes | Yes | Yes | Yes | | Yes | No |
Admin | Yes | Yes | Yes | Yes | Yes | No |
LPA user | No | Yes | No | No | No | No |
Agent | No | No | No | No | No | No |
Agent Mangager | No | No | No | No | No | Yes - Approved |

## User journeys

### SMS IVR Deflection 

Brand users will pick the API Handoff Id to create SMS IVR Deflections.

Step 1: Select the SMS API Handoff Id from the webtool

![](img/c2m-user-guide-26.png)

Step 2: We are using the Postman tool to do the simulation on how to configure the C2M 2.0 API. Add API Key, Secret and Tokens.

![](img/c2m-user-guide-27.png)

Step 3: Add consumer phone number, Handoff Id and skills and call the Eligibility API endpoint

https://va.connect-to-messaging.liveperson.net/api/account/65746799/eligibility?v=2.0

```
{
   "consumerPhoneNumber": "+14259549855",
   "handoffId": "H072047293477863",
   "skill": "sales"
}
```

Step 4: Success response from Eligibility API endpoint

```
{
   "availableChannels": [
       "sms"
   ],
   "recommendedChannelName": "sms",
   "eligible": true,
   "callId": "b0eb76ed-0ff9-4d03-935b-c86ca9aa9354"
}

```

Step 5: Reference the call ID in the second step API call Invite

https://va.connect-to-messaging.liveperson.net/api/account/65746799/invite?v=2.0

Request body

```
{
   "callId": "b0eb76ed-0ff9-4d03-935b-c86ca9aa9354"
}

```

Success response

```
{
   "callId": "b0eb76ed-0ff9-4d03-935b-c86ca9aa9354"
}

```

Step 6: Consumer will receive the SMS message on their phone

![](img/c2m-user-guide-28.png)

Step 7: Agent or Agent manager with the correct skills will receive the message from the consumer and accept it

![](img/c2m-user-guide-29.png)

### App Messaging API Deflection

#### iOS App Messaging API Configuration

Brand users will pick the API Handoff ID to create IVR Deflections to App Messaging.

Step 1: Select the IOS API Handoff ID from the webtool

![](img/c2m-user-guide-30.png)

Step 2: We are using the Postman tool to do the simulation on how to configure the C2M 2.0 API. Add API Key, Secret and Tokens.

![](img/c2m-user-guide-31.png)

Step 3: Add consumer phone number, Handoff ID and skills and call the Eligibility API endpoint

https://va.connect-to-messaging.liveperson.net/api/account/65746799/eligibility?v=2.0

```
{
   "consumerPhoneNumber": "+14259549855",
   "handoffId": "H542467556183202",
   "skill": "billing",
   "consumerId": "ananth" -- brand consumer ID
}


```

Step 4: Success response from Eligibility API endpoint

```
{
   "availableChannels": [
       "inapp"
   ],
   "recommendedChannelName": "inapp",
   "eligible": true,
   "callId": "c6c31756-bcad-4213-b9e3-a7a88aecf5f7"
}

```

Step 5: Reference the call ID in the second step API call Invite

https://va.connect-to-messaging.liveperson.net/api/account/65746799/invite?v=2.0

Request body

```
{
   "callId": "c6c31756-bcad-4213-b9e3-a7a88aecf5f7"
}

```

Success response

```
{
   "callId": "c6c31756-bcad-4213-b9e3-a7a88aecf5f7"
}

```

Step 6: Brand consumer ID details

![](img/c2m-user-guide-32.png)

Step 7: Consumer receives the push notification

![](img/c2m-user-guide-33.png)

Step 8: Consumer responds to the agent

![](img/c2m-user-guide-34.png)

Step 9: Brand agent conversation in the Agent Workspace

![](img/c2m-user-guide-35.png)

Step 10: Brand agent will see the first outbound App Message in the new CX Widget in the Agent Workspace

![](img/c2m-user-guide-36.png)

#### Android App Messaging API Configuration

Brand users will pick the API Handoff ID to create IVR Deflections to App Messaging.

Step 1: Select the Android API Handoff ID from the webtool

![](img/c2m-user-guide-37.png)

Step 2: We are using the Postman tool to do the simulation on how to configure the C2M 2.0 API. Add API Key, Secret and Tokens.

![](img/c2m-user-guide-38.png)

Step 3: Add consumer phone number, Handoff Id and skills and call the Eligibility API endpoint

https://va.connect-to-messaging.liveperson.net/api/account/65746799/eligibility?v=2.0

```
{
   "consumerPhoneNumber": "+14259549855",
   "handoffId": "H535098305960962",
   "skill": "sales",
   "consumerId": "aveluturi"
}

```

Step 4: success response from Eligibility API endpoint

```
{
   "availableChannels": [
       "inapp"
   ],
   "recommendedChannelName": "inapp",
   "eligible": true,
   "callId": "90b29a7d-2a73-4534-9db8-532ad60207b7" Pass the call Id to Invite call
}

```

Step 5: reference the call ID in the second step API call Invite

https://va.connect-to-messaging.liveperson.net/api/account/65746799/invite?v=2.0

Request body

```
{
   "callId": "90b29a7d-2a73-4534-9db8-532ad60207b7"
}
Success response
{
   "callId": "c6c31756-bcad-4213-b9e3-a7a88aecf5f7"
}

```

Step 6: Consumer will receive the push notification

![](img/c2m-user-guide-39.png)

Step 7: Consumer will open the app to view the first outbound message on the mobile device

![](img/c2m-user-guide-40.png)

Step 8: Consumer responds to the IVR Deflection message

![](img/c2m-user-guide-41.png)

Step 9: Agent see the response from the consumer in Agent Workspace

![](img/c2m-user-guide-42.png)

Step 10: Agent see the first outbound message sent to the consumer in the CX Widget

![](img/c2m-user-guide-43.png)

## FAQs

### If I have a Conversational Cloud account, can I automatically access Connect to Messaging?

No, today we require brands to onboard first before they can start using Connect to  Messaging. Please contact your LivePerson account team for more information.  

### Can anyone access Connect to Messaging?

Connect to Messaging is accessed directly within Conversation Cloud from the Quick launch menu. This option will only appear to users with Campaign Manager or Admin user profiles.

