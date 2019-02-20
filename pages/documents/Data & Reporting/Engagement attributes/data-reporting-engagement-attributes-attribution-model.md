---
pagename: Attribution model
categoryName: Data & reporting
subCategoryName: Engagement attributes
indicator: both
subtitle: 'Track conversions over a period of time to understand what made your visitors
  convert '
level3: ''
permalink: data-reporting-engagement-attributes-attribution-model.html
isTutorial: false
date: 2019-01-20 08:13:30 +0000
isNew: true

---
Depending on the product or service your consumers are interested in, every consumer has a different buying cycle. Some will instantly purchase a product while others will take their time, engage with you, research additional websites, and only then come back to purchase.

As a campaign manager, you want to identify which engagement made your visitor convert; was it due to a chat, message or content engagement? Was the engagement in the current session or a previous one? LivePerson uses a cross session period and an attribution model to do this.

The cross session period is used to determine the window of influence in which your engagement with the visitor assisted them in completing their journey. Following the engagement, visitors may require time to decide which product or service is right for them, or may wish to involve others in the purchasing decision. 

When the customer returns to your site to complete their goal, if the event occurs within the window of influence (the time you deem as an appropriate period to allow the customer to reflect on your engagement), the conversion will be credited to either a [campaign](contact-center-management-campaigns-campaigns-overview.html) or agent in LivePerson. In the case of a visitor being exposed to a content banner as well as participating in a chat or web messaging conversation, the conversation will always get the credit for the conversion.

Conversions are reflected in your reports and are calculated based on the date of the interaction that caused them to convert (and not when the visitor actually converted). The conversion period includes all the events that contributed to the conversion during a given time period. The default period is 31 days. You can define the conversion period for up to 31 days before the conversion was made (see instructions below).

## Recommendations

* Choose longer conversion periods if your visitors are likely to take their time before making a decision. For example, consumers usually take more time when buying expensive products or services. In this case, set the time frame to the maximum (31 days), so you can attribute the purchase (conversion) to the chat or web messaging conversation or content that took place at the beginning of the time period.
* Choose shorter conversion periods if your visitors are likely to make a purchase quickly. For example, visitors are more likely to purchase flowers the same day they search for them.

![](/img/attribution-model1.png)

In addition, LivePerson uses the attribution model, which is a set of rules that determine which agent / campaign gets the credit for the conversion. If the visitor conversed more than once, you can choose which agent gets the credit by setting the attribution model to first or last interaction (see instructions below). By default, the last agent gets the credit for the conversion. Similarly, if a visitor was exposed to more than one content engagement of different campaigns, the last content engagement will get the credit for conversion.

{: .notice}  
Any change you make to the attribution model or time period takes effect immediately and impacts your current and historical conversion and revenue reports.

## Configure your account’s cross-session period

1. Go to the campaign list.
2. From the footnote, set the cross session period. This is the number of days you want to track visitors who return after a campaign exposure.

![](/img/attribution-model2.png)

## Configure your account’s attribution model

1. Go to the campaign list.
2. From the footnote, set the conversion attribution model to first or last. This is to determine which agent will get the credit for the conversion, or in case of content banners, the first or last banner the visitor was exposed to.

![](/img/attribution-model3.png)