---
pagename: Multiple away states
categoryName: Agent & manager workspace
subCategoryName: Workspace configuration
indicator: both
subtitle: Gain deeper insight into how agents spend their time
level3: ''
permalink: agent-manager-workspace-workspace-configuration-multiple-away-states.html
isTutorial: false
isNew: false
date: 2019-01-23 13:55:25 +0000

---
For brands, understanding how agents are spending their time is vital for keeping track of performance and staff management. In addition to the three statuses currently available for agents - online, back soon and away - brands are also able to customize and add their own ‘away’ statuses.

By seeing how long agents are spending in these more specific modes, such as out to lunch, in training and team meeting, brands are better able to understand how agents are spending their time. Multiple agent states are available for both chat and messaging.

**Please ask your LivePerson account team to enable multiple away states for your account.**

## To create custom away state reasons:

1. Access the Night Vision settings by clicking on the **Night Vision icon** to the top right of the screen.

![](/img/multiple-away-states-1.png)

{:start="2"}

1. A dropdown ‘Agent state’ menu will appear.

![](/img/multiple-away-states-2.png)

{:start="3"}

1. Next to _Custom Away state reasons_, click **Edit**.
2. Click on _Add custom Away state reason_.

![](/img/multiple-away-states-3.png)

{:start="5"}

1. Enter the text of the away state reason you wish to add, for example ‘Out to lunch’, or ‘In a meeting’.

![](/img/multiple-away-states-4.png)

{:start="6"}

1. Click **Save**.
2. All customized away state reasons will subsequently appear in the configuration menu. You can edit or delete each reason by clicking on the edit or delete icons that appear on hover over.
3. Click **Done**.

![](/img/multiple-away-states-5.png)

<div class="notice">
<b>Note:</b>
<ul>
<li>You can define up to 10 custom away state reasons.</li>
<li>A default system state will be added at the bottom of the list - away (default). This default state will also appear in the agent view.</li>
<li>Deleted/edited reasons will not update in the agent’s view until the agent changes his state.</li>
</ul>
</div>

## **To set a custom away state:**

Once new away state reasons have been added, the agent will be able to select from them when setting their agent state:

1. Open the status drop down menu.
2. Open the away drop down menu.
3. Select the appropriate away state reason.

![](/img/multiple-away-states-6.png)

<div class="notice">
<b>Note:</b>
<ul>
<li>The default state, “Away (default)”, appears at the bottom of the list.</li>
<li>The selected away state will be indicated with a tooltip in the top bar.</li>
</ul>
</div>

## **The all agent & messaging agent lists**

For brands that have configured additional away state reasons, the _State Duration_ column in both the [all agent list](agent-manager-workspace-manager-tools-for-live-chat-the-all-agents-list.html) and [messaging agent list](agent-manager-workspace-manager-tools-for-messaging-the-messaging-agent-list.html) will now indicate the time elapsed since the agent set their current away state.

{: .important}
**Note:** There is no change in the way state duration is indicated for the Online and Back soon states.

## **Reporting**

LiveEngage [Report Builder](data-reporting-report-builder-report-builder-overview.html) provides visibility into the away reasons used by agents during their time logged into the system. Using the following dashboards, it’s possible to analyze the time spent in each away reason:

## **Agent Activity Predefined Dashboard**

![](/img/multiple-away-states-7.png)

This [dashboard](data-reporting-messaging-messaging-dashboards-agent-activity-dashboard.html) features a pie chart titled “Away,” reflecting the total time spent by agents in the away state, segregated by the time spent in each away reason.

1. Time logged to the away state before it was possible to add multiple away reasons will be represented by an empty slice in the pie chart (AWAY REASON: “ ”).
2. When combined, the time spent in each custom away state is equal to the total time spent in the away state.
3. The pie chart reflects the same filters currently applied to the dashboard. For example, data can be viewed by \[AGENT\] or \[GROUP\].

Additional available agent activity metrics can be filtered by each away state reason, such as: Time Eng., Conc. Engaged, and Engaged Time. These metrics are available only for Live Chat.

## **Messaging Performance Predefined Dashboard**

The pie chart titled “Away” has also been added to the [Messaging Performance Predefined Dashboard](data-reporting-messaging-messaging-dashboards-messaging-performance-dashboard.html) and displays the same data as the Agent Activity Dashboard.

{: .important}
**Note:** Currently, agent messaging activity metrics cannot be filtered by away states, however they can be viewed alongside the time spent in each away reason, per agent, at the hourly level.

To create a new visualization (either a graph or grid) for data from either dashboard, please contact your administrator or Liveperson Customer Success Manager who will be able to create one upon request.