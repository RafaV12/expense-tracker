import React, { useState } from 'react';

import { Tx } from '../../types';
import { Month } from '../../types';

import Balance from './components/Balance';
import Button from '../../components/Button';
import BalanceHistory from './components/BalanceHistory';
import MonthSelection from './components/MonthSelection';
import Transactions from './components/Transactions';
import AddTxForm from './components/AddTxForm';

const Dashboard = () => {
  const [showAddTxForm, setShowAddTxForm] = useState(false);
  const [month, setMonth] = useState<Month>({
    name: 'January',
    number: 1,
  });

  function displayAddTxForm(): void {
    setShowAddTxForm(!showAddTxForm);
  }

  function hideAddTxForm(): void {
    setShowAddTxForm(false);
  }

  return (
    <div className="relative px-4 py-16 min-h-screen flex flex-col items-center bg-black md:px-14 lg:justify-center">
      <main className="container flex flex-col items-center lg:flex-row lg:justify-between xl:px-14">
        {/* First column */}
        <div className="w-full flex flex-col items-center md:w-3/4 lg:w-2/4 xl:w-5/12">
          <Balance />

          {/* Add TX button  */}
          <Button icon="plus" text="Add transaction" textColor="text-slate-100" bgColor="bg-zinc-700" action={displayAddTxForm} />

          <BalanceHistory />

          <MonthSelection setMonth={setMonth} />
        </div>

        {/* Second column */}
        <Transactions month={month} />
      </main>

      {showAddTxForm && <AddTxForm closeForm={hideAddTxForm} />}
    </div>
  );
};

export default Dashboard;
