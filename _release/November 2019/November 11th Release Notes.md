---
pagename: Week of November 11th
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2019-november-week-of-november-11th.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during November 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Additional roles based on granular permissions within Conversation Builder

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

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

{: .notice}  
This feature is dependent upon users using LiveEngage v11.2

As part of the Conversation Builder, LivePerson have moved to a more granular permissions model. As a result, the following new roles have been added:

* **Bot Builder Lite**: This role is intended for the less technical bot builder. It’s just like the existing Bot Builder role except a user with this “lite” role can’t export or import bots, nor can they create and work with integrations or credentials.
* **API Developer**: This is a technical but limited, add-on role. A user with this role can only create and work with integrations.
* **API Credentials Manager**: This is a technical but limited, add-on role. A user with this role can only create and work with credentials.
* **Import/Export Manager**: An add-on role. A user with this role can only export and import bots and knowledge bases.

{: .notice}  
API Developer, API Credentials Manager & Import/Export Manager are "_add-on"_ roles. They are intended to be assigned in conjunction with the Bot Builder Lite role as per users requirements.

## File upload support in the Conversation Builder

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

When a consumer is having a conversation with a bot, it is sometimes necessary for a  consumer to upload a file to get quicker time resolution. For example, if the bot supports account creation, you might need the consumer to upload their driver’s license/ID and proof of a good credit score.

LivePerson has added support for the upload of files by consumers. There is a new "file upload interaction type" which can be used in dialogs.

!\[\](img/Conversation_Builder_RN_Nov11.png)

## Messaging History API: Messaging agent survey

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

Update Messaging (conversation) History API to support the following:

* Ability to filter conversations that are pending agent survey
* Ability to view the survey filled in for every conversation and update if needed (in conversation view mode)
* Ability to search conversations based on agent survey Q&As:
  * Search based on question name and question ID
  * Search based on keywords in question
  * Search based on keywords in an answer
  * Search based on SDEs

We added new types to contentToRetrieve: previouslySubmittedAgentSurveys and latestAgentSurvey (not part of the default contentToRetrieve).

## Thumbnail masking

### Enhancement

Given a site setting, mask the thumbnail of an image sent during the conversation, only for closed conversation. The replacing value for the thumbnail should be provided in the site settings: messaging.file.sharing.preview.masking.text with an encoded string that will represent the replacement for the thumbnail.

If this input will be invalid, then the UI will present the following image:

!\[\](img/Thumbnail_masking_RN.png)

## Data access: add profile ID 

Add the profile ID of the agent in the time of the login in the 'Agent Activity' resource of the data access API. This API is based on the event RepSessionEvent produced by Denver.

The API signature has not changed, but the data structure of the JSON in the returned files has changed.