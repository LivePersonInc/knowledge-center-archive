---
pagename: 'Week of May 27th '
categoryName: Release notes
subCategoryName: 2019
indicator: messaging
subtitle: ''
level3: May
permalink: release-notes-2019-may-week-of-may-27th.html
isTutorial: false
isNew: false
published: false

---
These release notes include new features arriving to LiveEngage during May 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## WeChat Business Connector - Messaging Capabilities for early adopters

### Type: New functionality

The WeChat Business connector is now available for early adopters. WeChat serves 1 billion monthly active users, mostly in China, and is one of the world's most powerful apps. WeChat provides brands the ability to register as an official account, which enables them to interact with subscribers and provide them with services.

The WeChat Business connector enables brands to use LiveEngage as their messaging platform to manage official WeChat accounts at scale, allowing them to communicate with consumers more efficiently.

{: .notice} 
**Please note:** WeChat Business is currently available for early adopters only. Please contact Shawn Davidson for more details.

**Screenshots**

**Image 1:** Consumer side

**Image 2:** Agent side

## WeChat Business Connector - Conversation attributes

### Type: New functionality

Support has been adding for mapping WeChat Business information and passing it to LiveEngage Engagement Attributes.
* **Consumer ID -** LiveEnage will manage a unique consumer WeChat ID across consumer conversations for unified history, agent or bot context, and to allow the brands to map the consumer ID info to CRM systems. The consumer WeChat Open ID along with the prefix “wechat” and the brand’s LiveEngage account ID will be mapped to the consumer ID field in the consumer profile. The consumer ID will have the format of {wechat_siteid_wechatopenid}. This ID will be visible in real time to the agent, agent widget SDK, agent SDK, as well as in historic conversations.
* **WeChat Business ID -** The unique identifier for each business as registered within WeChat. The brand’s WeChat ID will be mapped to the “Customer Info”: ”Company Branch” engagement attribute, and will be visible in real time to the agent, agent widget SDK, agent SDK, as well as in historic conversations.
* **Consumer Name -** The consumer name will be mapped to “Consumer Info”:”Consumer name”, “Profile Name”, and “Consumer Name” under “Open Connections” and “All Connections”.

**How to enable:** This feature is enabled by default once WeChat has been enabled. 

**Screenshots**

**Image 1:** Consumer Info and Customer Info as shown in LiveEngage

## WeChat Business Connector - Skill routing

### Type: New functionality

Brands can configure skill routing per the brand’s business WeChat ID. Please note that only one WeChat official accounts can be connected to a LiveEngage account.

{: .notice} 
**Please note:** This feature requires enablement. For more information please contact your LivePerson account team. 

## WeChat Business Connector - Post Conversation Survey

### Type: New functionality

The Post Conversation Survey enables brands to gather feedback from consumers and measure their success. Once the messaging conversation is ended by the agent, the survey will be automatically triggered. The bot will start to send the questions one by one as configured by the brand. Upon each consumer response, the bot will send the next question based on the logic defined. The survey questions and answers are based on regular text messages - all customized by the brand.

The survey can be closed in a number of different scenarios: Survey completed, survey timeout or survey skipped. Each outcome is tracked and reported on as part of the Report Builder to allow brands to fully analyze the results. Full configuration of surveys is done through the LiveEngage Bot Studio. Please click here for more information.

{: .notice}
**Please note:** Structured content is not supported by the WeChat business connector, therefore a fallback text option should be configured. More information about these settings can be found here.

**Screenshots**

**Image 1:** consumer sees survey questions with the fallback text

**Image 2:** agent sees the survey in progress

## WeChat Business Connector - Consumer to agent image support

### Type: New functionality

With WeChat Business’ conversational interface, consumers can select images from their device’s album or use the camera to take a real-time image and share it with agents on LiveEngage.

**Supported formats and sizes**
* Supported image types: jpeg/jpg, png
* Supported image size: there’s no limit but WeChat will autoscale in order to send the image

{: .notice}
**Please note:** This feature requires enablement. Please contact your LivePerson account team for more information. 

**Screenshots** 

**Image 1:** consumer sends an image to agent

**Image 2:** agent sees the image consumer sends

## WeChat Business Connector - Consumer to agent audio message

### Type: New functionality

With WeChat Business’s conversational interface, consumers can share an audio with an agent by clicking the voice icon and holding down the Hold to Talk button. They can then record a voice message, release the Hold to Talk button, and send.

**Please note:** This feature requires enablement. Please contact your LivePerson account team for more information. 

**Screenshots**

**Image 1:** consumer sends an audio message to agent

**Image 2:** agent sees an audio message consumer sends

## WeChat Business Connector - Secure forms support

### Type: New functionality

Secure forms are now enabled for the WeChat connector. Secure forms allow brands to perform identification and authorization, and pass payment details to process payments, share PII information to generate leads, or to perform a registration process during a conversation in a PCI compliant environment. Click here for more information on configuring secure forms. 

## WeChat Business Connector - Automatic message support

### Type: New functionality

Automatic Messages (AKA System Messages) are predefined messages about events that occur in the conversation and are sent to the consumer as the events occur. Their purpose is to gain the consumer’s trust in the messaging channel by setting expectations and giving the consumer visibility over the agent’s availability. For more information on configuring automatic messages, please click here. 
