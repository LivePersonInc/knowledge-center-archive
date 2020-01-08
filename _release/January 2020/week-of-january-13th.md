---
pagename: Week of January 13th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-january-week-of-january-13th.html
isTutorial: false
isNew: false
date: '2019-12-31'

---

These release notes include new features arriving to LiveEngage during January 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Enhanced agent workspace] Engagement History widget support

### Type: New functionality (NAW 1.9)

The enhanced agent workspace now supports the engagement history widget, which displays all closed conversations belonging to a consumer. Closed conversations will now be displayed both above the transcript area as well as within the widget. This way, users can choose whether to scan closed conversations through the widget or by scrolling up in the transcript area - whichever is more convenient.

One significant difference between the two areas is that the widget shows all closed conversations, including conversations that have been closed **after the date of the selected conversation**. The transcript area will only display conversations that have been **closed prior to the date of the selected conversation**. 

**Example:**

If a consumer that had conversations that occurred on October 1st, 2nd, 3rd

* The history displayed at the top of the transcript area:
  * When focusing on the conversation from October 1st: no previous conversations will be displayed
  * When focusing on the conversation from October 2nd: there will be 1 previous conversation - from October 1st
  * When focusing on the conversation from October 3rd: there will be 2 previous conversations - from October 1st and 2nd
* The engagement history widget will display all 3 closed conversations when focusing on each individual conversation

**Enablement:** This widget can be enabled or disabled through Night Vision.

{: .notice}  
**Please note:** The configuration is the same for chat and messaging. Meaning if the widget is enabled in Night Vision for a blended account it will be visible in both the chat and messaging workspaces, and if disabled, it will be hidden from both.

![](img/week-of-january-13th-1.png)

## [Enhanced agent workspace] Reduced number of Predefined Content API calls

### Type: Enhancement (NAW 1.9)

In order to improve the overall performance of the enhanced agent workspace, we have reduced the number of API calls to the predefined content API by caching the last 5 PDC combinations used by the user (language and skill). Storing the last 5 used items is based on the assumption that the user is most likely to use the same content items during different conversations. Caching these items will also decrease the number of parsing operations being done on the retrieved content data before displaying it to the user.

## [Enhanced agent workspace] All Connections table code refactor

### Type: Enhancement (NAW 1.9)

The All Connections list code has been refactored and written from the beginning, so it will be more efficient and easier to maintain. In order to improve the All Connections list performance, during the refactor we reduced the number of subscriptions to UMS (by eliminating unnecessary calls).

## [Enhanced agent workspace]Do not reset auto close for reader only participants

### Type: Bug fix (NAW 1.9)

A bug has been discovered for customers working with the **old agent workspace:**

Whenever an agent or manager clicked on a conversation which they are not participating in through the All Connections table in order to view the transcript (without actively joining the conversation - just reading the content), the Auto Close timer used to reset. The actual and desired behavior for this scenario is to keep the timer as it is whenever a reader participant views it. This bug has been resolved. 

**Please note:** This fix was applied automatically and does not require enablement. Customers who wish to keep the current behavior, and reset the auto close timer whenever the transcript is being read by another user may contact their LivePerson representative.

{: .notice} **Note:** When this is changed it will affect **both** the old and enhanced agent workspace behaviors. 

## [Enhanced agent workspace] Unrelated characters added to agent messages

### Type: Bug fix (NAW 1.9)

When a user copied a text from excel/notepad and pasted it into the input area, then sent it to the consumer, additional unrelated characters had been added to the agent message and displayed to the agent and consumer.
In addition, if agents manually typed special characters in the input area (e.g: &, < , >) and sent it to consumers, the same behavior occurred. This bug has been resolved.

![](img/week-of-january-13th-3.png)

## [Enhanced agent workspace] Images with preview greater than 30,000 bytes not sents

### Type: Bug fix (NAW 1.9)

In some cases, when an agent sent an image to consumers, the image failed to send and an error might have been displayed to the agent, even though the image size is below the maximum size allowed. After further investigation it was discovered that this bug occurs whenever the size of the previewed image on the visitor side exceeded 30,000 bytes. This bug has been resolved.

## [Enhanced agent workspace] Agent Widget SDK Engagement source incorrect data

### Type: Bug fix (NAW 1.9)

For customers working with custom widgets which are connected to the Agent widget SDK, the engagement source data was polled incorrectly. This bug has been exposed on the enhanced agent workspace after we noticed that the engagement source displayed differently in the old workspace vs. the enhanced workspace (there was a discrepancy). The bug has been fixed.

## [Enhanced agent workspace] Campaign source displayed as "Mobile App" 

### Type: Bug fix (NAW 1.9)

The campaign source value, which displayed in the consumer info widget and is also exposed through the agent widget SDK in custom widget was previously displaying incorrectly. This bug has been exposed on the enhanced agent workspace after we noticed that the engagement source displayed differently in the old workspace vs. the enhanced workspace (there was a discrepancy). The bug has been fixed.

## [Enhanced agent workspace] Shortcuts not working for chat and old agent workspace 

### Type: Bug fix (NAW 1.9)

The last release of the enhanced agent workspace contained a code change which caused the following bug: LiveEngage shortcuts were not working for live chat customers, or for messaging customers working with the old agent workspace. This bug has been fixed, and now LiveEngage shortcuts are available to all LiveEngage users: live chat, old workspace, and enhanced workspace users.

## [Enhanced agent workspace] All Connections NPS/CSAT values not selected on first click

### Type: Bug fix (NAW 1.9)

When a user opens the filter in the All Connections list, then drills down to the CSAT/NPS dropdowns and clicks on a value, the value is not selected on the first click. The bug has been resolved.

![](img/week-of-january-13th-4.png)

## [Enhanced agent workspace] PDC hotkeys display when title is too long

### Type: Bug fix (NAW 1.9)

Within the predefined content widget, hotkeys are being cut off in the middle if the content title is too long. This bug has been resolved.

![](img/week-of-january-13th-5.png)

## [Enhanced agent workspace] Managers can't open images when previewing from All Connections 

### Type: Bug fix (NAW 1.9)

Managers viewing conversations from the All Connections list couldn’t view an uploaded image sent by the consumer. Instead, the managers were getting an error. The managers must join the conversation in order to view the image. The bug has been fixed, and managers may view images from the All Connections list, without needing to join the conversation.

## [Enhanced agent workspace] Agent manager not seeing last message of new conversation 

### Type: Bug fix (NAW 1.9)

Managers viewing conversations from the All Connections list sometimes couldn’t see the last message of the conversation. This bug has been resolved. 

## [Enhanced agent workspace] Hyperlink support in messaging

### Type: Bug fix (NAW 1.8)

{: .notice} 
**Please note** For now, this feature is only supported for messaging, including mobile web messaging. For consumers using mobile app messaging or other channels, hyperlinks are not supported. The hyperlink button will not be displayed for conversations originating from unsupported sources.

Users using the enhanced agent workspace have the ability to share hyperlinks with consumers during a messaging conversation. In order to do so, a hyperlink button has been added above the agent input area, allowing agents to define the link text and URL:

![](img/week-of-january-13th-6.png)

After filling in the data and pressing OK, the agent will be able to share the hyperlink with the consumer, as part of the general message.

Within the agent input area, the hyperlink will appear in blue and underlined, to indicate that it is a hyperlink and the agent will be able to edit it as long as the message was not sent yet. 

![](img/week-of-january-13th-7.png)

After sending the message to the consumer, the link will appear underlined as well in the transcript area. The link will be clickable for the agent via the agent workspace:

![](img/week-of-january-13th-8.png)

The consumer experience will be identical, and the hyperlink will be displayed as a clickable text within the conversation window:

![](img/week-of-january-13th-9.png)

{: .notice}  
**Please note:** This feature requires enablement. For more information please contact your LivePerson representative. 

**Limitations:**
* Since consumers may start conversations from web messaging and continue their messaging interaction from the mobile app, brands should be aware of the fact that links will not be displayed for mobile consumers. 

## Application dashboard

### Type: Enhancement (Application dashboard 1.0)

The Applications management module is a new module that will change the way our customers are exposed to, manage and use applications from LivePerson. The Application dashboard gives brands and partners the ability to manage all LivePerson applications on a **self-serve** basis, while also exposing them to applications that developers have created by presenting them with information about the application, as an overview of the app and screenshots from the app.

The motivation for enabling administrators to self-serve configure an application is obvious, we would like our customers to be able to manage their applications easily and in a self-service way. By using the dashboard, an admin can enable or disable the app, decide which profiles can use this app, change its name and icon, and decide if the app should be launched from the Quick launch menu or not.

The Application dashboard includes two main tabs:
* **Global applications:** All of the installed and preinstalled applications from LivePerson (or from 3rd party companies in the future) which are exposed to all brands.
* **Private applications:** Applications that were created by the brand and are available only to the brand.

Each application, Global or Private, will include 2-3 internal tabs named General, Information, and Configuration (if available):
* **General:** This tab is for the admin to configure the app’s name, icon, profiles and more.
* **Information:** This tab is where the admin can read the overview of the application and see screenshots and videos.
* **Configuration:** This tab is an iframe provided by the app owners and allowing the admin to configure the application in order for it to work.

**Limitations**
* This new module is available only for admin users. 

Application dashboard - Global applications tab:

![](img/week-of-january-13th-10.png)

General tab: 

![](img/week-of-january-13th-11.png)

Information tab: 

![](img/week-of-january-13th-12.png)
