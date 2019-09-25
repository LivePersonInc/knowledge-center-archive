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

---
These release notes include new features arriving to LiveEngage during September 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

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

## Unable to turn off authentication when creating off-site engagements

### Bug fix

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

When configuring off-site engagement on accounts that do not have un_authmessaging web messaging enabled (AC Features Messaging.Un_Auth_Messaging disabled), the UI automatically configures it to authenticated web messaging and the option to un-auth is grayed out. If unauthenticated messaging is not enabled, the option to create off-site engagements for messaging should not show.

## Cannot edit customized engagement window besides the default theme

### Bug fix 

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

Some brands are not able to edit their customized engagement window beside from the default themes. When clicking on one of the customized engagement windows to edit, the engagement window studio loads with error. Brands should now be able to edit any engagement window.


