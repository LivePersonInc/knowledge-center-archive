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
* [Business Chat Conversation URL](messaging-channels-apple-business-chat-entry-points.html#apple-business-chat-conversation-url)
  * When customers click the conversation URL, the system redirects them to the Message app where they can send a message to your business. 
  * The conversation link can be used in [email](messaging-channels-apple-business-chat-entry-points.html#email), [social media](messaging-channels-apple-business-chat-entry-points.html#social-media-posts), [QR codes](messaging-channels-apple-business-chat-entry-points.html#qr-code), and as [website buttons and app engagement](messaging-channels-apple-business-chat-entry-points.html#web-engagements).  
* [Chat Suggest](messaging-channels-apple-business-chat-entry-points.html#chat-suggest)
* [Maps and Siri](messaging-channels-apple-business-chat-entry-points.html#maps-and-siri-search-apple-native-entry-points)

## Apple Business Chat Conversation URL

The conversation URL consists of a business ID and optional query string parameters that are invaluable to optimizing Business Chat entry points and tracking traffic. 

As an overview, the conversation URL is ```https://bcrw.apple.com/urn:biz:<your-business-id>```, replacing ```<your-business-id>``` with the business ID you received from Apple after registering with Business Chat. 
 
For example:
![](img/apple-business-chat-entry-points-00.png)

Add optional query string parameters to the entrypoint by including intent and group IDs. Within Conversation Cloud, the **Intent value** will be mapped to the **customerType SDE**, which is primarily used for [skill routing](contact-center-management-messaging-operations-routing-logic-overview.html) as well as tracking and analyzing volume by entrypoint. The Group value will be mapped against the **customerStatus SDE**. It is recommended to add the entrypoint description as *‘intentId’* and relevant campaign attributes as *‘groupID’*. 

Using LivePerson’s [MCS toolkit](data-reporting-meaningful-conversation-score-(mcs)-using-the-mcs-toolkit.html), both customerType and customerStatus SDEs help businesses analyze performance at the account level, agent level, and conversation level.  

Here’s an example of Business Chat conversation URL with the added parameters:
![](img/apple-business-chat-entry-points-01.png)

* **Business Chat ID** = 27e9ee9c-5093-4e93-9f2a-398a83xxxx
* **Intent ID** = “ sales ”
* **Group ID** = “ vip ”

## Determine the Apple Business Chat URL

To implement the engagements on LivePerson, you will need your Apple Business Chat conversation URL. This link can be retrieved from your Business Chat account within the [Apple Register portal](https://register.apple.com/). 

![](img/apple-business-chat-entry-points-1.png)

## Skill routing for Business Chat

There are two primary methods for routing Business Chat  conversations to ensure they are delivered to the right skills and therefore the right agents.
* Routing with simple rule logic - **IntentID** and **GroupID** - as mentioned above.
* List Picker Routing Bot - for more information on how this works, please [read this](messaging-channels-apple-business-chat-features.html#static-list-picker-for-skill-routing).

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

#### Create a campaign

Once you have your engagement components hosted, you need to set up your campaign. In the Conversational Cloud, **engagements can be added to either new or existing campaigns via the Campaign Builder**.

To create a new campaign, click **Add campaign** at the bottom of the Campaign Builder. When creating your campaign, you should add a differentiator that identifies the device. 
* **For example:** “Apple Business Chat - Mobile” or “Apple Business Chat - Desktop” 

You will be asked to define the following for your campaign: [Business goal](contact-center-management-campaigns-campaign-goals.html), [Target audience](contact-center-management-campaigns-target-audience.html), and [Time frame](contact-center-management-campaigns-time-frame.html). Below are the inputs for setting up an Apple Business Chat campaign: 

* Set Business Goal to **“Interact with consumers”**
* Follow these steps to determine ‘target audience’ 
 * Click on Target audience
 * Select “Marketing source”
 * Select “External Campaign” from the drop down menu
 * Enter **“abc”** (with quotes) and press Tab or Enter to submit your entry.
 * Now it’s time to select the platform for the engagement,
  * For mobile web, select “Mobile tablet” and “Mobile smartphone”
  * For desktop web, select “Desktop/Laptop”
 * Click **“Save”** and then **“Done”** to see the campaign configuration.
 
#### Create an engagement

Once the campaign is set up, you will need to create a new web engagement. To do so, click **Add engagement** and select **Web** as the engagement source. 
* Select the Type as Content and the Format as either Sticky (if using an icon button) or Embedded (if using either a banner or icon)
* Click “Design your own” in order to add the Business Chat URL. 
* In the next window, select “Redirect URL”, check “Open in new window”, and enter the brand’s **Apple Business Chat URL**.
* Remove the button text and click the **Size and Placement** icon to enter the dimension of the icon image.  
* To enhance the look and feel of the engagement, click the **Background icon** and set Radius to 0 px and all the colors to transparent
* Now it’s time to enter the engagement image. Click **Add Element** icon and then **Add image**
* Enter the URL of the hosted image and to preview the button, click “refresh” **Note:** If adding an embedded engagement, enter the div ID “lpAbc” and press Enter.  
* Select the default window from the Engagement Window library. Please note, **settings** will not apply to Apple Business Chat.
* From the Entry Point library, select **All entry points** and then **All behaviors** (recommended) 

#### Publish your engagement

Your new Apple Business Chat engagement is now ready to be published. From the Campaign Summary page, give your engagement a name, enable the engagement and publish. To learn more about publishing and unpublishing campaigns, [click here](contact-center-management-campaigns-managing-campaigns.html#publishing-and-unpublishing-campaigns).

#### Design the engagement

Design the Business Chat buttons and banners to match your company’s logo colors and fonts. You can also place the icons, context, and call to action (CTA) horizontally or vertically in your design. For more information and design guidelines, see [Business Chat Human Interface Guidelines](https://static.cdn-apple.com/businesschat/documentation/BC-EntryPointsGuide.pdf). 

![](img/apple-business-chat-entry-points-4.png)

To get started with your design, use LivePerson’s proprietary [engagement studio](https://static-assets.dev.fs.liveperson.com/ABC/studio/index.html) to create your banners and icons. This tool will generate designs that are pre-approved by Apple. You can adjust the image dimensions to fit the look and feel of your website. Once done, host the image on your business platform and note the URL. 

A few examples of icon buttons and banners that you can add to your website:

![](img/apple-business-chat-entry-points-5.png)

#### Best practices for Web Engagements 

* **Track your metrics.** If you don’t have [intentID](https://developer.apple.com/documentation/businesschat/bcchataction/about_intent_group_and_body_values) and/or [groupID](https://developer.apple.com/documentation/businesschat/bcchataction/about_intent_group_and_body_values) in your web engagements, be sure to add them. While optional parameters, they can provide invaluable insights on customer engagement such as traffic source and skill-based reporting, via MCS toolkit.
* **Design a good engagement.** Below are a few properties to help with your design:
  * **Compelling Design.** Create a call to action that grabs the user's attention. A bright button color that contrasts with the color of the page or an email is an effective strategy.
  * **High Visibility.** Make your CTA noticeable by ensuring that the font and font size command attention.  
  * **Clear Benefit.** Stately clearly the benefit that the user will get. 
  * **Short and Actionable Text.** Use power words in short phrases to compel users to take action. Some effective CTAs include: “discover”, “buy now” 
  * **Sense of Urgency.** A strong sense of urgency such as a limited time offer can drive immediate action from users.  
* **Provide context and Call to Action.** Adding context and call to action (CTA) to any embedded banner or button is critical to encouraging customers to send a message. Ensure that the CTA is relevant in the context of the webpage.  
  * For example, on a page for billing, the CTA should say **“Message us for help with billing.”** 
* **Position matters.** Place your button where people click or tap. Especially if the goal of the engagement.
* **Add a “body”** a prepopulated message users will send for the first engagement.

### QR Code

A QR code is a type of barcode that communicates information when scanned such as links, contact information, and text messages. Customers can scan and read a QR code on their phone by holding up their camera app to the code. Businesses can embed the Business Chat Conversation URL in the QR code to offer Rich Messaging on both digital and offline platforms, opening the door to endless possibilities. QR codes allow for fun, delightful marketing, sales and event campaigns. 

![](img/apple-business-chat-entry-points-6.png)

**Examples of QR Code use cases:**
* **Provide customer support.** Add a QR code to your business card, brochure, or flyer that says, “Scan this to get in touch with our team.” It can pop up a pre-written text that says, “I need some help with your product.”
* **Facilitate reservations.** Create a QR code that sends a text requesting a reservation or to be added to a waiting list. Your code can also serve as an RSVP for an event like a webinar or get-together.
* **Drive true conversational commerce** by engaging your customers and allowing them to purchase products and services on Business Chat via Apple Pay.  

#### Setup

Use a tool like QR Code Monkey to transform your Business Chat URL into a custom QR code. There are many free online tools available. Be sure to include group and/or intent IDs in the Business Chat URL to ensure proper traffic tracking. 

### Email

You can make Business Chat available via email by using the conversation URL with intentID and groupID parameters to better understand traffic from these entry points. In order to do this, you can format the message in HTML and insert text or image with an anchor tag where the hrf is the brand’s Apple Business Chat URL.  

Example: 

```
<a href="https://bcrw.apple.com/urn:biz:27e9ee9c-5093-4e93-9f2a-398a83xxxx&biz-intent-id=sales&group=vip">

         <img src="businesschatbutton.png" width=150" height="70">

</a>
```

### IVR Deflection to Business Chat 

With an Interactive Voice Response (IVR) Deflection system, businesses can integrate with the Conversational Cloud  in order to deflect calls to messaging. This helps reduce the number of inbound calls and accrued operational cost. You can further decrease the length of your queue while optimizing customer experience by integrating with Apple Business Chat. 

Callers will be diverted via the IVR to Apple Business Chat when they receive a link via SMS that they can tap to immediately engage with an agent. This saves them time and increases customer satisfaction. 

{: .notice}
**Please note:** To learn more, contact your account team so they can get you in touch with our in-house experts. 

### Social Media posts

Because starting a conversation via Business Chat is as easy as tapping a link, you can add a conversation URL to your social media posts for targeted marketing. 

Instagram stories, for example, are a great way to share links to new or time-sensitive content. This is a great way to promote flash sales, limited- time promotions and giveaways, etc. and to allow customers to message you on Business Chat with any questions and/or to complete transactions via a swipe-up link.  

## Chat Suggest 

Brands can reduce phone call volume and voice support cost by enabling Chat Suggest. When your customers tap on any of your registered business phone numbers, an overlay appears allowing your customers to choose between voice and messaging. 

**Benefits of Chat Suggest:**
* Provide the most flexibility and controllability of incoming traffic by allowing brands to quickly throttle the feature’s visibility
* Deflect calls before your customers reach your IVR queue 
* Reduce voice support costs by shifting call volume to messaging 
* Deliver a better customer experience with Business Chat’s built-in features, such as Apple Pay, list pickers, time pickers, and Augmented Reality

### Anatomy of Chat Suggest

Below are all of the configurable components of Chat Suggest. You can define each one on the [Chat Suggest form](https://ce-sr.s3-eu-west-1.amazonaws.com/KC/Apple+Business+Chat/Chat+Suggest+Form+_+NEW.xlsx). 

![](img/apple-business-chat-entry-points-7.png)

1. **Name to Display:** You have the ability to associate a name with every phone number you wish to enable. This can be the name of your organization or to provide your customers with more context, the name of the line of business. Below the name is a verification mark that is carried over from your Business Chat account approval. 
2. **Title:** The title is the immediate power word(s) to encourage your customer to send a message vs call. We recommend utilizing “Live Agents” or “Customer Support” as these titles have shown to drive the most successful deflection rates across brands. **
3. **Call to Action:** Besides the title, the call to action provides your customers additional context or encouragement to message. 
4. **Phone number:** The phone number is the business phone number that you are enabling for Chat Suggest and are looking to deflect calls from.

### Thought starters

Chat Suggest can help further reduce inbound calls from your customers. Implementation is easy but preparation is key. To maximize the value of Chat Suggest and further reduce call volumes, businesses should be prepared to register all primary support phone numbers. If worried about excessive messaging volume, there are options and recommendations that the LivePerson team and Apple can help you think about. For now, here are some food for thought before launching Chat Suggest: 

1. **Capture key metrics for each registered phone number.** These are your baseline metrics that will help you ascertain the progress and success of chat suggest for each phone number
 * What is the phone call volume received from customers using iPhones? When thinking about expected volume, consider how many users already tap the phone numbers to call.
 * What is the maximum daily agent capacity? i.e., how many customers can the agent team handle on a daily basis (with all customers connected to a live agent in less than 3 minutes from their request)?
2. **ABC use cases must be compatible with Chat Suggest.** There are many reasons as to why your customers might want to get in touch with your business. However, not all of these intents will make sense with Chat Suggest. For starters, think about the primary call drivers for your customers and whether or not agents are equipped to solve these intents on Apple Business Chat.  
3. **Registered phone numbers must be accessible and tappable.** All registered phone numbers should be in E.164 format to trigger Chat Suggest, and are tappable in the brand’s website, apps and other digital platforms. Phone numbers should be tappable in iOS and not an image or in text format. Here’s how you can [create tappable telephone links](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/PhoneLinks/PhoneLinks.html). 

### Setup 

Ready to enable your business phone numbers for Chat Suggest? Complete this [form](https://ce-sr.s3-eu-west-1.amazonaws.com/KC/Apple+Business+Chat/Chat+Suggest+Form+_+NEW.xlsx) and return it to your LivePerson account team. There is no limit to the number of phone numbers you want to enable for a single Business Chat account.  

It is important to note, however, there is a 7-10 day propagation period after enabling Chat Suggest. Generally, it takes a week's time for the feature to propagate across all iOS devices with iOS 13+. Because the initial visibility of the entrypoint is very low, your business will mostly see a trickle of volume upon go live and a gradual increase in the next few days. 

### Optimizing Chat Suggest

While enabling chat suggest is very simple, there are multiple additional factors that impact the success of Chat Suggest. 
* On your website, are your phone numbers easily accessible to your customers and tappable? 
* Are you using the most optimal title and call to action? 
* Can your customers quickly and easily find your phone numbers on a quick Google search?  
* Leverage a default “[body](https://developer.apple.com/documentation/businesschat/bcchataction/about_intent_group_and_body_values)” parameter

## Maps and Siri Search (Apple native entry points)

Upon go-live, you can enable iOS entry points such as Maps, Siri Search directly from your Apple Register. Doing so will make the Business Chat button available to your customers within the aforementioned Apple applications. 

Traffic generated from these entry points is highly dependent on the user behavior of your customers, as well as their preferred touchpoints.  For example, customers who are frequent users of Maps search to find and/or research a business will most likely benefit from having a Business Chat button on your Maps place card. 

### Enabling native entry points

In order to display a Business Chat button on one of the native entry points, you must be willing to enable this for all (Siri and Maps). For businesses with multiple Maps locations, you can work directly with Apple, should you wish to limit the Business Chat button available by a specific region(s).  

![](img/apple-business-chat-entry-points-8.gif)

**Spotlight Search**
* No ability to add intentID/ groupID

![](img/apple-business-chat-entry-points-9.png)

**Siri**
* No ability to add intentID/ groupID

![](img/apple-business-chat-entry-points-10.png)

**Maps**
* intentID defaults to POIs’ address

![](img/apple-business-chat-entry-points-11.png)

