import React, { useState, useEffect } from 'react';

import Balance from './components/Balance';
import Button from '../../components/Button';
import BalanceHistory from './components/BalanceHistory';
import MonthSelection from './components/MonthSelection';
import Transactions from './components/Transactions';
import AddTxForm from './components/AddTxForm';
import EditTxForm from './components/EditTxForm';
import { Tx } from '../../types';
import { useAppContext } from '../../context/AppContext';

const Dashboard = () => {
  const { getBalances } = useAppContext();
  const [showAddTxForm, setShowAddTxForm] = useState(false);
  const [showEditTxForm, setShowEditTxForm] = useState(false);
  const [txToEdit, setTxToEdit] = useState<Tx>();

  const displayAddTxForm = (): void => {
    setShowAddTxForm(!showAddTxForm);
  };

  const hideAddTxForm = (): void => {
    setShowAddTxForm(false);
  };

  const openEditTxForm = (txData: Tx): void => {
    // We want to get the txData to let the user know which transaction they are editing.
    setTxToEdit(txData);
    setShowEditTxForm(true);
  };

  useEffect(() => {
    getBalances();
  }, []);

  return (
    <div className="relative px-4 pt-[4.3rem] pb-8 min-h-screen flex flex-col items-center bg-black bg-opacity-60 md:px-14 lg:pt-20">
      <main className="container flex flex-col items-center lg:flex-row lg:justify-between xl:px-14">
        {/* First column */}
        <div className="w-full flex flex-col items-center md:w-3/4 lg:w-2/4 xl:w-5/12">
          <Balance />

          {/* Add TX button  */}
          <Button icon="plus" text="Add transaction" textColor="text-slate-100" bgColor="bg-zinc-700" action={displayAddTxForm} />

          <BalanceHistory />

          <MonthSelection />
        </div>

        {/* Second column */}
        <Transactions openForm={openEditTxForm} />
      </main>

      {showAddTxForm && <AddTxForm closeForm={hideAddTxForm} />}
      {showEditTxForm && <EditTxForm txData={txToEdit} closeForm={() => setShowEditTxForm(false)} />}
    </div>
  );
};

export default Dashboard;
