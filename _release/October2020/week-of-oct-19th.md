---
pagename: Week of October 19th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-october-week-of-october-19th.html
isTutorial: false
isNew: false
date: '2020-10-14'

---

These release notes include new features arriving October 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Cancel a Proactive outbound campaign
### Type: Enhancement [Proactive Messaging]

#### Channels: Twilio, WhatsApp Business

When a Proactive outbound campaign is created today, there isn’t a way to cancel it. This means, if a campaign is scheduled to go out to 1000 recipients by mistake, brands would have to reach out to the product team to cancel it. With this release, brands will be able to cancel the campaign by themselves from the UI. 
When a campaign containing multiple recipients is cancelled, Proactive will only stop sending the outbound messages to the set of recipients that have not been executed at that time. This means, if a Proactive campaign is scheduled at 09:10:01 time, and it’s cancelled at 09:10:31, any messages that are already sent during that time will NOT be cancelled. Any messages that have not been sent during that time will be cancelled. 

## Allow customized text for prioritized channel
### Type: Enhancement [Proactive Messaging]
#### Channels: Twilio, WhatsApp Business
When sending outbound messages on Proactive, brands can select ‘Prioritized’ channel. This means, the outbound message will be first sent on WhatsApp and if the consumer phone number is not eligible on WhatsApp, the message will be sent via SMS. When ‘Prioritized’ channel is selected today, the WhatsApp message template content is copied to the SMS section without an option to edit. With this release, brands will be able to edit the SMS fallback message if they choose to. 

## Show WhatsApp template rejection reason]
### Type: Enhancement [Proactive Messaging]
#### Channels: Twilio, WhatsApp Business

When a WhatsApp message template is submitted to WhatsApp for approval, it can be rejected. With this release, we add a column to show the rejected reasons as provided by WhatsApp. This will help brands to know why and can resubmitted the template accordingly. 

## Add lookback period to Proactive campaign creation experience]
### Type: Enhancement [[Proactive Messaging]
#### Channels: Twilio, WhatsApp Business

A lookback period is the duration when the consumer response to Proactive outbound messages will be routed to agents/bots with the skill as specified in the Proactive campaign. Till date, when a Proactive campaign is scheduled a lookback period is set by default to 30 days and this value can not be changed. We recently enabled a feature to allow brands to set this value when the campaign is created. By default, the value is set to 30 days, which is also the maximum duration. Brands can set this value to 1 hour minimum. 

## Show list of phone numbers associated with WhatsApp Account ID when creating a WhatsApp message template]
### Type: Enhancement [Proactive Messaging]
#### Channels: Twilio, WhatsApp Business

For a single WhatsApp Account ID, there can be multiple phone numbers associated with it. When a brand creates a WhatsApp message template, it is useful to see what phone numbers are associated with the WhatsApp Account ID they are creating the template with. This enables brands to know if the message template can be used when sending outbound messages.

![](img/Proactive-Oct-19-RN-1.png)

## Show Proactive API key and secret
### Type: Enhancement [Proactive Messaging]
#### Channels: Twilio, WhatsApp Business

For accounts that have Proactive API enabled, user with administrator privileges will be able to go into Proactive web tool and retrieve the key and secret information under Settings tab. 

![](img/Proactive-Oct-19-RN-2.png)

## Fix column sort on Proactive campaign list page
### Type: Bug fix [Proactive Messaging]

Previously, attempting to sort any column on Campaign list page will throw an error. In this release, we fix that issue and now brands can sort properly. 

## Fix column sort on Proactive WhatsApp message template page]
### Type: Bug fix [Proactive Messaging]

Previously, attempting to sort any column on WhatsApp message template list page does not work. In this release, we fix that issue and now brands can sort properly. 

## Fix date filter on Analytics page to show the current date
### Type: Bug fix [Proactive Messaging]

Previously, Analytics page’s filters always defaulted to 2019. With this release, we fix the issue and default to the current date.

