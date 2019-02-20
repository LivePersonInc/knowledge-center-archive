---
pagename: Conversation outcomes
categoryName: Data & reporting
subCategoryName: Report Builder
indicator: chat
subtitle: 'Conversation outcomes allows agents to add insight about the conversation
  or resolutions that took place '
level3: ''
permalink: data-reporting-report-builder-conversation-outcomes.html
isTutorial: false
date: 2019-01-20 09:22:45 +0000

---
LivePerson provides your agents with tools to submit information about a conversation, either while the conversation is still in progress, or after it ends. Using conversation outcomes, agents can add insight about the conversation or information about conversions or resolutions that took place.  
The tools include:

**Agent survey:** Using the agent survey, agents can provide their input to help you analyze the nature of your chats and their outcomes.

**Conversation outcomes:** Agents can report on a conversation outcome or business activities that occurred during a conversation with a consumer, for example, a lead created, transaction or service activity completed, to help you track your conversions or goals.

## Why use conversation outcomes?

Improve your conversion reports and goal reached tracking by including agents’ input about the outcome of a conversation. Agents may resolve a service inquiry and/or close a sale during a conversation. With conversation outcomes, agents can then manually record these activities.

Conversion reporting on sales transactions, lead generation and service activities includes both information reported by agents, and information reported by customers. In order to identify whether the information was provided by an agent, along with the name of the reported agent, use the agent goal tracker report.

## Setting up conversation outcomes

There are three types of [engagement attributes]() that agents can report on:

| Engagement attributes | Data category | Available properties |
| --- | --- | --- |
| Transaction | eCommerce Info | Order total, Order ID, Lead |
| Lead | Visitor Journey | Topic Value Lead ID |
| Service activity | Visitor Journey | TopicStatusCategoryService ID |

You will need to enable this feature for each of the engagement attributes you want your agents to be able to report on.

To enable this feature:

1. Log into LivePerson, and then click on the campaigns tab. The footnote is displayed at the bottom of the page.

   ![](/img/conversation-outcomes1.png)

   {:start="2"}
2. In the footnote, click Data Sources. The Data Sources page is displayed.

   ![](/img/conversation-outcomes2.png)

{:start="3"}  
3\. In the Data Sources page, next to the relevant engagement attributes category, click configure. In the example below, eCommerce info is selected.

4\. Click submit by agent.

![](/img/conversation-outcomes3.png)

{:start="5"}  
5\. Select the skill(s) for which you want this feature to be available. For example, your transaction engagement attributes may not be relevant for your customer support agents.

6\. Select the engagement attribute properties that will be displayed to the agent in the agent workspace by clicking add field to widget. You must select at least one property.

7\. For each of the selected properties, enter a display name. This name will be displayed to the agent in the agent workspace.

8\. Click save.

## Using conversation outcomes

Once enabled, a new widget called conversation summary is displayed to the relevant agent(s) in the agent workspace during the conversation.

{: .notice}  
This widget will only be available if either conversation outcomes or agent survey is enabled.

The conversation summary widget includes the following sections:

* **Agent survey:** The agent survey section is displayed only if it is enabled.
* **Conversation outcomes:** The agent views only the engagement attributes that are enabled for their specific skills.

{: .notice}  
If no engagement attributes are enabled, the conversation outcomes section is not displayed.

To report on a business activity or conversation outcome, the agent should enter the data in the relevant engagement attribute properties and click submit. The data reported by the agent can then be used to track conversions / goals. Information can be submitted up to half an hour after the chat is closed.

![](/img/conversation-outcomes4.png)