---
pagename: Week of July 22nd
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: July
permalink: release-notes-2019-july-week-of-july-22nd.html
isTutorial: false
isNew: false
redirect_from:
- release-notes-2019-week-of-july-22nd.html

---
These release notes include new features arriving to LiveEngage during July 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## FaaS Scheduler

### Type: Enhancement

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

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>NA</td>

<td>NA</td>

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

To give brands the option to call their functions on a regular basis, we developed time-based scheduling for LivePerson Functions. Similar to Cron on Unix systems, we allow you to define recurring invocations via Cron expression for functions that are not connected to any events (functions that are connected to events don't need scheduling, since they are invoked whenever the event is fired). This feature is available to all customers.

Please see the [developers community](https://developers.liveperson.com/liveperson-functions-scheduled-invocations.html) for details on how to enable the FaaS Scheduler.

**Screenshots**

![](/img/FaaS Scheduler 1.png)

## LiveEngage Apps QuickLaunch Menu in LE UI

### Type: New functionality

A ‘waffle’ button which is exposed over LiveEngage interfaces and offers direct links for LiveEngage Applications and exposing customers to more applications from LivePerson.

As part of the expending of LiveEngage Applications as the main solution for integrations over LiveEngage, we would like to be able to offer LiveEngage Applications accessibility in a central, obvious and dedicated place over LiveEngage interfaces in such a way that each LiveEngage user will be able to launch LiveEngage Applications that are a part of his packages in a quick, simple and seamless (over LiveEngage SSO) way and with the best possible UX.

The QuickLaunch waffle will be visible in LE-UI if the account has at least one installed LiveEngage Application with the following conditions:

1. It is installed and enabled
2. It has QuickLaunch capabilities
3. It has the same set of profiles that the current LE-User has

For more information on LiveEngage applications, please [click here](https://developers.liveperson.com/liveengage-applications-what-is-a-liveengage-application.html).

**How to enable**

QuickLaunch menu is available by default for all accounts.

**Screenshots**

![](/img/week-of-july-22-1.png)

![](/img/week-of-july-22-2.png)

## Ability to duplicate the Ocean theme

### Type: New functionality

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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Brands now have the ability to duplicate the ocean theme engagement window, in order to use it as a starting point for creating a new window. In the engagement window library, users can now select the ocean theme and via the action dropdown list, select the duplicate option. This option is similar and in addition to the existing capability of “Add new.”

**Screenshots**

**Image 1: create an engagement window by duplicating from Ocean theme**

![](/img/week-of-july-22-3.png)

**Image 2: Ocean theme duplicated![](/img/week-of-july-22-4.png)**

## Large window preview

### Type: New functionality

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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

In the engagement window studio, once the user selects the large embedded window size, a disclaimer text will be displayed to indicate the large window size will not be reflected in the preview.

**Screenshots**

**Image 1: Selecting large embedded window**

![](/img/week-of-july-22-5.png)

**Image 2: Text shows the large window size will not be reflected in the preview**

![](/img/week-of-july-22-6.png)

## Making a new window with logo alt text breaks window on visitor side

### Type: Bug fix

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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

When making a new window with logo alt text, the window loads with broken styling. This has been resolved.

## When the ACD mode is ON - agent status does not change to away

### Type: Bug fix

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

A bug was found for chat customers using the ACD (Automatic Conversation Distribution) in “Advanced mode” (manual accept).

When choosing the option of automatically changing the status of an agent to away in case of missing a chat, It has been discovered that once a chat is missed (agent is online but did not accept incoming chat) - the agent remains online instead of changing to the Away state. The bug has been fixed in this version.

**Screenshots**

![](/img/week-of-july-22-7.png)

## Bot Dashboard

### New functionality

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
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The Bot dashboard will help brands monitor the technical and operational activity of their third party bots. Brands will be able to see key operational metrics such as, ongoing conversations, transferred conversations, errors, uptime and more.

This dashboard will provide the ability to track these metrics over time and thereby identify issues, follow the bots improvement over time and identify when its encountering an issue. There will also be an option to export the data as well as view logs related to the bots operational.

**Screenshots**

![](/img/bot dashboard.png)

## Add login name to the Assign Agent wizard step to support multiple bots with the same nickname

### **Type:** new feature

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
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

When creating a new Bot Connection, the admin must create a new agent and choose an existing Bot User Agent under which the Bot will operate. To avoid confusion with naming conventions in the account, we have added the Bots Login name to the wizard to help differentiate between existing users in the account.

## Add support for native Watson rich content

### **Type:** new feature

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
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Watson has its own syntax for using rich content. Until now the Bot connectors has only supported the native LivePerson Rich Content, now LivePerson Bot Connectors can take the out of the box structure of the Watson Rich Content and translate it to the expected UMS structure to work within the LivePerson framework.

## Mobile SDK 

For the latest mobile SDK release notes for iOS and Android - please visit the developers community. 

[iOS Messaging SDK - Version 3.9.4](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-release-notes.html#ios-messaging-sdk---version-394)

[Android SDK 4.1](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-latest-release-notes.html#environmental-requirements)

## Bot sent double queries to AI-Vendor if conversation was transferred or closed

### Type: Bug fix

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
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The bot sends double queries to AI-Vendor if conversation gets transferred or closed

The happened because of two issues:

First: we subscribe multiple time to a messaging conversation. Because of this, we get the events for a conversation multiple times.

Second: If we perform a transfer action, the id of the event is not saved, meaning, the event will get double processed.

When a bot sends a transfer action event directly after writing the first message the conversation was then transferred, but the transfer event id was not saved, meaning the event got double processed, however because the conversation was already disconnected from the messaging connector, it had no impact on UMS, only impact on sending doubled queries.