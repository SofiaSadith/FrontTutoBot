import 'chartjs-plugin-labels';

const barData = {
    labels: ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'],
    datasets: [
      {
        label: 'Tutoriales',
        data: [12, 18, 12, 5],
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
    layout:{padding:{bottom:20, top:20}},
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
    labels: ['Tutoriales aprobados', 'Tutoriales desaprobados'],
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