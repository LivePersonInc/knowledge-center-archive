---
pagename: Add messaging to your mobile app
categoryName: Messaging channels
subCategoryName: Mobile app messaging
indicator: messaging
subtitle: 'With mobile engagements, consumers can easily start messaging conversations
  directly from your mobile app '
level3: ''
permalink: messaging-channels-mobile-app-messaging-add-messaging-to-your-mobile-app.html
isTutorial: false
date: 2019-01-20 13:01:29 +0000
isNew: false
redirect_from:
  - liveengage-mobile-sdk.html

---
The following article describes the steps you need to take in order to add web messaging buttons and banners to your mobile app. For additional information on setting up your messaging program as a whole, including agent experience and operations, see [Getting started with messaging](getting-started-getting-started-with-messaging.html). If you're looking to quickly get started with our Native App SDKs, check out the [Mobile App Messaging SDK for iOS](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-overview.html) and the [Mobile App Messaging SDK for Android ](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-overview.html).

With campaigns for mobile app messaging, brands can easily create and manage digital engagements. These buttons or banners can then be placed on your brand’s mobile app, engaging your users and inviting them to message.

### Mobile app engagements require the following steps to configure:

_To be completed within your brand’s app by a mobile developer:_

* Implement the new SDK
* Implement the SDK’s Monitoring APIs

<br/>
_To be completed within LiveEngage by campaign manager, contact center manager, or project manager:_

* Install the Mobile App application
* Create new campaigns and engagements

<br/>

For an overview of campaigns in LiveEngage and their terminology, [click here](contact-center-management-campaigns-campaigns-overview.html).

## 1. Planning and thought starters

_(completed by contact center manager, project manager or program manager)_

Answering these questions will help you prepare and streamline your campaign creation process:

1. Do you want one messaging button available on all pages of your app?
2. Is there a dedicated place on your app that you’d like the button to display?
3. Will you hard-code the button into your app? Or do you want it to dynamically display based on different criteria?
4. What skills will be answering your messaging? How will you do the routing? Based on the location of the app? The type of customer?
5. Are you offering service transactions? Will you need to authenticate the conversations?
6. Will you utilize messaging for sales? Specific campaigns? Do you expect to track the conversations made over messaging?
7. Prep the right messages for your consumers and agents

## 2. Mobile app configuration

_(completed by mobile developers)_

### Add messaging to your SDK

Work with your developers to build the in-app messaging SDK into your app. For information on adding the Mobile App Messaging SDK, please refer to the documentation on the Developers Community:

* [Mobile App Messaging SDK for iOS](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-overview.html)
* [Mobile App Messaging SDK for Android ](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-overview.html)

### Engagement attributes

Determine what information you’ll need to collect and set up your engagement attributes. If you’d like your engagement to target specific customers or pages - or even track your sales and transactions - you’ll need to set up engagement attributes. Engagement attributes help you to collect more in-depth information about your visitors. In order to collect this information from your engagements, you first need to set up your [engagement attributes](https://developers.liveperson.com/messaging-interactions-api-engagement-attributes.html) through the mobile SDK.

By adding monitoring capabilities to your campaign, you can display tailored engagements to the right consumer at the right time. Learn more about the **monitoring API** and **reporting on engagement attributes** by following these links to the Developers Community:

* [Monitoring API for iOS](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-sdk-apis-monitoring-api.html)
* [Monitoring API for Android](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-sdk-apis-monitoring-api.html)

## 3. Install the mobile app data source

_(completed by contact center manager, project manager or program manager)_

Before you can create engagements for your mobile app, you must first configure the mobile app data source in LiveEngage. To do this, go to the campaigns area, select [Data sources](data-reporting-engagement-attributes-data-sources-engagement-attributes-overview.html) from the campaign footnote, and follow these instructions:

1. Under “Conversation sources” tab, choose “**Mobile App**” -> Connect.

![](/img/add-messaging-to-your-mobile-app-4.png)

{:start="2"}

1. Edit the mobile app source details
   1. Enter the name of your app (the default is mobile app) and add a description if you wish.
   2. Add an application icon by entering the URL of the hosted image. The icon should be in .PNG, .JPG or .GIF format, the recommended size is 50x50 pixels (up to 50KB) and the image should be hosted on a https site.
2. Click “**Create.**” The mobile app will now be installed on your LiveEngage account. On the same page, a new “App key” will be created, under the “Authentication details” section:
3. To disable mobile app messaging conversations, from the Edit Mobile App source page, switch the source activation toggle to off. As a result, no mobile app messaging conversations will be directed to LiveEngage.

![](/img/add-messaging-to-your-mobile-app-1.png)

## 4. Create a campaign

In LiveEngage, engagements can be added to either new or existing campaigns.

**As a best practice we recommend creating new, separate campaigns for Mobile App engagements**, in order to avoid misleading reporting for existing campaigns. To do so, simply click “**Add campaign**” at the bottom of the campaigns page.

When creating a new campaign, you first need to define the following:

* [Business goal](contact-center-management-campaigns-campaign-goals.html)
* [Target audience](contact-center-management-campaigns-target-audience.html)
* [Time frame](contact-center-management-campaigns-time-frame.html)

<br/>
Click on each of these links for a more in-depth explanation. Once these items have been defined, you can begin creating your mobile engagement.

### Create a new mobile app engagement

Once the app is installed on your LiveEngage account and a new campaign has been set up, you can begin creating buttons or banners to engage consumers on your mobile app. These engagements are created in the **engagement studio**, where a campaign wizard will guide you through the process.

**To create a new engagement, click** “**Add engagemen**t” under the desired campaign, then select “**Mobile App**” as the data source. This will open the settings page within the campaign wizard. There are three stages for creating mobile engagements: **settings, entry point and behavior.**

![](/img/add-messaging-to-your-mobile-app-2.png)

{: .important}

**Important:** When creating web engagements, brands configure the appearance of the engagement within the engagement studio. **However,** **when creating mobile engagements, this step does not take place in LivePerson’s platform, but within the brand’s mobile app**.

### Engagement settings

On this page, you can define **authentication**, **routing** and **language** settings for your engagement.

![](/img/add-messaging-to-your-mobile-app-5.png)

#### Authentication

Mobile app messaging engagements are currently for **authenticated conversations only.** You will see that [authentication](messaging-channels-web-messaging-authenticated-web-messaging.html) is toggled on by default.

#### Routing

Under [routing](contact-center-management-messaging-operations-routing-logic-overview.html#routing-logic-for-messaging-conversations), you may select the skill that your engagement should be assigned to. To route to all skills, select ‘**All skills**’ (default), to select a specific skill, select the ‘**Specific skill**’ option and choose from the dropdown menu.

**Note:** For brands using internal routing rules defined by LivePerson’s internal system, a third option, “System routing”, will be displayed. Selecting this option will route the conversation to an available agent according to the skill selection rules defined. Contact your LivePerson representative for additional details.

#### Language

The engagement language selected in this step will only affect items in the agent workspace - namely [Automatic Messages](contact-center-management-live-chat-operations-automatic-messages.html) and [Predefined Content](agent-manager-workspace-workspace-configuration-predefined-content-overview.html) - during an active conversation.

The window language displayed within the app (hardcoded texts like button text, window header etc.) is set by the consumer’s mobile device language settings. In order to understand which text elements are configured locally on the device, refer to[ Mobile String Localization](https://developers.liveperson.com/consumer-experience-ios-sdk-localizationkeys.html) on the Developers Community, for the full string localization keys.

Once your settings are complete, click **next**.

### Entry point

You will now reach the entry point library. An [entry point](contact-center-management-campaigns-entry-point.html) is the section within your app where the engagement will be displayed. You can choose the engagement entry point from the existing items, or click “**Add new**” to define a new entry point.

**Note:** By default only the relevant entry points for mobile app messaging will be displayed. To view all entry points on the account, choose ‘All entry points’ from the filter. All entry points will then be displayed, however only mobile app messaging entry points can be chosen. For further information on **creating a new entry point**, please refer [here](contact-center-management-campaigns-entry-point.html).

When you are finished defining your entry point, click **next**.

### Visitor behavior

The next page is the visitor behavior library. Here you can decide when to display engagements according to your consumers’ behavior by selecting the consumer behavior conditions you wish to impose on the target audience. From the visitor behavior library, you can choose the desired behavior from the existing items, or click “**Add new**” to define a new behavior.

![](/img/add-messaging-to-your-mobile-app-3.png)

When selecting the condition, look for a mobile phone icon next to the word “**Supported**,” which indicates that this engagement attribute is applicable for mobile engagements. For more information on **creating a new behavior**, [click here](contact-center-management-campaigns-visitor-behavior.html).

When you are finished defining your visitor behavior, click **next**.

### Publishing your campaign

Your new mobile app engagement is now complete. From the **Campaign Summary page**, you can give your engagement a name, edit all aspects of the engagement, enable or disable the engagement and publish. To learn more about publishing and unpublishing campaigns, [click here](contact-center-management-campaigns-managing-campaigns.html#publishing-and-unpublishing-campaigns).

## Next steps

Once you have added the mobile engagements to your app, remember to follow the getting started with messaging article for additional important steps such as:

* Define your working hours to ensure consumers see the actual reply times
* Customize automatic messages
* Create pre-defined content for your agents
* Set up a routing bot
* Set up the [Post Conversation Survey](ai-bots-automation-post-conversation-survey-bot.html)

### Set expectations based on your actual working hours

Although you have the option to hide your messaging buttons at certain hours of the day, it is best practice to make the button appear at all times - and to set expectations for reply times. For example, if your contact center does not operate at night, you can change the automatic reply during off hours to: “Thank you for your message - we’ll answer you first thing tomorrow morning.”

Through the platform, you can also set different working hours for different skills. For example, if your sales agents works until 7pm and your customer service agents are available 24/7 - you can adjust the automatic replies to reflect an accurate response time for each. Learn how to set up your working hours [here](https://developers.liveperson.com/workdays-api-overview.html).

### Customize the Automatic Messages for your brand

There are various messages that are automatically generated by LivePerson - such as ‘an agent will be right with you,” “your conversation has now ended,” etc. By default, there are messages written for various anticipated scenarios, but you can adjust and customize the language and wording to suit your branding or individual skill.

If you are communicating with your customers in multiple languages, you can also create different sets of automatic messages per languages. Learn how to customize your [automatic messages](contact-center-management-messaging-operations-automatic-messages-automatic-messages-configuration.html).

### Create predefined answers for your agents

For increased efficiency in your contact center, you can create predefined sentences and paragraphs that your staff can easily search and enter into conversations.

You can create different sets of answers for use cases such as:

* Support in different languages
* Sales promotions and benefits
* Frequently asked questions
* Processes for various inquiries

As you create campaigns, you can create messages that are specific to that topic or campaign and assign it based on skill or languages. [Click here](agent-manager-workspace-workspace-configuration-importing-predefined-content.html) to learn how to import predefined content.

### Set up a routing bot

The Routing Bot enables brands to easily identify the intent of the consumer and the reason why he/she has requested to message with the brand. The bot then routes the consumer to the relevant skill that can handle the inquiry. To learn more about the Routing Bot and how it is configured, [click here](conversation-builder-routing-bot-tutorial-overview.html).

### Set up the Post Conversation Survey

The Post Conversation Survey enables brands to gather feedback from consumers at the end of conversations and measure their success across all messaging channels. The survey is delivered in a conversational experience, driving higher completion rate and helping you to improve customer satisfaction. To learn more about the Post Conversation Survey and how it is configured, [click here](ai-bots-automation-post-conversation-survey-bot.html).
