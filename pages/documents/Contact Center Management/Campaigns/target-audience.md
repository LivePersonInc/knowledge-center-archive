---
pagename: 'Target audience '
categoryName: Contact center management
subCategoryName: Campaigns
indicator: both
subtitle: Configure your engagements to target the ideal consumer
level3: ''
permalink: contact-center-management-campaigns-target-audience.html
isTutorial: false
isNew: false
date: 2019-01-27 10:10:49 +0000

---
By defining a target audience for your campaign, you can ensure that the campaign will appear only to the consumers you most want to reach, i.e. those that are most likely to benefit from a particular service or those that have the highest chance of converting.

## Configuring your target audience

Within the **target audience library**, you can select a predefined target audience or define the attributes of consumers you want to target with this campaign. Predictive algorithms within LiveEngage will then target the most valuable consumers within your target audience. For example, consumers from a certain geographic location who typed specific search terms to get to your website.

To learn how to collect information about your visitors, let’s look at an example that targets “Platinum” customers. To start, you must tell LiveEngage what types of customers you have.

1. From the Campaign tab, select a campaign and access the **target audience library**. Click **add new**.
2. From the add new target audience page:
   * Select a name for your target audience and add a description.
   * Click **customer info** from the condition list, to add the condition box.
   * Select **customer type**.
   * Type in a unique name, e.g., Platinum. Press enter and **done** to allow the system to add the new type to your list. Once you add “Platinum” it will be included in your customer type list.
   * To edit your customer types, click **manage**.
   * To add additional types, click **manage**, scroll down and then click **add type**.
3. Next, configure LiveEngage to collect the data. If you haven’t configured tracking yet, you’ll see a message that reads, “We haven't received customer info data in the last 24 hours.” You can click the Configure tracking button or you can configure tracking under Data Sources > Engagement Attributes > Visitor Information category.
4. The same process can be implemented for customer status. Examples of customer status might be “migrated” or “inactive.”

<div class="important"> <b>Important:</b> <ul> <li>If the data appears on the page, LiveEngage can extract it without code. Many web pages don’t display the data and therefore you may need to use code for this Engagement Attribute.</li> <li>The data on the page must match the name of the target audience list items exactly (they are case insensitive). For example, if you define the customer types “Gold” and “Silver,” you cannot target a visitor by flagging data named “Gold Plus.”</li> </ul> </div>

Now, LiveEngage will track your customers according to their status and type, allowing you to offer each customer an appropriate chat experience. Decide when to display engagements by selecting the conditions you wish to impose on the target audience. Here is a list of the currently available conditions:

1. **External referral:** Target consumers who arrived at your website from other web pages.The definition of a page can be an exact URL or a URL containing a specific word or a regular expression (advanced). It is possible to add multiple rules for external referral; if a consumer is arriving from any one of these URLs then this condition will be applicable.

   **Note:** this attribute is currently only supported for web engagements.

![](/img/target-audience-1.png)

{:start="2"}

1. **Search keywords:** Target and/or exclude consumers who enter your website by searching for keywords within a search engine. The keywords used can either be manually entered (multiple keywords can be entered in this section and if any of them are used by the consumer this condition will be applicable) or imported from a Google AdWords campaign. Keywords passed from Google only apply to paid search referrals. To learn more about targeting users by keyword, [click here](https://docs.google.com/document/d/1fsYszswd0443EENuL0xEpgEfS-TLrStVZRz1aAmrjOw/edit#heading=h.op0nj124cf72).

{:start="3"}

1. **IP range:** Target and/or exclude consumers within sets of defined IP range(s). It is possible to add multiple IP ranges.

![](/img/target-audience-2.png)

{:start="4"}
4\. **Platform:** Target consumers browsing from specific devices. It is possible to select from the following devices:

* Desktop/Laptop
* Mobile tablet
* Mobile smartphone

{:start="5"}
5\. **Marketing source:** Target or exclude consumers arriving from a specific marketing source.  whether a marketing channel, affiliate, or external campaign. If you want to specify an originating channel, you can select from the following options:

* Direct
* Display
* Email
* Paid search
* Referral
* Search
* Social

To target consumers arriving from an affiliate or external campaign, you can manually enter the sources (multiple sources can be entered in this section and if the consumer originates from any of them this condition will be applicable). 

Marketing source is an Engagement Attribute, for more information on reporting this attribute, please refer to the [relevant section](http://oavrxoiy0ht8aq.live.forestry.io:8080/If%20you%20want%20to%20specify%20an%20originating%20channel,%20you%20can%20select%20from%20the%20following%20options:%20%09*%20Direct%20%20%20%20%20*%20Display%20%20%20%20%20*%20Email%20%20%20%20%20*%20Paid%20search%20%20%20%20%20*%20Referral%20%20%20%20%20*%20Search%20%20%20%20%20*%20Social%20%20To%20target%20consumers%20arriving%20from%20an%20affiliate%20or%20external%20campaign,%20you%20can%20manually%20enter%20the%20%09sources%20(multiple%20sources%20can%20be%20entered%20in%20this%20section%20and%20if%20the%20consumer%20originates%20from%20any%20of%20them%20this%20condition%20will%20be%20applicable).Marketing%20source%20is%20an%20Engagement%20Attribute,%20for%20more%20information%20on%20reporting%20this%20attribute,%20please%20refer%20to%20the%20%5C%5Brelevant%20section%20in%20the%20Engagement%20Attributes%20guide%20on%20the%20Developer%20Community.%5C%5D(https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html)) in the Engagement Attributes guide on the Developer Community.

{:start="6"}
6\. **Geo location:** Include or exclude consumers who are browsing your website or mobile app from specified countries, states, or cities as identified by their IP address. Start typing a location and then select from the displayed list.

![](/img/target-audience-3.png)

{:start="7"}
7\. **New or returning:** Select consumers who have either visited your website for the first time or who have visited your website before (returning consumers), based on their local browser data storage.

**Note:** this attribute is currently only supported for web engagements.

{:start="8"}
8\. **Customer info:** Target or exclude your consumers by their type (e.g. VIP, Platinum), or life cycle status (e.g. migrated, inactive).

* To add a customer status, click on the text box and type the status name e.g. VIP. A dropdown command will appear ‘+ Add VIP’ - clicking this will add the status to the list of options. You can enter up to 110 statuses.
* To add a customer type, click on the text box and type the status name e.g. inactive. A dropdown command will appear ‘+ Add inactive’ - clicking this will add the type to the list of options. You can enter up to 110 types.
* Clicking ‘Manage’ will open the full list of options you have added; from here you can edit and delete the entries.

Once you have added the types and statuses, you can configure this target audience by selecting from the added options in the dropdown menu. 

Customer info is an Engagement Attribute, for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html#visitor-info) in the Engagement Attributes guide on the Developer Community.

{: .notice}
**Note:** You will need to decide if you wish to target by customer type or by customer status - it is not possible to target both parameters.

{:start="9"}
9\. **Consumer age:** Target or exclude your consumers based on their age. You can enter a specific age or a target age range. 

Consumer age is reported via the Personal Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#personal-info) in the Engagement Attributes guide on the Developer Community.

{:start="10"}
10\. **Time since registration:** Target or exclude consumers based on the amount of time that has passed since they became one of your customers (based on your own definition of customer registration). Selecting the time unit and entering a value defines the length of time you wish to base your targeting on. **For example:** 30 days since initial registration.

Time since registration is reported via the Customer Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#customer-info) in the Engagement Attributes guide on the Developer Community.

![](/img/target-audience-4.png)

{:start="11"}
11\. **Company size:** Target or exclude consumers by their company size. Enter the minimum and/or maximum number of employees to define the range you would like to target.

Company size n is reported via the Customer Info Engagement Attribute, for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html#visitor-info) in the Engagement Attributes guide on the Developer Community.

{:start="12"}
12\. **Balance:** Target or exclude consumers by their current balance (for example, account balance). Enter minimum and/or maximum currency values to define the range you would like to target.

Balance is reported via the Customer Info Engagement Attribute, for more information on reporting this attribute, please refer to the [relevant section]() in the Engagement Attributes guide on the Developer Community.

{: .notice}
**Note:** if you have multiple currencies reported on your account, this rule will target the values you enter regardless of the currency. For example, a range of 20 to 30 will target balances of both USD 25 and EUR 25.

![](/img/target-audience-5.png)

{:start="13"}
13\. **Customer ID:** Target or exclude consumers by their current customer ID. Manually enter the list of IDs you would like to target by (multiple IDs can be entered in this section and if any of them apply to the consumer this condition will be applicable).

Customer ID is reported via the Customer Info Engagement Attribute, for more information on reporting this attribute, please refer to the [relevant section ]()in the Engagement Attributes guide on the Developer Community.

![](/img/target-audience-6.png)

{:start="14"}
14\. **Gender:** Target consumers according to their gender (male, female or other).

Gender is reported via the Personal Info Engagement Attribute, for more information on reporting this attribute, please refer to the \[relevant section\]([https://developers.liveperson.com/engagment-attributes-types.html#personal-info](https://developers.liveperson.com/engagment-attributes-types.html#personal-info "https://developers.liveperson.com/engagment-attributes-types.html#personal-info")) in the Engagement Attributes guide on the Developer Community.

{:start="15"}
15\. **Store ZIP code:** Target or exclude consumers by their association with a store ZIP code. Manually enter the list of ZIP codes you would like to target by (multiple ZIPs can be entered in this section and if any of them apply to the consumer this condition will be applicable).

Store ZIP code is reported via the Customer Info Engagement Attribute, for more information on reporting this attribute, please refer to the [relevant section]() in the Engagement Attributes guide on the Developer Community.

{:start="16"}
16\. **Store number:** Target or exclude consumers by their association with a store number. Manually enter the list of store numbers you would like to target by (multiple numbers can be entered in this section and if any of them apply to the consumer this condition will be applicable).

Store number is reported via the Customer Info Engagement Attribute, for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html#visitor-info) in the Engagement Attributes guide on the Developer Community.

![](/img/target-audience-7.png)

## Target consumers by keyword

To target consumers that searched for the keywords in Google Search, manually configure the ValueTrack in each ad to send LiveEngage the keywords under the query string parameter name “keyword”. Make sure to use only “keyword” as the parameter name.

1. Log into your Google AdWords account.
2. For each ad in your ad groups, insert the destination URL and add the ValueTrack for keywords. (For additional help, go to Google AdWords Forum and read about Track clicks with ValueTrack.)
3. Make sure you select keyword as the parameter name for transferring keywords. Save the ad and repeat.

**Note:** Google will only share search information from AdWords and not from organic searches.

Now you can extract keywords from your Google campaigns manually or you can import them automatically by following these steps:

1. Under Data Sources click Connect Analytics. You’ll get a message that you’ve successfully connected.
2. On the Add new target audience screen, select Search keywords. You’ll get a message saying “We've successfully retrieved data from your Google AdWords account.”
3. To import a campaign from Google AdWords, select the relevant profile from the drop-down menu.
4. Select a campaign and click Import. All the keywords from all the ads in that campaign are then imported to the system, and consumers who search for one of these keywords will be targeted by LiveEngage.

![](/img/target-audience-8.png)

The Search Keyword Condition box lets you personalize the message for your customers. Even though Google makes it hard to extract the data, your customers will appreciate it when you serve them with the content they searched for in order to get to your website.

## Target audience conditions

Some of the targeting conditions only support web engagements. You can refer to the full list of supported conditions below to see which conditions are supported in mobile and which are not.

{: .important}
Do not create a mobile app engagement assigned to an irrelevant target audience, as this may be result in ineligible mobile engagements.

| Condition box | Relevant sources |
| --- | --- |
| External referral | Web |
| Search keywords | Web,Mobile |
| IP range | Web,Mobile |
| platform | Web,Mobile |
| Marketing source | Web,Mobile |
| Geo location | Web,Mobile |
| new/returning | Web |
| Customer info | Web,Mobile |
| Visitor age | Web,Mobile |
| Time since registration | Web,Mobile |
| Company size | Web,Mobile |
| Balance | Web,Mobile |
| Customer ID | Web,Mobile |
| Gender | Web,Mobile |
| Store zip code | Web,Mobile |
| Store number | Web,Mobile |
