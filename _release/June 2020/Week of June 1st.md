---
pagename: Week of June 1st
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-may-week-of-june-1st.html
isTutorial: false
isNew: false
date: '2020-05-27'

---

These release notes include new features arriving to LiveEngage during June 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Conversation Builder - An enhanced Dialog Editor
### Type: Enhancement 

Conversation Builder is introducing a redesigned Dialog Editor based on customer feedback. The changes to the Dialog Editor will make it faster and easier to build bots by introducing:

* A scalable user interface for easily managing a large number of dialogs
* A self-guided interface for creating “custom rules” (formerly known as Response Match & Action sets) without coding

All of the changes are backwards compatible. When we release the redesigned user interface, you won’t need to make any changes to port your existing implementations.
For more information, check out [this article](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-coming-soon-to-the-conversation-builder.html) that highlights the key changes.

## Data Transporter available to all
### Enhancement

Data Transporter is now generally available and with this release comes some new features and enhancements, including:

**General Availability status** the beta status has lifted and beta agreement removed from the login flow.

**Beautification:** new dark and light theme aligned to all Conversational Cloud services (change theme in the ACCOUNT page)
SFTP via SSH Key: SFTP delivery now supports transmission using SSH Key authentication - setup via SFTP page and check the “Enable SSH Authentication” option.

**Messaging Content:** new content to retrieve options are now available for the Messaging Interactions (raw) report (ID 11101)

**Multi-factor auth:** MFA is now disabled by default - to enable multi-factor authentication, visit the official guide

#### How to enable
Enabled by default for all Data Transporter customers

#### Dependencies
Must be a Data Transporter customer - contact your account manager for details and pricing

#### Limitations
Messaging Interactions reports 11101, 11201 and Engagement History reports 21201 have a limit of 20,000 interactions per file - tasks that exceed 20,000 interactions will be split into files by 20,000
Messaging Interactions reports 11202, 11203, 11204 and Engagement History reports 21202 have a limit of 10,000 interactions per file - tasks that exceed 10,000 interactions will be split into files by 10,000
  
For more information on the Data Transporter, please see the [user guide](https://knowledge.liveperson.com/data-reporting-analytics-data-transporter-user-guide.html)

## Public APIs 
### Type: New feature

Public APIs on our connector will allow brands to build automations where the bot pro-actively takes commands on conversations instead of just reacting to customer messages. This feature will allow users to send following commands to an ongoing conversation:
- Send messages of all supported types like Text, Structured/Rich Content etc
- Transfer a conversation to a skill 
- Close the conversation
- Set time to response indicator (only supported for the messaging conversations)
- Set the valid sdes for a given and valid conversation (only supported for the messaging conversations)
