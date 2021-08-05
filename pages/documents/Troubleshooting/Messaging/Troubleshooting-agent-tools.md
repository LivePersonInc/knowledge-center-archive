---
pagename: Agent tools
categoryName: Troubleshooting
subCategoryName: Web Messaging
indicator: both
subtitle: Troubleshooting on questions relating to agent tools
level3: ''
permalink: troubleshooting-messaging-agent-tools.html
isTutorial: false
isNew: false
date: 2019-02-28 11:55:33 +0000

---
## Visitors aren’t receiving messages from our agents; on the agent-side, sent messages are in red

### Cause:

By design, agent messages that visitors didn’t receive are displayed in red text in the agent’s messaging window. Generally this is caused by network connectivity issues, as follows:

* Network errors on the agent side - if the agent experiences connectivity issues the messages he sends will not be sent to the visitor.
* Network errors on the visitor’s side - once a visitor loses connection to the network, he will not be able to receive new messages.
* Server issues on LivePerson’s side.

### Solution:

1. Have the agent refresh their Agent Workspace console.
2. Check whether there are network connectivity errors on the agent side:
   * Open the Developer Tools > Network tab in the agent’s browser and check for failed requests (displayed in red in the Developer tool).
   * If there are failed requests, save the network traffic as a HAR file and send it to LivePerson Support for further investigation.
3. Check the status of your LivePerson Conversational Cloud account on the [LivePerson Service Status Dashboard](http://status.liveperson.com/).

## Agents assigned to the Sales skill are not receiving messages (agents assigned to other skills are receiving messages)

### Cause:

* No pages (Facebook) / phone numbers (SMS) / SDEs (In App) are set to route conversations to that skill.
* Agents are not set to accept conversations (max conversation = 0). If this was changed while they were logged in they need to logout and login again.
* Conversations entered the queue while Sales agents weren't online/available and the skill for these conversations was changed to the fallback skill.

### Solutions:

* Configure user settings and skill routing properly.
* Make sure to set the fallback skill and default skill according to your account’s needs.

## Agent concurrency isn't changing to the “Default max number of conversations per agent.”

#### Cause:

When you change the Default max number of conversations per agent (in the Campaign Builder footnote), the system does the following:

1. Changes the max. number of conversations value for each user whose value is identical to the Default maximum number of conversations per agent value before the change.
2. The system does not change the max. number of conversations value for users whose value is different than the current Default maximum number of conversations per agent before the change.

For example:

* An account’s current Default max number of conversations per agent is set to 5.
* Agent A has max conversation number set to 5.
* Agent B has max conversation number set to 10.
* If you change the Default max number of conversations per agent to 15.

Agent A’s max. number of conversations value will change to 15.

Agent B’s max. number of conversations value will not change because it is different from the default value at the time of the change.

The system doesn't check if a change was ever done to an agent’s max. number of conversations. It just checks the current value and if it's the same as the default value, it changes the agent’s value.

### Solution:

* A LivePerson Conversational Cloud account changes the maximum number of conversations for all their agents to 10 by changing the value of Default max number of conversations per agent (in the Campaigns footnote) from 20 to 10.
* If some users are still being assigned more than 10 conversations, check the settings for that user.

## When I transfer messages, some of them return to me with an unassigned skill

### Cause:

* This is done to prevent agents from accidentally sending consumers to a queue where they'll be stuck forever.
* The messages were transferred to a skill that had no agents assigned to it.
* When a conversation is transferred to a skill with no agents assigned to it, the Conversational Cloud changes the conversation's skill to Unassigned and returns it to the original agent.

### Solution:

This is expected behavior.

## Why are conversations pending consumer response shown as “overdue” in the agent console?

### Cause:

* The agent had manually placed an SLA of 24 hours on the conversation.
* The agent responded before the 24 hours were up.
* However, manual response times can only be removed manually so the time to respond counter was not changed and showed the conversation as overdue.

### Solution:

This is the expected behavior.

#### Best practices:

1. Agents who set a Manual SLA, should monitor these SLAs and reset them once they've responded to the consumer.
2. Only set a Manual SLA if you are expecting to take a long time to respond or if a process is in place that requires an extended time frame. Otherwise, avoid using Manual SLA.

## Why are agents getting error messages when they send long messages?

### Cause:

When an agent tries to send a Facebook message with more than 800 characters, a red warning triangle displays and the message “Message format is not supported by the consumer's application” is displayed.

Due to the Facebook integration limitation, messages sent by Agents cannot exceed 640 characters.

### Solution:

Do not exceed the supported length of messages, as detailed below:

* Web, in-app (SDK): maximum 2000 characters for agent or consumer messages
* SMS: maximum 1600 characters for agent or consumer messages
* Facebook: maximum 640 characters for an agent message and 5000 characters for a Facebook user message

## The value of AWAY and ONLINE are identical for some Messaging Agents in the reports

### Cause:

When running the Messaging Performance Dashboard in the Analytics Builder, the ONLINE metric presents 0 time for Messaging only agents.

Messaging Agents must have Chat concurrency set (greater than 0) in order for the system to populate this metric's value. For Messaging Agents with Chat concurrency 0 (no chats), Online Time displays as 0.

### Solution:

1. Set all Messaging Users to Max no. live chats to 1 instead of 0.
2. The day after you update these settings, the correct values will display for Online starting from the time you applied the update.

## Agent concurrency isn’t changing to “Default max number of conversations per agent”

A Conversational Cloud customer changes the maximum number of conversations for all their agents to 10 by changing the value of default max number of conversations per agent from 20 to 10.  But they notice that some users are still being assigned more than 10 conversations.

They check the settings for the users who are still being assigned more than 10 conversations and find that the value of their max no. messaging conversations (on the Edit user window) is 15. Why didn’t their setting change to 10?

### Cause:

In our logs we found that two weeks earlier the Admin user had changed the max no. messaging conversations value from 20 to 15 for the affected users.

When you change the Default max number of conversations per agent (in the Campaign Builder footnote), the system does the following:

Changes the max. number of conversations value for each user whose value is identical to the Default maximum number of conversations per agent value before the change.

The system does not change the max. number of conversations value for users whose value is different than the current  default maximum number of conversations per agent before the change.

### Solution:

This is expected behavior.

## Conversation Builder 

## Why can’t I save the Agent Manager role to a user? 

There are a few requirements that need to be met in order for the save button to become clickable.(i.e. For the button to be clickable it will be orange): 
* The email, nickname, and name boxes must contain at least one character, however, you would need a valid email in order to not get an error when you try to save.
* When creating a new user,  the password fields are also mandatory.
* The user needs to have at least one profile assigned to them (note: if only the Agent Manager profile is selected, it is advisable to assign it to the appropriate Agent Group to manage.)
* If the user has an Agent profile assigned, they would also need to be a member of a group.

## User can't log in after multiple attempts

Please contact your account administrator or supervisor to re-enable your user.

## Why isn't dynamic text in predefined content working? 

Messaging agents should not use predefined content items that contain dynamic text.

## Can I trace the history of a conversation?

### Resolution 1:
Search the conversation in MCS Toolkit by using the conversation ID or engagement ID, by pulling the transcript, you will be able to see which bots and agents were involved in the routing of the conversation, as well as the dialogue within the conversation.
You can can access MCS here: https://mcs.liveperson.net/login 

### Resolution 2: 
You can view the history within the agent workspace; if previous conversations exist, they will be at the very top of the window within the current conversation of the user.
 
 



