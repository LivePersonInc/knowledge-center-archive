---
pagename: Week of March 8th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-march-week-of-march-8th.html
isTutorial: false
isNew: false
date: '2021-03-01'

---

These release notes include new features arriving March 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Assessing the same secure form multiple times
### Type: Enhancement (Secure Forms)
The option to assess the same form multiple times is configurable (specifically for Web). 
Brands can define how many times a consumer will be able to reopen the same secure form prior to submitting it. 
This is useful for brands to allow consumers to broswe back and forth different pages (e.g. collecting customer ID) during the conversation while filling out the secure form while keeping it accessible.In order to configure, please contact your LivePerson account team.
For more information, click [here](https://knowledge.liveperson.com/security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html#accessing-the-same-form-multiple-times)

## Return source name in the response 
### Type: Enhancement (Messaging History Interactions API version 1.1.0.61)
The source of the API call, which is sent by the API consumer, will now be returned in the API response. The source name will be mirrored and will be added automatically, in the case of pagination, to the URLs used as reference to the next, previous, first, and last pages in the response.
This will allow brands to add the source name only for the first call, while follow-up calls can be taken directly from the response, and without need to concatenate manually. 

## [Enhanced Agent Workspace] Display offline skills in Rollback menu for Rollover accounts
### Type: Enhancement (NAW 1.22)

Conversation Rollover has a feature called “Rollback” which enables a Handler account user to Rollback a conversation to the corresponding Owner account. The Rollback menu today only displays the Online Skills for the Owner account as options for Rollback. This enhancement will display Offline skills as well, so that the Handler agents will have a better understanding of the activity with the Owner account, and their options for Rollback.   

![](img/week-of-march-8th.png)

## [Enhanced Agent Workspace] Accessibility -  A11Y Project Fixes
### Type: Bug fix (NAW 1.22)

During the few last weeks, we have worked toward fixing A11Y issues that were found as part of regression A11y tests on the Conversational Cloud.
