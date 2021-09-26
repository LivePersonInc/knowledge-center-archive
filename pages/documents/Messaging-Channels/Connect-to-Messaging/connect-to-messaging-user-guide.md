---
pagename: Connect to Messaging user guide 
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-connect-to-messaging-connect-to-messaging-user-guide.html
isTutorial: false
isNew: false

---

This article guides you through setup and common tasks to get started with Connect to Messaging (C2M) — an IVR deflection solution within the conversational cloud, including:

1. Enable C2M for your account
2. Configure C2M in the the Web Tool 
3. Use C2M APIs in your IVR solution to start deflecting voice calls to messages
4. Get insights from the reporting dashboard or pull reporting data via Outbound APIs


## 1. Enable C2M for your account
Brand campaign managers or administrators can request to enable the service by following these steps:
<div><ol type="a">
  <li>Open the Conversational Cloud platform.</li>
  <li>Click on the quick launch button on the bottom left corner of the screen. 
  <img src="/img/c2m_user_guide_1.png" alt="C2M"/> </li> 
  <li>Click on the “Connect to Messaging” icon.</li>
  <li>When on the ‘Welcome’ screen — click on the ‘Contact Us’ button. This will open a new tab where the user will provide the information listed in the <a href="https://docs.google.com/forms/d/e/1FAIpQLScTClhEWoHlQ0gvz3d51RowfBFaA2fjude9WQrI5kECk3KMgA/viewform" target="_blank">Onboarding request form.</a></li>
</ol></div>

![](img/c2m_user_guide_2.png)

This will send a request to the LivePerson Administrator (LPA) to enable this feature for your account. The LPA will work with you to get the account activated for C2M. 


## 2. Configure C2M in the Web Tool 
Once the account is activated, both the brand administrator and the campaign manager profiles will have access to the C2M web tool. 

### Settings
The brand’s administrators should define the global settings for C2M.

### Channels
Brands can enable the messaging channels and define the priority order of these channels. C2M supports four channels: SMS, WhatsApp, In-App and Apple Business Chat.

![](img/c2m_user_guide_3.png)

### Device Check
Device check is a check for whether a customer's phone number is a landline or mobile number. Brands can either enable or disable mobile device checks. This value is disabled by default, i.e., it assumes this check is done by the brand.

![](img/c2m_user_guide_4.png)

### Routing
Brands select the skills to use for C2M routing. All the skills need to be set up first in the Conversional Cloud Platform in order for them to be available in the routing section. For information on how to create skills, please click [here](https://knowledge.liveperson.com/admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html). 

![](img/c2m_user_guide_5.png)

### Create new API handoffs
#### LPA users enabling the service
Before you can call the C2M APIs, brands will need to first create API handoff(s) in the Web Tool. 

An API handoff is a logical grouping of a set of configurations, such as: different channels, the priority of the channels (if more than one channel is selected) and more. When calling the C2M 2.0 eligibility endpoint, brands can pass this API handoff id and the API will leverage these configurations to send the IVR deflection outbound message.

Brands can click on the “New Handoff” button to start creating a new handoff and follow the guided UI flow.

![](img/c2m_user_guide_6.png)

The following are special considerations specific to a select few channels:
**WhatsApp:** When selecting WhatsApp as the channel, brands first have to create WhatsApp template(s) and submit them to the Facebook team for approval. Brands can create and submit these WhatsApp templates via the “Message Templates” option in the Web Tool. 

**App Messaging:** Refer to [this](https://knowledge.liveperson.com/messaging-channels-connect-to-messaging-connect-to-app-messaging.html) article for more details on configuration for the App Messaging channel.

## 3. Use C2M APIs in your IVR solution to start deflecting voice calls to messages
Now that C2M is activated and configured, brands are ready to start using the C2M APIs in their IVR system to deflect the call.

### Create C2M 2.0 API keys
Key creation is a prerequisite for accessing the C2M 2.0 API from external systems. 

1. Go to the 'Manage Campaigns and Engagement' tab in the left navigation pane and select 'Data sources'. 
![](img/c2m_user_guide_7.png)
2. In ‘Data sources’, select the ‘API’ tab and click on ‘Add new’.
![](img/c2m_user_guide_8.png)
3. Check the box for ‘IVR Engagement’ and then hit ‘save’.
![](img/c2m_user_guide_9.png)
4. Edit the newly created API key to get the authentication details.
![](img/c2m_user_guide_10.png)

Once the API keys are set up, brands can refer to the C2M API documentation [here](https://developers.liveperson.com/connect-to-messaging-api.html) and start calling C2M APIs for call deflection.

## 4. Reporting
In the C2M Web tool, brands can view reporting data on how many deflections were attempted, delivered and read, on how many conversations were started, and how many conversations were closed. 

Below is an example of this chart for your reference:
![](img/c2m_user_guide_11.png)

Brands can also access more granular data via the outbound reporting APIs. Please refer to the documentation [here](https://developers.liveperson.com/outbound-reporting-api-overview.html) for more details on these APIs. 