import txsData from '../../../txsData';

import Transaction from './Transaction';
import EditIcon from '../../../components/Icons/EditIcon';

const Transactions = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-zinc-200 text-lg">January</p>

        <div className="mt-0.5 flex items-center text-zinc-200 text-sm">
          <EditIcon />
          <p className="ml-2">Init. Balance: $2000</p>
        </div>
      </div>

      <div className="px-2 max-h-[36rem] overflow-y-auto">
        {txsData.map((tx) => (
          <Transaction key={tx.id} description={tx.description} date={tx.date} amount={tx.amount} />
        ))}
      </div>

      <p className="mt-4 self-end text-zinc-200 text-sm">Final Balance: $1000</p>
    </div>
  );
};

export default Transactions;
