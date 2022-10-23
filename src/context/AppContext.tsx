import React, { createContext, useContext, useState, useEffect } from 'react';

import { FormValues } from '../types/index';
import { Tx } from '../types/index';
import { IUser } from '../types/index';

type AppContextProps = {
  children: React.ReactNode;
};

type Context = {
  user: IUser | null;
  transactions: Tx[];
  loading: boolean;
  error: string | boolean;
  loginUser: (userValues: FormValues) => void;
  registerUser: (userValues: FormValues) => void;
  getAllTxs: () => void;
  createTx: (txValues: Tx) => void;
};

const AppContext = createContext<Context | null>(null);

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [transactions, setTransactions] = useState<Tx[]>([]);
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
      const data = await response.json();
      setLoading(false);
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error: any) {
      setLoading(false);
      // Destructure error message from API response
      let { message } = JSON.parse(error.message);
      setError(message);
    }
  };

  const createTx = async (txValues: Tx) => {
    // Check if Tx's property 'type' is income or expense, if it's an expense, change amount to negative
    if (txValues.type === 'Expense') {
      txValues.amount *= -1;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/v1/user/create-tx', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(txValues),
      });
      if (!response.ok) {
        const text = await response.text();
        throw Error(text);
      }
      const allTransactions = await response.json();
      setLoading(false);
      setTransactions([...allTransactions]);
    } catch (error: any) {
      // Destructure error message from API response
      let { message } = JSON.parse(error.message);
      setError(message);
    }
  };

  const getAllTxs = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/v1/user/get-transactions', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user!.userId }),
      });
      if (!response.ok) {
        const text = await response.text();
        throw Error(text);
      }
      const allTransactions = await response.json();
      setLoading(false);
      setTransactions(allTransactions);
    } catch (error: any) {
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

  return (
    <AppContext.Provider value={{ user, transactions, loading, error, loginUser, registerUser, createTx, getAllTxs }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error('AppContext must be called from within the AppContextProvider');

  return context;
};
