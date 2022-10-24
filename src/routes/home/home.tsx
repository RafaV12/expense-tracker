import React from 'react';
import { Link } from 'react-router-dom';

import Landing from './components/Landing';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="min-h-screen w-full flex flex-col">
        <Landing />
      </main>
    </div>
  );
};

export default Home;
