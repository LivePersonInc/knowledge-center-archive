---
pagename: Rollover overview
categoryName: Contact center management
subCategoryName: Conversation Rollover
indicator: messaging
subtitle: Allow customers to rollover conversations to have another account handle them on behalf of the brand. 
level3: ''
permalink: contact-center-management-conversation-rollover-rollover-overview.html
isTutorial: false
isNew: false
date: 2021-08-08 

---
Conversation Rollover allows managed service teams to answer and handle conversations on behalf of SMBs/brands from a single account, enabling contact centers to have their conversations handled by another account (bot or other contact center) on behalf of their brand.  In this way, conversations can be handled by an account other than the account where conversation is owned by and originated from to leverage automation to increase availability without increasing staff, diversify skill sets, and more. 

## Common Use Cases
* **Leverage automation to increase availability** A Brand wants to use the messaging features of the Conversational Cloud but is not staffed with agents to answer the conversations or positioned to have a bot built to answer. The Brand uses Rollover to enable a Contact Center to handle their conversations on behalf of the brand. 

* **Diversify skills** A Brand has one or more Skills on their account where they need to allow an agent or bot from a different account to answer. Rollover can be configured for the individual Skill on the Brand account and will be sent to the queue of the configured Handler account. 

* **Utilize bots to handle multiple accounts** Automation can be offered for a Marketplace by configuring a single bot on a Rollover account to handle conversations for many brand accounts. In this use case, the single bot can handle the conversations for multiple accounts instead of a bot needing to be installed on each brand account.

## Key Components
Designated ‘Handler’, or Rollover accounts, can be configured to house automation and/or the human agents so they can answer the conversations on behalf of the brands. The account that originated the conversation is the “Owner,” and the account answering the conversation is the “Handler.” 

* **Rollover** — The act of a conversation being added to the queue of a different account than the conversation belongs to. 

* **Conversation “Owner”** — The Conversational Cloud account that the conversation belongs to. 

* **Conversation “Handler”** — The Conversational Cloud account handling the conversation on behalf of the Owner account as the configured Rollover account.

* **Conversation “Rollback”** — Enables an agent or bot on the Handler account to pass the conversation back to the Owner account based on the intent of the conversation. A conversation can be added back to the queue of the Owner account through the Rollback menu, where the agent/bot can also target a specific Skill to roll back the conversation. Likewise, a bot on the Handler account can be configured to send the conversation back to the queue of the Owner account. 

![](/img/rollover-overview-1.png)

### Four Types of Conversation Rollover 
There are four options of rollover settings, which can each also be unique by Skill on the Owner:

* **1. Fully Managed** — All conversations will be routed to the configured handler account 24/7..
 
* **2. Co-Managed Backup** — First, try the dealer’s agents (if they are online); if they do not accept the conversation, route the conversation to the Answering Service. 
 
* **3. Co-Managed Schedule** — Route conversations to the answering service based on a specific schedule (e.g., off-hours, based on the account/skill shift schedule definition).
 
* **4. Co-Managed Hybrid** — On schedule AND backup, even during the schedule when the dealer is supposed to answer, the conversation will be routed to the Answering Service if the dealer does not accept.
 
## Conversation Rollover Use Case

**Use Case: A conversation belongs to Owner A...but is answered by Handler Z. **

#### Owner Account — Agent
The conversation is answered by the Handler account. Therefore, there will be no visibility of the conversation in the Owner account to the agent, and it will not be in the queue or My Conversations section of the account.  

#### Owner Account — Agent Manager
The conversation is answered by the Handler account, but given the conversation still belongs to the Owner account, the conversation will be part of the Manager Workspace just as the conversation would be if answered by the Owner account.  
 
* The Agent Manager can view the ongoing conversations.
* The Agent Manager can join the ongoing conversations. 
* The Agent Manager can private message the agent on the handler account. 

#### Handler Account — Assigned Agent
The assigned agent of the conversation on the Handler account will have the same experience as they would if they were on the Owner account, in addition to a few enhancements that have been made specific to a Handler account so the agent has a unique experience for each Brand they answer for. 
The Brand Name of the Owner account is visible in the Agent Workspace in the conversation list and the messaging area. This allows the Rollover agent to know exactly whom they are answering the conversation on behalf of.

The Skill of the conversation on the Owner account does not change after it is answered on the Rollover account. Rather, there are now two Skills: One for the actual Skill of the conversation (as designated by the Owner account) and the Skill the conversation was answered by on the Handler account. Both Skills are present in the Agent Workspace for the agent. 

A unique custom widget can be configured for the Handler account to house very specific and custom content to represent the Owner account. This includes Brand Name, Brand URL, Brand logo, custom WYSIWYG editor, hours of operation, and key contacts. 

#### Handler Account — Agent Manager

The Agent Manager workspace on the Handler account displays all conversations being handled by the Rollover account. The Agent Manager workspace has been enhanced to bring in the Brand Name of the Owner account, so the Agent Manager knows the status of conversations that are a part of any program they are answering for at any time. The Agent Manager can do the same operations as the Owner account Agent Manager can:

* The Agent Manager can view the ongoing conversations.
* The Agent Manager can join the ongoing conversations. 
* The Agent Manager can private message the agent on the handler account. 

## Configuration
Please contact your account manager for configuration support. 

