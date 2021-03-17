---
pagename: Week of March 22nd
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-march-week-of-march-22nd.html
isTutorial: false
isNew: false
date: '2021-03-17'

---

These release notes include new features arriving March 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Versioning and restoration of article content
### Type: Enhancement (Release CB 2021_4.0)

In this release, the Knowledge Base application introduces new support for versioning and restoration of article content. Now, whenever someone changes an article’s content (the title, the summary, the detail or a content URL), a back-up of the previous version of the article is created. The system stores the three, most recent back-up versions that have been created, and you can restore one of these if desired.

This enhancement applies to internal knowledge bases as well as external knowledge bases that use LivePerson AI.

## [Conversation Builder] A new KnowledgeAI interaction
### Type: Enhancement (Release CB 2021_4.0)

Conversation Builder introduces a new KnowledgeAI interaction that you can use in your bots when you want to search a knowledge base for articles. 

This new, powerful interaction greatly simplifies a bot’s design. It’s no longer necessary to add the integration that performs the search, the Integration interaction in the dialog, and the subsequent Statement interactions that display the returned content. The Knowledge AI interaction handles it all. You add and configure this one interaction in the dialog, and the results are rendered automatically to the consumer. They also degrade automatically and gracefully based on the channel in use.

We still support the older way of implementing a knowledge base search, but we think you’ll find  the KnowledgeAI interaction makes it faster to build better question and answer automation. 

## [Conversation Builder] Enhancements to post-conversation survey bots
### Type: Enhancement (Release CB 2021_4.0)

Conversation Builder adds two enhancements to post-conversation survey bots. 

First, you can now offer to email a transcript of the survey conversation to the consumer, and grant the consumer the option to accept or decline this. You set this up in the bot’s Bot Settings. Simply enable the Email Transcript setting, and configure the associated settings. 
Second, you can now customize the answer choice text of the survey interactions (FCR, CSAT and NPS), and reorder the choices.

Customizing the answer choice text and reordering choices has no impact on the underlying actual values that are reported to Analytics Builder. These never change; this ensures that the survey answers are always properly reported.

![](img/CB4.0-week-of-march22nd-1.png)

**Note:** Take care when changing the answer text; remember to update the conditions in the rules accordingly.
