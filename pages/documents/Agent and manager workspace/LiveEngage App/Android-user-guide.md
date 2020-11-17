---
pagename: Agent App user guide
categoryName: Agent & manager workspace
subCategoryName: ''
indicator: messaging
subtitle: ''
level3: ''
permalink: agent-manager-workspace-agent-app-user-guide.html
isTutorial: false
isNew: false
Redirect from:
  - agent-manager-workspace-agent-app-android-user-guide.html

---
The LivePerson Agent app is available for both iOS & Android that allows agents and agent managers to message with consumers on-the-go. The current app offers simple messaging capabilities and can help agents that are working from home to continue to provide services to their consumers.

In addition to allowing reps to work remotely, the app also expands opportunities for messaging scenarios. For example, in stores, retail reps can leverage their down time by messaging with customers not in store, utilizing retail reps as agents and giving them the power to increase sales.

![](img/V1-Android-agent-app-1.png)

## Current Agent App status
The current Android app supports version 8 and up.
The current iOS app supports version 12 and up.

## Supported Capabilities
The app supports iOS & Android phones and is optimized for their screen sizes. Agents can use the app to complete basic conversation with consumers including:
* Accepting new conversations when they are online
* Manage the list of conversations
* Transfer to another skill or to a specific agent
* Close conversations
* Return conversation to the queue
* Agent managers can review conversations of their team, and filter by status or specific agent.
* Managers (Admins) can join conversations to actively participate.
* Live Video Calls 
* Predefined Content 
* Photo sharing

## Future Capabilities
In the future the following functionality will added:
- Consumer info
- SSO
- Network effect support
- Automotive specific feature support

## Provisioning
This app is available on Google Play and Apple store. Brands can download it today and any agent can use their regular credentials to login.
Android: https://play.google.com/store/apps/details?id=com.liveperson.LiveEngageMessaging"
iOS: https://apps.apple.com/us/app/liveperson-agent-app/id1533849048"

## How to login
### Login fields
Account no: the account ID (Remember toggle can be used to save for future login)
Username: usually the agent’s email
Password: a masked field

![](img/LoginScreen.png)

{: .notice}
Changing / retrieving lost password will be carried out by an admin on the web platform.

### Log in button
The Log in button is enabled once all fields are completed.
Tapping the button performs a log in to the app.

{: .notice}
SSO login will be included in a future phase of the app.

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
2. Submit App Feedback - opens a form to provide LivePerson with feedback on the app
3. Message us button - Provides user option to contact LivePerson Support.

### Log out button
Upon signing out, all local database information for that agent is deleted. When the agent logs in, all data is restored from the LivePerson database.

![](img/AgentPage.png)

## Agent flow
### Empty state
The first time the agent logs in to the app it appears to be in an empty state. This is because the agent has no assigned conversations and no new conversation ringing. All agent’s conversations were ended (either manually or automatically).
Agents can open the drawer menu by tapping their picture on the top left corner. The small dot represents their current state: green for online, red for away.

### New ring alert
New conversation ringing (ACD manual accept mode only)

![](img/V1-Android-agent-app-3.png)

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
The list entry also display conversation response time indication (see connections list slide)

### Conversation message
Every conversation starts with a new message, originating from the consumer.

## Messaging the consumer
### Text field
When the agent writes several lines or uses the ‘return’ key it sends the message.

### Send icon
Tapping the send icon adds the text to the conversation and sends it to the consumer.

![](img/ConversationScreen.png) 

### Attachments Icon
Tapping the "+" attachment icon brings up the attachments menu. Agents can send predefined content, a secure form, or start a video call.
ADD attachments.png

### Conversation message: consumer side
Consumer side conversation messages appear with a color background. Every conversation is color-coded for easy identification by the agent. Below the consumer bubble there is time stamp.

### Conversation message: agent side
Agent side conversation messages appear with a white background.
Below the agent bubble there is an indication for the agent name and a time stamp. In addition there is a message status icon “v” indication: sent, delivered and read (similar to the whatsApp indications).

### Auto messages/system messages
Automatic messages or system messages display in a white color without a bubble centered in the screen.

## Agent action menu
Tapping the three vertical dots on the top right brings up the agent action menu.

### Return to queue
Tapping the ‘return to queue’ action removes the agent assignment from the conversation and sends it back to the queue of the appropriate skill. The position of the conversation in the queue is determined by LivePerson’s algorithm (currently it is positioned at the end of the queue, but enhancements to the algorithm are in progress).

### Close conversation
In case the conversation is no longer relevant and is not needed for future reference, the agent may close the conversation. This hides the conversation from the list and it can subsequently only be accessed via Agent manager or from web. On web, closed conversations can be reopened when the agent sends a new message. 

### Inactive conversations
Inactive conversations can be closed automatically using the Auto-close feature. This feature closes conversations after a configurable time during which the consumer has been idle. Contact your LivePerson account team to configure this feature.

### Transfer conversations
Allow agent to transfer a conversation either to another agent or to any agent within a skill.

![](img/Actions.png)

## The connections list
### Connection list order
The agent usually sees multiple conversations on their conversation list. Every conversation is color-coded for easy identification by the agent. The color-code can be seen on the outer ring of each consumer avatar.
The list is sorted according to the response time (SLA). If there is no response time because the conversation is pending a consumer response, then the list is sorted according to last modified conversation by the agent (top to bottom).

### The dynamic list behavior and transition
When the conversation status changes, e.g. when an agent responds to an overdue conversation, the position of the conversation in the queue changes accordingly.

{: .notice}
Agents can see closed conversations for 1 day under the 'My' tab and can search for closed conversation up to 90 days under the 'All' tab.

### Conversation list indications
Conversations pending an agent response have response time indications on right side. In the case where a conversation is overdue (at the top according to sorting logic), a red bell icon is displayed
The app filters out conversations with unassigned skills. Unassigned skill conversations will not be displayed in the connections list.

## Notifications
### Push notifications
When the agent moves the app to the background, new conversation are received as push notifications. Each push include a generic message that a new conversation is waiting to be accepted.
Each push notification includes:
- Customer ID: showing the name (or phone number) of the consumer who sent the new message.
- Message excerpt: a short excerpt of the new message.
- Tapping the notification: opens the app and focuses on the relevant conversation’s last message.

![](img/V1-Android-agent-app-6.png)

## Logout
### Return conversation to queue when logging out
When a user is trying to log out of the app, if he has open conversations assigned to him, an alert message will be prompted.
User can choose between three options:
- Automatically return all his assigned open conversations back to queue and logout
- Logging out without returning the conversation back to queue
- Cancel - the user will not be logged out and return to previous screen.

## Manager Flow
### The Agent Manager Capabilities

{: . noitce}
All of the functionality for agent users apply to agent manager as well.

In order for a manager to be able to receive new conversation, he needs to be defined in the web platform with an agent role.
Below describes the additional set of features available only for users with manager role:

### The manager connections view - My/All tabs
When a user with a manager role logs in to the app, the connections list display two tabs: My/All.
Under the my tab, managers can view open conversation assigned to him or conversations that he is joined to.

### Assigned agent name
In each conversation entry, there is an indication of the assigned agent

### Join conversation icon
There is a “join” icon for the conversation that the manager is joined to

### The ‘All’ tab connections list
In the ‘All’ tab, managers can view:
- Open conversations assigned to the agent he is managing (in his agent group)
- Open conversations in queue - manager can view conversations in queue (not assigned to any agent). The manager can only view in queue conversations assigned to a skill which at least one of the agents are assigned to
- Close conversation - manager can view closed conversations that were assigned to agents he manages.

The list displays closed conversations from the past 14 days (from conversation start date).
The list order is similar to the logic explained for the agents list order (see above). Closed conversations are displayed at the bottom and sorted according to the closing date (recently closed at the top).

{: .notice}
The app filters out conversations with unassigned skill. Unassigned skill conversation will not be visible in the my/all tab list.

![](img/V1-Android-agent-app-7.png)

### In queue conversation indication
For conversations which are in queue, the agent name field is labelled as ‘Unassigned’

### Closed conversation indication
There is an icon indication for conversation which are closed

### "All’ tab filters
In the ‘All’ tab there is ability to filter the list according to status, agents and skill

### The filter main panel
When tapping the filter icon, a filter panel slides in from the right side.
From this panel, use can select multiple ways to filter the “all” connections list
Tapping each of the filters: status, mobile experts, skills; drill down to the relevant filter selection.
To close the panel, the user can tap the “back” button or tap anywhere outside the filter panel.

### The status filter
- From the status filter, users can filter conversation by their statuses: Open, Open & Unassigned or Closed.
- This is a single selection filter.
- When tapping one of the status items will filter the connections list accordingly.
- Tap again to remove the filter.
- To filter by additional parameters, users can tap the back button to return to the main filter screen.
- To apply the current filter and close the filter panel, users can tap anywhere outside the filter panel.

![](img/V1-Android-agent-app-8.png)

## Managers actions
### Join/leave conversations
Users with manager role, can join conversations which are assigned to one of his agents or in the conversations queue
The join button is available from the action menu in the upper right corner (3 dots).
After joining a conversation users can send messages.
The join conversation button in the menu is changed to “Leave conversation” when the conversation has been joined by the manager

### Send back to queue
Managers can return conversation back to queue without needing to join conversations.

### End conversation
Managers can only end conversation assigned to him or to conversations that he joined
As mentioned before, once a manager joins conversation it will also be available in the “My” tab.

### Closed conversations
Managers can view closed conversation from the “All” tab.
The are no available actions for closed conversations (there is ability to resume conversation from the app). Once the conversation has been closed, the text area is replaced with a “Conversation is closed” banner.

### No conversation state
This happens:
- The first time the manager logs into the app.
- The agent has no assigned conversations
- All agent’s conversations were ended (either manually or automatically).

In this state a white image will be display on right panel with the label “Conversations list is empty”under it.

### No selection state
This happens:
- After login to the app and the agent has assigned conversations
- The agent returned conversation back to queue
- The agent closed conversation

When an agent manager is focused on a conversation in one tab (e.g. all tab) and then goes to the next tab (e.g. my tab) and the conversation is not available under the tab list.
In this state the “cactus” image will be display on right panel with the label “Please select a conversation” under it

The list of agents available are according the agent in the manager agent group.

## Tablet mode
When opened on a tablet, the app will open in tablet mode. The conversation list will show on the left and conversations will show on the right. If the tablet is rotated to portrait mode the conversation list will automatically hide. Rotate back to landscape mode to reshow it.

![](img/TabletMode.png)

## Multi back to queue

From the conversation list, long tap on any open conversation. A check mark will appear on the right to indicate it has been selected. Tap any additional conversations or tap "Mark all" to select all conversations. Tap "Return to queue" to return these conversations to the queue. Tap the "x" to cancel.

![](img/MultiBackToQueue.png)

## Structured Content

[Structured Content](https://knowledge.liveperson.com/messaging-channels-rich-conversations-structured-content-for-messaging-user-guide.html)can be viewed in messaging conversations sent from bots or other agents. Current carousel is not yet supported and cards are view only, not interactive.
