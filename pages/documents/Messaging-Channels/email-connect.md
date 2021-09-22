---
pagename: Email Connect
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle: Get more out of email with LivePerson's Email Connect, a single platform
  to manage email and all customer communications
level3: ''
permalink: messaging-channels-email-connect.html
isTutorial: false
isNew: false
redirect_from:
  - messaging-channels-emailconnect.html
---
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/364067090?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

With Email Connect, brands can manage, analyze and respond to emails from the same command center that powers conversations on the world’s most popular messaging channels.

Brands can easily manage email conversations alongside conversations in messaging channels like Apple Business Chat, WhatsApp, SMS, Facebook Messenger, Web Messaging and Google RBM, eliminating the need to switch between tools to respond to emails.

Email Connect utilizes the powerful features available with other messaging channels, including support for bots powered by the Conversation Orchestrator, predefined content, reporting and Dynamic Capacity.

## Why brands should use Email Connect

### Increase agent efficiency through a better email management tool

Email Connect increases agent efficiency by unifying operations so that agents can manage all messaging conversations, including email conversations, within the Conversational Cloud instead of using a separate platform for handling consumer emails.

### Single interface for all messaging

Agents handle emails in the same easy-to-use Conversational Cloud interface they use for all other messaging conversations, meaning the same set of agents can support email while they simultaneously support other messaging channels.

### Use bots and automations for emails

Email Connect is fully compatible with LivePerson powered bots and AI, allowing brands to create email auto-responses or AI powered responses based on the content of emails.

### Simple email replies using predefined content

Email Connect has access to the same predefined content tools that are available across other messaging channels. Agents can drop in predefined email text to provide polish to every email response.

### Rich Conversation capabilities

Send and receive email attachments using Email Connect making emailing a more visual experience, increasing communication efficiency and reducing time to resolution. Attachments include images, pdfs and Microsoft Word and Excel documents. This may require feature enablement by LivePerson - see “Email Connect Setup” below.

### Easy setup & onboarding

Brands can set-up Email Connect in minutes by connecting to a company email address and uploading simple design elements, such as a header and footer (no tagging is required). Once the email address is set up, test the connection and then begin using Email Connect. Note that passwords are hidden and all your email credentials will be fully encrypted so that only you have access to them.

## Email Connect Setup

{: .notice}  
**Please note:** Email Connect is not yet compatible with Microsoft Exchange or Office 365 email addresses. This feature is coming soon.

{: .important}  
To setup Email Connect, your account must have Messaging and [Liveperson Functions](https://developers.liveperson.com/liveperson-functions-overview.html) enabled.

### Step 1: Connect your email in the Conversational Cloud

There are two ways to launch Email Connect set up page:

#### Option 1 Email Connect Setup via Data Sources.
Login to the Conversational Cloud and click the Campaign Builder icon located in the left navigation bar. Click on Data Sources in the Campaign Builder footnote.

Click the Connect button in the Email Connect tile. 

![](img/Email-connect-0.png)

#### Option 2 Email Connect Setup via Conversational Cloud Applications

Login to the Conversational Cloud and click the Quick launch menu at the bottom left of your screen. Click **Email Connect**. 

![](img/email-connect-1.png)

![](img/EmailConnect_new_UI1.png)

### Step 2: Provide your email credentials to setup your email

**Prerequisites to setting up your email**

Email address must be configured as below:
- IMAP must be enabled.
- Multi factor authentication must be disabled. “Less secure apps” must be enabled for Gmail accounts.
- Standard IMAP settings: IMAP, port 993, SSL enabled.
- Standard SMTP settings: SMTP, port 587, SSL disabled.

Follow the instructions on the screen to save your email configuration details.

![](img/EmailConnect_new_UI2.png)
![](img/EmailConnect_new_UI3.png)
![](img/EmailConnect_new_UI4.png)

### Step 3: Save email configuration and skill settings
Click Test Connection and then click Save.

### Step 4 Start receiving and responding to emails in the Conversational Cloud

You can test your setup by sending an email from your email account to the email address you connected in the Conversational Cloud. When the message shows up in the Agent Workspace, you can respond as an agent and see the response in the sender’s email account.

{: .notice}
Email Connect service will wait for 10 minutes before start polling emails from Brand’s configured email address. It may take up to 10 minutes for brand to see the first email in the Conversational Cloud.

### Step 5: Setup for file attachments (optional)
Email Connect uses Agent and Consumer File Sharing feature and supports these file types - JPEG, JPG, PNG, GIF, PDF, DOCx, XLSx, and PPTx.

{: .notice}
To enable file attachments, please contact your LivePerson account team.

Once you have received a response that this step is complete, you will need to change the following settings in the Conversational Cloud.

Log into the [Conversational Cloud](https://authentication.liveperson.net) account as Administrator to enable following configuration:

* Select the 'Profiles' tab from the Users module

![](img/email-connect-4.png)

Turn on the following settings for Agent and Agent Manager Profiles:

![](img/email-connect-5.png)

## Configure Auto-Response Text

### Step 6 Add custom text in your preferred language
This custom text will be used as auto-response to consumer email when the same consumer has an existing open conversation in the Conversational Cloud. You can use any language of your choice. Maximum number of characters limit is 1000.

![](img/Email-connect-step-6.png)

## Configure Email Header and Footer (Optional)

**Prerequisities to setting up HTML header and footer**

Please see the [table](messaging-channels-emailconnect.html#attributes-and-elements-allowed-as-part-ofhtml) at the bottom of the article for a list of allowed HTML elements and attributes. Every header and footer provided to Email Connect during the onboarding process is subjected to a security check. Deviating from this list could yield HTML that might be rejected by the Email Connect Setup.

### Step 7: Download example HTML header and footer

Click on Download HTML example which will download .Zip file containing 3
Files: READ ME - How to create header and footer.pdf, EmailConnect_Header_Template.html, EmailConnect_Footer_Template.html.

![](img/Email-connect-step-7.png)

### Step 8: Upload HTML header

Click Upload and select your custom .html header file.

![](img/Email-connect-step-8.png)

### Step 9: Upload HTML footer

Click Upload and select your custom .html footer file.

![](img/email-connect-step-9.png)

### Step 10: Save Email Header and Footer
Re-enter the password for your email, click Test Connection and click Save.

![](img/email-connect-step-10.png)

## Multiple email addresses
Brands can add an unlimited number of email addresses to Conversational Cloud and even route each email address to a different skill. For example, you can route info@, support@ and sales@ to different skills, allowing specialized bots and agents to handle your email interactions.

## Reporting

Agent Effectiveness reports are available for all email conversations to brand administrators and agent manager.

### Step 11: Open the Analytics Builder

Login to [the Conversational Cloud](https://authentication.liveperson.net/) and click Conversational Cloud Applications menu at the bottom left of your screen. Click on Analytics Builder.

![](img/EmailConnect_Reporting1.png)

### Step 12: Open Advanced Messaging Dashboard

![](img/step12-emailconnect1.png)
Click on RunDashboard at the bottom left on the page.

![](img/step12-emailconnect2.png)
Open Agent Effectiveness| Agent Analysis Report tab and select Email in the Source filter in the left panel.

![](img/step12-emailconnect3.png)

## Attributes and elements allowed as part of HTML

|Elements|Attributes|Notes|
|-----|-----|-----|
|html|n\a|Required, top-most element|
| body | bgcolor, width, style| Required, placed within the html element|
| table | align, bgcolor, cellpadding, cellspacing, border, height, width, style, color, class| Useful for creating a table in HTML that most email clients honor|
| tr | n\a | Used to define a row in a table |
| td | style| Used to define a column in a table|
| b | n\a | bold|
| i | n\a | italic|
| center | n\a | centers text in HTML|
| div | style | creates a division of section within HTML|
| a | href, target | creates an anchor tag for HTML links|
| img| src, width, height, alt, border | Creates an image within HTML (usually placed within an <a> tag|
| font| face | specifies the font family |
