---
pagename: 'Setup guide'
categoryName: Messaging channels
subCategoryName: Apple Business Chat
indicator: messaging
subtitle: 
level3: ''
permalink: messaging-channels-apple-business-chat-setup-guide.html
isTutorial: false
isNew: false
date: 2020-08-18 14:38:05 +0000
---
## Business Chat readiness

To get started with Apple Business Chat, we encourage you to assess if this is the correct solution for your business. The following [Business Chat Readiness Review](https://ce-sr.s3-eu-west-1.amazonaws.com/KC/Apple+Business+Chat/Business+Chat+Readiness+PDF-October+2020.NEW.pdf) is a quick questionnaire that you can submit to LivePerson and Apple teams to help you determine if Business Chat is the right solution for your digital transformation and operational goals. 

## Business Chat account registration

The first step in onboarding your business is to ensure you and your team members have an Apple ID using your organization’s email address. You will need this to create the Business Chat account and for testing purposes. 

1. **Onboarding.** Start in [Data Sources](https://knowledge.liveperson.com/data-reporting-engagement-attributes-data-sources-engagement-attributes-overview.html) of your Conversational Cloud account to complete the onboarding form for Apple Business Chat.  
2. **Create an Apple ID.** You will need an Apple ID using your organization’s email address in order to administer Business Chat and accept Apple’s Terms of Use. You can create your Apple ID [here](https://appleid.apple.com/account#!&page=create).
3. **Register Business profile.** Sign into [Apple Register](https://register.apple.com/) and select ‘Business Chat Accounts’ in the service menu. You must add your business information in required fields to complete your ‘Organization’ profile. 
4. **Add team members.** To help administrate your Apple profile, it is recommended that you designate ‘Administration’ roles to additional members of your organization and to LivePerson’s Apple Business Chat team: abcregister-lp@liveperson.com. The team will continue and monitor the Business Chat registration process for your organization.  
5. **Connecting MSP.**  To qualify for a Business Chat account your brand must have an asynchronous messaging platform staffed by live agents during business hours. LivePerson’s Conversational Cloud is an Apple approved MSP that is provided to our brands. Please note, businesses in the EMEA and APAC regions will need to enter a unique URL in the Messaging Service Provider (MSP) section. 
* **EMEA:** [https://lo.apple-gw.liveperson.net/api/v1.0/message](https://lo.apple-gw.liveperson.net/api/v1.0/message)
* **APAC:** [https://sy.apple-gw.liveperson.net/api/v1.0/message](https://sy.apple-gw.liveperson.net/api/v1.0/message)

## Next steps

Upon the approval of your business chat account, you will receive an email with a conversational link. Make sure to get in touch with your account team so they can connect your business chat ID with your Conversational Cloud account and activate the connector for you. This is the first step! 

Now for the fun part -- checkout how to [design your customer experience](messaging-channels-apple-business-chat-setup-guide.html#design-your-customer-experience), determine [entry points](messaging-channels-apple-business-chat-entry-points.html) and pass the [brand experience QA](messaging-channels-apple-business-chat-setup-guide.html#brand-experience-qa). The onboarding process includes an Apple review in different points within the journey. Apple reviews your application and an email notification is sent to you with approval. The purpose of the onboarding form from Data Sources is two-fold. First, it allows us to quickly help you register for a Business Chat Account. Second, it provides us basic information to help you configure an Apple approved MVP experience for Business Chat.  

{: .notice}
**Please note:** Business Chat accounts are not available until after the Business Chat service application has been approved by Apple. To learn more about managing your Business Chat Account, please refer to Apple’s [Onboarding Guide](https://register.apple.com/resources/business-chat/BC-OnboardingYourBCA.pdf).

## Design your customer experience

In using Business Chat, Apple holds brands to high design standards as they aim to provide users with richness and delight across the Apple ecosystem. Once you have set up your Business Chat account,  we recommend taking the following steps in order to plan and design your customer journey. 

**Define customer intents.** To provide a meaningful and enhanced customer experience, we encourage you to analyze the top reasons why customers contact your business today and consider how those issues are supported on your current channels today. Use these key intents in the routing list picker and build a workflow for resolution in Apple Business Chat. You will need to submit these use cases and the customer journey using this [use case template](https://ce-sr.s3-eu-west-1.amazonaws.com/KC/Apple+Business+Chat/useCaseTemplate+(4).xlsx).

**Plan entry points.** There are many ways for customers to get in touch with your brand via Business Chat, but it’s important to consider which one might be best for your Business Chat strategy as the effort to implement might vary. See the [Entry Points](messaging-channels-apple-business-chat-entry-points.html) documentation to learn more about what's available.

**Consider Authentication.** Think about the use cases you would like to include for Apple Business Chat and assess if authentication will be required for any of them. If yes, what is the method for validating customers? You might want to consider Business Chat features such as [OAuth 2.0](https://developers.liveperson.com/apple-business-chat-templates-apple-auth-template.html), in-app authentication or LivePerson’s [secure forms](security-regulations-secure-forms-secure-forms-for-messaging-user-guide.html). 

OAuth 2.0:
![](img/setting-up-apple-business-chat-1.png)

Secure forms:
![](img/setting-up-apple-business-chat-2.png)

**Consider Payment.** How might a customer make a payment and/or make a purchase in Business Chat? Consider and plan for the end-to-end journey of transactional use cases, from payment collection to reporting. Brands can leverage Apple Pay for the most seamless form of payment.  Other choices include LivePerson’s secure forms for agent-driven transactions.

Apple Pay:
![](img/setting-up-apple-business-chat-3.png)

{: .notice}
**Please note:** If interested in true conversational commerce via Business Chat, please reach out to your account team to request an Apple Pay demo. 

## Brand Experience QA 

In order to launch with Business Chat, Apple must QA and approve your overall experience within the channel. Once your Business Chat configuration is complete and has gone through internal testing, you can go ahead and schedule the QA session with Apple. You will need to identify one or two agents who will be available to pick up Apple messages during the session. Check out our [Apple QA Primer](https://ce-sr.s3-eu-west-1.amazonaws.com/KC/Apple+Business+Chat/ABC_abreviated+training.pdf) to help you and your agents prepare for the Brand Experience QA.
 
During the QA session, a representative from Apple will initiate a conversation with one of your agents and will simulate an actual customer query. They will evaluate: 
* Conversation flow
* Agent etiquette
* Usage of rich elements

QA is typically staffed with ‘real agents’ from the brand side, i.e. same agents that will be supporting the program once it launches. Please review [Apple's Conversational Design Guidelines](https://developer.apple.com/design/human-interface-guidelines/business-chat/customer-interaction/onboarding/) with your agents prior to the session.

