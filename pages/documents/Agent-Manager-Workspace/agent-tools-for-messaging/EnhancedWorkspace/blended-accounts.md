---
pagename: Blended accounts
categoryName: Agent & Manager Workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: 'Get acquainted with the Agent Workspace '
level3: ''
permalink: agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-blended-accounts.html
isTutorial: false
date: 2019-01-21 09:24:58 +0000
isNew: false
redirect_from:
  - messaging-agents-blended-accounts.html
  - agent-manager-workspace-agent-tools-for-messaging-enhanced-agent-workspace-for-messaging-blended-accounts.html

---

Blended accounts are LivePerson accounts which use both **Live chat** and **Web Messaging**. 

## Live Chat vs. Web Messaging

For brands using the Conversational Cloud, there are currently two conversation types:

**Live chat:** A single exchange of a live conversation between consumer and agent. Live chats have a clear start and end to a conversation and once a live chat ends, it will not continue. Consumers have the option to start a new live chat with a new agent.

**Web Messaging:** Continuous, ongoing conversations that can be answered asynchronously. Both the consumer and the agent can resume the conversation after it has ended.

{: .notice}
LivePerson’s best practice and recommendation is to offer Web Messaging only. We believe messaging is the best solution for both brands and consumers - this belief is reflected in our investment of new tools for messaging.

When referring to blended accounts, or brands that elect to offer both live chat and messaging, agents may work in three modes:

* [Dedicated agents](#dedicated-agents) - Completely separate agents for messaging and for live chat, sharing  the same account. Each agent has an individual login.

* [Dedicated agents per shift/time period with 2 separate logins (one for chat and one for messaging)](#dedicated-agents-per-shift)  - Agents that are capable of handling both live chat and messaging, but focus only on one channel per shift/dedicated time period (not handling chat and messaging conversations simultaneously). Typically these agents will have two separate logins, one for chat and one for messaging.

* [Blended agents within a single shift](#blended-agents-within-the-same-shift) - Agents handling both live chat and messaging conversations simultaneously within a single shift, with a single login.

The following article describes how the agent workspace will affect each of these user types.

## Dedicated agents

Brands with dedicated agents have two separate groups of agents: one group only for live chat and one group only for messaging. These agents are sometimes referred to as ‘pure messaging agents’ or ‘pure live chat agents’.

{: .notice}
This method is recommended by LivePerson as best practice for all blended accounts.

### Dedicated messaging agents:

Only messaging agents that have the Agent Workspace enabled in their permissions will see the Agent Workspace module. The Agent Workspace for chat will be available regardless and will display: web visitors, web history and agents - based on the existing permission set for the agent.  

For more information see the [messaging agents user guide](https://knowledge.liveperson.com/agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-the-agent-workspace.html).

## Dedicated agents per shift (2 separate logins)

For brands that have agents handling both live chat and messaging conversations - but not at the same time, brand swill need to set agents up with two separate logins (one for chat and one for messaging).

### Agents with two logins (1 live chat user, 1 messaging user)

For agents that have two separate logins:

* Messaging user: Enable the ‘use the enhanced Agent Workspace’ permission in the profile of the user. The Agent Workspace will become the default workspace for these agents.

* Chat user: No changes to permissions are required. Once the user logins in, they will only see the chat workspace with the three relevant chat tabs (web visitors, web history, agents).

{: .notice}
This mode of operations is not best practice, we recommended working with fully dedicated agents. If you elect to work with agents with 2 logins, please note the performance and metrics of these agents will appear on 2 separate reports.

## Blended agents within the same shift

Some brands elect to have agents taking both live chat and messaging concurrently. These agents will receive both types of conversations in two separate workspace:

* Agent workspace for chat - for all chat conversations

* Enhanced Agent Workspace - for all messaging conversations

The icons on the side bar will display notifications for incoming messages per workspace.
![](img/blended_accounts_same_shift.png)
