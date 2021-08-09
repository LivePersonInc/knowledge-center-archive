---
pagename: Marketplace user guide
categoryName: Marketplace solutions
subCategoryName: Conversational Marketplace
indicator: both
subtitle: Businesses can message directly with their consumers in a marketplace 
level3: ''
permalink: marketplace-solutions-conversational-marketplace-marketplace-user-guide.html
isTutorial: false
isNew: false
date: 2021-08-08 

---
## Basic Configuration of Conversational Marketplace 

### 1. Designate a Conversational Cloud provider account 

Enable account settings for a Provider (LP Internal)
Create a campaign and engagement to drive the Marketplace

### 2. Provision and subscribe brand accounts
{: .notice}
**Note**: Many steps in this section can be automated using the Marketplace Account Management Service

* Provision brand accounts 
* Subscribe the brand accounts to the provider with a unique Reference ID
* Configure the Rollover account (as needed)
* Enable Conversation Channels 

### 3. Provider domain integration 

* [Add the Conversational Cloud tag to your website ](/getting-started-add-the-liveperson-tag-to-your-website.html)
* Provide a <div> container for each brand engagement 
* Include the Marketplace metadata for each brand 

## Reporting Solutions for a Marketplace 
### Analytics Builder — Marketplace Network Dashboard

The Marketplace Network Dashboard has been introduced to Analytics Builder as a home base report for any Marketplace Provider who wants to get a better understanding of their network.  The report aggregates the performance across the subscriber networks and can break down the performance by brand.  

Commonly, a Marketplace will be powered by automation to first handle incoming conversations. The Marketplace Network Dashboard has integrated automation metrics that can help the Marketplace understand the success of its automation strategy. 

[Read more about Marketplace reporting here](/marketplace-solutions-conversational-marketplace-marketplace-reporting.html). 

### Messaging Interactions API for Providers

Commonly, Marketplace businesses are typically larger and more robust companies that have existing reporting strategies internal to their client systems. Therefore, a key Reporting API is enabled that can be configured to be sent to the Marketplace Provider where they can then digest the data into their reporting systems.  

The Conversational Cloud [Messaging Interactions API](/https://developers.liveperson.com/messaging-interactions-api-overview.html)retrieves the most up-to-date information available about contact center messaging interactions. This API makes it possible to search, filter, and analyze data and transcripts of open and closed conversations. The API returns the conversation’s transcripts and all of its related metadata; such as: start time, end time, Meaningful Conversation Score (MCS), CSAT, summary, participating agents, the reason the conversation was closed, and more. This API supports the HTTP POST functionality (data retrieval), and all data is returned in JSON format.

{: .notice}
**Note**: For enablement and access to API please reach out to account manager.

