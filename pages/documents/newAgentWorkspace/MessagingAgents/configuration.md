---
pagename: Configuration
categoryName: Agent & manager workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: 'Get acquainted with the agent workspace '
level3: ''
permalink: messaging-agents-configuration.html
isTutorial: false
date: 2019-01-21 09:24:58 +0000
isNew: false
layout: newAgentWorkspace
---

The agent workspace is tailored to the needs of messaging agents and was designed using feedback and requests from hundreds of messaging agents. It is developed for an easy plug-and-play approach and requires little to no configuration.  

There are a few configurations that brands can elect to control for the agent experience as outlined below.  

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
