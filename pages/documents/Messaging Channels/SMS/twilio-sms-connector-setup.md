---
pagename: Twilio SMS connector setup
categoryName: Messaging channels
subCategoryName: SMS
indicator: messaging
subtitle: Easily add and manage SMS numbers to expand the reach of your brand
level3: ''
permalink: messaging-channels-sms-twilio-sms-connector-setup.html
isTutorial: true
date: 2019-01-17 15:11:38 +0000
isNew: false

---
<iframe src="https://player.vimeo.com/video/238919599" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

For brands, creating a presence on the channels used by their consumers is key to building connections and creating prospects. Our self-serve onboarding process for the SMS connector means brands can quickly and easily add this channel to their operations.

## To set up a basic SMS account using Twilio, complete the following steps:

1. Create your own Twilio account [here](https://www.twilio.com/try-twilio).

![](/img/twilio-sms-connector-setup-1.png)

{:start="2"}

1. Purchase a new number to connect to your account. Select the country appropriate for your consumer base and search for available numbers. It is also possible to choose from a certain location or search for a number with a particular set of digits. Select a number from the options provided to purchase.

   **Note:** You must select a number with SMS capabilities

![](/img/twilio-sms-connector-setup-2.png)

![](/img/twilio-sms-connector-setup-3-1.png)

{:start="3"}
3\. Give your number a name by clicking the ‘setup’ button. This is particularly important if you have multiple numbers attached to your account and need to differentiate between them.
4\. Upgrade from your trial account and purchase credits.
5\. Configure the request URL, by navigating to the following page: [https://www.twilio.com/user/account/phone-numbers/incoming](https://www.twilio.com/user/account/phone-numbers/incoming "https://www.twilio.com/user/account/phone-numbers/incoming")

![](/img/twilio-sms-connector-setup-4.png)

{:start="6"}
6\. Click on the red hyperlinked phone number you have just purchased, and add the relevant link for your location with your account number inserted, as below.

* EMEA accounts: [https://lo.msg-gw.liveperson.net/api/](https://lo.msg-gw.liveperson.net/api/ "https://lo.msg-gw.liveperson.net/api/")ACCOUNT#/default/twilio
* North America accounts: [https://va.msg-gw.liveperson.net/api/](https://va.msg-gw.liveperson.net/api/ "https://va.msg-gw.liveperson.net/api/")ACCOUNT#/default/twilio
* APAC accounts: [https://sy.msg-gw.liveperson.net/api/](https://sy.msg-gw.liveperson.net/api/ "https://sy.msg-gw.liveperson.net/api/")ACCOUNT#/default/twilio

![](/img/twilio-sms-connector-setup-5.png)

{:start="7"}
7\. Navigate to the following page \[[https://www.twilio.com/user/account/settings](https://www.twilio.com/user/account/settings "https://www.twilio.com/user/account/settings")\] to access the Primary Authorization Token and SID. The SID will be displayed; to access the token, click on the padlock symbol.

![](/img/twilio-sms-connector-setup-7.png)

{:start="8"}
8\. In LiveEngage, on the Campaigns page, click on Data Sources in the footnote.
9\. On the conversation sources tab, click on Connect in the Twilio SMS box.
10\. Toggle the Activate Twilio SMS Source to enabled.
11\. Under Twilio account configuration, enter the following details from your Twilio account:

* SID
* Auth Token
* Phone number

{:start="12"}

1. Click Save.

## To deactivate the SMS connector:

1. On LiveEngage, on the Campaigns page, click on [Data Sources](data-reporting-engagement-attributes-data-sources-engagement-attributes-overview.html) in the footnote.
2. On the conversation sources tab, toggle the SMS connector off to deactivate this connector.

<div class="important">
<b>Note:</b>
<ul>
<li>Brands are able to connect multiple Twilio SMS numbers to their account and route each number to a separate skill. If you have more than one SMS number attached to your account and you would like to route them to separate skills, please contact your LivePerson administrator.</li>
<li>Twilio only supports sharing images (MMS) in the US and Canada. Therefore sharing images outside these regions will not work due to Twilio limitations.</li>
</ul>
</div>