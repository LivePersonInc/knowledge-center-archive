# Messaging Window JavaScript SDK

A JavaScript wrapper for the LiveEngage Messaging Window API.

## Introduction

This JavaScript SDK for the LiveEngage Messaging Window API will make building custom messaging windows and javascript applications efficient and stable.

This library requires only an active LiveEngage account #.

## Quick Start

```html
<head>
	<script src="js/messaging-window.min.js" type="text/javascript"></script>
	...
```

Initiate the library by instantiating an object with the necessary options, and then connect actions to the library by using the custom callbacks. When ready, call the `connect()` method to connect to LiveEngage.

```javascript
var windowKit = new windowKit({
	account: 12341234
	//skillId: 12341234 - optional skill ID
});

windowKit.onAgentTextEvent(function(text) {
	// append the text to a conversation thread
	console.log("Agent: " + text);
});

windowKit.sendMessage('Hello World!');

windowKit.sendChatState(windowKit.chatStates.composing);

windowKit.connect();

```

## Available Methods

### Library Methods

| Method | Parameters | Description |
| --- | --- | --- |
| `connect` | - | Connects the library to LiveEngage |
| `sendMessage` | message | Sends the specified text to the conversation. |
| `sendReadState` | state, ids | Sends the status of read or accept for a specified incoming message. The states are READ or ACCEPT. You can also use `windowKit.readStates.read` or `windowKit.readStates.accept` |
| `sendChatState` | state | Sends the specified chat state to the conversation, values of COMPOSING and PAUSE are accepted. You can use `windowKit.chatStates.composing` or `windowKit.chatStates.accept` |


### Event Callbacks

| Event | Arguments | Description |
| --- | --- | --- |
| `onTextReceived` | text, change_details | Event is triggered when a text-only message is received. |
| `onReceived` | change_details | Event triggered on all messages (sent or received). |
