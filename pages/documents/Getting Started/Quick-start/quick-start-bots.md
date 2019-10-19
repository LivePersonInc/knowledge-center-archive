---
pagename: Conversation builder quick start
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: Use this tutorial to quickly get started with bot building
level3: ''
permalink: getting-started-quick-start-guides-conversation-builder-quick-start.html
isTutorial: true
date: '2019-01-20T09:10:07.000+00:00'
isNew: true
redirect_from:
- getting-started-quick-start-guides-bots-quick-start.html

---
Create a bot using Conversation Builder.

## Step 1: Add Conversation Builder permissions to the Administrator profile

1. Log in to [LiveEngage](https://authentication.liveperson.net/).
2. On the left sidebar, click the <img style="width:30px" src="img/icon_users.png"> icon. This displays the **Users** tab.
3. Click the **Profiles** tab, and then click the “Administrator” profile name.
4. On the Edit Profile page that appears, enable the following Conversation Builder permissions:
  - Conversation Builder: Administrator
  - Conversation Builder: Content User
  - Conversation Builder: Business User
  - Conversation Builder: Bot Status Access
  - Conversation Builder: Bot Builder
5. Click **Save**, and then click **OK** in the confirmation dialog that appears.
6. In the lower-left corner, click the <img style="width:30px" src="img/icon_person.png"> icon, and then select **Logout** to log out of LiveEngage. Then log in again to “pick up” the new permissions.

## Step 2: Access Conversation Builder

1. In LiveEngage, on the left sidebar, click the <img style="width:30px" src="img/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Conversation Builder**.

## Step 3: Create a bot

1. Click **New Bot** in the upper-right corner.
2. Select the **Custom Bot** template.
3. In the dialog that appears:
  - **Name**: Enter a unique name.
  - **Description**: Enter a meaningful description.
  - **Bot Type**: Leave this set to “Consumer Facing Bot.”
  - **Bot Language**: Select a language.
4. Click **Create Bot**. Since you selected the Custom Bot template, by default this creates a bot with a “Welcome” dialog that matches and responds to simple forms (patterns) of “hello.” The bot also has a Fallback dialog with some fallback text.
5. Click the Welcome and Fallback tabs in the lower-left corner to open and examine both dialogs.
6. Preview the bot:
    1. Click the <img style="width:30px" src="img/icon_preview.png"> icon in the lower-right corner of the screen to open the Preview window.
    2. Enter “hello.” You will see the response, “Hi there! Thanks for coming!”

**Congratulations!** You’ve just created your first bot!

## Step 4: Dive Deeper (Optional)

Want to try your hand at changing the bot?

**Add a new pattern**
1. If the Welcome dialog isn't already open, click the Welcome tab in the lower-left corner to open it.
2. Select the first tile **(1)**, and then click the **Interaction Details** icon **(2)** beside it to open its Interaction Details window.

    <img style="width:600px" src="img/cb_window1.png">

3. In the Interaction Details window, click **Settings**.
4. In the Patterns section, click **Add New**.    
5. Enter "aloha," and press Enter.

     <img style="width:400px" src="img/cb_window2.png">

6. Click **Save**.
 
<br>
**Preview the bot again**

1. Open the Preview window like you did before, and start a new session by entering “reset” in the window. You’ll need to start a new session to “pick up” the change you just made.
2. Enter “aloha.” You will see that the bot responds to this new greeting with the same response as before.

To learn how to extend the bot and connect it to LiveEngage, complete the tutorials listed below.

## Conversation Builder tutorials

Want to learn more? Check out these, more in-depth tutorials:

* [Video Tutorials](https://developers.liveperson.com/conversation-builder-getting-started-0-video-tutorials.html)
* [Dialogs and Patterns](https://developers.liveperson.com/conversation-builder-getting-started-1-dialogs-and-patterns.html)
* [Intents](https://developers.liveperson.com/conversation-builder-getting-started-2-intents.html)
* [Integrations](https://developers.liveperson.com/conversation-builder-getting-started-3-integrations.html)
* [Connect to LiveEngage](https://developers.liveperson.com/conversation-builder-getting-started-4-connect-to-liveengage.html)

## Additional resources

* [Web Messaging Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-messaging-quick-start.html)
* [Facebook Messenger Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-facebook-messenger-quick-start.html)
* [SMS Messaging Quick Start](https://knowledge.liveperson.com/getting-started-quick-start-guides-twilio-sms-quick-start.html)