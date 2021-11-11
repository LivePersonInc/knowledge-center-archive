---
pagename: Medallia user guide
categoryName: Admin & settings
subCategoryName: Integration Hub (iHub)
indicator: both
subtitle: Introducing Medallia
level3: ''
permalink: admin-settings-integration-hub-(ihub)-medallia-user-guide.html
isTutorial: false
isNew: true
date: 2021-11-10 12:01:13 +0000
---
## Medallia Post Conversation Survey

### Prerequisites
Before enabling the Medallia post conversation survey, brands must have Medallia Conversational surveys and/or Web surveys pre-configured within Medallia.

### Enablement and Access
The Medallia post conversation survey is **currently available as an EAP solution**. If you are interested in enabling this for your brand, please submit this [form](https://docs.google.com/forms/d/e/1FAIpQLSef41UkmrIw3tpjBdZ1dxewyz8l2GhsAQKZ0RbaUtSAwHsseQ/viewform).

### Glossary
<div class="table2">
  <table class="countries-table countries-table-2">
    <tbody>
      <tr>
        <td>Medallia Conversations</td>
        <td>Medallia Conversations is an add-on product to the Medallia Experience Cloud, which enables your customers to provide real-time feedback through SMS and popular messaging apps.</td>
      </tr>
      <tr>
        <td>Feed-less Survey (Web-survey)</td>
        <td>Feed-less surveys are predefined one-way URLs to web-based surveys. The customer is not known at the time the survey is initiated. However, both the customer's data and the agent's data can be retrieved in Medallia using LivePerson APIs</td>
      </tr>
      <tr>
        <td>Feeded Survey (Conversational survey)</td>
        <td>Feeded surveys are unique to the invitation and are created when building the invitation for the customer. The customer is identified before sending the survey.</td>
      </tr>
      <tr>
        <td>Sampling</td>
        <td>In the context of Medallia surveys, sampling allows brands to filter out customers that are not eligible for the survey based on predefined rules. This can only be done for the feeded surveys in Medallia.</td>
      </tr>
      <tr>
        <td>Quarantine</td>
        <td>Medallia currently supports quarantine rules for conversational surveys. Quarantine rules can be applied to ensure a customer is not over-surveyed. i.e., in the event the customer has received the survey in the past x (pre-defined) days, the customer does not get the survey again until that time has elapsed.</td>
      </tr>
      <tr>
        <td>Third-Party Bot</td>
        <td>LivePerson allows for external bot vendors and bot builders to be enabled and managed through the Conversational Cloud, just like a normal human agent. In the case of Medallia, this is set up as a Third-Party Bot to enable the Medallia Survey.</td>
      </tr>
    </tbody>
  </table>
</div>

### Key features and components
#### Medallia Overview
The Medallia post conversation survey enables brands to collect feedback and measure their success from the consumers after conversations have taken place. The survey can be delivered in a conversational experience to drive higher completion rates and provide consumers with the best experience possible. The survey could also be delivered as a link to a web survey to get more detailed feedback that may not be suitable for conversational style feedback.

Brands can tailor the survey to their needs, including both custom questions and free text questions, as well as the ability to determine specific rules between the questions. This can all be done within Medallia.

#### Why use the Medallia Post Conversational Survey?
For brands that currently use Medallia as their preferred customer experience platform, this solution offers an out-of-box integration to capture signals from chat and messaging via Medallia surveys, so that the data and reporting can all reside within Medallia. It enables brands with frictionless customer experience management by capturing all customer touchpoints in one central place. Brands can also drive up response rates by enabling the survey immediately after the conversation, and by creating rules in Medallia to ensure the same customer is not surveyed more than once within a given period.

#### Survey Flow & Configuration
As soon as a messaging conversation ends (either via the agent or via the consumer) the post conversation survey will be triggered. The survey is always triggered based on the last skill of the conversation.

There are two options/types of Medallia surveys: 
- One-way survey/Feedless survey
- Two-way survey/Feeded or Conversational survey

The one-way survey is delivered by the Conversational Builder bot.

![](img/medallia-user-guide1.png)


The conversational survey is sent by a third-party bot that needs to be set up with Medallia. 

![](img/medallia-user-guide2.png)

*Note: This bot has a user type “Agent” with the permission “view agent conversations” and a new user with the role must be used for this purpose.*

The bot sends a greeting message and begins to send the survey questions as configured by the brand in Medallia. Upon each consumer response, the bot will send the following question based on the logic defined for the survey.

![](img/medallia-user-guide3.png)

Brands will configure the full experience of the survey and the bot. This will include the bot name, avatar, questions and answers, and the look and feel. 

The survey questions and answers are based on structured content and regular text messages, so brands can create the experience they want in the Medallia survey design.

#### Survey triggering
* Once the conversation is ended by the consumer or by the agent, the survey will automatically trigger (no need for the agent to transfer or perform any action to trigger the survey).
    * The survey will not be triggered on autoclose.
    * Interactivity is not taken into account at this point.
    * If the skill is not configured with any survey, the survey will not be triggered (the survey is always triggered based on the last skill of the conversation).
* Only conversations with assigned skills will be able to trigger a survey. If a conversation is “unassigned” then no survey will be triggered.

The consumer will be asked to choose from a list of answers, with the exception of “free text” type questions.

#### Consumer errors
If the consumer types in free text that is not recognized as a valid answer, the bot will send an error message (configurable in Medallia) and resend the last question, asking the consumer to choose from the specified answers. After x attempts (configurable in Medallia) of an unrecognized consumer response, Medallia will send the next question out to the consumer in order to avoid frustration.

#### Opting out of the Survey
The brand will be able to configure a specific opt-out keyword in Medallia to enable consumers to opt-out of the survey. Once this exact phrase is typed in the conversation, the bot will send the response back to Medallia where the opt-out will be recorded and the survey will be closed. The user will be presented with a static thank you message. Please note, the opt-out keyword should not be the same as the opt-outs used for SMS. If the same keyword is used, the user will not be able to interact with LivePerson over SMS for other intended interactions. 

#### Closing a survey (survey outcomes)
The survey can be closed during various scenarios:
1. **Survey completed** - the consumer has completed all the questions required.
2. **Survey timeout** - The survey expiration is configurable in Medallia. However, there is a site setting value used to close any survey opened for more than x amount of seconds (configurable) in LivePerson. This LivePerson setting closes the conversation at expiration and takes precedence over the Medallia expiration timeout setting.
3. **Survey quarantine** - the consumer may not receive the survey at all in the event that the user has taken the survey in the last x days (configurable by the brand in Medallia). If the quarantine rules are not set in Medallia, then the survey will be sent to the consumer.

The brand cannot currently configure the initial welcome and closing message that will be sent to the consumer in the EAP phase. This will be part of the GA solution.

Any message sent by the consumer after the survey has been closed will open a new messaging conversation with the brand.

#### Self-Serve Configuration
The configuration of the third-party bot and the Medallia adaptor will initially be done by the LivePerson and Medallia teams in EAP. Going forward, brands will be able to configure this via self-service and will be able to define the Medallia surveys that need to be associated with specific skills in LivePerson.  

All questions configured in Medallia are configurable by the brand.
In Medallia, brands can configure:
* **Multiple Choice Questions:** Brands can configure multiple choice questions.
    * These questions will initially not support ‘quick replies’. Brands will only be able to customize the text as well as the look and feel (in terms of branding).
* **Free text questions:** requesting the consumer to give their free feedback.
* **Statements:** Currently, the statements configured by brands in Medallia cannot be passed back to LivePerson via the third-party bot. As such, brands may have to include the initial welcome message in the content of the first questions. 

Within Medallia, the brand is able to determine the logic between the questions, meaning different answers can trigger different questions to follow.

**Language support** 
Brands can customize the survey to fit any language in Medallia. The brand will write survey questions and answers in the language they so choose. Each skill in LivePerson is associated with a unique survey and therefore, for every language, a unique skill must exist in LivePerson.

#### Supported Messaging Channels
**Phase I:**
**Web Messaging, In-app Messaging, SMS, Whatsapp and other messaging channels will be supported.** 
Email is not supported or intended to be used for Conversational surveys.
* Continuity between these channels will be supported the way they are for messaging today.
* If a consumer scrolls up in the conversation thread, they will see all the previous messaging conversations as well as the surveys from the past interactions.
* Mobile: During the survey, the bot messages will apply the same **push notification** behavior that the brand has configured for messaging.

Brands using the **Messaging Window API** (instead of the in-app SDK) will need to make the relevant adjustments to support the new survey.

### Agent/Consumer Experience
#### Agent Experience
While the survey is being answered by the consumer, the agent/agent manager is unable to perform any action on the conversation, including the following actions: 
* Resume
* Transfer
* Takeover

![](img/medallia-user-guide4.png)

#### Real-time KPI bar:
The CSAT for the Medallia surveys is not updated in real time. The CSAT will be updated after the survey completion and sync to the Medallia Experience Cloud. This process is triggered after a specific time interval that is customizable in Medallia. Please expect an interval of a minimum of 30 minutes for this to be updated. 

![](img/medallia-user-guide5.png)

In the event that the brand does not want the agent to see the survey questions and responses, there is a setting in the agent profile that could be changed to govern whether or not the agent has permission to view the survey feedback.

**Agent Widget SDK:**
Survey conversation lines will be available via the widget SDK, so that the widget can bind to get the full transcript lines that will include the survey questions and answers.

#### Consumer Experience
The survey experience is seamless to the end consumer. The consumer will be presented with questions and acceptable responses that can be entered or typed in manually. Consumers will be able to provide text and emoji input if Medallia is configured to receive such feedback. Images are currently not supported.

### Configuration
The Medallia post conversation survey is currently available as an EAP solution. If you are interested in enabling this for your brand, please submit this [form](https://docs.google.com/forms/d/e/1FAIpQLSef41UkmrIw3tpjBdZ1dxewyz8l2GhsAQKZ0RbaUtSAwHsseQ/viewform).

### Reporting
Reporting will initially all reside within Medallia. This includes the Responses feed, Text Analytics and other reporting leveraged by the brand in Medallia. Medallia can pull all the customer and agent data associated with the conversation that may be needed by the brand. 

#### Analytics Builder
* **Built-in metrics:**
    CSAT(attributed to last agent/skill). This will be normalized to a scale of 1-5. Note: All KPIs are measured on closed surveys. Surveys in progress are not shown in the reporting metrics.
* **Open Connections Data Bar:**
    CSAT KPIs to include both old and new CSAT results combined.
* **Data APIs:**
Messaging Interactions API - survey raw data exposed via metadata (no search)

### Metrics

No metrics for the product currently. However, stay tuned for metrics that will be tracked in the product in the GA release.

### Limitations
1. Currently, the third-party bot sends an immediate message to let the user know that the survey is being initiated. This is currently only available in English and is not configurable.
2. The third-party bot also sends a message after the survey is complete. This is currently only available in English and is not configurable.
3. Beginning and ending statements from Medallia are currently not processed or sent to the customers.
4. The NPS score and FCR will not be presented in the real-time KPI bar in the Agent workspace or in the Agent Manager workspace.
5. Quick replies are currently not supported.
6. Currently, the reporting will need to be accessed within Medallia. 
7. Currently, there is no mechanism for brands to disable the survey once a specific threshold of responses has been received.
