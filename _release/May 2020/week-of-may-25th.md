---
pagename: Week of May 25th 
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-may-week-of-may-25th.html
isTutorial: false
isNew: false
date: '2020-05-20'

---

These release notes include new features arriving to LiveEngage during May 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Developers Center Redesign
### Enhancement

The LivePerson Developers site will receive a new look & feel enabling a better experience for new and existing users to find content more intuitively.

To access the site please go to https://developers.liveperson.com/.

The Welcome page contains content that helps you learn about the key products and services offered by LivePerson.

The Getting Started page takes you through the first steps of creating and setting up an account and helps you get familiar with LivePerson API’s so you can build & customize your own solutions.

The search experience provides a contextual “preview”. This displays the sentences that contain the keyword being searched and allows you to have more information before making a selection. 

LivePerson will continue to enhance the Developers Center to ensure the best user experience for our developers. 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/Dev_Center_Redesign.png)

## Greeting for accepted transferred messaging conversations 
### Type: New feature (Bot Connectors 2.18)
The Bot Connector system is designed to respond to incoming messaging by the consumer, once the bot is engaged in the conversation. Enabling the Welcome Messages settings, allows Brands to compose an initial message that the bot can send out that is not in direct response to the consumers messages. This allows for the bot to connect to a conversation and send out an initial message without waiting for the consumer to send a message after the bot first joins the conversation.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN_may25_1.png)

## Private Messages 
### Type: New feature (Bot Connectors 2.18)
This feature will enable customers to leverage the UMS Private Text feature thus allowing customers to send Private Text messages via all supported AI vendors in third-party bots. Private text messages are only visible to the agent and manager in Agent Workspace and end users will not be able to see those messages.

{: .sidebyside}
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN_may25_2.png)![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RN_may25_3.png)

## Conversational Cloud Accessibility -  A11Y Project
### Type: Enhancement (NAW 1.13)

LivePerson is working on designing the Conversational Cloud in order to be able to make the brand-facing products accessible according to WCAG 2.1 AA in 2020. This is an ongoing process which will be complete during Q3 and will affect the login pages, the chat workspace, the enhanced Agent Workspace and more. Within this version we added the a11y capabilities to various areas within the Conversational Cloud.

## [Enhanced Agent Workspace] Display Maven Messenger as a new source 
### Type: Enhancement (NAW 1.13)

In the enhanced Agent Workspace, there is a new source named “Maven Messenger”. We added a new source icon to the conversation list, allowing the agents to see the source of the conversation easily.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-1.png)

## [Enhanced Agent Workspace] New last message time tooltip in All Connections
### Type: Enhancement (NAW 1.13)

A new additional tooltip was added to the enhanced Agent Workspace, for the last message, allowing the user to see the last message that was received from the consumer.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-2.png)

## [Enhanced Agent Workspace] Remove history from transcript per skill 
### Type: Enhancement (NAW 1.13)

An update has been made allowing users to remove the history from the transcript in the enhanced Agent Workspace transcript area, per skill. This will allow brands to control the conversations this skill can see due to regulation requests. 

## [Enhanced Agent Workspace] Bot Escalation Summary widget view fix 
### Type: Bug fix (NAW 1.13)

A bug has been discovered in the enhanced Agent Workspace, in the bot escalation summary widget, which causes the widget to look corrupted within the workspace, while in the previous workspace it looks correct. It could affect all brands using bots, rather than just a specific bot. This bug has been fixed.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-3.png)

## [Enhanced Agent Workspace] Automatically route to available agent whenever a new conversation comes in
### Type: Bug fix (NAW 1.13)

A bug has been discovered in the enhanced Agent Workspace, when routing to available agents was not performing as expected. It caused agents to first log off and then log in back again in order for them to appear online and receive the conversation properly. It also caused agents who are away to appear online and to receive conversations, even when in Away mode. This bug has been fixed now.

## [Enhanced Agent Workspace] Allow agents to open and read transcript for an overdue conversation
### Type: Bug fix (NAW 1.13)

A bug has been discovered in the enhanced Agent Workspace, within the My Connections tab. Agents were not able to view the transcript of some conversations. When the agents tried to open an overdue conversation and read the transcript, they were not able to do it. It was later determined that this situation occurred specifically when a LivePerson Administrator (LPA) joined the conversation, which caused the overdue conversation transcript not to appear. This bug has been fixed now.

## [Consumer info widget] Country flag is not showing near the country 
### Type: Bug fix (NAW 1.13)

A bug has been discovered in the Enhanced Agent Workspace, with the consumer info widget, the flag in the country field was not displayed, even though it is displayed in the previous workspace. This bug has been fixed now.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-4.png)

## [Enhanced Agent Workspace] Mobile App icon incorrect in My Connections list
### Type: Bug fix (NAW 1.13)

A bug has been discovered in the My Connections list of the enhanced Agent Workspace, causing the Mobile App icon presented as the conversation source to show the wrong icon. The icon displayed now is “APP” while it should be the Mobile App icon. This bug has been fixed and we are now showing the correct icon.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-5.png)

## [Enhanced Agent Workspace] Markdown parser alignment to standard 
### Type: Bug fix (NAW 1.13)

A bug was discovered within the enhanced Agent Workspace existing markdown parser. The markdown parser was  not aligned to the standard within the system and it transforms links in a non standard way, unlike the rest of the parsers in the system. This bug has been fixed.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-6.png)

## [Enhanced Agent Workspace] Image gallery missing scroll bar and zoom 
### Type: Bug fix (NAW 1.13)

A new bug has been found in the enhanced Agent Workspace when an agent is sending an image during a conversation. When the agent opens the image in the transcript area, there is no zoom button for the zoom in. It is causing the page to be corrupted and messed up. This bug has been fixed and the image now fits within the width and height of the gallery.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-7.png)

## [Enhanced Agent Workspace] Transcript scroll behavior enhancement
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the Enhanced Agent Workspace transcript area with the scroll’s behavior when the agent is scrolling up. The behavior was causing the script to scroll down automatically all the way, whenever a new message arrived, causing the agent not to be able to read the message he was scrolling up for. This bug has been fixed and the scroll is now working as expected.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-8.png)

## [Enhanced Agent Workspace] Predefined Content - Widget is not updated when switching between conversations
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the Enhanced Agent Workspace predefined content widget, which causes the widget to not update when the agent was switching the conversations. This bug has been fixed and the widget is now working as expected.

## [Enhanced Agent Workspace] All Connections - Remove Web Visitors Dashboard's arrow
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the enhanced Agent Workspace in the All Connections list. This bug caused the agent to see the Web Visitors Dashboard arrow after switching to chat and going back to the enhanced Agent Workspace. The arrow would appear for no reason. This bug has been fixed.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-9.png)

## [Enhanced Agent Workspace] Hyperlink behavior broken
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the enhanced Agent Workspace in the transcript area, which allowed agents to send hyperlinks for mobile or unauthorized conversations, even though they shouldn’t be able to do so.This bug has been fixed.

## [Enhanced Agent Workspace] Editor’s text - line breaks not working in custom widgets
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the enhanced Agent Workspace, where the line breaks are not working properly when setting the editor’s text in custom widgets. This bug has been fixed.

## [Enhanced Agent Workspace] Current skill is not getting updated after a transfer in Consumer Info widget 
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the Enhanced Agent Workspace where the current skill is not getting updated immediately after a transfer made by a secondary agent or a conversation takeover. This is causing the conversation to return back to the agent that transferred the conversation to the new skill. This bug has been fixed.

## [Enhanced Agent Workspace] Filter conversation behavior fix in All Connections 
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the enhanced Agent Workspace where conversations are not appearing when searched for in the All Connections tab, despite confirming they meet the requirements of the filter being used. This bug has been fixed.

## [Enhanced Agent Workspace] Hyperlinks fix
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the enhanced Agent Workspace where hyperlink markdown requires alignment to the standard. This bug has been fixed.

## [Enhanced Agent Workspace] Unread notification within the light theme 
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the enhanced Agent Workspace when in light mode. In the transcript area, the text color for the unread message notification area is black like the background. This is causing the message not to appear. This bug has been fixed.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/week-of-may-25th-10.png)

## [Enhanced Agent Workspace] Step up conversation is not populating the SDE
### Type: Bug fix (NAW 1.13)

A bug has been discovered within the enhanced Agent Workspace when a step up conversation is taking place.  The conversation is not populating the SDE (for example: Customer id) correctly on the Messaging Interaction API. This bug has been fixed.
