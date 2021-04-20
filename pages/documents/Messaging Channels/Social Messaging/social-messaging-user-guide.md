---
pagename: Social Messaging user guide
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle:
level3: ''
permalink: messaging-channels-social-messaging-social-messaging-user-guide.html
isTutorial: false
isNew: false
redirect:
  - messaging-channels-socialconnect-user-guide.html
  - messaging-channels-socialconnect-socialconnect-user-guide.html
  - messaging-channels-socialconnect-socialconnect-user-guide.html
---
Social Messaging extends Liveperson’s industry-leading conversational commerce platform, AI and automation capabilities, and multi-decade expertise in connecting brands with customers, into the world of social media. Please follow instructions below to learn how more about using Social Messaging.

## Getting started

Social Messaging can be accessed via the quick launch menu.

![](img/Quick_launch_man_workspace1.png)

## Agent experience

Contact center agents will interact with customers as they typically would in the Conversational Cloud with any other messaging channel. Agents will be able to perform all Social Messaging capabilities (replies, consumer mentions, post preview, etc.) within the transcript area. Additionally, further context from the native platform will be available via the Social Messaging widget.

## Agent workspace transcript

The transcript view will be modified to show a “public” or “private” signifier on each message.  Since social conversations can occur publicly, privately, or both publicly and privately, this designation is required to provide context for the agent to craft an appropriate response to the consumer. Agents have the option to easily toggle their responses as either public or private, with the message returning to the state of the last consumer message by default. 

### Public vs Private messages

* Public post
  * Facebook - A post created by a consumer on the Brand Posts or Community Page
  * Twitter - A tweet that includes the brands @account name in the tweet
* Public comment (Facebook only)
  * Facebook - Consumer replies to Brand Posts or to other consumer posts on the brand’s page
  * Twitter - N/A
* Public thread (Twitter only)
  * Facebook - N/A
  * Twitter - Reply tweets created by consumers to a brand tweet or other consumer tweets that include the brand’s @account
* Private message (Facebook and Twitter)
  * Facebook - Facebook Messenger conversations sent to the brand’s account
  * Twitter - Twitter Direct Messages sent to the brand's account

## Social widget

The agent widget is split into multiple sections:

### Social Messaging consumer profile

The Consumer Profile provides agents with the user’s channel-specific social network profile details within the Social Widget. The data available to display varies by social network channel.

* Facebook
  * Profile Image
  * Name
  * Locale
  * Time zone
  * Consumer time
* Twitter
  * Image
  * Account Name
  * Bio
  * Number of Tweets
  * Number of Likes
  * Number of Followers
  * Number of accounts following
 
![](img/socialconnect-user-guide-7.png) 

### View post/Tweet

In the lower part of the Social Messaging widget, agents can view the consumer post from within the Conversational Cloud, nested under its parent post, in order to have a clear context about the consumer topic.

## Social Messaging capabilities

### Private/Public message indicator 

Indicators for each consumer message are available, stating whether it was a private message or a public post. The indicator will be displayed below each consumer message, containing the icon of the messaging channel, a “Public/Private” text indication, together with the consumer name, action, and timestamp. This will provide agents better visibility of the conversation flow.

* Public indicates the message was sent through public Twitter or on the brand’s Facebook page
* Private indicates the message was sent through Twitter Direct Message or Facebook Messenger

### Private/Public toggle

This toggle appears at the top of the transcript area and enables agents to switch between a public or private response. By default, the toggle will return to the state of the last consumer message. 

* Facebook
  * Public - respond to the last public message
  * Private - respond to the last message received through Messenger
  * Private Response - respond to a consumer that sent a public message through Messenger
* Twitter
  * Public - respond to the last public tweet
  * Private - respond to the last message received through Direct Messages (DM)

### Public to Private button

Quickly transition conversations from public social media to private by clicking the “Public to Private” button, which sends a call to action button for the consumer to select on public Twitter and Facebook that will take the consumer to the brand’s private channel. 

* When agent clicks the “Add Public to Private” button, the public to private URL is added to the transcript input section for the agent to send the URL to consumers
* The consumer will receive a link or button inviting them to move to private messaging 

Twitter:

* URL Format: https://twitter.com/messages/compose?recipient_id=<Twitter Account ID>
  * Twitter Account ID = the numerical ID assigned to each twitter account

![](img/socialconnect-user-guide-12.png)

Facebook:

* URL Format: http://m.me/<PAGE_NAME>
  * Page Name = the name of the brand’s page

![](img/socialconnect-user-guide-14.png)


## Configuration

Social Messaging will be enabled by your LivePerson account team. Brands can connect and configure Social media accounts they would like to receive public/private messages from. See our [Social Messaging configuration guide](messaging-channels-social-messaging-social-messaging-configuration-guide.html) for further details. 
