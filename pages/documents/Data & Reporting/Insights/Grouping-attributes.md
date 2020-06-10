---
pagename: Grouping attributes
categoryName: Data & reporting
subCategoryName: Insights
indicator: both
subtitle: Grouping attributes and Stopwords
level3: ''
permalink: data-reporting-insights-grouping-attributes.html
isTutorial: false
date: '2020-06-01'

---

## What are attributes?
Attributes are the structured data of chats and messaging. Examples are: agent name, agent group, campaign name, campaign engagement, city, country, device type, CSAT, NPS, FCR, chat duration etc. 
 
## Why group attributes?
Grouping attributes is helpful if the analysis is only for a specific set of data. For example, if the use case is to only look for top performing agents, then creatinga grouping would be helpful because any agents can be selected as part of the analysis. 

## How do I group?
### Method 1: Creating Group Global Filter
1.	Open dashboard
2.	Go to the left side and click on the funnel icon 

3.	Click on “Add Filter” 
 

4.	From the drop down list select the attribute for grouping. For example, to group only a specific Agent Group together:
 

5.	Under “Selection”, check the agent group boxes and then click “Add Filter” or do a “Keyword Match” and then click on “Add Filter”
 
After the filter is applied, the whole dashboard will reflect the new filter

### Method 2: Creating Customized Group
Why should I customize a group of attributes?
Customizing groups would be helpful if the analysis is looking for a specific set of data. For example, if the analysis is to only look for skill names that have the name “service”, then creating a grouping will be helpful because it will only filter for those specific skills.  

## How do I group? 
1.	Click on the bottom right corner “+” sign

2.	On the left hand side, there will be a list of attributes that can be grouped. For example, to group only certain campaign names together:
  
3.	Select “campaign name” and then on the arrow beside it, select “Add Group”
         
4.	Select the campaigns to include in the analysis and then click “Group”
 
5.	Name the group and “Submit” . Note: repeat step 4 to make additional groups as seen below  
 
6.	On the left hand side, the new grouping will appear under “Calculated Fields”. You may use the new calculated field to create a custom group widget. In the current example, to see the custom grouping, go to “calculated fields” and select “Campaign Grouping” and it will show the grouping created earlier. 

## Stopwords
## What are stopwords?
Words can be omitted if they are not important in the word cloud. Only words in unsupervised machine learning can be discarded. Taking words out of the word cloud will not impact the number of records; it will just remove it from the word cloud. Stopwords are helpful if an agent uses canned phrases and the word cloud only shows those so deleting them is a good solution. 

## How do I delete words from the word cloud?
### Method 1: Selecting stopwords from topic wheel
1)	Select Dashboard 
2)	Choose a tab that has machine learning topic wheel
 
3)	Click on the pencil icon on the left side 


4)	Click on words that should be trashed. A line will go across words selected


5)	Click Reprocess

6)	Name the group
7)	Hit reprocess. Once a word is added to the stopwords and reprocessed, it will no longer show up in the word cloud. 
Best Practice: Exit out of the dashboard and wait a while before checking the dashboard again. Processing time depends on how many records the dashboard has. 
 

 

### Method 2: Using Advanced Tab to create stopword list
1)	Go to Advanced tab

2)	Click on Stopwords
 
3)	Click on “+” on the bottom right corner

4)	Name the group

5)	Click on Add new term to start adding words that need to be trashed

6)	Once done, click save

7) 	Go to the dashboard tab

8) 	Select the dashboard that needs to be analyzed

9) 	Click on the pencil icon on the left side

10)	 Stopwords can be applied against customer or agent machine learning 

11) 	Choose Add Advanced Options for either customer or agent machine learning

12) 	Under stopwords category, select Add

13)	The list created earlier would appear, select the list and then click Apply
 
14)	Click reprocess. Once a word is added to the stopwords and reprocessed, it will no longer show up in the word cloud.

