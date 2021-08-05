---
pagename: Routing logic overview
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: The routing engine selects the most appropriate agent to handle an incoming
  conversation from a consumer using the following logic.
level3: ''
permalink: contact-center-management-messaging-operations-routing-logic-overview.html
isTutorial: false
date: '2019-01-16T15:08:11.000+00:00'

---
## Routing logic for messaging conversations

When a consumer is ready to start a messaging conversation with your brand, it’s important to direct them to the agent that will best serve their needs. To facilitate this, the messaging routing engine works behind the scenes to select the most appropriate agent to handle an incoming conversation from a consumer. The engine relies on a few fundamental principles:

* Chooses agent best equipped with the right skills to address the consumer's inquiry
* Optimizes use of the agent’s capacity
* Maintains consumer satisfaction and building an ongoing relationship

When a consumer initiates a conversation, the routing engine carries out two key selection processes in order to assign the conversation to the most appropriate agent:

1. Skill selection - identifying the most relevant skill to help with the consumer's inquiry
2. Agent selection - assigning the most suitable agent out of all available agents that have the selected skill to handle the conversation

When agents are not available to handle new conversations, conversations will wait in a prioritized queue until an agent becomes available.

## **Skill selection**

In order to ensure consumers are routed to the most appropriate agent to handle their inquiry, incoming conversations can be assigned to different skills. The skill selection process is the first method used by the routing engine to direct the conversation to the right agent.

Using skill selection, an incoming conversation is routed exclusively to an available agent with the conversation’s assigned skill. If no skill is assigned to a conversation, and no default skill has been configured, the conversation will be routed to any available agent in the contact center. In this instance, the most appropriate agent will be chosen based on the Agent Selection process, as set out below.

Incoming conversations are automatically assigned to skills based on:

* The consumer’s authenticated profile - the routing engine will evaluate the consumer’s engagement attributes, extracted during the authentication process, and assign the conversation to a relevant skill.
* The default setting - a default skill can be assigned to incoming messaging conversations when no skill is configured by their engagement attributes.
* The agent’s state - if no agents with the conversation’s skill are online, the conversation can be routed to a fallback skill.

LivePerson Consulting Services can configure automatic skill selection; self-service configuration will be available at a later date. Refer to the ‘About Skills’ article for further information.

### **Skill selection based on consumer profile**

As part of the authentication flow, the authentication server can provide information on the consumer’s authenticated engagement attributes (SDEs). Engagement attributes are layers of information about a consumer that are recorded throughout their consumer journey. These attributes can be used for skill selection (and will also be presented to the assigned Agent once they receive the incoming conversation); the relationship between attributes and skill can be configured by LivePerson Consulting Services. Read more about [engagement attributes](data-reporting-engagement-attributes-data-sources-engagement-attributes-overview.html) and [authentication](https://developers.liveperson.com/essential-resources-getting-started-with-authentication.html).

The following engagement attributes are currently supported for skill selection:

* Customer info ("ctmrinfo") attributes:
* Customer type (“ctype”)
* Company branch (“companyBranch”)

Once a conversation is initiated, the routing engine will receive a skill notification based on the consumer profile identified during the authentication process. The system will then route the conversation to an appropriate agent assigned to that skill.

## Default skill

It is possible to configure a default skill that will be used in case no skill mapping rules matched the consumer’s profile during the authentication process.

Note: by default, in case no agent will be assigned to the default skill, the conversation will be routed to “unassigned skill”. For more information, refer to the “Unassigned skill” article.

## Routing to a fallback skill

By default, when no agents are connected to Agent Workspace to accept an incoming conversation, or agents are in an "away" state, the conversation will wait in the queue for the assigned skilled until an agent becomes available.

To help avoid this situation, it is possible to configure a fallback skill. This enables incoming conversations to be deferred to a second ‘fallback’ skill when there are no online agents with the conversation’s assigned skill.

It is possible to define a single fallback skill for the entire account or define a fallback skill that would be relevant for a specific skill. For example, if the sales team is out for the day, all conversations can be rerouted to the sales backup skill for lead generation and follow up.

Having the conversation rerouted to a fallback skill can only occur when there are agents online and has the fallback skill assigned to them. If no agents for this skill are online, the conversation will remain in the queue for the original assigned skill.

Fallback skill configuration is particularly useful when different skills in the contact center have different working hours. For example:

* Skill “VIP_Care_English” is available on weekdays between 9am and 7pm.
* Skill “General_Care” is available 24/7 and is configured as a fallback skill.
* During “VIP_Care_English” off hours (7pm until 9am and weekends) no agents are logged in with that skill. New conversations will be assigned to the “General_Care” skill (fallback) and will be routed to available agents instead of waiting in the “VIP_Care_English” skill’s queue.

Note: Fallback logic only applies to new incoming conversations until they are first assigned to an agent. It does not apply after the agent selects 'back to queue' or ‘transfer to skill’. Please see fallback configuration per skill user guide.

## Transfer to skill

Even after a conversation has been assigned to an agent, the agent still has the ability to transfer the conversation to a different skill that is better suited to handle the consumer's inquiry.

In this case, the conversation will be rerouted to an available agent with the selected skill or wait in the select skill’s queue if there are no available agents.

![](/img/Routing-logic-1overview-1.png)

## Agent selection

Following the skill selection process, the routing engine will initiate the agent selection process. This involves identifying all available agents with the relevant skill to handle the conversation, and selecting, from those available, the most suitable agent to handle the incoming conversation.

The agent’s suitability is determined using a set of parameters as set out below. Once the most appropriate agent is identified, the engine will route the incoming conversation to that agent.

## Unassigned skill
In some cases, a conversation is routed to a skill with no assigned agents (e.g. since the skill has been removed from all of the agents in the system). By default, this conversation would be deferred to the “unassigned skill” (-1). As a result, it may be routed to any available agent. This default behavior may be changed, so these conversations will either remain on the originally assigned skill or will be transferred to the configured fallback skill if one was defined.

As an example, consider a conversation which is transferred to skill “Sales", which no agents in the system are assigned to. By default, the conversation would be routed to “unassigned skill”. However, in case the default behavior has been changed, the conversation could be routed in one of the below methods:

1. If no fallback skill has been defined for the account or for the skill “Sales” - it will remain on skill “Sales” until an agent is assigned with this skill.
2. If a fallback skill was defined for the account or for the skill “Sales” - it will be routed to the fallback skill.

To make change the unassigned skill default behaviour, please contact your LivePerson account team.


### **Agent availability**

An agent is considered available to receive an incoming conversation, when the following criteria are met:

* The agent is logged in and ‘online’.  
  No new incoming conversations will be routed to an agent whose state is set to ‘away’ or ‘back soon’.

![](/img/Routing-logic-1overview-2.png)

* The agent has enough capacity to receive an incoming conversation.  
  The Agent Workspace supports two modes of agent capacity management, which determine an agent’s capacity to receive incoming conversations:
  1. **Dynamic Capacity** - this algorithm identifies agent availability by calculating the frequency rate of messages or ‘message intensity’ within each conversation. This method ensures that the agent’s capacity is adjusted based on their actual availability, rather than concurrency. This method requires configuration by LivePerson Consulting Services - refer to the [‘Dynamic Capacity’ article](contact-center-management-messaging-operations-smart-capacity-overview.html) for further information.
  2. **Maximum concurrent conversations** - this mode configures the threshold of the number of conversations an agent can handle at one time; an agent reaching the threshold will not be routed new conversations. The number of conversation slots can be configured within the Users section at the account level for all agents, as well as at an individual agent level.

_Default maximum number of conversations per agent - Account level:_  
![](/img/Routing-logic-1overview-3.png)

_Maximum number of conversations per agent - Agent level:_

![](/img/Routing-logic-1overview-4.png)

### Agent selection preferences

The agent selection process is based on parameters outside those around the agent’s skill and availability. This is to ensure the optimal utilization of the agent’s capacity and even distribution of the workload, as well as maintaining high levels of customer satisfaction.

* Agent prioritization - when routing an incoming conversation, the system will prioritize all agents eligible to receive the conversation and will route the conversation to the most suitable prioritized agent. Prioritization is based on three key parameters:
  * The agent’s current utilization state:
    * [Dynamic Capacity](contact-center-management-messaging-operations-smart-capacity-overview.html) - the utilization score is calculated by dividing the combined intensity of the agent’s current assigned conversations by the configured maximum slots per agent - refer to the ‘Dynamic Capacity’ article for further information.
    * Default - The ‘least busy’ agent is preferred - the agent that is currently handling fewer active conversations.
  * The time passed since they last received a new conversation
  * The messaging history between the agent and the consumer
* Return to queue - if an agent manually returns a conversation to the queue, the system will try to re-route it to a different available agent.

## Service level agreement (SLA) & queue prioritization

The routing engine prioritizes conversations that are waiting to be assigned to an agent according to their response time/SLA and based on the [queue prioritization](contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html) configuration. The response time SLA is the time within which brands are committed to responding to their consumers to ensure that queue time is minimized and consumers receive a timely response. When utilizing queue Prioritization with parameters the SLA is only one parameter within the queue prioritization formula. (for all other parameters, please see queue prioritization overview).  Each conversation will wait in their allocated place in the queue until they ring through to the assigned agent.

The default response time for incoming conversations is configurable by an administrator at the account level. Different response times can be configured for different types of conversations; for example, first time consumers and consumers who have indicated that their enquiry is urgent can be set to have a shorter response time.

![](/img/Routing-logic-1overview-5.png)

**Routing flow**

![](/img/RL 7.jpg "Routing flow")
