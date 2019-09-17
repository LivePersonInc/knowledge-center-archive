---
pagename: Agent survey for messaging
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle:
level3: ''
permalink: contact-center-management-messaging-operations-agent-survey-for-messaging.html
isTutorial: false
date: '2019-01-17T10:28:55.000+00:00'
isNew: false

---

## Introduction

LiveEngage enables brands to define agent surveys in order to gather important information on messaging conversations, as well as categorize and analyze them.

{: .notice}
**Please note:** The agent survey for messaging is **not** currently available for the enhanced agent workspace. 

## Configuring the agent survey

{: .notice}
**Please note:** The agent survey for messaging requires backend enablement. Please contact your LivePerson account team for more information.

Once enabled, you can follow the below steps to configure the survey:

### Step 1: Under Users, go to the Skills tab and click configuring agent surveys

![](img/agent-survey-for-messaging-1.png)

The agent survey library will now be displayed.

### Step 2: Click on Add Survey

![](img/agent-survey-for-messaging-2.png)

### Step 3: Define your survey

1. Give your survey a meaningful name

2. Choose the survey timeout
  * This will control the availability of the survey after the conversation has ended
  * The minimum value is: 0 minutes, this means the survey will close immediately when the conversation ends and your agent will no longer be able to fill it out
  * The maximum value is: 72 hours (3 days)
  * LiveEngage will automatically close the survey upon timeout.

![](img/agent-survey-for-messaging-3.png)

{:start="3"}
3. Choose your survey's status
  * Active - This means the survey is now enabled and the widget will display to your agents
  * Inactive - The survey will not appear to your agents, even if assigned to a skill

![](img/agent-survey-for-messaging-4.png)

{:start="4"}
4. Start building your survey and define the questions
There are a few question types you can choose from:
  * **Free text** - Max character count is configurable. Maximum configurable value is 1024 characters.
  * **Single-choice** (radio button)
  * **Multi-choice** (checkbox)
  * **Dropdown**
  * **Number** - Data input will be validated when the agent types in the widget
  * **Date** - Agents will see a date picker in their survey widget

![](img/agent-survey-for-messaging-5.png)

{:start="5"}
5. Choose your predefined questions -
  * **Conversation topic** - you can define your own topics. The question will appear to the agent as a dropdown question type. In the future this will be reflected in a dedicated dashboard in the Report Builder (Coming November)
  * **Conversation outcome** - you can define your own outcomes. The question will appear to the agent as a dropdown question type. In the future this will be reflected in a dedicated dashboard in the Report Builder (Coming November)
  * **Engagement Attributes** - Allow your agents to report engagement attributes on behalf of the consumer!
Choose which Engagement Attribute and which attributes will be available for the agents to submit. You can read more [here](/data-reporting-engagement-attributes-conversation-outcomes.html).

![](img/agent-survey-for-messaging-6.png)

![](img/agent-survey-for-messaging-7.png)

{:start="6"}
6. Required questions - Each question can be marked as ‘required’. If marked required, the agent will not be able to submit the survey without answering these questions.

![](img/agent-survey-for-messaging-8.png)

{:start="7"}
7. Skip questions based on answers (Jump to) - by default, all questions are set as ‘Jump to: Next’. This means that the questions will appear consecutively.
  * Each question can be defined to jump to any questions that comes after it (e.g question #4 can jump to 5,6,7, but cannot jump to question #3).
  * With single choice questions (e.g Dropdown, single-choice), the ‘Jump to’ can be set based on the answers:

![](img/agent-survey-for-messaging-9.png)

  * If the ‘Jump to’ is set to anything other than ‘Next’, the agent will see all questions until the first question with logic, until they answer the logic question.

{:start="8"}
8. Click ‘Done’ - this will save your survey

9. Assign Survey to Skill/s -

  * In the library view, check the survey you wish to edit. Then click on the Action menu on the top right and choose ‘assign skills’

  ![](img/agent-survey-for-messaging-10.png)

  * Choose the skill(s) you would like to assign to the survey and save the changes:

  ![](img/agent-survey-for-messaging-11.png)

{:start="10"}
10. Default Survey - You can choose one survey that will appear for all conversations that are unassigned to a skill. To do so, check the survey you wish to set as default and click on the action menu. Then choose ‘set as default.' You can always change the default survey by checking another survey and setting it as default. However, if you decide you don’t want unassigned conversations to have a survey, you will need to set the default survey as ‘inactive’.

![](img/agent-survey-for-messaging-12.png)

{:start="11"}
11. Overriding survey timeout - Since the survey can be assigned tp multiple skills, you can override the survey timeout for a specific skill. To do so, navigate to the relevant skill page and scroll to the ‘Agent survey for messaging’ section:

![](img/agent-survey-for-messaging-13.png)

## Agent experience

Once an agent is assigned to a conversation, if the conversation is assigned to a skill, the agent will have a new widget in his workspace, named ‘Agent Survey’

![](img/agent-survey-for-messaging-14.png)


### Submitting a survey

Agents can submit the survey as many times as they want throughout the conversation

  * Only the assigned agent can submit the survey
  * Joined agents cannot submit the survey
  * Upon submitting, the ‘Submit’ button will change to ‘Resubmit’
  * The widget will have an indication on top saying the survey was submitted and at what time
  * All answers will be saved, but only the last submission will be visible in the history of the conversation

### Dismissing a survey

If the survey has no required questions, a ‘Dismiss’ button will appear.

  * If the dismiss button is clicked, the agent will not longer be able to submit the survey throughout the conversation.

  * Upon clicking ‘dismiss’ the agent will be prompted with a warning:

  ![](img/agent-survey-for-messaging-15.png)

  * The widget will have a notification stating the survey was dismissed and at what time

  ![](img/agent-survey-for-messaging-16.png)

  * If the conversation is transferred to the same skill, the next agent will have the ability to fill out  the survey.
  * If the conversation is transferred to another skill, the next agent will have or not have a survey widget per the configuration of the new skill

### Transffering a conversation (back to queue, to an agent, to agent in a different skill)

  * If the survey has required questions and the agent did not submit the survey, the agent will be prompted with a warning that they have a pending survey. If they choose to still transfer the conversation, they will no longer be able to fill out the survey.

  * The next assigned agent will be able to fill the survey if defined for the conversation’s skill.

{: .notice}
Coming soon - Previously Submitted! In the next version of the agent survey for messaging, the agent survey widget will have a new tab showing all surveys submitted for a specific conversation. This will of course be permission-based. See screenshot below for a sneak peek.

![](img/agent-survey-for-messaging-17.png)

## Agent manager experience

  * Agent managers will be able to submit the survey regardless of whether they are assigned to a conversation or not. This is to allow them to fill out the survey on behalf of the agent if the agent is away and missed filling out the survey.
  * The same timeout applies to agent managers and agents
  * The agent manager will not be able to fill out the survey if dismissed by the agent

## Profiles and permissions

All agents assigned to a conversation will be able to submit the agent survey if one is defined for the skill of the conversation they are handling. This is to prevent a situation where a conversation has a pending survey, but the agent is unable to submit it due to missing permissions.

### Permission: Configure messaging agent survey

* New permission has been added to Agent Managers role: “Configure messaging agent survey”
* Permission default states - ON by default for Agent Managers
* Users with this permission set to “Off” will not be able to edit the agent survey
* This permission is currently not visible/editable - this will be fixed in the next version of agent survey for messaging
* Note: You will need to allow agent manger the ‘Edit Skills’ permission in order for them to assign skills to surveys

### Permission: Configure messaging agent survey on skill

* New permission has been added to the administrators role: “Configure messaging agent survey on skill”
* Permission default states - OFF by default for Administrators
* Users with this permission set to “Off” will not be able to assign the agent survey to a specific skill from the skills page, or override the timeout of a survey on a specific skill level

![](img/agent-survey-for-messaging-18.png)

### Permission: Submit messaging agent survey

* New permission has been added to the agent manager role: “Submit messaging agent survey”
* Permission default states - OFF by default for agent managers
* Users with this permission set to “Off” will not be able to submit the agent survey on behalf of their agents (but they will be able to see it)

![](img/agent-survey-for-messaging-19.png)

## Reporting

Agent survey reporting in the Report Builder is coming in November. In the meantime, you can reach out to your LivePerson account team and ask the Analytics team to create custom reports on your account for the agent survey for messaging.
