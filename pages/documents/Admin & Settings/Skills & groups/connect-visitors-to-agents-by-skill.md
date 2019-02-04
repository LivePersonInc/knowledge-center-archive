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

---
Your agents are trained to help visitors according to your business needs.  An agent’s area of expertise is referred to as a skill. For example, you can create the skill "sales" for agents who are sales representatives. When visitors click an engagement assigned to sales, they are routed to the first available sales agent.

Start by creating skills according to your business needs. Then assign skills to your agents. Finally, assign a skill to each engagement, so that when visitors click on the invitation to chat or message, they are routed to the agent most able to answer the visitor’s question.

## **Creating skills**

![](/img/connectvis1 (1).png)

Agent skills are created in the user management area.

**To create a skill:**

1. From the users page, click on the skills tab to view the skills list.
2. Click **add skill.**
3. The add skill dialog box will be open.
4. Name the new skill and type in a description.
5. Set the maximum wait time (in seconds) that you’re allowing your visitors to wait for agents with this skill. This ensures that your agents are fully occupied, yet not overextended, and that visitors won't wait longer than the maximum wait time.
6. Click **Save**.

For chat, maximum wait time is defined as the length of time from the moment that the visitor completes the pre-chat survey until the moment he is connected to an agent. If there’s no pre-chat survey configured for the engagement, and for messaging conversations, the maximum wait time starts when the visitor clicks the engagement.

{: .notice}  
You can also create a new skill within each user profile. See the section, [assigning skills to users.]()

### **Skill transfer list**

Creating a transfer list per skill helps brands to define, for each skill, a list of other skills that the conversation can be transferred to.

This means that when handling a conversation from a certain skill, the agent will only be able to transfer the conversation to a skill included on that skill’s transfer list (or to an agent assigned to one of those skills), which should improve operational efficiency and reduce transfer mistakes.

For example, messaging skills should only transfer to other messaging skills, chat skills to other chat skills, and there should be limited transfer to bot skills.

By default, the checkbox under the section transfer to skills is selected, meaning that the skill will be able to transfer to any other skill defined in the system. By clicking in the box, a dropdown of available skills will appear. These can be selected or deselected to determine whether or not the skill can be transferred on to them.

* A skill can always be transferred to itself and to other available agents assigned to the same skill.
* Unchecking the checkbox will mean that conversations assigned to this skill will not be transferable to other skills (apart from the skill itself).

### **Default surveys for skill change \[chat only\]**

Once an engagement has been clicked, a skill change may occur as a result of one of the following:

* Pre-chat routing question
* Transfer to another skill

Since surveys are connected to engagement windows, the survey that displays to consumers following a skill change is not relevant to the new skill. For example, a consumer who clicked a ‘sales’ engagement and was subsequently transferred to a ‘Service’ skill would see a post-chat survey which is ‘sales’- rather than ‘service’-related.

To avoid this situation, brands can configure the “default surveys - skill change” section in the skills tab. A campaign manager or an administrator can set which default survey will be shown in cases of a skill change.

The following survey types are supported:

* Post-chat survey
* Agent survey

![](/img/connectvis3 (1).png)

{: .notice}  
In order to configure the default surveys for skill change, campaign managers must have the ‘edit skills’ permission enabled. For further information, refer to the [Profiles (permissions)]().

{: .notice}  
Default survey data is reported on the relevant skill (after the change). The survey answers are visible in Report Builder.

### **Assigning skills to users**

Users are assigned skills by selecting a skill that you have already created, or typing the name of a new skill, and assigning it to a particular user.

**To assign a skill to a user:**

1. In the users list, click the user’s name.
2. In the skills field, select an existing skill or type the name of a new skill that you wish to assign to this user (for example, if you type ‘sales’, an option will dropdown ‘create skill ‘sales’).
3. Click save.

   ![](/img/connectvis4.png)

### **Assigning skills to engagements**

**To assign a skill to an engagement:**

Assign skills to engagements in the engagement studio, in the campaigns area.

1. Open a campaign by clicking on it.
2. Click on the engagement to which you want to assign a skill.

![](/img/connectvis5.png)

{:start="3"}

1. Navigate to the engagement studio.
2. Click the gear icon to open the settings menu.
3. Select the skill that you want to assign to your current engagement.
4. Click **publish**.

![](/img/connectvis6.png)