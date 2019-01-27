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
date: 2019-01-27 13:54:10 +0200

---
Audio messaging allows consumers to send audio messages to brands. The audio is one way, from the consumer to the agent. The agent can listen to the message and reply in a text. Audio messaging provides an enriched conversation experience.

The feature is available starting with SDK v3.2. It is also available for Facebook Messenger and Apple Business Chat connectors. 

![](https://lh5.googleusercontent.com/dVSqH3abdjUdij_gMwDuLKw1Cq4weBpkt-4muYA1rrNXqSPDUymaWZcWWpYXe-p_CGxHlZpy492Zg_rRvgMagAT3nJnhSogMhpbfGkT9JR6a7Bd1IurmIrVUfxUP1sdMZHfFAjLk =157x279)![](https://lh6.googleusercontent.com/imia3FhihFZKfSREAh4VFMRAbRn8SlexhnxMZYHGTvITYucDT5xdwXd_E0KJF3gTqw4xW4CJvpmUGXfa9y9j58kiOXVAChvu9urG67k120wM39hBVBcqU8OxJeooDCkirgbh6Khx =157x279)![](https://lh3.googleusercontent.com/YNHr1NhejmVl-nOb0l5uUGCNfZ4Qyo-S23PL2hRG08HT_ml3VGtbI5tbeGkgfDk6wXHWFWiWZhwLdPdTCvAfynsgrOygr0FDTf9gRVequwEmmjxcVpcI6hHgjw41HFF9kifTZ2ZM =157x279)

## Use cases

In the short time since phone conversations have been abandoned for text-based communication, we’ve developed a library of ways to add tone and inflection — from emoticon, emojis, stamps & GIFs. Yet it still seems that there’s nothing quite like actual speech. Voice messaging gives you just that, with all the added benefits of asynchronous text exchanges. 

Audio Messaging is ideal for consumers who would prefer to send a voice recording rather than typing a long response on a phone keypad. It is also beneficial for those with accessibility challenges or if they are using a keyboard not in their native language, or languages with a complicated keyboard (e.g. Russian). It is easier to send an Audio message rather than a typed message when both hands are busy (walking, cooking etc.)

## Using Audio Messaging

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

![](https://lh4.googleusercontent.com/JUICpCjVdilXU9njS-NNNOH2D2wUQjLGyqEjmMnv_iaQ9B-CjpSEVLeO7PqotFuZBjLEw5G3X7N8ixhmzFZjVxqteWjgZMHpKVH4mxdK6is0RQEeocYemVIgltOAhe3ZsZBlUvjI =129x229)![](https://lh5.googleusercontent.com/v-CbzePIfG6Y6_SxclKCdZRWN3m0wtApsE30NYFMy9QNgzz_FB1W4XLCLlhn6UR0NQ2wWtg-vubmzBJvV8jLpTWuPc9Kvmt9hXWU8VTOXYKxuqnLO2NoNzDTRpvktxeweQYinW9V =130x230)![](https://lh6.googleusercontent.com/Tnt3YgVuCE-HYO7tlrQU-mH5IzMw0_019GAd34FxUF6J4_ujEu2ynKHY6cJ9kfR0uAOL5dewwDSpgS4lrx9NsscVnS399IDZwdgjnT379Jkq3JEs5TiB37fAHzR-S5t7ATwcgFp3 =131x233)![](https://lh4.googleusercontent.com/2fRcA22EhFbYAzrD6gy0VtsWtnZd0XCHUS_kY3DVfpbRARA_8vK0gDB9kWyzqS-tk407vidEGx-tJDqZPwqmaLYVxxPk4WwfVhhuWrCpF_fDptRqnJZRZ3MrwUvWZW_fH6XkzSsb =131x232)

### Agent

* Receive a security-safe (malware scanned) audio messages from supported consumer channels
* Listen to audio messages in all agent widgets:
  * Conversation window
  * History widget
  * Conversation window preview popup (Spectator)
* Know what is the message length as soon as it arrives (without having to play it)
* Navigate through the audio message
* Get an indication “Audio Message” when hovering above the ‘LAST MESSAGE TIME’ column in the All/Open Connections

## ![](https://lh5.googleusercontent.com/Wmn6rv_sbH60iSTKWo_tUhlBGRGNKWpyL5LVVrbXbsUD7urw9MgtaMGjeeX_QF33dUHc5yVWjQPY2R6P9n7aI-RyH0fUV-viJvELytf_YJvArmBoalkPxQ46PVd9y7R01Ad-GLMb =624x400)

## How to send an audio message (consumer side only)

* Consumer long taps on the microphone icon (no need to hold the icon, a consumer can scroll in the conversation screen while recording)
* Consumer speaks into the phone - recording max length is between 15s and 2m (configurable by brand)
* Once recorded, the consumer sends audio messages to the agent.
* To delete the recording prior to sending it, the consumer presses the trashcan icon 
* Once sent, the consumer can listen to the recording by pressing the play icon

# LiveEngage messaging connectors 

Audio Messaging is now available for the Apple Business Chat and Facebook Messenger connectors.

LiveEngage will support the following audio messages flow:

* A consumer on ABC or FBM records and sends an audio message to an agent on LE
* An agent receives an audio type message and can play the message the consumer has recorded on the agent workspace
* An agent can play and replay audio messages sent by consumers for open and closed conversations (the agent cannot record audio messages)
* A consumer can replay his own audio messages (speaker only) - as supported on each channel  

![](https://lh3.googleusercontent.com/WTOUDnlAdNzXfhDHHJTFm6hCN9QWoiMtHBOqUARggEg3ixQWzZxGIRJ0Z1VgAKSqmD-Mqdqlw_rO5QWvmv8wL5ru1U42G1C_YGwDvDVL0PdRHEaAM093FG1awA9vK3-O1PPkl6Z_ =211x375)**![](https://lh6.googleusercontent.com/vHVzwmwKtJ_2A0i4fTjTp1Z-cedpnWQCt7_-ZF40kRyG4Y7R7S6qB1XHWP_xIIuR02w7Hk8AN5O0n6J8BXI8BV8eXtbyjN226HID2_A2Cp8d_VuQMMCYqXRKrl79IgIeDh96dnen =212x375)**

## Getting Started & Configurations

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
*  By default, the last 20 messages will be saved on the mobile device. This can be configured by the brand on the SDK side
* An audio message will appear as “\[audio message\]” in the transcript
* There is no limit on how many audio messages I can send in a conversation
*  Audio Messages support accessibility and voice instructions may be announced