---
pagename: SocialConnect overview
categoryName: Messaging channels
subCategoryName: SocialConnect
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-socialconnect-overview.html
isTutorial: false
isNew: false
published: false
---

## Getting started

Follow the steps below to get started with SocialConnect: 

1. After clicking on the SocialConnect button in the QuickLaunch menu, Admins will be taken to the SocialConnect sign up page, which includes a “Sign Up” button. 

![](img/socialconnect-user-guide-1.png)

{:start="2"}
2. After selecting “Sign Up,” the admin is taken to the “Thank You” Screen where a messaging window is available to speak to a LivePerson representative, or wait for your client partner to contact you.
3. The LP Support Agent will complete the manual backend setup steps for the Admin, then provide a URL to SocialConnect Home for the Admin to complete the configuration of SocialConnect.

![](img/socialconnect-user-guide-2.png)

## LiveEngage agent experience 

Contact center agents will interact with customers as they typically would in LiveEngage with any other messaging channel. Additionally, social specific capabilities will be available via the SocialConnect agent widget.

## Agent workspace transcript

The transcript view will be modified to show a “public” or “private” signifier on each message.  Since social conversations can occur publicly, privately, or both publicly and privately, this designation is required to provide context for the agent to craft an appropriate response to the consumer. Supported rich content that is sent from the consumer or agent will be displayed in the native format.

### Message type tags

* Public/Post
  * Facebook - A post created by a consumer on the Brand Posts or Community Page
  * Twitter - A tweet that includes the brands @account name in the tweet
* Public/Comment (Facebook only)
  * Facebook - Consumer replies to Brand Posts or to other consumer posts on the brand’s page
  * Twitter - N/A
* Public/Thread (Twitter only)
  ** Facebook - N/A
  ** Twitter - Reply tweets created by consumers to a brand tweet or other consumer tweets that include the brand’s @account
* Private (Facebook and Twitter)
  * Facebook - Facebook Messenger conversations sent to the brand’s account
  * Twitter - Twitter Direct Messages sent to the brand's account

![](img/socialconnect-user-guide-3.png)
![](img/socialconnect-user-guide-4.png)

![](img/socialconnect-user-guide-5.png)

![](img/socialconnect-user-guide-6.png)

## Social widget 

The agent widget is split into multiple sections:

### Social Network consumer profile

The Consumer Profile provides Agents with the user’s channel-specific social network profile details within the Social Widget. The data available to display varies by social network channel.   

* Facebook
  * Profile Image 
  * Name
  * Time Zone
  * Gender

![](img/socialconnect-user-guide-7.png)

* Twitter 
  * Account Name
  * Registration Name
  * Written Location
  * Date Joined
  * URL
  * Number of Tweets
  * Number of Likes
  * Number of Followers
  * Number of accounts following
  * Biography
  
![](img/socialconnect-user-guide-8.png)

### Send image

The “Send Image” button provides agents the ability to send media files (images and gifs) to consumers publicly or privately through the Social Widget. These media files can be located in a URL or on the agent’s desktop, and sent through LiveEngage to the consumer. This capability is configurable by an admin in the SocialConnect Home.
  * Agents Select the “Add Image” Button located on the bottom of the Social Widget
  * Agents are taken to the Add Media tool
  * Agents can paste a URL to a media file
  * Agents can upload a media file from their desktop by Drag and Drop method or Browse Files
  * Add Media Tool will display a preview of the media file that will be sent to the consumer
  * Agents can “Cancel” to close the Add Media tool or “Send Image” to send the image to the consumer in the conversation.

![](img/socialconnect-user-guide-9.png)

![](img/socialconnect-user-guide-10.png)

### Add Public to Private button 

The “Add Public to Private” button provides agents the ability to send consumers a call to action button on public Twitter and Facebook that will take the consumer to the brand’s private channel. 
* When Agent selects the “Add Public to Private” button in the Social Widget, the public to private URL for the brand is added to the Transcript Compose section for the agent to send to craft the message and send the URL to consumers.

Twitter: 
* URL Format: https://twitter.com/messages/compose?recipient_id=<Twitter Account ID> 
  * Twitter Account ID = the numerical ID assigned to each twitter account

![](img/socialconnect-user-guide-11.png)

![](img/socialconnect-user-guide-12.png)

Facebook: 
* URL Format: http://m.me/<PAGE_NAME>
  * Page Name = the name of the brand’s page

![](img/socialconnect-user-guide-13.png)

![](img/socialconnect-user-guide-14.png)

### Private/Public Switch

The Public/Private Switch provides agents with context for the last message received from a consumer. It also provides the capability for an agent to respond to the last public message received as well as the last private message received. 
  * Public indicates the message was sent through public Twitter or on the brand’s Facebook page
  * Private indicates the message was sent through Twitter Direct Message or Facebook Messenger
  * Facebook
    * Public - respond to the last public message
    * Private - respond to the last message received through Messenger
    * Private Response - respond to a consumer that sent a public message through Messenger
    
![](img/socialconnect-user-guide-15.png)

  * Twitter 
    * Public - respond to the last public tweet
    * Private - respond to the last message received through Direct Messages (DM)
    
![](img/socialconnect-user-guide-16.png)

### Character Counter 

The Character Counter provides agents with the ability to validate the number of characters in a message they are crafting.
* Messages crafted in the Transcript that hit the channel character limit provide a “message not sent” error to the agent
* Agents select the menu navigation at the bottom right of the Social Widget
* After selecting “Character Counter” from the menu, the Character Counter tool displays with a text input box and a character counter at the bottom of the tool
* The “Use” button pastes the message crafted in the text input box into the Agent Transcript for sending to the consumer
* The “Done” button takes the agent to the primary Social Widget screen
* Twitter
  * Public Tweet Reply - 280 characters
  * Direct Message - 10,000 characters
* Facebook
  * Public Post - 63,206 characters
  * Public Comment - 5,000 characters
  * Messenger - 640 characters per message
  
![](img/socialconnect-user-guide-17.png)

![](img/socialconnect-user-guide-18.png)

### View Media 

View Media provides agents the ability to view all images, gifs and videos received from the consumer in the Social Widget. The View Media tool will allow Agents to view images larger, gif animations, and play videos that have been sent by consumers. The Agent Transcript will display images, and the first image from a gif, but not the animations, to view these animations agents will utilize “View Media.”
  * Agents select the menu navigation at the bottom right of the Social Widget
  * After selecting “View Media” from the menu, the agent is taken to the View Media Tool
  * Agents will see all images, GIFs and videos that have been sent by the consumer in a single location

![](img/socialconnect-user-guide-19.png)

## Discoverability 

SocialConnect will be discoverable for three different personas, authenticated LiveEngage users (users that are logged into LiveEngage), unauthenticated LiveEngage users (users that are not logged into LiveEngage), and non-LiveEngage customers. 

For Authenticated LiveEngage Users, SocialConnect is discoverable via the QuickLaunch feature.
* Clicking on the SocialConnect button in QuickLaunch will take users to the Authenticated User Marketing Page, which includes a “Sign Up” button. 
* After selecting “Sign Up,” the admin is taken to the “Thank You” Screen where a messaging window is available to speak to a Liveperson representative, or wait for your client partner to contact you.
* The LP Support Agent will complete the manual backend setup steps for the Admin, then provide a URL to SocialConnect Home for the Admin to complete the configuration of SocialConnect.

![](img/socialconnect-user-guide-20.png)

![](img/socialconnect-user-guide-21.png)

For Non-Authenticated LiveEngage Users, SocialConnect is discoverable via URL
* Non-Authenticated LiveEngage Users will discover SocialConnect through marketing channels such as email, which will contain the URL to the marketing page 
* On the marketing page, unuthenticated LiveEngage users will input their LiveEngage account number, then select “Proceed to LiveEngage Login” 
* After selecting “Proceed to LiveEngage Login” the user is taken to the LiveEngage login screen
* After completing the LiveEngage login, the admin is taken to the “Thank You” screen where a messaging window will connect a Liveperson Support Agent to the customer
* The LP Support Agent will complete the manual backend setup steps for the Admin, then provide a URL to SocialConnect Home for the Admin to complete the configuration of SocialConnect.

## Configuration 

### LiveEngage configuration 

SocialConnect will be enabled by a Customer Success Manager or a Liveperson support agent. 

### SocialConnect Configuration

Configuration of the SocialConnect product is done via the SocialConnect Home, a self-service Web UI that leverages LiveEngage Global Applications for user authentication and linking LiveEngage accounts to SocialConnect. Brands can connect and configure Social media accounts they would like  to receive public/private messages from. 
* SocialConnect Home is only available to LiveEngage administrators
* Admins can add new accounts by selecting the “Add Account” button, after selection, Admins are taken through the Social Channel specific configuration page
* Facebook 
  * Admins log into Facebook utilizing the Facebook account with admin access to the brand page
  * After logging in, a list of Facebook pages that the Admin has administrator access to will display
  * Admins will select the page they would like to connect to SocialConnect
* Twitter 
  * Admins log into Twitter utilizing the brand Twitter account credentials
  * After logging in, the admin will select “Authorize App” to connect with SocialConnect
* From the Accounts Screen admins are presented with a table of key information
  * Account Name
  * Channel
  * Created Date and By
  * Status of Integration
  * Edit
    * Ability to Unlink Accounts from SocialConnect
    * Ability to Relink Accounts to SocialConnect

![](img/socialconnect-user-guide-22.png)

![](img/socialconnect-user-guide-23.png)

![](img/socialconnect-user-guide-24.png)

![](img/socialconnect-user-guide-25.png)

![](img/socialconnect-user-guide-26.png)

### Analytics 

SocialConnect will not add any additional metrics or capabilities to the LiveEngage reporting facilities. All existing facilities, such as the Report Builder, should operate with SocialConnect as expected.

### Routing 

SocialConnect will support basic routing of a social media channel (e.g. Facebook or Twitter) to a single Skill. Each channel will map to a separate skill.

More complex routing can be supported through professional services (e.g. Automation routing bot). More complex routing and public filtering will not be supported in the initial MVP but will be supported in future phases of the SocialConnect product.

### Automation 

SocialConnect will initially enable automations that support text messaging, and only for private conversations. In the future SocialConnect can be expanded to support structured content messages as well as be enabled for Public automations. As expected, routing and CSAT bots can be enabled via professional services.

### API 

SocialConnect will neither introduce nor modify any customer facing APIs.



