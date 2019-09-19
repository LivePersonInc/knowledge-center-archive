---
pagename: Week of September 23rd
categoryName: Release notes
subCategoryName: '2019'
indicator: chat
subtitle: ''
level3: ''
permalink: release-notes-2019-september-week-of-september-23rd.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during September 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## LiveEngage Mobile App Version 2.3.0 will soon be available in the Apple app-store

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

The new LE mobile app version include the following new features:

### Transfer to skill

LE mobile app users can now transfer conversation to other skills.  
From the conversation action menu, user can select the new “Transfer conversation” button.  
The “Transfer conversation” dialog box displays all the relevant skill that the conversation can be transferred to (the login is defined in the LiveEngage platform).  
To transfer the conversation, user needs to select the required skill and then tap on the transfer button.

![](/img/week-of-sept23-1.png)

### Viewing photos sent by consumer

The LE mobile app now supports viewing photos sent by the consumer.  
When consumer sends a photo, it will be presented in the transcript in thumbnail view.  
Tapping on the image will open it in full view mode

### Sending photo to consumer

Users can now send photos from the LiveEngage mobile app to the consumers. If the conversation source (Connector) supports receiving photos from agent an “camera” button will be available in the input area bar. User can share photos from the device photo library or take photos using the device camera.

{: .notice}  
In this version, agent photo sharing is not supported for Apple Business Chat.

![](/img/week-of-sept23-1.png)

### Push notification enhancements

Up until now, there was a limitation that for a period of one minute after the app moves to the background, push notifications were not sent. In the new version, the push notification will start working as soon as the app is moved to the background.

### Session expired indication

If for some reason the LiveEngage mobile app session expired (e.g. the same user login to the LiveEngage web) an indication will presented in the app and the app will be logged out

## Mobile SDK

The latest Mobile SDK release notes can be found in the Developers Community:

iOS:

[https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-latest-release-notes.html](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-latest-release-notes.html "https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-latest-release-notes.html")

Android:

[https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-latest-release-notes.html](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-latest-release-notes.html "https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-latest-release-notes.html")

## If conversation didn’t start, minimize should close the window

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
</tr>
</tbody>
</table>
</div>

Today, when the consumer opens the engagement window and minimizes it without starting a conversation, the window is presented as minimized and at the same time the engagement invitation is presented. With this new enhancement, the window will close automatically when the consumer opens the window in web messaging and minimizes it before he starts the conversation. As a result, only the engagement invitation will be displayed. For chat, the behavior will stay the same.

## Close window automatically once consumer requests to clear history

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
</tr>
</tbody>
</table>
</div>

Today, for unauthenticated web messaging, brands can provide consumers with the ability to clear the conversation history from the window. This option is available to the consumer as part of the window menu actions.

Currently, once a consumer selects “Clear history” option, he gets the following notification: _“Are you sure you want to clear your conversation history? If you choose "Yes" the conversation will end and your conversation history will no longer be available from this device”_

Once the consumer chooses “Yes”, the conversation ends but the window remains open and the history remains. It’s only after the consumer closes the window and opens it again that the history is cleared.

With this new version, once the consumer chooses “Yes”, the window will be closed automatically (regardless of the close window upon end of the conversation setting) and the notification text will be changed to: _"Are you sure you want to clear your conversation history? If you choose "Yes" the conversation will be closed automatically and your history will no longer be available when you reopen the window."_

## Remove “info” prefix from welcome message

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
</tr>
</tbody>
</table>
</div>

When an engagement window is configured with a welcome message, the welcome message prefixes with the word “info” when displaying in the engagement window. With this change, the word “info” will be removed and only the welcome message will be displayed.

**Screenshots**

**Image1: “Info” is removed from engagement window**

Before:

![](img/week-of-september-22-1.png)

After:

![](img/week-of-september-22-2.png)

## "Show history for closed conversations" creates a fictitious load on the msghist service and console errors

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

When the "Show history for closed conversations" setting in campaigns is set to "Yes", this request will return the history. However, when it’s set to “No”, it returns a 401 error showing in the console. The engagement window will not make a call to the history API if the “Show history for closed conversations” setting is set to “No”. An error will not be seen in the console.

## \[Web messaging\] Difficulties loading conversation history

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

When a consumer opens an engagement window with a previous conversation and scrolls up to view the conversation history, the conversation history is not loading, showing the error “Failed to load history. Retry.” When clicking on retry, it doesn’t retry to load the same conversation history but instead skips it and tries to load the next one. This has been resolved.

## Survey does not continue after token refresh in unauthenticated web messaging

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

The survey stops once consumer replies to one of the questions after the token has expired in unauthenticated web messaging. This has been resolved.

## Floating engagement in center mode appears off center

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

When “Floating Engagement” is set to top/bottom center, it appears to be off center and slightly to the right. This has been resolved.

## Allow country code domains that can not be SLDs

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

Countries that are marked as "NO" in the "SLD" column should be treated as part of the parent domain and the suffix. For example, UK is marked as YES, so for site.uk.com, "uk.com" is actually the suffix and the not parent domain. For BT which is marked as NO - site.bt.com, bt is actually the parent domain and not part of the suffix.

## Safari and IE11 cause customer view to shift (scroll bar move) when history API requests finish upon window load

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
<td>No</td>
</tr>
</tbody>
</table>
</div>

When a consumer opens a new authenticated conversation, the window completes a Messaging Interactions API request to retrieve the consumer's recent history. When the Messaging Interactions API request completes, the window adds the new history to the top of the unified window. In IE11 and Safari, this causes the scroll bar to "jump" up to about half the height of the window, instead of maintaining the window scroll at the bottom of the window. This has been resolved.\\

## \[French translation\] French Localization using incorrect verbiage for message alerts

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

In the engagement window, the following French localization message alerts are incorrect:

* Sent = Envoyé(es)
* Read = Lecture
* Delivered = Délivré

**Fix:** 

The following French localization message alerts have been corrected:

* Sent = Envoyé
* Read = Lu
* Delivered = Transmis

## \[Greek translation\] "Εισαγάγετε" (Enter) in the engagement window should be "Εισάγετε"

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

The word for "Εισαγάγετε" (Enter) in the engagement window should be "Εισάγετε". This has been resolved.