---
pagename: Week of May 17th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2021-may-week-of-may-17th.html
isTutorial: false
isNew: false
date: '2021-05-12'

---

These release notes include new features arriving May 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Voice & Video for non web channels
###  Enhancement [Voice & video]
Brands that are using the third party messaging channels will now be able to invite consumers to video or voice calls. Agents will be able to send the video or voice call invitation from the Agent Workspace, while the specific channel will display the invite to the consumer. Consumers will be able to tap on the invite in order to initiate or decline the voice or video call, while the call will be facilitated via a webview outside the messaging app.

### Enablement
First, brands will need to enable the voice and video call feature on the conversational Cloud account:
Voice and video calls are automatically enabled on the brand’s Conversational Cloud account. Agent Profiles and Permissions can be used to allow or restrict the video and voice calls feature for all agents or only a subset of agents. The permissions are part of the Agent profile. The permissions that control this feature are the “Initiate voice conversation” permission to allow voice calls, and the “Initiate live video conversation” permission to allow video calls.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/17mayRN1.png)

### Initiating a call
* Voice or video calls are initiated by the agent by sending an invitation to the consumer on a Messaging channel.
* The consumer has the ability to accept the invitation by clicking on the invitationlink.
* After accepting, the call is initiated and the consumer’s browser will ask for permission to access the camera and/or microphone:
* Consumers can close the webview at any point of the video or voice call while returning to the messaging screen.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/17MayRN2.png)

### Agent view:
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/17mayRN3.png)

### Consumer View:
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/17mayRN4.png)

The video and voice calls will open within CC as a new video widget interface on conversation cloud.
During an active call, both agent and consumer are able to end the call at any time. Furthermore, each participant is able to mute the microphone or disable the camera:

### Limitations
The link can only be sent in English and cannot be translated to a local language of the consumer.

## Advanced keyword search
###  Enhancement [Intent Manager v2.1]

When using the “Add Filter” functionality, a user may now limit their  keyword search to  Consumer messages or Agent messages. This enables users to better locate and aggregate data for conversations that match specific keywords in either the agent/bot portion of the conversation or the consumer portion of the conversation.

### How to enable
Enabled by default

### Dependencies
Intent Analyzer must be enabled.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/Intent_AnalyzerRN5.png)

## Consistent display of metrics by intent
###  Enhancement [Intent Manager v2.1]

Previously metrics such as Confidence Score, CSAT, MCS, NPS, etc, were being sorted and displayed on the dashboard based on the lowest result for the given metric - this resulted in many visualizations (charts) displaying different intents to one another and made trend analysis more challenging.  This change ensures that each visualization displays the same top intents (based on the volume of messages).

### How to enable
Enabled by default

### Dependencies
Intent Analyzer must be enabled.

## Various Bug Fixes for Intent Analyzer
###  Type: Bug fix [Intent Manager v2.1]

1. HTML tag rendering in transcript view
Chat customers of Intent Analyzer may have experienced viewing HTML tags within the Conversation transcript view for messages sent by either consumer or agent - this fix ensures that the text messages are rendered correctly using the HTML tags.

2. Prevent filter popover UI from blocking
In the event the user created a large filter of items, the subsequent UI popover may prevent the user from interacting with other UI elements on the page

3. Date picker modal improvement
On some smaller screens, the date picker modal did not render well - this has been improved and the submit button is now sticky on the bottom of the modal.

4. Removal of ability to query for time ranges greater than 6 months
Due to performance reasons, a limit has been applied on the maximum range the user can query for in the IA dashboard (6 months) - the “Last year” option has been removed and the user will be warned if attempting to select an absolute or relative range that exceeds 6 months.

