import { useState } from 'react';

import { Link } from 'react-router-dom';

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
    <div className="relative px-4 py-14 min-h-screen bg-black">
      <header className="absolute left-0 top-0 px-4 py-2 container">
        {/* Logo */}
        <Link to={'/'}>
          <img className="w-8 h-9" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Parallel_Finance_logo.png" alt="" />
        </Link>
      </header>

      <Balance />

      {showAddTxForm && <AddTxForm closeForm={hideAddTxForm} />}

      {/* CTA buttons  */}
      <div className="mb-8 w-full flex items-center justify-between">
        <Button text="Add income" operation="income" action={displayAddTxForm} />
        <Button text="Add expense" operation="expense" action={displayAddTxForm} />
      </div>

      <BalanceHistory />

      <Transactions />
    </div>
  );
};

export default Dashboard;
