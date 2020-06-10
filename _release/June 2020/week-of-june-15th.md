---
pagename: Week of June 15th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-june-week-of-june-15th.html
isTutorial: false
isNew: false
date: '2020-06-10'

---

These release notes include new features arriving June 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Intent Analyzer - Discovery & Optimization
### Type: New functionality (Intent Manager)

New Self Service Intent Discovery and Optimization features enable brands to tune their Intent taxonomy and deploy improved models within minutes. 
Brands can now easily mine their conversation data to discover and build new intents from one unified interface. They can also correct misclassified messages and feed those annotations back into their model as new training phrases to improve recognition quality.

In addition to Intent Discovery & Optimization, version 1.3 of Intent Analyzer also improves the information architecture, surfacing new header links for ease of navigation throughout the application, and fixes an issue timezone handling in the date picker

Custom Starter Packs can now be generated from historical chat transcripts as well as messaging transcripts. A minimum of 200K chat messages is required, but now brands who have recently migrated to messaging can utilize their chat history to automatically build out their own initial initial Intent taxonomy.

In order for a brand user to begin reclassifying utterances via the Intent Analyzer Discovery feature, they must have at least one of the following permissions:
- Conversation Builder: Administrator
- Conversation Builder: Bot Builder
- Conversation Builder: Content User

#### How to enable
Intent Discovery & Optimization is enabled by default for all Intent Analyzer customers.
If you wish to disable, please contact you LivePerson account team.

![](img/June-15th-RN-1.png)

## Report Builder supports Multi Factor Authentication and OAuth2
### Type: New functionality (Report Builder 4.6)
Report builder has been enhanced to use the new SSO infrastructure for enabling multi-factor authentication solutions and OAuth2 SSO to complete the login process.

## Report builder: Sensitive token in URL(SD-860)
### Type: Bug fix (Report Builder 4.6)

Following a successful SSO authentication, a GET request is sent to the server with a sensitive token as a parameter (this token creates the Session ID cookie). This token is not one-time-use and can be used again and again within a short time frame of about 1-2 minutes. This has to be manually enabled by LivePerson.


