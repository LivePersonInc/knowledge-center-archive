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
