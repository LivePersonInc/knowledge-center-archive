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

Social Messaging enables brands to interact with consumers over Twitter and Facebook through the Conversational Cloud. For each new channel, conversations can take place both in public (on Twitter Tweets that mention the brand, and Facebook Page posts and comments), in private (Twitter direct messages and Facebook Messenger), or a mix of public and private messaging in the same conversation. **The following guide outlines the features included and enablement details of Social Messaging 2.0.**

## Prerequesites  

* **Messaging:** Messaging must be enabled on your Conversational Cloud account (NOTE: This change will not require you to move from Chat to Messaging).

## Social Messaging 2.0 Features

Social Messaging 2.0 includes the following [features and benefits](https://vimeo.com/515803887/3a9d55f92f): 
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
* **File sharing** is not officially supported in Social Messaging public conversations. **Note:** It is not recommended to use file sharing on Social conversations until officially supported.
* **Rich Content** is not officially supported in Social Messaging conversations. Rich content (e.g structured contents, cards etc.) may not be presented correctly in the Agent Workspace. **Note:** It is not recommended to use rich content on Social conversations until officially supported.
* **Bots and Automatic messages** are only supported in the private space, and are not able to send public messages.
* **Intent Manager** does not support Twitter conversations. 
* **Facebook limitations:** 
  * [Facebook Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies) are currently not supported.
  * European users: As part of Facebook’s efforts to comply with privacy rules in Europe, Facebook made changes to their APIs and restricted some information. European users will see the Social Messaging widget, however, the user information (Name, Image, Locale, Timezone) will not be shown.
  * In the new Social Messaging widget, there’s an option to Like a public comment/post of the consumer. If an agent is logged in with his private Facebook account is pressing the like button - it likes the post under his private account.
* **Additional known issues:**
* * Navigating to “All Conversations” list, then navigating back to “My Conversations” list, may cause the Social Messaging buttons disappear (buttons: public/private toggle, link to DM, mention consumer). This is solved on page refresh, or focusing on a different conversation. **Note:** If you experience this bug, refresh your page, or navigate to a different conversation, then back to the conversation you need to reply to.
* * The public/private toggle button is not activated if the consumer has responded both publicly and privately in the conversation, until page refresh/select a different conversation and return to the current one.
* * Conversation source is not presented under the “All Conversations” table for Twitter.

* **Social Messaigng 1.0 customers:** 
  * The source icon displayed on the “My Conversations” list now displays the “Twitter” icon for all conversations, even conversations originating from Facebook. This is caused by the fact that the current Social Messaging connector will only be supporting Twitter conversations soon, and Social conversations on Facebook will be managed through the Facebook connector. 

## Configuration steps 

**Step 1: Enable Social Messaging on your Conversational Cloud account** - Contact your LivePerson representative in order to enable the feature on your Conversational Cloud account.

**Step 2: Configure connectors and social media accounts** - Follow the below steps in order to enable Facebook or Twitter for your account. 

### Facebook 

#### For Conversational Cloud accounts with no Facebook connector configured: 

1. [Enable Facebook as a data source](getting-started-quick-start-guides-facebook-messenger-quick-start.html) on your Conversational Cloud account
* Once done, the list of all subscribed Facebook pages will be displayed
* Each consumer private message (on Messenger) originating from any of these pages will generate a conversation in the Conversational Cloud
2. Enable public capabilities: If you would like to receive conversations for any public message or comment on any of these pages as well, enable the toggle button under the "Public" column for the relevant pages.

![](img/social-messaging-configuration-2.png)

#### For Conversational Cloud accounts with Facebook connector configured: 

1. Go to Data Source page -> Facebook Messenger → Edit
![](img/social-messaging-configuration-3.png)

{:start="2"}
2. Press “Next”, to get to the Facebook configuration page
3. Enable the toggle button under the "Public" column, for the relevant Facebook pages.
![](img/social-messaging-configuration-4.png)

{:start="4"}
4. Click on the Facebook login button, and authenticate
![](img/social-messaging-configuration-5.png)

{:start="5"}
5. Click on the “Edit settings” button 
![](img/social-messaging-configuration-6.png)

{:start="6"}
6. Select the desired pages, and press “Next”
![](img/social-messaging-configuration-7.png)

{:start="7"}
7. Confirm the needed permissions, by pressing “Done”
![](img/social-messaging-configuration-8.png)

{:start="8"}
8. A window will be presented, with all connected Facebook accounts
![](img/social-messaging-configuration-9.png)

{:start="9"}
9. In order to make sure you are subscribed to the correct public events, you will need to unsubscribe from all pages (by clicking “Unsubscribe” per each page), then subscribe again
![](img/social-messaging-configuration-10.png)

{:start="10"}
10. Press Done

### Twitter

1. Go to the Campaign Builder → “Data Sources” → “Social Messaging” (alternatively you can select “Social Messaging” from the Quick Launch Menu) 
![](img/social-messaging-configuration-11.png)

{:start="2"}
2. Add new accounts by selecting the “Connect” button → Choose “Twitter account”
![](img/social-messaging-configuration-12.png)

{:start="3"}
3. Log into Twitter utilizing the brand’s Twitter account credentials
4. After logging in, select “Authorize App” to connect with Social Messaging
![](img/social-messaging-configuration-13.png)

{:start="5"}
5. Once the authorization is done, all Twitter accounts associated with the provided login credentials will be automatically displayed on the “Social Accounts” page.
6. Each consumer direct message to any of these accounts or a public Tweet which contains any of these accounts handles, will generate a conversation in the Conversational Cloud

{: .important}
**Note:** Do not use the Social Messaging connector for Facebook conversations.

### Optional configuration steps (for all customers)

#### Configure Skill Routing

Skill routing can be achieved in 2 different ways: 

1. Direct skill routing (valid for both Twitter and Facebook):
Direct skill routing can be defined based on your Facebook page ID / Twitter account ID, or based on the conversation source - public (post/comment/tweet) or private (Facebook Messenger or Twitter direct messaging). 
Contact your LivePerson representative to define the routing rules. 

2. Campaign/Engagement Message Routing (only valid for Twitter connector)
 * Select the Campaign Builder tab in the Conversational Cloud
 * Select “Data Sources”
 * Select “Integrations” tab
 * Select “Authentication Server - Configure” (skip if brand already has authentication)
![](img/social-messaging-configuration-17.png)

  * Select “oAuth 2.0 authentication (implicit)”
![](img/social-messaging-configuration-18.png)

  * Input fake data into fields
![](img/social-messaging-configuration-19.png)

  * Select “Save” on the bottom of the screen
  * Select “+ Add campaign” on the bottom of the screen
  * Title the new campaign “Social”
  * Select “+ Add engagement”
  * Select “Social”
    * Select “Specific skill” 
    * Search for and select the Social Skills you created 

## Unsubscribe from Facebook pages/Twitter accounts

### Edit/Unsubscribe from Facebook pages

* Click on the Facebook login button, and authenticate
![](img/social-messaging-configuration-21.png)

* To edit account settings: Click on the “Edit settings” button
![](img/social-messaging-configuration-22.png)

* Select the desired pages and press “Next”
![](img/social-messaging-configuration-23.png)

* Enable/Disable permissions using the toggle button
![](img/social-messaging-configuration-24.png)

* Press Done. A window will be presented, with all connected Facebook accounts: 
![](img/social-messaging-configuration-25.png)

* To unsubscribe specific pages, simply click on the “Unsubscribe” button next to each Facebook page you wish to remove. 

### Edit/Unsubscribe from Twitter accounts

* Edit each account’s settings by clicking on the pencil icon, at the right side of the page
![](img/social-messaging-configuration-26.png)
![](img/social-messaging-configuration-27.png)

* Disconnect specific accounts by clicking on the “Disconnect” button.
![](img/social-messaging-configuration-28.png)

{: .notice}
**Notes:** Disconnecting an account will result in preventing Conversational Cloud from creating new conversations or handling existing conversations on that account only. Other connected accounts will not be affected by the operation.

