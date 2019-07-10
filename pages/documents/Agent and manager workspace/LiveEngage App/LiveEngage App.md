---
pagename: LiveEngage App user guide
categoryName: Agent & manager workspace
subCategoryName: ''
indicator: messaging
subtitle: ''
level3: ''
permalink: Agent-manager-workspace-liveengage-app-userguide.html
isTutorial: false
isNew: false

---
The LiveEngage App is an iOS application for iPads & iPhones that allows agents and agent managers to message with consumers on-the-go.

The App expands opportunities for messaging scenarios. For example, in store retail reps can leverage their down time by messaging with customers not in store utilizing retail reps as agents and giving them the power to increase sales. The app will soon be available for download in the app store for early adopters so if you are interested in using the app, please contact your account team. Please note that all functionality discussed in this article applies to both the iPad & iPhone.

{: .sidebyside}

## ![](/img/LEApp2.png)![](/img/ipad3.png)

## How to login 

### Login fields

* _Account no_: the account ID
* _Username_: usually the agent’s email
* _Password_: a masked field

{: .notice}

Changing / retrieving lost password will be carried out by an admin on LiveEngage web.

### “Remember me” toggle

* _ON_ (default): Upon logout, it remembers the account number and email address.
* _OFF_: leaves fields empty upon logout.

### Log in button

* The Log in button is enabled once all fields are completed.
* Tapping the button performs a log in to the app.

{: .notice}  
SSO login will be included in a future phase of the app.

### App version

Long tap on the app version allow user to send logs

![](/img/loginipad.png)

### Log in screen errors

In case of credentials error / server error, an alert is presented.

![](/img/fail login pop-up.png)

### No network

In case there is no network available, an alert is prompted at the top of the screen. The alert will dismiss as soon as the network signal is restored

## Drawer menu 

After user login, the app opens and immediately display to the drawer menu.

The draw menu consists of:

### Agent picture

Set on LiveEngage Web → Users tab → specific user.

This is used for login identification.

### Agent name

The agent nickname is the text entered in the name field on LiveEngage Web → Users tab → specific user.

This is used for login identification.

### Agent state: online

While the agent is in the Online state, new conversations can ring. There is no consumer-facing indication that the agent is in the Online state.  
The agent default status is set according to LiveEngage settings

### Agent state: away

While the agent is in the "away" state, agents will not be eligible to receive new conversations. Accepted conversations will still show new messages (including Push notifications). There is no consumer-facing indication that the agent is in the Away state.

### Links

**Feedback:** opens a blank email for users to provide LivePerson with feedback on the app.

**Terms & Conditions:** opens a web page with the app’s terms & conditions (Apple requirement for all apps).

**Privacy policy:** opens a web page with the app’s privacy policy (Apple requirement for all apps).

### Log out button

The log out process will explained in a separate slide

### App version + account number

Long tap on the app version allow user to send logs

{: .important}  
Upon signing out, all local database information for that agent is deleted. When the agent logs in, all data is restored from LiveEngage’s database.

![](/img/drawer menu ipad.png)

## Agent flow 

### Empty state

The first time the agent logs in to the app it appears to be in an empty state. This is because the the agent has no assigned conversations and no new conversation ringing. All agent’s conversations were ended (either manually or automatically).

Agents can open the drawer menu by tapping their picture on the top left corner. The small dot represents their current state: green for online, red for away.

![](/img/Agent empty state.png)

### New ring alert

New conversation ringing (ACD manual accept mode only)

### Accepting the conversation

Tapping the "accept" button assigns the conversation to the agent and opens the conversation. Tapping accept opens only 1 conversation at a time, even if there are multiple conversations ringing for the agent.

### Ignoring the conversation

An agent can ignore ringing conversations. After a preset time (the default is 1m), the conversation will move to the next available agent (as decided by LivePerson’s agent availability algorithm).

{: .notice}  
The app filters out conversations with unassigned skills. Unassigned skill conversations will not be received in the agent app.

### Conversation top bar

**_Consumer avatar_:** From sources such as SMS, the consumer avatar doesn’t appear, therefore a generic avatar is used for aesthetic reasons. If the source supports a consumer avatar, such as Facebook, the consumer avatar is shown.

**Predefined content icon:** tapping the icon opens an overlay screen with predefined content items that can easily be shared with the consumer.

**_Action menu_:** tapping the action menu icon reveals the actions that can be carried out in the context of the conversation. See more info on “Main screen - action” slide.

### Conversation list entry

**_Consumer avatar_:** From sources such as SMS, the consumer avatar doesn’t appear, therefore a generic avatar is used for aesthetic reasons. If the source supports a consumer avatar, such as Facebook, the consumer avatar is shown.

**_Consumer ID_:** The key information indicator for the consumer. The ID usually contains the consumer’s name. When using SMS, the consumer ID is their phone number.

**_Last message excerpt_:** Displays the last conversation message excerpt.

The list entry also display conversation response time indication (see connections list slide)

### Conversation message

Every conversation starts with a new message, originating from the consumer.

![](/img/Conversation accepted App.png)

## Messaging the consumer 

### Text field

When the agent writes several lines or uses the ‘return’ key, the text field expands according to the text size.

### Send icon

Tapping the send icon adds the text to the conversation and sends it to the consumer.

### ![](/img/Agent keyboard open.png)  
Conversation message: consumer side

Consumer side conversation messages appear with a color background. Every conversation is color-coded for easy identification by the agent.

Below the consumer bubble there is time stamp

### Conversation message: agent side

Agent side conversation messages appear with a white background.  
Below the agent bubble there is indication for the agent name and a time stamp

In addition there is a message status icon “v” indication: sent, delivered and read. (similar to the whatsApp indications)

### Auto messages/system messages

Automatic messages or system messages display in a grey color without a bubble centered in the screen

### Conversation history

When agent accept new conversation he sees the new message arrive. In addition, if there are previous conversation history the last appear as well

The agent can scroll up to reveal the history additional closed messaging conversations with the consumer.

## Agent action menu 

### Send back to queue

Tapping the ‘Send back to queue’ action removes the agent assignment from the conversation and sends it back to the skill queue. The position of the conversation in the queue is determined by LivePerson’s algorithm (currently it is positioned at the end of the queue, but enhancements to the algorithm are in progress).

### End conversation

In case the conversation is no longer relevant and is not needed for future reference, the agent may end the conversation. This hides the conversation from the list and it can subsequently only be accessed via Agent manager or from LiveEngage Web. On LiveEngage Web, closed conversations can be reopened when the agent sends a new message. In future phases the list may include closed conversations and the ability to reopen them, based on the relevant use case.

### Inactive conversations

Inactive conversations can be closed automatically using the Auto-close feature. This feature closes conversations after a configurable time during which the consumer has been idle. Contact the LivePerson account team to configure this feature.

![](/img/agent action menu app.png)

## Predefined content

### Predefined content panel

The predefined content panel slides out from the top bar by tapping the predefined content icon. The items are divided into categories, with the title of each response listed under the relevant category as set on LiveEngage web.

The categories and items are according to the relevant conversation skill (as set in LiveEngage web)

### Sending Predefined content

Tapping a title populates the message text field with the predefined content. To user can tap the input field to edit the text. Closing the panel can be done via the Close button or tapping anywhere outside the panel

{: .notice}  
There is no option to collapse / expand categories and predefined content is only available in English (US)

![](/img/Agent predefinied content-1.png)

## Structured content 

Users using the app, can view structured content sent by bots or other agents using the LiveEngage web. The card buttons are disabled.

{: .notice}  
The app currently support only basic cards. Carousel will be added in next versions

## Quick replies

Users using the app, can view quick replies sent by bots or other agents using the LiveEngage web. QR message bubbles display with a QR button to left of the message

### Expand/Collapse Quick replies

By default, quick replies messages do not show up the offered replies suggested for the consumer. A quick reply button is available to left of the message. User can tap the button to expand/collapse the quick replies buttons

Below the quick reply there is a label indicating whether the quick replies buttons are visible or not for at the consumer side

### ![](/img/SC_QR_app.png)  
Link preview

When sending URL to a consumer, it is published to the consumer with a preview of the website. The preview appears below the original message and link

  
![](/img/link preview app.png)

## The connections list

### Connection list order

The agent usually sees multiple conversations on their conversation list. Every conversation is color-coded for easier identification by the agent. The color-code can be seen on the outer ring of each consumer avatar.

The list is sorted in according to the response time (SLA) if there is no response time because the conversation is pending a consumer response, then the list is sorted according to last modified conversation by the agent. (top to bottom)

**The list dynamic behavior and transition**

When the conversation status changes, e.g. when an agent responds to an overdue conversation, the position of the conversation in the queue changes accordingly. 

{: .notice}  
Agents can only view open conversations. In future phases it may include closed conversations, based on the relevant use case.

### Conversation list indications

Conversations pending an agent response have response time indications on right side. In case the conversation is overdue (at the top according to sorting logic) a red bell icon is displayed

{: . notice}**  
**The app filters out conversations with unassigned skills. Unassigned skill conversations will not be displayed in the connections list

## Bulk back to queue

### Multi-selection mode

Users can return multiple conversations back to queue at once. By tapping and holding on the conversation area or by tapping the consumer avatar the list switches to multi-selection mode. Users can continue tapping each conversation to select/deselect it.

To exit and abort multi-selection mode user can tap the ‘cancel’ button at the top bar

### Bottom action bar

User can select “Mark all” to select all conversation. Once all conversation are marked the button changes to “Clear all”

To return selected conversation back to queue, user can tap to “Return to queue” button.

### Returning back to queue process

When returning multiple conversation back to queue, a progress bar pop-up will appear.

{: . notice}  
Only open and assigned conversation will be returned to the queue.

If some of the open conversations were not successfully returned to queue, a proper message will be prompted and these conversation will remain selected/

If all conversation were successfully return to queue they will disappear from the agent list.

This is relevant for agent managers who can view closed and in queue conversations (see in [manager flow section]() )

## ![](/img/bulk back to queue.png)  
Searching the list

### Search bar

Using the search bar, the agent can search for a consumer’s name (or phone number in the SMS source) to reach a conversation quickly. Clearing the search bar (using Cancel or ‘x’) shows the full conversation list.

### Search results list

The conversation list is filtered in real-time with relevant conversation entries that fit the searched name or number. As the conversation list shows only open conversations, the search is valid for these.

## Notifications

### Push notifications

When the agent moves the app to the background, new conversation are received as push notifications. Each push include a generic message that a new conversation is waiting to be accepted. 

Each push notification includes:  
_Customer ID:_ showing the name (or phone number) of the consumer who sent the new message.

**_Message excerpt:_** a short excerpt of the new message.

**_Tapping the notification_**: opens the app and focuses on the relevant conversation’s last message.

### App icon badge

As for new conversation, when there is a new conversation while the app is in the background, a waiting conversation badge appears on the LiveEngage icon. **The app badge does not sum the number of new conversation waiting**. 

When at least one new message is received when the app is in the background, an unread message badge appears on the LiveEngage icon. T**he number sums the unread message in the app.** When entering the app the counter is reset.

Known limitation: the app icon badge does not sum the new messages and new conversation notification. It display the badge which is relevant to last notification type (conversation/message)

{: .notice}  
  
Enabling the push notifications is done by your LivePerson account team.

![](/img/Consumer push notification-1.png)

## In app notifications

### In-app notification for new messages

While responding to one consumer, an agent may receive a new message from another. The in-app notification includes:

_Customer ID:_ showing the name (or phone number) of the consumer sending the message.

**_Message excerpt:_** a short excerpt of the new message.

**_Tapping the notification_:** opens the conversation, focusing on the last message.

In-app notifications replace each other, so in case of simultaneous notifications, the last sent message is shown.

### New message badge

When new messages are received, a badge counting the number of new messages appears next the relevant conversation list entry. Tapping the list entry clears the badge.

## ![](/img/Agent inapp notifications.png)  
  
  
Logout (iPad and iPhone) 

### Return conversation to queue when logging out

When a user is trying to log out of the app, if he has open conversations assigned to him, an alert message will be prompted.

User can choose between three options:

1. Automatically return all his assigned open conversations back to queue and logout
2. Logging out without returning the conversation back to queue
3. Cancel - the user will not be logged out and return to previous screen

![](/img/Agent logout.png)

## Manager Flow

### The Agent Manager Capabilities

### {: .important}  
All of the functionality for agent users apply to agent manager as well

In order for a manager to be able to receive new conversation, he needs to be defined in the LiveEngage web with an agent role.

Below describes the additional set of features available only for users with manager role:

## The manager connections view - My tab

### My/All tabs

When a user with a manager role logs in to the app, the connections list display two tabs: My/All.

Under the my tab, managers can view open conversation assigned to him or conversations that he is joined to

### Assigned agent name

In each conversation entry, there is an indication of the assigned agent

### Join conversation icon

**There is a “join” icon for conversation the manager is joined to**

### The ‘All’ tab connections list

In the ‘All’ tab, managers can view:

* Open conversations assigned to the agent he is managing (in his agent group)
* Open conversations in queue - manager can view conversations in queue (not assigned to any agent). The manager can only view in queue conversations assigned to a skill which at least one of the agents are assigned to
* Close conversation - manager can view closed conversation that were assigned to agents he manage.

The list displays closed conversations from the past 14 days (from conversation start date)

The list order is similar to the logic explained for the agents list order (see above). Closed conversations are displayed at the bottom and sorted according to the closing date (recently closed at the top).

{: .notice}  
The app filters out conversations with unassigned skill. Unassigned skill conversation will not be visible in the my/all tab list.

![](/img/Manager all tab-1.png)

### In queue conversation indication 

### For conversations which are in queue, the agent name field is labelled as ‘Unassigned’

### Closed conversation indication

There is an icon indication for conversation which are closed

### "All’ tab filters

In the ‘All’ tab there is ability to filter the list according to status, agents and skill

### The filter main panel

When tapping the filter icon, a filter panel slides in from the right side.

From this panel, use can select multiple ways to filter the “all” connections list

Tapping each of the filters: status, mobile experts, skills; drill down to the relevant filter selection.

To close the panel, the user can tap the “back” button or tap anywhere outside the filter panel.

## ![](/img/Filter panel-1.png)  
The status filter

From the status filter, users can filter conversation by their statuses: Open, Open & Unassigned or Closed.

This is a single selection filter.

**When tapping one of the status items, the list on left filter on the fly**

Tap again to deselect the item

To filter by additional parameters, user can tap the back button to return to the main filter screen

To apply the current filter and close the filter panel, users can tap anywhere outside the filter panel.

## ![](/img/Status filter.png)  
Mobile experts (Agent) filter

* From the mobile experts filter, users can filter conversations according to the assigned agent (sorted by abc). This is multiple selection filter.   
  Users can select more than one agent.
* When tapping one of the agent name the list on the left filtered on the fly
* Tap again to deselect the item

### All/Selected tabs

After selection agent, the user can view all the selected agents under the “selected tab” or see all available agents (included selected) under the “All” tab

### Search agents

* Users can use the search bar easily find a specific agent under the all and selected tab .
* Select / Clear all   
  User can easily deselect all selected agent by tapping the “Clear” button on the filter header. When no agent is selected the “clear” button changes to “All” and act as select all

{: .notice}  
The list of agents available are according the agent in the manager agent group