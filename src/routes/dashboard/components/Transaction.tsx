import React from 'react';
import { Tx } from '../../../types';

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
    <li onClick={() => openForm(txData)} className="py-2 flex items-center justify-between text-white border-b border-zinc-600">
      <div className="w-3/4 flex flex-col">
        <p className="w-full">{txData.description}</p>
        <p className="w-full text-sm text-zinc-400">{txData.date}</p>
      </div>
      <p className="w-1/4 text-end">{dollarUS.format(txData.amount)}</p>
    </li>
  );
};

export default Transaction;
