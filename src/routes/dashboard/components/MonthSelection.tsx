import React from 'react';

type MonthSelectionProps = {
  setMonth: (month: string) => void;
};

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MonthSelection = ({ setMonth }: MonthSelectionProps) => {
  return (
    <div className="pb-4 pt-2 mb-6 w-full overflow-x-auto text-zinc-400 border-t-2 border-zinc-800">
      <ul className="w-full flex items-center">
        {months.map((month, index) => (
          <li
            key={index}
            onClick={() => setMonth(month)}
            className="px-3 py-0.5 mr-3.5 bg-zinc-700 text-white rounded-xl text-sm cursor-pointer transition duration-150 ease-in-out hover:bg-zinc-800 hover:text-zinc-300"
          >
            {month.slice(0, 3)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthSelection;
