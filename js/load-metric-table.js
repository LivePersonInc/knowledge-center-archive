(function () {
  var staticUrl = "/_data/reportbuild.json"
  fetch(staticUrl)
    .then(response => response.json())
    .then(metricData => {
      metricData.map((metricitem) => {
        let { Metric, analysisType, Channel, Description, Dashboard, filteredBy, formulaOptional } = metricitem;
        jQuery(".metric-table").append(`
          <tr>
            <td class="metric">${Metric}</td>
            <td class="analysis">${analysisType}</td>
            <td class="channel">${Channel}</td>
            <td class="description">${Description}</td>
            <td class="dashboard">${Dashboard}</td>
            <td class="filtered">${filteredBy}</td>
            <td class="formula">${formulaOptional}</td>
          </tr>
        `);
      });
    })
})();