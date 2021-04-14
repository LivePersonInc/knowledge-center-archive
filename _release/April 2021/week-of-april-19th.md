---
pagename: Week of April 19th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-april-week-of-april-19th.html
isTutorial: false
isNew: false
date: '2021-03-31'

---

These release notes include new features arriving April 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Conversation Builder 5.0]  Apple Pay interaction enhancements
### Type: Enhancement

Channel: This enhancement is available for all channels supported by the Conversational Cloud platform.

In this release, we make a few enhancements to the Apple Pay interaction in Conversation Builder. This interaction lets the consumer make a payment for goods and services using Apple Pay.

To begin with, we add some more flexibility when configuring line items and the total:

Item name, item price and total: You can now express these using a botContext or integration variable.
Item name and item price: You can now express these using an array enumerator (i.e., specify the variable using “i” as the index). This allows for iteration over a list of items at runtime to populate the interaction with the results.

Collectively, the changes above make it possible to programmatically insert product cart information that’s retrieved from an API into the Apple Pay interaction.

In addition, we add the following optional fields to the interaction’s settings:

Account Signature: This new field allows for the account signature to be generated and added as a part of the request, for extra validation. The field stores a signed hash of the merchant session payload. (You can enter an alphanumeric string or specify a botContext or integration variable name.) The hash is sent as a part of the structured content request to the connector, which validates it and rejects it if invalid. This field is only needed for accounts using this sign/validate flow. 
Request Identifier: This new field makes it possible to track the payment session from start to finish. The field stores the unique identifier representing the merchant session request. (You can enter an alphanumeric string or specify a botContext or integration variable name.) The identifier is intended to be retrieved via the LivePerson Payments ecosystem, so there’s a consistent ID throughout the lifetime of the pay session.

Taken together, all these changes lay the foundation for truly dynamic, cCommerce (Conversational Commerce) bots that can create a shopping cart, create an Apple Pay merchant session request, and send this to the consumer.
