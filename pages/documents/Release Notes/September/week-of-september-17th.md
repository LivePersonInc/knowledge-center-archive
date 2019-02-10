---
pagename: Week of September 17th
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: ''
level3: September
permalink: release-notes-2018-september-week-of-september-17th.html
isTutorial: false
isNew: false
date: 2019-02-10 11:56:23 +0200
published: false

---
These release notes include new features arriving to LiveEngage during August 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .notice}
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Working Hours Management

<table>
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
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>N/A</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

Working hours management is an automatic off-hours management process. Brands now have the option to configure the working hours at the account level and the individual skill level.

The configuration of scheduled work days allows brands to set hours of operation for specific days of the week and assign them as the account's default settings or for each individual skill, which overrides the default settings. During the specified hours of operation, consumers will receive working hours auto messages and the expected time to response message for the skill as defined in the account. 

Outside of the specified hours of operation, consumers will receive off hours auto messages and the expected time to response including the time until the next shift begins. The expected time to respond is also available for the agent, so it is clear to him when the consumer is expecting his reply.

The configuration of Special Occasions allows brands to set specific dates in which there is an exception to the hours of operation defined in the work days. For example, working hours during public holidays. The expected behavior on the visitor side as far as automatic messages and time to response is exactly the same as work days.

**Limitations**
* **Off-hours Mid Conversation Automatic Message displays the wrong Expected Time To Respond:**  
  When using the workdays/special occasions automatic scheduling, the “Off hours mid conversation” automatic message may not work as expected - it might not be sent when required or sent when shouldn’t be. Moreover, the time to respond displayed to the consumer might be incorrect.
* **Mark as urgent button in the engagement window will not work as expected:**  
  When using the workdays/special occasions automatic scheduling feature, the “Mark as urgent” button on the consumer window may be displayed to the consumer also during off hours when it should not be displayed, or may be unavailable during working hours when it should be displayed.  
  Temp work around: Remove the mark as urgent button from the engagement window in the window studio.**
* **No audit trail on account level configuration.** Audit trail exists only for skill level assignments. For the skill level working hours - assigning a working hours item will be audited, however, changing an existing item is not audited.
* The maximum length for a special occasion with shift status set to **OFF** is 30 days.

<br/>
Defining a new scheduling item:

![](/img/week-of-september-17th-1.png)

Defining the account level working hours:  
![](/img/week-of-september-17th-1.png)

### Campaign Scheduling

<table>
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
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>N/A</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>

Until now, LiveEngage’s campaign timeframe management has only supported the option to define the campaign’s start date and end date, with no option to change the active hours per each day of the week.

Campaign scheduling gives brands maximum flexibility with the option to control the campaign’s availability based on operational hours. Campaign managers will now be able to define different activation hours per different days of the week, for easier control of when new engagements will be displayed to consumers visiting the brand’s website or mobile app.

**Common use cases:**
1. Set different campaign activation hours for different days of the week
2. Prevent engagements from being displayed on weekends
3. Stop serving new engagements 15 min before a shift ends, in order to prevent queues from growing (queue cleanup)
4. Messaging customers with short SLA experience (synchronous messaging)

![](/img/week-of-september-17th-3.png)

![](/img/week-of-september-17th-4.png)

### Unified Window: Configure availability check when window opens (LE-90428)

<table>
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

In order to ensure an optimal experience for consumers when clicking on engagement buttons, the window performs an additional availability check. This availability check is performed on the main skill defined for the engagement, even if the engagement has a pre-chat survey with a routing question. Due to this behavior, some consumers cannot connect with the requested skill due to lack of availability of the main skill.

With this new configuration, brands can decide whether the window should continue to perform this additional availability check, or skip it and rely only on the first availability check, which was done before showing the engagement button.

{: .notice}
**This feature requires enablement** - please contact your LivePerson account team.

### Secure Form (PCI) confirmation screen will show only for 3 seconds (LE-93676)

<table>
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
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>

Users who have successfully submitted a Secure Form are presented with a confirmation screen. This screen will display until the user closes it by clicking on the “X” on the widget corner.

On mobile, the confirmation (as the whole secure form) covers the conversation window. To help users return to the conversation more quickly, the confirmation will close automatically after 3 seconds. Clicking on the “X” before that will allow the user to return to the conversation more quickly.

## Enhancements

### Unauthenticated web messaging alongside authenticated

<table>
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
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

1. Support logout on Single Page Application (LE-93123) - When implementing our service on a Single Page Application, the brand is requested to use newPage(document.location.href) after login and logout.
   With this new feature, newPage will replicate the experience of the web of actual navigation between authenticated and unauthenticated pages.
2. Remove confirmation when closing auth->unauth error (LE-92065) - When an authenticated user navigates from an authenticated page to an unauthenticated page, the user is presented with an error message.
   Starting this release, the user can close this error message by clicking on the “x” on the top right corner, **_without having to confirm._**
3. When closing auth->unauth, error shows until user closes it (LE-91896) - When the window is shown on multiple windows, and the user navigated from an authenticated page to an unauthenticated page, the error is presented to the user only until the user closes it by clicking on the “X”.

### Photo Sharing in Web Messaging

<table>
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
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>


1. Preview image before sending (LE-87380, LE-87381) - After selecting an image to send or taking an image with the device’s camera, the user can preview the image before sending to the agent, to ensure that this is the correct image.
2. Add caption to image (LE-87382) - In the image preview, the user can add a caption to the image, which will be displayed in the conversation on the same bubble of the image.
3. Retry sending image on bad connection (LE-87386) - When the user has a bad connection, the window will try to resend the images two additional times (on top of the original send) before showing the user the retry icon to resend manually when the connection is restored.
4. Drag and drop image to send (LE-88210) - Users on a desktop computer can drag images, and drop them in the window to send to agent. This action replaces the selection of images from the file system.After the image is dropped, the image preview will be shown to the user.
5. Resize image before sending (LE-91170) - In order to reduce the loading time and storage size, images that are larger than the defined size limit will be automatically resized. The default size limit is 800 pixel of the image’s longer dimension. Brands can change the limit by setting it on the "resizeImage" taglet configuration.

## Bug fixes

### Routing bot doesn’t respond to transfer action (LE-93567)

<table>
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
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>


If a consumer has a bad connection and clicks on an action on a card, the event is not sent from the client and the bot ignores the action (even if a text is published).

To resolve this bug, a retry mechanism was added to the card’s action events, ensuring that even with bad connection the event is sent.

### Engagement doesn’t show when browser blocks 3rd party cookies and Cross Domain is enabled (LE-93572)

<table>
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
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>

When the browser blocks 3rd party cookies and the brand has enabled the cross domain feature, engagements aren’t displayed. This bug has been resolved.

### Structured Content in Chat doesn’t send metadata (LE-93177)

<table>
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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>N/A</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>

Structured Content in Chat did not send the metadata as expected by the backend service. This bug has been resolved.