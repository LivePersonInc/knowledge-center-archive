---
pagename: Week of January 25th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-january-week-of-january-25th.html
isTutorial: false
isNew: false
date: '2021-01-20'

---

These release notes include new features arriving January 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Agent Assist enhancements 
### Enhancement [Conversation Orchestrator] 

**Channel:** This enhancement is available for all channels supported by the Conversational Cloud platform.

Conversation Orchestrator introduces two new enhancements to Agent Assist.
First, up to to five recommendations can now be made to the agent for a detected intent. Previously, only one recommendation could be made. The maximum number of recommendations is configurable, and the default value is 3.
In the following image, the agent is presented with two recommendations, one for a knowledge base article and the other for a bot.

Second, as before, Agent Assist recommends articles and bots to the agent based on the detected intent of the consumer. However, we’ve taken this one step farther. Now, when Agent Assist makes recommendations, it always does so based on not just the consumer’s intent, but also the conversation’s skill. This means you can map a slice of content to desired skills, and then recommend articles and bots based on the intent detected in the consumer utterance.

Please note: During setup, you must assign at least one skill to a knowledge base or bot for it to be used in recommendations. Enablement of the knowledge base or bot, which happens by default, is not enough. This is by design.
All knowledge bases and bots that were previously enabled before the release of this change are automatically mapped to all skills available for the account. You can change these at any time.
Tip: Take advantage of this skill-based feature change to facilitate your testing. Create a test skill to use to test Agent Assist before assigning a production skill to the knowledge base or bot.

