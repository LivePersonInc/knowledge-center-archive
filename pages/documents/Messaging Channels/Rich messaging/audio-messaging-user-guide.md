---
pagename: Audio messaging user guide
categoryName: Messaging channels
subCategoryName: Rich messaging
indicator: messaging
subtitle: Audio messaging allows consumers to send audio messages to brands
level3: ''
permalink: messaging-channels-rich-messaging-audio-messaging-user-guide.html
isTutorial: false
isNew: false
date: 2019-01-27 11:54:10 +0000

---
Audio messaging allows consumers to send audio messages to brands. The audio is one way, from the consumer to the agent. The agent can listen to the message and reply in a text. Audio messaging provides an enriched conversation experience.

**To see what messaging channels support audio messaging please see the** [**messaging channels capabilities comparison**](messaging-channels-messaging-channels-capabilities-comparison.html) **chart.**

![](/img/Audio messaging Gif-1.gif)

## Why use audio messaging?

In the short time since phone conversations have been abandoned for text-based communication, we’ve developed a library of ways to add tone and inflection — from emoticon, emojis, stamps & GIFs. Yet it still seems that there’s nothing quite like actual speech. Voice messaging gives you just that, with all the added benefits of asynchronous text exchanges.

Audio messaging is ideal for consumers who would prefer to send a voice recording rather than typing a long response on a phone keypad. It is also beneficial for those with accessibility challenges or if they are using a keyboard not in their native language, or languages with a complicated keyboard (e.g. Russian). It is easier to send an Audio message rather than a typed message when both hands are busy (walking, cooking etc.)

## Using audio messaging

### Scope

* Only a consumer can send an audio message to an agent
* Audio messages will appear as part of the messaging history, but will not be transcribed from voice to text. A downloaded transcript will read “audio message”.

## Audio Messaging Features

### Consumer

* Record & send a voice message to agents
* Notified when the message was sent, received & read
* Listen to audio messages in active & closed conversations
* Navigate through the audio message
* Have a time indication during recording
* Know the message length (after recording)
* Cancel a recording without sending the message
* Resend if upload failed

### Agent

* Receive a security-safe (malware scanned) audio messages from supported consumer channels
* Listen to audio messages in all agent widgets:
  * Conversation window
  * History widget
  * Conversation window preview popup (Spectator)
* Know what is the message length as soon as it arrives (without having to play it)
* Navigate through the audio message
* Get an indication “Audio Message” when hovering above the ‘LAST MESSAGE TIME’ column in the All/Open Connections

![](/img/audiom3 (1).png)

## How to send an audio message (consumer side only)

* Consumer long taps on the microphone icon (no need to hold the icon, a consumer can scroll in the conversation screen while recording)
* Consumer speaks into the phone - recording max length is between 15s and 2m (configurable by brand)
* Once recorded, the consumer sends audio messages to the agent.
* To delete the recording prior to sending it, the consumer presses the trashcan icon
* Once sent, the consumer can listen to the recording by pressing the play icon

## LiveEngage messaging connectors

Audio messaging is now available for the Apple Business Chat and Facebook Messenger connectors.

LiveEngage will support the following audio messages flow:

* A consumer on ABC or FBM records and sends an audio message to an agent on LE
* An agent receives an audio type message and can play the message the consumer has recorded on the agent workspace
* An agent can play and replay audio messages sent by consumers for open and closed conversations (the agent cannot record audio messages)
* A consumer can replay his own audio messages (speaker only) - as supported on each channel

## Configurations

### Prerequisites

* Adding SDK v3.2 (or above) to the host app.
* Turn the feature on both the server side (site settings) and client side (SDK)

### Server and messaging connectors (should be configured by LivePerson)

* Site settings: **messaging.audio.sharing.enabled** - should be turned on

### SDK

* iOS - set **enableAudioSharing** to true
* Android - set **enable_voice_sharing** to true
* Additional parameters are configurable on the SDK side. For more information, please refer to the Developer Community ([iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-advanced-audio-ios.html), [Android](https://developers.liveperson.com/consumer-experience-android-sdk-advanced-audio.html))

### Notes

* The max length of a message can be up to 2 minutes. The max length of a message can be configured on the SDK side between 15 seconds to 2 minutes
* By default, the last 20 messages will be saved on the mobile device. This can be configured by the brand on the SDK side
* An audio message will appear as “\[audio message\]” in the transcript
* There is no limit on how many audio messages I can send in a conversation
* Audio Messages support accessibility and voice instructions may be announced