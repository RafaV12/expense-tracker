import React from 'react';

import { Landing } from './components';

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

