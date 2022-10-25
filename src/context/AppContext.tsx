import React, { createContext, useContext, useState, useEffect } from 'react';

import { FormValues } from '../types/index';
import { Tx } from '../types/index';
import { IUser } from '../types/index';

type AppContextProps = {
  children: React.ReactNode;
};

type Context = {
  user: IUser | null | undefined;
  transactions: Tx[];
  loading: boolean;
  error: string | boolean;
  successMsg: boolean;
  loginUser: (userValues: FormValues) => void;
  registerUser: (userValues: FormValues) => void;
  getAllTxs: () => void;
  createTx: (txValues: Tx) => void;
};

const AppContext = createContext<Context | null>(null);

export const AppContextProvider = ({ children }: AppContextProps) => {
  // User changes to either null (on auth failed) or IUser object (on auth success)
  const [user, setUser] = useState<IUser | null | undefined>(undefined);
  const [transactions, setTransactions] = useState<Tx[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    // Close error/success message after 2 seconds
    if (error) {
      setTimeout(() => setError(false), 2000);
    }
    if (successMsg) {
      setTimeout(() => setSuccessMsg(false), 2000);
    }
  }, [error, successMsg]);

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

    const normalizedTx = {
      ...txValues,
      date: new Date(txValues.date).toDateString(),
    };

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/v1/user/create-tx', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(normalizedTx),
      });
      if (!response.ok) {
        const text = await response.text();
        throw Error(text);
      }
      getAllTxs();
      setLoading(false);
      setSuccessMsg(true);
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

  const persistUser = () => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      setUser(JSON.parse(userJson));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    persistUser();
  }, []);

  return (
    <AppContext.Provider value={{ user, transactions, loading, error, successMsg, loginUser, registerUser, createTx, getAllTxs }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error('AppContext must be called from within the AppContextProvider');

  return context;
};
