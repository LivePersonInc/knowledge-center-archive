---
pagename: Latest what's new
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Highlights of March 2021
level3: ''
permalink: whats-new-latest-whats-new.html
isTutorial: false
isNew: false
---

Watch this short video to see upcoming features to LivePerson in the weeks ahead. 

<iframe src="https://player.vimeo.com/video/524273176" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Agent Assist
Conversation Orchestrator’s Agent Assist improves the productivity of human agents. By enabling live agents to access Knowledge Base articles and bots within a conversation, agents can leverage existing knowledge and processes to provide a seamless, robust service experience for users. This month, Conversation Orchestrator introduces new enhancements to Agent Assist.

Skill-Based Recommendations: Brands can now decide which bots and Knowledge Bases can be recommended to agents on a skill-by-skill basis. This helps brands both curate recommendations and ramp up groups of agents.

Multiple Recommendations: Up to five recommendations can be provided to an agent (previously it was limited to one). These recommendations can include both Knowledge Base articles and bots. Click [here](https://developers.liveperson.com/conversation-orchestrator-agent-assist-overview.html) for more information.

## Updates to Agent App
Agent App v2.6.8 will allow agents to change their password in the app. Additionally a ‘forgot password’ link is provided on the login page. For Agent Managers and Admins using the app on a tablet, the ability to switch between the Agent Workspace and User Manager is now shown below the conversation list. To enable, just search for LivePerson Agent App on the Google Play Store or Apple App & LINE.
In addition, Agents and joined Agent Managers can send private messages in conversations that are not viewable by consumers

## Voice and Video calls via Mobile SDK
Through your brand’s mobile app, agents can invite consumers to video and voice calls during a messaging conversation. The video or voice call will be facilitated within the messaging interface - via webview container - and will allow consumers to have an embedded experience of a video or voice call during a messaging conversation.

## Push notification support for Android Doze and Standby Mode
Android (Android 6.0 / API level 23) introduces two power-saving features that extend battery life for users by managing how apps behave when a device is not connected to a power source.
Doze mode reduces battery consumption by deferring background CPU and network activity for apps when the device is unused for long periods of time, and App Standby mode defers background network activity for apps with which the user has not recently interacted. 
To support both these modes, our LP pusher will allow brands to utilize FCM high priority message in order to have full control over the availability and display of the push notification on the consumer's device.

## Secure Forms
There are some updates to Secure Forms, allowing customers to access the same Secure Form multiple times. This update allows brands to increase the times an OTK (one-time token) can be used in a short time window to allow reuse of a Secure Form if a user browser is refreshed or when the visitor/customer has moved to another page.

### Web
On Web, this option is configurable. If required, brands can define how many times a consumer will be able to reopen the same Secure Form prior to submitting it. This is useful for brands to allow consumers to browse back and forth between different pages (e.g. collecting customer ID) during the conversation while filling out the Secure Form and keeping it accessible.
In order to configure, please contact your LivePerson account team.

### iOS: 
On iOS, the consumer can open and close the form multiple times. The form will remain accessible to the consumer until:
* The consumer logs out
* The app is closed so it’s not running in the background
* The form expires
* The consumer opens another Secure Form

### Android: 
On Android, the consumer is currently only able to open the form once. If the consumer tries to exit the form on Android, an alert message will appear.
For further information, refer to the [iOS In-App Messaging SDK](https://developers.liveperson.com/consumer-experience-ios-sdk-overview.html) and [Android In-App Messaging SDK](https://developers.liveperson.com/android-overview.html) documentation.

## Updates to Manager Workspace: Bot Performance widget
Today, human agents and bots are treated similarly in the Manager Workspace. They are both treated as the same type of agent without the ability to distinguish between the two. While most of the metrics measured currently are relevant for both human and automated agents, there are differences between these user types with additional bot-centric metrics required. The Bot Performance widget provides "automation centric" metrics that allow easy monitoring and management over the automation that affect the day to day shift.

## Developer updates - Third Party Bot Connectors

Updates to Third Party Bot Connectors include:

* **Transfer to agent:** Currently Third Party Bots are able to perform skill transfers. Soon, bots will also be able to perform transfer to agent. This will allow brands to develop functionality that cherry picks the right agent to transfer and uses OOTB fallbacks and agent matching system.
* **Watson Discovery Search support brands using Watson:** Bots can now also take advantage of Watson Discovery and share the responses of the search back with the consumer via their bot.

## LivePerson Functions: MTLS Support
Functions will be able to enforce an MTLS flow by providing an endpoint and certificate. Customers can generate a dedicated certificate and store this to the integrated secret storage. This certificate will then be referenced in the coding runtime when making the call to the MTLS endpoint.

## Functions for Customer reporting
LivePerson will be enhancing the data points we are offering and providing visualizations for some key Functions metrics.
For example, customers will now see visualizations breaking down the deployments, invocations and errors at the Function level. Developers will also be able to see side-by-side code comparisons of new deployed Functions.

## Announcements

## EOL of the Real-Time Dashboard for Messaging taking place March 31st, 2021
At the end of March 2021, the Real-Time Dashboard for Messaging will be deprecated.
The Real-Time Dashboard was developed before the Manager Workspace existed. The Manager Workspace is embedded into the core platform, allowing users to manage their operations seamlessly and in real-time, which eliminates the need to support the Real-Time Dashboard.
Note: Chat users will not be affected by the change at this time. 

## New Survey Bots must be created in Conversation Builder 
LivePerson have been improving Survey Bots for Conversation Builder and they are now the preferred solution for Post-Conversation Surveys. This simplifies bot building and allows survey bots to leverage the powerful capabilities of the Conversation Builder.
At the end of March, LivePerson will provide new tools and documentation to help move surveys from Bot Studio to the Conversation Builder.  At that time, users will be unable to create new surveys in Bot Studio, but can do so in the Conversation Builder.
The new migration tool will export Survey Bots from Bot Studio in a format that is ready for import into the Conversation Builder.
Your existing Survey Bots on Bot Studio will continue to function and be modifiable until Q3 2021 at which point, we will turn off Bot Studio.
Please start migrating your Bot Studio Survey Bots to Conversation Builder as soon as possible.

## NLU V1 to V2 Upgrade
LivePerson has been improving NLUv2 and it is now our preferred solution for LivePerson NLU.  NLUv2 offers enhanced retrieval, improved performance, and scalability while shedding technical risk incurred by NLUv1.  Ecosystem benefits of NLUv2 include: Intent Analyzer, Pre-built domains, Model Tester.
LivePerson is no longer supporting the creation of new NLU v1 (Legacy) domains as of March 2nd, 2021. There is no impact to the existing bots and Knowledge Bases using NLU v1, they will continue to serve messages and answers properly. NLUv1 will be deprecated on June 30th, 2021
In the product, NLUv2 will be referred to as LivePerson NLU.
Spanish NLUv1 domains can be created through special request until Spanish NLUv2 is available in March.
For more information on NLU v2, click [here.](https://developers.liveperson.com/intent-builder-natural-language-understanding.html)



