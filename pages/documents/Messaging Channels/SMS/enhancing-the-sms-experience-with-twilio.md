---
pagename: Enhancing the SMS experience with Twilio
categoryName: Messaging channels
subCategoryName: SMS
indicator: messaging
subtitle: ""
level3: ""
permalink: messaging-channels-sms-enhancing-the-sms-experience-with-twilio.html
isTutorial: false
isNew: false
date: 2019-04-15 14:31:45 +0300
---

## Introduction

This document delves into some of the Twilio functions that will enable your brand to enhance the SMS experience through LiveEngage.

## Gateway-level enhancements

LiveEngage leverages Twilio SMS as one of its out of the box messaging connectors. Twilio offers a feature called ‘Functions’ which allows your brand to create and run snippets of code on receipt of a message from the consumer. The following sections of this article cover a series of sample use cases on how Twilio functions can be leveraged to enhance the consumer’s messaging experience. All of the code snippets below are examples that are intended as a starting point for you to design and build your own custom functions. Please ensure you test each function thoroughly before rolling it out to your brand’s consumers.

## Off-hours messages

This function has been designed to send an auto response to consumers if their message arrives during off hours. You can create the code to define hours that your agents will be working and check whether an inbound message arrives within those hours. If it arrives during scheduled hours, then the message will be received in LiveEngage. If not, an auto response will be sent back advising the customer that they have messaged during off hours and the consumer’s original message will be forwarded into LiveEngage and placed in queue, ready for the next shift.

{: .notice}
**Note:** Since the off-hours message is sent outside of LiveEngage, it will not be visible in the conversation in the LiveEngage console. The agent will only see messages the consumer types and messages they type themselves.

## TCPA or SLA message on first inbound conversation

When a consumer first messages the brand, you can use functions to send a message stating the SLA for the phone number/skill they are texting into and/or to provide instructions regarding ‘Stop’ functionality to assist brands in meeting their TCPA requirements. You can modify the below code to include verbiage that is applicable to your brands policies and standards. This type of message can be combined with off hours messaging, if required.

{: .notice}
**Note:** Since these messages are sent outside of LiveEngage, it will not be visible in the conversation in the LiveEngage console. The agent will only see messages the consumer types and messages they type themselves.

```javascript
//Welcome Message
exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.MessagingResponse();
  const client = context.getTwilioClient();
  const got = require("got");
  let tdiff = new Date().getTimezoneOffset();
  let off = 600 - tdiff; /*offset hours x 60 mins*/
  let now = new Date().setHours(new Date().getHours() + off / 60);
  let h = new Date(now).getHours();
  let d = new Date(now).getDay();
  let welcomeMessage = "WELCOME_MESSAGE_TEXT";
  let filterDate = new Date();
  filterDate.setDate(filterDate.getDate() - 1);
  client.messages
    .list({
      dateSentAfter: filterDate.toISOString(),
      from: event.From
    })
    .then(messages => {
      if (messages.length > 1) {
        twiml.redirect(
          "https://MSGGW_DOMAIN/api/ACCOUNT_NUM/api/25638322/default/twilio"
        );
      } else {
        twiml.message(welcomeMessage);
        twiml.redirect("https://MSGGW_DOMAIN/api/ACCOUNT_NUM/default/twilio");
      }
      callback(null, twiml);
    });
};
```

## Blacklisting

Many brands have policies around blocking consumers who use offensive or abusive language when talking with agents. The code below shows a basic example of a hard-coded function with the ability to check for blacklisted numbers (those added into the code) and return an auto message to the consumer if they are have been added to the 'black-list'. A more scalable method for ‘Blacklisting’ would be to modify this code further to check a list of numbers in a csv file on your servers or a cloud server.

{: .notice}
**Note:** Since these messages are sent outside of LiveEngage, it will not be visible in the conversation in the LiveEngage console, the agent will only see messages the consumer types and messages they type themselves.

```javascript
_//Blacklisting_
 exports.handler = function(context, event, callback) {
 let twiml = new Twilio.twiml.MessagingResponse();
 const msggwDomain = 'https://MSGGW_DOMAIN/api/ACCOUNT_NUM/default/twilio';
 const blacklistMessage = 'BLACK_LIST_MESSAGE';
 const blacklist = [
 '+1855XXXXXXX',
 '+1855XXXXXXX',
 '+1855XXXXXXX'
 ];

 if (blacklist.includes(event.From)) {
 twiml.message(blacklistMessage);
 } else {
 twiml.redirect(msggwDomain);
 }
 callback(null, twiml);
 };
```

## Regular expression masking

Many brands choose to mask specific data patterns to prevent consumers from inadvertently sharing data such as account or credit card information in plain text within the body of the conversation. A Twilio function can therefore be created to handle regex masking and regex auto-response. The below example searches for a specific pattern and blanks the pattern within the conversation body. The code can also be used to send an auto-response back to the consumer letting them know that their message has been redacted.

{: .notice}
**Note:** Since auto-response messages are sent outside of LiveEngage, it will not be visible in the conversation in the LiveEngage console. The agent will only see messages the consumer types and messages they type themselves.

```javascript
_; //Regex Masking_
exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.MessagingResponse();
  const got = require("got");
  const msggwDomain = "https://MSGGW_DOMAIN/api/ACCOUNT_NUM/default/twilio";
  const maskSensitiveDataMessage = "MASK_DATA_MESSAGE";
  let ccRegex = /(?!000|666)\[0-9\]{3}(\[ -\]?)(?!00)\[0-9\]{2}\\1(?!0000)\[0-9\]{4}$/gi;

  if (event.Body.match(ccRegex)) {
    var redactedMessage = event.Body.replace(ccRegex, "XXX-XX-XXXX");
    got
      .post(msggwDomain, {
        json: true,
        body: {
          Body: redactedMessage,
          From: event.From,
          To: event.To
        }
      })
      .then(function(response) {
        twiml.message(maskSensitiveDataMessage);
        callback(null, twiml);
      })
      .catch(function(error) {
        callback(error);
      });
  } else {
    twiml.redirect(msggwDomain);
    callback(null, twiml);
  }
};
```
