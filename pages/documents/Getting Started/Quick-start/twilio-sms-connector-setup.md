---
pagename: Twilio SMS quick start
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: Easily add and manage SMS numbers to expand the reach of your brand
level3: ''
permalink: getting-started-quick-start-guides-twilio-sms-quick-start.html
isTutorial: true
date: '2019-01-17T15:11:38.000+00:00'
isNew: false
redirect_from:
  - messaging-channels-sms-twilio-sms-connector-setup.html 
---
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/238919599" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

For brands, creating a presence on the channels used by their consumers is key to building connections and creating prospects. Our self-serve on-boarding process for the SMS connector means brands can quickly and easily add this channel to their operations.

## Step 1: Get an SMS number from Twilio

Create your own Twilio account [here](https://www.twilio.com/try-twilio), then follow the below stuffs to get a number:

1. **Purchase a Twilio number** to connect to your account. Select the country appropriate for your consumer base and search for available numbers. It is also possible to choose from a certain location or search for a number with a particular set of digits. Select a number from the options provided to purchase.

   **Note:** You can also use a Twilio test number if you don't want to purchase a number yet. However, you must select a number with SMS capabilities.
2. **Name your number** by clicking the **setup** button. This is particularly important if you have multiple numbers attached to your account and need to differentiate between them.
3. **Configure the request URL** by navigating to the following page: [https://www.twilio.com/user/account/phone-numbers/incoming](https://www.twilio.com/user/account/phone-numbers/incoming "https://www.twilio.com/user/account/phone-numbers/incoming")
4. **Add your location to the number** by clicking on the **red hyperlinked phone number** you have just purchased, and add the relevant link for your location with your account number inserted, as below:
   * EMEA accounts: `[https://lo.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio](https://lo.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio "https://lo.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio")`
   * North America accounts: `[https://va.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio](https://va.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio "https://va.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio")`
   * APAC accounts: `[https://sy.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio](https://sy.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio "https://sy.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio")`
5. **Configure authorization** by navigating to the following page \[[https://www.twilio.com/user/account/settings](https://www.twilio.com/user/account/settings "https://www.twilio.com/user/account/settings")\] to access the Primary Authorization Token and SID. The SID will be displayed; to access the token, click on the **padlock** symbol. Make sure to copy both the Primary Authorization Token and SID, since you will need them for the following steps.

## Step 2: Connect Twilio to LiveEngage

In LiveEngage, on the Campaigns page, click on **Data Sources** in the footnote.

![](img/data-sources.png)

On the conversation sources tab, click on **Connect** in the Twilio SMS box. Click the **Activate Twilio SMS Source** button to enable the connector. Under Twilio account configuration, enter the following details from your Twilio account:

* SID
* Primary Authorization Toke
* Phone number

Click save.

## Step 3: Test your integration

To test your Twilio integration, simply send an SMS to the number which you configured above and see if it shows up in LiveEngage. If it does, and you are able to reply to it as an agent, the setup was successful. If not, please contact LivePerson support for more assistance.

## Additional Resources

* [Conversation Builder Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-bots-quick-start.html)
* [Facebook Messenger Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-facebook-messenger-quick-start.html)
* [Web Messaging Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-messaging-quick-start.html)
