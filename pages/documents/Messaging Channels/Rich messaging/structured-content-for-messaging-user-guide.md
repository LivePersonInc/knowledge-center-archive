---
pagename: 'Structured content for messaging user guide '
categoryName: Messaging channels
subCategoryName: Rich messaging
indicator: messaging
subtitle: Agents are able to send structured content as simple cards or as a carousel,
  including text, images, maps and buttons to enhance the conversation with the consumer.
level3: ''
permalink: messaging-channels-rich-messaging-structured-content-for-messaging-user-guide.html
isTutorial: false
isNew: false
date: 2019-01-28 11:19:13 +0200

---
## Why use structured content?

Conversational commerce allows people to message with businesses anytime from anywhere without having to call or search a website. Structured content plays a big part in making  messaging richer and acts as a one stop shop for brands to drive more actions directly within in your messaging conversation.  
The LivePerson messaging solution allows brands to send messages in a variety of ways and formats. Agents are able to send structured content as simple cards or as a carousel (a list of cards), including text, images, maps and buttons, to enhance the conversation with the consumer. Our structured messaging templates allow you to build your own structured content, allowing agents to share cards, as well as ‘add to cart’, confirmation and deep linking buttons, turning a simple app interaction into a conversational user experience.

**Structured messages support a huge variety of messaging interactions and enable:**

* Improved sales through product promotion and simplification of the purchasing process.
* Improved service for customers with a number of use cases to help solve complex issues.
* Clearer communication with bots, so commands are more easily understood.
* The ability to trigger actions, such as deep-linking, geo-navigation, confirmations and transactions, directly from a conversation.
* Enhanced operational solutions.
* An overall improved and more efficient service - just what consumers expect from messaging.

## Structured content use cases

* Display product catalog to consumers helping with purchasing decisions
* Sending instructional videos to consumers helping complicated setup processes
* Sending maps to consumers to direct them to a restaurant
* Link pages within a conversation to a cart to enable purchasing for consumers
* When a consumer is struggling with a product or needs assistance with his settings, send rich media videos for explanations and walkthroughs.
* Expose a catalog of products to consumers so they can explore different colors, sizes, and styles of a product. They can book and order it right from the catalog card.
* Enablement to build solutions on top of structured content - Build custom solutions such as pre-chat or post-conversation surveys based on a collection of cards.

Structured content is available on our **mobile-app messaging**, **web messaging** and supported web messaging connectors. It is also available for **web chat** - for further information on configuring structured content for chat, please refer to the [documentation]().

## Capability highlights

The following examples are just a small selection of the huge variety of structured content messages that can be customized to bring rich content to messaging conversations. For a full list of structured content templates, please refer to the [Developer Community](https://developers.liveperson.com/structured-content-templates.html).

### Presenting options

The following structured content presents the consumer with three options to purchase an iPhone, including an image, free text element, and buttons.

![](/img/SC1 (1).png)

### Video link

Agents can share videos with consumers as structured content, to easily bring rich content to the conversation.

![](/img/SC2 (1).png)

### Geo-navigation

To help direct consumers to the right location - a local store, business or service - agents can send maps as structured content and include a link to navigate the consumer to the intended place. This example also uses the publishText action, allowing text to appear in the transcript when a button is clicked.

![](/img/SC3 (1).png)

### Deep linking

Deep linking allows brands to direct consumers to relevant pages within their app, meaning they can add items to cart, view their account page and navigate to specific services.

![](/img/SC4 (1).png)

### Product catalog

Product catalog allows brands to showcase specific products that a brand can provide service for or sell. It is possible to show between two and ten cards within the carousel.

xxx

## Enabling structured content

To build structured content for use on your messaging channels, we recommend working with your LivePerson team on the steps below. Follow the prerequisites and configuration steps in the [Developers Community](https://developers.liveperson.com/rich-messaging-structured-content-overview.html)

## Configuration

In order to enable the structured content via AC features and site settings, please contact your LivePerson representative.

### Prerequisites

* LE UI version 9.10
* LE VX (Unified Window) version 9.4
* Denver version 5.3

## Implementation guide

1. Define your use cases - structured content can be used for a variety of applications, including sales interactions, service provision, and operational solutions ([see use cases above]())
2. Plan and integrate content from your backend systems, such as images, product catalog, pricing, and service list. This will require you to set up communication between either the bot or an agent widget and your backend system. For example, you could have your bot draw pricing, images and product names from your CMS (content management system).
3. Determine if the structured content should be used for a human or virtual agent journey.
   * **Agent**: you will need to implement a new widget based on the [Agent Workspace Widget SDK](https://developers.liveperson.com/agent-workspace-sdk-overview.html). For further information, refer to the [Developer Communi](https://developers.liveperson.com/rich-messaging-structured-content-overview.html#agent)[ty.]()

![](/img/SC6 (1).jpg)

* **Virtual Agent**: you will need to implement a bot integration using the [Messaging Agent SDK](https://developers.liveperson.com/messaging-agent-sdk-overview.html). For further information, refer to the [Developer Community documentation](https://developers.liveperson.com/rich-messaging-structured-content-overview.html#virtual-agent).
* Break each of your identified use cases down into the following building elements:
  1. Journey flows - map out the flow for the structured content usage in case of a bot. This determines which cards to send first and the logic for follow-up cards based on consumer responses.
  2. Structured content format: cards, content, actions, UX - what type of structured content should be used? What should the user experience be?
  3. JSON scaffolding  
     You can set out the JSON structure that can be filled in with content from your backend systems. [Here’s a handy tool](https://agents-lp.github.io/strcutured-content-widget/index.html) for you to use in advance to build and render your structured content. For example, if you want to use three types of buttons, you’d first need to build their JSON skeleton. The same skeleton would apply for all use of the buttons, with only the content in each one changing from use case to use case.
* Create a JSON builder component to populate your JSON scaffolding. This tool can be constructed using your preferred method of development but needs to adhere to our structured content schema and model. structured content elements are static and are presented in a JSON model. The JSON schema and dictionary can be found in the [Developers’ Community](https://developers.liveperson.com/structured-content-templates.html).
* We recommend that brands use our JSON script validator [JSON Pollock](https://livepersoninc.github.io/json-pollock/editor/) in order to format the strings correctly before use. This validator, hosted on Github, can be shared with brands for this use.
* Plan your data model:
  1. When creating your data model, recommended best practice is to include a card ID in the metadata of each card. The metadata, ExternalID, can be passed in the header of each sent message. These IDs should 	be recorded in an external CMS. This is currently only possible when a bot is sending the structured 	content, it is not yet supported on the Agent Widget SDK.
  2. Define the metadata ExternalID that will be returned to LiveEngage when an element in the structured content is clicked. This is important for reporting on consumer interaction with the structured content element, as well as for bot activity. For further information, refer to the [Developer Community](https://developers.liveperson.com/rich-messaging-getting-started.html#metadata).
  3. Integrate your data model to benefit from full and detailed reporting, enabling you to assess the impact of structured content usage.

{: .notice}  
For detailed reporting on consumer interactions with structured content on your messaging channels, please contact your LivePerson account team. All the steps mentioned above are covered in detail on the [Developer's Community](https://developers.liveperson.com/rich-messaging-structured-content-overview.html).

## Notes

* The configured structured content responses available in the Agent Workspace can be sent by the agent to a consumer using any channel on which structured content is supported (web messaging and in-app messaging, as well as web chat).
* The host server of the images you wish to share in your structured content must be whitelisted in order for the structured content to send. Refer to the [configuration section](https://docs.google.com/document/d/16nsnuXBqXlPuGrOcX33mFwu05mGqZPkG_yw7DBvxm1Y/edit#heading=h.nh00pfcnfp7i) for guidance on whitelisting.
* Structured content is supported on Facebook and Apple Business Chat,  SMS will be supported in the future.
* When an agent sends a structured content message to a consumer, it will trigger a push notification. Brands are able to configure the content of the push notification. Refer to the [configuration section](https://docs.google.com/document/d/16nsnuXBqXlPuGrOcX33mFwu05mGqZPkG_yw7DBvxm1Y/edit#heading=h.nh00pfcnfp7i) for guidance on configuring push notifications.

## **Best practices**

1. It is recommended that brands use our JSON script validator [JSON Pollock](https://livepersoninc.github.io/json-pollock/editor/) in order to format the strings correctly before use. This validator, hosted on Github, can be shared with brands for this use.
2. When building your cards and actions, it is recommended to ensure that every click will also have a publishText action. This ensures that the click is “recorded” in the transcript and makes it easier for bots and agents to respond to consumer interactions with the card.
3. It is recommended not to add more than three or four buttons at the maximum per card, to avoid noise for the visitor.
4. Use high resolution images in your cards, verify them and their quality before you use the card for the first time and make sure your cards are interesting and aesthetically pleasing.
5. Don’t assign a navigate and a deep-link actions together, as they are mutually exclusive.
6. Use a carousel when there's a priority order to your content, i.e., the first item is probably the most interesting.
7. Strive for consistency. All cards within the carousel should have the same look and feel and the same business logic. If one card has an image, include an image in all of them.
8. Don't mix types of content. If you include an article next to a list of products, your experience could cause confusion.
9. Don't use a carousel when it's important that people see everything in the list. They may not scroll to the end. Consider creating a List instead (a [structured content card](http://localhost:4000/rich-messaging-structured-content-card.html) with vertical elements and click operations).

## **Limitations**

### Maps

Both the web window (visitor side) and the workspace (agent side) do not show map by user-specific location but instead shows a static snapshot, the default map view defined.

### Styling

**Mobile:**

Some parameters can be configured in Bubble branding when using the In-App SDK. All other attributes are inherited from the SDK configuration.  
See documentation: [iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-attributes.html#structured-content) and [Android](https://developers.liveperson.com/android-attributes.html#structured-content)

Structured content JSON affects text formatting in the structured content “Text” element. Only the following parameters can be configured for the "Text" element:

1. Font size
2. Font style (Italic, Bold)
3. Font color
4. Background color

**Web (chat / messaging)**

You cannot customize the branding of the structured content bubble in the web window view. Cards may be branded using the JSON schema only.

## **Helpful Links**

Structured content JSON playground - [https://livepersoninc.github.io/json-pollock/editor/](https://livepersoninc.github.io/json-pollock/editor/ "https://livepersoninc.github.io/json-pollock/editor/")

Structured content taglet - [https://agents-lp.github.io/strcutured-content-widget/index.html](https://agents-lp.github.io/strcutured-content-widget/index.html "https://agents-lp.github.io/strcutured-content-widget/index.html")

Example content to JSON Scraper - [https://lpgithub.dev.lprnd.net/dtucker/TS-NA-StructuredContentScraperMSStore](https://lpgithub.dev.lprnd.net/dtucker/TS-NA-StructuredContentScraperMSStore "https://lpgithub.dev.lprnd.net/dtucker/TS-NA-StructuredContentScraperMSStore")

[Structured Content Developer Community](https://developers.liveperson.com/rich-messaging-structured-content-complex-layout.html)