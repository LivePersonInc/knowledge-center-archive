---
pagename: Secure forms for chat user guide
categoryName: Admin & settings
subCategoryName: ''
indicator: chat
subtitle: Secure forms is designed to provide an additional security layer that enables
  consumers to provide sensitive information in full confidence
level3: ''
permalink: security-regulations-secure-forms-secure-forms-for-chat-user-guide.html
isTutorial: false
isNew: false
date: 2019-01-29 11:36:31 +0000

---
LivePerson invests heavily in providing the most secure platform possible for our services, customers, and their data. As veterans in the field, we understand that security is paramount in correspondence between agents and consumers and requires a heightened level of protection. The LiveEngage secure form was specifically designed to provide the additional security layer that enables consumers to be able to provide their sensitive information (such as Cardholder Data /CHD, social security number, and other Personal Identifiable Information/PII) in a highly secure environment.

Secure forms are supported both on desktop and mobile web.

## The benefits

The LivePerson secure form provides brands with an enhanced engagement experience with the following benefits:

* **Extra secure interaction:** The secure form dedicates a "secure tunnel" within the standard chat for exchanging Personal Identifiable Information (PII), Cardholder Data (CHD), and other sensitive identity validation data like answers to verification questions and PINs. Agents continue to operate in the same Agent Workspace environment as data is sent from the visitor to the agent in a safe, PCI compliant interaction.
* **No storage of sensitive data in chat transcripts:** Data processed by the secure form is not stored as part of the standard chat transcripts and cannot be retrieved through the application after the chat session has ended. The data is securely stored in its tokenized form in a dedicated database.
* **Off the record questions (CVV):** The LiveEngage secure form offers the option of "off the record” or CVV verification questions. In both cases, the visitor’s answers are not stored anywhere (not even in tokenized form), and are only available to the agent in real time. This question type can be used for asking the visitor CVV information in a secure PCI compliant manner.

## European security standards

LivePerson works hard to ensure that our customers around the world can safely and securely use our platform. There are several different standards for protecting data around the world. LivePerson meets the following international standards for data protection, ensuring that our European customers can safely use our secure forms:

1. **Standard 1: PCI-DSS**

   LivePerson complies with Payment Card Industry Data Security Standards (PCI DSS) 3.2 for it’s secure form Widget and Billing system. To view the certificate, click[ here.](https://securityhub.liveperson.com/support/solutions/articles/5000027697)
2. **Standard 2: GDPR**

   LivePerson has worked to ensure compliance with the EU General Data Protection Regulation (GDPR). Please read more on the LivePerson [website](https://www.liveperson.com/security).
3. **Standard 3: US: Privacy Shield certification**

   LivePerson has had European operations for years is compliant with the current European data privacy rules. To learn more, click [here](https://www.privacyshield.gov/participant?id=a2zt0000000TO5eAAG&status=Active).

## When to use secure forms?

Some of the most common use cases for the secure form include:

* Visitors need to provide their credit card information to an agent.
* Visitors need to provide their CVV number to an agent.
* Visitors need to provide PII to an agent as part of the identity validation process, for example, to answer a secret question.
* Any other situation requiring the visitor to send sensitive information to the agent.

## PCI-DSS compliance

The LivePerson secure form is specifically designed to comply with the strict requirements of the Payment Card Industry Data Security Standards (PCI-DSS). The form was developed under the guidance of a Qualified Security Assessor (QSA) and a dedicated PCI-DSS environment hosts the secure form system components.

Following the completion of an onsite assessment, the LiveEngage secure form environment has been officially certified as compliant with the requirements of a Level 1 Service Provider PCI-DSS (version 3.1). Attestation of Compliance (AOC) can be provided upon request.

## How it works

An agent can send a secure form from the[ agent workspace](agent-manager-workspace-agent-tools-for-live-chat-agent-workspace-for-live-chat.html) at any time during a chat session by clicking the secure form tab in the [predefined content](/agent-manager-workspace-workspace-configuration-predefined-content-overview.html) widget and selecting a secure form.

![](/img/Secure-forms-chat1.png)

_Figure 1 Secure form within the agent workspace_

The visitor then fills out and submits the secure form back to the agent. The receiving agent is the only one able to view the information sent by the visitor.

{: .notice}  
If there are other agents viewing the chat, they will not be able to view the secure form. In addition, agents who receive a transferred or reassigned chat will not be able to view the secure form. Only the agent who sent the form can access the submitted form.

Example of a secure form in use:

![](/img/secure-form-chat2.png)

_Figure 2: LivePerson secure form within an engagement window interaction_

## Fully Accessible visitor experience

The secure form widget complies with ADA and WCAG 2.0 AA disability accessibility requirements. This applies to both the desktop and mobile web (iOS and Android) and includes:

* **Screen reader support:** secure forms can be filled out using screen readers for visually impaired visitors.
* **Keyboard operable:** secure forms can be operated without the use of a mouse for visitors with motor function and/or visual impairments.
* **Improved error handling**: Clear error indication and suggested fixes.

## Data flow

Tokenization is a method of substituting data to render it meaningless to anyone gaining unauthorized access. The tokenization processes implemented in the secure form environment is based on a technology manufactured by a leading provider of tokenization solutions. The sensitive data submitted in the secure form is sent from the visitor to the agent via the PCI-DSS certified environment. A dedicated PCI compliant server handles the tokenization of the sensitive information and validates agent authorization before delivering the visitor-submitted secure form.

The following diagram shows the process and security layers of a visitor completing a secure form and sending it to an agent.

![](/img/secure-form-chat3.png)

_Figure 3: Secure form visitor to agent flow chart_

Below is a detailed explanation of the flow of the diagram above:

1. The agent sends a secure form with a one-time token (OTK) for retrieval.
2. The visitor receives the secure form using the OTK and submits it using a different OTK.
3. The data is tokenized. The tokenized data is not legible by anyone outside the service, and moreover, the token is assigned to a specific action in the environment. For example, you cannot use a submit data OTK to retrieve data.
4. The data is stored in its tokenized form in a dedicated database and is represented by a Universally Unique Identifier (UUID). This means that the tokenized data is never directly accessible to any client outside of the LivePerson environment. Rather, the client receives the UUID and requests the data from the PCI environment. "Off the Record" data (CVV) is not stored in the database, but is stored in memory for a short period of time. After this time period, the agent will need to resend the form in order to access this information.
5. The UUID along with another OTK is sent to the agent.
6. The agent retrieves the form via the OTK and UUID.
7. The service detokenizes the data and sends it back to the agent.

## Security measures

The secure form solution was designed with strict security parameters to help ensure sensitive customer information is sent only to the appropriate, authorized agent (these controls are in addition to the standard controls required by PCI-DSS). The following controls have been implemented as part of the solution:

* Data sent from the visitor by means of the secure form undergoes a tokenization process.
* Access to the tokenized data requires authentication and session validation.
* A unique one-time key (OTK) is utilized for each form initiated by an agent. Each OTK can only be used once and is valid for a very short period of time (seconds).
* One-time-keys undergo validation and verification during the data de-tokenization process.
* The visitor's OTK can only be used for tokenizing the data. The agent's OTK can only be used for detokenizing the data. Moreover, an OTK is specific to one site. This ensures that the OTK cannot be inappropriately manipulated.
* The sensitive data is only accessible during the active session. It is not stored in the chat history or transcripts.
* The tokenized data is securely stored in the LivePerson application database in its tokenized form for a default period of 13 months. Currently, the application does not provide access to retrieve the tokenized data.

## Supported browsers

Refer to [system requirements](admin-settings-system-requirements.html) for information about supported browsers.

## Considerations when using secure forms

When using secure forms, bear in mind:

* Submitting CVV (Card Verification Value) or CVC (Code Verification Certificate) data should only be performed in CVV question type or questions that are marked as "Off the Record".
* Data submitted in the secure form is only retrievable for the duration of the session it was submitted in.
* Agent workstations utilized for viewing secure forms are in-scope of PCI-DSS certification.
* LivePerson accounts password and login policy must be enabled and configured according to PCI-DSS requirements.

## Setting up secure forms

Secure forms are configured by LivePerson. To enable this feature, please contact LivePerson customer support or your account team. Your LivePerson account team will work with you make the necessary adjustments to your account settings and configurations.

### Account setup

Once secure form features have been enabled on your account, your LPA will need to setup your account for secure forms. The following parameters will need to be configured in order for secure forms to work on your account; if you require different account settings, please discuss this with your LivePerson account team.

The **account password policy** will be configured as follows:

| Setting | Required Configuration |
| --- | --- |
| Minimum number of characters | Set to minimum 7 |

The **Failed login policy** will be configured as follows:

| Setting | Required Configuration |
| --- | --- |
| Automatically disable operator after number of failed logins | Set to minimum 3 |

The **idle operator policy** will be configured as follows:

| Setting | Required Configuration |
| --- | --- |
| Automatic action when operator is logged in but idle | Set to: “Logout the operator” |

**Permission settings**

The following permissions related to secure forms need to be enabled for an account:

| Role | Permission | Permission definition | Default State (role) |
| --- | --- | --- | --- |
| Agent | Use secure form within a conversation | For brands who have enabled the secure forms feature, this permission allows the Agent to use the form within a conversation | On |

{: .notice}  
The following permission for agent managers also relates to secure forms, but does not need to be enabled unless you wish Agent Managers to be able to view secure form responses in the engagement history.

| Role | Permission | Permission definition | Default State (role) |
| --- | --- | --- | --- |
| Agent Manager | View secure form responses in Engagement History | For brands who have enabled the secure forms feature, this permission allows the Agent Manager to view all secure form responses in the Engagement History | Off |

To verify that permissions are enabled:

1\.    In the users tab, click on the profiles page.

2\.    Click on the ‘agent’ profile. The edit profile page will open.

3\.    Under permissions, scroll down to confirm that the ‘use secure form within a conversation’ permission is enabled.

4\.    Click save.

{: .notice}  
If a you would like to enable the secure forms permission for some agents, but not for others, this can be achieved by creating a new custom profile within the agent role. For further information, refer to the [customize user profiles](admin-settings-permissions-customize-permissions.html) documentation.