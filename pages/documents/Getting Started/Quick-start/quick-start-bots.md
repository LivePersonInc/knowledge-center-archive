---
pagename: Conversation Builder quick start
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: Use this quick start guide to build your first bot
level3: ''
permalink: getting-started-quick-start-guides-conversation-builder-quick-start.html
isTutorial: true
date: '2019-01-20T09:10:07.000+00:00'
isNew: true
redirect_from:
- getting-started-quick-start-guides-bots-quick-start.html

---

Create a "Hello World" bot using Conversation Builder.

## Step 1: Log in and access Conversation Builder

1. Log in to [LiveEngage](https://authentication.liveperson.net/).
2. On the left sidebar, click the bot icon.
3. In the Conversational AI dashboard, click **Conversation Builder**.

## Step 2: Create a "Hello World" bot

1. Click **New Bot** in the upper-right corner.
2. Select the **Custom Bot** template.
3. In the dialog that appears:
  - **Name**: Enter a unique name.
  - **Description**: Enter a meaningful description.
  - **Bot Language**: Select a language.
4. Click **Create Bot**. Since you selected the Custom Bot template, by default this creates a bot with a “Welcome” dialog that matches and responds to simple forms (patterns) of “hello.” The bot also has a Fallback dialog with some fallback text.
5. Click the **Welcome** and **Fallback** tabs in the lower-left corner to open and examine both dialogs.
6. Preview the bot:
    1. Click the <img style="width:30px" src="img/icon_preview.png"> icon in the lower-right corner of the screen to open the Preview window.
    2. Enter “hello.” You will see the response, “Hi there! Thanks for coming!”

**Congratulations!** You’ve just created your first bot!

## Step 3: Customize the interaction

### Add a new pattern
1. If the Welcome dialog isn't already open, click the Welcome tab in the lower-left corner to open it.
2. Select the first interaction **(1)**, and then click the **Interaction Details** icon **(2)** beside it to open its Interaction Details window.

    <img style="width:600px" src="img/cb_window1.png">

3. In the Interaction Details window, click **Settings**.
4. In the Patterns section, click **Add New**.    
5. Enter "aloha," and press Enter.

     <img style="width:400px" src="img/cb_window2.png">

6. Select the second interaction, and change the text statement from "Hi there!" to "Hello World!"
7. Click **Save**.
 
### Preview the bot again

1. Open the Preview window like you did before, and start a new session by entering “reset” in the window.
2. Enter “aloha.” You will see that the bot responds to this new greeting with the same response as before.

To learn how to extend the bot and connect it to LiveEngage, complete the tutorials listed below.

## Step 4: Connect your bot to LiveEngage

### Create the skill and user agent

In this step, you create a user agent for the bot. The user agent will have an assigned skill, which you'll create first.

1. Click the **Manage users and skills** icon on the left toolbar.

    <img style="width:200px" src="img/cb_users_skills_icon.png">

2. Click the **Skills** tab, and then click **Add skill** at the bottom of the page.

    <img style="width:600px" src="img/cb_skills_tab.png">

3. On the Add Skill page, specify the following:

    * **Name**: Enter "BotSkill."
    * **Description**: Enter "Bot skill."

4. Click **Save**.

    The BotSkill skill will be the default skill connected to the bot agent.
    
    Next, you create a user agent for the bot.

5. Click the **Users** tab, and then click the **Add user** button at the bottom of the page.

    <img style="width:600px" src="img/cb_users_tab.png">

6. On the Add User page, specify the following:

    * **User type**: Set this to "Bot." If you don't see this field, contact your LivePerson representative to enable this for you.
    * **Login name**: Enter any value, e.g., "myBotUser."
    * **Email**: Enter any value, such as your own email address.
    * **Nickname**: Enter any value, e.g., "Bot User."
    * **Name**: Enter any value, e.g., "Bot User."
    * **Choose login method**: Select "API key," and then, for **Api key**, select "Generate API key" from the dropdown list. This fills in the keys automatically. If you don't see the "API key" option, contact your LivePerson representative to enable this for you.
    * **Assignment**: Click this field, and select "Agent" from the list that appears.
    * **Max no. live chats**: Select "Unlimited."
    * **Skills**: Click this field, and select "BotSkill" from the list that appears. This is the default bot skill. **Do NOT add additional skills.**

    <img style="width:400px" src="img/cb_assignment.png">

7. Click **Save**.

### Assign the bot skill to an engagement

You will test the connection with a standard Messaging engagement, so now you create a campaign and an engagement that routes to the new BotSkill skill.

1. Click the **Manage campaigns and engagements** icon on the left toolbar.

    <img style="width:400px" src="img/cb_campaigns_icon.png">

2. Click the **Add campaign** button at the bottom of the page.

    <img style="width:600px" src="img/cb_campaigns_tab.png">

3. On the page that appears, specify the following:

    * **Campaign name**: Enter "My Bot Test."
    * **Campaign goal**: Click **+ Add goal**, select "Interact with consumers" on the page that appears, and click **Done**.
    * **Engagement**: Click **+ Add engagement**. For the engagement source, select "Web." In the gallery that appears next, select a messaging template, and click **Next**. In the Engagement Settings that appear next, select "Messaging" for the **Conversation type**. For **Routing**, select "Specific skill," and then select the "BotSkill" skill.

    <img style="width:400px" src="img/cb_engagement_settings.png">

4. Click **Next**.
5. In the Engagement Studio, click **Next**.
6. In the Engagement Window Library, click **Done**.

    <img style="width:800px" src="img/cb_campaign.png">

7. Click **Publish** in the upper-right corner, and then click **Publish** again to confirm the action.

### Deploy the bot to LiveEngage

Next, you use Conversation Builder to connect your bot to the bot agent you just created and get the connection running in the Demo environment.

1. Return to Conversation Builder by clicking the **Manage conversation AI and bots** icon on the toolbar on the left.

    <img style="width:300px" src="img/cb_cb_icon.png">

2. Open your Hello Word bot.
3. Click **Agent Connectors** on the menu bar in the upper-right corner.
4. Click **New Bot Connector** in the upper-right corner, just under the menu bar.
5. In the Add Agent Connector dialog box, specify the following based on the bot user you created.

    * **Agent User ID**: Select “myBotUser.” This is the login name you used for the user agent.
    * **Role**: Select "Agent."
    * **Conversation Type**: Select "Messaging."
    * **Deploy to**: Select "Demo." The Demo environment is a testing environment.

6. Click **Save**.

    <img style="width:800px" src="img/cb_agent_connector_1.png">

7. Click the **Start** button to start the agent connector. This fully deploys the bot. It might take a few minutes for the connection to be established.

    <img style="width:800px" src="img/cb_agent_connector_2.png">

### Test your bot

1. In a browser, navigate to [this test page](https://vx-lp.github.io/v2/lpwm/).

    <img style="width:700px" src="img/cb_test_page.png">

2. Enter your account number and username (just your first name will do fine), and then click **Update**.
3. Click the Messaging call to action.

    <img style="width:700px" src="img/cb_call_to_action.png">

    This connects you with the bot in the BotSkill skill.

4. Test the bot. In the Messaging window, enter a greeting (such as "aloha"), and press Enter.

    <img style="width:300px" src="img/cb_bot_conversation.png">


## Step 5: Expand the capabilities of your bot

* **[Extended Getting Started tutorial](https://developers.liveperson.com/conversation-builder-tutorials-guides-getting-started.html)**: Expand the capabilities of your bot using intents and integrations. Learn how to transfer a bot conversation to a live agent.

* **[Bot templates](https://developers.liveperson.com/conversation-builder-bot-templates-overview.html)**: Reference bots for common use cases including Routing, FAQ, Lead Generation and Order Status.

* **[Intent Builder](https://developers.liveperson.com/intent-builder-overview.html)**: Learn about intents, how to build new ones and how to incorporate them into your bot.

* **[Bot Analytics](https://developers.liveperson.com/bot-analytics-overview.html)**: Visualize and tune the performance of your bot with usage and intent matching metrics.

* **[Video tutorials](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-getting-started-tutorials.html)**: Learn about basic bot building concepts in a set of four videos.

## Additional quick start guides

* [Web messaging quick start](https://knowledge.liveperson.com/getting-started-quick-start-guides-messaging-quick-start.html)
* [Facebook Messenger quick start](https://knowledge.liveperson.com/getting-started-quick-start-guides-facebook-messenger-quick-start.html)
* [SMS messaging quick start](https://knowledge.liveperson.com/getting-started-quick-start-guides-twilio-sms-quick-start.html)