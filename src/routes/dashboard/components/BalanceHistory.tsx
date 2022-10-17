const BalanceHistory = () => {
  return (
    <div className="mb-6">
      <p className="mb-2 text-white">Balance History</p>
      {/* Chart */}
      <img className="mb-4 h-48" src="https://www.pngall.com/wp-content/uploads/10/Line-Chart-Vector-PNG-Cutout.png" alt="" />
      {/* Month Selection */}
      <div className="pb-4 pt-2 w-full overflow-x-auto text-zinc-400 border-t-2 border-zinc-800">
        <ul className="w-full flex items-center">
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 text-white rounded-xl text-sm">Jan</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">Feb</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">Mar</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">Apr</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">May</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">Jun</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">Jul</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">Aug</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">Sep</li>
          <li className="px-3 py-0.5 mr-3.5 bg-zinc-700 rounded-xl text-sm">Oct</li>
          <li className="px-3 py-0.5 bg-zinc-700 rounded-xl text-sm">Dec</li>
        </ul>
      </div>
    </div>
  );
};

export default BalanceHistory;
