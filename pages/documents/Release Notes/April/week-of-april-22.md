---
pagename: Week of April 22nd
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: Release notes
level3: April
permalink: release-notes-2019-april-week-of-april-22nd.html
isTutorial: false
isNew: false
date: '2019-04-17T07:38:13.000+00:00'

---
These release notes include new features arriving to LiveEngage during April 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Bugs Fixes

### Welcome message is sent in Post Conversation Survey (CX-320)

<table class="releasenotes"> <thead> <tr class="categoryrow"> <th>Web Messaging</th> <th>Mobile App Messaging</th> <th>SMS</th> <th>Facebook Messenger</th> <th>ABC</th> <th>Line</th> <th>Google RCS</th> <th>Google My Business</th> <th>WhatsApp Business</th> <th>CM</th> <th>Chat</th> </tr> </thead> <tbody> <tr> <td>Yes</td> <td>Yes</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> </tr> </tbody> </table>

When the welcome message is configured for “Every new conversation” and a Post Conversation Survey is configured for the window, the welcome message is displayed after the conversation is closed and before the survey is displayed.

This issue has now been resolved and when the conversation is closed, the welcome message will not be shown when the PCS is configured, even when the welcome message is configured for “Every new conversation”.

**Screenshots**

![](/img/Webex2.png)

### Agent avatar appears next to visitor’s message when visitor sent an image (CX-169)

<table class="releasenotes"> <thead> <tr class="categoryrow"> <th>Web Messaging</th> <th>Mobile App Messaging</th> <th>SMS</th> <th>Facebook Messenger</th> <th>ABC</th> <th>Line</th> <th>Google RCS</th> <th>Google My Business</th> <th>WhatsApp Business</th> <th>CM</th> <th>Chat</th> </tr> </thead> <tbody> <tr> <td>Yes</td> <td>Yes</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> </tr> </tbody> </table>

When a brand is using web messaging and has the agent avatar enabled, the agent avatar appears next to the visitor’s message when the visitor sends an image to the agent.

This issue has now been resolved. The agent avatar should not appear next to the image when a visitor sends an image.