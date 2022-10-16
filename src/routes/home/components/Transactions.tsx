import Transaction from './Transaction';
import { Tx } from '../../../types';

const transactionsData: Tx[] = [
  {
    id: 1,
    description: 'Electricity Bill',
    date: new Date(),
    amount: 100.0,
  },
  {
    id: 2,
    description: 'Electricity Bill',
    date: new Date(),
    amount: 100.0,
  },
  {
    id: 3,
    description: 'Electricity Bill',
    date: new Date(),
    amount: 100.0,
  },
];

const Transactions = () => {
  return (
    <div className="w-full">
      <p className="mb-1 text-zinc-200 text-lg">January</p>
      {transactionsData.map((tx) => (
        <Transaction key={tx.id} description={tx.description} date={tx.date} amount={tx.amount} />
      ))}
    </div>
  );
};

export default Transactions;
