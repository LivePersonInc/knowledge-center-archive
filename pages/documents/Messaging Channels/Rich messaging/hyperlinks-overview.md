---
pagename: Hyperlinks overview
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-rich-messaging-hyperlinks-overview.html
isTutorial: false
isNew: false

---

## Introduction

Users using the enhanced agent workspace have the ability to share hyperlinks with consumers during a messaging conversation. In order to do so, a hyperlink button has been added above the agent input area, allowing agents to define the link text and URL:

![](hyperlinks-overview-1.png)

After filling in the data and pressing OK, the agent will be able to share the hyperlink with the consumer, as part of the general message.

Within the agent input area, the hyperlink will appear in blue and underlined, to indicate that it is a hyperlink and the agent will be able to edit it as long as the message was not sent yet. 

![](hyperlinks-overview-2.png)

After sending the message to the consumer, the link will appear underlined as well in the transcript area. The link will be clickable for the agent via the agent workspace:

![](hyperlinks-overview-3.png)

The consumer experience will be identical, and the hyperlink will be displayed as a clickable text within the conversation window:

![](hyperlinks-overview-4.png)

## Enablement 

To enable hyperlink support for your account, please contact your LivePerson representative.

## Use cases 

### Sending links through Predefined Content 

To add links to Predefined Content, use the HTML tag for hyperlinks. 

For example: 
![](hyperlinks-overview-5.png)

Generally HTML elements can be integrated into Predefined Content entries. Chat and messaging visitors will receive the content with the HTML formatting.

### Sending Hyperlinks through bots and automatic messages

Hyperlinks for messaging are implemented using markdown language.

In order to add hyperlinks to bots (such as Post Conversation Survey bot or other bots using  the Conversation Builder) and automatic messages with hyperlinks, you should use the following markdown language syntax: #md#[LINK](LINK_TEXT)#/md#

For example:
#md#[http://liveperson.com](Liveperson website)#/md#
In runtime, the link will be displayed to the consumer as a clickable link. 

## Supported sources

**For now, the only supported source is web messaging, including mobile web messaging.** For consumers using mobile app messaging or other channels, hyperlinks are not supported. The hyperlink button will not be displayed for conversations originating from unsupported sources.

## Limitations

When working with hyperlinks, you should consider the following limitation: 
* Since consumers may start conversations from web messaging and continue their messaging interaction from the mobile app, brands should be aware of the fact that links will not be displayed for mobile consumers. 
