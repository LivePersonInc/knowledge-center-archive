---
pagename: Engagement Controller
categoryName: AI, bots & automation
subCategoryName: Conversation Orchestrator
level3: ''
indicator: messaging
subtitle: The Engagement Controller is a feature within Conversation Orchestrator that enables brands to control the incoming flow of conversations in Web Messaging. 
permalink: ai-bots-automation-conversation-orchestrator-engagement-controller.html
isTutorial: false
isNew: false
date: '2021-05-08'
published: true

---

## What is Engagement Controller
The Engagement Controller is a feature within Conversation Orchestrator that enables brands to control the incoming flow of conversations in Web Messaging. 

This feature is in addition to the existing Campaign Builder settings. It allows brands to use welcome bots to start conversations and will show or hide Web Messaging engagements based on skill availability. Campaign Builder settings such as enable or disable engagements or Campaign time frame will always have higher priority than Engagement Controller settings.

Users are able to set up rules that contain conditions which check skill availability based on the queue size and the wait time metrics as well as actions to show or hide engagements. Rules can be set up on  the campaign or engagement level. Rules on campaign level will affect all engagements in this campaign.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/engagement-controller-1.png)

## Criteria
You can setup rules using the following criterias: 
Queue Size: Number of conversations waiting in queue for a skill - input value in number of conversations
Wait Time: Average of the last 60 minutes the consumer has been waiting for an agent to be assigned to the conversation - input value in seconds.

## AND / OR - Connectors

You can combine two criterias in the same rule by selecting one of our available connectors: AND or OR. Select OR if you want at least one of the criterias thresholds to be reached in order for the rule to be applied to the engagement window. Select AND if you want a more strict rule, because both thresholds have to be met in order for the rule to be applied.

## Status Active / Inactive

New rules are always listed at the top of the rules list. They are inactive by default. This means they are not applied to engagements in Campaign Builder. By activating them with the status toggle the rule will be applied to the engagement and will execute the action based on the defined condition. 

Note: after activation it can take up to 5 minutes for the rule to apply the action on the engagement window. Then the system is checking the set value every 10 seconds and will take actions accordingly.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/engagement-controller-2.png)

## Validation 

Rules on the engagement level have higher priority over the campaign level. If the Engagement Controller has a rule defined on an engagement, and another rule on the campaign of this same engagement, the engagement rule is the one that will be applied to your web messaging engagement.

If you encounter conflicts when setting up a rule, note that queue size criteria will have higher priority over the rule with the wait time criteria.

## Delete / Archive rules

Rules that have been activated once cannot be edited or deleted so it is possible an interrupted  tracking of changes. If you would like to make changes to an existing rule in Engagement Controller you may archive a deactivated rule and create a new rule as you need.

* If a rule has never been activated, you can delete it from the rules list, by clicking on the Delete icon. 
* If a rule is active, it cannot be archived, as indicated by the disabled Archive icon. 
* If a rule has been activated, and later made inactive, and you wish to remove it from the list of rules click on the Archive icon.

## Pause all rules

If you need to disable the Engagement Controller feature, use the Pause all rules button. This will stop any rule in Engagement Controller from taking action on engagement windows targeted by an active rule in Engagement Controller. The engagement windows will keep showing until settings are changed manually in Campaign Builder.
When restarting the Engagement Controller feature again all rules will have the same activation status as before pausing all rules. 

Note: after activation it can take up to 5 minutes for the action to apply on the engagement window. Then the system is checking the set value every 10 seconds and will take actions accordingly.
 
## Engagement Controller Limitations

* Using Engagement Controller in Web Messaging can create a chat like experience, but then doesn’t allow for the advantages of an asynchronous Messaging journey.
* Engagement Controller will not consider settings in the Fallback skill
* Conversations closed with auto-close will not be shown if the engagement is hidden by a rule in the Engagement Controller
* Available in English only
