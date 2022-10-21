import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      {/* Landing */}
      <main className="h-screen container flex flex-col items-center justify-center">
        <div className="w-3/4 flex flex-col items-center text-center lg:-mt-10">
          <h1 className="mb-4 text-white font-bold text-4xl">
            Your everyday <span className="text-purple-600">budget watcher</span>
          </h1>
          <p className="mb-4 text-zinc-300">Easy to use, easy to budget.</p>

          <div className="flex items-center">
            <Link to={'/dashboard'} className="px-4 py-2 text-white bg-purple-600 rounded-md">
              Get started
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
