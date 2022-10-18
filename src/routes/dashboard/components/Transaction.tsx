import React from 'react';

type TransactionProps = {
  description: string;
  date: string;
  amount: number;
};

const Transaction = ({ description, date, amount }: TransactionProps) => {
  return (
    <li className="py-2 flex items-center justify-between text-white border-b border-zinc-600">
      <div className="w-full flex flex-col">
        <p className="w-4/5">{description}</p>
        <p className="w-4/5 text-sm text-zinc-400">{date}</p>
      </div>
      <p>-${amount}</p>
    </li>
  );
};

export default Transaction;
