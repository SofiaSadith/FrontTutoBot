import 'chartjs-plugin-labels';

const barData = {
    labels: ['1° Ciclo', '2° Ciclo', '3° Ciclo', '4° Ciclo', '5° Ciclo', '6° Ciclo', '7° Ciclo', '8° Ciclo', '9° Ciclo', '10° Ciclo', ],
    datasets: [
      {
        label: 'Nota',
        data: [12, 18, 12, 8.8, 11, 13, 10, 11.2, 10.4, 15],
        backgroundColor: "#E16B72",
        barPercentage: 0.3,
        pointBorderColor: "#8884d8",
        borderRadius: 5,
      },
    ],
  };
  
  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins:{legend:{display:true}},
    layout:{padding:{bottom:1, top:32}},
    scales: {
      y:{
        min: 0,
        max: 20,
        ticks:{
          color:"black",
          font:{
            size:13
          }
        },
        grid:{
          color:"#B5BDD0"
        }
      },
      x:{ 
        ticks:{
          color:"black",
          font:{
            size:13

          }
        },
        grid:{
          color:"transparent"
        }
      }
    },
  };

  const pieData = {
    labels: ['Sesiones Insatisfechas (%)', 'Sesiones Satisfechas (%)'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#6AC9C0", "#EBAB8E"],
        hoverOffset: 4
      },
    ],
  };
  
  const pieOptions = {
    width: 1000,
    height: 1000,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2
      }
    },
  };
  
  export {barData, barOptions, pieData, pieOptions};