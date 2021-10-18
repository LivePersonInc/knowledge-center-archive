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

The Engagement Controller is a feature within Conversation Orchestrator that enables brands to control the incoming flow of conversations in Web Messaging by showing and hiding engagements from the website according to a defined threshold for a skill.

This feature is an addition to the existing Campaign Builder settings. It allows brands to use welcome bots to start conversations, and to control ‘showing’ or ‘hiding’ Web Messaging engagements based on skill availability. Campaign Builder settings such as ‘enable’ or ‘disable’ engagements or Campaign time frame will have priority over Engagement Controller settings.

<p class="notice">In the Manager Workspace, you may notice that metrics such as ‘queue size’ or ‘wait time’ might go beyond the set threshold in the Engagement Controller.</p>
There are several reasons why you might observe more conversations in the queue, including:
*Transfers from other skills, such as a welcome bot skill or another human agent skill, can happen even after the engagement window is hidden from the website.
* Visitors who have already loaded the page when the EC rule was applied can start a conversation at any time, even if the engagement is already hidden for other users who load the page after the rule is applied.
* Rules will only apply if an agent is online and has been assigned in the last 60 minutes.

Therefore, we recommend considering the following points when setting the threshold:

* What is the bot journey duration before the bot can transfer the conversation to the human skill which has a rule set up in EC?
* How likely is it that the bot will transfer over to the human skill eventually?
* Setting the threshold to hide the engagement higher than the value to show the engagement will provide some buffer for additional conversations coming in after the engagement was hidden from the website.

## Create Rules

In order to enable actions that will ‘show’ or' ‘hide’ engagements, users can set up rules with conditions that check agent skill availability based on queue size and/or wait time metrics.  The rules’ thresholds are checked every 10 seconds and will trigger an action to show or hide an engagement from a website accordingly.

Note: Rules should be established in pairs. One rule to hide an engagement or campaign, and another rule to show the engagement or campaign again. When first activated, it can take up to 5 minutes before a rule is applied.

![](img/EC-image1.png)

## Skill

Setting up a rule with the Engagement Controller is mostly used to show an engagement on a website only if the group of human agents (skill) that the conversation would be transferred to are available at that time.
This setting is independent of the ‘skill’ setting in the engagement in the Campaign Builder. The setting in the Campaign Builder will determine where the conversation is routed to. It will thereby determine which skill will pick up the conversation in case the engagement is shown and clicked on by the customer on the website. This separation between checking availability and routing the initial conversation allows the use of welcome bots with the Engagement Controller feature.

## Criteria

You can set up rules using the following criteria:

* **Queue Size:** The number of conversations waiting in the queue for a skill.
  * **Input value:** The number of conversations. Note: an agent with the skill needs to be online for the metric to be transmitted.
* **Wait Time:**  The average wait time for the different visitors from the last 60 minutes, who have been waiting for an agent to be assigned to the conversation. Input value: Time in seconds. Please note that the wait time is calculated differently than the wait time displayed on the Manager Dashboard.

Note: We recommend using the wait time metric only when combined with the queue size metric due to the different factors which could influence the wait time calculation.
If rules are set up for a Brand’s campaign as well as for the associated engagement with different criteria (queue size and wait time), the queue size rule will take precedence over the wait time rule.

## Operator and Value

The Engagement Controller offers two operators to set up rules: greater than and smaller than. Values for thresholds such as ‘queue size’ or ‘number of conversations’ have to be above zero.

Please refer to the following example of setting a rule with a threshold of 1:  
Hide Campaign1 if queue size < 1  
Show Campaign1 if queue size > 1

The rule will apply to either hide the engagement window when the value is zero or to show the engagement when the value is greater than two. In this example, the rule will not be applied if the value is equal to one.

## AND / OR - Connectors

You can combine two criteria in the same rule by selecting one of our available AND or OR connectors. Select OR if you want at least one of the criteria thresholds to be reached in order for the rule to be applied to the engagement window. Select AND if you want both thresholds to be met in order for the rule to be applied.

## Target and Action

Rules can be set to target campaigns or engagements. Rules at a campaign level will affect all engagements in that campaign. Rules on the engagement level have higher priority over the campaign level. If the Engagement Controller has a rule defined on an engagement, and a rule already exists on the campaign for that engagement, the engagement rule will take precedence.

In the Campaign Builder,  it is possible to show or hide engagements using the Campaign time frame or a filter for a certain target audience. In this context, the Engagement Controller offers dynamic control of the incoming flow of messaging conversations. It consistently checks the activated rules with thresholds against current metric values every ten seconds. When thresholds are reached, an action such as ‘hiding’ or ‘showing’ an engagement from a website will be performed.
Hence, rules should be applied in pairs. One rule to hide an engagement or campaign when a threshold is reached, and another rule to show the engagement or campaign again.
When first activated, it can take up to five minutes before a rule is applied.

## Validation

The Engagement Controller feature runs a validation check in the background. This avoids defining rules for the same engagement or the same campaign with overlapping value spaces, metrics or skill settings which do not have a unique evaluation of the action to ‘show’ or ‘hide’ an engagement on a website.
Rules on the engagement level have higher priority over the campaign level. If the Engagement Controller has a rule defined on an engagement, and a rule exists on the campaign for that engagement, the engagement rule will take precedence.
If rules are set up within a brand's campaign and associated engagement that have different criteria (queue size, wait time), queue size will take priority.

The following examples showcase rules with the same target (engagement or campaign), opposite actions (show or hide) and overlapping value space:

### Example 1

Hide Engagement1 if queue size > 5  
Show Engagement1 if queue size < 11  
Potential for conflict because of overlapping values 6-10

### Example 2

Show Campaign1 if queue size < 20  
Hide Campaign1 if queue size > 10  
Potential for conflict because of overlapping values 11-19

### Example 3

Show Campaign1 queue size < 10 for Skill1  
Hide Campaign1 queue size > 10 for Skill2  
Potential for conflict because more than one skill, value 11 for Skill1 and value 12 for Skill2

**Troubleshooting Checklist**  
If you encounter any  issues during the ‘create view’ setup or when trying to activate ‘list view’, please reference this checklist:

* When you have a rule to hide the engagement, do you also have a rule to show it again? Rules should always be established in pairs. One rule to show the engagement window and one rule to hide the engagement window.
* Which other rule also targets the same engagement?
* Do the rules that target the same engagement differ in action (show, hide)?
* Do the rules that target the same engagement differ in action (show, hide) and have an overlapping value space, e.g. greater than five and smaller than ten?
* When multiple rules are defined for the same engagement, the queue size criteria will have higher priority over the rule with the wait time criteria.

## Manage Rules

![](img/EC-image2.png)

## Status Active / Inactive

New rules are always listed at the top of the rules list and are inactive by default. By turning on the status toggle, the rule will be applied to the associated campaign or engagement and will execute the action based on the defined condition(s).

Note: After activation, it can take up to five minutes for the rule to apply the action to the engagement window. Post activation, the system checks and applies the set criteria every ten seconds.

## Edit / Delete / Archive rules

If you would like to make changes to a rule in the Engagement Controller, you first need to deactivate the rule. Then, the system will archive the old rule and create a new rule with the changes you have made. Rules which have been previously activated cannot be deleted, but they can be archived which removes them from the list. If a rule has never been activated, you can delete it from the rules list by clicking on the ‘Delete’ icon. If a rule is active, it cannot be archived. Active rules can only be deactivated.

## Pause all rules

The ‘Pause all rules’ button in the Engagement Controller feature is helpful when you first set up rules, when you would like to maintain rules, or when you change the settings in the Campaign Builder. When paused, all rules in the Engagement Controller feature are paused. This will stop any rule in the Engagement Controller from taking action on engagement windows targeted by an active rule in Engagement Controller. While the feature is paused, the engagement windows will only react according to manual settings in the Campaign Builder.
When restarting the Engagement Controller feature again, all rules will have the same activation status as before pausing all rules.

Note: After using the ‘Pause all rules’ button, it can take up to five minutes for the change to apply to the engagement window.

## Engagement Controller Limitations

* In the Manager Workspace,you may observe that metrics such as queue size or wait time might go beyond the set threshold in the Engagement Controller. The Engagement Controller is set up to apply an action to either show or hide an engagement from a website when a threshold is reached. This action is performed for all websites which are loaded after the rule was applied. If visitors have already loaded the page before the rule was applied, they will be able to start a conversation.
* Using the Engagement Controller in Web Messaging can create a synchronous, chat-like experience with limited wait times for some customers by hiding the engagement if no agent is available. In this case, it doesn’t allow for the advantages of an asynchronous messaging journey to always be available to all customers.
* When assigning conversations to agents, it is possible that certain skills will have no online agents that can receive the conversation and therefore a ‘fallback skill’ can be assigned. The Engagement Controller feature does not consider settings in the fallback skill when checking for availability.
* The Conversational Cloud functionality to automatically close inactive conversations after a set period of time (90 days by default) works independently of the Engagement Controller feature. Inactive conversations closed by the auto close functionality are not displayed to a returning customer if a rule in the Engagement Controller is applied to hide the engagement window.
* The Engagement Controller interface is currently available in English only. Other languages will be added in the future.
* The Engagement Controller interface is currently available in a ‘Dark’ theme only. A ‘Light’ theme will be added in the future.
* The Engagement Controller allows you to use a welcome bot for the engagement setup in the Campaign Builder. The feature will check the availability of one human skill per rule, but it does not support checking the availability of multiple skills throughout an entire bot journey. This functionality will be supported in the future.
