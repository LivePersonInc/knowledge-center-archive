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
published: false

---
The LiveEngage App is an iOS application for iPads & iPhones that allows agents and agent managers to message with consumers on-the-go.

The App expands opportunities for messaging scenarios. For example, in store retail reps can leverage their down time by messaging with customers not in store utilizing retail reps as agents and giving them the power to increase sales. The app will soon be available for download in the app store for early adopters so if you are interested in using the app, please contact your account team.

{: .sidebyside}

## ![](/img/LEApp2.png)![](/img/ipad3.png)

## How to login (Ipad & Iphone)

### Login fields

* _Account no_: the account ID
* _Username_: usually the agent’s email
* _Password_: a masked field

{: .notice} 

Changing / retrieving lost password will be carried out by an admin on LiveEngage web.

### “Remember me” toggle

* _ON_ (default): Upon logout, it remembers the account number and email address.
* _OFF_: leaves fields empty upon logout.

###  Log in button

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

## Drawer menu (iPad & iphone)

After user login, the app opens and immediately display to the drawer menu.

The draw menu consists of:

### Agent picture

Set on LiveEngage Web → Users tab → specific user.

This is used for login identification.

### Agent name

The agent nickname is the text entered in the name field on LiveEngage Web → Users tab → specific user.

This is used for login identification.

### Agent state (online)

While the agent is in the Online state, new conversations can ring. There is no consumer-facing indication that the agent is in the Online state.  
The agent default status is set according to LiveEngage settings

### Agent state: Away

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

## Agent flow (iPad & iphone)

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

**_Predefined content icon: _**tapping the icon opens an overlay screen with predefined content items that can easily be shared with the consumer.

**_Action menu_:** tapping the action menu icon reveals the actions that can be carried out in the context of the conversation. See more info on “Main screen - action” slide.

### Conversation list entry

**_Consumer avatar_:** From sources such as SMS, the consumer avatar doesn’t appear, therefore a generic avatar is used for aesthetic reasons. If the source supports a consumer avatar, such as Facebook, the consumer avatar is shown.

**_Consumer ID_:** The key information indicator for the consumer. The ID usually contains the consumer’s name. When using SMS, the consumer ID is their phone number.

**_Last message excerpt_:** Displays the last conversation message excerpt.

The list entry also display conversation response time indication (see connections list slide)

### Conversation message

Every conversation starts with a new message, originating from the consumer.

![](/img/Conversation accepted App.png)

## Messaging the consumer (iPad & Iphone)

### Text field

When the agent writes several lines or uses the ‘return’ key, the text field expands according to the text size.

### Send icon

Tapping the send icon adds the text to the conversation and sends it to the consumer.

![](/img/Agent keyboard open.png)  
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