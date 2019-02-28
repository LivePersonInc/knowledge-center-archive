---
pagename: Agent issues
categoryName: Troubleshooting
subCategoryName: Web messaging
indicator: both
subtitle: Troubleshooting on questions relating to agent tools
level3: ''
permalink: troubleshooting-web-messging-agent-tools.html
isTutorial: false
isNew: false
date: 2019-02-28 13:55:33 +0200
published: false

---

## Visitors aren’t receiving messages from our agents; on the agent-side, sent messages in red.

### Issue:

Messaging agents are sending messages to visitors but visitors do not seem to be receiving these messages. In addition, the agent’s sent messages are displayed in red text rather than black in the agent workspace.

### Cause:

By design, agent messages that visitors didn’t receive are displayed in red text in the agent’s messaging window. Generally this is caused by network connectivity issues, as follows:

* Network errors on the agent side - if the agent experiences connectivity issues the messages he sends will not be sent to the visitor.
* Network errors on the visitor’s side - once a visitor loses connection to the network, he will not be able to receive new messages.
* Server issues on LivePerson’s side.

### Possible Solutions:

1. Have the agent refresh their LiveEngage console.
2. Check whether there are network connectivity errors on the agent side:
   1. Open the Developer Tools > Network tab in the agent’s browser and check for failed requests (displayed in red in the Developer tool).
   2. If there are failed requests, save the network traffic as a HAR file and send it to LivePerson Support for further investigation.
3. Check the status of your LivePerson account on the [LivePerson Service Status Dashboard](http://status.liveperson.com/).

## Why aren’t agents receiving messages?

### Issue:

### Agents assigned to the Sales skill are not receiving messages although agents assigned to other skills are receiving messages.

### Possible Causes:

* No pages (Facebook) / phone numbers (SMS) / SDEs (In App) are set to route conversations to that skill.
* Agents are not set to accept conversations (max conversation = 0). If this was changed while they were logged in they need to logout and login again.
* Conversations entered the queue while Sales agents weren't online/available and the skill for these conversations was changed to the fallback skill.

### Solutions:

* Configure user settings and skill routing properly.
* Make sure to set the fallback skill and default skill according to your account’s needs.

## Agent concurrency isn't changing to the “Default max number of conversations per agent.”

### Problem:

* A LiveEngage account changes the maximum number of conversations for all their agents to 10 by changing the value of Default max number of conversations per agent (in the Campaigns footnote) from 20 to 10.
* But they notice that some users are still being assigned more than 10 conversations.
* They check the settings for the users who are still being assigned more than 10 conversations and find that the value of their Max no. messaging conversations (on the Edit user window) is 15.
* Why didn’t the user’s’ Max no. messaging conversations change to 10?

### Cause:

The account’s Admin user had changed those users’ Max no. messaging conversations value from 20 to 15 two weeks earlier.

When you change the Default max number of conversations per agent (in the Campaigns footnote), the system does the following:

1. Changes the max. number of conversations value for each user whose value is identical to the Default maximum number of conversations per agent value before the change.
2. The system does not change the max. number of conversations value for users whose value is different than the current Default maximum number of conversations per agent before the change.

For example:

\- An account’s current Default max number of conversations per agent is set to 5.

\- Agent A has max conversation number set to 5.

\- Agent B has max conversation number set to 10.

If you change the Default max number of conversations per agent to 15.

Agent A’s max. number of conversations value will change to 15.

Agent B’s max. number of conversations value will not change because it is different from the default value at the time of the change.

The system doesn't check if a change was ever done to an agent’s max. number of conversations. It just checks the current value and if it's the same as the default value, it changes the agent’s value.

### Solution:

This is expected behavior.

## When I transfer messages, some of them return to me with an unassigned skill.

### Issue:

### Why is it that when I transfer conversations to a different skill some of them return to me with an unassigned skill?

### Cause:

* This is done to prevent agents from accidentally sending consumers to a queue where they'll be stuck forever.
* The messages were transferred to a skill that had no agents assigned to it.
* When a conversation is transferred to a skill with no agents assigned to it, LiveEngage changes the conversation's skill to Unassigned and returns it to the original agent.

### Solution:

This is expected behavior.

## Why are conversations pending consumer response shown as “overdue” in the agent console?

### Issue:

### The last message in a conversation was sent by an agent at 3:37 p.m. The conversation is pending the consumer's response but on the Open Connections list it's shown as overdue 5+ hours (the value in the Response Time column is -5h 34m).

### Cause:

* The agent had manually placed an SLA of 24 hours on the conversation.
* The agent responded before the 24 hours were up.
* However, manual response times can only be removed manually so the time to respond counter was not changed and showed the conversation as overdue.

### Solution:

### Expected behavior.

### Best practices:

1. Agents who set a Manual SLA, should monitor these SLAs and reset them once they've responded to the consumer.
2. Only set a Manual SLA if you are expecting to take a long time to respond or if a process is in place that requires an extended time frame. Otherwise, avoid using Manual SLA.

## Why are agents getting error messages when they send long messages?

### Issue:

When an agent tries to send a Facebook message with more than 800 characters, a red warning triangle displays and the message “Message format is not supported by the consumer's application” is displayed.

Cause:

# Due to the Facebook integration limitation, messages sent by Agents cannot exceed 640 characters.

Solution:

# Do not exceed the supported length of messages, as detailed below:

* Web, in-app (SDK): maximum 2000 characters for agent or consumer messages
* SMS: maximum 1600 characters for agent or consumer messages
* Facebook: maximum 640 characters for an agent message and 5000 characters for a Facebook user message

# Value of AWAY and ONLINE are identical for some Messaging Agents in the reports

### Issue:

When running the Messaging Performance Dashboard in Report Builder, the ONLINE metric presents 0 time for Messaging only agents.

Cause:

### Messaging Agents must have Chat concurrency set (greater than 0) in order for the system to populate this metric's value. For Messaging Agents with Chat concurrency 0 (no chats), Online Time displays as 0.

### Solution:

1. Set all Messaging Users to Max no. live chats to 1 instead of 0.
2. The day after you update these settings, the correct values will display for Online starting from the time you applied the update.