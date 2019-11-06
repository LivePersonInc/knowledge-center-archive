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