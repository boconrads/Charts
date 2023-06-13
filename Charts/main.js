let myChart1 = document.getElementById('myChart1').getContext('2d');
let myChart2 = document.getElementById('myChart2').getContext('2d');
let myChart3 = document.getElementById('myChart3').getContext('2d');

// Global Options
//Chart.defaults.global.defaultFontFamily = "Georgia";
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';
    Chart.defaults.font.size = 14;
    //Chart.defaults.font.family = 'Tahoma';
    Chart.defaults.font.weight = 500;
    //Chart.defaults.color = 'white';

let zhPopChart1 = new Chart(myChart1, {
    type: 'doughnut', // this can be bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:['Rotterdam', 'Den Haag', 'Zoetermeer', 'Leiden', 'Dordrecht'],
        datasets:[{
            label: 'Population',
            data:[
                655468,
                553417,
                125767,
                125074,
                119537
            ],
            //backgroundColor: 'orange' 1 colour
            backgroundColor:[
                'darkblue',
                'mediumblue',
                'skyblue',
                'lightblue',
                'lightsteelblue'
            ],
            borderWidth:'0',
            borderColor:'white',
        }]
    },
    options:{
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Largests Cities in South Holland',
                color: 'white',
                font: {
                    size: 16,
                    weight:600,
                },
            },
            legend:{ // you want this for doughnut / pie charts, set display to true
                display: true,
                position:'right',
                labels:{
                    color:'white',
                }
            }
        }
    }
}

)

let nlPopChart2 = new Chart(myChart2, {
    type: 'bar', // this can be bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:['020', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven'],
        datasets:[{
            label: 'Population',
            data:[
                872922,
                655468,
                553417,
                359376,
                235707
            ],
            //backgroundColor: 'orange' 1 colour
            backgroundColor:[
                'darkblue',
                'mediumblue',
                'skyblue',
                'lightblue',
                'lightsteelblue'
            ],
            borderWidth:'0',
            borderColor:'white',
        }]
    },
    options:{
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Largests Cities in The Netherlands',
                color: 'darkslategrey',
                font: {
                    size: 16,
                    weight:600,
                },

            },
            legend:{ // you want this for doughnut / pie charts, set display to true
                display: false,
            }
        }
    }
}

)


let glPopChart3 = new Chart(myChart3, {
    color: 'white',
    type: 'line', // this can be bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:['Nijmegen', 'Apeldoorn', 'Arnhem', 'Ede', 'Barneveld'],
        datasets:[{
            label: 'Population',
            data:[
                179100,
                165611,
                163888,
                119986,
                60584
            ],
            //backgroundColor: 'orange' 1 colour
            backgroundColor:[
                'darkblue',
                'mediumblue',
                'skyblue',
                'lightblue',
                'lightsteelblue'
            ],
            borderWidth:'0',
            borderColor:'white',
            color: 'white',
        }]
    },
    options:{
        scales: {
            x: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
              grid: {
                color: 'rgb(203, 195, 178)',
                borderColor: 'rgb(203, 195, 178)' // <-- this line is answer to initial question
              },
              ticks: { color: 'white', beginAtZero: true }
            },
            y: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
              grid: {
                color: 'rgb(203, 195, 178)',
                borderColor: 'rgb(203, 195, 178)'  // <-- this line is answer to initial question
              },
              ticks: { color: 'white', beginAtZero: true }
            }
          },
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Largests Cities in Gelderland',
                color: 'white',
                font: {
                    size: 16,
                    weight:600,
                },
            },
            legend:{ // you want this for doughnut / pie charts, set display to true
                display: false,
                position:'top',
                labels:{
                    color:'white',
                }
            }
        }
    }
}

)