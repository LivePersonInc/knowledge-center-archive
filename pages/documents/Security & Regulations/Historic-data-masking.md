---
pagename: Historic data masking
categoryName: Security & regulations
subCategoryName: Security
indicator: messaging
subtitle: Mask sensitive data in a conversation when no longer in use
level3: ''
permalink: security-regulations-security-historic-data-masking.html
isTutorial: false
isNew: false
date: 2019-04-22 11:53:56 +0300
published: false

---
When a customer or agent passes sensitive details during a messaging conversation, it’s important that the agent can view the information while handling the issue, but that the data will no longer be visible once the issue is resolved.

To facilitate this layer of security, sensitive data (such as credit card or social security numbers) is replaced with predefined masking characters before being stored in the LiveEngage conversation history database (data is not masked in real time).   
The data is masked based on predefined RegEx patterns and presented as masked throughout the historical data elements, widgets, and APIs, as soon as the conversation is closed.

Sensitive historical data masking is enabled by default for all Messaging accounts and used an out-of-the-box RegEx pattern for masking credit card patterns.  
Brands can add additional RegEx patterns for masking additional sensitive data, such as SSN, email addresses, etc.

To configure additional RegEx patterns please contact your LP account team.