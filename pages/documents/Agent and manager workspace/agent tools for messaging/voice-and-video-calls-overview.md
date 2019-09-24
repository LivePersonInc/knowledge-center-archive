---
pagename: CoBrowse for messaging
categoryName: Agent & manager workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: 
level3: ''
permalink: agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-voice-and-video-calls-overview.html
isTutorial: false
isNew: false

---

## Introduction

The Voice & Video Calls for Web Messaging solution allows brands to conduct voice or video calls with consumers from within a web messaging conversation. The feature is integrated into the LiveEngage Agent Workspace and the Engagement Window and requires no additional software. This document provides an overview of the feature, its requirements and its configuration options. 

## Why use voice and video calls?

### Benefits

* **Personalized:** Valuable customers receive personal attention.
* **Efficiency:** Video and voice calls give agents the best tool for achieving first contact resolution and reducing consumer wait time and average hold time.
* **Flexibility:** Consumers expect to have the flexibility to do all types of communication in one place. Now brands can meet their consumer’s expectations by providing them with messaging and call capability all within one place, achieving the complete digital experience.
* **Easy to use:** Calls can be initiated with zero setup time or preparation required on modern desktop and mobile browsers.
* **Secure:** Voice and Video streams are transmitted peer to peer (if possible) and are encrypted end-to-end.

### Use cases 

* Solve intricate tech support issues or inquiries that would be hard to describe without visuals. For example, guide a customer on reconnecting the wires on a modem.
* Provide your VIP customers with concierge, premium treatment.
* Replace in-person meetings such as consultations or long application processes with real-time assistance.
* Identify consumers when verification is needed on personal and secure issues.

## Initiating a call

Voice or video calls are initiated by the agent by sending an invitation to the consumer: 

![](img/voice-and-video-1.png) 

The consumer has the ability to accept or reject the invitation:

![](img/voice-and-video-2.png) 

After accepting, the call is initiated and the consumer’s browser will ask for permission to access the camera and/or microphone:

![](img/voice-and-video-3.png) 

During an active call, both agent and visitor are able to end the call at any time. Furthermore, each participant is able to mute the microphone or disable the video:

![](img/voice-and-video-4.png) 

On mobile devices that have a front and backward facing camera, an additional button is shown to switch to the other camera.

## Requirements 

**LiveEngage**
* The feature can only be used within web messaging conversations. Chat is not supported.
* The Engagement Window must be deployed in the embedded state.
* By default, voice & video is not enabled in your LiveEngage account. Please contact your LivePerson account manager to have this feature enabled for you.

**User (Agent/Consumer):**
* The Agent must use Chrome, Firefox or Safari.
* On Visitor side, Chrome (Desktop/Android), Firefox (Desktop) and Safari (Desktop/iOS) are supported. Only the two latest versions of those browsers are supported and have been tested. 
* Agent and Visitor must have a camera and/or microphone connected to their device.

**Your website:**
* Your website must use HTTPS. HTTP-only websites are not supported.
* All website pages must be tagged. This includes the page from where the session is started, and all pages which are visited during navigation. 
* The LivePerson tag must be deployed in the topmost frame of the page. 
* Your website must adhere to HTML, CSS and JavaScript standards
**Note:** Your website should not overwrite core JavaScript functions, for example window.addEventListener.

**Network:**
* The video and audio streams are transferred via a peer-to-peer connection between consumer and agent. It is recommended to check that the network on agent side supports WebRTC based peer-to-peer connections (https://test.webrtc.org/).
* If there is an extremely high network latency or unstable network connection, the call may be dropped.  
* The agent and the consumer have an available bandwidth of 2,000 kbit/s in downstream and 500 kbit/s in upstream.

## Configuration

{: .notice} 
**Please note:** This feature requires enablement. Please speak to your LivePerson representative for more information.

Once enabled, profiles can be used to allow video and voice calls only for a subset of agents. The permissions are part of the Agent profile. Enabling the “Initiate voice conversation” permission will allow voice calls, the “Initiate live video” permission will allow video calls.

For support calls on different devices and networks, additional video relay infrastructure is required to cover scenarios in which a peer to peer connection is not possible. It is recommended to work with the LivePerson support team to verify that your network infrastructure can support peer to peer connections. On the consumer side, this cannot be guaranteed and calls might require an additional relay server. For testing purposes, LivePerson will provide such a server. For production deployments, brands can set up their own infrastructure. Your LivePerson representative can assist you with that step and also outline alternatives to hosting your own infrastructure. 

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

HTTPS is required by default for communication between browser clients with thel Voice and Video service (TLS 1.2, AES 128bit, ECDHE_RSA). 

## Limitations 

1. Voice and Video calls are only supported on Web Messaging - not live chat. For in-app messaging, please use the LivePerson Voice & Video SDK ([Android](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-voice-and-video-for-android-sdk-beta-overview.html), [iOS](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-voice-and-video-for-ios-sdk-beta-overview.html))
2. Voice and Video calls can only be initiated on supported browsers and operating systems, see requirements section. Once enabled, the invitation buttons on the agent side are shown on all conversations, not only web messaging conversations. If the channel (e.g WhatsApp or SMS) does not support voice and video calls, no invitation is shown on the consumer side.

