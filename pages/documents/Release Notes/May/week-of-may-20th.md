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
published: false

---
## \[ABC\] Enhance List Picker multi selection option

### Type: enhancement

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

**Multiple selection control at the section level**
The List Picker feature enables agents or bots to share a list of items and information about them, while allowing the consumer to select item(s) and reply back with their selection. The brand can set the List Picker with sections to divide the list of items into product categories and set whether multiple selections are allowed. Today the parameter to enable/disable the multi-selection option is set at the List Picker level and applies to all its sections.

The List Picker template was enhanced to allow setting the multiple selection support at the section level. This way, brands can have a section that allows multiple selections of items and another section that does not, all for the same List Picker.

**To enable multiple selections per section:**
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
For brands that choose to enable the multi-selection option, a new feature is now available, allowing them to configure whether the consumer selections will be received as one aggregated reply or multiple replies. By default this feature is disabled and the agent/bot will receive multiple selection reply as multiple replies. When enabling this feature, the multiple section reply will be aggregated into one message, making it easier for a bot to analyze.

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