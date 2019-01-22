---
pagename: Real time messaging dashboard (beta) overview
categoryName: Data & reporting
subCategoryName: Messaging
indicator: both
subtitle: The real time dashboard leverages the power of the real time operational
  and administrative APIs to enable users to monitor the brand’s account health in
  both real time and for the previous 24 hours.
level3: ''
permalink: data-reporting-messaging-messaging-dashboard-real-time-messaging-dashboard.html
isTutorial: false
date: 2019-01-21 15:40:12 +0200
published: false

---
## Introduction

The LivePerson real time dashboard leverages the power of the real time operational and administrative APIs to enable users to monitor, in detail, the brand’s account health in both real time and for the previous 24 hours.

The dashboard reflects the current status of several metrics, including the following:

* Queue health
* Agent load and status
* CSAT
* MCS
* Average response time

**Please note:**

* Real time dashboard is currently a beta feature - users must agree to our data application beta terms of use upon login
* The real time dashboard is available for both messaging and chat

![](https://lh5.googleusercontent.com/JrwVab5vru1sODiU17raL9bOE2WXt9D9m1bVavzHJLdGElafJEe-JBxqGCZ5taGHEtw1v-EimlXMjHk5IzlmVokWnpVduVG2NS-h4Mfa2F6G2PAbOchr5N9r8Al5YGRWTskmvp7_ =624x181)

* The dashboard is API based and leverages the LivePerson open platform.
* The dashboard Includes both real time and the past 24 hours of data.
* The refresh rate is approximately a minute and is not configurable.

## Highlights of the capability

Brands wanting to see the status of their contact center in real time can now take advantage of the real time dashboard. The real time dashboard enables agent managers and contact center managers to gain real time insights into several metrics, including agent activity and performance.

## Limitations

* Internet explorer and edge browsers are not supported
* Data presented in real time dashboard is refreshed at a minimum of every 60 seconds from the time of login and may vary slightly from what is presented in LiveEngage due refresh rate differences
* Opening real time dashboard in multiple browser tabs is not supported

## How to access the real time dashboard

There are three methods to login to the real time dashboard:

1. Regular login (via LiveEngage username/password)
2. Simultaneous Login (via LiveEngage SSO) (_*available by request_)
3. Agent SSO login (via Agent SSO)

### **Regular Login method:**![](https://lh6.googleusercontent.com/wnzyKkPj38rHbHKtQvZXxi6eNXEpBjaD8VVybRK4jAGX7FkvcpDC8Ro8D93D0Q3KQ7Q8opQAt5YMaLt9qNSHMnJNSyubP1xFnuhK9useUVnPFVNR_nRuHvm8LxJM1cRNWdySmKiM =175x177)

**1.** Any valid LiveEngage user may login at: [https://real time.liveperson.net/login](https://realtime.liveperson.net/login)

**2.** Before login, select the dashboard type: Messaging or Chat

**3.** Login via regular method will terminate any existing LiveEngage sessions

### **Simultaneous Login method:**![](https://lh4.googleusercontent.com/5SrQcDep6Q-CQ68LrBJ42b62IramYlQAg6AfnVuaU_rlechRuyqQhdJmGDHS3oQf_DDJOizBYLqmle6F5RT3kUzfWrzPzxvVVJM1z82R9CVLQWGNLHpz2yzrK9L8JUDf2VB3rnuF =175x161)

**1.** To enable simultaneous login, please contact your account manager

**2.** Once enabled, access the simultaneous login at: [https://real time.liveperson.net/sso](https://realtime.liveperson.net/sso)

**3.** Enter your **account number** and select the dashboard **mode**

**4.** You will be redirected to a LiveEngage login page and can continue to login as normal

**5.** You may also bypass step 3 by adding your account number and mode to the URL: [https://real time.liveperson.net/sso?accountId=123&mode=messaging](https://realtime.liveperson.net/sso?accountId=123456&mode=messaging) (replacing “123” with your account number without quotes, and mode with either “messaging” or “chat” without quotes)

**6.** Note, if Agent SSO is enabled on your LiveEngage account, you must login to LiveEngage first (with Agent SSO) before following the steps above

### **Agent SSO method** (not recommended)**:**

Please consider Simultaneous Login method - however, in order to access the Real-time Dashboard via Agent SSO:

1. Refer to [SSO Guide](https://s3-eu-west-1.amazonaws.com/ce-sr/Support+KB+-+customer-facing/LiveEngage/SSO_Unified_Login.pdf)
2. Ensure that the **lpservice** URL parameter referred to in the “Configuration on the Customer’s Environment” section of the SSO guide is equal to **rtDashboard** (e.g. lpservice=rtDashboard)

## Exploring the real time dashboard

### Current Section - Messaging Mode (Open conversation KPIs)

![](https://lh5.googleusercontent.com/uGqmFq_KdPsGtnvfSg6dytf2AnWfXcNw3cZlsy_s5a8rj8-4RgCnA_M29Vg4EeAX3ZepIcqB2Cirfh1vstlRqD5KkLrwsYn9houR7K7Hk4eVcgLFpiMch7NqdKmQ6NoVwDyDr4WG =624x323)

When in messaging mode, the current section displays metrics on open conversations:

* **OPEN**: the number of open conversations
* **UNASSIGNED**: The number of unassigned (in queue) conversations
* **ASSIGNED**: The number of assigned conversations
* **ACTIVE**: The number of active conversations
* **LOAD**: The number of active conversations as a percentage of max concurrent conversations of all agents
* **LOAD - online**: The number of active conversations as a percentage of max concurrent conversations of agents in the online state
* **LOAD - other: The number of active conversations as a percentage of max concurrent conversations of agents not in the online state**
* __RESPONSE TIME*__: Average time of all agent responses from consumer messages (estimated from sample of OPEN conversations, exc bots).
* __RESPONSE TIME - Consumer*__: Average time of all consumer responses from agent messages (estimated from sample of OPEN conversations)
* __TTFR FROM ALL ASSIGN*__: Average time to all agent responses from assignments including transfers (estimated from sample of OPEN conversations, exc. bots).
* __TIME TO FIRST RESPONSE (TTFR)*__: Average time to first agent response from consumer message (estimated from sample of OPEN conversations, exc. bots)
* __TIME TO FIRST RESPONSE (TTFR) - Consumer*__: Average time to first consumer response from agent message (estimated from sample of OPEN conversations)
* _TTFR FROM FIRST ASSIGN_: Average time to first agent response after first conversation assignment (estimated from sample of OPEN conversations, exc. bots)*
* _WAIT TIME_: The difference between TTFR and TTFR FROM FIRST ASSIGN*
* __TIME TO FIRST ASSIGN*__: Average time to first agent assignment from conversation start (estimated from sample of OPEN conversations, exc. bots)
* **MCS**: the average meaningful connection score of the conversations.
* **MCS - Positive**: the number of conversations with positive MCS
* **MCS - Negative**: the number of conversations with negative MCS

\*Note: _Response time related metrics require time to ‘warm-up’ as data is gathered and refreshed every 5 minutes. Once loaded, the result is based on a representative sample, not all conversations. This sample, and the scope of calculation, can be modified via the Menu (see Additional Functions in this guide)._

### Current Section - Chat mode (Recently completed chats KPIs)

![](https://lh5.googleusercontent.com/DoBUaGjFOtVeOfnfL7VaOn4GqpWvSiHi4xXOZ_xQRj1nOWk5YBSahENsz7Ff3wf495gxohjF0iHxr6f1f9gojLrjsZLgdl17Dp7R8S2w0ECBkBh4cl5-TRSJm1N9nMR-vek1zSmz =624x319)

When in chat mode, the current section displays metrics on recently completed chats:

* **IN QUEUE**: The number of visitors currently in queue (all Groups)
* **ENTERED QUEUE**: The number of visitors that entered the queue (all Groups)
* **ABANDONED**: The number of visitors that abandoned the queue before being connected to an agent (all Groups)
* **ABANDON RATE**: The number of visitors that abandoned the queue as a percentage of the total visitors that entered the queue (all Groups)
* **AVG. TIME TO ABANDON**: The average time visitors spend in queue before abandon (all Groups)
* **CONNECTED**: The number of visitors that were connected to an agent (all Groups)
* __SERVICE LEVEL*__: Percentage of chats answered within SLA Threshold (set in main menu) (all Groups)
* **OCCUPANCY**: Percentage of time spent actively engaged whilst in the online state
* **AVG. TIME TO ANSWER**: The average time that a visitor spent in the queue before being connected to an agent (all Groups)
* **AHT**: The average time spent handling the recently interactive chats

_*Service Level threshold may be modified via the menu (see additional functions in this guide)  
_  
“Last hours” / “today from” section - messaging (closed conversations)

![](https://lh5.googleusercontent.com/DZmnmwmdedIjBepqv_5EW_vG_78koAnPICltaXjm_DR4aGaPMbhS2PDp9JhyFBugNKDHhgxl4ShMrDPCtwPfMSutX_uGX8t4pcpv67wfodJY56yV_WsLLypinzP2A5O-j67VY3-R =624x517)

In messaging mode, the last 24 (configurable) hours section allows brands to see the data on closed conversations. Brands have two options when it comes to choosing the time frame they would like to view (limit up to 24 hours):

1. A user can select a timeframe from a fixed point in time, such as “**Today, from 9:00 AM**”.
2. Or, a user can select a rolling timeframe going back an “x” amount of hours, such as the **last 3 hours**.

![](https://lh5.googleusercontent.com/RLHwHU5UJFcmG2HiJazpt-BDAAkdC-sBR_GlXB2zeDrWBUWeII6WYgSDlmGfja7pn7cVcRtAgODGp1OuFO0wQYn_HEWXEt3KA7f_fSEvqydpqvlWqmEeC6d7Qw0IidAQblo_nXyp =624x300)

The metrics available in this section all relate to closed conversations only:

* **Closed conversation graph**: see the distribution of closed conversations regarding how many conversations were closed by the consumer, agent or system
* **CSAT**: average CSAT of closed conversations including how many CSAT surveys were answered
* **Average resolution time**
* **Response** __time*__: see definition from Current KPI section
* __Assign to Response time*__: see definition from Current KPI section
* __First Response time*__: see definition from Current KPI section
* _First Assignment Time_: see definition from Current KPI section*
* _Wait Time_: see definition from Current KPI section*
* **MCS**: the meaningful connection score average of the closed conversations. This metric shows how many conversations had positive or negative MCS

**_Note:_** _response time related metrics require time to ‘warm-up’ as data is gathered and refreshed every 5 minutes. Once loaded, the result is based on a representative sample, not all conversations. This sample size can be modified via the Menu (see Additional Functions in this guide)._

_Example of Last 24 Hour section in **chat dashboard** mode:_

![](https://lh6.googleusercontent.com/u9ZR24cTRdfOrFonnHC7zCXaQadoNGBRPfpddPKzdTyEdJDKzak_B3zcCiInXwG9dcAXMF3zLaoRXc3tRkGFb6XiMhweyRDqMkoknw98xI-dffc95qGV63TuXjJdhAP30q91_c5K =624x321)

### Agents Section

![](https://lh3.googleusercontent.com/C9g_T6UwIV0Jvy1nV6n7_IXPXBcuJcoptKWP0U9scaSmcFo4AF2CKKMGVyXJk5k07QSaexpEP4vQNICTVAQpbY0Kf5TLgLXlvOD6xzsl2rhYD6hMV2yJDYyVXJq6KYywTXwAyOux =624x181)

This section provides data on all the agents that are currently logged in. You can choose to view in either grid or card view, or export a snapshot to CSV (icons on the right).

The following metrics are available:

* **Name**
* **Image**
* **Status time**: the amount of time that the agent has been in that status
* **Open**: the number of open conversations that are assigned to the agent
* **Active**: the number of open and assigned conversations are currently active
* **Load**: the agent’s workload.
  * The workload is established by calculating the total weight of the assigned conversations divided by the agent’s configured maximum number of high intensity conversations.
* **Closed**: the number of conversations that were closed in the time period selected
* **CSAT**: average CSAT of the conversations that were closed in the time period selected

It is possible to view up to 30 agents per page. The default is set at 18. In order to see the next or previous section of agents use the arrows to navigate.

{: .notice}  
In **chat dashboard** mode, agent summary status (i.e. Current Status) is not available.

### Skills Section

![](https://lh6.googleusercontent.com/k9UsjYI5Amkg4EEJvnToZmRhSIZTdMcnZ4Kvv-C-XdkO2sygf0tZuPk8u6yJZkcZLWQCBab2YI78ubkgTr53331B7ssfCvRuiN9_UC957PCvaQtYxul_TdUgs4go_r2lwxU3kIJK =624x279)

The skills section takes metrics from the Current and Closed Conversations sections and displays them in a skills table format. It is possible to see the skills next to one another. Compare the skills and see the distribution of the skills metrics.  You can choose to view in either grid or card view, or export a snapshot to CSV (icons on the right).

* **Open**: the number of open conversations are in that skill
* **Unassigned:** the number of conversations unassigned and in queue
* **Assigned:** the number of conversations assigned to agents
* **Load**: the average load of the agents in that skill
* **Online agents**: the number of “Online” agents in that skill
* **Away**: the number of “Away” agents in that skill
* **Back soon agents**: the number of “Back soon” agents are in that skill
* **Max slots**: the max capacity configured for that skill
* **Closed**: the number of closed conversation in skill within the last 12 hours
* **Average resolution time for the time period selected**
* **CSAT**: the average CSAT of closed conversations in that skill that were closed in last 12 hours

The Skills Section can be exported to a .CSV file.

View up to 100 skills per page. The default is set at 25. In order to see the next or previous section of skills use the arrows to navigate.

## Filtering the sections

![](https://lh6.googleusercontent.com/9iHlgcy_F6rWGTG8pyhb8tUtxv6xi6KLvaN9QKzjPUfgOVmotZct7Qoa_9LE1fN8r_F-YRFHy20jyUZM4UZserWWbwvJfnyrFDSRLtrCoLhPCjeEcPgdcSiNXni0tmmyuBxFwha1 =624x184)

**Dashboard header filters**: These main filters will impact the entire dashboard and the displayed data.
Two types:

**Skills**
Can choose skill to see the metrics of that specific skill
Can choose multiple skills and will see aggregated data on those skills.

**Groups**
Choose group to see metrics for that specific group.
Can choose multiple groups and will see aggregated data on those groups.
It is possible to filter for both skills and groups.

**Last 24 Hour/ “Today, from” filters**: these filters allow you to filter by time range according to the following options:

1. **Today from a specific hour**: choose a specific hour to filter from
2. **Last X hours**: shows data from the last X hours of your choice - like looking backwards.
3. Use the radio buttons or the sliders to change the time frame

![](https://lh5.googleusercontent.com/bhG5CLSxifP05m5_LSJwXPOXZhoghDKDXnJR0X6giR3muwp5wj1QpuOHAHYgI9fFZjl46NqgzGhJP8sN3frNAhQT4jbEo6b_4oP_fwIOXVIS_i1z5MR9o542AzP-UWnZuTL_ZYsA =334x259)

**Agent filters: there is currently only one filter available:**

1. **Logged in**: while this is the only filter, you can see numbers based on the agent status: Online Back soon Away
2. **Sort**: allows you to sort the information by the following categories:

* Status
* Name
* Status time
* Open
* Active
* Load
* Closed
* Average resolution time (in grid-view only currently)
* CSAT
  

  You can also sort by ascending or descending. You may also view the agents section as cards (default) or as a table/list view. You also have the ability to export the agent list as a .CSV file

# Customizing the Dashboard

## ![](https://lh5.googleusercontent.com/Z6dB1KLwWgxaVEmuwyJu4pFPdt7B3JwS0vniyUp_EvHJ9SyOOsciBYI8z63CJVaCvyYdqkGEUdOEgKOsgnG3LFfMnUq8ybE6aFXW3HODylBR5ESSjUz_oodc6l5c39cZOIQlvZXs =624x368)

When clicking the three dots next to any of the dashboard sections, the **KPI configuration** window pops up:

![](https://lh6.googleusercontent.com/zYJN3ZMAggfxeBRAOdUZPvP7NzmyeIC6UYWI27nvGQtb6GZfF812qc2q36sd7iOc3e_TSR9Ggmqddkfti-ENBQVUzLi2d4xzuqJDhVRdzPPQTtL1KSumCyc_Bv3Qc6ar0jUgIqOL =624x269)

Two sections are included in the KPI configuration:

First tab: **Alerts & Thresholds**

* Which KPI appears in the dashboard
* Set threshold to change the color of API to alert managers that the threshold has been exceeded

  Second tab: **KPI arrangement**


* Change the order of the sections
* Change the order of the KPIs displayed

Configuration changes are stored in the browser cookie (per browser)

You can click on current, closed, agents and skills

* Choosing current allows you to choose from the list of KPIs defined in the **Current** section. You can choose whether to display assigned, unassigned and other various KPIs.
* For each of the KPIs you can choose the threshold that you would like to receive an alert for. To choose, either write the number manually or use the + and - buttons to choose. For example, if you assign 250 as your threshold for open conversation, you will receive a red notification once the number of conversations has been reached and goes beyond that threshold. The same applies for Closed Conversations.
* For agents and skills there are no configurations to customize. ![](https://lh3.googleusercontent.com/_Mm4SbVTFopLOyiRehivhBARz1MqXjEGHcdcMEjBZCMJ8hK0pw7ocTMcwxPfJUYWx5N5e4j18Tsw12Bb1XVLY-fAe_c5x8rof1lUFTF20AQt6n-lKKpfHPqnqJHzaN8zgPs_FrT1 =419x487)
* If you choose the KPI arrangement tab, you can play with how you display the **KPI section** and the KPIs inside of them. The first arrows on the right side allow you to move the sections around. If you click the left hand arrow, you can arrange the KPIs within that specific section as you wish.

![](https://lh4.googleusercontent.com/ZKIABOv1r-INMqcnOA-kLdRR96mbWyOIW6nReBaib0enPaXrs3KTMiiJeS4zLk3kwgLSTamhyuj4IeYD_zj5Vhg5SOU06tRCl61TeS_g6nnGp_0VNPt92NmuoPHzl18ow97xvNDa =501x674)

The reset button on the bottom left resets to the initial configuration.

# Additional functions

![](https://docs.google.com/a/liveperson.com/drawings/d/sG71W6V69d4qxi2HDGV-6mw/image?w=624&h=68&rev=28&ac=1&parent=1ojMh05NOdSfTcbSH8yvSledaiZ-ZYH6pGIQhgu6fCNQ =624x68)

**The menu on the top right corner:**

* Allows you to logout
* Review the [Terms of Use](https://www.liveperson.com/policies/analytics-beta-tou)
* Submit feedback button (via Google Form)
* Allows you to change the mode of the dashboard (from messaging to chat)
* Allows you to modify the response time sample size or opened filter (see below)

_![](https://lh5.googleusercontent.com/s0HIOwaPAMdBs-xd_ODdhy-rdl_2f9SQSgHyUavHeiRC6bV9Q5ImYg4LATuUk1ArOqTkpSou8Hp9quNi-_8yluMstBNEfwl6l7oo9xbHNfbslm1EeVV9-OwgSblFKWewSn5GiCdm =386x250)_

**_Sample size means:_** _the representative sample of Conversations to calculate Response Time metrics - a smaller sample will produce quicker results (recommended for large volume programs) - a larger sample will produce slower, but more accurate, results (not recommended for large volume programs)._

**_Opened filter means:_** _the scope of conversations to include in the calculation of Response Time metrics - by limiting conversations to those that Opened in the last 30 minutes (for example), you can see more recent trends within the CURRENT KPI section._

{: .notice}_  
Be aware that some elements and usability may change as we finalize this feature. Customers must agree to the conditions and limitations when logging in to the real time dashboard tool._