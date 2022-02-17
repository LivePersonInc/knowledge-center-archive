---
pagename: Week of April 1st
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-april-week-of-april-1st.html
isTutorial: false
isNew: false
date: '2020-03-25'

---

These release notes include new features arriving to LiveEngage during April 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [LINE] Structured content metadata
### Type: New functionality (LINE 2.4)

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

LINE supports the sending of metadata with structured content in their app. If there is metadata field for a button in carousel container or card and if the user clicks on that button:
* The consumer sees a “sent message” in the transcript in the LINE app as feedback on their choice. This message is entered in “structured content -> click -> actions -> text”
* Metadata is fired as postback event
* Agent sees metadata in LE transcript as feedback

![](img/week-of-april-6th-1.png)

**Enablement:** This feature is automatically enabled for all customers.

## [Enhanced agent workspace] Consumer info widget: Bot escalation summary 
### New functionality (NAW 1.12)

The enhanced agent workspace now supports a new section within the consumer info widget: Bot escalation. This section displays all intents that were identified by bots during the messaging conversation, helping the agent take over the conversation, enhance the effectiveness and improve the experience of the conversation escalation. 
Brands are able to send contextual information to the agent during bot transfers to provide the agent with the evaluated intent, confidence score, as well as a text summary. 
In order to spare users from having to reset the workspace filters with each login, the global filter setting at logout will be retained upon login. The filters which are retained are only the global filters (available at the top right corner of the workspace): timeframe, group and skill filters. The filter settings are kept on the local storage of specific computer and browser per LiveEngage user.

**Enablement:** This enhancement is only available for custom Bots that use the Conversation Metadata for passing the escalation information

![](img/week-of-april-1st-2.png)

## [Enhanced agent workspace] New Structured Content: Multiple selection checkbox
### New functionality (NAW 1.12)

The enhanced agent workspace now supports a new type of structured content that can be sent from agents to consumers - “Multiple selection” structured content. This gives the agent the ability to suggest multiple options for consumers to select from, in a structural way. 

**Enablement:** This feature is enabled by default.

![](img/week-of-april-1st-3.png)

## [Enhanced agent workspace] All Connections tab: New tooltip for the skill column values
### Enhancement (NAW 1.12)

A new tooltip has been added to the All Connections table, under the “Skill” column values. Whenever a user hovers over any skill in the skills column, the new tooltip will be displayed, displaying the full name of the skill. This is mostly useful if the skill name displayed in the table is too long and displayed in the table with an ellipsis. This way, users will be able to see the full skill name.

## [Enhanced agent workspace] Agent widget SDK method doesn’t function as expected 
### Bug fix (NAW 1.12)

Working with Custom Widgets, there are many methods you can utilize in the agent widget SDK. A bug has been discovered In the enhanced agent workspace for custom widgets which use the command method “cmdNames.writeSC” - this command used to fail when trying to send a file. This bug has been fixed, and this method is now working.

## [Enhanced agent workspace] Consumer info widget: Consumer ID value discrepancy between old and enhanced workspaces
### Bug fix (NAW 1.12)

It has been discovered that there is a discrepancy between the old and enhanced workspaces related to the consumer ID value that is presented within the consumer info widget. In the old workspace, this value used to be populated with the consumer’s phone number, while in the enhanced agent workspace, this value was populated with the participant ID. 

The bug has been fixed and the consumer info widget now displays both values, as follows: 
* Consumer ID (which holds the participant ID)
* Phone number (which holds the consumer’s phone number)

## [Enhanced agent workspace] Consumer info widget: Engagement Skill in campaign info is incorrect after transfer
### Bug fix (NAW 1.12)

A bug has been discovered in the consumer info widget, under the Campaign Info section. Whenever a conversation was transferred, the engagement skill value under the “Campaign info” section was populated incorrectly, showing the newly transferred skill instead of the skill of the campaign. This bug has been fixed.

![](img/week-of-april-1st-4.png)

## [Enhanced agent workspace] Consumer info widget: Long values sometimes overlapped or hidden 
### Bug fix (NAW 1.12)

A bug was discovered inside the Consumer info widget, on the enhanced agent workspace. The Consumer ID and the Referrer (starting page) fields sometimes overlap with other elements, or are hidden behind the edges of the widget. This bug occured mostly for long field values, therefore some of the content was hidden and not readable. The bug has been fixed, and now long values are well wrapped and displayed within the widget as well.

![](img/week-of-april-1st-5.png)

## [Enhanced agent workspace] Agent Survey: Question type dropdown list not visible
### Bug fix (NAW 1.12)

A bug has been discovered within the Agent Survey widget in the enhanced agent workspace: The question type drop down menu with multiple selection options sometimes won’t scroll well and some of the options are not visible. This bug has been fixed.

## [Enhanced agent workspace] Custom widgets reloading incorrectly after skill transfer 
### Bug fix (NAW 1.12)

Custom widgets are not always reloading properly, and are not always showing the correct skill after the transfer. The bug is now fixed, and after skill transfer, the presented skill is the correct one.

## [Enhanced agent workspace] All Connections: Filter reset button not working properly 
### Bug fix (NAW 1.12)

A bug has been found when an agent is trying to reset the filter in the All Connections list. The reset button is not resetting the UI state properly. This bug has been fixed, and the UI state is now working properly.

![](img/week-of-april-1st-6.png)

## [Enhanced agent workspace] Predefined Content widget: Hotkeys are not aligned
### Bug fix (NAW 1.12)

A bug was found in the UI of the Predefined Content widget, where the hotkeys are not aligned to the right side of the widget. The bug has been fixed, and the hotkeys are now aligned to the right.

After the fix: hot keys are aligned to the right side of the widget
![](img/week-of-april-1st-7.png)

## [Enhanced agent workspace] Predefined Content widget: "Search" function behavior is incorrect
### Bug fix (NAW 1.12)

A bug was found in the Predefined Content widget search bar. While In the old workspace, agents were able to abbreviate the searched text, type keywords, and the results would be displayed. In the enhanced agent workspace, agents must write the exact substring in order for results to come up. This bug was fixed, and the results are now coming up as expected.

Search results after bug fix:

![](img/week-of-april-1st-8.png)

## [Enhanced agent workspace] My Connections tab: After a conversation swap, messages lose spacing
### Bug fix (NAW 1.12)

A bug was found in the enhanced agent workspace. If an agent types long text into the text area which contains paragraphs, then focuses on another conversation in the list before returning to the same conversation to continue typing, the paragraphs were disappearing and the text appeared as a long string with no line breaks. This bug has been fixed.

Before bug fix:

![](img/week-of-april-1st-9.png)

After bug fix:

![](img/week-of-april-1st-10.png)

## [Enhanced agent workspace] Firefox browser: After each refresh, the browser displays an error message
### Bug fix (NAW 1.12)

When an agent is using the Firefox browser both on Windows and on Mac OS, after each refresh, the result is an error message saying “Please wait while LiveEngage is trying to reconnect”. This bug has been fixed and the error message is not showing up anymore.

## [Enhanced agent workspace] All Connections tab filter: Agent’s list refining 
### Bug fix (NAW 1.12)

A bug was found in the All Connections tab filter, causing LivePerson’s controller bot to show as part of the agents list. This bug has been fixed.

![](img/week-of-april-1st-11.png)

## [Enhanced agent workspace] After manager takeover of conversation, the conversation stays in original agent’s conversation list
### Bug fix (NAW 1.12)

A bug has been found in the Enhanced Agent Workspace. After a manager takes over a conversation, the same conversation still stays in the original agent’s list. The desired behavior is that this conversation will be removed from the agent’s list or will be hidden, so the agent will no longer see it. This bug has been fixed according to the desired behavior.

## [Enhanced agent workspace] A dialog opened by assigned agent stays opened after takeover
### Bug fix (NAW 1.12)

A bug was identified in the enhanced agent workspace. After an agent manager takes over a conversation from an agent, the bug causes the transfer dialog to stay open for the assigned agent and not to close the dialog. This bug has been fixed now.

![](img/week-of-april-1st-12.png)

## [Enhanced agent workspace] Consumer info widget: Fields presented as null
### Bug fix (NAW 1.12)

A bug is shown in the Consumer Info widget of the enhanced agent workspace. When an agent opens the Consumer Info widget, the text in the Lead Topic and in the Transaction Order ID sections are presented as NULL. It is working as expected in the old agent workspace. This bug is now fixed and the fields are presenting the correct value.

Desired behavior: 

![](img/week-of-april-1st-13.png)

Bug: 

![](img/week-of-april-1st-14.png)

## [Enhanced agent workspace] All Connections filter: Reset contains wrong arrows for closed sections
### Bug fix (NAW 1.12)

A design bug has been discovered in the UI of the All Connections filter inside the enhanced agent workspace. The arrows for the closed sections (Agent Survey Attributes & Post Conversation Survey) are wrong. The up arrow should be used for the open section, and the down arrow should be for the hidden section. The bug is now fixed and the UI was redesigned.

![](img/week-of-april-1st-15.png)
