---
pagename: Extracting engagement attributes with no code
categoryName: Data & reporting
subCategoryName: Engagement attributes
indicator: both
subtitle: ''
level3: ''
permalink: data-reporting-engagement-attributes-extracting-engagement-attributes-with-no-code.html
isTutorial: false
date: 2019-01-17 12:57:45 +0000

---
LiveEngage can extract information about certain attributes that exist on your web pages, such as cart total, marketing channel source, transaction order ID and lead details. We call these “engagement attributes”, and they can be used to improve your customer satisfaction, to customize your engagement experience and to generate reports.

1. Decide what attributes you want to extract.
2. Find the element that holds the data in your web page source. LivePerson can collect data from html element class, ID or Javascript global variable.
3. Access the engagement attributes through data sources.
4. Map the relevant attribute and its properties according to how you want to extract the data. Do this by copying the identifier into the field.
5. Click "save" and you’ll see a success message validating your configuration.
6. Repeat these steps for each attribute you want to configure and extract. Once you have configured your web site for an attribute, LivePerson will search for it in every page of your web site and extract it.

{: .notice}  
LivePerson will “trim” any non-numeric characters such as dollar signs for properties that represent numbers, e.g., “total”.

{: .notice}  
Make sure that the identifier class name or ID is unique. LivePerson will look for your identifier on all your pages.

**Example:**

The span element in this example has a unique class called “totalAmount”.

![](/img/extracting data no code1.png)

{: .notice}  
Some data won’t appear on your webpage. To collect that data, you can use our Javascript code.
