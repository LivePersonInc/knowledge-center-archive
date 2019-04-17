---
pagename: Queue prioritization overview
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: 'Learn how LivePerson has developed queue prioritization specifically for
  brands using messaging '
level3: Getting started
permalink: contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html
isTutorial: true
date: 2019-01-16 08:25:55 +0000
isNew: false

---
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/312481307" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Queue prioritization focuses agent resources on the conversations that matter most. It allows brands to efficiently allocate staffing resources and better handle incoming messages by prioritizing conversations in the queue based on importance. 

## Benefits of queue prioritization

**Handling more conversations** - By prioritizing interactive conversations first you can drive more conversations towards a resolution.

**Allocate staff efficiently -** Efficiently allocate staffing resources and better handle incoming messages by prioritizing conversations in queues based on importance.

**Aligning business strategy and reflect on which consumers you answer first** - Use business rules and select the most suitable prioritization approach according to your brands needs and strategy.

**Increasing the customer satisfaction for the consumers that matter most to you** - Increase the customer satisfaction by lowering wait times on high priority skills.

## What does queue prioritization do?

The new prioritization algorithm allows brands to choose a custom blend of prioritization approaches for driving more actionable conversations towards a resolution. The approaches are:

* Queue entrance time - Give priority to conversations according to their entrance time into the queue.
* Conversation interactiveness - Give priority to conversations where the consumer has just written a message and therefore is considered more interactive.

Brands can also define their own business rules that dictate which conversations to prioritize based on the number of transfers the conversation has been through or by assigning a higher priority to conversations that are being transferred to or from a specific skill.

## Queue prioritization use cases

**Handle the night queue after handling the morning peak**

When the queue size is big, for example during the mornings hours, handle fresh conversations of users that contacted the center once the shift started, rather than handling the conversations that stacked up during the night. Once the morning peak is over, handle the consumers that approached the brand during the night.  
  
**Prioritize conversations that were transferred to a retention skill**

Define a business rule that assigns higher priority to conversations that were transferred to a retention skill.

**Prioritize conversations that were escalated by a bot**

Define a business rule that assigns higher priority to conversations that were transferred from a Bot skill enabling your human agents to quickly bring back the conversation on its course.

## ![](/img/queue-prior-overview-2.png)  
What to expect after enabling this feature?

* Wait time for high priority skills would be reduced
* Wait time for low priority skills would increase
* Avg. time to resolve issues would be reduced
* Number of handled conversations would increase
* CSAT/ MCS of prioritized customers increase
* CSAT/MCS of other customers may decrease

  ## Arriving at the desired configuration 

  **Understand the Queue Prioritization cycle**

  The Queue Prioritization runs every 2 seconds and prioritizes the conversations in the queue based on the prioritization approach that was drawn for the cycle.

  The prioritization approach is drawn according to a predefined probability defined when configuring the feature.

    
  **Derive the configuration**

  The Queue Prioritization configuration is built out of a list of rules that are derived from business questions.

  Answer the following questions to arrive at the desired configuration:
* What is the percentage of prioritization cycles in which you would like to prioritize based on Conversation Interactiveness?
* Are there any conversations you would like to assign with higher priority when transferred to or from a specific skill?
* After how many transfers of a conversation would you like to assign it with higher priority for handling?
* Would you like to change the prioritization approach based on time of day or queue size?

  ## How to configure

  LivePerson account teams must configure the queue prioritization for their customers.