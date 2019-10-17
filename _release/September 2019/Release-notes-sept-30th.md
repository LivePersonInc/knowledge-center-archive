---
pagename: Week of September 30th
categoryName: Release notes
subCategoryName: '2019'
indicator: both
subtitle: ''
level3: September
permalink: release-notes-2019-september-week-of-september-30th.html
isTutorial: false
isNew: false
published: true
date: 2019-09-30
---
These release notes include new features arriving to LiveEngage during September 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Email Connect
### Type: New feature

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

With Email Connect, brands can easily manage email conversations alongside conversations in other messaging channels such as Apple Business Chat, WhatsApp, SMS, Facebook Messenger, Web messaging and Google RBM, eliminating the need to switch between tools to respond to emails. Email Connect includes the powerful features available within LiveEngage including support for bots powered by Maven, predefined content, reporting and smart capacity. Email Connect (more features coming soon to Email Connect).

**Key benefits of Email Connect**

Increase agent efficiency — Email Connect increases agent efficiency by unifying operations so that agents can manage all messaging conversations, including email conversations, within LiveEngage instead of maintaining and toggling to a separate platform for handling consumer emails.

Easy setup — You can start using Email Connect in a matter of minutes by simply supplying your email credentials during our secure setup. No tagging required.

Simple bot integrations — Brands can add bots into Email Connect, offering assistance and instant responses to customer emails.

Rich Messaging capabilities — Send and receive attachments using Email Connect, from product images to requests for PDF receipts.

For more information on Email Connect and how to set it up [click here](https://knowledge.liveperson.com/messaging-channels-email-connect.html)

## [WhatsApp] Location sharing - Convert latitude and longitude params to Google Maps link

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

Currently when a WhatsApp consumer shares a location while in a conversation with a brand, the agent will receive the latitude and longitude parameters within the conversation thread (as text fields). In order to actually review the location (address) sent by the consumer, the agent needs to place the coordinates within a map service, which is an additional long and unnecessary step.

With the new location sharing enhancement, when a consumer shares his address/location with the agent, the agent will receive a structured content Map element to allow agents to quickly view the location shared by the consumer with a click. The new map element will contains a text with instructions, a clickable map image that when clicked by an agent will open up Google Maps to the shared location, and the location name and address info.

{: .notice}
**Please note:** When sharing the current location on WA, only a clickable map will be available, but the address and name of the location will not be mentioned in text.

**Screenshots**

Image 1: consumer shares location

{: .sidebyside}
![](img/week-of-september-30th-26.png)![](img/week-of-september-30th-27.png)

Image 2: agent sees the location consumer shared

![](img/week-of-september-30th-28.png)

## Smart Connect IVR self service via data source and campaign

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

SmartConnect is a feature that enables deflecting phone calls from a brand’s IVR system into LivePerson messaging. This enhancement adds support for SmartConnect campaigns and engagements.  

Until now, LivePerson professional services had to set up Smart Connect for our brands.
This release enables our brands to set up Smart Connect themselves, using data sources and by creating campaigns - enabling quicker onboarding and time to set up.

{: .notice}
**Please note:** This feature requires enablement. Please speak to your LivePerson representative for more information.

**Limitations**
* Currently the service default values are configured on the account level. In future releases this will be enhanced to an engagement configuration level.
* Currently the visitor info display Mobile App instead IVR as source. This will be enhanced in future releases.

**Screenshots**

In the data sources menu, a new option for ‘IVR’ will be added:

![](img/week-of-september-30th-1.png)

When selecting to turn on the IVR source, brands are able to configure the IVR via the following screen:

![](img/week-of-september-30th-2.png)

Once the data source is configured, brands will create a campaign engagement to complete the deflection process.
To do so, create an engagement within the campaign with the following configuration:
* Data source: IVR
* Entry point: IVR service

![](img/week-of-september-30th-3.png)

## Ability to set the bottom corners of the engagement window as rounded

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Today, brands have the ability to set the radius of the top corners of the engagement window. This feature will allow brands the ability to also set the radius of the bottom corners of the engagement window.

The additional setting “Engagement window bottom corners” will be added to the “Additional window setting” section of the engagement window studio. The radius must be set in numbers, with or without px. Format example: 0px 0px 5px 5px. The limit will be 20px. An invalid format notification message will be displayed if the number is entered beyond the limit number.

By default the bottom corners settings will be 0 0 0px 0px , which means that the corners are square, as today. This will apply to the embedded window, and the pop out, for both mobile and desktop. The current setting for the top corners will be renamed from “Engagement window corners” to “Engagement window top corners”.

**Enablement**
* Log into LiveEngage
* Go to Engagement window studio
* Click on “Open additional window settings”
* Click on “Look and feel” section to expand
* Enter values for “Engagement window bottom corners”
* Click on “Save”

**Screenshots**

![](img/week-of-september-30th-4.png)

![](img/week-of-september-30th-5.png)

## Ability to set the engagement window as floating

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Brands have the ability to set the embedded window as floating. Once this configuration is enabled, the position of the window will be 20px from the bottom and 20px from the right. This feature is disabled by default.

**Enablement**
* Log into LiveEngage
* Go to Engagement window studio
* Click on “Look and feel customization” button
* Enable by clicking on “Floating engagement” checkbox
* Click on “Save”

**Limitations**
* This setting will impact only the desktop embedded window.

**Screenshots**

Image 1: configure floating engagement window in engagement window studio

![](img/week-of-september-30th-6.png)

Image 2: floating engagement window consumer view

![](img/week-of-september-30th-7.png)

## Emoji support for the engagement window on desktop

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Brands have the ability to configure whether to provide consumers the ability to add emojis to their conversation while using the engagement window on their desktop. This feature is disabled by default.

**Limiations**
* This feature is available for desktop only.

**Enablement**
* Log into LiveEngage
* Go to Engagement window studio
* Click on “Text area” section
* Enable by clicking on “Emoji icon” checkbox
* Click on “Save”

**Screenshots**

Image 1: enable emoji icon in the text area

![](img/week-of-september-30th-8.png)

Image 2: Consumer view: adding emojis from desktop web messaging or chat window

![](img/week-of-september-30th-9.png)

## Ability to set the consumer actions menu in the messaging window on the top bar

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

This feature allows brands the ability to set the consumer actions menu location and elements within the web messaging or live chat engagement windows.

There are 2 options to set the location of the menu:
* At the bottom left side of the window (current location and default for Ocean and Horizon themes)
* Top right of the window, instead of the X icon

This configuration will be added to the “Add Elements” menu of the engagement window studio with the following changes:
* The text link is changed from “Menu elements” to “Menu position and elements”
* Under the “Menu elements” section the title is changed to “Menu position and elements”
* New radio buttons are added to provide the user the ability to select from one of the 2 positions options mentioned above.

In case a brand selects the top option, and the share file feature is enabled for the account, the attachment option will be moved from the menu element list to the consumer text area, and will be displayed as an attachment icon. In case brands want to remove the attachment option for the window (although enabled at the account level), brands can do so by clicking on the text area and disabling the attachment icon from the text area.

Once the top menu option is selected, the menu icon will replace the X icon (close/end icon). If the consumer would like to end the conversation, they can do so by choosing the end conversation option from the menu.

**Enablement**
* Log into LiveEngage
* Go to Engagement window studio
* Click on “Add elements” icon
* Click on “Menu position and elements”
* Under “Menu position and elements” section, select the position of the window
* Click Save

**Limitations**
* The top menu position is available for web messaging only and will not be visible in the engagement studio if the window is set for chat.

**Screenshots**

Image 1: configure the location of the menu for the engagement window

![](img/week-of-september-30th-10.png)

Image 2: configure menu to be at the bottom of the engagement window

![](img/week-of-september-30th-11.png)

Image 3: configure menu to be at the top of the engagement window

![](img/week-of-september-30th-12.png)

Image 4: consumer side top menu

{: .sidebyside}
![](img/week-of-september-30th-13.png)![](img/week-of-september-30th-14.png)

Image 5: consumer side bottom menu

{: .sidebyside}
![](img/week-of-september-30th-15.png)![](img/week-of-september-30th-16.png)

## Add attachment icon to the window

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

When the menu is configured to be at the top for web messaging and file sharing is enabled, for the account, the attachment icon is displayed at the consumer text area. Brands have the ability to configure the visibility of the attachment icon within the engagement window. This will be enabled (visible) by default.

**Enablement**
* Log into LiveEngage
* Go to Engagement window studio
* Click on “Text area”
* Enable by clicking on “Attachment icon” checkbox
* Click on “Save”

**Screenshots**

Image 1: enabled attachment icon in the text area

![](img/week-of-september-30th-17.png)

Image 2: enabled attachment icon on consumer side

![](img/week-of-september-30th-19.png)

## UI text for attachment feature made consistent between preview and the window

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

In the Engagement window studio, the attachment language under the menu option was not consistent with the wording in the engagement window. This update makes the language consistent.
* Preview now shows attachment icon instead of camera icon
* Preview text now shows “Add attachment” instead of “Send image”
* Menu list option now shows “Add attachment” instead of “Send Image”

**Screenshots**

Image 1: Text between preview in engagement window studio

![](img/week-of-september-30th-20.png)

![](img/week-of-september-30th-21.png)

Image 2: Text from consumer side

![](img/week-of-september-30th-22.png)

## Example text dimmed in text box for the engagement window

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The example text in the text box has been dimmed to 30% opacity and the font size has been aligned to the running text (1em) - to make it easier for the consumer to understand the hint purpose and to better differentiate between the consumer’s actual text vs the example text.

**Screenshots**

Before and after the example text was dimmed

{: .sidebyside}
![](img/week-of-september-30th-23.png)![](img/week-of-september-30th-24.png)

## Translation added to elements of the engagement window

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Translation is added to certain elements of the engagement window for all supported languages.

The following elements are now translated:
* Window header texts
* Go back to the previous page or log in to continue your conversation

## Unable to turn off authentication when creating off-site engagements

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

When configuring off-site engagement on accounts that do not have un_authmessaging web messaging enabled the UI automatically configures it to authenticated web messaging and the option to un-auth is grayed out. If unauthenticated messaging is not enabled, the option to create off-site engagements for messaging should not show.

## Cannot edit customized engagement window besides the default theme

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

## Refresh engagements when external window conversation closes

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

When a conversation with an external engagement window is closed, the engagements are not refreshed. This issue has been resolved.

## Agent profile picture is missing

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

When an agent sends a structured content carousel placed inside a structured content card, the agent’s profile picture does not show up within the engagement window. This issue has been resolved.

## Third Party Bot Connectors: Support export Bot metrics data from the Dashboard menu
### Enhancement

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

This feature enables the user to export raw data from the menu of Bot Status Dashboard. User has now the ability to export data it in JSON and the MS Excel format.

![](img/botconnectorsRN30.10a.png)

## Support of Watson Version 2 vendor added
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
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

Watson version 2 is now available as an additional vendor that can be used by Bot Connectors.  
![](img/botconnectorsRN30.09b.png)
![](img/botconnectorsRN30.09c.png)

## Fixing test connection feature in Bot Connectors
### Type: Bug fix
For testing connection for IBM Watson, a property of sending an input text was not defined. This issue has now been fixed.

## Fixing export metric failure response state
### Type: Bug fix
Whenever an error occured in exporting metric, the request state was always sent as 'Bad Request". This should not be the case if the error doesn’t correspond to the conditions of Bad Request and rather another issue. This has now been resolved.

## Auto close reset

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

This feature defines a set of configurations that would enable brands to achieve finer control over what kind of scenarios would trigger the auto-close mechanism to reset its countdown to conversation close per a specific conversation. The new configuration will enable the control if a conversation auto-close timer should be reset or not when a conversation:

* Was opened for viewing without having the viewing agent join the conversation (joins just as a READER).
* Was joined by an agent/agent manager/admin as an active participant in the conversation.

Besides these new configurations, writing a line in the conversation or changing its state would still reset the auto-close timer.

**How to configure?**

Please contact your LivePerson account team

## Partial data masking

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

<td>Yes</td>

<td>Yes</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

Enables brands to configure a data-masking regex which leaves the final four digits of credit card numbers unmasked. This is an addition to the recently released data-masking feature which masks the entire credit card of object matching the regex. Clients who choose the leave the final four digits of credit cards unmasked can track and audit messages while retaining consumer privacy.

**How to configure?**

Please contact your LivePerson account team

## Static load balancing

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
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

As part of the Static Load Balancing feature, a conversation’s allocated group field, used to route conversations to specific agent groups, will be set based on the resuming agent group ID.   
The above action would take place only if the Load Balancing feature is enabled by your LivePerson account team.

## Restore AAM Query OrderBy
### Type: Bug Fix

The ExConversationChangeNotification response returns only 1000 conversations. This is expected behavior, but the conversations returned were not the most recent conversations, which led some clients to conclude that conversations they recently worked on were missing.

As a part of troubleshooting an “OrderBy” clause was removed from the buildQuery method of the N1QLBuilder class. This clause ordered the 1000 conversation results by recency, to return the most recent conversations to the client. The OrderBy clause was removed because it was believed to be redundant, and potentially causing a major issue. This was not the case, and in order to fix the returned conversations, the clause was re-added to the query.

## AgentGroup filter from LE UI for Agent + AgentManager

### Type: Bug Fix

If a user is marked as both an AGENT and AGENT_MANAGER, the agent group filtering feature did not properly apply a group filter to show a limited result conversations. Instead, all conversations were shown as if there was no filter applied.

The ordering of clauses on the filter query was fixed, resolving this filtering bug.

## Skill filter should be applied only when group filter is applied for a brand+user

### Type: Bug Fix

Two new features were recently added to UMS: Agent Group Filtering and Agent Skill Filtering. Agent Skill Filtering should be seen as a sub-feature of Agent Group Filtering, as it makes no sense outside of the context of Agent Group Filtering.

However, the initial implementation of the two filters technically allowed them to operate independently of each other, even though this is not a valid use case. To fix this, the implementation was changed to make the Agent Skill Filtering only possible to enable for a brand when Agent Group Filtering is enabled as well.

A change was made to the Agent Group Filtering to consider AGENT_MANAGER users without agents to manage as ‘super users’ that show all conversations in the brand.

A change was made to the Agent Group Filtering to allow users who are labeled as AGENT and AGENT_MANAGER to receive conversations filtered for the AGENT group assigned to them.

A change was made to the Agent Skill Filtering to allow users who are labeled as AGENT and AGENT_MANAGER to be notified for conversations on skills assigned to them, even if those skills are not shared by any other group or user.

## Allow LPA user to subscribe to groups

### Type: Bug Fix

LPA users were not present in Account Configuration (AC). Agent group filters which depend on data from AC thus did not apply to LPA users in the LiveEngage (LE) UI. This was resolved by adding LPA users to AC, allowing them to subscribe to groups and filter conversations in the LE UI.

## Ac users are deleted when delta arrived on callback

### Type: Bug Fix

When receiving a missing response from AC on delta calls we cleared the skills on the users, which led to an edge case of conversations that had no available agents by mistake and were routed to skill -1.

## Update Privileges List for IVR Data Source
### Type: enhancement

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

Includes new privileges from the vault key repository for the Interactive Voice Response (IVR) data source.  

## Add Address to PersonalInfo Authenticated SDE
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

This enhancement adds the following elements to the authenticated PersonalInfo SDE contact list structure:
Country
Region
Zip Code

While country, region, and zip code have historically been a part of this SDE, the support was not available in the back-end chat system to make the fields available for consumption.  This ticket makes those data elements available to the agent via the LiveEngage UI as well as to applications that use this data either via Kafka or Hadoop.

One important note about this feature is that it required an update to the PersonalInfoEvent AVRO data model transformer (the software that converts SDEs from an internal Denver format to the standard AVRO format.  The previous version of that transformer is not forward compatible with the new elements, which means that parsing of the contact list with the new elements with systems using the old transformer will fail to parse the entire contact list structure, including existing fields such as email address and phone number, and these fields will show blank in any application that reads the event from kafka or hadoop.  It’s important to note that, while the data is not visible in applications using the old transformer, the data is still present and will become visible when the AVRO data model version is updated.  LiveEngage is not impacted by this.

Since this feature requires coordination with consuming applications, it is turned off by default behind a feature flag.

## Updates for new Faas Chat Events - InQueue, Start and End Chat
### Type: Enhancement

Back-end chat supports the new Faas Chat events (InQueue, Start and End Chat).

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

## Add Vehicle Domains
### Type: New feature

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

Adds CSDS domains for use by the Vehicle API and its consumers.

## Add SocialConnect Domains
### Type: new feature

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

Adds CSDS domains for use by SocialConnect
