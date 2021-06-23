---
pagename: Proactive Messaging user guide
categoryName: Messaging channels
subCategoryName: Proactive Messaging
indicator: messaging
subtitle: LivePerson Proactive Messaging 2.0
level3: ''
permalink: messaging-channels-proactive-messaging-proactive-messaging-user-guide.html
isTutorial: false
isNew: false

---

## Introduction

The LivePerson Proactive Messaging tool allows brands to initiate conversations with consumers by sending outbound messages via SMS,  WhatsApp and now with the App Messaging channel. Once the consumers respond, it creates a 2-way conversation within the Conversation Cloud platform. This enables brands to increase their ability to connect with a targeted consumer base, higher probability of achieving goals and personalized consumer experience. 

## Why use Proactive Messaging
* Once a consumer responds, brands can close the transaction in the same conversation
* Brands can use Conversation Cloud to manage all consumer conversations: inbound and outbound - across all messaging channels
* Brands obtain metrics to measure the effectiveness of proactive campaigns 
* Brands can introduce consumers to messaging capabilities, benefits and choice of platforms
* Brands can setup automations to provide instant responses to consumers when they respond
* Brands can use consumer’s past behavior to improve targeting in future 
* Brands can design the Proactive Messaging experience once and it will be rendered beautifully across all messaging platforms

## Proactive 2.0 Product Capabilities

| Details                                                                                                                                                       | 1.0 API                     | 2.0 API                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Rate throttling                                                                                                                                               | Upto 15 API call per second | Upto 10 API call per second                                                                                                             |
| API batching capability (1 campaign with max 10 recipients)                                                                                                   | 1 Recipient / API call      | Upto 10 recipients per API call                                                                                                         |
| Send rate                                                                                                                                                     | 1 msg/account/sec           | SMS - 10\*\* MPS<br>WhatsApp - 10\*\* MPS<br>In-App - 10 MPS<br><br>MPS - message per sec<br>\*\* - Reach Proactive team for higher MPS |
| Channel                                                                                                                                                       | SMS<br><br>WhatsApp         | SMS<br><br>WhatsApp<br><br>In-App                                                                                                       |
| Brands Mobile App Messaging Channel (In-App)                                                                                                                  | No                          | Yes                                                                                                                                     |
| Schedule guardrail (only send SMS between 8am-9pm based on recipient phone number’s timezone)                                                                 | No                          | Yes                                                                                                                                     |
| Support passing basic context such as customer information, shopper id, or any information brands want to pass along to help the agents to have more context. | Yes                         | Yes                                                                                                                                     |
| Look back period                                                                                                                                              | Yes                         | Yes<br>Min time = 60 min<br>Max = 30 days<br>(default to 30 days)                                                                       |
| Display of outbound phone number drop down when creating Proactive Campaigns from the webtool                                                                 | No                          | Yes                                                                                                                                     |
| Authentication                                                                                                                                                | Oauth 1.0                   | Oauth 2.0                                                                                                                               |

### Proactive webtool feature upgrades and differences 

| Feature                                  | Description                                                                                                                                                          | 1.0   | 2.0       |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------- |
| Self-service onboarding                  | Allow brands to configure Proactive in a self-service manner<br>\*Still requires account manager to onboard <5 mins                                                  | No  | Yes     |
| SSO in LiveEngage                        | Allow brands to access Proactive from LiveEngage with SSO                                                                                                            | No  | Yes     |
| Role-based access                        | Allow brands to control who can access Proactive. Only users that have Campaign Manager or Admin can publish campaigns today. All other roles have read-only access. | No  | Yes     |
| Channel SMS                              | Brands can send outbound messages via SMS                                                                                                                            | Yes | Yes     |
| Channel WhatsApp                         | Brands can send outbound messages via WhatsApp                                                                                                                       | Yes | Yes     |
| Channel Priority                         | Provide brands ability to step down from WhatsApp to SMS when recipient is not eligible on WhatsApp                                                                  | Yes | Yes     |
| Skill routing                            | Provide brands an ability to route conversations based on LE skill                                                                                                   | Yes | Yes     |
| Customize outbound message per recipient | Brands can personalize the outbound messages per recipient                                                                                                           | Yes | Yes     |
| Multiple Twilio/Whatsapp number support  | Brands can select different Twilio/WhatsApp numbers to send-from                                                                                                     | No  | Yes     |
| Large file size limit                    | Allow brand to upload upto 100k recipients at a time<br>\*\* Please contact LPA to enable this feature                                                               | No  | Yes\*\* |
| Opt-out                                  | For recipients who opted out via SMS, we will not send any future outbound messages to them.                                                                         | No  | Yes     |
| Schedule guardrails                      | Allow brands to send outbound campaign between 8am-9pm based on recipient phone number’s timezone                                                                    | No  | Yes     |
| GDPR                                     | Meet GDPR compliance                                                                                                                                                 | Yes | Yes     |
| Dark theme UI                            | Matching with LE dark theme                                                                                                                                          | No  | Yes     |

## Proactive Messaging and Webtools
Proactive Messaging can be leveraged using webtools. Proactive Messaging v2.0 API is the latest API that integrates with Conversational Cloud campaigns and engagements for skill-based routing.

## Permissions
Only brand administrator and campaign manager profiles have access to the Proactive Messaging webtool after the account has been enabled by the LivePerson account team. 

## Enabling Proactive
Requesting to enable the Proactive Service
Brand campaign managers or administrators can request to enable the service by clicking the contacts us button on the welcome page. 

## Proactive API
Prerequisites for the Proactive 2.0 API:

* Enable channels: Brands are required to enable at least one or more messaging channels: SMS, WhatsApp or their mobile app to use Proactive 2.0 API Service.

1/ Steps to enable [SMS-Twilio quick start guide.](https://knowledge.liveperson.com/getting-started-quick-start-guides-twilio-sms-quick-start.html)
2/ Steps to enable [WhatsApp quick start guide.](https://knowledge.liveperson.com/messaging-channels-whatsapp-business.html)
3/ Steps to enable Brands In-App Messaging channel guide.

Brands require to have at least one or more skills to do skill based routing through Conversational Cloud campaigns and engagements.
* Steps to create skills [quick start guide.](https://knowledge.liveperson.com/admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html)

## Access Proactive 2.0 API keys from the webtool

Brand administrators or campaign managers can now access Proactive 2.0 API keys after the service is activated by the LivePerson team. The keys creation is a prerequisite to access the Proactive 2.0 API from external systems. Detail Proactive outbound API specifications can be found [here.](https://developers.liveperson.com/proactive-messaging-api.html)

![](img/PM-may18-1.png)

## Outbound Reporting 2.0 API
Reporting feature presents a complete journey of conversation from beginning to end. The goal of this feature is to stitch pre and post conversation events for full funnel view and publish analytical and raw transactional data to subscribers. Complete details of the API specification can be found [here.](https://developers.liveperson.com/outbound-reporting-api-overview.html)

## Proactive webtool 
The webtool allows users to self-manage API configurations, WhatsApp Message Templates and account settings without having to depend on LivePerson staff. Brands who are on the Proactive 2.0 API can access the webtool, only administrators and campaign managers can create and manage API handoffs, WhatsApp templates and skills enablement to do the conversation routing.

Main components of the webtool are: 
* Welcome page
* Proactive Campaigns
* Settings
* Channels
* API
* API Configurations
* WhatsApp Message Templates

## Welcome Page
Brand users will see the welcome page only after the service is enabled and the user clicks on Proactive from the Quick launch menu. The page provides product documents and video links for access and they can get started. 

Click the Proactive Messaging button in the Quick launch menu to open the Welcome page.

![](img/PM-may18-2.png)
![](img/PM-may18-3.png)

## Proactive Campaigns
Brand administrators and campaign managers have to create a new proactive campaign from the webtool. you can click on New Campaign on the landing page and follow a 4-step wizard.

### Step 1 - Compose message

* **Campaign name** - First, define your campaign name. Choosing a name for the campaign can be helpful for the agents who get assigned to the conversation once a consumer responds. For example, a campaign named “Subscription renewal for all North America users with licenses expired by 12/31/29019” will be helpful to the agents who receive the consumer response and differentiate it with other outbound campaigns. 

* **Channel** - Second, select the channel you’d like to send the outbound message on. Currently, there are four options: SMS with Twilio, WhatsApp, App Messaging or Prioritized. Prioritized is the step down capability from WhatsApp to SMS. It means that a message will first be sent to the consumer via WhatsApp channel. If the consumer’s phone number isn’t eligible on WhatsApp, then we will attempt to send an SMS instead. 

* **Route to skill** - Select the skill that you would like to route to consumer responses to. These are skills created inside the Conversational Cloud. Currently, not all skills appear here. Only the skills that brands specifically requested to be onboarded for Proactive usage will appear here. Note that you can search for the skill in the dropdown as well. If you don’t see a skill that you’d like to use, please talk to your LivePerson representative to have it added. 

* **Message content - SMS** The content of the outbound message for SMS can be typed in by users. 
For SMS, 42 characters are reserved by default for the opt-out text, which is required. This helps ensure that consumers who receive the outbound message have instructions on how to opt-out from receiving any future outbound messages if they choose to. 

* **Messaging content - WhatsApp** The content of the outbound message on the WhatsApp channel must be approved by WhatsApp first. Users will need to create an outbound message template (MTM) and submit it to WhatsApp. Refer to documentation [here](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/) to create WhatsApp message template. Once approved, we will onboard the message templates you would like to use in the Proactive Messaging tool.

Please note: WhatsApp message template can contain one or more variables. The variables in the template have a format of {{1}}. If you select a WhatsApp message template with variable(s), make sure these variables are replaced with actual content when campaigns are created via the API i.e. ‘Hello {{1}}’ with ‘Hello Jane Doe’.  

### Step 2 - Define Recipients
![](img/Proactive_userguide6.png)

You can define your recipients by two different methods, uploading the list of recipients via .csv file or typing in the recipient phone numbers and possible message content, if you would like to have a different message per phone number. 

#### Requirements:
* One recipient per line
* Recipient’s phone number must start with country code, then area code i.e. US phone number would be 1XXXXXXX
* For WhatsApp message template that has variable(s),users must enter the value(s) for the variable(s) as well. For .csv file, each variable is specified in a column immediately follow the phone number column. For typing in the recipients, each variable’s value is separated by a comma immediately followed the phone number.

### **Examples**:
#### SMS example
Typing in 2 recipient phone numbers  phone numbers with the two variables specified in the WhatsApp message template look like:
12223334444
12223334445

Uploading a .csv file with two recipients would look like this:
![](img/PM-may18-4.png)

#### WhatsApp example
“Hello {{1}}, your credit card ending in {{2}} is about to expire. Reply back to chat with an agent to help you update this info”
Typing in 2 recipients would be:
12223334444, Nancy, 9999
12223334445, Bob, 8888

Uploading a .csv file with two recipients would look like this:
![](img/Proactive_userguide5.png)

* Once you specify a list of recipients, whether via .csv upload or typing them in, click the Parse button to get a preview of the message being sent per phone number. 
* If there is any syntax error, you’ll see the highlighted phone number with the error. 
* There is a 140 character limit for messages. This includes the opt-out text. 
* Phone numbers can be added in the following formats:
16001234567
+16001234567
1(600)1234567
+1(600)1234567

### Step 3 - Schedule campaign

Currently, we only let you schedule the campaign at the current time. That means, the moment you submit the campaign, we will attempt to send an outbound message immediately. 

Soon, we will enable the capability to:
* Schedule a proactive campaign at a future date
*  Specify the send rate i.e. 1 message per second
*  Specify the time of day and day of the week, where the tool will push the outbound message to the consumers. Outside of that time range, the tool will not push any outbound message, only to try again when it’s between the configured time window. This is to ensure brands can follow TCPA compliance for when they can reach out to the consumers. 

### Step 4 - Preview  and launch

* Last but not least is to preview the campaign details and submit. Make sure you review all the information before submitting the campaign such as channel, skill to route the response, opt-out text, number of recipients, message content, etc. 

* Users must check the box at the bottom of this step to acknowledge that it is the brands’ responsibility to collect the opt-in consent from users prior to reaching out to them. This is the TCPA compliance and brands are required by law to do this. LivePerson holds no responsibility legally if brands fail to do this prior to contacting any consumer via our Proactive Messaging tool.

### Create Whatsapp Rich Message Campaigns 

* We support creating campaigns using WhatsApp Rich Message Templates that have a header section (image/video/document) , message body, and footer section, and quick reply/Call-to-Action buttons. Message body is mandatory while other components like header, footer, buttons are optional. 

* Template header allows following extensions: 
Image:[jpg,png],
Document:[pdf],
video:[mp4,3gpp]

* How to upload CSV or add recipients inline for WhatsApp Rich Templates has been provided in section below ‘Customize message per recipient’
* URL provided for header (image/video/document) should be publicly accessible.
* Only https URLs are supported (Limitation from WhatsApp)
* Before sending WhatsApp rich messages using a template with header of type image, please reach out to your LivePerson representative to get the domain whitelisted.
* Footer and quick reply buttons have static values and do not need any user input during campaign creation

### Notes about button components:
* Buttons are of two types: Quick Reply or Call-To-Action
* A template can have either Quick Reply or Call-To-Action buttons. 
* Maximum of 3 Quick Reply buttons are allowed in a template
* Maximum of 2 Call-To-Action buttons are allowed in a template

#### Call-To-Action buttons can further be of two types: 
* URL - this button redirects to a URL defined beneath the button
* Phone Number - this button redirects to native phone app to allow placing a call to phone number defined beneath

#### Templates can have either 1 button or at the most 2 call-to-action buttons. 
If the template has 2 buttons, then: 1 has to be URL, 1 for phone number. There cannot be 2 Call-To-Action buttons both with URL or both with phone number.

* Phone number Call-To-Action button does not expect any variable substitution from the user during campaign creation.
* URL Call-To-Action buttons can be either dynamic or static URLs. In the case of static URL, no variable substitution is required during campaign creation.
* In case of dynamic URL, variable substitution is required during campaign creation. Dynamic URLs can have at most 1 variable.
* Support for rich templates is not available for Proactive 1.0 web campaigns via our UI .

### Customize message per recipient
Whether users select SMS or WhatsApp, they can customize the message content per recipient. 
Via .csv upload: 
* For SMS
* For WhatsApp Message Templates with two variables “Hello {{1}}, your credit card ending in {{2}} is about to expire. Would you like some help with renewal?”
* For WhatsApp rich template (screenshot added below) with header of type image and a message body with two variables “Hi ${{1}}! Your account ${{2}} is overdue. Let us know how we can help?” and quick reply buttons; uploaded CSV should look like the screenshot below with columns ‘Phone, H1, B1, B2’. Footer and quick reply buttons have static values and do not need any user input during campaign creation. URLs entered in H1 should be publicly accessible. 

![](img/PM-may18-5.png)
![](img/PM-may18-6.png)

For WhatsApp rich template with a message body with 5 variables “Your ticket for ${{1}}\n\nTime - ${{2}}\nVenue - ${{3}}\nSeats - ${{4}} - ${{5}}”  and Call-To-Action buttons (phone number and a static URL), uploaded CSV should look like the screenshot below with columns ‘Phone, B1, B2, B3, B4, B5’. Phone Number and Static URL buttons do not need any user input during campaign creation.

![](img/PM-may18-7.png)

For WhatsApp rich template  with a message body with 5 variables “Your ticket for ${{1}}\n\nTime - ${{2}}\nVenue - ${{3}}\nSeats - ${{4}} - ${{5}}”  and dynamic Call-To-Action button, uploaded CSV should look like the screenshot below with columns ‘Phone, B1, B2, B3, B4, B5, BU1’. Dynamic Call-To-Action button needs user input during campaign creation. 

![](img/PM-may18-8.png)

#### Via typing in directly in the Proactive web tool 

* SMS example:
12223334444, Hi Jane your subscription is about to expire …
12223334445, Hi Bob, your subscription is about to expire ...

* For WhatsApp message templates with two variables “Hello {{1}}, your credit card ending in {{2}} is about to expire. Would you like some help with renewal?”
12223334444, Jane, 9999…
12223334445, Bob, 8888

* For WhatsApp rich template with header of type image and a message body with two variables  Hi ${{1}}! Your account ${{2}} is overdue. Let us know how we can help?”  and quick reply buttons; inline entry should have the following format as shown below. Footer and quick reply buttons have static values and do not need any user input during campaign creation. URL entered in H1 should be publicly accessible. 

Example:
11111111111,https://upload.wikimedia.org/wikipedia/commons/image1.png,Jane,9999
22222222222,https://upload.wikimedia.org/wikipedia/commons/image2.png,Bob,8888

* For WhatsApp rich template with header of type image and a message body with two variables “Hi ${{1}}! Your account ${{2}} is overdue. Let us know how we can help?”  and quick reply buttons; inline entry should have the following format as shown below. Footer and Call-To-Action buttons with dynamic values and do not need any user input during campaign creation. URL entered in H1 should be publicly accessible. 

![](img/PM-may18-9.png)

Example:
11111111111,https://upload.wikimedia.org/wikipedia/commons/image1.png,Jane,9999
22222222222,https://upload.wikimedia.org/wikipedia/commons/image2.png,Bob,8888
For WhatsApp rich template (screenshot added below) with a message body with 5 variables “Your ticket for ${{1}}\n\nTime - ${{2}}\nVenue - ${{3}}\nSeats - ${{4}} - ${{5}}”  and Call-To-Action buttons(phone number and a static URL); inline entry should have the following format as shown in the example below below. Phone Number and Static URL buttons do not need any user input during campaign creation.

![](img/PM-may18-10.png)

Example:
12345677655,event1,11:00 AM,seattle,234,236
44567725566,event2,12:00 PM,bellevue,237,239

* For WhatsApp rich template with a message body with 5 variables “Your ticket for ${{1}}\n\nTime - ${{2}}\nVenue - ${{3}}\nSeats - ${{4}} - ${{5}}”  and dynamic Call-To-Action button; inline entry should have the following format as shown below. Dynamic Call-To-Action button needs user input during campaign creation. 

![](img/PM-may18-11.png)

Example:
12345677655,event1,11:00 AM,seattle,234,236,AS4567FG
44567725566,event2,12:00 PM,bellevue,237,239,578934DFB

### Skill Routing

Skills need to be set up in the Conversational Cloud Platform for them to be available in the Proactive Messaging tool.

### Settings
Brand administrators and campaign managers have to define the global settings for each brand.
* **Channels** - The priority order of messaging channels and enabling/disabling message channels can be defined in this section.

![](img/PM-may18-11.png)

* **API Keys**  - Brands users can now see client id and secrets to access outbound 2.0 API.

![](img/PM-may18-12.png)

* **User Role and Permissions** - Both admin and campaign manager users can create and view settings, while LPA users can only view them.

![](img/PM-may18-13.png)

### API Configurations (Create and Manage API Handoff) 

Brand users will land directly onto the API Handoff dashboard page from the Quick Launch menu. On this page, the user can create a new Handoff or edit the existing Handoff.  API Handoff list page supports pagination, column sorting and applying filters to title and channel columns.

An API Handoff is a logical grouping of a set of configurations such as the channel the outbound message will be sent from, the message content that will be sent and more. When calling the Proactive 2.0 eligibility endpoint, brands can pass this API Handoff ID and the API will leverage these configurations to send the outbound message.

### Create API Handoff:
### Step-1: 

![](img/PM-may18-14.png)

* Title - API Handoff title should be a unique name. It can accept alphanumeric characters. Special characters (‘<’, ‘>’ ) are not allowed.

* ID - System generates new unique ID. Brands have to use this ID to make API calls for performing outbound campaigns.  

* Lookback period - This is the time period during which the consumer responses are routed to the skill specified in the outbound API call. If the consumer responds after the lookback period it is routed to default skills.
 - Min Value - 1 hour / 60 min
 - Max Value - 30 days
	
Note: If a consumer responds to an outbound message and the conversation is closed, next time when the consumer sends a text message to the same conversation thread, it will open a new conversation with the brand and be treated as a new inbound conversation. It will not be treated as part of the outbound conversation. 

* Specify Channel(s) and Channel Priority Order - users can enable SMS or WhatsApp or both channels, or change the priority order. If users enabled both WhatsApp and SMS in that order, it means Proactive Messaging will try to send a message via WhatsApp first to the consumer if they are eligible, and if not, the fallback will send the message via SMS.

#### Exceptions in channel priority and settings:
	
App Messaging and SMS/WhatsApp channels are mutually exclusive. If a user selects App Messaging, then SMS and WhatsApp message channels are disabled. Alternatively if the user selects SMS or WhatsApp then the App Messaging channel will be disabled as well.

![](img/PM-may18-15.png)

### Compose API Handoff outbound message

First, users will select the outbound SMS phone number and then create the text content for the outbound message. We support plain text and recommend keeping the content to up to 140 characters.
For SMS, the outbound message will also include a default opt-out message that is editable. This helps ensure that consumers can opt-out from receiving any future outbound messages if they choose to.

![](img/PM-may18-16.png)

In the same API handoff, users can select WhatsApp's first outbound message.  Users will first pick WhatsApp outbound phone number and then choose templates from approved templates drop down and create the first outbound welcome message. The WhatsApp message templates need to be approved by the Facebook team before you can access them.

### Confirm and Save API Handoff

Preview the API handoff changes before saving it. If any changes required, click the back button to go back to edit mode. Users can also rollback changes by clicking the cancel button.

![](img/PM-may18-17.png)

### Edit API Handoff

Brand users can select existing handoff and edit it. Users can change the lookback period, enable or disable channels, change order priority and edit messages. 

![](img/PM-may18-18.png)

 ### API Handoff Roles and Permissions
![](img/PM-may18-19.png)

### Create App Messaging API Handoff

Brands can only create App Messaging API handoff, they cannot combine other messaging channels when creating brand App Messaging API configurations.

* **Title**  - API Handoff title should be a unique name. It can accept alphanumeric characters. Special characters (‘<’, ‘>’ ) are not allowed.
* **ID** - System generates new unique ID. Brands have to use this ID to make API calls for performing outbound campaigns.  
* **Lookback period** - This is the time period during which the consumer responses are routed to the skill specified in the outbound API call. If the consumer responds after the lookback period it is routed to default skills.
- Min Value - 1 hour / 60 min
- Max Value - 30 days

Note: If a consumer responds to an outbound message and the conversation is closed, next time when the consumer sends a message to the same conversation thread, it will open a new conversation with the brand.

### Steps
Users first click the New Handoff link in the API Handoff dashboard page.

Step-1: Enter Title and select the lookback period for App Messaging
![](img/PM-may18-20.png)

Step 2: Create the first outbound message in the message preview section. Currently we support only plain text messages. Only max 4 apps can be selected at a time to create App Messaging API handoff. The process is the same to create new or edit existing App Handoffs.

![](img/PM-may18-21.png)

Step-3: Save the App Messaging API Handoff.
![](img/PM-may18-22.png)

Step 4: We can see the created or edited API handoff in the dashboard list page.
![](img/PM-may18-23.png)

## WhatsApp Message Templates

* WhatsApp requires that every outbound message sent via WhatsApp channel must use a WhatsApp Message Template approved by WhatsApp. 
* The content of the outbound message on WhatsApp channel must also be approved by WhatsApp team. Once approved, LivePerson will onboard the message templates users would like to use as a webtool.
* WhatsApp Message Template may contain one or more variables. They have a format of {{1}}. After selecting a WhatsApp Message Template with variable(s), make sure to replate the variable(s) with an actual content i.e. ‘Hello {{1}}’ with ‘Hello Jane Doe’
* Users can create a WhatsApp Message Template and submit it to WhatsApp for approval via the Proactive Messaging tool. Please see section on “Creating WhatsApp Message Template” below for more information.

![](img/WA Message Template-1.png)

### Creating WhatsApp Message Templates

* Template Title - WhatsApp template title name should be unique and can accept alphanumeric characters.
*  Validation rules - the title cannot have spaces, cannot support capital letters and only alphanumeric characters are allowed.
*  Type - pick unique message category from the drop down menu. 
*  Language - select the language in which you want to create the WhatsApp Message Template.
*  WABA ID - pick the valid WhatApp Business Account ID.
*  Outbound Phone Number - select the outbound phone number.
*  WhatsApp Message preview - Create the message.

{: .notice}
WhatsApp Message Templates once created and approved by the Facebook team are non-editable.

In WhatsApp templates: 
- Select Template Type
- Select Language:
- Select WhatsApp Business ID (WABA ID)
- Define the message preview with pre-defined template variables and create the WhatsApp Message Template.

![](img/WA Message Template - 4.png)

### User Role and Permissions to create and manage WhatsApp Message Templates

| # | Role             | Create | View | Delete | Edit | Publish | Status   |
| - | ---------------- | ------ | ---- | ------ | ---- | ------- | -------- |
| 1 | Campaign Manager | ✅      | ✅    | ✅      | ✅    | ✅       | ❌    |
| 2 | Admin            | ✅      | ✅    | ✅      | ✅    | ✅       | ❌    |
| 3 | LPA User         | ❌      | ✅    | ❌      | ❌    | ❌       | ❌    |
| 4 | Agent            | ❌      | ❌    | ❌      | ❌    | ❌       | ❌    |
| 5 | Agent Manager    | ❌      | ❌    | ❌      | ❌    | ❌       | ❌    |
| 6 | Facebook team    | ❌      | ❌    | ❌      | ❌    | ❌       | ✅ - Approve|

## User journeys

### SMS Outbound Campaign 
Brand users will pick the API Handoff ID to create SMS outbound campaigns.

**Step-1:** Select the SMS API Handoff ID from the webtool.

![](img/SMS-Handoff-1.png)

**Step 2:** We are using the Postman tool to do the simulation on how to configure the Proactive 2.0 API. get the consumer JWT with API client ID and secrets.
**Step 3:** Create a Proactive outbound campaign request payload with SMS API Handoff ID. We need skills, consent, and a consumer phone number to schedule the campaigns.

See [outbound campaign API Endpoint](https://proactive-messaging.z1.fs.liveperson.com/api/v2/account/17728909/campaign)

**Step 4:** The campaign is scheduled and the consumer will receive the response.
**Step 5:** We can see the outbound campaign delivery status in Proactive webtool.

![](img/prmsg_camp_status.png)

**Step 6:** Agent or Agent manager with the correct skills will receive the message when the consumer responds.

### WhatsApp API Handoff Plain text  - User Journeys

Users can create an API handoff with WhatsApp channel configured and then use the handoff id to create a Proactive API campaign.
**Step 1:**  Login to Proactive Web tool. Navigate to API Handoffs page. Click on ‘New Handoff’.
![](img/New Handoff.png)
**Step 2:** On the Configure API Handoff page, provide ‘Title’, select ‘Lookback period’, select channels to be configured for the handoff. Only Whatsapp channel is enabled in the screenshot below as we want to create a handoff with only Whatsapp in this example. Click Next.
**Step 3:** On the Compose page, select ‘Send From’ phone number from drop-down. Also, choose the ‘Whatsapp Message Template’ from the drop-down. 
Messages will be sent using the ‘Send From’ number chosen and template chosen will be sent to all recipients when this api handoff is used to create the campaign.
Click Next.
![](img/Click Next-PM.png)
**Step 4:** On the confirm page, validate all the details entered and click Save.
![](img/Click-save-PM.png)
**Step 5:** You are redirected to the screen below. Here you can see the API handoff just created. Copy the id value for the API handoff created.
![](img/PM-step5.png)
**Step 6:** Using the api handoff to create the Proactive API campaign. Provide the handoff id copied in the previous step as the value for “templateId” attribute. Provide values for campaignName, skill, consumers. Get the consumer JWT with API client id and secrets.

Click here for [Outbound API Public Wiki](https://developers.liveperson.com/proactive-messaging-api.html)
Click here for [Outbound API Swagger Spec](https://proactive-messaging.dev.fs.liveperson.com/api/api-docs/?api=outbound#/Campaign/campaign)

**Step 7:** Recipient receives the WhatsApp message on their phone
![](img/Step 7-PM.jpeg)
**Step 8:** Recipient responds. Conversation is created in Conversational CLoud. Agent or Agent manager with the correct skills will receive the message from the consumer and accept it.
![](img/Step8-pm.png)

## Limitations

The following are the known limitations for Proactive Messaging:

1/ Number of lines entered into the text area is limited to 100 lines.
a) If users choose to enter the phone number in the text field, currently it is limited to only 100 lines (100 phone numbers - since there is a restriction of only 1 phone number per line). 
b) To upload more than 100 numbers at a time, please use the .csv upload option. 

2/ Uploading a list of recipients using .csv file is limited to 10 MB or 1000 recipients. This is the limit today and we are working on increasing this limit to 200K recipients. 

3/ When Prioritized is selected as a channel, there is no opt-out text sent for SMS. For example, if brand configures WhatsApp as primary channel and SMS as fallback channel, when brand detects a consumer isn’t eligible for WhatsApp, we will attempt to send the same message to SMS channel, however there is no opt-out text included in the SMS text messaging being sent i.e. ‘To STOP receiving messages just reply STOP’

4/ Current WhatsApp Rich Text limitations
a) WhatsApp Rich Message Templates will not be available for the Prioritized channel when creating Proactive Campaigns.
b) WhatsApp Rich Message Templates will not be available as an option when creating WhatsApp API Handoff through Proactive self-service tool and Outbound API.
c) Creating WhatsApp Rich Message Templates directly from the Proactive self-service tool is not available.
d) WhatsApp Rich Message Header field will not support image Id and text values.
e) No support for call-to-action button for WhatsApp Rich Message. 
f) Only whitelisted image URLs will be allowed for WhatsApp Rich Message Templates messages. (Root URL/ domain has to be whitelisted,  please reach out to your LivePerson representative to get the domain whitelisted via internal LivePerson configuration
g) If the domain is not whitelisted and a message is sent, conversation creation will fail when the consumer responds, so we validate whitelisting in the first place in Proactive. This is only applicable for image headers).
h) Only https urls are supported.
i) Size limitations:
![](img/sizelimit.png)
j) For SMS, there is a limit of 140 characters for the message content. This is to ensure your outbound message is sent in a single text instead of being split into two different text messages. 

## Best Practices for Proactive Messaging
![](img/Tips-for-proactive.png)

## FAQs

#### Does Proactive Messaging work with SSO?
Yes, Proactive Messaging works with SSO today. If a user is signed in to the Conversational Cloud, accessing the tool shouldn’t prompt the user to login again. As long as the user token isn’t expired, the user can switch between Proactive and Conversational Cloud without having to login again.

#### If I have a Conversational Cloud account, can I automatically access Proactive?
No, today we require brands to onboard first before they can start using Proactive Messaging. It is a powerful tool and only authorized users should have access to it. Once onboarded, only users with Campaign Manager or Admin user profile can access this tool from the  Quick Launch menu. 

####  Can anyone access Proactive Messaging?
Only users with Campaign Manager or Admin user profile can access the Proactive web from Conversational Cloud.
 
#### Is a Proactive Campaign different from an inbound campaign?
Yes. Inbound campaigns require the customers to initiate the conversation with the brand first before agents can engage. While Proactive campaigns (Outbound campaigns) send the first message to the customers rather than them initiating the conversation. 

