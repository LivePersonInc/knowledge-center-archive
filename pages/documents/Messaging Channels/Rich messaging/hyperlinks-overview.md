---
pagename: Hyperlinks overview
categoryName: Messaging channels
subCategoryName: Rich Conversations
indicator: messaging
subtitle:
level3: ''
permalink: messaging-channels-rich-conversations-hyperlinks-overview.html
isTutorial: false
isNew: false
redirect_from:
  - messaging-channels-rich-messaging-hyperlinks-overview.html
---

{: .notice}
**Please note:** This capability is only available for the enhanced Agent Workspace.

## Introduction

Users using the enhanced Agent Workspace have the ability to share hyperlinks with consumers during a messaging conversation. In order to do so, a hyperlink button has been added above the agent input area, allowing agents to define the link text and URL:

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/hyperlinks-overview-1.png)

After filling in the data and pressing OK, the agent will be able to share the hyperlink with the consumer, as part of the general message.

Within the agent input area, the hyperlink will appear in blue and underlined, to indicate that it is a hyperlink and the agent will be able to edit it as long as the message was not sent yet.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/hyperlinks-overview-2.png)

After sending the message to the consumer, the link will appear underlined as well in the transcript area. The link will be clickable for the agent via the Agent Workspace:

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/hyperlinks-overview-3.png)

The consumer experience will be identical, and the hyperlink will be displayed as a clickable text within the conversation window:

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/hyperlinks-overview-4.png)
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/HyperlinksSDK.png)

## Enablement

To enable hyperlink support for your account, please contact your LivePerson representative.

## Mobile SDK Hyperlink Configuring 
The Mobile SDK supports changing the link text color as part of the SDK configuration file. These are the attributes elements for Android:

### Android
Lp_markdown_hyperlink_copy_text_only
Define the copy content of a link message. Copying the message will copy both message and hyperlink. Only the message will be copied if set to true.
Type: bool
Default value: false

Agent_bubble_message_markdown_hyperlink_text_color
Set the link message text color.
Type: color
Default value: @android:color/white

Note: iOS in to be determined shortly

## Use cases

### Sending links through Predefined Content

To add links to Predefined Content, use the HTML tag for hyperlinks.

For example:
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/hyperlinks-overview-5.png)

Generally HTML elements can be integrated into Predefined Content entries. Chat and messaging visitors will receive the content with the HTML formatting.

### Sending Hyperlinks through bots and Automatic Messages

Hyperlinks for messaging are implemented using markdown language.

In order to add hyperlinks to bots (such as Post Conversation Survey bot or other bots using  the Conversation Builder) and Automatic Messages with hyperlinks, you should use the following markdown language syntax: 
```#md#[Hyperlink_Description](Hyperlink_URL)#/md#```

For example:
```#md#[Liveperson Page](https://www.liveperson.com)#/md#```
In runtime, the link will be displayed to the consumer as a clickable link.

## Supported sources
For now, the only supported source is Web and Mobile App Messaging, including mobile Web Messaging
For consumers using connectors channels, hyperlinks are not supported. The hyperlink button will not be displayed for conversations originating from unsupported sources.

