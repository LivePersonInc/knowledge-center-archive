---
pagename: Week of July 12th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-july-week-of-july-12th.html
isTutorial: false
isNew: false
date: '2021-07-07'

---

These release notes include new features arriving July 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New Version of Context Service 
### Type: Upgrade [Context Service V2]

Available to all customers? No - This is only available to brands that are using v2 of the Context Service. All accounts will gradually be migrated from v1 to v2 starting July 2021 through to the end of the year.

We have released new versions of Context Service and Next Actions APIs. The new versions have the following additional benefits: 
* Higher scalability
* Visibility into Dynamic Routing policy execution logs
* Better APIs i.e. update multiple context variables in a single call
* Better data security through improved encryption & better authorization.
 
**Enablement**
Migration will be a seamless process that will be performed by the product team at LivePerson. Please talk to your LivePerson account executive if you want to be moved to v2 sooner. (You can know you are on v2 if you see OAuth 2.0 authentication on the API Authorization page).

## Policy Logs for Dynamic Routing
### Type: New Feature [Context Service V2]

Available to all customers? No - This is only available to brands that are using v2 of the Context Service. All accounts will gradually be migrated from v1 to v2 starting July 2021through to the end of the year..

Policy logs help you to understand how dynamic routing decisions are made. The tool helps trace routing outcomes back to policy configurations and context variables.
* The benefits of using policy logs include:
* Understanding why certain conversions were routed a specific way
* Narrowing down root causes of errors to policy configurations and context variables
* Diving deep to understand why certain policies execute more often than others

Policy logs are available under Dynamic Routing and values of context-variables passed during policy execution can be viewed by hovering the mouse. This can be very useful for triaging issues or for making improvements.

![](img/context-RN-1.png)

**Enablement**
Migration will be a seamless process that will be performed by the product team at LivePerson. Please talk to your LivePerson account executive if you want to be moved to v2 sooner. 

## Search & manager large number of dynamic routing policies
### Type: Enhancement [Context Service V2]

Available to all customers? No - This is only available to brands that are using v2 of the Context Service. All accounts will gradually be migrated from v1 to v2 starting July 2021through to the end of the year.

Brands can now search for policies. Pages load a lot quicker & pagination will help you manage a large number of  policies efficiently.
![](img/context-rn-2.png)

**Enablement**
Migration will be a seamless process that will be performed by the product team at LivePerson. Please talk to your LivePerson account executive if you want to be moved to v2 sooner. 

## Unified navigation for Intent Builder and Intent Analyzer
### Type: Enhancement [Intent Manager 2.2]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

The Intent Builder and Intent Analyzer applications have been combined into a single, navigational user interface, for a cohesive and more intuitive user experience.

Previously, you access and worked in two,separate applications:

![](img/CB-8-RN-2.png)


We’ve changed this so that now there’s a single entry point:

![](img/CB-8-RN-3.png)

Within the new, consolidated Intent Manager application, you’ll find a new dashboard, as well as a feature set that’s organized into four main tabs:

* Discover: Explore topic clusters in historical conversations to discover and define new customer intents and associated training phrases
* Build: Build, train, test, and activate machine-learning models
* Optimize: Leverage agents to annotate messages for optimized intent models
* Analyze: Analyze patterns in consumer intent and associated KPIs to derive insights that drive business decisions and operational actions

![](img/CB-8-RN-4.png)

Note: For brands that don’t have Intent Analyzer enabled, the “Discover” and “Analyze” features are “locked.”

## New Intent Manager dashboard
### Type: Enhancement [Intent Manager 2.2]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

There’s a new Intent Manager dashboard that provides a high-level overview of:
Domains
Intent coverage
Intent quality

From the dashboard, you can control settings and quickly navigate to the Discover, Build, Optimize, and Analyze sections of Intent Manager for each domain.


![](img/CB-8-RN-5.png)


## Two new settings for domains
### Type: Enhancement [Intent Manager 2.2]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

When adding or updating a domain, you can now configure two, new settings:

* Enable Intent Tracking
* Set as Primary Domain

![](img/CB-8-RN-6.png)

The new Set as Primary Domain setting has two purposes. First, in applications that make use of a single domain (e.g., Agent Manager Workspace, Performance Optimizer, and Messaging Interaction API), this is the domain that is used. Second, when intent tracking data is gathered for analysis within Intent Manager, and multiple, good intent matches for an utterance are found, the intent in the primary domain is the one considered to be the best matched intent.

Note: The designation of a domain as primary affects only intent matching as it relates to the intent tracking data that’s gathered for display on the Analyze page within Intent Manager. It does not affect intent matching in any other way. For example, it does not affect Conversation Builder/third-party bots, Knowledge Base, Agent Assist, etc. Respectively, the designation of a primary domain plays no role in intent matching when it comes to determining a dialog to start for the consumer, a knowledge base article to send to the consumer, a knowledge base and/or bot to recommend to an agent, etc.

The second new domain setting is Enable Intent Tracking. This enables “intent listening” for the domain, which provides you with enhanced intent-related reporting on your consumers’ utterances. What’s more, it means you can now enable this for multiple domains. (Previously, you could only do this for a single domain, and you enabled intent tracking at the intent level, not the domain level.)

When intent tracking is enabled, the system records and labels all future conversations with intent metadata (e.g., a consumer utterance of “I want to cancel my flight” is labeled as having the “cancel flight” intent in an “Airlines” domain). The system also records other metrics like CSAT, Meaningful Conversation Score and more. This intent data is then populated into the Analyze page within Intent Manager.

The number of domains for which you can enable intent tracking is configurable. To increase the number, contact your LivePerson account representative. If this field is disabled, you’ve reached the limit. You can either increase the number or disable intent tracking for another domain.

You can enable intent tracking at a later time, but be aware that there is no backfill of historical data. Data begins to be recorded when this setting is enabled.
Why enable intent tracking for multiple domains?
Multi-domain support makes it possible to evaluate each consumer message against multiple machine-learning models in real time, unlocking infinite possibilities!

* Development and A/B testing of new domains
* Support for more than one language per account
* Support for multiple lines of business
* Independently tuned models for specific use cases: Sales and marketing, Churn detection and escalation, Social media monitoring, Specialized bots and automation

## Post-conversation survey that supports migration to Conversation Builder 
### Type: Enhancement [Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

There’s a new enhancement to Conversation Builder post-conversation survey bots in support of brands that are migrating from Bot Studio to Conversation Builder for creating and managing survey bots. Specifically, brands that make use of survey, question, and answer IDs in their reporting on survey bots can now download a report on these for a given survey bot. Within Conversation Builder, go to the dashboard of bots, access the three-dot menu for the specific survey bot, and select Generate IDs report from the menu.

## New Dynamic Routing tile
### Type: Enhancement [Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

Dynamic Routing is the intelligent routing of consumer conversations to the most qualified agents -- bot or human -- based on intent data and other contextual data: consumer inputs, past interactions, loyalty tier, and other attributes. Dynamic routing makes possible highly personal consumer journeys and routing at scale. It is a key architectural component of Conversation Orchestrator, one of LivePerson’s Conversational AI applications.

In this release, Conversation Builder adds a new, code-free Dynamic Routing interaction, which you can use in a routing bot or in any other bot that needs to route the conversation intelligently.

The Dynamic Routing interaction executes Conversation Builder’s askMaven scripting function to get from Conversation Orchestrator the next actions for the current conversation. (The next actions are determined based on the routing policies that you define in Conversation Orchestrator.) The Dynamic Routing interaction then automatically performs those next actions.

![](img/CB-8-RN-1.png)

There are other ways to implement Dynamic Routing. However, in a Conversation Builder bot in particular, using the new Dynamic Routing interaction is now recommended, as it’s the simplest and easiest approach. Bot builder no longer need the integrations and related interactions to transfer the conversation to the skill and to the agent or manually add JavaScript code. Simply configure  the Dynamic Routing interaction, which will create the call to get the next actions, and also perform those actions.


## Limit for downloading custom events has increased
### Type: Enhancement [Bot Analytics - Conversation Builder Release 8.0.]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

In Bot Analytics, the limit for downloading custom events in specific has been increased from 10,000 in number to 100,000.


## LivePerson NLU engine supports Japanese and Portuguese
### Type: Enhancement [Intent Manager 2.2]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

In this release, LivePerson broadens the language support for its LivePerson Natural Language Understanding (NLU) engine: Japanese and Portuguese are now supported languages.

## UI available in Japanese & Portuguese
### Type: Enhancement [Intent Manager 2.2]

This enhancement is available for all channels supported by the Conversational Cloud platform

Available to all customers?: Y

The following Conversation AI applications now make available a user interface in Japanese and Portuguese:

Conversation Builder
Intent Builder
Knowledge Base
Bot Analytics
Bot Accounts
Bots Status

All copy within the interface (labels, error messages, etc.) is available in the target language: Japanese or Portuguese.

To change the language, access your Conversational Cloud profile, click *My Details*, and change the Language setting.

## Added filter for agent names 
### Type: New Functionality [Bot Connectors 2.33]

Available to all customers? Yes

With this enhancement it is possible to search/filter via text for agent names on the main bot table. 

Enablement: On the main Third-Party Bots table is now a filter icon next to “Name”. By clicking it, a dialog with a text field opens. By entering a filter term and pressing on “Filter” the bots are getting filtered.

## Don't allow changes on delayed bot
### Type: Enhancement [Bot Connectors 2.33]

Available to all customers? Y

Previously it was possible to update the bot on delayed, waiting and offline state. Changes made on bots in state “delayed” or “waiting” would not have had an effect before actually restarting the bot. Now there is an extra check in the API to allow changs only on offline bots.

## Align Chat Behaviour to Messaging in case transfer skill not found 
### Type: Enhancement [Bot Connectors 2.33]

Available to all customers? Y

Previously in the chat connector we closed the chat if the transfer skill is not available. In Messaging we escalate in this case to the configured default escalation skill. This is now aligned to escalate in both conversation types to the configured default escalation skill.

## Data is not loaded directly after login validation
### Type: Enhancement [Bot Connectors 2.33] 

Available to all customers? Y

We found an unnecessary delay of up to 20sec for loading the bots table while the UI is running as part of the Conversational Cloud. This was happening when the activate post message was send before the SSO validation process was completed. With this fix the data will be fetched immediately after the user is authenticated if the UI is active in the foreground.

## Quick Replies are working on the CT widget for Chat Bots
### Type: Enhancement [Bot Connectors 2.33] 

Available to all customers? Y

Previously it was possible to use quick replies on chat bots using the conversation tester. But as quick replies aren’t supported in chat it confused the users that it works when it was shown rendered in the conversation tester. Now the user will be informed with a “Chat bots have no support for quick replies” messages

## Owner and Handler Account Skills In Consumer Info Widget
### Type: Enhancement [Enhanced Agent Workspace]

Available to all customers? No. This feature will only apply to those accounts who are the designated Conversation Handler (Rollover) accounts who are handling conversations on behalf of an Owner account.

Channels: Web messaging, Mobile App messaging, SMS, Facebook, Twitter, ABC, Line, Google My Business, WhatsApp Business

The ability to view both Owner and Handler Account Skill in the Consumer info widget is now supported in the enhanced agent workspace for messaging. This will help to provide more visibility to the conversation, so that the agent knows what both skills are tied to the conversation (Owner & Handler). 

## Choose Twitter account to reply from
### Type: Enhancement [Enhanced Agent Workspace - Social Messaging]

Available to all customers? Social Messaging brands using the new Twitter connector (not the Twitter connector on the SocialConnect product) only

Channels: Twitter

The ability to Choose Twitter account to reply from is now supported in the enhanced agent workspace for messaging for Social Messaging conversations sourced by Twitter. Agents can now choose to reply from any of the Twitter accounts integrated to the platform. This capability is supported for public messages only which are sent by agents.

## Allow the agent to see from which Facebook page the consumer is posting
### Type: Enhancement [Enhanced Agent Workspace - Social Messaging]

Available to all customers?:  Social Messaging customers only

Channels: Facebook

We have enhanced the metadata presented below each message in conversations sourced by Facebook to include the page from which the consumer is reaching out.

![](img/CB-8-RN-7.png)

##  Allow the agent to see from which TW handle the consumer is reaching out
### Type: Enhancement [Enhanced Agent Workspace - Social Messaging]

Available to all customers?:  Social Messaging customers only

Channels: Twitter

We have enhanced the metadata presented below each message in conversations sourced by Twitter to include the page from which the consumer is reaching out.

##  Accessibility
### Type: Fix [Enhanced Agent Workspace]

Available to all customers?:  Yes

During the last weeks, the team worked on fixing A11Y issues that were found as part of regression A11y tests on the Conversational Cloud.
The following bug was fixed, and is included in NAW 1.29:

* [AE-17076] All Connections table Filters - Search Transcript: Name, Role, Value
* [AE-17052] Core Widgets - Predefined Content: Name, Role, Value & Keyboard Access
* [AE-17029] Transcript Area - Conversation Input Toolbar - Active Images
* [AE-17083] All Connections table Filters - Filter By Dialog: Form Label
* [AE-17084] All Connections table Filters - List view: Grid

## Twitter connector: Do not show SDEs as authenticated if relevant SiteSetting is OFF
### Type: Fix [Enhanced Agent Workspace]

Available to all customers? No. Social Messaging customers only.

Channels: Twitter
An issue has been repaired in the SDEs list of Social Messaging conversations, sourced from Twitter, causing them to appear as authenticated, even when a site-setting that points on showing authenticated indicator for connectors is Off. Brands with this site-setting off will now see the SDEs list for conversations sourced by Twitter as unauthenticated.

## Agent Survey Report
### Type: Enhancement [Data Transporter 4.2]

Available to all customers? Y

Channels - All channels, excluding web chat

The Report Catalogue has been updated to include a new Agent Survey report which provides data from Agent Surveys, including details for surveys, questions, and answers, including free-text - data from this report is entirely based on data derived from the LP Messaging Interactions API. 

**Enablement**
This report is available to all existing Data Transporter customers and can be access from the Reports catalogue (Messaging Interactions - Agent Survey Report).

**Limitations**
No data on unanswered questions - The report will produce data for every closed or submitted survey and every submitted answer. 
However, data for questions is bundled with answers. There is no marker indicating what question was not answered. This means that analytics produced from the report won’t take “skipped answer” into consideration. For example, if a question with two possible answers (Yes/No) was asked 100 times. The outcomes were
(Not answered - 70), (Yes - 15), (No - 15). The answer ratio produced based on the report data would be: Yes - 50% ; No - 50%.

For surveys closed or submitted without any answered question, the row is produced with empty fields relating to questions and answers.

## Messaging - Conversation flat file - report version upgrade
### Type: Enhancement [Data Transporter 4.2]

Available to all customers? Y

Channels: All channels, excluding web chat

The “Messaging Interactions - Conversation flat file” report (11201) has a new version 4, featuring:
Ability to select requested categories of data, giving an option to brands to reduce file-sizes and processing of data that is not intended for use.
New categories of data available to be included in the report: LatestAgentSurvey, PreviouslySubmittedAgentSurveys, UniqueIntents.
New columns added to existing Info category: deviceModel, features, firstIntentLabel, firstIntentName, ipAddress, pendingAgentSurvey, sessionId, visitorId, wasStepUp.

**Enablement**
To enable this, brands must login to Data Transporter and edit their existing Conversational Flat File reports and “upgrade” the version from 3 to 4. An upgrade button is located in the task edit form beside the version value.
To select the data elements you require for the report, at the bottom of the task form you will find a Content To Retrieve selector - simply choose the options you would like to receive.

**Limitations**
Upgraded tasks to version 4 of the report cannot be downgraded.



