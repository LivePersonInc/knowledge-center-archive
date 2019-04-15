---
pagename: 'Agent file sharing overview '
categoryName: Messaging channels
subCategoryName: Rich messaging
indicator: messaging
subtitle: ''
level3: ''
permalink: messaging-channels-rich-messaging-agent-file-sharing.html
isTutorial: false
isNew: false
date: 2019-04-15 11:03:29 +0300

---
{: .important}
Please note: Agent file sharing is currently in phase 1. At this phase, only photos can be shared via web-messaging. In the future, more file formats will be supported.

## **Introduction**

Agent file sharing enables agents and bots to share files with consumers. Agents will now be able to share photos with consumers in order to answer questions that can be better explained using images. For example, a screenshot for tech support or a product photo for sales use cases.

## **Enabling the feature**

To enable “Agent file sharing” capability on your LiveEngage account, please contact your LivePerson account team.

## **Night Vision setting**

In order to enable the agent file sharing capability, brands have to enable the feature via Night Vision. Click on the Night Vision icon in the top right corner (the blue icon). From there, Go to the visitors tab > Agent Workspace configuration > File Sharing:

![](/img/agent-file-sharing-1.png)

Click on file sharing and enable the feature:

![](/img/agent-file-sharing-2.png)

## **Permissions**

The agent file sharing capability is permission based. New permissions have been added to both agent and agent manager profiles: “Send files to consumers from local file browser.”

The permission is **off** by default. Additional permissions have been added as well in regards to custom widgets. This permission is covered more in depth below.

![](/img/agent-file-sharing-3.png)

## **Using file sharing**

A new attachment icon has been added above the agent’s input message area:

![](/img/agent-file-sharing-4.png)

The icon will be visible only to users with the appropriate permission.

In case the channel from which the conversation was initiated does not support receiving files, the icon will be greyed out and will not be clickable. In this phase, the icon will be visible only in web messaging conversations.

![](/img/agent-file-sharing-5.png)

Clicking on the attachment icon will open the agent local file browser dialog:

![](/img/agent-file-sharing-6.png)

The list of files presented will be filtered to present only supported file types (“Custom files”): jpeg, jpg, png, gif.

Once the agent chooses a photo, a preview of the photo will be presented and the agent will be able to add a caption and send the photo.

![](/img/agent-file-sharing-7.png)

The photo will appear in the transcript :

![](/img/agent-file-sharing-8.png)

Agents will be able to download the photo from the transcript.

![](/img/agent-file-sharing-9.png)

Once clicking on the photo it will be opened in full page mode:

![](/img/agent-file-sharing-10.png)

Agents will be able to keep writing in the input area while the file browser dialog is open, and navigate to other conversations. While the image is being loaded, the agent will be able to send additional messages. They will also be able to move to another conversation window while the loading process continues.

The consumer will receive the photo as part of the conversation. When the consumer clicks on the photo, it will pop up for a full screen view.

![](/img/agent-file-sharing-11.png)

## **File storage, retention and encryption**

* Files are hosted by LivePerson.
* Files will undergo sanitation by LivePerson (to check they are not malicious).
* Files retention is set to 13 months.
* GDPR: Files will be deleted from LivePerson’s storage in case of consumer’s right-to-be-forgotten request as described on our developers community: [Personal data deletion API](https://developers.liveperson.com/personal-data-deletion-api-overview.html)
* Files are encrypted at rest.

## **Photo resizing**

Before uploading a photo, it will be resized so that the longer dimension of the image will be set to 800 pixels.

In order to set a different pixels value , please contact your LivePerson account team.

## **APIs**

### **Agent Custom Widget SDK**

A new ‘Send File’ command has been added to the Agent Custom Widget SDK, allowing brands to send files to consumers. The file needs to be provided as a File object or Blob object.

Once the command is sent, the preview of the file will be displayed, allowing the agent to add a caption, send, or cancel.

For this to be enabled, the user must have the following privileges enabled:

“Send files to consumers from custom widgets” (**off** by default)

### **Agent Node SDK**

Bots will have the capability to send files as well. For further details and examples, please visit the Agent Node SDK Git repo: [File Sharing Bot](https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples#file-sharing-bot)

## **Limitations and clarifications**

* Supported file types: jpeg, jpg, png, gif.
* The capability is currently supported only on web messaging.
* File size will be limited to 5MB.
* Authenticated consumers who receive a photo from an agent over the web will see an empty line in the native app if the photo was sent without a caption, or only the caption.

**Web experience:** 

![](/img/agent-file-sharing-12.png)

![](/img/agent-file-sharing-13.png)

**App experience:**

![](/img/agent-file-sharing-14.jpg)

* The permissions to use the feature will be presented once the feature has been enabled by the account team. However, the feature will only be usable after it has been turned on in the account settings.
* If a conversation was resumed and then closed, photo sharing will be disabled as a way to resume the conversation again (the agent will not be able to send a photo to the conversation).
* Custom widgets cannot send a file as a way to resume a conversation.
* Animated gifs are not supported (will be sent as static gif).

## **Configuration steps summary**

1. [Enable the feature](https://docs.google.com/document/d/1HBpGncgbhYX8l6I5Ojl0uo-FgcICdogEaoTBjCPRcAA/edit#heading=h.7t874zt0s8a2)
2. [Enable the "file sharing capability" on night vision](https://docs.google.com/document/d/1e_Yh-Ftw3QuxRrtRkwVOhkQEwsnIu6RrfDpzDK9hYZ0/edit#)
3. [Set Permissions](https://docs.google.com/document/d/1HBpGncgbhYX8l6I5Ojl0uo-FgcICdogEaoTBjCPRcAA/edit#heading=h.iah9yn2enkvn)
4. Optional: [Changing the image resolution](https://docs.google.com/document/d/1e_Yh-Ftw3QuxRrtRkwVOhkQEwsnIu6RrfDpzDK9hYZ0/edit#)