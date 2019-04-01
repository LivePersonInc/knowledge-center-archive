---
pagename: Add web messaging to your website
categoryName: Messaging channels
subCategoryName: Web messaging
indicator: messaging
subtitle: Buttons and banners on your website make it possible to engage consumers
  over messaging
level3: ''
permalink: messaging-channels-web-messaging-add-web-messaging-to-your-website.html
isTutorial: false
date: 2019-01-16 17:31:38 +0000
isNew: false
redirect_from:
- how-to-mark.html

---
Brands can better target their consumers by adding engagements to their website that invite consumers to start messaging. By creating and managing these buttons and banners through LivePerson’s platform, they can choose what users to target based on engagement attributes or entry points and route them to a desired skill. For an overview of campaigns in LiveEngage and their terminology, [click here](contact-center-management-campaigns-campaigns-overview.html).

## 1. Planning & thought starters

_(should be completed by contact center manager, project manager or program manager)_

**Answering these questions will help you prepare and streamline your campaign creation process:**

1. Do you want one messaging button available on all pages of your website?
2. Is there a dedicated place on your website that you’d like the button to display?
3. Will you offer messaging only to specific audience? How will you target this audience?
4. What skills will be answering your messaging? How will you do the routing? Based on the location of the app? The type of customer?
5. Are you offering service transactions? Will you need to authenticate the conversations?
6. Will you utilize messaging for sales? Specific campaigns? Do you expect to track  the conversations made over messaging?

## 2. Add code & conversion tracking to your website

### LiveEngage tag

If you are already using LiveEngage for chat, the original code snippet you implemented on your website will apply to web messaging as well - no additional action is needed.

If you’re adding web messaging for the first time, you’ll need to grab the LiveEngage tag and ask a developer to incorporate it into every page of your website. For more information how to do this, [click here](getting-started-add-the-liveperson-tag-to-your-website.html).

### Engagement attributes

Engagement attributes help brands to **collect more in-depth information about visitors**, such as products viewed, errors encountered and more. To collect visitor information from your web engagements, you first need to [configure your engagement attributes](data-reporting-engagement-attributes-setting-up-engagement-attributes.html). For more information on individual engagement attributes, you can refer to the [Developers Community](https://developers.liveperson.com/messaging-interactions-api-engagement-attributes.html).

## 3. Review conversation history length (for unauthenticated messaging)

When a consumer starts an unauthenticated web messaging conversation, a random token is generated, representing the identity of the consumer. As long as this token is valid, the thread of conversations can continue.

While the engagement window is open, the token is automatically refreshed. Once the engagement window is closed, either by ending the conversation or by closing the tab of the website (or the entire browser), the conversation becomes idle.

When deciding on the right idle time, the brand should consider the SLA of the agents when responding to consumers, so the conversation stays active enough to leave enough time for agents to respond. The idle time should be longer than SLA.

Brands can configure the maximum time a conversation can stay idle, during which period of time the consumer can return to the thread and see the previous conversations. Once the defined idle time has passed, and the token expires, when the same consumer starts a conversation, a new token will be generated and a new conversation thread will start. The previous thread cannot be accessed from the consumer side. Your LivePerson Account Team will help you with setting the right idle timeframe from your needs. Learn more about setting timeframes in [Smart Capacity skill settings](/contact-center-management-messaging-operations-smart-capacity-smart-capacity-per-skill.html).

{: .notice}  
**The default idle time is 30 days. To configure a different idle time please contact your LivePerson Account Team**. 

## 4. Sales & conversion tracking

If you are planning to create messaging campaigns tailored for tracking sales and conversions, ensure you define the following settings (can be found on the campaigns settings footnote).

1. **Define your currency**: You can define what currently you would like to track your sales and conversions in. This currency will reflect in your reports.  For more info, [click here](data-reporting-engagement-attributes-multi-currency.html).
2. **Cross session period:** Often your consumers will not purchase on the first visit to your website.  You can define how long a ‘cross session’ applies. For example, a cross session of 2 weeks means that if a consumer visited your site, had a messaging conversation, and came back to purchase only 2 weeks later - that sale will be attributed as a conversion following that specific conversation.
3. **Conversion Attribution model:** In the case that more than one agent or bot handled the conversation, define who should get the conversion. First agent? Last agent? Split?

## 5. Creating a campaign

Before you can start creating your buttons or banners, you need to set up your campaign. In LiveEngage, **engagements can be added to either new or existing campaigns**.

To create a new one, simply click “**Add campaign**” at the bottom of the campaigns page, or select an existing campaign to add your engagement to.

When creating a campaign, you first need to define the following:

* [Business goal](contact-center-management-campaigns-campaign-goals.html)
* [Target audience](contact-center-management-campaigns-target-audience.html)
* [Time frame](contact-center-management-campaigns-time-frame.html)

Click on each of these links for a more in-depth explanation. Once these items have been defined, you can begin creating your web engagement.

## 6. Designing the buttons & window

You can now begin creating banners or buttons to add to your website. These engagements are created in the **engagement studio**, where a campaign wizard will guide you through the process.

**To add a new web engagement to your campaign**, click “**add engagement**” and select web as the engagement source. This will open the template gallery within the campaign wizard. There are six stages for creating web engagements: **gallery, settings, studio, window, entry point and behavior.**

![](/img/add-web-messaging-to-your-website-1.png)

### Template gallery

The template gallery page allows you to choose the format of your engagement and whether you are trying to create a messaging button or content banner. Learn more about choosing your engagement format here.

### Engagement settings

From the settings page, you can define the conversation channel, authentication and routing. You can also customize your Automatic Messages and Predefined Content on this page.

![](/img/add-web-messaging-to-your-website-2.png)

#### Conversation channel

Select if you want the engagement to lead to a messaging conversation or to a simple link. From the **conversation type** drop down, select **messaging**.

#### Authentication

You can select one of these security methods for your conversation:

* **Authenticated**: Conversations can have a layer of security, or authentication, for brands looking to add messaging to pages within the logged in area of their website. By configuring your buttons for authenticated pages, they can be fully branded and responsive for both desktop and mobile.
* **Unauthenticated** For unauthenticated engagements, disable the toggle. Unauthenticated engagements will display on both [authenticated](messaging-channels-web-messaging-authenticated-web-messaging.html) and unauthenticated pages.

#### Routing

Under [routing](contact-center-management-messaging-operations-routing-logic-overview.html), you may select the skill that your engagement should be assigned to. To route to all skills, select ‘**All skills**’ (default), to select a specific skill, select the ‘**Specific skill**’ option and choose from the dropdown menu.

#### Window presentation

Select the mode in which the messaging window will be presented to the consumer, either embedded in the page or as a separate browser window.

#### Language

The engagement language selected in this step will only affect items in the agent workspace - namely [Automatic Messages](contact-center-management-live-chat-operations-automatic-messages.html) and [Predefined Content](agent-manager-workspace-workspace-configuration-predefined-content-overview.html) - during an active conversation.

### Engagement studio

The engagement studio page is where you **design your button or banner to suit the look and feel of your website**. By clicking on your engagement you can adjust the text, style and design of the engagement, and add additional buttons, images and text. To learn more about designing engagements, [click here](contact-center-management-campaigns-creating-buttons-and-banners.html).

### Conversation window

The engagement window studio allows you to customize the messaging conversation window to match your site. You can click on different parts of the window to change their design, and add additional elements. Once your settings are complete, click **next**. For more information on the conversation window design, [click here](/contact-center-management-campaigns-engagement-window.html).

### Entry point

You will now reach the entry point library. An entry point is the section within your website where the engagement will be displayed. You can choose the engagement entry point from the existing items, or click “**Add new**” to define a new entry point. When you are finished defining your entry point, click **next**. For further information on creating a new entry point, please [refer here](contact-center-management-campaigns-entry-point.html).

### Visitor behavior

Decide when to display engagements according to your consumers’ behavior by selecting the behavior conditions you wish to impose on the target audience. For further information on creating a new behavior, please refer to the [visitor behavior documentation](contact-center-management-campaigns-visitor-behavior.html).

When selecting the condition, look for a globe icon next to the word “**Supported**,” which indicates that this engagement attribute is applicable for web engagements.

## 7. Publishing your campaign

Your new mobile app engagement is now complete. From the **Campaign Summary page**, you can give your engagement a name, edit all aspects of the engagement, enable or disable the engagement and publish. To learn more about publishing and unpublishing campaigns, [click here](contact-center-management-campaigns-managing-campaigns.html#publishing-and-unpublishing-campaigns).

## Displaying your engagements

### Advanced banner display settings

#### Test click rates through control groups

In order to evaluate the effectiveness and performance of campaigns (and your account as a whole), a control group needs to be set up. A control group is a random number of visitors to your website who do not receive any type of engagement from a LiveEngage campaign.The activity of these visitors in the control group, for example, sales purchased and defined goals reached, is then compared to the activity of visitors who were exposed to campaigns. The difference between the control and exposed groups provides information on the effectiveness of your campaign. For more information on [control groups](contact-center-management-campaigns-campaign-settings.html#control-groups), click here.

#### Display multiple engagements on the same page

Consumers may be targeted by more than one engagement on the same page, at the same time, although LiveEngage may not necessarily display all the engagements to the consumer. In such cases LiveEngage uses a decision mechanism to determine the engagements that will be displayed, taking the following factors into consideration: **campaign priority, web engagement zones and agent status**. To learn more about running campaigns with multiple engagements, [click here](contact-center-management-campaigns-managing-campaigns.html#top).

#### Fine tune proactive engagements

Proactive engagements offer a rich, hard to miss experience for consumers and are available in a variety of formats including overlay, toaster and peeling corner. To ensure the experience is both engaging and non-intrusive, LiveEngage offers the following settings:

**Number of displays**

This setting allows you to limit the number of times a proactive engagement is displayed in total during a visit. When the limit is reached, no other proactive engagements will be displayed in that visit. You can select from one, two or three times, or unlimited; the default setting is unlimited. You can also choose to select different settings for conversation and content engagements.

**Invite after decline**

This setting allows you define the behavior after a consumer declines a proactive engagement, by selecting whether or not other proactive engagements can thereafter be displayed. For example, you can decide to display a proactive conversation engagement for one Line of Business, even if a proactive conversation engagement for a different Line of Business was previously declined.

By default, after declining a proactive content engagement, other content engagements can be displayed; after declining a proactive conversation engagement, conversation engagements cannot be displayed.

![](/img/add-web-messaging-to-your-website-3.png)

#### Display engagements based on a scheduler (using shift scheduler)

LiveEngage enables you to define your account’s working hours, in order to set the most accurate expected response time for your consumers during a messaging conversation. You have the option of setting working hours manually, or using the automatic scheduler. For more information on configuring the shift scheduler, [click here](contact-center-management-messaging-operations-shift-scheduler-configuration-guide.html).

### Optimize the mobile experience

To enhance your visitors’ messaging experience on mobile, use the embedded engagement window and optimize your website for mobile.

To optimize your web experience, tag of all your web pages:

1. Ensure that your website conforms to HTML standards (e.g. one header and one body per page).
2. (Recommended) Add the viewport meta tag (as shown below) to the page code.

   <meta name="viewport" content="width=device-width,

   initial-scale=1.0,

   minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

<div class="notice">
<b>Note:</b>
<ul> If the <b>viewport meta tag</b> does not exist on the page, on mobile devices the window will open in a different browser tab (instead of being embedded within the page).
<li>Manual ettr</li> <li>If the <b>viewport meta tag</b> exists on the page, even if the content is different from the recommendation above, the window will still be embedded on the page. Your site can be pinch-and-zoomable and the window will still be embedded on the page as long as the meta tag is there.</li>
</ul>
</div>