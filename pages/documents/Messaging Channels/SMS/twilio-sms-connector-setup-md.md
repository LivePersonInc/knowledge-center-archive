---
pagename: Twilio SMS connector setup
categoryName: Messaging channels
subCategoryName: SMS
indicator: messaging
subtitle: Easily add and manage SMS numbers to expand the reach of your brand
level3: ''
permalink: twilio-sms-connector-setup.html
isTutorial: false
date: 2019-01-17 17:11:38 +0200
published: false

---
For brands, creating a presence on the channels used by their consumers is key to building connections and creating prospects. Our self serve onboarding process for the SMS connector means brands can quickly and easily add this channel to their operations.

**To set up a basic SMS account using Twilio, complete the following steps:**

1. Create your own Twilio account here \[[insert link](https://www.twilio.com/try-twilio)\]. 

[![](https://lh3.googleusercontent.com/XW17e-Rz5PPF6r1RbAd4FNHUF57_SmGdqQcbnL6DDP3ZhHJ84TMlR4Oz6yMrqliD1SzHhm1VL2aYMJ40ybyHavnwMGzjkAbQyv8usRXxETj-csJgYzIiuYhg6Qm9K4nz1Ki4Uu7a =431x288)](https://www.twilio.com/try-twilio)

2. Purchase a new number to connect to your account. Select the country appropriate for your consumer base and search for available numbers. It is also possible to choose from a certain location or search for a number with a particular set of digits. Select a number from the options provided to purchase.

**Note:** You must select a number with SMS capabilities

[![](https://lh3.googleusercontent.com/vTD8t3EBltuGF94PbTVNJesPd8pu8PyyDnconiNosV7_1FxdFcI2BveJAUmMJ7E0k2gSC_zFS5ttQZtRFtVzWIhf7uI7sJ3KUWE58wDwL4L12k3kPWez_4IlRzee06XWRSeJ6qaf =431x238)](https://www.twilio.com/console/phone-numbers/search)

![](https://lh3.googleusercontent.com/oqa2mE-DBwNQJiK7TvYGbpj2ky0ssT6ExM2A7qnHWmI4GrZHx7UNrluT0WBQ4GvoJHcgcFFzIC4zn8P-h9FU3FhJY68yBNgIY2QM9F2bHMfGwMf23TMq7AAmn7_qvtSNUjn0L4Cn =435x212)

3\. Give your number a name by clicking the ‘setup’ button. This is particularly important if you have multiple numbers attached to your account and need to differentiate between them.

4\. Upgrade from your trial account and purchase credits.

5\. Configure the request URL, by navigating to the following page: [https://www.twilio.com/user/account/phone-numbers/incoming](https://www.twilio.com/user/account/phone-numbers/incoming "https://www.twilio.com/user/account/phone-numbers/incoming")

[![](https://lh6.googleusercontent.com/1neQ2CK1ZVBM3RZRMLyKJWYw20p1hrvcQTySSZ5dzmq9jWMrsWDLw4zMruenSlJna7woZCTv0xueEoQYTyibT1nShqtEUcw6YchXe92bAb31mPcjMRa81tK24rOJ7Kj2J-P-m6PF =434x187)](https://www.twilio.com/user/account/phone-numbers/incoming)

6\. Click on the red hyperlinked phone number you have just purchased![](https://lh6.googleusercontent.com/1neQ2CK1ZVBM3RZRMLyKJWYw20p1hrvcQTySSZ5dzmq9jWMrsWDLw4zMruenSlJna7woZCTv0xueEoQYTyibT1nShqtEUcw6YchXe92bAb31mPcjMRa81tK24rOJ7Kj2J-P-m6PF =87x19), and add the relevant link for your location with your account number inserted, as below.

* EMEA accounts: [https://lo.msg-gw.liveperson.net/api/](https://lo.msg-gw.liveperson.net/api/ "https://lo.msg-gw.liveperson.net/api/")ACCOUNT#/default/twilio
* North America accounts: [https://va.msg-gw.liveperson.net/api/](https://va.msg-gw.liveperson.net/api/ "https://va.msg-gw.liveperson.net/api/")ACCOUNT#/default/twilio 
* APAC accounts: [https://sy.msg-gw.liveperson.net/api/](https://sy.msg-gw.liveperson.net/api/ "https://sy.msg-gw.liveperson.net/api/")ACCOUNT#/default/twilio

![](https://lh3.googleusercontent.com/09S5labxTbFLJmJG6MspbM7grFY3bMtZ2Hqo_pkGVfxLCDjybRxg2a7n4QUGfim50p7zMXoUfeho9MvlWR2gJ-phEub0BMVD6E8n5tV5xArW_oTXKbTA8rX6mCZUc9rpVla6H01w =433x191)

7\. Navigate to the following page \[[https://www.twilio.com/user/account/settings](https://www.twilio.com/user/account/settings "https://www.twilio.com/user/account/settings")\] to access the Primary Authorization Token and SID. The SID will be displayed; to access the token, click on the padlock symbol.

[![](https://lh6.googleusercontent.com/uj2VHDF5dZpM-xnuJ1q_6Uawm56NFpR2qjMYOt4BUzay-7O_Q5qHifjigs0FfU4lE_26iUaCzX2gO9NPxCcRhXR3aICaC8iJv9nYVTphsrKQP4wtJH9FwkU4q1zZWUGbsmQ6EnIM =433x289)](https://www.twilio.com/user/account/settings)

8\. In LiveEngage, on the Campaigns page, click on Data Sources in the footnote.

9\. On the conversation sources tab, click on Connect in the Twilio SMS box. 

10\. Toggle the Activate Twilio SMS Source to enabled. 

11\. Under Twilio account configuration, enter the following details from your Twilio account:

* SID
* Auth Token
* Phone number

12\. Click Save.

**Note:** 

* Brands are able to connect multiple Twilio SMS numbers to their account and route each number to a separate skill. If you have more than one SMS number attached to your account and you would like to route them to separate skills, please contact your LivePerson administrator. 
* Twilio only supports sharing images (MMS) in the US and Canada. Therefore sharing images outside these regions will not work due to Twilio limitations.

**To deactivate the SMS connector:**

1. On LiveEngage, on the Campaigns page, click on **Data Sources** in the footnote.
2. On the conversation sources tab, toggle the SMS connector off to deactivate this connector. 