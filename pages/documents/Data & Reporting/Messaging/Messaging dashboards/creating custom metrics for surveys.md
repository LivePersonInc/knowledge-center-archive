---
pagename: Creating custom metrics in Report Builder for survey answers
categoryName: Data & reporting
subCategoryName: Report Builder
indicator: messaging
subtitle: ''
level3: ''
permalink: data-reporting-report-builder.html
isTutorial: false
isNew: false
date: 2019-02-19 12:24:08 +0200

---
## Custom calculation for predefined questions (CSAT, NPS, FCR)

When using a predefined brick for CSAT, NPS, FCR, you have the option of changing the calculation for the score and defining your own metric, using the submitted answers.

Below is an example for creating a custom formula for CSAT, instead of the precalculated ‘CSAT (Agent & Skill)’ metric. You can use the same syntax and modify it to your needs (use it for the other questions (NPS,PCS) or using a different arithmetic calculation).

### **Custom metric for CSAT calculation:**

In order to recalculate the CSAT score, 3 metrics need to be created (see formulas below). The last metric is the one that should be used in grids and visualization (the first two metrics are only for the calculation purposes).

#### Steps for creating a custom metric:

1. On the DASHBOARD DATASETS panel at the left side of the screen, right click on ‘Survey Answers (Agent and Skill)’ and select ‘Create Metric...’.

   ![](/img/post-conversation-survey1.png)
2. A new pop-up screen ‘Metric Editor - New Metric’ will open up

   ![](/img/post-conversation-survey2.png)
3. Use the ‘Metric Name’ field to give a meaningful name to the metric
4. Paste the formula (copied from the ‘Formulas’ section below) into white box at the right.
5. Click on ‘Validate’ and make sure you receive a green message ‘Valid metric formula’.
6. Click ‘Save’. The formula will be added to the dataset and is ready to use.
7. Follow these steps for each of the three formulas listed below.

![](/img/post-conversation-survey3.png)

1. Drag the New_CSAT metric into a grid containing ‘Agent’ and ‘Skill’ attributes, you’ll be able to see the calculated CSAT score.

### Formulas:

1. CSAT_Answer_Count:
   1. Metric definition: number of times an answer was submitted for Question type=1 (CSAT)
   2. Formula: NullToZero(Sum(Case((\[QUESTION TYPE\]@ID=1), \[ANSWER COUNT (Agent and Skill)\], ZeroToNull(0))){\~+})
2. CSAT_Answer_Count 4_5:
   1. Metric definition: number of times an answer was submitted for Question type=1 (CSAT)
   2. Formula: NullToZero(Sum(Case(((\[QUESTION TYPE\]@ID=1)And((\[ANSWER VALUE\]@ID=4)Or(\[ANSWER VALUE\]@ID=5))), \[ANSWER COUNT (Agent and Skill)\], ZeroToNull(0))){\~+})
3. New_CSAT:
   1. Metric definition: the ratio of times answer 4 and 5 where submitted
   2. Formula: \[CSAT_Answer_Count 4_5\]/CSAT_Answer_Count

## Calculated metrics for custom questions

When using custom bricks in the Post Conversation Survey, you have an option to define your own metric for calculating the results score. The calculation is done using the Question ID (see explanation below), the submitted answer’s text and arithmetic calculations.

Below is an example for creating a custom metric for any type of question with configured answers. The final formula will provide the rate of answers to a specific question (based on the answer’s text) out of the total answers to that question. Follow the steps detailed above, in the predefined questions section, for creating the metrics - this time with the formulas listed below. You can use the formulas syntax and modify it to your needs.

### Retrieving question IDs

The IDs of the survey’s questions are mapped between Bot Studio and Report Builder.

To In the retrieve the Question ID, head over to Bot Studio and click on the 3 dots next to the question name. Copy the ID and use it in the following formulas.

![](/img/post-conversation-survey4-1.png)

**Formulas:**

1. Total_submitted_answers
   1. Metric definition: number of times any answer was submitted for a specific Question ID (in this example: 52d95264-87d4-453a-bbe0-7b9c12c72bb8)
   2. Formula: NullToZero(Sum(Case((\[QUESTION ID\]@ID="52d95264-87d4-453a-bbe0-7b9c12c72bb8"), \[ANSWER COUNT (Agent and Skill)\], ZeroToNull(0))){\~+})
2. Total_submissions_of_specific_answer
   1. Metric definition: number of times a specific answer was submitted for a specific Question
      1. Answers: Answer’s text contains the words ‘Extremely’ and ‘Satisfied’
      2. Question ID: 52d95264-87d4-453a-bbe0-7b9c12c72bb8
   2. Formula: NullToZero(Sum(Case(((\[QUESTION ID\]@ID="52d95264-87d4-453a-bbe0-7b9c12c72bb8")And(ANSWER@DESCLike"%Extremely%Satisfied%")), \[ANSWER COUNT (Agent and Skill)\], ZeroToNull(0))){\~+})
3. Answer’s rate
   1. Metric definition: number of times a specific answer was submitted out of the total answers of a specific Question
   2. Formula: \[Total_submissions_of_specific_answer\]/\[Total_submitted_answers\]

## Exporting data for survey answers calculations

Report Builder offers the option to export the survey results data into a MS Excel file. You can use this option to create your own calculations using Excel.

### Steps for exporting a grid:

1. Open Messaging Performance dashboard
2. Unhide 'Answer count' attribute:
3. On the DASHBOARD DATASETS panel at the left side of the screen, click on the down arrow on the right corner of the panel
4. Select ‘Show Hidden Objects’
5. Under ‘Survey Answers (agent and Skill)’, check the checkbox next to ‘ANSWER VALUE’ and click OK
6. On the ‘Survey Data Export’ tab, create a new panel by clicking the ‘+’ sign at the bottom right corner of the tab
7. Drag into the visualization the following metrics and attributes:

   **![](/img/post-conversation-survey.png)Attributes:**
   * Date
   * Skill
   * Agent
   * Question Name
   * Answer value - the submitted answer

**Metrics:** Answer count (Agent and Skill) - the number of times the answer was submitted

Export the data into excel by clicking on the down arrow at the top right corner of the visualization, selecting ‘Export’ and ‘Excel’. Now you can use your own formula to calculate the percentage of positive answers submitted out of the totals answers submitted