---
pagename: Latest what's new
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Highlights of April 2021
level3: ''
permalink: whats-new-latest-whats-new.html
isTutorial: false
isNew: false
---

Watch this short video to see new features coming in the weeks ahead. 

<iframe src="https://player.vimeo.com/video/539109926" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Performance Optimizer Intent Panel 
The new Performance Optimizer Intent Panel creates an intent-focused view. It answers the question of how effectively an operation resolves its consumers’ intents, the customer experience impact, and provides clear and simple view(s) that prioritize areas of opportunity. It also provides clear action items to optimize the intent and operational performance.  These views will enable a Performance Optimizer user to understand the intent mix and nature of primary contact drivers into the operation and their evolution over time, while identifying intents suitable for automation, increasing efficiency and reducing operational expenditures. 

There are 3 primary components to the Intent Panel: 
* A heatmap graphic that will visually prioritize automation opportunities by intent 
* Automated text that contextualizes 4E performance by intent performance 
* Intent classification metrics and graphics 

The Intent Panel allows users to view the following metrics within the heatmap by intent for the LOB(s) selected: 
* Closed Conversations
* Closed Conversations % of Total
* Avg. Conversation Duration
* Agent Responses Per Closed Conversation
* MCS (normalized 1-100)

The Intent graphics shows the metrics below for the LOB(s) selected:
* Intentful Rate
* Classification Rate
* Total Messages
* Intentful Messages
* Classified Messages
* Unclassified Messages

The automated Intent Diagnostics section will include text that will contextualize performance and provide specific recommendations to improve performance leveraging intent data. For more information, click [here] (https://knowledge.liveperson.com/data-reporting-performance-optimizer-performance-optimizer-user-guide.html)

![](img/PO-Intent-panel.png)

### Updates to Proactive Messaging

## Customer SDE Support for Proactive 
Customer SDE Support for Proactive Messaging  allows brands to start sending customer information in the outbound message via our API, such as customer name, case ID, order ID. These attributes will only be visible to the agents when the consumer responds to the outbound message, to provide a better conversational experience for agents. Please note that this feature will be available in the Proactive API only and not available for the Proactive Web Tool. 

## Scheduling capabilities for Proactive
New scheduling capabilities enable brands to schedule outbound campaigns through an API for a future date and time. This feature also gives brands the ability to specify and control the number of recipients per outbound campaign in the range of 1000, 10K, 20K, 30K, 50K and 100K respectively.

## Support Call to Action for Rich WhatsApp Message Templates
New functionality to support Call-To-Action buttons when sending outbound messages using rich WhatsApp Message Templates. This functionality enables consumers to call agents directly, perform purchases or make reservations.

## Proactive App Messaging analytics
Outbound Reporting 2.0 API will include the following metrics for the Proactive to App Messaging channel (in addition to SMS and WhatsApp): number of outbound messages sent, delivered, read by the consumer, replied to, and outbound message failure reasons. 

## Apple Pay enhancements
Brands can programmatically insert product cart information that’s retrieved from an API call:
Items that will be called include:
* Item name/price & total - This may be expressed using a botContext or integration variable
* Item name/price - This may be expressed using an array enumerator (iterate over a list and populate with the results)
In addition, the new Account Signature field is an optional feature and allows for the account signature to be generated and added as a part of the request, for extra validation. The field stores a signed hash of the merchant session payload.
The hash is sent as part of the structured content request to the connector, which validates it and rejects it if invalid. This feature is only needed for accounts using this sign/validate flow.

![](img/Payments using Apple Pay.gif)

## Updates to Agent App
Agent App v2.6.9 brings UI changes to the conversation page, allowing quicker access to information and structured content. Agents can now change their password and a ‘forgot password’ link is provided on the login page. 

For Agent Managers and Admins using the app on a tablet, the ability to switch between the Agent Workspace and User Manager is now shown below the conversation list. 

In addition, Agents can send files in conversations, edit consumer names, Agent Managers can change the photos of agents, and Twitter is fully supported.

### Connect to Messaging Enhancements

## IVR to App Messaging - Analytics
Outbound Reporting 2.0 API will include the following metrics for Connect to Messaging for the App Messaging channel (in addition to SMS and WhatsApp channels). Metrics include the number of IVR deflections sent, delivered, read by the consumer, replied to and outbound message failure reasons.

## Reporting Analytics UI overview Dashboard
The Connect to Messaging webtool will have an Analytics UI page. This page will include a full spectrum of pre and post conversation events in the overview full funnel dashboard. Full funnel metrics include total IVR deflections sent, delivered, read by the consumer, replied to and outbound message failure reasons.   

## Customer SDE Support for C2M 
Connect to Messaging will allow brands to report on Engagement Attributes for a complete and contextual Connect to Messaging conversational flow. The Connect to Messaging API enables brands to report additional information about the consumer and can send visitors rich context information to agents for better serving the consumers. 
 
## Voice and Video calls via Mobile SDK Android version
Through your brand’s mobile app, agents can invite consumers to video and voice calls during a messaging conversation. 
The video or voice call will be facilitated within the messaging interface - via webview container - and will allow the consumer to have an embedded experience of a video or voice call during an Android messaging conversation.
Voice and Video calls via Mobile iOS SDK was delivered in March.

## Push notification support for Android Doze and Standby Mode
Android (Android 6.0 / API level 23) introduces two power-saving features that extend battery life for users by managing how apps behave when a device is not connected to a power source.
Doze mode reduces battery consumption by deferring background CPU and network activity for apps when the device is unused for long periods of time, and App Standby mode defers background network activity for apps with which the user has not recently interacted. 
To support both these modes, our LivePerson pusher will allow brands to utilize FCM high priority messages in order to have full control over the availability and display of the push notification on the consumer's device.

### Personalized Web Messaging Experience 
## Personalized Engagement (taglets) and First Message based on Adobe Response Tokens
LivePerson is launching a taglet solution that utilizes Adobe Response Tokens on a web page and executes custom engagement and first message text, as well as maps engagement attributes data, to display personalized engagements.

## Next Best Conversation (NBC)
Next Best Conversation is the ability to utilize consumer segmentation and visitor behavior to present targeted and personalized engagements to consumers. It’s all about delivering the right engagement on the right channel with the right message at the right time to increase engagement click-through rate, interactive conversations, and conversion rate of a consumer.

## Accessibility support in Structured Content and Quick Replies JSON 
Brands can add accessibility elements (aria labels, etc.) to their JSON files that present structured content and quick replies in the web window. By adding these elements, brands can make their rich content meet WCAG 2.1 AA standards.
Accessibility remediation for Core Window and default themes
Remediation of the web window, action menu, text area, and window widgets as we pursue WCAG 2.1 AA certification.

## Entry Point support and additional context for Google My Business [Connectors] 
The entry points for Google My Business conversations will be published to map the source where they originated from and map it to one of the engagement attributes in the customer info.
Additionally, when brands receive messages from conversations opened from a URL that includes “&ctx=xyz”, the Conversational Cloud Agent Workspace would display “xyz” as the X engagement attribute value. This can be used for skill routing, or bot and agent context.


