---
pagename: Reporting metrics
categoryName: Data & reporting
subCategoryName: ""
indicator: both
subtitle:
level3: ""
permalink: data-reporting-reporting-metrics.html
isTutorial: false
---

The Conversational Cloud uses a large amount of metrics to provide insightful and detailed reporting.

The Analytics Builder offers brands ready-made dashboards reflecting historic data drawn from their LivePerson Conversational Cloud account activity. These dashboards allow brands to monitor and optimize contact center operations, increase conversions through campaigns and enact data-driven decisions. All the data metrics available in the Analytics Builder, with their definition and location within the different dashboards can be found in the table below.

We also have real-time data to give you an overall picture of how your contract center is performing at any given time. For all the data API's please see our [Developer Center.](https://developers.liveperson.com/essential-resources-api-data-metrics.html)

More information on the Analytics Builder can be found [here](data-reporting-report-builder-report-builder-overview.html).

More information on the Messaging dashboards can be found [here](data-reporting-messaging-messaging-dashboards-performance-dashboard-for-messaging.html).

More information on the Live Chat dashboards can be found [here](https://knowledge.liveperson.com/data-reporting-live-chat-chat-dashboards-agent-activity-dashboard.html).

### Metrics list

The table below outlines all of the data metrics available in the Analytics Builder, with their definition and location within the different dashboards.

<div id="metrics">
<div class="flex-filters">
      <table class="table-filters">
         <thead>
            <tr class="filters">
               <th class="th-filter">
                  <div class="autocomplete">
                  <input id="metricsSearch" placeholder="Search by Metric or Dashboard" class="">
               <div id="metricsSearchautocomplete-list" class="autocomplete-items">
               </div>
               </div>
               </th>
               <th class="th-filter">
                  Analysis Type
                  <select id="Analysis-Type-filter" multiple="multiple"  class="form-control" >
                     <option>Agent productivity</option>
                     <option>Agent segments</option>
                     <option>Agent utilization</option>
                     <option>Agent status</option>
                     <option>Agent responsiveness</option>
                     <option>Campaign conversions</option>
                     <option>Campaign funnel</option>
                     <option>Surveys</option>
                     <option>Queue health</option>
                     <option>Self-service conversions</option>
                     <option>Consumer experience</option>
                     <option>Bot productivity</option>
                     <option>Control group conversions</option>
                     <option>Repeat contact rate</option>
                     <option>Skill segments</option>
                     <option>Network manager</option>
                  </select>
               </th>
               <th class="th-filter">
                  Channel
                  <select id="Chat-filter" multiple="multiple"  class="form-control">
                     <option>All</option>
                     <option>Chat</option>
                     <option>Messaging</option>
                     <option>Standalone</option>
                  </select>
               </th>
                <th class="th-filter">
                  Dashboard
                  <select id="DashBoard-filter" multiple="multiple"  class="form-control">
               <option>Any</option>
               <option>Agent Activity</option>
               <option>Business Activity for Messaging</option>
               <option>Business for Live Chat</option>
					 <option>Goal tracker for live chat</option>
					 <option>Goal tracker for messaging</option>
				     <option>Network Manager Dashboard</option>
					 <option>Operational & Staffing for Live Chat</option>
					 <option>Performance for Messaging</option>
					 <option>Skill Activity for Live Chat</option>
					 <option>Survey for Live Chat</option>
					 <option>Bot Performance Dashboard</option>
				  </select>
               </th>
            </tr>
         </thead>
      </table>
      </div>
<div class="tablecontainer containerMetrics" style="margin-top: 20px;">
<table class="metricstable" id="datametricstable">
  <thead>
    <tr>
      <th>Metric</th>
      <th class="analysis">Analysis Type</th>
      <th class="channel">Channel</th>
      <th class="description">Description</th>
      <th class="dashboard">Dashboard</th>
      <th class="filtered">Filtered By</th>
      <th class="formula">Formula (Optional)</th>
    </tr>
  </thead>
  <tbody class="metric-table">
</tbody>
</table>
</div>
</div>
