---
pagename: Engagement Controller
categoryName: AI, bots & automation
subCategoryName: Conversation Orchestrator
level3: ''
indicator: messaging
subtitle: The Engagement Controller is a feature within Conversation Orchestrator that enables brands to control the incoming flow of conversations in Web Messaging. 
permalink: ai-bots-automation-conversation-orchestrator-Engagement Controller.html
isTutorial: false
isNew: false
date: '2021-05-08'
published: true

---

## What is Engagement Controller

The Engagement Controller is a feature within Conversation Orchestrator that enables brands to control the incoming flow of conversations in Web Messaging. 

This feature is in addition to the existing Campaign Builder settings. It allows brands to use welcome bots to start conversations and will show or hide Web Messaging engagements based on skill availability. Campaign Builder settings such as enable or disable engagements or Campaign time frame will always have higher priority than Engagement Controller settings.

Users are able to set up rules that contain conditions which check skill availability based on the queue size and the wait time metrics as well as actions to show or hide engagements. Rules can be set up on  the campaign or engagement level. Rules on campaign level will affect all engagements in this campaign.  

Rules in the engagement level have higher priority over the campaign level. If you have a rule on an engagement, and another rule on the campaign of this same engagement, the engagement rule is the one that will be applied to your web messaging.

![](img/engagement-controller-1.png)

## Metrics

**Queue Size:** Number of conversations waiting in queue for a skill - input value in number of conversations
**Wait Time:** Average of the last 60 minutes the consumer has been waiting for an agent to be assigned to the conversation - input value in seconds

## AND / OR - Connectors

Rules can be set up with one or two metrics. The connectors available are AND and OR. Combining two metrics within the same rule with an OR connector would be like setting them up in separate rules. If one of the thresholds is reached the rule will be applied on the engagement. Connecting two metrics with an AND connector will be more strict, because both thresholds have to be met for the rule to be applied. 

## Active / Inactive

New rules are always listed at the top of the rules list. They are inactive by default. This means they are not applied to engagements in Campaign Builder. By activating them with the status toggle the rule will be applied to the engagement and will execute the action based on the defined condition. 

Note: after activation it can take up to 5 minutes for the rule to apply the action on the engagement window. Then the system is checking the set value every 10 seconds and will take actions accordingly.

![](img/engagement-controller-2.png)

## Pause all rules

In case needed, the feature can be disabled with the Pause all rules button. This will stop any rule  in Engagement Controller from taking action on engagement windows. The engagement windows will keep showing until they are manually disabled in Campaign Builder.

 ## Limitations

* Using Engagement Controller in Web Messaging can create a chat like experience, but then doesn’t allow for the advantages of an asynchronous Messaging journey.
* Engagement Controller will not consider settings in the Fallback skill
* Conversations closed with auto-close will not be shown if the engagement is hidden by a rule in the Engagement Controller
* Available in English only
