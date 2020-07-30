---
pagename: Week of August 3rd
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-august-week-of-august-3rd.html
isTutorial: false
isNew: false
date: '2020-07-30'

---

These release notes include new features arriving August 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Enhanced Agent Workspace] All conversations filter enhancement 
### Enhancement (NAW 1.16)

A couple of enhancements were made for the All Conversations filter of the enhanced Agent Workspace, providing users with an improved filtering experience for the following KPIs:
* Duration
* MCS
* Response time

## [Enhanced Agent Workspace] Conversational command results not displayed for conversations joined via 'All Conversations’ 
### Bug fix (NAW 1.16)

A bug has been discovered in the All Conversations list of the enhanced Agent Workspace, causing conversational command results to not be displayed for conversations joined via the 'All Conversations’ tab. This bug has been fixed and the function output is now shown for all relevant conversations.

## [Enhanced Agent Workspace]  Conversational command disappears when using the 'Enter' key to execute it
### Bug fix (NAW 1.16)

A bug has been discovered in the enhanced Agent Workspace, causing the conversational commands to disappear when using the 'Enter' key to execute them. This bug has been fixed and the ‘Enter’ key now works as expected for this use case.

## [Enhanced Agent Workspace] All conversations - Spaces between characters not accepted when searching for a skill filter
### Bug fix (NAW 1.16)

A bug has been discovered in the All Conversations list filter of the enhanced Agent Workspace, preventing users from searching for skills containing multiple words. This bug has been fixed and space is now an acceptable character in the skill filter search field.

## Storing permanent variables
### Type: Enhancement (Conversation Builder)
In an upcoming release in October of the Conversation Builder, LivePerson will be removing the "Forever" option for the duration of a variable or a slot.
No change to the Request, Dialog, or Session options will be made.
 
In addition, in the setBotVariable scripting function, we will likewise deprecate support for a value of “true” for the persistForever argument:
setBotVariable(name, value, persistForSession, persistForever).

Bot developers should begin the development work now to update existing implementations to use the Context Session Store for storing data long-term. The Context Session Store allows for setting data in Global, User, and Conversation scopes.

![](img/foreverOption.png)

## Rate Limiting 
### Type: New feature (UMS 3.28)
Available to all customers: yes (if feature flag is enabled)

Implement a rate limiter for the agent subtypes i.e. HUMAN, BOT and SYSTEM.
To configure, please contact your LivePerson account team.

## Throttle APIs based on specific fields
### Type: New Feature (UMS 3.28)
Available to all customers: yes (if feature flag is enabled)

Throttle APIs based on fields provided, specifically PublishEvent when type ChatStateEvent is event Composing.
To configure, please contact your LivePerson account team.

## Bug fixes for UMS 3.28
* Fixed the global MaskingContext overriding issue and added logs for UMS data that not be masked when it should be.
* Resolve the null fields showing null on UI issue
* Return 200 and 0 when conversation closed or not exist
* Encrypt messages with conversation owner ID
These has now been fixed with no configuration required.

## Survey Data - Expose 'answerName' and 'isValidAnswer' elements in MIA and EHA API response 
### Type: New functionality (Engagement History Interactions API 1.0.0.18)
Exposed new elements in EIA response: 
answerId - An array of the numerical values of the answers.

## Bug fix for Engagement History Interactions API 1.0.0.18
Fixed CSV to provide date of birth when age was missing.




