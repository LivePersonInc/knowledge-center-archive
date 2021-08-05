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
  - getting-started-twilio-sms-quick-start.html
---

For brands, creating a presence on the channels used by their consumers is key to building connections and creating prospects. Our self-serve on-boarding process for the SMS connector means brands can quickly and easily add this channel to their operations.

Brands now have the option to generate a Twilio SMS number directly within LivePerson's platform. For information on doing this, please [click here](messaging-channels-sms-generate-a-twilio-sms-number-with-liveperson.html). Or, follow the below instructions to get a number through Twilio.

## Step 1: Get an SMS number from Twilio

Create your own Twilio account [here](https://www.twilio.com/try-twilio), then follow the below steps to get a number:

1. Fill in your credentials to get started with a Twilio trial account (you can also use an existing account if you have one).

2. Click **Get a Trial Number** and follow the instructions on-screen.

![](img/twilio-quick-start-1.png)

{:start="3"}
3. Make sure to note your Account SID and Auth Token from this page as you will need them later in the process.

![](img/twilio-quick-start-2.png)

{:start="4"}
4. **Configure the request URL** by navigating to the following page: [https://www.twilio.com/user/account/phone-numbers/incoming](https://www.twilio.com/user/account/phone-numbers/incoming)
   
5. Select the phone number for which you would like to configure SMS messaging. Scroll down to the "Messaging" subheader. Based on your region, copy the appropriate link below and paste it into the field next to the **A message comes in** option. Then hit Save.
    * EMEA (Europe/Middle East/Asia) accounts: **[https://lo.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio](https://lo.msggw.liveperson.net/api/ACCOUNT#/default/twilio)**
    * North America accounts: **[https://va.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio](https://va.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio)**
    * APAC (Asia Pacific) accounts: **[https://sy.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio](https://sy.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio)**

![](img/twilio-quick-start-3.png)

## Step 2: Connect Twilio to the Conversational Cloud

{: .notice}
**Note:** The Twilio SMS channel requires backend enablement, please contact your LivePerson representative for more information.

## Step 3: Test your integration

To test your Twilio integration, simply send an SMS to the number which you configured above and see if it shows up in the Conversational Cloud. If it does, and you are able to reply to it as an agent, the setup was successful. If not, please contact LivePerson support for more assistance.

## Additional Resources

* [Conversation Builder Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-bots-quick-start.html)
* [Facebook Messenger Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-facebook-messenger-quick-start.html)
* [Web Messaging Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-messaging-quick-start.html)
