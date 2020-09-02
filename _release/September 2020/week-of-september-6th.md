---
pagename: Week of September 6th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-september-week-of-september-6th.html
isTutorial: false
isNew: false
date: '2020-09-01'

---

These release notes include new features arriving September 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [SMS] Agent-to-consumer image sharing
### Type: New functionality (v3.27.7)

Agent-to-consumer image sharing is now supported for SMS. This capability enables agents to share images with consumers to explain complex issues or requests quicker and more accurately. Photo sharing makes messaging a more visual experience, increasing communication efficiency and reducing time to resolution.

{: .notice} 
**Please note:** This feature requires backend enablement. Please work with your LivePerson account manager to enable agent-to-consumer image sharing on your account and make sure that the agent has the required permission.

**Limitations:** This feature only works on MMS-enabled phone numbers.

![](img/week-of-september-6-1.png)

## [GBM] CSAT survey
### Type: New functionality (GBM 3.18.0)

A CSAT survey is now automatically triggered upon the closing of a Google Business Messaging conversation. This score reflects your customers’ rating of your engagement with the agent. The data is collected from customers in the post-chat survey. By reading your CSAT score, agents can see if they need to improve their messaging skills. 

*CSAT = total number of positive answers / total number of answers*

**Current functionality**

Trigger the CSAT survey (not PCS) and capture the survey results when:
* The conversation is manually closed by the agent or by the consumer. In case of no response or when the conversation is still open, Google triggers the survey after 12 hours. 

**Limitations:**

For ongoing conversations: a conversation is broken into sessions by the google API, so the CSAT can be sent every 24 hours
*  If LivePerson is triggering it, we can only trigger once every 24 hours. For example, if the conversation closes and we trigger the CSAT, then two days later the user replies again, we can send another CSAT survey.
* If LivePerson doesn't, Google will automatically trigger a survey after 12 hours. 


![](img/week-of-september-6-2.png)
