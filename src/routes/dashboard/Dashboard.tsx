import { useState } from 'react';

import Balance from './components/Balance';
import BalanceHistory from './components/BalanceHistory';
import Transactions from './components/Transactions';
import AddTxForm from './components/AddTxForm';
import Button from '../../components/Button';

const Dashboard = () => {
  const [showAddTxForm, setShowAddTxForm] = useState(false);

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
        </div>

        {/* Second column */}
        <Transactions />
      </main>

      {showAddTxForm && <AddTxForm closeForm={hideAddTxForm} />}
    </div>
  );
};

export default Dashboard;
