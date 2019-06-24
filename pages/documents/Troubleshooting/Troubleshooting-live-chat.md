---
pagename: Live chat
categoryName: Troubleshooting
subCategoryName: ''
indicator: chat
subtitle: Troubleshooting for issues to do with Live chat
level3: ''
permalink: troubleshooting-live-chat.html
isTutorial: false
isNew: false
date: 2019-02-26 09:02:24 +0000

---
## Why isn’t CoBrowse / CoBrowse-for-Voice opening on the visitor side?

### Cause:

When agents initiate a CoBrowse session and visitors click Accept, the session does not launch.

When agents initiate **CoBrowse for Voice** session and visitors enter the required code/service ID, nothing happens. This is because 3rd-party cookies are disabled. CoBrowse and CoBrowse-for-Voice require 3rd-party cookies to initiate a session.

![](/img/Troubleshooting-chat2.png)

### Solution:

* Visitors should enable 3rd-party cookies in their browsers.
* For more information on CoBrowse and CoBrowse for Voice see [CoBrowse](agent-manager-workspace-agent-tools-for-live-chat-cobrowse-for-live-chat.html).

## The Pre-Chat survey routing question looks strange on iPhone devices

### Cause:

* By default, the question type is rendered according to the OS preference and LiveEngage doesn’t contain an option to change the default view.
* The reason the view is different on emulators than on actual devices is that emulators simulate the OS only and not the device hardware (or potential impacts/faults of the hardware on the OS).

### Solution: 

This is expected behavior.

## Why doesn’t the chat window follow our visitors to other web pages?

### Cause:

1. A visitor is in chat on one of our web pages.
2. The visitor, who is still in chat, navigates to another one of our web pages.
3. The chat window doesn’t follow the visitor to the page.

The URLs of the two pages the visitor moved between belong to **different domains** and the monitoring domains/cross domains was not enabled on the account.

**Example of moving between domains:**

1. A visitor is chatting on a page whose URL ends with .com.
2. The visitor then navigates to another page whose URL ends with .com.au.

### Solution:

The brand should enable monitored domains/cross domains on their account ( (from the LiveEngage Tag page, click **Manage monitored domains** and add domains to the whitelist and blacklist.) For further instructions, see Whitelist Your Domains for LP Monitoring.

## Chat tab is displayed incorrectly on iPhones using Safari

### Cause:

The size of the minimized chat tab on consumer iPhones varies in size depending on the length of the page:

* In some cases the tab is so long that the indicator showing that an agent has replied is off the screen.
* The length changes on each page and seems to be related to how long the page is.
* This can be reproduced on a specific account’s website but not on other websites.

The account’s web pages are embedded in a frame (not an iframe), under a frameset. Safari ignores the viewport when rendering the content of the frames under framesets which causes the problem reported. Many issues have been reported on the internet, mainly regarding scrolling, when using framesets on iOS Safari. Framesets are not used in most modern websites and are no longer support in HTML5.

### Solution:

* This is expected behavior.
* It is recommended not to use frame-sets on websites.

## Why aren’t offline engagements displayed to visitors?

### Cause:

Offline engagements are not displayed to visitors when agents are offline. There are many reasons this can happen, for example Target Audience, Location, Campaign Time Frame settings, etc.

An account set their campaign’s Campaign time frame > Operation hours. The Offline Engagements weren’t displaying outside those operation hours because they had set the Operation hours.

### Solution:

Change Campaign time frame > Operation hours to All hours. Do not set Operation hours when using Offline engagements.

## Why is an authenticated chat returning an offline survey?

### Cause:

Authenticated chat engagements send a request to your authentication server. The authentication server verifies the request, and the chat process begins to load.

If your authentication server returns a message stating that the request is not accepted/authenticated, LiveEngage displays an offline survey to the visitor.

### Solution:

You set up the authentication server on Campaigns page > Data Sources > Authentication Server > Edit.

## Why isn’t our campaign manager/admin user able to delete predefined content?

### Cause:

A campaign manager/admin user is unable to delete or manage Predefined Content categories. When the user tries to do so, they get the error “You do not have permission to perform the requested action.”

The user has two different LiveEngage accounts. On one of the accounts the user doesn’t have the Configure Predefined Content permission.

### Solution:

1. Log in to the LiveEngage account where the user needs more permissions.
2. Go to the Users tab and change the user’s profile to one that has the Configure Predefined Content option.

## Why aren’t visitor names displayed in the Web Visitors and Web History list?

![](/img/troubleshooting-web-visitors-list.png)

### Cause:

The engagements for which a visitor name is not displayed are NOT configured to display pre-chat surveys. The pre-chat survey is the only way to collect/display the visitor name in the Web Visitors and Web History lists.

{: .notice}  
Engagement attributes cannot be used to for this purpose either as they do not affect the display of the Web Visitors and Web History lists.

### Solution:

Set up pre-chat surveys with name fields for engagements if you want to record/display visitor names.

## Why is the toaster close (X) button displaying outside the toaster?

When we build toaster engagements with the Design Your Own option in the Engagement studio the images appear correctly, with the X/Close button appearing within the Toaster itself.

However, when we preview the toaster within LiveEngage or view it on our website the X does not appear within the image; instead it appears outside the image, on the right-hand side of the window.

### Cause:

The Engagement Studio Toaster is meant for full screen width items only. Therefore if use an image whose width is only 50% of the screen width, you will be able to place the image in the toaster, but the X button will display at the far right of the window.

The is expected behavior.

### Solution:

It is recommended to use the Overlay content in these cases.

## Why aren’t chats transferring? 

When a chat is transferred, the chat returned back to the original skill/agent rather than remaining in the destination queue.

### Cause: 

Transfer-to-agent returns chats to the origin after about 4 minutes, if no other agent has taken the chat. However, transfer-to-skill does not return to the origin.

### Solution:

This is expected behaviour

## Why are engagement windows opening blank and embedded buttons are not displaying in Internet Explorer?

### Cause:

When using a **supported** version of Internet Explorer, one or more of the following takes place:

* The chat window opens but it is blank – no content is displayed.
* Embedded buttons do not display at all.

### Solution:

Check the metadata in the <head> section of your web page’s HTML. Verify that the **IE=** value is **EmulateIE9**.

The line should look like this:

<meta http-equiv=”X-UA-Compatible” **content=”IE=EmulateIE9″** />