---
pagename: Features
categoryName: Messaging channels
subCategoryName: Apple Business Chat
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-apple-business-chat-features.html
isTutorial: false
isNew: false
date: 2020-08-18 14:38:05 +0000
---

## List Picker

List Picker is a simple Business Chat UI component that makes it easy to display a list of items and have the user make a selection from the list. It is set up in Conversational Cloud using [structured content](messaging-channels-rich-conversations-structured-content-for-messaging-user-guide.html)-- which supports a variety of messaging interactions to enable enhanced and clearer communication-- and is able to be sent either by a human or automated agent. Structured content plays a vital role in Rich Messaging and allows brands to encourage customer action directly within the conversation. The List Picker serves different purposes and can be configured to be **static** or **dynamic**, depending on the use case. The use of List Pickers is highly recommended in Apple Business Chat configuration to provide customers a quick way to tap to make choices, rather than typing.  It also helps create the level of richness that meets Apple’s standards. 

### Static List Pickers

A Static List Picker is a simple configuration that offers the same choice to all customers entering a conversation. They are most useful for simple routing, such as query type and CSAT rating. For static pickers, bots or agents have a simple set of predefined lists that can be sent out at the start of or during the conversation. Static pickers require low configuration effort by either the business or LivePerson resources.  

### Static List Picker for skill routing

The most basic and ubiquitous use of a List Picker is in collecting customer intent and routing the conversation to the appropriate skills. The Routing List Picker makes it easy for customers to express their intent and for the agent to quickly recognize the customer’s needs. In doing this, we encourage brands to analyze the top reasons why customers contact their business. These contact drivers should then inform the key intents to be included in the Routing List Picker. Below is an example of this simple List Picker interaction. 

![](img/business-chat-features-1.png)

### Dynamic List Pickers

Dynamic pickers add value and can help to reduce handle times by allowing agents to easily find and present relevant choices to the consumer. Their configuration, however, requires a heavier lift with integration to the brand’s backend system. Dynamic List Pickers pull a list of items from a brand’s back-end data source or API. It can be served to the customer in two ways: (1) automatically, based on the context of the conversation or (2) manually, with an agent physically searching for items to add to the picker in an agent widget.  

### When to use a List Picker

Use a List Picker whenever you have a set of items from which the user is expected to make a selection. Example applications could include: 
* Selecting a help query in the beginning of the conversation (via Static Routing List Picker)
* Product/service selection from a list of inventory items. This is best configured as a Dynamic List Picker with integration to your backend systems. 
* Selection of name or store locations for an in-store product purchase.  

### Implementing a List Picker

Sending a List Picker interactive message through Conversational Cloud’s Agent Workspace is supported through the Conversational Cloud Structured Content framework. This means that the business or their account team will configure a structured content JSON schema (in list structure) via the Conversational Cloud [agent widgets](https://developers.liveperson.com/agent-workspace-sdk-overview.html) (for live agent use cases) or via the [Messaging Agent SDK](https://developers.liveperson.com/messaging-agent-sdk-overview.html) (for bot use cases). The LivePerson Messaging Gateway handles the transferring of the structured content JSON to the Business Chat List Picker payload, which is received by consumers.  

When configuring a List Picker, the following capabilities are supported:
 
* **Item information** - ability to add item name, description, image
* **Item sections** - ability to divide your list of items into sections based on the list categories.
* **Multi-selection** - ability to allow customers to select multiple items under multiple sections. Brands can decide to turn multi-selection on for all of the sections.
* **receivedMessage and replyMessage bubble style structures** - ability to define the templates for the bubbles that are received by the consumer on the Business Chat thread, and replied to.
* **Use of metadata properties** - ability to define the received and reply bubble structures and enable multi-selection capabilities.

### List Picker structure

The List Picker template consists of elements that the business can define. Below is a high-level anatomy of the List Picker. To learn more on how to configure the List Picker structure, check out our [Developer's guide on the List Picker template](https://developers.liveperson.com/apple-business-chat-templates-list-picker-template.html).

![](img/business-chat-features-2.png)

**List Picker Icon Images Spec**
* Icon Images must be compatible with light and dark mode. 
* Dimensions: 60px x 60px @3x

**receivedMessage** is a Business Chat message object which defines how the message bubble will be displayed when the message is received on the customer’s device.

![](img/business-chat-features-3.png)

**replyMessage** is a Business Chat message object which defines how the message bubble will be displayed once the message is submitted by the customer. 

![](img/business-chat-features-4.png)

**Note:** The same fields can be defined for both received and reply.

| # | Name | Description | Required |
| ----------- | ----------- | ----------- | ----------- |
| 1 | title | The title of the bubble | No |
| 2 | subtitle | Subtitle to be displayed under title | No |
| 3 | imageURL | Image to be placed in the interactive message reply message bubble layout | No |

## Rich Links

A rich link is a URL sent to the customer in a chat bubble that includes an image or a video. It is a great way to provide customers with a great visual experience on the Messaging app that is akin to Apple’s standard. When the customer taps on the image or video, it then opens the link of the website. Sending rich links is a minimum requirement by Apple. URLs sent without using rich links are “untrusted,” and display a grey “Tap to Load Preview” bubble for the customer as a warning. Businesses are expected to have both chatbots and human agents send rich links to customers to avoid inline hyperlinks and/or ‘tap-to-load’ preview links which offer a poorer experience. 

URL sent as ‘Tap to Load’ preview:
![](img/business-chat-features-5.png)


URL sent as a Rich Link:
![](img/business-chat-features-6.png)

**Note:** At minimum, rich links are required in Apple Business Chat project implementations. 

### Rich Link Generator Widget for Agents

Businesses that want to launch Apple Business Chat are **required** to add LivePerson’s proprietary Rich Link Generator widget within the agent console. When an agent wants to direct customers to a specific web page link during an Apple Business Chat based conversation, they can use the widget to send it as a rich link. The Rich Link Generator scrapes the website URL for an OG tag and uses this image in the chat bubble. Using the widget will ensure that the rich link includes a **preview image, bubble title, and Link URL**. 

Here are the three components of a rich link:
![](img/business-chat-features-7.png)
