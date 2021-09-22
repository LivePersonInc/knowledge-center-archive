---
pagename: Unsupervised NLU Model
categoryName: Data & reporting
subCategoryName: Insights
indicator: both
subtitle: Unsupervised NLU Model
level3: ''
permalink: data-reporting-insights-unsupervised-nlu-model.html
isTutorial: false
date: '2020-06-01'

---

## Overview
Unsupervised NLU (Natural Language Understanding) model is designed to automatically analyze large textual datasets and discover topics and themes.It is a grouping of keywords that agent, bot or customer uses during chat or messaging transcripts. This can be used to help start creating a taxonomy. 

### How to add NLU model to dashboards:
- Choose dashboard for analysis and open it
- Click on the data stack icon on the left-hand side of your dashboard and then the 3 dots 

![](img/unsupervised-nlu-model-1.png)

- Click on Edit

![](img/unsupervised-nlu-model-2.png)

- Select Deploy New Model 

![](img/unsupervised-nlu-model-3.png)

- Choose Unsupervised NLU Model

![](img/unsupervised-nlu-model-4.png)

- Choose the type of verbatim (customer, agent, or bot) you would like to analyze  from the list on the left side and then click on the plus sign and choose text 

![](img/unsupervised-nlu-model-5.png)

- Change the name of the Unsupervised NLU Model to include the type of verbatim you are analyzing and click Submit 

- Choose Submit again

- Once the Unsupervised NLU Model starts processing, it will say “1 model processing”

![](img/unsupervised-nlu-model-6.png#left)

- Once processing  is complete, it will say Models up-to-date on the left side 

![](img/unsupervised-nlu-model-7.png)

 To create an Unsupervised NLU Model widget, go to the bottom right side and click the “+” sign to open the Widget editor
 On the left side of the Widget editor, there will be a category for Unsupervised NLU Model and to see all topics, click on Topics

![](img/unsupervised-nlu-model-8.png)

### Defintitions

* language.code - The two-letter language code of the detected language, e.g. en, fr, jp. 
* language.name- The full name of the detected language, e.g. English, French, Japanese.
* ngrams - Sets of words (two by default) that appear together frequently in the corpus.
* sentiment.overall - The overall sentiment detected within the corpus, with values ranging from -5 to 5.
* tokenized - A list of every word detected in the corpus. This is trivial for languages that use spaces between words, but for languages in which there are no spaces between words and multi-character words are possible, each requires a custom tokenizer.
* topics- Clusters of similar themes or related terms within the corpus of text. 
* unigrams - A textual array of single words within the data stream. Stratifyd calculates the total number of words and the number of unique values. Useful in a word cloud viewed with filters on average sentiment.
* Data - A table containing all of the original data from the data stream, plus all of the analyzed data from the model.

The default visual is the topic wheel which shows the most common word pairings that it was used during a chat/ conversation (this visualization can be created by selecting the ‘topic’ option under the Unsupervised NLU model in Widget editor)
![](img/unsupervised-nlu-model-9.png)
To add a word cloud or a list of words besides the topic wheel, go to the right side and look at the drop down menu under Key-N-Grams

### Cloud View:
![](img/unsupervised-nlu-model-10.png)

### List View
![](img/unsupervised-nlu-model-11.png)

Once a visual is decided, click Save and widget will be added to the dashboard
The Unsupervised NLU Model will show the most commonly used words that a customer, agent or bot used during a chat/ conversation. This can be used to identify the most common topics and themes and help tune or create a taxonomy. 

![](img/unsupervised-nlu-model-12.png)

Buzzwords- word pairings that either customer/bot/agent used
Count- how many chats/conversations the buzzword was used
Sentiment- score given for the buzzwords. Gray- neutral sentiment, blue- positive sentiment, red- negative sentiment
Users can analyze any of the topics by clicking on any topic. Once a filter is applied, the whole dashboard will reflect the latest filter. 
