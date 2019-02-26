---
pagename: 'Accessibility policy '
categoryName: Security & regulations
subCategoryName: ''
indicator: both
subtitle: LivePerson assists users with vision, hearing or mobility impairments in
  gaining greater access to the internet
level3: ''
permalink: security-regulations-accessibility-policy.html
isTutorial: false
isNew: false
date: 2019-01-24 12:47:14 +0000

---
LivePerson is a leading provider of mobile and online messaging, facilitating a meaningful connection between brands and consumers. LiveEngage, the Company's enterprise-class, cloud-based platform, allows consumers to stop wasting time on hold with impersonal 1-800 numbers, and instead directly message their favorite brands, just as they do with friends and family. More than 18,000 businesses, including Adobe, Citibank, EE, HSBC, IBM, Orbitz, PNC, Home Depot, and Disney rely on the unparalleled intelligence, security and scalability of LiveEngage to reduce costs, increase lifetime value and create meaningful connections with consumers.

LivePerson's goal is to deliver higher value through higher quality products and services that meet the information, reporting, and analysis needs of all demographics of customers, including users with disabilities.

Supporting accessibility within LivePerson products is important from a social standpoint, as widening the scope and reach of services inevitably strengthens our customer’s brand.

Moreover, having a messaging and chat option provides a previously unattainable level of relationship with customers, as well as an extra avenue of assistance on top of the usual channels available on the customer's’ website or application. Users with disabilities can get assistance from a live agent who can perform actions for them, such as completing a form or searching for items on a website.

We strive to meet the guidelines for compliance with the most current legislature like, for example, the Americans with Disabilities Act (ADA). By addressing these access standards, LivePerson assists users with vision, hearing or mobility impairments in gaining greater access to the internet.

The regulations in the US and other countries, such as the UK and Canada, require adhering to the Web Content Accessibility guidelines (WCAG (v2.0), Levels A and AA developed by w3.org, particularly.

In order to incorporate these guidelines, we work with the international accessibility consulting organization - “Deque Systems”. Deque Systems have completed a thorough assessment of LiveEngage accessibility, and have subsequently awarded LivePerson the official accessibility stamp. The assessment included working closely with people with disabilities who reviewed and operated our products. This practice enables us to implement, first-hand, the beneficial suggestions made by impaired individuals who understand our product.

View LivePerson’s [certification of concordance](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Accessibility_ConformanceStatement.pdf)

For more information on Deque Systems, refer to [http://www.deque.com.](http://www.deque.com. "http://www.deque.com.")

## Technology standards

LivePerson's services are designed to work with assistive technologies, such as text-to-speech readers, by supporting the ARIA standard. More specifically, LivePerson has selected NVDA as the baseline for ensuring optimal user experience for visually impaired users on desktop, VoiceOver for mobile web users over iOS, and TalkBack for mobile web users over Android.

Making messaging and chat accessible proved to be challenging due to its dynamic content. For example, with live chat, there are constant incoming and outgoing messages, and the visitor needs to be aware of the new information coming in while still having access to previously exchanged information. To remedy this, ARIA live regions have been implemented for detection of new incoming and outgoing messages.

LiveEngage has been awarded an official accessibility stamp in the following environments:

* **Desktop:** Windows 10, Firefox browser, NVDA screen reader
* **IOS:** iOS 11, Safari browser, VoiceOver screen reader
* **Android:** Android 8, Chrome browser, TalkBack screen reader

## Overview of the embedded engagement window

The embedded engagement window offers a rich, seamless experience that enables brands to drive an overall better customer experience as well as earn customer loyalty. Agents are able to chat with visitors, share various content (including Secure Forms) and display them in an expanded media area located within the visitor's window.

Please note throughout this document, when referring to the Engagement window, this applies for both online chat and web messaging.

### Embedded engagement window layout

Below is the embedded engagement window with its various components labelled.

![](/img/access-policy1-2.png)

_Figure 1: The embedded engagement window_

![](/img/accessibility-policy2-1.png)

_Figure 2: The embedded engagement window, action menu expanded_

The embedded engagement window layout is as follows (described from top to bottom):

**Title bar:** Includes the end conversation button which, when clicked by the visitor, terminates the chat and triggers the post-chat survey display (if configured). It also includes the Minimize button. When the window is minimized, the title bar appears at the bottom of the page on desktop and on the side of the page on mobile web. In its minimized form, the Minimize button is replaced with a Maximize button for displaying the window in full

**Logo:** Company logo can be added to this area.

**Image:** Area where picture of the agent or any other configurable image can be displayed.

**Conversation area**: Below the image is a log of all the incoming and outgoing conversation messages. Sender and time sent are indicated on each message. New messages are added as they come in, at the bottom of the log. All older messages can easily be accessed by the visitor by simply scrolling up. Below the conversation log there is a status area, where the visitor can see an indication of the agent actively responding, in real-time.

**Text area:** In the text area, the visitor enters text for the conversation messages. Messages can be sent via the send button or by pressing enter on the keyboard. Click + to expand the action menu.

**Action menu:** Opens when the + button is clicked. It includes buttons to mute sound, email or print the conversation transcript, and end the conversation.  Ending the conversation triggers the display of the post-chat survey (if configured). Click X to collapse the action menu.

## Surveys

Surveys are utilized to get information or feedback from visitors before or after a chat. They are configured by the customer in the LiveEngage Workspace. The questions in the surveys and their wording are at the discretion of the customer. Best practice is to keep surveys short, and to use clear and simple language.

The embedded engagement window supports the following survey types:

* [**Pre-chat survey**](contact-center-management-live-chat-operations-surveys-with-live-chat.html#pre-chat-survey)**:** Survey can be presented to the visitor in the time between when they click on the engagement and the time they enter the queue, provided there is an agent available. The information the visitor adds to this survey provides preliminary information to the agent about the visitor, such as the visitor’s name or the purpose of the inquiry.
* [**Post-chat survey**](contact-center-management-live-chat-operations-surveys-with-live-chat.html#post-chat-survey)**:** Survey can be presented to the visitor once their chat has ended. The information the visitor adds to this survey can be used to get feedback on the chat and measure customer satisfaction. An example for a post-chat survey question is a CSAT (Customer Satisfaction) question, such as, "How happy are you with the service you received in your last chat?"
* [**Offline survey**](contact-center-management-live-chat-operations-surveys-with-live-chat.html#offline-survey): Survey may be triggered when there are no available agents, for example, outside of the contact center operating hours. The information the visitor provides in this survey allows them to leave a message, understand what they are inquiring about, and/or collect their contact’s information so they can be reached during regular business hours.

There is an option to make survey questions mandatory; in which case a visitor can only submit the survey when all mandatory questions are answered. Below is an example of an offline survey form in the Embedded Engagement window.

_![](/img/accessibility-policy3.png)_

_Figure 3: Offline survey example_

**Messaging CAST survey**:

Customer satisfaction survey is sent to the consumer when the conversation is manually ended by either the agent or the consumer. The consumer is asked a single question, e.g. how would you rate the service that you received with a display of 5 stars ranking the experience from poor to excellent (1 star to 5 stars).

![](/img/accessibility-policy4.png)

## Secure form widget

The LivePerson secure form widget was specifically designed to provide an additional security layer that enables visitors to transmit their sensitive information, such as credit card holder data (CHD), social security numbers, and other personal identifiable information (PII), in a highly secure environment.

The secure form widget was designed to comply with the strictest requirements of the Payment Card Industry Data Security Standards (PCI-DSS).

Our secure form, which is sent by the agent to the visitor, contains various questions which the visitor can answer and submit. When a visitor submits a secure form, their sensitive information goes through a tokenization process, and is only then sent to the agent.

The secure form is opened in a widget in the engagement window. On desktop it opens alongside the engagement window, and on mobile it appears on top of the engagement window.

![](/img/accessibility-policy5.png)

_Figure 4: Secure form widget_

For more information about the secure form, see[ ](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/LiveEngage+Secure+Form+External.pdf)[LiveEngage Secure Form.](security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html)

## ID&V

[The Identification and Verification (ID&V)](security-regulations-security-validate-identity-of-consumers-during-conversations.html) solution enables customer care professionals (CCPs) to validate the identity of visitors during a chat.  At any time in a conversation, agents can decide to send an ID&V question to the visitor, requesting them to enter two random characters from their PIN or password, or any identifiable number or code, which they can then verify with the CRM system. The ID&V solution works seamlessly for both desktop and mobile web.

## Co-browse

Co-browsing takes conversations beyond text and transforms them into a rich consumer experience, providing a live and personalized service.

The agent can invite the consumer to a co-browse session directly from their workspace. The consumer will receive the invite on the web. After the consumer accepts the invitation, the agent controls the consumer’s browser guiding them to find the right information and to achieve first contact resolutions. Both the consumer and the agent can decide when to end the co-browse session. A record of the interactions remains in the conversation thread and the history stays active for both the consumer and the agent fostering more meaningful connections between brand and consumer.

## Scope of visitor experience accessibility

The LiveEngage visitor experience was created with people with disabilities in mind. LivePerson is committed to making its embedded engagement window and engagements increasingly accessible over time. The scope of the accessibility support includes:

* Engagements
* The embedded engagement window in embedded mode (embedded on the page)
* The embedded engagement window in separate browser/pop out mode
* The secure form widget and any new functionality added to the window over time
* ID&V
* Co-browse

All the above are fully accessible on the following:

* Desktop
* Android web
* iOS web

Listed below are the current accessibility features:

## General window accessibility

The following accessibility capabilities apply to all the engagement window areas, including conversation messages, surveys, Secure Form, Co-Browser and ID&V.

### Full keyboard support

A disabled user may be unable to operate a mouse or a similar pointing device, relying solely on the keyboard for navigation. Providing keyboard functions to replace standard mouse actions, such as access to menus, toolbars, buttons and links, is essential in accommodating users with disabilities.

For visitors who are not able to use a mouse, or prefer to use a keyboard, the embedded engagement window is fully operational using just a keyboard.

* All controls are completely operable by keyboard.
* All (and only) operable elements, such as form controls and buttons, can be accessed using the <tab> / <shift> + <tab> keys on desktop, and using relevant gestures on mobile web.
* Easy navigation between conversation messages using the up/down arrow keys and scrolling in the conversation area.
* The tab order of elements matches the order in which the elements visually appear.

### Accessible navigation on mobile

All the information mentioned above in the full keyboard support section is also supported on mobile web using navigation gestures. Each OS (iOS and Android) supports an accessibility mode in which gestures can be used to perform actions such as page scrolling, tab navigation, etc.

### Predictable and logical page layout

For people with vision and cognitive impairments, it can be challenging to navigate where they are in the page flow, and what options are available. Providing an embedded engagement window layout that is consistent, predictable and logical creates an intuitive, easy to operate environment. Different information types are kept segregated on separate pages or parts of the page. For example, the conversation messages are separated from the action menu, and surveys are located on different pages.

### Color and contrast

The interface does not rely on color to convey information or prompt actions from the user.

The following standard-compliant accessibility elements have been incorporated:

* Color is not used as a means of conveying information. Information is also conveyed through labeled buttons and texts. For example: errors are not only marked in red. They include an icon for indication and the appropriate ARIA labels
* Text is on backgrounds with appropriate contrast for the default window themes, with a text to background contrast ratio of at least 4.5. The colors of interface elements are customizable to allow the visitor the ability to configure the most legible contrast for their needs. In relevant text and meaningful images, make sure that the background and foreground colors have a text-background contrast ratio of at least 4.5:1 (for large scale text or images, 3:1)

{: .notice}  
If the customer chooses to makes changes to the default window themes, they are responsible for ensuring the window remains accessible.

### Clear interface elements

All interface elements are intuitive so that the user can navigate without requiring an introduction or help menu. Instructions to visitors provide cues that go beyond the shape, size, visual location, orientation, sound, or any other sensory characteristic of a feature.

The following elements have been incorporated within the embedded engagement window:

* Consistent buttons, labels, and names.
* All interface elements are labeled with tooltips specific to the interface.
* All form elements are labeled with wording specific to the object.
* Customers are given instructions when they must enter information.
* Screen readers follow chronological reading sequence in conversation log.
* No long passages of text are incorporated within the interface.

### Alternate text

The goal of embedded engagement window accessibility is to ensure that it is usable and available to the widest possible audience. This requires that all users can perceive and understand what is on the screen and act accordingly.

To achieve this, the embedded engagement window design takes into account the fact that the ability to see, read text, and process information varies from user to user, as well as across time and situation. Some users require alternate text to help them carry out these activities.

In the embedded engagement window we provide the following:

* All non-textual elements have alternate text.
* Any non-textual element has a textual description via tooltips on desktop.
* All alternate text is announced by the screen reader.

### Simplified writing

The interface and all text elements are written clearly, with no reliance on technical terms or jargon.

### Enhanced screen reader support

* Announcement of all textual content on the page, allowing the visitor to navigate the Engagement Window without the use of eyesight.
* Alternate text is announced for all window elements.
* Error messages are automatically read.
* Announcement of new messages sent by the agent to the visitor, as well as outgoing messages sent by the visitor to the agent.
* Sound indication for incoming messages.

### Supported screen readers on desktop

**NVDA:** Free open source screen reader, supported on Windows.

{: .notice}  
Not all screen readers support all window functionality. The messages are announced provided the screen reader model is supported.

### Supported screen readers on mobile

LivePerson’s mobile solution supports the iOS and Android screen readers VoiceOver and TalkBack as the baseline for ensuring the proper experience for visually impaired users.

**Supported screen readers:**

* **VoiceOver:** The screen reader created by Apple, included with iOS.
* **TalkBack:** The screen reader created by Google, included with Android. Works on native applications.

{: .notice}  
There are known issues with support for TalkBack and ARIA regions on the default Chrome browser.

### Read back

* All user interface controls allows you to navigate through screen readers. All interface components are coded logically, have descriptive names and can be properly operated with assistive technologies.
* Agent messages are read back to users as soon as the message appears.
* Outgoing messages are automatically read back. If the user hears an error in the message, they can retype the message with their corrections and resubmit.

### Native applications

In native applications, the LP Mobile interface includes audio cues ("earcons") to highlight actions in the interface, such as sent and received conversation messages, in addition to system messages like "Agent is typing…”.  On the web, these messages are read with text, rather than an audio alert being played.

### Keyboard

Using their screen readers, users can navigate LP Mobile interface utilizing the keyboard arrow keys. These move the "focus" used by the screen reader.

### Program determined language

Language attributes on the HTML element were added for automatic language detection.

## Conversation accessibility

The embedded engagement window facilitates conversation accessibility by supported screen readers in the following ways:

### Screen reader support:

* Incoming messages are announced as they arrive, preceded by the sender and time stamp.
* Outgoing messages are announced as they are sent.
* When navigating between messages with arrow keys, the selected messages are announced, along with their sender and timestamp.

Messages can be sent using only the keyboard. Press <Enter> to send messages. A line break can be entered using <Alt>+ <Enter>.

When the agent is typing a message, before it is sent, the message "Agent is typing" appears in the status bar and is announced.

### Survey accessibility

The engagement window facilitates survey accessibility in the following ways:

* Surveys are fully operable by keyboard. All survey questions can be reached via the <tab> /<shift> + <tab> keys and answered via keyboard.
* Screen reader support: All survey questions, inputs and errors are announced by the supported screen readers.
* Clear error handling in surveys:
  * If one or more errors in a survey, which are a result of incorrect input (such as the use of letters in a numeric field or required questions are not answered) a summary message with the number of errors found on the page is displayed at the top of the survey.
  * Under each of the questions that contain an error, there is a specific error message indicating an error in the field and stating how to fix the problem.
  * All error messages are in a red font and accompanied by an icon so that the information is not conveyed via color alone.
  * Survey submissions that contain errors will not be submitted. The focus begins with the first field where the error occurred, so that it is easily located and corrected.

## Mobile web accessibility

### User interface

The LP team has worked on implementing a number of accessibility features within the mobile web interface. The section below highlights some of the areas in which they have concentrated their efforts to make certain that best practice methods have been implemented.

### Audio indicators

For visually impaired users, reliance on audio cues is essential. The following audio accessibility elements have been incorporated within LP Mobile for use with screen readers:

* All messages are read, both those sent by the visitor and received from an agent.
* Interface elements and messages are read as the user navigates.
* System messages are read by the interface as they appear on the screen.
* On native platforms, audio earcons are sent when the user sends and receives messages.
* On iOS, some system messages play as audio earcons rather than spoken text. For example the "Agent is typing..." can be configured to be a typing sound.

{: .notice}  
The Android library does not require code changes to support this functionality.

### **Visual indicators**

When the user enters incorrectly formatted information in a field, an error message appears and prompts them to correct the information before proceeding.

The following accessibility elements have been incorporated within the engagement window on Mobile Web:

* Visitors are able to navigate the content of a Web page in a sequential order, so that the meaning of information and operability of the page are preserved. This includes navigation by keyboard. Using only a keyboard, our customers are able to navigate the website, operate its controls, and control all its features.
* If incorrect information is entered within a field, like, for example, an email written in the wrong format, the user is notified with an error message posted before the field in error.
* No extreme changes are made when using keyboard navigation. For example, users may move to a new window, submit a form, or open a modal dialog.
* When content is navigated by keyboard, a clearly visible indicator always shows the focus.
* Whenever possible, information entered by our customer is validated.
* Decorative images used for customer branding do not contain any information related to usability.

### Timing

The following accessibility elements have been incorporated within mobile web:

* No timed responses or time limits are required of the visitor in the interface.
* No deliberate interruptions are incorporated as part of mobile web experience.

### Minimized dynamic content

In order to make the visitor experience as unobtrusive as possible, the amount of dynamic content has been minimized.

The following accessibility elements have been incorporated within mobile web:

* No interruptions during operation of the Mobile experience.
* No changes occur on the screen without user acceptance.
* No automatic changes occur when a new item is focused upon.
* No authentication required in the Mobile Web interface.
* Before they perform an action, visitors are notified of when and/or where an "extreme" change will occur. For example: moving to a new window, submitting a form, or the opening a modal dialog.
* When a new item is focused upon, no automatic changes occur.

## Accessibility and sound effects

If voice over functionality is enabled on a device, the iOS .lib file is able to play custom sound effects (if the files are present) within the iOS project. Visitors require the exact file names and extension listed below.

**Items to note:**

* Do not place the file in the LP Mobile .bundle directory.
* If the files are not present, no sound will be played.
* Custom audio files are not present by default.

**Below is a list of the file names and their functions:**

* LIOAccessibilitySoundMessageSent.aiff: Played when the visitor sends a chat message.
* LIOAccessibilitySoundMessageReceived.aiff: Played when the visitor receives a chat message from an agent.
* LIOAccessibilitySoundTyping.aiff: Played while the agent is typing a message in the Agent Console.
* LIOAccessibilitySoundLoading.aiff: Played when a chat is loading or queued, while the loading screen is still open.

## Mobile web summary

To summarize, these various accessibility services are designed to complement one another, so each visitor can find the right combination of features to best accommodate their level of limitation. By using Mobile Web accessibility options, brands can cater to the needs of an extended user audience and increase engagement reach.

## Recommended reading

[Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/WAI/standards-guidelines/wcag/)