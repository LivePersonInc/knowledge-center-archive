---
pagename: Setting up engagement attributes
categoryName: Data & reporting
subCategoryName: Engagement attributes
indicator: both
subtitle: 'Collect in-depth information by setting up engagement attributes '
level3: ''
permalink: data-reporting-engagement-attributes-setting-up-engagement-attributes.html
isTutorial: false
date: 2019-01-17T12:12:28.000+00:00
isNew: false

---
LivePerson provides out-of-the-box basic information about your visitors, for example, the visitor’s geolocation, the amount of time they spent on a page, and which pages they viewed.

In order to collect more in-depth, specific information such as products viewed, purchase information, errors the visitor encountered, and search results, you can set up engagement attributes.

Information collected using engagement attributes can be used to achieve the following:

* Create specific and advanced targeting of visitors
* Route consumers more accurately to the most appropriate skill/agent to handle their query
* Empower agents with relevant information during conversations with consumers
* Receive a comprehensive view of visitor engagement history
* Measure and track campaign goals

For further information on the individual engagement attributes, please refer to the [documentation](https://developers.liveperson.com/engagement-attributes-overview.html) in our Developers' Community.

## Validating the engagement attributes value

Verifying the implementation of the engagement attributes values can be done via the LivePerson interface (after an hour) or directly from your website:

### Validation via LivePerson interface

1. From the campaigns footnote, click data sources.
2. On the integrations tab, scroll down to the engagement attributes section.
3. Click the configure button for the data category you wish to check.
4. If the engagement attribute you are checking has been reported on during the last 24 hours, then the data indicator (a green checkmark) will be displayed - for example, the "cart update" attribute in the image below has been reported on during the last 24 hours and therefore has a green checkmark next to it.

![](/img/Setting-up-engagement-attributes1.png)

If the engagement attribute has not been reported on, a grey ‘i’ symbol will be displayed instead of the data indicator which has a green check.

### Validation directly from the website

1. Add an item to the cart on your site.
2. Using Firefox or Chrome, open the dev tools (press F12) and type:lpTag.sdes.get('cart');
3. Verify that the values are correct.

![](/img/ea3.png)

{: .notice) 
**Note:** To start using Engagement Attributes for web messaging, this functionality needs to be enabled. Please contact your LivePerson account team for more information.