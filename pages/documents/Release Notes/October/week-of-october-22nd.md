---
pagename: 'Week of October 22nd '
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: ''
level3: October
permalink: release-notes-2018-october-week-of-october-22nd.html
isTutorial: false
isNew: false
date: 2019-02-06 11:56:51 +0000

---
These release notes include new features arriving to LiveEngage during October 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}

The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionalities

### Skill ID on Conversation Info event (LE-94149)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>N/A</td>
<td>No</td>
<td>N/A</td>
<td>No</td>
</tr>
</tbody>
</table>

The Skill ID in the Conversation_Info event is now exposed. The event should be triggered when a conversation is transferred to an agent with a different skill.

### Photo Sharing - When viewing image on the entire screen, click the background to dismiss (LE-94140)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>N/A</td>
<td>No</td>
</tr>
</tbody>
</table>

After the consumer sends an image to an agent, and clicks on the thumbnail, the image will open in the entire window. To close this view, the consumer can click on the entire background, and not just on the “x” on the upper right corner.

![](/img/week-of-october-22nd-1.png)

## Enhancements

### Messaging - Automatic Messages - adding support of "\\n" (LE-93733)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>N/A</td>
<td>No</td>
</tr>
</tbody>
</table>

Unified Window needs to align the code to support "\\n" in Messaging Automatic Messages. Backward compatibility should be taken into account for cases of brands that are already using "\\n" inside their predefined content/automatic messages.

## Bug fixes

### Dutch Translation - email and print transcript (LE-92669)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
</tr>
</tbody>
</table>

In the Engagement Window Action Menu the word ‘Transcript’ in Dutch is spelled with two s’s, while it should only be spelled with one ‘s’.

* This is true for both ‘Print transcript’ and ‘Email transcript’.
* The text that shows: ‘Transscript per e-mail’ and ‘Transscript afdrukken’.
* The text that should show: ‘Transcript per e-mail’ and ‘Transcript afdrukken’.

**This issue has now been resolved.**

### French abbreviations for date/month in visitor chat window are incorrect (LE-93926)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>Yes</td>
</tr>
</tbody>
</table>

August is displaying as Aoû in the engagement window, which is not a valid abbreviation for August in French. It should be spelled Août in the engagement window. This is now resolved.

### Window goes blank in conversation when refreshing page (LE-94606)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
</tr>
</tbody>
</table>

A conflict was discovered in code between the window and the customer’s page, causing the window to show as blank after a new page loaded (e.g. refresh), and to show only new messages from the consumer. This issue has been resolved.

### IE11 Placeholder Text continues to show Once Consumer Selects the Field (LE-94424)

<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>SMS</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
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
<td>Yes</td>
</tr>
</tbody>
</table>

In IE11, if you attempt to type a message in the Unified Window, the placeholder text continues to show, and it doesn't clear when the consumer attempts to type their message. **This bug is now resolved.**