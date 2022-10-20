import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './routes/dashboard/Dashboard';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import Register from './routes/register/Register';

const App = () => {
  return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
  );
};

export default App;
