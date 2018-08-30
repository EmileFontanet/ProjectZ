function onDeviceReady() {
    console.log('Device ready');
}
document.addEventListener('deviceready', onDeviceReady, false);

var ctx = $("#graphClassementExa");
widthChart = String(Math.floor(screen.width*0.8));
heightChart = String(Math.floor(screen.height*0.5));
$("#graphClassementExa").attr("width", widthChart);
$("#graphClassementExa").attr("height", heightChart);
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [{
      label: 'Votre moyenne',
      borderColor: "rgba(104, 142, 183, 0.8)",
        backgroundColor: "rgba(104, 142, 183, 0.3)",
      borderWidth: 1,
      fill: false,
      data: [64]
    }]
  },
  options: {
      scales: {
          xAxes: [{
              barPercentage: 0.65
          }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 100
            }
        }]
    },
    responsive: false,
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 72,
        borderColor: '#78a54a',
        borderWidth: 1,
        label: {
          enabled: false,
          content: 'Seuil de réussite'
        }
      },
        {
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 33,
        borderColor: '#f4a142',
        borderWidth: 1,
        label: {
          enabled: false,
          content: 'Moyenne des utilisateurs'
        }
      }
                    
        
                   
                   
                ]
    }
  }
});