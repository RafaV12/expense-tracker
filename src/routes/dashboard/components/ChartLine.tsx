import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export const ChartLine = (): JSX.Element => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Balance',
        data: [200, 0, 0, 1000, 0, 0, 0, 0, 0, 100, 0, 65],
        fill: true,
        backgroundColor: '#b7b7b733',
        borderColor: '#742774',
      },
    ],
  };

  return <Line data={data} />;
};
