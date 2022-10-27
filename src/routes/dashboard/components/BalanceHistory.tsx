import React from 'react';

import { ChartLine } from './ChartLine';

const BalanceHistory = () => {
  return (
    <div className="mt-6 w-full flex flex-col bg-black">
      <p className="mb-2 text-white">Balance History</p>
      <ChartLine />
    </div>
  );
};

export default BalanceHistory;
