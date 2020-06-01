---
pagename: Getting started with Insights
categoryName: Data & reporting
subCategoryName: Insights
indicator: both
subtitle: Accessing and getting started with Insights
level3: ''
permalink: data-reporting-insights-getting-started-with-insights.html
isTutorial: false
date: '2020-05-19'

---

## Accessing Inisghts
Access to Insights is strictly by request - speak to your account manager to discuss pricing and enablement.

Once the account is set up and data has been loaded, please e-mail helpdesk@lp-insights.freshservice.com and provide a list of users (names and emails) who will need access to the tool. Each user will receive an email with instructions to create login access . The email will be ‘Welcome to Advanced Insights’ coming from no-reply@liveperson.net.The link will expire in 24 hours so it is important to set up the account within that time frame. Once the account is set up, save the URL for future access. Note the tool is only compatible with Google Chrome.

## Getting Started with Insights
Insights is a stand alone application and is independent of the LivePerson Conversational Cloud.
Your URL is unique to your brand. 
When you log in, you will see several tabs on the right:
- Home: shows any recent activities in your portal
- Dashboard: shows all the dashboards that you created or dashboards that have been shared with you
- Data Streams: raw data file; you will only see them if they been shared with you

Advanced: 
- Taxonomies - you will see all the taxonomies you created and the ones shared with you
- Sentiment - you can tune the sentiment score for words
- Stopwords - you can add words that you want to discard from machine learning word cloud
- Chinese tokens - Provide a set of chinese words that you want the system to process together as one word

Groups: you can create groups if you want to a particular set of users to have only certain access
Notifications: shows details of changes made in dashboards 

To get started, click on the Dashboard tab to start creating a dashboard or to view existing dashboards shared with you. 

![](img/insights_1.png)

## Glossary
* Bigram -  A pair of grammatically related words found in the text 
* Buzzwords - Pairs of related words found in the text 
* Consumer Intent - The customer’s goal for his/her interaction with the brand
Consumer Journey - The set of experiences a customer has when interacting with a brand
Conversion Sale or other brand - defined consumer event (lead generated,
* CSAT - Customer Satisfaction – a survey score based on question(s) defined by the brand 
* Data Stream - Set of transcript data, packaged quarterly or monthly
* Emerging Trends - Topics identified by Insights Natural Language Understanding engine.  The widget may also include date trends for the topics 
* ETL - Export, Transform and Load – the process Insights uses to make copies of transcripts, format them and store them in the Insights database 
* KPI Key Performance Indicators – metrics identified by a brand as important business drivers 
* NLU - Natural Language Understanding – Insights underlying technology used to review your chats or messages to identify conversation topics  
* NPS Net Promoter Score – a loyalty measurement designed to identify consumer loyalty.  It compares the percentage of customers who are considered Promoters (high survey scores) with those considered Detractors (low survey scores) 
* Semantic Topic -  A small set of word pairs (bigrams) that frequently occur together. 
* Sentiment - Tone, as identified by Insights Natural Language Understanding engine. 
* Sparkline - A graphical depiction of the volume of mentions of the word pair over time
* Taxonomy -  Topics categorized by – hierarchical list of industry-specific conversation topics, curated by human analysts 
* Unstructured Data Data type including text and geolocational (place)
* Verbatim - Conversation text that may be grouped by speaker (customer, agent, bot) or source
* Widget - Individual data visualizations on an Insights dashboard 

## Use Case Examples
### What are the top ConversationTopics?
1. Navigate to the Consumer tab on the dashboard
2. Locate the Customer Topics Widget 
3. This widget shows all Customer Chat topics, number and proportion of records and associated metrics (e.g. CSAT)
4. Clicking on the sort arrows next to proportion of records allows you to view the list in descending order, showing the Topics in order of volume

![](img/insights-usecase-1.png)

### Which topics don’t perform as well as others?
1. Repeat the above process to view the Top Topics
2. Click on the Overview tab to find your Average metric scores (e.g., CSAT)
3. Within the Customer Topics widget within the Consumer Tab, you can view which Top Topics have scores above / below the average
4. In the example below we can see that Fees, Making Payments and Login Issues all perform less well than the average CSAT Score (4.36)
![](img/insights-usecase-2.png)

### Who are the top and bottom performing agents?

1. Repeat the above process to find your Average metric scores (eg CSAT)
2. Navigate to the Agent Tab on the dashboard
3. Within the Agents widget within the Agent Tab, you can view which Agents have scores above / below the average
4. In the example below you can see that Chris T (4.671) has the highest average CSAT score, whilst Mark B (4.277) is the only agent in the Top 10 with a CSAT score below average (4.36)
![](img/insights-usecase-3.png)
5. By filtering on specific topics (by clicking on a topic in the Consumer Topic widget as above) you can further drill down into the types of conversations that are resulting in higher or lower Agent CSAT scores
6. To see Conversation Examples, look at the chat examples widget. Click on example boxes to reveal the full transcript

### How to filter by bot and view topics that the bot is handling
1. Apply a BOT Filter to the dashboard by selecting the relevant Agent(s) or Skill(s) according to your brand
a) To Select an individual Agent, click the agent name on the Agent Widget
![](img/insights-usecase-4.png)
b) To Select an individual Skill, click the Skill name on the Skill Widget
![](img/insights-usecase-5.png)
c) To Select multiple Agents (e.g. Angela and Anita) or Skills in a filter, refer to the Filter guide [here](data-reporting-insights-filtering.html)
2. Follow the above processes to identify the top topics and which topics are performing better than others.
