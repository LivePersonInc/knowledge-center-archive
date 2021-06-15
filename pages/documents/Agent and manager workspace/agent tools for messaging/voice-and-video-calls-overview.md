---
pagename: 'Voice and video calls overview '
categoryName: Agent & Manager Workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle:
level3: ''
permalink: agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-voice-and-video-calls-overview.html
isTutorial: false
isNew: false

---

## Introduction

Voice and video Calls for messaging allow brands to conduct via voice or video calls with consumers from within a Web Messaging conversation. The feature is integrated into the Agent Workspace and the Engagement Window and requires no additional software. This document provides an overview of the feature, its requirements, and its configuration options.

## Why use voice and video calls?

### Benefits

* **Personalized:** Valuable customers receive personal attention.
* **Efficiency:** Video and voice calls give agents the best tool for achieving first contact resolution and reducing consumer wait time and average hold time.
* **Flexibility:** Consumers expect to have the flexibility to do all types of communication in one place. Now brands can meet their consumer’s expectations by providing them with messaging and call capability all within one place, achieving the complete digital experience.
* **Easy to use:** Calls can be initiated with zero setup time or preparation required on modern desktop and mobile browsers.
* **Secure:** Voice and Video streams are encrypted end-to-end for safety and privacy over a direct, peer to peer connection.

### Use cases

* Solve intricate tech support issues or inquiries that would be hard to describe without visuals. For example, guide a customer on reconnecting the wires on a modem.
* Provide your VIP customers with concierge, premium treatment.
* Replace in-person meetings such as consultations or long application processes with real-time assistance.
* Identify consumers when verification is needed on personal and secure issues.

## Initiating a call

Voice or video calls are initiated by the agent by sending an invitation to the consumer:

**On Web Messaging:**

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/voice-and-video-1.png)

The consumer has the ability to accept or reject the invitation:

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/voice-and-video-2.png)

After accepting, the call is initiated and the consumer’s browser will ask for permission to access the camera and/or microphone:

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/voice-and-video-3.png)

**On Mobile SDK:**

{: .sidebyside} 
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/voice-and-video-mobile-1.png)![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/voice-and-video-mobile-2.png)![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/voice-and-video-mobile-3.png)

**Important to note that on Mobile SDK, the video and voice calls will open within a webview container on top of the messaging interface.** Consumers can close the webview at any point of the video or voice call while returning to the messaging screen.  

During an active call, both agent and consumer are able to end the call at any time. Furthermore, each participant is able to mute the microphone or disable the camera:

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/VoiceAndVideoCallControls.png)

On mobile devices that have a front and backward facing camera, an additional button is shown to switch to the other camera.

## Demo

Here is a demonstration of a video call with consumer on the left and agent on the right.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/VoiceAndVideoDemo.gif)

## Configuration

Voice and video calls are automatically enabled. [Agent Profiles and Permissions](admin-settings-permissions-profiles.html) can be used to allow/restrict video and voice calls for all agents or only a subset of agents. The permissions are part of the Agent profile. The persmissions that control this feature are the “Initiate voice conversation” permission to allow voice calls, and the “Initiate live video conversation” permission to allow video calls.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/voice-and-video-agent-profile-permissions.png)

### Mobile SDK configuration

Mobile SDK configuration allows brands to decide on the video/voice call invitation look and feel (invitation background color, border color and shape, button colors, as well as the webview bar colors and more). To review the full configurations see the Developer Center article for [iOS](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-advanced-features-voice-and-video.html) and for Android (coming soon). 

### Advanced configuration

The following advanced configuration options are available. Simply ask your LivePerson contact or support representative to make the changes in your account's backend configuration console.
* Make every video call start with the agent camera disabled.
* Make every video call start with the consumer camera disabled.
* Disable peer to peer connections and force all video and audio data to be relayed via a TURN server.
* Specify your own STUN and TURN servers which should be used for the WebRTC audio and video streams.
* Disable voice and/or video calls so that even agent administrators cannot enable it using profiles.
* Customize all text in the invitation and system messages inside the transcript.
* Enable integration of a JavaScript tracking library on the consumer side. The choices are:
  * Google Analytics
  * Piwik Analytics
  * Webtrekk Web Analytics
  * Tealium

For support calls on different devices and networks, additional video relay infrastructure is required to cover scenarios in which a peer to peer connection is not possible. It is recommended to work with the LivePerson support team to verify that your network infrastructure can support peer to peer connections. On the consumer side, this cannot be guaranteed and calls might still require a relay server. For testing purposes, LivePerson will provide such a server. For production deployments, brands can set up their own infrastructure. Your LivePerson representative can assist you with that step and also outline alternatives to hosting your own infrastructure.

## Reporting

Video and Voice call reporting metrics are available on the Analytics Builder. See the new metrics in the [reporting metrics section](data-reporting-reporting-metrics.html). The new metrics are defined as “Collaboration session”. 


## System requirements

**Conversational Cloud**
* The feature can only be used within Web Messaging conversations. Chat is not supported.
* The Engagement Window must be deployed in the embedded state. Otherwise, setups using the Messaging Window API can support Voice & Video Calls by following these instructions from the [Developer Center](https://developers.liveperson.com/messaging-window-api-tutorials-voice-and-video-calls.html).
* Voice & Video Calls are enabled by default in your LivePerson Conversational Cloud account. Please contact your LivePerson account manager to have this feature enabled or disabled for you.

**User (Agent/Consumer):**
* Agent Workspace agents must use Chrome, Firefox, Safari or Edge (Chromium) browsers. Mobile agents on the Agent App can use Android or iOS.
* On consumer side, Chrome (Desktop/Android), Firefox (Desktop), Safari (Desktop/iOS) and Edge (Chromium, Desktop) are supported. Only the two latest versions of those browsers are supported.
* Agent and consumer must have a microphone and a camera (for calls with video) connected to their device.

**Your website:**
* Your website must use HTTPS. HTTP-only websites are not supported.
* All website pages must be tagged with the LivePerson monitoring tag. This includes the page from where the session is started, and all pages which are visited during navigation.
* The LivePerson tag must be deployed in the topmost frame of the page.
* Your website must adhere to HTML, CSS and JavaScript standards
**Note:** Your website should not overwrite core JavaScript functions, for example window.addEventListener.

**Network:**
* The video and audio streams are transferred via a peer-to-peer connection between consumer and agent. It is recommended to check that the network on agent side supports WebRTC based peer-to-peer connections (https://test.webrtc.org/).
* If there is an extremely high network latency or unstable network connection, the call may be dropped.  
* For calls with both voice and video, the agent and the consumer are recommended to have an available bandwidth of 2,600 kbit/s upstream and downstream. The call will still function with 1,100 kbit/s but the quality will be degraded automatically.
* For voice only calls, a bandwidth of 600 kbit/s upstream and downstream is sufficient.

**Firewall:**
* Firewalls must allow for WebRTC to create both a peer-to-peer connection or a relay connection for the video and audio data. Peer-to-peer because it has the least latency and relay because consumers can have incompatible networks.
* Allow WebRTC, STUN and TURN traffic on the appropriate ports:
  * 443
  * 3478 TCP & UDP
  * 5004 UDP
  * 5349 TCP
  * 10,000 - 60,000 UDP
* Allow relay connections to the configured STUN and TURN servers. Details on the default servers (provided by Twilio) can be found here: https://www.twilio.com/docs/stun-turn/regions.

## Security

### Data passed through the platform

The lifetime of session data on the server is limited to the length of a voice/video call. Session data is stored transiently in memory and is automatically released at the end of the call. Independently, event data, for example, the length of a session and the number of participants along with logs, is permanently stored on the LivePerson systems.

### WebRTC Security

Voice and Video Calls for Web Messaging uses the WebRTC standard (https://webrtc.org) for real-time audio & video transmission. WebRTC uses several standardized protocols for secure transmission.

1. Datagram Transport Layer Security (DTLS) is used to negotiate the secret keys for encrypting media data and for secure transport of application data.
2. Secure Real-Time Transport (SRTP) is used to transport audio and video streams.
3. Stream Control Transport Protocol (SCTP) is used to transport application data.

All data is sent end-to-end encrypted between participating peers. Even if a relay server (TURN server) is used, the traffic cannot be intercepted and decrypted.

### Data encryption

HTTPS is required by default for communication between browser clients with the Voice and Video service (TLS 1.2, AES 128bit, ECDHE_RSA).

## Limitations

1. Voice and Video calls are only supported on messaging - not live chat.
2. Only the Web Messaging and Mobile SDK channels are currently supported. Agents will not be able to send invitations to consumers on other channels (such as WhatsApp, SMS or Facebook).
3. Invitations can be sent to unsupported browsers, but the call will not start and both agent and consumer will be shown an error message.
