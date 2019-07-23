---
pagename: Fallback configuration per skill
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: chat
subtitle: Manage the Fallback skill settings per skill
level3: ''
permalink: contact-center-management-messaging-operations-fallback-configuration-per-skill.html
isTutorial: false
isNew: false

---
When assigning conversations to agents, it is possible that certain skills will have no online agents that can receive the conversation and therefor a fallback skill needs to be assigned. This capability is now offered on a per skill basis so for example, if the sales team is out for the day, all conversations can be rerouted to the sales backup skill for lead generation and follow up.

## Rerouted conversations

### When will the conversation get re-routed to a fallback skill?

The process in which conversations from the queue are assigned to available agents happens approximately every 2 seconds throughout the day. This process routes the skill to which the conversation is assigned and attempts to locate an agent with free capacity that carries that same skill. If no such agent can be found, the routing system would look for a fallback skill to route the conversation to. The requirement from the fallback skill would be that there are agents with that skill that are connected to the LiveEngage.

## Fallback skill paths 

### Can a skill have more than one fallback skill?

Each skill can have only one fallback skill, however, it is possible to create a fallback skill path so that skill C would be the fallback skill of skill B that would be the fallback skill of skill A. So the following conversation re-route path could exist:

* If there are no available agents on skill A, fallback to skill B.
* If there are no available agents on skill B, fallback to skill C.

Each time the conversation assignment process (also known as ACD) runs, it would attempt to check for online agents on skill A and then on B and then on C.

### What about the account-level fallback skill? Is it still in use?

If a fallback skill is defined to account, it would still apply to all skills unless the skill is defined with a custom fallback skill through LiveEngage. Changing the account level fallback skill can only be done by your LivePerson account team.

## Set up

{: .notice}**  
**Please contact your account manager to enable this feature

Once the feature is enabled, please follow the steps below:

### Step 1 - Enter the Skills settings in LiveEngage

Login to LiveEngage as an Admin and head towards the Users tab. Switch to the Skills tab and select the skill you wish to add a fallback skill to.

### Step 2 - Configure the fallback skill

Locate the fallback skill section under the skill settings, select “custom” and select a fallback skill from the dropdown list.

### Step 3 - Select the agent state that should trigger routing to the fallback skill

The checkbox - “_Route to the fallback skill when agents are in Away status_” configures the option whether to reroute of the conversation to the fallback skill when there are no connected agents (all agents are offline) or when there are no online agents (agents could be marked as Away or disconnected). If you select the checkbox then the conversation will be rerouted to the fallback skill if there are no online agents with the skill. Unchecking it would mean that conversations will be rerouted only when there are no connected agents with the skill.

Click “Save”.

**Example**:

An agent transferred a conversation to skill A and all the agents on skill A are marked as “Away”. Under the configuration of skill A in LiveEngage the “Route to fallback skill when agents are in away status” is checked and the fallback is defined as skill B. re-route the conversation to skill B, assuming there are online agents with skill B”, if not, the conversation remains assigned with skill A.

![](/img/fallback config per skill.png)