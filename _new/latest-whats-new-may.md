---
pagename: Latest what's new
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Highlights of May 2021
level3: ''
permalink: whats-new-latest-whats-new.html
isTutorial: false
isNew: false
---

Watch this short video to see new features coming in the weeks ahead. 

<iframe src="https://player.vimeo.com/video/548771475" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Performance Optimizer Performance Optimizer Care and Commerce views

The Performance Optimizer now supports two views: Care and Commerce.  The Commerce view exposes additional sales metrics to users including conversion rate, conversions, conversions per login hour, and average order value.  
The LivePerson 4E Framework incorporates these sales metrics when users select the Commerce View and identifies sales specific metrics for efficiency (conversion rate per login hour) and effectiveness (conversion rate).  The primary indicator of efficiency and effectiveness dynamically changes when the Commerce view is chosen by the user. 

There are 3 primary components to the new Care view: 
1- A separate and unique view for Commerce brands  
2- Updated 4E Framework metrics for Commerce brands
3- Dynamic Panels to reflect Commerce KPIs (as compared to Care) 

The Commerce View incorporates the following metrics: 
* Conversions 
* Conversion Rate 
* Average Order Value 
* Conversions Per Login Hour 

For more information, click [here](https://knowledge.liveperson.com/data-reporting-performance-optimizer-performance-optimizer-user-guide.html)

![](img/new-may- 1.png)

## Engagement Controller (Available for early adopters)

The Engagement Controller is a feature within Conversation Orchestrator that enables brands to control the incoming flow of conversations in Web Messaging. 
During early adopter phase, this feature is configurable through LivePerson and will be available for self-service within Conversation Orchestrator by June 15th.

This feature is in addition to the existing Campaign Builder settings. It allows brands to use welcome bots to start conversations and will show or hide Web Messaging engagements based on skill availability. Campaign Builder settings such as enable or disable engagements or Campaign time frame will always have higher priority than Engagement Controller settings.
Users are able to set up rules that contain conditions which check skill availability based on the queue size and the wait time metrics as well as actions to show or hide engagements. Rules can be set up on  the campaign or engagement level. Rules on campaign level will affect all engagements in this campaign.

For more information, click [here](https://knowledge.liveperson.com/ai-bots-automation-conversation-orchestrator-engagement-controller.html)

![](img/Engagement_Controller.gif)

## Management Console (available for early adopters)

The Management Console is a tool that enables brand admins and CSMs to explore, configure and enable platform capabilities in a self-serve manner.
These capabilities can be features (Turn on/off and configure feature’s settings), or tools, like the Conversation builder, for example, which is where users manage and build bots. 

This new module within the Conversational Cloud is exposed only to roles with the relevant permissions. 
Users will be able to search and find the features they are interested in, access this features page and read a description about the feature, see media (such as images, KC articles) & activate the feature without needing to reach out to a LivePerson representative.

Highlighted features of the management console include:
### Search capabilities
One of the significant capabilities of the navigation within the Management Console is the search engine. This smart engine can identify features using the auto-complete mechanism, the recently-search, and full-text search. When a user is trying to find a feature, if they know the feature name, they can just type the name into the search and the auto-complete will show the relevant result. In the event that the user is not familiar with the name of the feature they are looking for, they can use popular tags or explore the feature categories.

### Capabilities by category
For users who are less familiar with the names of the features, there is a way to explore the available features and tools by category. The categories have been divided into groups of features based on their business goal.
For more information, click [here](https://knowledge.liveperson.com/admin-settings-management-console-overview.html)

## Voice & Video for non web channels

Brands that are using the third party messaging channels will now be able to invite consumers to video or voice calls. Agents will be able to send the video or voice call invitation from the Agent Workspace, while the specific channel will display the invite to the consumer. Consumers will be able to tap on the invite in order to initiate or decline the voice or video call, while the call will be facilitated via a webview outside the messaging app.

First, brands will need to enable the voice and video call feature on the conversational Cloud account: Voice and video calls are automatically enabled on the brand’s Conversational Cloud account. 

Agent Profiles and Permissions can be used to allow or restrict the video and voice calls feature for all agents or only a subset of agents. The permissions are part of the Agent profile. The permissions that control this feature are the “Initiate voice conversation” permission to allow voice calls, and the “Initiate live video conversation” permission to allow video calls.

### Initiating a call
Voice or video calls are initiated by the agent by sending an invitation to the consumer on a Messaging channel.
The consumer has the ability to accept the invitation by clicking on the invitation link.
After accepting, the call is initiated and the consumer’s browser will ask for permission to access the camera and/or microphone:
Consumers can close the webview at any point of the video or voice call while returning to the messaging screen.

The video and voice calls will open within the Conversational Cloud as a new video widget interface on conversation cloud. During an active call, both agent and consumer are able to end the call at any time. Furthermore, each participant is able to mute the microphone or disable the camera:
Please note, the link can only be sent in English and cannot be translated to a local language of the consumer.

![](img/video_and_voice_calls_via_Connectors.gif)

## Intent Analyzer: Advanced keyword search

Intent Analyzer has been updated with the ability to do advanced key word searches.
When using the “Add Filter” functionality in the Intent Analyzer, a user may now limit their keyword search to Consumer messages or Agent messages. This enables users to better locate and aggregate data for conversations that match specific keywords in either the agent/bot portion of the conversation or the consumer portion of the conversation.

![](img/new-may-3.png)

## Connectors: Apple Business Chat auto Rich Link Payload creation

A rich link is a URL provided through an image or video that is displayed in an Apple Business Chat bubble. The Rich Link Support for Apple Business Chat allows an agent or bot to auto-generate a rich link that is sent to a consumer during a conversation. This enhancement removes the need for the custom Rich Link Generator (RLG) widget, which has been a required configuration for all ABC implementations. In addition, this enhancement will automatically render existing links within Predefined Content, Automatic Messages and messages delivered by bots. 

Currently, consumers only receive a rich link if an agent sends the URL through the RLG widget or if the bot sends it as structured content. This creates inconsistency in consumer experience and friction during Apple QA. Thus, this enhancement offers many benefits for existing and net new ABC brands.

### Usage and Benefits:

* For new ABC project implementations, brands are no longer required to configure the custom RLG widget, reducing effort and complexity. 
Removes the need to whitelist URL domains and subdomains; all URLs sent to the consumer will automatically display as a rich link. 
* Additional agent training about the use of the custom RLG widget will no longer be required if Rich Link is enabled on the account, lowering learning curve and saving time. 
* Website URLs set in Predefined Content, Automatic Messages and messages delivered by a bot will display as a rich link. Not only will this create a consistent experience for consumers, it will also improve Apple’s QA results.

{: .notice}
Automated rich link support is disabled for all accounts by default. Please reach out to your LP representative for enablement.
The enablement of Rich Link configuration additionally provides the ability to set default fallback image and text by simply adding a url in case it’s not present in the original og tag property.

![](img/new-may-5.jpeg)

# Connectors: Additional Instagram Entry Points

Entry points are surfaces where users can start a conversation with your brand. Instagram supports various entry points:

* **Direct Message**: When consumer messages the brand privately in a direct message
* **Story mention**: When the consumer mentions the brand in their story
* **Brand Story Reply:** When the brand posts a story and the consumer replies to it.

Connectors have implemented a  new SDE - “Ctype” in the consumer info panel in conversational cloud. This will allow the agents to see the specific entry points in the conversation from where the consumer has initiated the messages. This can then be additionally used as  context for routing to a skill by the bot or an agent.

![](img/new-may-6.png)


