---
pagename: Getting started with messaging
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: ''
level3Name: ''
permalink: getting-started-getting-started-with-messaging.html
isTutorial: false
date: 2019-01-14 11:44:06 +0000
level3: ''
isNew: false

---
To get started, access LivePerson using this link: [https://va-a.authentication.liveperson.net/login.html](https://va-a.authentication.liveperson.net/login.html "https://va-a.authentication.liveperson.net/login.html")

## Get to the first message

To get the most basic version of messaging up and running, brands need to insert a generic ‘message us’ button their website. Getting to the first message is simple and can be done through three steps:

1. Website administrators or developers need to add the [LivePerson tag](getting-started-add-the-liveperson-tag-to-your-website.html) (piece of code) to every page of the website where you'd like messaging to appear. See instructions on how to [insert the code](getting-started-add-the-liveperson-tag-to-your-website.html).
2. Create users for the agents that will be taking the conversations. See how to [set up users](admin-settings-create-and-manage-users.html).
3. Once the code is up and an agent is logged into the system, they can begin to answer incoming conversations.

{: .notice}
The basic set up means there will be no routing - every agent will receive all messages

## Customize your messaging program

LivePerson is the most advanced platform for any size organization, offering a slew of customization capabilities. To ensure you are getting the most out of messaging, review how to [manage a contact center that messages](contact-center-management-messaging-operations-managing-a-contact-center-that-messages.html), and develop and set up your preferences in three areas:

* **Customer experience:** design what consumers will see when they interact with your brand by customizing the [engagement window](contact-center-management-campaigns-engagement-window.html), including the banners, buttons and automatic text. You can also start to [add bots and automation](getting-started-getting-started-with-bots.html) to receive and respond to incoming conversations.
* **Agent experience**: set up the [agent experience](agent-manager-workspace-agent-tools-for-messaging-workspace-basics.html) to ensure your reps can easily and successfully communicate with consumers, including [predefined content](agent-manager-workspace-workspace-configuration-predefined-content-best-practices-for-messaging.html) and [custom widgets](agent-manager-workspace-workspace-configuration-adding-your-own-widgets.html).
* **Management & operations**: set up [agent skills](admin-settings-skills-groups-set-the-agent-group-hierarchy.html) and LOBs, [routing](contact-center-management-messaging-operations-routing-logic-overview.html), [agent capacity](contact-center-management-messaging-operations-smart-capacity-overview.html), & [queue priority](contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html).

## Step 1: Set up data for accurate tracking

Adding more data will enable you to better target customers, arm agents with more information, and get more granular and accurate reporting.

In addition to adding the [LivePerson tag](getting-started-add-the-liveperson-tag-to-your-website.html) to website pages, brands can also:

* Send [engagement attributes](data-reporting-engagement-attributes-setting-up-engagement-attributes.html) - information about consumers, such as items added to a shopping cart, account status and more - to LivePerson for reporting purposes. Engagement attributes, such as conversions, can be tracked across different sessions or customer visits. Developers can add engagement attribute tracking directly into the LivePerson tag or by scraping.
* Determine the [attribution model](data-reporting-engagement-attributes-attribution-model.html) to enables brands to select how to attribute cross session conversions to agents who handled the conversation.
* Set up LivePerson to track [multiple currencies](data-reporting-engagement-attributes-multi-currency.html) if needed for accurate conversion tracking and reporting even across multiple countries.

## Step 2: Customize your account settings

1. **Account security settings**: review the [security recommendations](security-regulations-security-account-security-recommendations.html) and apply standards based on your brands requirements.
2. **Account Administration:**
   * **Skills** - set up or import the [list of skills](admin-settings-skills-groups-set-the-agent-group-hierarchy.html) that you’d like conversations routed to.
   * **Users** - set up or import the [list of agents](admin-settings-create-and-manage-users.html), managers or administrators.
   * **Groups/LOB** - [set up groups or lines of business](contact-center-management-campaigns-campaign-settings.html) to reflect how your contact center is organized to reflect in reporting, as well as filter so agents and managers only see relevant conversations and data.
   * **Permissions** - [assign permissions](admin-settings-permissions-assign-permissions.html) or [customize permissions](admin-settings-permissions-customize-permissions.html) based on what actions your users can take in the system.  For example, create a ‘supervisor’ role with permissions to set up and add users.
   * **Timezone** - [set up the time zone](admin-settings-set-the-time-zone.html) of your account for timestamp and reporting purposes.
   * **Languages** - [setup the language](admin-settings-supported-languages.html) for agent workspace.

## Step 3: Connect to your channels of choice

Using LivePerson, consumers can begin messaging with your brand from any channel. Although each channel is set up separately, once you have configured all your channels, all the LivePerson settings and bots will automatically apply to them.

Read more about messaging connectors in LivePerson.

* Web messaging on your website
* Mobile app messaging
* IVR deflection
* SMS
* Facebook
* Apple Business Chat
* Google Rich Messaging
* Whatsapp
* Line
* Connector API (build a connector to any custom messaging channel)
* Live Chat on your website

{: .notice}
Through LivePerson, you can serve your consumers through multiple messaging channels on the same platform.  This means that if you create any settings for other channels such as bots, surveys, agent tools, and operative elements - you only have to create them once and they will apply to all channels.

## Step 4: Design the customer experience

1. **Rich Messaging**: enhancing the conversation is crucial to enable you to handle more types of inquiries and actions over messaging. Beyond the regular text, LivePerson enables you to set up the following rich messaging capabilities:
   * Photo sharing (consumer to agent)
   * Structured content (cards, carousels, lists)
   * Time picker

   See the rich messaging comparison grid for detailed information on what is available per messaging 	channel.

{:start="2"}

1. **Add bots**: create a better customer experience by greeting your consumers with a great bot that can immediately answer some of their questions, or route the conversation accordingly.  You can create bots easily using the LivePerson Conversation Builder.
2. **Automatic messages**: these are the messages that are sent by the system to consumers (e.g. ‘an agent will reply shortly’).  You can customize the text of these messages so that they match your brand guide.
3. **Surveys**: there are two surveys you can set up for web messaging: one before a conversation starts and one when a resolution has been achieved.
   * Pre conversation survey for routing: you can set up a routing bot to greet your consumers and ask 	them questions that will determine what skill (or another bot) the conversation is routed to.
   * Post conversation survey: when a conversation is closed, or resolved, a survey can be sent out to 	your consumers asking them customer satisfaction or any other questions you require.

{:start="5"}

1. **Secure forms**: you can take payments or verify secured identify of customers using the pci-compliant secure form within the conversation window.

{: .notice}  
Instructions for designing customer experience elements such as banners and messaging window UI can be found within each of the channel set up guides (linked above).

## Step 5: Define the agent experience

1. **Predefined answers**: create or import a database of [predefined content](agent-manager-workspace-workspace-configuration-predefined-content-overview.html) defined by skill and language that your agents can quickly enter into the conversation, saving valuable time.
2. **Custom agent tools**: within the [agent workspace](agent-manager-workspace-agent-tools-for-live-chat-agent-workspace-for-live-chat.html) there are [**widgets**](agent-manager-workspace-workspace-configuration-adding-your-own-widgets.html) that contain additional tools, webpages or applications for agents to use during the conversation. For example there is a custom CRM integration widget that pulls up the record of the customer in an active conversation.
3. **Multiple away states**: by default, your agents can be ‘online’ and available to take messages, ‘busy’, or ‘away’. These [away states](agent-manager-workspace-workspace-configuration-multiple-away-states.html) affect the flow of incoming conversations, and are customizable to give better granularity in reporting agent times - e.g. create an away state for training.
4. **Configure CoBrowse**: For high touch conversations, agents can connect to customers screens and conduct a [CoBrowse session](agent-manager-workspace-agent-tools-for-live-chat-cobrowse-for-live-chat.html).  Administrators can define which agents have this capability.
5. **Warm up**: In order for agents to [prepare to start shifts smoothly](contact-center-management-messaging-operations-preparing-agents-to-start-a-shift.html), LivePerson can be configured to assign conversations to the agents gradually giving agent the proper warm up’ to the flow of messaging conversations, you can configure 
6. **Agent guide**: Agent training should include your business processes as well as best practices for conducting messaging conversations. LivePerson has developed an expertise in agent training that substantially increases performance.  To learn more, ask account team for specialized training and the LivePerson University.
7. **SSO Login**: brands have the option to connect LivePerson to their company’s secured hub for [SSO integration](Security-regulations-SSO-unified-login.html).

## Step 6: Manage the operational elements

1. **Routing**: decision factors on routing of your conversation are done based on various smart factors.  You can control the routing further by creating a routing bot.
2. **Determine schedules and working hours.**  The days and times of your agents and skills availability will affect the behavior of buttons as well as the greeting messages. For example, automatic messages can say ‘we will answer your question within the next 2 minutes’ during working hours, and ‘we will answer you in the morning’ for conversations that came in over night.
   * Set up and shifts worked per skill using the shift scheduler
   * Determine the working hours per skill

{:start="3"}

1. **Set up queue prioritization** rules to guide LivePerson engine on which conversations should be answered first.
   Messaging conversations can span over a few hours, or even a few days, and in many cases become inactive as we’re waiting for a consumer to reply.

{:start="4"}
2\. **Smart capacity**: this replaces the traditional utilization rate, and dynamically fills agent workload with conversations, taking active and inactive states into consideration.
3\. **Response time**: you can determine the SLA, or how quickly each skill should respond to incoming messages.  These metrics will help to route conversations, manage agents queues as well as in reporting.
4\. **Auto close:** for conversation that are inactive, you can enable and configure the ‘automatic close’ capability.  This will help to clear agent workspaces as well as focus your resources on active conversations.