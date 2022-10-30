import React, { createContext, useContext, useState, useEffect } from 'react';

import { FormValues } from '../types/index';
import { Tx } from '../types/index';

type AppContextProps = {
  children: React.ReactNode;
};

type Context = {
  authToken: string | null | undefined;
  month: string;
  transactions: Tx[];
  balances: number[];
  loading: boolean;
  error: string | false;
  successMsg: boolean;
  setMonthTo: (month: string) => void;
  loginUser: (userValues: FormValues) => void;
  logout: () => void;
  registerUser: (userValues: FormValues) => void;
  createTx: (txValues: Tx) => void;
  editTx: (txValues: Tx) => void;
  deleteTx: (_id: Tx['_id']) => void;
  getAllTxFrom: (month: string) => void;
  getBalances: () => void;
};

const AppContext = createContext<Context | null>(null);

export const AppContextProvider = ({ children }: AppContextProps) => {
  // Auth token changes to either null (on auth failed) or string (on auth success)
  const [authToken, setAuthToken] = useState<string | null | undefined>(undefined);
  const [month, setMonth] = useState('January');
  const [transactions, setTransactions] = useState<Tx[]>([]);
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | false>(false);
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

  const setMonthTo = (month: string) => {
    setMonth(month);
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
        setLoading(false);
        setError(text);
      }
      const { token } = await response.json();
      setAuthToken(token);
      localStorage.setItem('token', JSON.stringify(token));
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      // Destructure error message from API response
      let { message } = JSON.parse(error.message);
      setError(message);
    }
  };

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
        setLoading(false);
        setError(text);
      }
      const { token } = await response.json();
      setAuthToken(token);
      localStorage.setItem('token', JSON.stringify(token));
      setLoading(false);
    } catch (error: any) {
      let { message } = JSON.parse(error.message);
      setLoading(false);
      setError(message);
    }
  };

  const createTx = async (txValues: Tx) => {
    // Check if Tx's property 'type' is income or expense, if it's an expense, change amount to negative
    if (txValues.type === 'Expense') {
      txValues.amount *= -1;
    }

    // Get the month name to set 'month' state after creating the tx
    function getMonthName() {
      const date = new Date(txValues.date);
      return date.toLocaleString('en-US', { month: 'long' });
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
          'x-auth-token': `${authToken}`,
        },
        body: JSON.stringify(normalizedTx),
      });
      if (!response.ok) {
        const text = await response.text();
        setLoading(false);
        setError(text);
      }
      setLoading(false);
      getBalances();
      // Set month to whatever the transaction's month is, showing the user the updated transactions array.
      setMonth(getMonthName());
      setSuccessMsg(true);
    } catch (error: any) {
      // Destructure error message from API response
      let { message } = JSON.parse(error.message);
      setLoading(false);
      setError(message);
    }
  };

  const editTx = async (txValues: Tx) => {
    const normalizedTx = {
      ...txValues,
      date: new Date(txValues.date).toDateString(),
    };

    console.log(normalizedTx);
  };

  const deleteTx = async (txId: Tx['_id']) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/v1/user/transaction/${txId}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${authToken}`,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        setLoading(false);
        setError(text);
      }
      getBalances();
      getAllTxFrom(month);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const getAllTxFrom = async (month: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/v1/user/get-transactions/${month}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${authToken}`,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        setLoading(false);
        setError(text);
      }
      const data = await response.json();
      setLoading(false);
      setTransactions(data);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const getBalances = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/v1/user/get-balances`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${authToken}`,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        setLoading(false);
        setError(text);
      }
      const data = await response.json();
      setLoading(false);
      setBalances(data);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const persistUser = () => {
    const tokenJson = localStorage.getItem('token');
    if (tokenJson) {
      setAuthToken(JSON.parse(tokenJson));
    } else {
      setAuthToken(null);
    }
  };

  useEffect(() => {
    persistUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        authToken,
        month,
        transactions,
        balances,
        loading,
        error,
        successMsg,
        setMonthTo,
        loginUser,
        logout,
        registerUser,
        createTx,
        editTx,
        deleteTx,
        getAllTxFrom,
        getBalances,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error('AppContext must be called from within the AppContextProvider');

  return context;
};
