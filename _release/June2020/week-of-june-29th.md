---
pagename: Week of June 29th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-june-week-of-june-29th.html
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

## Support ‘source’ parameter as an optional query parameter 
This will add a new dimension for LivePerson metrics in order to improve troubleshooting, traffic control, and getting data-driven decisions. 
### Type: Bug fix (version 1.0.0.25)
1. Post Conversation Survey with two custom text "NPS alike" questions caused duplications in Message History (conversationSurveys->surveyData) 
Fixing duplicate ‘PostSurveyAnswerEvent’ with the same question id and answer id. After the fix the question and answer ids will be unique.
2. Messaging history API returns the survey answers in incorrect order.
This fix orders answers by their sequence.

## Support Auto-Close as conversation End invocation
### Type: Enhancement (FaaS Release v1.18.1)
With this enhancement, Functions being invoked on Conversation End event, will also be applicable for conversations that have been closed by the Auto-Close functionality configured in the account. Developers will be able to differentiate between the conversation end event types (consumer, agent, auto-close). The Auto-close invocation is denoted as by SYSTEM. 

#### Screenshot:
payload: 
closeReason: SYSTEM
![](img/RN-week-of-June-27th-1.png)

## Make the chat window polling interval configurable 
### Type: Enhancement (Web Experiences 10.3)

An enhancement has been added to make the polling chat window configurable for brands that need shorter polling times. The default polling interval is set to 2 seconds. This can be configured in the Unified Window taglet configuration.

## WCAG 2.1 AA / Accessibility Remediation
### Type: Enhancement (Web Experiences 10.3)

The Web Experiences team is partnering with Deque, a website accessibility firm, to remediate, validate, and ultimately certify the LivePerson consumer experience as WCAG 2.1 AA compliant.  To reach WCAG 2.1 AA compliance, we will be deploying changes to the consumer experience over the Q3 and Q4 that will lead to certification of the consumer window.  

Please note that areas remediated and validated under WCAG 2.1 AA compliance only apply to default engagements, window themes, and out-of-the-box features/taglets within the consumer window. Any Brands that utilize custom windows, taglets, and engagements should be reviewed and updated by the Brand, or their representative, to meet WCAG 2.1 AA compliance. 

Areas recently remediated:
* Rich Content
  * Better support for navigation and focus of structured content
* Unified Window
  * Window is directly accessible by screen readers
  * Font sizes increased to 10px
  * Better support for keyboard navigation and focus for window buttons and scroll bar
  * Optimized window title and menu items for screen readers
  * Reduced instances where screen readers would repeat content multiple times
  * Added or updated speaking identifiers where none were present or were confusing
  * Reduced instances where unnecessary text was read by screen readers
  * Optimized instances where a screen reader would read entire conversation history
  * Added support for survey bot 

## Better error handling when UMS returns errors or failures
### Type: Bug fix (Web Experiences 10.3)

The window will read the error message and will request new JWT if needed. In addition, a better retry mechanism was added.

## Step Up messaging fails or starts new unauth web messaging when the auth token expires
### Type: Bug fix (Web Experiences 10.3)

Consumers who begin messaging through an unauthenticated message and “step up” to an authenticated message were being reduced back to unauthenticated messaging when their authentication token expired even though the conversation was open. Consumers will now be able to continue as authenticated messaging after “step up” until the conversation is closed. 

## Duplicate IDs exist within the chat window
### Type: Bug fix (Web Experiences 10.3)

Optimized accessibility for icons (airplane, file attachment) in the consumer text area.

## Offline survey sends multiple duplicate emails
### Type: Bug fix (Web Experiences 10.3)

Optimized instances where a consumer would click submit on a survey multiple times and send multiple emails.

## Translation changes
### Type: Bug fix (Web Experiences 10.3)

Translation changes have been made for the following languages: 

* Chinese
  * Customer asking for translation and correction of translation errors in Chinese 
  * Missing words in the Chinese (Simplified) translation for Engagements
  * Pre-chat survey the default text is missing this word 目
* French
  * Engagement Window Header Truncates French Translation
* Hungarian
  * Hungarian Customer would like some translation changed
* Swedish
  * Better translation for “Message Us” and “Agent typing”

