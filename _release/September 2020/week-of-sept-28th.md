---
pagename: Week of September 28th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-september-week-of-september-28th.html
isTutorial: false
isNew: false
date: '2020-09-22'

---

These release notes include new features arriving September 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

##  Dialog templates
### Type: Enhancement [Conversation Builder]

**Channel**
This feature is available for all channels supported by the Conversational Cloud platform.

In this release, Conversation Builder introduces dialog templates. A dialog template is a dialog that a bot developer has intentionally made available as a “template” that can be imported by others.

To make a dialog available as a template, you define a manifest file that identifies all the items required by the dialog: other dialogs, domains, environment variables, and global functions. The manifest file determines the items that the system must include whenever the dialog template is imported.

Once you import a dialog template into a destination bot, it becomes a normal dialog within the bot, and the dialog functions as if you had created it from scratch.

Dialog templates are a great way to:
* Formalize the import process for a dialog
* Ensure that other bot developers import all required components supporting a dialog

![](img/Release-notes-sept-28-1.png)

## Advanced model tester
### Type: Enhancement [Intent Builder] 

**Channel**
This feature is available for all channels supported by the Conversational Cloud platform.

If your domain is using the LivePerson NLU v2 engine, there’s now an advanced Model Tester that’s available. The Model Tester is designed to:
* Provide broad testing coverage for the domain
* Help you determine if the model is improving or regressing from one version to the next

You define the test set (a set of phrases/consumer utterances that are mapped to expected intents), and then you run the test against a specific model version. By repeating the test with the next model version, and then comparing the reports, you can determine if the model is improving or regressing from one version to another.

## Knowledge Base -  External CMS integration
### Type: Enhancement [Intent Builder]

**Channel**
This feature is available for all channels supported by the Conversational Cloud platform.

If you have a CMS with well-curated content that you want to leverage in bot conversations, this release of the Knowledge Base application introduces an exciting change. You can now integrate with any external CMS that has the capability, i.e., an API connector. Notable examples include Salesforce and Zendesk.

Integrating with your CMS means your content creators can continue to create and manage content directly in the CMS, using familiar tools and workflows. The knowledge base itself serves as a connector to the CMS. The knowledge base can be configured with LivePerson AI (recommended) or without LivePerson AI:

**With LivePerson AI:** This configuration uses the power of a Natural Language Understanding (NLU) engine to evaluate the articles against the consumer’s utterance (the intent) and return the highest scoring articles.
**Without LivePerson AI:** This configuration passes on the consumer utterance (the search query) to the CMS, which uses its own query and answer API to find and return the most appropriate articles.

![](img/RN-week-of-sept-28-2.png)

## Android SDK v5.4 coming soon
