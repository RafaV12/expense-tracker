import React from 'react';

type TransactionProps = {
  description: string;
  date: string;
  amount: number;
};

let dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Transaction = ({ description, date, amount }: TransactionProps) => {
  return (
    <li className="py-2 flex items-center justify-between text-white border-b border-zinc-600">
      <div className="w-3/4 flex flex-col">
        <p className="w-full">{description}</p>
        <p className="w-full text-sm text-zinc-400">{date}</p>
      </div>
      <p className="w-1/4 text-end">{dollarUS.format(amount)}</p>
    </li>
  );
};

export default Transaction;
