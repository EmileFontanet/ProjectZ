function onDeviceReady() {
    console.log("Device ready");
}
widthLineChart = String(Math.floor(screen.width*0.9));
heightLineChart = String(Math.floor(screen.height*0.35));
widthPieChart = String(Math.floor(screen.width*0.9));
heightPieChart = String(Math.floor(screen.height*0.35));
widthBarChart = String(Math.floor(screen.width*0.9));
heightBarChart = String(Math.floor(screen.height*0.45));
$("#lineChart").attr("width", widthLineChart);
$("#lineChart").attr("height", heightLineChart);
$("#pieChart").attr("width", widthPieChart);
$("#pieChart").attr("height", heightPieChart);
$("#barChart").attr("height", heightBarChart);
$("#barChart").attr("width", widthBarChart);
var ctxLineChart = $("#lineChart");
var ctxPieChart = $("#pieChart");
var ctxBarChart = $("#barChart");
var lineChart = new Chart(ctxLineChart, {
    type: 'line',
    data : {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        datasets: [{ 
            data: [0,10,5,25,15,30,25,40,50,45,65,50,75,80,70,100],
            borderColor: "#688eb7",
            fill: false,
            label : 'Score',
      }]
    },
    options: {
        /*scales:{
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
          }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Score'
          }
            }]
        },*/
        
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + ' %';
                }
            }

        },
        legend: {
            display: false
        },
        responsive: false,
        maintainAspectRatio: false,
        title: {
            display: false
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
            position : "bottom",
            
        },  
        responsive: false

    }
    
});
var barChart = new Chart(ctxBarChart, {
    type: 'bar',
    data : {
        labels : ["Micro", "Theme2", "Theme3", "Theme4", "Theme5", "theme6"],
        datasets: [{
            data : [100,50,80,20,60,85],
            backgroundColor: "#688eb7"
        }]
    },
    options: {
        legend: {
            display: false,
            
        },  
        responsive: false,
        maintainAspectRatio: false

    }
});


