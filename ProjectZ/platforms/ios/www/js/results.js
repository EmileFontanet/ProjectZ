function onDeviceReady() {
    console.log("Device ready");
}
var ctxLineChart = $("#lineChart");
var ctxPieChart = $("#pieChart");
var lineChart = new Chart(ctxLineChart, {
    type: 'line',
    data : {
        labels: [1,2,3,4],
        datasets: [{ 
            data: [10,5,20,40],
            borderColor: "#3e95cd",
            fill: false,
            label : 'Score'
      }]
    },
    options: {
    title: {
      display: true,
      text: 'Test de Line chart'
    }
  }
    
});
var pieChart = new Chart(ctxPieChart, {
    type: 'doughnut',
    data : {
        labels : ["80-100 %", "60-80 %", "40-60 %", "20-40 %", "0-20 %"],
        datasets: [{
            data : [15, 89 ,75 ,45 ,23],
            backgroundColor: [
                "rgba(0,130,0,0.8)",
                "rgba(51, 204, 51,0.8)",
                "rgba(255,204,0,0.8)",
                "rgba(255, 102, 0,0.8)",
                "rgba(255, 10, 10,0.8)",
            ]
        }]
        

    },
    options: {
        legend: {
            position : "bottom"
        }
    }
    
});

Chart.NewLegend = Chart.Legend.extend({
  afterFit: function() {
    this.height = this.height - 50;
  },
});
