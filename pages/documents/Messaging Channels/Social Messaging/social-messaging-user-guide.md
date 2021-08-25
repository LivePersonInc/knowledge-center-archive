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

<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/515803887?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Getting started

Social Messaging can be accessed via the quick launch menu.

![](img/Quick_launch_man_workspace1.png)

## Agent experience

Contact center agents will interact with customers as they typically would in the Conversational Cloud with any other messaging channel. Agents will be able to perform all Social Messaging capabilities (replies, consumer mentions, post preview, etc.) within the transcript area. Additionally, further context from the native platform will be available via the Social Messaging widget.

## Agent workspace transcript

The transcript view will be modified to show a “public” or “direct” signifier on each message. Since social conversations can occur publicly, directly, or both publicly and directly, this designation is required to provide context for the agent to craft an appropriate response to the consumer. Agents have the option to easily toggle their responses as either public or direct.

**What messages are we getting:**
1. Facebook posts from consumers on the brand’s page and comments on posts 
2. Tweets mentioning the brand or meeting the Social Monitoring rules (including keywords, #hashtags and @mentions)

*Note: Public and direct messages from consumers - structure with metadata*

There is a clear distinction between messages that are direct and those that are public comments (for facebook) or tweets (for Twitter). The metadata under each consumer message gives the agent information about the channel, consumer name and time the message was sent as per the consumer’s timezone.

![](img/socialconnect-user-guide-new-1.png) 

*Actions on hover*
When hovering over a public consumer message, the agent has the option to view the post in detail or reply specifically to that message in the conversation.

![](img/socialconnect-user-guide-new-2.png) 

*Public and direct messages from agent - structure with metadata*

Just like the consumer message in the transcript area, the agent can clearly see the distinction between his direct and public replies, along with his name, which brand account he is replying from and his local time. When replying to a specific public message, the agent’s message also shows a preview for the same. 

![](img/socialconnect-user-guide-new-3.png) 

## Social Messaging capabilities

### Single interface for all messaging

Agents handle social media in the same easy way as they use Conversational Cloud for all other messaging conversations, meaning the same set of agents can support social media while they simultaneously support other messaging channels. 

![](img/socialconnect-user-guide-new-4.png) 

### Direct/Public message indicator
Indicators for each consumer message are available, stating whether it was a direct message or a public post/comment. The indicator will be displayed below each consumer message, containing the icon of the messaging channel, a “Public/Direct” text indication, together with the consumer name, action, and timestamp. This will provide agents better visibility of the conversation flow.

* Public indicates the message was sent through public Twitter or on the brand’s Facebook page
* Direct indicates the message was sent through Twitter Direct Message or Facebook Messenger

### Direct/Public toggle
This toggle appears in the message composition area and enables agents to switch between a public or direct response. The toggle will only be active if the consumer has initiated both a public and direct message to the brand.
* **Facebook**: Public - respond to any public message in the conversation; Direct - continued response through Messenger
* **Twitter**: Public - respond to any public message in the conversation; Direct - continued response through Direct Messages (DM)

### Invite to Direct Message
Quickly transition conversations from public social media to direct message by clicking the “Link to DM” button, which sends a call to action button for the consumer to select on public Twitter and Facebook that will take the consumer to the brand’s direct messaging channel.
* When agent clicks the “Link to DM” button, the public to private URL is added to the transcript input section for the agent to send the URL to consumers, just like a regular message
* The consumer will receive a link or button inviting them to move to direct messaging

Twitter:

* URL Format: https://twitter.com/messages/compose?recipient_id=<Twitter Account ID>
  * Twitter Account ID = the numerical ID assigned to each twitter account

![](img/socialconnect-user-guide-12.png)

Facebook:

* URL Format: http://m.me/<PAGE_NAME>
  * Page Name = the name of the brand’s page

![](img/socialconnect-user-guide-14.png)
 
### Consumer mentions
Mention consumers with their Facebook name or Twitter handle directly or by using the @ button, and consumers will get notified in the native platform that they have been mentioned by the brand.

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

## View Post/Tweet
Under the consumer profile in the Social Messaging widget, agents can view the consumer post from within the Conversational Cloud in order to have a clear context of the conversation’s topic.
Tapping on the post in the Social Widget opens the post in the native platform. 

**Note:** If an agent is logged in with his private Facebook account on the native platform and is clicking the like button - it likes the post under his private account.




