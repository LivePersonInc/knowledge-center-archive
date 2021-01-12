---
pagename: 'Entry Points'
categoryName: Messaging channels
subCategoryName: Apple Business Chat
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-apple-business-chat-entry-points.html
isTutorial: false
isNew: false
date: 2020-08-18 14:38:05 +0000
---

Once registered for Apple Business Chat, the business will have an option to enable the following entry points: 
* Business Chat Conversation URL 
  * When customers click the conversation URL, the system redirects them to the Message app where they can send a message to your business. 
  * The conversation link can be used in email, social media, QR codes, and as website buttons and app engagement.  
* Chat Suggest
* Maps and Siri 

## Apple Business Chat Conversation URL

The conversation URL consists of a business ID and optional query string parameters that are invaluable to optimizing Business Chat entry points and tracking traffic. 

As an overview, the conversation URL is **https://bcrw.apple.com/urn:biz:<your-business-id>**, replacing **<your-business-id>** with the business ID you received from Apple after registering with Business Chat. 
 
For example:
![](img/apple-business-chat-entry-points-00.png)

Add optional query string parameters to the entrypoint by including intent and group IDs. Within Conversation Cloud, the **Intent value** will be mapped to the **customerType SDE**, which is primarily used for [skill routing](contact-center-management-messaging-operations-routing-logic-overview.html) as well as tracking and analyzing volume by entrypoint. The Group value will be mapped against the **customerStatus SDE**. It is recommended to add the entrypoint description as *‘intentId’* and relevant campaign attributes as *‘groupID’*. 

Using LivePerson’s MCS toolkit, both customerType and customerStatus SDEs help businesses analyze performance at the account level, agent level, and conversation level.  

Here’s an example of Business Chat conversation URL with the added parameters:
![](img/apple-business-chat-entry-points-01.png)

* **Business Chat ID** = 27e9ee9c-5093-4e93-9f2a-398a83xxxx
* **Intent ID** = “ sales ”
* **Group ID** = “ vip ”

## Determine the Apple Business Chat URL

To implement the engagements on LivePerson, you will need your Apple Business Chat conversation URL. This link can be retrieved from your Business Chat account within the [Apple Register portal](http://www.register.apple.com). 

![](img/apple-business-chat-entry-points-1.png)

## Skill routing for Business Chat

There are two primary methods for routing Business Chat  conversations to ensure they are delivered to the right skills and therefore the right agents.
* Routing with simple rule logic - **IntentID** and **GroupID** - as mentioned above.
* List Picker Routing Bot - for more information on how this works, please read this.

**Routing with Simple rule logic** is most applicable for first time interactions for consumers starting their conversation from a Place Card or Web/App URL.  Routing rules are configured on the backend by LivePerson resources to look for and leverage the **GroupID**, **IntentID** and **BusinessID** variables.

### Web Engagements

Business Chat buttons give your customers the ability to start a conversation with your brand through your website. It is a great way to target and invite customers to engage your brand, get help, make a payment or a purchase, etc. When enabling web engagements, businesses have the choice to restrict the button or banner's availability to Apple users only. While Conversation Cloud offers a large variety of engagement types and formats for your business to choose from, only 2 formats are compatible with Apple Business Chat: **“Sticky”** and **“Embedded”**.

When adding either a sticky or embedded engagement, we recommend replacing your live chat or Web Messaging buttons with one that redirects Apple users to Apple Business Chat. This makes for a consistent messaging experience that lives within your customers’ Apple ecosystem. You can restrict the availability of the Apple Business Chat engagement to iOS/iPadOS and/or Mac devices only via our device detection code. Follow the implementation steps below to enable. 

#### Sticky button

Sticky buttons float in the same location relative to the page, so even when the user scrolls, the icon remains in place. This is the most accessible engagement on the website for a visitor to locate and communicate with your business. 

![](img/apple-business-chat-entry-points-2.png)

**Benefits of a Sticky Engagement:** 
* Global entrypoint across the website to allow for greater accessibility.
* Generate a high amount of volume, resulting in highest overall CSAT due to the innate richness in Apple Business Chat. 
* Replace existing live chat and web buttons for Apple customers to minimize confusion with multi-messaging channel communication. 

#### Embedded banner/button

Embedded banners are fixed within a specific location in a webpage. An embedded banner is the right choice if it is relevant to the context of a particular page. Similar to a sticky engagement, embedded engagements can and should be limited Apple users.  

![](img/apple-business-chat-entry-points-3.png)

**Benefits of an Embedded Engagement:** 
* Contextual positioning of Call-to-action to drive customer engagement  
* Flexibility in placement to persuade customers towards sales or getting support via messaging.  

#### Considerations for web engagements

Thinking about adding Apple Business Chat buttons on your website? Below are some questions to help you get started. The answers should help you determine the entrypoint  experience you want for your customers. These questions should be in context to your use cases, agent setup, as well as skill routing. 

1. Based on the use cases you have in scope for Apple Business Chat, where in your website does it make most sense to add the button or banner? 
2. What skills will be answering your messaging? How will you do the routing? Based on the location of the entry point? The type of customer intent?
3. Is there a dedicated place on your website that you’d like the button to display?
4. Are you offering service transactions? Will you need to authenticate the conversations? Will you utilize messaging for sales? 

#### Implementation 

Once you have decided that you want to add either an ABC banner or button, the following setup will enable a website to check the visitor’s device for Apple Business Chat compatibility and serve an engagement if it is compatible.   

#### Prerequisite: Web Tag

The [Web Tag](getting-started-add-the-liveperson-tag-to-your-website.html) consists of a small, lightweight piece of code that monitors visitors and helps determine the correct campaign to offer. This includes evaluating if the Apple Business Chat button should be presented, should the visitor have an Apple device. Note, if you are already using the Conversational Cloud for Web Messaging, the original code snippet you implemented on your website will apply to Apple Business Chat as well. If you’re adding a messaging engagement for the first time, you’ll need to incorporate the Web Tag into your website. The tag will most likely be added to your website by your development team, or someone in charge of updating the website.

Below are the 3 functions offered by the dynamically loaded tags. To learn more, [click here](getting-started-add-the-liveperson-tag-to-your-website.html#functionality)
* Monitors your visitors in order to offer them relevant campaigns and collect data about their journey.
* Records and relays the engagements on each page, allowing agents to connect with visitors. 
* Allows for an embedded engagement window that allows visitors to connect with agents.

#### Additional prerequisite if adding an embedded engagement

In lieu of a floating engagement, you can embed a banner or button on specific locations in your website. The following code must be added on the page(s) in the location where the engagement should appear:  
 ```<div id="lpAbc"></div>```

{: .notice}
**Please note:** This requires backend enablement. Please connect with your account team to complete this task.

#### Design the engagement

Design the Business Chat buttons and banners to match your company’s logo colors and fonts. You can also place the icons, context, and call to action (CTA) horizontally or vertically in your design. For more information and design guidelines, see [Business Chat Human Interface Guidelines](https://static.cdn-apple.com/businesschat/documentation/BC-EntryPointsGuide.pdf). 

![](img/apple-business-chat-entry-points-4.png)

To get started with your design, use LivePerson’s proprietary [engagement studio](https://static-assets.dev.fs.liveperson.com/ABC/studio/index.html) to create your banners and icons. This tool will generate designs that are pre-approved by Apple. You can adjust the image dimensions to fit the look and feel of your website. Once done, host the image on your business platform and note the URL. 

A few examples of icon buttons and banners that you can add to your website:

![](img/apple-business-chat-entry-points-5.png)

