---
pagename: Generate a Twilio SMS number with LivePerson
categoryName: Messaging channels
subCategoryName: SMS
indicator: messaging
subtitle: ''
level3: ''
permalink: messaging-channels-sms-generate-a-twilio-sms-number-with-liveperson.html
isTutorial: false
isNew: false
date:

---

Brands now have the option to provision a US, Canadian, or Caribbean Nations Twilio number in LivePerson's platform. This is a great option for small-to-medium businesses who do not already have numbers through Twilio.

## Account Setup

{: .notice}
**Please note:** This feature requires backend enablement. Please contact your LivePerson representative for more information.

Follow these steps to generate a number:

**Step 1.** Navigate to the Campaign Builder in the Conversational Cloud, then click 'Data Sources' in the footnote and choose Twilio SMS. There is a new option on the Twilio SMS Configuration screen that will say “No, I don’t have a Twilio account”. When you choose this option you will be able to choose your preferred area code and Generate Number.

The area code list is in numerical order and contains the state or province for each area code to help you select a preferential area code.

![](img/generate-a-twilio-sms-number-with-liveperson-1.png)

**Step 2.** Here is an example of a number that has been provisioned for a client. You can assign an alias and forwarding number, as well as assign all conversations for this number to a specific skill. In the event an account has multiple numbers provisioned, it is helpful to assign a Default number, which will be considered the primary number for the account.

Once all fields are filled, client clicks Save.

![](img/generate-a-twilio-sms-number-with-liveperson-2.png)

**Step 3.** Numbers that have been provisioned now appear in a list on the Twilio SMS configuration screen. If you would like to provision additional numbers, you can click Generate Number again.

![](img/generate-a-twilio-sms-number-with-liveperson-3.png)

## Deactivating Provisioned Numbers

**Step 1.** Client selects the SMS number to be deleted

**Please be aware:**
* Engagements utilizing Twilio SMS will need to be unpublished
* Any active conversations through that Twilio number will be immediately suspended, meaning the agents can no longer send messages to consumers. More importantly, consumers with active or previous conversations on that number will be blocked from messaging with the brand on any other number.

![](img/generate-a-twilio-sms-number-with-liveperson-4.png)

## Limitations

* Provisioning is limited to Twilio as a provider
* Only numbers with +1 international phone code can be provisioned at this time
* Accounts cannot mix and match between self-provisioned and brand-owned numbers
* Short / vanity numbers are not available for self-service provisioning
