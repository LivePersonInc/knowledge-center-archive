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
date: '2020-07-22'

---

These release notes include new features arriving August 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Rate Limiting 
### New feature (UMS 3.28)
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
These has now been fixed with no configuration required 

 

