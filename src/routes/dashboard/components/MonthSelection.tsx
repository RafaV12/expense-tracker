import React from 'react';

import { Month } from '../../../types/index';

type MonthSelectionProps = {
  setMonth: (month: Month) => void;
};

const months: Month[] = [
  {
    name: 'January',
    number: 1,
  },
  {
    name: 'February',
    number: 2,
  },
  {
    name: 'March',
    number: 3,
  },
  {
    name: 'April',
    number: 4,
  },
  {
    name: 'May',
    number: 5,
  },
  {
    name: 'June',
    number: 6,
  },
  {
    name: 'July',
    number: 7,
  },
  {
    name: 'August',
    number: 8,
  },
  {
    name: 'September',
    number: 9,
  },
  {
    name: 'October',
    number: 10,
  },
  {
    name: 'November',
    number: 11,
  },
  {
    name: 'December',
    number: 12,
  },
];

const MonthSelection = ({ setMonth }: MonthSelectionProps) => {
  return (
    <div className="pb-4 pt-2 mb-6 w-full overflow-x-auto text-zinc-400 border-t-2 border-zinc-800">
      <ul className="w-full flex items-center">
        {months.map((month) => (
          <li
            key={month.number}
            onClick={() =>
              setMonth({
                name: month.name,
                number: month.number,
              })
            }
            className="px-3 py-0.5 mr-3.5 bg-zinc-700 text-white rounded-xl text-sm cursor-pointer"
          >
            {month.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthSelection;
