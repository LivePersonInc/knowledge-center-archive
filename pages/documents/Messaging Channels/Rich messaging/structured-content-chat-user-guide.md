---
pagename: Structured content for chat user guide
categoryName: Messaging channels
subCategoryName: Rich messaging
indicator: chat
subtitle: Agents are able to send structured content cards including text, images,
  maps and buttons, to enhance the conversation with the consumer
level3: ''
permalink: messaging-channels-rich-messaging-structured-content-for-chat-user-guide.html
isTutorial: false
isNew: false
date: 2019-01-28 12:08:32 +0000

---
## Why chat needs structured content?

Conversational commerce allows people to message with businesses anytime from anywhere without having to call or search a website. Structured content plays a big part in making  messaging richer and acts as a one stop shop for brands to drive more actions directly within in your messaging conversation.

The LivePerson chat solution allows brands to chat with consumers in a variety of ways and formats. Agents are able to send structured content cards or as a carousel (a list of cards), including text, images, maps and buttons, to enhance the conversation with the consumer. Our structured content templates allow you to build your own structured content, allowing agents to share cards, as well as ‘add to cart’, confirmation and deep linking buttons, turning a simple chat interaction into a conversational user experience.

**Structured messages support a huge variety of chat interactions and enable:**

* Improved sales through product promotion and simplification of the purchasing process.
* Improved service for customers with a number of use cases to help solve complex issues.
* The ability to trigger actions, such as deep-linking, geo-navigation, confirmations and transactions, directly from a conversation.
* Enhanced operational solutions.
* An overall improved and more efficient service - just what consumers expect from chat.

## Structured content use cases

* Display product catalog to consumers helping with purchasing decisions
* Sending instructional videos to consumers helping complicated setup processes
* Sending maps to consumers to direct them to a restaurant
* Link pages within a conversation to a cart to enable purchasing for consumers
* When a consumer is struggling with a product or needs assistance with his settings, send rich media videos for explanations and walkthroughs.
* Expose a catalog of products to consumers so they can explore different colors, sizes, and styles of a product. They can book and order it right from the catalog card.
* Enablement to build solutions on top of structured content - Build custom solutions such as pre-chat or post-chat surveys based on a collection of cards.

Structured content is available on our web-chat channel. It is also available for web messaging and in-app messaging.

## Capability highlights

The following examples are just a small selection of the huge variety of structured content messages that can be customized to bring rich content to messaging conversations. For a full list of structured content templates, please refer to the [Developer Community](https://developers.liveperson.com/structured-content-templates.html).

### Presenting options

The following structured content presents the consumer with three options to purchase an iPhone, including an image, free text element, and buttons.

![](/img/SCC1 (1).png)

### Video link

Agents can share videos with consumers as structured content, to easily bring rich content to the conversation.

![](/img/SCC2__1_.png)

### Geo-Navigation

To help direct consumers to the right location - a local store, business or service - agents can send maps as structured content and include a link to navigate the consumer to the intended place. This example also uses the publishText action, allowing text to appear in the transcript when a button is clicked.

![](/img/SCC3 (1).png)

### Deep linking

Deep linking allows brands to direct consumers to relevant pages within their app, meaning they can add items to cart, view their account page and navigate to specific services.

![](/img/SCC7 (1).png)

### Product catalog

Product catalog allows brands to showcase specific products that a brand can provide service for or sell. It is possible to show between two and ten cards within the carousel.

![](/img/Screen_Shot_2019-01-28_at_2.12.46_PM.png)

## Enabling structured content

To build structured content for use on web chat, we recommend working with your LivePerson team on the steps below. Follow the prerequisites and configuration steps in the [Developers Community](https://developers.liveperson.com/rich-messaging-structured-content-overview.html).

### Prerequisites

* LE UI version 9.10
* LE VX (Unified Window) version 9.4
* Denver version 5.3

### Configuration

In order to enable the feature via AC features and site settings, please contact your LivePerson representative.

## Implementation

For information on implementation, [click here](messaging-channels-rich-messaging-structured-content-for-messaging-user-guide.html#implementation-guide)

**{: .notice}  
**For Live Chat you cannot customize the branding of the structured content bubble in the web window view. Cards may be branded using the JSON schema only.

## Helpful links

Structured content JSON playground - [https://livepersoninc.github.io/json-pollock/editor/](https://livepersoninc.github.io/json-pollock/editor/ "https://livepersoninc.github.io/json-pollock/editor/")

Structured content taglet - [https://agents-lp.github.io/strcutured-content-widget/index.html](https://agents-lp.github.io/strcutured-content-widget/index.html "https://agents-lp.github.io/strcutured-content-widget/index.html")

Example content to JSON Scraper - [https://lpgithub.dev.lprnd.net/dtucker/TS-NA-StructuredContentScraperMSStore](https://lpgithub.dev.lprnd.net/dtucker/TS-NA-StructuredContentScraperMSStore "https://lpgithub.dev.lprnd.net/dtucker/TS-NA-StructuredContentScraperMSStore")

[Structured Content Developer Community](https://developers.liveperson.com/rich-messaging-structured-content-complex-layout.html)