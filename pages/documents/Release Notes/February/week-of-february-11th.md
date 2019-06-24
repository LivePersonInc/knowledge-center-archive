---
pagename: Week of February 11th
categoryName: Release notes
subCategoryName: 2019
indicator: chat
subtitle: ''
level3: February
permalink: release-notes-2019-february-week-of-february-11th.html
isTutorial: false
isNew: false
date: 2019-02-19 13:01:46 +0000

---
These release notes include new features arriving to LiveEngage during February 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionalities

### WhatsApp Business: Adding the consumer name in the agent workspace (LE-97122)

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
</tr>
</tbody>
</table>

WhatsApp now supports passing the consumer's profile name (if the user permits sharing it in their app's privacy settings), allowing brands that are using the WhatsApp Business connector to review the name in the open connections list, in the consumer info widget view in the agent workspace, as well as at the top of the agent's messaging conversation window.

The connector will expose the consumer’s name (as registered by the users in their WhatsApp app) in the UI, which will be available and displayed as follows:

* Agent or bot will be able to view the consumer's WhatsApp profile name
  * The profile name will be presented in the agent workspace on:
    * Open connections -> consumer name
    * Consumer info widget -> consumer name
    * Above the agent's messaging conversation window

<br/>
**Configuration:** Brands will be able to configure or remove this feature (if for any reason, the contact center agents are not allowed to view the consumer name).

* If the feature is enabled - the consumer’s WhatsApp name will be visible in all the LiveEngage interface locations (Open connections -> Consumer Name, Consumer Info widget -> Consumer Name, above the agent's messaging conversation window)
* If the feature is disabled - the consumer’s WhatsApp ID (Phone Number) will be presented in the "Consumer name" field - as it is displayed today.

<br/>
**Note:** To enable this feature, please speak to your LivePerson representative.

### Secure form (PCI) support for WhatsApp Business and Google RCS (94882) (CX-73, CX-74)

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
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>

There is now support for [secure forms](security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html) for the WhatsApp Business and Google RCS connectors. This allows brands to perform identification and authorization, pass payment details, share PII information to generate leads, or to perform a registration process during a conversation in a PCI compliant environment.

PCI secure form for messaging connector channels will expand brands’ business use cases on channels that do not have the native secure form capabilities, allowing them to build a conversational commerce strategy with LiveEngage.

#### Connectors support for secure forms

For messaging connectors, secure forms will be sent to the relevant channel via an external link. The consumer will be able to tap on the link, which will navigate them to the device default browser, where they will be able to see the form, fill it and submit.

The design for the form in the messaging connectors experience is inherited from the engagement window default design.

**Secure form flow for connector channels:**

* Connector channels that will support secure forms in upcoming releases: Facebook Messenger and Apple Business Chat
* WhatsApp Business and Google RCS will support secure forms via an external clickable link - all future channels will be supported in the same manner, and will only present the link to the consumer which will allow him to tap and open the secure form on the device browser
* Agents will be able to send the secure form in the same manner that they send it in web messaging or in-app conversations - via the predefined content widget
* Consumer will receive the secure form sent by the agent on the relevant channel via a link (view the user flow in the below screenshots)
* Consumer will be able to submit the form, and will receive a push notification via the connector channel he/she is conversing from, indicating the form was received by the agent, with the following message:  
  “The following secure form has been submitted: <Secure form name>”
* Agent will be able to view the secure form answers in the same manner that he/she does today for in-app and web messaging. This text and view will appear to the agent:
  * The Secure Form \[secure form name\] has been submitted. View secure form \[contains clickable link to view secure form content\].
* Agent conversation transcript indicators for connectors secure forms will show the following status:
  * Sent by the agent
  * Received by the consumer
  * Submitted by the consumer

**How to enable:** To configure this feature, please speak to your LivePerson representative.

For more information, please see the [secure form configuration guide](security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html)

#### Limitations

* Secure form enablement is account-wide.
* Secure forms are general (not specific per skill).
* Invitation text can be customized on the In-App SDK only.
  * Connectors text is currently fixed to: “<secure form name>: <secure form link>”
* Secure forms are created by the LivePerson account team.
* Data submitted in the secure form is only retrievable by the agent for the duration of the messaging session it was submitted in (until the conversation is closed by the agent or auto closed), and only to the agent that sent the form.
* Secure forms cannot be shared by bots.
* Consumer cannot open the same secure form more than once - If a consumer clicks in the secure form link, closes it before submitting, and tries to click on it again, they will receive an error message.
* Secure forms for connectors will not be available to consumers to open and fill on desktop.
* Currently, reporting will be carried out on a per-need basis through the analytics team.
* Additional, smaller limitations for connector channels are shared in the configuration guide.

#### **Screenshots**

![](/img/week-of-february-11th-1.png)

![](/img/week-of-february-11th-2.png)

![](/img/week-of-february-11th-3.png)

![](/img/week-of-february-11th-4.png)

### Auto close per skill

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

Today, brands use a single time interval definition to determine how long after a conversation becomes inactive it should be closed. This single definition doesn’t take into account the fact that different skills have a different conversation pace and therefore should have different time intervals for auto close. Having such a capability will give brands a higher level of flexibility to determine when a conversation should be closed and avoid scenarios where conversations get closed too soon. With auto close per skill, brands are able to set a different auto close time period parameter per skill, and thereby improve the consumer experience as well as their operational parameters.

**Screenshots**

![](/img/week-of-february-11th-5.png)

### Post Conversational Survey - Added search capability

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

Enable brands to gain new insight from conversations in which the post conversation survey was configured by adding a new filtering capability to the All Connections tab in LiveEngage.

This new capability will allow brands to filter out and view specific conversations based on their survey outcomes, word match in transcripts and CSAT, NPS and FCR answers.

This capability enables brands to track post conversation results more easily and to train their agents to improve in specific areas.

**Limitations**

For Text based channels such as SMS and ABC the new filter can display only conversations in which a Post Conversation Survey took place, however, filtering for specific questions/answers is not available.

**Screenshots**

![](/img/week-of-february-11th-6.png)

### Recommended Actions widget with Maven

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

Agent Assist is a widget within the LiveEngage UI that provides suggestions for relevant automations (bot users) that the conversation can be transferred to. This feature provides a single button for agents to transfer to suggested bot and provide feedback on the suggestion. Suggestions are provided for each incoming consumer message.

**Limitations**  
Setup and configuration is currently not open to brands, must be done by LP internally. New conversations must have a default skill/engagement with skill that is assigned only to human agents, otherwise bots may answer incoming conversations themselves.

**Screenshots**

![](/img/week-of-february-11th-7.png)![](/img/week-of-february-11th-8.png)

### Step up

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

This feature is to support the step up process in the agent workspace (LE UI). When an unauthenticated messaging conversation is stepped up, the agent workspace will refresh the conversation in the UI, so that the authenticated information about the conversation and the consumer will be available for the agent.

**Limitations**

Refreshing the conversation will create a new ‘orb’ for it, and will place it at the end of list (left most position).

## Bug fixes

### Unselectable element on customized overlay engagement (AE-1676)

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

When creating a customized overlay engagement in the engagement studio,

dragging an element to the top left corner (for example, a text field) makes the element unselectable in some scenarios. This issue is now resolved.

### UI Auto Messages - The dynamic text for 'Agent Nickname' displays wrong name (AE-1866)

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

When setting the dynamic text for the “Agent Nickname” in Auto Messages for messaging, the dynamic text in the drop down menu actually states “Agent Name”.

Name and Nickname are two different fields in LiveEngage - there should be a consistency between the options for the ‘Dynamic field’ menu vs. the actual parameter that is used.