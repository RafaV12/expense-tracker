import { useState } from 'react';

import Balance from './components/Balance';
import BalanceHistory from './components/BalanceHistory';
import Transactions from './components/Transactions';
import AddTxForm from './components/AddTxForm';
import Button from '../../components/Button';

const Home = () => {
  const [showAddTxForm, setShowAddTxForm] = useState(false);

  function displayAddTxForm(): void {
    setShowAddTxForm(!showAddTxForm);
  }

  function hideAddTxForm(): void {
    setShowAddTxForm(false);
  }

  return (
    <div className="relative px-4 py-12 min-h-screen bg-black">
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

export default Home;
