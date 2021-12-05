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
  Legend
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: '',
    },
    legend: {
      position: 'top',
      display: false,
      text: '',
      labels: { 
        color:"#cccccc",
      }
    },
  },
  
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid:{
        display:false
      },
      ticks:{
        font: {
          family: "'Source Code Pro', monospace",
        },
        color: "#cccccc"
      }
    },
    y: {
      stacked: true,
      grid:{
        display:false
      },
      ticks:{
        font: {
          family: "'Source Code Pro', monospace",
        },
        color: "#cccccc"
      }
    }
  },
};

const labels = ['Power Consumption', 'Life Support Rating'];

export const data = {
  labels,
  datasets: [
    {
      data: [1131506, 0],
      backgroundColor: '#ffff66',
    },
    {
      data: [0, 7863147],
      backgroundColor: '#00cc00',
    },
  ],
};

export function OxygenChart() {
  return <Bar options={options} data={data} />;
}
