---
pagename: Rollover overview
categoryName: Contact center management
subCategoryName: Conversation Rollover
indicator: both
subtitle: Allow customers to rollover...
level3: ''
permalink: contact-center-management-conversation-rollover-rollover-overview.html
isTutorial: false
isNew: false
date: 2021-08-08 

---
Conversation Rollover allows managed service teams to answer conversations on behalf of SMBs/brands from a single account, and enables contact centers to scale bots to thousands of accounts from that account.  In this way, Conversations can be handled by an account other than the account where conversation is owned by and originated from to leverage automation to increase availability without increasing staff, diversify skill sets, and more. 

## Common Use Cases
* **Leverage automation to increase availability** A Brand wants to use the messaging features of the Conversational Cloud but is not staffed with agents to answer the conversations or positioned to have a bot built to answer. The Brand uses Rollover to enable a Contact Center to handle their conversations on behalf of the brand. 

* **Diversify skills** A Brand has one or more Skills on their account where they need to allow an agent or bot from a different account to answer. Rollover can be configured for the individual Skill on the Brand account and will be sent to the queue of the configured Handler account. 

* **Utilizse bots to handle multiple accounts** Automation can be offered for a Marketplace by configuring a single bot on a Rollover account to handle conversations for many brand accounts. In this use case, the single bot can handle the conversations for multiple accounts instead of a bot needing to be installed on each brand account.

## Key Components
Designated ‘Handler’, or Rollover accounts, can be configured to house automation and/or the human agents so they can answer the conversations on behalf of the brands. The account that originated the conversation is the “Owner,” and the account answering the conversation is the “Handler.” 

* Rollover — The act of a conversation being added to the queue of a different account than the conversation belongs to. 

* Conversation “Owner” — The Conversational Cloud account that the conversation belongs to. 

* Conversation “Handler” — The Conversational Cloud account handling the conversation on behalf of the Owner account as the configured Rollover account.

* Conversation “Rollback” — Enables an agent or bot on the Handler account to pass the conversation back to the Owner account based on the intent of the conversation. A conversation can be added back to the queue of the Owner account through the Rollback menu, where the agent/bot can also target a specific Skill to roll back the conversation. Likewise, a bot on the Handler account can be configured to send the conversation back to the queue of the Owner account. 
