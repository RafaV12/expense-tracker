import React from 'react';

import addTxImage from './images/add-tx.png';
import editTxImage from './images/edit-tx.png';
import selectMonthsImg from './images/select-months.png';
import showBalanceImg from './images/show-balance.png';

const HowToUse = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      <div className="pt-20 pb-12 px-4 container flex flex-col items-center md:w-11/12 lg:flex-row lg:justify-between">
        {/* First column */}
        <div className="w-full flex flex-col items-center lg:ml-7 lg:w-2/5 lg:-mt-3">
          <div className="flex flex-col">
            <h2 className="mb-2 text-lg">How to add a transaction</h2>
            <p className="text-zinc-300">
              To add a transaction all you have to do is click on the button below your current balance section. A form will show up and you
              will need to input the information asked there (i.e: type of transaction, date, description and amount) <br />
              Here's what the button looks like:
            </p>
            <img className="mt-2 w-56 h-16" src={addTxImage} alt="" />
          </div>

          <div className="mt-7">
            <h2 className="mb-2 text-lg">How to edit a transaction</h2>
            <p className="text-zinc-300">
              To edit a transaction you need to go to the month where you created said transaction and click on it. It will prompt a form
              where you'll be able to edit any field you had previously filled.
            </p>
            <img src={editTxImage} alt="" />
          </div>
        </div>

        {/* Second column */}
        <div className="mt-7 lg:mt-0 lg:mr-14 lg:w-2/5">
          <div>
            <h2 className="mb-2 text-lg">How to see your monthly balance</h2>
            <p className="text-zinc-300">
              To see your monthly balance, hover your mouse over the chart on the month you wish to check. It will show you the entire
              month's balance.
            </p>
            <img className="mt-3 w-full" src={showBalanceImg} alt="" />
          </div>

          <div className="mt-7">
            <h2 className="mb-2 text-lg">How to select a month</h2>
            <p className="text-zinc-300">
              To select a month, just click on any of the buttons containing the shortened month names.
              <br />
              Here's what the buttons look like:
            </p>
            <img className="mt-3 w-full" src={selectMonthsImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
