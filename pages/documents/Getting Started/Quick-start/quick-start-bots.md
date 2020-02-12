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

## Step 1: Log in and access Conversation Builder

1. Log in to [LiveEngage](https://authentication.liveperson.net/).
2. On the left sidebar, click the bot icon.
3. In the Conversational AI dashboard, click **Conversation Builder**.

## Step 2: Create a bot

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

## Step 3: Dive deeper (optional)

Want to try your hand at changing the bot?

**Add a new pattern**
1. If the Welcome dialog isn't already open, click the Welcome tab in the lower-left corner to open it.
2. Select the first interaction **(1)**, and then click the **Interaction Details** icon **(2)** beside it to open its Interaction Details window.

    <img style="width:600px" src="img/cb_window1.png">

3. In the Interaction Details window, click **Settings**.
4. In the Patterns section, click **Add New**.    
5. Enter "aloha," and press Enter.

     <img style="width:400px" src="img/cb_window2.png">

6. Click **Save**.
 
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