---
pagename: Week of May 20th
categoryName: Release notes
subCategoryName: 2019
indicator: messaging
subtitle: ''
level3: May
permalink: release-notes-2019-may-week-of-may-20th.html
isTutorial: false
isNew: false
date: 2019-05-20
---
These release notes include new features arriving to LiveEngage during May 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## \[ABC\] Enhance List Picker multi selection option

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
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
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

**Multiple selection control at the section level**
<br/>
The List Picker feature enables agents or bots to share a list of items and information about them, while allowing the consumer to select item(s) and reply back with their selection. The brand can set the List Picker with sections to divide the list of items into product categories and set whether multiple selections are allowed. Today the parameter to enable/disable the multi-selection option is set at the List Picker level and applies to all its sections.

The List Picker template was enhanced to allow setting the multiple selection support at the section level. This way, brands can have a section that allows multiple selections of items and another section that does not, all for the same List Picker.

**To enable multiple selections per section:**
<br/>
Use the List Picker template and set “multipleSelection” of the metadata property to be an array of boolean with value true/false, comma delimited to set each section. A boolean value should be set for each section in the List Picker. In case you choose to use an area and not all values are listed for all sections, the default value for these sections will be set to false (which means single selection). If this property is set to single boolean instead of an array of boolean, as today, then the multiple selections setting will be applied to all sections (default).

**Example:**

Metadata property for setting same multiple selection for all sections (default):

    [
      {
        "type": "BusinessChatMessage",
        "multipleSelection": TRUE/FALSE,
        "receivedMessage": {
          "style": "icon",
          "subtitle": "THIS IS THE SUBTITLE",
          "title": "THIS IS THE TITLE",
          "secondarySubtitle": "SECONDARY SUBTITLE",
          "tertiarySubtitle": "TERTIARY SUBTITLE"
        },
        "replyMessage": {
          "style": "icon",
          "subtitle": "THIS IS THE SUBTITLE",
          "title": "THIS IS THE TITLE",
          "secondarySubtitle": "SECONDARY SUBTITLE",
          "tertiarySubtitle": "TERTIARY SUBTITLE"
        }
      }
    ]

<br/>
Metadata property for setting multiple selections for each section:

    [
      {
        "type": "BusinessChatMessage",
        "multipleSelection": [TRUE/FALSE, TRUE/FALSE],
        "receivedMessage": {
          "style": "icon",
          "subtitle": "THIS IS THE SUBTITLE",
          "title": "THIS IS THE TITLE",
          "secondarySubtitle": "SECONDARY SUBTITLE",
          "tertiarySubtitle": "TERTIARY SUBTITLE"
        },
        "replyMessage": {
          "style": "icon",
          "subtitle": "THIS IS THE SUBTITLE",
          "title": "THIS IS THE TITLE",
          "secondarySubtitle": "SECONDARY SUBTITLE",
          "tertiarySubtitle": "TERTIARY SUBTITLE"
        }
      }
    ]

**Multiple selection replies from consumer**
<br/>
For brands that choose to enable the multi-selection option, a new feature is now available, allowing them to configure whether the consumer selections will be received as one aggregated reply or multiple replies. By default this feature is disabled and the agent/bot will receive multiple selection reply as multiple replies. When enabling this feature, the multiple section reply will be aggregated into one message, making it easier for a bot to analyze.

{: .notice}
**Please note:** This feature requires enablement. Please contact your LivePerson account team for more information.

**Screenshots**

**Image 1: enable merging the list picker replies**

![](/img/week-of-may-20th-1.png)

**Image 2: agent getting the consumer selected replies merged as one message**

![](/img/week-of-may-20th-2.png)

**Image 3: disable merging the List Picker replies**

![](/img/week-of-may-20th-3.png)

**Image 4: agent getting the consumer selected replies as individual message**

![](/img/week-of-may-20th-4.png)

## File Sharing (Phase II)

### Type: new functionality

<div class="tablecontainer">
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
</tr>
</tbody>
</table>
</div>
</div>

The agent and consumer file sharing capability has been expanded for document sharing (in the previous phase only photos could be shared).

The following file types are supported:

* PDF
* DOC(X)
* XLS(X)
* PPT(x)

All files types have a file size limitation of 5MB. The file sharing flow, functionality, capabilities, limitations remain similar to definitions described in photo sharing scope (view here).

{: .notice}
**Please note:** This feature requires enablement. Please contact your LivePerson account team for more information.

**Limitations:** To allow an agent to send files, you will need to enable the site setting. In addition, you will need to configure the consumer side site setting (messaging.file.sharing.enabled).

## Agent widget SDK: Configure sandbox attribute

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

The iframe sandbox attribute used in the agent widgets enforces restrictions on content hosted in the iframe to protect the LiveEngage application from several malicious actions. LiveEngage has set a number of sandbox flags to relax these restrictions and allow required functionalities.

Brands who sign the security waiver will be able to configure the sandbox attribute, giving them more flexibility to customize the Agent Widget SDK.

**Dependencies:**

* Brands who want to remove the sandbox attribute, will have to sign a security waiver
* site setting: ‘disable.custom.widget.iframe.sandbox’ off by default

## New minimize window icon (CX-286)

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

We added an additional style for the minimize window icon. Campaign managers and admin users are able to choose the icon to minimize the window. This is configurable via the engagement window studio under the “title bar” section. This feature is available for desktop only.

**To configure the minimize window icon:**

Default icon:

![](/img/week-of-may-20th-5.png)

![](/img/week-of-may-20th-6.png)

Chevron icon:

![](/img/week-of-may-20th-7.png)

![](/img/week-of-may-20th-8.png)

## “Alt text” on header of engagement window does not disappear even after deleting from settings (CX-194)

### Type: bug fix

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
<td>Yes</td>
</tr>
</tbody>
</table>
</div>

When adding a header image with Alt text within the engagement window studio configuration, Alt text appears when the visitor hoovers over the header image. However, when you delete “Alt text” within the engagement window studio, “Alt text” still appears on the visitor side when the visitor hoovers over the header image. Alt text should no longer appear when deleted and saved in the engagement window studio.

## Data Transporter email on task failure/success

### Type: new functionality

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
</tr>
</tbody>
</table>
</div>

To improve notification to brands when task failures occur, a new feature is now available to allow for an email to be sent.

**How to enable:** Navigate to the account section in the Data Transporter application, enter an email/distribution list, and opt in to emails on Task Failure, or Task Failure + Task Success.

{: .notice}
**Note:** This feature is available to existing and new Data Transporter customers. For more information, please contact your LivePerson account team.

**Screenshots**

![](/img/week-of-may-20th-9.png)

## Data Transporter global Single Sign-on

### Type: new functionality

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
</tr>
</tbody>
</table>
</div>

All users of Data Transporter may now login via Single Sign-on instead of using their regular username and password. This provides accounts with agent SSO enabled to also utilize the Data Transporter. In addition, non-agent SSO users can take advantage of the simultaneous login feature this provides when using the SSO option.

**How to enable:** From the main login page (https://transporter.liveperson.net/login), simply enter your account number and then click “Single Sign-on” link below the regular “Sign in” button. Alternatively, use the following shortcut: https://transporter.liveperson.net/sso/YOUR_ACCOUNT_NUMBER

{: .notice}
**Note:** This feature is available to existing and new Data Transporter customers. For more information, please contact your LivePerson account team.

![](/img/week-of-may-20th-10.png)
