import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import { useAppContext } from '../../../context/AppContext';

export const ChartLine = () => {
  const { balances } = useAppContext();

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Balance',
        data: balances,
        fill: true,
        backgroundColor: '#b7b7b733',
        borderColor: '#742774',
      },
    ],
  };

  return <Line data={data} />;
};
