import React from 'react';

type EyeIconProps = {
  showBalance: () => void;
};

const EyeIcon = ({ showBalance }: EyeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-eye cursor-pointer transition duration-150 ease-in-out hover:text-zinc-400"
      onClick={showBalance}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
};

export default EyeIcon;
