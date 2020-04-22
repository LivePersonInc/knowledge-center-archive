---
pagename: Week of April 27th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-april-week-of-april-27th.html
isTutorial: false
isNew: false
date: '2020-04-22'

---

These release notes include new features arriving to LiveEngage during April 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Fallback configuration per skill - Avoid the “unassigned skill” when no agents are defined with a skill
### Type: Enhancement (Agent Matching 4.3.0)

{: .notice}
Available to messaging customers only

This enhancement focuses on preventing conversation transferred to a skill, on which there are no agents assigned, from reaching the “unassigned skill” (-1). Such conversations will now be able to first go through the Fallback per skill flow. The main reason for enabling this enhancement would be that by definition the unassigned skill is a skill that may route conversations to any online agent. 

While having an unassigned skill is good for accounts that were not yet well defined, routing to the unassigned skill for well-defined accounts, especially ones with fallback skills defined, leads to disorder and unexpected assignment of conversations to agents. With this enhancement, we are allowing brands to have conversations that are transferred to skills on which there are no assigned agents to either stay on the skill or to flow to a fallback skill, if one is defined. 

This signals a potential behavioral change in the system when this feature is enabled since conversations could potentially stay on a certain skill instead of flowing to the unassigned skill.

Example:
A conversation is transferred to skill A. 
There are no agents defined with Skill A.
The conversation could flow in one of the below methods:
Flow onwards to a fallback skill, if one was defined per the account or the specific skill.
Stay on skill A until an agent is assigned with the skill (since there was no fallback skill defined).

{: .notice}
To configure, please contact your LivePerson account team.

## Load balancing - Redistribute the load to connected agent groups
### Type: Enhancement (Agent Matching 4.3.0)

{: .notice}
Available to messaging customers only and available on all messaging channels.

Messaging load distribution is a routing capability that allows brands to define how the messaging load gets distributed between different agent groups. This kind of capability is a necessity for brands that outsource their messaging operations and must meet clear contractual obligations as to which vendor handles which percentage of the total brand messaging traffic. It allows the brand to define that a specific agent group is correlated with a specific vendor and define, per skill, the way that the load will be distributed between the agent groups.

This phase of the feature looks to address cases where the contact center is offline. The new enhancement is able to automatically apply a new load balancing scheme which is based on the skill load balancing configuration as well as the current online state of the rest of the defined agent groups. The new load balancing will reroute both incoming conversations as well as conversations that are already in the queue and were not yet assigned to a human agent, to the rest of the online contact centers.

In order to prevent contact center attribution issues, conversations that were already assigned to a human agent within one contact center will not get redistributed to other contact centers within the span of a single conversation. Such conversations will remain assigned to the contact center that handled them first.

Example:
Skill A is defined to load balance with the percentages:
* Contact center 1 - 50% of the load
* Contact center 2 - 30% of the load
* Contact center 3 - 20% of the load

Contact center 1 goes offline at 8 PM while contact centers 2 & 3 go offline an hour later. (different time zones)
At 8PM the new incoming conversations as well as conversations that were waiting for contact center 1 and were not yet assigned to a human agent to be distributed to contact centers 2 & 3 based on the respective ratios:
* Contact center 1 - offline
* Contact center 2 - 30/50 = 60% of the load
* Contact center 3 - 20/50 = 40% of the load
Once contact center 1 reopens the load will automatically rebalance again.

**Configuration**
A checkbox was added to the Advanced load distribution section in LiveEngage under the skill settings. Once the checkbox is marked, the new enhancement is effective.

{: .notice}
Dependencies: LEUI v11.9

## Queue prioritization super-priority - Velocity operators
### Enhancement (Agent Matching 4.3.0)

{: .notice}
Available to Messaging customers that have configured S1 (Queue Prioritization) in site-settingsonly and available on all messaging channels. 

When it comes to conversation priority, the queue prioritization system relies on velocity to translate priority to a factor that enables conversations to jump forward in the queue since the action of assigning velocity is basically the action of applying a conversation score multiplier. 

Today, the velocity factor would affect the conversation in a way that is coupled with the existing wait time in the queue. If the wait time is long, the velocity applied to the conversation may take some time to take effect and bring the prioritized conversation to the top of the queue. While this mechanism makes sense in many use cases, brands are also interested in introducing a different approach that would enable a conversation to reach the top of the queue immediately and without considering the wait time. For this purpose, we’ve enabled the velocity value to apply “super-priority” to the conversation. 

By applying the same velocity range (velocity of 1 to 20) as a Power multiplier (2^velocity) to the conversation score brands can now dramatically increase the conversation score at the very same moment when the conversation received the velocity. In effect this capability enables the conversation to achieve super-priority with almost zero wait time, assuming there are agents available to receive conversations from the queue.

Example use case - “A Diamond tier customer has just started a conversation and entered the queue. Shoot him to the top of the queue so regardless of the current wait time, no other conversation would be treated first.”

This example uses two of the Queue Priortization capabilities. The first is prioritizing conversations based on consumer engegement attributes and the second is the new super-priority operator.

{: .notice}
To configure, please contact your LivePerson account team.

## Queue prioritization - apply priority using the Monitoring API
### Enhancement (Agent Matching 4.3.0)
Available to Messaging customers that have configured S1 (Queue Prioritization) in site-settingsonly and available on all messaging channels. 

This is an enhancement to a feature the was released in the past that allows brands to apply priority to specific consumers by leveraging consumer attributes. The original feature applied to consumer attributes that were updated to the conversation on its initiation. With this enhancement, bots or other mechanisms that use the Monitoring API can, on the fly, update the consumer engagement attributes and see it take effect instantly with advancing the conversation in the queue.

**Configuration:**
The LivePerson account team should assist brands to configure the priority based on consumer attributes first. Only after the relevant business rules are configured they could apply through using the Monitoring API. 

Example use case - “A routing bot receives conversations, authenticates the consumer, finds that the consumer is a Diamond tier consumer, reports an engagement attribute towards this conversation and causes this consumer to jump to the top of the queue.”

## Adding a JMX for restart,scale and seek Kafka consumers 
### Bug fix (Agent Matching 4.3.0)
Capability added to increase the number of Kafka consumers without restarting the server. Also added capability to seek Kafka offset. 


