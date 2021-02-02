---
pagename: Intent Discovery
categoryName: Bots & automation
subCategoryName: LivePerson Intent Manager
indicator: messaging
subtitle: A step-by-step guide on how to improve your Intent model. 
level3: ''
permalink: ai-bots-automation-liveperson-intent-manager-intent-discovery.html
isTutorial: false
isNew: false

---

The new Intent Discovery feature is very powerful and in ortder to reach its full potential, here is a step-by-step guide & top tips on how to improve your Intent model.

## Improve my overall intent-detection coverage
### This is useful if you want to increase your current intent classification’s message coverage.

**a. Discover new consumer intents**
* Turn on the switch for “Only show unclassified messages”
* Explore the largest clusters and subclusters–they contain a larger portion of consumer intents
* Identify any patterns within a cluster.
For example, if a cluster named “contract” has several sub-clusters with similar meanings, like “end contract” and “expire contract”, it may be worth exploring.
* View the messages within the subclusters and validate if they contain similar intents.
For example, the “end contract” sub-cluster may contain several messages where users are wondering when their contract ends (as opposed to wanting to prematurely end their contract).

**b. Create a new intent**
* Click on the button “Create/modify intents with this sub-cluster”. You should be shown a table that displays all the messages from the sub-cluster.
* Individually select the relevant messages, or select them all by clicking on the checkbox at the top of the Messages table.
* Click on the dropdown button “Set Intent”, and then select “Create a new intent” to open up a modal.
* Set the Domain, Intent Name. Then you can modify, remove, and add new messages to the Utterance Library that will be used to train the new Intent. Once completed, * click on “Create new Intent”.

**c. Train and deploy the new intent model**
* Navigate to the Intent Builder and select the domain of the newly added intent. You should see the new intent you just created. You may want to test some phrases by using the intent tester 
* Click on “Train” to begin training the intent model with the new intent.
* In the Versions tab, once training is complete, press “Activate” on the new version. Your model is now updated.

## Improve a specific intent’s classification rate and/or confidence rating
### This is useful if a specific intent has low confidence scores, or lacks a sufficient number of training utterances.

**a. Determine which intent(s) need improvement**
Use the cluster chart to visually identify sub-clusters that contain a mix of both classified and unclassified messages (a mixed distribution of classifications suggests the messages are not being consistently identified correctly). If the classified messages have different intents, the sub-cluster would be an even stronger candidate for improvement.

**Modify the existing intent(s)**
Click on the button “Create/modify intents with this sub-cluster”. You should be shown a table that displays all the messages from the sub-cluster.
You can batch-select the messages that should be added or reclassified to the correct intent by following the steps in 1b, or you reclassify them one-by-one by using the dropdown input in the Intent column of the table.

**c. Train and deploy the new intent model** (same steps as c. above)
* Navigate to the Intent Builder and select the domain of the newly added intent. You should see the new intent you just created. You may want to test some phrases by using the intent tester 
* Click on “Train” to begin training the intent model with the new intent.
* In the Versions tab, once training is complete, press “Activate” on the new version. Your model is now updated.

## Improve the false classifications for a specific intent
### This is useful if a specific intent is misclassifying messages via either false-negatives (not identifying a message’s intent when it should) or false-positives (identifying a message’s intent when it should not).

**a. Determine which intent(s) need improvement.**
There are 2 methods of approaching this:
1)  Hide unclassified messages by using the filter to exclude “unclassified” messages, or
2) Apply a filter for a specific intent, then analyze the various cluster and sub-cluster labels for suspicious patterns. For example, if a filter for the “cancel service” intent is applied, and there are cluster labels with the word “cancel order” in the chart, then there may be some misclassifications.

**b. Scan and reclassify the sub-clusters’ messages**
* Preview the messages by clicking on the sub-cluster, followed by the “Create/modify intents with this sub-cluster” button. In the Messages table, visually scan the Intents column for anomalies. If there are any, investigate if the message has been correctly identified.

**c. Train and deploy the new intent model** (same steps as c. above)
* Navigate to the Intent Builder and select the domain of the newly added intent. You should see the new intent you just created. You may want to test some phrases by using the intent tester 
* Click on “Train” to begin training the intent model with the new intent.
* In the Versions tab, once training is complete, press “Activate” on the new version. Your model is now updated.


