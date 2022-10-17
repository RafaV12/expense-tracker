import React from 'react';
import ArrowDownIcon from './Icons/ArrowDownIcon';
import ArrowUpIcon from './Icons/ArrowUpIcon';

type ButtonProps = {
  text: string;
  operation: string;
  action: () => void;
};

const Button = ({ text, operation, action }: ButtonProps) => {
  return (
    <button onClick={action} className="px-4 py-1.5 w-[48%] flex items-center justify-center bg-zinc-700 rounded-2xl text-slate-100">
      {operation === 'expense' ? <ArrowUpIcon /> : <ArrowDownIcon />}
      <span className="ml-1.5">{text}</span>
    </button>
  );
};

export default Button;
