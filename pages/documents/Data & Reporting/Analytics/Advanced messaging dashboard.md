---
pagename: Advanced messaging dashboard user guide
categoryName: Data & reporting
subCategoryName: ''
indicator: messaging
subtitle: Curate fit-for-purpose analyses that communicate the value of messaging,
  highlight areas of opportunity, and offer guidance on optimization
level3: ''
permalink: data-reporting-analytics-advanced-messaging-dashboard-user-guide.html
isTutorial: false
isNew: false

---
## Key Components of the Dashboard

Monitor - summary analyses clearly highlight Primary Messaging KPI trends over time to show successes and opportunities for improvement.

Diagnose - Detailed reporting allows the user to drill into segments of a program to pinpoint issues and

track improvement.

### Test and Learn

One key objective of Advanced Messaging Dashboard 3.0 is to provide a platform to seamlessly benchmark current performance, adjust program levers, and track incremental improvement. This applies to account configuration, automation, and program operations.

### Support

 Any customization on top of that analysis carries a risk of changing the narrative of the analysis. Please note that customizations will not be supported by LPSupport. If you do customize, please Save-As and give the file a different name.

## How to enable

How to Enable Advanced Messaging Dashboard 3.0 on Your Account

Reach out to your LivePerson account team and request that Advanced Messaging Dashboard be added. The dashboard will be placed in Report Builder, under Shared Reports > My Account (12345678)

Advanced Messaging Dashboard 3.0 contains 7 core analysis segments:

Analysis (+ Link to Analysis Detail) Questions Answered

### Performance

* How healthy are my primary Messaging KPIs in relation to LivePerson best practices?
* How are those KPIs influenced by the end-to-end conversation flow?

### Automation

* Are my current bot implementations increasing Efficiency while keeping constant or

  improving Customer Experience measures?

### Transfer

* Which Skills are conversations being sent from and to?
* Are there any breakpoints causing consumers to drop from the Transfer queue?

  ### Agent Effectiveness
* How well are my operational Messaging KPIs performing over time?
* What are my coaching opportunities?

### Resolution

* How much labor am I spending on repeat conversations due to unresolved cases?
* Are my Auto-close settings causing premature closures?

### Capacity

* How busy are my agents?
* Of the conversations filling my agents’ queues, what percentage are actually active

  conversations requiring agent attention?

### Usage

How am I tracking toward my monthly billing criteria?

## How to use Tabs and Panels

### Tabs

* Correspond to an analysis (Automation, Agent Effectiveness, etc.)
* Contain their own set of filters, meaning you have to set filters each time you switch tabs
* Typically contain between 3-8 Panels (see below)

### Panels

* Correspond to individual components within an analysis
* Maintain the filters that are set at the tab level, meaning filters do not need to be reset when navigating between panels
* May also contain filters within the visualization, allowing you to further drill down on the data that has been selected at the Tab level.

## How to use Filters within Tabs and Panels

### Filters

**Tab Level**

*  Apply to all Panels within a Tab
* Default to past 28 days, all Skills, all Groups, and all User Types

**Visualization Level**

* Apply only to the Panel that contains theFilter
* Allow you to drill into very detailed data, such as Agent-level and Hour of Day

## Performance contents

### Numbers

**Analysis objective:** Outline the key high-level success metrics any Messaging program should be looking to drive at the Brand-level.

**Questions answered:** How healthy are my primary Messaging KPIs in relation to LivePerson best practices?

### Program Summary | Weekly

**Analysis objective:** Show week-over-week improvements in Primary KPIs across the brand's messaging deployment.

**Questions answered:** How are my primary and secondary Messaging KPIs trending on a weekly basis?

### Program Summary | Daily

**Analysis objective:** Investigate questions from Weekly Program Summary by drilling down to the daily level.

**Questions answered:** How are my primary and secondary Messaging KPIs trending on a daily basis?

### Conversation Flow Detail

**Analysis objective:** Demonstrate how changes in Supporting KPIs throughout a conversation influence Primary KPIs in the Program Summary.

**Questions answered:**  What does my program’s end-to-end conversation flow look like in terms of data points? Are there any areas of the conversation that are adversely impacting consumer experience?

## Performance metrics

| Metric Name | Metric formula | Definition |

| --- | --- | --- |

| Closed Conversations Per Login Hour (CCPLH) | CLOSED CONVERSATIONS / LOGIN HOURS | Efficiency measure of how many conversations were completed (closed) per hour of agent time spent logged in. |

| Resolution Rate (Based on 0-3 Day RCR) | REPEAT 0-3 DAYS / CLOSED CONVERSATIONS | Percentage of Closed Conversations where the same ConsumerID DID NOT OPEN a subsequent conversation within 3 days. This is LivePerson's standard measure of a resolved conversation. |

| Agent Participation Rate | (CLOSED CONVERSATIONS - ABANDONED CONVERSATIONS) / CLOSED CONVERSATIONS| Percentage of Closed Conversations where the AGENT sent at least one message. This is the inverse of Abandon Rate. |

| RCR 1 Hour | REPEAT 1 HOUR / CLOSED CONVERSATIONS | Percentage of Closed Conversations where the same ConsumerID opened a subsequent conversation within 1 hour. This measurement is a prime indicator of conversations that are closed prematurely. |

| RCR 1 Day | REPEAT 1 DAY / CLOSED CONVERSATIONS | Percentage of Closed Conversations where the same ConsumerID opened a subsequent conversation between 1 Hour and 1 day. This RCR measurement is mutually exclusive, meaning RCR 1 Hour (for example) is not included. This measurement also indicates conversations that are closed prematurely, although these conversations are not being reopened as urgently as 1 Hour Repeats. |

| RCR 3 Day | REPEAT 3 DAY / CLOSED CONVERSATIONS | Percentage of Closed Conversations where the same ConsumerID opened a subsequent conversation between 1 day and 3 days. This RCR measurement is mutually exclusive, meaning RCR 1 Hour (for example) is not included. This measurement indicates the threshold at which a reopened conversation is still considered unresolved. |

## Automation contents

### Bot Impact | Weekly

**Analysis objective:** Illustrate the impact of automation on Efficiency and Experience KPIs over time.

**Questions answered:** Are my current bot implementations increasing Efficiency while keeping constant or improving Customer Experience measures?

### Bot Impact | daily

**Analysis objective:** Investigate questions from Weekly Bot Impact by drilling down to the daily level.

**Questions answered:** Are my current bot implementations increasing Efficiency while keeping constant or improving Customer Experience measures?

### AB test

**Analysis objective:** Compare Primary KPIs for different date ranges (pre-bot and post-bot) and user types (bots and humans).

**Questions answered:** How do I use Test and Learn methodology with bots?

### Routing bot

**Analysis objective:** Provide insight into each step of a Routing Bot conversation, and show break-points where consumers leave the conversation either volunatarily or involuntarily.

**Questions answered:** How does Conversation Flow change when a Routing Bot is involved?

### Task bot

**Analysis objective:** Task Bots can serve many different purposes, so this visualization supports the comparison of Bots and Humans in terms of both Efficiency and Experience metrics.

**Questions answered:** What is the difference in performance between Bots and Humans for Task Bots?

### Bot Comparison by Date

**Analysis objective:** View success criteria over time for either all bots at once or one particular bot.

**Questions answered:** How are my Bot KPIs trending over time?

### Bot Comparison by Bot

**Analysis objective:**  Compare bots within a program to ensure each bot is accomplishing its intended goal.

**Questions answered:**  Are any of my current Bots performing better than others in any area?

## Automation metrics

| Metric Name | Metric formula | Definition |

| --- | --- | --- |

| Bot Involved Handled Conversations | Sum(Case((\[USER TYPE\]@DESC=”Bot”),\[HANDLED CONVERSATIONS\],0)){\~+} | The number of conversations in which a BOT agent sent at least one message during the selected timeframe. |

| Human Only Handled Conversations | HANDLED CONVERSATIONS - BOT-INVOLVED HANDLED CONVERSATIONS | The number of conversations in which a HUMAN agent sent at least one message and BOTS sent no messages during the selected timeframe.|

| Bot Routing Success Rate | TRANSFERS / HANDLED CONVERSATIONS | Successful transfers (routes) completed by Routing Bot. This is a primary KPI that should be maximized for all Routing Bots.

| Human Resolution Success Rate | (1 - (TRANSFERS / HANDLED CONVERSATIONS)) * (1 - REPEAT 0-3 DAYS) | Successful closures (1-Transfer Rate) completed by Humans after Routing, multiplied by the Resolution Rate (1 - REPEAT 0-3 DAYS). This is a leading indicator of the accuracy of the Routing Bot, as well as the ability of Human Agents to fully resolve cases.|

| Time Spent with Bot vs Human (Mins) | AVG. CONVERSATION DURATION where USER TYPE = "Human" / "Bot" / "Unassigned"| Breakdown of Avg Conversation Duration spent with the Bot, Unassigned, and with a Human. |

| Est. Consumer Responses Sent Per Conversation | (TOTAL NO. OF AGENT RESPONSES / HANDLED CONVERSATIONS) - 1 | We measure Responses sent by the Bot or Agent as a proxy for the number of Consumer actions taken to navigate through the Routing Bot. For example, if a Bot sends 5 Responses per Conversation, this implies that the Consumer has had to respond 4 times.|

| Bot Routing Success Rate | TRANSFERS / HANDLED CONVERSATIONS Successful transfers (routes) completed by Routing Bot. |

| Close Rate | 1 - BOT ROUTING SUCCESS RATE | Percentage of Closed Conversations that were closed while with the Routing Bot. Ideally this metric will be very low. |

| In Queue Abandon Rate | IN QUEUE ABANDONS / CONVERSATIONS IN QUEUE | Percentage of Conversations In Queue that are abandoned before being assigned.

| Assignment Rate | ASSIGNED CONVERSATIONS / CONVERSATIONS IN QUEUE | Percentage of Conversations In Queue that are assigned. |

| Post Assign Abandon Rate | POST ASSIGN ABANDONS / CONVERSATIONS ASSIGNED TO SKILL | Percentage of Conversations In Queue that are abandoned after being assigned, meaning the conversation was closed before an Agent message was sent. |

## Transfer contents

### Queue Health | Weekly

**Analysis objective:**  Weekly trend showing the overall health of the transfer queue.

**Questions answered:**

* How long are consumers typically spending in queue?
* Are there any breakpoints between transfer and conversation?

### Queue Health | Daily

**Analysis objective:**  Investigate questions from Weekly Queue Health by

drilling down to the daily level.

**Questions answered:**

* How long are consumers typically spending in queue?
* Are there any breakpoints between transfer and conversation?

### Queue Health | Day of Week

**Analysis objective:**  Investigate questions from Weekly Queue Health by drilling down to the day-of-week level and isolating issues to a given day of the week.

**Questions answered:**

Do any of the above metrics differ based on day of week or operating hours?

### Skill Distribution

**Analysis objective:**  Distribution of transfers between From Skill and To Skill.

**Questions answered:**   Where are my conversations being transferred from and to?

### Queue Health | skill

**Analysis objective:**  Detailed view of the transfer queue by each Transfer to Skill.

**Questions answered:** Is any particular Skill (transferred to) better than others at navigating visitors through the queue to an interactive conversation?

### Transfer metrics

| Metric Name | Metric formula | Definition |

| --- | --- | --- |

| Assignment Rate | ASSIGNED CONVERSATIONS / CONVERSATIONS IN QUEUE |Percentage of Conversations In Queue that are assigned.|

| Post Assign Abandon Rate | POST ASSIGN ABANDONS /CONVERSATIONS ASSIGNED TO SKILL | Percentage of Conversations Assigned to Skill that are abandoned after being assigned, meaning the conversation was closed before an Agent message was sent. |

| Interactive Transfer Rate | INTERACTIVE TRANSFERS / CONVERSATIONS ASSIGNED TO SKILL | Percentage of Conversations Assigned to Skill that result in an agent message and a subsequent consumer response.|

| Transfer From Skill = NONE | n/a | Skill was transferred from the queue and did not have a previous skill assigned. |

| Transfer To Skill = NONE | n/a | Skill was transferred to the queue.|

## Agent effectiveness - contents

### Efficiency 

**Analysis objective:** Show how effectively the brand is managing the balance between Demand (Conversations) and Supply (Labor).

**Questions answered:**  How are my primary and secondary efficiency KPIs trending over time?

### Experience

**Analysis objective:** Demonstrate how program operations impact the consumer Experience.

**Questions answered:**   How are my Operations impacting consumer experience?

### Magic Quadrant 

**Analysis objective:** Group and Agent-level visualization of the relationship between Efficiency (CCPLH) and Experience (MCS).

**Questions answered:**  Where do my current Agents/Groups stand on the curve between MCS and CCPLH?

### Agent Analysis

**Analysis objective:** Detailed Agent-level analysis showing how Primary KPIs (CCPLH and MCS) are impacted by other agent behaviors such as response times and availability.

**Questions answered:**   Who are my top agents in terms of Efficiency andExperience? Are those agents engaging in positive behaviors across the Operations spectrum?  Which agents should I use for coaching opportunities?

### Weekly Detail

**Analysis objective:** Use this tab to keep a weekly pulse on overall operations performance and measure the weekly impact of your Group and Agent-level coaching initiatives.

**Questions answered:**   What is the program impact of recent Operations changes on program KPIs?