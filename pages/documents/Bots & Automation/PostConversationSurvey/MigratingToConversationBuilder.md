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
 
1. In Bot Studio, remove the bot agent name from your survey bots, so you can use the default name of "Survey Bot" that's provided by Conversation Builder. See *Migration tasks performed in Bot Studio* below.
2. In Conversation Builder, manually [recreate your survey bots](https://developers.liveperson.com/conversation-builder-bots-post-conversation-survey-bots.html). (If you're developing in your Production environment, which is not common and not recommended, assign the survey bots to "test" skills that aren't used in a production campaign, so you can test them before assigning production skills to them.) 
3. Test the survey bots and related reporting.
4. Release the new survey bots to your Production environment.
5. Use the Bots Status application to migrate your account from Bot Studio to Conversation Builder. See *Migration tasks performed in Bots Status* below.
 
{: .important}
While you're completing steps 1 - 4 above, you can continue to use Bot Studio. Once you complete step 5, you can no longer use Bot Studio.

## Migration tasks performed in Bot Studio

At runtime, the name of the survey bot agent that's shown to the consumer in the messaging window is drawn from Bot Studio if it set there. Before migrating to Conversation Builder, use Bot Studio to remove this bot agent name. This allows the default name of "Survey Bot" to be used instead.

## Migration tasks performed in Bots Status

Use the Bots Status application to perform several migration-related tasks:

* Migrate to Conversation Builder
* Troubleshooting - Refresh the survey bot connector
* Troubleshooting - Roll back to Bot Studio

As you work in Bots Status, be aware of the following:
 
* While each survey bot is listed individually in the dashboard, they all share a single agent connector. This means that performing any Bots Status operation on the agent connector affects all the survey bots.
* Successfully deployed survey bots display "Deployed" beneath the bot name.
 
<img style="width:1000px" src="img/surveyBot_monitoring1.png">
 
### Migrate to Conversation Builder
 
If you currently use Bot Studio to trigger surveys, you must *manually switch* to triggering surveys from Conversation Builder. Follow this procedure after you've finished with survey development and testing using Conversation Builder. This operation deploys the underlying agent connector that's shared by all Conversation Builder survey bots.
 
**To migrate to Conversation Builder**
 
1. Access the Bots Status application as described [here](https://developers.liveperson.com/bots-status-overview.html#access-bots-status) in the Developer Center.
2. Click the **PCS Connector** tab.
3. Click the 3-dot icon beside the agent connector, and select **Migrate to Conversation Builder**.
 
    A confirmation message appears to indicate that the account has been migrated to Conversation Builder. Subsequently, the page is refreshed. You should see each survey bot listed individually with a "Deployed" indicator.
 
     <img style="width:1000px" src="img/surveyBot_monitoring5.png">
 
### Troubleshooting - Refresh the survey bot connector
 
If you've just migrated from Bot Studio to Conversation Builder, but things don't seem to be working, use this procedure as a troubleshooting technique. Refreshing the connector toggles an underlying system setting to put things in sync.
 
**To refresh the survey bot connector**
 
1. Access the Bots Status application as described [here](https://developers.liveperson.com/bots-status-overview.html#access-bots-status) in the Developer Center.
2. Click the **PCS Connector** tab.
3. Click the 3-dot icon beside the agent connector, and select **Refresh Connector**.
 
### Troubleshooting - Roll back to Bot Studio
 
Rolling back to Bot Studio reverts your account to triggering surveys from Bot Studio instead of Conversation Builder. This undeploys the survey connector in Conversation Builder.
 
**To roll back to Bot Studio**
 
1. Access the Bots Status application as described [here](https://developers.liveperson.com/bots-status-overview.html#access-bots-status) in the Developer Center.
2. Click the **PCS Connector** tab.
3. Click the 3-dot icon beside the agent connector, and select **Roll back to Bot Studio**.
    
    A confirmation message appears to indicate that the account has been rolled back to Bot Studio. Subsequently, the page is refreshed. You should see an undeployed agent connector.
 
     <img style="width:1000px" src="img/surveyBot_monitoring3.png">
