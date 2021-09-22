---
pagename: Configuration
categoryName: Agent & Manager Workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: 'Get acquainted with the Agent Workspace '
level3: ''
permalink: agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-configuration.html
isTutorial: false
date: 2019-01-21 09:24:58 +0000
isNew: false
redirect_from:
  - messaging-agents-configuration.html
  - agent-manager-workspace-agent-tools-for-messaging-enhanced-agent-workspace-for-messaging-configuration.html
---

The Agent Workspace is tailored to the needs of messaging agents and was designed using feedback and requests from hundreds of messaging agents. It is developed for an easy plug-and-play approach and requires little to no configuration.  

That being said, there are a few configurations that brands can elect to control for the agent experience as outlined below.  

{: .notice}
**Please note:** Brands with blended accounts, or those that offer both live chat and messaging, may need to make adjustments to their operations. For more information, please consult the [blended accounts overview](/agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-blended-accounts.html).

## Enabling the Agent Workspace

The Agent Workspace is enabled by default for all accounts. If your account is still using the Old Agent Workspace, you will need to contact your LivePerson account manager to enable the most recent version of the Agent Workspace.

## Key configurations for your LivePerson workspace

### Auto accept

Determine if incoming conversations will automatically enter an agent's workspace or if they have to press ’accept’ button to receive them.

Set up:
1. Login to LivePerson as an admin and access the Night Vision settings by clicking on the Night Vision icon to the top right of the screen.
2. Select ‘auto accept’ or ‘advanced’ mode.

![alt text](img/new-workspace-configuration.png)

### Set consumer profile for unauthenticated flows

In the past, whenever an unauthenticated conversation was initiated, the visitor displayed as “Visitor” in the My Conversations and All Conversations lists. In cases of multiple unauthenticated conversations, agents were confused since they had no ability to distinguish between conversations.

The enhanced Agent Workspace supports the two following improvements to assist agents in distinguishing between unauthenticated conversations in the Agent Workspace:

#### Automatically rename ‘Visitor’, when “Personal info” engagement attribute has been reported

If the brand has any additional information about the consumer, and the **personal info engagement attribute** has been reported on the page (for example, by using a Concierge Bot at the beginning of an unauthenticated conversation), the Agent Workspace will automatically populate the visitor name’s in the My Conversations/All Conversations lists as well as the conversation header. [See the Developers' Community for more information on enagement attributes](https://developers.liveperson.com/messaging-interactions-api-engagement-attributes.html).

##### Limitations

The visitor name is automatically updated only once the **agent clicks the conversation** and opens it. Until then, the visitor name will **not** be automatically updated.

Sometimes, the data on the visitor name arrives **after** the agent opens the conversation. In that case, the visitor name will not be updated automatically and the agent has the option to set it manually as detailed below.

**Screenshots**

Fig 1: The consumer’s personal info displayed in the consumer info widget

![](img/set-consumer-profile-1.png)

Fig 2: The visitor name is automatically populated in the conversation list and in the conversation header

![](img/set-consumer-profile-2.png)

#### Manually rename ‘Visitor’ for unauthenticated conversations

The agent has the ability to manually rename the visitor’s first and last name (for unauthenticated conversations only).

1. When focusing on a conversation (via the My Conversations/All Conversations), go the visitor name above the conversation area.
2. Hovering over the visitor’s name, an “Edit consumer name” button will be displayed:

![](img/set-consumer-profile-4.png)

{:start="3"}
3. Clicking the “Edit consumer name” button will open a new dialog window, with the option to set the consumer’s first and last name. Fill in the details and click “Set”

![](img/set-consumer-profile-5.png)

{:start="4"}
4. The screen will focus on the conversation again. The new name will be displayed in the conversation title and in the conversation list:

![](img/set-consumer-profile-6.png)

##### Enablement

{: .notice}
**Please note:** This feature requires enablement. You can enable this feature, alongside its requisite permissions, in the Management Console. Simply search for "visitor name".

On your LivePerson Conversational Cloud account, take the following steps:

1. Go to any existing agent/agent manager profiles, or create a new profile, and turn the following permissions on: **Update consumer profile via API**

![](img/set-consumer-profile-3.png)

{:start="2"}
2. Save the profile.
3. All agents assigned with this profile will now enjoy the improvements of unauthenticated conversations. If an agent is already logged in during the time the changes take effect, they will not see them until the next time they log in.

### FAQ

**Q:** What happens if the conversation has been transferred to a different agent or returned to the queue?
**A:** In case the visitor name was automatically populated by the personal info engagement attribute, or manually renamed by the agent, it will also appear with the new name after returning it to queue or transferring the conversation.

**Q:** What happens if the personal info engagement attribute has been reported and populated, and the agent renames the visitor manually?
**A:** The manual rename takes precedence over the automatic visitor name population so that the name set by the agent is the one displayed.

**Q:** Will the consumer get a notification indicating that his name has been changed by the agent?
**A:** No. While the change in name is visible to the visitor, they will not receive a notification that it has changed.

**Q:** Will these capabilities be supported in the old workspace as well?
**A:** No, the enhancements are supported for the enhanced Agent Workspace only.

**Q:** When the visitor name is automatically or manually updated, will this affect both the My Conversations and All Conversations lists?
**A:** Yes. Even if the change has been done on one list (e.g My Conversations) it will affect the other list (All Conversations), and vice versa.


## Additional custom configuration options

Contact your LivePerson representative to customize the following parameters per your requirements.

### Timeframe for closed conversations
In the workspace, agents can use the filter in their conversation list to view only ‘closed’ conversations. This setting will determine the time frame to display the closed conversations, or how far back to display conversations.  

**Default:** 2 days

**Min:** 1 day

**Max:** 14 days
<br>

### Time format
Determine the format of the time that is displayed to agents within the workspace and within conversations.

**Default:** 12 hour clock (e.g. 08:59pm)

**Option:** 24 hour clock (e.g.  = 20:59)
<br>

### Disable emojis
Brands can elect to remove the option for agents to send emojis during a conversation.

**Default:** emojis are enabled

### Hide unauthenticated consumer attributes
The ‘consumer info’ widget displayed consumer attributes to the agents. This setting enables brands to hide any unauthenticated attributes from the agents.

**Default:** agent can view all attributes

### Hide visitor name from agent
Brands can elect to maintain the consumer name anonymous from agents and replace their name with ‘visitor’ in the agent list.

**Default:** off
