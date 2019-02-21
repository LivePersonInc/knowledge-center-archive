---
pagename: Displaying chat engagements
categoryName: Messaging channels
subCategoryName: Live chat
indicator: chat
subtitle: ''
level3: ''
permalink: messaging-channels-live-chat-displaying-chat-engagements.html
isTutorial: false
isNew: false
date: 2019-01-29 15:20:57 +0000
published: false

---
Once you’ve created your engagements you can easily manage them within LiveEngage. The following functionalities make it possible to control your engagement’s behavior.

### 1. Control groups

In order to evaluate the effectiveness and performance of campaigns (and your account as a whole), a control group needs to be set up.

A control group is a random number of visitors to your website who do not receive any type of engagement from a LiveEngage campaign. The activity of these visitors in the control group, for example, sales purchased and defined goals reached, is then compared to the activity of visitors who were exposed to campaigns. The difference between the control and exposed groups provides information on the effectiveness of your campaign. This data can be seen in select metrics listed in the data bar and data dashboard.

To learn more about setting up your control groups, [click here](contact-center-management-campaigns-managing-campaigns.html#measuring-success-using-control-groups).

### 2. Button refresh

There are three states for a chat engagement: Online, Busy and Offline. Each state is related to the status of the agents, as well as the maximum wait time.

When consumers are browsing between several windows, pages can remain static for long periods of time without being refreshed. This can affect the state of your engagements.

With button refresh, brands have the ability to refresh the state of the engagement at configurable intervals, ensuring the engagement on the page accurately reflects the availability of the agents. Read more about button refresh [here]().

### 3. Multiple engagements on the same page

Consumers may be targeted by more than one engagement on the same page, at the same time, although LiveEngage may not necessarily display all the engagements to the consumer. In such cases LiveEngage uses a decision mechanism to determine the engagements that will be displayed, taking the following factors into consideration: **campaign priority, web engagement zones and agent status**.

To learn more about running campaigns with multiple engagements, [click here](contact-center-management-campaigns-managing-campaigns.html).

### 4. Busy State

LiveEngage offers a variety of creative engagements to communicate to consumers when no agents are online (during off-hours) and during busy times when they have no capacity and long wait times are expected. In this way, consumer expectations are managed and potential frustration is avoided. The busy state indicates that at least one agent is online but with no capacity to handle consumers as the expected wait time is longer than the maximum wait time for the skill.

[Click here](contact-center-management-campaigns-managing-campaigns.html#busy-state) to learn more about the busy state and how it is configured.

### 5. Proactive engagement behavior

Proactive engagements offer a rich, hard to miss experience for consumers and are available in a variety of formats including overlay, toaster and peeling corner. To ensure the experience is both engaging and non-intrusive, LiveEngage offers the following settings:

#### Number of displays

This setting allows you to limit the number of times a proactive engagement is displayed in total during a visit. When the limit is reached, no other proactive engagements will be displayed in that visit. You can select from one, two or three times, or unlimited; the default setting is unlimited. You can also choose to select different settings for conversation and content engagements.

#### Invite after decline

This setting allows you define the behavior after a consumer declines a proactive engagement, by selecting whether or not other proactive engagements can thereafter be displayed. For example, you can decide to display a proactive conversation engagement for one Line of Business, even if a proactive conversation engagement for a different Line of Business was previously declined.

By default, after declining a proactive content engagement, other content engagements can be displayed; after declining a proactive conversation engagement, conversation engagements cannot be displayed.

![](/img/displaying-chat-engagements-1.png)

### 6. Offsite engagements

Offsite engagements give brands the opportunity to offer chat from any location by creating a URL that consumers can click to begin a private chat conversation. This URL can be embedded to offer chat from social media sites, digital advertisements, email and more. Learn more about offsite engagements [below](messaging-channels-live-chat-displaying-chat-engagements.html#offsite-engagements).

### 7. Optimizing the mobile experience

To enhance your visitors’ chat experience on mobile, use the Embedded Engagement window and optimize your website for mobile.

To optimize your web experience, tag of all your web pages:

1. Ensure that your website conforms to HTML standards (e.g. one header and one body per page).
2. (Recommended) Add the viewport meta tag (as shown below) to the page code.

<br />
`<meta name="viewport" content="width=device-width,`
<br />
`initial-scale=1.0,`
<br />
`minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>`

<div class="important">
<b>Note:</b>
<ul>
<li>If the <b>viewport meta tag</b> does not exist on the page, on mobile devices the window will open in a different browser tab (instead of being embedded within the page).</li> <li>If the <b>viewport meta tag</b> exists on the page, even if the content is different from the recommendation above, the window will still be embedded on the page. Your site can be pinch-and-zoomable and the window will still be embedded on the page as long as the meta tag is there.</li>
</ul>
</div>

## Offsite engagements

Offsite engagements offer brands the opportunity to expand their availability to consumers by providing chat from any location and through any media including:

* Social media
* SMS messages (triggered by IVR)
* Email
* Digital advertising
* Printed media
* TV
* And many more...

When setting up an offsite engagement, you will create a URL that will refer your consumers to a private chat with one of your agents. You can use this link anywhere you want to engage with your consumers.

Offsite engagements are also helpful for brands wanting to use an IVR deflection solution, that will send chat invite links to voice callers. For more information, refer to our IVR Engagement API documentation for [chat](https://developers.liveperson.com/products-channels-ivr-deflection-solution-setting-up-ivr.html) and for [SMS](https://developers.liveperson.com/products-channels-sms-ivr.html).

### Enhancing the consumer experience

Offsite engagements allow you to reduce the cost of your contact centers, and increase consumer satisfaction by deflecting calls to chat instead of letting consumers wait on hold. For example, to improve service and offer immediate support, you can add a QR code to the monthly bills you send out and consumers can scan this in order to chat with your agents.

### Boost sales and revenue

Offsite engagements allow you to increase sales and create new leads by engaging with consumers via a variety of touchpoints, such as digital advertising, emails and catalogues. For example, you’re promoting your climbing gear this week and you want to bring consumers to chat via your ad in the popular online climbing magazine, climb-extreme.cn. Your agents have been briefed to drive sales for the gear. The same goes for ads in all the locations that you are advertising. You can invite them to engage with your agents even if they’ve never visited your site.

### How to create a new offsite engagement

1. Create a Campaign and fill in the campaign details (name, target audience and timeframe).
2. Click **Add engagement**. From the menu, **select** **“Offsite”** engagement source:

   ![](/img/displaying-chat-engagements-2.png)

{:start="3"}
3\. The engagement settings page will open.

![](/img/displaying-chat-engagements-3.png)

{:start="4"}

1. Select the Offsite Source; this is the source from which you want to engage with your consumer (e.g. email, social media).
2. Enter the URL of the page where you want to embed the chat window. This is the URL to which your consumers will be redirected when clicking the Engagement URL.

<div class="notice">
<b>Note:</b>
<ul>
<li>This page should contain the LiveEngage tag with your account number.</li> <li>If a page is intended to be viewed via a mobile device, it should be mobile optimized. If not, the consumer will be redirected to an empty page with chat.</li> <li>If the page is reloaded or redirects to another page before the chat window has opened, the URL parameters must be passed to the new page. This will ensure the window opens as expected on the new page.</li>
</ul>
</div>

{:start="6"}

1. Select the skill the engagement should be routed to. To route to all skills, select ‘All skills’ (selected as default); to select a specific skill, select the ‘Specific skill’ option and choose from the dropdown menu.
2. Add an agent note if you wish. This is a note regarding the engagement which will be visible to all agents. For example “As part of our summer sale, consumers arriving from this engagement can be given an extra 5% discount."
3. Select the engagement language.
4. To set the engagement to display as ‘available’ when at least one agent is online, regardless of the duration of the wait time, you can select the ‘Ignore max wait time’ checkbox at the bottom of the page
5. Click **next.**
6. The Engagement Window library will open. For guidance on customizing an engagement window, [click here](contact-center-management-campaigns-engagement-window.html).
7. Click **done.**
8. When you’ve finished creating the engagement, enable it and publish its campaign.
9. Copy the engagement URL and use it in your selected touch point.

![](/img/displaying-chat-engagements-4.png)

## Publishing the engagement

Once you’ve finished creating your engagement, follow these steps to publish it:

1. From the Campaign page, copy the engagement URL.
2. Choose how and where you want to publish the URL. You can:
   * Create a shortened URL and publish the link. You can use a website such as \[https://bitly.com\] shorten the links
   * Create a QR code. Use one of the QR code generator services such as [qrcode-monkey.](http://www.qrcode-monkey.com/)
3. Enable your engagement and publish the campaign.
4. Publish the link/QR code where you want to engage with your consumers.

### Target audience for offsite engagements

As opposed to onsite engagements in which LivePerson servers evaluate consumer eligibility for an engagement before the engagement is displayed, for offsite engagements, eligibility evaluation is performed after consumers click the engagement URL. If consumers are not eligible, they will receive the Offline Survey configured in the Engagement Window.

For example, if you have set up a campaign targeting UK consumers only and a consumer from France clicks the Engagement URL, they will be redirected to the offline survey you configured in the Engagement Window.

### Offline surveys for offsite engagements

If you have distributed the engagement URL to your consumers, but one of the below scenarios is true, your consumers will be redirected to the offline survey that you configured in the Engagement Window:

* The URL is distributed before the Campaign begins
* A consumer clicks the Engagement URL outside of business hours
* There are no available agents to accept the chat
* A consumer who is not part of the campaign’s target audience clicks the offsite engagement URL

### Disabling or deleting an offsite engagement

When an engagement is disabled, consumers will be redirected to a **default** offline survey. You can also choose to redirect them to a customized survey you create, or to a landing page of your choice.

If and when you re-enable your engagement, consumers will be directed to the URL you configure on the Engagement Details page.

## How to set up inactive engagement behavior

1. From the Campaigns page footnote, click **inactive engagements**.

![](/img/displaying-chat-engagements-5.png)

{:start="2"}

1. Choose a survey from your existing offline surveys or enter a URL to which consumers will be redirected when clicking any inactive engagement. These can include engagements that have been disabled or deleted, and campaigns that have expired, been deleted or unpublished.

![](/img/displaying-chat-engagements-6.png)

{:start="3"}

1. Save your selection.

<div class="important">
<b>Note:</b>
<ul>
<li>The selection of the offline survey or the landing page is configured at the account level and applies to all campaigns.</li> <li>When your offsite engagement is disabled, it will affect your consumers’ experience. To ensure their experience is always a positive one, even when they click on a disabled engagement, you can redirect them to a page with your contact details, or with information about your online chat hours.</li> <li>When you delete a campaign, the data collected will also be deleted and you will not see it in your reports.</li>
</ul>
</div>