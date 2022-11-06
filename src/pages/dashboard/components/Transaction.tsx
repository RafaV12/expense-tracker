import React from 'react';
import { Tx } from '../../../utils/types';

type TransactionProps = {
  txData: Tx;
  openForm: (txData: Tx) => void;
};

let dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Transaction = ({ openForm, txData }: TransactionProps) => {
  return (
    <li
      onClick={() => openForm(txData)}
      className="py-2 px-4 flex items-center justify-between text-white border-b border-zinc-600 cursor-pointer transition ease-in-out hover:bg-zinc-900"
    >
      <div className="w-3/4 flex flex-col">
        <p className="w-full truncate">{txData.description}</p>
        <p className="w-full text-sm text-zinc-400">{txData.date}</p>
      </div>
      <p className="w-1/4 text-end truncate">{dollarUS.format(txData.amount)}</p>
    </li>
  );
};

export default Transaction;

