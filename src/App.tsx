import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppContextProvider } from './context/AppContext';

import Header from './components/Header';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './routes/dashboard/Dashboard';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import Register from './routes/register/Register';

const App = () => {
  return (
    <AppContextProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </AppContextProvider>
  );
};

export default App;
