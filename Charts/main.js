let myChart1 = document.getElementById('myChart1').getContext('2d');
let myChart2 = document.getElementById('myChart2').getContext('2d');

// Global Options
//Chart.defaults.global.defaultFontFamily = "Georgia";
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';
    Chart.defaults.font.size = 14;
    //Chart.defaults.font.family = 'Tahoma';
    Chart.defaults.font.weight = 500;
    Chart.defaults.color = 'white';

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
        plugins: {
            title:{
                display:true,
                text:'Largests Cities in South Holland',
                font: {
                    size: 24,
                    weight:600,
                }
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

let zhPopChart2 = new Chart(myChart2, {
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
        plugins: {
            title:{
                display:true,
                text:'Largests Cities in The Netherlands',
                font: {
                    size: 24,
                    weight:600,
                },
                padding: {
                    top: 10,
                    bottom: 60,
                  }
            },
            legend:{ // you want this for doughnut / pie charts, set display to true
                display: false,
                position:'right',
                labels:{
                    color:'white',
                }
            }
        }
    }
}

)