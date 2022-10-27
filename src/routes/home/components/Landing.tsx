import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center lg:px-14 lg:flex-row lg:justify-between xl:px-20">
      {/* First column */}
      <div className="-mt-10 w-3/4 flex flex-col lg:w-2/4 xl:w-2/5">
        <h1 className="mb-4 text-white font-extrabold text-4xl">Cash flow made easy.</h1>
        <p className="mb-4 text-zinc-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti possimus, ex iusto dolore velit.
        </p>

        <div className="flex">
          <Link
            to={'/dashboard'}
            className="px-4 py-2 mr-4 flex items-center text-white bg-purple-600 rounded-md transition duration-150 ease-in-out hover:bg-purple-800 hover:text-zinc-200"
          >
            Get started <span className="mt-0.5 ml-1.5">&gt;</span>
          </Link>
          <Link to={'/how-to-use'} className="py-2 flex items-center text-white font-semibold hover:text-zinc-200">
            How to use <span className="mt-0.5 ml-1.5">&gt;</span>
          </Link>
        </div>
      </div>

      {/* Second column (not shown on phones) */}
      <div className="hidden lg:flex">
        <div className="-mt-12 mr-4">
          <img
            className="mb-3 w-48 h-48 rounded-lg xl:w-56 xl:h-56"
            src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="w-48 h-48 rounded-lg xl:w-56 xl:h-56"
            src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="-mb-12">
          <img
            className="mb-3 w-48 h-48 rounded-lg xl:w-56 xl:h-56"
            src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="w-48 h-48 rounded-lg xl:w-56 xl:h-56"
            src="https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
