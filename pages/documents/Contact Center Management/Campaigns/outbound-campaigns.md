---
pagename: 'Outbound campaigns '
categoryName: Contact center management
subCategoryName: Campaigns
indicator: messaging
subtitle: Broadcast SMS campaigns using 3rd party integration
level3: ''
permalink: contact-center-management-campaigns-outbound-campaigns.html
isTutorial: false
isNew: false
date: 2019-04-03 11:39:38 +0300
published: false

---
Campaign managers are now able to link SMS campaigns, which will be sent to a specific list of consumers at a scheduled time (using a 3rd party app), to engagements in LiveEngage. This allows for a complete funnel and access to the routing capabilities LivePerson provides.

**The first supported provider is CM Telecom**, and in the future additional providers will be supported.

## Terminology

* **Campaign timeframe** - The campaign timeframe dictates if a new conversation, starting from a visitor who replied to an outbound campaign, will be assigned to this campaign and engagement.

  **For example:** Campaign timeframe is set from March 24th, 2019 to March 25th, 2019
* **The consumer replied within the above timeframe:** The conversation will be assigned to a relevant engagement in the campaign (per the entry point).
* **The consumer replied prior to the start date or after the end date:** The conversation will start with no engagement linked.


* **Notes to agent** - It is suggested to copy the text of the message to the ‘notes to agent’ section, so that the agent will have an indication of what the consumer is replying to.
* **Entry Point** - This is where you decide which external outbound campaign will be assigned to the engagement. It is recommended to use the CM campaign ID (taken from the URL in CM’s platform). However, you can also enter the phone number used to send the outbound messages.

## Configuration

1. Ask your LivePerson contact to enable the CM connector on your account
2. Make sure the CM app is enabled in Data Sources
3. Define a new campaign in the 3rd party platform you are using (CM Telecom)
4. Log into LivePerson’s platform
5. Navigate to the ‘Campaigns’ tab and then the ‘Outbound’ tab, click ‘add campaign’

![](https://lh3.googleusercontent.com/PWGTzCptJn_Or2xPQIXL7Q6DXFgcItcV4J56tK3nlS32kN_vP64Y_aZsxb75y22Km-rmXKV54k8hWhlI8-zUV7iMaz-eaCK_Uc6iZLNAHaqEvu23CJctrJt31TivzOWzvVHni7G0 =624x349)

6. Define the campaign goal
7. Set the campaign’s timeframe
8. Click ‘add new’ to add a new engagement
   1. Select conversation source: CM
      1. Authentication - On by default and cannot be changed
      2. Choose the skill routing
      3. Choose the engagement language
      4. Add notes to agent (recommended)![](https://lh4.googleusercontent.com/ossd84fAxs_LAChh1CzWSpvj7iRl_uuomHqiP2q9hFElfHTQwbrWEnHX4K9wjFoUR7bDvEQePVDpLdQ9APqPyWM-ofP7cce8FGBMbxvp24R5htqZX-F_ujApD57bLIlui8BujKyq =474x301)
      5. Choose an entry point from the entry point library

  
![](https://lh5.googleusercontent.com/MmyyKcwyUK0yph1bNvG4F-1trFunP84CiSQPM1NtHvjd9OMoO9ECt_fD4QHNYHl9CBtV07L_iCYkY9qI6eq7HXinLnungwXE5AsV532gprcm_5IJTZDnd1BPho1EESjFcagqtNRm =549x299)

## Notes

* The ‘Outbound’ campaigns tab will only show if there’s at least one app installed with broadcast capability
* Only sources that were already configured/installed in Conversation Sources will be presented when adding a new outbound engagement
* When broadcasting from a 3rd party (CM), the provider will send a notification to LivePerson that a broadcast occurred (per consumer’s phone number)
* Only once a consumer replies to the message, a conversation will start using the selected source
* A reporting event will fire once a conversation started for reporting purposes (C4M)
* The conversation will be linked to the most relevant engagement per the _Entry Point_ (campaign ID/phone number)
* The conversation will be assigned to the engagement’s skill
* Opt out (the option to stop receiving messages) is managed by the SMS provider (in this case CM)

## Consumer Experience

* Once the consumer receives the SMS, they will be able to reply to the message and start a conversation, even if the campaign time frame has expired

## Reporting & metrics

* Metric calculation per campaign type, campaign, engagement, entry point and source is available in the Report Builder
* To add the broadcast event to the reports, please contact your LivePerson account team