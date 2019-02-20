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

To get the most basic version of live chat up means you have to insert a generic ‘chat’ button into your website. Getting to the first message is simple and can be done in three steps:

1. Your website administrators or developers need to add the [LivePerson tag](getting-started-add-the-liveperson-tag-to-your-website.html) (piece of code) to every page of the website where you'd like chat to appear.  See instructions on how to[ insert the code](getting-started-add-the-liveperson-tag-to-your-website.html).
2. Create users for the agents that will be taking the conversations.  See how to [set up users](admin-settings-create-and-manage-users.html).
3. Once the code is up and an agent is logged into the system, all agents must set their status to ‘online’. Doing so will automatically enable the chat button on the website to begin accepting incoming chats.

{: .notice} The basic set up means there will be no routing - every agent will receive all messages

## Customize your chat program

LivePerson is the most advanced platform for any size organization, offering a slew of customization capabilities.  To ensure you are getting the most out of live chat, develop and set up your preferences in three areas:

* **Customer experience:** design what your consumers will see when they interact with your brand by [adding a live chat window](messaging-channels-live-chat-add-live-chat-to-your-website.html) to your website. Customize the banners, buttons and automatic text. You can also start to [add bots and automation](getting-started-getting-started-with-bots.html) to be the first to respond to incoming conversations.
* **Agent experience**: set up the [agent experience](agent-manager-workspace-agent-tools-for-live-chat-agent-workspace-for-live-chat.html) to ensure your reps can easily communicate with consumers, including predefined content and custom widgets.
* **Management & operations**: set up all agents [skills](admin-settings-skills-groups-set-the-agent-group-hierarchy.html) and LOBs, [routing](/contact-center-management-live-chat-operations-automatic-conversation-distribution.html), [agent workload](contact-center-management-live-chat-operations-agent-groups-workload-distribution.html), and [queue priority](contact-center-management-live-chat-operations-queue-prioritization-for-live-chat.html).

Now, go through this checklist to ensure you take for each of the above areas.

## Step 1: Set up data for accurate tracking

Adding more data will enable you to better target customers, arm agents with more information, and get more granular and accurate reporting.

In addition to adding the [LivePerson tag](getting-started-add-the-liveperson-tag-to-your-website.html) to website pages, brands can also:

* Send [engagement attributes](data-reporting-engagement-attributes-setting-up-engagement-attributes.html) - information about consumers, such as items added to their shopping cart, account status and more - to LivePerson for reporting. Engagement attributes, such as conversions, can be tracked across different sessions or customer visits. Developers can add engagement attribute tracking directly into the LivePerson tag or by scraping. 
* Determine the [attribution model](data-reporting-engagement-attributes-attribution-model.html) to enables brands to select how to attribute cross session conversions to agents who handled the conversation.  
* Set up LivePerson to track [multiple currencies](data-reporting-engagement-attributes-multi-currency.html) if needed for accurate conversion tracking and reporting even across multiple countries .

## Step 2: Add users and account settings

1. **Account security settings**: review the [security recommendations](security-regulations-security-account-security-recommendations.html) and apply standards based on your brands requirements.
2. **Account Administration:**
   * **Skills** - set up or import the [list of skills](admin-settings-skills-groups-set-the-agent-group-hierarchy.html) that you’d like conversations routed to.
   * **Users** - set up or import the [list of agents](admin-settings-create-and-manage-users.html), managers or administrators.
   * **Groups/LOB** - [set up groups or lines of business](contact-center-management-campaigns-campaign-settings.html) to reflect how your contact center is organized to reflect in reporting, as well as filter so agents and managers only see relevant conversations and data.
   * **Permissions**: [assign permissions](admin-settings-permissions-assign-permissions.html) or [customize permissions](admin-settings-permissions-customize-permissions.html) based on what actions your users can take in the system.  For example, create a ‘supervisor’ role with permissions to set up and add users.
   * **Timezone**: [set up the timezone](admin-settings-set-the-time-zone.html) of your account for timestamp and reporting purposes.
   * **Languages**: [setup the language](admin-settings-supported-languages.html) for agent workspace.

## Step 3: Design the customer experience

1. **Define the look, feel and behavior or chat buttons and windows:** LivePerson ‘campaigns’ provide you with granularity to define many aspects of the chat look and feel as well as the behavior buttons on your website, including:
   * Chat button look and feel
   * Chat window look and feel
   * Rules to trigger button appearance on your web pages
   * Surveys
   * Proactive invitations

   Read more: detailed instructions for creating chat campaigns.

**2. Rich Messaging**: enhancing the conversation is crucial to enable you to handle more types of inquiries and actions over live chat. Beyond the regular text, LivePerson enables you to set up the following rich messaging capabilities:

    * Photo sharing (consumer to agent)
    * Structured content (cards, carousels, lists)

**3. Add bots**: create a better customer experience by greeting your consumers with a great bot that can immediately answer some of their questions, or route the conversation accordingly.  You can create bots easily using the LivePerson Conversation Builder.

**4. Secure forms**: you can take payments or verify secured identify of customers using the pci-compliant secure form within the conversation window.

## Step 4: Define the  agent experience

1. **Predefined answers**: create or import a database of answers that your agents can quickly enter into the conversation, saving them valuable typing time. These can be defined by skill and by language.
2. **Custom agent tools**: within the agent workspace, ‘widgets’ contain additional tools, webpages or applications that agents can use during the conversation.  The most popular custom widget is CRM integration that pulls up the record of the customer in an active conversation.
3. **Multiple away states**: by default, your agents can be ‘online’ and available to take messages, ‘busy’, or ‘away’.  These status affect the flow of new incoming conversations to the agents.  You can customize the states agents can choose from to get better granularity on agent time reporting - e.g. create an away state for training.
4. **Configure Cobrowse**: For high touch conversations, agents can connect to customers screens and conduct a Cobrowse session.  Administrators can define and determine which agents have this capability.
5. **Agent guide**: Get your agent trained on how to take messages.  Note that agent training should include your business processes as well as best practices for conducting conversations.  LivePerson has developed an expertise in agent training that substantially increases performance.  To learn more, visit the LivePerson University or contact your account team for specialized training.
6. **SSO Login**: you have the option to connect LivePerson to your company’s secured hub for SSO integration.

## Step 5: Fine tune operations for greater efficiencies

* Queue Prioritization: rank the order in which oncoming conversations come into the agent queue
* Automatic Conversation Distribution: how incoming chats are distributed amongst your agents
* Workload distribution between agent groups
* How to Use 'Ignore Max Wait Time
* Wrap-up time for chat