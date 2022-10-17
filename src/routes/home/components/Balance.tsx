import { useState } from 'react';

import EditIcon from '../../../components/Icons/EditIcon';
import EyeOffIcon from '../../../components/Icons/EyeOffIcon';
import EyeIcon from '../../../components/Icons/EyeIcon';

const Balance = () => {
  const [balance, setBalance] = useState(12000);
  const [showBalance, setShowBalance] = useState(true);

  function hideBalance(): void {
    setShowBalance(false);
  }

  function displayBalance(): void {
    setShowBalance(true);
  }

  return (
    <div className="relative p-4 mb-4 h-36 w-full rounded-xl bg-cover bg-center bg-no-repeat bg-[url('https://media0.giphy.com/media/U2JHoU0IMyxUk9HEh1/giphy.gif?cid=ecf05e47hbllzqmsjth565yd4v87bggi4w68ah683byruzo9&rid=giphy.gif&ct=g')]">
      <div className="absolute right-3 top-3 w-12 flex justify-between items-center text-white">
        {showBalance ? <EyeOffIcon hideBalance={hideBalance} /> : <EyeIcon showBalance={displayBalance} />}
        <EditIcon />
      </div>
      <p className="mb-1 text-slate-50">Balance</p>
      {showBalance ? (
        <span className="text-white font-semibold text-4xl">${Intl.NumberFormat('en-US').format(balance)}</span>
      ) : (
        <span className="text-white font-semibold text-4xl">*******</span>
      )}
      <p className="mt-4 text-slate-50">{new Date().toDateString()}</p>
    </div>
  );
};

export default Balance;
