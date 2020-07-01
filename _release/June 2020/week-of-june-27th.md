---
pagename: Week of June 27th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-june-week-of-june-27th.html
isTutorial: false
isNew: false
date: '2020-06-30'

---

These release notes include new features arriving June 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Messaging History (Interactions) API  
### Type: New functionality (version 1.0.0.25)

#### Support ‘source’ parameter as an optional query parameter 
This will add a new dimension for LivePerson metrics in order to improve troubleshooting, traffic control, and getting data-driven decisions. 

## Messaging History (Interactions) API  
### Type: Bug fix (version 1.0.0.25)
1. Post Conversation Survey with two custom text "NPS alike" questions caused duplications in Message History (conversationSurveys->surveyData) 
Fixing duplicate ‘PostSurveyAnswerEvent’ with the same question id and answer id. After the fix the question and answer ids will be unique.
2. Messaging history API returns the survey answers in incorrect order.
This fix orders answers by their sequence.

