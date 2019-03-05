---
pagename: Getting started with live chat
categoryName: Getting started
subCategoryName: ''
indicator: chat
subtitle: Checklist for set up and configuration to get your live chat program running
permalink: getting-started-getting-started-with-live-chat.html
isTutorial: false
date: 2019-01-14 10:27:58 +0000
level3: ''
isNew: false

---
To get started, access LivePerson using this link: [https://va-a.authentication.liveperson.net/login.html](https://va-a.authentication.liveperson.net/login.html "https://va-a.authentication.liveperson.net/login.html")

## Get to the first live chat message

To get the most basic version of messaging up and running, brands need to insert a generic ‘chat’ button their website. Getting to the first message is simple and can be done through three steps:

1. Website administrators or developers need to add the [LivePerson tag](getting-started-add-the-liveperson-tag-to-your-website.html) (piece of code) to every page of the website where you'd like chat to appear. See instructions on how to[ insert the code](getting-started-add-the-liveperson-tag-to-your-website.html).
2. Create users for the agents that will be taking the conversations.  See how to [set up users](admin-settings-create-and-manage-users.html).
3. Once the code is up and an agent is logged into the system, all agents must set their status to ‘online’. Doing so will automatically enable the chat button on the website to begin accepting incoming chats.

![](/img/getting-started-with-chat-1b.png)

{: .notice}
The basic set up means there will be no routing - every agent will receive all messages

## Customize your chat program

LivePerson is the most advanced platform for any size organization, offering a slew of customization capabilities.  To ensure you are getting the most out of live chat, develop and set up your preferences in three areas:

* **Customer experience:** design what your consumers will see when they interact with your brand by [adding a live chat window](messaging-channels-live-chat-add-live-chat-to-your-website.html) to your website. Customize the banners, buttons and automatic text. You can also start to [add bots and automation](getting-started-getting-started-with-bots.html) to be the first to respond to incoming conversations.
* **Agent experience**: set up the [agent experience](agent-manager-workspace-agent-tools-for-live-chat-agent-workspace-for-live-chat.html) to ensure your reps can easily communicate with consumers, including predefined content and custom widgets.
* **Management & operations**: set up all agents [skills](admin-settings-skills-groups-set-the-agent-group-hierarchy.html) and LOBs, [routing](/contact-center-management-live-chat-operations-automatic-conversation-distribution.html), [agent workload](contact-center-management-live-chat-operations-agent-groups-workload-distribution.html), and [queue priority](contact-center-management-live-chat-operations-queue-prioritization-for-live-chat.html).

Now, go through this checklist to ensure you take for each of the above areas.

## Step 1: Set up data for accurate tracking

Adding more data will enable you to better target customers, arm agents with more information, and get more granular and accurate reporting.

In addition to adding the [LivePerson tag](getting-started-add-the-liveperson-tag-to-your-website.html) to website pages, brands can also:

* Send [engagement attributes](data-reporting-engagement-attributes-setting-up-engagement-attributes.html) - information about consumers, such as items added to a shopping cart, account status and more - to LivePerson for reporting. Engagement attributes, such as conversions, can be tracked across different sessions or customer visits. Developers can add engagement attribute tracking directly into the LivePerson tag or by scraping.
* Determine the [attribution model](data-reporting-engagement-attributes-attribution-model.html) to enables brands to select how to attribute cross session conversions to agents who handled the conversation.
* Set up LivePerson to track [multiple currencies](data-reporting-engagement-attributes-multi-currency.html) if needed for accurate conversion tracking and reporting even across multiple countries.

## Step 2: Add users and account settings

1. **Account security settings**: review the [security recommendations](security-regulations-security-account-security-recommendations.html) and apply standards based on your brands requirements.
2. **Account Administration:**
   * **Skills** - set up or import the [list of skills](admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html#creating-and-assigning-skills.html) that you’d like conversations routed to.
   * **Users** - set up or import the [list of agents](admin-settings-create-and-manage-users.html), managers or administrators.
   * **Groups/LOB** - [set up groups or lines of business](contact-center-management-campaigns-campaign-settings.html) to reflect how your contact center is organized to reflect in reporting, as well as filter so agents and managers only see relevant conversations and data.
   * **Permissions** - [assign permissions](admin-settings-permissions-assign-permissions.html) or [customize permissions](admin-settings-permissions-customize-permissions.html) based on what actions your users can take in the system.  For example, create a ‘supervisor’ role with permissions to set up and add users.
   * **Timezone** - [set up the time zone](admin-settings-set-the-time-zone.html) of your account for timestamp and reporting purposes.
   * **Languages** - [setup the language](admin-settings-supported-languages.html) for agent workspace.

## Step 3: Design the customer experience

1. **Define the look, feel and behavior of chat buttons and windows:** LivePerson [campaigns](contact-center-management-campaigns-campaigns-overview.html) provide brands with ability to define many aspects of the chat's look and feel, as well as the behavior of website buttons, including:
   * Chat button look and feel
   * Chat window look and feel
   * Rules to trigger button appearance on web pages
   * [Surveys](contact-center-management-live-chat-operations-surveys-with-live-chat.html)
   * Proactive invitations

Read more about [creating buttons and banners](contact-center-management-campaigns-creating-buttons-and-banners.html) in campaigns.

1. **Rich Messaging**: enhancing the conversational experience is crucial to helping brands handle an array of inquiries and actions over live chat. Beyond the regular text, LivePerson enables brands to set up the following [rich messaging](messaging-channels-rich-messaging-rich-messaging-overview.html) and [structured  content](messaging-channels-rich-messaging-rich-messaging-overview.html) capabilities:
   * Photo sharing (consumer to agent)
   * Structured content (cards, carousels, lists)
2. **Add bots**:  automate tasks by greeting consumers with a bot that can immediately answer questions, or route the conversations. Learn how you can easily [create bots](getting-started-getting-started-with-bots.html).
3. **Secure forms**: take payments or verify secure identities of customers using  PCI compliant [secure forms](security-regulations-secure-forms-secure-forms-for-chat-user-guide.html) within the conversation window.

## Step 4: Define the agent experience

1. **Predefined answers**: create or import a database of [predefined content](agent-manager-workspace-workspace-configuration-predefined-content-overview.html) defined by skill and language that your agents can quickly enter into the conversation, saving valuable time.
2. **Custom agent tools**: within the [agent workspace](agent-manager-workspace-agent-tools-for-live-chat-agent-workspace-for-live-chat.html) there are [**widgets**](agent-manager-workspace-workspace-configuration-adding-your-own-widgets.html) that contain additional tools, webpages or applications for agents to use during the conversation. For example there is a custom CRM integration widget that pulls up the record of the customer in an active conversation.
3. **Multiple away states**: by default, your agents can be ‘online’ and available to take messages, ‘busy’, or ‘away’. These [away states](agent-manager-workspace-workspace-configuration-multiple-away-states.html) affect the flow of incoming conversations, and are customizable to give better granularity in reporting agent times - e.g. create an away state for training.
4. **Configure CoBrowse**: For high touch conversations, agents can connect to customers screens and conduct a [CoBrowse session](agent-manager-workspace-agent-tools-for-live-chat-cobrowse-for-live-chat.html).  Administrators can define which agents have this capability.
5. **Agent guide**: Agent training should include your business processes as well as best practices for conducting conversations. LivePerson has developed an expertise in agent training that substantially increases performance.  To learn more, ask account team for specialized training and the LivePerson University.
6. **SSO Login**: brands have the option to connect LivePerson to their company’s secured hub for [SSO integration](Security-regulations-SSO-unified-login.html).

## Step 5: Fine tune operations for greater efficiencies

* [Queue prioritization](contact-center-management-live-chat-operations-queue-prioritization-for-live-chat.html) to rank the order in which conversations enter the agent queue
* [Automatic Conversation Distribution](contact-center-management-live-chat-operations-automatic-conversation-distribution.html) to distribute incoming chats amongst agents
* [Workload distribution](contact-center-management-live-chat-operations-agent-groups-workload-distribution.html) between agent groups for better efficiency
* [Managing the maximum wait times](contact-center-management-live-chat-operations-managing-maximum-wait-times.html)
* [Wrap-up time for chat](contact-center-management-live-chat-operations-wrap-up-time.html)