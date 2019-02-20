---
pagename: Multi currency
categoryName: Data & reporting
subCategoryName: Engagement attributes
indicator: both
subtitle: Track and report revenue-related data in multiple currencies
level3: ''
permalink: data-reporting-engagement-attributes-multi-currency.html
isTutorial: true
date: 2019-01-17 13:47:37 +0000
isNew: false

---
Brands providing a service to consumers in more than one country must often handle bookings and revenues in multiple currencies. In order to accurately track the amount of each currency being generated, LiveEngage can record each currency transaction and provides a full breakdown of the currency data available in Report Builder.

<iframe src="https://player.vimeo.com/video/238919233" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

LiveEngage multi currency offers brands the ability to report a “currency” attribute for the following value-related engagement attributes for live chat conversations:

* Cart update: Cart total
* Transaction: Order total
* Viewed product
* Customer info: Balance
* Lead: Value

Brands reporting the above engagement attributes using currency will now be able to see a full breakdown of these currencies in LiveEngage Report Builder. The full list of currencies supported by the ISO-4217 currencies standard is available on LiveEngage.

## Reporting

When reporting on revenue and transactions, LiveEngage checks whether an account used single currency or multiple currencies during the timeframe defined by the report. As multiple currencies cannot be summarized, the Data Bar and Dashboard widgets display data for the account’s default currency only. However, the multi currency icon will display when multiple currencies were recorded.

![](/img/multi-currency1.png)

A partial breakdown by currency can be found in the [Agent Goal Tracker](data-reporting-messaging-messaging-dashboards-goal-tracker-report.html) report (available in the Agent Manager BI), while a complete breakdown of currencies can be found in the [Report Builder.](data-reporting-report-builder-report-builder-overview.html)

![](/img/Multi-currency2.png)

## How to report multi currency on your account

No enablement is required for multi currency; it is automatically available to all accounts.

1. In order to report multiple currencies on your account, you will need to add the currency attribute to your existing engagement attribute code.
2. LivePerson will then perform multi currency validations automatically.

For further information on configuring engagement attributes, read the[ Engagement Attributes Overview.](data-reporting-engagement-attributes-data-sources-engagement-attributes-overview.html)

{: .notice}  
For brands who do not report the “currency” attribute using engagement attributes, the “default” currency is reported. The existing account default currency will not change when currency attributes are added.

![](/img/multi-currency3.png)

## How to change your default currency

1. In the campaigns footnote, next to default currency, **click edit.**
2. Find the default currency you wish to use on the account.
3. Click **select**.

![](/img/multi-currency4.png)