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
 
If you're an existing Bot Studio user with survey bots built in Bot Studio, the Post-Conversation Survey Bots feature in Conversation Builder is enabled by default.
 
Be aware that bots in Bot Studio and Conversation Builder cannot run side by side. You'll need to manually recreate your existing Bot Studio survey bots in Conversation Builder. LivePerson recommends the following workflow:
 
1. In Conversation Builder, manually recreate your survey bots. (If you're developing in your Production environment, which is not common and not recommended, assign the survey bots to "test" skills that aren't used in a production campaign, so you can test them before assigning production skills to them.) 
2. Test the survey bots.
3. Release the new survey bots to your Production environment.
4. Use the Bots Status application to migrate your account from Bot Studio to Conversation Builder. For details on this, see farther below.
 
{: .important}
While you're completing steps 1 - 3, you can continue to use Bot Studio. Once you complete step 4, you can no longer use Bot Studio.

## Migration tasks performed in Bot Studio

At runtime, the name of the survey bot agent that is shown to the consumer in the messaging window is drawn from Bot Studio. In Bot Studio, remove this name so that the default name of "Survey Bot" is used instead.

## Migration tasks performed in Bots Status

You can use the Bots Status application to monitor your post-conversation survey bots and to perform several migration-related tasks:

* Migrate to Conversation Builder
* Refresh the survey bot connector
* Roll back to Bot Studio

As you work in Bots Status, be aware of the following:
 
* You can identify survey bots by examining the **User Name**. This is always "Survey Connector." In contrast, custom bots display the agent name that's configured in Conversational Cloud.
* While each survey bot is listed individually in the dashboard, they all share a single agent connector. This means that performing any operation on one survey bot affects all the survey bots.
* Successfully deployed survey bots display "Deployed" beneath the bot name.
 
<img style="width:1000px" src="img/surveyBot_monitoring1.png">
 
### Migrate to Conversation Builder
 
If you currently use Bot Studio to trigger surveys, you must *manually switch* to triggering surveys from Conversation Builder. Follow this procedure after you've finished with survey development and testing using Conversation Builder.
 
**To migrate to Conversation Builder**
 
1. Access the Bots Status application as described [here](https://developers.liveperson.com/bots-status-overview.html#access-bots-status) in the Developer Center.
2. Use the filter controls to display the survey bots for the relevant environment.
3. Select one of the survey bots, and click <img style="width:25px" src="img/icon_ellipsis_vertical.png"> (3-dot icon) beside the bot name.
4. Select **Migrate to Conversation Builder**.
 
    A confirmation message appears to indicate that the account has been migrated to Conversation Builder.
 
    <img style="width:1000px" src="img/surveyBot_monitoring4.png">
 
    Subsequently, the page is refreshed. You should see each survey bot listed individually with a "Deployed" indicator.
 
     <img style="width:1000px" src="img/surveyBot_monitoring5.png">
 
### Refresh the survey bot connector
 
If you've just migrated from Bot Studio to Conversation Builder, but things don't seem to be working, use this procedure as a troubleshooting technique. Refreshing the connector toggles an underlying system setting to put things in sync.
 
**To refresh the survey bot connector**
 
1. Access the Bots Status application as described [here](https://developers.liveperson.com/bots-status-overview.html#access-bots-status) in the Developer Center.
2. Use the filter controls to display the survey bots for the relevant environment.
3. Select one of the survey bots, and click <img style="width:25px" src="img/icon_ellipsis_vertical.png"> (3-dot icon) beside the bot name.
4. Select **Refresh Connector**.
 
### Roll back to Bot Studio
 
Rolling back to Bot Studio reverts your account to triggering surveys from Bot Studio instead of Conversation Builder. This undeploys the survey connector in Conversation Builder.
 
**To roll back to Bot Studio**
 
1. Access the Bots Status application as described [here](https://developers.liveperson.com/bots-status-overview.html#access-bots-status) in the Developer Center.
2. Use the filter controls to display the survey bots for the relevant environment.
3. Select one of the survey bots, and click <img style="width:25px" src="img/icon_ellipsis_vertical.png"> (3-dot icon) beside the bot name.
4. Select **Roll back to Bot Studio**.
    
    A confirmation message appears to indicate that the account has been rolled back to Bot Studio.
 
    <img style="width:1000px" src="img/surveyBot_monitoring2.png">
 
    Subsequently, the page is refreshed. You should see a single, undeployed survey connector.
 
     <img style="width:1000px" src="img/surveyBot_monitoring3.png">
