---
pagename: Web Messaging quick start
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: Checklist for set up and configuration to get your messaging program running
level3Name: ''
permalink: getting-started-quick-start-guides-web-messaging-quick-start.html
isTutorial: false
date: '2019-01-14T11:44:06.000+00:00'
level3: ''
isNew: false
redirect_from:
- getting-started-quick-start-guides-messaging-quick-start.html

---
Set up Web Messaging between the Conversational Cloud and your website.

## Step 1: Get the Web Tag

To obtain your Web Tag, login to the [Conversational Cloud](https://authentication.liveperson.net/) and click on your avatar in the lower left corner, selecting "Web Tag" from the pop-up menu. Note that this is only available to account Administrators.

![](/img/LP tag Gif-1.gif)

## Step 2: Add the Web Tag to your website

Copy and paste the tag into your website's `<head>` section. The tag should be included as high up in the `<head>` section as possible. For more information, click [here](https://knowledge.liveperson.com/getting-started-add-the-liveperson-tag-to-your-website.html).

{: .notice}
**Tip:** You can also test the Web Messaging experience without adding the Web Tag to your site by using this [tool](https://developers.liveperson.io/web-messaging/) and inputing your account number.

## Step 3: Set up a new messaging campaign

In the Conversational Cloud, first click on the **Campaign Builder** tab located in the left navigation bar. Select the default campaign ("Live Chat on your site") and click **Unpublish** to disable this campaign.

Next, click the **Add campaign** button at the bottom left of the screen. Click **Add goal**, select **Interact with consumers** and click **Done** at the bottom right. You can read more about goals [here](https://knowledge.liveperson.com/contact-center-management-campaigns-campaign-goals.html).

Click **Add engagement** and select **Web.** Choose any of the available engagement types and then continue clicking **Next** until the **Done** button is available. Click **Done**. Click **Publish** at the top right to publish your campaign. You can read more about campaigns [here](https://knowledge.liveperson.com/contact-center-management-campaigns-campaigns-overview.html).

## Steps 4: Send and receive Web Messages

Load the website that you inserted your Web Tag into. If you’ve successfully completed Steps 1-3, the engagement button that you selected in Step 3 will appear. Click on the engagement button and send a message. The message will appear in the Conversational Cloud. Clicking "Accept" will allow you to respond.

{: .notice}
**NOTE**: In this setup, every agent will receive all messages. To learn more about advanced messaging configuration and routing for your account, click here. Please see [this document](https://knowledge.liveperson.com/getting-started-getting-started-with-messaging.html).

## Additional resources

* [Conversation Builder Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-bots-quick-start.html)
* [Facebook Messenger Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-facebook-messenger-quick-start.html)
* [SMS Messaging Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-twilio-sms-quick-start.html)
