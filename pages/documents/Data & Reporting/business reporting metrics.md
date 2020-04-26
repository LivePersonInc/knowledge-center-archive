---
pagename: Reporting metrics
categoryName: Data & reporting
subCategoryName: ''
indicator: both
subtitle:
level3: ''
permalink: data-reporting-reporting-metrics.html
isTutorial: false

---
LiveEngage uses a large amount of metrics to provide insightful and detailed reporting.

The Analytics Builder offers brands ready-made dashboards reflecting historic data drawn from their LiveEngage account activity. These dashboards allow brands to monitor and optimize contact center operations, increase conversions through campaigns and enact data-driven decisions. All the data metrics available in the Analytics Builder, with their definition and location within the different dashboards can be found in the table below.

We also have real-time data to give you an overall picture of how your contract center is performing at any given time. For all the data API's please see our [Developers Community.](https://developers.liveperson.com/essential-resources-api-data-metrics.html)

More information on the Analytics Builder can be found [here](data-reporting-report-builder-report-builder-overview.html).

More information on the Messaging dashboards can be found [here](data-reporting-messaging-messaging-dashboards-performance-dashboard-for-messaging.html).

More information on the Live Chat dashboards can be found [here](https://knowledge.liveperson.com/data-reporting-live-chat-chat-dashboards-agent-activity-dashboard.html).

### Metrics list

The table below outlines all of the data metrics available in the Analytics Builder, with their definition and location within the different dashboards.

<div id="metrics">
<input id="metricsSearch" placeholder="Search by Metric or Dashboard" />
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
  <tbody class="list">
  {% for metricitem in site.data.reportbuilder %}
    <tr>
      <td class="metric">{{ metricitem.Metric }}</td>
      <td class="analysis">{{ metricitem.analysisType }}</td>
      <td class="channel">{{ metricitem.Channel }}</td>
      <td class="description">{{ metricitem.Description }}</td>
      <td class="dashboard">{{ metricitem.Dashboard }}</td>
      <td class="filtered">{{ metricitem.filteredBy }}</td>
      <td class="formula">{{ metricitem.formulaOptional }}</td>
    </tr>
  {% endfor %}
</tbody>
</table>
</div>
