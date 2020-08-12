---
pagename: Week of August 17th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-august-week-of-august-17th.html
isTutorial: false
isNew: false
date: '2020-07-30'

---

These release notes include new features arriving August 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Update JSON Schema in Denver
### Type: Feature (Denver 5.18)

Available to all customers? Yes

The chat platform is currently not using the latest JSON schema, so does not support the latest structured content elements. This task made sure that the JSON schema is updated to support the missing content elements.

## Credit card masking  in chat 
### Type: Feature (Denver 5.18)

Available to all customers? Yes

Credit card masking doesn't always work in chats. One of the reasons is due to the regexes that contain periods. This task fixes that problem to mask any credit card or patterns with regexes that contain periods. Another scenario happens on emails. The problem is that the empty regex patterns cause an unexpected issue where spaces are masked on emails. This task also solves the problem of masking the spaces in emails.

## Conversational Cloud shows phone numbers and email addresses when they are NULL in Web History
### Type: Feature (Denver 5.18)

## Exclude Bots from Auto Disable policy by default 
### Type: Bug Fix (Denver 5.18)

Available to all customers? Yes

Description: Messaging bots that do not use chat may be disconnected under the “Auto disable policy” configured for each brand. The solution was to exclude all bots, messaging and chat, from this policy. This fix was released in Denver 5.15. The default setting for the solution was “off” such that there was no change in behavior before and after the deployment. We are now setting the default for the solution as “on” so that all customers by default will have their bots excluded from the “Auto disable policy.”

## Final warning for chat fires at incorrect time 
### Type: Bug Fix (Denver 5.18)

Available to all customers? Yes

When setting a time for final warning auto message for chat, the actual time being triggered is the time from fair warning. This task is to fix this issue. The chat platform should send the final warning message at the appropriate time interval, while retaining the auto close functionality. 

The fix for this bug uses the correct time intervals for both fair and final warning chat messages.

## Cannot save the Form Name at Secure Forms in Admin Console - with Thai language (CO-2612) [External]
### Type: Bug Fix (Denver 5.18)

Available to all customers? Yes

The Secure Forms page in Admin Console shows the error when using Thai language in the Form Name. This task is to fix that issue. Keep in mind that this is currently turned on for FAST RETAILING CO., LTD. - APAC Clone Account (80009014). Please talk to the Support team to turn this on fully.




