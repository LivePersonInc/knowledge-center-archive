(function () {
  metricData =[];
  try {    
    metricData.map((metricitem)=>{
      let { Metric, analysisType, Channel, Description, Dashboard, filteredBy, formulaOptional} = metricitem;
      $(".metric-table").append(`
      <tr style="display:none">
        <td class="metric">${Metric}</td>
        <td class="analysis">${ analysisType }</td>
        <td class="channel">${ Channel }</td>
        <td class="description">${ Description}</td>
        <td class="dashboard">${Dashboard}</td>
        <td class="filtered">${filteredBy}</td>
        <td class="formula">${formulaOptional}</td>
      </tr>
    `);
    });
   
  } catch (e) {
    console.log(e);
  }
}());
