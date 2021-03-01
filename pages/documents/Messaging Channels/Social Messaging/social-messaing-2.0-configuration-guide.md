---
pagename: Social Messaging configuration guide
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle:
level3: ''
permalink: messaging-channels-social-messaging-social-messaging-configuration-guide.html
isTutorial: false
isNew: false
---

## Introduction 

Social Messaging extends LivePerson’s industry-leading conversational commerce platform, AI and automation capabilities, and multi-decade expertise in connecting brands with customers, into the world of social media.

Social Messaging enables brands to interact with consumers over Twitter and Facebook through the Conversational Cloud. For each new channel, conversations can take place both in public (on Twitter Tweets that mention the brand, and Facebook Page posts and comments), in private (Twitter direct messages and Facebook Messenger), or a mix of public and private messaging in the same conversation. The following guide outlines how to configure Social Messaging 2.0.  

## Prerequesites  

* **Messaging:** Messaging must be enabled on your Conversational Cloud account (NOTE: This change will not require you to move from Chat to Messaging).

## Social Messaging 2.0 Features

<iframe src="https://player.vimeo.com/video/515803887/3a9d55f92f?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/515803887/3a9d55f92f">Social Messaging 2.0</a> from <a href="https://vimeo.com/liveperson">LivePerson</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Social Messaging 2.0 includes the following features and benefits: 
* **Single interface for all messaging conversations:** Agents handle social media in the same easy way as they use Conversational Cloud for all other messaging conversations, meaning the same set of agents can support social media while they simultaneously support other messaging channels. 
* **Channel indication:** The My Conversations list has been enhanced with a new icon with the conversation source, so that the agent will be able to identify the channel that the consumer is originating from.
* **New Social Messaging widget:** A new core widget is now available for all Social Messaging conversations. 
  * View Consumer Profile - View the publicly available social media profile of the consumer you’re interacting with from within Conversational Cloud
  * Clear context for the conversation - View the consumer post from within the Conversational Cloud, nested under its parent post, to have a clear context about the consumer topic
* **Reply to specific consumer messages:** Agents have the ability to reply to a specific consumer message, to ensure that consumers are getting relevant replies to each of their posts.
* **Public to Private:** Quickly transition conversations from public social media to private by simply clicking the “Public to Private” button, which sends a call to action button for the consumer to select. 
* **Mention consumer in reply:** Agents will be able to mention consumers with their Facebook username in their replies, so that consumers will get a notification that they have been mentioned by the brand in the native platform.

![](img/social-messaging-configuration-1.png)

## Considerations and limitations 

* Supported sources: Twitter, Facebook
* Once enabled on your Conversational Cloud account, the Social Messaging widget will appear for all Facebook/Twitter conversations - even if they originate from Facebook Messenger or Twitter direct messaging. 
* File sharing is not officially supported in Social Messaging public conversations. **Note:** It is not recommended to use file sharing on Social conversations until officially supported.
* Rich Content is not officially supported in Social Messaging conversations. Rich content (e.g structured contents, cards etc.) may not be presented correctly in the Agent Workspace. **Note:** It is not recommended to use rich content on Social conversations until officially supported.
* Bots and Automatic messages are not officially supported in Social Messaging public conversations. If a bot is configured on your Conversational Cloud account, it may send public messages to consumers. This behaviour is not desirable, since this may be considered spam by Facebook/Twitter. A future fix for this issue will prevent bots from replying publicly to consumer messages.  **Note:** It is not recommended to use bots with any Social conversations until officially supported.
* Navigating to “All Conversations” list, then navigating back to “My Conversations” list, may cause the Social Messaging buttons disappear (buttons: public/private toggle, link to DM, mention consumer). This is solved on page refresh, or focusing on a different conversation. **Note:** If you experience this bug, refresh your page, or navigate to a different conversation, then back to the conversation you need to reply to.
* Facebook limitations: 
  * [Facebook Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies) are currently not supported.
  * European users: As part of Facebook’s efforts to comply with privacy rules in Europe, Facebook made changes to their APIs and restricted some information. European users will see the Social Messaging widget, however, the user information (Name, Image, Locale, Timezone) will not be shown.
* Intent Manager does not support Twitter conversations. 
* Social Messaigng 1.0 customers: 
  * The source icon displayed on the “My Conversations” list now displays the “Twitter” icon for all conversations, even conversations originating from Facebook. This is caused by the fact that the current Social Messaging connector will only be supporting Twitter conversations soon, and Social conversations on Facebook will be managed through the Facebook connector. 




