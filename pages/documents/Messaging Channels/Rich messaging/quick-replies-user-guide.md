---
pagename: 'Quick replies user guide '
categoryName: Messaging channels
subCategoryName: Rich messaging
indicator: messaging
subtitle: Quick replies are a group actionable items that appear as part of the conversation,
  making it easier to have automated conversations with consumers.
level3: ''
permalink: messaging-channels-rich-messaging-quick-replies-user-guide.html
isTutorial: false
isNew: false
date: 2019-01-27 12:16:26 +0000

---
The LivePerson messaging solution allows brands to enrich the conversions with their consumers using quick replies.

**To see what messaging channels support quick replies please see the** [**messaging channels capabilities comparison**](https://knowledge.liveperson.com.master-7rqtwti-znm3eqs6brhzq.us.platform.sh/messaging-channels-messaging-channels-capabilities-comparison.html) **chart**

![](/img/quick-replies.gif)

Quick replies are a group of actionable items (chips) that appear as part of the conversation, making it easier to have an automated conversation with consumers.

It creates an easier, faster way for consumer to respond to messages. For [bot ](getting-started-getting-started-with-bots.html)interactions, quick replies provide a direction for the conversation and help set expectations as to what the bot can do.

Quick replies also enable more accurate routing based on consumer intent; consumers can choose from a range of potential intents and then the LiveEngage Routing Bot will quickly and accurately route them to the most appropriate agent.

LiveEngage enables sending 1-24 quick reply chips per message. Each chip can have:

* **Title:** up to 25 characters (use ellipsis)
* **Click operation:** with actions and metadata
* **Styling elements:** for full branding and styling needs

When a quick reply chip is tapped, the items are dismissed.

The agent can see the quick replies group at all times, even if it is no longer visible to the consumer.

Quick replies are available on our mobile app and web messaging channels, as well as the Facebook connector.

## Use cases

The following examples are a selection of a variety of quick replies flows that can be customized to bring richness to conversations.

## Dynamic survey flow

Use the quick replies for building a dynamic survey flow.  
Break down the traditional survey structure by sending the survey question as a regular message, and the survey answers as a quick replies bundle.

![](/img/QuickR2 (1).png)

## Dialogue flow

Use the quick replies for building a dialogue flow with the consumer, allowing the consumer to choose the next option in their messaging journey.  
It allows for directing the conversation to a desired path, understanding the intent of the consumer and providing a tailored response to the consumer’s need.

## Configurations

To enable and build quick replies for use on your messaging channels, we recommend working with your LivePerson representative on the steps below.

### Prerequisites

* LE UI version 9.10
* UMS version 3.11
* For Web Messaging: LE VX (Unified Window) version 9.4
* For In-App: In-app Messaging SDK v3.2 or above available for both Android and iOS

## For mobile-app messaging

1. Integrate the SDK into your brand app
2. Ensure that the following toggle is enabled within the SDK (for configuration steps see section below):
   1. iOS - enableStructuredContent
   2. Android - enable_structured_content

## Implementation

Define your use cases as quick replies can be used for a variety of applications.

### Design a quick replies bundle

A quick replies bundle does not exist on its own. An agent sends a message to the consumer (a question, a remark or even a [structured content](https://developers.liveperson.com/getting-started-with-rich-messaging-introduction.html#what-is-structured-content) message followed by a quick replies bundle).  
When designing the quick replies bundle, you should also design the coupled message assigned to it.

Quick replies are based on a JSON structure. You can define 1-24 chips per bundle and determine the maximum number of chips per row (up to 8 chips per row). The chips will be distributed evenly across 1-3 rows, based on the defined total number of chips and max chips per row.

Each quick replies chip is based on a structured content button which means it can hold:

1. Click Operation: with actions (link, navigate and publish text) and metadata.
2. Styling and Branding Elements

Build your quick replies bundles using the JSON specification in the [Developers’ Community.](https://developers.liveperson.com/quick-replies-introduction-to-quick-replies.html#quick-reply-templates)

### Usage

Determine if the quick replies should be used for a human or virtual agent journey.

### Human agent

**Agent:** you will need to implement a new widget based on the [Agent Workspace Widget SDK](https://developers.liveperson.com/agent-workspace-sdk-overview.html).  
Use the ‘Write ChatLine’ or the 'Write StructuredContent' (var cmdName = lpTag.agentSDK.cmdNames.writeSC) commands with a quickRelies payload. This command sends a JSON that represents a Quick Reply input. For further information, refer to the [Developer Community documentation](https://developers.liveperson.com/agent-workspace-sdk-methods.html#command).

![](/img/Quickr3 (1).png)

### Virtual agent

You will need to implement a bot integration using the [Messaging Agent SDK](https://developers.liveperson.com/messaging-agent-sdk-overview.html).

1. For more general information about using the SDK to integrate bots, [please refer to the Solution’s documentation](https://developers.liveperson.com/products-customer-facing-bots-overview.html).
2. For specific examples of using the SDK to send quick replies, please refer to the SDK’s repository:  [Example](https://github.com/LivePersonInc/node-agent-sdk#example-sending-rich-content-structured-content-with-quick-replies)

### JSON builder

Create a JSON builder component to populate your JSON scaffolding. This tool can be constructed using your preferred method of development but needs to adhere to our quick replies schema and model.

Quick replies elements are static and are presented in a JSON model.  
The JSON schema and dictionary can be found in the [Developers’ Community](https://developers.liveperson.com/rich-messaging-quick-replies-overview.html).

## Limitations

1. Quick replies are distributed according to the "Max quick replies per row" and across a maximum of three rows. Any remaining quick replies will fit into the 3rd row.
2. Each chip title is set to have a maximum of 25 characters. If more characters are set then the first 22 characters will be used with ellipsis.
3. If a consumer decides to type the text of the chip, instead of clicking on it, then no click-operation will be executed (no action or metadata will be sent to the server). If your bot depends on such data, consider "teaching" the bot to accept typed-replies, and not just clicked-replies.

## Best practice

1. Use quick replies to prompt for specific next steps, or use them as answers for surveys or conversational forms.
2. Use short texts in the chip's title - be brief and precise.
3. If you wish the agent to be able to follow on the consumer's clicks, we recommend adding publish text click-event to each chip. The publish-text click-event will add a message to the transcript on behalf of the consumer, which will be available for the agent to follow.
4. Don't use quick replies if you wish to let consumers use them more than once. Quick Replies disappear after a chip was clicked (or consumer made another action in the conversation window). Use [Structured Content](messaging-channels-rich-messaging-structured-content-for-messaging-user-guide.html) templates instead as they stay persistent in the conversation.

## Notes

* The configured quick replies responses available in the agent workspace can be sent by the agent to a consumer using any channel on which quick replies are supported (web messaging and in-app messaging, as well as Facebook).
* When an agent sends a quick replies message to a consumer, it will trigger a push notification. The push notification will show the Agent’s message which preceded the Quick Replies bundle.
* You can show between one and twenty-four chips within a quick replies bundle.