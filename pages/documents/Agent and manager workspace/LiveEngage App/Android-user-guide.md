---
pagename: Android user guide
categoryName: Agent & manager workspace
subCategoryName: ''
indicator: messaging
subtitle: ''
level3: ''
permalink: agent-manager-workspace-agent-app-android-user-guide.html
isTutorial: false
isNew: false


---
The LivePerson Agent app is an Android application that allows agents and agent managers to message with consumers on-the-go. The current app offers simple messaging capabilities and can help agents that are working from home to continue to provide services to their consumers. 

In addition to allowing reps to work remotely, the app also expands opportunities for messaging scenarios. For example, in stores, retail reps can leverage their down time by messaging with customers not in store, utilizing retail reps as agents and giving them the power to increase sales.

## Current Android Agent App status
The current Android app supports version 8 and up.

## Supported Capabilities
The app supports Android phones and is optimized for their screen sizes. Agents can use the app to complete basic conversation with consumers including:
Accepting new conversations when they are online
Manage the list of conversations
Transfer to another skill or to a specific agent
Close conversations
Return conversation to the queue
Agent managers can review conversations of their team, and filter by status or specific agent.
Managers (Admins) can join conversations to actively participate.

## Future Capabilities
In the future the following functionality will added:
- Live video calls
- Tablet version
- Photos, videos & file sharing
- Structured content
- Secure forms
- Multi send back to queue
- Consumer info
- SSO
- Network effect support
- Automotive specific feature support

## Provisioning
This app is available in the Playstore, just search “Liveengage” and download the Agent App. Brands can download it today and any agent can use their regular credentials to login.

## How to login
### Login fields
Account no: the account ID
Username: usually the agent’s email
Password: a masked field

{: .notice}
Changing / retrieving lost password will be carried out by an admin on LiveEngage web.

### Log in button
The Log in button is enabled once all fields are completed.
Tapping the button performs a log in to the app.

{: .notice}
SSO login will be included in a future phase of the app.

### App version
Long tap on the app version allow user to send logs

### Log in screen errors
In case of credentials error / server error, an alert is presented.

### No network
In case there is no network available, an alert is prompted at the top of the screen. The alert will dismiss as soon as the network signal is restored

### Drawer menu
After the user login, the app opens and immediately displays the Conversations view.
The view consists of:
**Agent Picture**
Set on web version → Users tab → specific user. This is used for login identification.
When clicking on the agent picture, you will get to settings menu where you can change details such as status etc.

**Agent state: online** 
While the agent is in the online state, new conversations can ring. There is no consumer-facing indication that the agent is in the Online state.
The agent default status is set according to the platform settings.

**Agent state: away** 
While the agent is in the "away" state, agents will not be eligible to receive new conversations. Accepted conversations will still show new messages (including Push notifications). There is no consumer-facing indication that the agent is in the Away state.

**Links**
1. Settings - From settings you can enable dark mode and change language of the app.
2. Feedback - opens a blank email for users to provide LivePerson with feedback on the app.

### Log out button
Upon signing out, all local database information for that agent is deleted. When the agent logs in, all data is restored from the LivePerson database.

## Agent flow
### Empty state
The first time the agent logs in to the app it appears to be in an empty state. This is because the agent has no assigned conversations and no new conversation ringing. All agent’s conversations were ended (either manually or automatically).
Agents can open the drawer menu by tapping their picture on the top left corner. The small dot represents their current state: green for online, red for away.

### New ring alert
New conversation ringing (ACD manual accept mode only)

### Accepting the conversation
Tapping the "accept" button assigns the conversation to the agent and opens the conversation. Tapping accept opens only 1 conversation at a time, even if there are multiple conversations ringing for the agent.

### Ignoring the conversation
An agent can ignore ringing conversations. After a preset time (the default is 1m), the conversation will move to the next available agent (as decided by LivePerson’s agent availability algorithm).

{: .notice}
The app filters out conversations with unassigned skills. Unassigned skill conversations will not be received in the agent app.

### Conversation top bar
**Consumer avatar:** From sources such as SMS, the consumer avatar doesn’t appear, therefore a generic avatar is used for aesthetic reasons. If the source supports a consumer avatar, such as Facebook, the consumer avatar is shown.

### Conversation list entry

**Consumer avatar:** From sources such as SMS, the consumer avatar doesn’t appear, therefore a generic avatar is used for aesthetic reasons. If the source supports a consumer avatar, such as Facebook, the consumer avatar is shown.

**Consumer ID:** The key information indicator for the consumer. The ID usually contains the consumer’s name. When using SMS, the consumer ID is their phone number.

**Last message excerpt:** Displays the last conversation message excerpt.
