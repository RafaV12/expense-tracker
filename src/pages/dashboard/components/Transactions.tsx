import { useEffect, useState } from 'react';

import { useAppContext } from '../../../context/AppContext';

import Transaction from './Transaction';
import Spinner from '../../../components/Spinner';
import { Tx } from '../../../utils/types';

type TransactionsProps = {
  openForm: (txData: Tx) => void;
};

const Transactions = ({ openForm }: TransactionsProps) => {
  const { month, transactions, getAllTxFrom, loading, error } = useAppContext();

  useEffect(() => {
    getAllTxFrom(month);
  }, [month]);

  if (error) {
    return <>Error...</>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="py-4 w-full flex flex-col border border-zinc-800 rounded-lg">
      <div className="mb-1 flex items-center justify-between">
        <p className="ml-4 text-zinc-200 text-lg">{month}</p>
      </div>

      <div className="min-h-[10rem] max-h-[36rem] overflow-y-auto lg:max-h-[30rem] lg:min-h-[30rem]">
        <ul>
          {transactions.length > 0 ? (
            transactions.map((tx) => <Transaction openForm={() => openForm(tx)} key={tx._id} txData={tx} />)
          ) : (
            <p className="mt-4 ml-4 text-zinc-200">No transactions yet for this month!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;

