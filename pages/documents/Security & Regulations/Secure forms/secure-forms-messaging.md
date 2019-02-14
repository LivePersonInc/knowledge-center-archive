---
pagename: Secure forms for messaging user guide
categoryName: Security & regulations
subCategoryName: Secure forms
indicator: messaging
subtitle: LivePerson invests heavily in providing the most secure platform possible
  for our services, customers, and their data
level3: ''
permalink: security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html
isTutorial: true
isNew: false
date: 2019-01-29 08:27:49 +0000

---
LivePerson invests heavily in providing the most secure platform possible for our services, customers, and their data. As veterans in the field, we understand that security is especially paramount in correspondence between agents and consumers and requires a heightened level of protection. The LivePerson secure form was specifically designed to provide the additional security layer that enables consumers to be able to, in full confidence, provide their sensitive information (such as Cardholder Data /CHD, social security number, and other Personal Identifiable Information/PII) in a highly secure environment.

<iframe src="https://player.vimeo.com/video/238919406" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Secure form benefits

The LivePerson secure form provides brands with an enhanced engagement experience with the following benefits:

* Extra secure interaction: The secure form dedicates a "secure tunnel" within the standard chat for exchanging Personal Identifiable Information (PII), Cardholder Data (CHD), and other sensitive identity validation data like answers to verification questions and PINs. Agents continue to operate in the same Agent Workspace environment as data is sent from the visitor to the agent in a safe, PCI compliant interaction.
* No storage of sensitive data in chat transcripts: Data processed by the secure form is not stored as part of the standard chat transcripts and cannot be retrieved through the application after the chat session has ended. The data is securely stored in its tokenized form in a dedicated database.
* Off the record questions (CVV): The LivePerson secure form offers the option of "Off the Record” or CVV verification questions. In both cases, the visitor’s answers are not stored anywhere (not even in tokenized form), and are only available to the agent in real time. This question type can be used for asking the visitor CVV information in a secure PCI compliant manner.

## **European security standards**

LivePerson works hard to ensure that our customers around the world can safely and securely use our platform. There are several different standards for protecting data around the world. LivePerson meets the following international standards for data protection, ensuring that our European customers can safely use our Secure Forms:

1. Standard 1: PCI-DSS
   1. LivePerson complies with Payment Card Industry Data Security Standards (PCI DSS) 3.2 for it’s Secure Form Widget and Billing system. To view the certificate, click [here](https://securityhub.liveperson.com/support/solutions/articles/5000027697-pci-dss-certificate-).
2. Standard 2: GDPR
   1. LivePerson has worked to ensure compliance with the EU General Data Protection Regulation (GDPR). Please read more on the LivePerson [website](https://www.liveperson.com/security).
3. Standard 3: US: Privacy Shield certification
   1. LivePerson has had European operations for years is compliant with the current European data privacy rules. To learn more, click [here](https://www.privacyshield.gov/participant?id=a2zt0000000TO5eAAG&status=Active).

## When to use the LiveEngage secure form

Some of the most common use cases for the secure form include:

* Visitors need to provide their credit card information to an agent.
* Visitors need to provide their CVV number to an agent.
* Visitors need to provide PII to an agent as part of the identity validation process, for example, to answer a secret question.
* Any other situation requiring the visitor to send sensitive information to the agent.

## PCI-DSS compliance

The LiveEngage secure form is specifically designed to comply with the strict requirements of the Payment Card Industry Data Security Standards (PCI-DSS). The form was developed under the guidance of a Qualified Security Assessor (QSA) and a dedicated PCI-DSS environment hosts the secure form system components.

Following the completion of an onsite assessment, the LiveEngage secure form environment has been officially certified as compliant with the requirements of a Level 1 Service Provider PCI-DSS (version 3.1). Attestation of Compliance (AOC) can be provided upon request.

## How it works

An agent can send a secure form from the Agent Workspace at any time during a messaging session by clicking the secure form tab in the Predefined Content widget and selecting a secure form.  
The visitor then fills out and submits the secure form back to the agent. The receiving agent is the only one able to view the information sent by the visitor.

{: .notice}  
If there are other agents viewing the chat, they will not be able to view the secure form. In addition, agents who receive a transferred or re-assigned chat will not be able to view the secure form. Only the agent who sent the form can access the submitted form.

![](/img/Secure_form-messaging-user-guide1.png)

_LivePerson secure form within a mobile-app messaging conversation_

## Fully accessible visitor experience

The secure form widget complies with ADA and WCAG 2.0 AA disability accessibility requirements. This applies to both iOS and Android in-app messaging and includes:

* Screen reader support: secure forms can be filled out using screen readers for visually impaired visitors.
* Keyboard operable: secure forms can be operated without the use of a mouse for visitors with motor function and/or visual impairments.
* Improved error handling: Clear error indication and suggested fixes.

## Data flow

Tokenization is a method of substituting data to render it meaningless to anyone gaining unauthorized access. The tokenization processes implemented in the secure form environment is based on a technology manufactured by a leading provider of tokenization solutions. The sensitive data submitted in the secure form is sent from the visitor to the agent via the PCI-DSS certified environment. A dedicated PCI compliant server handles the tokenization of the sensitive information and validates agent authorization before delivering the visitor-submitted secure form.

The following diagram shows the process and security layers of a visitor completing a secure form and sending it to an agent.

![](/img/Secure-form-messaging-userguide2.png)

_Secure form visitor to agent flow chart_

Below is a detailed explanation of the flow of the diagram above:

1. The agent sends a secure form with a one-time token (OTK) for retrieval.
2. The visitor receives the secure form using the OTK and submits it using a different OTK.
3. The data is tokenized. The tokenized data is not legible by anyone outside the service, and moreover, the token is assigned to a specific action in the environment. For example, you cannot use a submit data OTK to retrieve data.
4. The data is stored in its tokenized form in a dedicated database and is represented by a Universally Unique Identifier (UUID). This means that the tokenized data is never directly accessible to any client outside of the LivePerson environment. Rather, the client receives the UUID and requests the data from the PCI environment. "Off the Record" data (CVV) is not stored in the database, but is stored in memory for a short period of time. After this time period, the agent will need to resend the form in order to access this information.
5. The UUID along with another OTK is sent to the agent.
6. The agent retrieves the form via the OTK and UUID.
7. The service retrieves the data from its tokenized form and sends the data back to the agent in a readable format.

## Security measures

The secure form solution was designed with strict security parameters to help ensure sensitive customer information is sent only to the appropriate, authorized agent (these controls are in addition to the standard controls required by PCI-DSS). The following controls have been implemented as part of the solution:

* Data sent from the visitor by means of the secure form undergoes a tokenization process.
* Access to the tokenized data requires authentication and session validation.
* A unique one-time key (OTK) is utilized for each form initiated by an agent. Each OTK can only be used once and is valid for a very short period of time (seconds).
* The consumer has a predefined period of time to fill the form. To configure this time period, contact your LivePerson account team.
* OTKs undergo validation and verification during the data de-tokenization process.
* The visitor's OTK can only be used for tokenizing the data. The agent's OTK can only be used for retrieving the data and sending it back in a readable format. Moreover, an OTK is specific to one site. This ensures that the OTK cannot be inappropriately manipulated.
* The sensitive data is only accessible during the active session (until the conversation is resolved or the agent logs out). It is not stored in the chat history or transcripts.
* The tokenized data is securely stored in the LivePerson application database in its tokenized form for a default period of 13 months.
* The tokenized data can be accessed with specific permissions. Contact your LivePerson account team for more information.

## Supported browsers

Refer to[ ]()[system requirements](admin-settings-system-requirements-supported-languages.html) for information about supported browsers.

## Setting up LivePerson secure forms

Secure forms are configured by LivePerson. To enable this feature, please contact LivePerson customer support or your account team. Your LivePerson account team will work with you make the necessary adjustments to your account settings and configurations.

### Account setup

Once secure form features have been enabled on your account, your LPA will need to setup your account for secure forms. The following parameters will need to be configured in order for secure forms to work on your account; if you require different account settings, please discuss this with your LivePerson account team.

The account password policy will be configured as follows:

| Setting | Required Configuration |
| --- | --- |
| Minimum number of characters | Set to minimum 7 |

The failed login policy will be configured as follows:

| Setting | Required Configuration |
| --- | --- |
| Automatically disable operator after number of failed logins | Set to minimum 3 |

The idle operator policy will be configured as follows:

| Setting | Required Configuration |
| --- | --- |
| Automatic action when operator is logged in but idle | Set to: “Logout the operator” |

The LPA will also set the account to block credit card patterns.

### Permission settings

The following permissions related to secure forms need to be enabled for an account:

| Role | Permission | Permission definition | Default State (role) |
| --- | --- | --- | --- |
| Agent | Use secure form within a conversation | For brands who have enabled the secure forms feature, this permission allows the Agent to use the form within a conversation | On |

{: notice}  
The following permission for Agent Managers also relates to secure forms, but does not need to be enabled unless you wish Agent Managers to be able to view secure form responses in the Engagement History.

| Role | Permission | Permission definition | Default State (role) |
| --- | --- | --- | --- |
| Agent Manager | View secure form responses in Engagement History | For brands who have enabled the secure forms feature, this permission allows the Agent Manager to view all secure form responses in the Engagement History | Off |

To verify that permissions are enabled:

1. In the Users tab, click on the Profiles page.
2. Click on the ‘Agent’ profile. The Edit profile page will open.
3. Under Permissions, scroll down to confirm that the ‘Use secure form within a conversation’ permission is enabled.
4. Click Save.

{: notice}  
If you would like to enable the secure forms permission for some agents, but not for others, this can be achieved by creating a new custom profile within the agent role. For further information, refer to the[ customize user profiles.]()

### Creating secure forms

Your LivePerson account team will create and manage your secure forms. We recommend the following best practices for creating secure forms:

* Each form should be given a clear name that can easily be identified by the agent and is appropriate for display to the consumer.
* For each new secure form question, the following parameters need to be defined:

1. Answer type: textual, numeric or CVV;
2. Whether or not the answer is required (the form cannot be submitted without it);
3. Whether or not the answer is masked (this option will mask the characters in the field on the visitor side for over-the-shoulder situations);
4. Whether or not the answer is off the record (meaning that the answer will not be stored anywhere, even in its tokenized form; this is suitable for type CVV).

* The questions entered in the form should be short and clear.
* Each survey can include up to 20 questions.
* The text field for secure form answers also does not accept the following special characters: < > ( ) \\ ' " &

## Experience

### Mobile-app messaging SDK

Secure forms are an integrated part of the mobile-app messaging SDK.

### Push notifications

If the your app is running in the background, when an agent sends a secure form, the consumer will receive the following push notification: “<Agent Name>:<Secure form name>”. Tapping the push notification will navigate the consumer to the conversation.

### Invitation

When an agent sends a secure form to a consumer, a new rich message displays the form title, description, status and a button.

#### iOS

This is how the secure form invitation will display to the consumer on the iOS mobile-app messaging SDK:

![](/img/Secure-form-messaging-userguide3.png)

The following invitation design capabilities are available on the iOS mobile-app messaging SDK:

1. secureFormBubbleBackgroundColor = UIColor.white
2. secureFormBubbleBorderColor = UIColor(rgba: "#d4d4d5")
3. secureFormBubbleBorderWidth = 2.0
4. secureFormBubbleTitleColor = UIColor.black
5. secureFormBubbleDescriptionColor = LPColor.LPDarkGray2
6. secureFormBubbleFillFormButtonTextColor = LPColor.LPBlue
7. secureFormBubbleFillFormButtonBackgroundColor = UIColor.clear
8. secureFormBubbleFormImageTintColor = LPColor.LPBlue

![](/img/Secure-form-messaging-userguide4png.png)

Other invitation statuses include:

1. Form expired - this status message will display if the form has passed the configured expiry time.
2. Error - this status message will display if there has been an error in loading the form.
3. Form submitted - this status message will display if the form has already been submitted and cannot be reopened for security reasons.

When there’s no connectivity, the “fill in form” link will be disabled and greyed out.

#### Android

This is how the secure form invitation will display to the consumer on the Android mobile-app messaging SDK:

![](/img/Secure-form-messaging-userguide5.png)

The following invitation design capabilities are available on the Android In-App Messaging SDK:

1. <color name="agent_bubble_pci_form_invitation_background_color">@android:color/white</color>
2. <color name="agent_bubble_pci_form_invitation_background_btn_color">@android:color/white</color>
3. <color name="agent_bubble_pci_form_invitation_stroke_color">@color/lp_gray</color>
4. <color name="agent_bubble_pci_form_invitation_button_text_color">@color/lp_blue</color>
5. <color name="agent_bubble_pci_form_invitation_description_text_color">@color/lp_gray</color>
6. <color name="agent_bubble_pci_form_invitation_title_text_color">@android:color/black</color>
7. <color name="agent_bubble_pci_form_invitation_icon_tint_color">@color/lp_blue</color>
8. (Bubble border width is inherited from standard bubbles)

![](/img/SSecure-form-messaging-userguide6-1.png)

Other invitation statuses include:

1. Form expired - this status message will display if the form has passed the configured expiry time.
2. Error - this status message will display if there has been an error in loading the form.
3. Form submitted - this status message will display if the form has already been submitted and cannot be reopened for security reasons.

#### Form web view

Once the consumer has tapped the ”Fill in form” button, a web view overlay is displayed containing the secure form.

The form includes :

1. Navigation bar with the form’s name and an option to exit the form
2. Header displaying a security statement and the PCI certification logo. The logo can be hidden via configuration in the window studio
3. Secure form questions
4. Submit button
5. Footer displaying a security statement

![](/img/Secure-form-messaging-userguide7.png)

#### iOS

The following UI and designable elements for the form are available on the iOS mobile-app messaging SDK:

1. secureFormNavigationBackgroundColor = LPColor.LPBlue
2. secureFormNavigationTitleColor = UIColor.white
3. secureFormBackButtonColor = UIColor.black
4. secureFormUIStatusBarStyleLightContent = true

![](/img/Secure-form-messaging-userguide8.png)

#### Android

The form on the Android mobile-app messaging SDK is as follows (top bar design is inherited from the conversation top bar):

![](/img/Secure-form-messaging-userguide9.png)

## **Messaging connectors**

For messaging connectors (SMS, WhatsApp Business, Facebook, Apple Business Chat, Google RCS Business Messaging) secure forms will be sent to the relevant channel via an external link. The consumer will be able to tap on the link, which will navigate them to the device default browser, where they will be able to see the form, fill it and submit.

The design for the form in the messaging connectors experience is inherited from the engagement window default design.

{: .notice}  
The first connector to support secure forms will be Twilio SMS (end of January, 2019 release). Other connectors will follow during February and March.

### Invitation

The connector’s secure form invitation contains the secure form name and a link to the secure form:

![](/img/Secure-form-messaging-userguide10.png)

### Form

#### Language

* Each channel - SMS, WhatsApp, ABC, Facebook, Google RCS - will have a secure form configuration (configuration is explained further in the below section)  that will set the secure form language, which will automatically translate the following elements:

1. Header with security statement
2. Submit button
3. Footer with security statement

* After form submission by the consumer, a predefined message will be sent, which will be translated automatically per the language that was configured for the connector (the message is not configurable):  
  “The following secure form has been submitted: <Secure form title>”
* Brands will be able to configure a language per channel entry point (per SMS number, FB page, Biz ID, WhatsApp number etc)

#### Layout & design

* The form layout and design will be the same as the web messaging secure form view
* The form design and colors will be inherited from the default window design elements, which are: 
  1. Top bar with the form name:
  * Form name will be displayed as created
  * Will always be blue background (hex color #0363ad)
  * Will always be set with the font “Arial”, color white

{: .start="2"}
  1. Secure Form Logo will always be shown
  2. Secure Form questions:
  * Font will always be “Arial”, color gray (hex color #6D6E70)

{: .start="4"}
   1. Secure From question placeholder:
   * Font will always be “Arial”, color gray (hex color #6D6E70)

{: .start="5"}
   	1. Secure form submit button:
    * Color will always be blue (hex color #0363ad)
    * font will always be “Arial”, color white

{:start="5"}
1. Secure from header and footer text:
* Will always be set with the font “Arial”

#### User interface (UI)

The following UI shows the connector’s secure form experience on mobile and tablet (the numbers indicate the form design elements as explained above):

![](/img/Secure-form-messaging-userguide11.png)

## Success and error messages

The following error messaging will display when the form fails to load:

![](/img/Secure-form-messaging-userguide12.png)

The following message will display after the consumer has successfully submitted the form:

### Configuring the secure form language

To configure the secure form language per connector please speak with your LivePerson representative.

### Notes and limitations

The following texts are not customizable:

* Invitation text (only the form title can be customized)
* Header with security statement
* Submit button
* Footer with security statement
* The texts above will automatically be translated to the language selected for each connector in Houston. Please review the above section on connector’s secure forms language configuration to edit the language per connector.
* The secure form invitation and submission texts for consumers via connectors channels are as follows:

1. Invitation: "{{secureFormName}}: {{secure form link}}"
2. Submission: "The following Secure Form has been submitted: {{secureFormName}}"
3. The above texts will be automatically translated per the language selected for the connector

* Secure forms for connector will not be available of desktop. When a consumer tries to click on a secure form link from one of the connector channel’s web apps/websites, he/she will receive the following error message:  
  “You’ll need a mobile or tablet device to perform this operation. Open this message on your mobile or tablet to continue.”
* Secure form view indication - for connectors flow, when an agent will send another/additional secure form while the consumer is currently viewing an already open secure form, the agent will automatically see the second secure form status as “viewed.”
* If a consumer clicks the secure form link and closes it before submitting (or will leave the form open but will not submit the answers yet), and then tries to click on the link and open it again, they will receive an error message and will not be able to see the form (on both open forms). The error message is: _The secure form could not be opened. <br>Please contact your agent for assistance."_
* If consumer will click on the form after the value of messaging.secure.form.getForm.timeout.sec has passed - they will receive the following error: _The secure form could not be opened. <br>Please contact your agent for assistance."_
* If the consumer will try to submit the form after the value of messaging.secure.form.submitForm.timeout.sec has passed - they will receive the following error on the form UI: _Your session has expired. Please close the window and start a new conversation in order to resume”._

## Multi-device continuity

* When an agent sends an invitation to open a secure form, it displays in the conversation thread in all connected devices.
* The form can only be submitted from the device it was opened from; the consumer will not be able to open the form from another device.
* Once submitted on one device, all other connected devices will display the following message: “This form has been submitted and cannot be reopened for security reasons”.

## Agent workspace

Once a secure form has been sent, the conversation transcript will display the following statuses:

* The form has been sent by the agent.
* The consumer has received the form.
* The consumer has viewed the form.
* The consumer has submitted the form.

When the agent clicks on the “view secure form” link, the secure form data will display as follows:

![](/img/Secure-form-messaging-userguide14.png)

If the agent closes the conversation or logs out, or if there was an issue and the secure form results are no longer available, an error message will display saying "could not load secure form"

## **Agent manager**

To ensure secure form data is protected, agent managers cannot view information entered in the secure form either during or after a conversation. By default, agent managers can view the following secure form statuses:

* Sent by the agent
* Received by the consumer
* Viewed by the consumer
* Submitted by the consumer

If required, your LivePerson account team can enable a specific feature that will enable your agent managers to see the secure form results in the conversation history, once the form has been submitted and the conversation closed. Information submitted in response to “Off the record” questions will not be displayed as it is saved for the duration of the conversation only.

In order for the agent manager to be able to view the secure form data, they will need to have the following permission enabled:

View Engagement history PCI PII

For guidance on enabling/disabling permissions, please see [permission settings.]()

## Considerations when using secure forms

When using secure forms, bear in mind:

* Secure forms are general and are not specific per skill.
* Submitting CVV (Card Verification Value) or CVC (Code Verification Certificate) data should only be performed in CVV question type or questions that are marked as "Off the Record".
* Data submitted in the secure form is only retrievable for the duration of the session it was submitted in.
* Agent workstations utilized for viewing secure forms are in scope of PCI-DSS certification.
* LivePerson accounts password and login policy must be enabled and configured according to PCI-DSS requirements (see [account setup](https://docs.google.com/document/d/1heZhoYhTO3HS-tFRL3lUgcTg0g7Lxsp0yth_ub0pvVs/edit#heading=h.ygcffa15u4qp) above).
* Invitations, alerts and consumer texts are customizable on both In-App Messaging SDKs.
* Within form web view, the header text, placeholder, errors, submit button and ‘note’ text are displayed according to the language of the device (if the device language is available on LiveEngage, if not it will default to English).
* The following time limitations apply:

1. If it takes more than 5 minutes from the moment a consumer clicks to open the secure form until it loads, the secure form will expire. This can occur as the result of a bad network connection or server failure. The 5 minute variable is configurable.
2. The consumer can submit the secure form up to 30 minutes from the time they first open it. The 30 minute variable is configurable.
3. Both variables can be set to any time limit between 1 and 86400 seconds.

* The consumer can submit each form only once.
* Accessing the same form multiple times:
  * On iOS, the consumer can open and close the form multiple times. the form will still be accessible to the consumer until:

1. The consumer logs out
2. The app is closed so its not running in the background
3. The form expires
4. The consumer opens another secure form

* On Android, the consumer is currently only able to open the form once. If the consumer tries to exit the form on Android, an alert message will appear.
* For further information, refer to the [iOS In-App Messaging SDK](https://developers.liveperson.com/consumer-experience-ios-sdk-overview.html) and [Android In-App Messaging SDK](https://developers.liveperson.com/android-overview.html) documentation.

## Reporting on secure forms

The following secure form events are reported in Report Builder:

* Agent sent the secure form.
* Consumer opened the secure form.
* Consumer submitted the secure form.

Currently, reporting will be carried out on a per-need basis through the LivePerson analytics team - please contact your LivePerson account team for more information.