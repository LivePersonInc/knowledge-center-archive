---
pagename: 'Target audience '
categoryName: Contact center management
subCategoryName: Campaigns
indicator: both
subtitle: Configure your engagements to target the ideal consumer
level3: ''
permalink: target-audience.html
isTutorial: false
isNew: false
date: 2019-01-27 12:10:49 +0200
published: false

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

**Important:**

* If the data appears on the page, LiveEngage can extract it without code. Many web pages don’t display the data and therefore you may need to use code for this Engagement Attribute.
* The data on the page must match the name of the target audience list items exactly (they are case insensitive). For example, if you define the customer types “Gold” and “Silver,” you cannot target a visitor by flagging data named “Gold Plus.”

Now, LiveEngage will track your customers according to their status and type, allowing you to offer each customer an appropriate chat experience.

Decide when to display engagements by selecting the conditions you wish to impose on the target audience. Here is a list of the currently available conditions:

1. **External referral:** Target consumers who arrived at your website from other web pages.The definition of a page can be an exact URL or a URL containing a specific word or a regular expression (advanced). It is possible to add multiple rules for external referral; if a consumer is arriving from any one of these URLs then this condition will be applicable.

**Note:** this attribute is currently only supported for web engagements. 

  
![](https://lh6.googleusercontent.com/ggH0IYQoG1sl2TdSme5TAR6tGLDEsGuIqI5g3iAZWQ_tPFjNUSKKqXx-w2ux6bfmzyATKZVAqRYUCExgaWDdIIL3AWlTWPUW_n82VC5BkFYxzFWLE_fVGPZircqCOlGC38jxPSuw =429x195)

2. **Search keywords:** Target and/or exclude consumers who enter your website by searching for keywords within a search engine. The keywords used can either be manually entered (multiple keywords can be entered in this section and if any of them are used by the consumer this condition will be applicable) or imported from a Google AdWords campaign. Keywords passed from Google only apply to paid search referrals. 

	

	To learn more about targeting users by keyword, [click here](https://docs.google.com/document/d/1fsYszswd0443EENuL0xEpgEfS-TLrStVZRz1aAmrjOw/edit#heading=h.op0nj124cf72). 

  
  
  
  
![](https://lh3.googleusercontent.com/G9UkK1q7BOttjPkMGjv2W71cGw-2LskChm6C3ukFGeyK2gXWMF1CCW_wfCvr87oQGSVS2ieztv2PrHPjQFDLnrKNGQ4rr8KwLRfkWJrbsV0aehZMdbMN4U7RK-cnT5Aopk2ZDrW1 =431x161)

**3. IP range:** Target and/or exclude consumers within sets of defined IP range(s). It is possible to add multiple IP ranges.

![](https://lh5.googleusercontent.com/GKqT3q7FpPoAPjSLR7-6Gzl5TLshgjX4jnqhBMzOCdm12jBhSoCnZcNwXNFusY54zBGdgwFebg_IhhT_vOIRzn0k0is0gEXs2-CODjGHq7D8vDXRl5cwL594ynVHseA5hmzPK1Od =429x184)

**4. Platform:** Target consumers browsing from specific devices. It is possible to select from the following devices:

* Desktop/Laptop
* Mobile tablet
* Mobile smartphone

![](https://lh4.googleusercontent.com/AkexS1wlN15DECGrNAii3LyRHUQEGy2SBPsA-KelkDUx2t95kxSU62vF6s5gGLorWgtmPIyiXtGnwJqxvDpvXymPH4ErIYyo_ona4jqjFq1tYz7nQszaZTnKu5sAjyjy8niVa7ri =427x160)

**5. Marketing source:** Target or exclude consumers arriving from a specific marketing source.  whether a marketing channel, affiliate, or external campaign.

If you want to specify an originating channel, you can select from the following options:

* Direct
* Display
* Email
* Paid search
* Referral
* Search
* Social

To target consumers arriving from an affiliate or external campaign, you can manually enter the sources (multiple sources can be entered in this section and if the consumer originates from any of them this condition will be applicable).

Marketing source is an Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html) in the Engagement Attributes guide on the Developer Community.

![](https://lh3.googleusercontent.com/za7ZdXYX7JyBCvp1esqW9T34x4LEwuzz23KOt7XJT8QbcoW1n4y5Pd_C_nfi10Qg-nSIirmdVYIDo2Jm99U1fbakf8-ldI3MBD5BQzjzYn9xXWcKC8bKVwvaj9VhQ69GUOjCCtVL =431x179)

**6. Geo location:** Include or exclude consumers who are browsing your website or mobile app from specified countries, states, or cities as identified by their IP address. Start typing a location and then select from the displayed list.

![](https://lh3.googleusercontent.com/JZpbTT5U4bLXmCB3ZTRUfFwDmfIdOlZ1bCQRsSfpTdEn6q5wx_XHgZ4Wzd9et0ZmcRMO8o40x92RmZHBo9zvNFSlBNM5EzD6rJrZ80fIY5kwIMpOnN-5cp-0w1KT9Wc6VeOuAItX =429x159)

**7. New or returning:** Select consumers who have either visited your website for the first time or who have visited your website before (returning consumers), based on their local browser data storage.

**Note:** this attribute is currently only supported for web engagements.

![](https://lh5.googleusercontent.com/m3SkIDjbHYRTH7TjyM51ZkL8UhmqMAK0yzCHufMrWjV_nHrHcnrQWJJNpZroukblf-IBH0aBCDiDh_YHYJJ3nCkp-daI3c-ozWIJINjbwkjR_tBVJhuah1y3PscAYt9ihC8e16mh =429x136)

**8. Customer info:** Target or exclude your consumers by their type (e.g. VIP, Platinum), or life cycle status (e.g. migrated, inactive).

* To add a customer status, click on the text box and type the status name e.g. VIP. A dropdown command will appear ‘+ Add VIP’ - clicking this will add the status to the list of options. You can enter up to 110 statuses.
* To add a customer type, click on the text box and type the status name e.g. inactive. A dropdown command will appear ‘+ Add inactive’ - clicking this will add the type to the list of options. You can enter up to 110 types.
* Clicking ‘Manage’ will open the full list of options you have added; from here you can edit and delete the entries.

Once you have added the types and statuses, you can configure this target audience by selecting from the added options in the dropdown menu.

**Note:** You will need to decide if you wish to target by customer type or by customer status - it is not possible to target both parameters.

Customer info is an Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#customer-info) in the Engagement Attributes guide on the Developer Community. 

  
![](https://lh5.googleusercontent.com/kntAGINoAIWvJROf-wPjEZcLUIbuzOfr-c06iXefUsGlPi2Cp_o58MECVcn9h6pr1X-e0hrZCt4g_wq6hfai25YBlFUAZHv0WCtShKnr_E7rj7ZcOdscu2wIb4gQENbb82vEA_VS =428x157)

**9. Consumer age:** Target or exclude your consumers based on their age. You can enter a specific age or a target age range.

Consumer age is reported via the Personal Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#personal-info) in the Engagement Attributes guide on the Developer Community. 

![](https://lh5.googleusercontent.com/jqM9cySqZLm9PIhMRF--WuBlCAHN0r4XMgttmnYTjSBlIjRcttW_ldw_lYxPCKxelLLx2AFgA6TcWj59XPCR9DHEeGh3p7IKQ0P3AE2hHAHHxcy_JX6hR_Mb2PVFrsQB4bRnntmS =428x157)

**10. Time since registration:** Target or exclude consumers based on the amount of time that has passed since they became one of your customers (based on your own definition of customer registration). Selecting the time unit and entering a value defines the length of time you wish to base your targeting on. For example: 30 days since initial registration.

Time since registration is reported via the Customer Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#customer-info) in the Engagement Attributes guide on the Developer Community.

![](https://lh3.googleusercontent.com/diVYHjnzoJ48BSp96__R8dctegXtkx7NdjPDcm_1vTlemsx_5KPb7SeltxgwZF1MvUkiazYNZO9Fu2Qx8xvmzczfpR6Ndtsnp6EUJchYf2Ut38D-iDs9dsrafB0iHsM3tS5cvpUw =431x177)

**11. Company size:** Target or exclude consumers by their company size. Enter the minimum and/or maximum number of employees to define the range you would like to target.

Company size is reported via the Customer Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#customer-info) in the Engagement Attributes guide on the Developer Community.

![](https://lh6.googleusercontent.com/L0tLFwV2F8SxR5ypNrAI2KnOcfcbiOE06JLrAydBGmNz_v0im4KtATZpt_yujfC7CZqonlcD8yjhrG0xSMtlIGO3J0RRzkWqlL0btMw7aD9DyZHKx3H_8Bj-tuU4dA6q7h5ny_ZB =428x155)

**12. Balance:** Target or exclude consumers by their current balance (for example, account balance). Enter minimum and/or maximum currency values to define the range you would like to target.

**Note:** if you have multiple currencies reported on your account, this rule will target the values you enter regardless of the currency. For example, a range of 20 to 30 will target balances of both USD 25 and EUR 25.

Balance is reported via the Customer Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#customer-info) in the Engagement Attributes guide on the Developer Community.

![](https://lh5.googleusercontent.com/Fmu5qChX48Rfydm7Vn9zkWcP9ieS3nbIHbvRJSWEMiYf0hAJ4rWHPVbShTYoCO2gukJZEE-xJFCpmRHO5bZgevTD9Dt4eYJLv9Ech232BHyAN98rjpsaE_T3kjyhAMj304Tq8tpH =431x161)

**13. Customer ID:** Target or exclude consumers by their current customer ID. Manually enter the list of IDs you would like to target by (multiple IDs can be entered in this section and if any of them apply to the consumer this condition will be applicable).

Customer ID is reported via the Customer Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#customer-info) in the Engagement Attributes guide on the Developer Community.

![](https://lh5.googleusercontent.com/Ch9WIBSvqAxS14dm-xa0ieeWXXyfhPvEJPS0jWmjNkLb7N_lNUhhWxRBbM4xaRfOwf_5ml-IYF9CsGbR-6eNvTB0v-u0EjUduEbwDHZLMrsvEosPGbqXDCsJS5fpc8rgoPbhsn3O =428x156)

**14. Gender:** Target consumers according to their gender (male, female or other).

Gender is reported via the Personal Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#personal-info) in the Engagement Attributes guide on the Developer Community.

 ![](https://lh6.googleusercontent.com/iCCLexZWSbxR-_lAVJzJnXBJyRKHbcLxD_MIqH-WTHNsWxhsiddxLzjECTAG2BNh9pa7jOGg5d67rbytAzZr3Ku3jXBj1nwPISrLM1WLArIb6yEYIaFnljkrFQf-8KTfrEKPnI6B =431x160)

**15. Store ZIP code:** Target or exclude consumers by their association with a store ZIP code. Manually enter the list of ZIP codes you would like to target by (multiple ZIPs can be entered in this section and if any of them apply to the consumer this condition will be applicable).

Store ZIP code is reported via the Customer Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#customer-info) in the Engagement Attributes guide on the Developer Community.

![](https://lh5.googleusercontent.com/oQW0cxSWhZ9wJcLi_-JonMu2N5HA5P712tevfedC4G9D5eWcZl-VUX7ZOlgUPaXxSpsY3k0nMqHwkHqSDJqJEXnJjpQBsRpjbDp72wDS67FeCoP6d5ZvWSB78kW2IclOY9WBaHPs =429x160)

**16. Store number:** Target or exclude consumers by their association with a store number. Manually enter the list of store numbers you would like to target by (multiple numbers can be entered in this section and if any of them apply to the consumer this condition will be applicable).

Store number is reported via the Customer Info Engagement Attribute; for more information on reporting this attribute, please refer to the [relevant section](https://developers.liveperson.com/engagment-attributes-types.html#customer-info) in the Engagement Attributes guide on the Developer Community.

![](https://lh4.googleusercontent.com/SbTV5_3Jx2p-Degc2tZtanLoRx-63vgeyh6sgVl3YyYDtifLatjDYu0DiziIa1SGo-lrOaIrDjEHWEHPiowpfAMwFCwgWHJ7MrNnGB6zOgqn8qBMxt3tzuD3P-wKL9e3V_yn13YN =429x157)

 

## Target consumers by keyword 

To target consumers that searched for the keywords in Google Search, manually configure the ValueTrack in each ad to send LiveEngage the keywords under the query string parameter name “keyword”. Make sure to use only “keyword” as the parameter name.

1. Log into your Google AdWords account.
2. For each ad in your ad groups, insert the destination URL and add the ValueTrack for keywords. (For additional help, go to Google AdWords Forum and read about Track clicks with ValueTrack.)
3. Make sure you select keyword as the parameter name for transferring keywords. Save the ad and repeat. 

![](https://lh4.googleusercontent.com/xJZUjVuCZakE25AmgqTjBGSG-Wqld0_CfpmSnJpWvme4ZSUww2oG7TyVk9wNe4mwGG-B9CWkRMcgb22FlYyvqZr6v69wA2Z3gltHDh_R_2PbdiS88G39AWjOlZ8dR72VWGW6zlbX =426x188)

**Note:** Google will only share search information from AdWords and not from organic searches.

Now you can extract keywords from your Google campaigns manually or you can import them automatically by following these steps:

1. Under Data Sources click Connect Analytics. You’ll get a message that you’ve successfully connected.
2. On the Add new target audience screen, select Search keywords. You’ll get a message saying “We've successfully retrieved data from your Google AdWords account.” 
3. To import a campaign from Google AdWords, select the relevant profile from the drop-down menu. 
4. Select a campaign and click Import. All the keywords from all the ads in that campaign are then imported to the system, and consumers who search for one of these keywords will be targeted by LiveEngage. 

![](https://lh3.googleusercontent.com/EswdW-y2uev6yLfoHiB7SDOkkni81jfaZ4k_Ee3qSaQOdYJdP9KJxzEQxsDbIOhyLI0Jkzky9bWRXxs1w79_hxTWGN1W8ilwT1lSrnBbsLPiHdI9S8JvQVYP4A4r5uELhcmb2CaZ =424x215)

The Search Keyword Condition box lets you personalize the message for your customers. Even though Google makes it hard to extract the data, your customers will appreciate it when you serve them with the content they searched for in order to get to your website.

 

# 

# Target Audience Conditions

Some of the targeting conditions only support web engagements. You can refer to the full list of supported conditions below to see which conditions are supported in mobile and which are not. 

**Do not create a mobile app engagement assigned to an irrelevant target audience, as this may be result in ineligible mobile engagements.**

| --- | --- |
| Condition box | Relevant sources |
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

##  