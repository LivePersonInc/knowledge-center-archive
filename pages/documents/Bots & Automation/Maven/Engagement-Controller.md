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

The Engagement Controller is a feature within Conversation Orchestrator that enables brands to control the incoming flow of conversations in Web Messaging by showing and hiding engagements from the website depending on a defined threshold for a skill. 

This feature is in addition to the existing Campaign Builder settings. It allows brands to use welcome bots to start conversations, and to control showing or hiding Web Messaging engagements based on skill availability. Campaign Builder settings such as enable or disable engagements or Campaign time frame will have priority over Engagement Controller settings.

## Creating Rules
Users can set up rules with conditions that check agent skill availability based on queue size and/or wait time metrics, to enable actions to show or hide engagements. Thresholds of rules are checked every 10 seconds and will trigger an action to show or hide an engagement from a website accordingly. 

Note: Rules should be established in pairs. One rule to hide an engagement or campaign and another rule to show the engagement or campaign again. When first activated, it can take up to 5 minutes before a rule is applied.

![](img/EC-image1.png)

## Skill

In most cases, the reason to set up a rule with the Engagement Controller is to only show an engagement on a website if the group of human agents (skill) the conversation would be transferred to are available. Hence, the skill set in Engagement Controller rules should be of the human skill who have limited availability. 
This setting is independent of the skill setting in the engagement in Campaign Builder. The setting in Campaign Builder will determine where the conversation is routed to. It will thereby determine which skill will pick up the conversation in case the engagement is shown and clicked on by the customer on the website. This separation between availability checking and routing the initial conversation allows the use of welcome bots with the Engagement Controller feature.

## Criteria

* **Queue Size:** Number of conversations waiting in queue for a skill - input value in number of conversations.
* **Wait Time:** Average of the last 60 minutes the consumer has been waiting for an agent to be assigned to the conversation - input value in seconds.

Note: We recommend to use the wait time metric only in combination with queue size due to the different factors which could influence the wait time calculation.
If rules are set up at a Brands campaign and associated engagement with different criteria (queue size and wait time), the queue size rule will take precedence over the wait time rule.

## Operator and Value

The Engagement Controller offers two operators to set up rules. These are greater than and smaller than. Values for thresholds such as queue size or number of conversations have to be above zero.
 
Example of setting a rule with threshold 1
Hide Campaign1 if queue size < 1
Show Campaign1 if queue size > 1

The rule will apply to hide the engagement window when the value is zero or show the engagement when the value is greater than two. In this example the rule will not be applied if the value is equal to one.

## AND / OR - Connectors

You can combine two criterias in the same rule by selecting one of our available AND or OR connectors. Select OR if you want at least one of the criterias thresholds to be reached in order for the rule to be applied to the engagement window. Select AND if you want both thresholds to be met in order for the rule to be applied.

## Target and Action

Rules can be set to target campaigns or engagements. Rules at a campaign level will affect all engagements in that campaign. Rules on the engagement level have higher priority over the campaign level. If the Engagement Controller has a rule defined on an engagement, and a rule exists on the campaign for the engagement, the engagement rule will take precedence.

In Campaign Builder Campaign time frame or a filter for a certain target audience allows to show or hide engagements. In this context Engagement Controller offers a dynamic control of the incoming flow of messaging conversation, It is constantly, every 10 seconds,  checking activated rules with thresholds against current values of metrics. When thresholds are reached an action such as hiding or showing an engagement from a website will be performed.
Hence, rules should be applied in pairs. One rule to hide an engagement or campaign when a threshold is reached and another rule to show the engagement or campaign again. 
When first activated, it can take up to 5 minutes before a rule is applied.

## Validation

The Engagement Controller feature runs a validation in the background. This avoids defining rules for the same engagement or the same campaign with overlapping value spaces, metrics or skill settings which do not have a unique evaluation of the action to show or hide an engagement on a website.
Rules on the engagement level have higher priority over the campaign level. If the Engagement Controller has a rule defined on an engagement, and a rule exists on the campaign for the engagement, the engagement rule will take precedence.
If rules are set up within a brand's campaign and associated engagement that have different criteria (queue size, wait time), queue size will take priority.
The validation will allow to set up rules which target the same engagement or the same campaign to show or hide with checking against one skill.

Example of rules with the same target (engagement or campaign), opposite actions (show or hide) and overlapping value space:

### Example 1:
Hide Engagement1 if queue size > 5 
Show Engagement1 if queue size < 11
Potential for conflict because of overlapping values 6-10

### Example 2: 
Show Campaign1 if queue size < 20
Hide Campaign1 if queue size > 10
Potential for conflict because of overlapping values 11-19

### Example 3:
Show Campaign1 queue size < 10 for Skill1
Hide Campaign1 queue size > 10 for Skill2
Potential for conflict because more than one skill, value 11 for Skill1 and value 12 for Skill2

Checklist when you encounter conflicts on setting up (create view) or trying to activate (list view) a rule:
* When you have a rule to hide the engagement, do you also have a rule to show it again? Rules should always be established in pairs. One rule to show the engagement window and one rule to hide the engagement window.  
* Which other rule also targets the same engagement?
* Do the rules that target the same engagement differ in action (show, hide)?
*  Do the rules that target the same engagement differ in action (show, hide) and have overlapping value space, e.g. greater than 5 and smaller than 10?
* In case rules are defined for the same engagement the queue size criteria will have higher priority over the rule with the wait time criteria.

## Manage Rules

![](img/EC-image2.png)

## Status Active / Inactive

New rules are always listed at the top of the rules list. They are inactive by default. By turning on the status toggle, the rule will be applied to the associated campaign or engagement and will execute the action based on the defined condition(s). 

Note: after activation it can take up to 5 minutes for the rule to apply the action on the engagement window. Post activation, the system checks and applies the set criteria(s) every 10 seconds.

## Edit / Delete / Archive rules

You cannot edit a rule once it is created. If you would like to make changes to an existing rule in Engagement Controller you may delete or archive a deactivated rule and create a new rule using the same criteria. Rules which have been previously activated cannot be deleted. 

* If a rule has never been activated, you can delete it from the rules list by clicking on the Delete icon. 
* If a rule is active, it cannot be archived. Active rules can only be deactivated.
* If a rule has been deactivated, you can remove it from the list of rules by moving it to Archives.

## Pause all rules

The Pause all rules button in the Engagement Controller feature is helpful when you first set up rules, when you would like to maintain rules, or when you change settings in Campaign Builder. When paused, all rules in the Engagement Controller feature are paused. This will stop any rule in Engagement Controller from taking action on engagement windows targeted by an active rule in Engagement Controller. While the feature is paused the engagement windows will only react according to manual settings in Campaign Builder.
When restarting the Engagement Controller feature again all rules will have the same activation status as before pausing all rules. 

{: .notice}
After usage of Pause all rules button it can take up to 5 minutes for the change to apply on the engagement window.
 
## Engagement Controller Limitations

* You might observe in the Manager Workspace that metrics such as queue size or wait time might go beyond the set threshold in Engagement Controller.
If visitors have already loaded the page before the rule applies they will be able to start a conversation.
* Using Engagement Controller in Web Messaging can create a synchronous, chat-like experience with limited wait times for some customers by hiding the engagement if no agent is available. In this case, it doesn’t allow for the advantages of an asynchronous messaging journey to always be available to all customers.
* When assigning conversations to agents, it is possible that certain skills will have no online agents that can receive the conversation and therefore a fallback skill can be assigned. The Engagement Controller feature does not consider settings in the fallback skill when checking for availability.
* Conversational Cloud functionality to auto close inactive conversations after a set period of time (default 90 days) work independently of the Engagement Controller feature. Inactive conversations closed by the auto close functionality are not displayed to a returning customer if a rule in the Engagement Controller is applied to hide the engagement window.
* The Engagement Controller interface is currently available in English only. Other languages will be added in the future.
* The Engagement Controller interface is currently available in the Dark theme only. Light theme will be added in the future.
* Engagement Controller allows you to use a welcome bot in the engagement set up in Campaign Builder. The feature will check the availability of one human skill per rule. The feature does not support checking the availability of multiple skills throughout an entire bot journey. This functionality will be added in the future.

{: .notice}
The Engagement Controller feature may not work if the website is set up as a Single Page Application. When the threshold is reached rules with actions such as to show or hide an Engagement will apply for all websites that have been loaded afterwards. This doesn’t apply to Single Page Applications as they usually don’t reload.
