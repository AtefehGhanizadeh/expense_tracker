import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  )

const options = {
    responsive: true,
};
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  


function BarChart(props) {
   const data = {
    labels,
    datasets: [
      {
        label: 'INCOME',
        data: props.incomeArray,
        backgroundColor: "rgb(195, 195, 233)",
        borderRadius:4
      },
      {
        label: 'EXPENSE',
        data: props.expenseArray,
        backgroundColor: "#4c1d95",
        borderRadius:4
      },
    ],
  };
    return <div className='chart w-[100%] h-[100%] flex justify-center items-center'>
        <Bar options={options} data={data}/>
      </div>;
  }

 export default BarChart