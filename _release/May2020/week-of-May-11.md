---
pagename: Week of May 11th 
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-may-week-of-may-11th.html
isTutorial: false
isNew: false
date: '2020-05-06'

---

These release notes include new features arriving to LiveEngage during May 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Bot Vendor as Agent Attribute
### Type: New functionality (Bot Connectors 2.17)

If a user creates or updates an existing bot, the used Bot Vendor (Watson, Dialog Flow etc) will be saved inside the AccountConfiguration database on the User agent. This allows better reporting options. Brands will now be able to differentiate the Bots better. 

## Disable test connection for Faas if no function selected
### Type: Bug fix (Bot Connectors 2.17)

In the Bot creation wizard, the customer could click on test connection if creating a Faas bot without the prior selection of a Faas function for the bot. This is fixed now, the user needs to explicitly select a faas function prior testing the connection.

## Strip down xss from payload 
### Type: Bug fix (Bot Connectors 2.17)

When creating a new user via the ThirdPartyBots UI, an attacker could inject malicious XSS code inside user attributes such as agents name which will be then executed on the consumer/customer side. This bugfix strips down malicious xss code making it non executable.
