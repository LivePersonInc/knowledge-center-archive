---
pagename: Latest what's new
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Highlights include renaming our products, Intent Management & more
level3: ''
permalink: whats-new-latest-whats-new.html
isTutorial: false
isNew: false

---
Here are the latest features, enhancements and enablements that are coming in the following weeks:
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/436694998?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Product renaming
Some of LivePerson's products are being renamed on July 12th
We want to ensure that all our product names reflect their capability for easy navigation. LivePerson’s new product architecture includes additional important name changes to our product:

For more information on which names are changing, click [here](https://knowledge.liveperson.com.rebranding-bvlnkiy-znm3eqs6brhzq.us.platform.sh/admin-settings-product-renaming-overview.html)

## Intent Discovery and Optimization
The Intent Discovery and Optimization feature will enable brands to quickly uncover patterns in their existing data, better discover high impact intents, and automatically develop training phrases to train their machine learning models. It creates a tight integration between Intent Analyzer and Intent Builder making it easy for users to annotate incorrectly classified messages so that models can be improved and new intent classes can be created. For more information, click here 

## Starter Pack Enhancements (taxonomy)
LivePerson are adding coverage for existing starter packs and new starter packs. Starting with FinServ + Cross Vertical Intents followed by adding Cross Vertical intents to Telco, Airlines and Insurance Suppliers. To get started, please contact you LivePerson account team.

## Intents in the Agent Manager Dashboard
Managers can see intent trends in real time as well as monitor agent activity by intent to ensure that resources are being appropriately dispatched.

## View Conversation Intents
For accounts using the Intent Analyzer tool, a new Intents column will now become available in the Conversation widget. 
The column holds the list of all unique intents detected in the conversations in real time. It enables managers to view consumer' intents in real time and easily detect conversations on specific topics, without having to read the conversation transcript. The column is configurable, allowing brands to remove it from their view if they wish, by turning it off via the configuration window.

The intent detection is based on machine learning classifications. Hence, false negative and false positive intent detections are expected. In these cases, it is recommended to improve the quality of the intents via the Intent Builder.

![](img/whats-new-july3.png)

## Groups hierarchy filter
The global group filter available in the top right corner of the workspace has been modified to support:

1.Visualization of the groups hierarchy in your account. The groups list, which was displayed as a flat list up until today, will now be viewed as a hierarchy tree of the groups. As before, managers will only be able to view the groups they manage , including their sub-groups.

2. Once a group is selected, its sub-groups will be auto-selected as well. Users will be able to select only the parent group without its sub-groups by clicking on the parent group name rather than the checkbox.

![](img/whats-new-july1.png)

## Response time metrics
New response time- related metrics will be added to the “Activity summary” widget, allowing managers to better track consumer experience and agent performance in real-time, on the group and skill level. Four response-time related metrics will be introduced:
- Avg. wait time to first human response 
- Avg. time to first response from the time of first assignment - The average time it takes a human agent to respond to the first message from a consumer, from the time the agent was assigned to the conversation. Measured from the first human agent message sent in a new conversation.
- Avg.wait time to human response
- Avg.time to response from assignment - The average time it takes a human agent to send a message to the consumer from the time the agent was assigned to the conversation.

## Self serve metrics configuration
This new capability allows brands to configure, per widget, which metrics will be displayed in the workspace. For example, brands that are not tracking the CSAT metric will now be able to remove it from their view.
Please note: The configuration definition will impact the entire account and therefore impacts the view of all users of the manager workspace.

![](img/whats-new-july2.png)

## Messaging Agents list for agents using the enhanced agent workspace
Agents using the enhanced agent workspace were not able to view the “messaging agents list”  even if they had the "View agent list" permission. Now, agents using the enhanced agent workspace will have access to this data through a limited access view of the manager workspace.

## Accessibility
The Conversational Cloud Engagement Window and Engagement Invitations will be validated by WCAG 2.1 AA standards, and then certified for compliance.
Agent & Agent Managers will be able to use accessibility features on both themes (Dark & Light): Updates include a screen reader, keyboard navigation, focus outline, accessible color contrast, adjusted font size and more.

## Analytics Builder updates
The Survey Messaging dashboard will be enhanced to include attribution of messaging survey results to include bots. We also are enabling reporting on Collaboration channels ( such as CoBrowse, Video, Voice) in messaging as well as on PCI Secure Forms in messaging. This means users will have greater visibility & transparency in payments and allows brands to measure return on investment.

## Key Messaging Metrics API
Real- time messaging metrics API that exposes key messaging metrics such as: response time, agents load, closed conversations,  The API will be available  at skill & group levels.

## Third Party Bots - Support MS Bot Platform activities
Instead of using custom LivePerson code when developing the bot. the bot developer can use the native MS code and we translate it to what our platform expects.

## Functions Key/Value Store
Provides a simple integrated storage that lambdas can use to save customer data.

## Third Party Bots - Support MTLS for Watson
Brands will have a choice to enable the MTLS flow for new and existing bots. Brands can provide LP with a generated certificate that will be hosted in our secret storage system. If this flow is enabled, the connector will confirm the signing of the certificate using LPs MTLS service before providing content to the configured endpoint.

## Conversation Orchestrator
Context Intelligence: SDEs available in Context Warehouse and Routing policies
Brands can use SDEs (Structured Data Entities) to send custom attributes when initiating a conversation from both unauthenticated and authenticated flows. Provides UI tools in the Workspace that allows brands to use SDEs to build complex routing policies without the need to understand coding.
