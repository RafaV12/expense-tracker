import React from 'react';
import ArrowDownIcon from './ArrowDownIcon';
import ArrowUpIcon from './ArrowUpIcon';

type ButtonProps = {
  text: string;
  arrowDirection: string;
};

const Button = ({ text, arrowDirection }: ButtonProps) => {
  return (
    <button className="px-4 py-1.5 w-[48%] flex items-center justify-center bg-zinc-700 rounded-2xl text-slate-100">
      {arrowDirection === 'up' ? <ArrowUpIcon /> : <ArrowDownIcon />}
      <span className="ml-1.5">{text}</span>
    </button>
  );
};

export default Button;
