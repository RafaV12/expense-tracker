import { useState } from 'react';

import EditIcon from '../components/EditIcon';
import EyeOffIcon from '../components/EyeOffIcon';
import Button from '../components/Button';

const Home = () => {
  const [balance, setBalance] = useState<number>(12000);

  return (
    <div className="px-4 py-12 min-h-screen bg-black">
      {/* Current Balance */}
      <div className="relative p-4 mb-4 h-36 w-full rounded-xl bg-cover bg-center bg-no-repeat bg-[url('https://media0.giphy.com/media/U2JHoU0IMyxUk9HEh1/giphy.gif?cid=ecf05e47hbllzqmsjth565yd4v87bggi4w68ah683byruzo9&rid=giphy.gif&ct=g')]">
        <div className="absolute right-3 top-3 w-12 flex justify-between items-center text-white">
          <EyeOffIcon />
          <EditIcon />
        </div>
        <p className="text-slate-50">Balance</p>
        <span className="text-white font-semibold text-4xl">${Intl.NumberFormat('en-US').format(balance)}</span>
      </div>

      {/* CTA buttons  */}
      <div className="w-full flex items-center justify-between">
        <Button text="Add income" arrowDirection="down" />
        <Button text="Add expense" arrowDirection="up" />
      </div>
    </div>
  );
};

export default Home;
