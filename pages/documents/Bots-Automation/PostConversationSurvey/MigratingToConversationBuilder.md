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

## Migration at a glance

Prepare to migrate

* Step 1 - Export your survey bots from Bot Studio
* Step 2 - Import your survey bots into Conversation Builder
* Step 3 - Review and test your imported bots in Conversation Builder
* Step 4 - Update custom survey reporting in Analytics Builder

Migrate

* Step 5 - Disconnect Bot Studio survey bots from skills
* Step 6 - Assign skills to Conversation Builder survey bots
* Step 7 - Click **Migrate to Conversation Builder**
* Step 8 - Test your survey bots in actual conversations
* Step 9 - Verify survey reporting
* Step 10 - (Optional) Enrich the survey bots with Conversation Builder-only features

## Migration tips

* Before you start the migration, export your bots in Bots Studio format as a back-up.
* The migration from one system to another is going to cause some downtime, so perform the migration during the less-loaded/non-working hours.
* To shorten the downtime and avoid issues, prepare and test everything prior to migration.
* To minimize conversations that are stuck in "Survey in progress," turn off Bot Studio 2-3 hours before the migration (by deleting skills from the survey bots).
* The best way to test bots before the migration is to migrate and test them on a test account first if you have one. If you have a test account, you can then test on all necessary channels. If you don't have a test account, check the converted bots via Conversation Builder's Preview tool before the migration.
* Make sure you are ready to migrate to Conversation Builder before you click the **Migrate to Conversation Builder** button. Once you migrate, only Conversation Builder survey bots will be active, and all Bot Studio bots will no longer work.
* If you're using custom reporting, you need to update the IDs (survey, question and answer), as they will be regenerated. You can do this before the migration. For this, please import the bot into Conversation Builder, and then download the report via the **Bot Settings** page.

## Detailed migration steps

### Prepare to migrate

Steps to prepare for migration are not time-sensitive and will not impact your current survey operations with Bot Studio.

### STEP 1 - Export your survey bots from Bot Studio 

**Outcome of this step**: You will have survey bot definitions ready to import into Conversation Builder.  All Bot Studio survey bots will continue to work without disruption.  

1. Go to Bot Studio.
2. Click **Export All Active**. This downloads all active survey bots definitions in Bot Studio and formats them for Conversation Builder.

    <img style="width:800px" src="img/pcsmigrate1.png">

    If you want to download survey bot definitions one at a time, you can do so by clicking **Export to Conversation Builder format** in a survey bot’s settings.

    <img style="width:800px" src="img/pcsmigrate2.png">

    If any survey bot cannot be exported to Conversation Builder format, then the export will fail for that bot alone. If this happens, you'll need to manually recreate the bot in Conversation Builder. Typically, failures happen when the bot has a custom payload, i.e. you modified the bot via the AC API rather than the Bot Studio UI.

{: .important}
If you want to create a back-up of all the bots in Bot Studio format, you must download each bot separately using the “Export Survey” functionality, shown below.

<img style="width:400px" src="img/pcsmigrate3.png">

### STEP 2 - Import your survey bots into Conversation Builder

**Outcome of this step**: You will have survey bots in Conversation Builder. **Do not assign skills to your survey bots in Conversation Builder until Step 6**. All Bot Studio survey bots will continue to work without disruption.

1. Go to Conversation Builder.
2. [Import](https://developers.liveperson.com/conversation-builder-bots-bot-basics.html#import-a-bot) your survey bots into Conversation Builder using the bot definitions you downloaded in Step 1. The survey bots need to be imported one at a time.

    <img style="width:800px" src="img/pcsmigrate4.png">

### STEP 3 - Review and test your imported bots in Conversation Builder

**Outcome of this step**: You will verify your bot in Conversation Builder’s preview and fix any issues that you discover. Do this for each survey bot you import to Conversation Builder.  All Bot Studio survey bots will continue to work without disruption.

1. Go to Conversation Builder.
2. Select a survey bot.
3. Review all interactions in the selected survey bot.
    * Repair discovered issues, and configure any rules as needed.
    
    **Note**: You will see the warning below. For migrated bots, you can ignore this if you don’t have any changes in the interaction rules after the migration.

    <img style="width:600px" src="img/pcsmigrate5.png">

    * Review the Interaction Delay setting in the interactions.

4. Review the [survey bot settings](https://developers.liveperson.com/conversation-builder-bots-post-conversation-survey-bots.html#configuring-the-survey-bots-settings), specifically:
    * Session Length
    * Email Transcript
    * Thank You message
    * Fallback message
5. Test the survey bot in Conversation Builder’s [Preview tool](https://developers.liveperson.com/conversation-builder-testing-deployment-previewing.html).

    <img style="width:800px" src="img/pcsmigrate6.png">

6. Repeat this process for each survey bot.

### STEP 4 - Update custom survey reports in Analytics Builder

**If you do not have any custom surveys, you can skip this step.**

**Outcome of this step**: You will review any custom survey reports in Analytics Builder, and make any necessary updates to the reports. Custom reports need to be updated primarily for two reasons: 

* As a part of migration to Conversation Builder, survey and question IDs will change and need to be updated.
* Custom, closed-ended survey question reporting is based off of answer position rather than answer value. Update the reports to use the right answer value for column headers; these should be in the same order as the survey response options. 

When making updates to custom reports, make new copies of the reports so that survey reporting is not impacted until you are ready to migrate. All Bot Studio survey bots will continue to work without disruption.

1. Go to Conversation Builder. For each survey bot with custom reporting, access the **Bot Settings**, scroll down to **Generate IDs report**, and click the **Download** icon. This provides a mapping between Bot Studio and Conversation Build IDs. This report is only available for bots imported starting from Oct. 1.
2. Go to Analytics Builder, and open your first custom survey report.
3. Create a copy of the custom report so that you can make updates without breaking Bot Studio reporting.
4. Update any hard-coded survey and question IDs in the report.
5. Update the survey logic for any custom, closed-ended question to apply the appropriate labels for answer positions.
6. Repeat this process for all custom surveys.

**YOU’VE NOW COMPLETED ALL REQUIRED PREPARATION, AND ARE NOW READY TO MIGRATE**

**STOP: BEFORE CONTINUING, VERIFY THAT...**

* You have successfully completed all steps up to this point, including verifying your survey bots and updating custom reporting.
* You are ready to migrate survey traffic to Conversation Builder.

### Migrate

Steps to migrate are time-sensitive and will redirect survey traffic from Bot Studio to Conversation Builder.

### STEP 5 - Disconnect Bot Studio survey bots from skills

**Outcome of this step**: You will stop Bot Studio from sending surveys to consumers.  It’s important to do this before assigning skills to Conversation Builder survey bots so that consumers do not get duplicate survey messages.

1. Go to Bot Studio.
2. Select a survey bot, and remove all skills assigned to it:
    1. Go to **Edit details** for the bot.

        <img style="width:800px" src="img/pcsmigrate7.png">

    2. Click **Assign to skill**.
    3. Click **Clear all**.

        <img style="width:800px" src="img/pcsmigrate8.png">

    4. Click **Publish**.

    <img style="width:500px" src="img/pcsmigrate9.png">

3. Repeat step 2 for all survey bots in Bot Studio.

{: .important}
**For best results**: Ensure that you have 2-3 hours **between** completing this step and Step 7. Conversations that are already active before removing all skills from Bot Studio survey bots need to finish before proceeding. If your session expiration time is set for a longer period of time (e.g., 12 hours), you might need a longer wait period.

### STEP 6 - Assign skills to Conversation Builder survey bots

**Outcome of this step**: Survey bots will be mapped to selected skills. You will **not** start sending surveys from Conversation Builder until **Step 7**.

1. Go to Conversation Builder.
2. Select a survey bot, and assign all desired skills to it:
    1. Go to **Bot Settings** for the bot.

        <img style="width:800px" src="img/pcsmigrate10.png">

    2. Find the **Skills** setting.

        <img style="width:800px" src="img/pcsmigrate11.png">

    3. Assign each desired skill to the bot.
3. Repeat step 2 for each survey bot.

### STEP 7 - Click "Migrate to Conversation Builder"

**Outcome of this step**: Conversation Builder will start sending surveys to consumers.

1. Go to Conversational AI applications.
2. Go to the **Bot Status** application.

    <img style="width:800px" src="img/pcsmigrate12.png">

3. Select **Bot Agents**.

    <img style="width:800px" src="img/pcsmigrate13.png">

4. Go to **PCS Connector**.

    <img style="width:800px" src="img/pcsmigrate14.png">

5. Click the 3-dot menu to the right, and click **Migrate to Conversation Builder**.

    <img style="width:800px" src="img/pcsmigrate15.png">

6. After the migration success message is displayed (this might take a few seconds), refresh the page, and verify that you see a "green" connected status and the list of your survey bots. This means that migration was successful.

    <img style="width:800px" src="img/pcsmigrate16.png">
    <img style="width:800px" src="img/pcsmigrate17.png">

{: .important}
If one or more connector indicators are still red after migrating to Conversation Builder, [refresh surveys](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#refresh-surveys) and [redeploy the connectors](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#redeploy-the-connector), using the same menu in which you used "Migrate to Conversation Builder."

### STEP 8 - Test your survey bots in actual conversations

**Outcome of this step**: You will verify that your survey bots work as expected in actual consumer conversations.

1. Start a conversation on a skill with a survey bot.
2. End the dialog, either by closing the conversation as an agent or through completing the bot flow.
3. Complete the survey dialog.
4. Take note of your survey responses and conversation IDs; you will use those later to verify reporting.
5. Repeat these to verify migration for each survey bot.

Issues that might appear:

* The survey wasn't triggered- You need to reassign skills.
* The survey started but with no or 1 message closed
* Duplicates and messages from Bot Studio
* Some questions are missing - You need to check the interaction.

For help with these issues, see *Troubleshooting* farther below.

### STEP 9 - Verify survey reporting 

**Outcome of this step**: You will verify that survey reporting works as expected. This includes: 

* Standard survey reporting
* Custom survey reporting
* Survey data in messaging history

{: .important}
It takes approximately 24 hours for survey data to become available in Analytics Builder.

1. Check the survey data in the messaging history. Things are good if you see all questions and answers.

    <img style="width:800px" src="img/pcsmigrate18.png">

2. Review the survey data in MCS Toolkit: Using the conversation IDs from **Step 8**, verify that the conversations have the expected survey values.
3. Go to Analytics Builder.
    1. Review the standard survey reports (available after 24 hours).
        * Verify that they are showing results.
        * Pay attention to trends in reporting before and after migration to look for anomalies.
    2. Review the custom survey reports.
        * Verify that they are showing results.
        * Pay attention to trends in reporting before and after migration to look for anomalies.

If you do not see survey data, [refresh the surveys](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#refresh-surveys) to reload your survey configurations. If you still have issues after this, contact your account team or Support.

### STEP 10 - (Optional) Enrich survey bot with Conversation Builder-only features

**Outcome of this optional step**: You might add additional capabilities to your survey bots that don’t exist in Bot Studio, such as:

* Add support for survey sampling
* Target interactive conversations
* Specify a survey Request Interval
 
These features/account-level settings are discussed [here](https://developers.liveperson.com/conversation-builder-bots-post-conversation-survey-bots.html#configure-account-level-settings).


## Troubleshooting

### Why do I see duplicate survey messages?

Message duplication occurs when the survey bot in Conversation builder is assigned to the same skills that were used by the survey bot in Bot Studio, and in Bot Studio, the skills were not deleted prior the migration (see Step 5).

**How it looks**:

<img style="width:400px" src="img/pcsmigrate19.png">

**How to avoid the issue**:

Before the migration, delete all skills from all surveys in Bot Studio (see Step 5).

**How to solve the issue**:

1. In Bot Studio:
    1. For back-up purposes, export all surveys from Bot Studio (in Bot Studio format).
    2. Delete the existing survey bot.

        <img style="width:700px" src="img/pcsmigrate20.png">

2. In Conversation Builder, [redeploy the connector](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#troubleshooting---redeploy-the-connector).

### Why are my conversations stuck in “Survey in progress?”

Conversations that were already open during Step 5 (Disconnect Bot Studio) did not redirect to Conversation Builder automatically following migration in Step 7. These conversations won’t be closed and will be stuck in “Survey in progress.” 

**How to avoid / mitigate the issue**:

* To avoid a large number of conversations with  this issue, we recommend that you perform the migration during less-loaded/non-working hours.
* We also recommend turning off Bot Studio 2-3 hours prior to the migration. If you do this, all open survey conversations will be finalized and closed, and for remaining conversations, the surey conversation won’t be started.

**How to solve the issue**:

If you have conversations in this state, contact your account team or Support for help.

### Why is the message "Survey in progress" displayed for the conversation in Conversational Cloud, but the survey doesn't start for the consumer?

The skill mapping configuration for the survey bot(s) was corrupted during the migration process.

**How to solve the issue**:

Unassign all assigned skills from the bot, reassign them again, and then test. If this doesn't resolve things, contact your account team or Support for help.

### Why is the connector status still RED after migration?

The survey bots weren’t correctly initialized as part of the migration, or the survey configurations weren’t properly loaded.

**How to solve the issue**: 

[Refresh the surveys](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#refresh-surveys) and [redeploy the connectors](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#redeploy-the-connector) to reinitialize and repair the survey configuration. If issues persist, contact your account team or Support for help.

{: .important}
When you refresh the surveys, the survey IDs will be regenerated. After this, you will need to change the IDs everywhere you use them, for example, in custom reporting.

<img style="width:800px" src="img/pcsmigrate21.png">

### I completed migration. However, the survey is not triggering, the survey data is absent, or the survey bots don’t show up in the PCS connector status page. 

**How to solve the issue**:

[Refresh the surveys](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#refresh-surveys) and [redeploy the connectors](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#redeploy-the-connector) to reinitialize and repair the survey configuration. If issues persist, contact your account team or Support for help.

{: .important}
When you refresh the surveys, the survey IDs will be regenerated. After this, you will need to change the IDs everywhere you use them, for example, in custom reporting.

### Conversations stuck in “Survey in progress” status and some questions are missing during the testing via webview

The bot is migrated and was tested via the Preview tool, but during the testing via the Web view:

1. The bot is stuck in “survey in progress” and continues working only after entering something and/or
2. Some questions are missing

**How to solve the issue**:

1. [Redeploy the connector](https://developers.liveperson.com/bots-status-managing-post-conversation-survey-bots.html#redeploy-the-connector) and retest. If the issue is not fixed go to #2 below.
2. Check whether the “missing” interaction is correct.
3. Even if the "missing" interaction is correct, make a minor change and then save the interaction. After saving, you can change it back to how it was and save again.

