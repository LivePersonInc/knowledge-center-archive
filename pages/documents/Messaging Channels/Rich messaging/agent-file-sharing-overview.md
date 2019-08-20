---
pagename: 'Agent file sharing overview '
categoryName: Messaging channels
subCategoryName: Rich messaging
indicator: messaging
subtitle: ''
level3: ''
permalink: messaging-channels-rich-messaging-agent-file-sharing-overview.html
isTutorial: false
isNew: false
date: '2019-04-15T08:03:29.000+00:00'

---
## Introduction

Agent file sharing enables agents and bots to share files with consumers. At this phase, **photos and certain file types** can be shared via **web messaging, Apple Business Chat, and WhatsApp Busines.** In the future, more file formats will be supported.

Agents will now be able to share files with consumers in order to answer questions that can be better explained using images. For example, a screenshot for tech support or a product photo for sales use cases.

## Enabling the feature

To enable “Agent file sharing” capability on your LiveEngage account, please contact your LivePerson account team.

## Night Vision setting

In order to enable the agent file sharing capability, brands have to enable the feature via Night Vision. Click on the Night Vision icon in the top right corner (the blue icon). From there, Go to the visitors tab > Agent Workspace configuration > File Sharing:

![](/img/agent-file-sharing-1.png)

Click on file sharing and enable the feature:

![](/img/agent-file-sharing-2.png)

## Consumer-side configuration

In order to display the attachment icon in the consumer window, select the ‘Menu elements’ dropdown in the Engagement window studio, and check the box that says ‘Send image (Messaging only). The campaign **must be republished** in order for the icon to be displayed.

![](/img/agent-file-sharing-15.png)

![](/img/agent-file-sharing-16.png)

## Permissions

The agent file sharing capability is permission based. New permissions have been added to both agent and agent manager profiles: “Send files to consumers from local file browser.”

The permission is **off** by default. Additional permissions have been added as well in regards to custom widgets. This permission is covered more in depth below.

![](/img/agent-file-sharing-3.png)

## **Using file sharing**

A new attachment icon has been added above the agent’s input message area:

![](/img/agent-file-sharing-4.png)

The icon will be visible only to users with the appropriate permission.

If the channel from which the conversation was initiated does not support receiving files, the icon will be greyed out and will not be clickable. In this phase, the icon will be visible only in web messaging conversations.

![](/img/agent-file-sharing-5.png)

Clicking on the attachment icon will open the agent local file browser dialog:

![](/img/agent-file-sharing-6.png)

The list of files presented will be filtered to present only supported file types (“Custom files”): JPEG, JPG, PNG, GIF, PDF, DOCx, XLSx, and PPTx.

When the agent chooses a photo, a preview of the photo will be presented and the agent will be able to add a caption and send the photo.

![](/img/agent-file-sharing-7.png)

The file will appear in the transcript:

![](/img/agent-file-sharing-8.png)

There is no preview available for files, only photos.

![](/img/agent-file-sharing-17.png)

Agents will be able to download the file from the transcript.

![](/img/agent-file-sharing-9.png)

Once clicking on the file it will be opened in full page mode:

![](/img/agent-file-sharing-10.png)

Agents will be able to keep writing in the input area while the file browser dialog is open, and navigate to other conversations. While the image is being loaded, the agent will be able to send additional messages. They will also be able to move to another conversation window while the loading process continues.

The consumer will receive the file as part of the conversation. When the consumer clicks on the file, it will pop up for a full screen view.

![](/img/agent-file-sharing-11.png)

![](/img/agent-file-sharing-18-1.png)

## **File storage, retention and encryption**

* Files are hosted by LivePerson.
* Files will undergo sanitation by LivePerson (to check they are not malicious).
* Files retention is set to 13 months.
* GDPR: Files will be deleted from LivePerson’s storage in case of consumer’s right-to-be-forgotten request as described on our developers community: [Personal data deletion API](https://developers.liveperson.com/personal-data-deletion-api-overview.html)
* Files are encrypted at rest.

{: .notice}
**Please note:** This solution is not PCI compliance certified.

## **File Sanitation**

Opswat Metadefender File Sanitation 

When uploading a file, it will be sent to the Metadefender for file sanitation.

## Prevent Attacks without Relying on Detection with CDR<br/>
Most cyber security solutions rely upon detection as their core protective function. MetaDefender deep content disarm and reconstruction does not rely on detection. It assumes all files could be infected and rebuilds their content using a secure and efficient process.  It supports more than 30 file types, and outputs safe and usable files. Deep content disarm and reconstruction (Deep CDR) is extremely effective in preventing targeted attacks, ransomware, and other types of known and unknown malware threats.

## Highest Threat Detection with Multiscanning<br/>
MetaDefender multiscanning uses multiple anti-malware engines to provide superior detection rates of known and unknown threats and deliver extremely fast malware outbreak prevention. MetaDefender customers can simultaneously leverage the combined threat prevention capabilities of more than 30 anti-malware engines using both signature heuristic scanning and machine learning capabilities.

## Detect Vulnerable Software Before Installation<br/>
All applications contain vulnerabilities of different degrees of severity that threat actors can exploit. Our file-based vulnerability assessmentof binaries and installers detects known vulnerabilities within files and application vulnerabilities in software programs before they are installed on endpoint devices, including IoT devices. We support vulnerability detection for over 1 million files and over 20,000 applications.

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

* Supported file types: JPEG, JPG, PNG, GIF, PDF, DOCx, XLSx, PPTx.
* The capability is currently supported only on web messaging, Apple Business Chat, and WhatsApp Business.
* File size will be limited to 5MB.
* Authenticated consumers who receive a file from an agent over the web will see an empty line in the native app if the file was sent without a caption, or only the caption.

**Web experience:**

![](/img/agent-file-sharing-12.png)

![](/img/agent-file-sharing-13.png)

**App experience:**

![](/img/agent-file-sharing-14.jpg)

* The permissions to use the feature will be presented once the feature has been enabled by the account team. However, the feature will only be usable after it has been turned on in the account settings.
* If a conversation was resumed and then closed, file sharing will be disabled as a way to resume the conversation again (the agent will not be able to send a file to the conversation).
* Custom widgets cannot send a file as a way to resume a conversation.
* Animated gifs are not supported (will be sent as static gif).

## **Configuration steps summary**

1. [Enable the feature](messaging-channels-rich-messaging-agent-file-sharing.html#enabling-the-feature)
2. [Enable the "file sharing capability"](messaging-channels-rich-messaging-agent-file-sharing.html#night-vision-setting) on night vision
3. [Set permissions](messaging-channels-rich-messaging-agent-file-sharing.html#permissions)
4. Optional: [Changing the image resolution](messaging-channels-rich-messaging-agent-file-sharing.html#photo-resizing)
