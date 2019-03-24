---
pagename: Getting started with messaging
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: Checklist for set up and configuration to get your messaging program running
level3Name: ''
permalink: getting-started-getting-started-with-messaging.html
isTutorial: false
date: 2019-01-14 11:44:06 +0000
level3: ''
isNew: false

---
To get started, access LivePerson using this link: [https://authentication.liveperson.net/login.html](https://authentication.liveperson.net/login.html)

## Get to the first message

To get the most basic version of messaging up and running, brands need to insert a generic ‘message us’ button their website. Getting to the first message is simple and can be done through three steps:

1. Website administrators or developers need to add the [LivePerson tag](getting-started-add-the-liveperson-tag-to-your-website.html) (piece of code) to every page of the website where you'd like messaging to appear. See instructions on how to [insert the code](getting-started-add-the-liveperson-tag-to-your-website.html).
2. Create users for the agents that will be taking the conversations. See how to [set up users](admin-settings-create-and-manage-users.html).
3. Once the code is up and an agent is logged into the system, they can begin to answer incoming conversations.

![](/img/getting-started-with-messaging-1-2.png)

{: .notice}
The basic set up means there will be no routing - every agent will receive all messages

## Customize your messaging program

LivePerson is the most advanced platform for any size organization, offering a slew of customization capabilities. To ensure you are getting the most out of messaging, review how to [manage a contact center that messages](contact-center-management-messaging-operations-managing-a-contact-center-that-messages.html), and develop and set up your preferences in three areas:

* **Customer experience:** design what consumers will see when they interact with your brand by customizing the [engagement window](contact-center-management-campaigns-engagement-window.html), including the banners, buttons and automatic text. You can also start to [add bots and automation](getting-started-getting-started-with-bots.html) to receive and respond to incoming conversations.
* **Agent experience**: set up the [agent experience](agent-manager-workspace-agent-tools-for-messaging-workspace-basics.html) to ensure your reps can easily and successfully communicate with consumers, including [Predefined Content](agent-manager-workspace-workspace-configuration-predefined-content-best-practices.html) and [custom widgets](agent-manager-workspace-workspace-configuration-adding-your-own-widgets.html).
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
   * **Groups/LOB** - [set up groups or lines of business ](admin-settings-skills-groups-set-the-agent-group-hierarchy.html)to reflect how your contact center is organized to reflect in reporting, as well as filter so agents and managers only see relevant conversations and data.
   * **Permissions** - [assign permissions](admin-settings-permissions-assign-permissions.html) or [customize permissions](admin-settings-permissions-customize-permissions.html) based on what actions your users can take in the system.  For example, create a ‘supervisor’ role with permissions to set up and add users.
   * **Timezone** - [set up the time zone](admin-settings-set-the-time-zone.html) of your account for timestamp and reporting purposes.
   * **Languages** - [setup the language](admin-settings-supported-languages.html) for agent workspace.

## Step 3: Connect to your channels of choice

Using LivePerson, consumers can begin messaging with your brand from any channel. Although each channel is set up separately using [messaging connectors](messaging-channels-messaging-connectors-overview.html), once you have configured all relevant channels, LivePerson's settings and bots automatically apply. See our [messaging channels capabilities matrix](messaging-channels-messaging-channels-capabilities-comparison.html), or drill down on specific connectors.

* [Web messaging on your website](messaging-channels-web-messaging-add-web-messaging-to-your-website.html)
* [Mobile app messaging](messaging-channels-mobile-app-messaging-add-messaging-to-your-mobile-app.html)
* [SMS](messaging-channels-sms-sms-connector.html) (Twilio, Google My Business)
* [Facebook](messaging-channels-facebook-messenger.html)
* [Apple Business Chat](messaging-channels-messaging-connectors-overview.html)
* [Google RCB Business Messaging](messaging-channels-google-rcs-business-messaging.html)
* [WhatsApp Business](messaging-channels-whatsapp-business.html)
* [Line](messaging-channels-line-connector.html)
* [Connector API](https://developers.liveperson.com/connector-api-first-steps-overview.html) (build a connector to any custom messaging channel)
* [Live Chat](messaging-channels-live-chat-add-live-chat-to-your-website.html) on your website

{: .notice}
Through LivePerson, you can serve your consumers through multiple messaging channels on the same platform.  This means that if you create any settings for other channels such as bots, surveys, agent tools, and operative elements - you only have to create them once and they will apply to all channels.

## Step 4: Design the customer experience

1. **Rich Messaging**: enhancing the conversation is crucial to enable agents to handle more types of inquiries and actions over messaging. Beyond regular text, LivePerson enables brands to set up the following [rich messaging](messaging-channels-rich-messaging-rich-messaging-overview.html) capabilities:
   * [Photo sharing](messaging-channels-rich-messaging-photo-sharing-user-guide.html) (consumer to agent)
   * [Structured content](messaging-channels-rich-messaging-structured-content-for-messaging-user-guide.html) (cards, carousels, lists)
   * [Quick replies](messaging-channels-rich-messaging-quick-replies-user-guide.html)

See the [messaging channels capabilities comparison matrix](messaging-channels-messaging-channels-capabilities-comparison.html) for detailed information on what is available per messaging channel.

{:start="2"}

1. **Add bots**: Automate tasks by greeting consumers with a bot that can immediately answer questions, or route the conversations. Learn how you can easily [create bots](getting-started-getting-started-with-bots.html).
2. **Automatic messages**: these are the messages that are sent by the system to consumers (e.g. ‘an agent will reply shortly’). Customize the text of [automatic messages](contact-center-management-messaging-operations-automatic-messages-automatic-messages-overview.html) to match your brand's look and feels guide.
3. **Surveys**: there are two surveys you can set up for web messaging: one before a conversation starts and one when a resolution has been achieved.
   * [Routing bots](getting-started-getting-started-with-bots.html#step-1-create-conversation-playbook) give pre conversation surveys that greet consumers and ask questions to determine what skill (or  bot) the conversation should be routed to.
   * [Post conversation survey](ai-bots-automation-post-conversation-survey-bot.html) - when a conversation is closed or resolved, a survey can be sent out to consumers asking them questions, such as customer satisfaction questions.

{:start="5"}

1. **Secure forms**: take payments or verify secure identities of customers using  PCI compliant[ secure forms](security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html) within the conversation window.

{: .notice}  
Additional instructions for designing customer experience elements such as [banners](contact-center-management-campaigns-creating-buttons-and-banners.html) and [messaging window UI](contact-center-management-campaigns-engagement-window.html) can be found within each of the connector set up guides (linked above).

## Step 5: Define the agent experience

1. **Predefined answers**: create or import a database of [Predefined Content](agent-manager-workspace-workspace-configuration-predefined-content-overview.html) defined by skill and language that your agents can quickly enter into the conversation, saving valuable time.
2. **Custom agent tools**: within the [agent workspace](agent-manager-workspace-agent-tools-for-live-chat-agent-workspace-for-live-chat.html) there are [widgets](agent-manager-workspace-workspace-configuration-adding-your-own-widgets.html) that contain additional tools, webpages or applications for agents to use during the conversation. For example there is a custom CRM integration widget that pulls up the record of the customer in an active conversation.

![](/img/getting-started-with-messaging-2-2.png)

{:start="3"}
3\. **Multiple away states**: by default, your agents can be ‘online’ and available to take messages, ‘busy’, or ‘away’. These [away states](agent-manager-workspace-workspace-configuration-multiple-away-states.html) affect the flow of incoming conversations, and are customizable to give better granularity in reporting agent times - e.g. create an away state for training.

4\. **Configure CoBrowse**: For high touch conversations, agents can connect to customers screens and conduct a [CoBrowse session](agent-manager-workspace-agent-tools-for-live-chat-cobrowse-for-live-chat.html).  Administrators can define which agents have this capability.

5\. **Warm up**: In order for agents to [prepare to start shifts smoothly](contact-center-management-messaging-operations-preparing-agents-to-start-a-shift.html), LivePerson can be configured to assign conversations to the agents gradually giving agent the proper warm up’ to the flow of messaging conversations, you can configure

6\. **Agent guide**: Agent training should include your business processes as well as best practices for conducting messaging conversations. LivePerson has developed an expertise in agent training that substantially increases performance.  To learn more, ask account team for specialized training and the LivePerson University.

7\. **SSO Login**: brands have the option to connect LivePerson to their company’s secured hub for [SSO integration](Security-regulations-SSO-unified-login.html).

## Step 6: Manage the operational elements

1. **Routing**: [routing conversations](contact-center-management-messaging-operations-routing-logic-overview.html) are configured based on a variety of smart factors brands can control. Brands can also leverage LivePerson's [routing bots](getting-started-getting-started-with-bots.html#step-1-create-conversation-playbook).
2. **Determine schedules and working hours.**  Brands can schedule the days and times agents and skills will be available, impacting the behavior of buttons as well as the greeting messages. For example, automatic messages can say ‘we will answer your question within the next 2 minutes’ during working hours, and ‘we will answer you in the morning’ for conversations that came in over night.
   * [Shift scheduling](contact-center-management-messaging-operations-shift-scheduler-configuration-guide.html) - set up and shifts worked per skill using
   * [Working hours management](contact-center-management-messaging-operations-working-hours-management-best-practices.html)

{:start="3"}

1. **Set up queue prioritization** rules to guide LivePerson engine on which conversations should be answered first.
   Messaging conversations can span over a few hours, or even a few days, and in many cases become inactive as we’re waiting for a consumer to reply.

{:start="4"}
2\. **Smart capacity**: LivePerson's proprietary [Smart Capacity](contact-center-management-messaging-operations-smart-capacity-overview.html) replaces the traditional agent capacity rate, and dynamically fills agent workload with conversations by taking active and inactive states into consideration.

3\. **Response time**: determine the SLA or how quickly each skill should respond to incoming messages by [configuring response times](contact-center-management-messaging-operations-configuring-response-times.html).  These metrics help route conversations and manage agents queues, including in reporting.

4\. **Auto close:** for conversation that are inactive, [auto close](contact-center-management-messaging-operations-auto-close-for-messaging-conversations.html) lets brands enable and configure the automatic close capability to help to clear agent workspaces as well as focus resources on active conversations.
