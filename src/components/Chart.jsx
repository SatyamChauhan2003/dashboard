import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip,  } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, );

export const data = {
 
  datasets: [
    {
      label: 'Votes',
      data: [17, 5, 5, 3],
      backgroundColor: [
        '#36B37E',
        '#FF5630',
        '#FFAB00',
        '#36F',
       
      ],
      borderColor: [
        '#36B37E',
        '#FF5630',
        '#FFAB00',
        '#36F',
        
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return <Doughnut data={data} />;
}