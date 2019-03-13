---
pagename: Agent workspace
categoryName: Troubleshooting
subCategoryName: ''
indicator: both
subtitle: Troubleshooting for all questions relating to the agent workspace
level3: ''
permalink: troubleshooting-agent-workspace.html
isTutorial: false
isNew: false
date: 2019-02-25 13:14:06 +0000

---
### Why don’t I get audio notifications for incoming conversations?

**Issue:** An agent is not getting audio notifications for incoming conversations.

#### Possible causes and solutions:

1. In the agent work space in LiveEngage audio notification is muted. Go to your agent status bar and unmute sound, as shown in the image below.

   ![](/img/troubleshooting-agentworkspace.png)
2. The agent’s browser is not set to “Play Sounds in Webpages”. The agent should turn audio on in their browser.

   For Chrome browsers, see [Turn notifications on or off](https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en) in Google Chrome Help.

   For other browsers, search the browser’s Help for instructions on turning on audio.

   For Internet Explorer, follow these steps:

* Open Your Control Panel: The easiest way to open the Control Panel is to click on “Start” and then click on “Control Panel.”
* Open the Internet Options: Use the search box to find the “Internet Options” section of the Control Panel.
* Select the “Advanced” Tab: The Advanced Tab is usually on the far-right side of the Internet Options screen.
* Scroll Down to Multimedia: Scroll through the options until you see the section called “Multimedia.”
* Deselect the Play Sounds Option: Click to uncheck the option called “Play Sounds in Webpages.” This will turn off all sounds in your internet browsers.
* Turn Sounds On Again When You’re Ready: If you would like to resume listening to sounds on your internet browser, be sure to follow these steps again and check the “Play Sounds in Webpages” option once again.

### Why don’t some agents see the conversation summary widget?

Some agents don’t see the conversation summary widget in their workspace.

![](/img/agent-workspace-troubleshooting1.png)

#### Cause:

The conversation summary widget is configured via Engagement Attributes on the Skill level. The account had set their **Visitor Journey** engagement attribute to track **Lead** information for agents with certain skills. The agents who did not see the conversation summary widget were not assigned to any skills in that list.

#### Solution:

Assign the agents one of the skills configured for Visitor Journey leads.

**To edit the Visitor Journey** **engagement attribute:**

1. Log into **LiveEngage**, and then click on the **Campaigns** tab. The footnote is displayed at the bottom of the page.
2. In the footnote, click **Data Sources**. The Data Sources page is displayed.
3. On the Data Sources page next to Visitor Journey click **Configure**.
4. On the Visitor Journey page under Lead, select **Submit By Agent**.
5. Select the skill(s) for which you want this feature to be available.
6. Select the Engagement Attribute properties that will be displayed to the agent in the Agent Workspace by clicking **Add field to widget**. You must select at least one property.
7. For each of the selected properties, enter a **display name**. This name will be displayed to the agent in the Agent Workspace.
8. Click **Save**.

For more information on Conversation Outcomes and the Conversation summary widget, see [Conversation Outcomes](data-reporting-engagement-attributes-conversation-outcomes.html).

### Why is there a delay in the delivery of agent messages?

Sometimes latency issues are experienced by users, such as agent statuses switching to away automatically, delayed delivery of agent messages to customers, etc.

#### Cause:

The affected agents were working in unsupported browser versions.

#### Solution:

Update agent browser version. For a list of supported browsers, see system requirements and supported languages.

### Why isn’t CoBrowse available to chat agents?

Agents in chat do not have the CoBrowse icon available to them and therefore cannot initiate a CoBrowse session.

#### Possible causes:

* The CoBrowse function for the account is not switched on in Night Vision.
* The agents are not assigned to a profile that includes CoBrowse permissions.

### Why isn’t the scroll bar showing in the predefined content widget?

#### Possible cause:

#### A setting that is configurable in the Mac OS X.

**To modify the setting**:

1. Click the **Apple** menu at the top-left of the screen and select **System Preferences**.
2. Click the **General preferences** pane (first one at the top).
3. Under Show scroll bars select **Always**. The scroll bar will now display in the predefined content widget.

### An Agent’s status is AWAY yet he is still Receiving Chats

A LiveEngage agent received a chat notification while they are in Away state.

#### Cause:

The ACD setting of the agent’s LiveEngage account is Manual mode. In this mode, incoming chats ring for all agents who are logged in, regardless of their state (Away/Back Soon/Online).

When the ACD setting is Manual, this is expected behavior. (This allows agent managers to get notifications and take chats when they feel their agents are overwhelmed.)

**Note:**

* Chats cannot be transferred from other agents to an agent who is in Away state.
* Agents in Away state do NOT count toward the current available chat slots of a specific skill.

![](/img/Agent-workspace-troubleshooting.png)

### Why don’t agents see their Predefined Content?

A LiveEngage agent can no longer see their predefined content in the predefined content widget.

#### Cause:

The account’s admin/agent manager exported the predefined content, modified all the predefined content IDs in the exported file and then imported the predefined content from the modified file. During the import process all the predefined content items in the account were deleted because it could not locate them in the import file. The import process identifies items by their IDs and the IDs in the import file had been changed.

#### Solution:

Do not modify IDs of predefined content items.

For more information, see [Importing Predefined Content.](agent-manager-workspace-workspace-configuration-importing-predefined-content.html)

![](/img/agent-workspace- troubleshooting3.jpg)

### Why doesn’t our agent manager see all his groups?

An agent manager reported that on the Web History tab, he is only able to see and export chat transcripts for his call center in India. He doesn’t see chats from his other call center in the USA and he’s not able to choose the USA group in the Agent Group filter.

#### Cause:

The agent manager is defined as the manager of the India call center group but not of the USA agent group.

#### Solution:

A user on the account who has permissions to modify user settings, should change the agent manager’s permissions as follows:

1. Go to the Users tab.
2. Click the Agent Manager user in the list. The Edit user window opens.
3. In the Manage groups field select the group you want the agent manager to manage.
4. Click Save. After logging out of LiveEngage and then logging in again, the agent manager will see both groups in the Web History