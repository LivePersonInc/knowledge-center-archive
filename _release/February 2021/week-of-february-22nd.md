---
pagename: Week of February 22nd
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-february-week-of-february-22nd.html
isTutorial: false
isNew: false
date: '2021-02-17'

---

These release notes include new features arriving February 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Social Messaging] New Social Messaging widget
### Type: New Functionality (SM 2.0)

A new core widget is now available for all Social Messaging conversations. 
The widget consist of two areas:
* Top area - Displays the consumer profile on the social network, together with important statistics about the consumer (different stats are available for each conversation source) - to provide the agent with important data about the consumer.
* Bottom area - Displays the original post/tweet of the consumer in the social network, together with its ‘parent’ post/comment - to provide clear indication of the conversation context.

![](img/week-of-february-22nd-1.png)

## [Social Messaging] Public/Private consumer message indication
### Type: Enhancement (SM 2.0)

Indicators for each consumer message stating whether it was a private message or a public post are now supported in a new and improved design. The new indicator will be displayed below each consumer message, containing the icon of the messaging channel, a “Public/Private” text indication, together with the consumer name, action, and timestamp. This will provide agents better visibility of the conversation flow.

## [Social Messaging] Public/Private invite consumer to direct messaging 
### Type: Enhancement (SM 2.0)

The option to invite consumers for a private conversation (a.k.a “Public to Private”) which used to be supported through the old Social Messaging widget, is now available to agents as a new button above the text input area. 

Link to Facebook Messenger:

![](img/week-of-february-22nd-3.png)

Link to Twitter direct messages:

![](img/week-of-february-22nd-4.png)

## [Social Messaging] 'View post'capability for each consumer message
### Type: Enhancement (SM 2.0)

Social Messaging 2.0 provides agents with full visibility over the context of the conversation, by showing the ‘parent’ message of the thread for each consumer message. The agent can now click on the “View post” button - for every consumer message in the transcript area, to see the original message embedded within a new core widget, together with its parent message.
The agent may also navigate to that post/tweet on the native platform by clicking on it inside the widget, which will open in a new browser tab.

“View post” button appears when hovering the consumer message:

![](img/week-of-february-22nd-5.png)

The post presented inside the new Social Messaging widget, together with its parent post:

![](img/week-of-february-22nd-6.png)

## [Social Messaging] Reply to a specific consumer message/post
### Type: Enhancement (SM 2.0)

Agents now have the ability to reply to a specific consumer message, to ensure that consumers are getting relevant replies to each of their posts. The agent can now click on the “Reply” button for each consumer message in the transcript area. A preview of this message will be added next to the agent text input field to indicate which message was selected for the reply. 

Once the agent sends the reply to the consumer, the agent message will appear in the transcript area with a reference to the consumer’s message. The message will be presented to the consumer on the same thread it started from, so both the agent and the consumer will have better context to the entire conversation flow.

“Reply” button appears when hovering over the consumer message:

![](img/week-of-february-22nd-7.png)

Preview of the replied message is presented above the agent’s text:

![](img/week-of-february-22nd-8.png)

## [Social Messaging] Mention consumer in an agent reply
### Type: Enhancement (SM 2.0)

With Social Messaging v2.0, agents will be able to mention consumers with their Facebook username while replying through the Conversational Cloud. While typing a new message within the input area in the Agent Workspace, the agent may press on the “Mention consumer” button. This will add the consumer username in the input area as a mention, e.g: “Hey there, @Cristy!” and the consumer will get a notification that he has been mentioned by the brand, in the native platform.

Hovering the “Mention consumer” button:
![](img/week-of-february-22nd-9.png)

Mention the consumer in the reply:
![](img/week-of-february-22nd-10.png)

## [Social Messaging] Toggle easily between Public/Private replies
### Type: Enhancement (SM 2.0)

Agents will now be able to choose whether their reply to the consumer will be public (e.g. a public post) or private (e.g. through Facebook Messenger or Twitter DM), by switching a new toggle button from the agent input area. This way, agents can send the most appropriate reply in the chosen domain.
When an agent replies publicly, the reply will be nested under the last public message from the consumer on the native platform. If the agent replis privately, the consumer will get a direct message on the native platform.

The toggle default will change automatically according to the last consumer message. For example, if the last consumer message was public - the toggle will automatically change to public, and vice versa, and can be switched manually by the agent if necessary.

## [Social Messaging] My Conversations list channel indication 
### Type: Enhancement (SM 2.0)

The My Conversations list has been enhanced with a new icon with the conversation source, so that the agent will be able to identify the channel that the consumer is originating from.

The Facebook icon will be presented for each conversation originating from both public Facebook comments/posts, and for MEssenger conversations. The Twitter icon will be presented for both public tweets, and direct messages.

![](img/week-of-february-22nd-11.png)

## [Social Messaging] Enhance Facebook connector with Public capabilities
### Type: Enhancement (SM 2.0)

With the launch of Social Messaging 2.0, Facebook connector has been enhanced, and now supports the option to subscribe to Facebook pages, in order to receive new conversations into Conversational Cloud platform from public posts/comments made on the page.
This capability has been added under the Data Sources page, within the Facebook connector configuration page, and only valid to Social Messaging Customers. 

{: .notice}
**Please note:** This feature requires backend enablement. Please contact your LivePerson representative for more information.

![](img/week-of-february-22nd-12.png)

## [Third Party Bot Connectors] Conversation Tester 
### Type: Feature 

Brands can simulate a conversation with the bot to check its functionality via this feature. This feature will allow the user to see the bot in action and see how the connector accepts the responses. Brands will be able to identify issues in the bot flow as well as establish preemptively when the responses are misconfigured and will cause issues in the conversation with the consumers. 

The conversation tester gives feedback on the errors and what caused them allowing the Brand to troubleshoot and correct issues using bot response validator. The bot response validator will provide the basic information on what could be the reason for the bot error response with links to documentation on how to fix the issue.

#### How to enable
When the user will be on the Bot’s Dashboard in Third-Party Bots, in the bottom right corner an orange chat bubble will appear. The user can click to open a chat window with the bot and start testing the flow of the bot.

![](img/RN-third-party-bots-feb-22.png)

##  [Third Party Bot Connectors] IBM Watson endpoints deprecation 
### Type: Deprecation

Watson has decided to deprecate the old domain watsonplatform.net thus all the bots must be updated to reflect the new urls provided by IBM watson. The retirement for domain is 26 May 2021. We have encouraged everyone to edit the bot configuration as soon as possible to make sure all affected bots will run smoothly after the deprecation. For more information, click [here](https://cloud.ibm.com/docs/watson?topic=watson-endpoint-change)

## Off hours calculations incorrect and auto messages are being sent during working hours [UMS 4.1]
### Type: Bug fix
The fix allows to eliminate potential failures when an account makes an update on the work day manager and calendar configurations.
How to configure: Available out of the box. 

## Web conversations with unknown Operating System [UMS 4.1]
### Type: Bug fix
This fix implements a proper conversion of internal events when the device type is OSX.
How to configure: Available out of the box. 


