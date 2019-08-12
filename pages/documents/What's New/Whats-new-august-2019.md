---
pagename: August 2019
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: Top features include updates to messaging windows, invitations & engagement
  templates
level3: ''
permalink: whats-new-august-2019
isTutorial: false
isNew: false

---
Here is a round-up of the latest features, enhancements and enablements that are coming in the following weeks - all designed to help you make even more meaningful connections. Please see release notes section for exact release dates of all the features below.

<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/352701082?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## New experiences coming your way!

The enhanced agent workspace, new manager workspace, new navigation - countdown to Sept 16th launch date has begun and we want to make sure you are prepared well in advance of these updates…

Here is a quick summary of what to expect per role:

* **Messaging managers** are getting their own built-in centralized workspace to help them better manage their teams. [Learn more](https://knowledge.liveperson.com/messaging-managers-introducing-the-new-manager-workspace.html)
* **Messaging agents** will benefit from an enhanced agent workspace that will dramatically improve their experience and increase their efficiency (you control when they see it by enabling the permissions). [Learn more](https://knowledge.liveperson.com/messaging-agents-the-enhanced-agent-workspace.html)
* **Admins & campaign managers** will receive a new navigation bar with updated icons (existing functionality remains the same) [Learn more](https://knowledge.liveperson.com/admins-campaign-managers-new-navigation.html)
* **Live chat users,** will receive a new navigation bar with updated icons. The agent status menu can be found on the bottom left of the sidebar. All live chat users will continue to use the same tools and workspaces as they do today.

[Click here](https://knowledge.liveperson.com/new-experiences.html) for detailed information on the upcoming changes.

## What’s new this month

### Consumer Experience - web messaging

## Additional header images in the window gallery

Two new out-of-the-box images have been added to the window images gallery and can be used as part of the window image. Both images can be applied to small and large windows as well as desktop and mobile.

These new images are available for both chat and web messaging. If you want to use the current images, they will still be available in the gallery.

![](/img/whats new Aug1.png)

## Enhanced default engagement window & invitation: Horizon theme

We are excited to introduce the LiveEngage’s new default engagement window, the Horizon theme, and the new default engagement invitation, “Message Us”. These enhancements will provide a better consumer experience with improved look and feel, such as:

* Larger window size
* New bubble style
* New visual read indicator (web messaging only)
* New minimize window icon
* New header image
* Window is closed automatically once consumer ends conversation

You will receive the new window and invitation as default in the engagement and window settings, for both chat and web messaging.

The Ocean theme and the previous “Live chat” invitation will still be available in the engagement window gallery and in the engagement template library, in case you still want to use them.

![](/img/whats new aug2.png)

## New engagement templates

Two new engagement templates (invitations) will be added to the engagement template library, to improve consumer experience and to ease customization and branding.

Two new sticky invitations will be added including a small round bubble only (no text) and a rectangle with bubble and editable text “Message us”. Please note that this will become the default for new accounts and new engagements).

The new templates will be available for both chat and web messaging and can be customized via the studio.

![](/img/whats new aug3.png)

## Web message notifications

Web message notifications will provide you the ability to notify consumers through browser notifications when there’s a new incoming message from an agent / bot. For example, if the consumer navigates away to a different website mid-conversation while waiting for a response from an agent, the consumer will be notified that agent has sent a new message. This is great as it will increase conversation quality and reduce abandon rate. You will be able to configure whether you would like to use web notifications in order to notify consumers on new web messages in open conversations.

Two types of notifications will be available for you to choose from:

* Browser notification
* Webpage tab notification

A brand can use one of them, both or none.

Configuration for both types will be available under the "additional window setting" section of the engagement window studio. Please note that push notifications will be supported only for web messaging and only on supported browsers.

![](/img/whats new aug 4.png)

## Engagement Window Customization API

Today, you can perform simple customization to the window by using the engagement window studio or by applying their own CSS in a non-standardized way. By exposing this API we create a customization standard that is backward compatible using Cascading Style Sheets (CSS). The Engagement Window API will be available to all brands via the developer portal.

The API will include the window UI elements and will support chat and web messaging.

For brands that already customized their window using their own CSS, it is recommended to switch to the API.

### Updates to Messaging Channels

## Consumers device locale settings (Apple Business Chat)

ABC “Locale” property will be added to ABC connector and mapped to language SDE. This value will be presented to the agent as part of the consumer personal info section and can be used for routing, by bot and for reporting purposes.

## Store and Entry Point information (Google My Business)

The following information will be added to the GMB connector:

* Store Place ID - will be mapped to Company branch, concatenated to the business id..
* Store Name - will be mapped to storeNumber (under Customer Info)
* Store Address - will be mapped to storeZipCode (under Customer Info)
* EntryPoint - will be mapped to Market Source SDEs:
  * channel = 1-Search
  * affiliate = the EntryPoint value

## Rich messaging enhancements (LINE)

We are enhancing the LINE connector rich messaging capabilities which enables you to leverage LINE for conversational commerce and improve the consumer experience and satisfaction.

The LINE connector enhancements include:

* Photo and file sharing: consumer to agent
* Structured content
* Post conversation survey
* Secure forms

## File sharing from Consumer to Agent (in-app messaging SDK for Android)

Enables consumer to agent file sharing to increase consumer satisfaction and address more use cases. For example, you can share a signed document to bank agents for secure verification; Share analysis report (xml, potx) for clarification with the agents.

Files supported include PDF, Docx, Pptx and XLM files to be shared from consumer to agent on Android devices

### Messaging Operations Updates

## Fall back configuration by skill

When assigning conversations to agents, it is possible that certain skills will have no online agents that can receive the conversation and therefore a fallback skill needs to be assigned. This capability is now offered on a per skill basis so for example, if the sales team is out for the day, all conversations can be rerouted to the sales backup skill for lead generation and follow up.

### Automation Updates

## Granular permission model (Conversation Builder)

Today the Conversation Builder supports role based access. A role is a predefined user profile with set of permissions. Once a user is given a role, he/she has access to all the modules for tasks attached to that role. Now, we are giving you granular control of who can gain access to what by providing permission based access so they can create their own custom user profiles.

## Custom 3rd party bot connector

You are now able to create a custom connection to an out of the box custom bot provider by leveraging a Bot Connector Faas Template that will channel the connection with the Bot Connectors platform.

All you need to do is simply provide the connection details required to the bot (credentials/API keys etc.), and you will be given the ability to handle translation between the Bot’s text protocole and the expected LP syntax with a structured JSON format directly within the code of the Function.

### FaaS Updates

**Pre/Post/Error hooks to invoke Functions**

You can enrich the functionality of the bot connector by triggering custom functions along with sending the basic text and conversation actions with the bot provider.

The bot connectors platform will be able to invoke FaaS functions in Pre/Post or Error events of sending messages to the bot provider.

The Functions will have the ability to enrich the conversational experience by leveraging the FaaS platform capabilities. Developers could assign actions to the functions like CRM integrations or error handling tactics to manage the outcome of the conversational flow with the bot Provider.

## Function invocation for chat events

You can now trigger Functions from live chat conversation events (i.e. Chat in queue), evaluate these using custom rules, integrate with external sources (i.e CRMs) and take actions using the many APIs available. Alongside these capabilities, FaaS also allows for storage of data needed for the processing, within the function’s context. This is great as developers can now tailor functions based on business needs such as Chat start / Chat end / Chat in queue can be used for triggering external chat related dashboards or CRM integrations.