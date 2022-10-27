import { useEffect } from 'react';

import { useAppContext } from '../../../context/AppContext';

import Transaction from './Transaction';
import Spinner from '../../../components/Spinner';
import { Tx } from '../../../types';

type TransactionsProps = {
  month: string;
  openForm: (txData: Tx) => void;
};

const Transactions = ({ month, openForm }: TransactionsProps) => {
  const { transactions, getAllTxs, loading, error } = useAppContext();

  useEffect(() => {
    getAllTxs();
  }, []);

  if (error) {
    return <>Error...</>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-full flex flex-col bg-black md:w-3/4 lg:-mt-4 lg:w-2/5">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-zinc-200 text-lg">{month}</p>
      </div>

      <div className="px-1 min-h-[10rem] max-h-[36rem] overflow-y-auto lg:max-h-[30rem] lg:min-h-[30rem]">
        <ul>
          {/*
           Filter the transactions depending on the month selected.
           We slice the date to get the month name (e.g: Oct, Nov, Dec)
          */}
          {transactions.length > 0 ? (
            transactions
              .filter((tx) => tx.date.slice(4, 7) === month.slice(0, 3))
              .map((tx) => <Transaction openForm={() => openForm(tx)} key={tx._id} txData={tx} />)
          ) : (
            <p className="mt-4 text-zinc-200">There are no transactions yet!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
