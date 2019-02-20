---
pagename: Real time messaging dashboard overview (beta)
categoryName: Data & reporting
subCategoryName: Messaging
indicator: both
subtitle: Leverage the power of the real-time operational and administrative APIs
  to enable users to monitor the brand’s account health
level3: Messaging Dashboards
permalink: data-reporting-messaging-messaging-dashboards-real-time-messaging-dashboard-overview.html
isTutorial: false
date: 2019-01-21 13:40:12 +0000
isNew: false

---
The LivePerson real time dashboard leverages the power of the real time operational and administrative APIs to enable users to monitor, in detail, the brand’s account health in both real time and for the previous 24 hours.

The dashboard reflects the current status of several metrics, including the following:

* Queue health
* Agent load and status
* CSAT
* [MCS](data-reporting-meaningful-connection-score-(MCS)-meaningful-connection-score-(MCS)-overview.html)
* Average response time

Please note that the real time dashboard is:

* Currently a beta feature - users must agree to our data application beta terms of use upon login
* Available for both messaging and chat
* API based and leverages the LivePerson open platform
* Includes both real time and the past 24 hours of data
* The refresh rate is approximately a minute and is not configurable

![](/img/real-time-messaging-dashboard-overview1.png)

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

### Regular login method:

1\. Any valid LiveEngage user may login at: [https://real time.liveperson.net/login](https://realtime.liveperson.net/login)

2\. Before login, select the dashboard type: Messaging or Chat

3\. Login via regular method will terminate any existing LiveEngage sessions

### Simultaneous login method

1\. To enable simultaneous login, please contact your account manager

2\. Once enabled, access the simultaneous login at: [https://real time.liveperson.net/sso](https://realtime.liveperson.net/sso)

3\. Enter your account number and select the dashboard mode

4\. You will be redirected to a LiveEngage login page and can continue to login as normal

5. You may also bypass step 3 by adding your account number and mode to the URL: [https://real time.liveperson.net/sso?accountId=123&mode=messaging](https://realtime.liveperson.net/sso?accountId=123456&mode=messaging) (replacing “123” with your account number without quotes, and mode with either “messaging” or “chat” without quotes)

{: .notice}  
If Agent SSO is enabled on your LiveEngage account, you must login to LiveEngage first (with Agent SSO) before following the steps above

### Agent SSO method (not recommended):

Please consider simultaneous login method - however, in order to access the Real time dashboard via Agent SSO:

1. Refer to [SSO Guide](Security-regulations-SSO-unified-login.html)
2. Ensure that the **lpservice** URL parameter referred to in the “Configuration on the Customer’s Environment” section of the SSO guide is equal to **rtDashboard** (e.g. lpservice=rtDashboard)

## Exploring the real time dashboard

### Current Section - Messaging Mode (Open conversation KPIs)

![](/img/real-time-messaging-dashboard-overview.2.png)

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

{: .notice}  
Response time related metrics require time to ‘warm-up’ as data is gathered and refreshed every 5 minutes. Once loaded, the result is based on a representative sample, not all conversations. This sample, and the scope of calculation, can be modified via the Menu (see Additional Functions in this guide).

### Current Section - chat mode (recently completed chats KPIs)

![](/img/real-time-messaging-dashboard-overview3.png)

When in chat mode, the current section displays metrics on recently completed chats:

* **IN QUEUE**: The number of visitors currently in queue (all Groups)
* **ENTERED QUEUE**: The number of visitors that entered the queue (all Groups)
* **ABANDONED**: The number of visitors that abandoned the queue before being connected to an agent (all Groups)
* **ABANDON RATE**: The number of visitors that abandoned the queue as a percentage of the total visitors that entered the queue (all Groups)
* **AVG. TIME TO ABANDON**: The average time visitors spend in queue before abandon (all Groups)
* **CONNECTED**: The number of visitors that were connected to an agent (all Groups)
* **SERVICE LEVEL**: Percentage of chats answered within SLA Threshold (set in main menu) (all Groups)
* **OCCUPANCY**: Percentage of time spent actively engaged whilst in the online state
* **AVG. TIME TO ANSWER**: The average time that a visitor spent in the queue before being connected to an agent (all Groups)
* **AHT**: The average time spent handling the recently interactive chats

{: .notice}  
Service level threshold may be modified via the menu (see additional functions in this guide)

![](/img/RTMD6.png)

In messaging mode, the last 24 (configurable) hours section allows brands to see the data on closed conversations. Brands have two options when it comes to choosing the time frame they would like to view (limit up to 24 hours):

1. A user can select a timeframe from a fixed point in time, such as “**Today, from 9:00 AM**”.
2. Or, a user can select a rolling timeframe going back an “x” amount of hours, such as the **last 3 hours**.

![](/img/real-time-messaging-dashboard-overview4.png)

The metrics available in this section all relate to closed conversations only:

* **Closed conversation graph**: see the distribution of closed conversations regarding how many conversations were closed by the consumer, agent or system
* **CSAT**: average CSAT of closed conversations including how many CSAT surveys were answered
* **Average resolution time**
* **Response** **time**: see definition from Current KPI section
* **Assign to response time**: see definition from Current KPI section
* **First response time**: see definition from Current KPI section
* **First assignment time:** see definition from Current KPI section
* **Wait time:__ see definition from Current KPI section*
* **MCS**: the meaningful connection score average of the closed conversations. This metric shows how many conversations had positive or negative MCS

**Note:** Response time related metrics require time to ‘warm-up’ as data is gathered and refreshed every 5 minutes. Once loaded, the result is based on a representative sample, not all conversations. This sample size can be modified via the Menu (see Additional Functions in this guide).

Example of Last 24 Hour section in chat dashboard mode:

![](/img/real-time-messaging-dashboard-overview5.png)

### Agents section

![](/img/real-time-messaging-dashboard-overview6.png)

This section provides data on all the agents that are currently logged in. You can choose to view in either grid or card view, or export a snapshot to CSV (icons on the right).

The following metrics are available:

* Name
* Image
* **Status time**: the amount of time that the agent has been in that status
* **Open**: the number of open conversations that are assigned to the agent
* **Active**: the number of open and assigned conversations are currently active
* **Load**: the agent’s workload - the workload is established by calculating the total weight of the assigned conversations divided by the agent’s configured maximum number of high intensity conversations.
* **Closed**: the number of conversations that were closed in the time period selected
* **CSAT**: average CSAT of the conversations that were closed in the time period selected

It is possible to view up to 30 agents per page. The default is set at 18. In order to see the next or previous section of agents use the arrows to navigate.

{: .notice}  
In chat dashboard mode, agent summary status (i.e. Current Status) is not available.

### Skills section

![](/img/real-time-messaging-dashboard-overview7.png)

The [skills](admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html) section takes metrics from the current and closed conversations sections and displays them in a skills table format. It is possible to see the skills next to one another. Compare the skills and see the distribution of the skills metrics.  You can choose to view in either grid or card view, or export a snapshot to CSV (icons on the right).

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

{: .notice}  
The Skills section can be exported to a .CSV file

View up to 100 skills per page. The default is set at 25. In order to see the next or previous section of skills use the arrows to navigate.

## Filtering the sections

![](/img/real-time-messaging-dashboard-overview8.png)

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

![](/img/real-time-messaging-dashboard-overview9-1.png)

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

## Customizing the dashboard

![](/img/real-time-messaging-dashboard-overview10.png)

When clicking the three dots next to any of the dashboard sections, the **KPI configuration** window pops up:

Two sections are included in the KPI configuration:

First tab: **Alerts & Thresholds**

* Which KPI appears in the dashboard
* Set threshold to change the color of API to alert managers that the threshold has been exceeded

  Second tab: **KPI arrangement**
* Change the order of the sections
* Change the order of the KPIs displayed

{: .notice}  
Configuration changes are stored in the browser cookie (per browser)

You can click on current, closed, agents and skills:

* Choosing current allows you to choose from the list of KPIs defined in the **Current** section. You can choose whether to display assigned, unassigned and other various KPIs.
* For each of the KPIs you can choose the threshold that you would like to receive an alert for. To choose, either write the number manually or use the + and - buttons to choose. For example, if you assign 250 as your threshold for open conversation, you will receive a red notification once the number of conversations has been reached and goes beyond that threshold. The same applies for Closed Conversations.
* For agents and skills there are no configurations to customize.
* If you choose the KPI arrangement tab, you can play with how you display the **KPI section** and the KPIs inside of them. The first arrows on the right side allow you to move the sections around. If you click the left hand arrow, you can arrange the KPIs within that specific section as you wish.

{: .sidebyside}  
![](/img/real-time-messaging-dashboard-overview11.png) ![](/img/real-time-messaging-dashboard-overview12.png)

The reset button on the bottom left resets to the initial configuration.

# Additional functions

**The menu on the top right corner:**

* Allows you to logout
* Review the [Terms of Use](https://www.liveperson.com/policies/analytics-beta-tou)
* Submit feedback button (via Google Form)
* Allows you to change the mode of the dashboard (from messaging to chat)
* Allows you to modify the response time sample size or opened filter (see below)

![](/img/real-time-messaging-dashboard-overview13.png)

**Sample size means:** the representative sample of conversations to calculate Response Time metrics - a smaller sample will produce quicker results (recommended for large volume programs) - a larger sample will produce slower, but more accurate, results (not recommended for large volume programs).

**Opened filter means:** the scope of conversations to include in the calculation of Response Time metrics - by limiting conversations to those that Opened in the last 30 minutes (for example), you can see more recent trends within the CURRENT KPI section.

{: .notice}  
Be aware that some elements and usability may change as we finalize this feature. Customers must agree to the conditions and limitations when logging in to the real time dashboard tool.