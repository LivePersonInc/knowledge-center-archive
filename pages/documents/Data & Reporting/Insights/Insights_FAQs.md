---
pagename: Insights FAQs
categoryName: Data & reporting
subCategoryName: Insights
indicator: both
subtitle: FAQs for all matters relating to Insights
level3: ''
permalink: data-reporting-insights-insights-faqs.html
isTutorial: false
date: '2020-05-19'

---

### What is text analytics?
Text Analytics draws meaning out of written communication such as chat or messaging conversations. We examine chat or messaging conversations to understand patterns, interest and customers’ pain points. 

### What is machine learning?
Machine learning is the scientific study of algorithms and statistical models that computer systems use to perform a specific task without using explicit instructions, relying on patterns and inference instead. 

### What is the difference between Insights and LivePerson Reporting Analytics Builder?
Insights is a text analytics tool which focuses on the transcript as well as a subset of the metric data. Insights only looks at interactive and closed conversations that are in UTC time zone and is used to analyze text in transcripts. The Analytics Builder focuses on the metrics associated with the program. Also it is looking at all conversations regardless if it was closed or interactive, it runs on local time zone and it analyzes structure data. 

### What is the difference between Insights and Intent Manager?
Intent Manager uses real-time intent detection through every turn of the conversation.  Consumer intents are identified at the message line level. The process begins with a starter pack of industry-specific intents which are used to train a machine learning model for your data.  Intent Manager is a self-serve, real-time intent analysis to help brands stay proactive, train bots or enforce workforce management. 

Insights analyzes historical data, current through the previous day. Where Intent Manager identifies intent at the individual message line, Insights identifies topics across the entire conversation.  The tool can isolate and analyze the conversation topics found in the consumer side of the conversation as well as the agent side.  Users may build personalized taxonomies and new topics maybe added as new products or themes are detected. 

### When would I use Insights?  When would I use Intent Manager?
Here are some examples of how brands are using Insights:
* Bot Program Development:  Deep dive into top consumer intents and the corresponding agent responses to help determine appropriate scenarios to implement bots 
* Intent Analysis:  Why consumers are interacting with the brand. This helps understand why customers are contacting the brand 
* Agent Optimization/Best Practices:  Identify common agent behaviors and correlate key KPIs with higher and/or lower performance
* Program Optimization: Use conversation topics joined with KPIs to identify positive or negative outcomes (relative to conversion or CSAT, for example) to identify best practices and drive program improvements 
* Website Optimization: Identify the top topics by webpage to pinpoint opportunities for self service and top questions suitable for FAQs
* Before and After:  Analyze differences in topic volumes and KPIs between two time frames to 
* Comparative Analysis:  Compare topic and KPI results from subsets of data to expose differences in behavior and performance
* Trend Analysis: Review daily/weekly/monthly trending of conversation topic volume and associated KPI and agent performance.

#### Use cases for Intent Manager:
* Use Intent Manager to discover and define specific intents for your brand.
* Explore conversations in the Intent Manager dashboard and use insights to optimize policies.
* Uncover intents in the Intent Manager dashboard that can be automated in LivePerson’s Conversation Builder.
* Create intent-based routing rules in LivePerson’s Maven AI that can automatically direct customers to relevant bots and human agents.

### How up to date is the data?
Insights pulls data on a nightly basis. Conversations closed today will be pulled in overnight and available the next day in the portal. For example, if today is the 23rd then the data would stop on the 22nd. ETL runs every night. 

### What is sentiment?
Sentiment identifies customers’ expressed opinions and feelings, using natural language processing and a sentiment dictionary or lexicon. The overall sentiment detected within conversation is measured using values ranging from -5 to 5.  A sentiment dictionary is a list of words and phrases with assigned sentiment scores or polarities, along with a list of negation words. We compute the average sentiment based on the words and phrases within the unstructured (textual) data in your conversations.. In the word cloud visualization, words that are blue have  a positive sentiment score, gray words have neutral sentiment and red words have negative sentiment. 

### Can I combine chat and messaging data together?
Although you can ingest and report on both chat and messaging data in Insights, the chat and messaging data cannot be combined because they are two different types of data, with different attributes. We will have separate data streams for chat and messaging. 

### How is the data aggregated?
Data streams can be broken out into monthly or quarterly batches.  

### What browsers are supported?
We recommend using Chrome or Firefox.  Internet Explorer is not supported by Insights.  

### Is there a limit to the number of users we can have?
10 users are included In a standard agreement. Additional users may be added by request.  As a best practice, we recommend identifying 2 power users to provide edit level support for the team.   

### Can users have different permission rights?
Yes, users can be view-only or edit users. 
* View only users - can view dashboards, apply filters and create widgets. However, newly created widgets will not be saved once the user exits out of the dashboard. 
* Edit users - can edit dashboards and create widgets.  They also  have the option to save filters. Edit users can apply taxonomies and create machine learning widgets. 

### Can data be sampled?
Yes, data can be sampled. We would need to know the monthly number of records or the percent of total conversations that should be pulled  in order to set up a project. You may have multiple data streams in your project, but each stream should be no larger than 200K documents.  

### Can I limit the data in Insights according to skill?
Yes, we can filter the data streams by specific skills. We would need to know the skills names and skill IDs when setting up a project.  

### Can we integrate third party data with Insights?
Yes, we can load third party text-based data intoInsights.  If there are shared conversation ids to join the third party data with the chat or message conversations, we can integrate the data with your conversations in the Insights platform 

### What types of survey metrics are included?
We can capture NPS (net promoter score), CSAT Agent (agent customer satisfaction), CSAT Overall (overall customer satisfaction), FCR (first contact resolution), ease of interaction and conversion rates calculated  from survey responses.

### Can Insights be used with languages other than English?
The Insights engine can run natural language processing (NLP) in 26 languages. However, the brand would need to leverage its internal team resources to create taxonomies in languages other than English.  

### What types of offerings does Insights provide?
There are 3 types of offerings:
* Self-service  - an Insights analyst will help with dashboard creation and user training
* Analytics - Brands may subscribe to receive deep dive analytics reports, created by analysts on the Insights team. The reports can be delivered on either a monthly or quarterly cadence.  
* One time reports may also be scheduled.  Please reach out to your account team for pricing details. 

### How do I sign up for Insights?
Brands will need to work with their LivePerson Client Partner. We will need to have a change order form on file to document the terms of your Insights program to begin the set up and data loading process. Please read the [getting started guide](data-reporting-insights-getting-started-with-insights.html) for more information.
