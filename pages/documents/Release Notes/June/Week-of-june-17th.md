---
pagename: Week of June 17th
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: June
permalink: release-notes-2019-june-week-of-june-17th.html
isTutorial: false
isNew: false

---
These release notes include new features arriving to LiveEngage during June 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Offsite engagements for messaging

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

Offsite engagements were available for web chat only until now, and will now be supported for web messaging as well. Brands can offer web messaging by adding an engagement link from any location and through media including: social media sites, email, digital advertising, and more. Brands can use this link anywhere they want to engage with their consumers. When setting up an offsite engagement, brands create a URL that will refer consumers to web messaging.

For more information on offsite engagements and how they are configured, click \[here\](<div class="tablecontainer"> <table class="releasenotes"> <thead> <tr class="categoryrow"> <th>Web Messaging</th> <th>Mobile App Messaging</th> <th>Twilio</th> <th>Facebook Messenger</th> <th>ABC</th> <th>Line</th> <th>Google RCS</th> <th>Google My Business</th> <th>WhatsApp Business</th> <th>CM</th> <th>WeChat</th> <th>Chat</th> </tr> </thead> <tbody> <tr> <td>Yes</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>No</td> <td>Yes</td> </tr> </tbody> </table> </div>).

**Screenshots**

**Image 1:** Messaging engagement is available from the engagement type dropdown

![](/img/week-of-june-17th-1.png)

**Image 2:** Set up landing page when messaging engagement is inactive

![](/img/week-of-june-17th-2.png)

## Ability to close the window once conversation is closed

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

Today, once consumers decide to close a conversation, the conversation is closed but the window remains open. So consumers still need to click on the x button in order to close the window.

This feature provides brands with the ability to set the window behavior so that once the consumers closes the conversation, the window will be either closed automatically or kept open. The default behavior is to keep the window open.

**To enable:**

* Log into [LiveEngage](https://authentication.liveperson.net/)
* Go to Engagement Window Studio
* Click on “Open additional window settings” on the top right
* Click on “Look and feel” section
* Under “Close window upon end of conversation”, choose from one of the following values from the dropdown
  * Keep window open
  * Close window
* Click on “Save”

**Limitations**

* Desktop pop-out engagement window will not be supported

**Screenshots**

**Image 1:** “Open additional window settings” button in Engagement window studio

![](/img/week-of-june-17th-3.png)

**Image 2:** Choose “Close window upon end of conversation” behavior

![](/img/week-of-june-17th-4.png)

## Ability to use the webpage font as the window elements font

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

Brands would like the engagement window to have the same look and feel as their website. The font that brands use on their website might not be one of the standard fonts that we provide out-of-the-box in LiveEngage.

This feature allows brands the ability to configure whether to inherit the font style from their webpage for the different engagement window UI elements, without needing to specify the exact font. When brands choose to inherit the font from their website (checkbox is checked), the fonts within the window will be automatically inherited from the webpage the window is launched from that has the most frequently used fonts for the selected window elements. If the webpage font cannot be retrieved, the font that is configured as one of the standard out-of-the-box fonts will be used as a fallback (as shown in the preview). The default behavior would be to use the specified font configured for each element (checkbox is unchecked).

This configuration will be available for the following elements that have font configuration in the engagement window studio:

* Title bar
* Message info
* Automatic messages
* Agent bubble
* Visitor bubble
* Text area
* Menu (under Menu look and feel)

This configuration is available for both chat and web messaging and applies for desktop and mobile. Please note that the pre-chat survey and offline survey font will be inherited, as today, from the automatic messages font settings and post-chat survey font will be inherited from the agent bubble’s font, as it is today.

**To enable:**

* Log into [LiveEngage](https://authentication.liveperson.net/)
* Go to Engagement Window Studio
* Select the relevant element, as listed above
* Click the “Inherit font from webpage” checkboxFallback skill per skill

**Limitations**

* Desktop pop-out engagement window will not be supported

**Screenshots**

**Image 1:** Configuring font style for Title bar with a specific font (default) in Engagement window studio

![](/img/week-of-june-17th-5.png)

**Image 2:** Configuring font style for Title bar using inherited font from the webpage in Engagement window studio.

![](/img/week-of-june-17th-6.png)

**Image 3:** Engagement window inheriting font from webpage with different font than settings

![](/img/week-of-june-17th-7.png)

## New style for agent and consumer bubbles

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

This feature allows brands to configure the style for the agent and visitor bubbles of the engagement window.

Brands can select from one of the following options:

* Side Arrow - this is the current style and is the default
* Three Corner Rounded

This configuration is available for both chat and web messaging, and for both desktop and mobile.

**How to enable:**

* Log into [LiveEngage](https://authentication.liveperson.net/)
* Go to Engagement Window Studio
* Click on Agent/Visitor bubble
* Select the bubble style from the dropdown

**Screenshots**

**Image 1:** Configuring style for visitor and agent bubbles in Engagement window studio

![](/img/week-of-june-17th-8.png)

**Image 2:** Engagement window with three corner rounded style for visitor bubble and side arrow style for agent bubble

![](/img/week-of-june-17th-9.png)

## Ability to choose the embedded window size

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

This feature allows brands to configure the window size of the engagement window.

Brands can select from one of the following options:

* Small - this is the current size (height: 400px, width: 280px) which is also the default
* Large - (max 580px, width: 340px)

This configuration is available for both chat and web messaging, on desktop, and applied also for chat pre, post and offline surveys.

**How to enable:**

* Log into [LiveEngage](https://authentication.liveperson.net/)
* Go to Engagement Window Studio
* Go to “Look and feel customization” section
* Select the window size from the dropdown list

**Limitations**

* The large window size is not supported for desktop pop-out engagement window.
* The engagement window studio preview is not supported.

**Screenshots**

**Image 1:** Configuring window size in Engagement window studio

![](/img/week-of-june-17th-10.png)

**Image 2:** Small/Large window sizes

![](/img/week-of-june-17th-11.png)

![](/img/week-of-june-17th-12.png)

## New read indication style

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

Brands can choose from the following options in the “Read Indication” dropdown list:

* Text - this is the current style and is the default
* Visual
* None

**How to enable:**

* Log into [LiveEngage](https://authentication.liveperson.net/)
* Go to Engagement Window Studio
* Click on the visitor bubble
* Select read indication style from the dropdown

**Limitations**

* Read indication is available for web messaging only.

**Screenshots**

**Image 1:** Configuring read indication in Engagement window studio

![](/img/week-of-june-17th-13.png)

**Image 2: Read indication is set to Text/Visual**

{: .sidebyside}
![](/img/week-of-june-17th-14.png)![](/img/week-of-june-17th-15.png)

**Image 3:** Visual read indication icons

![](/img/Screen Shot 2019-06-13 at 1.09.28 PM.png)

## \[ABC\] ApplePay Enhancement Widget

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
<td>Yes</td>
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

Currently, brands that are looking to use Apple Pay must have a bot added to the conversation via the Agent SDK. To reduce implementation efforts, the ABC Payment response will be added to the Agent Widget SDK. Enhanced security: the new flow will provide a way for brands to sign the payload, which will be verified by the connector before sending out to Apple

* The Apple Pay responses will be exposed to the Agent Widget SDK public model structure
* Brands will be able to expose the Apple Pay response via the Agent widget SDK methods to their backend auth servers in order to validate the token against their services
* Brands will be able to fetch user's payment information from their auth services after validating the token, while exposing the data to the agent on LE via a Customized Agent Widget
* If the payment fails, brands will be able to expose the failed response via the Agent Widget SDK and present the error response to the agent while allowing the agent to help the consumer to perform the payment successfully.
* The Apple Pay message response will be exposed to the agent widget SDK only in case the brands will use the payload signing mechanism to secure the data.

## Facebook Handover Protocol

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
<td>Yes</td>
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

Facebook Handover Protocol enables two or more apps to participate in a conversation by passing control of the conversation between them. This feature makes it possible to simultaneously use a 3rd party bot, outside of LiveEngage, for handling automated responses, and use LiveEngage for customer service with human agents.

* By default, all messages are sent to the Primary Receiver app.
* When control of the conversation is passed to another, the Facebook Messenger Platform will send messages from the conversation to it instead.
* Only one app may control the conversation at a time.
* All apps that do not have control of the conversation may continue to listen to the conversation by subscribing to the standby webhook event.

## WhatsApp Business source

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

We are adding a WhatsApp Business connector into the self-service Data Source-->Conversations Sources area, to accompany Facebook Messenger, Twilio, CM, etc.

Messaging clients will now be able to go through a more automated process for submitting their candidacy to be a WhatsApp early adopter. The new connector will guide them through the application process, and they will be able to check their status through approval and go live.

**How to enable:**

The WhatsApp Business Conversation Source will be enabled automatically for all messaging clients.

**Screenshots**

![](/img/week-of-june-17th-16.png)

## CoBrowse "Full screen"

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

During a CoBrowse session, agents can now “maximize” the viewing area so that it uses the entire width of the screen. This covers the engagement area and all the white space within the agent workspace. Agents can find the full screen button by mousing over the same notch at the top which is used for ending the session. The same button is then used to minimize the CoBrowse widget back down to its original size. It will also automatically minimize when navigating to a different conversation. Note also that this works for video calls on web and in-app messaging.

**How to enable:**
This feature is enabled by default.

**Limitations:**
This feature is not available for Internet Explorer 11 users on Windows 7 or 8. The button be completely hidden for agents on that browser and operating system at the same time. Note that Internet Explorer 11 users on Windows 10 will be able to use the feature.

**Screenshots**

## Multi-factor authentication - Add ‘reset mfa configuration’ toggle to ‘Edit user’ page

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

Self service ability for LE users with the ‘Edit Users’ permission, to activate ‘reset mfa token’ option.

Button state will be off by default. If activated (set to on), it will stay in the ‘on’ state until the related user will complete the MFA setup flow.

**How to enable:**
Will be available if MFA is enabled. (Multi-factor authentication section will not exist in UI unless MFA is enabled)

**Please note:** This feature is available **only** on accounts that have been migrated to login via the New Login Service **and** having the ‘Multi-factor authentication’ login policy activated.

**Screenshots**

![](/img/week-of-june-17th-18.png)

## Queue prioritization - Priority based on consumer attributes

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

Enable brands to define business rules that would assign extra priority to specific conversations based on the consumer engagement attributes. The supported consumer attributes according to which the new business rules can be defined are listed in this link under:

* Consumer Info
* Personal Info

Example use case - “If the customer associated with a conversation is either a VIP customer OR has a balance in his account of more than 2000 units OR registered with the company before 10.15.2014, assign a velocity of 15 to the conversation.

To set up please contact your LivePerson account team.

## Rollover - support skill change/transfer and agent transfers for Answering Service

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

As part of the answering service this feature has been added with the ability to transfer a conversation in the answering service account by skill and by an agent.This affects changes in Routing and the back-end messaging server. This feature is available only to those who have this feature configured. Please contact your account team to configure.

## Agent manager conversations filter

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

This enhancement allows agent managers to get conversations from their managing groups and sub-groups.

## Agent change group

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

Agents will see conversations that are assigned to them. When an agent changes group, there may be some conversations not closed before changing groups. In that case conversation group will be different to the assigned agent's group. These conversations should be visible to the agent manager who manages the conversation's group and assigned agent of the conversation.

## Facebook Handover protocol support

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

<td>Yes</td>

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

The Facebook handover protocol enables several Facebook Apps to collaborate within a single messaging thread. For example, it allows businesses to incorporate bots and human agents responses that are powered by different apps into a seamless conversation experience.

Facebook Handover Protocol enables two or more apps to participate in a conversation by passing control of the conversation between them.

This feature makes it possible to simultaneously use a 3rd party bot, outside of LiveEngage, for handling automated responses, and use LiveEngage for customer service with human agents.

By default, all messages are sent to the Primary Receiver app

When control of the conversation is passed to another, the Facebook Messenger Platform will send messages from the conversation to it instead.

Only one app may control the conversation at a time.

All apps that do not have control of the conversation may continue to listen to the conversation by subscribing to the standby webhook event.

**Dependencies**

* LE UI 10.8
* UMS 3.21

## Add Error to Apple Pay Response

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

<td>Yes</td>

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

Currently brands that are looking to use Apple Pay must have a bot added to the LE conversation via the Agent SDK. To reduce implementation effort, the ABC Payment response will be added to the Agent Widget SDK. The new flow will provide a way for brands to sign the payload, which will be verified by the connector before sending out to Apple.

* The Apple Pay responses will be exposed to the Agent Widget SDK public model structure
* Brands will be able to expose the Apple Pay response via the widget SDK methods to their backend auth servers in order to validate the token against their services
* Brands will be able to fetch user's payment information from their auth services after validating the token, while exposing the data to the agent on LE via a Customized Agent Widget
* If the payment fails, brands will be able to expose the failed response via the Agent Widget SDK and present the error response to the agent while allowing the agent to help the consumer to perform the payment successfully.
* The Apple Pay message response will be exposed to the agent widget SDK only in case the brands will use the payload signing mechanism to secure the data.

## Minimize icon changes showing in wrong place

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

Removed the “Minimize icon” from “Text area” in the engagement window studio.

## Removed the “Minimize icon” from “Text area” in the engagement window studio.

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

Offline survey email settings don’t know how to handle special characters. This has been resolved.

## Fix reply indication with audio and tooltip for consumer messages on WhatsApp

### Type: Bug fix

When consumer replies to a message and his reply message is an audio message, the reply icon is missing. Fixed the tooltip alignment for reply icon.

## Post conversation survey

### Type: Bug fix

Post Conversation Survey (PCS) was not triggered for accounts post enablement of the agent group pre filtering feature. The PCS feature should now work for agents from any group if PCS feature is enabled for the account.

## Automatic messages for non-main-group assigned agents

### Type: Bug fix

Automatic messages were not working for non-main-group assigned agents. Controller bot- auto message feature should now work for agents from any group if the auto-message feature is enabled for the account.

## File sharing push notification

### Type: Bug fix

File sharing push notifications prepend the camera emoji to caption text. This behavior should not be implemented in the back-end service. The callers of our API should not expect the text to be mutated as it moves through our system. If a camera emoji is needed in a notification somewhere, it should be up to the app/client to add it.

Additionally, we are prepending the sender name. If the caption is blank, we are substituting "sent you an image". Recently we added support for more file types (doc, ppt, xls, etc.) to file sharing. This message is no longer completely accurate.

Requirements & design work may be necessary here. If there are any implementations dependent on / expecting this behavior (e.g. agent mobile app), we may need to coordinate with that team to alter this behavior. Ultimately, from a UMS perspective, we should not be performing these changes in the back-end.

## Send CustomerInfoEvent and PersonalInfoEvent from SetUserProfile

### Type: Bug fix

In the All Connection page within LiveEngage, all consumers whose conversation was created from SendAPI, displayed as Visitor instead of their original name. The bug has now been resolved.

## Conversations stuck in the queue after transfer/Back2Q

### Type: Bug fix

Intermittently when conversations get transferred or returned to queue, routing service throws an exception on an "undefined" agent name. Following this exception the conversations doesn't get routed to an agent and remains stuck in the destination queue. This bug has now been resolved.