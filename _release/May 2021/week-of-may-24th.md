---
pagename: Week of May 24th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-may-week-of-may-24th.html
isTutorial: false
isNew: false
date: '2021-05-19'

---

These release notes include new features arriving May 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Commerce & Care views
### Type: Enhancement (Performance Optimizer 1.4)

The Performance Optimizer now supports two views: Care and Commerce.  The Commerce view exposes additional sales metrics to users including conversion rate, conversions, conversions per login hour, and average order value.  
The LivePerson 4E Framework incorporates these sales metrics when users select the Commerce View and identifies sales specific metrics for efficiency (conversion rate per login hour) and effectiveness (conversion rate).  The primary indicator of efficiency and effectiveness dynamically changes when the Commerce view is chosen by the user. 

| 4E Framework Primary Indicator  | Care  | Commerce | Panel with Dynamic Metric |
| ------------- | ------------- |------------- |------------- |
| Efficiency | Closed Conversations Per Login Hour (CCPLH) | Conversions Per Login Hour | Executive Summary LOB Detail |
| Effectiveness | Repeat Contact Rate - 3 Day (RCR 3 Day) | Conversion Rate | Executive Summary LOB Detail |

There are 3 primary components to the new Care view: 
1. A separate and unique view for Commerce brands  
2. Updated 4E Framework metrics for Commerce brands
3. Dynamic Panels to reflect Commerce KPIs (as compared to Care) 

1- The Commerce View incorporates the following metrics: 
* Conversions 
* Conversion Rate 
* Average Order Value 
* Conversions Per Login Hour 

### How to enable
The Commerce view does not require enablement. 

### Dependencies
Brands must have purchased and activated Performance Optimizer 

### Limitations
The Performance Optimizer is only visible for brands who have purchased the product. In addition to having purchased and enabled Performance Optimizer, users must also have the relevant permissions for the product. 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/new-may-1.png)

## Data at Rest Encryption solution
### Enhancement
LivePerson has enhanced their encryption solution. 
The encryption of data at rest in LivePerson refers to the encryption of conversation transcripts and Engagement Attributes on the LivePerson storage servers. 
Implementing a strong encryption method is crucial for protecting LP customers data from potential unauthorized access and for complying with laws and regulations dictated to LivePerson directly or indirectly by its customers.

For more informaiton, click [here](https://knowledge.liveperson.com/security-regulations-security-protecting-customer-data.html#encryption-of-data-at-rest)

## ABC Rich Links  
### Type: Enhancement [version 1.0.15]

A rich link is a URL provided through an image or video that is displayed in an Apple Business Chat bubble. The Rich Link Support for Apple Business Chat allows an agent or bot to auto-generate a rich link that is sent to a consumer during a conversation. This enhancement removes the need for the custom Rich Link Generator (RLG) widget, which has been a required configuration for all ABC implementations. In addition, this enhancement will automatically render existing links within Predefined Content, Automatic Messages and messages delivered by bots. 
Currently, consumers only receive a rich link if an agent sends the URL through the RLG widget or if the bot sends it as structured content. This creates inconsistency in consumer experience and friction during Apple QA. Thus, this enhancement offers many benefits for existing and net new ABC brands.

#### Usage and Benefits:

For new ABC project implementations, brands are no longer required to configure the custom RLG widget, reducing effort and complexity. 
Removes the need to whitelist URL domains and subdomains; all URLs sent to the consumer will automatically display as a rich link. 
Additional agent training about the use of the custom RLG widget will no longer be required if Rich Link is enabled on the account, lowering learning curve and saving time. 
Website URLs set in Predefined Content, Automatic Messages and messages delivered by a bot will display as a rich link. Not only will this create a consistent experience for consumers, it will also improve Apple’s QA results.

#### How to Enable:
Automated rich link support is disabled for all accounts by default. Please reach out to your LP representative for enablement.
The enablement of Rich Link configuration additionally provides the ability to set default fallback image and text by simply adding a url  in case it’s not present in the original og tag property.Internal LP support representative should be able to help you with that.

#### Limitations:
If an agent sends a web URL without an OG (open graph) tag enabled for images or videos and a title, the rich link will display the fallback image or title. To learn more about open graph protocols, visit https://ogp.me/. 
Ability to truncate Rich Link URL titles is not supported in this release.
If no og tags are found either fallback or existing e.g the properties “title”, “video”, “video:type” and “image” , the url will be simply sent as text.

#### Screenshots
Agent side
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/ABCrichlinks-may19-1.png)

Consumer side
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/ABCrichlinks-may20-1.png)

## Instagram Entry points  - version 1.0.19
### Type: Enhancement - version 1.0.19

Entry points are surfaces where users can start a conversation with your brand. Instagram supports various entry points.

| Entry Point       | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| Direct Message    | When consumer messages the brand privately in a direct message |
| Story mention     | When the consumer mentions the brand in their story            |
| Brand Story Reply | When the brand posts a story and the consumer replies to it.   |

Connectors have implemented a  new SDE - “Ctype” in the consumer info panel in conversational cloud. This will allow the agents to see the specific entry points in the conversation from where the consumer has initiated the messages. This can then be additionally used as  context for routing to a skill by the bot or an agent.

Connectors have implemented a  new SDE - “Ctype” in the consumer info panel in conversational cloud. This will allow the agents to see the specific entry points in the conversation from where the consumer has initiated the messages. This can then be additionally used as  context for routing to a skill by the bot or an agent.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/Instagram-RN-may19-1.png)

