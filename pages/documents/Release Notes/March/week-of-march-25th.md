---
pagename: Week of March 25th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: March
permalink: release-notes-2019-march-week-of-march-25th.html
isTutorial: false
isNew: false
date: 2019-03-20 18:39:21 +0200

---
These release notes include new features arriving to LiveEngage during Feb 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### \[Maven\] Recommended Actions powered by Maven

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

Maven is LivePerson’s continuously-learning AI engine that orchestrates all conversational interactions to ensure the best outcomes - the brain inside our conversational commerce platform.

Recommended Actions is Maven’s agent assistance feature that actively recommends or executes hand-offs to bots based on the conversation. It scans each conversation turn for intent, and then determines and presents the next best action to the agent. By incorporating automations mid-conversation, Recommended Actions frees up agent capacity to handle other messages, making agents significantly more efficient.

#### Key benefits of Recommended Actions

* Examines each conversational turn to assess consumer intent
* Recommends or executes the next action for the best outcome
* Makes human agents more efficient by enabling them to hand off menial tasks to automations
* Accelerates utilization of existing automations by improving contextual discovery

#### How it works

**Intent recognition**

Maven intercepts each message and leverages all the bots registered to assess their understanding of customer’s intent. Intent is understood by leveraging different NLU providers (1st party or 3rd party) built into each bot from their respective platforms: LivePerson’s Conversation Builder, Watson, or DialogFlow

**Actions recommended in real time**

Maven analyzes all available bots and automations to match the identified intent, and recommends the best automation in real time to the agent. Recommendations are done by choosing the highest ranked bot by score, after calibrating the score using a machine learning based on historical performance of the bot. Agents can then easily opt to manually transfer the conversation to the recommended automation.

![](https://lh5.googleusercontent.com/Fbvge0pxGA92x5rwgFSN2YxmIqdKwny3mhxQ_3K5EeJn2BKZWF0M9YKYwRAGYVYE-Il20wkgFifjruBM0QKqeeBpAWS4ogbTAZHZbECK8H6bQcJb9kXpf0nSn0-YKfsshtHVJyGV =624x548)

**Closed-loop training for optimization**

Agents are able to rate the relevance and usefulness of the recommended automation using a simple thumbs-up or down button. Maven then registers and utilizes the feedback to train the model for all future recommendations.

**Plug in any automation or bot**

Build automations or bots using LivePerson’s [Conversation Builder](https://developers.liveperson.com/conversation-builder-conversation-builder-overview.html), or integrate bots that were created using Dialogflow or Watson. See the tutorials and guides in the Conversation Builder to learn how to get started.

#### \[Web messaging\] Welcome message with Quick Replies

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

The new welcome message feature allows brands to set the first message (after a consumer has opened the conversation window) with a list of quick replies of common intents to be addressed over messaging. The consumer’s quick reply selection will be considered the first message to open the conversation in the agent workspace, allowing the brand to configure the bot with a very specific and accurate logic/decision tree.

* The welcome message can be configured as either simple text, or with a simple text and quick replies.
* The brand can disable/enable the welcome message.
* Configuration is done at the engagement window level. So a brand can present different welcome messages with different quick reply options based on customer information and journey on the website (campaign and engagement settings).
* The consumer’s quick reply message selection will be inserted as a consumer message in the conversation
* It is possible to configure whether the welcome message will be presented only to first time consumers, or in every new conversation.
* Default settings (backward compatible):
  * LiveEngage default text message, without quick replies
  * Presented only to first time consumers

**Configuration:**

Under Engagement Window Studio => Add Elements

Image 1: configuration location

![](https://lh3.googleusercontent.com/UGqZmv3VvC3Hm6njC1IG5jZM9ufAQFSWVXFL8bari04OqC-8EKapm9Ro0tgtfo59DiVv6iwaMEvWFSiAhlqPlSzInzvxtPlbncSNjqOL9s6bKtkRPwMtfQw8o-fciYUJX7R-K7rR =591x508)

Image 2: default settings

![](https://lh5.googleusercontent.com/yOZy-eUKiKuNKDCsJ3yNDNz6AIej_XrAGBOv95hdewMYiTSzLzDAu1luQLlrkHy83AE2inbJ3QyGi7q_ho3iKoqK1D96xSN_M4Gq4GgvBTszvYq453cvk9Il4kArYdw1K4VeAy58 =231x355)

Image 4: Ability to add Quick Replies

Image 3: Ability to change the message text and to have it for every new conversation

![](https://lh3.googleusercontent.com/kjpBUwtlChzb9rBoltftoSNOcu9qv3ylWYUk2JYgFdfsSd4fmjBBs1W5qoFWBuKbBbaESEAAQ75du_sptAeoH8FZ91xayP2czUGIrM_7GsIZS_GFyJG1h6TRScFOmz4mmEsQ7Uy1 =238x371)

![](https://lh5.googleusercontent.com/lHz9u_DAp3XMFSwUUcigQGrpHmUnKcs_7O76oNUPh8SoCZlW9mRSKrOFSJOmHdkz70neNvliTS1SUyph8ySxr5OTMh9xc-d-26TDSvpjutxz8gFqce2bI-2dzMFHcZ0GY03FBIsu =210x371)

Image 5: Welcome Message with Quick Replies In the window

**![](https://lh5.googleusercontent.com/3YMWHFOZ5uJ1kFyhuMNJi2Dbc6Ba-u8eXdAMHvN8x8z1YtSKAVqz9jsXLU1YOKsSf22343uf2HPSyg5qVcla5Hd7O7yeYHhvM4JevxLQiM_FsjebWFI1QCnw0NriR9WOreKGLiZS =272x384)**

Image 6: Consumer selected one of the Quick Replies options and conversation started

![](https://lh3.googleusercontent.com/65plyjkLR-axzTNd8iHYjvoQZzLf3kDTH8iZbkj7-PmE5cIG9JRVL-ZbkyNmg6NVJ0N3U_sC-fBUmk02oR8E6i9t2hdZGCz5hFE9wXTXwTTkZtIk8lDUqWl7WCmOcPGNDSA5eY2e =271x385)

**Limitations:**

* Preview in the studio is not supported
* Up to 24 quick replies
* 8 quick replies will be presented per row - fixed value
* Up to 25 characters in each quick reply
* Styling is inherited from the Agent Bubble styling configuration
* Conversational metadata (external id) of the quick reply is not populated
* Once a conversation is closed by the consumer, the window remains open and therefore the welcome message will appear again (in case it was set to be presented for every new conversation).

### \[ABC\] Adding Authentication Interactive Message response to the agent widget SDK (CX-149)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | Yes | No | No | No | No | No | No |

Today, brands that are looking to authenticate their consumer via the Apple Business Chat authentication message must have a bot added to the LE conversation (via the Agent SDK). This causes a couple of complexities for brands:
* Brands that currently are not using a bot with their messaging operations will not be able to use this service unless they involve a new bot deployment, which raises a lot of difficulties for them: deployment pricing, operational changes etc.
* Brands that are using a bot will need to change their deployments to support the metadata response while integrating the reopens with the brand's backend system only in order to then display the authentication information in a customized agent widget. This causes unnecessary complexity, where it can all be integrated via the agent widget SDK only.

**The solution:**
* The ABC Authentication Interactive response can include two different types of responses:
  * Successful: will include token string
  * Failure: will include the error code
* The Apple Business Chat authentication responses will be exposed to the agent widget SDK public model structure
* Brands will be able to expose the ABC successful authentication response via the widget SDK methods to their backend auth servers in order to validate the token against their services
* Brands will be able to fetch the user's authenticated information from their auth services after validating the token, while exposing the user auth data to the agent on LE through a customized agent widget
* Brands will be able to expose the ABC failed response via the agent widget SDK method to their auth services, while validating the error type and status
* Brands will be able to then present the auth error response to the agent on LE via an agent customized widget, while allowing the agent to help the consumer to sign in successfully or help identify where the issue in signing in is.

{: .notice}
**Note:** Brands will be able to leverage this feature only if they provide their own public key for the authentication. Otherwise, the widget window will not display the details.

### \[CM connector\] Outbound campaigns - CM integration

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | No | No | No | No | No | Yes | No |

Today brands are using push notifications and SMS campaigns to their customers for the following use cases: increase in revenues, improve their service and retention. The new outbound campaigns integration allows brands the ability to connect CM to our conversational platform, benefiting from the following capabilities:

* Seamless messaging conversation
* Routing to skill
* Routing to bot
* Reporting

{: .notice}
The CM SMS connector will not be immediately available upon this release. The final release date will be communicated when available.

### \[WhatsApp\] New messages status indications (CX-118)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | No | No | No | No | Yes | No | No |

WhatsApp has added read indications for messages sent by agent to consumer. This capability is now supported for the WhatsApp Business connector.

* **Read indication** - will be shown to the agent once consumer has read his message - the read indication is presented as two orange checkmarks on the agent message in the LE UI conversation thread

**Please note:** This status is in addition to the already supported indicators (Sent, Delivered, and Failed to deliver).

![](https://lh4.googleusercontent.com/b9RjIk1FbaR4QNKG1IvDDYLjqBHkgioRcZ5_QxWfZWtZDURtvgIvb2gPVKF-cIFBtfErr3hkFAmYyqUfza_M4tLbjo-h3wzrUsXdwzHtSYuudkC_GfgbXY_MB7k6ekT9JjxZevcj =624x297)

### \[Web experiences\] Consumer step up authentication (CX-91)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

Step up authentication is being released for **early adopters**. Today, when a registered consumer engages a brand in an unauthenticated conversation, then during conversation the consumer logs in and authenticates with the brand, the conversation will continue as unauthenticated. An unauthenticated conversation will not be linked to the previously authenticated conversation. Two different conversations exist for the same consumer. Potentially the new conversation may go to a different agent. The conversation continuity/context is lost on a new conversation since the agent is unable to see the unauthenticated conversation history.

This prevents brands to be unable to handle returning consumers effectively and unable to offer authenticated business functions such as account upgrades and account support. The Step up authentication feature allows brands to fully migrate to messaging for a richer consumer and agent experience.

Once a consumer authenticates, no new conversations will be created for the same consumer. Instead, unauthenticated consumer will be switched with authenticated consumer and the agent will be able to see unauthenticated conversation history maintaining the continuity of the conversation. Agent will also be able to see the consumer’s PII information reflected in the live conversation. The feature will support either consumer or agent initiating the step up from unauthenticated state to authenticated state during the conversation.

### \[Web experiences\] Added support for authorized consumer identity (CX-177)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

When configuring authenticated web messaging, brands must send the consumer’s ID through javascript on the web page. The consumer’s ID might be considered as sensitive data. The problem with this is that this data is sent as plain text.

**Fix:** Instead of providing the consumer ID, the brand will provide the encrypted JWT through javascript on the web page.

The brand will provide the encrypted JWT (aka - JWE) in a new attribute of consumer “identity” json:

```
lpTag.identities.push(identityFn);
  function identityFn(callback) {
    callback({
      iss: “replace with issuer”,
      acr: “loa1”,
      tkn: “replace with encrypted jwt (jwe)”
  });
}
```

**Limitation:** This enhancement is currently supported only for authentication flow type “oAuth 2.0 authentication (code)”. Flow type “oAuth 2.0 authentication (implicit)” will be supported in future releases.

### \[Messaging history API\] Consumer Step-Up Authentication (LE-98860)

Expanding Messaging Interaction API for consuming CustomerStepupEvent and modifications in ParticipantAddEvent. With step-up authentication, the consumer can start the conversation with an unauthenticated flow and move to an authenticated flow. For more technical information please refer to our [documentation](https://developers.liveperson.com/messaging-interactions-api-methods-conversations.html#response) in the Developers Community.

### \[Messaging history API\] Post Conversation Survey search (AE-641)

Enable brands to gain new insight from conversations in which the Post Conversation Survey was configured by adding a new filtering capability to the All Connections tab in LiveEngage.

This new capability will allow brands to filter out and view specific conversations based on their survey outcomes, words matched in transcripts, and CSAT, NPS, and FCR answers.

## Bugs fixes

### \[WhatsApp\] Consumer name displayed on agent side if consumer profile name feature is disabled (CX-120)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | No | No | No | No | Yes | No | No |

When an account enables "User Profile" to allow the consumer’s name to be displayed in the agent conversation window, and then disables it, the last name doesn't clear from previously enabled state.

**Fix:** If an account has "User Profile" disabled after enabling it, the name in the open connections list, the consumer info widget view in the agent workspace, as well as at the top of the agent's messaging conversation window should be set to blank.

### \[Facebook\] Secure Form error message not shown in in-app browser (CX-192)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | Yes | No | No | No | No | No | No | No |

Secure Forms alert notifications using popup window that does not show up for Facebook in-app browser. This causes consumers not to get the notifications.

**Fix:** Changed the alert notifications as text message embedded within the page instead of popup style.

![](https://lh4.googleusercontent.com/BwHCX4lAIuVtHMNh7IAqFGa5FPqkfWsZeCGgSYf1x6Dw6ABU4D_sKKmkwqCnOqEVdido8FdMwTfOfRL6IbG_oKTTKqNTYjixhMdsy-wPnm2qgftxAtOxnT7aEfA-kZIR8HOOx4vd =170x324)

### \[Web experiences\] Scroll should be at the bottom to display latest messages (CX-56)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | Yes |

In Web Messaging, when a consumer minimizes the window and the agent sends a message, once the consumer maximizes the window again, it does not scroll down to the bottom of the conversation.

**Fix:** Brands have the option to set whether they want the window when maximized to scroll down to the bottom of the conversation automatically or stay on the last position of the conversation in case the agent sends messages while the window is minimized.

**Note:** This feature requires enablement. Please contact your LivePerson representative for more information.

### \[Web experiences\] Quick reply message doesn't show in the visitor window (CX-112)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

Quick reply message disappears right after displaying in the visitor window.

**Fix** : Quick replies will no longer disappear when chat window receives read/accept status events from the agent.

### \[Web experiences\] iOS web visitor cannot send messages when conversation auto closed in background (CX-159)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

On accounts with “Show history for closed messaging conversations ” flag in LE-UI is “NO, a consumer starts an unauthenticated conversation from an iphone/ipad using Chrome/Safari, while messaging with the agent, and then exits the messaging window, but the agent closes out the conversation or the conversation is closed out by auto-closed. When the consumer goes back to the browser and continues the conversation by typing a new message, the messages are not sent displaying the red error indication. The consumer is unable to close the window unless the page is reloaded.

**Fix**: If a conversation was closed for any reason while the consumer is disconnected, any new messages will be treated as a new conversation.

### \[Web experiences\] Web messaging structured content card sent twice via routing bot (CX-162)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

When a consumer starts a conversation in a web messaging window, and the routing bot replies with a structured content card with a specific action that redirects to a URL, the URL gets redirected when the consumer clicks on the action and the routing bot shows the next card configured on the link button twice. Both the consumer and agent receive the message twice.

**Fix**: Added wait time between each action to ensure that it arrives to the agent only once for each click.

### \[Web experiences\] Customers must click Next button twice in pre-chat survey (CX-50)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No | No | No | No | No | No | No | No | No | No | Yes |

When consumer engages in a chat that has a pre-chat survey, he has to click the Next button twice.

**Fix:** This is fixed and consumer should click the Next button once.\[Web experiences\] Background:initial in IE11 causes <br> tag not to be parsed (CX-158)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

Browser IE11 doesn’t support css style background:initial causing it to not render the <br> tag correctly.

**Fix:** Added css style for <br> tag with background:transparent.

### \[Web experiences\] Unnecessary space below header image in engagement window (CX-171)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

There’s an unnecessary space below the header image on the engagement window. The margin size has been decreased to eliminate the space below the header image.

![](https://lh5.googleusercontent.com/gzVNb2f-cPbC5NkXeHZPWoKun3Lqaehz01HpCQFLj4noT76IeEhnuNwva5Z86dN8VYbwB2f0Jsf3iuCAmoQHCWfWqjWoxLRo_sAq-DLlA3w46etfzJw_7_EOeaFy-Bjv8ogh2q1U =252x360)

### \[Web experiences\] Engagements not shown when 3rd party cookies blocked in Chrome (CX-190)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | Yes |

When third party cookies are blocked (disabled) in latest version of Chrome and Edge, the secure storage fails to instantiate because it doesn't have access to localStorage or sessionStorage causes the engagement window to not show.

**Fix:** When the consumer clicks on the engagement, it will open up as an external window.

### \[Web experiences\] United Airlines - JWT sent twice causing session to close (CX-189)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

When a consumer starts an unauthenticated web messaging conversation, then navigates between pages while the conversation is open. After some navigation, the window clears out and the conversation is no longer showing within the engagement window.

**Fix:** Engagement window will show up as a new conversation.

### \[Web experiences\] Consumer returned to thread does not see previous conversation's history (CX-49)

| Web Messaging | Mobile App Messaging | Twilio | Facebook | ABC | Line | RCS Business Messaging | Google My Business | WhatsApp | CM | Chat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No | No | No | No | No |

If a consumer engages in a unauthenticated messaging conversation and returns to the thread after 1.5-3 days, the consumer will not see the previous conversations, even when the token idle time is set at 30 days.

**Fix:** The token idle expiration is extended to allow the thread of the conversation to continue.

### \[Messaging history API\] Internal error in history facade (LE-100052)

Internal error occurs in history facade if the agent doesn't have view survey permissions and conversationSurveys is missing from contentToRetrieve.
