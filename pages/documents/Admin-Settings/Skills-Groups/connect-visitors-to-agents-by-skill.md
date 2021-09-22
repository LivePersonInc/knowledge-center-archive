---
pagename: Connect visitors to agents by skills
categoryName: Admin & settings
subCategoryName: Skills & groups
indicator: both
subtitle: 'Skills connect visitors with the agents most able to answer their questions '
level3: ''
permalink: admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html
isTutorial: false
isNew: false
date: 2019-01-23 11:39:47 +0000
redirect_from:
  - working-with-skills.html

---
Agents are trained to help visitors according to the business need.  An agent’s area of expertise is referred to as a skill. For example, you can create the skill "sales" for agents who are sales representatives. When visitors click an engagement assigned to sales, they will then be routed to the first available sales agent.

## Creating and assigning skills

Start by creating skills according to your business needs. Then assign skills to your agents. Finally, assign a skill to each engagement, so that when visitors click on the invitation to chat or message, they are routed to the agent most able to answer the visitor’s question.

Agent skills are created in the user management area:

![](/img/Transfer to skills_UI-04.png)

## How to create a skill

1. From the users page, click on the skills tab to view the skills list.
2. Click add skill.
3. The add skill dialog box will be open.
4. Name the new skill and type in a description.
5. Set the maximum wait time (in seconds) that you’re allowing your visitors to wait for agents with this skill. This ensures that your agents are fully occupied, yet not overextended, and that visitors won't wait longer than the maximum wait time.
6. Click save.

For chat, maximum wait time is defined as the length of time from the moment that the visitor completes the [pre-chat survey](contact-center-management-live-chat-operations-surveys-with-live-chat.html#pre-chat-survey) until the moment he is connected to an agent. If there’s no pre-chat survey configured for the engagement, and for messaging conversations, the maximum wait time starts when the visitor clicks the engagement.

{: .notice}  
You can also create a new skill within each user profile. See section [assigning skills to users](admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html#assigning-skills-to-users).

## How to delete a skill
1. From the users page, click on the skills tab to view the skills list.
2. Check the box next to the skill that you wish to delete.
3. Click on the Action menue on the top right of the screen.
4. Click Delete.

![](/img/delete_skill.png)

{: .notice}
You can also delete users in bulk, by using our Skills API. [Please refer to the Developer Center](https://developers.liveperson.com/skills-api-methods-delete-skills.html) for more information on how to use the API.

## Skills transfer list

Creating a transfer list per skill helps brands to define, for each skill, a list of other skills that the conversation can be transferred to.

This means that when handling a conversation from a certain skill, the agent will only be able to transfer the conversation to a skill included on that skill’s transfer list (or to an agent assigned to one of those skills), which should improve operational efficiency and reduce transfer mistakes.

For example, messaging skills should only transfer to other messaging skills, chat skills to other chat skills, and there should be limited transfer to bot skills.

![](/img/Connect-visitors-by-agent-skills2.png)

By default, the checkbox under the section transfer to skills is selected, meaning that the skill will be able to transfer to any other skill defined in the system. By clicking in the box, a dropdown of available skills will appear. These can be selected or deselected to determine whether or not the skill can be transferred on to them.

* A skill can always be transferred to itself and to other available agents assigned to the same skill.
* Unchecking the checkbox will mean that conversations assigned to this skill will not be transferable to other skills (apart from the skill itself).

## Default surveys for skill change \[chat only\]

Once an engagement has been clicked, a skill change may occur as a result of one of the following:

* Pre-chat routing question
* Transfer to another skill

Since surveys are connected to engagement windows, the survey that displays to consumers following a skill change is not relevant to the new skill. For example, a consumer who clicked a ‘sales’ engagement and was subsequently transferred to a ‘Service’ skill would see a post-chat survey which is ‘sales’- rather than ‘service’-related.

To avoid this situation, brands can configure the “default surveys - skill change” section in the skills tab. A campaign manager or an administrator can set which default survey will be shown in cases of a skill change.

The following survey types are supported:

* [Post-chat survey](contact-center-management-live-chat-operations-surveys-with-live-chat.html#post-chat-survey)
* [Agent survey](contact-center-management-live-chat-operations-surveys-with-live-chat.html#agent-survey)

![](/img/connect-visitors-agent-skills3.png)

{: .notice}  
In order to configure the default surveys for skill change, campaign managers must have the ‘edit skills’ permission enabled. For further information, refer to the [assign permissions.](admin-settings-permissions-assign-permissions.html)

Default survey data is reported on the relevant skill (after the change). The survey answers are visible in [Analytics Builder.](data-reporting-report-builder-report-builder-overview.html)

## Assigning skills to users

Users are assigned skills by selecting a skill that you have already created, or typing the name of a new skill, and assigning it to a particular user.

### To assign a skill to a user:

1. In the users list, click the user’s name.
2. In the skills field, select an existing skill or type the name of a new skill that you wish to assign to this user (for example, if you type ‘sales’, an option will dropdown ‘create skill ‘sales’).
3. Click save.

![](/img/connect-visitors-to-agents4-1.png)

## Assigning skills to engagements

### To assign a skill to an engagement:

Assign skills to engagements in the engagement studio, in the Campaign Builder.

1. Open a campaign by clicking on it.
2. Click on the engagement to which you want to assign a skill.
3. Navigate to the engagement studio.
4. Click the gear icon to open the settings menu.
5. Select the skill that you want to assign to your current engagement.
6. Click publish.
