---
pagename: Post conversation survey
categoryName: Data & reporting
subCategoryName: Messaging
indicator: messaging
subtitle: Reporting on the feedback collected from consumers after conversations have
  taken place
level3: Messaging dashboards
permalink: data-reporting-messaging-messaging-dashboards-post-conversation-survey.html
isTutorial: false
date: 2019-01-15 15:14:02 +0200
level3: ''

---
## Reporting for post conversation survey

The post conversation survey enables brands to both collect feedback and measure their success from the consumers after conversations have taken place.The survey is delivered in a conversational experience to drive higher completion rates and provide consumers with the best experience possible.

Brands can customize the survey to their needs, including predefined questions (CSAT, NPS and FCR), custom questions and free text, as well as the ability to determine the logic between the questions.

The results of the surveys can be analyzed in real time using the messaging interactions API or by historical data in Report Builder.

## **Report Builder**

The predefined messaging performance dashboard has been enhanced to include a dedicated “survey data export” sheet containing an in-depth analysis of the new messaging post conversation survey flows. The flows included in Report Builder are based on the ones configured in the Bot Studio.

The sheet includes five panels enabling different analyzes both at the results level - consumers feedback, and the survey activity level - understanding how many surveys were closed and what was the outcome (partially completed or timed out, for example).

These grids are ready to export and can be downloaded to include in your contact center or executive dashboards overarching all contact center activities.

To allow the association of survey results with the conversations from which the survey was triggered, all metric results are aligned to the time the conversation ended / the survey flow begun.

Survey data is collected after a survey instance is closed, meaning that activity or results for a survey which is still open to a consumer’s input will not be included in the report.

The“survey data export” sheet contains an additional set of daily aggregated information, metrics and attributes which support the following analysis:

1. Predefined KPIs at the agent & skill level: CSAT, NPS, and FCR (pre calculated)
2. Detailed brand level answer distribution for each configured question and answer
3. Detailed “agent and skill” level answer distribution for each question and answer
4. Survey activity and performance, allowing the response rate to be monitored
5. Question level performance, allowing the average time to respond to be monitored

In addition to the default grid views, Report Builder users with customization privileges  can add an hourly view of survey information in the same dashboard. The optional set of metrics which be added to the dashboard by LPA and users with customization privileges include:

1. Predefined KPIs at the brand level
2. Use “answer value” attribute to derive calculations over predefined questions. For example, create “NPS promoters” or “VSAT” metrics.
3. Create an hourly level analysis (the default analysis is at daily granularity)

For more information about customization privileges to the Report Builder, please contact your LivePerson account manager or customer success manager.

## **Aggregation levels**

The KPIs on the dashboard can be analyzed on two aggregation levels:

1. Brand
2. Agent and skill

In a single messaging conversation followed by the submission of a survey by the consumer, multiple agents and skills may be assigned. To eliminate double counting, and to prepare for our phase 2 development (which expands the attribution model not just the last agent assigned), the data model has been prepared accordingly.

## **Time attribution**

The data is collected for closed surveys (consumer can no longer submit responses) and survey results are associated with the time the survey started / conversation ended.

## **Attribution to agents**

Survey results are attributed to the last agent who was assigned to the conversation prior to the initiation of the survey flow. The skill attributed with the survey results corresponds to the one assigned to the conversation along with the same agent (last assigned). The last agent assigned to the conversation may not have been assigned to the conversation when it was transferred over to the survey bot. For instance, if a manager joined (but not assigned to) the conversation and closed it, consequently triggering the survey flow, the same manager will not​ be attributed with the survey results. The results instead will be attributed to the agent who was assigned to the conversation when the manager joined. In the same manner, the last skill which also helped determine which survey to present, will not necessarily align with skill assigned to the conversation along with the last assigned agent.

## **Primary filters**

The survey data can be filtered by - skill, survey name, survey outcome ​(completed, ignored, skipped, …), is answer recognized by bot ​(flag, set by default to “Yes”)

## **Backward compatibility**

1. “CSAT SCORE” pre-existing in the dashboard has been renamed to include the suffix “unified”. This metric is computed based on both previous version of the survey and the new survey flows. The new survey predefined KPI metrics include activity from the new survey flows, excluding the old survey activity.
2. All messaging metrics pre-dating this feature have been completely separated from the survey activity. Therefore, no impact is expected to the metrics used prior to this feature introduction into the dashboard.
3. The “resolution” metrics, representing the “old” survey’s resolution (yes/no) question, have been hidden from the predefined dashboard (they are still available for LPAs and customization users to unhide in user-copies).

## **Panels**

The sheet contains five panels in a single sheet

* First three first panels **-** review survey results
* Last two panels - analyze survey performance (how is the bot performing?)
* The data is presented in grid views for easy export

### **Main panel: predefined survey KPIs**

The main panel provides a daily summary of survey results with focus on the pre calculated metrics: CSAT, NPS, and FCR. This main view is pre-aggregated by skill and agent, supporting an in depth review of each individual's performance, as reported by consumers.

To add custom metrics for predefined questions, see **_Creating custom metrics in RB for Survey Answers‘’ document_**

### **Panel 2: answers distribution (brand)**

The brand level answers distribution includes aggregated count of responses submitted by consumers to each question and for each configured answer option. The results are presented at the brand level, split by configured survey. Leveraging these results, you are able to analyze, for example, how many consumers answered with the value “4” vs. how many answered “5” for a chosen CSAT question.

**Skipping a question vs. skipping the entire survey**

Should you choose to configure a “skip” answer-option for the question, the answer “skip” along with the number of times consumers chose this option, will appear in the report next to the corresponding question.

It is important to note​ that a consumer may elect to skip the entire survey after every question asked. Counting how many times consumers skipped the survey entirely is reflected through the CLOSED SURVEY metric filtered by the SURVEY OUTCOME attribute (visible in the survey level panel). The response a consumer has given and triggered the skip of the entire survey will not be counted as an answer to a specific question (not visible in the answer distribution panels).

**Responses unrecognized by the survey bot as valid answers**

Each question includes an additional bucketed answer, supplementing the configured answer-options. This bucket is called “unrecognized by bot”. Each time the bot did not find a match between the consumer’s response to a given question and any of the configured answer-options, the report will count this consumer’s response in the unrecognized by bot bucket. It is important to note that the default filter of “is answer recognized by bot” is set to “yes”, thereby, excluding all unrecognized answers from the report. You may change the filter settings to “no” or to “all” in order to evaluate consumer responses unrecognized by the bot as one of the valid answer options configured in the survey.

### **Panel 3: answers distribution (agent and skill)**

Similar to the brand level answers distribution, this panel lists every configured question and answer-option, including a count of times consumers responded to each option.

### **Panel 4: survey level analysis**

Use this panel to analyze the response rates and outcomes of each survey flow configured on your account. Answer questions such as, how long does it take my consumers to complete a survey?, or how many consumers let the survey timeout before completing the flow and answering all the intended questions?

I**mportant to note:​** the values in the skill filter apply to the skill which triggered the survey (configured in the survey bot as the triggering skill).

### **Panel 5: question level analysis**

Use this panel to analyze the response rates and time it takes consumers to answer each question individually. Identify opportunities to optimize the question text or change the order of presentation in the survey flow. Correlate the results in this panel with the survey level panel to identify questions which are presented multiple time to consumers in comparison to the number of surveys closed for each configured survey flow.

\* “Question fallback Text” is presented in the report for questions which include a backup text phrase. The backup phrase is presented to consumers in end-points which do not support structured content.

## **Limitations**

1. Report Builder will only reflect data of surveys configured in the Bot Studio. (External bots are not supported at this time).
2. Chat survey data is entirely separate from messaging survey data. Chat survey data can be accessed via the existing predefined dashboards (agent activity, survey activity, skill activity, and ops & staffing), while the messaging survey data appears only in the Messaging Performance predefined dashboard.
3. Emojis configured anywhere in the survey properties (name, question name, answer text, etc.) will not be presented in Report Builder but replaced with blank spaces.
4. Free text questions can not be analyzed.

## **Custom reports**

**Pre-aggregated metrics (agent and skill)**: to view results at agent or skill levels, both the ‘agent’ and ‘skill’ attributes must be added to the grid.

## **New Attributes / filters**

**Survey attributes**

* Survey Active Indicator - Is the Survey flow configured with a skill (in use)? |
* Survey Deleted Indicator - Was the Survey flow deleted?
* Survey Name - The name of the survey, configured in the Bot Studio.
* Survey Description- The description of the survey, configured in the Bot Studio.
* Survey Outcome - The outcome of the survey as reported by the Survey Bot.

List of Survey Outcome supported values:

* “Ignored” when the consumer was offered a survey but didn’t respond
* “Completed” when the survey reached the end of the configured flow
* “Partially completed - timed out” when the consumer answered some questions and then abandoned
* “Partially completed - skipped” when the consumer elected to skip the survey after responding to some of the questions
* “Skipped” when the consumer elected to skip the entire survey before responding to any question
* “Closed by consumer”
* “Consumer unrecognized answer” when the Bot discontinues the survey flow after a max amount of retries
* “Not Supported” if the consumer’s device does not support the new survey flows (SDK incompatible)
* “Closed by system”
* “Error in survey flow” when unexpected errors occur, such as invalid structured content, non-whitelisted images, …

**Question attributes**

* Question name - The name of the question, configured in the Bot Studio (this is not the question text which is presented in the Question Fallback Text attribute).
* Question Type - The type of the question, configured in the Bot Studio.

Supported values:

1. CSAT
2. NPS
3. FCR
4. Custom Question

* Question ID - The ID of the question as it appears in the Bot Studio.
* When changing the type, format and name of a question, a new question ID is generated by the system.
* Question Fallback Text - The text presented to the consumer in case the end-point does not support structured content (such as SMS).
* Question Format - The format of the question.

  \*Supports the values: “Open” and “Single Selection”.

  When the Survey flow supports additional format (such as multiple choice), the support values will be adjusted accordingly.

**Answers attribute**

* Answer - The answers configured in the Bot Studio for each question.
* Answer Value - Hidden attribute (available only to Edit-Access users)
* Is answer recognized by bot - Was the response provided by the consumer recognized as a one of the configured answers for a specific question? Use this attribute to include or exclude the “unrecognized by bot” answer type. Default filter: “Yes” only.

## New Metrics

**Survey metrics**

* Closed Survey - The number of survey dialogs which were closed. A closed dialog is one that none of the participants can send messages in.
* Closed Survey Rate - The percentage (%) of survey instances closed with a specific outcome. Supported by the “Survey Outcome” attribute (filter).

  \* Presents 100% when not filtered / split by outcome.
* Avg. Duration of Survey Availability - The average time a survey is available to the consumer. During this time, the consumer may respond to presented questions.

  Measured from the time the survey is offered by the Survey Bot till the time the survey is closed. Attributed to the Date/Hour during which the survey was offered (not close time of the survey).

  Format: \[h\]:mm:ss

**Questions metrics**

* Offered Question - The number of times a question was offered to a consumer by the bot. A question is considered offered when it is sent by the bot to the consumer in a survey dialog. Depending on the survey flow, a question may be offered more than once to a consumer (cycli flows, retries, etc.).
* Answered Question - The number of questions presented to the consumer by the bot and were responded by the consumer with a valid (configured) answer (recognized by the bot as a valid answer).

  \* Used to compare with the metric “Offered Question”. When a question is offered multiple times but answered with a valid response less times, there may be an issue with the question text (behavioral or technical).
* Answer Rate (Offered Question)

  Formula: \[Answered Question\] / \[Offered Question\]

  The percentage (%) of questions answered with a valid response by the consumer out of the total questions offered to the consumer by the bot.
* Avg. Time to Respond To Survey Question - The time on average taken by the consumer to respond to a question.

  Measured from the time the Bot presented a question, to the time the consumer submitted a response to that question (recognized or unrecognized by the Bot).

  Attributed to the time the question was offered (not response time).

  If no response was given to the question, the metric will be associated with an empty cell in the dashboard (Null).

  Format: \[h\]:mm:ss

**Answers metrics**

* CSAT (brand) CSAT (agent and skill) - The percentage of answers “4” or “5” (top two boxes) out of the total responses submitted by consumers to a predefined CSAT question type. Invalid answers, unrecognized by the bot, are excluded from the formula.
* FCR (brand) FCR (agent and skill) - The percentage of answers “Yes” out of the total responses submitted by consumers to a predefined FCR question type.
* NPS (brand) & NPS (agent and skill) - The Net Promoter Score, based on a scale of 0 to 10 and derived from the predefined NPS question type.
* Answer Count (brand) & Answer Count (agent and skill) - The number of times consumers responded with a valid answer, recognized by the bot as a pre-configured answer.

  Additional buckets include:

  “Skipped” for questions with configured Skip option

  “Unrecognized by bot” for counting how many invalid answers were submitted for a question

  Attributed to the time the survey was offered (not close time).
* Answer Ratio (brand) and Answer Ratio (agent and skill)

  The percentage (%) of times consumers chose a specific valid answer out of all the configured answers on a specific question.

  May be adjusted to include unrecognized answers by the bot with the filter “Is answer recognized by bot“.
