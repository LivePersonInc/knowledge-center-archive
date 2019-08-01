---
pagename: Messaging quick start
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: Checklist for set up and configuration to get your messaging program running
level3Name: ''
permalink: getting-started-quick-start-messaging-quick-start.html
isTutorial: false
date: 2019-01-14 11:44:06 +0000
level3: ''
isNew: false
---

To get started, access LivePerson using this link: [https://authentication.liveperson.net/login.html](https://authentication.liveperson.net/login.html)

## Get to the first message

To get the most basic version of messaging up and running, brands need to insert a generic ‘message us’ button their website. Getting to the first message is simple and can be done through three steps:

### Step 1: Add the LivePerson Tag

Website administrators or developers need to add the LivePerson tag (piece of code) to every page of the website where you'd like messaging to appear. To obtain the LivePerson tag for your account, login with admin credentials and pull down the menu under your user name. Then, select LiveEngage tag. Copy paste the code into your website's header. The code should be included as high up in the `<head>` element as possible. For more information on the LiveEngage Tag, [check out this document](getting-started-add-the-liveperson-tag-to-your-website.html).

### Step 2: Create a new messaging campaign

The default campaign for your account is set to chat. You'll need to disable it first. Click on Campaigns at the top of the screen, where you'll find the default "Live Chat on your site" campaign. Click on the campaign name to access its settings, then disable it by clicking on the "Unpublish" button at the top right hand side. From there, click the "Add campaign" button at the bottom left of the screen and add a basic messaging campaign to your account by following the steps below.

{: .notice}
Make sure to create an **unauthenicated** campaign by leaving the "authenticated" toggle off while creating the campaign.

First, give your campaign a goal by clicking the "Add goal" button. You can read more about goals [here](contact-center-management-campaigns-campaign-goals.html). Then, add an engagement by clicking on the "Add engagement" button and selecting "Web" (since we're setting up a web messaging campaign for this example). From there, select your desired engagement and hit "Next" at the bottom right of the screen until the "Done" button is clickable. Once it is, click it. **Hit publish campaign at the top right corner to publish your campaign**.

You can also read more about campaigns [here](/contact-center-management-campaigns-campaigns-overview.html).

### Steps 3: Test your connection

Once the code is up, an agent is logged into the system, and a campaign is setup, the button you selected during campaign creation will appear on your website. You click on it to create a test conversation with your account, and begin to answer incoming conversations.

![](/img/getting-started-with-messaging-1-2.png)

{: .notice}
The basic set up means there will be no routing - every agent will receive all messages. To learn more about advanced messaging configuration for your account, please see [this document](getting-started-getting-started-with-messaging.html).
