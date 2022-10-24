import React, { useEffect } from 'react';

import Transaction from './Transaction';
import EditIcon from '../../../components/Icons/EditIcon';
import { useAppContext } from '../../../context/AppContext';

type TransactionsProps = {
  month: string;
};

const Transactions = ({ month }: TransactionsProps) => {
  const { transactions, getAllTxs } = useAppContext();

  useEffect(() => {
    getAllTxs();
  }, []);

  return (
    <div className="w-full flex flex-col md:w-3/4 lg:w-2/5">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-zinc-200 text-lg">{month}</p>

        <div className="mt-0.5 flex items-center text-zinc-200 text-sm">
          <EditIcon />
          <p className="ml-2">Init. Balance: $2000</p>
        </div>
      </div>

      <div className="px-1 min-h-[10rem] max-h-[36rem] overflow-y-auto lg:max-h-[30rem] lg:min-h-[30rem] ">
        <ul>
          {/*
           Filter the transactions depending on the month selected.
           We slice the date to get the month name (e.g: Oct, Nov, Dec)
          */}
          {transactions.length > 0 ? (
            transactions
              .filter((tx) => tx.date.slice(4, 7) === month.slice(0, 3))
              .map((tx) => <Transaction key={tx._id} description={tx.description} date={tx.date} amount={tx.amount} />)
          ) : (
            <p className="mt-4 text-zinc-200">There are no transactions yet!</p>
          )}
        </ul>
      </div>

      <p className="mt-4 self-end text-zinc-200 text-sm">Final Balance: $1000</p>
    </div>
  );
};

export default Transactions;
