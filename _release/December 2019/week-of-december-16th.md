---
pagename: Week of December 16th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-december-week-of-december-9th.html
isTutorial: false
isNew: false
date: '2019-12-11'

---
These release notes include new features arriving to LiveEngage during December 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## EmailConnect
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

Custom Headers and Footers — Brands will be able to add custom html headers and footers to their outbound emails in the Email Connect Setup page.
Custom Auto-response text — Brands will be able to add custom auto response text in their preferred language which will be used in an email back to consumer when the consumer already has a conversation open in LiveEngage. 

**How to enable** 
You can enable both features using EmailConnect Setup. 

HTML header and footer on EmailConnect is an optional feature. But if you choose
to add header and footer to outbound consumer emails, you can upload HTML header and 
footer using EmailConnect Setup. Follow the steps outlined here. <Anchor to step 7 in Configure 
Email Header and Footer (Optional)>

To add custom auto-response text follow the steps outlined here. <Anchor to step 6 Configure
 Auto-Response Text >

{: .notice}
Every header and footer provided to Email Connect during the onboarding process is subjected to a security check. Deviating from this list could yield HTML that might be rejected by the Email Connect Setup. 

Below is a list of approved HTML elements and attributes. 

|Elements|Attributes|Notes|
|-----|-----|-----|
|html|n\a|Required, top-most element|
| body | bgcolor, width, style| Required, placed within the html element|
| table | align, bgcolor, cellpadding, cellspacing, border, height, width, style, color, class| Useful for creating a table in HTML that most email clients honor| 
| tr | n\a | Used to define a row in a table |
| td | style| Used to define a column in a table|
| b | n\a | bold|
| i | n\a | italic|
| center | n\a | centers text in HTML|
| div | style | creates a division of section within HTML|
| a | href, target | creates an anchor tag for HTML links|
| img| src, width, height, alt, border | Creates an image within HTML (usually placed within an <a> tag|
| font| face | specifies the font family | 

#### Example of Consumer Email with LivePerson Template

This is how the HTML header and footer will render and be presented to the consumer when you use the downloaded header and footer template.  
![](img/RNDec16_2.png)

For more information on EmailConnect, please click [here](messaging-channels-emailconnect.html) 

## Creation of the Skills using the Wizard  [Bot Connectors 2.14]
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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

This feature allows the creation of the skill inside the bot wizard. 
![](img/RNDec16_1.png)

## Delay Message support for All AI vendors [Bot Connectors 2.14]
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

With the inclusion of this feature, the LivePerson platform will support the delay message feature to all our vendors including Amazon Kes, FaaS, Dialogue flow and Micrososft Bot Framework.

## Vanity URL support in the CORS check [Bot Connectors 2.14]
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

All customers with branded URLs will be able to use the Third-Party Bots. Their configurations need to be present in the LiveEngage k8 environment in order to make use of this feature.

## Error on saving agent information after the change in picture URL [Bot Connectors 2.14]
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

While creating/updating a bot through Third-Party wizard, when a user types display picture URL field and delete the content later again, this caused the problem in saving the bot configuration. This fix will allow the user to edit the image and save the configuration without any problem.

## Bot stops in delayed state [Bot Connectors 2.14]
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

It was found that If you stop bots which are in the "Delayed" state, you are unable to start the bot again as it never seems to be stopped. This bugfix will fix this issue and will allow the user to start or stop the bot.

## Fix sending encodedMetadata to back-end messaging server [Bot Connectors 2.14]
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

 Previously it was found that the encodedMetadata value was not sent to the back-end messaging server. This bugfix will remove the failure of sending encodedMetadata to the UMS server.
 
##  Failure of Chat Transfer to Agent [Bot Connectors 2.14]
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

If a user asks for a transfer to an agent in the Chat conversation, after the conversation was  transferred to the agent, it was closing automatically or was closing due to the failure of the transfer. This issue has now been fixed.
 
