---
pagename: Migrating from Bot Studio to Conversation Builder
categoryName: Getting started
subCategoryName: Post-conversation surveys
indicator: messaging
subtitle: Create survey bots with the same, familiar tool that you use to create custom bots
level3: Getting started
permalink: ai-bots-automation-post-conversation-surveys-migrating-from-bot-studio-to-conversation-builder.html
isTutorial: true
isNew: false
date: 2020-08-12 14:03:55 +0000
redirect_from:

---

## High-level migration workflow

1. In your *Production* environment:

    1. In **Bot Studio**, perform pre-requisite steps and verification checks on the survey bot. Then export the bot. If you have multiple bots, you can export them all at once if desired.

2. In your *Test* environment:
    
    1. In **Bots Status**, migrate your Test account from Bot Studio to Conversation Builder.
    2. In **Conversation Builder**, import the survey bot that you exported from Bot Studio. Configure it and fix any errors. Preview the bot, test it via the target channel, and test related reporting. Export the verified bot.

3. In your *Production* environment:

    1. In **Bots Status**, migrate your Production account from Bot Studio to Conversation Builder.
    2. In **Conversation Builder**, import the verified bot. Configure the bot as needed. Preview and test again.

**Note:**
* An account can’t serve surveys from Bot Studio and Conversation Builder at the same time. Once you migrate to Conversation Builder, it must be used. However, if necessary, you can roll back the account to using Bot Studio. This is described farther below.
* You don't manually deploy a Conversation Builder survey bot. There exists an underlying agent connector that's deployed automatically and is shared by all survey bots. *Therefore, once the survey bot is created and assigned a skill in Conversation Builder, it is active and can receive conversations.*

## Detailed migration workflow

### Step 1: In your Production environment

#### Perform prerequisite steps in Bot Studio
At runtime, the name of the survey bot agent that's shown to the consumer in the messaging window is drawn from Bot Studio if it is set there. Before migrating to Conversation Builder, use Bot Studio to remove this bot agent name. This allows the default name of "Survey Bot" to be used instead.

#### Perform verification checks in Bot Studio
In Bot Studio, verify that the possible answers to all survey questions don’t contain any extra space characters. When these are converted to answer choices in the Conversation Builder bot, extra spaces can negatively affect recognition of the consumer’s response when they provide it through text input.

#### Export the bot from Bot Studio
While you’re still in Bot Studio, export the survey bots bot to Conversation Builder.

You can download active survey bots all at once using the **Export All Active** button. This creates a ZIP file that contains one JSON file for each bot.

<img style="width:350px" src="img/surveyBot_export1.png">

Or, you can download an active or inactive survey bot individually using the **Export to Conversation Builder format** menu option. This creates a JSON file for the selected bot.

<img style="width:300px" src="img/surveyBot_export2.png">

Download the files and save them as a back-up. 

Later, you’ll import the JSON files into Conversation Builder.

{: .important}
If you attempt to export a survey bot that can’t be processed by the export tool, export of only this bot will fail. You are notified with a message when this happens. You’ll need to manually recreate the bot in Conversation Builder instead. An export failure can happen if the bot has a custom payload (i.e., you’ve modified the bot directly via the AC API, not using the Bot Studio UI) or if it uses an older format. 

### Step 2: In your Test environment

#### Migrate your account to Conversation Builder
Access the **Bots Status** application, and migrate your Test account from Bot Studio to Conversation Builder. For help with this step, see *Migration tasks performed in Bots Status > Migrate to Conversation Builder*, which is farther below.

#### Import the survey bot
Switch to the **Conversation Builder** application, and [import the survey bot](https://developers.liveperson.com/conversation-builder-bots-bot-basics.html#import-a-bot) that you exported from Bot Studio.

#### Configure the bot and fix errors
Within Conversation Builder, in the bot’s **Bot Settings**, configure the following:

* **Skill**: Select the skills that will trigger the survey bot. A skill can be assigned to only one survey bot. (You can add skills in Conversational Cloud.)
* **Name**: Change the bot name if desired. By default, the name is the original name from Bot Studio plus the timestamp of the import. 

Review the bot’s structure and overall configuration to ensure they meet your requirements. Noteworthy items that might need changing include:

* **Session Length bot setting**: If the original duration doesn’t match one of the options available in Conversation Builder, the Session Length is rounded up to an available option. Additionally, Conversation Builder has a maximum value of 12 hours; this is enforced.
* **Interaction Delay interaction setting**: Conversation Builder has a maximum value of 10000 milliseconds (10 seconds); this is enforced.
* **Email Transition**: If you used this Bot Studio brick to add support for emailing a transcript of the main conversation to the consumer at the end of the survey, this brick is converted to a Conversation Builder [Email Transcript interaction](https://developers.liveperson.com/conversation-builder-bots-post-conversation-survey-bots.html#adding-support-for-emailed-transcripts), which is configured accordingly. Please check this interaction’s settings to ensure they are as you require. For example, you might want to change the label for the Decline button.
* **Thank You message**: If you manually added a Thank You message, you’ll need to reimplement this using Conversation Builder functionality. For help with this, see the discussion on [adding support for a Thank You message](https://developers.liveperson.com/conversation-builder-bots-post-conversation-survey-bots.html#adding-support-for-a-thank-you-message) in the Developer Center.

Also check the bot for displayed yellow warning indicators and red error messages. Not every custom implementation of a Bot Studio survey bot can be converted cleanly to Conversation Builder. As a result, you might need to manually resolve some errors.

#### Preview and test
Preview the bot’s flow. Then test it via the target channel, and test related reporting. 

#### Export the verified bot
Export the verified bot.

### Step 3: In your Production environment

#### Migrate your account to Conversation Builder
Access the **Bots Status** application, and migrate your Production account from Bot Studio to Conversation Builder. For help with this step, see *Migration tasks performed in Bots Status > Migrate to Conversation Builder*, which is farther below.

#### Import the verified bot
Change to the **Conversation Builder** application, and import the verified bot that you exported from your test environment.

#### Configure the bot and test again
Configure the bot as needed: Here again, in the **Bot Settings**, configure the skills that will trigger the survey bot and adjust the bot name (remove the timestamp). Then preview and test again.

### Troubleshooting

After migration of your bot, if you experience duplicate bot responses, do the following:

1. In Bot Studio, export all necessary surveys in Bot Studio format. Do this is a back-up measure.
2. Still in Bot Studio, delete the survey bot.
3. In Bots Status, [redeploy the agent connector](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#troubleshooting---redeploy-the-connector) for the Conversation Builder survey bots.

## Migration tasks performed in Bots Status

Use the Bots Status application to perform several migration-related tasks:

* Migrate to Conversation Builder (see below)
* Troubleshooting - Roll back to Bot Studio (see below)
* Troubleshooting - Refresh the survey bot connector (see [here](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html) in the Developer Center)
* Troubleshooting - Refresh the surveys (see [here](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html) in the Developer Center)

    *In a migration scenario in particular*, you might need to refresh the surveys as a troubleshooting technique if, after the migration, you find that some or all survey bots are missing on the **PCS Connector** page in Bots Status. Also, you might need to do so if you find that one of the connectors is “red” (bot agent connector, Conversational Cloud connector, Bot Server connection).

* Troubleshooting - Redeploy the survey bot connector (see [here](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html) in the Developer Center)

As you work in Bots Status, be aware of the following:
 
* While each survey bot is listed individually in the dashboard, they all share a single agent connector. This means that performing any Bots Status operation on the agent connector affects all the survey bots.
* Successfully deployed survey bots display "Deployed" beneath the bot name.
 
<img style="width:1000px" src="img/surveyBot_monitoring1.png">
 
### Migrate to Conversation Builder
 
If you currently use Bot Studio to trigger surveys, you must *manually switch* to triggering surveys from Conversation Builder. Follow this procedure after you've finished with survey development and testing using Conversation Builder. This operation deploys the underlying agent connector that's shared by all Conversation Builder survey bots.
 
**To migrate to Conversation Builder**
 
1. Access the Bots Status application as described [here](https://developers.liveperson.com/bots-status-overview.html#access-bots-status) in the Developer Center.
2. Click **Bot Agents** in the upper-left corner, and then click the **PCS Connector** tab.
3. Click the 3-dot icon beside the agent connector, and select **Migrate to Conversation Builder**.
 
    A confirmation message appears to indicate that the account has been migrated to Conversation Builder. Subsequently, the page is refreshed. You should see each survey bot listed individually with a "Deployed" indicator.
 
     <img style="width:800px" src="img/surveyBot_monitoring5.png">

### Troubleshooting - Roll back to Bot Studio
 
Rolling back to Bot Studio reverts your account to triggering surveys from Bot Studio instead of Conversation Builder. This undeploys the survey connector in Conversation Builder.
 
**To roll back to Bot Studio**
 
1. Access the Bots Status application as described [here](https://developers.liveperson.com/bots-status-overview.html#access-bots-status) in the Developer Center.
2. Click **Bot Agents** in the upper-left corner, and then click the **PCS Connector** tab.
3. Click the 3-dot icon beside the agent connector, and select **Roll back to Bot Studio**.
    
    A confirmation message appears to indicate that the account has been rolled back to Bot Studio. Subsequently, the page is refreshed. You should see an undeployed agent connector.
 
     <img style="width:1000px" src="img/surveyBot_monitoring3.png">
