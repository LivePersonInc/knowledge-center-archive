---
pagename: FAQs
categoryName: Bots & automation
subCategoryName: LivePerson Intent Analyzer
indicator: messaging
subtitle: The LivePerson Intent Analyzer provides real-time intent identification to help businesses optimize
  operations and enable data-driven automation programs
level3: ''
permalink: ai-bots-automation-liveperson-intent-analyzer-faqs.html
isTutorial: false
isNew: false
---

## Model Performance
### What is a confidence score?
Answer: Confidence score approximates how likely an intent is present in the message. For every message, the model will assign a score to every defined intent in the range of 0 to 1. These scores will add up to 1. A confidence score close to 1.0 means the system is strongly confident a message contains an intent and a score close to 0 implies that a particular intent is likely not present in a message.

### What is a good confidence score?
Answer: The system is designed to be conservative in how it assigns scores. It cannot assign every message a confidence score of 1.0 and it only assigns an intent to a message if the confidence score reaches a certain threshold. The current Intent Builder threshold is set at 0.6. Anything below 0.6 will be assigned the intent of “undefined.” A score of 0.65, for example, would mean that the message will be assigned an intent with less than strong confidence, whereas a score around 0.9 would represent a high likelihood that the message has a particular intent.

### How should I use a model’s confidence scores to improve it?
Answer: You should not use confidence scores to determine the model’s performance. The confidence scores are not a reflection on the accuracy of the model, but an approximation of the likelihood of the intents associated with the scores. Instead, model accuracy, precision, and recall are the metrics we usually rely on to assess the performance of the model. In Q4, we plan to roll out a new feature which will enable our customers to evaluate their own models by cross-validating model performance on the training data. 

### What exactly is the similarity score in Intent Analyzer’s intent discovery?  Does it represent syntactic similarity or lexical or both?
Answer: The similarity score is calculated using cosine similarity, measuring the angle between two vector representations of sentences. The larger the score is, the smaller the angle and hence the more similar the two sentences are. Our embeddings enable us to compare sentences on both the syntactic and the semantic levels.   

### How should I improve my NLU model?
Answer: The performance of a model depends on both the quantitative and the qualitative nature of the training samples. We require a minimum of 5 intents with 20 training samples per intent to activate training for a model in the Intent Builder. Anything less would adversely affect model performance. For optimal performance, we recommend 60 to 100 training samples per class, but not more than 150 samples due to the potential issue of model overfitting. Be careful that the topics or actions associated with an intent are exclusive to that intent. So, for an example, you don’t want two intents that are both for consumers asking how to pay their bill. Furthermore, you can improve model performance by correcting model predictions in the Intent Analyzer and by adding these messages to your training set and retraining your model.

### I see a lot of messages that were misclassified as an intent, what should I do to fix this? (low precision)
Answer: Go through the training samples in Intent Builder for the intent in question and check whether there are overlaps between the training and the misclassified messages. If so, please remove your training examples that are similar to the misclassified messages. Additionally, make sure there is no overlap between intent definitions. Use training samples that can clearly differentiate between intents. Similar training samples should not be present in different intents. Also, see the general recommendation for How Should I Improve my NLU model.  

### I see a lot of “undefined” messages that should have been classified as an intent, what should I do to fix this? (low recall)
Answer: You should try to fix the misclassified labels in the Conversation Details tab of Intent Analyzer, add them to the training samples and retrain your model. You may also create a new intent and assign the “undefined” messages to it, if it doesn’t already exist. 

## Small Messages vs. Large Messages

### What is the impact of small messages vs. large messages on intent recognition?
Answer: In general, shorter messages tend to increase the likelihood of the model honing in on a few signals, such as action verbs like “cancel,” due to the sparsity of signals overall. We recommend having a balance of shorter and longer messages during training. 

### Why do so many small messages get identified as intentful?
Answer: Overall, short consumer messages (less than or equal to 5 tokens) make up roughly 50% of all consumer messages. During inference time, especially in the case of the statement of intent (SOI) classifier or uSIC, we have observed a tendency of the current model to misclassify short messages with certain features, such as the presence of a question mark or a function word like “please,” as intentful. These, however, represent only some 3~4% of the total number of SOIs we detect with the uSIC model. The bulk (~84%) of these misclassified SOIs will be identified as “undefined” in the downstream intent recognition model and will not have a significant impact on the results and analysis shown on the Intent Analyzer dashboard. Furthermore, if we remove short messages entirely, we will be missing out on messages with the above-mentioned features that are definitely intentful, for example, “please cancel”, “yes please enroll me,” etc. 

## Large Taxonomies

### How large can a taxonomy be? Or how many intents should I have? 
Answer: Conversation Builder requires minimum 5 intents and 20 utterances per intent to start training a model. The more intents you have, the harder it becomes for you and your annotators to keep track of the taxonomy due to the cognitive overload. We have experimented with up to 40 intents without significant performance drawbacks. Going above that, there is an increasing chance of intent overlap and the number of “undefined” might go up as a result of the model being undecided and having low confidence scores below the threshold. 

### How granular should an intent be?
Answer: Intents can be granular enough to be actionable, but not so granular that it conflicts with other similar intents. Although it is our goal internally to create an intent that at least covers 1% of all the SOIs and a taxonomy with at least 50% coverage, It is definitely worthwhile creating an intent with lower coverage if it has special value to a customer. 

## Punctuation

### Does punctuation affect training utterances and intent recognition?
Answer: Punctuation doesn’t affect the training and intent recognition. During preprocessing steps only alphanumeric characters are considered. [Technical note: this step is done before tokenization hence the advice.]

## Typos and Misspellings

### How does NLU handle typos and misspellings?
Answer: Typos and misspelling do have a small impact on the model. You might hurt the model’s prediction accuracy if you deliberately introduce random typos at inference time. However, when both the training and the test data contain common typos and misspellings we run into in natural online conversations, auto spelling correction at inference time does not seem to improve the model’s performance. Therefore,  we recommend that we do not deliberately correct common typos and misspellings in the training set in order to keep it consistent with the natural data the model will see at inference time. 

## Case Sensitivity

### How does capitalization affect intent recognition?
Answer: Capitalization or the lack thereof doesn’t affect intent recognition in the current version of the model. As with typos and misspellings, there is not much to be gained in correcting capitalization errors. 

## Miscellaneous

### What level of coverage and performance should businesses expect or aim for when Intent Manager is first turned on?
Answer: The Starter Packs are supposed to be the start rather than the end of a customer’s journey into intent discovery, analytics, and automation. The Starter Packs contain predefined intents and a training set sampled from a customer’s historical data. Depending on the domain and the brand, the coverage and accuracy may vary greatly.  On average, a business can expect 56.3% coverage with 50.1% accuracy on starter pack data. But it varies across different verticals.

### What happens if I switch off the “Enable Intent Analyzer” toggle in the Intent Builder?
Answer: Turning off an intent in such a manner will remove it from view on the dashboard along with all the messages associated with the intent, historical or present. The numbers and charts will update accordingly to reflect the distribution over the remaining intents. The backend model will continue to predict the removed intent behind the scenes, unless you remove the intent in the Intent Builder and retrain your model. 

### What happens if I turn off an intent in the Intent Analyzer dashboard?
Answer: Turning off an intent will remove it from view on the dashboard along with all the messages associated with the intent, historical or present. The numbers and charts will update accordingly to reflect the distribution over the remaining intents. The backend model will continue to predict the removed intent behind the scenes, unless you remove the intent in the Intent Builder and retrain your model. 

### What are entities & how should they be used? 
Answer: Currently, LP NLU v2 uses entities to facilitate the creation and curation of training sentences. For example, you may create an entity named PRODUCT with a value set of all the product names and models you supply. When you are creating or curating training sentences, you can replace a specific product name with the entity name PRODUCT. The use of entities will help you extend your training sentences like a “template” onto all products and will prevent your model from focusing too much on certain product names during training.  

### Should I create intents to capture common ways that customers state affirmative (yes, yes please, sure, I would like that...) and negative (no, no thank you, not at this time, I don’t think so...) ?
Answer: It is generally not advised to create an affirmative/negative intent for a conversation, as the intent is but an affirmation or negation of the intent contained in the preceding agent question. Hence the affirmatives/negatives could envelope a variety of intents. Our model currently does not process the preceding context when rendering a prediction on a particular consumer message. 
Instead, consider simpler and safer ways to capture affirmation and negation by, for example, using pattern matching or button selection. In a controlled situation, like an anticipated consumer response to a bot yes/no question, this should be quite effective.

### What does classifying a message to "undefined" in Intent Analyzer do? Does it train the model to classify similar messages as “undefined”?
It marks the message and all subsequent incoming messages that are its duplicates as “undefined”, but it will not retrain the model unless you tell it to. 
