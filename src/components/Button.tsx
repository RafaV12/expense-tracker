import React from 'react';
import ArrowDownIcon from './Icons/ArrowDownIcon';
import ArrowUpIcon from './Icons/ArrowUpIcon';
import PlusIcon from './Icons/PlusIcon';

type ButtonProps = {
  text: string;
  textColor: string;
  bgColor: string;
  icon: string;
  action: () => void;
};

const Button = ({ text, textColor, bgColor, icon, action }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`px-4 py-1.5 flex items-center justify-center ${bgColor} rounded-2xl ${textColor} transition duration-150 ease-in-out hover:bg-zinc-800 hover:text-zinc-300`}
    >
      {icon === 'plus' && <PlusIcon />}
      <span className="ml-1.5">{text}</span>
    </button>
  );
};

export default Button;
