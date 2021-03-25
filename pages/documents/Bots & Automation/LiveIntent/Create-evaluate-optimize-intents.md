---
pagename: Create and Optimize Intents
categoryName: Bots & automation
subCategoryName: LivePerson Intent Manager
indicator: messaging
subtitle: Optimize your intent taxonomy using the Intent Discovery and Optimization tools
level3: ''
permalink: ai-bots-automation-liveperson-intent-manager-create-and-optimize-intents.html
isTutorial: false
isNew: false
redirect_from: 
  - ai-bots-automation-liveperson-intent-analyzer-create-evaluate-and-optimize-intents.html
  - ai-bots-automation-liveperson-intent-analyzer-create-and-optimize-intents.html
---

## Introduction
This article provides guidelines and best practices for adding and optimizing
intents and training utterances via the Intent Builder interface. Intents and training
utterances for Starter Packs and Custom Intent Modeling are produced via
processes outside Intent Builder but are ultimately input into Intent Builder via the
same interface. 

{: .notice}
Please note, for the purporses of this article, we assume that an intent
model has already been trained in Intent Manager.

## How to enable
Intent Discovery & Optimization is enabled by default for all Intent Analyzer customers. If you wish to disable, please contact your LivePerson account team.

## What is an Intent
A consumer request for an action or information from a brand. These consumer requests can be grouped under named categories that we call intents. Some examples of common intents are:
* check my order status - “What is the status of my lawn mower order?”
* request product price - “How much does the iPhone 11 cost?”
* make a payment - “Can I make a payment today for the total amount?”
* request a refund - “Hey are you able to give me a refund for this flight that was cancelled?”
* reset my password - “I forgot my password and I need to reset it.”
One thing you will notice is that each intent is framed as a request. This is important, as an intent should always be a type of consumer request or question. Specifying the consumer request makes the intent actionable and potentially automatable. Subjects by themselves are not intents. Examples of subjects that consumers may discuss are product names, service plan names, bills, service and product orders, locations, and dates.

## Intent vs. Nonintent example:
Instead of creating an intent named “my order,” consider instead looking for the most common consumer request associated with the subject “my order,” i.e., “check my order status.” This intent could include any consumer request asking to track their order or see whether their order has been processed.

## Step 1: Understanding your existing model
When you begin, first take a look at how the existing model is performing. There are a few key things to note: coverage, intent names, and the existing training data.
First, to easily gauge the coverage of the current model, visit the Intent Analyzer Dashboard as seen below, and check the “Top Intents” and “Intent Summary” pie charts:

![](img/IA-Optimize-intents-1.png)

{: .notice}
Note: In the “Intent Summary” pie chart, check both the classified vs. unclassified space at both the “conversations” and “messages” levels using the toggle button.  In the “Top Intents” chart look for how much of the pie chart “Undefined” occupies. If any of these metrics are very low, i.e., one-quarter or less of the pie charts, it is unlikely there will be many intents to discover. Take this into consideration as you proceed.  Don’t see undefined in the Top Intents chart?  Enable it by clicking on the gear option and selecting Display “undefined” intents.

2. Go to Intent Builder and check the intent names and their training data. It is important to read each message of training data that corresponds to each intent and verify whether the message fits the name of the intent. If a message is not a clear match to its corresponding intent, remove it from the training data.

3. Once you’ve finished looking over the existing model’s coverage, intent names, and intent training data, you should have a good understanding of the intents that already exist in your model. This is important to keep in mind going forward, as you do not want your future work to overlap with any of the existing intents.

## Step 2: Intent Discovery 
Intent discovery is the task of finding new intents to add to your current taxonomy. This is useful to expand your model’s coverage. Make sure to consider any existing intents (i.e., a starter pack) as you begin this process since you do not want to create an intent that will overlap with one of the existing intents in name or function.

{: .notice}
Note: Sometimes it is better to use the keyword filter in Intent Analyzer instead of creating an intent, depending on your goal. For instance, if you wanted to see which intents are being impacted by a devastating event like a wildfire, you could use a list of keywords such as “fire,” “smoke,” “air quality.” “evacuation,” etc. and from there, you can check the graphs in Intent Analyzer to see how often the keywords are occurring per intent as well as other useful metrics like the total number of utterances that contain one of the keywords.

Below is a visual guide for anyone starting the intent discovery process:

a) Start by going to the “Intent Discovery” tab as seen below:

![](img/IA-Optimize-intents-2.png)

b) Make sure the “Only show unclassified messages” toggle is enabled as seen below:

![](img/IA-Optimize-intents-3.png)

c) Now, begin looking through each “verb noun cluster”, starting with the largest. You can analyze a cluster by clicking on it, or one of its subclusters. Each cluster is about a general topic that consumers discuss, and it will visually show all of the subclusters contained within it. Subclusters are formed from sets of consumer messages that all used the same verb and noun pairing. These subclusters use the “root” versions of verbs, so all conjugations of the same verb (i.e. -ing, -ed) are grouped within the same subcluster. When you click on a subcluster or the “View Details” next to a subcluster, you can see the consumer messages that compose it.

![](img/IA-Optimize-intents-4.png)

d) As you are reviewing each subcluster, consider each as inspiration for an intent in your taxonomy. Before you convert a subcluster to an intent, verify two things:
* Does the subcluster represent an intent that is not covered in your taxonomy?
* Does the verb and noun pairing create a logical intent?
If you answered yes to both of these questions, then you probably have a good candidate for a new intent to add to your taxonomy! Keep in mind that sometimes multiple subclusters can be duplicates that use synonymous verbs. So, consider this while you analyze the subclusters and feel free to convert multiple subclusters into only one intent.

e) To convert a subcluster to an intent, find the subcluster you want to convert and click the “View Details” button. This will take you to the “Messages” view and show you the consumer messages that composed that cluster.

![](img/IA-Optimize-intents-5.png)

f) Now that you can see all of the messages that compose the subcluster, you can use the checkboxes on the left to select the messages you would like to use for the new intent. You can also choose to use the selected messages as training data for an existing intent.

![](img/IA-Optimize-intents-6.png)

For an alternative method of finding new intents, try looking through the data manually, following this process:

* While still in “Intent Discovery” switch to the “Messages” display, and start by trying to find a pattern or theme in the messages by filtering out everything except “Undefined.” First click the “Add Filter” button on the top left.

![](img/IA-Optimize-intents-7.png)

* Next, in the pop-up window, select “Intents” as your filter type on the left:.

![](img/IA-Optimize-intents-8.png)

* And then pick “Undefined” from the dropdown on the right:
![](img/IA-Optimize-intents-9.png)

* Try to review at least 30 messages. You may need to switch the number of messages viewable in the window from the default of 20 to 50 or higher if needed. Here is an example. In these messages, you may notice a few recurring patterns such as consumers reporting issues logging into their account. Let’s group those similar messages together to make an intent.

![](img/IA-Optimize-intents-10.png)

* After identifying a few patterns, see if you can group similar messages under a named label that you create. In the above example case, we can take the three checked utterances and make an intent named “Report login problem.” To name an intent, try to think of a short phrase that could describe the intent. Typically, an intent name has both a verb and a noun.

## Step 3: Finding More Messages

Now that we have discovered and named a few intents, let’s use our full list of intents to classify some consumer messages. These messages will be used as training data to create a model for the intents you’ve discovered. Determine a few rules for which messages should be classified by each intent and write them down. These rules are what we call intent “definitions” and will help you stay consistent as you classify messages. Make sure that the definitions of each intent do not overlap. Below are some examples of intents and their definitions:

|Intent| Definition|
|---|---|
| Request refund | A consumer request to receive a refund.|
| request account number | Any consumer request to attain, lookup, or find a consumer's account number.|

### Here are a few tips for picking training utterances:

* Use real customer utterances for training utterances. Do NOT write your own messages that you think might be similar to a customer message.
* Use complete utterances rather than phrases or parts of messages, as customers usually communicate in full messages and you want to match the way they state their intent.
* Work on all of your intents simultaneously, including the existing starter pack intents. This way, you classify more utterances more efficiently without having
to go back. It also helps the model to differentiate between intents, and you can better understand the differences if you read utterances with multiple intents
in mind.

There are a few methods you can use to find more messages:

First, you can read the unfiltered messages directly from the “Messages” view on the Intent Discovery tab, just make sure not to have a cluster or subcluster selected:
![](img/IA-Optimize-intents-11.png)

Another method is to use a keyword search to filter your results, as seen below:
![](img/IA-Optimize-intents-12.png)

Last, you can use the “Discover Similar Messages” feature to find messages similar to a message you select. To start, highlight a message with your mouse and click “discover similar messages,” as seen below:

![](img/IA-Optimize-6.png)

After clicking “discover similar messages”, Intent Analyzer will load a new set of messages into the “Messages with Intent” window, all of which are similar to the message that you picked at the beginning:
![](img/IA-Optimize-7.png)

Alternatively, you can use the clusters and subclusters in Intent Discovery to find additional training data as well. To do this, go to Intent Discovery’s cluster view and click a subcluster that you want to add to an existing intent. Once you’ve done this, click “view details” and the utterances from that cluster will be brought over to the “Messages” window. 

![](img/IA-Optimize-intents-13.png)
![](img/IA-Optimize-intents-14.png)

Regardless of which option you choose to find more messages, once you’ve found them, use the dropdowns on the right to classify them, or you can select multiple messages with the checkboxes on the left and reclassify them as a group.
![](img/IA-Optimize-intents-15.png)

{: .notice}
Note: You can also export the utterances using the “Export Table to CSV” as a spreadsheet to Excel or Google Sheets. Once the data has been exported and downloaded onto your local device, you can upload the file into Google Sheets or Excel and begin classifying messages.

![](img/IA-Optimize-intents-15.png)

## How To Select Training Utterances 

### Optimal number of utterances
1. For optimal performance, we recommend 60 to 100 training samples
per class, but not more than 150 samples due to the potential issue of model overfitting.

{: .notice}
Note: Currently, you can only pull a maximum of 500 messages at a time. If you classify five messages as an intent out of that set, you will need to pull five times more data to get enough training utterances for that intent.

### Utterance diversity
Avoid duplicate keywords or duplicating the same pattern across your data. LP-NLU models take a variety of things into account in predicting labels; trying to guess what those would be will lead to poor results. A better approach is to include diverse utterances created by actual customers.

**Diverse utterances that have a variety of words and structures:**
  * Are there two different passwords for admin and logging in
  * I keep trying to reset my password but it says it needs to confirm my email with an email
  * I have forgotten my 5 digit password
  * Trying to retrieve my username and password

**These utterances are very similar and NOT diverse:**
* Reset my password 
* Please reset my password
* Can you reset my password

## How to Split an Intent
Sometimes an intent is too broad and all encompassing. This can cause an intent to be less actionable and have poor accuracy. A simple way to fix this issue is to split the broad intent into smaller intents. An example of this is splitting the intent ask about credit limit from the Financial Services industry into three smaller intents: increase credit limit, decrease credit limit, and request credit limit information. The most important thing to remember is that the new, smaller intents should cover the same conversational space as the original broader intent. Do not give definitions to the new, smaller intents that go beyond the scope of the original broad intent’s definition. To split an intent into smaller intents, first delete the original, broad intent in Intent Builder. Then, gather the messages for the smaller intents just as you typically would for a new intent, and train a new model.

## What are Meta-Intents?
You may notice as you are working on your taxonomy that the number of intents can become difficult to manage if the taxonomy grows too large. In this case, we recommend using meta intents to help group and sort your intents. Please note that all starter packs come with meta intents. A meta intent is a wrapper that can contain many other standard intents. This functionality provides a way to funnel a variety of intents into a single category. When a consumer message matches one of the contained intents, both the standard intent and the meta intent are matched. Please clicj [here](https://developers.liveperson.com/intent-builder-meta-intents.html) for how to add meta intents.

## Step 4: Training your new model
Now that you have discovered some intents and found the training data for those intents, you’re ready to train your model. You should train your model at regular intervals as you add new intents and training data. Typically we advise training a new model at the end of every session of work on Intent Analyzer or Intent Builder. This will allow you to see the results of your changes the next time you revisit the model. To train a new model, follow these steps:

1. Open the domain.
2. Click Train in the upper-right corner to start the training.
3. To refresh the page and check on progress, click the Refresh icon in the Training Status column.

![](img/IA-Optimize-10.png)
![](img/IA-Optimize-intents-14.png)

## Step 5: Evaluating & optimizing your model

After creating your intents and adding training utterances on Intent Builder, confirm that the model is classifying incoming messages correctly. This is a summary of a process to evaluate and optimize your model. This only requires access to the Intent Manager dashboard. Depending on your taxonomy size, this process may take about 30 minutes to an hour.

Note: Another, more thorough method of testing your model’s performance is our Model Tester tool. This helpful [quick guide](https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-intent-manager-updates.html#a-new-model-tester-for-intent-builder) can guide you through the process.

### Check Intents: 
* First navigate to the Intent Analyzer [dashboard](https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-analyzer-dashboard.html)
![](img/IA-Optimize-11.png)

* In the Intent Analyzer dashboard, navigate to “Intent Discovery” at the top left, and make sure that the “Messages” view is selected.
![](img/IA-Optimize-intents-15.png)

* Click “Add Filter” at the top left.

* You should now see the “Add Filter” menu. Now, use the first dropdown menu to select “Intents” as your category.

* Then use the second dropdown menu to select which intent you want to filter on.
* Once you have an intent filter created, read around 10+ messages in the “Messages” window and verify that these messages match the current intent you are using as your filter. As you do this, refer to the intent’s definition for guidance (see links to definitions at the end of this document). Do this for every intent in your taxonomy, and track how many messages are correctly labeled per each intent. If you observe less than 60% correctly labeled messages, please see the “Diagnosis” step below for next steps. For a more accurate assessment of your model, review a larger number of messages per intent (20+ would be ideal).
* In the above example, six messages were correctly labeled as “report general login issues,” while two messages were incorrectly labeled as “report general login issues.” This gives you six out of eight correct, simplified to 3/4 or 75% correct.

**Check Undefined:**
Now, use the “Add Filter” button to change the filtering intent to “Undefined” which is at the very bottom of the list of intents.

Once you have done this, you will need to return to the “Messages” window as you did in Step and read 50+ of the filtered messages. While doing this, record how many messages are correctly classified as “Undefined.” “Undefined” is a label that is applied to messages that cannot be classified by any intent in a given taxonomy. Once you are done, calculate the percentage of correctly classified “Undefined” messages. If you observe less than 60% correctly labeled messages, please see the “Evaluation” step (following page) for next steps. Reading over a larger number (100+) of “Undefined” labeled messages is advised for an accurate assessment, but a minimum of 50 should be sufficient.

### Evaluation:

| Check Intents | Check Undefined | Evaluation |
|---------------|-----------------|------------|
| GOOD (greater than 60% avg correct) | GOOD (greater than 60% correct) | Looks good!| 
| BAD (less than 60% avg correct) | GOOD (greater than 60% correct)| You may have contradictorily labeled messages in your model’s training data and/or not enough training data. Revisit your intent definitions to check for overlap, and/or add additional training data to your intents.|
| GOOD (greater than 60% avg correct) | BAD (less than 60% correct) | Your intents lack variation in the training data. Your model needs a larger variety of messages added for each intent.|
| BAD (less than 60% avg correct) | BAD (less than 60% correct) | Overall performance is poor. Consult the taxonomy team, and consider revising your intents, their definitions, and their training data.|

## Starter-Pack Taxonomies:
* Financial Services
* E-Commerce
* Telecommunications
* Airlines
* Insurance
* Cross-Vertical/Retail

## Glossary
* intent: a consumer request for information or action from a brand.
* statement of intent (SOI): a consumer message that contains an intent
* unclassified/undefined: a statement of intent that contains an intent not seen in the defined set of intents.  
* coverage: the percentage of the messages that the intent recognition model would classify as one of the defined intents against the total number of intentful messages
* overfit: a model is overfitting, when it was trained in such a way to produce highly accurate predictions on its training set, which it has seen during training, but produces much less accurate results on a separate unseen dataset. 
* token: a single word or punctuation separated by white space
* training: the process wherein a model learns its parameters by mapping training messages to their target labels
* inference: the process wherein a model assigns a label for an incoming message using the weights it has learned during training.

## FAQs
### Model Performance

#### What is a confidence score?
Answer: Confidence score approximates how likely an intent is present in the message. For every message, the model will assign a score to every defined intent in the range of zero to 1. These scores will add up to 1. A confidence score close to 1.0 means the system is strongly confident a message contains an intent and a score close to zero implies that a particular intent is likely not present in a message.

#### What is a good confidence score?
Answer: The system is designed to be conservative in how it assigns scores. It cannot assign every message a confidence score of 1.0, and it only assigns an intent to a message if the confidence score reaches a certain threshold. The current Intent Builder threshold is set at 0.6. Anything below 0.6 will be assigned the intent of “Undefined.” A score of 0.65, for example, would mean that the message will be assigned an intent with less than strong confidence, whereas a score around 0.9 would represent a high likelihood that the message has a particular intent.

#### How should I use a model’s confidence scores to improve it?
Answer: You should not use confidence scores to determine the model’s performance. The confidence scores are not a reflection of the accuracy of the model but an approximation of the likelihood of the intents associated with the scores. Instead, model accuracy, precision, and recall are the metrics we usually rely on to assess the performance of the model. 

#### What exactly is the similarity score in Intent Analyzer’s intent discovery?  Does it represent syntactic similarity or lexical or both?
Answer: The similarity score is calculated using cosine similarity, measuring the angle between two vector representations of sentences. The larger the score, the smaller the angle and hence, the more similar the two sentences are. Our embeddings enable us to compare sentences on both the syntactic and the semantic levels.  

#### How should I improve my NLU model?
Answer: The performance of a model depends on both the quantitative and qualitative nature of the training samples. We require a minimum of five intents with 20 training samples per intent to activate training for a model in the Intent Builder. Anything less would adversely affect model performance. For optimal performance, we recommend 60 to 100 training samples per class, but not more than 150 samples due to the potential issue of model overfitting. Be careful that the topics or actions associated with an intent are exclusive to that intent. So, for example, you don’t want two intents that are both for consumers asking how to pay their bill. Furthermore, you can improve model performance by correcting model predictions in the Intent Analyzer and adding these messages to your training set and retraining your model.

#### I see a lot of messages that were misclassified as an intent, what should I do to fix this? (low precision)
Answer: Go through the training samples in Intent Builder for the intent in question and check whether there are overlaps between the training and the misclassified messages. If so, please remove your training examples that are similar to the misclassified messages. Additionally, make sure there is no overlap between intent definitions. Use training samples that can clearly differentiate between intents. Similar training samples should not be present in different intents. Also, see the general recommendation for How should I improve my NLU model. 

#### I see a lot of “undefined” messages that should have been classified as an intent, what should I do to fix this? (low recall)
Answer: Try to fix the misclassified labels in Intent Discovery’s “Messages” view, add them to the training samples, and retrain your model. You may also create a new intent and assign the “Undefined” messages to it if it doesn’t already exist.

### Small Messages vs. Large Messages

#### What is the impact of small messages vs. large messages on intent recognition?
Answer: In general, shorter messages tend to increase the likelihood of the model homing in on a few signals, such as action verbs like “cancel,” due to the sparsity of signals overall. We recommend having a balance of shorter and longer messages during training. 

#### Why do so many small messages get identified as intentful?
Answer: Overall, short consumer messages (less than or equal to five tokens) make up roughly 50% of all consumer messages. During inference time, especially in the case of the statement of intent (SOI) classifier or uSIC, we have observed a tendency of the current model to misclassify short messages with certain features, such as the presence of a question mark or a function word like “please,” as intentful. These, however, represent only some 3-4% of the total number of SOIs we detect with the USIC model. The bulk (~84%) of these misclassified SOIs will be identified as “Undefined” in the downstream intent recognition model and will not have a significant impact on the results and analysis shown on the Intent Analyzer dashboard. Furthermore, if we remove short messages entirely, we will be missing out on messages with the above-mentioned features that are definitely intentful, for example, “please cancel,” “yes, please enroll me,” etc.

### Large Taxonomies

#### How many intents should I have in my taxonomy? 
Answer: Conversation Builder requires a minimum of five intents and 20 utterances per intent to start training a model.. The average number of intents for a taxonomy with good coverage is 20-60.

#### What if I want more than 60 intents?
Answer: We have experimented with up to 80 intents without a significant performance drawback. Going above that, there is an increasing chance of intent overlap and the number of “Undefined” might go up as a result of the model being undecided and having low confidence scores below the minimum threshold. As your taxonomy grows in size, the intents themselves will likely become more narrow and specific in their definitions.  The most important thing to remember is that intents should never overlap each other in definition. This becomes of greater and greater importance as intents become more and more granular. To avoid overlap in a model with very granular intents, make sure that each message being used as training data only contains a singular topic of discussion. This topic should relate directly to the intent. It is very important that “edge case” messages (i.e. overly long messages or messages that contain multiple topics of discussion) are not used for training data when working on a large, granular taxonomy. Only use strong, clear examples as training data. Models that have very granular intents usually require a substantial amount of tuning once the first model is trained. Do this by carefully adding new training data in an iterative cycle. Add some training data and then train a new model, then evaluate and repeat the process if necessary. It is also useful to use the “Test” feature in Intent Builder to test consumer messages to see which intents have a strong confidence score for that message. If you see any intents that have a confidence score greater than ~20% - 30% and do not belong, revisit the training data for those intents and remove any messages that are similar to the message that you used in the “Test” feature. Although it is our goal internally to create an intent that at least covers 1% of all the SOIs and a taxonomy with at least 50% coverage, it is definitely worthwhile to create an intent with lower coverage if it has special value to a customer.

### Punctuation

#### Does punctuation affect training utterances and intent recognition?
Answer: Punctuation doesn’t affect the training and intent recognition. During preprocessing steps only alphanumeric characters are considered. [Technical note: this step is done before tokenization hence the advice.]

### Typos and Misspellings

#### How does NLU handle typos and misspellings?
Answer: Typos and misspellings do have a small impact on the model. You might hurt the model’s prediction accuracy if you deliberately introduce random typos at inference time. However, when both the training and the test data contain common typos and misspellings we run into in natural online conversations, auto spelling correction at inference time does not seem to improve the model’s performance. Therefore, we recommend that we do not deliberately correct common typos and misspellings in the training set to keep it consistent with the natural data the model will see at inference time.

### Case Sensitivity

#### How does capitalization affect intent recognition?
Answer: Capitalization or the lack thereof doesn’t affect intent recognition in the current version of the model. As with typos and misspellings, there is not much to be gained in correcting capitalization errors. 

### Miscellaneous

#### What level of coverage and performance should businesses expect or aim for when Intent Manager is first turned on?
Answer: The Starter Packs are supposed to be the start rather than the end of a customer’s journey into intent discovery, analytics, and automation. The Starter Packs contain predefined intents and a training set sampled from a customer’s historical data. Depending on the domain and the brand, the coverage and accuracy may vary greatly. On average, a business can expect 56.3% coverage with 50.1% accuracy on starter pack data. But it varies across different verticals.

| Verticles | Coverage on Test Set | Precision on Defined Intents |
|-----------|----------------------|------------------------------|
| Airlines | 75% | 69%| 
| Cross verticle / retail | 48% | 73%| 
| Finserve | 59% | 64%| 
| Telco | 46% | 64%| 
| Insurance | 78% | 68%| 

#### What happens if I switch off the “Enable Intent Analyzer” toggle in the Intent Builder?
Answer: Turning off an intent in such a manner will remove it from future prediction labels but historical intent labels on messages will persist in the system.  The backend model will continue to consider the removed intent in model predictions behind the scenes unless you remove the intent in the Intent Builder and retrain your model. 

#### What are entities & how should they be used? 
Answer: Currently, LP NLU v2 uses entities to facilitate the creation and curation of training sentences. For example, you may create an entity named PRODUCT with a value set of all the product names and models you supply. When creating or curating training sentences, you can replace a specific product name with the entity name PRODUCT. Using entities will help you extend your training sentences like a “template” onto all products and will prevent your model from focusing too much on certain product names during training.

#### Should I create intents to capture common ways that customers state affirmative (yes, yes please, sure, I would like that...) and negative (no, no thank you, not at this time, I don’t think so...) ?
Answer: It is rarely advised to create an affirmative/negative intent for a conversation, as the intent is but an affirmation or negation of the intent contained in the preceding agent question. Hence, the affirmatives/negatives could envelope a variety of intents. Our model currently does not process the preceding context when rendering a prediction on a particular consumer message. 
Instead, consider simpler and safer ways to capture affirmation and negation by, for example, using pattern matching or button selection. In a controlled situation, like an anticipated consumer response to a bot yes/no question, this should be quite effective.

#### What does classifying a message to "undefined" in Intent Analyzer do? Does it train the model to classify similar messages as “undefined”?
Answer: It marks the message and all subsequent incoming messages that are its duplicates as “Undefined,” but it will not retrain the model unless you tell it to. Sometimes you might be curious as to why a message was labeled with an intent but should have been unclassified. It is advised not to classify the message to “undefined”, but instead revisit your training data in Intent Builder for the intent that was incorrectly applied. You might find similar training messages that you could remove to prevent another false positive in the future.

#### How do I revert to a previous model?
Answer: Before you train your new model, go to Intent Builder, select your domain, and then go to Domain Settings.  From there you can export a CSV of your intents and their training data. Later, you can use this CSV as training data to revert to the older model if necessary. 
