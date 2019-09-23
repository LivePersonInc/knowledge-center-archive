---
pagename: Configuration
categoryName: Agent & manager workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: 'Get acquainted with the agent workspace '
level3: ''
permalink: agent-manager-workspace-agent-tools-for-messaging-enhanced-agent-workspace-for-messaging-configuration.html
isTutorial: false
date: 2019-01-21 09:24:58 +0000
isNew: false

---

The agent workspace is tailored to the needs of messaging agents and was designed using feedback and requests from hundreds of messaging agents. It is developed for an easy plug-and-play approach and requires little to no configuration.  

There are a few configurations that brands can elect to control for the agent experience as outlined below.  

{: .notice} 
**Please notes:** Brands with blended accounts, or those that offer both live chat and messaging, may need to make adjustments to their operations. For more information, please consult the [blended accounts overview](/agent-manager-workspace-agent-tools-for-messaging-enhanced-agent-workspace-for-messaging-blended-accounts.html). 

## Enabling the enhanced workspace 

Messaging agents can access the enhanced agent workspace starting on September 16th, but it is off by default and must be enabled in permissions. 

To do so, managers must go to the profiles tab in the users module. Select the name of the relevant profile, then under permissions toggle on 'Use enhanced agent workspace" and save the changes. This will give all users that have been assigned this profile access to the enhanced workspace. 

![alt text](img/new-agent-workspace-10.png)

In order to gradually transition your agents to the enhanced workspace you will need to create multiple profiles and assign the relevent users to each. Then, you can enable the permissions for the desired profile and the users assigned will be transitioned. 

## Configuration from your LivePerson workspace

{: .notice}
**Please note:** If you have set up the below configurations for the existing agent workspace, you do not need to set them again - they will automatically apply.

### Auto accept

Determine if incoming conversations will automatically enter an agent's workspace or if they have to press ’accept’ button to receive them.

Set up:
1. Login to LivePerson as an admin and access the Night Vision settings by clicking on the Night Vision icon to the top right of the screen.
2. Select ‘auto accept’ or ‘advanced’ mode.

![alt text](img/new-workspace-configuration.png)

## Set consumer profile for unauthenticated flows 

The **enhanced agent workspace** has been improved to support additional use cases for unauthenticated conversation flows. Up until now, whenever an unauthenticated conversation was initiated, the visitor displayed as “Visitor” in the My Connections and All Connections lists. In cases of multiple unauthenticated conversations, agents were confused since they had no ability to distinguish between conversations.

The enhanced agent workspace supports the two following improvements to assist agents in distinguishing between unauthenticated conversations in the agent workspace:

### Automatically rename ‘Visitor’, when “Personal info” engagement attribute has been reported

* If the brand has any additional information about the consumer, and the **personal info engagement attribute** has been reported on the page (for example, by using a Concierge Bot at the beginning of an unauthenticated conversation), LiveEngage will automatically populate the visitor name’s in the My Connections/All Connections lists as well as the conversation header.
* The population will be done only once the **agent clicks the conversation** and opens it.

**Screenshots**

Fig 1: The consumer’s personal info displayed in the consumer info widget

![](img/set-consumer-profile-1.png)

Fig 2: The visitor name is automatically populated in the connections list and in the conversation header

![](img/set-consumer-profile-2.png)

### Manually rename ‘Visitor’ for unauthenticated conversations

The agent has the ability to manually rename the visitor’s first and last name (for unauthenticated conversations only).

1. When focusing on a conversation (via the My Connections/All Connections), go the visitor name above the conversation area. 
2. Hovering over the visitor’s name, an “Edit consumer name” button will be displayed:

![](img/set-consumer-profile-4.png)

{:start="3"}
3. Clicking the “Edit consumer name” button will open a new dialog window, with the option to set the consumer’s first and last name. Fill in the details and click “Set”

![](img/set-consumer-profile-5.png)

{:start="4"}
4. The screen will focus on the conversation again. The new name will be displayed in the conversation title and in the conversation list:

![](img/set-consumer-profile-6.png)

### Enablement

{: .notice}
**Please note:** This feature requires enablement. For more information please contact your LivePerson representative for more information. 

On your LiveEngage account, take the following steps:

1. Go to any existing agent/agent manager profiles, or create a new profile, and turn the following permissions on: **Update consumer profile via API**

![](img/set-consumer-profile-3.png)

{:start="2"}
2. Save the profile.
3. All agents assigned with this profile will now enjoy the improvements of unauthenticated conversations. If an agent is already logged in during the time the changes take effect, they will not see them until the next time they log in. 

### Q&A

**Q:** What happens if the conversation has been transferred to a different agent or returned to the queue? 
**A:** In case the visitor name has automatically populated be the personal info engagement attribute, or manually renamed by the agent, it will also appear with the new name after returning it to queue or transferring the conversation.

**Q:** What happens if the personal info engagement attribute has been reported and populated, and the agent renames the visitor manually?
**A:** The manual rename takes precedence over the automatic visitor name population so that the name set by the agent is the one displayed.

**Q:** Will the consumer get a notification indicating that his name has been changed by the agent?
**A:** No - the changes are visible for LiveEngage users only and are not visible for consumers.

**Q:** Will these capabilities be supported in the old workspace as well?
**A:** No, the enhancements are supported for the enhanced agent workspace only.

**Q:** When the visitor name is automatically or manually updated, will this affect both the My Connections” and All Connections lists? 
**A:** Yes. Even if the change has been done on one list (e.g My Connections) it will affect the other list (All Connections), and vice versa.


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
