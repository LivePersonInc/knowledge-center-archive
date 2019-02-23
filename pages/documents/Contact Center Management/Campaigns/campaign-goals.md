---
pagename: Campaign goals
categoryName: Contact center management
subCategoryName: Campaigns
indicator: both
subtitle: Measure your success by setting a goal for your campaign
level3: ''
permalink: contact-center-management-campaigns-campaign-goals.html
isTutorial: false
isNew: false
date: 2019-01-27 08:23:25 +0000

---
Each campaign within LiveEngage has a campaign goal, which signifies what the campaign hopes to achieve. By selecting a goal, you can track the performance of your campaigns and understand their value to your business. Once you create a goal it will be added to the goals library and you can re-use it in future campaigns.

The first step in building your campaign is to decide on one of the possible LiveEngage goals that represents your business goal, for example, _complete a service journey_, _generate leads_, or _sell a product or service_. Choose from a variety of customizable goals that can be used as criteria for success. LivePerson will track and display each of the goals reached as conversions on the data bar.

![](/img/goals 1-2.png)

The list of your campaigns appears on the **Campaigns tab**, and includes a data bar, and the details of your campaigns.

## How to set a goal

1. From the Campaign page, click Add goal to access the Goal Library.

{:start="2"}
2. To configure a new goal, click Add new. The different types of goals are available on the next screen.

![](/img/goals3-2.png)

{:start="3"}
3. Once a goal has been created, it will appear in the Goal Library and can be reused in this and future campaigns.

![](/img/goals 4-2.png)

## What kind of goals can I choose from?

There are five goal types to choose from: **generate leads, sell product/service, service activity complete, increase page views** and **other** (which enables you to define your own goal type). Let’s look at sample use cases for three of these goals:

### 1. Sell product/service goal

**Use case:** Max’s Diamond Jewelry

Max is the owner of an online chain of stores that sells diamond jewelry. His business goal before the holidays is to sell the high-margin pieces (those that sell for over $10,000) that don’t move well during the slack season.

Max selects a Sales goal from the Goal Library. He sets the Sell Product / Service goal to transactions over 10,000. In this way, he can measure the success of this campaign. Every time a sale over 10,000 is made, LiveEngage will display +1 in Conversions. Max will then know if the strategy of his campaign is effective. Max receives a message that the transaction information data has been tracked over the past 24 hours, so he is good to go.

{: .notice}
**Note**: If Max had not yet configured tracking, he would have seen the message, “We haven't received transaction information data in the last 24 hours.” In that case, he would have clicked the “configure tracking” button. He could also configure the Transaction attribute under Engagement Attributes in the e-commerce category.

![](/img/goals 6-2.png)

#### Transaction information as an indicator

A LiveEngage transaction is the way which the system reports the exchange of money for goods or services. Transactions in LiveEngage can be used as an indicator for a certain goal. For example, if the goal of a campaign is to sell a product or a service, then an approved transaction event verifies the attainment of the goal and each transaction that takes place increases the Goal KPI by 1. For this reason, the transaction data should be collected only for approved transactions. For example, if a user is buying a product, the transaction event should fire on the thank-you page, and not when he clicks to purchase.

#### How to define a transaction:

1. In the Goal Library, add a new sales goal, e.g., “Sell product/service” and give it an appropriate name, such as _Electronics Sales._
2. Select Transaction as the indicator.
3. You can set the goal for transactions to **any value**, to indicate that any transaction will be measured as a success. If you are only interested in measuring transactions above a given value, select the second option, **More than**, and type in your value.
4. If you haven’t yet configured tracking, you’ll see the message, “We haven't received transaction information data in the last 24 hours.” Click the **Configure tracking** button to do so now. You can also configure the Transaction attribute under Engagement Attributes in the eCommerce category..
5. Choose **EMBED CODE** if you want to embed code in order to report on transactions to LiveEngage (recommended) or choose **EXTRACT DATA** if you just want to extract the data from the page.

Now, LiveEngage will measure success based on the users who performed a transaction, and allow you to see the monetary value that each campaign is driving. Read more about this in [Engagement Attributes]().

In the goal indicator settings, Max set his goal as **more than 10,000**, and clicked **save**.

![](/img/goals 7-2.png)

{: .important}
**Note:** If Max’s account reports more than one currency, the additional currency amount will also be included in the total purchase value. Targeting will occur for each value that fits the desired range without distinguishing between currencies.

Max can now create engagements that he believes will target his high spenders. Once the campaign is activated, each time a consumer completes a transaction valued at over 10,000 (in any currency), his conversion will display +1 in the data bar. Max can see if his engagements have been successful, or if he needs to change his strategy, for example by targeting other users, or selecting different entry points to display the engagements.

### 2. Service activity complete

**Use case:** Great Bank

Julia manages the Great Bank mobile app and she is setting up a campaign that will measure the number of times users complete the online journey required to apply for a gold credit card. Each time an app user successfully completes this journey, the conversion will display +1 in the data bar.

Julia chooses a goal type that reflects the user journey in the app: **Service activity complete.** She names the goal, adds a short description and selects the particular topic that reflects the activity that she wants the user to complete: **apply for a gold card**. She then clicks **Save**. Now, every time that an app user completes the activity of applying for a gold card, the conversion will display +1 on the data bar.

#### Set multiple statuses for service goals

The visitor journey for any given service activity, or topic, usually consists of multiple stages. To be able to define more than one stage as a success, your developer will map each of the stages in your customer’s journey to the statuses defined in LiveEngage. Then, once the stages are mapped to statuses, you can decide which one or more of the statuses is considered a success, or a conversion.

For example, when a customer applies for a loan, the stages of applying for a loan (the topic) will be assigned statuses such as, in progress, not approved, missing details, pending or resolved. You can select more than one of the statuses and define each one as a success within the process, e.g., pending and resolved.

Furthermore, you can define multiple statuses for more than one topic simultaneously. This gives you more flexibility in determining how to define a successful visitor journey.

Each of the boxes relates to one status; Status #1, etc. Within each status box, a topic, or topics, have been selected. Once one of the topics reaches one of its selected status(es), the goal is considered reached. Here’s an example:

### 3. Generate leads goal

**Use case:** Learflights

Alex, the Marketing Director at Learflights, wants to generate leads by inviting potential customers to sign up for a monthly newsletter that will include attractive travel deals. To achieve this goal, he has developed an online strategy that targets new consumers to his site when they sign up for the newsletter. Alex chooses the goal type Generate Leads. Every time that a new consumer signs up, he/she is redirected to a “Thank you” page, causing the KPI for this goal (the conversion) to display +1. By tracking the success of the goal, Alex can see if his campaign is generating the leads he expects.

![](/img/goals 9-2.png)

There are additional types of goals that you can customize and use to measure the success of your campaigns.

* The _Increase page views_ goal counts the number of pages (that you determine) that the consumer browsed as a success.
* _Other_ is a fallback option counts landing on the URL of your choice as a success.

Consider what your short-term business goals are, and translate them to LiveEngage goals. Track the success of your campaigns and tweak your engagements to consistently improve your conversion rates by using appropriate goals.

{: .important}
**Note:** On the page for each Goal, a checkbox can be found at the bottom of the page to ‘Count goals’. Checking this box will mean that the goals will only be counted once per visit. For Messaging engagements, the goal can only be counted at the same session, due to the ongoing nature of messaging conversations. For customers visiting the site in different sessions, the goal will be reevaluated.

## Duplicate goals

In order to avoid compromising the integrity of your data, LiveEngage allows you to eliminate duplicate goals in one of two ways: by using goal indicators such as URL and page views (1), or through engagement attributes (2).

1. By checking “Count goals reached only once per visit” under Count Goals, goals will fire only once per session (per visit). If your page is meant to allow visitors to perform a variety of actions (such as lead and purchase, purchase twice, etc,) then you may wish to leave the checkbox unchecked in order to count what seems to be duplicated events but in reality are not.

![](/img/goals 10-2.png)

{:start="2"}

1. By using engagement attributes you can assign a unique ID to the different goal types; Purchase (Order ID), Leads (Lead ID), and Service activities (the combination of Service ID, Topic and Status). When the system recognizes an event with a unique ID as having already been collected in a particular session, metadata, which signals a duplication, is added to the event. This allows the system to filter all duplicates from reports and conversions are counted only once. This kind of deduplicating is enabled by default and cannot be disabled.

{: .notice}
**Note:** For the particular goal _Interact with Visitors_, engagements in the same session will be counted multiple times yet be counted as one “Goal reached”. For example, a visitor might chat multiple times within one session, yet it will be counted as only one “Goal reached”. You will then see in your reports more engagements  than “Goals reached”.

## Goal Conditions

Some of the targeting conditions only support web engagements. You can refer to the full list of supported conditions below to see which conditions are supported in mobile and which are not.

{: .important}
**Note:** Do not create a mobile app engagement assigned to an irrelevant business goal, as this may be result in ineligible mobile engagements.

| Conditions | Relevant source |
| --- | --- |
| Sell product/service (URL) | Web |
| Sell product/service (Transaction SDE) | Web, Mobile |
| Generate leads (URL) | Web |
| Generate leads (Lead SDE) | Web,Mobile |
| Service activity completed (Service SDE) | Web,Mobile |
| Increase page views | Web |
| Other | Web |