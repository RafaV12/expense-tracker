import React, { createContext, useContext, useState, useEffect } from 'react';

import { FormValues } from '../types/index';
import { IUser } from '../types/index';

type AppContextProps = {
  children: React.ReactNode;
};

type Context = {
  user?: IUser;
  loading: boolean;
  error: string | boolean;
  loginUser: (userValues: FormValues) => void;
  registerUser: (userValues: FormValues) => void;
};

const AppContext = createContext<Context | null>(null);

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 2000);
    }
  }, [error]);

  const loginUser = async (userValues: FormValues) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/v1/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userValues),
      });
      if (!response.ok) {
        const text = await response.text();
        throw Error(text);
      }
      setLoading(false);
      const data = await response.json();
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error: any) {
      setLoading(false);
      // Destructure error message from API response
      let { message } = JSON.parse(error.message);
      setError(message);
    }
  };

  const registerUser = async (userValues: FormValues) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/v1/auth/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userValues),
      });
      if (!response.ok) {
        const text = await response.text();
        throw Error(text);
      }
      setLoading(false);
      const data = await response.json();
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error: any) {
      setLoading(false);
      // Destructure error message from API response
      let { message } = JSON.parse(error.message);
      setError(message);
    }
  };

  useEffect(() => {
    persistUser();
  }, []);

  const persistUser = () => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
  };

  return <AppContext.Provider value={{ user, loading, error, loginUser, registerUser }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error('AppContext must be called from within the AppContextProvider');

  return context;
};
