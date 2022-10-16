import Balance from './components/Balance';
import BalanceHistory from './components/BalanceHistory';
import Button from '../../components/Button';
import Transactions from './components/Transactions';

const Home = () => {
  return (
    <div className="px-4 py-12 min-h-screen bg-black">
      <Balance />

      {/* CTA buttons  */}
      <div className="mb-8 w-full flex items-center justify-between">
        <Button text="Add income" arrowDirection="down" />
        <Button text="Add expense" arrowDirection="up" />
      </div>

      <BalanceHistory />

      <Transactions />
    </div>
  );
};

export default Home;
