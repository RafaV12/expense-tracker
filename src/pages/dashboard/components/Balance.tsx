import { useState } from 'react';

import { useAppContext } from '../../../context/AppContext';

import EyeIcon from '../../../components/Icons/EyeIcon';
import EyeOffIcon from '../../../components/Icons/EyeOffIcon';

const Balance = () => {
  const { balances } = useAppContext();
  const [showBalance, setShowBalance] = useState(true);
  // Sum all montlhy balances to get the year's balance, then format it
  const balance = Intl.NumberFormat('en-US').format(balances.reduce((partialSum, a) => partialSum + a, 0));

  function hideBalance(): void {
    setShowBalance(false);
  }

  function displayBalance(): void {
    setShowBalance(true);
  }

  return (
    <div className="relative p-4 mb-4 h-36 w-full rounded-xl bg-cover bg-center bg-no-repeat bg-[url('https://media0.giphy.com/media/U2JHoU0IMyxUk9HEh1/giphy.gif?cid=ecf05e47hbllzqmsjth565yd4v87bggi4w68ah683byruzo9&rid=giphy.gif&ct=g')]">
      <div className="absolute right-4 top-4 text-white">
        {showBalance ? <EyeOffIcon hideBalance={hideBalance} /> : <EyeIcon showBalance={displayBalance} />}
      </div>
      <p className="mb-1 text-slate-50">Balance</p>
      {showBalance ? (
        <p className="w-full text-white font-semibold text-4xl truncate">${balance}</p>
      ) : (
        <span className="text-white font-semibold text-4xl">*******</span>
      )}
      <p className="mt-4 text-slate-50">{new Date().toDateString()}</p>
    </div>
  );
};

export default Balance;
