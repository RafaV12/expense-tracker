import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen">
      <header className="px-4 py-2 absolute top-0 container flex items-center justify-between">
        <img className="w-8 h-9" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Parallel_Finance_logo.png" alt="" />
        <nav className="text-white">
          {/* <NavLink to="/dashboard">
            Dashboard
          </NavLink> */}
          <NavLink to="/login" className="px-4 py-1.5 mr-3 text-sm  text-white border-2 border-zinc-600 rounded-md">
            Log in
          </NavLink>
          <NavLink to="/register" className="px-3 py-2 text-sm text-white bg-zinc-600 rounded-md">
            Register
          </NavLink>
        </nav>
      </header>

      {/* Landing */}
      <main className="h-screen container flex flex-col items-center justify-center">
        <div className="-mt-28 w-3/4 flex flex-col items-center text-center">
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
